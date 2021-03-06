// TODO: Are we okay with internal functions depending on exported functions?
import forEach from "../for_each";

/**
 * Internal implementation of `pickAll`
 *
 * @private
 * @see R.pickAll
 */
// TODO: document, even for internals...
export default function(names, obj) {
    var copy = {};
    forEach(function(name) {
        copy[name] = obj[name];
    }, names);
    return copy;
};
