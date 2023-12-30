'use client';

import { createContext } from 'react';

type AsideContextType = {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const AsideContext = createContext<AsideContextType | null>(null);

export default AsideContext;
