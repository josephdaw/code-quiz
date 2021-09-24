// define variables for the elements we will need to target
const startButton = document.querySelector("#start-btn");
const questionEl = document.querySelector("#question-card");

// addEvent to user clicking on "start-btn"
startButton.addEventListener("click", playGame);

// function that controls the game
function playGame() {
    console.log('started')

    // once game has started, hide the 'start' button
    startButton.classList.add('hide')
    // display the question <div>
    questionEl.classList.remove('hide');
}