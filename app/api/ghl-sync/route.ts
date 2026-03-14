import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-ghl-secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { type, productId } = body

    if (!type || !productId) {
      return NextResponse.json(
        { error: 'Missing type or productId' },
        { status: 400 }
      )
    }

    // Trigger ISR revalidation for affected pages
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acessoriosdesecadora.com.br'

    await fetch(`${baseUrl}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-revalidate-secret': process.env.REVALIDATE_SECRET!,
      },
      body: JSON.stringify({
        paths: ['/produtos', `/produtos/${productId}`],
      }),
    })

    return NextResponse.json({ success: true, type, productId })
  } catch (error) {
    console.error('GHL sync error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
