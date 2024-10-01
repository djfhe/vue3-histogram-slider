function* n() {
  for (var r = this._groups, t = 0, l = r.length; t < l; ++t)
    for (var a = r[t], e = 0, i = a.length, f; e < i; ++e)
      (f = a[e]) && (yield f);
}
export {
  n as default
};
//# sourceMappingURL=vue3-histogram-slider.esm72.js.map
