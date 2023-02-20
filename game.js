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

const getPlayerChoice = () => {
	const choice = window.prompt('Type your choice', '');
	const choiceFor = choice.trim().toLowerCase();
	return choiceFor;
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

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

const game = (playerSelection, computerSelection) => {
	for(let i = 0; i < 5; i++){
		let result = [];
		
		result[i] = playRound(playerSelection, computerSelection);
	}
}

console.log(computerSelection, playerSelection, playRound(playerSelection, computerSelection));