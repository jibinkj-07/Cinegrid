
import { useParams } from "react-router-dom";
import TopBarTemplate from "../core/TopBarTemplate";
import CoverSection from "./CoverSection";
import OverviewSection from "./OverviewSection";
import { useEffect, useState } from "react";
import { getMovieDetail } from "../services/movieService";
import Loading from "./Loading";
import Error from "../core/Error";

function MovieDetail() {
    // Fetching param from URL
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState("");
    const [error, setError] = useState("");

    const fetchMovieDetail = async () => {
        try {
            const data = await getMovieDetail(id);
            setMovieData(data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovieDetail();
    }, []);

    if (loading) return <Loading />
    if (error) return (
        <div className="min-h-screen flex justify-center items-center">
            <Error
                message={error}
                onRetry={fetchMovieDetail}
            />
        </div>);

    return (
        <div className="flex justify-center flex-col items-center overflow-x-hidden">

            <TopBarTemplate />

            <CoverSection data={movieData} />

            <OverviewSection data={movieData} />

        </div>
    );
}

export default MovieDetail;
