
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPersonDetail } from "../services/movieService";
import TopBarTemplate from '../core/TopBarTemplate';
import Profile from "./Profile";
import Error from "../core/Error";

function PersonDetail() {
    // Fetching param from URL
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [personData, setPersonData] = useState("");
    const [error, setError] = useState("");

    const fetchPersonDetail = async () => {
        try {
            const data = await getPersonDetail(id);
            setPersonData(data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPersonDetail();
    }, []);

    if (loading) return <div>loading</div>
    if (error) return (
        <div className="min-h-screen flex justify-center items-center">
            <Error
                message={error}
                onRetry={fetchPersonDetail}
            />
        </div>);

    return (
        <div className="flex justify-center flex-col items-center overflow-x-hidden">
            <TopBarTemplate />
            <div className="py-20 px-5 2xl:px-[200px] w-full">
                <Profile data={personData} />
            </div>


        </div>
    );
}

export default PersonDetail