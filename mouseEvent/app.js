const eventArea = document.querySelector("#eventArea");
const eventType = document.querySelector("#eventType");
const xPos = document.querySelector("#xPos");
const yPos = document.querySelector("#yPos");

function updateEvent(name) {
    eventType.textContent = name;
}

eventArea.addEventListener("mouseenter", () => {
    eventArea.classList.add("active");
    updateEvent("mouseenter");
});

eventArea.addEventListener("mouseleave", () => {
    eventArea.classList.remove("active");
    eventArea.classList.remove("clicked");
    xPos.textContent = "-";
    yPos.textContent = "-";
    updateEvent("mouseleave");
});

eventArea.addEventListener("mousemove", (event) => {
    const rect = eventArea.getBoundingClientRect();
    const x = Math.floor(event.clientX - rect.left);
    const y = Math.floor(event.clientY - rect.top);
    xPos.textContent = x;
    yPos.textContent = y;
    updateEvent("mousemove");
});

eventArea.addEventListener("click", () => {
    eventArea.classList.add("clicked");
    updateEvent("click");
    setTimeout(() => {
        eventArea.classList.remove("clicked");
    }, 200);
});
