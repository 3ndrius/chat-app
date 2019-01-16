import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './components/MessageList'
// import SendMessageForm from './components/SendMessageForm'
// import RoomList from './components/RoomList'
// import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'
class App extends Component {

    state = {
        messages: []
    }
  componentDidMount = () => {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'Martin',
        tokenProvider: new Chatkit.TokenProvider({
            url: tokenUrl
        })
    })
  
    chatManager.connect()
    .then(currentUser => {
        currentUser.subscribeToRoom({
            roomId: "19651166",
            hooks: {
                onMessage: message => {
                    console.log('message.text: ', message.text)
                    this.setState({
                        messages:[...this.state.messages, message]
                    })
                }
            }
        })
    }).catch(err => {
        console.log('Error on connection', err)
      })
}
  render() {
    return (
      <div className="App">
      {/* <RoomList /> */}
      <MessageList messages={this.state.messages}/>
      {/* <SendMessageForm />
      <NewRoomForm /> */}
  </div>
    );
  }
}

export default App;
