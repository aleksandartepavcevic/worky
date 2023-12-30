'use server';

import { redirect } from 'next/navigation';
import { Response } from '@/types/response';
import { createServerClient } from '@/hooks/supabase';

export const signIn = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createServerClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
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

    return redirect('/dashboard');
};
