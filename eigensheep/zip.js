import curry2 from "./internal/curry2";

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from
 * both lists. Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 * zip([1, 2, 3], ['a', 'b', 'c']);
 * //= [[1, 'a'], [2, 'b'], [3, 'c']]
 */
var zip = curry2(function _zip(a, b) {
    var rv = [];
    var i = -1;
    var len = Math.min(a.length, b.length);
    while (++i < len) {
        rv[i] = [a[i], b[i]];
    }
    return rv;
});

export default zip;
