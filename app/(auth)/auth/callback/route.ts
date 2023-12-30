import { NextResponse } from 'next/server';
import { createServerClient } from '@/hooks/supabase';

export async function GET(request: Request) {
    // The `/auth/callback` route is required for the server-side auth flow implemented
    // by the Auth Helpers package. It exchanges an auth code for the user's session.
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    const supabase = createServerClient();

    if (code) {
        await supabase.auth.exchangeCodeForSession(code);
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestUrl.origin);
}
