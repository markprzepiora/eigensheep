import curry2 from "./internal/curry2";
import _slice from "./internal/slice";
import checkForMethod from "./internal/check_for_method";

/**
 * Returns a new list containing all but the first `n` elements of the given `list`.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {number} n The number of elements of `list` to skip.
 * @param {Array} list The array to consider.
 * @return {Array} The last `n` elements of `list`.
 * @alias drop
 */
var skip = curry2(checkForMethod('skip', function _skip(n, list) {
    if (n < list.length) {
      return _slice(list, n);
    } else {
      return [];
    }
}));

export default skip;
