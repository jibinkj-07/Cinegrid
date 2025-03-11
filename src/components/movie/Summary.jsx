/* eslint-disable react/prop-types */
import PopularityMeter from '../main_panel/PopularityMeter.jsx'
import { imageBaseURL, convertMinutesToHours } from '../core/utilities.js';


function Summary({ data }) {

    const summary = [
        data.spoken_languages[0] ? {
            label: "Language",
            value: data.spoken_languages[0].name || data.spoken_languages[0].english_name
        } : null,
        data.release_date ? {
            label: "Release Date",
            value: data.release_date
        } : null,
        data.first_air_date ? {
            label: "First Air Date",
            value: data.first_air_date
        } : null,
        data.last_air_date ? {
            label: "Last Air Date",
            value: data.last_air_date
        } : null,
        data.runtime ? {
            label: "Runtime",
            value: convertMinutesToHours(data.runtime)
        } : null,
        data.number_of_seasons ? {
            label: "Number of Seasons",
            value: data.number_of_seasons
        } : null,
        data.number_of_episodes ? {
            label: "Number of Episodes",
            value: data.number_of_episodes
        } : null,
        data.status ? {
            label: "Status",
            value: data.status
        } : null,
        data.production_countries[0] ? {
            label: "Country",
            value: data.production_countries[0].name
        } : null,
    ].filter(item => item && item.value); // Remove null/undefined values

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