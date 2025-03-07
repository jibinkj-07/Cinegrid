/* eslint-disable react/prop-types */
import PopularityMeter from "./PopularityMeter";
import { Link } from "react-router-dom";
import { formatDate } from "../core/utilities";
import defaultThumbnail from '../../assets/images/thumbnail-portait.png';

const MovieCard = ({ movie }) => {

    const imageUrl = 'https://image.tmdb.org/t/p/w500/';
    const thumbnail = movie.poster_path || movie.backdrop_path;


    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="relative w-full h-70 rounded-2xl overflow-hidden shadow-lg border border-secondary cursor-pointer group active:scale-98">
                {/* Background Image with Zoom-in Effect */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform transition-transform duration-300 group-hover:scale-110  hover:opacity-50"
                    style={{
                        backgroundImage: `url(${thumbnail ?
                            `${imageUrl}${thumbnail}` :
                            `${defaultThumbnail}`} )`
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 backdrop-blur-[2px]">
                    <h3 className="text-white text-lg font-semibold">{movie.title || movie.original_name}</h3>
                    <h3 className="text-gray-300 text-[11px] font-medium">{formatDate(movie.release_date || movie.first_air_date)}</h3>
                    {/* Popularity meter */}
                    {Number(movie.vote_average) > 0 && <PopularityMeter popularity={movie.vote_average} />}

                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
