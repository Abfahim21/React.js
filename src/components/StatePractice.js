import React, { Component } from 'react';

export default class StatePractice extends Component {
  constructor(){
    super()
    this.state = {
      message : "Please click the button below to subscribe"
    }
  }
  changeMessage(){
    this.setState({
      message : "Thanks for Subscribing"
    })
  }
  render() {
    //const { message } = this.state
    return <div>
      <h1>Welcome to my Page</h1>
      <p>{this.state.message}</p>
      <button onClick={ ()=> this.changeMessage() }>SUBSCRIBE</button>
    </div>;
  }
}