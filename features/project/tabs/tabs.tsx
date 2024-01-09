'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import Tab from './components/tab';

function Tabs() {
    const params = useParams();

    const tabs = [
        {
            name: 'Board',
            href: `/dashboard/project/${params?.key}/board`,
        },
        {
            name: 'Timeline',
            href: `/dashboard/project/${params?.key}/timeline`,
        },
        {
            name: 'List',
            href: `/dashboard/project/${params?.key}/list`,
        },
        {
            name: 'Activities',
            href: `/dashboard/project/${params?.key}/activities`,
        },
    ];

    return (
        <div className="flex items-center gap-2">
            {tabs.map((tab) => (
                <Tab key={tab.name} name={tab.name} href={tab.href} />
            ))}
        </div>
    );
}

export default Tabs;
