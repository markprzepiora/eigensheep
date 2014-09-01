import curry2 from "./internal/curry2";

/**
 * Subtracts two numbers. Equivalent to `a - b` but curried.
 *
 * @func
 * @memberOf R
 * @category math
 * @param {number} a The first value.
 * @param {number} b The second value.
 * @return {number} The result of `a - b`.
 * @see subtractN
 * @example
 *
 *      var complementaryAngle = subtract(90);
 *      complementaryAngle(30); //= 60
 *
 *      var theRestOf = subtract(1);
 *      theRestOf(0.25); //= 0.75
 *
 *      subtract(10)(8); //= 2
 */
var subtract = curry2(function _subtract(a, b) { return a - b; });

export default subtract;
