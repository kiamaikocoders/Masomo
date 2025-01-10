export type Role = 'admin' | 'teacher' | 'student'

export interface User {
  id: string
  email: string
  name: string
  role: Role
  profileImage?: string
  class?: string
  subjects?: string[]
  admissionNumber?: string // for students
  teacherId?: string // for students
  department?: string // for teachers
}

export interface AuthResponse {
  user: User
  token: string
}

