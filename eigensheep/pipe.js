import _slice from "./internal/slice";
import compose from "./compose";

/**
 * Creates a new function that runs each of the functions supplied as parameters in turn,
 * passing the return value of each function invocation to the next function invocation,
 * beginning with whatever arguments were passed to the initial invocation.
 *
 * `pipe` is the mirror version of `compose`. `pipe` is left-associative, which means that
 * each of the functions provided is executed in order from left to right.
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {...Function} functions A variable number of functions.
 * @return {Function} A new function which represents the result of calling each of the
 *         input `functions`, passing the result of each function call to the next, from
 *         right to left.
 * @alias sequence
 * @example
 *
 *      var triple = function(x) { return x * 3; };
 *      var double = function(x) { return x * 2; };
 *      var square = function(x) { return x * x; };
 *      var squareThenDoubleThenTriple = ramda.pipe(square, double, triple);
 *
 *      squareThenDoubleThenTriple(5); //≅ triple(double(square(5))) => 150
 */
export default function pipe() {
    return compose.apply(this, _slice(arguments).reverse());
};
