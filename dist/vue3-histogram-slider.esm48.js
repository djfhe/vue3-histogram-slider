import { Selection as y } from "./vue3-histogram-slider.esm38.js";
function p(t) {
  for (var s = t.selection ? t.selection() : t, n = this._groups, f = s._groups, a = n.length, c = f.length, _ = Math.min(a, c), l = new Array(a), e = 0; e < _; ++e)
    for (var i = n[e], v = f[e], o = i.length, w = l[e] = new Array(o), h, r = 0; r < o; ++r)
      (h = i[r] || v[r]) && (w[r] = h);
  for (; e < a; ++e)
    l[e] = n[e];
  return new y(l, this._parents);
}
export {
  p as default
};
//# sourceMappingURL=vue3-histogram-slider.esm48.js.map
