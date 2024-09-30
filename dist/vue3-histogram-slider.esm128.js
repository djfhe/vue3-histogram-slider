import { get as h, set as l } from "./vue3-histogram-slider.esm131.js";
function s(t, r) {
  var u, n;
  return function() {
    var e = l(this, t), i = e.tween;
    if (i !== u) {
      n = u = i;
      for (var a = 0, o = n.length; a < o; ++a)
        if (n[a].name === r) {
          n = n.slice(), n.splice(a, 1);
          break;
        }
    }
    e.tween = n;
  };
}
function w(t, r, u) {
  var n, e;
  if (typeof u != "function") throw new Error();
  return function() {
    var i = l(this, t), a = i.tween;
    if (a !== n) {
      e = (n = a).slice();
      for (var o = { name: r, value: u }, f = 0, c = e.length; f < c; ++f)
        if (e[f].name === r) {
          e[f] = o;
          break;
        }
      f === c && e.push(o);
    }
    i.tween = e;
  };
}
function d(t, r) {
  var u = this._id;
  if (t += "", arguments.length < 2) {
    for (var n = h(this.node(), u).tween, e = 0, i = n.length, a; e < i; ++e)
      if ((a = n[e]).name === t)
        return a.value;
    return null;
  }
  return this.each((r == null ? s : w)(u, t, r));
}
function g(t, r, u) {
  var n = t._id;
  return t.each(function() {
    var e = l(this, n);
    (e.value || (e.value = {}))[r] = u.apply(this, arguments);
  }), function(e) {
    return h(e, n).value[r];
  };
}
export {
  d as default,
  g as tweenValue
};
//# sourceMappingURL=vue3-histogram-slider.esm128.js.map
