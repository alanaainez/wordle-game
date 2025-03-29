import fiveLetterWords from "./wordbank";


export const GREEN = "g";
export const YELLOW = "y";
export const BLACK = "b";

export class Wordle {
  constructor(word = null) {
    this.word = word || 
    fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
  }

  getRandomWord() {
    return fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
  }

  checkWord(guess) {
    if (guess.length !== this.word.length) {
      return [];
    }
    if (guess === this.word) {
      return Array(this.word.length).fill(GREEN);
    }
    
    let result = Array(this.word.length).fill(BLACK);
    let correctWordLetterCount = {};

    // Count occurrences of each letter in the correct word
    for (let char of this.word) {
      correctWordLetterCount[char] = (correctWordLetterCount[char] || 0) + 1;
    }

    // Step 1: First pass - mark correct (green) letters
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === this.word[i]) {
        result[i] = GREEN;
        correctWordLetterCount[guess[i]]--; // Reduce count
      }
    }

    // Step 2: Second pass - mark present (yellow) letters if available
    for (let i = 0; i < guess.length; i++) {
      if (result[i] === GREEN) continue; // Skip already marked greens

      if (this.word.includes(guess[i]) && correctWordLetterCount[guess[i]] > 0) {
        result[i] = YELLOW;
        correctWordLetterCount[guess[i]]--; // Reduce count
      }
    }

    return result;
  }
  
  letterRepeatedInGuess(guess, index) {
    let charCountInGuess = [];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === guess[index]) {
        charCountInGuess.push(i);
      }
    }
    let charCountInWordle = [];
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === guess[index]) {
        charCountInWordle.push(i);
      }
    }
    if (charCountInGuess.length === 1) {
      return false;
    }
    if (charCountInGuess.length === charCountInWordle.length) {
      return false;
    }
    if (index === charCountInGuess[0]) {
      return false;
    }
    return true;
  }
}
