//Selects a random number between 0, 1, 2 and assigns a play to each number.
const getComputerChoice = () => {
	const random = Math.floor(Math.random()*3);
	if(random === 0) {
		return 'paper'; //paper
	} if (random === 1){
		return 'rock'; //rock
	} if (random === 2){
		return 'scissors'; //scissors
	}
}
//const computerSelection = getComputerChoice();
/*
const getPlayerChoice = () => {
	let choice = prompt('Make your play (Rock, Paper or Scissors):', '');
	return choice.trim().toLowerCase();
}
const playerSelection = getPlayerChoice();
*/

//Returns the result based on the selections.
const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === 'paper' && computerSelection === 'rock') {
		return 'You Win! Paper beats Rock.';
	} if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return 'You Lose! Paper loses to Scissors.';
	} if (playerSelection === 'rock' && computerSelection === 'paper') {
		return 'You Lose! Rock loses to Paper.';
	} if (playerSelection === 'rock' && computerSelection === 'scissors') {
		return 'You Win! Rock beats Scissors.';
	} if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return 'You Win! Scissors beats Paper.';
	} if (playerSelection === 'scissors' && computerSelection === 'rock') {
		return 'You Lose! Scissors loses to Rock';
	} if (playerSelection === computerSelection) {
		return 'Tie!';
	}
}

const btnRock = document.querySelector('.button-rock');
btnRock.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const playerSelection = 'rock';
	const game = playRound(playerSelection, computerSelection);
	console.log(game);
})


const btnPaper = document.querySelector('.button-paper');
btnPaper.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const playerSelection = 'paper';
	const game = playRound(playerSelection, computerSelection);
	console.log(game);
})

const btnScissors = document.querySelector('.button-scissors');
btnScissors.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const playerSelection = 'scissors';
	const game = playRound(playerSelection, computerSelection);
	console.log(game);
})

/*
const game = () => {
	//const playerMoves = [];
	//const computerMoves = [];
	const score = [];

	for (i=0; i<4; i++) {
		const computerSelection = getComputerChoice();
		const playerSelection = getPlayerChoice();

		//playerMoves[i] = playerSelection;
		//computerMoves[i] = computerSelection;

		score[i] = playRound(playerSelection, computerSelection);
	}

	return score;
}

const result = game();

for (i=0; i<4; i++) {
	console.log(result[i]);
}
*/