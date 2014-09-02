import keysIn from "./keys_in";
import pairWith from "./internal/pair_with";

/**
 * Converts an object into an array of key, value arrays.
 * The object's own properties and prototype properties are used.
 * Note that the order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 *
 * @func
 * @memberOf R
 * @category Object
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      toPairsIn(f) // => [['x','X'], ['y','Y']]
 */
export default pairWith(keysIn);
