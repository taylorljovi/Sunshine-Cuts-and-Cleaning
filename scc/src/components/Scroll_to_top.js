import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { functions } from 'firebase';

function Scroll_to_top () {
    const { pathname } = useLocation ();

    useEffect (
        () => {
            window.scrollTo (0,0);
        },
        [pathname]
    );

    return null;
}

export default Scroll_to_top;