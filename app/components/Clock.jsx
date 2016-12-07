var React = require('react');

var Clock = React.createClass({
  formatSeconds: function(totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    return minutes + ':' + seconds;
  },
  render: function() {
    return (
      <div>
        <h1>Clock.jsx</h1>
      </div>
    );
  }
});

module.exports = Clock;
