import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  render() {
    return(
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots= {this.state.robots} />
      </div>
  
    );
  }
  
}

export default App;