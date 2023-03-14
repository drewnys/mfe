import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    // useEffect ensures that the code runs only a single time
    useEffect(()=> {
        const { onParentNavigate } = mount(ref.current, {
            // Listen for pathname change in marketing module
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if (pathname !== nextPathname){
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, []); // Empty array [] to indicate to only run this function when MarketingApp is first rendered
    
    return <div ref={ref} />;
};
