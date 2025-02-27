import SiteLogo from '../core/SiteLogo';
import SideBarItem from './SideBarItem';
import { homeNavItems, moviesNavItems, tvShowsNavItems } from './nav.helper';
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function SideBar({ selected, onUpdate, onClose }) {

    const categories = [
        { title: 'Feed', items: homeNavItems },
        { title: 'Movies', items: moviesNavItems },
        { title: 'TV Shows', items: tvShowsNavItems },
    ];

    return (
        <aside
            className="flex flex-col justify-start items-start select-none w-1/2 md:w-1/4 lg:w-1/5  h-screen pt-4 bg-secondary md:bg-body">
            <div className="hidden md:block sticky top-0 z-10 bg-body pb-4">
                <SiteLogo />
            </div>


            {/* Display only on small screen to close this sidebar */}
            <div
                className="md:hidden w-full sticky flex justify-end items-end z-10 px-5"
            >
                <button
                    onClick={onClose}
                    className='cursor-pointer bg-gray-700 rounded-xl hover:opacity-70 p-1'>
                    <IoClose size={23} />
                </button>

            </div>


            <nav className='overflow-y-auto scoll w-full  pl-4 md:pl-0 pb-80 md:pb-0 sidebar-scrollbar'>
                {categories.map((category) => (
                    <div key={category.title}>
                        <h2 className="mt-6 text-gray-300 mb-2 text-[13px]">{category.title}</h2>
                        {category.items.map((item) => (
                            <SideBarItem
                                key={item.id}
                                navItem={item}
                                selected={item.id === selected}
                                onUpdate={onUpdate}
                            />
                        ))}
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default SideBar;
