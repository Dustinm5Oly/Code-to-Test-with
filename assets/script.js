const setTimer = document.querySelector("#time");
const startQuiz= document.getElementById("Start-Quiz")
const header = document.getElementById("header");
const text = document.getElementById("text");
const questionsEl = document.querySelector("#question");
const answerEl0 = document.getElementById("answer0");
const answerEl1 = document.getElementById("answer1");
const answerEl2 = document.getElementById("answer2");
const answerEl3 = document.getElementById("answer3");
const questionsDiv = document.querySelector(".questions");
const answerButton = [answerEl0, answerEl1, answerEl2, answerEl3];
let nextQuestion = 0
const highScoreDiv= document.querySelector(".highscores");

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

for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].addEventListener('click', function(e){
        console.log(e.target.innerText);
        const selectedAnswer = e.target.innerText;
        nextQuestion++;
        if (nextQuestion > 3){
        showHighScore();
        } else {
        displayQuestion();
        }
    });
}

function showHighScore(){
    questionsDiv.setAttribute("style", "display:none");
    highScoreDiv.setAttribute("style", "display:block");
}

function displayQuestion(){

    //for (let i = 0; i < questions.length; i++) {
        questionsEl.textContent=questions[nextQuestion];
        answerEl0.textContent=answers[nextQuestion][0];
        answerEl1.textContent=answers[nextQuestion][1];
        answerEl2.textContent=answers[nextQuestion][2];
        answerEl3.textContent=answers[nextQuestion][3];


        
   // }
}

// function answerQuestion(){

// }


function setTime() {   
    header.setAttribute("style", "display:none");
    text.setAttribute("style", "display:none"); 
    startQuiz.setAttribute("style", "display:none");
    questionsDiv.setAttribute("style", "display:block");
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

startQuiz.addEventListener("click", function(){
    setTime();
    displayQuestion();
});