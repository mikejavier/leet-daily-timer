import React, {Component} from 'react';
import './timer.css';

class Timer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 240,
      isStarted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.interval = null;
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  startTime() {
    this.setState({
      isStarted: true
    })
    this.interval = setInterval(() => {
      this.setState({
        value: this.state.value - 1
      })
    }, 1000)
  }

  stopTime() {
    this.setState({
      isStarted: false
    })
    clearInterval(this.interval);
  }

  render() {
    const exceed = () => this.state.value < 0;
        
    return (
      <div className={exceed() ? 'timer exceed' :  'timer'}>
        <h1>Leet Daily Timer</h1>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <div className="controls">
          <button onClick={this.startTime} disabled={this.state.isStarted}>Start</button>
          <button onClick={this.stopTime} disabled={!this.state.isStarted}>Stop</button>
        </div>
      </div>
    );
  }
};

export default Timer;
