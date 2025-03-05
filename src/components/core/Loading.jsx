import { useState, useEffect } from "react";

function Loading() {
    const [skeletonCount, setSkeletonCount] = useState(10);

    useEffect(() => {
        const updateSkeletonCount = () => {
            const width = window.innerWidth;
            if (width < 640) setSkeletonCount(6); // Mobile
            else if (width < 1024) setSkeletonCount(12); // Tablet
            else if (width < 1536) setSkeletonCount(15); // Desktop
            else setSkeletonCount(18); // Larger Desktop
        };

        updateSkeletonCount(); // Initial setup
        window.addEventListener("resize", updateSkeletonCount);

        return () => window.removeEventListener("resize", updateSkeletonCount);
    }, []);

    return (
        <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-10 pb-10 w-full pr-5 2xl:pr-[200px] md:pb-20">
            {
                Array.from({ length: skeletonCount }).map((_, index) => (
                    <div key={index} className="w-full h-70 bg-gray-700 rounded-lg animate-pulse"></div>
                ))
            }
        </div>
    );
}

export default Loading;
