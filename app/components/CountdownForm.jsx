var React = require('react');

var CountdownForm = React.createClass({
  propTypes: {
    onSetCountdown: React.PropTypes.func.isRequired
  },
  onSubmit: function(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    //Check the string only contains numbers
    if (strSeconds.length > 0 && strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" placeholder="Enter seconds" ref="seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
