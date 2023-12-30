import React from 'react';
import ProjectsListItem from './projects-list-item';
import { Tables } from '@/types/supabase';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

type ProjectListProps = {
    data: Tables<'projects'>[];
};

function ProjectsList({ data }: ProjectListProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Key</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Lead</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((project) => (
                    <ProjectsListItem key={project.id} project={project} />
                ))}
            </TableBody>
        </Table>
    );
}

export default ProjectsList;
