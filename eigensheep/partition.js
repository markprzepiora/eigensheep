import curry2 from "./internal/curry2";
import foldl from "./foldl";

/**
 * Takes a predicate and a list and returns the pair of lists of
 * elements which do and do not satisfy the predicate, respectively.
 *
 * @func
 * @memberOf R
 * @param {Function} pred Function :: a -> Boolean
 * @param {Array} list The array to partition
 * @return {Array} A nested array, containing first an array of elements that satisfied the predicate,
 *                 and second an array of elements that did not satisfy.
 * @example
 *
 *      partition(contains('s'), ['sss', 'ttt', 'foo', 'bars'])
 *     // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 */
var partition = curry2(function _partition(pred, list) {
    return foldl(function(acc, elt) {
        acc[pred(elt) ? 0 : 1].push(elt);
        return acc;
    }, [[], []], list);
});

export default partition;
