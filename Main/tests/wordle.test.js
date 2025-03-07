const {Wordle, GREEN, YELLOW, BLACK} = require("../classes/Wordle")

describe('Wordle', () => {
    it('if guess has different number of letters than wordle, return empty array', () => {
        const wordle = new Wordle('cheek')
        const result = wordle.checkWord('play')
        expect(result)toEqual([])
    })
    it('if guess matches wordle, return array of all green', () => {
        const wordle = new Wordle('cheek')
        const result = wordle.checkWord('cheek')
        expect(result)toEqual([GREEN, GREEN, GREEN, GREEN, GREEN])
    })
    it('if first letter is in correct position, return green for that position', () => {
        const wordle = new Wordle('cheek')
        const result = wordle.checkWord('crash')
        expect(result)toEqual([GREEN, BLACK, BLACK, BLACK, BLACK])
    })
    it('if last letter is in correct position, return green for that position', () => {
        const wordle = new Wordle('cheek')
        const result = wordle.checkWord('brink')
        expect(result)toEqual([BLACK, BLACK, BLACK, BLACK, GREEN])
    })
    it('if letter exists once but is in wrong position', () => {
        const wordle = new Wordle('cheek')
        const result = wordle.checkWord('lanky')
        expect(result)toEqual([BLACK, BLACK, YELLOW, BLACK, BLACK])
    })
    it('if no letters are part of wordle', () => {
        const wordle = new Wordle('cheek')
        const result = wordle.checkWord('alert')
        expect(result)toEqual([BLACK, BLACK, BLACK, BLACK, BLACK])
    })
})

describe('repeatedLetter', () => {
    it('if letter exists multiple times in a guess but only one letter is in the correct position', () => {
        const wordle = new Wordle('cheek')
        const result = wordle.repeatedLetter('every')
        expect(result)toEqual([YELLOW, BLACK, GREEN, BLACK, BLACK])
    })
})
