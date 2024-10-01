function c(f) {
  for (var _ = this._groups, a = 0, h = _.length; a < h; ++a)
    for (var e = _[a], t = 0, r = e.length, l; t < r; ++t)
      (l = e[t]) && f.call(l, l.__data__, t, e);
  return this;
}
export {
  c as default
};
//# sourceMappingURL=vue3-histogram-slider.esm56.js.map
