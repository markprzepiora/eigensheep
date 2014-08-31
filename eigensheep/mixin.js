import extend from "./extend";
import curry2 from "./internal/curry2";

/**
 * Create a new object with the own properties of a
 * merged with the own properties of object b.
 * This function will *not* mutate passed-in objects.
 *
 * @static
 * @memberOf R
 * @category Object
 * @param {Object} a source object
 * @param {Object} b object with higher precendence in output
 * @returns {Object} Returns the destination object.
 * @example
 *
 *      mixin({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      // => { 'name': 'fred', 'age': 40 }
 */
var mixin = curry2(function _mixin(a, b) {
    return extend(extend({}, a), b);
});

export default mixin;
