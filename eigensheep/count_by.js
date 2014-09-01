import curry2 from "./internal/curry2";
import foldl from "./foldl";
import _keyValue from "./internal/key_value";

/**
 * Counts the elements of a list according to how many match each value
 * of a key generated by the supplied function. Returns an object
 * mapping the keys produced by `fn` to the number of occurrences in
 * the list. Note that all keys are coerced to strings because of how
 * JavaScript objects work.
 *
 * @func
 * @memberOf R
 * @category relation
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      var letters = split('', 'abcABCaaaBBc');
 *      countBy(Math.floor)(numbers);    //= {'1': 3, '2': 2, '3': 1}
 *      countBy(toLowerCase)(letters);   //= {'a': 5, 'b': 4, 'c': 3}
 */
var countBy = curry2(function countBy(fn, list) {
    return foldl(function(counts, obj) {
        counts[obj.key] = (counts[obj.key] || 0) + 1;
        return counts;
    }, {}, _keyValue(fn, list));
});

export default countBy;