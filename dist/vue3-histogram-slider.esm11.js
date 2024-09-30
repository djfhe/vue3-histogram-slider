function l(d, i) {
  let e;
  if (i === void 0)
    for (const n of d)
      n != null && (e < n || e === void 0 && n >= n) && (e = n);
  else {
    let n = -1;
    for (let f of d)
      (f = i(f, ++n, d)) != null && (e < f || e === void 0 && f >= f) && (e = f);
  }
  return e;
}
export {
  l as default
};
//# sourceMappingURL=vue3-histogram-slider.esm11.js.map
