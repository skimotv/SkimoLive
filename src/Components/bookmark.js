import React from 'react';
import axios from 'axios';

const API_URL = 'https://skimo.tv/live/annotations'

class Bookmark extends React.Component{

  handleSubmit=(event) =>{
    const time = new Date().toLocaleString();
    const annotations = JSON.stringify({
      type: "bookmark",
      timecode: this.time,
    })
    const data = JSON.stringify({
      assetid : this.props.assetid,
      apikey : this.props.apikey,
      annotation : this.annotations,
      username : this.props.username
    })
    axios.post(API_URL,data)
    .then(res =>{
      console.log(res);
      console.log(res.data);
    });
  }

  render(){
    return(
      <div>
        <button class="compact ui button" onClick={this.handleSubmit}>Bookmark this moment</button>
      </div>
    );
  }

}

export default Bookmark;
