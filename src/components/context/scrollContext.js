import { createContext, useContext } from "react";

export const ScrollContext = createContext();

export const useScroll = () => {
    return useContext(ScrollContext);
};
