import { TbTrendingUp } from "react-icons/tb";
import { MdOutlineFeaturedPlayList, MdSmartDisplay } from "react-icons/md";
import { BsCalendar2Week, BsFillTvFill } from "react-icons/bs";
import { FaRegHeart, FaStar, FaCalendarDay } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { PiFilmSlateFill } from "react-icons/pi";


export const homeNavItems = [
    {
        id: "tredending-movies",
        icon: TbTrendingUp,
        label: "Trending Movies"
    },
    {
        id: "featured-tv-shows",
        icon: MdOutlineFeaturedPlayList,
        label: "Featured TV Shows"
    },
    {
        id: "latest-releases",
        icon: BsCalendar2Week,
        label: "Latest Releases"
    },
    {
        id: "popular-actors",
        icon: FaRegHeart,
        label: "Popular Actors"
    }
];

export const moviesNavItems = [
    {
        id: "popular",
        icon: FaHandsClapping,
        label: "Popular",
        path: "/movie/popular"
    },

    {
        id: "now-playing",
        icon: MdSmartDisplay,
        label: "Now Playing",
        path: "/movie/now_playing"
    },
    {
        id: "upcoming",
        icon: PiFilmSlateFill,
        label: "Upcoming",
        path: "/movie/upcoming"
    },
    {
        id: "top-rated",
        icon: FaStar,
        label: "Top Rated",
        path: "/movie/top_rated"
    }
];
export const tvShowsNavItems = [
    {
        id: "popular-shows",
        icon: FaHandsClapping,
        label: "Popular Shows",
        path: "/tv/popular"
    },

    {
        id: "airing-today",
        icon: FaCalendarDay,
        label: "Airing Today",
        path: "/tv/airing_today"
    },
    {
        id: "on-the-air",
        icon: BsFillTvFill,
        label: "On The Air",
        path: "/tv/on_the_air"
    },
    {
        id: "tv-top-rated",
        icon: FaStar,
        label: "Top Rated",
        path: "/tv/top_rated"
    }
];
