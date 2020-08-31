import React from 'react';
import axios from 'axios';

const API_URL = ''

class Bookmark extends React.Component{

  handleSubmit=(event) =>{
    const time = new Date().toLocaleString();
    axios.post(API_URL,{time})
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
