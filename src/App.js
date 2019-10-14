import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Axios from 'axios';



class App extends Component {
  constructor() {
    super()

    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.setState({robots: response.data})
    }
   )
    
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return(
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots= {filteredRobots} />
      </div>
  
    );
  }
  
}

export default App;