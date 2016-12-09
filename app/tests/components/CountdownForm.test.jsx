var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    //A spy is a function that we can watch, e.g. for callbacks
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    //Get the form as a jQuery element
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    //Set the value in the form's text field
    countdownForm.refs.seconds.value = '109';
    //Get the (first) form from jQuery, turn that into a DOM element for TestUtils, which can trigger a for submission
    TestUtils.Simulate.submit($el.find('form')[0]);
    // The form was submitted, so did our spy function get triggered?
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    //A spy is a function that we can watch, e.g. for callbacks
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    //Get the form as a jQuery element
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    //Get the (first) form from jQuery, turn that into a DOM element
    var form = $el.find('form')[0];
    //Set the value in the form's text field, then submit the form, then do our test
    countdownForm.refs.seconds.value = 'abc';
    TestUtils.Simulate.submit(form);
    expect(spy).toNotHaveBeenCalled();

    countdownForm.refs.seconds.value = ' a';
    TestUtils.Simulate.submit(form);
    expect(spy).toNotHaveBeenCalled();

    countdownForm.refs.seconds.value = 'a123';
    TestUtils.Simulate.submit(form);
    expect(spy).toNotHaveBeenCalled();

    countdownForm.refs.seconds.value = '0z';
    TestUtils.Simulate.submit(form);
    expect(spy).toNotHaveBeenCalled();

    countdownForm.refs.seconds.value = '';
    TestUtils.Simulate.submit(form);
    expect(spy).toNotHaveBeenCalled();
  });
});
