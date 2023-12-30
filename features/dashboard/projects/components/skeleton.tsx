import React from 'react';
import ProjectsLayout from '../layout/layout';
import { Skeleton as UISkeleton } from '@/components/ui/skeleton';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

function Skeleton() {
    return (
        <ProjectsLayout>
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
                    {[1, 2].map((item) => (
                        <TableRow key={item}>
                            <TableCell className="flex items-center gap-2">
                                <UISkeleton className="w-6 h-6 rounded-full" />
                                <UISkeleton className="w-14 h-3" />
                            </TableCell>
                            <TableCell>
                                <UISkeleton className="w-14 h-3" />
                            </TableCell>
                            <TableCell>
                                <UISkeleton className="w-64 h-3" />
                            </TableCell>
                            <TableCell>
                                <UISkeleton className="w-24 h-3" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ProjectsLayout>
    );
}

export default Skeleton;
