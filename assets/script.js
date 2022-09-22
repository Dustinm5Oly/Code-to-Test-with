const setTimer = document.querySelector("#time");
const startQuiz = document.getElementById("Start-Quiz");
const highScoreDiv = document.querySelector(".highScores");
const header = document.getElementById("header");
const text = document.getElementById("text");
const questionsEl = document.querySelector("#question");
const answerEl0 = document.getElementById("answer0");
const answerEl1 = document.getElementById("answer1");
const answerEl2 = document.getElementById("answer2");
const answerEl3 = document.getElementById("answer3");
const questionsDiv = document.querySelector(".questions");
const answerButton = [answerEl0, answerEl1, answerEl2, answerEl3];
const submitScoreBtn = document.querySelector("#submit-button");
const hsInputSpan = document.querySelector("#user-name");
const hsInput = document.querySelector("#high-input");
let nextQuestion = 0

renderHighScores();

let secondsLeft = 30;
let questions = [
    "question1",
    "question2",
    "question3",
    "question4",
];
let answers = [
    [{a:"answer1", correct: true}, {a:"answer2", correct: false}, {a:"answer3", correct:false}, {a:"answer4", correct: false}],
    [{a:"answer5", correct: false}, {a:"answer6", correct: false}, {a:"answer7", correct: true}, {a:"answer8", correct: false}],
    [{a:"answer9", correct: false}, {a:"answer10", correct: false}, {a:"answer11", correct: false}, {a:"answer12", correct: true}],
    [{a:"answer13", correct: false}, {a:"answer14", correct: false}, {a:"answer15", correct: true}, {a:"answer16", correct: false}],
];

function renderHighScores(){
    var name = localStorage.getItem("name");
    hsInputSpan.textContent = name;
};
    submitScoreBtn.addEventListener("click", function(event){
    event.preventDefault();

    var name = document.querySelector("#high-input").value;

    localStorage.setItem("name", name);
    renderHighScores();
});


for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].addEventListener('click', function (e) {
        console.log(e.target.innerText);
        const selectedAnswer = answers[nextQuestion].find(function (answer) {
            return answer.a === e.target.innerText
        })
        console.log(selectedAnswer);
        if (selectedAnswer.correct) {
        } else {
            secondsLeft -= 5
        }
        nextQuestion++;
        if (nextQuestion > 3) {
            showHighScore();
            clearInterval(timerInterval);
        } else {
            displayQuestion();
        }
    });
};

function showHighScore() {
    questionsDiv.setAttribute("style", "display:none");
    highScoreDiv.setAttribute("style", "display:block");
};

function displayQuestion() {

    //for (let i = 0; i < questions.length; i++) {
    questionsEl.textContent = questions[nextQuestion];
    answerEl0.textContent = answers[nextQuestion][0].a;
    answerEl1.textContent = answers[nextQuestion][1].a;
    answerEl2.textContent = answers[nextQuestion][2].a;
    answerEl3.textContent = answers[nextQuestion][3].a;
    // }
};

function setTime() {
    header.setAttribute("style", "display:none");
    text.setAttribute("style", "display:none");
    startQuiz.setAttribute("style", "display:none");
    questionsDiv.setAttribute("style", "display:block");
    var timer = document.createElement("p");
    setTimer.appendChild(timer)
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " Seconds Left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            location.reload();
        }
    }, 1000);
}

startQuiz.addEventListener("click", function() {
    setTime();
    displayQuestion();
});

