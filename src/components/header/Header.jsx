import icon from '../../assets/icons/icon.svg';
import { navHeader } from './headers';
import HeaderItem from './HeaderItem';

const Header = () => {
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
                <div className="hidden lg:block">
                    <ul
                        className="flex justify-center items-center gap-10">
                        {navHeader.map((item) => (
                            <li key={item.label}>
                                <HeaderItem
                                    label={item.label}
                                    Icon={item.Icon}
                                    route={item.route}
                                />
                            </li>
                        ))}

                    </ul>
                </div>
                {/* Profile Avatar */}

                <div className="w-10 h-10 rounded-full bg-amber-600">

                </div>

            </nav>
        </header>
    )
}

export default Header