/**
 * internal helper for `where`
 *
 * @private
 * @see R.where
 */
export default function _satisfiesSpec(spec, parsedSpec, testObj) {
    if (spec === testObj) { return true; }
    if (testObj == null) { return false; }
    parsedSpec.fn = parsedSpec.fn || [];
    parsedSpec.obj = parsedSpec.obj || [];
    var key, val, i = -1, fnLen = parsedSpec.fn.length, j = -1, objLen = parsedSpec.obj.length;
    while (++i < fnLen) {
        key = parsedSpec.fn[i];
        val = spec[key];
        //     if (!hasOwnProperty.call(testObj, key)) {
        //       return false;
        //     }
        if (!(key in testObj)) {
            return false;
        }
        if (!val(testObj[key], testObj)) {
            return false;
        }
    }
    while (++j < objLen) {
        key = parsedSpec.obj[j];
        if (spec[key] !== testObj[key]) {
            return false;
        }
    }
    return true;
}
