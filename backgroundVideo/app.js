const cinematic = document.querySelector("#cinematic")
const controls = document.querySelector("#controls")
const play = document.querySelector("#play")
const stop = document.querySelector("#stop")

play.addEventListener("click", () => {
    cinematic.pause();
    play.style.display = "none"
    stop.style.display = "block"
})
stop.addEventListener("click", () => {
    cinematic.play();
    stop.style.display = "none"
    play.style.display = "block"
})