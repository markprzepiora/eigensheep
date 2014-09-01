export default function _some(fn, list) {
    var i = -1;
    while (++i < list.length) {
        if (fn(list[i])) {
            return true;
        }
    }
    return false;
}
