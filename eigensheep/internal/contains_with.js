export default function(pred, x, list) {
    var idx = -1, len = list.length;
    while (++idx < len) {
        if (pred(x, list[idx])) {
            return true;
        }
    }
    return false;
}
