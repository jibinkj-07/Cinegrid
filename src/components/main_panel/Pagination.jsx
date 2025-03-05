import { useMovies } from "../context/moviesContext"

function Pagination() {
    const stepper = 6;

    const { page, nextPage, prevPage, updatePage, totalPage } = useMovies();

    return (
        <div className='flex justify-center items-center w-full text-gray-400 '>
            {/* Previous Button */}
            <button className={`${Number(page) <= 5 ? 'hidden' : 'block'} hover:text-primary active:scale-95 cursor-pointer`}>
                <span>Prev</span>
            </button>

            {/* Page numbers */}
            {/* Next Button */}
            <button className={`${Number(page) >= Number(totalPage) ? 'hidden' : 'block'} hover:text-primary active:scale-95 cursor-pointer`}>
                <span>Next</span>
            </button>

        </div>
    )
}

export default Pagination