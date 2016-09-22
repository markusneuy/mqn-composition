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

var _composition = require('./lib/composition');

var _composition2 = _interopRequireDefault(_composition);

var _multi_composition = require('./lib/multi_composition');

var _multi_composition2 = _interopRequireDefault(_multi_composition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.composition = _composition2.default;
exports.multiComposition = _multi_composition2.default;
exports.default = { composition: _composition2.default, multiComposition: _multi_composition2.default };