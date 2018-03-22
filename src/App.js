import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/NavBar";
import MiddleContent from "./components/ContentMiddle"
import "./App.css";


class App extends React.Component {

  state = {
    friends
  }

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends})
  }

  render (){
    return (
      <div>
        <NavBar />
        <MiddleContent />
        <Wrapper>
          {this.state.friends.map(friend => (
          <FriendCard
            removeFriend = {this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
          ))}
        </Wrapper>
      </div>
    );
  }
};

export default App;
