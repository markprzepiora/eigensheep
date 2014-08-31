/**
 * Returns a list of all the properties, including prototype properties,
 * of the supplied object.
 * Note that the order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 *
 * @static
 * @memberOf R
 * @category Object
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      valuesIn(f) // => ['X', 'Y']
 */
export default function valuesIn(obj) {
    var prop, vs = [];
    for (prop in obj) {
        vs.push(obj[prop]);
    }
    return vs;
};
