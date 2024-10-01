import { Selection as k } from "./vue3-histogram-slider.esm16.js";
import { EnterNode as v } from "./vue3-histogram-slider.esm23.js";
import x from "./vue3-histogram-slider.esm76.js";
function B(r, l, y, s, h, t) {
  for (var e = 0, n, f = l.length, o = t.length; e < o; ++e)
    (n = l[e]) ? (n.__data__ = t[e], s[e] = n) : y[e] = new v(r, t[e]);
  for (; e < f; ++e)
    (n = l[e]) && (h[e] = n);
}
function E(r, l, y, s, h, t, e) {
  var n, f, o = /* @__PURE__ */ new Map(), i = l.length, w = t.length, g = new Array(i), _;
  for (n = 0; n < i; ++n)
    (f = l[n]) && (g[n] = _ = e.call(f, f.__data__, n, l) + "", o.has(_) ? h[n] = f : o.set(_, f));
  for (n = 0; n < w; ++n)
    _ = e.call(r, t[n], n, t) + "", (f = o.get(_)) ? (s[n] = f, f.__data__ = t[n], o.delete(_)) : y[n] = new v(r, t[n]);
  for (n = 0; n < i; ++n)
    (f = l[n]) && o.get(g[n]) === f && (h[n] = f);
}
function I(r) {
  return r.__data__;
}
function d(r, l) {
  if (!arguments.length) return Array.from(this, I);
  var y = l ? E : B, s = this._parents, h = this._groups;
  typeof r != "function" && (r = x(r));
  for (var t = h.length, e = new Array(t), n = new Array(t), f = new Array(t), o = 0; o < t; ++o) {
    var i = s[o], w = h[o], g = w.length, _ = L(r.call(i, i && i.__data__, o, s)), a = _.length, m = n[o] = new Array(a), b = e[o] = new Array(a), K = f[o] = new Array(g);
    y(i, w, m, b, K, _, l);
    for (var c = 0, A = 0, u, V; c < a; ++c)
      if (u = m[c]) {
        for (c >= A && (A = c + 1); !(V = b[A]) && ++A < a; ) ;
        u._next = V || null;
      }
  }
  return e = new k(e, s), e._enter = n, e._exit = f, e;
}
function L(r) {
  return typeof r == "object" && "length" in r ? r : Array.from(r);
}
export {
  d as default
};
//# sourceMappingURL=vue3-histogram-slider.esm22.js.map
