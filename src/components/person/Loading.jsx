function Loading() {
    return (
        <div className='flex flex-col md:flex-row items-center md:items-start gap-6'>

            <div className={` w-60 md:w-80 h-[280px] md:h-[400px] bg-gray-900 rounded-lg animate-pulse`}>

            </div>
            <div className={` w-full h-[180px] md:h-[300px] bg-gray-900 rounded-lg animate-pulse`}>

            </div>
        </div>
    )
}

export default Loading