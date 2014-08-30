import _makeFlat from "./internal/make_flat";

/**
 * Returns a new list by pulling every item at the first level of nesting out, and putting
 * them in a new array.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @alias flattenShallow
 * @example
 *
 * flat([1, [2], [[3]]]);
 * //= [1, 2, [3]]
 * flat([[1, 2], [3, 4], [5, 6]]);
 * //= [1, 2, 3, 4, 5, 6]
 */
var unnest = _makeFlat(false);

export default unnest;
