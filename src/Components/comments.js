import React from 'react';
import faker from 'faker';

class Comment extends React.Component{

  constructor(props){
    super()

    this.state = {
      name: props.name,
      message: props.message,
      time: new Date().toLocaleString(),
      avatar: faker.image.avatar()
    }
  }

  render() {
    return(
      <div className="comment">
        <a href="/" className="avatar">
          <img width="48px" height="48px" alt="avatar" src={this.state.avatar} />
        </a>
        <div className="content">
          <h4>
            <a href="/" className="author">
              {this.state.name}
            </a>
            <div className="megadata">
              <span className="date">{this.state.time}</span>
            </div>
          </h4>
          <div className="text">{this.state.message}</div>
        </div>
      </div>
    );
  };
}



export default Comment;
