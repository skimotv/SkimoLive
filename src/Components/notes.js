import React from 'react';
import axios from 'axios';

const API_URL = 'https://skimo.tv/live/annotations'

class Notes extends React.Component{
  state = {notes:""}

  handleNoteChange = (event) =>{
    event.preventDefault();
    this.setState({notes: event.target.value})
  }

  handleSubmit=(event) =>{
    console.log(this.state.notes+" at " + new Date().toLocaleString())
    axios.put(API_URL,this.state)
    .then(res =>{
      console.log(res);
      console.log(res.data);
    });
    this.setState({notes: ''})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} class="ui form">
          <textarea rows="4" placeholder="Enter your notes" value={this.state.notes} onChange={this.handleNoteChange}></textarea>
          <input type="submit" value="Add your notes" class="fluid ui button"/>
        </form>
      </div>
    )
  }
}

export default Notes;
