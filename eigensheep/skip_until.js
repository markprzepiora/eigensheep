import curry2 from "./internal/curry2";
import _slice from "./internal/slice";

/**
 * Returns a new list containing the last `n` elements of a given list, passing each value
 * to the supplied predicate function, beginning when the predicate function returns
 * `true`. Excludes the element that caused the predicate function to fail. The predicate
 * function is passed one argument: *(value)*.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @example
 *
 *      var isNotTwo = function(x) {
 *        return !(x === 2);
 *      };
 *
 *      skipUntil(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
 */
var skipUntil = curry2(function _skipUntil(fn, list) {
    var idx = -1, len = list.length;
    while (++idx < len && !fn(list[idx])) {}
    return _slice(list, idx);
});

export default skipUntil;
