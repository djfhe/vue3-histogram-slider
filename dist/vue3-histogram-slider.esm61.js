function e() {
  this.textContent = "";
}
function o(t) {
  return function() {
    this.textContent = t;
  };
}
function i(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function u(t) {
  return arguments.length ? this.each(t == null ? e : (typeof t == "function" ? i : o)(t)) : this.node().textContent;
}
export {
  u as default
};
//# sourceMappingURL=vue3-histogram-slider.esm61.js.map
