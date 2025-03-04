import { createContext, useContext } from "react";

export const MoviesContext = createContext();

export const useMovies = () => {
    return useContext(MoviesContext);
};
