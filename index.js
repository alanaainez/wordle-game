const { Wordle } = require("./src/classes/wordle");

const game = new Wordle(); // Picks a random word from the list
console.log("Selected Word:", game.word);

const result = game.checkWord("apple");
console.log("Result:", result);
