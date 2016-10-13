'use strict';

/**
 * This one is like f(x1,...,xn) = g1(g2(...(gn(x1,...xn))))
 * @param {...function} funcs Multiple functions
 * @returns {function} Returns the composite function
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return funcs.reduceRight(function (prev, curr, i) {
      return !i ? curr.apply(undefined, _toConsumableArray(prev)) : curr(prev);
    }, args);
  };
}