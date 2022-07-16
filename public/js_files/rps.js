//Gets a random choice for rock paper scissors
const getComputerChoice = ()=> {
    let x = ['rock', 'paper', 'scissors'];
    return x[Math.floor(Math.random() * x.length)];
}

//Function checks whether or not the user has won or not
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
//Game function that runs a certain amount of games of rock paper scissors
const game = (user = 'rock') =>{
    const container = document.querySelector('.outcome');
    let userScore=0;
    let computerScore=0;

    let computer = (getComputerChoice());

    let score = (playRound(computer,user));
    if (score.includes("You win!")){
        userScore++;
    }
    if (score.includes("You lose!")){
        computerScore++;
    }

    if(userScore>computerScore) {
        container.textContent ='Congratulations you have won';
    }
    else{
        container.textContent ='Commiserations you have lost!' ;
    }
}

const buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        game(button.id)
    });
});


