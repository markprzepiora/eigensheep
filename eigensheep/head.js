/**
 * Returns the first element in a list.
 *
 * @func
 * @memberOf R
 * @category Array
 * @param {Array} [arr=[]] The array to consider.
 * @return {*} The first element of the list, or `undefined` if the list is empty.
 * @example
 *
 *      ramda.head(['fi', 'fo', 'fum']); //=> 'fi'
 */
export default function head(arr) {
    arr = arr || [];
    return arr[0];
};
