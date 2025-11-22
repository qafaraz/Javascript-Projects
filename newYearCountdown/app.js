const year = document.querySelector("#year")
const day = document.querySelector("#day")
const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")

function updateCountdown() {
    const now = new Date().getTime();
    const newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();
    const gap = newYearTime - now;
    const secondEl = 1000;
    const minuteEl = secondEl * 60;
    const hourEl = minuteEl * 60;
    const dayEl = hourEl * 24;
    const d = Math.floor(gap / dayEl);
    const h = Math.floor((gap % dayEl) / hourEl);
    const m = Math.floor((gap % hourEl) / minuteEl);
    const s = Math.floor((gap % minuteEl) / secondEl);
    day.innerText = `${d} days`;
    hour.innerText = `${h} hours`;
    minute.innerText = `${m} minutes`;
    second.innerText = `${s} seconds`;
    setTimeout(updateCountdown, 1000)
}
updateCountdown();
