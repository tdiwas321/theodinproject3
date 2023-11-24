const Choices = ["rock", "paper", "scissors"];
var a;
var userAmount;
var computerAmount;
var playerChoice;
var pAmount;
var cAmount;
var cDesicion;
var imglink;


function getComputerChoice() {
    var b = Math.floor(Math.random() * Choices.length)
    return Choices[b];
}

function play() {
    var computerChoices = getComputerChoice();
    var imglink;
    var cName;

    if (computerChoices === "rock") {
        imglink = "../images/rock.png";
        cName = "Rock";
    } else if (computerChoices === "paper") {
        imglink = "../images/paper.png";
        cName = "Paper";
    } else if (computerChoices === "scissors") {
        imglink = "../images/scissors.png";
        cName = "Scissors";
    }

    cDesicion.innerHTML = `<img src=${imglink} alt="${cName}" /><h2>${cName}</h2>`;

    if ((playerChoice === "rock" && computerChoices === "scissors") ||
        (playerChoice === "paper" && computerChoices === "rock") ||
        (playerChoice === "scissors" && computerChoices === "paper")) {
        a = "you won";
    } else if (playerChoice === computerChoices) {
        a = "you drew";
    } else {
        a = "you lost";
    }
}

function updatescore() {
    if (a === "you won") {
        amountGame++;
        userAmount++;
        pAmount.innerHTML = userAmount;
        cAmount.innerHTML = computerAmount;
    } else if (a === "you lost") {
        amountGame++
        computerAmount++;
        pAmount.innerHTML = userAmount;
        cAmount.innerHTML = computerAmount;
    }else if(a === "you drew"){
        amountGame++
        
    }

    if (amountGame === 5) {
        console.log("User Score:", userAmount);
        console.log("Computer Score:", computerAmount);

        if (userAmount > computerAmount) {
            alert("You won");
        } else if(userAmount < computerAmount){
            alert("You lost");
        }else{
            alert("You drew");
        }
    }
}

function resetGame() {
    amountGame = 0;
    userAmount = 0;
    computerAmount = 0;
    pAmount.innerHTML = userAmount;
    cAmount.innerHTML = computerAmount;
    
}

function rockinput() {
    playerChoice = "rock";
    play();
    updatescore();
}

function paperinput() {
    playerChoice = "paper";
    play();
    updatescore();
}

function scissorsinput() {
    playerChoice = "scissors";
    play();
    updatescore();
}

window.onload = function() {
    var rock = document.getElementById("r");
    rock.addEventListener('click', rockinput);

    var paper = document.getElementById("p");
    paper.addEventListener('click', paperinput);

    var scissors = document.getElementById("s");
    scissors.addEventListener('click', scissorsinput);

    pAmount = document.getElementById('playerScore');
    cAmount = document.getElementById('computerScore');
    cDesicion = document.getElementById('compDecision');

    resetGame();
};
