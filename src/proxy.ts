import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api')) {
        // This logic is only applied to /about
        const isAllowed = rateLimit(request)
        if (!isAllowed) {
            return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
        }
        return NextResponse.next()
    }
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
// export const config = {
//   matcher: '/api/:path*',
// }