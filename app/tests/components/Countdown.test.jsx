var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should should set state to STARTED and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      //Get the clock as a jQuery element
      //var $el = $(ReactDOM.findDOMNode(countdown));

      countdown.handleSetCountdown(5);
      //var actualText = $el.find('.clock-text').text();
      expect(countdown.state.countdownStatus).toBe('STARTED');
      expect(countdown.state.count).toBe(5);
      setTimeout(() => {
        expect(countdown.state.count).toBe(4);
        done();
      }, 1001);
    });

    it('should not count down below 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });

    it('should pause countdown on PAUSED status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('PAUSED');
      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('PAUSED');
        done();
      }, 1001);
    });

    it('should stop countdown on STOPPED status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('STOPPED');
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('STOPPED');
        done();
      }, 1001);
    });
  });
});
