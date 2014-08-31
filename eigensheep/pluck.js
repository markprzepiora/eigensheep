import _map from "./internal/map";
import curry2 from "./internal/curry2";
import prop from "./prop";

/**
 * Returns a new list by plucking the same named property off all objects in the list supplied.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {string|number} key The key name to pluck off of each object.
 * @param {Array} list The array to consider.
 * @return {Array} The list of values for the given key.
 * @example
 *
 * pluck('a')([{a: 1}, {a: 2}]); //= [1, 2]
 * pluck(0)([[1, 2], [3, 4]]);   //= [1, 3]
 */
var pluck = curry2(function _pluck(p, list) {
    return _map(prop(p), list);
});

export default pluck;
