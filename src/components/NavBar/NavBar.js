import React from "react";
import "./NavBar.css";

const Score = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            Clicky Game
          </a>
          <h2 className="score-heading">
            Click an Image to Begin!
          </h2>
          <h2 className="score">
            Score: {props.score}
            |
            Top Score: {props.topscore}
          </h2>
        </div>
      </div>
    </nav>
  </div>
)

export default Score;
