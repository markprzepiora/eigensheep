import foldl from "./foldl";
import binary from "./binary";

/**
 * Determines the largest of a list of numbers (or elements that can be cast to numbers)
 *
 * @func
 * @memberOf R
 * @category math
 * @see R.maxWith
 * @param {Array} list A list of numbers
 * @return {Number} The greatest number in the list
 * @example
 *
 *      max([7, 3, 9, 2, 4, 9, 3]) // => 9
 */
export default function(list) {
    return foldl(binary(Math.max), -Infinity, list);
};
