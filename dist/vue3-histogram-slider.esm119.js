function r(t) {
  return function() {
    var n = this.parentNode;
    for (var i in this.__transition) if (+i !== t) return;
    n && n.removeChild(this);
  };
}
function e() {
  return this.on("end.remove", r(this._id));
}
export {
  e as default
};
//# sourceMappingURL=vue3-histogram-slider.esm119.js.map
