/* eslint-disable react/prop-types */
import SiteLogo from "../core/SiteLogo";

function SideBar({ toggleSideBar }) {
    // ${toggleSideBar} only passes from TopBar means only availble in small screens
    return (
        <div className={`w-full h-full flex flex-col 
        ${toggleSideBar ? 'bg-secondary' : 'bg-body'}`}>
            {/* Header */}
            <div className="">
                {
                    toggleSideBar ? <div>
                        <button onClick={toggleSideBar}>Close</button>
                    </div> : <SiteLogo />
                }
            </div>
            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto hide-scrollbar">
                <ui>
                    {
                        Array.from({ length: 100 }, (_, index) => <li key={index}>Item {index + 1}</li>)
                    }
                </ui>
            </nav>


        </div>
    );
}

export default SideBar