import curry2 from "./internal/curry2";

/**
 * Returns true if the first parameter is greater than or equal to the second.
 *
 * @static
 * @memberOf R
 * @category math
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean} a >= b
 * @example
 *
 *      gt(2, 6) // => false
 *      gt(2, 0) // => true
 *      gt(2, 2) // => true
 */
var gte = curry2(function _gte(a, b) { return a >= b; });

export default gte;
