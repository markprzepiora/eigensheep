import curry2 from "./internal/curry2";

/**
 * Adds two numbers (or strings). Equivalent to `a + b` but curried.
 *
 * @static
 * @memberOf R
 * @category math
 * @param {number|string} a The first value.
 * @param {number|string} b The second value.
 * @return {number|string} The result of `a + b`.
 * @example
 *
 *      var increment = add(1);
 *      increment(10);   //= 11
 *      add(2, 3);       //=  5
 *      add(7)(10);      //= 17
 */
var add = curry2(function _add(a, b) { return a + b; });

export default add;
