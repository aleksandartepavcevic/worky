import React from 'react';

import { cookies } from 'next/headers';
import AsideLayout from './layout/aside-layout';
import AsideHeader from './components/aside-header';
import AsideContent from './components/aside-content';
import AsideNavigation from './components/aside-navigation';
import AsideModelToggle from './components/aside-mode-toggle';

function Aside() {
    const cookieStore = cookies();
    const initialCollapsed = cookieStore.get('aside-collapsed');

    return (
        <AsideLayout initialCollapsedValue={initialCollapsed?.value}>
            <AsideHeader />
            <AsideContent>
                <AsideNavigation />
                <AsideModelToggle />
            </AsideContent>
        </AsideLayout>
    );
}

export default Aside;
