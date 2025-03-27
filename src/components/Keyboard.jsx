import React from "react";
import "./Keyboard.css";

const Keyboard = ({ onInput, onBackspace, onSubmit, keyColors }) => {
  const keys = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"
  ];

  return (
    <div className="keyboard">
      {keys.map((row, i) => (
        <button
        key={row}
        className={`key ${keyColors[keys] || ""} ${["Enter", "Backspace"].includes(row) ? "special" : ""}`}
        onClick={() => row === "Enter" ? onSubmit() : row === "Backspace" ? onBackspace() : onInput(row)}
      >
        {row === "Backspace" ? "⌫" : row}
      </button>
    ))}
  </div>
);
};

export default Keyboard;
