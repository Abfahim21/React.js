import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : 0
        }
    }
    addValue(){
        this.setState({
            value :  this.state.value+1
        })
    }
    subsValue(){
        this.setState({
            value : this.state.value-1
        })
    }
    restValue(){
        this.setState({
            value : 0
        })
    }
  render() {
    return <div>
        <h2>Just for practicing React State</h2>
        <button className='addButton' onClick={ ()=> this.addValue() }>+</button>
        <button className='subsButton' onClick={ ()=> this.subsValue() }>-</button>
        <button className='resetButton' onClick={ ()=> this.restValue() }>RESET</button>
        <p>Value : {this.state.value} </p>
    </div>;
  }
}