import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/features', '/curriculum', '/analytics', '/pricing', '/login', '/signup']
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    const user = await verifyToken()
    
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Check role-based access
    const path = request.nextUrl.pathname
    if (
      (path.startsWith('/admin') && user.role !== 'admin') ||
      (path.startsWith('/teacher') && user.role !== 'teacher') ||
      (path.startsWith('/student') && user.role !== 'student')
    ) {
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

