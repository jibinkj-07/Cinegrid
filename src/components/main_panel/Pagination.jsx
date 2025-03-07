import { useMovies } from "../context/moviesContext"

function Pagination() {

    const { page, nextPage, prevPage, updatePage, totalPages } = useMovies();
    const pageRange = 3;
    const isNextDisabled = page >= totalPages;
    const isPrevDisabled = page <= 1;


    // Function to get page numbers
    const getPageNumbers = () => {

        const start = Math.max(1, page - pageRange);
        const end = Math.min(totalPages, page + pageRange);

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }

    return (
        <div className='flex justify-center flex-col items-center w-full text-gray-400 '>

            {/* Numbers */}
            <div>
                {/* Left Ellipsis */}
                {page > pageRange + 1 && (
                    <>
                        <button onClick={() => updatePage(1)} className="hover:text-primary active:scale-95 cursor-pointer px-3 py-1 border rounded ml-5">
                            1
                        </button>
                        <span className="ml-3 text-2xl">....</span>
                    </>
                )}

                {/* Page numbers */}
                {
                    getPageNumbers().map((pageNo) => (
                        <button key={pageNo}
                            onClick={() => updatePage(pageNo)}
                            className={`
                                ${pageNo === page ? 'text-primary hover:text-on-body' : 'hover:text-primary'}
                                 active:scale-95 cursor-pointer px-3 py-1 border rounded ml-3`}
                        >
                            {pageNo}
                        </button>
                    ))
                }

                {/* Right Ellipsis */}
                {page < totalPages - pageRange && (
                    <>
                        <span className="mx-3 text-2xl">....</span>
                        <button onClick={() => updatePage(totalPages)} className="hover:text-primary active:scale-95 cursor-pointer px-3 py-1 border rounded">
                            {totalPages}
                        </button>
                    </>
                )}

            </div>
            {/* Next Prev buttons */}
            <div className="mt-6 flex justify-between">
                {/* Previous Button */}
                <button
                    onClick={prevPage}
                    disabled={isPrevDisabled}
                    className={
                        `
                        ${isPrevDisabled ? 'disabled:opacity-50' : 'hover:text-primary active:scale-95 cursor-pointer'}
                         mr-10 `}>
                    <span>&lt; Prev</span>
                </button>

                {/* Next Button */}
                <button
                    onClick={nextPage}
                    disabled={isNextDisabled}
                    className={
                        `
                        ${isNextDisabled ? 'disabled:opacity-50' : 'hover:text-primary active:scale-95 cursor-pointer'}
                         ml-10 `}>
                    <span>Next &gt;</span>
                </button>
            </div>
        </div>
    )
}

export default Pagination