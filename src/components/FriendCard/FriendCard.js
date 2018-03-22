import React from "react";
import "./FriendCard.css";



const FriendCard = props => (
  <div className="card" key={props.id} onClick={props.handleMemory}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li id={props.id}>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
  </div>
);


export default FriendCard;
