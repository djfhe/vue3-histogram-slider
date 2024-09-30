import i from "./vue3-histogram-slider.esm61.js";
function o(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function u(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function c(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function s(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function a(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function l(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function h(t, n) {
  var e = i(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? u : o : typeof n == "function" ? e.local ? l : a : e.local ? s : c)(e, n));
}
export {
  h as default
};
//# sourceMappingURL=vue3-histogram-slider.esm83.js.map
