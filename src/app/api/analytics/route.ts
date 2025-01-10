import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

// Mock data for analytics
const analyticsData = {
  studentPerformance: [
    { subject: 'Math', averageScore: 85 },
    { subject: 'Science', averageScore: 78 },
    { subject: 'English', averageScore: 82 },
    { subject: 'History', averageScore: 76 },
  ],
  attendanceRate: 0.92,
  resourceUtilization: [
    { resource: 'Textbooks', usagePercentage: 75 },
    { resource: 'Online Courses', usagePercentage: 88 },
    { resource: 'Library', usagePercentage: 62 },
    { resource: 'Lab Equipment', usagePercentage: 70 },
  ],
}

export async function GET() {
  try {
    const user = await verifyToken()
    if (!user || (user.role !== 'admin' && user.role !== 'teacher')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    return NextResponse.json(analyticsData)
  } catch (error) {
    console.error('Error fetching analytics data:', error)
    return NextResponse.json(
      { message: 'An error occurred while fetching analytics data' },
      { status: 500 }
    )
  }
}

