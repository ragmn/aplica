import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { submitLeadMagnetForm } from '@/lib/hubspot'
import { leadMagnets } from '@/data/content'

const schema = z.object({
  firstname: z.string().min(2).max(100),
  email:     z.string().email().max(254),
  company:   z.string().min(1).max(200),
  assetId:   z.string().min(1).max(60),
})

export async function POST(req: NextRequest) {
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

  const { firstname, email, company, assetId } = result.data

  // Validate assetId against known assets
  const asset = leadMagnets.find((a) => a.id === assetId)
  if (!asset) {
    return NextResponse.json({ error: 'Unknown asset' }, { status: 400 })
  }

  try {
    await submitLeadMagnetForm({
      firstname,
      email,
      company,
      assetId,
      pageUri: req.headers.get('referer') ?? undefined,
    })

    return NextResponse.json(
      {
        success: true,
        downloadUrl: `/downloads/${asset.fileName}`,
      },
      { status: 200 }
    )
  } catch (err) {
    console.error('[lead-magnet API]', err)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }
}
