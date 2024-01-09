import React from 'react';
import ColumnHeader from './column-header';
import ColumnCard from './column-card';
import ColumnAdd from './column-add';

function Column({ name }: { name: string }) {
    return (
        <div className="flex flex-col flex-shrink-0 gap-4 w-[300px]">
            <ColumnHeader name={name} />
            <ColumnCard />
            <ColumnCard />
            <ColumnCard />
            <ColumnCard />
            <ColumnCard />
            <ColumnAdd />
        </div>
    );
}

export default Column;
