//Selects a random number between 0, 1, 2 and assigns a play to each number.
const getComputerChoice = () => {
	const random = Math.floor(Math.random()*3);
	if(random === 0) {
		return 'paper';
	} if (random === 1){
		return 'rock';
	} if (random === 2){
		return 'scissors';
	}
}

//Return the result based on the the computer and player choices.
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

//Print the result of the game on the page.
const printResult = (game) => {
	const div = document.createElement('div');
	const display = document.querySelector('#display-last-match');
	display.appendChild(div);
	div.textContent = game;
}

//Save Result.
const arrResults = [];
const saveResult = (game) => {
	arrResults.push(game);
}

//Define score. make an array that tracks the number of player victories, loses and ties
const makeScore = (arrResults) => {
	let j = arrResults.length;
	let i = 0;
	let playerPoints = 0;
	let computerPoints = 0;
	let numbOfTies = 0;
	for(i; i < j; i++) {
		if (arrResults[i].charAt(4) === 'W') {
			playerPoints = playerPoints + 1;
		}if (arrResults[i].charAt(4) === 'L') {
			computerPoints = computerPoints + 1;
		}if (arrResults[i].charAt(0) === 'T') {
			numbOfTies = numbOfTies + 1;
		}
	}

	const arrScore = [playerPoints, computerPoints, numbOfTies];
	return arrScore;
}

//The following functions deconstruct the return of makeScore()
const getPlayerPoints = () => {
	const arrScore = makeScore(arrResults);
	return arrScore[0];
}

const getComputerPoints = () => {
	const arrScore = makeScore(arrResults);
	return arrScore[1];
}

const getNumbOfTies = () => {
	const arrScore = makeScore(arrResults);
	return arrScore[2];
}

//Print the score.
const printScore = () => {
	const playerPoints = getPlayerPoints();
	const computerPoints = getComputerPoints();
	const numberOfTies = getNumbOfTies();

	const div = document.createElement('div');
	const display = document.querySelector('#display-score');
	display.appendChild(div);
	div.textContent = "Player: "+playerPoints+"Computer: "+computerPoints+"Ties: "+numberOfTies;

}

//Announce winner
const AnnounceWinner = () => {
	const playerPoints = getPlayerPoints();
	const computerPoints = getComputerPoints();

	if (playerPoints === 5) {
		const div = document.createElement('div');
		const body = document.querySelector('body');
		body.appendChild(div);
		div.textContent = 'You won five rounds.';
		arrResults.length = 0;
	} if (computerPoints === 5) {
		const div = document.createElement('div');
		const body = document.querySelector('body');
		body.appendChild(div);
		div.textContent = 'You lost five rounds.';
		arrResults.length = 0;
	} else {
		return null;
	}
}


//Display the new score.
const displayNewScore = (score) => {
	const div = document.createElement('div');
	const body = document.querySelector('body');
	body.appendChild(div);
	div.textContent = score;
}


//buttons for the player to select its choice.
const btnRock = document.querySelector('.button-rock');
const rock = btnRock.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const playerSelection = 'rock';
	const game = playRound(playerSelection, computerSelection);

	saveResult(game);
	printResult(game);
	makeScore(arrResults);
	AnnounceWinner();
	printScore();
})


const btnPaper = document.querySelector('.button-paper');
btnPaper.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const playerSelection = 'paper';
	const game = playRound(playerSelection, computerSelection);

	saveResult(game);
	printResult(game);
	makeScore(arrResults);
	AnnounceWinner();
})

const btnScissors = document.querySelector('.button-scissors');
btnScissors.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const playerSelection = 'scissors';
	const game = playRound(playerSelection, computerSelection);

	saveResult(game);
	printResult(game);
	makeScore(arrResults);
	AnnounceWinner();
})