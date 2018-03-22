import React from "react";
import "./NavBar.css";

const Score = props => (
  <div>
  <nav className="navbar">
    <ul>
      <li className="brand"><a href="/">Clicky Game</a></li>
      <li>Click an image to begin!</li>
      <li>Score: {props.score} | Top Score: {props.topScore}</li>
    </ul>
  </nav>
  </div>
)

export default Score;
