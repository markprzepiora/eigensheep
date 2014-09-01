import curry2 from "./internal/curry2";

/**
 * Returns true if the first parameter is less than or equal to the second.
 *
 * @func
 * @memberOf R
 * @category math
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean} a <= b
 * @example
 *
 *      lte(2, 6) // => true
 *      lt(2, 0) // => false
 *      lt(2, 2) // => true
 */
var lte = curry2(function _lte(a, b) { return a <= b; });

export default lte;
