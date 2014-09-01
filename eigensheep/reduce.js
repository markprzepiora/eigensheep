import curry3 from "./internal/curry3";
import checkForMethod from "./internal/check_for_method";

/**
 * Returns a single item by iterating through the list, successively calling the iterator
 * function and passing it an accumulator value and the current value from the array, and
 * then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*
 *
 * Note: `ramda.reduce` does not skip deleted or unassigned indices (sparse arrays), unlike
 * the native `Array.prototype.reduce` method. For more details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3];
 *      var add = function(a, b) {
 *        return a + b;
 *      };
 *
 *      reduce(add, 10, numbers); //=> 16
 */
var reduce = curry3(checkForMethod('reduce', function _reduce(fn, acc, list) {
    var idx = -1, len = list.length;
    while (++idx < len) {
        acc = fn(acc, list[idx]);
    }
    return acc;
}));

/**
 * Like `reduce`, but passes additional parameters to the predicate function.
 *
 * The iterator function receives four values: *(acc, value, index, list)*
 *
 * Note: `ramda.reduce.idx` does not skip deleted or unassigned indices (sparse arrays),
 * unlike the native `Array.prototype.reduce` method. For more details on this behavior,
 * see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The iterator function. Receives four values: the accumulator, the
 *        current element from `list`, that element's index, and the entire `list` itself.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @alias reduce.idx
 * @example
 *
 *      var letters = ['a', 'b', 'c'];
 *      var objectify = function(accObject, elem, idx, list) {
 *        accObject[elem] = idx;
 *        return accObject;
 *      };
 *
 *      reduce.idx(objectify, {}, letters); //=> { 'a': 0, 'b': 1, 'c': 2 }
 */
reduce.idx = curry3(checkForMethod('foldl', function(fn, acc, list) {
    var idx = -1, len = list.length;
    while (++idx < len) {
        acc = fn(acc, list[idx], idx, list);
    }
    return acc;
}));

export default reduce;
