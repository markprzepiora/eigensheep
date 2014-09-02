import foldl from "./foldl";
import binary from "./binary";

/**
 * Determines the smallest of a list of numbers (or elements that can be cast to numbers)
 *
 * @func
 * @memberOf R
 * @category math
 * @param {Array} list A list of numbers
 * @return {Number} The greatest number in the list
 * @see R.minWith
 * @example
 *
 *      min([7, 3, 9, 2, 4, 9, 3]) // => 2
 */
export default function(list) {
    return foldl(binary(Math.min), Infinity, list);
};
