'use strict';


/**
 * This one is like f(x1,...xn) = g(h1(x1,...,xn),...hn(x2,...,xn))
 * @param {type} func Function that is called finally to aggregate results (in the case above g)
 * @returns {Function} Returns a function that combines the first function with the other ones
 */
export default function multiComposition (func, ...funcs) {
    if (!funcs.every(func => typeof func === 'function') ||
            typeof func !== 'function') {
        throw new TypeError('Arguments have to be functions.');
    }
    return (...args) => func(...funcs.reverse().map(curr => curr(...args)));
}