/* eslint-disable react/prop-types */


function SideBarItem({ navItem, selected, onUpdate }) {
    return (
        <div
            className="flex justify-between items-center w-full p-2 py-3 cursor-pointer hover:bg-secondary rounded-[8px] active:scale-98 "
            onClick={() => onUpdate(navItem.id)}
        >
            <navItem.icon size={25} className={`${selected ? 'text-on-body' : 'text-gray-400'}`} />
            <div className="flex justify-between items-center w-full ml-5">
                <span className={`${selected ? 'text-on-body' : 'text-gray-400'} ${selected ? 'font-semibold' : ''}`}>
                    {navItem.label}
                </span>
                <div className={`${selected ? 'block' : 'hidden'} w-1 h-8 bg-primary rounded-full`}></div>

            </div>
        </div>
    )
}

export default SideBarItem