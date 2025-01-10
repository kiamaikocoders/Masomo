'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const books: { x: number; y: number; rotation: number; opening: number }[] = []
    const numBooks = 20

    for (let i = 0; i < numBooks; i++) {
      books.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        rotation: Math.random() * Math.PI * 2,
        opening: 0,
      })
    }

    function drawBook(x: number, y: number, rotation: number, opening: number) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Draw book cover
      ctx.fillStyle = '#4a5568'
      ctx.fillRect(-30, -40, 60, 80)

      // Draw book pages
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.moveTo(-30, -40)
      ctx.lineTo(30 * Math.cos(opening), -40)
      ctx.lineTo(30 * Math.cos(opening), 40)
      ctx.lineTo(-30, 40)
      ctx.closePath()
      ctx.fill()

      ctx.restore()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      books.forEach((book) => {
        book.opening = (Math.sin(Date.now() * 0.001 + book.x * 0.1) + 1) * 0.5 * Math.PI
        drawBook(book.x, book.y, book.rotation, book.opening)
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-10"
        width={800}
        height={600}
      />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="text-green-600">Revolutionize Education</span>
          <br />
          <span className="text-gray-600">with Masomo</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Masomo is a comprehensive educational management platform designed for Competency-Based Curriculum (CBC) systems. We simplify school operations, enhance student progress tracking, and provide data-driven insights for better decision-making.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => router.push('/features')}
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

