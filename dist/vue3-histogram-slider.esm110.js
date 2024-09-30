import { tweenValue as c } from "./vue3-histogram-slider.esm128.js";
import l from "./vue3-histogram-slider.esm140.js";
import f from "./vue3-histogram-slider.esm61.js";
import { interpolateTransformSvg as g } from "./vue3-histogram-slider.esm44.js";
function p(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function v(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function h(t, e, r) {
  var i, u = r + "", o;
  return function() {
    var n = this.getAttribute(t);
    return n === u ? null : n === i ? o : o = e(i = n, r);
  };
}
function m(t, e, r) {
  var i, u = r + "", o;
  return function() {
    var n = this.getAttributeNS(t.space, t.local);
    return n === u ? null : n === i ? o : o = e(i = n, r);
  };
}
function b(t, e, r) {
  var i, u, o;
  return function() {
    var n, a = r(this), s;
    return a == null ? void this.removeAttribute(t) : (n = this.getAttribute(t), s = a + "", n === s ? null : n === i && s === u ? o : (u = s, o = e(i = n, a)));
  };
}
function A(t, e, r) {
  var i, u, o;
  return function() {
    var n, a = r(this), s;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (n = this.getAttributeNS(t.space, t.local), s = a + "", n === s ? null : n === i && s === u ? o : (u = s, o = e(i = n, a)));
  };
}
function C(t, e) {
  var r = f(t), i = r === "transform" ? g : l;
  return this.attrTween(t, typeof e == "function" ? (r.local ? A : b)(r, i, c(this, "attr." + t, e)) : e == null ? (r.local ? v : p)(r) : (r.local ? m : h)(r, i, e));
}
export {
  C as default
};
//# sourceMappingURL=vue3-histogram-slider.esm110.js.map
