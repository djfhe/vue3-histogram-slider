import { Transition as s, newId as h } from "./vue3-histogram-slider.esm109.js";
import c from "./vue3-histogram-slider.esm131.js";
import { now as _ } from "./vue3-histogram-slider.esm105.js";
import { cubicInOut as m } from "./vue3-histogram-slider.esm33.js";
var w = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: m
};
function d(t, i) {
  for (var r; !(r = t.__transition) || !(r = r[i]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${i} not found`);
  return r;
}
function T(t) {
  var i, r;
  t instanceof s ? (i = t._id, t = t._name) : (i = h(), (r = w).time = _(), t = t == null ? null : t + "");
  for (var o = this._groups, a = o.length, e = 0; e < a; ++e)
    for (var f = o[e], u = f.length, l, n = 0; n < u; ++n)
      (l = f[n]) && c(l, t, i, n, f, r || d(l, i));
  return new s(o, this._parents, t, i);
}
export {
  T as default
};
//# sourceMappingURL=vue3-histogram-slider.esm108.js.map
