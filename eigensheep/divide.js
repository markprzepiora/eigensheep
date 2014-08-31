import curry2 from "./internal/curry2";

/**
 * Divides two numbers. Equivalent to `a / b`.
 * While at times the curried version of `divide` might be useful,
 * probably the curried version of `divideBy` will be more useful.
 *
 * @static
 * @memberOf R
 * @category math
 * @param {number} a The first value.
 * @param {number} b The second value.
 * @return {number} The result of `a / b`.
 * @see divideBy
 * @example
 *
 *      var reciprocal = divide(1);
 *      reciprocal(4);   //= 0.25
 *      divide(71, 100); //= 0.71
 */
var divide = curry2(function _divide(a, b) { return a / b; });

export default divide;
