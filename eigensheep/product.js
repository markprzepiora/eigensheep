import foldl from "./foldl";
import multiply from "./multiply";

/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @category math
 * @param {Array} list An array of numbers
 * @return {number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      product([2,4,6,8,100,1]); // => 38400
 */
export default foldl(multiply, 1);
