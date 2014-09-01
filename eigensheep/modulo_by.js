import flip from "./flip";
import modulo from "./modulo";

/**
 * Reversed version of `modulo`, where the second parameter is divided by the first.  The curried version of
 * this one might be more useful than that of `modulo`.
 *
 * @static
 * @memberOf R
 * @category math
 * @param {number} m The dividend.
 * @param {number} p the modulus.
 * @return {number} The result of `b mod a`.
 * @see modulo
 * @example
 *
 *      var isOdd = moduloBy(2);
 *      isOdd(42); // => 0
 *      isOdd(21); // => 1
 */
var moduloBy = flip(modulo);

export default moduloBy;
