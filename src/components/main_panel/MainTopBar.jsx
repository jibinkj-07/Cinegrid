import { RiSearchLine } from "react-icons/ri";
import { useCategory } from "../context/categoryContext";
import { useState } from 'react';

function MainTopBar() {

    const [query, setQuery] = useState("");

    const { activeCategory, updateCategory } = useCategory();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            // Create default item json
            const data = {
                id: `search-${query}`,
                label: `Search: ${query}`,
                search: true,
                endpoint: `/search/multi?query=${query}`
            }
            updateCategory(data);
            setQuery("");
        }

    }


    return (
        <div className="flex flex-col md:flex-row justify-between items-start  md:items-center pb-4">
            <h2 className="font-semibold text-xl pb-2 md:pb-0">
                {`${activeCategory.label} ${activeCategory.domain ?? ''}`}

            </h2>
            {/* Search bar */}
            <div className="relative w-full max-w-md md:max-w-sm mr-5 2xl:mr-[200px]">
                <RiSearchLine
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-transparent border-1 border-secondary  rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring focus:ring-blue-400 focus:border-primary placeholder-gray-400"
                    />
                </form>
            </div>

        </div>
    )
}

export default MainTopBar