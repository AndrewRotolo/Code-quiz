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

var timeLeft =60;
var currentScore = 0;
var gameActive = false;
//this variable is only used for the timer function. Probably could rewrite to not need it, but it's a low priority
var timing;
var timeUp = false;
var questionActive;

let hiscores = [];

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

var Q2A1 = document.createElement("img");
Q2A1.setAttribute("src", "./assets/img/Q2A1.jpg");
Q2A1.setAttribute("object-fit", "cover");
var Q2A2 = document.createElement("img");
Q2A2.setAttribute("src", "./assets/img/Q2A2.jpg");
Q2A2.setAttribute("object-fit", "cover");
var Q2A3 = document.createElement("img");
Q2A3.setAttribute("src", "./assets/img/Q2A3.jpg");
Q2A3.setAttribute("object-fit", "cover");
var Q2A4 = document.createElement("img");
Q2A4.setAttribute("src", "./assets/img/Q2A4.jpg");
Q2A4.setAttribute("object-fit", "cover");

var Q3A1 = document.createElement("img");
Q3A1.setAttribute("src", "./assets/img/Q3A1.jpg");
Q3A1.setAttribute("object-fit", "cover");
var Q3A2 = document.createElement("img");
Q3A2.setAttribute("src", "./assets/img/Q3A2.jpg");
Q3A2.setAttribute("object-fit", "cover");
var Q3A3 = document.createElement("img");
Q3A3.setAttribute("src", "./assets/img/Q3A3.jpg");
Q3A3.setAttribute("object-fit", "cover");
var Q3A4 = document.createElement("img");
Q3A4.setAttribute("src", "./assets/img/Q3A4.jpg");
Q3A4.setAttribute("object-fit", "cover");

var Q4A1 = document.createElement("img");
Q4A1.setAttribute("src", "./assets/img/Q4A1.jpg");
Q4A1.setAttribute("object-fit", "cover");
var Q4A2 = document.createElement("img");
Q4A2.setAttribute("src", "./assets/img/Q4A2.jpg");
Q4A2.setAttribute("object-fit", "cover");
var Q4A3 = document.createElement("img");
Q4A3.setAttribute("src", "./assets/img/Q4A3.jpg");
Q4A3.setAttribute("object-fit", "cover");
var Q4A4 = document.createElement("img");
Q4A4.setAttribute("src", "./assets/img/Q4A4.jpg");
Q4A4.setAttribute("object-fit", "cover");

var Q5A1 = document.createElement("img");
Q5A1.setAttribute("src", "./assets/img/Q5A1.jpg");
Q5A1.setAttribute("object-fit", "cover");
var Q5A2 = document.createElement("img");
Q5A2.setAttribute("src", "./assets/img/Q5A2.jpg");
Q5A2.setAttribute("object-fit", "cover");
var Q5A3 = document.createElement("img");
Q5A3.setAttribute("src", "./assets/img/Q5A3.jpg");
Q5A3.setAttribute("object-fit", "cover");
var Q5A4 = document.createElement("img");
Q5A4.setAttribute("src", "./assets/img/Q5A4.jpg");
Q5A4.setAttribute("object-fit", "cover");

//main function
function gameStart() {
    startButton.style.display = "none";
    gameActive = true;
    scoreDisplay.textContent = currentScore;
    getScores();
    writeScores();
 //the following starts the timer. Comment it out if testing stuff for more than 60 seconds. Or you could set timeLeft to some crazy high number. That works too.  
 timing = setInterval(timer, 1000);
    Question1();    
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
        timeUp = true;
        clearInterval(timing);
        gameEnd();
    }
}

