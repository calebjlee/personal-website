import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  // Here you would typically send an email or save to a database
  console.log('Received message:', { name, email, message });

  return NextResponse.json({ message: 'Message sent successfully' });
}