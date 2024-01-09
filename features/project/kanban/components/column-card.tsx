import React from 'react';
import Typography from '@/components/ui/typography';

function ColumnCard() {
    return (
        <div className="p-2 rounded-md bg-muted">
            <div>Chips</div>
            <div>
                <Typography variant="h6">Ticket name</Typography>
                <Typography variant="p">Ticket description</Typography>
            </div>
        </div>
    );
}

export default ColumnCard;
