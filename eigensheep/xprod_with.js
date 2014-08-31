import curry3 from "./internal/curry3";
import isEmpty from "./is_empty";

/**
 * Creates a new list out of the two supplied by applying the function
 * to each possible pair in the lists.
 *
 * @see xprod
 * @static
 * @memberOf R
 * @category List
 * @param {Function} fn The function to join pairs with.
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` using `fn`.
 * @example
 *
 *      xprodWith(f, [1, 2], ['a', 'b'])
 *      //= [f(1, 'a'), f(1, 'b'), f(2, 'a'), f(2, 'b')];
 */
var xprodWith = curry3(function _xprodWith(fn, a, b) {
    if (isEmpty(a) || isEmpty(b)) {
        return [];
    }
    // Better to push them all or to do `new Array(ilen * jlen)` and
    // calculate indices?
    var i = -1, ilen = a.length, j, jlen = b.length, result = [];
    while (++i < ilen) {
        j = -1;
        while (++j < jlen) {
            result.push(fn(a[i], b[j]));
        }
    }
    return result;
});

export default xprodWith;
