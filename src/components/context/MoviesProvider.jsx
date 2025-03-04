/* eslint-disable react/prop-types */
import { MoviesContext } from "./moviesContext";
import { useState, useEffect } from "react";
import { useCategory } from "./categoryContext";

export const MoviesProvider = ({ children }) => {
    const { activeCategory } = useCategory();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // Function to fetch movie list for active category
    const fetchMovies = () => {
        try {
            //calling
            console.log("Called API");

        } catch (e) {
            //Handling error 

        } finally {
            setLoading(true);
        }
    }


    useEffect(() => {
        console.log("Called useEffect from MoviesProvider")
        fetchMovies();
    }, [activeCategory]);


    return (
        <MoviesContext.Provider value={{ loading, movies }}>
            {children}
        </MoviesContext.Provider>
    );
};
