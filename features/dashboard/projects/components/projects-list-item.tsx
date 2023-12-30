import React from 'react';
import { Tables } from '@/types/supabase';
import { TableCell, TableRow } from '@/components/ui/table';
import { parseProjectType } from '../utils/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function ProjectsListItemName({ name }: { name: Tables<'projects'>['name'] }) {
    return (
        <TableCell className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{`${name[0].toUpperCase()}`}</AvatarFallback>
            </Avatar>
            {name}
        </TableCell>
    );
}

function ProjectsListItem({ project }: { project: Tables<'projects'> }) {
    const { name, key, type } = project;

    return (
        <TableRow className="cursor-pointer">
            <ProjectsListItemName name={name} />
            <TableCell>{key}</TableCell>
            <TableCell>{parseProjectType(type)}</TableCell>
            <TableCell>Aleksandar Tepavcevic</TableCell>
        </TableRow>
    );
}

export default ProjectsListItem;
