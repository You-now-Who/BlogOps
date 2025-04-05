// middleware.ts
import { NextResponse } from 'next/server'

// Protect all /admin/* routes
export const config = {
  matcher: ['/admin/:path*'],
}

export async function middleware(req) {
  const cookie = req.cookies.get('magic-words')?.value

  if (!cookie) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Call the /api/authenticate route on your own server
  const verify = await fetch(`${req.nextUrl.origin}/api/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: cookie }),
  })

  if (!verify.ok) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}
