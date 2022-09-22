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

renderHighScores();// renders last known user name

let secondsLeft = 30;
let questions = [ //this is my questions array 
    "Which is not a data type in JS?",
    "Which represents the sign of a loose equality operator?",
    "Which does not represent a type of variable?",
    "What method would you use to add an element to the end of an array?",
];
let answers = [ // this is my answer arrays within an array, giving a value to each array of false or true for the correct answer
    [{a:"Variable", correct: true}, {a:"String", correct: false}, {a:"Boolean", correct:false}, {a:"Number", correct: false}],
    [{a:"===", correct: false}, {a:"<=", correct: false}, {a:"==", correct: true}, {a:">=", correct: false}],
    [{a:"const", correct: false}, {a:"let", correct: false}, {a:"var", correct: false}, {a:"function", correct: true}],
    [{a:"add", correct: false}, {a:"click", correct: false}, {a:"push", correct: true}, {a:"unshift", correct: false}],
];

function renderHighScores(){ //pulls name from local store and displays in the li for high scores
    var name = localStorage.getItem("name");
    hsInputSpan.textContent = name;
};
    submitScoreBtn.addEventListener("click", function(event){
    event.preventDefault();

    var name = document.querySelector("#high-input").value;

    localStorage.setItem("name", name);
    renderHighScores();
});


for (let i = 0; i < answerButton.length; i++) { // this for loop brings along the new set of answers when the user selects an answer
    answerButton[i].addEventListener('click', function (e) {
        console.log(e.target.innerText);
        const selectedAnswer = answers[nextQuestion].find(function (answer) {
            return answer.a === e.target.innerText
        })
        console.log(selectedAnswer); // this deducts 5 seconds from the users time for each question answered incorrectly 
        if (selectedAnswer.correct) {
        } else {
            secondsLeft -= 5
        }
        nextQuestion++; // this pushes the user to the next question
        if (nextQuestion > 3) {
            showHighScore();
            clearInterval(timerInterval);
        } else {
            displayQuestion();
        }
    });
};

function showHighScore() { // this displays the high score screen once all questions are answered
    questionsDiv.setAttribute("style", "display:none");
    highScoreDiv.setAttribute("style", "display:block");
};

function displayQuestion() { //this displays all the questions and answered in the correct order

    //for (let i = 0; i < questions.length; i++) {
    questionsEl.textContent = questions[nextQuestion];
    answerEl0.textContent = answers[nextQuestion][0].a;
    answerEl1.textContent = answers[nextQuestion][1].a;
    answerEl2.textContent = answers[nextQuestion][2].a;
    answerEl3.textContent = answers[nextQuestion][3].a;
    // }
};

function setTime() { // this sets the timer
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

startQuiz.addEventListener("click", function() { // this starts the timer once start quiz has been clicked
    setTime();
    displayQuestion();
});

