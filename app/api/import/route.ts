import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

import * as XLSX from 'xlsx'

const monthMap: Record<string, string> = {
  'ene.': 'Jan',
  'feb.': 'Feb',
  'mar.': 'Mar',
  'abr.': 'Apr',
  'may.': 'May',
  'jun.': 'Jun',
  'jul.': 'Jul',
  'ago.': 'Aug',
  'sep.': 'Sep',
  'oct.': 'Oct',
  'nov.': 'Nov',
  'dic.': 'Dec',
}

function parseSpanishDate(raw: string): Date {
  let cleaned = raw
    .replace(/^\S+\s/, '')
    .replace('p. m.', 'PM')
    .replace('a. m.', 'AM')
    .replace(',', '')

  for (const [es, en] of Object.entries(monthMap)) {
    cleaned = cleaned.replace(es, en)
  }

  return new Date(cleaned)
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

  const filteredData = data.map((i) => {
    console.log(
      String(i['ID de la órden']),
      i['Fecha de creación orden'],
      parseSpanishDate(i['Fecha de creación orden']),
    )
    return {
      date: parseSpanishDate(i['Fecha de creación orden']),
      order_id: String(i['ID de la órden']),
      payload_id: 'payload',
      net_payout: Math.round(i['Valor Neto'] * 10000),
    }
  })

  // console.log('api route post', filteredData)

  await prisma.report.deleteMany()
  console.log('saving:', filteredData[0].date.toISOString())
  await prisma.report.createMany({ data: filteredData.slice(0, -2) })

  const inspect = await prisma.report.findFirst({
    where: { order_id: '2239265166' },
  })
  console.log('inspc', inspect)
  console.log(`${inspect?.date}`)

  return NextResponse.json({ success: true })
}
