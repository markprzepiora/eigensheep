import _makeFlat from "./internal/make_flat";

/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
 * them in a new array, depth-first.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @example
 *
 * flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 * //= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
var flatten = _makeFlat(true);

export default flatten;
