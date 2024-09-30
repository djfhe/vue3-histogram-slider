import { openBlock as u, createElementBlock as p, normalizeClass as v, renderSlot as c, createElementVNode as x, normalizeStyle as g, toDisplayString as z, createCommentVNode as A, resolveComponent as C, mergeProps as m, Fragment as P, renderList as w, createBlock as H, withCtx as R, createVNode as N } from "vue";
(function() {
  try {
    if (typeof document < "u") {
      var s = document.createElement("style");
      s.appendChild(document.createTextNode('.vue-slider-dot{position:absolute;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;transform:translate(100%,-50%)}.vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;transform:translate(-50%)}.vue-slider-rtl .vue-slider-mark{transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;transform:translate(50%)}.vue-slider-ttb .vue-slider-mark,.vue-slider-btt .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-ttb .vue-slider-mark-step,.vue-slider-btt .vue-slider-mark-step{left:0}.vue-slider-ttb .vue-slider-mark-label,.vue-slider-btt .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;transform:translateY(50%)}.vue-slider-mark-step,.vue-slider-mark-label{position:absolute}.vue-slider-disabled{opacity:.5;cursor:not-allowed}.vue-slider-rail{background-color:#ccc;border-radius:15px}.vue-slider-process{background-color:#3498db;border-radius:15px}.vue-slider-mark{z-index:4}.vue-slider-mark:first-child .vue-slider-mark-step,.vue-slider-mark:last-child .vue-slider-mark-step{display:none}.vue-slider-mark-step{width:100%;height:100%;border-radius:50%;background-color:#00000029}.vue-slider-mark-label{font-size:14px;white-space:nowrap}.vue-slider-dot-handle{cursor:pointer;width:100%;height:100%;border-radius:50%;background-color:#fff;box-sizing:border-box;box-shadow:.5px .5px 2px 1px #00000052}.vue-slider-dot-handle-focus{box-shadow:0 0 1px 2px #3498db5c}.vue-slider-dot-handle-disabled{cursor:not-allowed;background-color:#ccc}.vue-slider-dot-tooltip-inner{font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border-color:#3498db;background-color:#3498db;box-sizing:content-box}.vue-slider-dot-tooltip-inner:after{content:"";position:absolute}.vue-slider-dot-tooltip-inner-top:after{top:100%;left:50%;transform:translate(-50%);height:0;width:0;border-color:transparent;border-style:solid;border-width:5px;border-top-color:inherit}.vue-slider-dot-tooltip-inner-bottom:after{bottom:100%;left:50%;transform:translate(-50%);height:0;width:0;border-color:transparent;border-style:solid;border-width:5px;border-bottom-color:inherit}.vue-slider-dot-tooltip-inner-left:after{left:100%;top:50%;transform:translateY(-50%);height:0;width:0;border-color:transparent;border-style:solid;border-width:5px;border-left-color:inherit}.vue-slider-dot-tooltip-inner-right:after{right:100%;top:50%;transform:translateY(-50%);height:0;width:0;border-color:transparent;border-style:solid;border-width:5px;border-right-color:inherit}.vue-slider-dot-tooltip-wrapper{opacity:0;transition:all .3s}.vue-slider-dot-tooltip-wrapper-show{opacity:1}.vue-slider{position:relative;box-sizing:content-box;-webkit-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}')), document.head.appendChild(s);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var T = Object.defineProperty, U = (s, t, e) => t in s ? T(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, n = (s, t, e) => (U(s, typeof t != "symbol" ? t + "" : t, e), e);
const E = (s, t) => {
  const e = s.__vccOpts || s;
  for (const [i, o] of t)
    e[i] = o;
  return e;
}, _ = {
  emits: ["drag-start"],
  props: {
    value: {
      type: [Number, String],
      // number | string
      default: 0
    },
    tooltip: {
      type: String,
      // 'none' | 'always' | 'focus' | 'hover' | 'active'
      required: !0
    },
    dotStyle: {
      type: Array,
      // ([key: string]: any)[]
      default: () => ({})
    },
    tooltipStyle: {
      type: Array,
      // ([key: string]: any)[]
      default: () => ({})
    },
    tooltipPlacement: {
      type: String,
      // 'top' | 'right' | 'bottom' | 'left'
      required: !0
    },
    tooltipFormatter: {
      type: [String, Array, Object, Function],
      default: void 0
    },
    focus: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    dotClasses() {
      return [
        "vue-slider-dot",
        {
          "vue-slider-dot-hover": this.tooltip === "hover" || this.tooltip === "active",
          "vue-slider-dot-disabled": this.disabled,
          "vue-slider-dot-focus": this.focus
        }
      ];
    },
    handleClasses() {
      return [
        "vue-slider-dot-handle",
        {
          "vue-slider-dot-handle-disabled": this.disabled,
          "vue-slider-dot-handle-focus": this.focus
        }
      ];
    },
    tooltipClasses() {
      return [
        "vue-slider-dot-tooltip",
        [`vue-slider-dot-tooltip-${this.tooltipPlacement}`],
        {
          "vue-slider-dot-tooltip-show": this.showTooltip
        }
      ];
    },
    tooltipInnerClasses() {
      return [
        "vue-slider-dot-tooltip-inner",
        [`vue-slider-dot-tooltip-inner-${this.tooltipPlacement}`],
        {
          "vue-slider-dot-tooltip-inner-disabled": this.disabled,
          "vue-slider-dot-tooltip-inner-focus": this.focus
        }
      ];
    },
    showTooltip() {
      switch (this.tooltip) {
        case "always":
          return !0;
        case "none":
          return !1;
        case "focus":
        case "active":
          return !!this.focus;
        default:
          return !1;
      }
    },
    tooltipValue() {
      return this.tooltipFormatter ? typeof this.tooltipFormatter == "string" ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value;
    }
  },
  methods: {
    dragStart(s) {
      if (this.disabled)
        return !1;
      this.$emit("drag-start");
    }
  }
}, q = ["aria-valuetext"], W = { class: "vue-slider-dot-tooltip-text" };
function Y(s, t, e, i, o, r) {
  return u(), p("div", {
    ref: "dot",
    class: v(r.dotClasses),
    "aria-valuetext": r.tooltipValue,
    onMousedown: t[0] || (t[0] = (...l) => r.dragStart && r.dragStart(...l)),
    onTouchstartPassive: t[1] || (t[1] = (...l) => r.dragStart && r.dragStart(...l))
  }, [
    c(s.$slots, "dot", {}, () => [
      x("div", {
        class: v(r.handleClasses),
        style: g(e.dotStyle)
      }, null, 6)
    ]),
    e.tooltip !== "none" ? (u(), p("div", {
      key: 0,
      class: v(r.tooltipClasses)
    }, [
      c(s.$slots, "tooltip", {}, () => [
        x("div", {
          class: v(r.tooltipInnerClasses),
          style: g(e.tooltipStyle)
        }, [
          x("span", W, z(r.tooltipValue), 1)
        ], 6)
      ])
    ], 2)) : A("", !0)
  ], 42, q);
}
const L = /* @__PURE__ */ E(_, [["render", Y]]), K = {
  props: {
    mark: {
      type: Object,
      // Mark
      required: !0
    },
    hideLabel: {
      type: Boolean,
      default: !1
    },
    stepStyle: {
      type: Object,
      // [key: string]: any
      default: void 0
    },
    stepActiveStyle: {
      type: Object,
      // [key: string]: any
      default: void 0
    },
    labelStyle: {
      type: Object,
      // [key: string]: any
      default: void 0
    },
    labelActiveStyle: {
      type: Object,
      // [key: string]: any
      default: void 0
    }
  },
  computed: {
    marksClasses() {
      return [
        "vue-slider-mark",
        {
          "vue-slider-mark-active": this.mark.active
        }
      ];
    },
    stepClasses() {
      return [
        "vue-slider-mark-step",
        {
          "vue-slider-mark-step-active": this.mark.active
        }
      ];
    },
    labelClasses() {
      return [
        "vue-slider-mark-label",
        {
          "vue-slider-mark-label-active": this.mark.active
        }
      ];
    }
  },
  methods: {
    labelClickHandle(s) {
      s.stopPropagation(), this.$emit("pressLabel", this.mark.pos);
    }
  }
};
function X(s, t, e, i, o, r) {
  return u(), p("div", {
    class: v(r.marksClasses)
  }, [
    c(s.$slots, "step", {}, () => [
      x("div", {
        class: v(r.stepClasses),
        style: g([
          e.stepStyle,
          e.mark.style,
          e.mark.active ? e.stepActiveStyle : null,
          e.mark.active ? e.mark.activeStyle : null
        ])
      }, null, 6)
    ]),
    e.hideLabel ? A("", !0) : c(s.$slots, "label", { key: 0 }, () => [
      x("div", {
        class: v(r.labelClasses),
        style: g([
          e.labelStyle,
          e.mark.labelStyle,
          e.mark.active ? e.labelActiveStyle : null,
          e.mark.active ? e.mark.labelActiveStyle : null
        ]),
        onClick: t[0] || (t[0] = (...l) => r.labelClickHandle && r.labelClickHandle(...l))
      }, z(e.mark.label), 7)
    ])
  ], 2);
}
const j = /* @__PURE__ */ E(K, [["render", X]]), D = (s) => typeof s == "number" ? `${s}px` : s, G = (s) => {
  const t = document.documentElement, e = document.body, i = s.getBoundingClientRect();
  return {
    y: i.top + (window.pageYOffset || t.scrollTop) - (t.clientTop || e.clientTop || 0),
    x: i.left + (window.pageXOffset || t.scrollLeft) - (t.clientLeft || e.clientLeft || 0)
  };
}, J = (s, t, e) => {
  const i = "targetTouches" in s ? s.targetTouches[0] : s, o = G(t), r = {
    x: i.pageX - o.x,
    y: i.pageY - o.y
  };
  return {
    x: e ? t.offsetWidth - r.x : r.x,
    y: e ? t.offsetHeight - r.y : r.y
  };
}, Q = (s, t) => {
  if (t.hook) {
    const e = t.hook(s);
    if (typeof e == "function")
      return e;
    if (!e)
      return null;
  }
  switch (s.keyCode) {
    case 38:
      return (e) => t.direction === "ttb" ? e - 1 : e + 1;
    case 39:
      return (e) => t.direction === "rtl" ? e - 1 : e + 1;
    case 40:
      return (e) => t.direction === "ttb" ? e + 1 : e - 1;
    case 37:
      return (e) => t.direction === "rtl" ? e + 1 : e - 1;
    case 35:
      return () => t.max;
    case 36:
      return () => t.min;
    case 33:
      return (e) => e + 10;
    case 34:
      return (e) => e - 10;
    default:
      return null;
  }
};
class f {
  constructor(t) {
    n(this, "num"), this.num = t;
  }
  decimal(t, e) {
    const i = this.num, o = this.getDecimalLen(i), r = this.getDecimalLen(t);
    let l = 0;
    switch (e) {
      case "+":
        l = this.getExponent(o, r), this.num = (this.safeRoundUp(i, l) + this.safeRoundUp(t, l)) / l;
        break;
      case "-":
        l = this.getExponent(o, r), this.num = (this.safeRoundUp(i, l) - this.safeRoundUp(t, l)) / l;
        break;
      case "*":
        this.num = this.safeRoundUp(
          this.safeRoundUp(i, this.getExponent(o)),
          this.safeRoundUp(t, this.getExponent(r))
        ) / this.getExponent(o + r);
        break;
      case "/":
        l = this.getExponent(o, r), this.num = this.safeRoundUp(i, l) / this.safeRoundUp(t, l);
        break;
      case "%":
        l = this.getExponent(o, r), this.num = this.safeRoundUp(i, l) % this.safeRoundUp(t, l) / l;
        break;
    }
    return this;
  }
  plus(t) {
    return this.decimal(t, "+");
  }
  minus(t) {
    return this.decimal(t, "-");
  }
  multiply(t) {
    return this.decimal(t, "*");
  }
  divide(t) {
    return this.decimal(t, "/");
  }
  remainder(t) {
    return this.decimal(t, "%");
  }
  toNumber() {
    return this.num;
  }
  getDecimalLen(t) {
    const e = `${t}`.split("e");
    return (`${e[0]}`.split(".")[1] || "").length - (e[1] ? +e[1] : 0);
  }
  getExponent(t, e) {
    return Math.pow(10, e !== void 0 ? Math.max(t, e) : t);
  }
  // fix: 9999999.99995 * 100000 = 999999999994.9999
  safeRoundUp(t, e) {
    return Math.round(t * e);
  }
}
const Z = {
  1: 'The type of the "value" is illegal',
  2: 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"',
  3: 'The "value" must be greater than or equal to the "min".',
  4: 'The "value" must be less than or equal to the "max".',
  5: 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'
};
class tt {
  constructor(t) {
    n(this, "dotsPos", []), n(this, "dotsValue", []), n(this, "data"), n(this, "enableCross"), n(this, "fixed"), n(this, "max"), n(this, "min"), n(this, "interval"), n(this, "minRange"), n(this, "maxRange"), n(this, "order"), n(this, "marks"), n(this, "included"), n(this, "process"), n(this, "adsorb"), n(this, "dotOptions"), n(this, "onError"), n(this, "cacheRangeDir", {}), this.data = t.data, this.max = t.max, this.min = t.min, this.interval = t.interval, this.order = t.order, this.marks = t.marks, this.included = t.included, this.process = t.process, this.adsorb = t.adsorb, this.dotOptions = t.dotOptions, this.onError = t.onError, this.order ? (this.minRange = t.minRange || 0, this.maxRange = t.maxRange || 0, this.enableCross = t.enableCross, this.fixed = t.fixed) : ((t.minRange || t.maxRange || !t.enableCross || t.fixed) && this.emitError(
      5
      /* ORDER */
    ), this.minRange = 0, this.maxRange = 0, this.enableCross = !0, this.fixed = !1), this.setValue(t.value);
  }
  setValue(t) {
    this.setDotsValue(
      Array.isArray(t) ? this.order ? [...t].sort((e, i) => this.getIndexByValue(e) - this.getIndexByValue(i)) : [...t] : [t],
      !0
    );
  }
  setDotsValue(t, e) {
    this.dotsValue = t, e && this.syncDotsPos();
  }
  // Set the slider position
  setDotsPos(t) {
    const e = this.order ? [...t].sort((i, o) => i - o) : t;
    this.dotsPos = e, this.setDotsValue(
      e.map((i) => this.getValueByPos(i)),
      this.adsorb
    );
  }
  // Get value by position
  getValueByPos(t) {
    let e = this.parsePos(t);
    if (this.included) {
      let i = 100;
      this.markList.forEach((o) => {
        const r = Math.abs(o.pos - t);
        r < i && (i = r, e = o.value);
      });
    }
    return e;
  }
  // Sync slider position
  syncDotsPos() {
    this.dotsPos = this.dotsValue.map((t) => this.parseValue(t));
  }
  /**
   * Get all the marks
   *
   * @readonly
   * @type {Mark[]}
   * @memberof Control
   */
  get markList() {
    if (!this.marks)
      return [];
    const t = (e, i) => {
      const o = this.parseValue(e);
      return {
        pos: o,
        value: e,
        label: e,
        active: this.isActiveByPos(o),
        ...i
      };
    };
    return this.marks === !0 ? this.getValues().map((e) => t(e)) : Object.prototype.toString.call(this.marks) === "[object Object]" ? Object.keys(this.marks).sort((e, i) => +e - +i).map((e) => {
      const i = this.marks[e];
      return t(e, typeof i != "string" ? i : { label: i });
    }) : Array.isArray(this.marks) ? this.marks.map((e) => t(e)) : typeof this.marks == "function" ? this.getValues().map((e) => ({ value: e, result: this.marks(e) })).filter(({ result: e }) => !!e).map(({ value: e, result: i }) => t(e, i)) : [];
  }
  /**
   * Get the most recent slider index by position
   *
   * @param {number} pos
   * @returns {number}
   * @memberof Control
   */
  getRecentDot(t) {
    const e = this.dotsPos.filter((i, o) => !(this.getDotOption(o) && this.getDotOption(o).disabled)).map((i) => Math.abs(i - t));
    return e.indexOf(Math.min(...e));
  }
  /**
   * Get index by value
   *
   * @param {Value} value
   * @returns {number}
   * @memberof Control
   */
  getIndexByValue(t) {
    return this.data ? this.data.indexOf(t) : new f(+t).minus(this.min).divide(this.interval).toNumber();
  }
  /**
   * Get value by index
   *
   * @param {index} number
   * @returns {Value}
   * @memberof Control
   */
  getValueByIndex(t) {
    return t < 0 ? t = 0 : t > this.total && (t = this.total), this.data ? this.data[t] : new f(t).multiply(this.interval).plus(this.min).toNumber();
  }
  /**
   * Set the position of a single slider
   *
   * @param {number} pos
   * @param {number} index
   */
  setDotPos(t, e) {
    t = this.getValidPos(t, e).pos;
    const i = t - this.dotsPos[e];
    if (!i)
      return;
    let o = new Array(this.dotsPos.length);
    this.fixed ? o = this.getFixedChangePosArr(i, e) : this.minRange || this.maxRange ? o = this.getLimitRangeChangePosArr(t, i, e) : o[e] = i, this.setDotsPos(this.dotsPos.map((r, l) => r + (o[l] || 0)));
  }
  /**
   * In fixed mode, get the position of all slider changes
   *
   * @param {number} changePos Change distance of a single slider
   * @param {number} index slider index
   * @returns {DotsPosChangeArray}
   * @memberof Control
   */
  getFixedChangePosArr(t, e) {
    return this.dotsPos.forEach((i, o) => {
      if (o !== e) {
        const { pos: r, inRange: l } = this.getValidPos(i + t, o);
        l || (t = Math.min(Math.abs(r - i), Math.abs(t)) * (t < 0 ? -1 : 1));
      }
    }), this.dotsPos.map((i) => t);
  }
  /**
   * In minRange/maxRange mode, get the position of all slider changes
   *
   * @param {number} pos position of a single slider
   * @param {number} changePos Change distance of a single slider
   * @param {number} index slider index
   * @returns {DotsPosChangeArray}
   * @memberof Control
   */
  getLimitRangeChangePosArr(t, e, i) {
    const o = [{ index: i, changePos: e }], r = e;
    return [this.minRange, this.maxRange].forEach((l, k) => {
      if (!l)
        return !1;
      const a = k === 0, h = e > 0;
      let y = 0;
      a ? y = h ? 1 : -1 : y = h ? -1 : 1;
      const F = (V, M) => {
        const B = Math.abs(V - M);
        return a ? B < this.minRangeDir : B > this.maxRangeDir;
      };
      let b = i + y, S = this.dotsPos[b], $ = t;
      for (; this.isPos(S) && F(S, $); ) {
        const { pos: V } = this.getValidPos(S + r, b);
        o.push({
          index: b,
          changePos: V - S
        }), b = b + y, $ = V, S = this.dotsPos[b];
      }
    }), this.dotsPos.map((l, k) => {
      const a = o.filter((h) => h.index === k);
      return a.length ? a[0].changePos : 0;
    });
  }
  isPos(t) {
    return typeof t == "number";
  }
  /**
   * Get a valid position by pos
   *
   * @param {number} pos
   * @param {number} index
   * @returns {{ pos: number, inRange: boolean }}
   */
  getValidPos(t, e) {
    const i = this.valuePosRange[e];
    let o = !0;
    return t < i[0] ? (t = i[0], o = !1) : t > i[1] && (t = i[1], o = !1), {
      pos: t,
      inRange: o
    };
  }
  /**
   * Calculate the position of the slider by value
   *
   * @param {Value} val
   * @returns {number}
   */
  parseValue(t) {
    if (this.data)
      t = this.data.indexOf(t);
    else if (typeof t == "number" || typeof t == "string") {
      if (t = +t, t < this.min)
        return this.emitError(
          3
          /* MIN */
        ), 0;
      if (t > this.max)
        return this.emitError(
          4
          /* MAX */
        ), 0;
      if (typeof t != "number" || t !== t)
        return this.emitError(
          1
          /* VALUE */
        ), 0;
      t = new f(t).minus(this.min).divide(this.interval).toNumber();
    }
    const e = new f(t).multiply(this.gap).toNumber();
    return e < 0 ? 0 : e > 100 ? 100 : e;
  }
  /**
   * Calculate the value by position
   *
   * @param {number} pos
   * @returns {Value}
   * @memberof Control
   */
  parsePos(t) {
    const e = Math.round(t / this.gap);
    return this.getValueByIndex(e);
  }
  /**
   * Determine if the location is active
   *
   * @param {number} pos
   * @returns {boolean}
   * @memberof Control
   */
  isActiveByPos(t) {
    return this.processArray.some(([e, i]) => t >= e && t <= i);
  }
  /**
   * Get each value
   *
   * @returns {Value[]}
   * @memberof Control
   */
  getValues() {
    if (this.data)
      return this.data;
    {
      const t = [];
      for (let e = 0; e <= this.total; e++)
        t.push(new f(e).multiply(this.interval).plus(this.min).toNumber());
      return t;
    }
  }
  /**
   * Calculate the distance of the range
   * @param range number
   */
  getRangeDir(t) {
    return t ? new f(t).divide(
      new f(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()
    ).multiply(100).toNumber() : 100;
  }
  emitError(t) {
    this.onError && this.onError(t, Z[t]);
  }
  get processArray() {
    if (this.process) {
      if (typeof this.process == "function")
        return this.process(this.dotsPos);
      if (this.dotsPos.length === 1)
        return [[0, this.dotsPos[0]]];
      if (this.dotsPos.length > 1)
        return [[Math.min(...this.dotsPos), Math.max(...this.dotsPos)]];
    }
    return [];
  }
  /**
   * The total number of values
   *
   * @type {number}
   * @memberof Control
   */
  get total() {
    let t = 0;
    return this.data ? t = this.data.length - 1 : t = new f(this.max).minus(this.min).divide(this.interval).toNumber(), t - Math.floor(t) !== 0 ? (this.emitError(
      2
      /* INTERVAL */
    ), 0) : t;
  }
  // Distance between each value
  get gap() {
    return 100 / this.total;
  }
  // The minimum distance between the two sliders
  get minRangeDir() {
    return this.cacheRangeDir[this.minRange] ? this.cacheRangeDir[this.minRange] : this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange);
  }
  // Maximum distance between the two sliders
  get maxRangeDir() {
    return this.cacheRangeDir[this.maxRange] ? this.cacheRangeDir[this.maxRange] : this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange);
  }
  getDotOption(t) {
    return Array.isArray(this.dotOptions) ? this.dotOptions[t] : this.dotOptions;
  }
  getDotRange(t, e, i) {
    if (!this.dotOptions)
      return i;
    const o = this.getDotOption(t);
    return o && o[e] !== void 0 ? this.parseValue(o[e]) : i;
  }
  /**
   * Sliding range of each slider
   *
   * @type {Array<[number, number]>}
   * @memberof Control
   */
  get valuePosRange() {
    const t = this.dotsPos, e = [];
    return t.forEach((i, o) => {
      e.push([
        Math.max(
          this.minRange ? this.minRangeDir * o : 0,
          this.enableCross ? 0 : t[o - 1] || 0,
          this.getDotRange(o, "min", 0)
        ),
        Math.min(
          this.minRange ? 100 - this.minRangeDir * (t.length - 1 - o) : 100,
          this.enableCross ? 100 : t[o + 1] || 100,
          this.getDotRange(o, "max", 100)
        )
      ]);
    }), e;
  }
  get dotsIndex() {
    return this.dotsValue.map((t) => this.getIndexByValue(t));
  }
}
class et {
  constructor(t) {
    n(this, "map"), n(this, "states", 0), this.map = t;
  }
  add(t) {
    this.states |= t;
  }
  delete(t) {
    this.states &= ~t;
  }
  toggle(t) {
    this.has(t) ? this.delete(t) : this.add(t);
  }
  has(t) {
    return !!(this.states & t);
  }
}
const O = 4, d = {
  // StateMap
  None: 0,
  Drag: 2,
  Focus: 4
}, st = {
  emits: ["update:modelValue", "change", "drag-start", "drag-end", "dragging", "error"],
  components: {
    VueSliderDot: L,
    VueSliderMark: j
  },
  props: {
    modelValue: {
      type: [Number, String, Array],
      default: 0
    },
    silent: {
      type: Boolean,
      default: !1
    },
    direction: {
      type: String,
      default: "ltr",
      validator: (s) => ["ltr", "rtl", "ttb", "btt"].indexOf(s) > -1
    },
    width: {
      type: [Number, String],
      default: void 0
    },
    height: {
      type: [Number, String],
      default: void 0
    },
    dotSize: {
      type: [Array, Number],
      // The size of the slider, optional [width, height] | size
      default: 14
    },
    contained: {
      type: Boolean,
      default: !1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    interval: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clickable: {
      type: Boolean,
      default: !0
    },
    dragOnClick: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: Number,
      default: 0.5
    },
    data: {
      type: [Object, Array],
      // Value[] | object[] | DataObject
      default: void 0
    },
    dataValue: {
      type: String,
      default: "value"
    },
    dataLabel: {
      type: String,
      default: "label"
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: String,
      default: "active",
      validator: (s) => ["none", "always", "focus", "hover", "active"].indexOf(s) > -1
    },
    tooltipPlacement: {
      type: [String, Array],
      default: void 0,
      validator: (s) => (Array.isArray(s) ? s : [s]).every(
        (t) => ["top", "right", "bottom", "left"].indexOf(t) > -1
      )
    },
    tooltipFormatter: {
      type: [String, Array, Function],
      default: ""
    },
    useKeyboard: {
      type: Boolean,
      default: !0
    },
    keydownHook: {
      type: [Boolean, Function],
      default: void 0
    },
    enableCross: {
      type: Boolean,
      default: !0
    },
    fixed: {
      type: Boolean,
      default: !1
    },
    order: {
      type: Boolean,
      default: !0
    },
    minRange: {
      type: Number,
      default: void 0
    },
    maxRange: {
      type: Number,
      default: void 0
    },
    marks: {
      type: [Boolean, Object, Array, Function],
      default: !1
    },
    process: {
      type: [Boolean, Function],
      default: !0
    },
    zoom: {
      type: [Number],
      default: void 0
    },
    included: {
      type: [Boolean],
      default: !1
    },
    adsorb: {
      type: [Boolean],
      default: !1
    },
    hideLabel: {
      type: [Boolean],
      default: !1
    },
    dotOptions: {
      type: Object,
      default: void 0
    },
    dotAttrs: {
      type: Object,
      default: void 0
    },
    railStyle: {
      type: Object,
      default: null
    },
    processStyle: {
      type: Object,
      default: null
    },
    dotStyle: {
      type: Object,
      default: null
    },
    tooltipStyle: {
      type: Object,
      default: null
    },
    stepStyle: {
      type: Object,
      default: null
    },
    stepActiveStyle: {
      type: Object,
      default: null
    },
    labelStyle: {
      type: Object,
      default: null
    },
    labelActiveStyle: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      control: null,
      // Control instance
      states: new et(d),
      scale: 1,
      focusDotIndex: 0
    };
  },
  computed: {
    tailSize() {
      return D((this.isHorizontal ? this.height : this.width) || O);
    },
    containerClasses() {
      return [
        "vue-slider",
        [`vue-slider-${this.direction}`],
        {
          "vue-slider-disabled": this.disabled
        }
      ];
    },
    containerStyles() {
      const [s, t] = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], e = this.width ? D(this.width) : this.isHorizontal ? "auto" : D(O), i = this.height ? D(this.height) : this.isHorizontal ? D(O) : "auto";
      return {
        padding: this.contained ? `${t / 2}px ${s / 2}px` : this.isHorizontal ? `${t / 2}px 0` : `0 ${s / 2}px`,
        width: e,
        height: i
      };
    },
    processArray() {
      return this.control.processArray.map(([s, t, e], i) => {
        s > t && ([s, t] = [t, s]);
        const o = this.isHorizontal ? "width" : "height";
        return {
          start: s,
          end: t,
          index: i,
          style: {
            [this.isHorizontal ? "height" : "width"]: "100%",
            [this.isHorizontal ? "top" : "left"]: 0,
            [this.mainDirection]: `${s}%`,
            [o]: `${t - s}%`,
            transitionProperty: `${o},${this.mainDirection}`,
            transitionDuration: `${this.animateTime}s`,
            ...this.processStyle,
            ...e
          }
        };
      });
    },
    dotBaseStyle() {
      const [s, t] = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize];
      let e;
      return this.isHorizontal ? e = {
        transform: `translate(${this.isReverse ? "50%" : "-50%"}, -50%)`,
        "-WebkitTransform": `translate(${this.isReverse ? "50%" : "-50%"}, -50%)`,
        top: "50%",
        [this.direction === "ltr" ? "left" : "right"]: "0"
      } : e = {
        transform: `translate(-50%, ${this.isReverse ? "50%" : "-50%"})`,
        "-WebkitTransform": `translate(-50%, ${this.isReverse ? "50%" : "-50%"})`,
        left: "50%",
        [this.direction === "btt" ? "bottom" : "top"]: "0"
      }, {
        width: `${s}px`,
        height: `${t}px`,
        ...e
      };
    },
    mainDirection() {
      switch (this.direction) {
        case "ltr":
          return "left";
        case "rtl":
          return "right";
        case "btt":
          return "bottom";
        case "ttb":
          return "top";
      }
    },
    isHorizontal() {
      return this.direction === "ltr" || this.direction === "rtl";
    },
    isReverse() {
      return this.direction === "rtl" || this.direction === "btt";
    },
    tooltipDirections() {
      const s = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
      return Array.isArray(s) ? s : this.dots.map(() => s);
    },
    dots() {
      return this.control.dotsPos.map((s, t) => ({
        pos: s,
        index: t,
        value: this.control.dotsValue[t],
        focus: this.states.has(d.Focus) && this.focusDotIndex === t,
        disabled: this.disabled,
        style: this.dotStyle,
        ...(Array.isArray(this.dotOptions) ? this.dotOptions[t] : this.dotOptions) || {}
      }));
    },
    animateTime() {
      return this.states.has(d.Drag) ? 0 : this.duration;
    },
    canSort() {
      return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
    },
    sliderData() {
      return this.isObjectArrayData(this.data) ? this.data.map((s) => s[this.dataValue]) : this.isObjectData(this.data) ? Object.keys(this.data) : this.data;
    },
    sliderMarks() {
      if (this.marks)
        return this.marks;
      if (this.isObjectArrayData(this.data))
        return (s) => {
          const t = { label: s };
          return this.data.some((e) => e[this.dataValue] === s ? (t.label = e[this.dataLabel], !0) : !1), t;
        };
      if (this.isObjectData(this.data))
        return this.data;
    },
    sliderTooltipFormatter() {
      if (this.tooltipFormatter)
        return this.tooltipFormatter;
      if (this.isObjectArrayData(this.data))
        return (s) => {
          let t = "" + s;
          return this.data.some((e) => e[this.dataValue] === s ? (t = e[this.dataLabel], !0) : !1), t;
        };
      if (this.isObjectData(this.data)) {
        const s = this.data;
        return (t) => s[t];
      }
    },
    // Slider value and component internal value are inconsistent
    isNotSync() {
      const s = this.control.dotsValue;
      return Array.isArray(this.modelValue) ? this.modelValue.length !== s.length || this.modelValue.some((t, e) => t !== s[e]) : this.modelValue !== s[0];
    },
    /**
     * Get the drag range of the slider
     *
     * @private
     * @param {number} index slider index
     * @returns {[number, number]} range [start, end]
     * @memberof VueSlider
     */
    dragRange() {
      const s = this.dots[this.focusDotIndex - 1], t = this.dots[this.focusDotIndex + 1];
      return [s ? s.pos : -1 / 0, t ? t.pos : 1 / 0];
    }
  },
  created() {
    this.initControl();
  },
  mounted() {
    this.bindEvent();
  },
  beforeUnmount() {
    this.unbindEvent();
  },
  methods: {
    isObjectData(s) {
      return !!s && Object.prototype.toString.call(s) === "[object Object]";
    },
    isObjectArrayData(s) {
      return !!s && Array.isArray(s) && s.length > 0 && typeof s[0] == "object";
    },
    bindEvent() {
      document.addEventListener("touchmove", this.dragMove, { passive: !1 }), document.addEventListener("touchend", this.dragEnd, { passive: !1 }), document.addEventListener("mousedown", this.blurHandle), document.addEventListener("mousemove", this.dragMove, { passive: !1 }), document.addEventListener("mouseup", this.dragEnd), document.addEventListener("mouseleave", this.dragEnd), document.addEventListener("keydown", this.keydownHandle);
    },
    unbindEvent() {
      document.removeEventListener("touchmove", this.dragMove), document.removeEventListener("touchend", this.dragEnd), document.removeEventListener("mousedown", this.blurHandle), document.removeEventListener("mousemove", this.dragMove), document.removeEventListener("mouseup", this.dragEnd), document.removeEventListener("mouseleave", this.dragEnd), document.removeEventListener("keydown", this.keydownHandle);
    },
    setScale() {
      const s = new f(
        Math.floor(this.isHorizontal ? this.$refs.rail.offsetWidth : this.$refs.rail.offsetHeight)
      );
      this.zoom !== void 0 && s.multiply(this.zoom), s.divide(100), this.scale = s.toNumber();
    },
    initControl() {
      this.control = new tt({
        value: this.modelValue,
        data: this.sliderData,
        enableCross: this.enableCross,
        fixed: this.fixed,
        max: this.max,
        min: this.min,
        interval: this.interval,
        minRange: this.minRange,
        maxRange: this.maxRange,
        order: this.order,
        marks: this.sliderMarks,
        included: this.included,
        process: this.process,
        adsorb: this.adsorb,
        dotOptions: this.dotOptions,
        onError: this.emitError
      }), this.syncValueByPos(), [
        "data",
        "enableCross",
        "fixed",
        "max",
        "min",
        "interval",
        "minRange",
        "maxRange",
        "order",
        "marks",
        "process",
        "adsorb",
        "included",
        "dotOptions"
      ].forEach((s) => {
        this.$watch(s, (t) => {
          if (s === "data" && Array.isArray(this.control.data) && Array.isArray(t) && this.control.data.length === t.length && t.every((e, i) => e === this.control.data[i]))
            return !1;
          switch (s) {
            case "data":
            case "dataLabel":
            case "dataValue":
              this.control.data = this.sliderData;
              break;
            case "mark":
              this.control.marks = this.sliderMarks;
              break;
            default:
              this.control[s] = t;
          }
          ["data", "max", "min", "interval"].indexOf(s) > -1 && this.control.syncDotsPos();
        });
      });
    },
    syncValueByPos() {
      const s = this.control.dotsValue;
      if (this.isDiff(s, Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue])) {
        const t = s.length === 1 ? s[0] : [...s];
        this.$emit("change", t, this.focusDotIndex), this.$emit("update:modelValue", t, this.focusDotIndex);
      }
    },
    isDiff(s, t) {
      return s.length !== t.length || s.some((e, i) => e !== t[i]);
    },
    emitError(s, t) {
      this.silent || console.error(`[VueSlider error]: ${t}`), this.$emit("error", s, t);
    },
    dragStartOnProcess(s) {
      if (this.dragOnClick) {
        this.setScale();
        const t = this.getPosByEvent(s), e = this.control.getRecentDot(t);
        if (this.dots[e].disabled)
          return;
        this.dragStart(e), this.control.setDotPos(t, this.focusDotIndex), this.lazy || this.syncValueByPos();
      }
    },
    dragStart(s) {
      this.focusDotIndex = s, this.setScale(), this.states.add(d.Drag), this.states.add(d.Focus), this.$emit("drag-start", this.focusDotIndex);
    },
    dragMove(s) {
      if (!this.states.has(d.Drag))
        return !1;
      s.preventDefault();
      const t = this.getPosByEvent(s);
      this.isCrossDot(t), this.control.setDotPos(t, this.focusDotIndex), this.lazy || this.syncValueByPos();
      const e = this.control.dotsValue;
      this.$emit("dragging", e.length === 1 ? e[0] : [...e], this.focusDotIndex);
    },
    // If the component is sorted, then when the slider crosses, toggle the currently selected slider index
    isCrossDot(s) {
      if (this.canSort) {
        const t = this.focusDotIndex;
        let e = s;
        if (e > this.dragRange[1] ? (e = this.dragRange[1], this.focusDotIndex++) : e < this.dragRange[0] && (e = this.dragRange[0], this.focusDotIndex--), t !== this.focusDotIndex) {
          const i = this.$refs[`dot-${this.focusDotIndex}`];
          i && i.$el && i.$el.focus(), this.control.setDotPos(e, t);
        }
      }
    },
    dragEnd(s) {
      if (!this.states.has(d.Drag))
        return !1;
      setTimeout(() => {
        this.lazy && this.syncValueByPos(), this.included && this.isNotSync ? this.control.setValue(this.modelValue) : this.control.syncDotsPos(), this.states.delete(d.Drag), (!this.useKeyboard || "targetTouches" in s) && this.states.delete(d.Focus), this.$emit("drag-end", this.focusDotIndex);
      });
    },
    blurHandle(s) {
      if (!this.states.has(d.Focus) || !this.$refs.container || this.$refs.container.contains(s.target))
        return !1;
      this.states.delete(d.Focus);
    },
    clickHandle(s) {
      if (!this.clickable || this.disabled)
        return !1;
      if (this.states.has(d.Drag))
        return;
      this.setScale();
      const t = this.getPosByEvent(s);
      this.setValueByPos(t);
    },
    focus(s = 0) {
      this.states.add(d.Focus), this.focusDotIndex = s;
    },
    blur() {
      this.states.delete(d.Focus);
    },
    getValue() {
      const s = this.control.dotsValue;
      return s.length === 1 ? s[0] : s;
    },
    getIndex() {
      const s = this.control.dotsIndex;
      return s.length === 1 ? s[0] : s;
    },
    setValue(s) {
      this.control.setValue(Array.isArray(s) ? [...s] : [s]), this.syncValueByPos();
    },
    setIndex(s) {
      const t = Array.isArray(s) ? s.map((e) => this.control.getValueByIndex(e)) : this.control.getValueByIndex(s);
      this.setValue(t);
    },
    setValueByPos(s) {
      const t = this.control.getRecentDot(s);
      if (this.disabled || this.dots[t].disabled)
        return !1;
      this.focusDotIndex = t, this.control.setDotPos(s, t), this.syncValueByPos(), this.useKeyboard && this.states.add(d.Focus), setTimeout(() => {
        this.included && this.isNotSync ? this.control.setValue(this.modelValue) : this.control.syncDotsPos();
      });
    },
    keydownHandle(s) {
      if (!this.useKeyboard || !this.states.has(d.Focus))
        return !1;
      const t = this.included && this.marks, e = Q(s, {
        direction: this.direction,
        max: t ? this.control.markList.length - 1 : this.control.total,
        min: 0,
        hook: this.keydownHook
      });
      if (e) {
        s.preventDefault();
        let i = -1, o = 0;
        t ? (this.control.markList.some((r, l) => r.value === this.control.dotsValue[this.focusDotIndex] ? (i = e(l), !0) : !1), i < 0 ? i = 0 : i > this.control.markList.length - 1 && (i = this.control.markList.length - 1), o = this.control.markList[i].pos) : (i = e(
          this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])
        ), o = this.control.parseValue(this.control.getValueByIndex(i))), this.isCrossDot(o), this.control.setDotPos(o, this.focusDotIndex), this.syncValueByPos();
      }
    },
    getPosByEvent(s) {
      return J(s, this.$refs.rail, this.isReverse)[this.isHorizontal ? "x" : "y"] / this.scale;
    }
  },
  watch: {
    modelValue: {
      handler() {
        this.control && !this.states.has(d.Drag) && this.isNotSync && (this.control.setValue(this.modelValue), this.syncValueByPos());
      },
      deep: !0
    }
  }
}, it = {
  key: 0,
  class: "vue-slider-marks"
};
function rt(s, t, e, i, o, r) {
  const l = C("VueSliderMark"), k = C("VueSliderDot");
  return u(), p("div", m({
    ref: "container",
    class: r.containerClasses,
    style: r.containerStyles,
    onClick: t[0] || (t[0] = (...a) => r.clickHandle && r.clickHandle(...a)),
    onTouchstartPassive: t[1] || (t[1] = (...a) => r.dragStartOnProcess && r.dragStartOnProcess(...a)),
    onMousedown: t[2] || (t[2] = (...a) => r.dragStartOnProcess && r.dragStartOnProcess(...a))
  }, s.$attrs), [
    x("div", {
      ref: "rail",
      class: "vue-slider-rail",
      style: g(e.railStyle)
    }, [
      (u(!0), p(P, null, w(r.processArray, (a, h) => c(s.$slots, "process", m({ ref_for: !0 }, { ...a }), () => [
        (u(), p("div", {
          class: "vue-slider-process",
          key: `process-${h}`,
          style: g(a.style)
        }, null, 4))
      ])), 256)),
      r.sliderMarks ? (u(), p("div", it, [
        (u(!0), p(P, null, w(o.control.markList, (a, h) => c(s.$slots, "mark", m({ ref_for: !0 }, { ...a }), () => [
          (u(), H(l, {
            key: `mark-${h}`,
            mark: a,
            hideLabel: e.hideLabel,
            style: g({
              [r.isHorizontal ? "height" : "width"]: "100%",
              [r.isHorizontal ? "width" : "height"]: r.tailSize,
              [r.mainDirection]: `${a.pos}%`
            }),
            stepStyle: e.stepStyle,
            stepActiveStyle: e.stepActiveStyle,
            labelStyle: e.labelStyle,
            labelActiveStyle: e.labelActiveStyle,
            onPressLabel: (y) => e.clickable && r.setValueByPos(y)
          }, {
            step: R(() => [
              c(s.$slots, "step", m({ ref_for: !0 }, { ...a }))
            ]),
            label: R(() => [
              c(s.$slots, "label", m({ ref_for: !0 }, { ...a }))
            ]),
            _: 2
          }, 1032, ["mark", "hideLabel", "style", "stepStyle", "stepActiveStyle", "labelStyle", "labelActiveStyle", "onPressLabel"]))
        ])), 256))
      ])) : A("", !0),
      (u(!0), p(P, null, w(r.dots, (a, h) => (u(), p(P, null, [
        N(k, m({
          ref_for: !0,
          ref: `dot-${h}`,
          value: a.value,
          disabled: a.disabled,
          focus: a.focus,
          "dot-style": [
            a.style,
            a.disabled ? a.disabledStyle : null,
            a.focus ? a.focusStyle : null
          ],
          tooltip: a.tooltip || e.tooltip,
          "tooltip-style": [
            e.tooltipStyle,
            a.tooltipStyle,
            a.disabled ? a.tooltipDisabledStyle : null,
            a.focus ? a.tooltipFocusStyle : null
          ],
          "tooltip-formatter": Array.isArray(r.sliderTooltipFormatter) ? r.sliderTooltipFormatter[h] : r.sliderTooltipFormatter,
          "tooltip-placement": r.tooltipDirections[h],
          style: [
            r.dotBaseStyle,
            {
              [r.mainDirection]: `${a.pos}%`,
              transition: `${r.mainDirection} ${r.animateTime}s`
            }
          ],
          "onDrag-start": () => r.dragStart(h),
          role: "slider",
          "aria-valuenow": a.value,
          "aria-valuemin": this.min,
          "aria-valuemax": this.max,
          "aria-orientation": this.isHorizontal ? "horizontal" : "vertical",
          tabindex: "0",
          nativeOnFocus: () => !a.disabled && r.focus(h),
          nativeOnBlur: () => r.blur()
        }, { ...e.dotAttrs }), {
          dot: R(() => [
            c(s.$slots, "dot", m({ ref_for: !0 }, { ...a }))
          ]),
          tooltip: R(() => [
            c(s.$slots, "tooltip", m({ ref_for: !0 }, { ...a }))
          ]),
          _: 2
        }, 1040, ["value", "disabled", "focus", "dot-style", "tooltip", "tooltip-style", "tooltip-formatter", "tooltip-placement", "style", "onDrag-start", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "nativeOnFocus", "nativeOnBlur"]),
        c(s.$slots, "default", m({ ref_for: !0 }, { value: r.getValue() }))
      ], 64))), 256))
    ], 4)
  ], 16);
}
const I = /* @__PURE__ */ E(st, [["render", rt]]);
I.VueSliderMark = j;
I.VueSliderDot = L;
export {
  L as VueSliderDot,
  j as VueSliderMark,
  I as default
};
//# sourceMappingURL=vue3-histogram-slider.esm6.js.map
