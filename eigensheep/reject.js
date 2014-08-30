import _reject from "./internal/reject";
import curry2 from "./internal/curry2";

/**
 * Similar to `filter`, except that it keeps only values for which the given predicate
 * function returns falsy. The predicate function is passed one argument: *(value)*.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} The new filtered array.
 * @example
 *
 *      var isOdd = function(n) {
 *        return n % 2 === 1;
 *      };
 *      var evens = ramda.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
 */
var reject = curry2(_reject);

export default reject;
