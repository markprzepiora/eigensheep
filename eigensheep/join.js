import invoker from "./invoker";

/**
 * Returns a string made by inserting the `separator` between each
 * element and concatenating all the elements into a single string.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {string|number} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {string} The string made by concatenating `xs` with `separator`.
 * @example
 *
 *      var spacer = join(' ');
 *      spacer(['a', 2, 3.4]);   //= 'a 2 3.4'
 *      join('|', [1, 2, 3]);    //= '1|2|3'
 */
var join = invoker('join', Array.prototype);

export default join;
