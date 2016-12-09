var React = require('react');
var Controls = require('Controls');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    renderStartStopButton: function() {
        var {countdownStatus} = this.props;
        if (countdownStatus === 'STARTED') {
            return (<button className="button secondary">Pause</button>);
        } else if (countdownStatus === 'PAUSED') {
            return (<button className="button primary">Start</button>);
        }
    },
    render: function() {
        var {countdownStatus} = this.props;
        return (
            <div className="controls">
                {this.renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;
