import _slice from "./internal/slice";
import curry from "./curry";
import arity from "./arity";

/**
 * Accepts a function `fn` and any number of transformer functions and returns a new
 * function. When the new function is invoked, it calls the function `fn` with parameters
 * consisting of the result of calling each supplied handler on successive arguments to the
 * new function. For example:
 *
 * ```javascript
 *   var useWithExample = R.useWith(someFn, transformerFn1, transformerFn2);
 *
 *   // This invocation:
 *   useWithExample('x', 'y');
 *   // Is functionally equivalent to:
 *   someFn(transformerFn1('x'), transformerFn2('y'))
 * ```
 *
 * If more arguments are passed to the returned function than transformer functions, those
 * arguments are passed directly to `fn` as additional parameters. If you expect additional
 * arguments that don't need to be transformed, although you can ignore them, it's best to
 * pass an identity function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @category Function
 * @param {Function} fn The function to wrap.
 * @param {...Function} transformers A variable number of transformer functions
 * @return {Function} The wrapped function.
 * @example
 *
 *      var double = function(y) { return y * 2; };
 *      var square = function(x) { return x * x; };
 *      var add = function(a, b) { return a + b; };
 *      // Adds any number of arguments together
 *      var addAll = function() {
 *        return ramda.reduce(add, 0, arguments);
 *      };
 *
 *      // Basic example
 *      var addDoubleAndSquare = ramda.useWith(addAll, double, square);
 *
 *      addDoubleAndSquare(10, 5); //≅ addAll(double(10), square(5));
 *      //=> 45
 *
 *      // Example of passing more arguments than transformers
 *      addDoubleAndSquare(10, 5, 100); //≅ addAll(double(10), square(5), 100);
 *      //=> 145
 *
 *      // But if you're expecting additional arguments that don't need transformation, it's best
 *      // to pass transformer functions so the resulting function has the correct arity
 *      var addDoubleAndSquareWithExtraParams = ramda.useWith(addAll, double, square, ramda.identity);
 *      addDoubleAndSquare(10, 5, 100); //≅ addAll(double(10), square(5), ramda.identity(100));
 *      //=> 145
 */
export default function useWith(fn /*, transformers */) {
    var transformers = _slice(arguments, 1);
    var tlen = transformers.length;
    return curry(arity(tlen, function() {
        var args = [], idx = -1;
        while (++idx < tlen) {
            args.push(transformers[idx](arguments[idx]));
        }
        return fn.apply(this, args.concat(_slice(arguments, tlen)));
    }));
};
