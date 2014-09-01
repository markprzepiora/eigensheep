import curry2 from "./internal/curry2";

/**
 * Determines the largest of a list of items as determined by pairwise comparisons from the supplied comparator
 *
 * @static
 * @memberOf R
 * @category math
 * @param {Function} keyFn A comparator function for elements in the list
 * @param {Array} list A list of comparable elements
 * @return {*} The greatest element in the list. `undefined` if the list is empty.
 * @see max
 * @example
 *
 *      function cmp(obj) { return obj.x; }
 *      a = {x: 1}, b = {x: 2}, c = {x: 3};
 *      maxWith(cmp, [a, b, c]) // => {x: 3}
 */
var maxWith = curry2(function _maxWith(keyFn, list) {
    if (!(list && list.length > 0)) {
        return;
    }
    var idx = 0, winner = list[idx], max = keyFn(winner), testKey;
    while (++idx < list.length) {
        testKey = keyFn(list[idx]);
        if (testKey > max) {
            max = testKey;
            winner = list[idx];
        }
    }
    return winner;
});


export default maxWith;
