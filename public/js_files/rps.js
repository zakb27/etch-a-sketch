const getComputerChoice = ()=> {
    let x = ['rock', 'paper', 'scissors'];
    return x[Math.floor(Math.random() * x.length)];
}


const playRound = (computer,user)=>{
    user = user.toLowerCase();
    if(computer===user){
        return("They are the same");
    }

    switch(user){
        case('rock'):
            if(computer=='paper'){
                return("You lose! Paper beats Rock")
            }
            else{
                return("You win! Rock beats Scissors")
            }

        case('paper'):
            if(computer=="scissors"){
                return("You lose! Scissors beats Paper");
            }
            else{
                return("You win! Paper beats Rock")
            }

        case('scissors'):
            if(computer=="rock"){
                return("You lose! Rock beats Scissors");
            }
            else{
                return("You win! Scissors beats paper")
            }
        }
}

const game = () =>{
    let userScore=0;
    let computerScore=0;
    for(let i=0;i<5;i++){
        let computer = (getComputerChoice());
        let user = getComputerChoice();
        let score = (playRound(computer,user));
        if (score.includes("You win!")){
            userScore++;
        }
        if (score.includes("You lose!")){
            computerScore++;
        }
    }
    console.log("Did I win:",userScore>computerScore);
}

game();

