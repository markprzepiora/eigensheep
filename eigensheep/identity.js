/**
 * A function that does nothing but return the parameter supplied to it. Good as a default
 * or placeholder function.
 *
 * @static
 * @memberOf R
 * @category Core
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @alias I
 * @example
 *
 *      ramda.identity(1); //=> 1
 *
 *      var obj = {};
 *      ramda.identity(obj) === obj; //=> true
 */
export default function identity(x) {
    return x;
};
