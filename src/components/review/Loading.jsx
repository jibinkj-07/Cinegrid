function Loading() {
    return (
        <div className='grid gap-5 mt-5'>
            {
                Array.from(
                    { length: 3 },
                    (_, index) => (
                        <div
                            key={index}
                            className={`w-full h-[200px] bg-gray-900 rounded-lg animate-pulse`}
                        >
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Loading