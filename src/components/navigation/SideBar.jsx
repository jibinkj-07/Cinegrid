/* eslint-disable react/prop-types */
import SiteLogo from "../core/SiteLogo";
import { IoIosClose } from "react-icons/io";
import { categories } from './nav.helper';
import SideBarItemTile from './SideBarItemTile';

function SideBar({ toggleSideBar, activeCategory, updateCategory }) {
    // ${toggleSideBar} only passes from TopBar means only availble in small screens
    return (
        <aside className={`w-full h-full flex flex-col 
            justify-center items-end md:items-start
            border-r-1 border-secondary
            pt-4 pl-5 2xl:pl-[200px]
        ${toggleSideBar ? 'bg-secondary' : 'bg-body'}`}>
            {/* Header */}
            <div className="md:pb-4">
                {
                    toggleSideBar ?
                        <button
                            className="icon-button bg-gray-700 mr-4 rounded-md"
                            onClick={toggleSideBar}>
                            <IoIosClose size={30} />
                        </button>
                        : <SiteLogo />
                }
            </div>
            {/* Nav Items */}
            <nav className="flex-1 w-full overflow-y-auto hide-scrollbar pr-.5 pb-70 md:pb-20">
                {categories.map((category) => (
                    <div key={category.title}>
                        <h2
                            className="mt-6 text-gray-300 mb-2 text-[13px]">
                            {category.title}
                        </h2>
                        {category.items.map((item) => (
                            <SideBarItemTile
                                key={item.id}
                                navItem={item}
                                selected={activeCategory === item.id}
                                updateCategory={updateCategory}
                                toggleSideBar={toggleSideBar}
                            />
                        ))}
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default SideBar