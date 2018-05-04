import React, {Component} from 'react';
import './timer.css';

class Timer extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      initialValue: 300,
      value: 240,
      isStarted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeInitialValue = this.changeInitialValue.bind(this);
    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.interval = null;
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  changeInitialValue(event) {
    this.setState({
      initialValue: event.target.value
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

  resetTime() {
    this.setState({
      value: this.state.initialValue,
    })
  }

  componentDidMount() {
    document.addEventListener('keyup', (e) => {
      const keyCode = e.keyCode;
      if (keyCode === 32) return this.resetTime();
      if (keyCode === 83 && !this.state.isStarted) return this.startTime();
    })
  }

  render() {
    const exceed = () => this.state.value < 0;
        
    return (
      <div className={exceed() ? 'timer exceed' :  'timer'}>
        <h1>Leet Daily Timer</h1>
        <input type="text" className="counter" value={this.state.value} onChange={this.handleChange} />
        <div className="controls">
          <button onClick={this.startTime} disabled={this.state.isStarted}>Start</button>
          <button onClick={this.stopTime} disabled={!this.state.isStarted}>Stop</button>
          <button onClick={this.resetTime}>Reset</button><input type="text" value={this.state.initialValue} onChange={this.changeInitialValue} />
        </div>
      </div>
    );
  }
};

export default Timer;
