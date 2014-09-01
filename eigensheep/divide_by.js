import flip from "./flip";
import divide from "./divide";

/**
 * Divides two numbers in reverse order. Equivalent to `b / a`.
 * `divideBy` is the reversed version of `divide`, where the second parameter is
 * divided by the first.  The curried version of `divideBy` may prove more useful
 * than that of `divide`.
 *
 * @func
 * @memberOf R
 * @category math
 * @param {number} a The second value.
 * @param {number} b The first value.
 * @return {number} The result of `b / a`.
 * @see divide
 * @example
 *
 *      var half = divideBy(2);
 *      half(42); // => 21
 */
var divideBy = flip(divide);

export default divideBy;
