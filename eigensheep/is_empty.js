/**
 * Reports whether an array is empty.
 *
 * @func
 * @memberOf R
 * @category Array
 * @sig [a] -> Boolean
 * @param {Array} arr The array to consider.
 * @return {boolean} `true` if the `arr` argument has a length of 0 or
 *         if `arr` is a falsy value (e.g. undefined).
 * @example
 *
 *      ramda.isEmpty([1, 2, 3]); //=> false
 *      ramda.isEmpty([]); //=> true
 *      ramda.isEmpty(); //=> true
 *      ramda.isEmpty(null); //=> true
 */
export default function isEmpty(arr) {
    return !arr || !arr.length;
}
