import curry2 from "./internal/curry2";

/**
 * Returns the first element of the list which matches the predicate, or `undefined` if no
 * element matches.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      find(propEq('a', 2))(xs); //= {a: 2}
 *      find(propEq('a', 4))(xs); //= undefined
 */
var find = curry2(function find(fn, list) {
    var idx = -1;
    var len = list.length;
    while (++idx < len) {
        if (fn(list[idx])) {
            return list[idx];
        }
    }
});

export default find;
