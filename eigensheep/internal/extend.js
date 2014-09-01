import keys from "../keys";

/**
 * Assigns own enumerable properties of the other object to the destination
 * object prefering items in other.
 *
 * @private
 * @memberOf R
 * @category Object
 * @param {Object} object The destination object.
 * @param {Object} other The other object to merge with destination.
 * @returns {Object} Returns the destination object.
 * @example
 *
 *      extend({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      // => { 'name': 'fred', 'age': 40 }
 */
export default function _extend(destination, other) {
    var props = keys(other),
        i = -1, length = props.length;
    while (++i < length) {
        destination[props[i]] = other[props[i]];
    }
    return destination;
}
