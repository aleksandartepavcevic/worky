import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

export const createServerClient = () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    return supabase;
};
