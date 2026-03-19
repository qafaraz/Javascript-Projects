const colorCode = document.querySelector("#colorCode");
const generateBtn = document.querySelector("#generateBtn");

function getRandomHexColor() {
    const chars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setColor() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
}

generateBtn.addEventListener("click", setColor);
