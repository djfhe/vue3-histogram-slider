import { Transition as l, newId as _ } from "./vue3-histogram-slider.esm109.js";
import u, { get as v } from "./vue3-histogram-slider.esm131.js";
function w() {
  for (var s = this._name, o = this._id, d = _(), e = this._groups, m = e.length, n = 0; n < m; ++n)
    for (var r = e[n], f = r.length, i, a = 0; a < f; ++a)
      if (i = r[a]) {
        var t = v(i, o);
        u(i, s, d, a, r, {
          time: t.time + t.delay + t.duration,
          delay: 0,
          duration: t.duration,
          ease: t.ease
        });
      }
  return new l(e, this._parents, s, d);
}
export {
  w as default
};
//# sourceMappingURL=vue3-histogram-slider.esm127.js.map
