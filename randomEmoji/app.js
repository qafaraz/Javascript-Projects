const emojiBox = document.querySelector("#emojiBox");
const emojiBtn = document.querySelector("#emojiBtn");

const emojis = [
    "😀", "😎", "🥳", "🤖", "👻", "🔥", "🌈", "⚡", "🍕", "🚀",
    "🎮", "🎧", "💡", "🐱", "🐶", "🦊", "🐼", "🌸", "🌙", "⭐"
];

function showRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    emojiBox.textContent = emojis[randomIndex];
}

emojiBtn.addEventListener("click", showRandomEmoji);
