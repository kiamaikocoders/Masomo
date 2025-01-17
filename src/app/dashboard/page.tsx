import { Banknote, Users, GraduationCap, BookOpen } from 'lucide-react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { StatCard } from '@/components/dashboard/stat-card'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Fees"
              value="Ksh 800.00"
              icon={<Banknote className="h-6 w-6" />}
            />
            <StatCard
              title="Students"
              value="1"
              icon={<GraduationCap className="h-6 w-6" />}
              color="bg-blue-600"
            />
            <StatCard
              title="Teachers"
              value="2"
              icon={<Users className="h-6 w-6" />}
              color="bg-purple-600"
            />
            <StatCard
              title="Classes"
              value="2"
              icon={<BookOpen className="h-6 w-6" />}
              color="bg-orange-600"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

