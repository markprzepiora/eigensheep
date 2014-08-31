import _concat from "./concat";

// TODO: this function is never used anywhere. Leaving it in just for now. :)

/**
 * Returns a new function which partially applies a value to a given function, where the
 * function is a variadic function that cannot be curried.
 *
 * @private
 * @category Function
 * @param {Function} f The function to partially apply `a` onto.
 * @param {*} a The argument to partially apply onto `f`.
 * @return {Function} A new function.
 * @example
 *
 *      var addThree = function(a, b, c) {
 *        return a + b + c;
 *      };
 *      var partialAdd = partially(add, 1);
 *      partialAdd(2, 3); //=> 6
 *
 *      // partialAdd is invoked immediately, even though it expects three arguments. This is
 *      // because, unlike many functions here, the result of `partially` is not a curried
 *      // function.
 *      partialAdd(2); //≅ addThree(1, 2, undefined) => NaN
 */
export default function _partially(f, a) {
    return function() {
        return f.apply(this, _concat([a], arguments));
    };
}
