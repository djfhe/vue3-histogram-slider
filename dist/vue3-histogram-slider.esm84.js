import l from "./vue3-histogram-slider.esm101.js";
function s(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function u(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function o(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function f(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? s : typeof e == "function" ? o : u)(t, e, n ?? "")) : i(this.node(), t);
}
function i(t, e) {
  return t.style.getPropertyValue(e) || l(t).getComputedStyle(t, null).getPropertyValue(e);
}
export {
  f as default,
  i as styleValue
};
//# sourceMappingURL=vue3-histogram-slider.esm84.js.map
