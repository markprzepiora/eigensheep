import curry2 from "./internal/curry2";
import _slice from "./internal/slice";
import checkForMethod from "./internal/check_for_method";

/**
 * Returns a new list containing all but the first `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {number} n The number of elements of `list` to skip.
 * @param {Array} list The array to consider.
 * @return {Array} The last `n` elements of `list`.
 * @example
 *
 *     skip(3, [1,2,3,4,5,6,7]); // => [4,5,6,7]
 */
var skip = curry2(checkForMethod('skip', function _skip(n, list) {
    if (n < list.length) {
      return _slice(list, n);
    } else {
      return [];
    }
}));

export default skip;
