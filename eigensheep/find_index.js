import curry2 from "./internal/curry2";

/**
 * Returns the index of the first element of the list which matches the predicate, or `-1`
 * if no element matches.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {number} The index of the element found, or `-1`.
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      findIndex(propEq('a', 2))(xs); //= 1
 *      findIndex(propEq('a', 4))(xs); //= -1
 */
var findIndex = curry2(function _findIndex(fn, list) {
    var idx = -1;
    var len = list.length;
    while (++idx < len) {
        if (fn(list[idx])) {
            return idx;
        }
    }
    return -1;
});

export default findIndex;
