/* eslint-disable react/prop-types */
import defaultThumbnail from '../../assets/images/thumbnail-cover.png';
import defaultThumbnailPortait from '../../assets/images/thumbnail-portait.png';
import { imageBaseURL, coverimageBaseURL } from '../core/utilities';

function CoverSection({ data }) {
    return (

        <div className="w-full overflow-hidden">
            {/* Cover image with black overlay */}
            <div
                className="min-h-[450px] bg-cover bg-center flex flex-col md:flex-row justify-end md:justify-start md:items-end p-10 2xl:px-[200px] relative"
                style={{
                    backgroundImage: data.backdrop_path
                        ? `url(${coverimageBaseURL}${data.backdrop_path})`
                        : `url(${defaultThumbnail})`
                }}
            >
                {/* Black overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-20"></div>


                <div className="w-45 md:w-60 h-auto aspect-[2/3] bg-secondary border rounded-xl bg-cover bg-center transform transition-transform duration-300 hover:scale-110"
                    style={{
                        backgroundImage: data.poster_path
                            ? `url(${imageBaseURL}${data.poster_path})`
                            : `url(${defaultThumbnailPortait})`

                    }}
                >
                </div>

                <div className="mt-3 md:ml-5 z-10">
                    {/* Ensure text appears above the overlay */}
                    <h2 className="text-4xl font-semibold text-white">
                        {data.title || data.original_title || data.original_name}
                    </h2>
                    <p className="text-white">{data.tagline}</p>

                    {/* Genres wrap properly on smaller screens */}
                    <div className="flex flex-wrap gap-3 mt-2 select-none">
                        {data.genres.map((genre) => (
                            <div key={genre.id} className="bg-primary px-3 py-1 rounded-2xl text-[12px] text-black font-semibold">
                                {genre.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoverSection