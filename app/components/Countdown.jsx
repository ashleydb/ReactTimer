var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
          this.setState({
              count: 0
          })
        case 'PAUSED':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
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
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'STARTED'
    });
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    })
  },
  renderControlArea: function() {
    var {countdownStatus} = this.state;
    if(countdownStatus !== 'STOPPED') {
      return (<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>);
    } else {
      return (<CountdownForm onSetCountdown={this.handleSetCountdown}/>);
    }
  },
  render: function() {
    return (
      <div>
        <Clock totalSeconds={this.state.count}/>
        {this.renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
