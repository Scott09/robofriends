import React, {Component} from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Axios from 'axios';
import ErrorBoundary from '../components/ErrorBoundary'



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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ? 
      <h1>Loading!</h1> :
      (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <ErrorBoundary>
          <CardList robots= {filteredRobots} />
        </ErrorBoundary>
      </div>
      
    );
  }
  
}

export default App;