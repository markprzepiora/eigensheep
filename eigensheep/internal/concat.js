/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @category Internal
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
export default function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];
    var length1 = set1.length,
        length2 = set2.length,
        result = new Array(length1 + length2);

    for (var i = 0; i < length1; i++) {
        result[i] = set1[i];
    }
    for (i = 0; i < length2; i++) {
        result[i + length1] = set2[i];
    }
    return result;
};
