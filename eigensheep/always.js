/**
 * Returns a function that always returns the given value.
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val
 * @example
 *
 *      var t = always('Tee');
 *      t(); // => 'Tee'
 */
export default function always(val) {
    return function() {
        return val;
    };
};
