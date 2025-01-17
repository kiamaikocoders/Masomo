'use client'

import { Home, Users, GraduationCap, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Teachers', href: '/dashboard/teachers', icon: Users },
  { name: 'Students', href: '/dashboard/students', icon: GraduationCap },
  { name: 'Classes', href: '/dashboard/classes', icon: BookOpen },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 h-screen bg-white border-r">
      <div className="p-4">
        <Link href="/" className="text-2xl font-bold text-green-600">
          Masomo
        </Link>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50',
                pathname === item.href && 'bg-gray-50 text-green-600'
              )}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

