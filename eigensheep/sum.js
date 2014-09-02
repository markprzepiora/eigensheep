import foldl from "./foldl";
import add from "./add";

/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @category math
 * @param {Array} list An array of numbers
 * @return {number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      sum([2,4,6,8,100,1]); // => 121
 */
export default foldl(add, 0);
