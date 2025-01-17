import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import crypto from 'crypto'

// In-memory storage for lesson plans
const lessonPlans = new Map()

export async function POST(request: Request) {
  try {
    const user = await verifyToken()
    if (!user || user.role !== 'teacher') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, subject, grade, objectives, content, activities, assessment } = body

    const lessonPlanId = crypto.randomUUID()
    const lessonPlan = {
      id: lessonPlanId,
      title,
      subject,
      grade: parseInt(grade),
      objectives,
      content,
      activities,
      assessment,
      teacherId: user.id,
      createdAt: new Date().toISOString(),
    }

    lessonPlans.set(lessonPlanId, lessonPlan)

    return NextResponse.json(
      { message: 'Lesson plan created successfully', lessonPlanId },
      { status: 201 }
    )
  } catch (error) {
    console.error('Lesson plan creation error:', error)
    return NextResponse.json(
      { message: 'An error occurred while creating the lesson plan' },
      { status: 500 }
    )
  }
}

