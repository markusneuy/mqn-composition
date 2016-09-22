define(['exports', './lib/composition', './lib/multi_composition'], function (exports, _composition, _multi_composition) {
  'use strict';

  /**
   * A proxy module that aggregates submodules
   * @module nf-promiser
   * @author Markus Neuy
   * @since 22.09.2016
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.multiComposition = exports.composition = undefined;

  var _composition2 = _interopRequireDefault(_composition);

  var _multi_composition2 = _interopRequireDefault(_multi_composition);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.composition = _composition2.default;
  exports.multiComposition = _multi_composition2.default;
  exports.default = { composition: _composition2.default, multiComposition: _multi_composition2.default };
});
define(['exports'], function (exports) {
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
});
define(['exports'], function (exports) {
  'use strict';

  /**
   * This one is like f(x1,...xn) = g(h1(x1,...,xn),...hn(x2,...,xn))
   * @param {type} func Function that is called finally to aggregate results (in the case above g)
   * @returns {Function} Returns a function that combines the first function with the other ones
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = multiComposition;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function multiComposition(func) {
    for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      funcs[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return func.apply(undefined, _toConsumableArray(funcs.map(function (curr) {
        return curr.apply(undefined, args);
      })));
    };
  }
});
