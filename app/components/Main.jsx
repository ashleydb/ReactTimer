var React = require('react');
var Nav = require('Nav');

//Basic presentational component that would only have a render function
// rewritten using arror functions from ES6.
var Main = (props) => {
  return (
    <div>
      <Nav />
      <p>Main.jsx Rendered</p>
      {props.children}
    </div>
  );
}

module.exports = Main;
