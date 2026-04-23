import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { submitContactForm } from '@/lib/hubspot'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  company: z.string().min(1).max(200),
  message: z.string().min(10).max(5000),
})

export async function POST(req: NextRequest) {
  // Rate limiting header check (Vercel Edge or CloudFlare can add IP)
  const contentType = req.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 400 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: result.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { name, email, company, message } = result.data

  // Honeypot / basic spam guard — body must not contain http links in name
  if (/https?:\/\//i.test(name)) {
    return NextResponse.json({ error: 'Submission rejected' }, { status: 400 })
  }

  try {
    await submitContactForm({
      name,
      email,
      company,
      message,
      pageUri: req.headers.get('referer') ?? undefined,
    })
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[contact API]', err)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }
}
