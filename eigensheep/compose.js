import NO_ARGS_EXCEPTION from "./internal/no_args_exception";
import arity from "./arity";

/**
 * Basic, right-associative composition function. Accepts two functions and returns the
 * composite function; this composite function represents the operation `var h = f(g(x))`,
 * where `f` is the first argument, `g` is the second argument, and `x` is whatever
 * argument(s) are passed to `h`.
 *
 * This function's main use is to build the more general `compose` function, which accepts
 * any number of functions.
 *
 * @private
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (b -> c), (a... -> b)) -> (a... -> z)
 * @param {Function} f A function.
 * @param {Function} g A function.
 * @return {Function} A new function that is the equivalent of `f(g(x))`.
 * @example
 *
 *      var double = function(x) { return x * 2; };
 *      var square = function(x) { return x * x; };
 *      var squareThenDouble = internalCompose(double, square);
 *
 *      squareThenDouble(5); //≅ double(square(5)) => 50
 */
function internalCompose(f, g) {
    return function() {
        return f.call(this, g.apply(this, arguments));
    };
}

/**
 * Creates a new function that runs each of the functions supplied as parameters in turn,
 * passing the return value of each function invocation to the next function invocation,
 * beginning with whatever arguments were passed to the initial invocation.
 *
 * Note that `compose` is a right-associative function, which means the functions provided
 * will be invoked in order from right to left. In the example `var h = compose(f, g)`,
 * the function `h` is equivalent to `f( g(x) )`, where `x` represents the arguments
 * originally passed to `h`.
 *
 * @func
 * @memberOf R
 * @category Function
 * @param {...Function} functions A variable number of functions.
 * @return {Function} A new function which represents the result of calling each of the
 *         input `functions`, passing the result of each function call to the next, from
 *         right to left.
 * @example
 *
 *      var triple = function(x) { return x * 3; };
 *      var double = function(x) { return x * 2; };
 *      var square = function(x) { return x * x; };
 *      var squareThenDoubleThenTriple = ramda.compose(triple, double, square);
 *
 *      squareThenDoubleThenTriple(5); //≅ triple(double(square(5))) => 150
 */
export default function compose() {
    switch (arguments.length) {
        case 0: throw NO_ARGS_EXCEPTION;
        case 1: return arguments[0];
        default:
            var idx = arguments.length - 1, func = arguments[idx], fnArity = func.length;
            while (idx--) {
                func = internalCompose(arguments[idx], func);
            }
            return arity(fnArity, func);
    }
};
