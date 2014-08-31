import clone from "./clone";

/**
 * Returns a new list with the same elements as the original list, just
 * in the reverse order.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Array} list The list to reverse.
 * @return {Array} A copy of the list in reverse order.
 * @example
 *
 *      reverse([1, 2, 3]);  //= [3, 2, 1]
 *      reverse([1, 2]);     //= [2, 1]
 *      reverse([1]);        //= [1]
 *      reverse([]);         //= []
 */
export default function reverse(list) {
    return clone(list || []).reverse();
};
