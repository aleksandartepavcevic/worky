import React, { Suspense } from 'react';
import Typography from '@/components/ui/typography';
import { Projects, ProjectsSkeleton } from '@/features/dashboard';

async function DashboardPage() {
    return (
        <div>
            <Typography variant="h4" className="mb-4">
                Dashboard
            </Typography>
            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <Suspense fallback={<ProjectsSkeleton />}>
                        <Projects />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
