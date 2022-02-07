import React, { Component } from 'react';

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
         isLoggedIn : false
      }
    }
    
  render(){
    return(
    this.state.isLoggedIn ?
    <h2>Welcome Abrar</h2> :
    <h2>Welsome Guest</h2>);
  }
}

export default ConditionalRendering;
