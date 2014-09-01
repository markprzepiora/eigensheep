import keys from "./keys";
import pairWith from "./internal/pair_with";

/**
 * Converts an object into an array of key, value arrays.
 * Only the object's own properties are used.
 * Note that the order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 *
 * @func
 * @memberOf R
 * @category Object
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties
 * @example
 *
 *      toPairs({a: 1, b: 2, c: 3}); // [['a', 1], ['b', 2], ['c', 3]]
 */
var toPairs = pairWith(keys);

export default toPairs;
