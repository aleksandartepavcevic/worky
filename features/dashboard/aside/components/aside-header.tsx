'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import useAsideContext from '../hooks/useAsideContext';

const wrapperVariants = {
    collapsed: { paddingInline: '0.5rem' },
    expanded: { paddingInline: '1rem' },
} as Variants;

function AsideHeader() {
    const { collapsed, setCollapsed } = useAsideContext();

    return (
        <motion.div
            initial={false}
            animate={collapsed ? 'collapsed' : 'expanded'}
            variants={wrapperVariants}
            className="flex items-center justify-between px-4 py-6 border-b-[1px] flex-shrink-0  h-[89px]">
            <AnimatePresence initial={false} mode="wait">
                {!collapsed && (
                    <motion.div
                        key="logo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Logo />
                    </motion.div>
                )}
                <Button
                    variant="ghost"
                    onClick={() => setCollapsed((s) => !s)}
                    className="px-[0.7rem] py-2">
                    {collapsed ? (
                        <ChevronRight className="w-5 h-5" />
                    ) : (
                        <ChevronLeft className="w-5 h-5" />
                    )}
                </Button>
            </AnimatePresence>
        </motion.div>
    );
}

export default AsideHeader;
