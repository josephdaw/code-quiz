// define variables for the elements we will need to target
const scoreList = document.querySelector("#score-list");
const clearButton = document.querySelector("#clear-btn");
const replayButton = document.querySelector("#replay-btn");

let scores = [];

// call clearScores function on 'Clear History' click
clearButton.addEventListener('click',clearScores);

// navigate to home page on 'Play Again' click
replayButton.addEventListener('click',function() {
    window.location.replace('index.html');
});


function clearScores() {
    // clear the local storage of scoreHistory
    localStorage.removeItem("scoreHistory");
    // make the scores array empty
    scores = [];
    // if there are scores already being displayed
    while (scoreList.firstChild){
        // remove the scores
        scoreList.removeChild
        // check to see it there are more scores
        (scoreList.firstChild)
    }
};

function renderScores() {
    // sort scores by highest first
    scores.sort((a,b) => b.score - a.score);

    var topScores;
    // only display the top 5 scores
    if (scores.length < 5){
        topScores = scores.length
    } else {
        topScores = 5;
    };


    for (var i = 0; i < topScores; i++){
        // set score equal to current index of stored scores
        let score = scores[i];
        // create a list element
        let li = document.createElement("li");
        // add player initials and score to list element
        li.textContent = `Player: ${score.initials} - Score: ${score.score}`;
        // add the list element to the #score-list section
        scoreList.appendChild(li);
    };
};

function init(){
    // get any stored scores
    var storedScores = JSON.parse(localStorage.getItem("scoreHistory"));
    // if there are stored scores, pass them to 'scores'
    if (storedScores !== null) {
        scores = storedScores
    };
    // call function to render to page
    renderScores()
};

init();