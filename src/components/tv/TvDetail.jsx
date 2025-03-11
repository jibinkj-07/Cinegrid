
import { useParams } from "react-router-dom";
import TopBarTemplate from "../core/TopBarTemplate";
import CoverSection from "../movie/CoverSection";
import OverviewSection from "../movie/OverviewSection";
import { useEffect, useState } from "react";
import { getShowDetail } from "../services/movieService";
import Loading from "../movie/Loading";
import Error from "../core/Error";


function TvDetail() {

    // Fetching param from URL
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [showData, setshowData] = useState("");
    const [error, setError] = useState("");

    const fetchshowDetail = async () => {
        try {
            const data = await getShowDetail(id);
            setshowData(data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchshowDetail();
    }, []);

    if (loading) return <Loading />
    if (error) return (
        <div className="min-h-screen flex justify-center items-center">
            <Error
                message={error}
                onRetry={fetchshowDetail}
            />
        </div>);

    return (
        <div className="flex justify-center flex-col items-center overflow-x-hidden">

            <TopBarTemplate />

            <CoverSection data={showData} />

            <OverviewSection data={showData} />

        </div>
    );
}

export default TvDetail