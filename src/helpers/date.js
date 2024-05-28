const formatDate = () => {
    var currentDate = new Date();
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          };
    return currentDate.toLocaleString(undefined, options);
}

export default formatDate;