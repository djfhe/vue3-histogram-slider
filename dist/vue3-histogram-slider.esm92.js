import c from "./vue3-histogram-slider.esm81.js";
function g(e, n) {
  var t = n ? n.length : 0, o = e ? Math.min(t, e.length) : 0, f = new Array(o), i = new Array(t), r;
  for (r = 0; r < o; ++r) f[r] = c(e[r], n[r]);
  for (; r < t; ++r) i[r] = n[r];
  return function(a) {
    for (r = 0; r < o; ++r) i[r] = f[r](a);
    return i;
  };
}
export {
  g as genericArray
};
//# sourceMappingURL=vue3-histogram-slider.esm92.js.map
