import { NavBar } from '@/components/nav-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, PieChart, LineChart } from 'lucide-react'

const analyticsFeatures = [
  {
    title: 'Performance Tracking',
    description: 'Monitor individual and class-wide academic progress over time.',
    icon: LineChart,
  },
  {
    title: 'Attendance Analysis',
    description: 'Visualize attendance patterns and identify trends.',
    icon: PieChart,
  },
  {
    title: 'Resource Utilization',
    description: 'Analyze the usage and effectiveness of learning materials.',
    icon: BarChart,
  },
]

export default function AnalyticsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Analytics and Insights</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Masomo's powerful analytics tools provide data-driven insights to help educators make informed decisions and improve student outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analyticsFeatures.map((feature, index) => (
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
      </main>
    </>
  )
}

