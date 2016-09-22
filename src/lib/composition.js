'use strict';

/**
 * This one is like f(x1,...,xn) = g1(g2(...(gn(x1,...xn))))
 * @param {...function} funcs Multiple functions
 * @returns {function} Returns the composite function
 */
export default function composition (...funcs) {
    return (...args) => funcs.reduce((prev, curr) => curr(prev), args);
}