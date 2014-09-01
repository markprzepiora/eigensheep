import checkForMethod from "./internal/check_for_method";
import _slice from "./internal/slice";

/**
 * Returns all but the first element of a list. If the list provided has the `tail` method,
 * it will instead return `list.tail()`.
 *
 * @func
 * @memberOf R
 * @category Array
 * @sig [a] -> [a]
 * @param {Array} [arr=[]] The array to consider.
 * @return {Array} A new array containing all but the first element of the input list, or an
 *         empty list if the input list is a falsy value (e.g. `undefined`).
 * @example
 *
 *      ramda.tail(['fi', 'fo', 'fum']); //=> ['fo', 'fum']
 */
var tail = checkForMethod('tail', function(arr) {
    arr = arr || [];
    return (arr.length > 1) ? _slice(arr, 1) : [];
});

export default tail;
