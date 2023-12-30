'use server';

import { headers } from 'next/headers';
import { Response } from '@/types/response';
import { createServerClient } from '@/hooks/supabase';

export const signUp = async (formData: FormData) => {
    const origin = headers().get('origin');
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createServerClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    });

    if (error) {
        return {
            error: {
                type: 'Could not authenticate user.',
                message: 'Verify the email and password, and try again.',
            },
            status: 500,
        } as Response;
    }

    return {
        success: {
            type: "You've successfully created an account.",
            message: 'Please checkout your email.',
        },
        status: 200,
    } as Response;
};
