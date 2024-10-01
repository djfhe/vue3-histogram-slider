import { watch as p, unref as h } from "vue";
function s(e) {
  return typeof e == "function" ? e() : h(e);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const f = () => {
};
function d(e, r) {
  function n(...t) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => r.apply(this, t), { fn: r, thisArg: this, args: t })).then(o).catch(i);
    });
  }
  return n;
}
const b = (e) => e();
function w(e, r = {}) {
  let n, t, o = f;
  const i = (c) => {
    clearTimeout(c), o(), o = f;
  };
  return (c) => {
    const l = s(e), u = s(r.maxWait);
    return n && i(n), l <= 0 || u !== void 0 && u <= 0 ? (t && (i(t), t = null), Promise.resolve(c())) : new Promise((a, m) => {
      o = r.rejectOnCancel ? m : a, u && !t && (t = setTimeout(() => {
        n && i(n), t = null, a(c());
      }, u)), n = setTimeout(() => {
        t && i(t), t = null, a(c());
      }, l);
    });
  };
}
function W(e, r, n = {}) {
  const {
    eventFilter: t = b,
    ...o
  } = n;
  return p(
    e,
    d(
      t,
      r
    ),
    o
  );
}
function x(e, r, n = {}) {
  const {
    debounce: t = 0,
    maxWait: o = void 0,
    ...i
  } = n;
  return W(
    e,
    r,
    {
      ...i,
      eventFilter: w(t, { maxWait: o })
    }
  );
}
export {
  b as bypassFilter,
  d as createFilterWrapper,
  w as debounceFilter,
  x as debouncedWatch,
  f as noop,
  s as toValue,
  x as watchDebounced,
  W as watchWithFilter
};
//# sourceMappingURL=vue3-histogram-slider.esm7.js.map
