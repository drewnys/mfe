import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default () => {
    const ref = useRef(null);

    // useEffect ensures that the code runs only a single time
    useEffect(()=> {
        mount(ref.current);
    }, []); // Empty array [] to indicate to only run this function when MarketingApp is first rendered
    
    return <div ref={ref} />;
};
