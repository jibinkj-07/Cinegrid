import { formatDate, imageBaseURL } from "../core/utilities"

/* eslint-disable react/prop-types */
function ReviewCard({ review }) {
    const authorName = review.author || review.username;
    const profileImg = review.author_details.avatar_path;
    return (
        <div className="my-4 p-5 bg-secondary w-full rounded-2xl">
            {/* Auth details */}
            <div className="flex gap-2">
                <div className="w-[45px] h-[45px] bg-pink-600 rounded-full overflow-clip flex justify-center items-center ">
                    {
                        profileImg
                            ? <img src={`${imageBaseURL}${profileImg}`}
                                className="object-cover w-full h-full" />
                            : <h2 className="font-semibold text-2xl">{authorName[0]}</h2>
                    }

                </div>
                <div>
                    <h2 className="font-semibold">{authorName}</h2>
                    <p className="text-[12px]">Reviewed on {formatDate(review.created_at)}</p>
                </div>
            </div>

            {/* Content */}
            <p className="mt-5 text-justify">{review.content}</p>
        </div>
    )
}

export default ReviewCard