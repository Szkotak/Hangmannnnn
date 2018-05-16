var playArray = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

function pickCompPlay() {
    var randomNum = Math.floor(Math.random() * 3);
    return playArray[randomNum];
}

function displayGuess(comp) {
    var cpu = document.getElementById("cpu");
    cpu.innerHTML = "Computer Play: " + comp;
}

function isUserPlayGood(uPlay) {
    var userPlay = document.getElementById("user");
    if (uPlay === 'r') {
        userPlay.innerHTML = "User Play: " + uPlay;
    } else if (uPlay === 'p') {
        userPlay.innerHTML = "User Play: " + uPlay;
    } else if (uPlay === 's') {
        userPlay.innerHTML = "User Play: " + uPlay;
    } else {
        userPlay.innerHTML = "User Play: Not a valid play! ";
        uPlay = 0;
    }
}


document.addEventListener('keyup', function (event) {
    var userSelection = event.key;
    isUserPlayGood(userSelection);
    
    var computerSelection = pickCompPlay();
    displayGuess(computerSelection);

    if ((userSelection === 'r' && computerSelection === 's') || (userSelection === 's' && computerSelection === 'p') || (userSelection === 'p' && computerSelection === 'r')) {
        var winTally = document.getElementById("wins");
        wins = wins + 1;
        winTally.innerHTML = "User Play: " + wins;
    
    } else if ((userSelection === 's' && computerSelection === 'r') || (userSelection === 'p' && computerSelection === 's') || (userSelection === 'r' && computerSelection === 'p')) {
        var lossTally = document.getElementById("losses");
        losses = losses + 1;
        lossTally.innerHTML = "User Losses: " + losses;
    
    } else if ((userSelection === 'r' && computerSelection === 'r') || (userSelection === 's' && computerSelection === 's') || (userSelection === 'p' && computerSelection === 'p')) {
        var tieTally = document.getElementById("ties");
        ties = ties + 1;
        tieTally.innerHTML = "User Ties: " + ties;
    
     } // } else {
    //     winTally.innerHTML = "User Play: " + wins;
    //     lossTally.innerHTML = "User Play: " + losses;
    //     tieTally.innerHTML = "User Play: " + ties;
    // }
 })