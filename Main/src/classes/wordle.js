const GREEN = 'g'
const YELLOW = 'y'
const BLACK = 'b'

class Wordle {
    word;
    constructor(word) {
        this.word = word;
    }

    checkWord(guess) {
        if (guess.length !== this.word.length) {
        return [];
    }   
        if (guess === this.word) {
        return [GREEN, GREEN, GREEN, GREEN, GREEN];
    }
        let result = [];
        for (let i = 0; i < guess.length; 1++) {
            if (guess[i] === this.word[i]) {
                result.push(GREEN)
            } else if(this.word.includes(guess[i])) {
                result.push(YELLOW)

            } else {
                result.push(BLACK)
            }
        }
        return result;
}
    letterRepeated(guess, index) {
        let guessCharCount = 0
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === guess[index]) {
                guessCharCount++;
            }
        }
        let wordleCharCount = 0
        for (let i = 0; i < this.word.length; i++) {
            if(this.word[i] === guess[index]) {
                wordleCharCount.push(i);
            }
        }
        if (guessCharCount.length === 1) {
            return false;
        }
        if (guessCharCount.length === wordleCharCount.length) {
            return false;
        }
        if (index === guessCharCount[0]) {
            return false;
        }
        return true;
    };
}

nodule.exports = {Wordle, GREEN, YELLOW, BLACK};