//first question
function Question1() {
    questionBox.textContent = "Which is NOT a coding language?";
    answer1.appendChild(Q1A1);
    answer2.appendChild(Q1A2);
    answer3.appendChild(Q1A3);
    answer4.appendChild(Q1A4);
    questionActive = true;

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
                answer1.removeChild(Q1A1);
                answer2.removeChild(Q1A2);
                answer3.removeChild(Q1A3);
                answer4.removeChild(Q1A4);
                clearInterval(hold);
                Question2();
            }
        }
    }

    function Question2() {
        if(gameActive == false) {
            return;
        } else {
            questionBox.textContent = "Primary purpose of CSS?";
            answer1.appendChild(Q2A1);
            answer2.appendChild(Q2A2);
            answer3.appendChild(Q2A3);
            answer4.appendChild(Q2A4);
            questionActive = true;

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
                answer1.removeChild(Q2A1);
                answer2.removeChild(Q2A2);
                answer3.removeChild(Q2A3);
                answer4.removeChild(Q2A4);
                clearInterval(hold);
                Question3();
            }
        }
        }
    }


    function Question3() {
        if(gameActive == false) {
            return;
        } else {
            questionBox.textContent = "Which is a boolean?";
            answer1.appendChild(Q3A1);
            answer2.appendChild(Q3A2);
            answer3.appendChild(Q3A3);
            answer4.appendChild(Q3A4);
            questionActive = true;

            function correctAnswer() {
                currentScore++;
                questionActive = false;
            } 

    function wrongAnswer() {
        currentScore--;
        timeLeft = timeLeft - 5;
        questionActive = false;
    }
    
        answer1.addEventListener("click", wrongAnswer);
        answer2.addEventListener("click", correctAnswer);
        answer3.addEventListener("click", wrongAnswer);
        answer4.addEventListener("click", wrongAnswer);

        var hold = setInterval(answerWait, 50);
        //prevents the function from ending until an answer is selected, then clears event listener.
        function answerWait() {
            if(questionActive === false) {
                answer1.removeEventListener("click", wrongAnswer);
                answer2.removeEventListener("click", correctAnswer);
                answer3.removeEventListener("click", wrongAnswer);
                answer4.removeEventListener("click", wrongAnswer);
                answer1.removeChild(Q3A1);
                answer2.removeChild(Q3A2);
                answer3.removeChild(Q3A3);
                answer4.removeChild(Q3A4);
                clearInterval(hold);
                Question4();
            }
        }
        }
    }

    function Question4() {
        if(gameActive == false) {
            return;
        } else {
            questionBox.textContent = "Which is a comment?";
            answer1.appendChild(Q4A1);
            answer2.appendChild(Q4A2);
            answer3.appendChild(Q4A3);
            answer4.appendChild(Q4A4);
            questionActive = true;

            function correctAnswer() {
                currentScore++;
                questionActive = false;
            } 

    function wrongAnswer() {
        currentScore--;
        timeLeft = timeLeft - 5;
        questionActive = false;
    }
    
        answer1.addEventListener("click", wrongAnswer);
        answer2.addEventListener("click", wrongAnswer);
        answer3.addEventListener("click", wrongAnswer);
        answer4.addEventListener("click", correctAnswer);

        var hold = setInterval(answerWait, 50);
        //prevents the function from ending until an answer is selected, then clears event listener.
        function answerWait() {
            if(questionActive === false) {
                answer1.removeEventListener("click", wrongAnswer);
                answer2.removeEventListener("click", wrongAnswer);
                answer3.removeEventListener("click", wrongAnswer);
                answer4.removeEventListener("click", correctAnswer);
                answer1.removeChild(Q4A1);
                answer2.removeChild(Q4A2);
                answer3.removeChild(Q4A3);
                answer4.removeChild(Q4A4);
                clearInterval(hold);
                Question5();
            }
        }
        }
    }

    function Question5() {
        if(gameActive == false) {
            return;
        } else {
            questionBox.textContent = "Execute code multiple times?";
            answer1.appendChild(Q5A1);
            answer2.appendChild(Q5A2);
            answer3.appendChild(Q5A3);
            answer4.appendChild(Q5A4);
            questionActive = true;

            function correctAnswer() {
                currentScore++;
                questionActive = false;
            } 

    function wrongAnswer() {
        currentScore--;
        timeLeft = timeLeft - 5;
        questionActive = false;
    }
    
        answer1.addEventListener("click", wrongAnswer);
        answer2.addEventListener("click", wrongAnswer);
        answer3.addEventListener("click", correctAnswer);
        answer4.addEventListener("click", wrongAnswer);

        var hold = setInterval(answerWait, 50);
        //prevents the function from ending until an answer is selected, then clears event listener.
        function answerWait() {
            if(questionActive === false) {
                answer1.removeEventListener("click", wrongAnswer);
                answer2.removeEventListener("click", wrongAnswer);
                answer3.removeEventListener("click", correctAnswer);
                answer4.removeEventListener("click", wrongAnswer);
                answer1.removeChild(Q5A1);
                answer2.removeChild(Q5A2);
                answer3.removeChild(Q5A3);
                answer4.removeChild(Q5A4);
                clearInterval(hold);
                gameEnd();
            }
        }
        }
    }


//this function pulls any existing hiscores from local storage, setting them blank if none exist. It then pushes them 
    function getScores() {
        var hiscore1;
        var hiscore2;
        var hiscore3;
        var score1String = localStorage.getItem("score1");
        if(!score1String) {
            hiscore1 = {score: " ", name: " "};
        } else {
            hiscore1 = JSON.parse(score1String);
        }
        var score2String = localStorage.getItem("score2");
        if(!score2String) {
            hiscore2 = {score: " ", name: " "};
        } else {
            hiscore2 = JSON.parse(score2String);
        }
        var score3String = localStorage.getItem("score3");
        if(!score3String) {
            hiscore3 = {score: " ", name: " "};
        } else {
            hiscore3 = JSON.parse(score3String);
        }

        hiscores.push(hiscore1, hiscore2, hiscore3);
       hiscores = hiscores.sort(function (a, b) {return b.score - a.score});
    }

    //this function writes the scores to the relevant box in the HTML and then stores them locally
    function writeScores() {
        score1.textContent = hiscores[0].name + " " + hiscores[0].score;
        score2.textContent = hiscores[1].name + " " + hiscores[1].score;
        score3.textContent = hiscores[2].name + " " + hiscores[2].score;

        localStorage.setItem("score1", JSON.stringify(hiscores[0]));
        localStorage.setItem("score2", JSON.stringify(hiscores[1]));
        localStorage.setItem("score3", JSON.stringify(hiscores[2]));
    }

    //this function should run when the timer reaches 0 or all questions are answered
    //it sets the current score, adds it to the array, and re-runs the writeScores function to update the highscores
    //it then resets the game variables and unhides the start button to allow the game to be played again.
    function gameEnd() { //don't forget to remove the last set of questions/answers once you add them
        let username = prompt("please enter your name");
        var endScore = {score: currentScore, name: username};
        hiscores.push(endScore);
        console.log(hiscores);
        hiscores = hiscores.sort(function (a, b) {return b.score - a.score});
        writeScores();
        currentScore = 0;
        timeLeft = 60;
        startButton.style.display = "block";
        questionBox.textContent = " ";
    }

//starts game upon clicking the "Start Game" button
startButton.addEventListener("click", gameStart);
