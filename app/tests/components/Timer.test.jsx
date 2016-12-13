var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('Running a Timer', () => {
    it('should should set state to STARTED and count up', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('STARTED');
      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('STARTED');
        done();
      }, 1001);
    });

    it('should pause timer on PAUSED status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('STARTED');
      timer.handleStatusChange('PAUSED');
      setTimeout(() => {
        expect(timer.state.count).toBe(10);
        expect(timer.state.timerStatus).toBe('PAUSED');
        done();
      }, 1001);
    });

    it('should stop timer on STOPPED status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('STARTED');
      setTimeout(() => {
        timer.handleStatusChange('STOPPED');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('STOPPED');
        done();
      }, 1001);
    });
  });
});
