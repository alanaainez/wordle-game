import React, { useState, useEffect, useCallback } from "react";
import WordleGame from "./components/wordle-game";
import { Wordle, GREEN } from "./utils/wordle";
import wordbank from "./utils/wordbank";
import './components/wordle-game.css';
import "./App.css";

const getRandomWord = () => wordbank[Math.floor(Math.random() * wordbank.length)];

function App() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleGuess = () => {
    if (currentGuess.length !== 5 || gameOver) return;

    const newGuess = currentGuess.toLowerCase();
    if (!wordbank.includes(newGuess)) {
      alert("Invalid word. Try again.");
      return;
    }

    const wordleGame = new Wordle(wordToGuess);
    const result = wordleGame.checkWord(newGuess);

    setGuesses((prevGuesses) => {
      const updatedGuesses = [...prevGuesses, { word: newGuess, result }];

      if (result.every((color) => color === GREEN)) {
        setWin(true);
        setGameOver(true);
      } else if (updatedGuesses.length >= 6) {
        setGameOver(true);
      }

      return updatedGuesses;
    });

    setCurrentGuess("");
  };

  const handleInput = useCallback(
    (key) => {
      if (gameOver) return;

      if (key === "Enter") {
        handleGuess();
      } else if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[a-z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [gameOver, currentGuess]
  );

  useEffect(() => {
    const handleKeyDown = (event) => handleInput(event.key);
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleInput]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const newGame = () => {
    setGameOver(false);
    setWin(false);
    setWordToGuess(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Wordle Game</h1>
      <WordleGame
        wordToGuess={wordToGuess}
        guesses={guesses}
        currentGuess={currentGuess}
        handleInput={handleInput}
        handleBackspace={() => handleInput("Backspace")}
        handleSubmit={() => handleInput("Enter")}
        gameOver={gameOver}
        win={win}
        newGame={newGame}
      />

      {gameOver && (
        <div className="game-over">
          <h2>{win ? "🎉 Congrats!" : `❌ Sorry! The word was: ${wordToGuess}`}</h2>
          <button onClick={newGame}>New Game</button>
        </div>
      )}
      <footer className="footer">
        <p>
          Created by Alana Rodriguez |
          <a href="https://github.com/alanaainez" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
