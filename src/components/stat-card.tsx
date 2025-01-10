import { Card, CardContent } from '@/components/ui/card'

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  color?: string
}

export function StatCard({ title, value, icon, color = 'bg-green-600' }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className={`${color} p-3 rounded-full text-white`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

