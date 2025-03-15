const { Wordle } = require("./src/classes/wordle");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const fiveLetterWords = require("./src/wordbank");

const game = new Wordle(); // Picks a random word from the list
console.log("Try to guess the 5-letter word.");

function askForGuess() {
    rl.question("Enter your guess: ", (guess) => {
      if (guess.length !== 5) {
        console.log("Please enter a 5-letter word.");
        return askForGuess(); // Reprompt user
      }
  
      if (!fiveLetterWords.includes(guess)) {
        console.log("Invalid word. Try again.");
        return askForGuess(); // Reprompt user
      }
  
      const result = game.checkWord(guess);
      console.log("Result:", result.join(" "));
  
      if (result.every((color) => color === "g")) {
        console.log("Congratulations! You guessed the word!");
        return rl.close();
      }
      askForGuess(); // Ask for another guess
    });
  }
  
  askForGuess();