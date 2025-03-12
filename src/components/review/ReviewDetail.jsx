import { useParams, useSearchParams } from "react-router-dom"
import TopBarTemplate from "../core/TopBarTemplate";
import { useEffect, useState } from "react";
import { getReviews } from "../services/movieService";
import Loading from "./Loading";
import Error from "../core/Error";
import ReviewCard from "../movie/ReviewCard";

function ReviewDetail() {
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const title = searchParams.get("title");
    const type = searchParams.get("type");


    const [loading, setLoading] = useState(true);
    const [reviewsData, setReviewsData] = useState("");
    const [error, setError] = useState("");

    const fetchReviews = async () => {
        try {
            const data = await getReviews(id, type);
            setReviewsData(data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchReviews();
        window.scrollTo(0, 0);
    }, []);
    let reviewCount = 0;
    if (reviewsData.results) {
        reviewCount = reviewsData.results.length;
    }

    return (
        <div>
            <TopBarTemplate />
            <div className="px-5 py-10 2xl:px-[200px] mt-10">
                <div className="pt-5 pb-2 border-b border-secondary">
                    <h2 className="text-3xl font-semibold">{title}</h2>
                    <h2 className="mt-1 text-gray-500 text-lg">All Reviews</h2>
                </div>
                <div className="md:px-50">

                    {
                        loading
                            ? <Loading />
                            : error
                                ? <Error
                                    message={error}
                                    onRetry={fetchReviews}
                                />
                                : <div className="mt-5 grid  gap-5">
                                    <div className="flex gap-2">
                                        <h2 className="font-semibold text-xl">Total Reviews</h2>
                                        <h2 className="font-semibold text-xl text-gray-400">({reviewCount})</h2>
                                    </div>
                                    {
                                        reviewCount > 0 ?
                                            reviewsData.results.map((review) =>
                                                <ReviewCard
                                                    key={review.id}
                                                    review={review} />
                                            ) : <h2 className="font-semibold text-xl text-center">No Reviews</h2>
                                    }
                                </div>
                    }
                </div>

            </div>

        </div>
    )
}

export default ReviewDetail