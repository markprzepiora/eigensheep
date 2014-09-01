import _slice from "./internal/slice";
import _concat from "./internal/concat";
import arity from "./arity";

/**
 * Accepts as its arguments a function and any number of values and returns a function that,
 * when invoked, calls the original function with all of the values appended to the original
 * function's arguments list.
 *
 * Note that `rPartial` is the opposite of `lPartial`: `rPartial` fills `fn`'s arguments
 * from the right to the left. In some libraries this function is named `applyRight`.
 *
 * @func
 * @memberOf R
 * @category Function
 * @param {Function} fn The function to invoke.
 * @param {...*} [args] Arguments to append to `fn` when the returned function is invoked.
 * @return {Function} A new function wrapping `fn`. When invoked, it will call `fn` with
 *         `args` appended to `fn`'s arguments list.
 * @example
 *
 *      var greet = function(salutation, title, firstName, lastName) {
 *        return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *      };
 *      var greetMsJaneJones = ramda.rPartial(greet, 'Ms.', 'Jane', 'Jones');
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 */
export default function rPartial(fn) {
    var args = _slice(arguments, 1);
    return arity(Math.max(fn.length - args.length, 0), function() {
        return fn.apply(this, _concat(arguments, args));
    });
};
