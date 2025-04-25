import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export  async function GET() {
  const { userId, redirectToSignIn } = await auth()

  if (!userId) return redirectToSignIn()

  return NextResponse.json({id:userId},{status:200})
}