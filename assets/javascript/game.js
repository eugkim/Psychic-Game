//create array of letter choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//set global variables
var wins = 0;
var losses = 0;
var remain = 9;
var soFar = [];

//choose random letter (the letter to be guessed)
var randLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randLetter);

//function - remaining guesses
var decrRemain = function() {
	document.querySelector("#remain").innerHTML = "Guesses Remaining: " + remain;
};
//function - list guessed letters
var listSoFar = function() {
	document.querySelector("#soFar").innerHTML = "Your Guesses So Far: " + soFar.join(", ");
};
//function - randomize new letter to guess
var newRandLetter = function() {
	this.randLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
};
//function - reset remaining guess and guesses so far list. pick new random letter
var reset = function() {
	remain = 9;
	decrRemain();

	soFar = [];
	listSoFar();	

	newRandLetter();
};

//user key-up upon guesses triggers
	document.onkeyup = function(event) {
		//decrease guesses remaining value by 1
		remain--;
		//decrease remaining number
		decrRemain();

		//designate userGuess as the key pressed
		var userGuess = event.key;
		console.log(userGuess);
		//log the user guessed incorrect letter into soFar array
		soFar.push(userGuess);
		//list guessed letter from array
		listSoFar();

			//conditional loop 
			//if guesses remain and the user guesses the correct letter, congratulatory alert and at to win column
			//run reset function to run again
			if (remain > 0) {
				if (userGuess === randLetter) {
					wins++;
					document.querySelector("#wins").innerHTML = "Wins: " + wins;
					alert("Wow! You guessed the correct letter ~" + randLetter + "~ and it only took you " + (9 - remain) + " guesses!");
					reset();
				}
			}
			//if no guesses remain, losing declaration and add to loss column
			//run reset function to run again
			else if (remain == 0) {
				losses++;
				document.querySelector("#losses").innerHTML = "Losses: " + losses;
				alert("Psychic? Psych! Hahahahahaaaaaaaa! Press 'OK' to try again.");
				reset();
			}
	}
	
