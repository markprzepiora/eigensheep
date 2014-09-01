import _slice from "./internal/slice";
import _map from "./internal/map";

/**
 * Accepts three functions and returns a new function. When invoked, this new function will
 * invoke the first function, `after`, passing as its arguments the results of invoking the
 * second and third functions with whatever arguments are passed to the new function.
 *
 * For example, a function produced by `fork` is equivalent to:
 *
 * ```javascript
 *   var h = ramda.fork(e, f, g);
 *   h(1, 2); //≅ e( f(1, 2), g(1, 2) )
 * ```
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Function} fn1 A function. It will be invoked with the arguments passed to the
 *        returned function. Afterward, its resulting value will be passed to `after` as
 *        its first argument.
 * @param {Function} fn2 A function. It will be invoked with the arguments passed to the
 *        returned function. Afterward, its resulting value will be passed to `after` as
 *        its second argument.
 * @return {Function} A new function.
 * @example
 *
 *      var add = function(a, b) { return a + b; };
 *      var multiply = function(a, b) { return a * b; };
 *      var subtract = function(a, b) { return a - b; };
 *
 *      ramda.fork(multiply, add, subtract)(1, 2);
 *      //≅ multiply( add(1, 2), subtract(1, 2) );
 *      //=> -3
 */
export default function fork(after) {
    var fns = _slice(arguments, 1);
    return function () {
        var args = arguments;
        return after.apply(this, _map(function (fn) {
            return fn.apply(this, args);
        }, fns));
    };
};
