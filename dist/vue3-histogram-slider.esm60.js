function d(l, t) {
  let f, n;
  if (t === void 0)
    for (const e of l)
      e != null && (f === void 0 ? e >= e && (f = n = e) : (f > e && (f = e), n < e && (n = e)));
  else {
    let e = -1;
    for (let i of l)
      (i = t(i, ++e, l)) != null && (f === void 0 ? i >= i && (f = n = i) : (f > i && (f = i), n < i && (n = i)));
  }
  return [f, n];
}
export {
  d as default
};
//# sourceMappingURL=vue3-histogram-slider.esm60.js.map
