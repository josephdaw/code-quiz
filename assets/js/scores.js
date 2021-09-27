// define variables for the elements we will need to target
const scoreList = document.querySelector("#score-list");

let scores = [];

function renderScores() {

    for (var i = 0; i < scores.length; i++){
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
    // var storedScoresObj = JSON.parse(localStorage.getItem("scoreHistory"));
    // console.log(storedScoresObj);
    var storedScores = JSON.parse(localStorage.getItem("scoreHistory"));
    // var storedScores = Object.entries(storedScoresObj);
    // if there are stored scores, pass them to 'scores'
    if (storedScores !== null) {
        scores = storedScores
    };

    renderScores()
};

init();