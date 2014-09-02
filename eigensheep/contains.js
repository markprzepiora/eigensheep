import curry2 from "./internal/curry2";
import _contains from "./internal/contains";

/**
 * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
 * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {boolean} `true` if the item is in the list, `false` otherwise.
 * @example
 *
 *      contains(3)([1, 2, 3]); //= true
 *      contains(4)([1, 2, 3]); //= false
 *      contains({})([{}, {}]); //= false
 *      var obj = {};
 *      contains(obj)([{}, obj, {}]); //= true
 */
export default curry2(_contains);
