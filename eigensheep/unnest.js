import _makeFlat from "./internal/make_flat";

/**
 * Returns a new list by pulling every item at the first level of nesting out, and putting
 * them in a new array.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @example
 *
 * unnest([1, [2], [[3]]]); //= [1, 2, [3]]
 * unnest([[1, 2], [3, 4], [5, 6]]); //= [1, 2, 3, 4, 5, 6]
 */
var unnest = _makeFlat(false);

export default unnest;
