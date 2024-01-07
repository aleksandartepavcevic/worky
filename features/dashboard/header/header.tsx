import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dropdown } from '@/features/user';

function Header() {
    return (
        <div className="flex items-center justify-between px-4 py-6 border-b-[1px] h-[89px]">
            <div>
                <Input />
            </div>
            <div className="flex items-center gap-4">
                <Button>Add new task</Button>
                <Dropdown />
            </div>
        </div>
    );
}

export default Header;
