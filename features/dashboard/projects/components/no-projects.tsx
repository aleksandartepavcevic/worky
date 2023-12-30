import { FolderOpen } from 'lucide-react';
import React from 'react';
import Typography from '@/components/ui/typography';
import { CreateProject } from '@/features/create-project';

function NoProjects() {
    return (
        <div className="h-full flex flex-col items-center justify-center gap-2">
            <FolderOpen className="w-14 h-14 stroke-1 stroke-muted-foreground" />
            <Typography variant="p" className="[&:not(:first-child)]:mt-0">
                You currently have no projects
            </Typography>
            <CreateProject />
        </div>
    );
}

export default NoProjects;
