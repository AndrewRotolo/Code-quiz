var startButton = document.getElementById("startButton");
var timerBox = document.getElementById("timer");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var answers = document.getElementById("answercard");
var scoreDisplay = document.getElementById("currentScore");
var questionBox = document.getElementById("question");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var score3 = document.getElementById("score3");

var timeLeft = 60;
var currentScore = 0;
var hiscoreStorage = localStorage.getItem(hiscores);
var hiscores = JSON.parse(hiscoreStorage) ?? [];
var gameActive = false;
//this variable is only used for the timer function. Probably could rewrite to not need it, but it's a low priority
var timing;

//these variables are for the images used as the answers
var Q1A1 = document.createElement("img");
Q1A1.setAttribute("src", "./assets/img/Q1A1.jpg");
Q1A1.setAttribute("object-fit", "cover");
var Q1A2 = document.createElement("img");
Q1A2.setAttribute("src", "./assets/img/Q1A2.jpg");
Q1A2.setAttribute("object-fit", "cover");
var Q1A3 = document.createElement("img");
Q1A3.setAttribute("src", "./assets/img/Q1A3.jpg");
Q1A3.setAttribute("object-fit", "cover");
var Q1A4 = document.createElement("img");
Q1A4.setAttribute("src", "./assets/img/Q1A4.jpg");
Q1A4.setAttribute("object-fit", "cover");

//1, 1, 2, 4, 3

//main function
function gameStart() {
    displayScore();
    gameActive = true;
    scoreDisplay.textContent = currentScore;
 //the following starts the timer. Comment it out if testing stuff for more than 60 seconds. Or you could set timeLeft to some crazy high number. That works too.  
 timing = setInterval(timer, 1000);
    Question1();
    gameEnd();
}

//ticks down the time and writes it to the timer box
function timer() {
    timeLeft--;
    timerBox.textContent = "Time Remaining: " + timeLeft;
    scoreDisplay.textContent = currentScore;
    console.log(timeLeft);
    if(timeLeft === 0 || timeLeft < 0) {
        //gameActive will be the primary variable for determining if the gameplay function should continue. ALWAYS USE IT.
        gameActive = false;
        clearInterval(timing);
        gameEnd();
    }
}

//first question -
function Question1() {
    questionBox.textContent = "Which is NOT a coding language?";
    answer1.appendChild(Q1A1);
    answer2.appendChild(Q1A2);
    answer3.appendChild(Q1A3);
    answer4.appendChild(Q1A4);
    var questionActive = true;

    function correctAnswer() {
        currentScore++;
        questionActive = false;
    } 

    function wrongAnswer() {
        currentScore--;
        timeLeft = timeLeft - 5;
        questionActive = false;
    }
    
        answer1.addEventListener("click", correctAnswer);
        answer2.addEventListener("click", wrongAnswer);
        answer3.addEventListener("click", wrongAnswer);
        answer4.addEventListener("click", wrongAnswer);

        var hold = setInterval(answerWait, 50);
        //prevents the function from ending until an answer is selected, then clears event listener.
        function answerWait() {
            if(questionActive === false) {
                answer1.removeEventListener("click", correctAnswer);
                answer2.removeEventListener("click", wrongAnswer);
                answer3.removeEventListener("click", wrongAnswer);
                answer4.removeEventListener("click", wrongAnswer);
                clearInterval(hold);
            }
        }
    }


function gameEnd() {
    var lowestScore = hiscores[2];



    if  (currentScore > lowestScore) {
        saveScore(currentScore, hiscores);
    }
    
}

function saveScore(currentScore, hiscores) {
    const name = prompt("High score! Enter your name!");
    const newScore = {currentScore, name};

    hiscores.push(newScore);
    hiscores.sort((a, b) => b.currentScore - a.currentScore);

    hiscores.splice(3);

    localStorage.setItem(hiscoreStorage, JSON.stringify(hiscores));
}

function displayScore() {
    score1.textContent = hiscores[0];
    score2.textContent = hiscores[1];
    score3.textContent = hiscores[2];
}


//starts game upon clicking the "Start Game" button
startButton.addEventListener("click", gameStart);
