import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);

    // useEffect ensures that the code runs only a single time
    useEffect(()=> {
        mount(ref.current);
    });
    
    return <div ref={ref} />;
};
