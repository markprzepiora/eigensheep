import checkForMethod from "./internal/check_for_method";
import _slice from "./internal/slice";
import curry2 from "./internal/curry2";

/**
 * Returns a new list containing the first `n` elements of a given list, passing each value
 * to the supplied predicate function, and terminating when the predicate function returns
 * `false`. Excludes the element that caused the predicate function to fail. The predicate
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
 *      var isNotFour = function(x) {
 *        return !(x === 4);
 *      };
 *
 *      takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
 */
var takeWhile = curry2(checkForMethod('takeWhile', function(fn, list) {
    var idx = -1, len = list.length;
    while (++idx < len && fn(list[idx])) {}
    return _slice(list, 0, idx);
}));

export default takeWhile;
