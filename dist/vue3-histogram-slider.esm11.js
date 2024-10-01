import { slice as F } from "./vue3-histogram-slider.esm29.js";
import { bisectRight as j } from "./vue3-histogram-slider.esm22.js";
import b from "./vue3-histogram-slider.esm30.js";
import w from "./vue3-histogram-slider.esm28.js";
import I from "./vue3-histogram-slider.esm31.js";
import R from "./vue3-histogram-slider.esm32.js";
import S, { tickIncrement as z } from "./vue3-histogram-slider.esm16.js";
import q from "./vue3-histogram-slider.esm33.js";
function L() {
  var A = I, h = w, v = q;
  function s(i) {
    Array.isArray(i) || (i = Array.from(i));
    var r, c = i.length, o, m, u = new Array(c);
    for (r = 0; r < c; ++r)
      u[r] = A(i[r], r, i);
    var k = h(u), e = k[0], t = k[1], n = v(u, e, t);
    if (!Array.isArray(n)) {
      const g = t, x = +n;
      if (h === w && ([e, t] = R(e, t, x)), n = S(e, t, x), n[0] <= e && (m = z(e, t, x)), n[n.length - 1] >= t)
        if (g >= t && h === w) {
          const l = z(e, t, x);
          isFinite(l) && (l > 0 ? t = (Math.floor(t / l) + 1) * l : l < 0 && (t = (Math.ceil(t * -l) + 1) / -l));
        } else
          n.pop();
    }
    for (var f = n.length, a = 0, p = f; n[a] <= e; ) ++a;
    for (; n[p - 1] > t; ) --p;
    (a || p < f) && (n = n.slice(a, p), f = p - a);
    var y = new Array(f + 1), M;
    for (r = 0; r <= f; ++r)
      M = y[r] = [], M.x0 = r > 0 ? n[r - 1] : e, M.x1 = r < f ? n[r] : t;
    if (isFinite(m)) {
      if (m > 0)
        for (r = 0; r < c; ++r)
          (o = u[r]) != null && e <= o && o <= t && y[Math.min(f, Math.floor((o - e) / m))].push(i[r]);
      else if (m < 0) {
        for (r = 0; r < c; ++r)
          if ((o = u[r]) != null && e <= o && o <= t) {
            const g = Math.floor((e - o) * m);
            y[Math.min(f, g + (n[g] <= o))].push(i[r]);
          }
      }
    } else
      for (r = 0; r < c; ++r)
        (o = u[r]) != null && e <= o && o <= t && y[j(n, o, 0, f)].push(i[r]);
    return y;
  }
  return s.value = function(i) {
    return arguments.length ? (A = typeof i == "function" ? i : b(i), s) : A;
  }, s.domain = function(i) {
    return arguments.length ? (h = typeof i == "function" ? i : b([i[0], i[1]]), s) : h;
  }, s.thresholds = function(i) {
    return arguments.length ? (v = typeof i == "function" ? i : b(Array.isArray(i) ? F.call(i) : i), s) : v;
  }, s;
}
export {
  L as default
};
//# sourceMappingURL=vue3-histogram-slider.esm11.js.map
