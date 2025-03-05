import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";


export const getMovies = async (endpoint, page = 1) => {
    if (!endpoint) return;
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}?page=${page}&api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from TMDb API:', error);
        throw new Error('Failed to fetch data');
    }
}


