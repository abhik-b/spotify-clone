export function convertTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
    const returnedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const returnedseconds = seconds < 10 ? "0" + seconds : seconds;
    return `${returnedMinutes}:${returnedseconds}`;
}