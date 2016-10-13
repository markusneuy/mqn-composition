'use strict';

/**
 * This one is like f(x1,...,xn) = g1(g2(...(gn(x1,...xn))))
 * @param {...function} funcs Multiple functions
 * @returns {function} Returns the composite function
 */
export default function compose (...funcs) {
    if (!funcs.every(func => typeof func === 'function')) {
        throw new TypeError('Arguments have to be functions.');
    }
    return (...args) => funcs.reverse().reduce((prev, curr, i) => !i ? curr(...prev) : curr(prev), args);
}