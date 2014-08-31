import keys from "./keys";

/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across
 * different JS platforms.
 *
 * @static
 * @memberOf R
 * @category Object
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties
 * @example
 *
 *      values({a: 1, b: 2, c: 3}) // => [1, 2, 3]
 */
export default function values(obj) {
    var prop, props = keys(obj),
        length = props.length,
        vals = new Array(length);
    for (var i = 0; i < length; i++) {
        vals[i] = obj[props[i]];
    }
    return vals;
};
