import React, { Component } from 'react';

class Statitem extends Component {
  render() {
    return (
      <div className="statitem">
        <h3>{this.props.title}</h3>
        <p>Machines you used: {this.props.machines}</p>
        <p>Distance traveled: {this.props.distance}</p>
        <p>Calories burnt: {this.props.calories}</p>
      </div>
    );
  }
}

export default Statitem;
