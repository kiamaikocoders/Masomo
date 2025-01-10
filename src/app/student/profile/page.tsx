'use client'

import { useState, useEffect } from 'react'
import { PhotoUpload } from '@/components/profile/photo-upload'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface StudentData {
  name: string
  admissionNumber: string
  class: string
  curriculum: string
}

export default function StudentProfile() {
  const [profileImage, setProfileImage] = useState('/placeholder.svg')
  const [studentData, setStudentData] = useState<StudentData | null>(null)

  useEffect(() => {
    async function fetchStudentData() {
      const response = await fetch('/api/student/profile')
      const data = await response.json()
      setStudentData(data)
    }
    fetchStudentData()
  }, [])

  const handleFileUpload = async (file: File) => {
    // Here you would typically upload the file to your server or a cloud storage service
    // For this example, we'll just create a local object URL
    const objectUrl = URL.createObjectURL(file)
    setProfileImage(objectUrl)
    console.log('Uploading file:', file)
  }

  if (!studentData) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Student Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <PhotoUpload
              initialImage={profileImage}
              onUpload={handleFileUpload}
            />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={studentData.name} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="admissionNumber">Admission Number</Label>
              <Input id="admissionNumber" defaultValue={studentData.admissionNumber} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Input id="class" defaultValue={studentData.class} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="curriculum">Curriculum</Label>
              <Input id="curriculum" defaultValue={studentData.curriculum} />
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

