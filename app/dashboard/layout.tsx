import React from 'react';
import { Aside, Header } from '@/features/dashboard';

export const metadata = {
    title: 'Dashboard',
};

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex bg-dashboard-background">
            <Aside />
            <div className="w-full flex flex-col">
                <Header />
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;
