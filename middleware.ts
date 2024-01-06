import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
    const { supabase, response } = createClient(request);
    const isRoot = request.nextUrl.pathname === '/';
    const isAuth =
        request.nextUrl.pathname.startsWith('/login') ||
        request.nextUrl.pathname.startsWith('/register');
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
        if (isRoot || isAuth) return response;

        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (isAuth)
        return NextResponse.redirect(new URL('/dashboard', request.url));

    return response;
}

// Ensure the middleware is only called for relevant paths.
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
