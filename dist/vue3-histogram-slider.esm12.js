import p, { copy as v } from "./vue3-histogram-slider.esm102.js";
import { initRange as c } from "./vue3-histogram-slider.esm103.js";
import h from "./vue3-histogram-slider.esm104.js";
import s, { tickIncrement as d } from "./vue3-histogram-slider.esm28.js";
function k(i) {
  var f = i.domain;
  return i.ticks = function(n) {
    var t = f();
    return s(t[0], t[t.length - 1], n ?? 10);
  }, i.tickFormat = function(n, t) {
    var o = f();
    return h(o[0], o[o.length - 1], n ?? 10, t);
  }, i.nice = function(n) {
    n == null && (n = 10);
    var t = f(), o = 0, l = t.length - 1, e = t[o], a = t[l], u, r, m = 10;
    for (a < e && (r = e, e = a, a = r, r = o, o = l, l = r); m-- > 0; ) {
      if (r = d(e, a, n), r === u)
        return t[o] = e, t[l] = a, f(t);
      if (r > 0)
        e = Math.floor(e / r) * r, a = Math.ceil(a / r) * r;
      else if (r < 0)
        e = Math.ceil(e * r) / r, a = Math.floor(a * r) / r;
      else
        break;
      u = r;
    }
    return i;
  }, i;
}
function g() {
  var i = p();
  return i.copy = function() {
    return v(i, g());
  }, c.apply(i, arguments), k(i);
}
export {
  g as default,
  k as linearish
};
//# sourceMappingURL=vue3-histogram-slider.esm12.js.map
