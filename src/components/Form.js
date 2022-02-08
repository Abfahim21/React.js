import React, { Component } from 'react';

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         textMessage : '',
         email : ''
      }
    }
    handleMessageChange = (event) =>{
        this.setState({
            textMessage: event.target.value
        })
    }
    handleEmailChange = (eventEmail) =>{
        this.setState({
            email: eventEmail.target.value
        })
    }
  render() {
    return <div>
        <label>User Name: </label>
        <input type="text" value={this.state.textMessage} onChange={ this.handleMessageChange }/> <br />
        <label htmlFor="email">Enter Email: </label>
        <input type="email" value={this.state.email} onChange={this.handleEmailChange}/> <br />
    </div>;
  }
}

export default Form;
