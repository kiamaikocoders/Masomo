import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import crypto from 'crypto'

// In-memory storage for assessments
const assessments = new Map()

export async function POST(request: Request) {
  try {
    const user = await verifyToken()
    if (!user || user.role !== 'teacher') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, subject, grade, type, description, questions } = body

    const assessmentId = crypto.randomUUID()
    const assessment = {
      id: assessmentId,
      title,
      subject,
      grade: parseInt(grade),
      type,
      description,
      questions,
      teacherId: user.id,
      createdAt: new Date().toISOString(),
    }

    assessments.set(assessmentId, assessment)

    return NextResponse.json(
      { message: 'Assessment created successfully', assessmentId },
      { status: 201 }
    )
  } catch (error) {
    console.error('Assessment creation error:', error)
    return NextResponse.json(
      { message: 'An error occurred while creating the assessment' },
      { status: 500 }
    )
  }
}

