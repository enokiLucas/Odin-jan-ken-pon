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
	const display = document.querySelector('#print-result');
	if (display.hasChildNodes() === true) {
		display.removeChild(display.firstChild);
		display.appendChild(div);
		div.textContent = game;
	} else {
		display.appendChild(div);
		div.textContent = game;
	}
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
	const div = document.createElement('div');
	const body = document.querySelector('#announce-winner');

	if (body.hasChildNodes() === true) {
		body.removeChild(body.firstChild);
	}

	if (playerPoints === 5) {
		body.appendChild(div);
		div.textContent = 'You won five rounds.';
		arrResults.length = 0;
	} if (computerPoints === 5) {
		body.appendChild(div);
		div.textContent = 'You lost five rounds.';
		arrResults.length = 0;
	} else {
		return null;
	}
}

const printHistory = (game, playerSelection, computerSelection) => {
	let txt = new String();
	if (game[4] === 'W') {
		txt = "Player(V) "+ playerSelection+" x "+computerSelection+" Computer";
	}if (game[4] === 'L') {
		txt = "Player "+ playerSelection+" x "+computerSelection+" Computer(V)";
	}if (game[0] === 'T') {
		txt = "Player "+ playerSelection+" x "+computerSelection+" Computer";
	}

	const div = document.createElement('div');
	const history = document.querySelector('#display-history');
	history.appendChild(div);
	div.textContent = txt;
}

//display computer move in the display in computer-side
const displayComputerMove = (computerSelection) => {
	const div = document.createElement('div');
	const computerDisplay = document.querySelector('#display-computer-move');
	

	if (computerDisplay.hasChildNodes() === true) {
		const computerDisplayChild = document.querySelector('#display-computer-move div')
		computerDisplayChild.remove();
		computerDisplay.appendChild(div);
		div.textContent = computerSelection;
	} else {
		computerDisplay.appendChild(div);
		div.textContent = computerSelection;
	}
	
}

//Print the number of games in the scoreboard.
let numberOfGames = 0;
const printNumberOfGamesAtTheScoreboard = () => {
	numberOfGames = numberOfGames + 1;
	const div = document.createElement('div');
	const scoreboardNumberOfGames = document.querySelector('#number-of-games');

	if (numberOfGames === 1) {
		scoreboardNumberOfGames.appendChild(div);
		div.textContent = numberOfGames;
	} else {
		const scoreboardNumberOfGamesChild = document.querySelector('#number-of-games div')
		scoreboardNumberOfGamesChild.remove();
		scoreboardNumberOfGames.appendChild(div);
		div.textContent = numberOfGames;
	}
}

//Update the scoreboard
///Player
const updatePlayerPoints = () => {
	const playerPoints = getPlayerPoints();
	const div = document.createElement('div');
	const pointsPlayer = document.querySelector('#points-player');
	const pointsPlayerChild = document.querySelector('#points-player div');
	pointsPlayerChild.remove();
	pointsPlayer.appendChild(div);
	div.textContent = playerPoints;
}
///Computer
const updateComputerPoints = () => {
	const computerPoints = getComputerPoints();
	const div = document.createElement('div');
	const pointsComputer = document.querySelector('#points-computer');
	const pointsComputerChild = document.querySelector('#points-computer div');
	pointsComputerChild.remove();
	pointsComputer.appendChild(div);
	div.textContent = computerPoints;
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
	printHistory(game, playerSelection, computerSelection);
	displayComputerMove(computerSelection);
	printNumberOfGamesAtTheScoreboard();
	updatePlayerPoints();
	updateComputerPoints();
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
	printScore();
	printHistory(game, playerSelection, computerSelection);
	displayComputerMove(computerSelection);
	printNumberOfGamesAtTheScoreboard();
	updatePlayerPoints();
	updateComputerPoints();
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
	printScore();
	printHistory(game, playerSelection, computerSelection);
	displayComputerMove(computerSelection);
	printNumberOfGamesAtTheScoreboard();
	updatePlayerPoints();
	updateComputerPoints();
})

