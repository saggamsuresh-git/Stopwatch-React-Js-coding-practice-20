// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {count: 0, min: 0}

  startTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {count} = this.state
    if (count >= 59) {
      this.setState(prevState => ({
        count: 0,
        min: prevState.min + 1,
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  stopTimer = () => {
    this.clearInterval()
  }

  resetTimer = () => {
    this.setState({count: 0, min: 0})
    this.clearInterval()
  }

  clearInterval = () => {
    clearInterval(this.timerId)
  }

  render() {
    const {count, min} = this.state
    const stringifyMinutes = minutes => (minutes > 9 ? minutes : `0${minutes}`)
    const stringifySeconds = seconds => (seconds > 9 ? seconds : `0${seconds}`)

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1>Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-icon-container">
              <img
                className="timer-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>
              {stringifyMinutes(min)}:{stringifySeconds(count)}
            </h1>
            <div>
              <button onClick={this.startTimer} className="start" type="button">
                Start
              </button>
              <button onClick={this.stopTimer} className="stop" type="button">
                Stop
              </button>
              <button onClick={this.resetTimer} className="reset" type="button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
