import React from 'react';

class Timer extends React.Component{
  state = {status: false, runningTime: 0, startTime:0}

  startTimer = () => {
    this.setState({
      status: true,
      runningTime: this.state.runningTime,
      timerStart: Date.now() - this.state.runningTime
    });
    this.timer = setInterval(() => {
      this.setState({
        runningTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  componentDidMount(){
    this.startTimer()
  }

  render(){

    const timerTime = this.state.runningTime;
    let centisecond = ("0" + (Math.floor(timerTime/10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime/1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime/60000) % 60)).slice(-2);
    let hours = ("0" + (Math.floor(timerTime/3600000))).slice(-2);

    return(
      <div>
        <p style={{padding:"6px"}}>{hours} : {minutes} : {seconds} : {centisecond}</p>
      </div>
    );
  }
}


export default Timer;
