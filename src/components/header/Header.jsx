import icon from '../../assets/icons/icon.svg';
import { navHeader, MoreIcon } from './headers';
import HeaderItem from './HeaderItem';
import { useState } from 'react';

const Header = () => {
    // Boolean only for small screen to toggle menu
    const [menuVisibility, setMenuVisibility] = useState(false);
    return (
        <header>
            <nav className="flex justify-between items-center ">
                {/* App Icon and Name */}
                <a href="/">
                    <div className="flex justify-center items-center">
                        <img src={icon} className="w-9 h-9 " />
                        <h2 className="font-semibold text-2xl">Cine<span className="text-primary">Grid</span></h2>
                    </div>
                </a>

                {/* Nav headers */}
                <div className="hidden lg:flex justify-center items-center gap-10">
                    {navHeader.map((item) => (
                        <HeaderItem
                            key={item.label}
                            label={item.label}
                            Icon={item.Icon}
                            route={item.route}
                        />
                    ))}

                </div>

                {/* For small screens */}
                <div className="lg:hidden flex flex-col items-end">
                    <div className="flex justify-center items-center gap-6">
                        {navHeader.slice(0, 3).map((item) => (<HeaderItem
                            key={item.label}
                            label=""
                            Icon={item.Icon}
                            route={item.route}
                        />))}

                        <div onClick={() => setMenuVisibility(!menuVisibility)}>
                            <HeaderItem
                                label=""
                                Icon={MoreIcon}
                                route={undefined}
                            />
                        </div>
                    </div>
                    {menuVisibility && <div className="absolute flex flex-col justify-center items-start gap-5 mt-10 bg-onSurface border-[1px] border-gray-700 rounded-[8px]  p-5">
                        {navHeader.slice(3).map((item) => (<HeaderItem
                            key={item.label}
                            label={item.label}
                            Icon={item.Icon}
                            route={item.route}
                        />))}
                    </div>}
                </div>

                {/* Profile Avatar */}
                <div className="w-10 h-10 rounded-full bg-amber-600">

                </div>

            </nav>
        </header>
    )
}

export default Header