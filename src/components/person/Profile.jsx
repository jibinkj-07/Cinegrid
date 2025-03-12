/* eslint-disable react/prop-types */
import defaultThumbnail from '../../assets/images/thumbnail-portait.png';
import { imageBaseURL } from '../core/utilities';
import PersonalInfo from './PersonalInfo';
import KnownFor from './KnownFor';


const Name = ({ name }) => <h2 className='text-4xl font-semibold'>{name}</h2>;



function Profile({ data }) {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            {/* Left Side */}
            <div className="w-full md:w-1/4 flex flex-col items-center">
                <div className='w-48 h-58 md:w-full md:h-120'>
                    <img
                        src={data.profile_path
                            ? `${imageBaseURL}${data.profile_path}`
                            : defaultThumbnail}
                        alt="Portrait"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="block md:hidden">
                    <Name name={data.name} />
                </div>
                <PersonalInfo data={data} />
            </div>
            {/* Right Side */}
            <div className="w-full md:w-3/4">
                <div className="hidden md:block">
                    <Name name={data.name} />
                </div>
                <div className='w-full'>
                    {
                        data.biography &&
                        <>
                            < h2 className="font-semibold text-xl mt-5">
                                Biography
                            </h2>
                            <p className="text-gray-400 text-justify my-2">
                                {data.biography}
                            </p>
                        </>
                    }

                </div>
                <KnownFor data={data.credits} />
            </div>
        </div >
    );
}


export default Profile