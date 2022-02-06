import React, { Component } from 'react';

export default class EventHandler extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : "I will change myself if the button clicked"
        }
    }
    messageChanger = () =>{
        this.setState({
            message : "Look, I'm changed"
        })
    }
  render() {
    const { message } = this.state;
    return <div>
        <p>{ message }</p>
        <button onClick={ this.messageChanger }>EVENT HANDLER BUTTON</button>
    </div>;
  }
}
