// define variables for the elements we will need to target
const scoreList = document.querySelector("#score-list");

let scores = [];

function renderScores() {
    scores.entries()

    // console.log(scores.length)
    // //scoreList.innerHTML = "";
    // for (var i = 0; i < scores.length; i++){
    //     console.log("test")
    //     let score = scores[i];

    //     let li = document.createElement("li");
    //     li.textContent = score;

    //     scoreList.appendChild(li);
    // };
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