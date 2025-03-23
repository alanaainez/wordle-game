import React, { useState } from "react";
import WordleGame from "./components/wordle-game.js";
import Keyboard from "./components/Keyboard";
import wordbank from "./utils/wordbank";
import "./App.css";

const getRandomWord = () => wordbank[Math.floor(Math.random() * wordbank.length)];

function App() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const handleGuess = () => {
    if (currentGuess.length !== 5 || gameOver) return;

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess("");

    if (currentGuess === wordToGuess) {
      setWin(true);
      setGameOver(true);
    } else if (newGuesses.length >= 6) {
      setGameOver(true);
    }
  };

  const handleKeyPress = (key) => {
    if (gameOver) return;

    if (key === "Enter") {
      handleGuess();
    } else if (key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess(currentGuess + key);
    }
  };

  const newGame = () => {
    setWordToGuess(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setWin(false);
  };

  return (
    <div className="app">
      <h1>Wordle Game</h1>
      <WordleGame wordToGuess={wordToGuess} guesses={guesses} />
      <Keyboard onKeyPress={handleKeyPress} />
      {gameOver && (
        <div className="game-over">
          <h2>{win ? "🎉 Congrats!" : `❌ Sorry! The word was: ${wordToGuess}`}</h2>
          <button onClick={newGame}>New Game</button>
        </div>
      )}
    </div>
  );
}

export default App;
