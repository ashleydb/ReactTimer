var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function() {
      return {
        count: 0,
        timerStatus: 'STOPPED' //or 'PAUSED' or 'STARTED'
      };
    },
    componentDidUpdate: function(prevProps, prevState) {
      if (this.state.timerStatus != prevState.timerStatus) {
        switch (this.state.timerStatus) {
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
        var newCount = this.state.count + 1;
        this.setState({
          count: newCount
        });
      }, 1000);
    },
    handleStatusChange: function(newStatus) {
      this.setState({
        timerStatus: newStatus
      })
    },
    render: function() {
      return (
        <div>
          <h1 className="page-title">Timer App</h1>
          <Clock totalSeconds={this.state.count}/>
          <Controls countdownStatus={this.state.timerStatus} onStatusChange={this.handleStatusChange}/>
        </div>
      );
    }
});

module.exports = Timer;
