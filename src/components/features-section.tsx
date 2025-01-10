import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, BarChartIcon as ChartBar, Shield } from 'lucide-react'

const features = [
  {
    title: 'Curriculum Management',
    description: 'Easily manage and track CBC-aligned lesson plans and resources.',
    icon: BookOpen,
  },
  {
    title: 'Stakeholder Collaboration',
    description: 'Foster communication between teachers, students, and parents.',
    icon: Users,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Leverage AI and analytics for predictive modeling and performance tracking.',
    icon: ChartBar,
  },
  {
    title: 'Secure and Scalable',
    description: 'Built with modern technologies to ensure security and scalability.',
    icon: Shield,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

