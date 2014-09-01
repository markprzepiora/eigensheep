import curry2 from "./internal/curry2";

/**
 * Returns the index of the last element of the list which matches the predicate, or
 * `-1` if no element matches.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {number} The index of the element found, or `-1`.
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      findLastIndex(propEq('a', 1))(xs); //= 1
 *      findLastIndex(propEq('a', 4))(xs); //= -1
 */
var findLastIndex = curry2(function _findLastIndex(fn, list) {
    var idx = list.length;
    while (--idx >= 0) {
        if (fn(list[idx])) {
            return idx;
        }
    }
    return -1;
});

export default findLastIndex;
