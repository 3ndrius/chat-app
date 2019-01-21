import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'
class App extends Component {

    state = {
        messages: [],
        joinableRooms: [],
        joinedRooms: []

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
        this.currentUser = currentUser

        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
               joinableRooms,
               joinedRooms: this.currentUser.rooms
            })
        }).catch(err => console.log('error on joinablerooms', err))

        this.currentUser.subscribeToRoom({
            roomId: "19651166",
            hooks: {
                onMessage: message => {
                  
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
sendMessage = (text) =>{
    this.currentUser.sendMessage({
        text,
        roomId: "19651166"
    }).then(MessageId => {
        
    })
}
  render() {
    return (
      <div className="App">
      <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
      <MessageList messages={this.state.messages} />
      <SendMessageForm sendMessage={this.sendMessage} />
      <NewRoomForm />
  </div>
    );
  }
}

export default App;
