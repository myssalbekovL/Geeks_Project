const gmailInput = document.querySelector('#gmail_input')

const gmailCheck = document.querySelector('#gmail_button')

const gmailResult = document.querySelector('#gmail_result')

const gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/

gmailCheck.onclick = () => {

    if (gmailRegex.test(gmailInput.value)){
        gmailResult.innerHTML = 'CORRECT GMAIL'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'WRONG GMAIL'
        gmailResult.style.color = 'red'
    }

}



const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 447 && positionY <= 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 447 && positionY <= 447) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >= 1 && positionY >= 447) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY >= 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}

move()

let minutes = 0;
let seconds = 0;
let mlSeconds = 0;
let intervalId;

function updateTimer() {
    document.getElementById("minutesS").innerText = String(minutes).padStart(2, '0');
    document.getElementById("secondsS").innerText = String(seconds).padStart(2, '0');
    document.getElementById("ml-secondsS").innerText = String(mlSeconds).padStart(2, '0');
}

function startTimer() {
    if (!intervalId) {
        intervalId = setInterval(function () {
            mlSeconds++;
            if (mlSeconds === 100) {
                mlSeconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateTimer();
        }, 10);
    }
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    mlSeconds = 0;
    updateTimer();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);