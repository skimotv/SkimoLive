import React from 'react';
import Comment from "./comments";
import ApprovalCard from "./ApprovalCard"
import { Auth, API} from 'aws-amplify'
import {createComment as CreateComment} from '../graphql/mutations'
import {listComment as ListComment} from '../graphql/queries'
import { onCreateCommeet as OnCreateCommeet} from '../graphql/subscriptions'


class CommentList extends React.Component{
  state = {userInput:"", toDoList:[], author:"" };

  handleAuthorChange = (event) =>{
    event.preventDefault();
    this.setState({author: event.target.value});
  }

  handleTextChange = (event) =>{
    event.preventDefault();
    this.setState({userInput: event.target.value});
  }

  commentCreater = async (event) =>{
    if(this.state.userInput.length === 0){
      return ;
    }
    const description = this.state.userInput
    const variables = {
      input: {description:{description}}
    }
    await API.graphql({
      query: CreateComment,
      variables: {
        input: {description},
      },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })

    this.state.toDoList.push([this.state.author,this.state.userInput])
    this.setState({userInput: ""})
  }

  render(){
    const ifStart = () =>{
      if(items.length === 0){
        return(
          <center style = {{ padding:'20px'}}>
            <h3 > Be the first to comment</h3>
          </center>
        );
      }
      else{
        return null;
      }
    }
    const items = this.state.toDoList.map(([usr, msg]) =>{
      return(
        <ApprovalCard message={msg}>
          <Comment name={usr} message={msg}/>
        </ApprovalCard>
      )
    });
    return(
      <div className="overarching comments ui">
          <React.Fragment>
            <div style = {{}}>
              <form className="commentForm" onSubmit={this.commentCreater}>
              <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
              <input type="text" placeholder="Say something..."  value={this.state.userInput} onChange={this.handleTextChange} />
              <input type="submit" value="Post" />
              </form>
            </div>
            <div className="ui container comments" style = {{width: '400px', height: '434px' ,maxHeight: '434px',overflowY: 'scroll'}}>
              {ifStart()}
              {items}
            </div>
          </React.Fragment>
      </div>
    );
  }
}


export default CommentList;
