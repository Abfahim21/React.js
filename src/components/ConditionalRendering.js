import React, { Component } from 'react';

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render(){
    let message;
    if(this.state.isLoggedIn){
      message =  <h2>Welcome Abrar</h2>
    } else {
      message =  <h2>Welcome Guest</h2>
    }
    return (<h2>{message}</h2>);
  }
}

export default ConditionalRendering;
