/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';
var driver = require('ruff-driver');
var gpio = require('gpio');

module.exports = driver({
    attach: function (inputs) {
        this._gpio = inputs.getRequired('gpio');
        this._gpio.setDirection(gpio.OUT_LOW);
    },

    exports: {
        turnOn: function () {
            return this._gpio.write(1);
        },

        turnOff: function () {
            return this._gpio.write(0);
        },

        isOn: function () {
            return this._gpio.read() === 1;
        }
    }
});
