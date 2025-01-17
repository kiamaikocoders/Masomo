import { NavBar } from '@/components/nav-bar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Basic',
    price: '$99',
    description: 'Perfect for small schools',
    features: [
      'Up to 500 students',
      'Basic analytics',
      'Email support',
      '5GB storage',
    ],
  },
  {
    name: 'Pro',
    price: '$299',
    description: 'Ideal for medium-sized institutions',
    features: [
      'Up to 2000 students',
      'Advanced analytics',
      'Priority email & phone support',
      '20GB storage',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large educational networks',
    features: [
      'Unlimited students',
      'AI-powered insights',
      '24/7 dedicated support',
      'Unlimited storage',
      'Custom development',
      'On-premise deployment option',
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Choose the plan that best fits your institution's needs and scale as you grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="text-4xl font-bold mt-4">{plan.price}</p>
                <p className="text-sm text-gray-500">per month</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardContent className="mt-auto">
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}

