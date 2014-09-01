/**
 * Accepts a function `fn` and returns a function that guards invocation of `fn` such that
 * `fn` can only ever be called once, no matter how many times the returned function is
 * invoked.
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var alertOnce = ramda.once(alert);
 *      alertOnce('Hello!'); // Alerts 'Hello!'
 *      alertOnce('Nothing'); // Doesn't alert
 *      alertOnce('Again'); // Doesn't alert
 */
export default function once(fn) {
    var called = false, result;
    return function() {
        if (called) {
            return result;
        }
        called = true;
        result = fn.apply(this, arguments);
        return result;
    };
};
