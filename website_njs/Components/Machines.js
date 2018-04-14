import React, { Component } from 'react';
import red from '../Images/reddot.png';
import green from '../Images/greendot.png';

class Machines extends Component {


  render() {
    return (
      <div className="machines">
        <h3>{this.props.title}</h3>
        <p>{this.props.machine} 1: {this.props.available1} <img src={red} alt="red dot for unavailable"/></p>
        <p>{this.props.machine} 2: {this.props.available2} <img src={red} alt="red dot for unavailable"/></p>
        <p>{this.props.machine} 3: {this.props.available3} <img src={red} alt="red dot for unavailable"/></p>
      </div>
    );
  }
}

export default Machines;
