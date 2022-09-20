const setTimer = document.querySelector("#time");
const startQuiz= document.getElementById("Start-Quiz")
let secondsLeft = 30;
let questions = [
    "question1",
    "question2",
    "question3",
    "question4",
];
let answers = [
    ["answer1", "answer2", "answer3", "answer4"],
    ["answer5", "answer6", "answer7", "answer8"],
    ["answer9", "answer10", "answer11", "answer12"],
    ["answer13", "answer14", "answer15", "answer16"],
];


function setTime() {   
    var timer = document.createElement("p");
    setTimer.appendChild(timer)
    var timerInterval= setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + "Seconds Left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

startQuiz.addEventListener("click", setTime);