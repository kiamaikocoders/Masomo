'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function NavBar() {
  const router = useRouter()

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600">
              Masomo
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/curriculum" className="text-gray-600 hover:text-gray-900">
              Curriculum
            </Link>
            <Link href="/analytics" className="text-gray-600 hover:text-gray-900">
              Analytics
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => router.push('/auth/signup')}>
              Sign Up
            </Button>
            <Button onClick={() => router.push('/auth/login')}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

