const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Play sound on hover over "No" button
noBtn.addEventListener("mouseover", () => {
    const sound = new Audio("meow.mp3");
    sound.play();

    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Play sound and show confetti when user clicks "Yes"
yesBtn.addEventListener("click", () => {
    const sound = new Audio("omgwow.mp3");
    sound.play();

    question.innerHTML = "Yay, see you on the 5th March!";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
        document.body.appendChild(confetti);
        confetti.addEventListener("animationend", () => {
            confetti.remove();
        });
    }
});
