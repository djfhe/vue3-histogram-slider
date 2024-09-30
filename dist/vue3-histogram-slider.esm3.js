import { defineComponent as R, mergeModels as F, useCssVars as O, ref as y, useModel as E, computed as r, watch as b, onMounted as G, nextTick as N, onBeforeUnmount as U, openBlock as M, createElementBlock as W, createVNode as q, unref as D } from "vue";
import T from "./vue3-histogram-slider.esm6.js";
import _ from "./vue3-histogram-slider.esm7.js";
import A from "./vue3-histogram-slider.esm8.js";
import p from "./vue3-histogram-slider.esm9.js";
import $ from "./vue3-histogram-slider.esm10.js";
import j from "./vue3-histogram-slider.esm11.js";
const I = { class: "vue-histogram-slider-wrapper" }, Z = /* @__PURE__ */ R({
  __name: "HistogramSlider",
  props: /* @__PURE__ */ F({
    data: {},
    min: {},
    max: {},
    step: { default: 1 },
    barWidth: { default: 6 },
    barGap: { default: 5 },
    barRadius: { default: 4 },
    holderColor: { default: "#dee4ec" },
    colors: { default: () => [] },
    updateColorOnChange: { type: Boolean, default: !0 },
    handleSize: { default: 26 },
    grid: { type: Boolean, default: !0 },
    gridNum: { default: 4 },
    prettify: { type: Function, default: (d) => d.toString() },
    labelStyle: { default: () => ({
      color: "#0091ff",
      fontFamily: "Arial, sans-serif",
      fontSize: 12
    }) },
    markStyle: { default: () => ({
      labelStyle: {
        color: "silver",
        fontFamily: "Arial, sans-serif",
        fontSize: 12
      },
      labelActiveStyle: {
        color: "#0091ff"
      }
    }) },
    processStyle: { default: () => ({
      backgroundColor: "#0091ff"
    }) },
    tooltipStyle: { default: () => ({
      backgroundColor: "#0091ff",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      fontSize: 12
    }) },
    histSliderGap: { default: 0 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    O((e) => ({
      "442aa41f": B.value
    }));
    const t = d, l = y(null), f = E(d, "modelValue"), m = r({
      get: () => Math.max(o.value, Math.min(u.value, f.value)),
      set: (e) => f.value = e
    }), o = r(() => t.min ?? _(t.data) ?? 0), u = r(() => t.max ?? A(t.data) ?? 100), i = y(0), s = y(0), H = r(() => {
      if (t.grid) {
        const e = t.gridNum, a = (u.value - o.value) / e, n = {};
        for (let g = 0; g <= e; g++) {
          const w = o.value + a * g;
          n[Math.round(w)] = {
            ...t.markStyle,
            label: t.prettify(w)
          };
        }
        return n;
      }
    });
    let c = null;
    const S = r(() => t.colors.length > 0 ? p().domain([o.value, u.value]).range(t.colors) : p().domain([o.value, u.value]).range(["#4facfe", "#00f2fe"])), x = r(() => {
      const e = i.value;
      return p().domain([o.value, u.value]).range([0, e]).clamp(!0);
    }), k = r(() => $().domain(x.value.domain()).thresholds(Math.floor(i.value / (t.barWidth + t.barGap)))(t.data)), C = r(() => {
      const e = s.value, a = A(k.value, (n) => n.length) ?? 0;
      return p().range([e, 0]).domain([0, a]);
    });
    function h() {
      if (!l.value) return;
      i.value = l.value.clientWidth, s.value = l.value.clientHeight;
      const e = j(l.value);
      e.selectAll("*").remove(), c = e.append("g").attr("class", "histogram"), c.selectAll("rect").data(k.value).enter().append("rect").attr("x", (a) => x.value(a.x0)).attr("y", (a) => C.value(a.length)).attr("width", t.barWidth).attr("height", (a) => s.value - C.value(a.length)).attr("rx", t.barRadius).attr("fill", (a) => z(a.x0));
    }
    function V() {
      c && c.selectAll("rect").attr("fill", (e) => z(e.x0));
    }
    b(f, () => {
      V();
    });
    function z(e) {
      return e < m.value ? S.value(e) : t.holderColor;
    }
    G(async () => {
      await N(), f.value = o.value, h();
    }), b(m, () => {
      V();
    }), b(
      () => [
        t.data,
        t.min,
        t.max,
        t.barWidth,
        t.barGap,
        t.barRadius,
        t.colors,
        t.holderColor,
        S.value
        // Watch processStyle backgroundColor
      ],
      () => {
        h();
      }
    );
    let v;
    G(() => {
      l.value && (i.value = l.value.clientWidth, s.value = l.value.clientHeight, v = new ResizeObserver(() => {
        var e, a;
        i.value = ((e = l.value) == null ? void 0 : e.clientWidth) ?? 0, s.value = ((a = l.value) == null ? void 0 : a.clientHeight) ?? 0, h();
      }), v.observe(l.value));
    }), U(() => {
      v && l.value && v.unobserve(l.value);
    });
    const B = r(() => `${t.histSliderGap}px`);
    return (e, a) => (M(), W("div", I, [
      (M(), W("svg", {
        ref_key: "svgElementRef",
        ref: l,
        class: "vue-histogram"
      }, null, 512)),
      q(D(T), {
        class: "vue-slider",
        modelValue: m.value,
        "onUpdate:modelValue": a[0] || (a[0] = (n) => m.value = n),
        min: o.value,
        max: u.value,
        step: e.step,
        "dot-size": e.handleSize,
        width: i.value,
        height: 16,
        marks: H.value,
        lazy: !1,
        "process-style": e.processStyle,
        "tooltip-style": e.tooltipStyle,
        tooltip: "always",
        "tooltip-placement": ["bottom"],
        "tooltip-formatter": e.prettify
      }, null, 8, ["modelValue", "min", "max", "step", "dot-size", "width", "marks", "process-style", "tooltip-style", "tooltip-formatter"])
    ]));
  }
});
export {
  Z as default
};
//# sourceMappingURL=vue3-histogram-slider.esm3.js.map
