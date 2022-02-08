import React, { Component } from 'react';

class Refs extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    
  render() {
    return <div>
        <h2>React.createRef()</h2>
        <p>This box below is automatically focused !</p>
        <input type="text" ref={this.inputRef} />
    </div>;
  }
}

export default Refs;
