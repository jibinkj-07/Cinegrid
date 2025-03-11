/* eslint-disable react/prop-types */
import CreditCard from "./CreditCard.jsx";
import { Link } from 'react-router-dom';
import Summary from "./Summary.jsx";
import Reviews from "./Reviews.jsx";

function OverviewSection({ data }) {

    let credits = data.credits.cast.slice(0, 12);
    if (credits.length === 0) {
        credits = data.credits.crew.slice(0, 12);
    }
    return (
        <div className="p-5 2xl:px-[200px] max-w-full md:flex justify-between">
            <div className="flex-1 md:max-w-3/4 md:min-w-3/4">
                {/* Overview */}
                <div className="p-5 rounded-2xl bg-secondary bg-opacity-80">
                    <h2 className="font-semibold text-2xl">Overview</h2>
                    <p className="mt-2">{data.overview}</p>
                </div>
                {/* Cast & Crew */}

                <div className="my-5">
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-2xl">Cast & Crew</h2>
                        <Link
                            to={`credits`}
                            className="cursor-pointer hover:opacity-60 active:scale-95 text-primary">
                            <span>View all</span>
                        </Link>
                    </div>
                    <div className="flex gap-4 overflow-x-auto w-full p-2">
                        {credits.map((person) => <CreditCard
                            key={person.id}
                            person={person} />
                        )}
                    </div>
                </div>
                {/* Reviews */}
                <Reviews reviews={data.reviews} />

            </div>
            {/* Details */}
            <Summary data={data} />

        </div>
    )
}

export default OverviewSection