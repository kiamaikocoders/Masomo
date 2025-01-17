import { NavBar } from '@/components/nav-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const curriculumAreas = [
  'Communication and Collaboration',
  'Critical Thinking and Problem Solving',
  'Imagination and Creativity',
  'Citizenship',
  'Digital Literacy',
  'Learning to Learn',
  'Self-efficacy',
]

export default function CurriculumPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Competency-Based Curriculum</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Masomo is designed to support and enhance the implementation of Competency-Based Curriculum (CBC). Our platform aligns with the following core competencies:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculumAreas.map((area, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{area}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Masomo provides tools and resources to develop and assess this competency area.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}

