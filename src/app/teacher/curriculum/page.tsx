import { NavBar } from '@/components/nav-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'

export default function TeacherCurriculumPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Curriculum Management</h1>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">My Lesson Plans</h2>
          <Button>
            <PlusCircle className="w-5 h-5 mr-2" />
            Create New Lesson Plan
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* This would be populated with actual lesson plan data */}
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Lesson Plan {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Subject: Mathematics</p>
                <p className="text-gray-600 mb-4">Grade: 4</p>
                <Button variant="outline">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}

