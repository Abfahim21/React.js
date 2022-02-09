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
    return (
      <div>
          <h2>High Order Components</h2>
          <button onClick={this.handleClick}>Clicked {this.state.count} Times</button>

      </div>
    )
  }
}

export default HOCv1