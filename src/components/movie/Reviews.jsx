/* eslint-disable react/prop-types */
import ReviewCard from "./ReviewCard"
import { Link } from 'react-router-dom'

function Reviews({ reviews, type, title, id }) {
    const totalReviews = reviews.results.length;
    if (totalReviews < 1) return <div></div>
    return (
        <div className="mb-5">
            <div className="flex justify-between">
                <h2 className="font-semibold text-2xl">Reviews ({totalReviews})</h2>
                {totalReviews > 1 && <Link
                    to={`/reviews/${id}?type=${type}&title=${title}`}
                    className="cursor-pointer hover:opacity-60 active:scale-95 text-primary">
                    <span>Read all</span>
                </Link>}
            </div>
            <div className="flex">
                <ReviewCard
                    review={reviews.results[0]} />
            </div>
        </div>
    )
}

export default Reviews