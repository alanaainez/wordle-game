import React from "react";
import "./Keyboard.css";

const Keyboard = ({ onInput, onBackspace, onSubmit, keyColors }) => {
  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"]
  ];

  const handleTouch = (e, key) => {
    e.preventDefault(); // Prevent accidental zooming or double-tap issues

    if (key === "Enter") {
      onSubmit();
    } else if (key === "Backspace") {
      onBackspace();
    } else {
      onInput(key);
    }
  };

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
  <div className="keyboard-row" key={rowIndex}>
  {row.map((key) => (
    <button
      key={key}
      className={`key ${keyColors?.[key] || ""} ${["Enter", "Backspace"].includes(key) ? "special" : ""}`}
      onClick={() =>
        key === "Enter" ? onSubmit() :
        key === "Backspace" ? onBackspace() :
        onInput(key)
      }
      onTouchStart={(e) => handleTouch(e, key)} // Add touch support
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
