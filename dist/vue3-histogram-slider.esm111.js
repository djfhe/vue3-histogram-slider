import u from "./vue3-histogram-slider.esm61.js";
function o(r, n) {
  return function(t) {
    this.setAttribute(r, n.call(this, t));
  };
}
function f(r, n) {
  return function(t) {
    this.setAttributeNS(r.space, r.local, n.call(this, t));
  };
}
function s(r, n) {
  var t, e;
  function a() {
    var i = n.apply(this, arguments);
    return i !== e && (t = (e = i) && f(r, i)), t;
  }
  return a._value = n, a;
}
function l(r, n) {
  var t, e;
  function a() {
    var i = n.apply(this, arguments);
    return i !== e && (t = (e = i) && o(r, i)), t;
  }
  return a._value = n, a;
}
function h(r, n) {
  var t = "attr." + r;
  if (arguments.length < 2) return (t = this.tween(t)) && t._value;
  if (n == null) return this.tween(t, null);
  if (typeof n != "function") throw new Error();
  var e = u(r);
  return this.tween(t, (e.local ? s : l)(e, n));
}
export {
  h as default
};
//# sourceMappingURL=vue3-histogram-slider.esm111.js.map
