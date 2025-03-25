import React from "react";
import "./Keyboard.css";

const Keyboard = ({ onKeyPress }) => {
  const keys = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm",
  ];

  return (
    <div className="keyboard">
      {keys.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.split("").map((key) => (
            <button key={key} onClick={() => onInput(key)}>{key}</button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <button className="wide-key" onClick={() => onKeyPress("Enter")}>Enter</button>
        <button className="wide-key" onClick={() => onKeyPress("Backspace")}>⌫</button>
      </div>
    </div>
  );
};

export default Keyboard;
