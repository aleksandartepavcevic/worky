import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Header() {
    return (
        <div className="flex items-center justify-between px-4 py-6 border-b-[1px] h-[89px]">
            <div>
                <Input />
            </div>
            <div>
                <Button>Add new task</Button>
            </div>
        </div>
    );
}

export default Header;
