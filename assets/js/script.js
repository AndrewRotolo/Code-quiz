var startButton = document.getElementById("startButton");
var timerBox = document.getElementById("timer");

var timeLeft = 10;
var currentscore;
var hiscores = [""];
var gameActive = false;
var timing;

//main function
function gameStart() {
    gameActive = true;
 timing = setInterval(timer, 1000);
}

//ticks down the time and writes it to the timer box
function timer() {
    timeLeft--;
    timerBox.textContent = "Time Remaining: " + timeLeft;
    console.log(timeLeft);
    if(timeLeft === 0) {
        gameActive = false;
        clearInterval(timing);
    }
}

//starts game upon clicking the button
startButton.addEventListener("click", gameStart);