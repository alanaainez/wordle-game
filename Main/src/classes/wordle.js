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
}};



nodule.exports = {Wordle, GREEN, YELLOW, BLACK};