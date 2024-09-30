import N from "./vue3-histogram-slider.esm32.js";
import { timer as T } from "./vue3-histogram-slider.esm105.js";
import w from "./vue3-histogram-slider.esm106.js";
var A = N("start", "end", "cancel", "interrupt"), R = [], x = 0, l = 1, y = 2, v = 3, E = 4, g = 5, h = 6;
function U(r, e, t, i, u, c) {
  var _ = r.__transition;
  if (!_) r.__transition = {};
  else if (t in _) return;
  G(r, t, {
    name: e,
    index: i,
    // For context during callback.
    group: u,
    // For context during callback.
    on: A,
    tween: R,
    time: c.time,
    delay: c.delay,
    duration: c.duration,
    ease: c.ease,
    timer: null,
    state: x
  });
}
function j(r, e) {
  var t = D(r, e);
  if (t.state > x) throw new Error("too late; already scheduled");
  return t;
}
function k(r, e) {
  var t = D(r, e);
  if (t.state > v) throw new Error("too late; already running");
  return t;
}
function D(r, e) {
  var t = r.__transition;
  if (!t || !(t = t[e])) throw new Error("transition not found");
  return t;
}
function G(r, e, t) {
  var i = r.__transition, u;
  i[e] = t, t.timer = T(c, 0, t.time);
  function c(o) {
    t.state = l, t.timer.restart(_, t.delay, t.time), t.delay <= o && _(o - t.delay);
  }
  function _(o) {
    var n, m, d, a;
    if (t.state !== l) return p();
    for (n in i)
      if (a = i[n], a.name === t.name) {
        if (a.state === v) return w(_);
        a.state === E ? (a.state = h, a.timer.stop(), a.on.call("interrupt", r, r.__data__, a.index, a.group), delete i[n]) : +n < e && (a.state = h, a.timer.stop(), a.on.call("cancel", r, r.__data__, a.index, a.group), delete i[n]);
      }
    if (w(function() {
      t.state === v && (t.state = E, t.timer.restart(s, t.delay, t.time), s(o));
    }), t.state = y, t.on.call("start", r, r.__data__, t.index, t.group), t.state === y) {
      for (t.state = v, u = new Array(d = t.tween.length), n = 0, m = -1; n < d; ++n)
        (a = t.tween[n].value.call(r, r.__data__, t.index, t.group)) && (u[++m] = a);
      u.length = m + 1;
    }
  }
  function s(o) {
    for (var n = o < t.duration ? t.ease.call(null, o / t.duration) : (t.timer.restart(p), t.state = g, 1), m = -1, d = u.length; ++m < d; )
      u[m].call(r, n);
    t.state === g && (t.on.call("end", r, r.__data__, t.index, t.group), p());
  }
  function p() {
    t.state = h, t.timer.stop(), delete i[e];
    for (var o in i) return;
    delete r.__transition;
  }
}
export {
  x as CREATED,
  h as ENDED,
  g as ENDING,
  E as RUNNING,
  l as SCHEDULED,
  v as STARTED,
  y as STARTING,
  U as default,
  D as get,
  j as init,
  k as set
};
//# sourceMappingURL=vue3-histogram-slider.esm131.js.map
