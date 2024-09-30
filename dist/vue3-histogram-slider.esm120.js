import { Transition as v } from "./vue3-histogram-slider.esm109.js";
import w, { get as y } from "./vue3-histogram-slider.esm131.js";
import s from "./vue3-histogram-slider.esm99.js";
function x(_) {
  var m = this._name, i = this._id;
  typeof _ != "function" && (_ = s(_));
  for (var e = this._groups, l = e.length, c = new Array(l), r = 0; r < l; ++r)
    for (var f = e[r], o = f.length, n = c[r] = new Array(o), a, h, t = 0; t < o; ++t)
      (a = f[t]) && (h = _.call(a, a.__data__, t, f)) && ("__data__" in a && (h.__data__ = a.__data__), n[t] = h, w(n[t], m, i, t, n, y(a, i)));
  return new v(c, this._parents, m, i);
}
export {
  x as default
};
//# sourceMappingURL=vue3-histogram-slider.esm120.js.map
