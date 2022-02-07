import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pName : "Parent Component"
    }
  }
  greetParent = (cName) =>{ 
    alert(`Hello ${this.state.pName} from ${cName}`);
  }
  
  render() {
    return <div>
        <ChildComponent greeting = { this.greetParent }/>
    </div>;
  }
}

export default ParentComponent;
