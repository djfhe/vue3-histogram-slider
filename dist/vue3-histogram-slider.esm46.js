function t() {
  var e = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function o() {
  var e = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function i(e) {
  return this.select(e ? o : t);
}
export {
  i as default
};
//# sourceMappingURL=vue3-histogram-slider.esm46.js.map
