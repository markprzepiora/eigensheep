import curry2 from "./internal/curry2";
import isEmpty from "./is_empty";

/**
 * Creates a new list out of the two supplied by creating each possible
 * pair from the lists.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 * `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      xprod([1, 2], ['a', 'b']);
 *      //= [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 */
export default curry2(function _xprod(a, b) { // = xprodWith(prepend); (takes about 3 times as long...)
    if (isEmpty(a) || isEmpty(b)) {
        return [];
    }
    var i = -1;
    var ilen = a.length;
    var j;
    var jlen = b.length;
    // Better to push them all or to do `new Array(ilen * jlen)` and calculate indices?
    var result = [];
    while (++i < ilen) {
        j = -1;
        while (++j < jlen) {
            result.push([a[i], b[j]]);
        }
    }
    return result;
});
