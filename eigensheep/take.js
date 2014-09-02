import curry2 from "./internal/curry2";
import _slice from "./internal/slice";
import checkForMethod from "./internal/check_for_method";

/**
 * Returns a new list containing the first `n` elements of the given list.  If
 * `n > * list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {number} n The number of elements to return.
 * @param {Array} list The array to query.
 * @return {Array} A new array containing the first elements of `list`.
 */
export default curry2(checkForMethod('take', function(n, list) {
    return _slice(list, 0, Math.min(n, list.length));
}));
