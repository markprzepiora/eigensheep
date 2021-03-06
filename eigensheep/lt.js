import curry2 from "./internal/curry2";

/**
 * Returns true if the first parameter is less than the second.
 *
 * @func
 * @memberOf R
 * @category math
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean} a < b
 * @example
 *
 *      lt(2, 6) // => true
 *      lt(2, 0) // => false
 *      lt(2, 2) // => false
 */
export default curry2(function _lt(a, b) { return a < b; });
