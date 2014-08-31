import _concat from "./internal/concat";

/**
 * Returns a new list with the given element at the front, followed by the contents of the
 * list.
 *
 * @static
 * @memberOf R
 * @category Array
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} arr The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @alias cons
 * @example
 *
 *      ramda.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
export default function prepend(el, arr) {
    return _concat([el], arr);
}
