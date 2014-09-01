import curry2 from "./internal/curry2";

/**
 * Divides the second parameter by the first and returns the remainder.
 * The flipped version (`moduloBy`) may be more useful curried.
 * Note that this functions preserves the JavaScript-style behavior for
 * modulo. For mathematical modulo see `mathMod`
 *
 * @func
 * @memberOf R
 * @category math
 * @param {number} a The value to the divide.
 * @param {number} b The pseudo-modulus
 * @return {number} The result of `b % a`.
 * @see R.moduloBy
 * @see R.mathMod
 * @example
 *
 *      modulo(17, 3) // => 2
 *      // JS behavior:
 *      modulo(-17, 3) // => -2
 *      modulo(17, -3) // => 2
 */
var modulo = curry2(function _modulo(a, b) { return a % b; });

export default modulo;
