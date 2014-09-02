import curry2 from "./internal/curry2";
import checkForMethod from "./internal/check_for_method";
import _map from "./internal/map";
import unnest from "./unnest";

/**
 * `chain` maps a function over a list and concatenates the results.
 * This implementation is compatible with the
 * Fantasy-land Chain spec, and will work with types that implement that spec.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function}
 * @param {Array}
 * @return {Array}
 * @alias flatMap
 * @example
 *
 * var duplicate = function(n) {
 *     return [n, n];
 * };
 * R.chain(duplicate, [1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
 *
 */
export default curry2(checkForMethod('chain', function _chain(f, list) {
    return unnest(_map(f, list));
}));
