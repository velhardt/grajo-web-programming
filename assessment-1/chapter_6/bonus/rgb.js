document.addEventListener("DOMContentLoaded", () => {
    const colorDisplay = document.getElementById("rgb-value");
    const optionsContainer = document.getElementById("options");
    const message = document.getElementById("msg");
    const livesDisplay = document.getElementById("lives");
    const scoreDisplay = document.getElementById("score");
    const restartButton = document.getElementById("restart");
    
    let lives = 3;
    let score = 0;
    
    function generateRGB() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
    
    function newRound() {
        if (lives === 0) {
            message.textContent = `Game Over! Final Score: ${score}`;
            restartButton.style.display = "block";
            optionsContainer.innerHTML = "";
            return;
        }

        const correctColor = generateRGB();
        colorDisplay.textContent = correctColor;
        
        let options = [correctColor];
        while (options.length < 3) {
            let randomColor = generateRGB();
            if (!options.includes(randomColor)) {
                options.push(randomColor);
            }
        }
        
        options.sort(() => Math.random() - 0.5);
        optionsContainer.innerHTML = "";
        
        options.forEach(color => {
            const btn = document.createElement("button");
            btn.style.background = color;
            btn.classList.add("color-option");
            btn.addEventListener("click", () => checkAnswer(color, correctColor));
            optionsContainer.appendChild(btn);
        });
    }
    
    function checkAnswer(selected, correct) {
        if (selected === correct) {
            message.textContent = "Correct!";
            score++;
        } else {
            message.textContent = "Wrong! Try again.";
            lives--;
        }
        scoreDisplay.textContent = `${score}`;
        livesDisplay.textContent = `${lives}`;
        newRound();
    }
    
    restartButton.addEventListener("click", () => {
        lives = 3;
        score = 0;
        livesDisplay.textContent = `${lives}`;
        scoreDisplay.textContent = `${score}`;
        message.textContent = "";
        restartButton.style.display = "none";
        newRound();
    });
    restartButton.style.display = "none";
    newRound();
});
