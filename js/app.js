let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const convertToWord = letter => {
    if(letter === 'r' ) return 'The Rock';
    if(letter === 'p' ) return 'Toilet Paper';
    return 'Garden Shears'; 
}

const win = (userChoice, computerChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats 
                          ${convertToWord(computerChoice)}. You win ! `;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 400);
}

const lose = (userChoice, computerChoice) => {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to 
                          ${convertToWord(computerChoice)}. You lost... `;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 400);
                          
}

const draw = (userChoice, computerChoice) => {
    result_p.innerHTML = `${convertToWord(userChoice)} equals 
                          ${convertToWord(computerChoice)}. It's a draw. `;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('gray-glow');
    }, 400);
}
const game = userChoice =>  {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break; 
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}
const main = () => {

    rock_div.addEventListener('click', function() {
        game('r');        
    });
    
    paper_div.addEventListener('click', function() {
        game('p');        
        
    });
    
    scissors_div.addEventListener('click', function() {
        game('s');        
        
    });
}

main();