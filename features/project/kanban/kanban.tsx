import React from 'react';
import Column from './components/column';

function Kanban() {
    const columns = ['To do', 'In progress', 'Code review', 'Done'];
    return (
        <div className="flex gap-6 overflow-auto">
            {columns.map((column) => (
                <Column key={column} name={column} />
            ))}
        </div>
    );
}

export default Kanban;
