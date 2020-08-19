import React from 'react';


class Clock extends React.Component{
  state = {currentTime: new Date().toLocaleString()}

  startClock = () => {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 500);
  };

  componentDidMount(){
    this.startClock()
  }

  render(){
    return(
      <div>
        <p>{this.state.currentTime}</p>
      </div>
    );
  }
}

export default Clock;
