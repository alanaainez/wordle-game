import { useState } from "react";
import { Wordle } from "../utils/wordle";
import fiveLetterWords from "../utils/wordbank";

export default function WordleGame() {
  const [game] = useState(new Wordle());
  const [guess, setGuess] = useState("");
  const [results, setResults] = useState([]);

  const handleGuess = () => {
    if (guess.length !== 5 || !fiveLetterWords.includes(guess)) {
      alert("Please enter a valid 5-letter word.");
      return;
    }

    const result = game.checkWord(guess);
    setResults([...results, { guess, result }]);
    setGuess("");

    if (result.every((color) => color === "g")) {
      alert("Congratulations! You guessed the word!");
    }
  };

  return (
    <div>
      <h1>Wordle Game</h1>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={5}
      />
      <button onClick={handleGuess}>Submit</button>
      <div>
        {results.map((entry, index) => (
          <p key={index}>{entry.guess} - {entry.result.join(" ")}</p>
        ))}
      </div>
    </div>
  );
}
