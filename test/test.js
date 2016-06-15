'use strict';

var assert = require('assert');
var path = require('path');
var mock = require('ruff-mock');

var when = mock.when;
var any = mock.any;

var driverPath = path.join(__dirname, '..');
var runner = require('ruff-driver-runner');

require('t');

describe('Buzzer Driver', function () {
    var buzzer;
    var gpio;

    before(function (done) {
        runner.run(driverPath, function (device, context) {
            buzzer = device;
            gpio = context.arg('gpio');
            done();
        });
    });

    it('shoule gpio write 1 when realy turn on', function (done) {
        when(gpio).write(1, callback).then(function () {
            callback();
        });

        buzzer.turnOn(callback);

        function callback() {
            done();
        }
    });

    it('shoule gpio write 0 when realy turn off', function (done) {
        when(gpio).write(0, callback).then(function () {
            callback();
        });

        buzzer.turnOff(callback);

        function callback() {
            done();
        }
    });

    it('should isOn when gpio read 1', function (done) {
        when(gpio).read(any()).then(function () {
            callback(undefined, 1);
        });

        buzzer.isOn(callback);

        function callback(error, on) {
            assert(!error);
            assert(on);
            done();
        }
    });
});
