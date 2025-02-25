/* eslint-disable react/prop-types */


const HeaderItem = ({ label, Icon, route }) => {
    return (

        <div className="relative flex flex-col items-center group active:scale-95 transition">
            <a
                href={route}
                className="flex flex-col items-center"
            >
                <div
                    className="flex justify-center items-center gap-2 group-hover:text-primary transition-colors duration-200">
                    <Icon className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" />
                    <p className="">{label}</p>
                </div>
            </a>
            {/* Underline with Space */}
            <div className="hidden lg:block h-[2px] w-0 rounded-full bg-primary group-hover:w-full transition-all duration-300 mt-2"></div>
        </div>

    )
}

export default HeaderItem