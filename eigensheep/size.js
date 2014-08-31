/**
 * Returns the number of elements in the array by returning `arr.length`.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Array} arr The array to inspect.
 * @return {number} The size of the array.
 * @alias length
 * @example
 *
 *      ramda.size([]); //=> 0
 *      ramda.size([1, 2, 3]); //=> 3
 */
export default function size(arr) {
    return arr.length;
};
