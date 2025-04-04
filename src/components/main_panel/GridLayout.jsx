import { useRef, useEffect } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination.jsx';
import Error from '../core/Error.jsx';
import { useMovies } from '../context/moviesContext.js';
import { useCategory } from '../context/categoryContext.js';
import { categories } from '../navigation/nav.helper.js';
import { useScroll } from '../context/scrollContext.js';
import ActorCard from './ActorCard.jsx';
import Empty from '../core/Empty.jsx';

function GridLayout() {
    const { movies, error, fetchMovies } = useMovies();
    const { activeCategory } = useCategory();
    const scrollRef = useRef(null);
    const { scrollTop, updateScrollTop } = useScroll();


    useEffect(() => {
        scrollRef.current.scrollTop = scrollTop;
    }, [])

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollTop } = scrollRef.current;
            updateScrollTop(scrollTop);
        }
    };

    if (error) return <Error message={error} onRetry={fetchMovies} />;

    if (Object.keys(movies).length === 0) {
        return <Empty message={"No results found!"} />;
    }

    return (
        <div
            className="flex-1 overflow-y-auto w-full pr-5 2xl:pr-[200px] pb-70 md:pb-20"
            ref={scrollRef}
            onScroll={handleScroll}
        >
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-10 pb-10">
                {
                    movies.map((data) => {
                        if (activeCategory.type === "person" || data.media_type === 'person') {
                            return <ActorCard key={data.id} profile={data} />;
                        }
                        return <MovieCard
                            key={data.id}
                            movie={data}
                            type={activeCategory.type} />;
                    })
                }
            </div>
            <Pagination />

        </div>
    );
}

export default GridLayout;
