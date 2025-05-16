const audioFiles = [
    { name: "ah-ha", src: "../audio/ah-ha.mp3" },
    { name: "back-of-the-net", src: "../audio/back-of-the-net.mp3" },
    { name: "bangoutoforder", src: "../audio/bangoutoforder.mp3" },
    { name: "dan", src: "../audio/dan.mp3" },
    { name: "emailoftheevening", src: "../audio/emailoftheevening.mp3" },
    { name: "hellopartridge", src: "../audio/hellopartridge.mp3" },
    { name: "iateascotchegg", src: "../audio/iateascotchegg.mp3" },
    { name: "imconfused", src: "../audio/imconfused.mp3" },
    { name: "swamp-izzo", src: "../audio/swamp-izzo.mp3" },
    { name: "boom", src: "../audio/boom.mp3" },
    { name: "metro", src: "../audio/metro.mp3" },
    { name: "spider", src: "../audio/spider.mp3" },
    { name: "undertaker", src: "../audio/undertaker.mp3" },
    { name: "seyuh", src: "../audio/seyuh.mp3" },
    { name: "skeletons", src: "../audio/skeletons.mp3" },
    { name: "fall", src: "../audio/fall.mp3" },
    { name: "reset", src: "../audio/reset.mp3" },
    { name: "canon", src: "../audio/canon.mp3" },

];

const buttonCount = 9;
let currentPage = 0;

function buttons() {
    const buttonGrid = document.querySelector(".button-grid");
    buttonGrid.innerHTML = "";
    const startIndex = currentPage * buttonCount;
    const endIndex = startIndex + buttonCount;
    const visibleFiles = audioFiles.slice(startIndex, endIndex);
    visibleFiles.forEach(file => {
        const button = document.createElement("button");
        button.classList.add("audio-button");
        button.textContent = file.name;
        button.setAttribute("data-audio", file.src);
        button.addEventListener("click", () => {
            const audio = new Audio(file.src);
            audio.play();
        });
        buttonGrid.appendChild(button);
    });
    document.getElementById("prev").style.display = currentPage === 0 ? "none" : "inline-block";
    const totalPages = Math.ceil(audioFiles.length / buttonCount);
    document.getElementById("next").style.display = currentPage === totalPages - 1 ? "none" : "inline-block"; "inline-block";
}

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        buttons();
    }
});

document.getElementById("next").addEventListener("click", () => {
    if ((currentPage + 1) * buttonCount < audioFiles.length) {
        currentPage++;
        buttons();
    }
});

buttons();

document.getElementById("tts-button").addEventListener("click", function() {
    const text = document.querySelector(".tts").value;

    if (text.trim() === "") {
        alert("No text provided.");
        return;
    }

    const speak = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speak);
})