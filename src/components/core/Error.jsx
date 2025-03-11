/* eslint-disable react/prop-types */
import errorSvg from '../../assets/svg/error.svg';
import FilledButton from './FilledButton';

function Error({ message, onRetry }) {
    return (
        <div className="flex justify-center flex-col items-center h-full">
            <img
                src={errorSvg}
                alt="error svg"
                width={250}
                height={250}
            />
            <h2 className='text-lg font-semibold mt-5'>
                Something went wrong
            </h2>
            <h2 className='my-2'>
                {`${message}`}
            </h2>
            <FilledButton label="Try again" onClick={onRetry} />
        </div>
    )
}

export default Error