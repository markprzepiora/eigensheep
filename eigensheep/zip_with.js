import curry3 from "./internal/curry3";

/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 * using `fn`.
 * @example
 *
 * zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 * //= [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 */
var zipWith = curry3(function _zipWith(fn, a, b) {
    var rv = [], i = -1, len = Math.min(a.length, b.length);
    while (++i < len) {
        rv[i] = fn(a[i], b[i]);
    }
    return rv;
});

export default zipWith;
