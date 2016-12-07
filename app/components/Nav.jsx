var React = require('react');
var {Link, IndexLink} = require('react-router');

//Component with some logic, since we handle searches in the Nav bar.
//Uses foundation for styling the elements.
var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
            <li><Link to="countdown" activeClassName="active-link">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="http://www.HiAsh.com">Ash</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
