import curry2 from "./internal/curry2";

/**
 * Returns the last element of the list which matches the predicate, or `undefined` if no
 * element matches.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      findLast(propEq('a', 1))(xs); //= {a: 1, b: 1}
 *      findLast(propEq('a', 4))(xs); //= undefined
 */
var findLast = curry2(function _findLast(fn, list) {
    var idx = list.length;
    while (--idx >= 0) {
        if (fn(list[idx])) {
            return list[idx];
        }
    }
});

export default findLast;
