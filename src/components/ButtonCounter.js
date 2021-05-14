import React, { Component } from 'react'

export default class ButtonCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  handleClick = () => {
    this.setState(
      (state, props) => ({
        count: state.count + 1
      })
    )
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
