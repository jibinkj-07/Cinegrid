/* eslint-disable react/prop-types */
import emptySvg from '../../assets/svg/empty.svg';

function Empty({ message }) {
    return (
        <div className="flex justify-center flex-col items-center h-full">
            <img
                src={emptySvg}
                alt="Empty svg"
                width={250}
                height={250}
            />
            <h2 className='text-lg font-semibold mt-5'>
                {`${message}`}
            </h2>
        </div>
    )
}

export default Empty