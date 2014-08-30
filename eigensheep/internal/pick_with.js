import keys from "../keys";

/**
 * Internal helper function for making a partial copy of an object
 *
 * @private
 *
 */
// TODO: document, even for internals...
export default function pickWith(test, obj) {
    var copy = {},
        props = keys(obj), prop, val;
    for (var i = 0, len = props.length; i < len; i++) {
        prop = props[i];
        val = obj[prop];
        if (test(val, prop, obj)) {
            copy[prop] = val;
        }
    }
    return copy;
}
