import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (Props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return Props.children;
};
export default ScrollToTop;