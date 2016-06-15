/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';
var driver = require('ruff-driver');

module.exports = driver({
    attach: function (inputs) {
        this._gpio = inputs.getRequired('gpio');
    },

    exports: {
        turnOn: function (callback) {
            this._gpio.write(1, callback);
        },
        turnOff: function (callback) {
            this._gpio.write(0, callback);
        },
        isOn: function (callback) {
            var readCallback = callback && function (error, value) {
                if (error) {
                    callback(error);
                    return;
                }

                callback(undefined, !!value);
            };

            this._gpio.read(readCallback);
        }
    }
});
