'use strict';

/**
 * This one is like f(x1,...,xn) = g1(g2(...(gn(x1,...xn))))
 * @param {...function} funcs Multiple functions
 * @returns {function} Returns the composite function
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = composition;
function composition() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return funcs.reduce(function (prev, curr) {
      return curr(prev);
    }, args);
  };
}