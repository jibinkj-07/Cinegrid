import { useParams, useSearchParams } from "react-router-dom";
import { getActorCredits } from "../services/movieService";
import TopBarTemplate from "../core/TopBarTemplate";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Error from "../core/Error";
import MovieCard from "../main_panel/MovieCard";


function ActorCredits() {
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const name = searchParams.get("name");

    const [loading, setLoading] = useState(true);
    const [creditsData, setCreditsData] = useState("");
    const [error, setError] = useState("");

    const fetchCredits = async () => {
        try {
            const data = await getActorCredits(id);
            setCreditsData(data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCredits();
    }, []);

    let castNo = 0;
    let crewNo = 0;
    if (creditsData) {
        castNo = creditsData.cast.length;
        crewNo = creditsData.crew.length;
    }

    return (
        <div>
            <TopBarTemplate />
            <div className="px-5 py-10 2xl:px-[200px] mt-10">
                <div className="pt-5 pb-2 border-b border-secondary">
                    <h2 className="text-3xl font-semibold">{name}</h2>
                    <h2 className="mt-1 text-gray-500 text-lg">All Known For</h2>
                </div>

                {
                    loading
                        ? <Loading />
                        : error
                            ? <Error
                                message={error}
                                onRetry={fetchCredits}
                            />
                            : <div className="mt-5 grid md:grid-cols-2 gap-5">
                                {/* Cast */}
                                <div className="">
                                    <div className="flex gap-2">
                                        <h2 className="font-semibold text-xl">Cast</h2>
                                        <h2 className="font-semibold text-xl text-gray-400">({castNo})</h2>
                                    </div>
                                    <div
                                        className="grid grid-cols-2 md:grid-cols-3 gap-5
                                         mt-5"
                                    >
                                        {
                                            creditsData.cast.map((data) =>

                                                <MovieCard
                                                    key={data.id}
                                                    movie={data} type='movie'
                                                />
                                            )
                                        }
                                    </div>
                                </div>

                                {/* Crew */}
                                <div className="">
                                    <div className="flex gap-2">
                                        <h2 className="font-semibold text-xl">Crew</h2>
                                        <h2 className="font-semibold text-xl text-gray-400">({crewNo})</h2>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5
                                         mt-5">
                                        {
                                            creditsData.crew.map((data) =>
                                                <MovieCard
                                                    key={data.id}
                                                    movie={data}
                                                    type={data.first_air_date
                                                        ? 'tv' :
                                                        'movie'}
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                }
            </div>

        </div>
    )
}

export default ActorCredits