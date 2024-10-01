function a(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
export {
  a as initRange
};
//# sourceMappingURL=vue3-histogram-slider.esm14.js.map
