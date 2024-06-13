export function convertDateToStringFormat(date) {
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        };
    return date.toLocaleString(undefined, options);
}

export function convertStringToFormDateFormat(str) {
    const date = new Date(str);

    const year = date.getFullYear();

    let month = date.getMonth() + 1; // month is returned as an index position in an array, so index is always one less than actual month
    month = month.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    let day = date.getDate();
    day = day.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    return `${year}-${month}-${day}`;
}

export function convertStringToDate(str) {
    return new Date(str);
}