export const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get the day, month, and year
    const day = date.getDate(); // Day of the month
    const month = date.toLocaleString('default', { month: 'short' }); // Abbreviated month name
    const year = date.getFullYear(); // Full year

    // Return the formatted string
    return `${day < 10 ? '0' + day : day} ${month} ${year}`;
}
