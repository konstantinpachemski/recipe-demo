export const getTime = (time) => {
    let timeSplit = time.split(':');
    return timeSplit[0] === '00' ? (timeSplit[1] + ' minutes.') : (timeSplit[0] + ' hours ' + timeSplit[1] + ' minutes.')
};