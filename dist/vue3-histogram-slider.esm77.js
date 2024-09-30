function t() {
  var a = arguments[0];
  return arguments[0] = this, a.apply(null, arguments), this;
}
export {
  t as default
};
//# sourceMappingURL=vue3-histogram-slider.esm77.js.map
