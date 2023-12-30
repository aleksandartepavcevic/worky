'use client';

import React from 'react';
import { Variants, motion } from 'framer-motion';
import useAsideContext from '../hooks/useAsideContext';

const contentVariants = {
    collapsed: { paddingInline: '0.5rem' },
    expanded: { paddingInline: '1rem' },
} as Variants;

function AsideContent({ children }: { children: React.ReactNode }) {
    const { collapsed } = useAsideContext();
    return (
        <motion.div
            animate={collapsed ? 'collapsed' : 'expanded'}
            variants={contentVariants}
            initial={false}
            className="py-6 overflow-hidden h-full flex flex-col justify-between">
            {children}
        </motion.div>
    );
}

export default AsideContent;
