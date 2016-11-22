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








//END GAME WHEN RUN OUT OF GUESSES






