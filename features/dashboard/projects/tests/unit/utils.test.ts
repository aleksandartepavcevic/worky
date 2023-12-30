import { Tables } from '@/types/supabase';
import { parseProjectType } from '../../utils/utils';

let projectTypeMock: Tables<'projects'>['type'] = 'team-managed';

describe('parseProjectType', () => {
    test('Check if the function parses correctly team-managed project type', () => {
        const parsedType = parseProjectType(projectTypeMock);

        expect(parsedType).toBe('Team-managed software');
    });

    test('Check if the function parses correctly company-managed project type', () => {
        projectTypeMock = 'company-managed';
        const parsedType = parseProjectType(projectTypeMock);

        expect(parsedType).toBe('Company-managed software');
    });
});
