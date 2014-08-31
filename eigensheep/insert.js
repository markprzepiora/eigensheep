import curry3 from "./internal/curry3";
import _concat from "./internal/concat";
import _slice from "./internal/slice";
import append from "./append";

/**
 * Inserts the supplied element into the list, at index `index`.  _Note
 * that this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @static
 * @memberOf R
 * @param {Number} index The position to insert the element
 * @param elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} a new Array with `elt` inserted at `index`
 * @example
 *
 *      insert(2, 'x', [1,2,3,4]) // => [1,2,'x',3,4]
 */
var insert = curry3(function _insert(index, elt, list) {
    index = index < list.length && index >= 0 ? index : list.length;
    return _concat(append(elt, _slice(list, 0, index)), _slice(list, index));
});

/**
 * Inserts the sub-list into the list, at index `index`.  _Note  that this
 * is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @static
 * @memberOf R
 * @param {Number} index The position to insert the sublist
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} a new Array with `elts` inserted starting at `index`
 * @example
 *
 *      insert.all(2, ['x','y','z'], [1,2,3,4]) // => [1,2,'x','y','z',3,4]
 */
insert.all = curry3(function _insertAll(index, elts, list) {
    index = index < list.length && index >= 0 ? index : list.length;
    return _concat(_concat(_slice(list, 0, index), elts), _slice(list, index));
});

export default insert;
