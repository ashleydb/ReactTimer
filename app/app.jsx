//Include our npm dependencies
var React = require('react');
var ReactDOM = require('react-dom');

//Creates multiple variables at once in ES6 destructuring syntax
// Same as var Route = require('react-router').Route; repeated for each item in the list.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Include our component dependencies
var Main = require('Main');

//Load foundation for CSS. Need to chain loaders for css file, then apply to styles.
require('style!css!foundation-sites/dist/css/foundation.min.css');
//Use jQuery to start foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
