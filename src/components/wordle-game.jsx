import React, { useState, useEffect } from "react";
import { Wordle, GREEN, YELLOW, BLACK } from "../utils/wordle";
import fiveLetterWords from "../utils/wordbank";
import Keyboard from "./Keyboard";
import "./wordle-game.css"; // Ensure CSS is imported

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

const WordleGame = () => {
  const [game, setGame] = useState(new Wordle());
  const [guesses, setGuesses] = useState([]); 
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    setGame(new Wordle()); // Start a new game when the component mounts
  }, []);

  const handleInput = (letter) => {
    if (currentGuess.length < WORD_LENGTH && !gameOver) {
      setCurrentGuess((prev) => prev + letter.toLowerCase());
    }
  };

  const handleBackspace = () => {
    if (!gameOver) {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
  };

  const handleSubmit = () => {
    if (currentGuess.length === WORD_LENGTH && !gameOver) {
      if (!fiveLetterWords.includes(currentGuess)) {
        alert("Invalid word. Try again.");
        return;
      }

      const result = game.checkWord(currentGuess);
      const newGuesses = [...guesses, { word: currentGuess, result }];

      setGuesses(newGuesses);
      setCurrentGuess("");

      if (result.every((color) => color === GREEN)) {
        setGameOver(true);
        setWin(true);
      } else if (newGuesses.length >= MAX_GUESSES) {
        setGameOver(true);
      }
    }
  };

  const handleNewGame = () => {
    setGame(new Wordle());
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setWin(false);
  };

  return (
    <div className="wordle-container">
      <h1>Wordle Clone</h1>
      <div className="wordle-grid">
        {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => (
          <div key={rowIndex} className="wordle-row">
            {Array.from({ length: WORD_LENGTH }).map((_, colIndex) => {
              const letter = guesses[rowIndex]?.word[colIndex] || "";
              const colorClass =
                guesses[rowIndex]?.result[colIndex] === GREEN
                  ? "correct"
                  : guesses[rowIndex]?.result[colIndex] === YELLOW
                  ? "present"
                  : guesses[rowIndex]?.result[colIndex] === BLACK
                  ? "absent"
                  : "";

              return (
                <div key={colIndex} className={`wordle-cell ${colorClass}`}>
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {!gameOver && (
        <>
          <p>Current Guess: {currentGuess}</p>
          <Keyboard onInput={handleInput} onBackspace={handleBackspace} onSubmit={handleSubmit} />
        </>
      )}

      {gameOver && (
        <div className="game-over">
          <h2>{win ? "🎉 You won!" : "❌ Game over!"}</h2>
          <p>The correct word was: <strong>{game.word}</strong></p>
          <button onClick={handleNewGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default WordleGame;
