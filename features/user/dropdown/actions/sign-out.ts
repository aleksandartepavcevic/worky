'use server';

import { redirect } from 'next/navigation';
import { createServerClient } from '@/hooks/supabase';
import { Response } from '@/types/response';

export const signOut = async () => {
    const supabase = createServerClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        return {
            error: {
                type: 'Something went wrong',
                message: 'Unable to sign out.',
            },
            status: 500,
        } satisfies Response;
    }

    return redirect('/');
};
