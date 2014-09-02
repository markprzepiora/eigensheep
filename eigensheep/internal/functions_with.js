import filter from "../filter";

/**
 * @private
 * @param {Function} fn The strategy for extracting function names from an object
 * @return {Function} A function that takes an object and returns an array of function names
 *
 */
export default function(fn) {
    return function(obj) {
        return filter(function(key) { return typeof obj[key] === 'function'; }, fn(obj));
    };
};
