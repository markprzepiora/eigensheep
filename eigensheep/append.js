import _concat from "./internal/concat";
import curry2 from "./internal/curry2";

/**
 * Returns a new list containing the contents of the given list, followed by the given
 * element.
 *
 * @func
 * @memberOf R
 * @category Array
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list whose contents will be added to the beginning of the output
 *        list.
 * @return {Array} A new list containing the contents of the old list followed by `el`.
 * @example
 *
 *      ramda.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      ramda.append('tests', []); //=> ['tests']
 *      ramda.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
var append = curry2(function (el, list) {
    return _concat(list, [el]);
});

export default append;
