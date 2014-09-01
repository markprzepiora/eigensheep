import _filter from "./internal/filter";
import _filterIdx from "./internal/filter_idx";
import curry2 from "./internal/curry2";
import checkForMethod from "./internal/check_for_method";

/**
 * Returns a new list containing only those items that match a given predicate function.
 * The predicate function is passed one argument: *(value)*.
 *
 * Note that `ramda.filter` does not skip deleted or unassigned indices, unlike the native
 * `Array.prototype.filter` method. For more details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Description
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} The new filtered array.
 * @example
 *
 *      var isEven = function(n) {
 *        return n % 2 === 0;
 *      };
 *      var evens = ramda.filter(isEven, [1, 2, 3, 4]); // => [2, 4]
 */
var filter = curry2(checkForMethod('filter', _filter));

/**
 * Like `filter`, but passes additional parameters to the predicate function. The predicate
 * function is passed three arguments: *(value, index, list)*.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} The new filtered array.
 * @alias filter.idx
 * @example
 *
 *      var lastTwo = function(val, idx, list) {
 *        return list.length - idx <= 2;
 *      };
 *      ramda.filter.idx(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]
 */
filter.idx = curry2(checkForMethod('filter', _filterIdx));

export default filter;
