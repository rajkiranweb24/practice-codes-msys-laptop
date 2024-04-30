import React, { Component } from 'react'

export default class StateClassComp extends Component {
    constructor(){
        super()
        this.state={
            name:"kiran",
            age:26,
            score:[100,39,55]
        }
       
    }
     changeState=()=> {
        
        this.setState({
            name:"Raj Kiran",
            age:29
        })
        }
  
  render() {
    return (
      <div>
        <h1>{ this.state.name}</h1>
        <h1>{ this.state.age}</h1>
        <button onClick={this.changeState}>Change</button>
        
      </div>
    )
  }
}
