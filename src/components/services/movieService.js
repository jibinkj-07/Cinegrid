import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";


export const getMovies = async (endpoint, page = 1, search = false) => {
    if (!endpoint) return;
    let path = `${BASE_URL}${endpoint}?page=${page}&api_key=${API_KEY}`;
    if (search) {
        path = `${BASE_URL}${endpoint}&page=${page}&api_key=${API_KEY}`;
    }
    console.log(`Called with ${path}`);

    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        console.log(`error from getMovies() ${e}`);
        throw new Error(`Failed to fetch movies list`);
    }
}


