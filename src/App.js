import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/NavBar";
import MiddleContent from "./components/ContentMiddle"
import "./App.css";


class App extends React.Component {

  state = {
    score: 0,
    topScore: 0,
    friends
  }

  clickedCards = [];

  handleClick = () => {
    this.setState({ score: this.state.score + 1 });
    //console.log("clicked" + this.state.score);
    if(this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    //console.log("clicked" + this.state.topScore);
  }

  handleMemory = event => {
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    event.preventDefault();
    console.log(event.target.id);
    if(this.clickedCards.indexOf(event.target.id) === -1) {
      this.clickedCards.push(event.target.id);
      this.handleClick();
    }
    else {
      this.clickedCards = [];
      this.setState({
        score: 0,
        friends
      })
    }
  }


  render (){
    return (
      <div>
        <NavBar
          score= {this.state.score}
          topScore = {this.state.topScore}
          />
        <Wrapper>
          <MiddleContent />
          {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleMemory = {this.handleMemory}
          />
          ))}
        </Wrapper>
      </div>
    );
  }
};

export default App;
