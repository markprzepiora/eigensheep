/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param n
 * @category type
 * @return {Boolean}
 */
// TODO: document, even for internals...
export default Number.isInteger || function isInteger(n) {
    return (n << 0) === n;
};
