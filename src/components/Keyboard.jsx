import React from "react";
import "./Keyboard.css";

const Keyboard = ({ onInput, onBackspace, onSubmit, keyColors }) => {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"]
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
  <div className="keyboard-row" key={rowIndex}>
  {row.map((key) => (
    <button
      key={key}
      className={`key ${keyColors[key] || ""} ${["Enter", "Backspace"].includes(key) ? "special" : ""}`}
      onClick={() =>
        key === "Enter" ? onSubmit() :
        key === "Backspace" ? onBackspace() :
        onInput(key)
      }
    >
      {key === "Backspace" ? "⌫" : key}
    </button>
    ))}
  </div>
    ))}
  </div>
);
};

export default Keyboard;
