import curry2 from "./curry2";
import NO_ARGS_EXCEPTION from "./no_args_exception";

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} curried function
 * @example
 *
 *      var addThree = function(a, b, c) {
 *        return a + b + c;
 *      };
 *
 *      var curriedAddThree = curry3(addThree);
 */
export default function curry3(fn) {
    return function(a, b, c) {
        switch (arguments.length) {
            case 0:
                throw NO_ARGS_EXCEPTION;
            case 1:
                return curry2(function(b, c) {
                    return fn(a, b, c);
                });
            case 2:
                return function(c) {
                    return fn(a, b, c);
                };
            default:
                return fn(a, b, c);
        }
    };
}
