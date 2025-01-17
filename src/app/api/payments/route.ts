import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import crypto from 'crypto'

// In-memory storage for payments
const payments = new Map()

export async function GET() {
  try {
    const user = await verifyToken()
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const userPayments = Array.from(payments.values()).filter(
      (payment: any) => payment.userId === user.id
    )

    return NextResponse.json(userPayments)
  } catch (error) {
    console.error('Error fetching payments:', error)
    return NextResponse.json(
      { message: 'An error occurred while fetching payments' },
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
    const { amount, description } = body

    const paymentId = crypto.randomUUID()
    const payment = {
      id: paymentId,
      amount,
      description,
      status: 'completed',
      userId: user.id,
      timestamp: new Date().toISOString(),
    }

    payments.set(paymentId, payment)

    return NextResponse.json(
      { message: 'Payment processed successfully', paymentId },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing payment:', error)
    return NextResponse.json(
      { message: 'An error occurred while processing the payment' },
      { status: 500 }
    )
  }
}

