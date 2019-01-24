import React, { Component } from 'react'

class NewRoomForm extends Component {

  state = {
    roomName: ''
  }

  handleChange =(e) => {
    this.setState({
      roomName: e.target.value
    })
    console.log(this.state.roomName);
  }


  handleSubmit = (e) => {

      e.preventDefault();
      this.props.createRoom(this.state.roomName)
      this.setState({roomName: ''})
  
  
}
  render() {
    console.log(this.props.createRoom);
    return (
      <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.roomName}
                        type="text" 
                        placeholder="NewRoomForm" 
                        required />
                    <button id="create-room-btn" type="submit">+</button>
            </form>
      </div>
    )
  }
}
export default NewRoomForm;