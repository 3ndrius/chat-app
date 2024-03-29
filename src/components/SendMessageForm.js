import React, { Component } from 'react'

export default class SendMessageForm extends Component {
    state = {
        message: ''
    }
     handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
      this.props.sendMessage(this.state.message)
      this.setState({message: ''})
  }
    render() {
   
    return (
      <form className="send-message-form" onSubmit={this.handleSubmit}>
      <input
          disabled={this.props.disabled}
          placeholder="SendMessageForm"
          type="text"
          onChange={this.handleChange} 
          value={this.state.message}/>
      </form>
    )
  }
}
