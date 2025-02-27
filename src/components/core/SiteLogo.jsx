import logo from '../../assets/icons/icon.svg';

function SiteLogo() {
    return (
        <div className="flex justify-center items-center select-none">
            <img src={logo} width={30} height={30} />
            <h2 className="font-semibold text-2xl ml-1">
                Cine
                <span className="text-primary">
                    Grid
                </span>
            </h2>
        </div>
    )
}

export default SiteLogo