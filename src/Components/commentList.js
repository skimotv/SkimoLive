import React from 'react';
import Comment from "./comments";
import ApprovalCard from "./ApprovalCard"


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

  commentCreater = (event) =>{
    if(this.state.userInput.length === 0){
      return ;
    }
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
        <ApprovalCard>
          <Comment name={usr} message={msg}/>
        </ApprovalCard>
      )
    });
    return(
      <div className="overarching comments ui">
          <React.Fragment>
            <div style = {{ border:'1px solid black'}}>
              <form className="commentForm" onSubmit={this.commentCreater}>
              <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
              <input type="text" placeholder="Say something..."  value={this.state.userInput} onChange={this.handleTextChange} />
              <input type="submit" value="Post" />
              </form>
            </div>
            <div className="ui container comments" style = {{height: '400px' ,maxHeight: '400px',overflowY: 'scroll', border:'1px solid black'}}>
              {ifStart()}
              {items}
            </div>
          </React.Fragment>
      </div>
    );
  }
}


export default CommentList;
