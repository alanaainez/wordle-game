import React from "react";
import { GREEN, YELLOW, BLACK } from "../utils/wordle";
import Keyboard from "./Keyboard";
import "./wordle-game.css"; // Ensure CSS is imported

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

const WordleGame = ({ 
  guesses, 
  currentGuess, 
  gameOver, 
  win, 
  wordToGuess, 
  handleInput, 
  handleBackspace, 
  handleSubmit, 
  newGame 
}) => {
  return (
    <div className="wordle-container">
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
          <div className="current-guess">
            <p>Current Guess: {currentGuess}</p>
          </div>
          <Keyboard onInput={handleInput} 
                    onBackspace={handleBackspace} 
                    onSubmit={handleSubmit} />
        </>
      )}

      {gameOver && (
        <div className="game-over">
          <h2>{win ? "🎉 You won!" : "❌ Game over!"}</h2>
          <p>The correct word was: <strong>{wordToGuess}</strong></p>
          <button onClick={newGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default WordleGame;
