const Choices = ["rock","paper","scissors"];
var a;

function getComputerChoice(){
    var b = Math.floor(Math.random()*Choices.length)
    return Choices[b]
}

function play(){
            var playerChoice = prompt("Please enter rock, paper, or scissors").toLowerCase();
            var computerChoices = getComputerChoice();
    
            if ((playerChoice==="rock"&&computerChoices==="scissors")||
            (playerChoice==="paper"&&computerChoices==="rock")||
            (playerChoice==="scissors"&&computerChoices==="paper"))
            {
                a = "you won";
            }else if (playerChoice===computerChoices){
                a = "you drew";
            }else{
                a = "you lost";
            }
        }



function game(){
    let amountGame = 1;
    let userAmount = 0;
    let computerAmount = 0;
    
    for (let i=amountGame;i<=5;i++){
        play();
        console.log(amountGame);
        amountGame++;
        if (a==="you won"){
            userAmount++;
        }else if (a==="you lost"){
            computerAmount++;
        }
    }
    
    console.log(userAmount, computerAmount)
    if (userAmount>computerAmount){
        console.log("you won the match")
    } else{
        console.log("you lost the match")
    }
}

game();
