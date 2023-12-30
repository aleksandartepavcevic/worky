import React from 'react';
import AsideLink from './aside-link';

function AsideNavigation() {
    return (
        <div className="flex flex-col gap-2">
            <AsideLink text="Dashboard" icon="home" link="/dashboard" />
            <AsideLink text="My tasks" icon="list" link="/dashboard/id/tasks" />
            <AsideLink
                text="Calendar"
                icon="calendar"
                link="/dashboard/id/calendar"
            />
            <AsideLink
                text="Documents"
                icon="files"
                link="/dashboard/id/documents"
            />
            <AsideLink text="Teams" icon="users" link="/dashboard/id/teams" />
        </div>
    );
}

export default AsideNavigation;
