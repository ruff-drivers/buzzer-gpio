'use strict';

var Level = require('gpio').Level;
var assert = require('assert');
var mock = require('ruff-mock');

var any = mock.any;
var mockAny = mock.mockAny;
var when = mock.when;

var Device = require('../');

require('t');

describe('Buzzer Driver', function () {
    var buzzer;
    var gpio;

    before(function () {
        gpio = mockAny();
        buzzer = new Device({
            gpio: gpio
        });
    });

    it('shoule gpio write `Level.high` when turn on', function (done) {
        when(gpio)
            .write(any, any)
            .then(function (level, callback) {
                assert.equal(level, Level.high);
                callback();
            });

        buzzer.turnOn(done);
    });

    it('shoule gpio write `Level.low` when turn off', function (done) {
        when(gpio)
            .write(any, any)
            .then(function (level, callback) {
                assert.equal(level, Level.low);
                callback();
            });

        buzzer.turnOff(done);
    });

    it('should have `isOn` called back with true when gpio read `Level.high`', function (done) {
        when(gpio)
            .read(any)
            .then(function (callback) {
                callback(undefined, Level.high);
            });

        buzzer.isOn(function (error, on) {
            assert.ifError(error);
            assert.strictEqual(on, true);
            done();
        });
    });
});
