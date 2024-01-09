import React from 'react';
import { Filter, PlusCircle } from 'lucide-react';
import Typography from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { ProjectTabs } from '@/features/project';

function ProjectLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full">
            <div className="flex items-center justify-between py-4">
                <Typography variant="h2">Worky</Typography>
                <Button variant="outline" className="gap-2">
                    <PlusCircle className="w-4 h-4" /> Add member
                </Button>
            </div>
            <div className="h-full mt-4">
                <div className="flex items-center justify-between">
                    <ProjectTabs />
                    <Button className="gap-2" variant="ghost">
                        <Filter className="w-5 h-5" />
                        Filter
                    </Button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default ProjectLayout;
