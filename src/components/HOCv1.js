import React, { Component } from 'react'

class HOCv1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handleClick = () =>{
        this.setState (prevState =>{
            return {
                count : prevState.count + 1
            }
        })
    }

  render() {
      const { count } = this.state;
    return (
      <div>
          <h2>High Order Components</h2>
          <button onClick={this.handleClick}>Clicked {count} Times</button>

      </div>
    )
  }
}

export default HOCv1