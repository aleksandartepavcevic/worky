import { Tables } from '@/types/supabase';

export const parseProjectType = (type: Tables<'projects'>['type']) => {
    const typeMap = {
        'team-managed': 'Team-managed software',
        'company-managed': 'Company-managed software',
    };

    return typeMap[type as keyof typeof typeMap];
};
