import _reject from "./internal/reject";
import _filterIdx from "./internal/filter_idx";
import _not from "./internal/not";
import curry2 from "./internal/curry2";

/**
 * Similar to `filter`, except that it keeps only values for which the given predicate
 * function returns falsy. The predicate function is passed one argument: *(value)*.
 *
 * @func
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

/**
 * Like `reject`, but passes additional parameters to the predicate function. The predicate
 * function is passed three arguments: *(value, index, list)*.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} The new filtered array.
 * @alias reject.idx
 * @example
 *
 *      var lastTwo = function(val, idx, list) {
 *        return list.length - idx <= 2;
 *      };
 *
 *      reject.idx(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [8, 6, 7, 5, 3]
 */
reject.idx = curry2(function _rejectIdx(fn, list) {
    return _filterIdx(_not(fn), list);
});

export default reject;
