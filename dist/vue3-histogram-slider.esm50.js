import { Selection as h } from "./vue3-histogram-slider.esm38.js";
function N(t) {
  t || (t = u);
  function n(_, f) {
    return _ && f ? t(_.__data__, f.__data__) : !_ - !f;
  }
  for (var a = this._groups, i = a.length, o = new Array(i), e = 0; e < i; ++e) {
    for (var c = a[e], d = c.length, l = o[e] = new Array(d), s, r = 0; r < d; ++r)
      (s = c[r]) && (l[r] = s);
    l.sort(n);
  }
  return new h(o, this._parents).order();
}
function u(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
export {
  N as default
};
//# sourceMappingURL=vue3-histogram-slider.esm50.js.map
