/* eslint-disable react/prop-types */

function PersonalInfo({ data }) {
    const info = [
        data.known_for_department ? {
            label: "Known For",
            value: data.known_for_department
        } : null,
        data.gender ? {
            label: "Gender",
            value: data.gender === 1 ? "Female" : data.gender === 2 ? "Male" : "Non Binary"
        } : null,

        data.birthday ? {
            label: "Birthday",
            value: data.birthday
        } : null,
        data.place_of_birth ? {
            label: "Place",
            value: data.place_of_birth
        } : null,
        data.deathday ? {
            label: "Deathday",
            value: data.deathday
        } : null,

    ].filter(item => item && item.value); // Remove null/undefined values

    return (
        <div className="flex flex-col items-start justify-start w-full mt-5">
            <h2 className="font-semibold  text-xl mb-2">Personal Info</h2>
            {
                info.map((item) => (
                    <div key={item.label} className="my-2" >
                        <h2>{item.label}</h2>
                        <p className="font-light text-gray-400">
                            {item.value}
                        </p>
                    </div>
                ))
            }

            {
                data.also_known_as.length > 1 && <div>
                    <h2>Also Known As</h2>
                    {
                        data.also_known_as.map((item) => (
                            <div key={item} className="my-1" >
                                <p className="font-light text-gray-400">
                                    {item}
                                </p>
                            </div>
                        ))
                    }
                </div>
            }


        </div>
    )
}

export default PersonalInfo