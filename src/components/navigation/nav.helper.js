import { TbTrendingUp } from "react-icons/tb";
import { MdOutlineFeaturedPlayList, MdSmartDisplay } from "react-icons/md";
import { BsFillTvFill, BsCalendar3WeekFill } from "react-icons/bs";
import { FaRegHeart, FaStar, FaCalendarDay } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { PiFilmSlateFill } from "react-icons/pi";


const homeNavItems = [
    {
        id: "trending-movies",
        icon: TbTrendingUp,
        label: "Trending Movies",
        endpoint: "/trending/movie/day"
    },
    {
        id: "featured-tv-shows",
        icon: MdOutlineFeaturedPlayList,
        label: "Featured TV Shows",
        endpoint: "/trending/tv/day"
    },
    {
        id: "popular-actors",
        icon: FaRegHeart,
        label: "Popular Actors",
        endpoint: "/person/popular"
    }
];

const moviesNavItems = [
    {
        id: "popular",
        icon: FaHandsClapping,
        domain: "Movies",
        label: "Popular",
        endpoint: "/movie/popular"
    },

    {
        id: "now-playing",
        icon: MdSmartDisplay,
        domain: "Movies",
        label: "Now Playing",
        endpoint: "/movie/now_playing"
    },
    {
        id: "upcoming",
        icon: PiFilmSlateFill,
        domain: "Movies",
        label: "Upcoming",
        endpoint: "/movie/upcoming"
    },
    {
        id: "top-rated",
        icon: FaStar,
        domain: "Movies",
        label: "Top Rated",
        endpoint: "/movie/top_rated"
    }
];
const tvShowsNavItems = [
    {
        id: "popular-shows",
        icon: FaHandsClapping,
        domain: "Shows",
        label: "Popular",
        endpoint: "/tv/popular"
    },

    {
        id: "airing-today",
        icon: FaCalendarDay,
        domain: "Shows",
        label: "Airing Today",
        endpoint: "/tv/airing_today"
    },
    {
        id: "on-the-air",
        icon: BsFillTvFill,
        domain: "Shows",
        label: "On The Air",
        endpoint: "/tv/on_the_air"
    },
    {
        id: "tv-top-rated",
        icon: FaStar,
        domain: "Shows",
        label: "Top Rated",
        endpoint: "/tv/top_rated"
    }
];

export const categories = [
    { title: 'Feed', items: homeNavItems },
    { title: 'Movies', items: moviesNavItems },
    { title: 'TV Shows', items: tvShowsNavItems }
];
