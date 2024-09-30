function s(n, e, r) {
  return function(t) {
    this.style.setProperty(n, e.call(this, t), r);
  };
}
function f(n, e, r) {
  var t, u;
  function l() {
    var i = e.apply(this, arguments);
    return i !== u && (t = (u = i) && s(n, i, r)), t;
  }
  return l._value = e, l;
}
function o(n, e, r) {
  var t = "style." + (n += "");
  if (arguments.length < 2) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, f(n, e, r ?? ""));
}
export {
  o as default
};
//# sourceMappingURL=vue3-histogram-slider.esm124.js.map
