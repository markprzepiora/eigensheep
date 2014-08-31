/**
 * Returns the last element from a list.
 *
 * @static
 * @memberOf R
 * @category Array
 * @param {Array} [arr=[]] The array to consider.
 * @return {*} The last element of the list, or `undefined` if the list is empty.
 * @example
 *
 *      ramda.last(['fi', 'fo', 'fum']); //=> 'fum'
 */
export default function last(arr) {
    arr = arr || [];
    return arr[arr.length - 1];
};
