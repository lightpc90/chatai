import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  // Replace this with actual API call to Google Gemini
  const reply = `Echo: ${prompt}`;

  return NextResponse.json({ reply });
}
