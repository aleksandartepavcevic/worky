'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Variants, motion } from 'framer-motion';
import AsideContext from '../context/aside-context';

const variants = {
    collapsed: { width: 60 },
    expanded: { width: 280 },
} as Variants;

const asideCollapsed = localStorage.getItem('aside-collapsed');

function AsideLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(
        JSON.parse(asideCollapsed || 'false'),
    );

    const context = useMemo(
        () => ({
            collapsed,
            setCollapsed,
        }),
        [collapsed],
    );

    useEffect(() => {
        localStorage.setItem('aside-collapsed', JSON.stringify(collapsed));
    }, [collapsed]);

    return (
        <AsideContext.Provider value={context}>
            <motion.aside
                initial={false}
                animate={collapsed ? 'collapsed' : 'expanded'}
                variants={variants}
                className="flex flex-col flex-shrink-0 border-r-[1px] justify-between">
                {children}
            </motion.aside>
        </AsideContext.Provider>
    );
}

export default AsideLayout;
