import { NextResponse } from 'next/server'

import * as XLSX from 'xlsx'

import { parseSpanishDate } from '@/lib/date/parseSpanishDate'
import { prisma } from '@/lib/prisma'

type RappiReportRow = {
  'ID de la órden': string
  'Fecha de creación orden': string
  'Valor Neto': number
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file') as File
  const buffer = await file.arrayBuffer()

  const workbook = XLSX.read(buffer, { type: 'array' })
  const sheetName = workbook.SheetNames[2]
  const sheet = workbook.Sheets[sheetName]
  const data = XLSX.utils.sheet_to_json(sheet, {
    range: 1,
  })

  const rows = data as RappiReportRow[]

  const filteredData = rows.map((i) => {
    return {
      date: parseSpanishDate(i['Fecha de creación orden']),
      order_id: String(i['ID de la órden']),
      payload_id: 'payload',
      net_payout: Math.round(i['Valor Neto'] * 10000),
    }
  })

  await prisma.report.deleteMany()
  await prisma.report.createMany({ data: filteredData.slice(0, -2) })

  return NextResponse.json({ success: true }, { status: 201 })
}
