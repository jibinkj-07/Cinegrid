/* eslint-disable react/prop-types */
import { useState } from "react";
import { ScrollContext } from "./scrollContext.js";

export const ScrollProvider = ({ children }) => {
    const [scrollTop, setScrollTop] = useState(0);

    const updateScrollTop = (scroll) => {
        setScrollTop(scroll);
    };

    return (
        <ScrollContext.Provider value={{ scrollTop, updateScrollTop }}>
            {children}
        </ScrollContext.Provider>
    );
};
