/**
 * Returns the last element from a list.
 *
 * @func
 * @memberOf R
 * @category Array
 * @sig [a] -> a
 * @param {Array} [arr=[]] The array to consider.
 * @return {*} The last element of the list, or `undefined` if the list is empty.
 * @example
 *
 *      ramda.last(['fi', 'fo', 'fum']); //=> 'fum'
 */
export default function(arr) {
    arr = arr || [];
    return arr[arr.length - 1];
};
