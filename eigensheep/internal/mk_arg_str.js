/**
 * Private function that generates a parameter list based on the paremeter count passed in.
 *
 * @private
 * @category Internal
 * @param {number} n The number of parameters
 * @return {string} The parameter list
 * @example
 *
 *      mkArgStr(1); //= 'arg1'
 *      mkArgStr(2); //= 'arg1, arg2'
 *      mkArgStr(3); //= 'arg1, arg2, arg3'
 */
export default function(n) {
    var arr = [], idx = -1;
    while (++idx < n) {
        arr[idx] = 'arg' + idx;
    }
    return arr.join(', ');
};
