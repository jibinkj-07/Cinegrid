/* eslint-disable react/prop-types */
import { HiMenuAlt2 as HamburgerIcon } from "react-icons/hi";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";
import SiteLogo from '../core/SiteLogo';

function Header() {
    return (
        <div
            className="flex md:hidden justify-between items-center fixed w-full left-0 z-50 bg-body py-4 px-2">
            <HamburgerIcon size={23} className="icon-button" />
            <SiteLogo />
            <SearchIcon size={23} className="icon-button" />
        </div>
    )
}

export default Header