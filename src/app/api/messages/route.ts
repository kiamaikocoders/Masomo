import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import crypto from 'crypto'

// In-memory storage for messages
const messages = new Map()

export async function GET() {
  try {
    const user = await verifyToken()
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    // Filter messages for the current user
    const userMessages = Array.from(messages.values()).filter(
      (msg: any) => msg.senderId === user.id || msg.recipientId === user.id
    )

    return NextResponse.json(userMessages)
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { message: 'An error occurred while fetching messages' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const user = await verifyToken()
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { content, recipientId } = body

    const messageId = crypto.randomUUID()
    const message = {
      id: messageId,
      content,
      senderId: user.id,
      recipientId,
      timestamp: new Date().toISOString(),
    }

    messages.set(messageId, message)

    return NextResponse.json(
      { message: 'Message sent successfully', messageId },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json(
      { message: 'An error occurred while sending the message' },
      { status: 500 }
    )
  }
}

