import _extend from "./internal/extend";
import curry2 from "./internal/curry2";

/**
 * Create a new object with the own properties of a
 * merged with the own properties of object b.
 * This function will *not* mutate passed-in objects.
 *
 * @func
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
    return _extend(_extend({}, a), b);
});

export default mixin;
