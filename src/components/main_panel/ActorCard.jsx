/* eslint-disable react/prop-types */
import PopularityMeter from "./PopularityMeter";
import { Link } from "react-router-dom";
import { imageBaseURL } from "../core/utilities";
import defaultThumbnail from '../../assets/images/thumbnail-portait.png';

const ActorCard = ({ profile }) => {

    const thumbnail = profile.profile_path;
    const name =
        profile.name || profile.original_name;


    return (
        <Link to={`/actor/${profile.id}`}>
            <div className="relative w-full h-70 rounded-2xl overflow-hidden shadow-lg border border-secondary cursor-pointer group active:scale-98">
                {/* Background Image with Zoom-in Effect */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform transition-transform duration-300 group-hover:scale-110  hover:opacity-50"
                    style={{
                        backgroundImage: `url(${thumbnail ?
                            `${imageBaseURL}${thumbnail}` :
                            `${defaultThumbnail}`} )`
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 backdrop-blur-[2px]">
                    <h3 className="text-white text-lg font-semibold">{name}</h3>
                    <h3 className="text-gray-300 text-[11px] font-medium">{profile.known_for_department}</h3>
                    {/* Popularity meter */}
                    {Number(profile.vote_average) > 0 && <PopularityMeter popularity={profile.vote_average} />}

                </div>
            </div>
        </Link>
    );
};

export default ActorCard;
