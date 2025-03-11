/* eslint-disable react/prop-types */
import { imageBaseURL } from '../core/utilities.js';
import { Link } from 'react-router-dom';

import defaultThumbnailPortait from '../../assets/images/thumbnail-portait.png';

function CreditCard({ person }) {

    return (
        <Link className='min-w-40 max-w-60 flex flex-col rounded-xl bg-secondary overflow-clip items-start cursor-pointer active:scale-95 transition mb-5 shadow-sm shadow-gray-700'
            to={`/actor/${person.id}`}
        >
            <div className='flex-1 w-full object-cover'>
                <img
                    src={person.profile_path
                        ? `${imageBaseURL}${person.profile_path}`
                        : defaultThumbnailPortait}
                    alt='Profile image'
                />
            </div>

            <div className='p-2 flex-1'>
                <h2 className='font-semibold'>{person.name}</h2>
                <h2 className='text-[11px] font-light'>{person.character || person.job}</h2>
            </div>
        </Link>
    );
}

export default CreditCard;
