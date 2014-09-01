import _slice from "./internal/slice";
import _concat from "./internal/concat";
import arity from "./arity";

/**
 * Accepts as its arguments a function and any number of values and returns a function that,
 * when invoked, calls the original function with all of the values prepended to the
 * original function's arguments list. In some libraries this function is named `applyLeft`.
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {Function} fn The function to invoke.
 * @param {...*} [args] Arguments to prepend to `fn` when the returned function is invoked.
 * @return {Function} A new function wrapping `fn`. When invoked, it will call `fn`
 *         with `args` prepended to `fn`'s arguments list.
 * @example
 *
 *      var multiply = function(a, b) { return a * b; };
 *      var double = ramda.lPartial(multiply, 2);
 *      double(2); //=> 4
 *
 *      var greet = function(salutation, title, firstName, lastName) {
 *        return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *      };
 *      var sayHello = ramda.lPartial(greet, 'Hello');
 *      var sayHelloToMs = ramda.lPartial(sayHello, 'Ms.');
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 */
export default function lPartial(fn /*, args */) {
    var args = _slice(arguments, 1);
    return arity(Math.max(fn.length - args.length, 0), function () {
        return fn.apply(this, _concat(args, arguments));
    });
};
