import _concat from "./internal/concat";

/**
 * Returns a new list with the given element at the front, followed by the contents of the
 * list.
 *
 * @func
 * @memberOf R
 * @category Array
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} arr The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @example
 *
 *      ramda.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
export default function prepend(el, arr) {
    return _concat([el], arr);
}
