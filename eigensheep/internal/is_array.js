// Private reference to toString function.
var toString = Object.prototype.toString;

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @category Internal
 * @param {*} val The object to test.
 * @return {boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      isArray([]); //=> true
 *      isArray(true); //=> false
 *      isArray({}); //=> false
 */
var isArray = Array.isArray || function _isArray(val) {
    return val && val.length >= 0 && toString.call(val) === '[object Array]';
};

export default isArray;
