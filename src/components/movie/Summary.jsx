/* eslint-disable react/prop-types */
import PopularityMeter from '../main_panel/PopularityMeter.jsx'
import { imageBaseURL, convertMinutesToHours } from '../core/utilities.js';


function Summary({ data }) {

    const summary = [
        {

            label: "Language",
            value: data.spoken_languages[0].name || data.spoken_languages[0].english_name
        },
        {
            label: "Release Date",
            value: data.release_date
        },
        {
            label: "Runtime",
            value: convertMinutesToHours(data.runtime)
        },
        {
            label: "Status",
            value: data.status
        },
        {
            label: "Country",
            value: data.production_countries[0].name
        },
    ];

    return (
        <div className="flex flex-col gap-5 w-full md:ml-8">
            {Number(data.vote_average) > 0 && <div>
                <h2 className="font-semibold text-lg">Popularity</h2>
                <PopularityMeter popularity={data.vote_average} />
            </div>}

            {
                summary.map((item) => (
                    <div key={item.label} >
                        <h2 className="font-semibold text-lg">{item.label}</h2>
                        <p className="font-light">
                            {item.value}
                        </p>
                    </div>
                ))
            }
            <div>
                <h2 className="font-semibold text-lg">Production</h2>
                {
                    data.production_companies.map((company) => (
                        <div className="flex gap-3 justify-start items-center my-3"
                            key={company.id} >

                            <div className="bg-gray-600 w-[60px] h-[60px] flex justify-center items-center p-2 rounded">
                                {
                                    company.logo_path && <img src={`${imageBaseURL}${company.logo_path}`} width={60} height={60} />
                                }
                            </div>
                            <div>
                                <p className="font-light">{company.name}</p>
                                <p className="font-light">Country: {company.origin_country}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Summary