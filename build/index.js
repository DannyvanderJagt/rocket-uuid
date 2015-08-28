"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    return ("0000" + (Math.random() * 1400 * Math.pow(36, 4) + new Date().getTime() / 10000) | 0).toString(36).slice(-6);
};

module.exports = exports["default"];