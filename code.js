//string vars
let computerSelection;
let playerChoice;
//query selctors
const choice=document.querySelector(".choice");
const result=document.querySelector(".result")
const score=document.querySelector(".score")
const currentResult=document.querySelector(".currentResult")
//buttons init
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissor");


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
//////////////////////////////////////////////
let compChoice;
//////////////////////////////////////////////
function compChoiceString(){  //retrns string value of given choice of comp
    if(computerSelection==1){
         return(compChoice="Rock")
    }
    if(computerSelection==2){
        return(compChoice="Paper")
   }
   if(computerSelection==3){
    return(compChoice="Scissors")
}

}
//////////////////////////////////////////////
//button function
rock.addEventListener('click', ()=>{
    playerInt=1;
    computerSelection=computerPLay();
    return(playRound(computerSelection,playerInt,compChoiceString(computerSelection),playerChoice="rock"))
})

paper.addEventListener('click', ()=>{
    playerInt=2;
    computerSelection=computerPLay();
    return(playRound(computerSelection,playerInt,compChoiceString(computerSelection),playerChoice="Paper"))
})

scissors.addEventListener('click', ()=>{
    playerInt=3;
    computerSelection=computerPLay();
    return(playRound(computerSelection,playerInt,compChoiceString(computerSelection),playerChoice="Scissors"))
})
//////////////////////////////////////////////

function playRound(computerSelection,playerInt,compChoice,playerChoice){
    console.log((compChoice,playerChoice))
        if(computerSelection==playerInt){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            currentResult.textContent=("It's a Draw -_-")
        }
        else if(computerSelection>playerInt && computerSelection-playerInt !=2){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            currentResult.textContent=("You Lost :(")
        }
        else if(computerSelection<playerInt && playerInt-computerSelection !=2){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            currentResult.textContent=("You Win :)")
        }else if(computerSelection-playerInt==2){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            currentResult.textContent=("You Win :)")
        }
        else if(playerInt-computerSelection==2){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            currentResult.textContent=("You Lost :(")
        }
        else{
            console.log("error")
        }
    }
   






