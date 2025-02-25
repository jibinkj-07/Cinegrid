import { BsFillHouseFill, BsSearch, BsStopwatchFill, BsStars, BsCollectionPlayFill, BsDisplayFill } from "react-icons/bs";
import { MdMoreVert as MoreIcon } from "react-icons/md";

export const navHeader = [
    {
        label: "Home",
        Icon: BsFillHouseFill,
        route: "/"
    },
    {
        label: "Search",
        Icon: BsSearch,
        route: "/search"
    },
    {
        label: "Watch List",
        Icon: BsStopwatchFill,
        route: "/watch-list"
    },
    {
        label: "Originals",
        Icon: BsStars,
        route: "/originals"
    },
    {
        label: "Movies",
        Icon: BsCollectionPlayFill,
        route: "/movies"
    },
    {
        label: "Series",
        Icon: BsDisplayFill,
        route: "/series"
    }
]

export { MoreIcon };