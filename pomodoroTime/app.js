const time = document.querySelector(".time")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")

let timeLeft = 1500
let interval = null

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

    time.innerHTML = formattedTime;
}

// start
start.addEventListener("click", function () {
    if (interval !== null) return; 

    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
});

// stop
stop.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
});

// reset
reset.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;

    timeLeft = 1500;
    updateTimer();
});

updateTimer();
