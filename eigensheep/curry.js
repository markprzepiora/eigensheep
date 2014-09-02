import NO_ARGS_EXCEPTION from "./internal/no_args_exception";
import _concat from "./internal/concat";
import arity from "./arity";

/**
 * Creates a new version of `fn` that, when invoked, will return either:
 * - A new function ready to accept one or more of `fn`'s remaining arguments, if all of
 * `fn`'s expected arguments have not yet been provided
 * - `fn`'s result if all of its expected arguments have been provided
 *
 * Optionally, you may provide an arity for the returned function.
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (* -> a) -> Number -> (* -> a)
 * @param {Function} fn The function to curry.
 * @param {number} [fnArity=fn.length] An optional arity for the returned function.
 * @return {Function} A new, curried function.
 * @example
 *
 *      var addFourNumbers = function(a, b, c, d) {
 *        return a + b + c + d;
 *      };
 *
 *      var curriedAddFourNumbers = curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4);//=> 10
 */
export default function(fn, fnArity) {
    fnArity = typeof fnArity === 'number' ? fnArity : fn.length;
    function recurry(args) {
        return arity(Math.max(fnArity - (args && args.length || 0), 0), function() {
            if (arguments.length === 0) { throw NO_ARGS_EXCEPTION; }
            var newArgs = _concat(args, arguments);
            if (newArgs.length >= fnArity) {
                return fn.apply(this, newArgs);
            } else {
                return recurry(newArgs);
            }
        });
    }

    return recurry([]);
};
