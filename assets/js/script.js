// define variables for the elements we will need to target
const startButton = document.querySelector("#start-btn");

const startSectionEl = document.querySelector(".start");
const questionSectionEl = document.querySelector(".question");
const timerSectionEl = document.querySelector(".timer");
const playerSectionEl = document.querySelector(".player");

const timerDisplayEl = document.querySelector(".timer-display");
const questionEl = document.querySelector("#question");
const answerEl = document.querySelector("#answers");
const submitButton = document.querySelector("#submit")
const playerInitials = document.querySelector("#initials");

var timer, currentQuestionIndex;
var timerCount = 60;



// addEvent to user clicking on "start-btn"
startButton.addEventListener("click", playGame);

// questions and answers
const questions = [
    {
        question: "What is the difference between `==` and `===`?",
        answers: [
            { text: "`==` compares values, `===` compares values and types.", correct: true },
            { text: "There is only a difference when comparing strings.", correct: false },
            { text: "There is only a difference when comparing numbers.", correct: false },
            { text: "There is no difference.", correct: false }
        ]
    },
    {
        question: "What is 'hoisting?",
        answers: [
            { text: "Raising a flag up a pole.", correct: false },
            { text: "A behaviour in JS where variable and function declarations are moved to the top of a script.", correct: true },
            { text: "A method for moving items in an array.", correct: false },
            { text: "A device for lifting or lowering a load.", correct: false }
        ]
    },
    {
        question: "Is this the last question?",
        answers: [
            { text: "No", correct: false },
            { text: "Yes", correct: true }
        ]
    }
];


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
    timer = setInterval(function () {
        timerCount--;
        timerDisplayEl.textContent = timerCount;

        if (timerCount === 0) {
            //clear timer once at zero
            clearInterval(timer);
            // go to the end of the game
            gameEnd();
        }
    }, 1000);
};


// send the question to the document
function showQuestion() {
    // set question to currentIndex of questions array
    const question = questions[currentQuestionIndex];
    // display question in header of question card
    questionEl.innerHTML = question.question;
    // create a button for each answer associated with the question
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text
        if (answer.correct) {
            // set the dataset to "correct" for the correct answer
            button.dataset.correct = answer.correct
        };

        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button);
    });
};

// determine which answer has been selected
function selectAnswer(el) {
    const selectedAnswer = el.target;
    // grab the selected answer's data tag
    const correct = selectedAnswer.dataset.correct;
    // if the answer is the correct one
    if (correct) {
        console.log("correct answer");
        // add class of correct for styling
        selectedAnswer.classList.add('correct');
        // check if there is more question in the array
        if (currentQuestionIndex < (questions.length - 1)) {
            // delay function to allow timer for user to see styling
            setTimeout(function () {
                currentQuestionIndex++;
                reset();
                showQuestion();
            }, 200);

        } else {
            console.log("correct, no more questions");
            // delay function to allow time for user to see styling
            setTimeout(function () {
                gameEnd();
            }, 200);
        };

    } else {
        console.log("incorrect");
        // add class of wrong to answer and timer for styling
        selectedAnswer.classList.add('wrong');
        timerSectionEl.classList.add('wrong');
        // subtract time from the timer
        timerCount = timerCount - 10;
        // check to see if there are more questions
        if (currentQuestionIndex < (questions.length - 1)) {

            // delay function to allow time for user to see styling
            setTimeout(function () {
                currentQuestionIndex++;
                reset();
                showQuestion();
                // slightly longer time for a wrong answer to give the user 
                // more time to realise it was incorrect.
            }, 500);

        } else {
            console.log("incorrect, no more questions");
            // delay function to allow time for user to see styling
            setTimeout(function () {
                gameEnd();
                // slightly longer time for a wrong answer to give the user 
                // more time to realise it was incorrect.
            }, 500);
        };

    }

};

function reset() {
    timerSectionEl.classList.remove('wrong');
    // if there are answers we want to remove them
    while (answerEl.firstChild) {
        // remove the answers
        answerEl.removeChild
            // check if there are still answers
            (answerEl.firstChild)
    }
};

function gameEnd() {
    // ensure the timer stops to track the score
    clearInterval(timer);
    // hide the question section
    questionSectionEl.classList.add("hide");
    // hide the timer section
    timerSectionEl.classList.add("hide");
    // display the player initials section
    playerSectionEl.classList.remove("hide");

    // on form submit
    submitButton.addEventListener("click", function(event){
        // stop the form from automatically refreshing
        event.preventDefault();

        // create a string with the user's initials and score and push to scoreHistory array
        //scoreHistory.push(`Player: ${playerInitials.value.trim()} - Score: ${timerCount}`);

        // create an object with the user's initials and score
        scoreHistory.push({initials: playerInitials.value.trim(), score: timerCount}); 
        

        // store the score history in local storage
        localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
        // display the high scores page
        window.location.replace('scores.html')
    });
};

var scoreHistory = [];

function init(){
    var storedScores = JSON.parse(localStorage.getItem("scoreHistory"));
    if (storedScores !== null) {
        scoreHistory = storedScores
    };
};

init();