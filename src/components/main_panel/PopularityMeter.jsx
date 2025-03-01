/* eslint-disable react/prop-types */

function PopularityMeter({ userScore }) {
    const rating = Math.min(Math.max(parseInt(userScore) / 100, 0), 1);

    // Determine the color based on the rating in 0.10 intervals
    let color = 'bg-red-500';  // Default color for lowest score
    if (rating <= 0.10) {
        color = 'bg-red-500';
    } else if (rating <= 0.20) {
        color = 'bg-red-400';
    } else if (rating <= 0.30) {
        color = 'bg-red-300';
    } else if (rating <= 0.40) {
        color = 'bg-orange-400';
    } else if (rating <= 0.50) {
        color = 'bg-orange-300';
    } else if (rating <= 0.60) {
        color = 'bg-yellow-300';
    } else if (rating <= 0.70) {
        color = 'bg-yellow-200';
    } else if (rating <= 0.80) {
        color = 'bg-yellow-100';
    } else if (rating <= 0.90) {
        color = 'bg-green-100';
    } else {
        color = 'bg-green-500';
    }

    return (
        <div className="flex justify-between items-center mt-2">
            <div className="w-full h-[5px] bg-secondary rounded-full">
                <div
                    style={{ width: `${rating * 100}%` }}
                    className={`h-[5px] ${color} rounded-full`}
                />
            </div>
            {userScore && (
                <p className="text-[10px] ml-2">{parseInt(userScore)}%</p>
            )}
        </div>
    );
}

export default PopularityMeter;
