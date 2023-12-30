'use client';

import React from 'react';
import { MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreateProject } from '@/features/create-project';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function ProjectsLayout({ children }: { children: React.ReactNode }) {
    const [openCreateProjectDialog, setOpenCreateProjectDialog] =
        React.useState(false);
    return (
        <Card>
            <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="text-lg">Projects</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full">
                            <MoreVertical className="w-5 h-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => setOpenCreateProjectDialog(true)}>
                            Create project
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <CreateProject
                    trigger={false}
                    open={openCreateProjectDialog}
                    onOpenChange={(open) => setOpenCreateProjectDialog(open)}
                />
            </CardHeader>
            <CardContent className="md:pb-8 h-[320px]">{children}</CardContent>
        </Card>
    );
}

export default ProjectsLayout;
