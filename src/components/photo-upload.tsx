'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Upload } from 'lucide-react'

export function PhotoUpload({ initialImage, onUpload }: { 
  initialImage?: string
  onUpload: (file: File) => Promise<void>
}) {
  const [preview, setPreview] = useState(initialImage)
  const [loading, setLoading] = useState(false)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setLoading(true)
      // Create preview
      const objectUrl = URL.createObjectURL(file)
      setPreview(objectUrl)
      
      // Upload file
      await onUpload(file)
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-32 h-32">
        <AvatarImage src={preview} />
        <AvatarFallback>
          {loading ? '...' : 'Upload'}
        </AvatarFallback>
      </Avatar>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="relative">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            accept="image/*"
            disabled={loading}
          />
          <Upload className="w-4 h-4 mr-2" />
          Choose Photo
        </Button>
      </div>
    </div>
  )
}

