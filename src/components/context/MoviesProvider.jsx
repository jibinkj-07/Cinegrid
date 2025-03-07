/* eslint-disable react/prop-types */
import { MoviesContext } from "./moviesContext";
import { useState, useEffect } from "react";
import { useCategory } from "./categoryContext";
import { getMovies } from "../services/movieService";

export const MoviesProvider = ({ children }) => {
    const { activeCategory } = useCategory();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");

    // Funtions to update current page numbers
    const updatePage = (page) => {
        setPage(page)
    }
    const nextPage = () => {
        if (page >= totalPages) return; // Prevent exceeding totalPage
        setPage((prev) => prev + 1);
    };

    const prevPage = () => {
        if (page <= 1) return; // Prevent going below page 1
        setPage((prev) => prev - 1);
    };

    // Function to fetch movie list for active category
    const fetchMovies = async () => {
        console.log(`Called fetchMovies with ${activeCategory.endpoint}`)
        setError("");
        setLoading(true);
        try {
            const { results, total_pages } = await getMovies(activeCategory.endpoint, page);
            // Sort movies by vote_average in descending order (high to low)
            const sortedMovies = (results || []).sort((a, b) => b.vote_average - a.vote_average);
            setMovies(sortedMovies);
            setTotalPages(total_pages ? Math.min(Number(total_pages), 500) : 1);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        console.log("Called useEffect from MoviesProvider")
        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory.id, page]);

    useEffect(() => {
        console.log("Category Changed")
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory.id]);


    return (
        <MoviesContext.Provider value={{
            loading,
            movies,
            page,
            totalPages,
            error,
            updatePage,
            fetchMovies,
            nextPage,
            prevPage,
        }}>
            {children}
        </MoviesContext.Provider>
    );
};
