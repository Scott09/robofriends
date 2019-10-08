import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return(
      <div className="f1 tc">
        <h1>{this.props.greeting}</h1>
        <h2>Welcome to React</h2>
      </div>
    )
  }
}

export default Hello;