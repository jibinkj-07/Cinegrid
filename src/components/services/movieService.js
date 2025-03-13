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

export const getMovieDetail = async (movieId) => {
    if (!movieId) return;
    let path = `${BASE_URL}/movie/${movieId}?append_to_response=credits,reviews&api_key=${API_KEY}`;
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        console.log(`error from getMovieDetail() ${e}`);
        throw new Error(`Failed to fetch movie detail`);
    }
}

export const getShowDetail = async (showId) => {
    if (!showId) return;
    let path = `${BASE_URL}/tv/${showId}?append_to_response=credits,reviews&api_key=${API_KEY}`;
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        console.log(`error from getTvDetail() ${e}`);
        throw new Error(`Failed to fetch show detail`);
    }
}

export const getPersonDetail = async (personId) => {
    if (!personId) return;
    let path = `${BASE_URL}/person/${personId}?append_to_response=credits&api_key=${API_KEY}`;
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        console.log(`error from getPersonDetail() ${e}`);
        throw new Error(`Failed to fetch person detail`);
    }
}

export const getCredits = async (id, type) => {
    if (!id) return;
    let path = `${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}`;
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        console.log(`error from getCredits() ${e}`);
        throw new Error(`Failed to fetch credits`);
    }
}

export const getReviews = async (id, type) => {
    if (!id) return;
    let path = `${BASE_URL}/${type}/${id}/reviews?api_key=${API_KEY}`;
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        console.log(`error from getReviews() ${e}`);
        throw new Error(`Failed to fetch reviews`);
    }
}

export const getActorCredits = async (id) => {
    if (!id) return;
    let path = `${BASE_URL}/person/${id}/credits?api_key=${API_KEY}`;
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        console.log(`error from getActorCredits() ${e}`);
        throw new Error(`Failed to fetch credits`);
    }
}


