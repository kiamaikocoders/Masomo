import { NextResponse } from 'next/server'
import { signToken } from '@/lib/auth'
import { cookies } from 'next/headers'
import { type AuthResponse } from '@/types/user'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // In a real app, validate credentials against database
    // This is a mock implementation
    const user = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'student' as const,
    }

    const token = await signToken(user)
    
    // Set cookie
    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 day
    })

    const response: AuthResponse = {
      user,
      token,
    }

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json(
      { message: 'Authentication failed' },
      { status: 401 }
    )
  }
}

