import { set as h } from "./vue3-histogram-slider.esm131.js";
function p() {
  var e, n, i = this, r = i._id, t = i.size();
  return new Promise(function(o, s) {
    var u = { value: s }, f = { value: function() {
      --t === 0 && o();
    } };
    i.each(function() {
      var a = h(this, r), c = a.on;
      c !== e && (n = (e = c).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(f)), a.on = n;
    }), t === 0 && o();
  });
}
export {
  p as default
};
//# sourceMappingURL=vue3-histogram-slider.esm129.js.map
