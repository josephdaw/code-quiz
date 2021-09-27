// define variables for the elements we will need to target
const scoreList = document.querySelector("#score-list");

let scores = [];

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