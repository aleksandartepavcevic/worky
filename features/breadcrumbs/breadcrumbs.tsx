'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Typography from '@/components/ui/typography';

function Breadcrumbs() {
    const pathname = usePathname();

    const elements = pathname.split('/').filter((el) => el !== '');

    const toFirstLetterUppercase = (string: string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <div className="flex items-center gap-2 mb-2">
            {elements.map((el, i) => (
                <>
                    <Typography
                        variant="p"
                        className="text-accent-foreground/20">
                        {toFirstLetterUppercase(el)}
                    </Typography>
                    {elements.length !== i + 1 && (
                        <Typography
                            variant="p"
                            className="text-accent-foreground/20">
                            /
                        </Typography>
                    )}
                </>
            ))}
        </div>
    );
}

export default Breadcrumbs;
