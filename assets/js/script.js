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
    },
    {question: "Is this the last question",
        answers: [
            {text: "No", correct: false},
            {text: "Yes", correct: true}
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
    showQuestion();

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
// function setNextQuestion() {
//     showQuestion(questions[currentQuestionIndex]);
// };

// send the question to the document
function showQuestion(){
    // set question to currentIndex of questions array
    const question = questions[currentQuestionIndex];
    // display question in header of question card
    questionEl.innerHTML = question.question;
    // create a button for each answer associated with the question
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text
        if (answer.correct){
            // set the dataset to "correct" for the correct answer
            button.dataset.correct = answer.correct
        };

        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button);
    });
};

function selectAnswer(el) {
    const selectedAnswer = el.target;
    const correct = selectedAnswer.dataset.correct;
    if (correct) {
        console.log("correct answer");

        if (currentQuestionIndex < (questions.length - 1)) {
            currentQuestionIndex++;
            reset();
            showQuestion();
        } else {
            console.log("no more questions");
        };



    } else {
        console.log("incorrect");
    }

};

function reset(){
    // if there are answers we want to remove them
    while (answerEl.firstChild){
        // remove the answers
        answerEl.removeChild
        // check if there are still answers
       (answerEl.firstChild)
    }
};