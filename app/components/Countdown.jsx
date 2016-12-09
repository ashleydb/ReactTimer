var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'STOPPED' //or 'PAUSED' or 'STARTED'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'STARTED':
          this.startTimer();
          break;
        case 'STOPPED':
          this.stopTimer();
          break;
        case 'PAUSED':
          this.pauseTimer();
          break;
      }
    }
  },
  startTimer: function() {
    //Every 1 second, edit the count
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      if (newCount >= 0) {
        this.setState({
          count: newCount
        });
      } else {
        this.setState({
          count: 0,
          countdownStatus: 'STOPPED'
        });
      }
    }, 1000);
  },
  stopTimer: function() {
    this.timer = undefined;
  },
  pauseTimer: function() {
    this.timer = undefined;
    this.setState({
      countdownStatus: 'PAUSED'
    });
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'STARTED'
    });
  },
  render: function() {
    return (
      <div>
        <Clock totalSeconds={this.state.count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
