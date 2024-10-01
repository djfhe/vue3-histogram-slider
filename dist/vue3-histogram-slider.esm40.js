function i() {
  this.innerHTML = "";
}
function e(n) {
  return function() {
    this.innerHTML = n;
  };
}
function o(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function r(n) {
  return arguments.length ? this.each(n == null ? i : (typeof n == "function" ? o : e)(n)) : this.node().innerHTML;
}
export {
  r as default
};
//# sourceMappingURL=vue3-histogram-slider.esm40.js.map
