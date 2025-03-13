import { useNavigate } from "react-router-dom";
import SiteLogo from "./SiteLogo";
import { useState, useEffect } from 'react';
function TopBarTemplate() {
    const navigate = useNavigate();
    const [showTopbar, setShowTopbar] = useState(true); // State to manage topbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // To track last scroll position

    // console.log(lastScrollY)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                // To prevent disabling topbar for safari browser
                setShowTopbar(true);
            } else if (window.scrollY > lastScrollY) {
                // Scrolling down
                setShowTopbar(false);
            } else {
                // Scrolling up
                setShowTopbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up the event listener
        };
    }, [lastScrollY]);


    const handleHomeRoute = () => {
        // Clear all routes and navigate to the home page
        navigate("/", { replace: true });
    }

    return (
        // <div className="py-4 px-5 2xl:px-[200px] sticky flex justify-between items-center w-full">
        <div className={`z-50 fixed top-0 left-0 py-4 px-5 2xl:px-[200px] flex justify-between items-center w-full text-center transition-transform duration-300 ease-in-out ${showTopbar ? 'transform translate-y-0' : 'transform -translate-y-full'} bg-gradient-to-t from-transparent to-gray-900`}>
            <button
                onClick={() => navigate(-1)}
                className="hover:text-primary active:scale-95 flex justify-center items-center cursor-pointer">
                <span className="text-xl mr-1"> &lt;</span>Back
            </button>

            <button
                onClick={handleHomeRoute}
                className="cursor-pointer active:scale-95"
            >
                <SiteLogo />
            </button>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
    )
}

export default TopBarTemplate