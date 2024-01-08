'use client';

import { Calendar, Files, Home, ListTodo, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import useAsideContext from '../hooks/useAsideContext';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

type IconType = 'home' | 'list' | 'calendar' | 'files' | 'users';

type AsideLinkProps = {
    text: string;
    icon: IconType;
    link: string;
};

const linkVariants = {
    collapsed: { paddingInline: '0.7rem' },
    expanded: { paddingInline: '1rem' },
} as Variants;

function AsideLink({ text, icon, link }: AsideLinkProps) {
    const { collapsed } = useAsideContext();
    const pathname = usePathname();
    const iconMap = {
        home: Home,
        list: ListTodo,
        calendar: Calendar,
        files: Files,
        users: Users,
    };

    const Icon = iconMap[icon as keyof typeof iconMap];
    const variant = pathname.includes(link) ? 'secondary' : 'ghost';

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button asChild variant={variant} className="p-0">
                        <Link href={link}>
                            <motion.span
                                animate={collapsed ? 'collapsed' : 'expanded'}
                                variants={linkVariants}
                                initial={false}
                                className="w-full flex items-center gap-2 py-2">
                                <Icon className="w-5 h-5 flex-shrink-0" />{' '}
                                <AnimatePresence initial={false} mode="wait">
                                    {!collapsed && (
                                        <motion.span
                                            key={icon}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}>
                                            {text}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.span>
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent
                    side="right"
                    data-collapsed={collapsed}
                    className="data-[collapsed=true]:block data-[collapsed=false]:hidden ">
                    {text}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default AsideLink;
