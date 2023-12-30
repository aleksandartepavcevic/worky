import React from 'react';
import ProjectsLayout from './layout/layout';
import NoProjects from './components/no-projects';
import ProjectsList from './components/projects-list';
import { createServerClient } from '@/hooks/supabase';

async function Projects() {
    const supabase = createServerClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
        .from('projects')
        .select()
        .eq('accountId', String(user?.id));

    return (
        <ProjectsLayout>
            {!data?.length ? <NoProjects /> : <ProjectsList data={data} />}
        </ProjectsLayout>
    );
}

export default Projects;
