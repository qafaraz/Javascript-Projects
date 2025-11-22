const form = document.querySelector("form");
const data = document.querySelector("#data");

form.addEventListener("submit", e => {
    e.preventDefault();
    const card = document.createElement("div");
    card.innerHTML = `
        <p><strong>First:</strong> ${firstName.value}</p>
        <p><strong>Last:</strong> ${lastName.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Message:</strong> ${message.value}</p>
        <button class="del">Sil</button>
    `;
    data.append(card);
    card.querySelector(".del").onclick = () => card.remove();
});
