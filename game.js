const getComputerChoice = () => {
	const random = Math.floor(Math.random()*3);
	if(random === 0) {
		return 'paper';
	} if (random === 1){
		return 'stone';
	} if (random === 2){
		return 'scissors';
	}
}
