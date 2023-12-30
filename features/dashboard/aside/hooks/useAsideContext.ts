'use client';

import { useContext } from 'react';
import AsideContext from '../context/aside-context';

const useAsideContext = () => {
    const context = useContext(AsideContext);

    if (!context)
        throw Error(
            'Please wrap component inside navigation context provider.',
        );

    return context;
};

export default useAsideContext;
