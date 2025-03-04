/* eslint-disable react/prop-types */
import { HiMenuAlt2 as HamburgerIcon } from "react-icons/hi";
import SiteLogo from '../core/SiteLogo';
import SideBar from "./SideBar";
import { useState } from 'react';

function TopBar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSideBar = () => {
        setShowSidebar((prev) => !prev);
    }

    return (
        <div>
            <header
                className="flex justify-between items-center p-4 md:hidden bg-body z-10">
                <HamburgerIcon
                    size={25}
                    className="icon-button"
                    onClick={toggleSideBar}
                />
                <SiteLogo />
                <div></div>
            </header>

            <div
                className={`fixed h-full md:hidden z-20 w-1/2 top-0 left-0 transition-transform duration-300 ease-in-out transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <SideBar toggleSideBar={toggleSideBar} />
            </div>
        </div>

    )
}

export default TopBar