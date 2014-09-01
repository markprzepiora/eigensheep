import curry2 from "./internal/curry2";

/**
 * Determines the smallest of a list of items as determined by pairwise comparisons from the supplied comparator
 *
 * @func
 * @memberOf R
 * @category math
 * @param {Function} keyFn A comparator function for elements in the list
 * @param {Array} list A list of comparable elements
 * @see R.min
 * @return {*} The greatest element in the list. `undefined` if the list is empty.
 * @example
 *
 *      function cmp(obj) { return obj.x; }
 *      var a = {x: 1}, b = {x: 2}, c = {x: 3};
 *      minWith(cmp, [a, b, c]) // => {x: 1}
 */
// TODO: combine this with maxWith?
var minWith = curry2(function _minWith(keyFn, list) {
    if (!(list && list.length > 0)) {
        return;
    }
    var idx = 0, winner = list[idx], min = keyFn(list[idx]), testKey;
    while (++idx < list.length) {
        testKey = keyFn(list[idx]);
        if (testKey < min) {
            min = testKey;
            winner = list[idx];
        }
    }
    return winner;
});

export default minWith;
