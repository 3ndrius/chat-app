import React, { Component } from 'react'
import Message from './Message';
import ReactDOM from 'react-dom'
export default class MessageList extends Component {

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollTobottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }
  componentDidUpdate() {
    if(this.shouldScrollTobottom) {
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }

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
