function u(n) {
  return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
}
export {
  u as cubicInOut
};
//# sourceMappingURL=vue3-histogram-slider.esm33.js.map
