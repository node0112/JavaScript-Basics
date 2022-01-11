//string vars
let computerSelection;
let playerChoice;
//query selctors
const choice=document.querySelector(".choice");
const result=document.querySelector(".result")
const score=document.querySelector(".score")
const currentResult=document.querySelector(".currentScores")
const currentWin=document.querySelector(".currentWin")
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
let compScore=0;
let playerScore=0;
let tournament=0;
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
        if(computerSelection==playerInt){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            compScore=compScore;
            playerScore=playerScore;
            currentWin.textContent="It's a draw!"
            return(roundScoreCalc(playerScore,compScore));
        }
        else if(computerSelection>playerInt && computerSelection-playerInt !=2){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            compScore=compScore+1;
            playerScore=playerScore;
            currentWin.textContent="You Lost :("
            return(roundScoreCalc(playerScore,compScore));
        }
        else if(computerSelection<playerInt && playerInt-computerSelection !=2){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            compScore=compScore;
            playerScore=playerScore+1;
            currentWin.textContent="You Won :)"
            return(roundScoreCalc(playerScore,compScore));
        }
        else if(computerSelection-playerInt==2){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            compScore=compScore;
            playerScore=playerScore+1;
            currentWin.textContent="You Won :)"
            return(roundScoreCalc(playerScore,compScore));
        }
        else if(playerInt-computerSelection==2){
            choice.textContent=("Computer chose: "+compChoice+" You chose: "+playerChoice)
            compScore=compScore+1;
            playerScore=playerScore;
            currentWin.textContent="You Lost :("
            return(roundScoreCalc(playerScore,compScore));
        }
        else{
            console.log("error")
        }
    }

function roundScoreCalc(playerScore,compScore){
           if(playerScore+compScore==5){
               if(compScore>playerScore){
                   tournament=0
                   return(displayScore(playerScore,compScore,tournament))
               }
               else if(playerScore>compScore){
                   tournament=1
                   return(displayScore(playerScore,compScore,tournament))
               }
           }
           return(displayScore(playerScore,compScore,tournament))
    }


function displayScore(playerScore,compScore,tournament){
    if(tournament=1){
          playerScore=0;
          compScore=0;
        return(playerScore,compScore)
        }
    score.textContent="Computer :"+compScore+"Player: "+playerScore


}






