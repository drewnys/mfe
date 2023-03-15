import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default ({onAuthChange}) => {
    const ref = useRef(null);
    const history = useHistory();

    // useEffect ensures that the code runs only a single time
    useEffect(()=> {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            // Listen for pathname change in marketing module
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if (pathname !== nextPathname){
                    history.push(nextPathname);
                }
            },
            onAuthChange,
            // onAuthChange: () => {
            //     onAuthChange();
            // },
        });

        history.listen(onParentNavigate);
    }, []); // Empty array [] to indicate to only run this function when MarketingApp is first rendered
    
    return <div ref={ref} />;
};
