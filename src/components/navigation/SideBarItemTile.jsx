/* eslint-disable react/prop-types */
import { useCategory } from "../context/categoryContext";

function SideBarItemTile({ navItem, toggleSideBar }) {
    const { activeCategory, updateCategory } = useCategory();

    const selected = activeCategory.id === navItem.id;

    return (
        <div
            className="flex justify-between items-center w-full cursor-pointer 
            py-3 px-2 group hover:bg-secondary rounded-[8px] active:scale-98 "
            onClick={() => {
                updateCategory(navItem);
                // Only passing from Header.jsx not from App.jsx
                // which means below function is only applicable for lessthan md screens
                if (toggleSideBar) {
                    toggleSideBar();
                }

            }}
        >


            <div className="flex justify-start items-center w-full ">
                <navItem.icon
                    size={20}
                    className={`${selected ? 'text-on-body' : 'text-gray-400'} mr-3 group-hover:text-primary`}
                />
                <span
                    className={`${selected ? 'text-on-body' : 'text-gray-400'}
                     ${selected ? 'font-semibold' : ''} group-hover:text-primary`}>
                    {navItem.label}
                </span>
            </div>


            <div
                className={`${selected ? 'block' : 'hidden'} w-1 h-8 bg-primary rounded-full`}>

            </div>
        </div>
    )
}

export default SideBarItemTile