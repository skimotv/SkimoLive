import React from 'react';
import axios from 'axios'

const API_URL = '/'


const ApprovalCard = (props) => {
  return(
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
      <div class="ui buttons">
        <button class="ui button" onClick={(e) =>{
          const send = {message: props.message,time: new Date().toLocaleString(), status: "remove"}
          console.log(send)
          axios.post(API_URL,{send})
          .then(res =>{
            console.log(res);
            console.log(res.data);
          });
        }} >Cancel</button>
        <div class="or"></div>
        <button class="ui positive button"onClick={(e) =>{
          const send = {message: props.message,time: new Date().toLocaleString(), status: "save"}
          console.log(send)
          axios.post(API_URL,{send})
          .then(res =>{
            console.log(res);
            console.log(res.data);
          });
        }} >Save</button>
      </div>
      </div>
    </div>
  );
};


export default ApprovalCard;
