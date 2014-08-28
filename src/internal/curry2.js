import NO_ARGS_EXCEPTION from "./no_args_exception";

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} curried function
 * @example
 *
 *      var addTwo = function(a, b) {
 *        return a + b;
 *      };
 *
 *      var curriedAddTwo = curry2(addTwo);
 */
function curry2(fn) {
    return function(a, b) {
        switch (arguments.length) {
            case 0: throw NO_ARGS_EXCEPTION;
            case 1: return function(b) {
                return fn(a, b);
            };
            default: return fn(a, b);
        }
    };
}

export default curry2;
