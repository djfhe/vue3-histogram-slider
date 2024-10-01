function s() {
  for (var i = this._groups, o = -1, a = i.length; ++o < a; )
    for (var e = i[o], f = e.length - 1, r = e[f], t; --f >= 0; )
      (t = e[f]) && (r && t.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(t, r), r = t);
  return this;
}
export {
  s as default
};
//# sourceMappingURL=vue3-histogram-slider.esm49.js.map
