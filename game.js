// Your game.js file will randomly select a word for the player

//RANDOMLY SELECT A WORD FOR PLAYER
//$ npm install --save random-word
var wordListPath = require('word-list');
var fs = require('fs');
 
// returns the path to the word list which is separated by `\n` 

 

function GameWord() {
	var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> [..., 'abmhos', 'abnegate', ...] 
	var randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];
// 	this.word = [i];
    this.gameWord = randomWord;	
}
// 	// selects a random from a list
// Returns a random number between min (inclusive) and max (exclusive)
module.exports(gameWord)

// //}



