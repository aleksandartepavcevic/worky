import React from 'react';

import AsideLayout from './layout/aside-layout';
import AsideHeader from './components/aside-header';
import AsideContent from './components/aside-content';
import AsideNavigation from './components/aside-navigation';
import AsideModelToggle from './components/aside-mode-toggle';

function DashboardAside() {
    return (
        <AsideLayout>
            <AsideHeader />
            <AsideContent>
                <AsideNavigation />
                <AsideModelToggle />
            </AsideContent>
        </AsideLayout>
    );
}

export default DashboardAside;
