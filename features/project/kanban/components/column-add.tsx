import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ColumnAdd() {
    return (
        <Button variant="outline" className="gap-2">
            <PlusCircle className="w-4 h-4" />
            Add new
        </Button>
    );
}

export default ColumnAdd;
