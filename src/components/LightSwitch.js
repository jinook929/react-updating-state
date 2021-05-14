import React, { Component } from 'react'

export default class LightSwitch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       toggled: false
    }
  }

  handleClick = () => {
    this.setState(
      (state, props) => ({
        toggled: !state.toggled
      })
    )
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    )
  }
}
