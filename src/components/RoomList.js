import React, { Component } from 'react'

export default class RoomList extends Component {


  render() {
    console.log(this.props.rooms);
    const {rooms} = this.props;
    return (
      <ul>
        {rooms && rooms.map(room => {
          return(
            <li key={room.id}>
              <a href="/"># {room.name}</a>
            </li>
          )
        })}
      </ul>
    )
  }
}
