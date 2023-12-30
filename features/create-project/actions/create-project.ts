'use server';

import { revalidateTag } from 'next/cache';
import { FormValues } from '../components/form';
import { Response } from '@/types/response';
import { createServerClient } from '@/hooks/supabase';

export const createProject = async (values: FormValues) => {
    const supabase = createServerClient();
    const { key, name, template, type } = values;

    const { error } = await supabase.from('projects').upsert({
        name,
        key,
        template,
        type,
    });

    if (error) {
        return {
            error: {
                type: 'Something went wrong',
                message: 'Unable to create a new project.',
            },
            status: 500,
        } satisfies Response;
    }

    revalidateTag('projects');

    return {
        success: {
            type: 'Success',
            message: 'New project successfuly created',
        },
        status: 200,
    } satisfies Response;
};
