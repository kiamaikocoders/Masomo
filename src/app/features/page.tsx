import { NavBar } from '@/components/nav-bar'
import { FeaturesSection } from '@/components/features-section'

export default function FeaturesPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <h1 className="text-4xl font-bold text-center my-12">Masomo Features</h1>
        <FeaturesSection />
      </main>
    </>
  )
}

