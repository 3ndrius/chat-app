import React, { Component } from 'react'

export default class RoomList extends Component {
  
  render() {

    const {rooms} = this.props;
    const orderedRooms = [...rooms].sort((a, b) => a.id - b.id);

    return (
    <div className="rooms-list">
      <ul>
        {orderedRooms && orderedRooms.map(room => {
          const active = this.props.roomId === room.id ? "active" : " ";
          return(
            <li key={room.id} className={`room ${active}`}>
            <a onClick={() => this.props.subscribeToRoom(room.id)}
                href="#">
                # {room.name}</a>
        </li>
          )
        })}
      </ul>
    </div>
    )
  }
}
