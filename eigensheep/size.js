/**
 * Returns the number of elements in the array by returning `arr.length`.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Array} arr The array to inspect.
 * @return {number} The size of the array.
 * @example
 *
 *      ramda.size([]); //=> 0
 *      ramda.size([1, 2, 3]); //=> 3
 */
export default function(arr) {
    return arr.length;
};
