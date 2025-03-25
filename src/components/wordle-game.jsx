import React, { useState, useEffect } from "react";
import { Wordle, GREEN, YELLOW, BLACK } from "../utils/wordle";
import fiveLetterWords from "../utils/wordbank";
import Keyboard from "./Keyboard";

const WordleGame = () => {
  const [game, setGame] = useState(new Wordle());
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const maxGuesses = 6;

  useEffect(() => {
    setGame(new Wordle()); // Start a new game when component mounts
  }, []);

  const handleInput = (letter) => {
    if (guess.length < 5 && !gameOver) {
      setGuess(guess + letter);
    }
  };

  const handleBackspace = () => {
    if (!gameOver) {
      setGuess(guess.slice(0, -1));
    }
  };

  const handleSubmit = () => {
    if (guess.length === 5 && !gameOver) {
      if (!fiveLetterWords.includes(guess)) {
        alert("Invalid word. Try again.");
        return;
      }

      const result = game.checkWord(guess);
      setGuesses([...guesses, { word: guess, result }]);
      setGuess("");

      if (result.every((color) => color === GREEN)) {
        setGameOver(true);
      } else if (guesses.length + 1 >= maxGuesses) {
        setGameOver(true);
      }
    }
  };

  const handleNewGame = () => {
    setGame(new Wordle());
    setGuesses([]);
    setGuess("");
    setGameOver(false);
  };

  return (
    <div className="wordle-container">
      <h1>Wordle Clone</h1>
      <div className="wordle-grid">
        {Array.from({ length: maxGuesses }).map((_, rowIndex) => (
          <div key={rowIndex} className="wordle-row">
            {Array.from({ length: 5 }).map((_, colIndex) => {
              const char = guesses[rowIndex]?.word[colIndex] || "";
              const color = guesses[rowIndex]?.result[colIndex] || "";
              return (
                <div key={colIndex} className={`wordle-cell ${color}`}>
                  {char}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {!gameOver && (
        <>
          <p>Current Guess: {guess}</p>
          <Keyboard onInput={handleInput} onBackspace={handleBackspace} onSubmit={handleSubmit} />
        </>
      )}

      {gameOver && (
        <div>
          <p>{guesses[guesses.length - 1].result.every((c) => c === GREEN) ? "🎉 You won!" : "❌ Game over!"}</p>
          <p>The correct word was: <strong>{game.word}</strong></p>
          <button onClick={handleNewGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default WordleGame;
