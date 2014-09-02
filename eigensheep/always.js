/**
 * Returns a function that always returns the given value.
 *
 * @func
 * @memberOf R
 * @category Function
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val
 * @example
 *
 *      var t = always('Tee');
 *      t(); // => 'Tee'
 */
export default function(val) {
    return function() {
        return val;
    };
};
