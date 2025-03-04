import MainTopBar from './MainTopBar';
import MovieCard from './MovieCard';

function MainPanel() {
    return (
        <div className="flex flex-col flex-1 overflow-y-auto pt-4 pl-5">
            <MainTopBar />

            <div
                className="pt-2 pr-5 2xl:pr-[200px] pb-70 md:pb-20
    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-10
    flex-1 overflow-y-auto"
            >
                {Array.from({ length: 50 }, (_, index) => (
                    <MovieCard key={index} />
                ))}
            </div>
        </div>
    )
}

export default MainPanel