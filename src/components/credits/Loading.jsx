function Loading() {
    return (
        <div className='grid md:grid-cols-2 gap-5 mt-5'>
            {
                Array.from(
                    { length: 10 },
                    (_, index) => (
                        <div
                            key={index}
                            className={`w-full h-[50px] bg-gray-900 rounded-lg animate-pulse`}
                        >
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Loading