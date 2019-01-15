import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from '.config'
class App extends Component {

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator: instanceLocator
    })
}

  render() {
    return (
      <div className="app">
      <RoomList />
      <MessageList />
      <SendMessageForm />
      <NewRoomForm />
  </div>
    );
  }
}

export default App;
