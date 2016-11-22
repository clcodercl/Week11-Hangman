//inquirer and prompt npm packages
//pick a random word
//display dashes for each character in the random word
//capture keypress and capture its value
//test if value exists in the word and how many times it exists in the word (functions)
//update the display in console
//keep track of correct/incorrect characters
//test if word is completely found or if user ran out of guesses (if statement)
//reset if word guessed correctly or ran out of guesses
// x inquire if want to play again, (yes or exit)?

//structure:

//import game.js into another file (main)
//after word is chosen, goes into another file (letter)
//taking word.length and display --- (for loop of length of word and finding character matches)
//main.js takes user input and sends to


//game --> word --> letter --> main --> (back and forth between letter and word or main and word)

//linking all relevant files for the main logic

var Game = require('./game.js');
var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');



var userGuesses = [];
var guessesLeft = 10;
// initial prompt asking user to play game
var game = new Game();

function playGame(){
	inquirer.prompt([
		{
			type: 'confirm',
			name: 'hangman',
			message: 'Would you like to play Hangman? (y/n)'
		}
	]).then(function(userInput){
		if (userInput.hangman === true){
			prompt();
		}else{
			console.log('Okay.');
		}
	})
};

// prompt if user chooses to play game
var prompt = function() {
    inquirer.prompt([{
            message: 'Guess a letter',
            type: 'input',
            name: 'guess',
            validate: function(input) {
                if (!input.match([/[a-z]/i])) {
                    return ('Please choose a letter!');
                    guessesLeft--
                } else {
                    return true;
                }
            }
        }])
        .then(function(answers) {
            userGuesses.push(answers.guess);
            guessesLeft--;
            console.log('You have ' + guessesLeft + 'remaining!' );
        });

        prompt();
};











//END GAME WHEN RUN OUT OF GUESSES






