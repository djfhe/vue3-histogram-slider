import { Transition as g } from "./vue3-histogram-slider.esm109.js";
import w, { get as x } from "./vue3-histogram-slider.esm131.js";
import y from "./vue3-histogram-slider.esm100.js";
function B(f) {
  var n = this._name, o = this._id;
  typeof f != "function" && (f = y(f));
  for (var l = this._groups, e = l.length, h = [], s = [], m = 0; m < e; ++m)
    for (var _ = l[m], p = _.length, t, a = 0; a < p; ++a)
      if (t = _[a]) {
        for (var r = f.call(t, t.__data__, a, _), v, u = x(t, o), i = 0, A = r.length; i < A; ++i)
          (v = r[i]) && w(v, n, o, i, r, u);
        h.push(r), s.push(t);
      }
  return new g(h, s, n, o);
}
export {
  B as default
};
//# sourceMappingURL=vue3-histogram-slider.esm121.js.map
