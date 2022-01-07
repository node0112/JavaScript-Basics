
function computerPLay(){    
    let randm= Math.floor(Math.random()*(4 - 1) + 1);
  if(randm===1){
      return 1;

  }
  if(randm===2){
    return 2;

}
if(randm===3){
   return 3;
}
}

let computerSelection=computerPLay();
let playerSelection=window.prompt("Rock, Paper or Scissors?");
playerSelection= playerSelection.toLowerCase();

function convPlayerChoice(playerSelection){
    if(playerSelection=="rock"){
        return 1;
    }
    if(playerSelection=="paper"){
        return 2;
    }
    if(playerSelection=="scissors"){
        return 3;
    }
    else{
        return ("Error")
    }

}
let playerInt=convPlayerChoice(playerSelection);

function playRound(){
    if(computerSelection==playerInt){
        console.log("It's a draw!")
    }
    else if(computerSelection>playerInt && computerSelection-playerInt !=2){
        console.log("You Lost :(")
    }
    else if(computerSelection<playerInt && playerInt-computerSelection !=2){
        console.log("You win the round!")
    }
    else if(computerSelection-playerInt==2){
        console.log("You Win!")
    }
    else if(playerInt-computerSelection==2){
        console.log("You loose :(")
    }
    else{
        console.log("error")
    }

}
console.log(playerInt, computerSelection)
console.log(playRound(computerSelection,playerInt));