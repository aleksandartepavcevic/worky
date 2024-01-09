import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import Typography from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

function ColumnHeader({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-between rounded-md px-4 py-2 bg-muted">
            <Typography variant="p" className="text-primary font-medium">
                {name}
            </Typography>
            <Button variant="ghost" size="icon" className="rounded-full">
                <MoreHorizontal className="w-4 h-4" />
            </Button>
        </div>
    );
}

export default ColumnHeader;
