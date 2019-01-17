import React, { Component } from 'react'

export default class SendMessageForm extends Component {
  state = {
    value: ''
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <form className="send-message-form">
      <input
          placeholder="SendMessageForm"
          type="text"
          onChange={this.handleChange} 
          value={this.state.value}/>
      </form>
    )
  }
}
