import w from "./vue3-histogram-slider.esm139.js";
import y from "./vue3-histogram-slider.esm138.js";
import N from "./vue3-histogram-slider.esm38.js";
import A from "./vue3-histogram-slider.esm34.js";
import k from "./vue3-histogram-slider.esm43.js";
import { bisectRight as M } from "./vue3-histogram-slider.esm17.js";
var h = [0, 1];
function p(n) {
  return n;
}
function g(n, r) {
  return (r -= n = +n) ? function(i) {
    return (i - n) / r;
  } : w(isNaN(r) ? NaN : 0.5);
}
function d(n, r) {
  var i;
  return n > r && (i = n, n = r, r = i), function(e) {
    return Math.max(n, Math.min(r, e));
  };
}
function R(n, r, i) {
  var e = n[0], a = n[1], o = r[0], u = r[1];
  return a < e ? (e = g(a, e), o = i(u, o)) : (e = g(e, a), o = i(o, u)), function(l) {
    return o(e(l));
  };
}
function j(n, r, i) {
  var e = Math.min(n.length, r.length) - 1, a = new Array(e), o = new Array(e), u = -1;
  for (n[e] < n[0] && (n = n.slice().reverse(), r = r.slice().reverse()); ++u < e; )
    a[u] = g(n[u], n[u + 1]), o[u] = i(r[u], r[u + 1]);
  return function(l) {
    var m = M(n, l, 1, e) - 1;
    return o[m](a[m](l));
  };
}
function F(n, r) {
  return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function z() {
  var n = h, r = h, i = A, e, a, o, u = p, l, m, s;
  function c() {
    var t = Math.min(n.length, r.length);
    return u !== p && (u = d(n[0], n[t - 1])), l = t > 2 ? j : R, m = s = null, f;
  }
  function f(t) {
    return t == null || isNaN(t = +t) ? o : (m || (m = l(n.map(e), r, i)))(e(u(t)));
  }
  return f.invert = function(t) {
    return u(a((s || (s = l(r, n.map(e), N)))(t)));
  }, f.domain = function(t) {
    return arguments.length ? (n = Array.from(t, y), c()) : n.slice();
  }, f.range = function(t) {
    return arguments.length ? (r = Array.from(t), c()) : r.slice();
  }, f.rangeRound = function(t) {
    return r = Array.from(t), i = k, c();
  }, f.clamp = function(t) {
    return arguments.length ? (u = t ? !0 : p, c()) : u !== p;
  }, f.interpolate = function(t) {
    return arguments.length ? (i = t, c()) : i;
  }, f.unknown = function(t) {
    return arguments.length ? (o = t, f) : o;
  }, function(t, v) {
    return e = t, a = v, c();
  };
}
function G() {
  return z()(p, p);
}
export {
  F as copy,
  G as default,
  p as identity,
  z as transformer
};
//# sourceMappingURL=vue3-histogram-slider.esm102.js.map
