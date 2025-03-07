import { Wordle, GREEN, YELLOW, BLACK } from "../classes/Wordle";

describe('Wordle', () => {
    it('if guess has different number of letters than wordle, return empty array', () => {
        const wordle = new Wordle('alert');
        const result = wordle.checkWord('play');
        expect(result).toEqual([]);
    })
    it('if guess matches wordle, return array of all green', () => {
        const wordle = new Wordle('alert');
        const result = wordle.checkWord('alert');
        expect(result).toEqual([GREEN, GREEN, GREEN, GREEN, GREEN]);
    })
    it('if first letter is in correct position, return green for that position', () => {
        const wordle = new Wordle('alert');
        const result = wordle.checkWord('agony');
        expect(result).toEqual([GREEN, BLACK, BLACK, BLACK, BLACK]);
    })
    it('if last letter is in correct position, return green for that position', () => {
        const wordle = new Wordle('alert');
        const result = wordle.checkWord('glout');
        expect(result).toEqual([BLACK, BLACK, BLACK, BLACK, GREEN]);
    })
    it('if letter exists once but is in wrong position', () => {
        const wordle = new Wordle('alert');
        const result = wordle.checkWord('lanky');
        expect(result).toEqual([BLACK, BLACK, YELLOW, BLACK, BLACK]);
    })
    it('if no letters are part of wordle', () => {
        const wordle = new Wordle('alert');
        const result = wordle.checkWord('spunk');
        expect(result).toEqual([BLACK, BLACK, BLACK, BLACK, BLACK]);
    })
    it('if letters were repeated and the wordle only has one, return one green letter', () => {
        const wordle = new Wordle('alert');
        const result = wordle.checkWord('cheek');
        expect(result).toEqual([BLACK, BLACK, GREEN, BLACK, BLACK]);
    })
    it('if two of the same letter exist in the wordle and in the guess', () => {
        const wordle = new Wordle('elert');
        const result = wordle.checkWord('cheek');
        expect(result).toEqual([BLACK, BLACK, GREEN, BLACK, BLACK]);
    })
})

describe('repeatedLetter', () => {
    it('guessed word has no repeated letters', () => {
        const wordle = new Wordle('alert')
        const result = wordle.repeatedLetter('audio', 0);
        expect(result).toEqual(false);
    })
    it('guessed word has repeated letters but only one exists in wordle', () => {
        const wordle = new Wordle('alert');
        const result = wordle.repeatedLetter('every', 2);
        expect(result).toEqual(true);
    })
})
