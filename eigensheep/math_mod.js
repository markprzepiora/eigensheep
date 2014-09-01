import curry2 from "./internal/curry2";
import _isInteger from "./internal/is_integer";

/**
 * mathMod behaves like the modulo operator should mathematically, unlike the `%`
 * operator (and by extension, ramda.modulo). So while "-17 % 5" is -2,
 * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
 * when the modulus is zero or negative.
 *
 * @static
 * @memberOf R
 * @category math
 * @param {number} m The dividend.
 * @param {number} p the modulus.
 * @return {number} The result of `b mod a`.
 * @see moduloBy
 * @example
 *
 *      mathMod(-17, 5)  // 3
 *      mathMod(17, 5)   // 2
 *      mathMod(17, -5)  // NaN
 *      mathMod(17, 0)   // NaN
 *      mathMod(17.2, 5) // NaN
 *      mathMod(17, 5.3) // NaN
 */
var mathMod = curry2(function _mathMod(m, p) {
    if (!_isInteger(m) || m < 1) { return NaN; }
    if (!_isInteger(p)) { return NaN; }
    return ((m % p) + p) % p;
});

export default mathMod;
