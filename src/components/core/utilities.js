export const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    // Get the day, month, and year
    const day = date.getDate(); // Day of the month
    const month = date.toLocaleString('default', { month: 'short' }); // Abbreviated month name
    const year = date.getFullYear(); // Full year

    // Return the formatted string
    return `${day < 10 ? '0' + day : day} ${month} ${year}`;
}

export const convertMinutesToHours = (minutes) => {
    if (minutes < 0) return "";

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}m`;
}

export const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';
export const coverimageBaseURL = 'https://image.tmdb.org/t/p/original/';
