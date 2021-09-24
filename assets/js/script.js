// define variables for the elements we will need to target
const startButton = document.querySelector("#start-btn");
const questionEl = document.querySelector("#question-card");

const startSectionEl = document.querySelector(".start");
const questionSectionEl = document.querySelector(".question");
const timerSectionEl = document.querySelector(".timer");


var timer;
var timerCount = 60;

// addEvent to user clicking on "start-btn"
startButton.addEventListener("click", playGame);

// function that controls the game
function playGame() {
    // once game has started, hide the 'start' button
    startSectionEl.classList.add('hide')
    // display the question section
    questionSectionEl.classList.remove("hide");
    // display the timer section
    timerSectionEl.classList.remove("hide");


}

function startTimer() {
    timer = setInterval(function(){
        timerCount--;

    }, 1000);
}