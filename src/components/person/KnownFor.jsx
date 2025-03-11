import MovieCard from '../main_panel/MovieCard';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function KnownFor({ data }) {
    let credits = data.cast.slice(0, 10);
    if (credits.length === 0) {
        credits = data.crew.slice(0, 10);
    }

    if (credits.length < 1) return <div></div>
    return (
        <div className='flex flex-col max-w-full mt-5'>
            <div className='flex justify-between'>
                <h2 className="font-semibold text-xl mt-2">
                    Known For
                </h2>
                <Link
                    to={`credits`}
                    className="cursor-pointer hover:opacity-60 active:scale-95 text-primary">
                    <span>View all</span>
                </Link>
            </div>
            <div className="flex gap-5 overflow-x-auto py-5 px-2">
                {credits.map((movie) => (
                    <div
                        key={`${movie.id}${movie.character || movie.job}`}
                        className='w-1/3 md:w-1/7 flex-shrink-0'
                    >
                        <MovieCard movie={movie} type='movie' />

                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default KnownFor