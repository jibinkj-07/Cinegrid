import SiteLogo from '../core/SiteLogo';
import SideBarItem from './SideBarItem';
import { homeNavItems, moviesNavItems, tvShowsNavItems } from './nav.helper';

// eslint-disable-next-line react/prop-types
function SideBar({ selected, onUpdate }) {
    return (
        <aside className="flex flex-col justify-start items-start select-none w-1/4 lg:w-1/5  h-screen py-4">
            <div className="sticky top-0 z-10 bg-body pb-4">
                <SiteLogo />
            </div>
            <div className='overflow-y-auto scoll w-full'>
                <h2 className="mt-5 text-gray-300 mb-2 text-[13px]">Feed</h2>
                {homeNavItems.map((item) => (
                    <SideBarItem
                        key={item.id}
                        navItem={item}
                        selected={item.id === selected}
                        onUpdate={onUpdate}

                    />
                )
                )}
                <h2 className="mt-5 text-gray-300 mb-2 text-[13px]">Movies</h2>
                {moviesNavItems.map((item) => (
                    <SideBarItem
                        key={item.id}
                        navItem={item}
                        selected={item.id === selected}
                        onUpdate={onUpdate} />
                )
                )}
                <h2 className="mt-5 text-gray-300 mb-2 text-[13px]">TV Shows</h2>
                {tvShowsNavItems.map((item) => (
                    <SideBarItem
                        key={item.id}
                        navItem={item}
                        selected={item.id === selected}
                        onUpdate={onUpdate} />
                )
                )}
            </div>
        </aside>
    );
}

export default SideBar;
