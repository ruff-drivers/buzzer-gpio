'use strict';

var assert = require('assert');
var path = require('path');
var mock = require('ruff-mock');

var when = mock.when;
var verify = mock.verify;

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

    it('shoule gpio write 1 when realy turn on', function () {
        buzzer.turnOn();
        verify(gpio).write(1);
    });

    it('shoule gpio write 0 when realy turn off', function () {
        buzzer.turnOff();
        verify(gpio).write(0);
    });

    it('should isOn when gpio read 0', function () {
        when(gpio).read().thenReturn(1);
        assert(buzzer.isOn());
    });
});
