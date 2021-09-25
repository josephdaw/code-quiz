// define variables for the elements we will need to target
const startButton = document.querySelector("#start-btn");

const startSectionEl = document.querySelector(".start");
const questionSectionEl = document.querySelector(".question");
const timerSectionEl = document.querySelector(".timer");

const timerDisplayEl = document.querySelector(".timer-display");

const questionEl = document.querySelector("#question");
const answerEl = document.querySelector("#answers");

var timer, currentQuestionIndex;
var timerCount = 60;

// questions and answers
const questions = [
    {question: "What is 2+2",
        answers: [
            {text: "4", correct: true},
            {text: "22", correct: false}
        ]
    },
    {question: "What is 4+4",
        answers: [
            {text: "What happens if this has a lot of information", correct: false},
            {text: "8", correct: true}
        ]
    }
];

// addEvent to user clicking on "start-btn"
startButton.addEventListener("click", playGame);


// function that controls the game
function playGame() {
    // set current question to first in the array
    currentQuestionIndex = 0;
    // once game has started, hide the 'start' button
    startSectionEl.classList.add('hide')
    // display the question section
    questionSectionEl.classList.remove("hide");
    // display the timer section
    timerSectionEl.classList.remove("hide");
    // start the time counting down
    startTimer();
    setNextQuestion();

}

function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerDisplayEl.textContent = timerCount;

        if (timerCount === 0) {
            //clear timer once at zero
            clearInterval(timer);
        }
    }, 1000);
};

// select the next question for the user to answer
function setNextQuestion() {
    showQuestion(questions[currentQuestionIndex]);
};

// send the question to the document
function showQuestion(question){
    questionEl.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text
        if (answer.correct){
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button);
    });
};

function selectAnswer() {

};