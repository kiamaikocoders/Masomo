import { NextResponse } from 'next/server'

export async function GET() {
  // In a real application, you would fetch this data from a database
  const studentData = {
    name: 'John Doe',
    admissionNumber: '2023/001',
    class: 'Grade 4',
    curriculum: 'CBC',
  }

  return NextResponse.json(studentData)
}

export const revalidate = 60 // Revalidate this data every 60 seconds

