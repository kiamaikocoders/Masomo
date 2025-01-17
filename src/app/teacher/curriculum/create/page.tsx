'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function CreateLessonPlanPage() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const res = await fetch('/api/curriculum/lesson-plan', {
        method: 'POST',
        body: JSON.stringify({
          title: formData.get('title'),
          subject: formData.get('subject'),
          grade: formData.get('grade'),
          objectives: formData.get('objectives'),
          content: formData.get('content'),
          activities: formData.get('activities'),
          assessment: formData.get('assessment'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()
      
      if (!res.ok) throw new Error(data.message)
      
      router.push('/teacher/curriculum')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-bold">Create New Lesson Plan</h2>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="title">Lesson Title</Label>
              <Input id="title" name="title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade Level</Label>
              <Select name="grade" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a grade" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
                    <SelectItem key={grade} value={grade.toString()}>
                      Grade {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="objectives">Learning Objectives</Label>
              <Textarea id="objectives" name="objectives" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Lesson Content</Label>
              <Textarea id="content" name="content" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="activities">Learning Activities</Label>
              <Textarea id="activities" name="activities" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="assessment">Assessment Methods</Label>
              <Textarea id="assessment" name="assessment" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? 'Creating...' : 'Create Lesson Plan'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

