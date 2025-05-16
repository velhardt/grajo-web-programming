const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#flipbook");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

function disableButtons(duration) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    setTimeout(() => {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }, duration);
}

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-250px)";
    nextBtn.style.transform = "translateX(250px)";

}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";

}

function goNextPage() {
    if(currentLocation < maxLocation) {
        disableButtons(2000);
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                setTimeout(() => {
                    paper1.style.zIndex = 1;
                }, 1200);
                break;
            case 2:
                paper2.classList.add("flipped");
                setTimeout(() => {
                    paper2.style.zIndex = 2;
                }, 1200);
                break;
            case 3:
                paper3.classList.add("flipped");
                setTimeout(() => {
                    paper3.style.zIndex = 3;
                }, 1200);
                break;
            case 4:
                paper4.style.zIndex = 4;
                paper4.classList.add("flipped");
                closeBook(false);
                break;
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        disableButtons(2000);
        switch(currentLocation) {
            case 2:
                paper2.style.zIndex = 3;
                paper1.style.zIndex = 4;
                paper1.classList.remove("flipped");
                closeBook(true);
                break;
            case 3:
                paper2.classList.remove("flipped");
                setTimeout(() => {
                    paper2.style.zIndex = 3;
                }, 1200);
                break;
            case 4:
                paper3.classList.remove("flipped");
                setTimeout(() => {
                    paper3.style.zIndex = 2;
                }, 1200);
                break;
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                setTimeout(() => {
                    paper4.style.zIndex = 1;
                }, 1200);
                break;
        }

        currentLocation--;
    }

}

