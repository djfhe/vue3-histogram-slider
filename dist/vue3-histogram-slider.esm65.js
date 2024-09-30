import { Selection as o } from "./vue3-histogram-slider.esm64.js";
import m from "./vue3-histogram-slider.esm99.js";
function p(a) {
  typeof a != "function" && (a = m(a));
  for (var n = this._groups, e = n.length, l = new Array(e), r = 0; r < e; ++r)
    for (var f = n[r], c = f.length, h = l[r] = new Array(c), _, i, t = 0; t < c; ++t)
      (_ = f[t]) && (i = a.call(_, _.__data__, t, f)) && ("__data__" in _ && (i.__data__ = _.__data__), h[t] = i);
  return new o(l, this._parents);
}
export {
  p as default
};
//# sourceMappingURL=vue3-histogram-slider.esm65.js.map
