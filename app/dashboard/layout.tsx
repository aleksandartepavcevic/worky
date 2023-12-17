import React from 'react';
import { DashboardAside } from '@/features/dashboard-aside';
import { DashboardHeader } from '@/features/dashboard-header';

export const metadata = {
    title: 'Dashboard',
};

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex">
            <DashboardAside />
            <div className="w-full flex flex-col">
                <DashboardHeader />
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;
