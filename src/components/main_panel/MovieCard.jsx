import { useNavigate } from "react-router-dom";
import PopularityMeter from "./PopularityMeter";

const MovieCard = () => {
    const imageUrl = 'https://picsum.photos/300';
    const title = "My New Movie";
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/movies/123`);
    }
    return (
        <div className="relative w-full h-70 rounded-2xl overflow-hidden shadow-lg border border-secondary cursor-pointer group active:scale-98"
            onClick={handleNavigation}
        >
            {/* Background Image with Zoom-in Effect */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform transition-transform duration-300 group-hover:scale-110  hover:opacity-50"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 backdrop-blur-[2px]">
                <h3 className="text-white text-lg font-semibold">{title}</h3>
                <h3 className="text-gray-300 text-sm">Hey, there is more!</h3>
                {/* Popularity meter */}
                <PopularityMeter userScore={7.5} />

            </div>
        </div>
    );
};

export default MovieCard;
