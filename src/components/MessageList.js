import React, { Component } from 'react'



export default class MessageList extends Component {

   
  render() {
    console.log("props",this.props.messages);
      const {messages} = this.props;
    return (
      <div className="message-list">
            {messages && messages.map((msg) => {
                    return (
                        <div key={msg.id}>{msg.text}</div>
                    )
                })}
      </div>
    )
  }
}
