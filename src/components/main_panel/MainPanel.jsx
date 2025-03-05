import MainTopBar from './MainTopBar';
import GridLayout from './GridLayout.jsx';
import Loading from '../core/Loading.jsx';
import { useMovies } from '../context/moviesContext.js';

function MainPanel() {
    const { loading } = useMovies();
    return (
        <div className="flex flex-col flex-1 overflow-y-auto pt-4 pl-5">
            <MainTopBar />
            {
                loading ? <Loading /> : <GridLayout />
            }
        </div>
    )
}

export default MainPanel