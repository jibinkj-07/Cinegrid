import { useParams, useSearchParams } from "react-router-dom"
import TopBarTemplate from "../core/TopBarTemplate";
import { useEffect, useState } from "react";
import { getCredits } from "../services/movieService";
import Loading from "./Loading";
import Error from "../core/Error";
import PersonCard from "./PersonCard";

function CreditPage() {
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const title = searchParams.get("title");
    const type = searchParams.get("type");


    const [loading, setLoading] = useState(true);
    const [creditsData, setCreditsData] = useState("");
    const [error, setError] = useState("");

    const fetchCredits = async () => {
        try {
            const data = await getCredits(id, type);
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
                    <h2 className="text-3xl font-semibold">{title}</h2>
                    <h2 className="mt-1 text-gray-500 text-lg">All Cast and Crew</h2>
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
                                    <div className="grid md:grid-cols-2">
                                        {
                                            creditsData.cast.map((data) =>
                                                <PersonCard
                                                    key={data.id}
                                                    person={data}
                                                />)
                                        }
                                    </div>
                                </div>

                                {/* Crew */}
                                <div className="">
                                    <div className="flex gap-2">
                                        <h2 className="font-semibold text-xl">Crew</h2>
                                        <h2 className="font-semibold text-xl text-gray-400">({crewNo})</h2>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        {
                                            creditsData.crew.map((data) =>
                                                <PersonCard
                                                    key={data.id}
                                                    person={data}
                                                />)
                                        }
                                    </div>
                                </div>
                            </div>
                }
            </div>

        </div>
    )
}

export default CreditPage