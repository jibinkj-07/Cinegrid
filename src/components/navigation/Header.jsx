/* eslint-disable react/prop-types */
import { HiMenuAlt2 as HamburgerIcon } from "react-icons/hi";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";
import SiteLogo from '../core/SiteLogo';
import SideBar from './SideBar';
import { useState } from "react";

function Header({ selected, onUpdate }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen((prev) => !prev);
    }
    return (
        <div className=" md:hidden">
            <div
                className="flex justify-between items-center fixed w-full left-0 z-50 bg-body p-4">
                <HamburgerIcon
                    size={23}
                    className="icon-button"
                    onClick={toggleSideBar} />
                <SiteLogo />
                <SearchIcon size={23} className="icon-button" />
            </div>

            <div
                className={`fixed z-60 w-full top-0 left-0 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <SideBar
                    onUpdate={onUpdate}
                    selected={selected}
                    onClose={toggleSideBar}
                />
            </div>

        </div>
    )
}

export default Header