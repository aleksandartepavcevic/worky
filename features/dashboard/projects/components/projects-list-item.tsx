'use client';

import React from 'react';
import Link from 'next/link';
import { Tables } from '@/types/supabase';
import { TableCell, TableRow } from '@/components/ui/table';
import { parseProjectType } from '../utils/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function ProjectsListItemName({
    name,
    projectKey,
}: {
    name: Tables<'projects'>['name'];
    projectKey: Tables<'projects'>['key'];
}) {
    return (
        <TableCell className="flex items-center gap-2">
            <Link
                href={`/dashboard/project/${projectKey}/board`}
                className="flex items-center gap-2 underline text-primary">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{`${name[0].toUpperCase()}`}</AvatarFallback>
                </Avatar>
                {name}
            </Link>
        </TableCell>
    );
}

function ProjectsListItem({ project }: { project: Tables<'projects'> }) {
    const { name, key, type } = project;

    return (
        <TableRow>
            <ProjectsListItemName name={name} projectKey={key} />
            <TableCell>{key}</TableCell>
            <TableCell>{parseProjectType(type)}</TableCell>
            <TableCell>Aleksandar Tepavcevic</TableCell>
        </TableRow>
    );
}

export default ProjectsListItem;
