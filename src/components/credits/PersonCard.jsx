/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { imageBaseURL } from '../core/utilities.js';
import defaultThumbnailPortait from '../../assets/images/thumbnail-portait.png';

function PersonCard({ person }) {
    return (
        <Link className='flex items-center p-2 gap-5 border border-secondary
         m-2 rounded-2xl hover:bg-secondary cursor-pointer active:scale-95'
            to={`/actor/${person.id}`}
        >
            <img
                src={person.profile_path
                    ? `${imageBaseURL}${person.profile_path}`
                    : defaultThumbnailPortait}
                alt='Profile image'
                height={60}
                width={60}
                className='rounded-xl select-none'
            />
            <div>
                <h2>
                    <h2 className='font-semibold'>{person.name}</h2>
                    <h2 className='text-[11px] font-light'>
                        {person.character || person.job}
                    </h2>
                </h2>
            </div>
        </Link>
    )
}

export default PersonCard