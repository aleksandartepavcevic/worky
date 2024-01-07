'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { useCookies } from 'react-cookie';
import AsideContext from '../context/aside-context';

const variants = {
    collapsed: { width: 60 },
    expanded: { width: 280 },
} as Variants;

function AsideLayout({
    children,
    initialCollapsedValue,
}: {
    children: React.ReactNode;
    initialCollapsedValue?: string;
}) {
    const [, setCookie] = useCookies();
    const [collapsed, setCollapsed] = useState(() =>
        JSON.parse(initialCollapsedValue || 'false'),
    );

    const context = useMemo(
        () => ({
            collapsed,
            setCollapsed,
        }),
        [collapsed],
    );

    useEffect(() => {
        setCookie('aside-collapsed', JSON.stringify(collapsed));
    }, [collapsed, setCookie]);

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
