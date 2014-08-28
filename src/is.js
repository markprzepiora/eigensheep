import curry2 from "internal/curry2";

/**
 * See if an object (`val`) is an instance of the supplied constructor.
 * This function will check up the inheritance chain, if any.
 *
 * @static
 * @memberOf R
 * @category type
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      is(Object, {}) // => true
 *      is(Number, 1) // => true
 *      is(String, 's') // => true
 *      is(String, new String('')) // => true
 *      is(Object, new String('')) // => true
 *      is(Number, {}) // => false
 */
var is = curry2(function is(ctor, val) {
    return val != null && val.constructor === ctor || val instanceof ctor;
});

export default is;
