import { set as p } from "./vue3-histogram-slider.esm131.js";
import { tweenValue as v } from "./vue3-histogram-slider.esm128.js";
import g from "./vue3-histogram-slider.esm140.js";
import { styleValue as f } from "./vue3-histogram-slider.esm84.js";
import { interpolateTransformCss as d } from "./vue3-histogram-slider.esm44.js";
function a(t, n) {
  var i, r, o;
  return function() {
    var s = f(this, t), e = (this.style.removeProperty(t), f(this, t));
    return s === e ? null : s === i && e === r ? o : o = n(i = s, r = e);
  };
}
function c(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function w(t, n, i) {
  var r, o = i + "", s;
  return function() {
    var e = f(this, t);
    return e === o ? null : e === r ? s : s = n(r = e, i);
  };
}
function T(t, n, i) {
  var r, o, s;
  return function() {
    var e = f(this, t), u = i(this), l = u + "";
    return u == null && (l = u = (this.style.removeProperty(t), f(this, t))), e === l ? null : e === r && l === o ? s : (o = l, s = n(r = e, u));
  };
}
function P(t, n) {
  var i, r, o, s = "style." + n, e = "end." + s, u;
  return function() {
    var l = p(this, t), y = l.on, h = l.value[s] == null ? u || (u = c(n)) : void 0;
    (y !== i || o !== h) && (r = (i = y).copy()).on(e, o = h), l.on = r;
  };
}
function b(t, n, i) {
  var r = (t += "") == "transform" ? d : g;
  return n == null ? this.styleTween(t, a(t, r)).on("end.style." + t, c(t)) : typeof n == "function" ? this.styleTween(t, T(t, r, v(this, "style." + t, n))).each(P(this._id, t)) : this.styleTween(t, w(t, r, n), i).on("end.style." + t, null);
}
export {
  b as default
};
//# sourceMappingURL=vue3-histogram-slider.esm123.js.map
