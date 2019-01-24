import React, { Component } from 'react'

export default class RoomList extends Component {
  
  render() {

    const {rooms} = this.props;
    const orderedRooms = [...rooms].sort((a, b) => a.id - b.id);

    return (
      <ul>
        {orderedRooms && orderedRooms.map(room => {
          return(
            <li key={room.id} className="room">
            <a onClick={() => this.props.subscribeToRoom(room.id)}
                href="#">
                # {room.name}</a>
        </li>
          )
        })}
      </ul>
    )
  }
}
