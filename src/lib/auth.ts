import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'
import { type User } from '@/types/user'

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret-key')

export async function signToken(user: User) {
  const token = await new SignJWT({ 
    id: user.id, 
    role: user.role,
    name: user.name,
    email: user.email 
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secret)
  
  return token
}

export async function verifyToken() {
  const token = cookies().get('token')?.value
  if (!token) return null
  
  try {
    const verified = await jwtVerify(token, secret)
    return verified.payload as User
  } catch (err) {
    return null
  }
}

