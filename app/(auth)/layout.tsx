import React from 'react';
import { Card } from '@/components/ui/card';
import Logo from '@/components/ui/logo';

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container flex items-center justify-center pt-8 md:h-screen md:min-h-[600px]">
            <Card className="mx-auto w-full max-w-md p-8 space-y-2 shadow-lg rounded-xl">
                <div className="flex justify-center mb-6">
                    <Logo asLink />
                </div>
                {children}
            </Card>
        </div>
    );
}

export default AuthLayout;
