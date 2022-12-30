const button = document.getElementById("button");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const newyeardate = new Date("Jan 1, 2023 00:00:00").getTime();

button.addEventListener('click', () => {
    setInterval(function() {
        const currentdate = new Date().getTime();
        const timeleft = newyeardate - currentdate;
    
        const daysleft = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hoursleft = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutesleft = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
        const secondsleft = Math.floor(timeleft % (1000 * 60) / (1000));
    
        days.innerHTML = daysleft;
        hours.innerHTML = hoursleft;
        minutes.innerHTML = minutesleft;
        seconds.innerHTML = secondsleft;
    }, 1000);
});