import { TbTrendingUp } from "react-icons/tb";
import { MdOutlineFeaturedPlayList, MdSmartDisplay } from "react-icons/md";
import { BsFillTvFill } from "react-icons/bs";
import { FaRegHeart, FaStar, FaCalendarDay } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { PiFilmSlateFill } from "react-icons/pi";


const homeNavItems = [
    {
        id: "trending-movies",
        icon: TbTrendingUp,
        label: "Trending Moviesss",
        type: "movie",
        endpoint: "/trending/movie/day"
    },
    {
        id: "featured-tv-shows",
        icon: MdOutlineFeaturedPlayList,
        label: "Featured TV Shows",
        type: "tv",
        endpoint: "/trending/tv/day"
    },
    {
        id: "popular-actors",
        icon: FaRegHeart,
        label: "Popular Actors",
        type: "person",
        endpoint: "/person/popular"
    }
];

const moviesNavItems = [
    {
        id: "popular",
        icon: FaHandsClapping,
        domain: "Movies",
        label: "Popular",
        type: "movie",
        endpoint: "/movie/popular"
    },

    {
        id: "now-playing",
        icon: MdSmartDisplay,
        domain: "Movies",
        label: "Now Playing",
        type: "movie",
        endpoint: "/movie/now_playing"
    },
    {
        id: "upcoming",
        icon: PiFilmSlateFill,
        domain: "Movies",
        label: "Upcoming",
        type: "movie",
        endpoint: "/movie/upcoming"
    },
    {
        id: "top-rated",
        icon: FaStar,
        domain: "Movies",
        label: "Top Rated",
        type: "movie",
        endpoint: "/movie/top_rated"
    }
];
const tvShowsNavItems = [
    {
        id: "popular-shows",
        icon: FaHandsClapping,
        domain: "Shows",
        label: "Popular",
        type: "tv",
        endpoint: "/tv/popular"
    },

    {
        id: "airing-today",
        icon: FaCalendarDay,
        domain: "Shows",
        label: "Airing Today",
        type: "tv",
        endpoint: "/tv/airing_today"
    },
    {
        id: "on-the-air",
        icon: BsFillTvFill,
        domain: "Shows",
        label: "On The Air",
        type: "tv",
        endpoint: "/tv/on_the_air"
    },
    {
        id: "tv-top-rated",
        icon: FaStar,
        domain: "Shows",
        label: "Top Rated",
        type: "tv",
        endpoint: "/tv/top_rated"
    }
];

export const categories = [
    { title: 'Feed', items: homeNavItems },
    { title: 'Movies', items: moviesNavItems },
    { title: 'TV Shows', items: tvShowsNavItems }
];
