import hasOwnProperty from "./internal/has_own_property";

/**
 * Internal reference to Object.keys
 *
 * @private
 * @param {Object}
 * @return {Array}
 */
var nativeKeys = Object.keys;

/**
 * Returns a list containing the names of all the enumerable own
 * properties of the supplied object.
 * Note that the order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 *
 * @static
 * @memberOf R
 * @category Object
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties
 * @example
 *
 *      keys({a: 1, b: 2, c: 3}) // => ['a', 'b', 'c']
 */
var keys = function _keys(obj) {
    if (nativeKeys) return nativeKeys(Object(obj));
    var prop, ks = [];
    for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
            ks.push(prop);
        }
    }
    return ks;
};

export default keys;
