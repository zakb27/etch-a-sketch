let userScore=0;
let computerScore=0;
//Gets a random choice for rock paper scissors
const getComputerChoice = ()=> {
    let x = ['rock', 'paper', 'scissors'];
    return x[Math.floor(Math.random() * x.length)];
}
const restartGame = ()=>{
     userScore=0;
     computerScore=0;
     displayScore();
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
const getImage = (item,img)=>{
    switch(item){
        case("rock"):
            img.src='../css_files/images/force.png'
            return img;
            break;
        case('paper'):
            img.src="../css_files/images/blaster.png";
            return img;
        case('scissors'):
            img.src= "../css_files/images/lightsaber.png";
            return img;
    }
}

const displayChoice=(user,computer)=>{
    const user_choice = document.querySelector('.current_user_choice');
    user_choice.textContent='';
    let img = document.createElement('img');
    let item = getImage(user,img);
    item.className = 'choice_img choice';
    user_choice.appendChild(item);
    const comp_choice = document.querySelector('.current_comp_choice');
    comp_choice.textContent='';
    img = document.createElement('img');
    item = getImage(computer,img);
    item.className = 'choice_img cp_img';
    comp_choice.appendChild(item);
}

const displayScore=()=>{
    const user = document.querySelector('#display_user_score');
    user.textContent =  userScore.toString();
    const comp = document.querySelector('#display_comp_score');
    comp.textContent =computerScore.toString();
}
const displayWinner=(winner)=>{
    const container = document.querySelector('.winner');
    container.innerText=winner + " Wins!";
}


//Game function that runs a certain amount of games of rock paper scissors
const game = (user = 'rock') =>{
    if(userScore==5 || computerScore==5){
        return;
    }
    const container = document.querySelector('.outcome');
    let computer = (getComputerChoice());
    displayChoice(user,computer);

    let score = (playRound(computer,user));

    if (score.includes("You win!")){
        container.textContent = 'You Win!';
        userScore++;
    }
    else if (score.includes("You lose!")){
        container.textContent ='You Lose!' ;
        computerScore++;
    }
    else{
        container.textContent = "Draw";
    }
    displayScore();

    if(userScore==5 || computerScore==5){
        userScore==5?displayWinner("User"):displayWinner('Computer');
    }

}

const buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        game(button.id)
    });
});

const restart = document.querySelector('.restart');

restart.addEventListener('click',()=>{

   restartGame();
})







