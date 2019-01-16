import React, { Component } from 'react'
import Message from './Message';

export default class MessageList extends Component {
  render() {
    const {messages} = this.props;
    return (
      <div className="message-list">
            {messages && messages.map((msg) => {
                    return (
                       <Message key={msg.id} username={msg.senderId} text={msg.text}/>
                    )
                })}
      </div>
    )
  }
}
