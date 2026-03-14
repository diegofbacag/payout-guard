import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = request.body
  console.log('api route post', body)
  return NextResponse.json({ success: true })
}
