/* eslint-disable react/prop-types */

function PopularityMeter({ popularity }) {

    // Determine the color based on the popularity value (0-10 scale)
    let color = 'bg-red-500';  // Default color for lowest score
    if (popularity <= 3) {
        color = 'bg-red-500'; // Very low popularity
    } else if (popularity <= 5) {
        color = 'bg-orange-400'; // Low popularity
    } else if (popularity <= 7.5) {
        color = 'bg-yellow-400'; // Moderate popularity
    } else {
        color = 'bg-green-600'; // Very high popularity
    }

    // Calculate the percentage for rendering
    const popularityPercentage = popularity * 10;

    return (
        <div className="flex justify-between items-center mt-2">
            <div className="w-full h-[5px] bg-secondary rounded-full">
                <div
                    style={{ width: `${popularityPercentage}%` }}
                    className={`h-[5px] ${color} rounded-full`}
                />
            </div>
            {popularity && (
                <p className="text-[10px] ml-2">{parseInt(popularityPercentage)}%</p>
            )}
        </div>
    );
}

export default PopularityMeter;
