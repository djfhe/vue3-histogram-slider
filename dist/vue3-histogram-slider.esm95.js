import r from "./vue3-histogram-slider.esm79.js";
function u(o, e) {
  var n = {}, f = {}, t;
  (o === null || typeof o != "object") && (o = {}), (e === null || typeof e != "object") && (e = {});
  for (t in e)
    t in o ? n[t] = r(o[t], e[t]) : f[t] = e[t];
  return function(i) {
    for (t in n) f[t] = n[t](i);
    return f;
  };
}
export {
  u as default
};
//# sourceMappingURL=vue3-histogram-slider.esm95.js.map
