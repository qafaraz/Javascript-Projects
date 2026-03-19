const dice = document.querySelector("#dice");
const diceNumber = document.querySelector("#diceNumber");
const rollBtn = document.querySelector("#rollBtn");
const history = document.querySelector("#history");

const rolls = [];

function createHistoryItem(value, index) {
    const li = document.createElement("li");
    li.textContent = `Roll ${index}: ${value}`;
    return li;
}

function renderHistory() {
    history.innerHTML = "";
    rolls.forEach((value, index) => {
        history.append(createHistoryItem(value, index + 1));
    });
}

function rollDice() {
    const value = Math.floor(Math.random() * 6) + 1;
    diceNumber.textContent = value;
    rolls.unshift(value);
    dice.classList.remove("roll");
    requestAnimationFrame(() => {
        dice.classList.add("roll");
    });
    renderHistory();
}

rollBtn.addEventListener("click", rollDice);
