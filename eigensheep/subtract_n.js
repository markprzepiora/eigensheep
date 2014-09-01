import flip from "./flip";
import subtract from "./subtract";

/**
 * Subtracts two numbers in reverse order. Equivalent to `b - a` but
 * curried. Probably more useful when partially applied than
 * `subtract`.
 *
 * @func
 * @memberOf R
 * @category math
 * @param {number} a The first value.
 * @param {number} b The second value.
 * @return {number} The result of `a - b`.
 * @example
 *
 *      var complementaryAngle = subtract(90);
 *      complementaryAngle(30); //= 60
 *
 *      var theRestOf = subtract(1);
 *      theRestOf(0.25); //= 0.75
 *
 *      subtract(10)(8); //= 2
 */
var subtractN = flip(subtract);

export default subtractN;
