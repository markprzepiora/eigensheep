import curry2 from "./internal/curry2";

/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @category math
 * @param {number} a The first value.
 * @param {number} b The second value.
 * @return {number} The result of `a * b`.
 * @example
 *
 *      var double = multiply(2);
 *      var triple = multiply(3);
 *      double(3);       //=  6
 *      triple(4);       //= 12
 *      multiply(2, 5);  //= 10
 */
var multiply = curry2(function _multiply(a, b) { return a * b });

export default multiply;
