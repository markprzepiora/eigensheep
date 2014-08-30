import curry3 from "./internal/curry3";
import checkForMethod from "./internal/check_for_method";

/**
 * Returns a single item by iterating through the list, successively calling the iterator
 * function and passing it an accumulator value and the current value from the array, and
 * then passing the result to the next call.
 *
 * Similar to `foldl`, except moves through the input list from the right to the left.
 *
 * The iterator function receives two values: *(acc, value)*
 *
 * Note: `ramda.foldr` does not skip deleted or unassigned indices (sparse arrays), unlike
 * the native `Array.prototype.reduce` method. For more details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @alias reduceRight
 * @example
 *
 *      var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
 *      var flattenPairs = function(acc, pair) {
 *        return acc.concat(pair);
 *      };
 *
 *      foldr(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
 */
var foldr = curry3(checkForMethod('foldr', function(fn, acc, list) {
    var idx = list.length;
    while (idx--) {
        acc = fn(acc, list[idx]);
    }
    return acc;
}));

export default foldr;
