import React from 'react';
import { Aside, Header } from '@/features/dashboard';
import { Breadcrumbs } from '@/features/breadcrumbs';

export const metadata = {
    title: 'Dashboard',
};

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex bg-dashboard-background">
            <Aside />
            <div className="w-full flex flex-col">
                <Header />
                <div className="h-full overflow-y-auto px-4 py-6">
                    <Breadcrumbs />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
