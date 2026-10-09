/*!
 * ApexCharts v5.3.3
 * (c) 2018-2025 ApexCharts
 */
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ApexCharts = e();
})(this, (function() {
  "use strict";
  function t(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var i3 = 0, a3 = Array(e2); i3 < e2; i3++) a3[i3] = t2[i3];
    return a3;
  }
  function e(t2) {
    if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t2;
  }
  function i2(t2, e2) {
    if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
  }
  function a2(t2, e2) {
    for (var i3 = 0; i3 < e2.length; i3++) {
      var a3 = e2[i3];
      a3.enumerable = a3.enumerable || false, a3.configurable = true, "value" in a3 && (a3.writable = true), Object.defineProperty(t2, x(a3.key), a3);
    }
  }
  function s(t2, e2, i3) {
    return e2 && a2(t2.prototype, e2), i3 && a2(t2, i3), Object.defineProperty(t2, "prototype", { writable: false }), t2;
  }
  function r(t2, e2) {
    var i3 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!i3) {
      if (Array.isArray(t2) || (i3 = m(t2)) || e2 && t2 && "number" == typeof t2.length) {
        i3 && (t2 = i3);
        var a3 = 0, s2 = function() {
        };
        return { s: s2, n: function() {
          return a3 >= t2.length ? { done: true } : { done: false, value: t2[a3++] };
        }, e: function(t3) {
          throw t3;
        }, f: s2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var r2, n2 = true, o2 = false;
    return { s: function() {
      i3 = i3.call(t2);
    }, n: function() {
      var t3 = i3.next();
      return n2 = t3.done, t3;
    }, e: function(t3) {
      o2 = true, r2 = t3;
    }, f: function() {
      try {
        n2 || null == i3.return || i3.return();
      } finally {
        if (o2) throw r2;
      }
    } };
  }
  function n(t2) {
    var i3 = c();
    return function() {
      var a3, s2 = l(t2);
      if (i3) {
        var r2 = l(this).constructor;
        a3 = Reflect.construct(s2, arguments, r2);
      } else a3 = s2.apply(this, arguments);
      return (function(t3, i4) {
        if (i4 && ("object" == typeof i4 || "function" == typeof i4)) return i4;
        if (void 0 !== i4) throw new TypeError("Derived constructors may only return object or undefined");
        return e(t3);
      })(this, a3);
    };
  }
  function o(t2, e2, i3) {
    return (e2 = x(e2)) in t2 ? Object.defineProperty(t2, e2, { value: i3, enumerable: true, configurable: true, writable: true }) : t2[e2] = i3, t2;
  }
  function l(t2) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
      return t3.__proto__ || Object.getPrototypeOf(t3);
    }, l(t2);
  }
  function h(t2, e2) {
    if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
    t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), Object.defineProperty(t2, "prototype", { writable: false }), e2 && g(t2, e2);
  }
  function c() {
    try {
      var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
      })));
    } catch (t3) {
    }
    return (c = function() {
      return !!t2;
    })();
  }
  function d(t2, e2) {
    var i3 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var a3 = Object.getOwnPropertySymbols(t2);
      e2 && (a3 = a3.filter((function(e3) {
        return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
      }))), i3.push.apply(i3, a3);
    }
    return i3;
  }
  function u(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var i3 = null != arguments[e2] ? arguments[e2] : {};
      e2 % 2 ? d(Object(i3), true).forEach((function(e3) {
        o(t2, e3, i3[e3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i3)) : d(Object(i3)).forEach((function(e3) {
        Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(i3, e3));
      }));
    }
    return t2;
  }
  function g(t2, e2) {
    return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, g(t2, e2);
  }
  function p(t2, e2) {
    return (function(t3) {
      if (Array.isArray(t3)) return t3;
    })(t2) || (function(t3, e3) {
      var i3 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
      if (null != i3) {
        var a3, s2, r2, n2, o2 = [], l2 = true, h2 = false;
        try {
          if (r2 = (i3 = i3.call(t3)).next, 0 === e3) {
            if (Object(i3) !== i3) return;
            l2 = false;
          } else for (; !(l2 = (a3 = r2.call(i3)).done) && (o2.push(a3.value), o2.length !== e3); l2 = true) ;
        } catch (t4) {
          h2 = true, s2 = t4;
        } finally {
          try {
            if (!l2 && null != i3.return && (n2 = i3.return(), Object(n2) !== n2)) return;
          } finally {
            if (h2) throw s2;
          }
        }
        return o2;
      }
    })(t2, e2) || m(t2, e2) || (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function f(e2) {
    return (function(e3) {
      if (Array.isArray(e3)) return t(e3);
    })(e2) || (function(t2) {
      if ("undefined" != typeof Symbol && null != t2[Symbol.iterator] || null != t2["@@iterator"]) return Array.from(t2);
    })(e2) || m(e2) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function x(t2) {
    var e2 = (function(t3, e3) {
      if ("object" != typeof t3 || !t3) return t3;
      var i3 = t3[Symbol.toPrimitive];
      if (void 0 !== i3) {
        var a3 = i3.call(t3, e3 || "default");
        if ("object" != typeof a3) return a3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e3 ? String : Number)(t3);
    })(t2, "string");
    return "symbol" == typeof e2 ? e2 : e2 + "";
  }
  function b(t2) {
    return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, b(t2);
  }
  function m(e2, i3) {
    if (e2) {
      if ("string" == typeof e2) return t(e2, i3);
      var a3 = {}.toString.call(e2).slice(8, -1);
      return "Object" === a3 && e2.constructor && (a3 = e2.constructor.name), "Map" === a3 || "Set" === a3 ? Array.from(e2) : "Arguments" === a3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a3) ? t(e2, i3) : void 0;
    }
  }
  var v = (function() {
    function t2() {
      i2(this, t2);
    }
    return s(t2, [{ key: "shadeRGBColor", value: function(t3, e2) {
      var i3 = e2.split(","), a3 = t3 < 0 ? 0 : 255, s2 = t3 < 0 ? -1 * t3 : t3, r2 = parseInt(i3[0].slice(4), 10), n2 = parseInt(i3[1], 10), o2 = parseInt(i3[2], 10);
      return "rgb(" + (Math.round((a3 - r2) * s2) + r2) + "," + (Math.round((a3 - n2) * s2) + n2) + "," + (Math.round((a3 - o2) * s2) + o2) + ")";
    } }, { key: "shadeHexColor", value: function(t3, e2) {
      var i3 = parseInt(e2.slice(1), 16), a3 = t3 < 0 ? 0 : 255, s2 = t3 < 0 ? -1 * t3 : t3, r2 = i3 >> 16, n2 = i3 >> 8 & 255, o2 = 255 & i3;
      return "#" + (16777216 + 65536 * (Math.round((a3 - r2) * s2) + r2) + 256 * (Math.round((a3 - n2) * s2) + n2) + (Math.round((a3 - o2) * s2) + o2)).toString(16).slice(1);
    } }, { key: "shadeColor", value: function(e2, i3) {
      return t2.isColorHex(i3) ? this.shadeHexColor(e2, i3) : this.shadeRGBColor(e2, i3);
    } }], [{ key: "bind", value: function(t3, e2) {
      return function() {
        return t3.apply(e2, arguments);
      };
    } }, { key: "isObject", value: function(t3) {
      return t3 && "object" === b(t3) && !Array.isArray(t3) && null != t3;
    } }, { key: "is", value: function(t3, e2) {
      return Object.prototype.toString.call(e2) === "[object " + t3 + "]";
    } }, { key: "isSafari", value: function() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    } }, { key: "listToArray", value: function(t3) {
      var e2, i3 = [];
      for (e2 = 0; e2 < t3.length; e2++) i3[e2] = t3[e2];
      return i3;
    } }, { key: "extend", value: function(t3, e2) {
      var i3 = this;
      "function" != typeof Object.assign && (Object.assign = function(t4) {
        if (null == t4) throw new TypeError("Cannot convert undefined or null to object");
        for (var e3 = Object(t4), i4 = 1; i4 < arguments.length; i4++) {
          var a4 = arguments[i4];
          if (null != a4) for (var s2 in a4) a4.hasOwnProperty(s2) && (e3[s2] = a4[s2]);
        }
        return e3;
      });
      var a3 = Object.assign({}, t3);
      return this.isObject(t3) && this.isObject(e2) && Object.keys(e2).forEach((function(s2) {
        i3.isObject(e2[s2]) && s2 in t3 ? a3[s2] = i3.extend(t3[s2], e2[s2]) : Object.assign(a3, o({}, s2, e2[s2]));
      })), a3;
    } }, { key: "extendArray", value: function(e2, i3) {
      var a3 = [];
      return e2.map((function(e3) {
        a3.push(t2.extend(i3, e3));
      })), e2 = a3;
    } }, { key: "monthMod", value: function(t3) {
      return t3 % 12;
    } }, { key: "clone", value: function(t3) {
      var e2, i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new WeakMap();
      if (null === t3 || "object" !== b(t3)) return t3;
      if (i3.has(t3)) return i3.get(t3);
      if (Array.isArray(t3)) {
        e2 = [], i3.set(t3, e2);
        for (var a3 = 0; a3 < t3.length; a3++) e2[a3] = this.clone(t3[a3], i3);
      } else if (t3 instanceof Date) e2 = new Date(t3.getTime());
      else for (var s2 in e2 = {}, i3.set(t3, e2), t3) t3.hasOwnProperty(s2) && (e2[s2] = this.clone(t3[s2], i3));
      return e2;
    } }, { key: "log10", value: function(t3) {
      return Math.log(t3) / Math.LN10;
    } }, { key: "roundToBase10", value: function(t3) {
      return Math.pow(10, Math.floor(Math.log10(t3)));
    } }, { key: "roundToBase", value: function(t3, e2) {
      return Math.pow(e2, Math.floor(Math.log(t3) / Math.log(e2)));
    } }, { key: "parseNumber", value: function(t3) {
      return "number" == typeof t3 || null === t3 ? t3 : parseFloat(t3);
    } }, { key: "stripNumber", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      return Number.isInteger(t3) ? t3 : parseFloat(t3.toPrecision(e2));
    } }, { key: "randomId", value: function() {
      return (Math.random() + 1).toString(36).substring(4);
    } }, { key: "noExponents", value: function(t3) {
      return t3.toString().includes("e") ? Math.round(t3) : t3;
    } }, { key: "elementExists", value: function(t3) {
      return !(!t3 || !t3.isConnected);
    } }, { key: "getDimensions", value: function(t3) {
      var e2 = getComputedStyle(t3, null), i3 = t3.clientHeight, a3 = t3.clientWidth;
      return i3 -= parseFloat(e2.paddingTop) + parseFloat(e2.paddingBottom), [a3 -= parseFloat(e2.paddingLeft) + parseFloat(e2.paddingRight), i3];
    } }, { key: "getBoundingClientRect", value: function(t3) {
      var e2 = t3.getBoundingClientRect();
      return { top: e2.top, right: e2.right, bottom: e2.bottom, left: e2.left, width: t3.clientWidth, height: t3.clientHeight, x: e2.left, y: e2.top };
    } }, { key: "getLargestStringFromArr", value: function(t3) {
      return t3.reduce((function(t4, e2) {
        return Array.isArray(e2) && (e2 = e2.reduce((function(t5, e3) {
          return t5.length > e3.length ? t5 : e3;
        }))), t4.length > e2.length ? t4 : e2;
      }), 0);
    } }, { key: "hexToRgba", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999", e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.6;
      "#" !== t3.substring(0, 1) && (t3 = "#999999");
      var i3 = t3.replace("#", "");
      i3 = i3.match(new RegExp("(.{" + i3.length / 3 + "})", "g"));
      for (var a3 = 0; a3 < i3.length; a3++) i3[a3] = parseInt(1 === i3[a3].length ? i3[a3] + i3[a3] : i3[a3], 16);
      return void 0 !== e2 && i3.push(e2), "rgba(" + i3.join(",") + ")";
    } }, { key: "getOpacityFromRGBA", value: function(t3) {
      return parseFloat(t3.replace(/^.*,(.+)\)/, "$1"));
    } }, { key: "rgb2hex", value: function(t3) {
      return (t3 = t3.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t3.length ? "#" + ("0" + parseInt(t3[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[3], 10).toString(16)).slice(-2) : "";
    } }, { key: "isColorHex", value: function(t3) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t3);
    } }, { key: "getPolygonPos", value: function(t3, e2) {
      for (var i3 = [], a3 = 2 * Math.PI / e2, s2 = 0; s2 < e2; s2++) {
        var r2 = {};
        r2.x = t3 * Math.sin(s2 * a3), r2.y = -t3 * Math.cos(s2 * a3), i3.push(r2);
      }
      return i3;
    } }, { key: "polarToCartesian", value: function(t3, e2, i3, a3) {
      var s2 = (a3 - 90) * Math.PI / 180;
      return { x: t3 + i3 * Math.cos(s2), y: e2 + i3 * Math.sin(s2) };
    } }, { key: "escapeString", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x", i3 = t3.toString().slice();
      return i3 = i3.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e2);
    } }, { key: "negToZero", value: function(t3) {
      return t3 < 0 ? 0 : t3;
    } }, { key: "moveIndexInArray", value: function(t3, e2, i3) {
      if (i3 >= t3.length) for (var a3 = i3 - t3.length + 1; a3--; ) t3.push(void 0);
      return t3.splice(i3, 0, t3.splice(e2, 1)[0]), t3;
    } }, { key: "extractNumber", value: function(t3) {
      return parseFloat(t3.replace(/[^\d.]*/g, ""));
    } }, { key: "findAncestor", value: function(t3, e2) {
      for (; (t3 = t3.parentElement) && !t3.classList.contains(e2); ) ;
      return t3;
    } }, { key: "setELstyles", value: function(t3, e2) {
      for (var i3 in e2) e2.hasOwnProperty(i3) && (t3.style.key = e2[i3]);
    } }, { key: "preciseAddition", value: function(t3, e2) {
      var i3 = (String(t3).split(".")[1] || "").length, a3 = (String(e2).split(".")[1] || "").length, s2 = Math.pow(10, Math.max(i3, a3));
      return (Math.round(t3 * s2) + Math.round(e2 * s2)) / s2;
    } }, { key: "isNumber", value: function(t3) {
      return !isNaN(t3) && parseFloat(Number(t3)) === t3 && !isNaN(parseInt(t3, 10));
    } }, { key: "isFloat", value: function(t3) {
      return Number(t3) === t3 && t3 % 1 != 0;
    } }, { key: "isMsEdge", value: function() {
      var t3 = window.navigator.userAgent, e2 = t3.indexOf("Edge/");
      return e2 > 0 && parseInt(t3.substring(e2 + 5, t3.indexOf(".", e2)), 10);
    } }, { key: "getGCD", value: function(t3, e2) {
      var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7, a3 = Math.pow(10, i3 - Math.floor(Math.log10(Math.max(t3, e2))));
      for (t3 = Math.round(Math.abs(t3) * a3), e2 = Math.round(Math.abs(e2) * a3); e2; ) {
        var s2 = e2;
        e2 = t3 % e2, t3 = s2;
      }
      return t3 / a3;
    } }, { key: "getPrimeFactors", value: function(t3) {
      for (var e2 = [], i3 = 2; t3 >= 2; ) t3 % i3 == 0 ? (e2.push(i3), t3 /= i3) : i3++;
      return e2;
    } }, { key: "mod", value: function(t3, e2) {
      var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7, a3 = Math.pow(10, i3 - Math.floor(Math.log10(Math.max(t3, e2))));
      return (t3 = Math.round(Math.abs(t3) * a3)) % (e2 = Math.round(Math.abs(e2) * a3)) / a3;
    } }]), t2;
  })(), y = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "animateLine", value: function(t3, e2, i3, a3) {
      t3.attr(e2).animate(a3).attr(i3);
    } }, { key: "animateMarker", value: function(t3, e2, i3, a3) {
      t3.attr({ opacity: 0 }).animate(e2).attr({ opacity: 1 }).after((function() {
        a3();
      }));
    } }, { key: "animateRect", value: function(t3, e2, i3, a3, s2) {
      t3.attr(e2).animate(a3).attr(i3).after((function() {
        return s2();
      }));
    } }, { key: "animatePathsGradually", value: function(t3) {
      var e2 = t3.el, i3 = t3.realIndex, a3 = t3.j, s2 = t3.fill, r2 = t3.pathFrom, n2 = t3.pathTo, o2 = t3.speed, l2 = t3.delay, h2 = this.w, c2 = 0;
      h2.config.chart.animations.animateGradually.enabled && (c2 = h2.config.chart.animations.animateGradually.delay), h2.config.chart.animations.dynamicAnimation.enabled && h2.globals.dataChanged && "bar" !== h2.config.chart.type && (c2 = 0), this.morphSVG(e2, i3, a3, "line" !== h2.config.chart.type || h2.globals.comboCharts ? s2 : "stroke", r2, n2, o2, l2 * c2);
    } }, { key: "showDelayedElements", value: function() {
      this.w.globals.delayedElements.forEach((function(t3) {
        var e2 = t3.el;
        e2.classList.remove("apexcharts-element-hidden"), e2.classList.add("apexcharts-hidden-element-shown");
      }));
    } }, { key: "animationCompleted", value: function(t3) {
      var e2 = this.w;
      e2.globals.animationEnded || (e2.globals.animationEnded = true, this.showDelayedElements(), "function" == typeof e2.config.chart.events.animationEnd && e2.config.chart.events.animationEnd(this.ctx, { el: t3, w: e2 }));
    } }, { key: "morphSVG", value: function(t3, e2, i3, a3, s2, r2, n2, o2) {
      var l2 = this, h2 = this.w;
      s2 || (s2 = t3.attr("pathFrom")), r2 || (r2 = t3.attr("pathTo"));
      var c2 = function(t4) {
        return "radar" === h2.config.chart.type && (n2 = 1), "M 0 ".concat(h2.globals.gridHeight);
      };
      (!s2 || s2.indexOf("undefined") > -1 || s2.indexOf("NaN") > -1) && (s2 = c2()), (!r2.trim() || r2.indexOf("undefined") > -1 || r2.indexOf("NaN") > -1) && (r2 = c2()), h2.globals.shouldAnimate || (n2 = 1), t3.plot(s2).animate(1, o2).plot(s2).animate(n2, o2).plot(r2).after((function() {
        v.isNumber(i3) ? i3 === h2.globals.series[h2.globals.maxValsInArrayIndex].length - 2 && h2.globals.shouldAnimate && l2.animationCompleted(t3) : "none" !== a3 && h2.globals.shouldAnimate && (!h2.globals.comboCharts && e2 === h2.globals.series.length - 1 || h2.globals.comboCharts) && l2.animationCompleted(t3), l2.showDelayedElements();
      }));
    } }]), t2;
  })();
  const w = {}, k = [];
  function A(t2, e2) {
    if (Array.isArray(t2)) for (const i3 of t2) A(i3, e2);
    else if ("object" != typeof t2) S(Object.getOwnPropertyNames(e2)), w[t2] = Object.assign(w[t2] || {}, e2);
    else for (const e3 in t2) A(e3, t2[e3]);
  }
  function C(t2) {
    return w[t2] || {};
  }
  function S(t2) {
    k.push(...t2);
  }
  function L(t2, e2) {
    let i3;
    const a3 = t2.length, s2 = [];
    for (i3 = 0; i3 < a3; i3++) s2.push(e2(t2[i3]));
    return s2;
  }
  function M(t2) {
    return t2 % 360 * Math.PI / 180;
  }
  function P(t2) {
    return t2.charAt(0).toUpperCase() + t2.slice(1);
  }
  function I(t2, e2, i3, a3) {
    return null != e2 && null != i3 || (a3 = a3 || t2.bbox(), null == e2 ? e2 = a3.width / a3.height * i3 : null == i3 && (i3 = a3.height / a3.width * e2)), { width: e2, height: i3 };
  }
  function T(t2, e2) {
    const i3 = t2.origin;
    let a3 = null != t2.ox ? t2.ox : null != t2.originX ? t2.originX : "center", s2 = null != t2.oy ? t2.oy : null != t2.originY ? t2.originY : "center";
    null != i3 && ([a3, s2] = Array.isArray(i3) ? i3 : "object" == typeof i3 ? [i3.x, i3.y] : [i3, i3]);
    const r2 = "string" == typeof a3, n2 = "string" == typeof s2;
    if (r2 || n2) {
      const { height: t3, width: i4, x: o2, y: l2 } = e2.bbox();
      r2 && (a3 = a3.includes("left") ? o2 : a3.includes("right") ? o2 + i4 : o2 + i4 / 2), n2 && (s2 = s2.includes("top") ? l2 : s2.includes("bottom") ? l2 + t3 : l2 + t3 / 2);
    }
    return [a3, s2];
  }
  const z = /* @__PURE__ */ new Set(["desc", "metadata", "title"]), X = (t2) => z.has(t2.nodeName), R = (t2, e2, i3 = {}) => {
    const a3 = { ...e2 };
    for (const t3 in a3) a3[t3].valueOf() === i3[t3] && delete a3[t3];
    Object.keys(a3).length ? t2.node.setAttribute("data-svgjs", JSON.stringify(a3)) : (t2.node.removeAttribute("data-svgjs"), t2.node.removeAttribute("svgjs:data"));
  }, E = "http://www.w3.org/2000/svg", Y = "http://www.w3.org/2000/xmlns/", H = "http://www.w3.org/1999/xlink", O = { window: "undefined" == typeof window ? null : window, document: "undefined" == typeof document ? null : document };
  function F() {
    return O.window;
  }
  let D = class {
  };
  const _ = {}, N = "___SYMBOL___ROOT___";
  function W(t2, e2 = E) {
    return O.document.createElementNS(e2, t2);
  }
  function B(t2, e2 = false) {
    if (t2 instanceof D) return t2;
    if ("object" == typeof t2) return U(t2);
    if (null == t2) return new _[N]();
    if ("string" == typeof t2 && "<" !== t2.charAt(0)) return U(O.document.querySelector(t2));
    const i3 = e2 ? O.document.createElement("div") : W("svg");
    return i3.innerHTML = t2, t2 = U(i3.firstChild), i3.removeChild(i3.firstChild), t2;
  }
  function G(t2, e2) {
    return e2 && (e2 instanceof O.window.Node || e2.ownerDocument && e2 instanceof e2.ownerDocument.defaultView.Node) ? e2 : W(t2);
  }
  function V(t2) {
    if (!t2) return null;
    if (t2.instance instanceof D) return t2.instance;
    if ("#document-fragment" === t2.nodeName) return new _.Fragment(t2);
    let e2 = P(t2.nodeName || "Dom");
    return "LinearGradient" === e2 || "RadialGradient" === e2 ? e2 = "Gradient" : _[e2] || (e2 = "Dom"), new _[e2](t2);
  }
  let U = V;
  function q(t2, e2 = t2.name, i3 = false) {
    return _[e2] = t2, i3 && (_[N] = t2), S(Object.getOwnPropertyNames(t2.prototype)), t2;
  }
  let Z = 1e3;
  function $(t2) {
    return "Svgjs" + P(t2) + Z++;
  }
  function J(t2) {
    for (let e2 = t2.children.length - 1; e2 >= 0; e2--) J(t2.children[e2]);
    return t2.id ? (t2.id = $(t2.nodeName), t2) : t2;
  }
  function Q(t2, e2) {
    let i3, a3;
    for (a3 = (t2 = Array.isArray(t2) ? t2 : [t2]).length - 1; a3 >= 0; a3--) for (i3 in e2) t2[a3].prototype[i3] = e2[i3];
  }
  function K(t2) {
    return function(...e2) {
      const i3 = e2[e2.length - 1];
      return !i3 || i3.constructor !== Object || i3 instanceof Array ? t2.apply(this, e2) : t2.apply(this, e2.slice(0, -1)).attr(i3);
    };
  }
  A("Dom", { siblings: function() {
    return this.parent().children();
  }, position: function() {
    return this.parent().index(this);
  }, next: function() {
    return this.siblings()[this.position() + 1];
  }, prev: function() {
    return this.siblings()[this.position() - 1];
  }, forward: function() {
    const t2 = this.position();
    return this.parent().add(this.remove(), t2 + 1), this;
  }, backward: function() {
    const t2 = this.position();
    return this.parent().add(this.remove(), t2 ? t2 - 1 : 0), this;
  }, front: function() {
    return this.parent().add(this.remove()), this;
  }, back: function() {
    return this.parent().add(this.remove(), 0), this;
  }, before: function(t2) {
    (t2 = B(t2)).remove();
    const e2 = this.position();
    return this.parent().add(t2, e2), this;
  }, after: function(t2) {
    (t2 = B(t2)).remove();
    const e2 = this.position();
    return this.parent().add(t2, e2 + 1), this;
  }, insertBefore: function(t2) {
    return (t2 = B(t2)).before(this), this;
  }, insertAfter: function(t2) {
    return (t2 = B(t2)).after(this), this;
  } });
  const tt = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, et = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, it = /rgb\((\d+),(\d+),(\d+)\)/, at = /(#[a-z_][a-z0-9\-_]*)/i, st = /\)\s*,?\s*/, rt = /\s/g, nt = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i, ot = /^rgb\(/, lt = /^(\s+)?$/, ht = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ct = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, dt = /[\s,]+/, ut = /[MLHVCSQTAZ]/i;
  function gt(t2) {
    const e2 = Math.round(t2), i3 = Math.max(0, Math.min(255, e2)).toString(16);
    return 1 === i3.length ? "0" + i3 : i3;
  }
  function pt(t2, e2) {
    for (let i3 = e2.length; i3--; ) if (null == t2[e2[i3]]) return false;
    return true;
  }
  function ft(t2, e2, i3) {
    return i3 < 0 && (i3 += 1), i3 > 1 && (i3 -= 1), i3 < 1 / 6 ? t2 + 6 * (e2 - t2) * i3 : i3 < 0.5 ? e2 : i3 < 2 / 3 ? t2 + (e2 - t2) * (2 / 3 - i3) * 6 : t2;
  }
  A("Dom", { classes: function() {
    const t2 = this.attr("class");
    return null == t2 ? [] : t2.trim().split(dt);
  }, hasClass: function(t2) {
    return -1 !== this.classes().indexOf(t2);
  }, addClass: function(t2) {
    if (!this.hasClass(t2)) {
      const e2 = this.classes();
      e2.push(t2), this.attr("class", e2.join(" "));
    }
    return this;
  }, removeClass: function(t2) {
    return this.hasClass(t2) && this.attr("class", this.classes().filter((function(e2) {
      return e2 !== t2;
    })).join(" ")), this;
  }, toggleClass: function(t2) {
    return this.hasClass(t2) ? this.removeClass(t2) : this.addClass(t2);
  } }), A("Dom", { css: function(t2, e2) {
    const i3 = {};
    if (0 === arguments.length) return this.node.style.cssText.split(/\s*;\s*/).filter((function(t3) {
      return !!t3.length;
    })).forEach((function(t3) {
      const e3 = t3.split(/\s*:\s*/);
      i3[e3[0]] = e3[1];
    })), i3;
    if (arguments.length < 2) {
      if (Array.isArray(t2)) {
        for (const e3 of t2) {
          const t3 = e3;
          i3[e3] = this.node.style.getPropertyValue(t3);
        }
        return i3;
      }
      if ("string" == typeof t2) return this.node.style.getPropertyValue(t2);
      if ("object" == typeof t2) for (const e3 in t2) this.node.style.setProperty(e3, null == t2[e3] || lt.test(t2[e3]) ? "" : t2[e3]);
    }
    return 2 === arguments.length && this.node.style.setProperty(t2, null == e2 || lt.test(e2) ? "" : e2), this;
  }, show: function() {
    return this.css("display", "");
  }, hide: function() {
    return this.css("display", "none");
  }, visible: function() {
    return "none" !== this.css("display");
  } }), A("Dom", { data: function(t2, e2, i3) {
    if (null == t2) return this.data(L((function(t3, e3) {
      let i4;
      const a3 = t3.length, s2 = [];
      for (i4 = 0; i4 < a3; i4++) e3(t3[i4]) && s2.push(t3[i4]);
      return s2;
    })(this.node.attributes, ((t3) => 0 === t3.nodeName.indexOf("data-"))), ((t3) => t3.nodeName.slice(5))));
    if (t2 instanceof Array) {
      const e3 = {};
      for (const i4 of t2) e3[i4] = this.data(i4);
      return e3;
    }
    if ("object" == typeof t2) for (e2 in t2) this.data(e2, t2[e2]);
    else if (arguments.length < 2) try {
      return JSON.parse(this.attr("data-" + t2));
    } catch (e3) {
      return this.attr("data-" + t2);
    }
    else this.attr("data-" + t2, null === e2 ? null : true === i3 || "string" == typeof e2 || "number" == typeof e2 ? e2 : JSON.stringify(e2));
    return this;
  } }), A("Dom", { remember: function(t2, e2) {
    if ("object" == typeof arguments[0]) for (const e3 in t2) this.remember(e3, t2[e3]);
    else {
      if (1 === arguments.length) return this.memory()[t2];
      this.memory()[t2] = e2;
    }
    return this;
  }, forget: function() {
    if (0 === arguments.length) this._memory = {};
    else for (let t2 = arguments.length - 1; t2 >= 0; t2--) delete this.memory()[arguments[t2]];
    return this;
  }, memory: function() {
    return this._memory = this._memory || {};
  } });
  class xt {
    constructor(...t2) {
      this.init(...t2);
    }
    static isColor(t2) {
      return t2 && (t2 instanceof xt || this.isRgb(t2) || this.test(t2));
    }
    static isRgb(t2) {
      return t2 && "number" == typeof t2.r && "number" == typeof t2.g && "number" == typeof t2.b;
    }
    static random(t2 = "vibrant", e2) {
      const { random: i3, round: a3, sin: s2, PI: r2 } = Math;
      if ("vibrant" === t2) {
        const t3 = 24 * i3() + 57, e3 = 38 * i3() + 45, a4 = 360 * i3();
        return new xt(t3, e3, a4, "lch");
      }
      if ("sine" === t2) {
        const t3 = a3(80 * s2(2 * r2 * (e2 = null == e2 ? i3() : e2) / 0.5 + 0.01) + 150), n2 = a3(50 * s2(2 * r2 * e2 / 0.5 + 4.6) + 200), o2 = a3(100 * s2(2 * r2 * e2 / 0.5 + 2.3) + 150);
        return new xt(t3, n2, o2);
      }
      if ("pastel" === t2) {
        const t3 = 8 * i3() + 86, e3 = 17 * i3() + 9, a4 = 360 * i3();
        return new xt(t3, e3, a4, "lch");
      }
      if ("dark" === t2) {
        const t3 = 10 + 10 * i3(), e3 = 50 * i3() + 86, a4 = 360 * i3();
        return new xt(t3, e3, a4, "lch");
      }
      if ("rgb" === t2) {
        const t3 = 255 * i3(), e3 = 255 * i3(), a4 = 255 * i3();
        return new xt(t3, e3, a4);
      }
      if ("lab" === t2) {
        const t3 = 100 * i3(), e3 = 256 * i3() - 128, a4 = 256 * i3() - 128;
        return new xt(t3, e3, a4, "lab");
      }
      if ("grey" === t2) {
        const t3 = 255 * i3();
        return new xt(t3, t3, t3);
      }
      throw new Error("Unsupported random color mode");
    }
    static test(t2) {
      return "string" == typeof t2 && (nt.test(t2) || ot.test(t2));
    }
    cmyk() {
      const { _a: t2, _b: e2, _c: i3 } = this.rgb(), [a3, s2, r2] = [t2, e2, i3].map(((t3) => t3 / 255)), n2 = Math.min(1 - a3, 1 - s2, 1 - r2);
      if (1 === n2) return new xt(0, 0, 0, 1, "cmyk");
      return new xt((1 - a3 - n2) / (1 - n2), (1 - s2 - n2) / (1 - n2), (1 - r2 - n2) / (1 - n2), n2, "cmyk");
    }
    hsl() {
      const { _a: t2, _b: e2, _c: i3 } = this.rgb(), [a3, s2, r2] = [t2, e2, i3].map(((t3) => t3 / 255)), n2 = Math.max(a3, s2, r2), o2 = Math.min(a3, s2, r2), l2 = (n2 + o2) / 2, h2 = n2 === o2, c2 = n2 - o2;
      return new xt(360 * (h2 ? 0 : n2 === a3 ? ((s2 - r2) / c2 + (s2 < r2 ? 6 : 0)) / 6 : n2 === s2 ? ((r2 - a3) / c2 + 2) / 6 : n2 === r2 ? ((a3 - s2) / c2 + 4) / 6 : 0), 100 * (h2 ? 0 : l2 > 0.5 ? c2 / (2 - n2 - o2) : c2 / (n2 + o2)), 100 * l2, "hsl");
    }
    init(t2 = 0, e2 = 0, i3 = 0, a3 = 0, s2 = "rgb") {
      if (t2 = t2 || 0, this.space) for (const t3 in this.space) delete this[this.space[t3]];
      if ("number" == typeof t2) s2 = "string" == typeof a3 ? a3 : s2, a3 = "string" == typeof a3 ? 0 : a3, Object.assign(this, { _a: t2, _b: e2, _c: i3, _d: a3, space: s2 });
      else if (t2 instanceof Array) this.space = e2 || ("string" == typeof t2[3] ? t2[3] : t2[4]) || "rgb", Object.assign(this, { _a: t2[0], _b: t2[1], _c: t2[2], _d: t2[3] || 0 });
      else if (t2 instanceof Object) {
        const i4 = (function(t3, e3) {
          const i5 = pt(t3, "rgb") ? { _a: t3.r, _b: t3.g, _c: t3.b, _d: 0, space: "rgb" } : pt(t3, "xyz") ? { _a: t3.x, _b: t3.y, _c: t3.z, _d: 0, space: "xyz" } : pt(t3, "hsl") ? { _a: t3.h, _b: t3.s, _c: t3.l, _d: 0, space: "hsl" } : pt(t3, "lab") ? { _a: t3.l, _b: t3.a, _c: t3.b, _d: 0, space: "lab" } : pt(t3, "lch") ? { _a: t3.l, _b: t3.c, _c: t3.h, _d: 0, space: "lch" } : pt(t3, "cmyk") ? { _a: t3.c, _b: t3.m, _c: t3.y, _d: t3.k, space: "cmyk" } : { _a: 0, _b: 0, _c: 0, space: "rgb" };
          return i5.space = e3 || i5.space, i5;
        })(t2, e2);
        Object.assign(this, i4);
      } else if ("string" == typeof t2) if (ot.test(t2)) {
        const e3 = t2.replace(rt, ""), [i4, a4, s3] = it.exec(e3).slice(1, 4).map(((t3) => parseInt(t3)));
        Object.assign(this, { _a: i4, _b: a4, _c: s3, _d: 0, space: "rgb" });
      } else {
        if (!nt.test(t2)) throw Error("Unsupported string format, can't construct Color");
        {
          const e3 = (t3) => parseInt(t3, 16), [, i4, a4, s3] = et.exec((function(t3) {
            return 4 === t3.length ? ["#", t3.substring(1, 2), t3.substring(1, 2), t3.substring(2, 3), t3.substring(2, 3), t3.substring(3, 4), t3.substring(3, 4)].join("") : t3;
          })(t2)).map(e3);
          Object.assign(this, { _a: i4, _b: a4, _c: s3, _d: 0, space: "rgb" });
        }
      }
      const { _a: r2, _b: n2, _c: o2, _d: l2 } = this, h2 = "rgb" === this.space ? { r: r2, g: n2, b: o2 } : "xyz" === this.space ? { x: r2, y: n2, z: o2 } : "hsl" === this.space ? { h: r2, s: n2, l: o2 } : "lab" === this.space ? { l: r2, a: n2, b: o2 } : "lch" === this.space ? { l: r2, c: n2, h: o2 } : "cmyk" === this.space ? { c: r2, m: n2, y: o2, k: l2 } : {};
      Object.assign(this, h2);
    }
    lab() {
      const { x: t2, y: e2, z: i3 } = this.xyz();
      return new xt(116 * e2 - 16, 500 * (t2 - e2), 200 * (e2 - i3), "lab");
    }
    lch() {
      const { l: t2, a: e2, b: i3 } = this.lab(), a3 = Math.sqrt(e2 ** 2 + i3 ** 2);
      let s2 = 180 * Math.atan2(i3, e2) / Math.PI;
      s2 < 0 && (s2 *= -1, s2 = 360 - s2);
      return new xt(t2, a3, s2, "lch");
    }
    rgb() {
      if ("rgb" === this.space) return this;
      if ("lab" === (t2 = this.space) || "xyz" === t2 || "lch" === t2) {
        let { x: t3, y: e2, z: i3 } = this;
        if ("lab" === this.space || "lch" === this.space) {
          let { l: a4, a: s3, b: r3 } = this;
          if ("lch" === this.space) {
            const { c: t4, h: e3 } = this, i4 = Math.PI / 180;
            s3 = t4 * Math.cos(i4 * e3), r3 = t4 * Math.sin(i4 * e3);
          }
          const n3 = (a4 + 16) / 116, o3 = s3 / 500 + n3, l3 = n3 - r3 / 200, h3 = 16 / 116, c3 = 8856e-6, d2 = 7.787;
          t3 = 0.95047 * (o3 ** 3 > c3 ? o3 ** 3 : (o3 - h3) / d2), e2 = 1 * (n3 ** 3 > c3 ? n3 ** 3 : (n3 - h3) / d2), i3 = 1.08883 * (l3 ** 3 > c3 ? l3 ** 3 : (l3 - h3) / d2);
        }
        const a3 = 3.2406 * t3 + -1.5372 * e2 + -0.4986 * i3, s2 = -0.9689 * t3 + 1.8758 * e2 + 0.0415 * i3, r2 = 0.0557 * t3 + -0.204 * e2 + 1.057 * i3, n2 = Math.pow, o2 = 31308e-7, l2 = a3 > o2 ? 1.055 * n2(a3, 1 / 2.4) - 0.055 : 12.92 * a3, h2 = s2 > o2 ? 1.055 * n2(s2, 1 / 2.4) - 0.055 : 12.92 * s2, c2 = r2 > o2 ? 1.055 * n2(r2, 1 / 2.4) - 0.055 : 12.92 * r2;
        return new xt(255 * l2, 255 * h2, 255 * c2);
      }
      if ("hsl" === this.space) {
        let { h: t3, s: e2, l: i3 } = this;
        if (t3 /= 360, e2 /= 100, i3 /= 100, 0 === e2) {
          i3 *= 255;
          return new xt(i3, i3, i3);
        }
        const a3 = i3 < 0.5 ? i3 * (1 + e2) : i3 + e2 - i3 * e2, s2 = 2 * i3 - a3, r2 = 255 * ft(s2, a3, t3 + 1 / 3), n2 = 255 * ft(s2, a3, t3), o2 = 255 * ft(s2, a3, t3 - 1 / 3);
        return new xt(r2, n2, o2);
      }
      if ("cmyk" === this.space) {
        const { c: t3, m: e2, y: i3, k: a3 } = this, s2 = 255 * (1 - Math.min(1, t3 * (1 - a3) + a3)), r2 = 255 * (1 - Math.min(1, e2 * (1 - a3) + a3)), n2 = 255 * (1 - Math.min(1, i3 * (1 - a3) + a3));
        return new xt(s2, r2, n2);
      }
      return this;
      var t2;
    }
    toArray() {
      const { _a: t2, _b: e2, _c: i3, _d: a3, space: s2 } = this;
      return [t2, e2, i3, a3, s2];
    }
    toHex() {
      const [t2, e2, i3] = this._clamped().map(gt);
      return `#${t2}${e2}${i3}`;
    }
    toRgb() {
      const [t2, e2, i3] = this._clamped();
      return `rgb(${t2},${e2},${i3})`;
    }
    toString() {
      return this.toHex();
    }
    xyz() {
      const { _a: t2, _b: e2, _c: i3 } = this.rgb(), [a3, s2, r2] = [t2, e2, i3].map(((t3) => t3 / 255)), n2 = a3 > 0.04045 ? Math.pow((a3 + 0.055) / 1.055, 2.4) : a3 / 12.92, o2 = s2 > 0.04045 ? Math.pow((s2 + 0.055) / 1.055, 2.4) : s2 / 12.92, l2 = r2 > 0.04045 ? Math.pow((r2 + 0.055) / 1.055, 2.4) : r2 / 12.92, h2 = (0.4124 * n2 + 0.3576 * o2 + 0.1805 * l2) / 0.95047, c2 = (0.2126 * n2 + 0.7152 * o2 + 0.0722 * l2) / 1, d2 = (0.0193 * n2 + 0.1192 * o2 + 0.9505 * l2) / 1.08883, u2 = h2 > 8856e-6 ? Math.pow(h2, 1 / 3) : 7.787 * h2 + 16 / 116, g2 = c2 > 8856e-6 ? Math.pow(c2, 1 / 3) : 7.787 * c2 + 16 / 116, p2 = d2 > 8856e-6 ? Math.pow(d2, 1 / 3) : 7.787 * d2 + 16 / 116;
      return new xt(u2, g2, p2, "xyz");
    }
    _clamped() {
      const { _a: t2, _b: e2, _c: i3 } = this.rgb(), { max: a3, min: s2, round: r2 } = Math;
      return [t2, e2, i3].map(((t3) => a3(0, s2(r2(t3), 255))));
    }
  }
  class bt {
    constructor(...t2) {
      this.init(...t2);
    }
    clone() {
      return new bt(this);
    }
    init(t2, e2) {
      const i3 = 0, a3 = 0, s2 = Array.isArray(t2) ? { x: t2[0], y: t2[1] } : "object" == typeof t2 ? { x: t2.x, y: t2.y } : { x: t2, y: e2 };
      return this.x = null == s2.x ? i3 : s2.x, this.y = null == s2.y ? a3 : s2.y, this;
    }
    toArray() {
      return [this.x, this.y];
    }
    transform(t2) {
      return this.clone().transformO(t2);
    }
    transformO(t2) {
      vt.isMatrixLike(t2) || (t2 = new vt(t2));
      const { x: e2, y: i3 } = this;
      return this.x = t2.a * e2 + t2.c * i3 + t2.e, this.y = t2.b * e2 + t2.d * i3 + t2.f, this;
    }
  }
  function mt(t2, e2, i3) {
    return Math.abs(e2 - t2) < (i3 || 1e-6);
  }
  class vt {
    constructor(...t2) {
      this.init(...t2);
    }
    static formatTransforms(t2) {
      const e2 = "both" === t2.flip || true === t2.flip, i3 = t2.flip && (e2 || "x" === t2.flip) ? -1 : 1, a3 = t2.flip && (e2 || "y" === t2.flip) ? -1 : 1, s2 = t2.skew && t2.skew.length ? t2.skew[0] : isFinite(t2.skew) ? t2.skew : isFinite(t2.skewX) ? t2.skewX : 0, r2 = t2.skew && t2.skew.length ? t2.skew[1] : isFinite(t2.skew) ? t2.skew : isFinite(t2.skewY) ? t2.skewY : 0, n2 = t2.scale && t2.scale.length ? t2.scale[0] * i3 : isFinite(t2.scale) ? t2.scale * i3 : isFinite(t2.scaleX) ? t2.scaleX * i3 : i3, o2 = t2.scale && t2.scale.length ? t2.scale[1] * a3 : isFinite(t2.scale) ? t2.scale * a3 : isFinite(t2.scaleY) ? t2.scaleY * a3 : a3, l2 = t2.shear || 0, h2 = t2.rotate || t2.theta || 0, c2 = new bt(t2.origin || t2.around || t2.ox || t2.originX, t2.oy || t2.originY), d2 = c2.x, u2 = c2.y, g2 = new bt(t2.position || t2.px || t2.positionX || NaN, t2.py || t2.positionY || NaN), p2 = g2.x, f2 = g2.y, x2 = new bt(t2.translate || t2.tx || t2.translateX, t2.ty || t2.translateY), b2 = x2.x, m2 = x2.y, v2 = new bt(t2.relative || t2.rx || t2.relativeX, t2.ry || t2.relativeY);
      return { scaleX: n2, scaleY: o2, skewX: s2, skewY: r2, shear: l2, theta: h2, rx: v2.x, ry: v2.y, tx: b2, ty: m2, ox: d2, oy: u2, px: p2, py: f2 };
    }
    static fromArray(t2) {
      return { a: t2[0], b: t2[1], c: t2[2], d: t2[3], e: t2[4], f: t2[5] };
    }
    static isMatrixLike(t2) {
      return null != t2.a || null != t2.b || null != t2.c || null != t2.d || null != t2.e || null != t2.f;
    }
    static matrixMultiply(t2, e2, i3) {
      const a3 = t2.a * e2.a + t2.c * e2.b, s2 = t2.b * e2.a + t2.d * e2.b, r2 = t2.a * e2.c + t2.c * e2.d, n2 = t2.b * e2.c + t2.d * e2.d, o2 = t2.e + t2.a * e2.e + t2.c * e2.f, l2 = t2.f + t2.b * e2.e + t2.d * e2.f;
      return i3.a = a3, i3.b = s2, i3.c = r2, i3.d = n2, i3.e = o2, i3.f = l2, i3;
    }
    around(t2, e2, i3) {
      return this.clone().aroundO(t2, e2, i3);
    }
    aroundO(t2, e2, i3) {
      const a3 = t2 || 0, s2 = e2 || 0;
      return this.translateO(-a3, -s2).lmultiplyO(i3).translateO(a3, s2);
    }
    clone() {
      return new vt(this);
    }
    decompose(t2 = 0, e2 = 0) {
      const i3 = this.a, a3 = this.b, s2 = this.c, r2 = this.d, n2 = this.e, o2 = this.f, l2 = i3 * r2 - a3 * s2, h2 = l2 > 0 ? 1 : -1, c2 = h2 * Math.sqrt(i3 * i3 + a3 * a3), d2 = Math.atan2(h2 * a3, h2 * i3), u2 = 180 / Math.PI * d2, g2 = Math.cos(d2), p2 = Math.sin(d2), f2 = (i3 * s2 + a3 * r2) / l2, x2 = s2 * c2 / (f2 * i3 - a3) || r2 * c2 / (f2 * a3 + i3);
      return { scaleX: c2, scaleY: x2, shear: f2, rotate: u2, translateX: n2 - t2 + t2 * g2 * c2 + e2 * (f2 * g2 * c2 - p2 * x2), translateY: o2 - e2 + t2 * p2 * c2 + e2 * (f2 * p2 * c2 + g2 * x2), originX: t2, originY: e2, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f };
    }
    equals(t2) {
      if (t2 === this) return true;
      const e2 = new vt(t2);
      return mt(this.a, e2.a) && mt(this.b, e2.b) && mt(this.c, e2.c) && mt(this.d, e2.d) && mt(this.e, e2.e) && mt(this.f, e2.f);
    }
    flip(t2, e2) {
      return this.clone().flipO(t2, e2);
    }
    flipO(t2, e2) {
      return "x" === t2 ? this.scaleO(-1, 1, e2, 0) : "y" === t2 ? this.scaleO(1, -1, 0, e2) : this.scaleO(-1, -1, t2, e2 || t2);
    }
    init(t2) {
      const e2 = vt.fromArray([1, 0, 0, 1, 0, 0]);
      return t2 = t2 instanceof Gt ? t2.matrixify() : "string" == typeof t2 ? vt.fromArray(t2.split(dt).map(parseFloat)) : Array.isArray(t2) ? vt.fromArray(t2) : "object" == typeof t2 && vt.isMatrixLike(t2) ? t2 : "object" == typeof t2 ? new vt().transform(t2) : 6 === arguments.length ? vt.fromArray([].slice.call(arguments)) : e2, this.a = null != t2.a ? t2.a : e2.a, this.b = null != t2.b ? t2.b : e2.b, this.c = null != t2.c ? t2.c : e2.c, this.d = null != t2.d ? t2.d : e2.d, this.e = null != t2.e ? t2.e : e2.e, this.f = null != t2.f ? t2.f : e2.f, this;
    }
    inverse() {
      return this.clone().inverseO();
    }
    inverseO() {
      const t2 = this.a, e2 = this.b, i3 = this.c, a3 = this.d, s2 = this.e, r2 = this.f, n2 = t2 * a3 - e2 * i3;
      if (!n2) throw new Error("Cannot invert " + this);
      const o2 = a3 / n2, l2 = -e2 / n2, h2 = -i3 / n2, c2 = t2 / n2, d2 = -(o2 * s2 + h2 * r2), u2 = -(l2 * s2 + c2 * r2);
      return this.a = o2, this.b = l2, this.c = h2, this.d = c2, this.e = d2, this.f = u2, this;
    }
    lmultiply(t2) {
      return this.clone().lmultiplyO(t2);
    }
    lmultiplyO(t2) {
      const e2 = t2 instanceof vt ? t2 : new vt(t2);
      return vt.matrixMultiply(e2, this, this);
    }
    multiply(t2) {
      return this.clone().multiplyO(t2);
    }
    multiplyO(t2) {
      const e2 = t2 instanceof vt ? t2 : new vt(t2);
      return vt.matrixMultiply(this, e2, this);
    }
    rotate(t2, e2, i3) {
      return this.clone().rotateO(t2, e2, i3);
    }
    rotateO(t2, e2 = 0, i3 = 0) {
      t2 = M(t2);
      const a3 = Math.cos(t2), s2 = Math.sin(t2), { a: r2, b: n2, c: o2, d: l2, e: h2, f: c2 } = this;
      return this.a = r2 * a3 - n2 * s2, this.b = n2 * a3 + r2 * s2, this.c = o2 * a3 - l2 * s2, this.d = l2 * a3 + o2 * s2, this.e = h2 * a3 - c2 * s2 + i3 * s2 - e2 * a3 + e2, this.f = c2 * a3 + h2 * s2 - e2 * s2 - i3 * a3 + i3, this;
    }
    scale() {
      return this.clone().scaleO(...arguments);
    }
    scaleO(t2, e2 = t2, i3 = 0, a3 = 0) {
      3 === arguments.length && (a3 = i3, i3 = e2, e2 = t2);
      const { a: s2, b: r2, c: n2, d: o2, e: l2, f: h2 } = this;
      return this.a = s2 * t2, this.b = r2 * e2, this.c = n2 * t2, this.d = o2 * e2, this.e = l2 * t2 - i3 * t2 + i3, this.f = h2 * e2 - a3 * e2 + a3, this;
    }
    shear(t2, e2, i3) {
      return this.clone().shearO(t2, e2, i3);
    }
    shearO(t2, e2 = 0, i3 = 0) {
      const { a: a3, b: s2, c: r2, d: n2, e: o2, f: l2 } = this;
      return this.a = a3 + s2 * t2, this.c = r2 + n2 * t2, this.e = o2 + l2 * t2 - i3 * t2, this;
    }
    skew() {
      return this.clone().skewO(...arguments);
    }
    skewO(t2, e2 = t2, i3 = 0, a3 = 0) {
      3 === arguments.length && (a3 = i3, i3 = e2, e2 = t2), t2 = M(t2), e2 = M(e2);
      const s2 = Math.tan(t2), r2 = Math.tan(e2), { a: n2, b: o2, c: l2, d: h2, e: c2, f: d2 } = this;
      return this.a = n2 + o2 * s2, this.b = o2 + n2 * r2, this.c = l2 + h2 * s2, this.d = h2 + l2 * r2, this.e = c2 + d2 * s2 - a3 * s2, this.f = d2 + c2 * r2 - i3 * r2, this;
    }
    skewX(t2, e2, i3) {
      return this.skew(t2, 0, e2, i3);
    }
    skewY(t2, e2, i3) {
      return this.skew(0, t2, e2, i3);
    }
    toArray() {
      return [this.a, this.b, this.c, this.d, this.e, this.f];
    }
    toString() {
      return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
    }
    transform(t2) {
      if (vt.isMatrixLike(t2)) {
        return new vt(t2).multiplyO(this);
      }
      const e2 = vt.formatTransforms(t2), { x: i3, y: a3 } = new bt(e2.ox, e2.oy).transform(this), s2 = new vt().translateO(e2.rx, e2.ry).lmultiplyO(this).translateO(-i3, -a3).scaleO(e2.scaleX, e2.scaleY).skewO(e2.skewX, e2.skewY).shearO(e2.shear).rotateO(e2.theta).translateO(i3, a3);
      if (isFinite(e2.px) || isFinite(e2.py)) {
        const t3 = new bt(i3, a3).transform(s2), r2 = isFinite(e2.px) ? e2.px - t3.x : 0, n2 = isFinite(e2.py) ? e2.py - t3.y : 0;
        s2.translateO(r2, n2);
      }
      return s2.translateO(e2.tx, e2.ty), s2;
    }
    translate(t2, e2) {
      return this.clone().translateO(t2, e2);
    }
    translateO(t2, e2) {
      return this.e += t2 || 0, this.f += e2 || 0, this;
    }
    valueOf() {
      return { a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f };
    }
  }
  function yt() {
    if (!yt.nodes) {
      const t2 = B().size(2, 0);
      t2.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), t2.attr("focusable", "false"), t2.attr("aria-hidden", "true");
      const e2 = t2.path().node;
      yt.nodes = { svg: t2, path: e2 };
    }
    if (!yt.nodes.svg.node.parentNode) {
      const t2 = O.document.body || O.document.documentElement;
      yt.nodes.svg.addTo(t2);
    }
    return yt.nodes;
  }
  function wt(t2) {
    return !(t2.width || t2.height || t2.x || t2.y);
  }
  q(vt, "Matrix");
  class kt {
    constructor(...t2) {
      this.init(...t2);
    }
    addOffset() {
      return this.x += O.window.pageXOffset, this.y += O.window.pageYOffset, new kt(this);
    }
    init(t2) {
      return t2 = "string" == typeof t2 ? t2.split(dt).map(parseFloat) : Array.isArray(t2) ? t2 : "object" == typeof t2 ? [null != t2.left ? t2.left : t2.x, null != t2.top ? t2.top : t2.y, t2.width, t2.height] : 4 === arguments.length ? [].slice.call(arguments) : [0, 0, 0, 0], this.x = t2[0] || 0, this.y = t2[1] || 0, this.width = this.w = t2[2] || 0, this.height = this.h = t2[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this;
    }
    isNulled() {
      return wt(this);
    }
    merge(t2) {
      const e2 = Math.min(this.x, t2.x), i3 = Math.min(this.y, t2.y), a3 = Math.max(this.x + this.width, t2.x + t2.width) - e2, s2 = Math.max(this.y + this.height, t2.y + t2.height) - i3;
      return new kt(e2, i3, a3, s2);
    }
    toArray() {
      return [this.x, this.y, this.width, this.height];
    }
    toString() {
      return this.x + " " + this.y + " " + this.width + " " + this.height;
    }
    transform(t2) {
      t2 instanceof vt || (t2 = new vt(t2));
      let e2 = 1 / 0, i3 = -1 / 0, a3 = 1 / 0, s2 = -1 / 0;
      return [new bt(this.x, this.y), new bt(this.x2, this.y), new bt(this.x, this.y2), new bt(this.x2, this.y2)].forEach((function(r2) {
        r2 = r2.transform(t2), e2 = Math.min(e2, r2.x), i3 = Math.max(i3, r2.x), a3 = Math.min(a3, r2.y), s2 = Math.max(s2, r2.y);
      })), new kt(e2, a3, i3 - e2, s2 - a3);
    }
  }
  function At(t2, e2, i3) {
    let a3;
    try {
      if (a3 = e2(t2.node), wt(a3) && ((s2 = t2.node) !== O.document && !(O.document.documentElement.contains || function(t3) {
        for (; t3.parentNode; ) t3 = t3.parentNode;
        return t3 === O.document;
      }).call(O.document.documentElement, s2))) throw new Error("Element not in the dom");
    } catch (e3) {
      a3 = i3(t2);
    }
    var s2;
    return a3;
  }
  A({ viewbox: { viewbox(t2, e2, i3, a3) {
    return null == t2 ? new kt(this.attr("viewBox")) : this.attr("viewBox", new kt(t2, e2, i3, a3));
  }, zoom(t2, e2) {
    let { width: i3, height: a3 } = this.attr(["width", "height"]);
    if ((i3 || a3) && "string" != typeof i3 && "string" != typeof a3 || (i3 = this.node.clientWidth, a3 = this.node.clientHeight), !i3 || !a3) throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
    const s2 = this.viewbox(), r2 = i3 / s2.width, n2 = a3 / s2.height, o2 = Math.min(r2, n2);
    if (null == t2) return o2;
    let l2 = o2 / t2;
    l2 === 1 / 0 && (l2 = Number.MAX_SAFE_INTEGER / 100), e2 = e2 || new bt(i3 / 2 / r2 + s2.x, a3 / 2 / n2 + s2.y);
    const h2 = new kt(s2).transform(new vt({ scale: l2, origin: e2 }));
    return this.viewbox(h2);
  } } }), q(kt, "Box");
  class Ct extends Array {
    constructor(t2 = [], ...e2) {
      if (super(t2, ...e2), "number" == typeof t2) return this;
      this.length = 0, this.push(...t2);
    }
  }
  Q([Ct], { each(t2, ...e2) {
    return "function" == typeof t2 ? this.map(((e3, i3, a3) => t2.call(e3, e3, i3, a3))) : this.map(((i3) => i3[t2](...e2)));
  }, toArray() {
    return Array.prototype.concat.apply([], this);
  } });
  const St = ["toArray", "constructor", "each"];
  function Lt(t2, e2) {
    return new Ct(L((e2 || O.document).querySelectorAll(t2), (function(t3) {
      return V(t3);
    })));
  }
  Ct.extend = function(t2) {
    t2 = t2.reduce(((t3, e2) => (St.includes(e2) || "_" === e2[0] || (e2 in Array.prototype && (t3["$" + e2] = Array.prototype[e2]), t3[e2] = function(...t4) {
      return this.each(e2, ...t4);
    }), t3)), {}), Q([Ct], t2);
  };
  let Mt = 0;
  const Pt = {};
  function It(t2) {
    let e2 = t2.getEventHolder();
    return e2 === O.window && (e2 = Pt), e2.events || (e2.events = {}), e2.events;
  }
  function Tt(t2) {
    return t2.getEventTarget();
  }
  function zt(t2, e2, i3, a3, s2) {
    const r2 = i3.bind(a3 || t2), n2 = B(t2), o2 = It(n2), l2 = Tt(n2);
    e2 = Array.isArray(e2) ? e2 : e2.split(dt), i3._svgjsListenerId || (i3._svgjsListenerId = ++Mt), e2.forEach((function(t3) {
      const e3 = t3.split(".")[0], a4 = t3.split(".")[1] || "*";
      o2[e3] = o2[e3] || {}, o2[e3][a4] = o2[e3][a4] || {}, o2[e3][a4][i3._svgjsListenerId] = r2, l2.addEventListener(e3, r2, s2 || false);
    }));
  }
  function Xt(t2, e2, i3, a3) {
    const s2 = B(t2), r2 = It(s2), n2 = Tt(s2);
    ("function" != typeof i3 || (i3 = i3._svgjsListenerId)) && (e2 = Array.isArray(e2) ? e2 : (e2 || "").split(dt)).forEach((function(t3) {
      const e3 = t3 && t3.split(".")[0], o2 = t3 && t3.split(".")[1];
      let l2, h2;
      if (i3) r2[e3] && r2[e3][o2 || "*"] && (n2.removeEventListener(e3, r2[e3][o2 || "*"][i3], a3 || false), delete r2[e3][o2 || "*"][i3]);
      else if (e3 && o2) {
        if (r2[e3] && r2[e3][o2]) {
          for (h2 in r2[e3][o2]) Xt(n2, [e3, o2].join("."), h2);
          delete r2[e3][o2];
        }
      } else if (o2) for (t3 in r2) for (l2 in r2[t3]) o2 === l2 && Xt(n2, [t3, o2].join("."));
      else if (e3) {
        if (r2[e3]) {
          for (l2 in r2[e3]) Xt(n2, [e3, l2].join("."));
          delete r2[e3];
        }
      } else {
        for (t3 in r2) Xt(n2, t3);
        !(function(t4) {
          let e4 = t4.getEventHolder();
          e4 === O.window && (e4 = Pt), e4.events && (e4.events = {});
        })(s2);
      }
    }));
  }
  class Rt extends D {
    addEventListener() {
    }
    dispatch(t2, e2, i3) {
      return (function(t3, e3, i4, a3) {
        const s2 = Tt(t3);
        return e3 instanceof O.window.Event || (e3 = new O.window.CustomEvent(e3, { detail: i4, cancelable: true, ...a3 })), s2.dispatchEvent(e3), e3;
      })(this, t2, e2, i3);
    }
    dispatchEvent(t2) {
      const e2 = this.getEventHolder().events;
      if (!e2) return true;
      const i3 = e2[t2.type];
      for (const e3 in i3) for (const a3 in i3[e3]) i3[e3][a3](t2);
      return !t2.defaultPrevented;
    }
    fire(t2, e2, i3) {
      return this.dispatch(t2, e2, i3), this;
    }
    getEventHolder() {
      return this;
    }
    getEventTarget() {
      return this;
    }
    off(t2, e2, i3) {
      return Xt(this, t2, e2, i3), this;
    }
    on(t2, e2, i3, a3) {
      return zt(this, t2, e2, i3, a3), this;
    }
    removeEventListener() {
    }
  }
  function Et() {
  }
  q(Rt, "EventTarget");
  const Yt = 400, Ht = ">", Ot = 0, Ft = { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "text-anchor": "start" };
  class Dt extends Array {
    constructor(...t2) {
      super(...t2), this.init(...t2);
    }
    clone() {
      return new this.constructor(this);
    }
    init(t2) {
      return "number" == typeof t2 || (this.length = 0, this.push(...this.parse(t2))), this;
    }
    parse(t2 = []) {
      return t2 instanceof Array ? t2 : t2.trim().split(dt).map(parseFloat);
    }
    toArray() {
      return Array.prototype.concat.apply([], this);
    }
    toSet() {
      return new Set(this);
    }
    toString() {
      return this.join(" ");
    }
    valueOf() {
      const t2 = [];
      return t2.push(...this), t2;
    }
  }
  class _t {
    constructor(...t2) {
      this.init(...t2);
    }
    convert(t2) {
      return new _t(this.value, t2);
    }
    divide(t2) {
      return t2 = new _t(t2), new _t(this / t2, this.unit || t2.unit);
    }
    init(t2, e2) {
      return e2 = Array.isArray(t2) ? t2[1] : e2, t2 = Array.isArray(t2) ? t2[0] : t2, this.value = 0, this.unit = e2 || "", "number" == typeof t2 ? this.value = isNaN(t2) ? 0 : isFinite(t2) ? t2 : t2 < 0 ? -34e37 : 34e37 : "string" == typeof t2 ? (e2 = t2.match(tt)) && (this.value = parseFloat(e2[1]), "%" === e2[5] ? this.value /= 100 : "s" === e2[5] && (this.value *= 1e3), this.unit = e2[5]) : t2 instanceof _t && (this.value = t2.valueOf(), this.unit = t2.unit), this;
    }
    minus(t2) {
      return t2 = new _t(t2), new _t(this - t2, this.unit || t2.unit);
    }
    plus(t2) {
      return t2 = new _t(t2), new _t(this + t2, this.unit || t2.unit);
    }
    times(t2) {
      return t2 = new _t(t2), new _t(this * t2, this.unit || t2.unit);
    }
    toArray() {
      return [this.value, this.unit];
    }
    toJSON() {
      return this.toString();
    }
    toString() {
      return ("%" === this.unit ? ~~(1e8 * this.value) / 1e6 : "s" === this.unit ? this.value / 1e3 : this.value) + this.unit;
    }
    valueOf() {
      return this.value;
    }
  }
  const Nt = /* @__PURE__ */ new Set(["fill", "stroke", "color", "bgcolor", "stop-color", "flood-color", "lighting-color"]), Wt = [];
  class Bt extends Rt {
    constructor(t2, e2) {
      super(), this.node = t2, this.type = t2.nodeName, e2 && t2 !== e2 && this.attr(e2);
    }
    add(t2, e2) {
      return (t2 = B(t2)).removeNamespace && this.node instanceof O.window.SVGElement && t2.removeNamespace(), null == e2 ? this.node.appendChild(t2.node) : t2.node !== this.node.childNodes[e2] && this.node.insertBefore(t2.node, this.node.childNodes[e2]), this;
    }
    addTo(t2, e2) {
      return B(t2).put(this, e2);
    }
    children() {
      return new Ct(L(this.node.children, (function(t2) {
        return V(t2);
      })));
    }
    clear() {
      for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
      return this;
    }
    clone(t2 = true, e2 = true) {
      this.writeDataToDom();
      let i3 = this.node.cloneNode(t2);
      return e2 && (i3 = J(i3)), new this.constructor(i3);
    }
    each(t2, e2) {
      const i3 = this.children();
      let a3, s2;
      for (a3 = 0, s2 = i3.length; a3 < s2; a3++) t2.apply(i3[a3], [a3, i3]), e2 && i3[a3].each(t2, e2);
      return this;
    }
    element(t2, e2) {
      return this.put(new Bt(W(t2), e2));
    }
    first() {
      return V(this.node.firstChild);
    }
    get(t2) {
      return V(this.node.childNodes[t2]);
    }
    getEventHolder() {
      return this.node;
    }
    getEventTarget() {
      return this.node;
    }
    has(t2) {
      return this.index(t2) >= 0;
    }
    html(t2, e2) {
      return this.xml(t2, e2, "http://www.w3.org/1999/xhtml");
    }
    id(t2) {
      return void 0 !== t2 || this.node.id || (this.node.id = $(this.type)), this.attr("id", t2);
    }
    index(t2) {
      return [].slice.call(this.node.childNodes).indexOf(t2.node);
    }
    last() {
      return V(this.node.lastChild);
    }
    matches(t2) {
      const e2 = this.node, i3 = e2.matches || e2.matchesSelector || e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || e2.oMatchesSelector || null;
      return i3 && i3.call(e2, t2);
    }
    parent(t2) {
      let e2 = this;
      if (!e2.node.parentNode) return null;
      if (e2 = V(e2.node.parentNode), !t2) return e2;
      do {
        if ("string" == typeof t2 ? e2.matches(t2) : e2 instanceof t2) return e2;
      } while (e2 = V(e2.node.parentNode));
      return e2;
    }
    put(t2, e2) {
      return t2 = B(t2), this.add(t2, e2), t2;
    }
    putIn(t2, e2) {
      return B(t2).add(this, e2);
    }
    remove() {
      return this.parent() && this.parent().removeElement(this), this;
    }
    removeElement(t2) {
      return this.node.removeChild(t2.node), this;
    }
    replace(t2) {
      return t2 = B(t2), this.node.parentNode && this.node.parentNode.replaceChild(t2.node, this.node), t2;
    }
    round(t2 = 2, e2 = null) {
      const i3 = 10 ** t2, a3 = this.attr(e2);
      for (const t3 in a3) "number" == typeof a3[t3] && (a3[t3] = Math.round(a3[t3] * i3) / i3);
      return this.attr(a3), this;
    }
    svg(t2, e2) {
      return this.xml(t2, e2, E);
    }
    toString() {
      return this.id();
    }
    words(t2) {
      return this.node.textContent = t2, this;
    }
    wrap(t2) {
      const e2 = this.parent();
      if (!e2) return this.addTo(t2);
      const i3 = e2.index(this);
      return e2.put(t2, i3).put(this);
    }
    writeDataToDom() {
      return this.each((function() {
        this.writeDataToDom();
      })), this;
    }
    xml(t2, e2, i3) {
      if ("boolean" == typeof t2 && (i3 = e2, e2 = t2, t2 = null), null == t2 || "function" == typeof t2) {
        e2 = null == e2 || e2, this.writeDataToDom();
        let i4 = this;
        if (null != t2) {
          if (i4 = V(i4.node.cloneNode(true)), e2) {
            const e3 = t2(i4);
            if (i4 = e3 || i4, false === e3) return "";
          }
          i4.each((function() {
            const e3 = t2(this), i5 = e3 || this;
            false === e3 ? this.remove() : e3 && this !== i5 && this.replace(i5);
          }), true);
        }
        return e2 ? i4.node.outerHTML : i4.node.innerHTML;
      }
      e2 = null != e2 && e2;
      const a3 = W("wrapper", i3), s2 = O.document.createDocumentFragment();
      a3.innerHTML = t2;
      for (let t3 = a3.children.length; t3--; ) s2.appendChild(a3.firstElementChild);
      const r2 = this.parent();
      return e2 ? this.replace(s2) && r2 : this.add(s2);
    }
  }
  Q(Bt, { attr: function(t2, e2, i3) {
    if (null == t2) {
      t2 = {}, e2 = this.node.attributes;
      for (const i4 of e2) t2[i4.nodeName] = ht.test(i4.nodeValue) ? parseFloat(i4.nodeValue) : i4.nodeValue;
      return t2;
    }
    if (t2 instanceof Array) return t2.reduce(((t3, e3) => (t3[e3] = this.attr(e3), t3)), {});
    if ("object" == typeof t2 && t2.constructor === Object) for (e2 in t2) this.attr(e2, t2[e2]);
    else if (null === e2) this.node.removeAttribute(t2);
    else {
      if (null == e2) return null == (e2 = this.node.getAttribute(t2)) ? Ft[t2] : ht.test(e2) ? parseFloat(e2) : e2;
      "number" == typeof (e2 = Wt.reduce(((e3, i4) => i4(t2, e3, this)), e2)) ? e2 = new _t(e2) : Nt.has(t2) && xt.isColor(e2) ? e2 = new xt(e2) : e2.constructor === Array && (e2 = new Dt(e2)), "leading" === t2 ? this.leading && this.leading(e2) : "string" == typeof i3 ? this.node.setAttributeNS(i3, t2, e2.toString()) : this.node.setAttribute(t2, e2.toString()), !this.rebuild || "font-size" !== t2 && "x" !== t2 || this.rebuild();
    }
    return this;
  }, find: function(t2) {
    return Lt(t2, this.node);
  }, findOne: function(t2) {
    return V(this.node.querySelector(t2));
  } }), q(Bt, "Dom");
  let Gt = class extends Bt {
    constructor(t2, e2) {
      super(t2, e2), this.dom = {}, this.node.instance = this, (t2.hasAttribute("data-svgjs") || t2.hasAttribute("svgjs:data")) && this.setData(JSON.parse(t2.getAttribute("data-svgjs")) ?? JSON.parse(t2.getAttribute("svgjs:data")) ?? {});
    }
    center(t2, e2) {
      return this.cx(t2).cy(e2);
    }
    cx(t2) {
      return null == t2 ? this.x() + this.width() / 2 : this.x(t2 - this.width() / 2);
    }
    cy(t2) {
      return null == t2 ? this.y() + this.height() / 2 : this.y(t2 - this.height() / 2);
    }
    defs() {
      const t2 = this.root();
      return t2 && t2.defs();
    }
    dmove(t2, e2) {
      return this.dx(t2).dy(e2);
    }
    dx(t2 = 0) {
      return this.x(new _t(t2).plus(this.x()));
    }
    dy(t2 = 0) {
      return this.y(new _t(t2).plus(this.y()));
    }
    getEventHolder() {
      return this;
    }
    height(t2) {
      return this.attr("height", t2);
    }
    move(t2, e2) {
      return this.x(t2).y(e2);
    }
    parents(t2 = this.root()) {
      const e2 = "string" == typeof t2;
      e2 || (t2 = B(t2));
      const i3 = new Ct();
      let a3 = this;
      for (; (a3 = a3.parent()) && a3.node !== O.document && "#document-fragment" !== a3.nodeName && (i3.push(a3), e2 || a3.node !== t2.node) && (!e2 || !a3.matches(t2)); ) if (a3.node === this.root().node) return null;
      return i3;
    }
    reference(t2) {
      if (!(t2 = this.attr(t2))) return null;
      const e2 = (t2 + "").match(at);
      return e2 ? B(e2[1]) : null;
    }
    root() {
      const t2 = this.parent((function(t3) {
        return _[t3];
      })(N));
      return t2 && t2.root();
    }
    setData(t2) {
      return this.dom = t2, this;
    }
    size(t2, e2) {
      const i3 = I(this, t2, e2);
      return this.width(new _t(i3.width)).height(new _t(i3.height));
    }
    width(t2) {
      return this.attr("width", t2);
    }
    writeDataToDom() {
      return R(this, this.dom), super.writeDataToDom();
    }
    x(t2) {
      return this.attr("x", t2);
    }
    y(t2) {
      return this.attr("y", t2);
    }
  };
  Q(Gt, { bbox: function() {
    const t2 = At(this, ((t3) => t3.getBBox()), ((t3) => {
      try {
        const e2 = t3.clone().addTo(yt().svg).show(), i3 = e2.node.getBBox();
        return e2.remove(), i3;
      } catch (e2) {
        throw new Error(`Getting bbox of element "${t3.node.nodeName}" is not possible: ${e2.toString()}`);
      }
    }));
    return new kt(t2);
  }, rbox: function(t2) {
    const e2 = At(this, ((t3) => t3.getBoundingClientRect()), ((t3) => {
      throw new Error(`Getting rbox of element "${t3.node.nodeName}" is not possible`);
    })), i3 = new kt(e2);
    return t2 ? i3.transform(t2.screenCTM().inverseO()) : i3.addOffset();
  }, inside: function(t2, e2) {
    const i3 = this.bbox();
    return t2 > i3.x && e2 > i3.y && t2 < i3.x + i3.width && e2 < i3.y + i3.height;
  }, point: function(t2, e2) {
    return new bt(t2, e2).transformO(this.screenCTM().inverseO());
  }, ctm: function() {
    return new vt(this.node.getCTM());
  }, screenCTM: function() {
    try {
      if ("function" == typeof this.isRoot && !this.isRoot()) {
        const t2 = this.rect(1, 1), e2 = t2.node.getScreenCTM();
        return t2.remove(), new vt(e2);
      }
      return new vt(this.node.getScreenCTM());
    } catch (t2) {
      return console.warn(`Cannot get CTM from SVG node ${this.node.nodeName}. Is the element rendered?`), new vt();
    }
  } }), q(Gt, "Element");
  const jt = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(t2, e2) {
    return "color" === e2 ? t2 : t2 + "-" + e2;
  } };
  ["fill", "stroke"].forEach((function(t2) {
    const e2 = {};
    let i3;
    e2[t2] = function(e3) {
      if (void 0 === e3) return this.attr(t2);
      if ("string" == typeof e3 || e3 instanceof xt || xt.isRgb(e3) || e3 instanceof Gt) this.attr(t2, e3);
      else for (i3 = jt[t2].length - 1; i3 >= 0; i3--) null != e3[jt[t2][i3]] && this.attr(jt.prefix(t2, jt[t2][i3]), e3[jt[t2][i3]]);
      return this;
    }, A(["Element", "Runner"], e2);
  })), A(["Element", "Runner"], { matrix: function(t2, e2, i3, a3, s2, r2) {
    return null == t2 ? new vt(this) : this.attr("transform", new vt(t2, e2, i3, a3, s2, r2));
  }, rotate: function(t2, e2, i3) {
    return this.transform({ rotate: t2, ox: e2, oy: i3 }, true);
  }, skew: function(t2, e2, i3, a3) {
    return 1 === arguments.length || 3 === arguments.length ? this.transform({ skew: t2, ox: e2, oy: i3 }, true) : this.transform({ skew: [t2, e2], ox: i3, oy: a3 }, true);
  }, shear: function(t2, e2, i3) {
    return this.transform({ shear: t2, ox: e2, oy: i3 }, true);
  }, scale: function(t2, e2, i3, a3) {
    return 1 === arguments.length || 3 === arguments.length ? this.transform({ scale: t2, ox: e2, oy: i3 }, true) : this.transform({ scale: [t2, e2], ox: i3, oy: a3 }, true);
  }, translate: function(t2, e2) {
    return this.transform({ translate: [t2, e2] }, true);
  }, relative: function(t2, e2) {
    return this.transform({ relative: [t2, e2] }, true);
  }, flip: function(t2 = "both", e2 = "center") {
    return -1 === "xybothtrue".indexOf(t2) && (e2 = t2, t2 = "both"), this.transform({ flip: t2, origin: e2 }, true);
  }, opacity: function(t2) {
    return this.attr("opacity", t2);
  } }), A("radius", { radius: function(t2, e2 = t2) {
    return "radialGradient" === (this._element || this).type ? this.attr("r", new _t(t2)) : this.rx(t2).ry(e2);
  } }), A("Path", { length: function() {
    return this.node.getTotalLength();
  }, pointAt: function(t2) {
    return new bt(this.node.getPointAtLength(t2));
  } }), A(["Element", "Runner"], { font: function(t2, e2) {
    if ("object" == typeof t2) {
      for (e2 in t2) this.font(e2, t2[e2]);
      return this;
    }
    return "leading" === t2 ? this.leading(e2) : "anchor" === t2 ? this.attr("text-anchor", e2) : "size" === t2 || "family" === t2 || "weight" === t2 || "stretch" === t2 || "variant" === t2 || "style" === t2 ? this.attr("font-" + t2, e2) : this.attr(t2, e2);
  } });
  A("Element", ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel", "contextmenu", "wheel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel"].reduce((function(t2, e2) {
    return t2[e2] = function(t3) {
      return null === t3 ? this.off(e2) : this.on(e2, t3), this;
    }, t2;
  }), {})), A("Element", { untransform: function() {
    return this.attr("transform", null);
  }, matrixify: function() {
    const t2 = (this.attr("transform") || "").split(st).slice(0, -1).map((function(t3) {
      const e2 = t3.trim().split("(");
      return [e2[0], e2[1].split(dt).map((function(t4) {
        return parseFloat(t4);
      }))];
    })).reverse().reduce((function(t3, e2) {
      return "matrix" === e2[0] ? t3.lmultiply(vt.fromArray(e2[1])) : t3[e2[0]].apply(t3, e2[1]);
    }), new vt());
    return t2;
  }, toParent: function(t2, e2) {
    if (this === t2) return this;
    if (X(this.node)) return this.addTo(t2, e2);
    const i3 = this.screenCTM(), a3 = t2.screenCTM().inverse();
    return this.addTo(t2, e2).untransform().transform(a3.multiply(i3)), this;
  }, toRoot: function(t2) {
    return this.toParent(this.root(), t2);
  }, transform: function(t2, e2) {
    if (null == t2 || "string" == typeof t2) {
      const e3 = new vt(this).decompose();
      return null == t2 ? e3 : e3[t2];
    }
    vt.isMatrixLike(t2) || (t2 = { ...t2, origin: T(t2, this) });
    const i3 = new vt(true === e2 ? this : e2 || false).transform(t2);
    return this.attr("transform", i3);
  } });
  class Vt extends Gt {
    flatten() {
      return this.each((function() {
        if (this instanceof Vt) return this.flatten().ungroup();
      })), this;
    }
    ungroup(t2 = this.parent(), e2 = t2.index(this)) {
      return e2 = -1 === e2 ? t2.children().length : e2, this.each((function(i3, a3) {
        return a3[a3.length - i3 - 1].toParent(t2, e2);
      })), this.remove();
    }
  }
  q(Vt, "Container");
  class Ut extends Vt {
    constructor(t2, e2 = t2) {
      super(G("defs", t2), e2);
    }
    flatten() {
      return this;
    }
    ungroup() {
      return this;
    }
  }
  q(Ut, "Defs");
  class qt extends Gt {
  }
  function Zt(t2) {
    return this.attr("rx", t2);
  }
  function $t(t2) {
    return this.attr("ry", t2);
  }
  function Jt(t2) {
    return null == t2 ? this.cx() - this.rx() : this.cx(t2 + this.rx());
  }
  function Qt(t2) {
    return null == t2 ? this.cy() - this.ry() : this.cy(t2 + this.ry());
  }
  function Kt(t2) {
    return this.attr("cx", t2);
  }
  function te(t2) {
    return this.attr("cy", t2);
  }
  function ee(t2) {
    return null == t2 ? 2 * this.rx() : this.rx(new _t(t2).divide(2));
  }
  function ie(t2) {
    return null == t2 ? 2 * this.ry() : this.ry(new _t(t2).divide(2));
  }
  q(qt, "Shape");
  var ae = Object.freeze({ __proto__: null, cx: Kt, cy: te, height: ie, rx: Zt, ry: $t, width: ee, x: Jt, y: Qt });
  class se extends qt {
    constructor(t2, e2 = t2) {
      super(G("ellipse", t2), e2);
    }
    size(t2, e2) {
      const i3 = I(this, t2, e2);
      return this.rx(new _t(i3.width).divide(2)).ry(new _t(i3.height).divide(2));
    }
  }
  Q(se, ae), A("Container", { ellipse: K((function(t2 = 0, e2 = t2) {
    return this.put(new se()).size(t2, e2).move(0, 0);
  })) }), q(se, "Ellipse");
  class re extends Bt {
    constructor(t2 = O.document.createDocumentFragment()) {
      super(t2);
    }
    xml(t2, e2, i3) {
      if ("boolean" == typeof t2 && (i3 = e2, e2 = t2, t2 = null), null == t2 || "function" == typeof t2) {
        const t3 = new Bt(W("wrapper", i3));
        return t3.add(this.node.cloneNode(true)), t3.xml(false, i3);
      }
      return super.xml(t2, false, i3);
    }
  }
  function ne(t2, e2) {
    return "radialGradient" === (this._element || this).type ? this.attr({ fx: new _t(t2), fy: new _t(e2) }) : this.attr({ x1: new _t(t2), y1: new _t(e2) });
  }
  function oe(t2, e2) {
    return "radialGradient" === (this._element || this).type ? this.attr({ cx: new _t(t2), cy: new _t(e2) }) : this.attr({ x2: new _t(t2), y2: new _t(e2) });
  }
  q(re, "Fragment");
  var le = Object.freeze({ __proto__: null, from: ne, to: oe });
  class he extends Vt {
    constructor(t2, e2) {
      super(G(t2 + "Gradient", "string" == typeof t2 ? null : t2), e2);
    }
    attr(t2, e2, i3) {
      return "transform" === t2 && (t2 = "gradientTransform"), super.attr(t2, e2, i3);
    }
    bbox() {
      return new kt();
    }
    targets() {
      return Lt("svg [fill*=" + this.id() + "]");
    }
    toString() {
      return this.url();
    }
    update(t2) {
      return this.clear(), "function" == typeof t2 && t2.call(this, this), this;
    }
    url() {
      return "url(#" + this.id() + ")";
    }
  }
  Q(he, le), A({ Container: { gradient(...t2) {
    return this.defs().gradient(...t2);
  } }, Defs: { gradient: K((function(t2, e2) {
    return this.put(new he(t2)).update(e2);
  })) } }), q(he, "Gradient");
  class ce extends Vt {
    constructor(t2, e2 = t2) {
      super(G("pattern", t2), e2);
    }
    attr(t2, e2, i3) {
      return "transform" === t2 && (t2 = "patternTransform"), super.attr(t2, e2, i3);
    }
    bbox() {
      return new kt();
    }
    targets() {
      return Lt("svg [fill*=" + this.id() + "]");
    }
    toString() {
      return this.url();
    }
    update(t2) {
      return this.clear(), "function" == typeof t2 && t2.call(this, this), this;
    }
    url() {
      return "url(#" + this.id() + ")";
    }
  }
  A({ Container: { pattern(...t2) {
    return this.defs().pattern(...t2);
  } }, Defs: { pattern: K((function(t2, e2, i3) {
    return this.put(new ce()).update(i3).attr({ x: 0, y: 0, width: t2, height: e2, patternUnits: "userSpaceOnUse" });
  })) } }), q(ce, "Pattern");
  let de = class extends qt {
    constructor(t2, e2 = t2) {
      super(G("image", t2), e2);
    }
    load(t2, e2) {
      if (!t2) return this;
      const i3 = new O.window.Image();
      return zt(i3, "load", (function(t3) {
        const a3 = this.parent(ce);
        0 === this.width() && 0 === this.height() && this.size(i3.width, i3.height), a3 instanceof ce && 0 === a3.width() && 0 === a3.height() && a3.size(this.width(), this.height()), "function" == typeof e2 && e2.call(this, t3);
      }), this), zt(i3, "load error", (function() {
        Xt(i3);
      })), this.attr("href", i3.src = t2, H);
    }
  };
  var ue;
  ue = function(t2, e2, i3) {
    return "fill" !== t2 && "stroke" !== t2 || ct.test(e2) && (e2 = i3.root().defs().image(e2)), e2 instanceof de && (e2 = i3.root().defs().pattern(0, 0, ((t3) => {
      t3.add(e2);
    }))), e2;
  }, Wt.push(ue), A({ Container: { image: K((function(t2, e2) {
    return this.put(new de()).size(0, 0).load(t2, e2);
  })) } }), q(de, "Image");
  class ge extends Dt {
    bbox() {
      let t2 = -1 / 0, e2 = -1 / 0, i3 = 1 / 0, a3 = 1 / 0;
      return this.forEach((function(s2) {
        t2 = Math.max(s2[0], t2), e2 = Math.max(s2[1], e2), i3 = Math.min(s2[0], i3), a3 = Math.min(s2[1], a3);
      })), new kt(i3, a3, t2 - i3, e2 - a3);
    }
    move(t2, e2) {
      const i3 = this.bbox();
      if (t2 -= i3.x, e2 -= i3.y, !isNaN(t2) && !isNaN(e2)) for (let i4 = this.length - 1; i4 >= 0; i4--) this[i4] = [this[i4][0] + t2, this[i4][1] + e2];
      return this;
    }
    parse(t2 = [0, 0]) {
      const e2 = [];
      (t2 = t2 instanceof Array ? Array.prototype.concat.apply([], t2) : t2.trim().split(dt).map(parseFloat)).length % 2 != 0 && t2.pop();
      for (let i3 = 0, a3 = t2.length; i3 < a3; i3 += 2) e2.push([t2[i3], t2[i3 + 1]]);
      return e2;
    }
    size(t2, e2) {
      let i3;
      const a3 = this.bbox();
      for (i3 = this.length - 1; i3 >= 0; i3--) a3.width && (this[i3][0] = (this[i3][0] - a3.x) * t2 / a3.width + a3.x), a3.height && (this[i3][1] = (this[i3][1] - a3.y) * e2 / a3.height + a3.y);
      return this;
    }
    toLine() {
      return { x1: this[0][0], y1: this[0][1], x2: this[1][0], y2: this[1][1] };
    }
    toString() {
      const t2 = [];
      for (let e2 = 0, i3 = this.length; e2 < i3; e2++) t2.push(this[e2].join(","));
      return t2.join(" ");
    }
    transform(t2) {
      return this.clone().transformO(t2);
    }
    transformO(t2) {
      vt.isMatrixLike(t2) || (t2 = new vt(t2));
      for (let e2 = this.length; e2--; ) {
        const [i3, a3] = this[e2];
        this[e2][0] = t2.a * i3 + t2.c * a3 + t2.e, this[e2][1] = t2.b * i3 + t2.d * a3 + t2.f;
      }
      return this;
    }
  }
  const pe = ge;
  var fe = Object.freeze({ __proto__: null, MorphArray: pe, height: function(t2) {
    const e2 = this.bbox();
    return null == t2 ? e2.height : this.size(e2.width, t2);
  }, width: function(t2) {
    const e2 = this.bbox();
    return null == t2 ? e2.width : this.size(t2, e2.height);
  }, x: function(t2) {
    return null == t2 ? this.bbox().x : this.move(t2, this.bbox().y);
  }, y: function(t2) {
    return null == t2 ? this.bbox().y : this.move(this.bbox().x, t2);
  } });
  let xe = class extends qt {
    constructor(t2, e2 = t2) {
      super(G("line", t2), e2);
    }
    array() {
      return new ge([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
    }
    move(t2, e2) {
      return this.attr(this.array().move(t2, e2).toLine());
    }
    plot(t2, e2, i3, a3) {
      return null == t2 ? this.array() : (t2 = void 0 !== e2 ? { x1: t2, y1: e2, x2: i3, y2: a3 } : new ge(t2).toLine(), this.attr(t2));
    }
    size(t2, e2) {
      const i3 = I(this, t2, e2);
      return this.attr(this.array().size(i3.width, i3.height).toLine());
    }
  };
  Q(xe, fe), A({ Container: { line: K((function(...t2) {
    return xe.prototype.plot.apply(this.put(new xe()), null != t2[0] ? t2 : [0, 0, 0, 0]);
  })) } }), q(xe, "Line");
  let be = class extends Vt {
    constructor(t2, e2 = t2) {
      super(G("marker", t2), e2);
    }
    height(t2) {
      return this.attr("markerHeight", t2);
    }
    orient(t2) {
      return this.attr("orient", t2);
    }
    ref(t2, e2) {
      return this.attr("refX", t2).attr("refY", e2);
    }
    toString() {
      return "url(#" + this.id() + ")";
    }
    update(t2) {
      return this.clear(), "function" == typeof t2 && t2.call(this, this), this;
    }
    width(t2) {
      return this.attr("markerWidth", t2);
    }
  };
  function me(t2, e2) {
    return function(i3) {
      return null == i3 ? this[t2] : (this[t2] = i3, e2 && e2.call(this), this);
    };
  }
  A({ Container: { marker(...t2) {
    return this.defs().marker(...t2);
  } }, Defs: { marker: K((function(t2, e2, i3) {
    return this.put(new be()).size(t2, e2).ref(t2 / 2, e2 / 2).viewbox(0, 0, t2, e2).attr("orient", "auto").update(i3);
  })) }, marker: { marker(t2, e2, i3, a3) {
    let s2 = ["marker"];
    return "all" !== t2 && s2.push(t2), s2 = s2.join("-"), t2 = arguments[1] instanceof be ? arguments[1] : this.defs().marker(e2, i3, a3), this.attr(s2, t2);
  } } }), q(be, "Marker");
  const ve = { "-": function(t2) {
    return t2;
  }, "<>": function(t2) {
    return -Math.cos(t2 * Math.PI) / 2 + 0.5;
  }, ">": function(t2) {
    return Math.sin(t2 * Math.PI / 2);
  }, "<": function(t2) {
    return 1 - Math.cos(t2 * Math.PI / 2);
  }, bezier: function(t2, e2, i3, a3) {
    return function(s2) {
      return s2 < 0 ? t2 > 0 ? e2 / t2 * s2 : i3 > 0 ? a3 / i3 * s2 : 0 : s2 > 1 ? i3 < 1 ? (1 - a3) / (1 - i3) * s2 + (a3 - i3) / (1 - i3) : t2 < 1 ? (1 - e2) / (1 - t2) * s2 + (e2 - t2) / (1 - t2) : 1 : 3 * s2 * (1 - s2) ** 2 * e2 + 3 * s2 ** 2 * (1 - s2) * a3 + s2 ** 3;
    };
  }, steps: function(t2, e2 = "end") {
    e2 = e2.split("-").reverse()[0];
    let i3 = t2;
    return "none" === e2 ? --i3 : "both" === e2 && ++i3, (a3, s2 = false) => {
      let r2 = Math.floor(a3 * t2);
      const n2 = a3 * r2 % 1 == 0;
      return "start" !== e2 && "both" !== e2 || ++r2, s2 && n2 && --r2, a3 >= 0 && r2 < 0 && (r2 = 0), a3 <= 1 && r2 > i3 && (r2 = i3), r2 / i3;
    };
  } };
  class ye {
    done() {
      return false;
    }
  }
  class we extends ye {
    constructor(t2 = Ht) {
      super(), this.ease = ve[t2] || t2;
    }
    step(t2, e2, i3) {
      return "number" != typeof t2 ? i3 < 1 ? t2 : e2 : t2 + (e2 - t2) * this.ease(i3);
    }
  }
  class ke extends ye {
    constructor(t2) {
      super(), this.stepper = t2;
    }
    done(t2) {
      return t2.done;
    }
    step(t2, e2, i3, a3) {
      return this.stepper(t2, e2, i3, a3);
    }
  }
  function Ae() {
    const t2 = (this._duration || 500) / 1e3, e2 = this._overshoot || 0, i3 = Math.PI, a3 = Math.log(e2 / 100 + 1e-10), s2 = -a3 / Math.sqrt(i3 * i3 + a3 * a3), r2 = 3.9 / (s2 * t2);
    this.d = 2 * s2 * r2, this.k = r2 * r2;
  }
  Q(class extends ke {
    constructor(t2 = 500, e2 = 0) {
      super(), this.duration(t2).overshoot(e2);
    }
    step(t2, e2, i3, a3) {
      if ("string" == typeof t2) return t2;
      if (a3.done = i3 === 1 / 0, i3 === 1 / 0) return e2;
      if (0 === i3) return t2;
      i3 > 100 && (i3 = 16), i3 /= 1e3;
      const s2 = a3.velocity || 0, r2 = -this.d * s2 - this.k * (t2 - e2), n2 = t2 + s2 * i3 + r2 * i3 * i3 / 2;
      return a3.velocity = s2 + r2 * i3, a3.done = Math.abs(e2 - n2) + Math.abs(s2) < 2e-3, a3.done ? e2 : n2;
    }
  }, { duration: me("_duration", Ae), overshoot: me("_overshoot", Ae) });
  Q(class extends ke {
    constructor(t2 = 0.1, e2 = 0.01, i3 = 0, a3 = 1e3) {
      super(), this.p(t2).i(e2).d(i3).windup(a3);
    }
    step(t2, e2, i3, a3) {
      if ("string" == typeof t2) return t2;
      if (a3.done = i3 === 1 / 0, i3 === 1 / 0) return e2;
      if (0 === i3) return t2;
      const s2 = e2 - t2;
      let r2 = (a3.integral || 0) + s2 * i3;
      const n2 = (s2 - (a3.error || 0)) / i3, o2 = this._windup;
      return false !== o2 && (r2 = Math.max(-o2, Math.min(r2, o2))), a3.error = s2, a3.integral = r2, a3.done = Math.abs(s2) < 1e-3, a3.done ? e2 : t2 + (this.P * s2 + this.I * r2 + this.D * n2);
    }
  }, { windup: me("_windup"), p: me("P"), i: me("I"), d: me("D") });
  const Ce = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 }, Se = { M: function(t2, e2, i3) {
    return e2.x = i3.x = t2[0], e2.y = i3.y = t2[1], ["M", e2.x, e2.y];
  }, L: function(t2, e2) {
    return e2.x = t2[0], e2.y = t2[1], ["L", t2[0], t2[1]];
  }, H: function(t2, e2) {
    return e2.x = t2[0], ["H", t2[0]];
  }, V: function(t2, e2) {
    return e2.y = t2[0], ["V", t2[0]];
  }, C: function(t2, e2) {
    return e2.x = t2[4], e2.y = t2[5], ["C", t2[0], t2[1], t2[2], t2[3], t2[4], t2[5]];
  }, S: function(t2, e2) {
    return e2.x = t2[2], e2.y = t2[3], ["S", t2[0], t2[1], t2[2], t2[3]];
  }, Q: function(t2, e2) {
    return e2.x = t2[2], e2.y = t2[3], ["Q", t2[0], t2[1], t2[2], t2[3]];
  }, T: function(t2, e2) {
    return e2.x = t2[0], e2.y = t2[1], ["T", t2[0], t2[1]];
  }, Z: function(t2, e2, i3) {
    return e2.x = i3.x, e2.y = i3.y, ["Z"];
  }, A: function(t2, e2) {
    return e2.x = t2[5], e2.y = t2[6], ["A", t2[0], t2[1], t2[2], t2[3], t2[4], t2[5], t2[6]];
  } }, Le = "mlhvqtcsaz".split("");
  for (let t2 = 0, e2 = Le.length; t2 < e2; ++t2) Se[Le[t2]] = /* @__PURE__ */ (function(t3) {
    return function(e3, i3, a3) {
      if ("H" === t3) e3[0] = e3[0] + i3.x;
      else if ("V" === t3) e3[0] = e3[0] + i3.y;
      else if ("A" === t3) e3[5] = e3[5] + i3.x, e3[6] = e3[6] + i3.y;
      else for (let t4 = 0, a4 = e3.length; t4 < a4; ++t4) e3[t4] = e3[t4] + (t4 % 2 ? i3.y : i3.x);
      return Se[t3](e3, i3, a3);
    };
  })(Le[t2].toUpperCase());
  function Me(t2) {
    return t2.segment.length && t2.segment.length - 1 === Ce[t2.segment[0].toUpperCase()];
  }
  function Pe(t2, e2) {
    t2.inNumber && Ie(t2, false);
    const i3 = ut.test(e2);
    if (i3) t2.segment = [e2];
    else {
      const e3 = t2.lastCommand, i4 = e3.toLowerCase(), a3 = e3 === i4;
      t2.segment = ["m" === i4 ? a3 ? "l" : "L" : e3];
    }
    return t2.inSegment = true, t2.lastCommand = t2.segment[0], i3;
  }
  function Ie(t2, e2) {
    if (!t2.inNumber) throw new Error("Parser Error");
    t2.number && t2.segment.push(parseFloat(t2.number)), t2.inNumber = e2, t2.number = "", t2.pointSeen = false, t2.hasExponent = false, Me(t2) && Te(t2);
  }
  function Te(t2) {
    t2.inSegment = false, t2.absolute && (t2.segment = (function(t3) {
      const e2 = t3.segment[0];
      return Se[e2](t3.segment.slice(1), t3.p, t3.p0);
    })(t2)), t2.segments.push(t2.segment);
  }
  function ze(t2) {
    if (!t2.segment.length) return false;
    const e2 = "A" === t2.segment[0].toUpperCase(), i3 = t2.segment.length;
    return e2 && (4 === i3 || 5 === i3);
  }
  function Xe(t2) {
    return "E" === t2.lastToken.toUpperCase();
  }
  const Re = /* @__PURE__ */ new Set([" ", ",", "	", "\n", "\r", "\f"]);
  class Ee extends Dt {
    bbox() {
      return yt().path.setAttribute("d", this.toString()), new kt(yt.nodes.path.getBBox());
    }
    move(t2, e2) {
      const i3 = this.bbox();
      if (t2 -= i3.x, e2 -= i3.y, !isNaN(t2) && !isNaN(e2)) for (let i4, a3 = this.length - 1; a3 >= 0; a3--) i4 = this[a3][0], "M" === i4 || "L" === i4 || "T" === i4 ? (this[a3][1] += t2, this[a3][2] += e2) : "H" === i4 ? this[a3][1] += t2 : "V" === i4 ? this[a3][1] += e2 : "C" === i4 || "S" === i4 || "Q" === i4 ? (this[a3][1] += t2, this[a3][2] += e2, this[a3][3] += t2, this[a3][4] += e2, "C" === i4 && (this[a3][5] += t2, this[a3][6] += e2)) : "A" === i4 && (this[a3][6] += t2, this[a3][7] += e2);
      return this;
    }
    parse(t2 = "M0 0") {
      return Array.isArray(t2) && (t2 = Array.prototype.concat.apply([], t2).toString()), (function(t3, e2 = true) {
        let i3 = 0, a3 = "";
        const s2 = { segment: [], inNumber: false, number: "", lastToken: "", inSegment: false, segments: [], pointSeen: false, hasExponent: false, absolute: e2, p0: new bt(), p: new bt() };
        for (; s2.lastToken = a3, a3 = t3.charAt(i3++); ) if (s2.inSegment || !Pe(s2, a3)) if ("." !== a3) if (isNaN(parseInt(a3))) if (Re.has(a3)) s2.inNumber && Ie(s2, false);
        else if ("-" !== a3 && "+" !== a3) if ("E" !== a3.toUpperCase()) {
          if (ut.test(a3)) {
            if (s2.inNumber) Ie(s2, false);
            else {
              if (!Me(s2)) throw new Error("parser Error");
              Te(s2);
            }
            --i3;
          }
        } else s2.number += a3, s2.hasExponent = true;
        else {
          if (s2.inNumber && !Xe(s2)) {
            Ie(s2, false), --i3;
            continue;
          }
          s2.number += a3, s2.inNumber = true;
        }
        else {
          if ("0" === s2.number || ze(s2)) {
            s2.inNumber = true, s2.number = a3, Ie(s2, true);
            continue;
          }
          s2.inNumber = true, s2.number += a3;
        }
        else {
          if (s2.pointSeen || s2.hasExponent) {
            Ie(s2, false), --i3;
            continue;
          }
          s2.inNumber = true, s2.pointSeen = true, s2.number += a3;
        }
        return s2.inNumber && Ie(s2, false), s2.inSegment && Me(s2) && Te(s2), s2.segments;
      })(t2);
    }
    size(t2, e2) {
      const i3 = this.bbox();
      let a3, s2;
      for (i3.width = 0 === i3.width ? 1 : i3.width, i3.height = 0 === i3.height ? 1 : i3.height, a3 = this.length - 1; a3 >= 0; a3--) s2 = this[a3][0], "M" === s2 || "L" === s2 || "T" === s2 ? (this[a3][1] = (this[a3][1] - i3.x) * t2 / i3.width + i3.x, this[a3][2] = (this[a3][2] - i3.y) * e2 / i3.height + i3.y) : "H" === s2 ? this[a3][1] = (this[a3][1] - i3.x) * t2 / i3.width + i3.x : "V" === s2 ? this[a3][1] = (this[a3][1] - i3.y) * e2 / i3.height + i3.y : "C" === s2 || "S" === s2 || "Q" === s2 ? (this[a3][1] = (this[a3][1] - i3.x) * t2 / i3.width + i3.x, this[a3][2] = (this[a3][2] - i3.y) * e2 / i3.height + i3.y, this[a3][3] = (this[a3][3] - i3.x) * t2 / i3.width + i3.x, this[a3][4] = (this[a3][4] - i3.y) * e2 / i3.height + i3.y, "C" === s2 && (this[a3][5] = (this[a3][5] - i3.x) * t2 / i3.width + i3.x, this[a3][6] = (this[a3][6] - i3.y) * e2 / i3.height + i3.y)) : "A" === s2 && (this[a3][1] = this[a3][1] * t2 / i3.width, this[a3][2] = this[a3][2] * e2 / i3.height, this[a3][6] = (this[a3][6] - i3.x) * t2 / i3.width + i3.x, this[a3][7] = (this[a3][7] - i3.y) * e2 / i3.height + i3.y);
      return this;
    }
    toString() {
      return (function(t2) {
        let e2 = "";
        for (let i3 = 0, a3 = t2.length; i3 < a3; i3++) e2 += t2[i3][0], null != t2[i3][1] && (e2 += t2[i3][1], null != t2[i3][2] && (e2 += " ", e2 += t2[i3][2], null != t2[i3][3] && (e2 += " ", e2 += t2[i3][3], e2 += " ", e2 += t2[i3][4], null != t2[i3][5] && (e2 += " ", e2 += t2[i3][5], e2 += " ", e2 += t2[i3][6], null != t2[i3][7] && (e2 += " ", e2 += t2[i3][7])))));
        return e2 + " ";
      })(this);
    }
  }
  const Ye = (t2) => {
    const e2 = typeof t2;
    return "number" === e2 ? _t : "string" === e2 ? xt.isColor(t2) ? xt : dt.test(t2) ? ut.test(t2) ? Ee : Dt : tt.test(t2) ? _t : Oe : Ne.indexOf(t2.constructor) > -1 ? t2.constructor : Array.isArray(t2) ? Dt : "object" === e2 ? _e : Oe;
  };
  class He {
    constructor(t2) {
      this._stepper = t2 || new we("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null;
    }
    at(t2) {
      return this._morphObj.morph(this._from, this._to, t2, this._stepper, this._context);
    }
    done() {
      return this._context.map(this._stepper.done).reduce((function(t2, e2) {
        return t2 && e2;
      }), true);
    }
    from(t2) {
      return null == t2 ? this._from : (this._from = this._set(t2), this);
    }
    stepper(t2) {
      return null == t2 ? this._stepper : (this._stepper = t2, this);
    }
    to(t2) {
      return null == t2 ? this._to : (this._to = this._set(t2), this);
    }
    type(t2) {
      return null == t2 ? this._type : (this._type = t2, this);
    }
    _set(t2) {
      this._type || this.type(Ye(t2));
      let e2 = new this._type(t2);
      return this._type === xt && (e2 = this._to ? e2[this._to[4]]() : this._from ? e2[this._from[4]]() : e2), this._type === _e && (e2 = this._to ? e2.align(this._to) : this._from ? e2.align(this._from) : e2), e2 = e2.toConsumable(), this._morphObj = this._morphObj || new this._type(), this._context = this._context || Array.apply(null, Array(e2.length)).map(Object).map((function(t3) {
        return t3.done = true, t3;
      })), e2;
    }
  }
  class Oe {
    constructor(...t2) {
      this.init(...t2);
    }
    init(t2) {
      return t2 = Array.isArray(t2) ? t2[0] : t2, this.value = t2, this;
    }
    toArray() {
      return [this.value];
    }
    valueOf() {
      return this.value;
    }
  }
  class Fe {
    constructor(...t2) {
      this.init(...t2);
    }
    init(t2) {
      return Array.isArray(t2) && (t2 = { scaleX: t2[0], scaleY: t2[1], shear: t2[2], rotate: t2[3], translateX: t2[4], translateY: t2[5], originX: t2[6], originY: t2[7] }), Object.assign(this, Fe.defaults, t2), this;
    }
    toArray() {
      const t2 = this;
      return [t2.scaleX, t2.scaleY, t2.shear, t2.rotate, t2.translateX, t2.translateY, t2.originX, t2.originY];
    }
  }
  Fe.defaults = { scaleX: 1, scaleY: 1, shear: 0, rotate: 0, translateX: 0, translateY: 0, originX: 0, originY: 0 };
  const De = (t2, e2) => t2[0] < e2[0] ? -1 : t2[0] > e2[0] ? 1 : 0;
  class _e {
    constructor(...t2) {
      this.init(...t2);
    }
    align(t2) {
      const e2 = this.values;
      for (let i3 = 0, a3 = e2.length; i3 < a3; ++i3) {
        if (e2[i3 + 1] === t2[i3 + 1]) {
          if (e2[i3 + 1] === xt && t2[i3 + 7] !== e2[i3 + 7]) {
            const e3 = t2[i3 + 7], a5 = new xt(this.values.splice(i3 + 3, 5))[e3]().toArray();
            this.values.splice(i3 + 3, 0, ...a5);
          }
          i3 += e2[i3 + 2] + 2;
          continue;
        }
        if (!t2[i3 + 1]) return this;
        const a4 = new t2[i3 + 1]().toArray(), s2 = e2[i3 + 2] + 3;
        e2.splice(i3, s2, t2[i3], t2[i3 + 1], t2[i3 + 2], ...a4), i3 += e2[i3 + 2] + 2;
      }
      return this;
    }
    init(t2) {
      if (this.values = [], Array.isArray(t2)) return void (this.values = t2.slice());
      t2 = t2 || {};
      const e2 = [];
      for (const i3 in t2) {
        const a3 = Ye(t2[i3]), s2 = new a3(t2[i3]).toArray();
        e2.push([i3, a3, s2.length, ...s2]);
      }
      return e2.sort(De), this.values = e2.reduce(((t3, e3) => t3.concat(e3)), []), this;
    }
    toArray() {
      return this.values;
    }
    valueOf() {
      const t2 = {}, e2 = this.values;
      for (; e2.length; ) {
        const i3 = e2.shift(), a3 = e2.shift(), s2 = e2.shift(), r2 = e2.splice(0, s2);
        t2[i3] = new a3(r2);
      }
      return t2;
    }
  }
  const Ne = [Oe, Fe, _e];
  class We extends qt {
    constructor(t2, e2 = t2) {
      super(G("path", t2), e2);
    }
    array() {
      return this._array || (this._array = new Ee(this.attr("d")));
    }
    clear() {
      return delete this._array, this;
    }
    height(t2) {
      return null == t2 ? this.bbox().height : this.size(this.bbox().width, t2);
    }
    move(t2, e2) {
      return this.attr("d", this.array().move(t2, e2));
    }
    plot(t2) {
      return null == t2 ? this.array() : this.clear().attr("d", "string" == typeof t2 ? t2 : this._array = new Ee(t2));
    }
    size(t2, e2) {
      const i3 = I(this, t2, e2);
      return this.attr("d", this.array().size(i3.width, i3.height));
    }
    width(t2) {
      return null == t2 ? this.bbox().width : this.size(t2, this.bbox().height);
    }
    x(t2) {
      return null == t2 ? this.bbox().x : this.move(t2, this.bbox().y);
    }
    y(t2) {
      return null == t2 ? this.bbox().y : this.move(this.bbox().x, t2);
    }
  }
  We.prototype.MorphArray = Ee, A({ Container: { path: K((function(t2) {
    return this.put(new We()).plot(t2 || new Ee());
  })) } }), q(We, "Path");
  var Be = Object.freeze({ __proto__: null, array: function() {
    return this._array || (this._array = new ge(this.attr("points")));
  }, clear: function() {
    return delete this._array, this;
  }, move: function(t2, e2) {
    return this.attr("points", this.array().move(t2, e2));
  }, plot: function(t2) {
    return null == t2 ? this.array() : this.clear().attr("points", "string" == typeof t2 ? t2 : this._array = new ge(t2));
  }, size: function(t2, e2) {
    const i3 = I(this, t2, e2);
    return this.attr("points", this.array().size(i3.width, i3.height));
  } });
  class Ge extends qt {
    constructor(t2, e2 = t2) {
      super(G("polygon", t2), e2);
    }
  }
  A({ Container: { polygon: K((function(t2) {
    return this.put(new Ge()).plot(t2 || new ge());
  })) } }), Q(Ge, fe), Q(Ge, Be), q(Ge, "Polygon");
  class je extends qt {
    constructor(t2, e2 = t2) {
      super(G("polyline", t2), e2);
    }
  }
  A({ Container: { polyline: K((function(t2) {
    return this.put(new je()).plot(t2 || new ge());
  })) } }), Q(je, fe), Q(je, Be), q(je, "Polyline");
  class Ve extends qt {
    constructor(t2, e2 = t2) {
      super(G("rect", t2), e2);
    }
  }
  Q(Ve, { rx: Zt, ry: $t }), A({ Container: { rect: K((function(t2, e2) {
    return this.put(new Ve()).size(t2, e2);
  })) } }), q(Ve, "Rect");
  class Ue {
    constructor() {
      this._first = null, this._last = null;
    }
    first() {
      return this._first && this._first.value;
    }
    last() {
      return this._last && this._last.value;
    }
    push(t2) {
      const e2 = void 0 !== t2.next ? t2 : { value: t2, next: null, prev: null };
      return this._last ? (e2.prev = this._last, this._last.next = e2, this._last = e2) : (this._last = e2, this._first = e2), e2;
    }
    remove(t2) {
      t2.prev && (t2.prev.next = t2.next), t2.next && (t2.next.prev = t2.prev), t2 === this._last && (this._last = t2.prev), t2 === this._first && (this._first = t2.next), t2.prev = null, t2.next = null;
    }
    shift() {
      const t2 = this._first;
      return t2 ? (this._first = t2.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, t2.value) : null;
    }
  }
  const qe = { nextDraw: null, frames: new Ue(), timeouts: new Ue(), immediates: new Ue(), timer: () => O.window.performance || O.window.Date, transforms: [], frame(t2) {
    const e2 = qe.frames.push({ run: t2 });
    return null === qe.nextDraw && (qe.nextDraw = O.window.requestAnimationFrame(qe._draw)), e2;
  }, timeout(t2, e2) {
    e2 = e2 || 0;
    const i3 = qe.timer().now() + e2, a3 = qe.timeouts.push({ run: t2, time: i3 });
    return null === qe.nextDraw && (qe.nextDraw = O.window.requestAnimationFrame(qe._draw)), a3;
  }, immediate(t2) {
    const e2 = qe.immediates.push(t2);
    return null === qe.nextDraw && (qe.nextDraw = O.window.requestAnimationFrame(qe._draw)), e2;
  }, cancelFrame(t2) {
    null != t2 && qe.frames.remove(t2);
  }, clearTimeout(t2) {
    null != t2 && qe.timeouts.remove(t2);
  }, cancelImmediate(t2) {
    null != t2 && qe.immediates.remove(t2);
  }, _draw(t2) {
    let e2 = null;
    const i3 = qe.timeouts.last();
    for (; (e2 = qe.timeouts.shift()) && (t2 >= e2.time ? e2.run() : qe.timeouts.push(e2), e2 !== i3); ) ;
    let a3 = null;
    const s2 = qe.frames.last();
    for (; a3 !== s2 && (a3 = qe.frames.shift()); ) a3.run(t2);
    let r2 = null;
    for (; r2 = qe.immediates.shift(); ) r2();
    qe.nextDraw = qe.timeouts.first() || qe.frames.first() ? O.window.requestAnimationFrame(qe._draw) : null;
  } }, Ze = function(t2) {
    const e2 = t2.start, i3 = t2.runner.duration();
    return { start: e2, duration: i3, end: e2 + i3, runner: t2.runner };
  }, $e = function() {
    const t2 = O.window;
    return (t2.performance || t2.Date).now();
  };
  class Je extends Rt {
    constructor(t2 = $e) {
      super(), this._timeSource = t2, this.terminate();
    }
    active() {
      return !!this._nextFrame;
    }
    finish() {
      return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
    }
    getEndTime() {
      const t2 = this.getLastRunnerInfo(), e2 = t2 ? t2.runner.duration() : 0;
      return (t2 ? t2.start : this._time) + e2;
    }
    getEndTimeOfTimeline() {
      const t2 = this._runners.map(((t3) => t3.start + t3.runner.duration()));
      return Math.max(0, ...t2);
    }
    getLastRunnerInfo() {
      return this.getRunnerInfoById(this._lastRunnerId);
    }
    getRunnerInfoById(t2) {
      return this._runners[this._runnerIds.indexOf(t2)] || null;
    }
    pause() {
      return this._paused = true, this._continue();
    }
    persist(t2) {
      return null == t2 ? this._persist : (this._persist = t2, this);
    }
    play() {
      return this._paused = false, this.updateTime()._continue();
    }
    reverse(t2) {
      const e2 = this.speed();
      if (null == t2) return this.speed(-e2);
      const i3 = Math.abs(e2);
      return this.speed(t2 ? -i3 : i3);
    }
    schedule(t2, e2, i3) {
      if (null == t2) return this._runners.map(Ze);
      let a3 = 0;
      const s2 = this.getEndTime();
      if (e2 = e2 || 0, null == i3 || "last" === i3 || "after" === i3) a3 = s2;
      else if ("absolute" === i3 || "start" === i3) a3 = e2, e2 = 0;
      else if ("now" === i3) a3 = this._time;
      else if ("relative" === i3) {
        const i4 = this.getRunnerInfoById(t2.id);
        i4 && (a3 = i4.start + e2, e2 = 0);
      } else {
        if ("with-last" !== i3) throw new Error('Invalid value for the "when" parameter');
        {
          const t3 = this.getLastRunnerInfo();
          a3 = t3 ? t3.start : this._time;
        }
      }
      t2.unschedule(), t2.timeline(this);
      const r2 = t2.persist(), n2 = { persist: null === r2 ? this._persist : r2, start: a3 + e2, runner: t2 };
      return this._lastRunnerId = t2.id, this._runners.push(n2), this._runners.sort(((t3, e3) => t3.start - e3.start)), this._runnerIds = this._runners.map(((t3) => t3.runner.id)), this.updateTime()._continue(), this;
    }
    seek(t2) {
      return this.time(this._time + t2);
    }
    source(t2) {
      return null == t2 ? this._timeSource : (this._timeSource = t2, this);
    }
    speed(t2) {
      return null == t2 ? this._speed : (this._speed = t2, this);
    }
    stop() {
      return this.time(0), this.pause();
    }
    time(t2) {
      return null == t2 ? this._time : (this._time = t2, this._continue(true));
    }
    unschedule(t2) {
      const e2 = this._runnerIds.indexOf(t2.id);
      return e2 < 0 || (this._runners.splice(e2, 1), this._runnerIds.splice(e2, 1), t2.timeline(null)), this;
    }
    updateTime() {
      return this.active() || (this._lastSourceTime = this._timeSource()), this;
    }
    _continue(t2 = false) {
      return qe.cancelFrame(this._nextFrame), this._nextFrame = null, t2 ? this._stepImmediate() : (this._paused || (this._nextFrame = qe.frame(this._step)), this);
    }
    _stepFn(t2 = false) {
      const e2 = this._timeSource();
      let i3 = e2 - this._lastSourceTime;
      t2 && (i3 = 0);
      const a3 = this._speed * i3 + (this._time - this._lastStepTime);
      this._lastSourceTime = e2, t2 || (this._time += a3, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);
      for (let t3 = this._runners.length; t3--; ) {
        const e3 = this._runners[t3], i4 = e3.runner;
        this._time - e3.start <= 0 && i4.reset();
      }
      let s2 = false;
      for (let t3 = 0, e3 = this._runners.length; t3 < e3; t3++) {
        const i4 = this._runners[t3], r2 = i4.runner;
        let n2 = a3;
        const o2 = this._time - i4.start;
        if (o2 <= 0) {
          s2 = true;
          continue;
        }
        if (o2 < n2 && (n2 = o2), !r2.active()) continue;
        if (r2.step(n2).done) {
          if (true !== i4.persist) {
            r2.duration() - r2.time() + this._time + i4.persist < this._time && (r2.unschedule(), --t3, --e3);
          }
        } else s2 = true;
      }
      return s2 && !(this._speed < 0 && 0 === this._time) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this;
    }
    terminate() {
      this._startTime = 0, this._speed = 1, this._persist = 0, this._nextFrame = null, this._paused = true, this._runners = [], this._runnerIds = [], this._lastRunnerId = -1, this._time = 0, this._lastSourceTime = 0, this._lastStepTime = 0, this._step = this._stepFn.bind(this, false), this._stepImmediate = this._stepFn.bind(this, true);
    }
  }
  A({ Element: { timeline: function(t2) {
    return null == t2 ? (this._timeline = this._timeline || new Je(), this._timeline) : (this._timeline = t2, this);
  } } });
  class Qe extends Rt {
    constructor(t2) {
      super(), this.id = Qe.id++, t2 = "function" == typeof (t2 = null == t2 ? Yt : t2) ? new ke(t2) : t2, this._element = null, this._timeline = null, this.done = false, this._queue = [], this._duration = "number" == typeof t2 && t2, this._isDeclarative = t2 instanceof ke, this._stepper = this._isDeclarative ? t2 : new we(), this._history = {}, this.enabled = true, this._time = 0, this._lastTime = 0, this._reseted = true, this.transforms = new vt(), this.transformId = 1, this._haveReversed = false, this._reverse = false, this._loopsDone = 0, this._swing = false, this._wait = 0, this._times = 1, this._frameId = null, this._persist = !!this._isDeclarative || null;
    }
    static sanitise(t2, e2, i3) {
      let a3 = 1, s2 = false, r2 = 0;
      return e2 = e2 ?? Ot, i3 = i3 || "last", "object" != typeof (t2 = t2 ?? Yt) || t2 instanceof ye || (e2 = t2.delay ?? e2, i3 = t2.when ?? i3, s2 = t2.swing || s2, a3 = t2.times ?? a3, r2 = t2.wait ?? r2, t2 = t2.duration ?? Yt), { duration: t2, delay: e2, swing: s2, times: a3, wait: r2, when: i3 };
    }
    active(t2) {
      return null == t2 ? this.enabled : (this.enabled = t2, this);
    }
    addTransform(t2) {
      return this.transforms.lmultiplyO(t2), this;
    }
    after(t2) {
      return this.on("finished", t2);
    }
    animate(t2, e2, i3) {
      const a3 = Qe.sanitise(t2, e2, i3), s2 = new Qe(a3.duration);
      return this._timeline && s2.timeline(this._timeline), this._element && s2.element(this._element), s2.loop(a3).schedule(a3.delay, a3.when);
    }
    clearTransform() {
      return this.transforms = new vt(), this;
    }
    clearTransformsFromQueue() {
      this.done && this._timeline && this._timeline._runnerIds.includes(this.id) || (this._queue = this._queue.filter(((t2) => !t2.isTransform)));
    }
    delay(t2) {
      return this.animate(0, t2);
    }
    duration() {
      return this._times * (this._wait + this._duration) - this._wait;
    }
    during(t2) {
      return this.queue(null, t2);
    }
    ease(t2) {
      return this._stepper = new we(t2), this;
    }
    element(t2) {
      return null == t2 ? this._element : (this._element = t2, t2._prepareRunner(), this);
    }
    finish() {
      return this.step(1 / 0);
    }
    loop(t2, e2, i3) {
      return "object" == typeof t2 && (e2 = t2.swing, i3 = t2.wait, t2 = t2.times), this._times = t2 || 1 / 0, this._swing = e2 || false, this._wait = i3 || 0, true === this._times && (this._times = 1 / 0), this;
    }
    loops(t2) {
      const e2 = this._duration + this._wait;
      if (null == t2) {
        const t3 = Math.floor(this._time / e2), i4 = (this._time - t3 * e2) / this._duration;
        return Math.min(t3 + i4, this._times);
      }
      const i3 = t2 % 1, a3 = e2 * Math.floor(t2) + this._duration * i3;
      return this.time(a3);
    }
    persist(t2) {
      return null == t2 ? this._persist : (this._persist = t2, this);
    }
    position(t2) {
      const e2 = this._time, i3 = this._duration, a3 = this._wait, s2 = this._times, r2 = this._swing, n2 = this._reverse;
      let o2;
      if (null == t2) {
        const t3 = function(t4) {
          const e3 = r2 * Math.floor(t4 % (2 * (a3 + i3)) / (a3 + i3)), s3 = e3 && !n2 || !e3 && n2, o3 = Math.pow(-1, s3) * (t4 % (a3 + i3)) / i3 + s3;
          return Math.max(Math.min(o3, 1), 0);
        }, l3 = s2 * (a3 + i3) - a3;
        return o2 = e2 <= 0 ? Math.round(t3(1e-5)) : e2 < l3 ? t3(e2) : Math.round(t3(l3 - 1e-5)), o2;
      }
      const l2 = Math.floor(this.loops()), h2 = r2 && l2 % 2 == 0;
      return o2 = l2 + (h2 && !n2 || n2 && h2 ? t2 : 1 - t2), this.loops(o2);
    }
    progress(t2) {
      return null == t2 ? Math.min(1, this._time / this.duration()) : this.time(t2 * this.duration());
    }
    queue(t2, e2, i3, a3) {
      this._queue.push({ initialiser: t2 || Et, runner: e2 || Et, retarget: i3, isTransform: a3, initialised: false, finished: false });
      return this.timeline() && this.timeline()._continue(), this;
    }
    reset() {
      return this._reseted || (this.time(0), this._reseted = true), this;
    }
    reverse(t2) {
      return this._reverse = null == t2 ? !this._reverse : t2, this;
    }
    schedule(t2, e2, i3) {
      if (t2 instanceof Je || (i3 = e2, e2 = t2, t2 = this.timeline()), !t2) throw Error("Runner cannot be scheduled without timeline");
      return t2.schedule(this, e2, i3), this;
    }
    step(t2) {
      if (!this.enabled) return this;
      t2 = null == t2 ? 16 : t2, this._time += t2;
      const e2 = this.position(), i3 = this._lastPosition !== e2 && this._time >= 0;
      this._lastPosition = e2;
      const a3 = this.duration(), s2 = this._lastTime <= 0 && this._time > 0, r2 = this._lastTime < a3 && this._time >= a3;
      this._lastTime = this._time, s2 && this.fire("start", this);
      const n2 = this._isDeclarative;
      this.done = !n2 && !r2 && this._time >= a3, this._reseted = false;
      let o2 = false;
      return (i3 || n2) && (this._initialise(i3), this.transforms = new vt(), o2 = this._run(n2 ? t2 : e2), this.fire("step", this)), this.done = this.done || o2 && n2, r2 && this.fire("finished", this), this;
    }
    time(t2) {
      if (null == t2) return this._time;
      const e2 = t2 - this._time;
      return this.step(e2), this;
    }
    timeline(t2) {
      return void 0 === t2 ? this._timeline : (this._timeline = t2, this);
    }
    unschedule() {
      const t2 = this.timeline();
      return t2 && t2.unschedule(this), this;
    }
    _initialise(t2) {
      if (t2 || this._isDeclarative) for (let e2 = 0, i3 = this._queue.length; e2 < i3; ++e2) {
        const i4 = this._queue[e2], a3 = this._isDeclarative || !i4.initialised && t2;
        t2 = !i4.finished, a3 && t2 && (i4.initialiser.call(this), i4.initialised = true);
      }
    }
    _rememberMorpher(t2, e2) {
      if (this._history[t2] = { morpher: e2, caller: this._queue[this._queue.length - 1] }, this._isDeclarative) {
        const t3 = this.timeline();
        t3 && t3.play();
      }
    }
    _run(t2) {
      let e2 = true;
      for (let i3 = 0, a3 = this._queue.length; i3 < a3; ++i3) {
        const a4 = this._queue[i3], s2 = a4.runner.call(this, t2);
        a4.finished = a4.finished || true === s2, e2 = e2 && a4.finished;
      }
      return e2;
    }
    _tryRetarget(t2, e2, i3) {
      if (this._history[t2]) {
        if (!this._history[t2].caller.initialised) {
          const e3 = this._queue.indexOf(this._history[t2].caller);
          return this._queue.splice(e3, 1), false;
        }
        this._history[t2].caller.retarget ? this._history[t2].caller.retarget.call(this, e2, i3) : this._history[t2].morpher.to(e2), this._history[t2].caller.finished = false;
        const a3 = this.timeline();
        return a3 && a3.play(), true;
      }
      return false;
    }
  }
  Qe.id = 0;
  class Ke {
    constructor(t2 = new vt(), e2 = -1, i3 = true) {
      this.transforms = t2, this.id = e2, this.done = i3;
    }
    clearTransformsFromQueue() {
    }
  }
  Q([Qe, Ke], { mergeWith(t2) {
    return new Ke(t2.transforms.lmultiply(this.transforms), t2.id);
  } });
  const ti = (t2, e2) => t2.lmultiplyO(e2), ei = (t2) => t2.transforms;
  function ii() {
    const t2 = this._transformationRunners.runners.map(ei).reduce(ti, new vt());
    this.transform(t2), this._transformationRunners.merge(), 1 === this._transformationRunners.length() && (this._frameId = null);
  }
  class ai {
    constructor() {
      this.runners = [], this.ids = [];
    }
    add(t2) {
      if (this.runners.includes(t2)) return;
      const e2 = t2.id + 1;
      return this.runners.push(t2), this.ids.push(e2), this;
    }
    clearBefore(t2) {
      const e2 = this.ids.indexOf(t2 + 1) || 1;
      return this.ids.splice(0, e2, 0), this.runners.splice(0, e2, new Ke()).forEach(((t3) => t3.clearTransformsFromQueue())), this;
    }
    edit(t2, e2) {
      const i3 = this.ids.indexOf(t2 + 1);
      return this.ids.splice(i3, 1, t2 + 1), this.runners.splice(i3, 1, e2), this;
    }
    getByID(t2) {
      return this.runners[this.ids.indexOf(t2 + 1)];
    }
    length() {
      return this.ids.length;
    }
    merge() {
      let t2 = null;
      for (let e2 = 0; e2 < this.runners.length; ++e2) {
        const i3 = this.runners[e2];
        if (t2 && i3.done && t2.done && (!i3._timeline || !i3._timeline._runnerIds.includes(i3.id)) && (!t2._timeline || !t2._timeline._runnerIds.includes(t2.id))) {
          this.remove(i3.id);
          const a3 = i3.mergeWith(t2);
          this.edit(t2.id, a3), t2 = a3, --e2;
        } else t2 = i3;
      }
      return this;
    }
    remove(t2) {
      const e2 = this.ids.indexOf(t2 + 1);
      return this.ids.splice(e2, 1), this.runners.splice(e2, 1), this;
    }
  }
  A({ Element: { animate(t2, e2, i3) {
    const a3 = Qe.sanitise(t2, e2, i3), s2 = this.timeline();
    return new Qe(a3.duration).loop(a3).element(this).timeline(s2.play()).schedule(a3.delay, a3.when);
  }, delay(t2, e2) {
    return this.animate(0, t2, e2);
  }, _clearTransformRunnersBefore(t2) {
    this._transformationRunners.clearBefore(t2.id);
  }, _currentTransform(t2) {
    return this._transformationRunners.runners.filter(((e2) => e2.id <= t2.id)).map(ei).reduce(ti, new vt());
  }, _addRunner(t2) {
    this._transformationRunners.add(t2), qe.cancelImmediate(this._frameId), this._frameId = qe.immediate(ii.bind(this));
  }, _prepareRunner() {
    null == this._frameId && (this._transformationRunners = new ai().add(new Ke(new vt(this))));
  } } });
  Q(Qe, { attr(t2, e2) {
    return this.styleAttr("attr", t2, e2);
  }, css(t2, e2) {
    return this.styleAttr("css", t2, e2);
  }, styleAttr(t2, e2, i3) {
    if ("string" == typeof e2) return this.styleAttr(t2, { [e2]: i3 });
    let a3 = e2;
    if (this._tryRetarget(t2, a3)) return this;
    let s2 = new He(this._stepper).to(a3), r2 = Object.keys(a3);
    return this.queue((function() {
      s2 = s2.from(this.element()[t2](r2));
    }), (function(e3) {
      return this.element()[t2](s2.at(e3).valueOf()), s2.done();
    }), (function(e3) {
      const i4 = Object.keys(e3), n2 = (o2 = r2, i4.filter(((t3) => !o2.includes(t3))));
      var o2;
      if (n2.length) {
        const e4 = this.element()[t2](n2), i5 = new _e(s2.from()).valueOf();
        Object.assign(i5, e4), s2.from(i5);
      }
      const l2 = new _e(s2.to()).valueOf();
      Object.assign(l2, e3), s2.to(l2), r2 = i4, a3 = e3;
    })), this._rememberMorpher(t2, s2), this;
  }, zoom(t2, e2) {
    if (this._tryRetarget("zoom", t2, e2)) return this;
    let i3 = new He(this._stepper).to(new _t(t2));
    return this.queue((function() {
      i3 = i3.from(this.element().zoom());
    }), (function(t3) {
      return this.element().zoom(i3.at(t3), e2), i3.done();
    }), (function(t3, a3) {
      e2 = a3, i3.to(t3);
    })), this._rememberMorpher("zoom", i3), this;
  }, transform(t2, e2, i3) {
    if (e2 = t2.relative || e2, this._isDeclarative && !e2 && this._tryRetarget("transform", t2)) return this;
    const a3 = vt.isMatrixLike(t2);
    i3 = null != t2.affine ? t2.affine : null != i3 ? i3 : !a3;
    const s2 = new He(this._stepper).type(i3 ? Fe : vt);
    let r2, n2, o2, l2, h2;
    return this.queue((function() {
      n2 = n2 || this.element(), r2 = r2 || T(t2, n2), h2 = new vt(e2 ? void 0 : n2), n2._addRunner(this), e2 || n2._clearTransformRunnersBefore(this);
    }), (function(c2) {
      e2 || this.clearTransform();
      const { x: d2, y: u2 } = new bt(r2).transform(n2._currentTransform(this));
      let g2 = new vt({ ...t2, origin: [d2, u2] }), p2 = this._isDeclarative && o2 ? o2 : h2;
      if (i3) {
        g2 = g2.decompose(d2, u2), p2 = p2.decompose(d2, u2);
        const t3 = g2.rotate, e3 = p2.rotate, i4 = [t3 - 360, t3, t3 + 360], a4 = i4.map(((t4) => Math.abs(t4 - e3))), s3 = Math.min(...a4), r3 = a4.indexOf(s3);
        g2.rotate = i4[r3];
      }
      e2 && (a3 || (g2.rotate = t2.rotate || 0), this._isDeclarative && l2 && (p2.rotate = l2)), s2.from(p2), s2.to(g2);
      const f2 = s2.at(c2);
      return l2 = f2.rotate, o2 = new vt(f2), this.addTransform(o2), n2._addRunner(this), s2.done();
    }), (function(e3) {
      (e3.origin || "center").toString() !== (t2.origin || "center").toString() && (r2 = T(e3, n2)), t2 = { ...e3, origin: r2 };
    }), true), this._isDeclarative && this._rememberMorpher("transform", s2), this;
  }, x(t2) {
    return this._queueNumber("x", t2);
  }, y(t2) {
    return this._queueNumber("y", t2);
  }, ax(t2) {
    return this._queueNumber("ax", t2);
  }, ay(t2) {
    return this._queueNumber("ay", t2);
  }, dx(t2 = 0) {
    return this._queueNumberDelta("x", t2);
  }, dy(t2 = 0) {
    return this._queueNumberDelta("y", t2);
  }, dmove(t2, e2) {
    return this.dx(t2).dy(e2);
  }, _queueNumberDelta(t2, e2) {
    if (e2 = new _t(e2), this._tryRetarget(t2, e2)) return this;
    const i3 = new He(this._stepper).to(e2);
    let a3 = null;
    return this.queue((function() {
      a3 = this.element()[t2](), i3.from(a3), i3.to(a3 + e2);
    }), (function(e3) {
      return this.element()[t2](i3.at(e3)), i3.done();
    }), (function(t3) {
      i3.to(a3 + new _t(t3));
    })), this._rememberMorpher(t2, i3), this;
  }, _queueObject(t2, e2) {
    if (this._tryRetarget(t2, e2)) return this;
    const i3 = new He(this._stepper).to(e2);
    return this.queue((function() {
      i3.from(this.element()[t2]());
    }), (function(e3) {
      return this.element()[t2](i3.at(e3)), i3.done();
    })), this._rememberMorpher(t2, i3), this;
  }, _queueNumber(t2, e2) {
    return this._queueObject(t2, new _t(e2));
  }, cx(t2) {
    return this._queueNumber("cx", t2);
  }, cy(t2) {
    return this._queueNumber("cy", t2);
  }, move(t2, e2) {
    return this.x(t2).y(e2);
  }, amove(t2, e2) {
    return this.ax(t2).ay(e2);
  }, center(t2, e2) {
    return this.cx(t2).cy(e2);
  }, size(t2, e2) {
    let i3;
    return t2 && e2 || (i3 = this._element.bbox()), t2 || (t2 = i3.width / i3.height * e2), e2 || (e2 = i3.height / i3.width * t2), this.width(t2).height(e2);
  }, width(t2) {
    return this._queueNumber("width", t2);
  }, height(t2) {
    return this._queueNumber("height", t2);
  }, plot(t2, e2, i3, a3) {
    if (4 === arguments.length) return this.plot([t2, e2, i3, a3]);
    if (this._tryRetarget("plot", t2)) return this;
    const s2 = new He(this._stepper).type(this._element.MorphArray).to(t2);
    return this.queue((function() {
      s2.from(this._element.array());
    }), (function(t3) {
      return this._element.plot(s2.at(t3)), s2.done();
    })), this._rememberMorpher("plot", s2), this;
  }, leading(t2) {
    return this._queueNumber("leading", t2);
  }, viewbox(t2, e2, i3, a3) {
    return this._queueObject("viewbox", new kt(t2, e2, i3, a3));
  }, update(t2) {
    return "object" != typeof t2 ? this.update({ offset: arguments[0], color: arguments[1], opacity: arguments[2] }) : (null != t2.opacity && this.attr("stop-opacity", t2.opacity), null != t2.color && this.attr("stop-color", t2.color), null != t2.offset && this.attr("offset", t2.offset), this);
  } }), Q(Qe, { rx: Zt, ry: $t, from: ne, to: oe }), q(Qe, "Runner");
  class si extends Vt {
    constructor(t2, e2 = t2) {
      super(G("svg", t2), e2), this.namespace();
    }
    defs() {
      return this.isRoot() ? V(this.node.querySelector("defs")) || this.put(new Ut()) : this.root().defs();
    }
    isRoot() {
      return !this.node.parentNode || !(this.node.parentNode instanceof O.window.SVGElement) && "#document-fragment" !== this.node.parentNode.nodeName;
    }
    namespace() {
      return this.isRoot() ? this.attr({ xmlns: E, version: "1.1" }).attr("xmlns:xlink", H, Y) : this.root().namespace();
    }
    removeNamespace() {
      return this.attr({ xmlns: null, version: null }).attr("xmlns:xlink", null, Y).attr("xmlns:svgjs", null, Y);
    }
    root() {
      return this.isRoot() ? this : super.root();
    }
  }
  A({ Container: { nested: K((function() {
    return this.put(new si());
  })) } }), q(si, "Svg", true);
  let ri = class extends Vt {
    constructor(t2, e2 = t2) {
      super(G("symbol", t2), e2);
    }
  };
  A({ Container: { symbol: K((function() {
    return this.put(new ri());
  })) } }), q(ri, "Symbol");
  var ni = Object.freeze({ __proto__: null, amove: function(t2, e2) {
    return this.ax(t2).ay(e2);
  }, ax: function(t2) {
    return this.attr("x", t2);
  }, ay: function(t2) {
    return this.attr("y", t2);
  }, build: function(t2) {
    return this._build = !!t2, this;
  }, center: function(t2, e2, i3 = this.bbox()) {
    return this.cx(t2, i3).cy(e2, i3);
  }, cx: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.cx : this.attr("x", this.attr("x") + t2 - e2.cx);
  }, cy: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.cy : this.attr("y", this.attr("y") + t2 - e2.cy);
  }, length: function() {
    return this.node.getComputedTextLength();
  }, move: function(t2, e2, i3 = this.bbox()) {
    return this.x(t2, i3).y(e2, i3);
  }, plain: function(t2) {
    return false === this._build && this.clear(), this.node.appendChild(O.document.createTextNode(t2)), this;
  }, x: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.x : this.attr("x", this.attr("x") + t2 - e2.x);
  }, y: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.y : this.attr("y", this.attr("y") + t2 - e2.y);
  } });
  class oi extends qt {
    constructor(t2, e2 = t2) {
      super(G("text", t2), e2), this.dom.leading = this.dom.leading ?? new _t(1.3), this._rebuild = true, this._build = false;
    }
    leading(t2) {
      return null == t2 ? this.dom.leading : (this.dom.leading = new _t(t2), this.rebuild());
    }
    rebuild(t2) {
      if ("boolean" == typeof t2 && (this._rebuild = t2), this._rebuild) {
        const t3 = this;
        let e2 = 0;
        const i3 = this.dom.leading;
        this.each((function(a3) {
          if (X(this.node)) return;
          const s2 = O.window.getComputedStyle(this.node).getPropertyValue("font-size"), r2 = i3 * new _t(s2);
          this.dom.newLined && (this.attr("x", t3.attr("x")), "\n" === this.text() ? e2 += r2 : (this.attr("dy", a3 ? r2 + e2 : 0), e2 = 0));
        })), this.fire("rebuild");
      }
      return this;
    }
    setData(t2) {
      return this.dom = t2, this.dom.leading = new _t(t2.leading || 1.3), this;
    }
    writeDataToDom() {
      return R(this, this.dom, { leading: 1.3 }), this;
    }
    text(t2) {
      if (void 0 === t2) {
        const e2 = this.node.childNodes;
        let i3 = 0;
        t2 = "";
        for (let a3 = 0, s2 = e2.length; a3 < s2; ++a3) "textPath" === e2[a3].nodeName || X(e2[a3]) ? 0 === a3 && (i3 = a3 + 1) : (a3 !== i3 && 3 !== e2[a3].nodeType && true === V(e2[a3]).dom.newLined && (t2 += "\n"), t2 += e2[a3].textContent);
        return t2;
      }
      if (this.clear().build(true), "function" == typeof t2) t2.call(this, this);
      else for (let e2 = 0, i3 = (t2 = (t2 + "").split("\n")).length; e2 < i3; e2++) this.newLine(t2[e2]);
      return this.build(false).rebuild();
    }
  }
  Q(oi, ni), A({ Container: { text: K((function(t2 = "") {
    return this.put(new oi()).text(t2);
  })), plain: K((function(t2 = "") {
    return this.put(new oi()).plain(t2);
  })) } }), q(oi, "Text");
  class li extends qt {
    constructor(t2, e2 = t2) {
      super(G("tspan", t2), e2), this._build = false;
    }
    dx(t2) {
      return this.attr("dx", t2);
    }
    dy(t2) {
      return this.attr("dy", t2);
    }
    newLine() {
      this.dom.newLined = true;
      const t2 = this.parent();
      if (!(t2 instanceof oi)) return this;
      const e2 = t2.index(this), i3 = O.window.getComputedStyle(this.node).getPropertyValue("font-size"), a3 = t2.dom.leading * new _t(i3);
      return this.dy(e2 ? a3 : 0).attr("x", t2.x());
    }
    text(t2) {
      return null == t2 ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t2 ? (this.clear().build(true), t2.call(this, this), this.build(false)) : this.plain(t2), this);
    }
  }
  Q(li, ni), A({ Tspan: { tspan: K((function(t2 = "") {
    const e2 = new li();
    return this._build || this.clear(), this.put(e2).text(t2);
  })) }, Text: { newLine: function(t2 = "") {
    return this.tspan(t2).newLine();
  } } }), q(li, "Tspan");
  class hi extends qt {
    constructor(t2, e2 = t2) {
      super(G("circle", t2), e2);
    }
    radius(t2) {
      return this.attr("r", t2);
    }
    rx(t2) {
      return this.attr("r", t2);
    }
    ry(t2) {
      return this.rx(t2);
    }
    size(t2) {
      return this.radius(new _t(t2).divide(2));
    }
  }
  Q(hi, { x: Jt, y: Qt, cx: Kt, cy: te, width: ee, height: ie }), A({ Container: { circle: K((function(t2 = 0) {
    return this.put(new hi()).size(t2).move(0, 0);
  })) } }), q(hi, "Circle");
  class ci extends Vt {
    constructor(t2, e2 = t2) {
      super(G("clipPath", t2), e2);
    }
    remove() {
      return this.targets().forEach((function(t2) {
        t2.unclip();
      })), super.remove();
    }
    targets() {
      return Lt("svg [clip-path*=" + this.id() + "]");
    }
  }
  A({ Container: { clip: K((function() {
    return this.defs().put(new ci());
  })) }, Element: { clipper() {
    return this.reference("clip-path");
  }, clipWith(t2) {
    const e2 = t2 instanceof ci ? t2 : this.parent().clip().add(t2);
    return this.attr("clip-path", "url(#" + e2.id() + ")");
  }, unclip() {
    return this.attr("clip-path", null);
  } } }), q(ci, "ClipPath");
  class di extends Gt {
    constructor(t2, e2 = t2) {
      super(G("foreignObject", t2), e2);
    }
  }
  A({ Container: { foreignObject: K((function(t2, e2) {
    return this.put(new di()).size(t2, e2);
  })) } }), q(di, "ForeignObject");
  var ui = Object.freeze({ __proto__: null, dmove: function(t2, e2) {
    return this.children().forEach(((i3) => {
      let a3;
      try {
        a3 = i3.node instanceof F().SVGSVGElement ? new kt(i3.attr(["x", "y", "width", "height"])) : i3.bbox();
      } catch (t3) {
        return;
      }
      const s2 = new vt(i3), r2 = s2.translate(t2, e2).transform(s2.inverse()), n2 = new bt(a3.x, a3.y).transform(r2);
      i3.move(n2.x, n2.y);
    })), this;
  }, dx: function(t2) {
    return this.dmove(t2, 0);
  }, dy: function(t2) {
    return this.dmove(0, t2);
  }, height: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.height : this.size(e2.width, t2, e2);
  }, move: function(t2 = 0, e2 = 0, i3 = this.bbox()) {
    const a3 = t2 - i3.x, s2 = e2 - i3.y;
    return this.dmove(a3, s2);
  }, size: function(t2, e2, i3 = this.bbox()) {
    const a3 = I(this, t2, e2, i3), s2 = a3.width / i3.width, r2 = a3.height / i3.height;
    return this.children().forEach(((t3) => {
      const e3 = new bt(i3).transform(new vt(t3).inverse());
      t3.scale(s2, r2, e3.x, e3.y);
    })), this;
  }, width: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.width : this.size(t2, e2.height, e2);
  }, x: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.x : this.move(t2, e2.y, e2);
  }, y: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.y : this.move(e2.x, t2, e2);
  } });
  class gi extends Vt {
    constructor(t2, e2 = t2) {
      super(G("g", t2), e2);
    }
  }
  Q(gi, ui), A({ Container: { group: K((function() {
    return this.put(new gi());
  })) } }), q(gi, "G");
  class pi extends Vt {
    constructor(t2, e2 = t2) {
      super(G("a", t2), e2);
    }
    target(t2) {
      return this.attr("target", t2);
    }
    to(t2) {
      return this.attr("href", t2, H);
    }
  }
  Q(pi, ui), A({ Container: { link: K((function(t2) {
    return this.put(new pi()).to(t2);
  })) }, Element: { unlink() {
    const t2 = this.linker();
    if (!t2) return this;
    const e2 = t2.parent();
    if (!e2) return this.remove();
    const i3 = e2.index(t2);
    return e2.add(this, i3), t2.remove(), this;
  }, linkTo(t2) {
    let e2 = this.linker();
    return e2 || (e2 = new pi(), this.wrap(e2)), "function" == typeof t2 ? t2.call(e2, e2) : e2.to(t2), this;
  }, linker() {
    const t2 = this.parent();
    return t2 && "a" === t2.node.nodeName.toLowerCase() ? t2 : null;
  } } }), q(pi, "A");
  class fi extends Vt {
    constructor(t2, e2 = t2) {
      super(G("mask", t2), e2);
    }
    remove() {
      return this.targets().forEach((function(t2) {
        t2.unmask();
      })), super.remove();
    }
    targets() {
      return Lt("svg [mask*=" + this.id() + "]");
    }
  }
  A({ Container: { mask: K((function() {
    return this.defs().put(new fi());
  })) }, Element: { masker() {
    return this.reference("mask");
  }, maskWith(t2) {
    const e2 = t2 instanceof fi ? t2 : this.parent().mask().add(t2);
    return this.attr("mask", "url(#" + e2.id() + ")");
  }, unmask() {
    return this.attr("mask", null);
  } } }), q(fi, "Mask");
  class xi extends Gt {
    constructor(t2, e2 = t2) {
      super(G("stop", t2), e2);
    }
    update(t2) {
      return ("number" == typeof t2 || t2 instanceof _t) && (t2 = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), null != t2.opacity && this.attr("stop-opacity", t2.opacity), null != t2.color && this.attr("stop-color", t2.color), null != t2.offset && this.attr("offset", new _t(t2.offset)), this;
    }
  }
  A({ Gradient: { stop: function(t2, e2, i3) {
    return this.put(new xi()).update(t2, e2, i3);
  } } }), q(xi, "Stop");
  class bi extends Gt {
    constructor(t2, e2 = t2) {
      super(G("style", t2), e2);
    }
    addText(t2 = "") {
      return this.node.textContent += t2, this;
    }
    font(t2, e2, i3 = {}) {
      return this.rule("@font-face", { fontFamily: t2, src: e2, ...i3 });
    }
    rule(t2, e2) {
      return this.addText((function(t3, e3) {
        if (!t3) return "";
        if (!e3) return t3;
        let i3 = t3 + "{";
        for (const t4 in e3) i3 += t4.replace(/([A-Z])/g, (function(t5, e4) {
          return "-" + e4.toLowerCase();
        })) + ":" + e3[t4] + ";";
        return i3 += "}", i3;
      })(t2, e2));
    }
  }
  A("Dom", { style(t2, e2) {
    return this.put(new bi()).rule(t2, e2);
  }, fontface(t2, e2, i3) {
    return this.put(new bi()).font(t2, e2, i3);
  } }), q(bi, "Style");
  class mi extends oi {
    constructor(t2, e2 = t2) {
      super(G("textPath", t2), e2);
    }
    array() {
      const t2 = this.track();
      return t2 ? t2.array() : null;
    }
    plot(t2) {
      const e2 = this.track();
      let i3 = null;
      return e2 && (i3 = e2.plot(t2)), null == t2 ? i3 : this;
    }
    track() {
      return this.reference("href");
    }
  }
  A({ Container: { textPath: K((function(t2, e2) {
    return t2 instanceof oi || (t2 = this.text(t2)), t2.path(e2);
  })) }, Text: { path: K((function(t2, e2 = true) {
    const i3 = new mi();
    let a3;
    if (t2 instanceof We || (t2 = this.defs().path(t2)), i3.attr("href", "#" + t2, H), e2) for (; a3 = this.node.firstChild; ) i3.node.appendChild(a3);
    return this.put(i3);
  })), textPath() {
    return this.findOne("textPath");
  } }, Path: { text: K((function(t2) {
    return t2 instanceof oi || (t2 = new oi().addTo(this.parent()).text(t2)), t2.path(this);
  })), targets() {
    return Lt("svg textPath").filter(((t2) => (t2.attr("href") || "").includes(this.id())));
  } } }), mi.prototype.MorphArray = Ee, q(mi, "TextPath");
  class vi extends qt {
    constructor(t2, e2 = t2) {
      super(G("use", t2), e2);
    }
    use(t2, e2) {
      return this.attr("href", (e2 || "") + "#" + t2, H);
    }
  }
  A({ Container: { use: K((function(t2, e2) {
    return this.put(new vi()).use(t2, e2);
  })) } }), q(vi, "Use");
  const yi = B;
  Q([si, ri, de, ce, be], C("viewbox")), Q([xe, je, Ge, We], C("marker")), Q(oi, C("Text")), Q(We, C("Path")), Q(Ut, C("Defs")), Q([oi, li], C("Tspan")), Q([Ve, se, he, Qe], C("radius")), Q(Rt, C("EventTarget")), Q(Bt, C("Dom")), Q(Gt, C("Element")), Q(qt, C("Shape")), Q([Vt, re], C("Container")), Q(he, C("Gradient")), Q(Qe, C("Runner")), Ct.extend([...new Set(k)]), (function(t2 = []) {
    Ne.push(...[].concat(t2));
  })([_t, xt, kt, vt, Dt, ge, Ee, bt]), Q(Ne, { to(t2) {
    return new He().type(this.constructor).from(this.toArray()).to(t2);
  }, fromArray(t2) {
    return this.init(t2), this;
  }, toConsumable() {
    return this.toArray();
  }, morph(t2, e2, i3, a3, s2) {
    return this.fromArray(t2.map((function(t3, r2) {
      return a3.step(t3, e2[r2], i3, s2[r2], s2);
    })));
  } });
  class wi extends Gt {
    constructor(t2) {
      super(G("filter", t2), t2), this.$source = "SourceGraphic", this.$sourceAlpha = "SourceAlpha", this.$background = "BackgroundImage", this.$backgroundAlpha = "BackgroundAlpha", this.$fill = "FillPaint", this.$stroke = "StrokePaint", this.$autoSetIn = true;
    }
    put(t2, e2) {
      return !(t2 = super.put(t2, e2)).attr("in") && this.$autoSetIn && t2.attr("in", this.$source), t2.attr("result") || t2.attr("result", t2.id()), t2;
    }
    remove() {
      return this.targets().each("unfilter"), super.remove();
    }
    targets() {
      return Lt('svg [filter*="' + this.id() + '"]');
    }
    toString() {
      return "url(#" + this.id() + ")";
    }
  }
  class ki extends Gt {
    constructor(t2, e2) {
      super(t2, e2), this.result(this.id());
    }
    in(t2) {
      if (null == t2) {
        const t3 = this.attr("in");
        return this.parent() && this.parent().find(`[result="${t3}"]`)[0] || t3;
      }
      return this.attr("in", t2);
    }
    result(t2) {
      return this.attr("result", t2);
    }
    toString() {
      return this.result();
    }
  }
  const Ai = (t2) => function(...e2) {
    for (let i3 = t2.length; i3--; ) null != e2[i3] && this.attr(t2[i3], e2[i3]);
  }, Ci = { blend: Ai(["in", "in2", "mode"]), colorMatrix: Ai(["type", "values"]), composite: Ai(["in", "in2", "operator"]), convolveMatrix: function(t2) {
    t2 = new Dt(t2).toString(), this.attr({ order: Math.sqrt(t2.split(" ").length), kernelMatrix: t2 });
  }, diffuseLighting: Ai(["surfaceScale", "lightingColor", "diffuseConstant", "kernelUnitLength"]), displacementMap: Ai(["in", "in2", "scale", "xChannelSelector", "yChannelSelector"]), dropShadow: Ai(["in", "dx", "dy", "stdDeviation"]), flood: Ai(["flood-color", "flood-opacity"]), gaussianBlur: function(t2 = 0, e2 = t2) {
    this.attr("stdDeviation", t2 + " " + e2);
  }, image: function(t2) {
    this.attr("href", t2, H);
  }, morphology: Ai(["operator", "radius"]), offset: Ai(["dx", "dy"]), specularLighting: Ai(["surfaceScale", "lightingColor", "diffuseConstant", "specularExponent", "kernelUnitLength"]), tile: Ai([]), turbulence: Ai(["baseFrequency", "numOctaves", "seed", "stitchTiles", "type"]) };
  ["blend", "colorMatrix", "componentTransfer", "composite", "convolveMatrix", "diffuseLighting", "displacementMap", "dropShadow", "flood", "gaussianBlur", "image", "merge", "morphology", "offset", "specularLighting", "tile", "turbulence"].forEach(((t2) => {
    const e2 = P(t2), i3 = Ci[t2];
    wi[e2 + "Effect"] = class extends ki {
      constructor(t3) {
        super(G("fe" + e2, t3), t3);
      }
      update(t3) {
        return i3.apply(this, t3), this;
      }
    }, wi.prototype[t2] = K((function(t3, ...i4) {
      const a3 = new wi[e2 + "Effect"]();
      return null == t3 ? this.put(a3) : ("function" == typeof t3 ? t3.call(a3, a3) : i4.unshift(t3), this.put(a3).update(i4));
    }));
  })), Q(wi, { merge(t2) {
    const e2 = this.put(new wi.MergeEffect());
    if ("function" == typeof t2) return t2.call(e2, e2), e2;
    return (t2 instanceof Array ? t2 : [...arguments]).forEach(((t3) => {
      t3 instanceof wi.MergeNode ? e2.put(t3) : e2.mergeNode(t3);
    })), e2;
  }, componentTransfer(t2 = {}) {
    const e2 = this.put(new wi.ComponentTransferEffect());
    if ("function" == typeof t2) return t2.call(e2, e2), e2;
    if (!(t2.r || t2.g || t2.b || t2.a)) {
      t2 = { r: t2, g: t2, b: t2, a: t2 };
    }
    for (const i3 in t2) e2.add(new wi["Func" + i3.toUpperCase()](t2[i3]));
    return e2;
  } });
  ["distantLight", "pointLight", "spotLight", "mergeNode", "FuncR", "FuncG", "FuncB", "FuncA"].forEach(((t2) => {
    const e2 = P(t2);
    wi[e2] = class extends ki {
      constructor(t3) {
        super(G("fe" + e2, t3), t3);
      }
    };
  }));
  ["funcR", "funcG", "funcB", "funcA"].forEach((function(t2) {
    const e2 = wi[P(t2)], i3 = K((function() {
      return this.put(new e2());
    }));
    wi.ComponentTransferEffect.prototype[t2] = i3;
  }));
  ["distantLight", "pointLight", "spotLight"].forEach(((t2) => {
    const e2 = wi[P(t2)], i3 = K((function() {
      return this.put(new e2());
    }));
    wi.DiffuseLightingEffect.prototype[t2] = i3, wi.SpecularLightingEffect.prototype[t2] = i3;
  })), Q(wi.MergeEffect, { mergeNode(t2) {
    return this.put(new wi.MergeNode()).attr("in", t2);
  } }), Q(Ut, { filter: function(t2) {
    const e2 = this.put(new wi());
    return "function" == typeof t2 && t2.call(e2, e2), e2;
  } }), Q(Vt, { filter: function(t2) {
    return this.defs().filter(t2);
  } }), Q(Gt, { filterWith: function(t2) {
    const e2 = t2 instanceof wi ? t2 : this.defs().filter(t2);
    return this.attr("filter", e2);
  }, unfilter: function(t2) {
    return this.attr("filter", null);
  }, filterer() {
    return this.reference("filter");
  } });
  const Si = { blend: function(t2, e2) {
    return this.parent() && this.parent().blend(this, t2, e2);
  }, colorMatrix: function(t2, e2) {
    return this.parent() && this.parent().colorMatrix(t2, e2).in(this);
  }, componentTransfer: function(t2) {
    return this.parent() && this.parent().componentTransfer(t2).in(this);
  }, composite: function(t2, e2) {
    return this.parent() && this.parent().composite(this, t2, e2);
  }, convolveMatrix: function(t2) {
    return this.parent() && this.parent().convolveMatrix(t2).in(this);
  }, diffuseLighting: function(t2, e2, i3, a3) {
    return this.parent() && this.parent().diffuseLighting(t2, i3, a3).in(this);
  }, displacementMap: function(t2, e2, i3, a3) {
    return this.parent() && this.parent().displacementMap(this, t2, e2, i3, a3);
  }, dropShadow: function(t2, e2, i3) {
    return this.parent() && this.parent().dropShadow(this, t2, e2, i3).in(this);
  }, flood: function(t2, e2) {
    return this.parent() && this.parent().flood(t2, e2);
  }, gaussianBlur: function(t2, e2) {
    return this.parent() && this.parent().gaussianBlur(t2, e2).in(this);
  }, image: function(t2) {
    return this.parent() && this.parent().image(t2);
  }, merge: function(t2) {
    return t2 = t2 instanceof Array ? t2 : [...t2], this.parent() && this.parent().merge(this, ...t2);
  }, morphology: function(t2, e2) {
    return this.parent() && this.parent().morphology(t2, e2).in(this);
  }, offset: function(t2, e2) {
    return this.parent() && this.parent().offset(t2, e2).in(this);
  }, specularLighting: function(t2, e2, i3, a3, s2) {
    return this.parent() && this.parent().specularLighting(t2, i3, a3, s2).in(this);
  }, tile: function() {
    return this.parent() && this.parent().tile().in(this);
  }, turbulence: function(t2, e2, i3, a3, s2) {
    return this.parent() && this.parent().turbulence(t2, e2, i3, a3, s2).in(this);
  } };
  Q(ki, Si), Q(wi.MergeEffect, { in: function(t2) {
    return t2 instanceof wi.MergeNode ? this.add(t2, 0) : this.add(new wi.MergeNode().in(t2), 0), this;
  } }), Q([wi.CompositeEffect, wi.BlendEffect, wi.DisplacementMapEffect], { in2: function(t2) {
    if (null == t2) {
      const t3 = this.attr("in2");
      return this.parent() && this.parent().find(`[result="${t3}"]`)[0] || t3;
    }
    return this.attr("in2", t2);
  } }), wi.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
  var Li = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "getDefaultFilter", value: function(t3, e2) {
      var i3 = this.w;
      t3.unfilter(true), new wi().size("120%", "180%", "-5%", "-40%"), i3.config.chart.dropShadow.enabled && this.dropShadow(t3, i3.config.chart.dropShadow, e2);
    } }, { key: "applyFilter", value: function(t3, e2, i3) {
      var a3, s2 = this, r2 = this.w;
      if (t3.unfilter(true), "none" !== i3) {
        var n2, o2, l2 = r2.config.chart.dropShadow, h2 = "lighten" === i3 ? 2 : 0.3;
        if (t3.filterWith((function(t4) {
          t4.colorMatrix({ type: "matrix", values: "\n          ".concat(h2, " 0 0 0 0\n          0 ").concat(h2, " 0 0 0\n          0 0 ").concat(h2, " 0 0\n          0 0 0 1 0\n        "), in: "SourceGraphic", result: "brightness" }), l2.enabled && s2.addShadow(t4, e2, l2, "brightness");
        })), !l2.noUserSpaceOnUse) null === (n2 = t3.filterer()) || void 0 === n2 || null === (o2 = n2.node) || void 0 === o2 || o2.setAttribute("filterUnits", "userSpaceOnUse");
        this._scaleFilterSize(null === (a3 = t3.filterer()) || void 0 === a3 ? void 0 : a3.node);
      } else this.getDefaultFilter(t3, e2);
    } }, { key: "addShadow", value: function(t3, e2, i3, a3) {
      var s2, r2 = this.w, n2 = i3.blur, o2 = i3.top, l2 = i3.left, h2 = i3.color, c2 = i3.opacity;
      if (h2 = Array.isArray(h2) ? h2[e2] : h2, (null === (s2 = r2.config.chart.dropShadow.enabledOnSeries) || void 0 === s2 ? void 0 : s2.length) > 0 && -1 === r2.config.chart.dropShadow.enabledOnSeries.indexOf(e2)) return t3;
      t3.offset({ in: a3, dx: l2, dy: o2, result: "offset" }), t3.gaussianBlur({ in: "offset", stdDeviation: n2, result: "blur" }), t3.flood({ "flood-color": h2, "flood-opacity": c2, result: "flood" }), t3.composite({ in: "flood", in2: "blur", operator: "in", result: "shadow" }), t3.merge(["shadow", a3]);
    } }, { key: "dropShadow", value: function(t3, e2) {
      var i3, a3, s2, r2, n2, o2 = this, l2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, h2 = this.w;
      if (t3.unfilter(true), v.isMsEdge() && "radialBar" === h2.config.chart.type) return t3;
      if ((null === (i3 = h2.config.chart.dropShadow.enabledOnSeries) || void 0 === i3 ? void 0 : i3.length) > 0 && -1 === (null === (s2 = h2.config.chart.dropShadow.enabledOnSeries) || void 0 === s2 ? void 0 : s2.indexOf(l2))) return t3;
      (t3.filterWith((function(t4) {
        o2.addShadow(t4, l2, e2, "SourceGraphic");
      })), e2.noUserSpaceOnUse) || (null === (r2 = t3.filterer()) || void 0 === r2 || null === (n2 = r2.node) || void 0 === n2 || n2.setAttribute("filterUnits", "userSpaceOnUse"));
      return this._scaleFilterSize(null === (a3 = t3.filterer()) || void 0 === a3 ? void 0 : a3.node), t3;
    } }, { key: "setSelectionFilter", value: function(t3, e2, i3) {
      var a3 = this.w;
      if (void 0 !== a3.globals.selectedDataPoints[e2] && a3.globals.selectedDataPoints[e2].indexOf(i3) > -1) {
        t3.node.setAttribute("selected", true);
        var s2 = a3.config.states.active.filter;
        "none" !== s2 && this.applyFilter(t3, e2, s2.type);
      }
    } }, { key: "_scaleFilterSize", value: function(t3) {
      if (t3) {
        !(function(e2) {
          for (var i3 in e2) e2.hasOwnProperty(i3) && t3.setAttribute(i3, e2[i3]);
        })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
      }
    } }]), t2;
  })(), Mi = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "roundPathCorners", value: function(t3, e2) {
      function i3(t4, e3, i4) {
        var s3 = e3.x - t4.x, r3 = e3.y - t4.y, n3 = Math.sqrt(s3 * s3 + r3 * r3);
        return a3(t4, e3, Math.min(1, i4 / n3));
      }
      function a3(t4, e3, i4) {
        return { x: t4.x + (e3.x - t4.x) * i4, y: t4.y + (e3.y - t4.y) * i4 };
      }
      function s2(t4, e3) {
        t4.length > 2 && (t4[t4.length - 2] = e3.x, t4[t4.length - 1] = e3.y);
      }
      function r2(t4) {
        return { x: parseFloat(t4[t4.length - 2]), y: parseFloat(t4[t4.length - 1]) };
      }
      t3.indexOf("NaN") > -1 && (t3 = "");
      var n2 = t3.split(/[,\s]/).reduce((function(t4, e3) {
        var i4 = e3.match(/^([a-zA-Z])(.+)/);
        return i4 ? (t4.push(i4[1]), t4.push(i4[2])) : t4.push(e3), t4;
      }), []).reduce((function(t4, e3) {
        return parseFloat(e3) == e3 && t4.length ? t4[t4.length - 1].push(e3) : t4.push([e3]), t4;
      }), []), o2 = [];
      if (n2.length > 1) {
        var l2 = r2(n2[0]), h2 = null;
        "Z" == n2[n2.length - 1][0] && n2[0].length > 2 && (h2 = ["L", l2.x, l2.y], n2[n2.length - 1] = h2), o2.push(n2[0]);
        for (var c2 = 1; c2 < n2.length; c2++) {
          var d2 = o2[o2.length - 1], u2 = n2[c2], g2 = u2 == h2 ? n2[1] : n2[c2 + 1];
          if (g2 && d2 && d2.length > 2 && "L" == u2[0] && g2.length > 2 && "L" == g2[0]) {
            var p2, f2, x2 = r2(d2), b2 = r2(u2), m2 = r2(g2);
            p2 = i3(b2, x2, e2), f2 = i3(b2, m2, e2), s2(u2, p2), u2.origPoint = b2, o2.push(u2);
            var v2 = a3(p2, b2, 0.5), y2 = a3(b2, f2, 0.5), w2 = ["C", v2.x, v2.y, y2.x, y2.y, f2.x, f2.y];
            w2.origPoint = b2, o2.push(w2);
          } else o2.push(u2);
        }
        if (h2) {
          var k2 = r2(o2[o2.length - 1]);
          o2.push(["Z"]), s2(o2[0], k2);
        }
      } else o2 = n2;
      return o2.reduce((function(t4, e3) {
        return t4 + e3.join(" ") + " ";
      }), "");
    } }, { key: "drawLine", value: function(t3, e2, i3, a3) {
      var s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8", r2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, n2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, o2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "butt";
      return this.w.globals.dom.Paper.line().attr({ x1: t3, y1: e2, x2: i3, y2: a3, stroke: s2, "stroke-dasharray": r2, "stroke-width": n2, "stroke-linecap": o2 });
    } }, { key: "drawRect", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe", n2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1, o2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, l2 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null, h2 = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, c2 = this.w.globals.dom.Paper.rect();
      return c2.attr({ x: t3, y: e2, width: i3 > 0 ? i3 : 0, height: a3 > 0 ? a3 : 0, rx: s2, ry: s2, opacity: n2, "stroke-width": null !== o2 ? o2 : 0, stroke: null !== l2 ? l2 : "none", "stroke-dasharray": h2 }), c2.node.setAttribute("fill", r2), c2;
    } }, { key: "drawPolygon", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1", i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none";
      return this.w.globals.dom.Paper.polygon(t3).attr({ fill: a3, stroke: e2, "stroke-width": i3 });
    } }, { key: "drawCircle", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      t3 < 0 && (t3 = 0);
      var i3 = this.w.globals.dom.Paper.circle(2 * t3);
      return null !== e2 && i3.attr(e2), i3;
    } }, { key: "drawPath", value: function(t3) {
      var e2 = t3.d, i3 = void 0 === e2 ? "" : e2, a3 = t3.stroke, s2 = void 0 === a3 ? "#a8a8a8" : a3, r2 = t3.strokeWidth, n2 = void 0 === r2 ? 1 : r2, o2 = t3.fill, l2 = t3.fillOpacity, h2 = void 0 === l2 ? 1 : l2, c2 = t3.strokeOpacity, d2 = void 0 === c2 ? 1 : c2, u2 = t3.classes, g2 = t3.strokeLinecap, p2 = void 0 === g2 ? null : g2, f2 = t3.strokeDashArray, x2 = void 0 === f2 ? 0 : f2, b2 = this.w;
      return null === p2 && (p2 = b2.config.stroke.lineCap), (i3.indexOf("undefined") > -1 || i3.indexOf("NaN") > -1) && (i3 = "M 0 ".concat(b2.globals.gridHeight)), b2.globals.dom.Paper.path(i3).attr({ fill: o2, "fill-opacity": h2, stroke: s2, "stroke-opacity": d2, "stroke-linecap": p2, "stroke-width": n2, "stroke-dasharray": x2, class: u2 });
    } }, { key: "group", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e2 = this.w.globals.dom.Paper.group();
      return null !== t3 && e2.attr(t3), e2;
    } }, { key: "move", value: function(t3, e2) {
      var i3 = ["M", t3, e2].join(" ");
      return i3;
    } }, { key: "line", value: function(t3, e2) {
      var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a3 = null;
      return null === i3 ? a3 = [" L", t3, e2].join(" ") : "H" === i3 ? a3 = [" H", t3].join(" ") : "V" === i3 && (a3 = [" V", e2].join(" ")), a3;
    } }, { key: "curve", value: function(t3, e2, i3, a3, s2, r2) {
      var n2 = ["C", t3, e2, i3, a3, s2, r2].join(" ");
      return n2;
    } }, { key: "quadraticCurve", value: function(t3, e2, i3, a3) {
      return ["Q", t3, e2, i3, a3].join(" ");
    } }, { key: "arc", value: function(t3, e2, i3, a3, s2, r2, n2) {
      var o2 = "A";
      arguments.length > 7 && void 0 !== arguments[7] && arguments[7] && (o2 = "a");
      var l2 = [o2, t3, e2, i3, a3, s2, r2, n2].join(" ");
      return l2;
    } }, { key: "renderPaths", value: function(t3) {
      var e2, i3 = t3.j, a3 = t3.realIndex, s2 = t3.pathFrom, r2 = t3.pathTo, n2 = t3.stroke, o2 = t3.strokeWidth, l2 = t3.strokeLinecap, h2 = t3.fill, c2 = t3.animationDelay, d2 = t3.initialSpeed, g2 = t3.dataChangeSpeed, p2 = t3.className, f2 = t3.chartType, x2 = t3.shouldClipToGrid, b2 = void 0 === x2 || x2, m2 = t3.bindEventsOnPaths, v2 = void 0 === m2 || m2, w2 = t3.drawShadow, k2 = void 0 === w2 || w2, A2 = this.w, C2 = new Li(this.ctx), S2 = new y(this.ctx), L2 = this.w.config.chart.animations.enabled, M2 = L2 && this.w.config.chart.animations.dynamicAnimation.enabled;
      if (s2 && s2.startsWith("M 0 0") && r2) {
        var P2 = r2.match(/^M\s+[\d.-]+\s+[\d.-]+/);
        P2 && (s2 = s2.replace(/^M\s+0\s+0/, P2[0]));
      }
      var I2 = !!(L2 && !A2.globals.resized || M2 && A2.globals.dataChanged && A2.globals.shouldAnimate);
      I2 ? e2 = s2 : (e2 = r2, A2.globals.animationEnded = true);
      var T2 = A2.config.stroke.dashArray, z2 = 0;
      z2 = Array.isArray(T2) ? T2[a3] : A2.config.stroke.dashArray;
      var X2 = this.drawPath({ d: e2, stroke: n2, strokeWidth: o2, fill: h2, fillOpacity: 1, classes: p2, strokeLinecap: l2, strokeDashArray: z2 });
      X2.attr("index", a3), b2 && ("bar" === f2 && !A2.globals.isHorizontal || A2.globals.comboCharts ? X2.attr({ "clip-path": "url(#gridRectBarMask".concat(A2.globals.cuid, ")") }) : X2.attr({ "clip-path": "url(#gridRectMask".concat(A2.globals.cuid, ")") })), A2.config.chart.dropShadow.enabled && k2 && C2.dropShadow(X2, A2.config.chart.dropShadow, a3), v2 && (X2.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, X2)), X2.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, X2)), X2.node.addEventListener("mousedown", this.pathMouseDown.bind(this, X2))), X2.attr({ pathTo: r2, pathFrom: s2 });
      var R2 = { el: X2, j: i3, realIndex: a3, pathFrom: s2, pathTo: r2, fill: h2, strokeWidth: o2, delay: c2 };
      return !L2 || A2.globals.resized || A2.globals.dataChanged ? !A2.globals.resized && A2.globals.dataChanged || S2.showDelayedElements() : S2.animatePathsGradually(u(u({}, R2), {}, { speed: d2 })), A2.globals.dataChanged && M2 && I2 && S2.animatePathsGradually(u(u({}, R2), {}, { speed: g2 })), X2;
    } }, { key: "drawPattern", value: function(t3, e2, i3) {
      var a3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8", s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      return this.w.globals.dom.Paper.pattern(e2, i3, (function(r2) {
        "horizontalLines" === t3 ? r2.line(0, 0, i3, 0).stroke({ color: a3, width: s2 + 1 }) : "verticalLines" === t3 ? r2.line(0, 0, 0, e2).stroke({ color: a3, width: s2 + 1 }) : "slantedLines" === t3 ? r2.line(0, 0, e2, i3).stroke({ color: a3, width: s2 }) : "squares" === t3 ? r2.rect(e2, i3).fill("none").stroke({ color: a3, width: s2 }) : "circles" === t3 && r2.circle(e2).fill("none").stroke({ color: a3, width: s2 });
      }));
    } }, { key: "drawGradient", value: function(t3, e2, i3, a3, s2) {
      var r2, n2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, o2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, l2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [], h2 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, c2 = this.w;
      e2.length < 9 && 0 === e2.indexOf("#") && (e2 = v.hexToRgba(e2, a3)), i3.length < 9 && 0 === i3.indexOf("#") && (i3 = v.hexToRgba(i3, s2));
      var d2 = 0, u2 = 1, g2 = 1, p2 = null;
      null !== o2 && (d2 = void 0 !== o2[0] ? o2[0] / 100 : 0, u2 = void 0 !== o2[1] ? o2[1] / 100 : 1, g2 = void 0 !== o2[2] ? o2[2] / 100 : 1, p2 = void 0 !== o2[3] ? o2[3] / 100 : null);
      var f2 = !("donut" !== c2.config.chart.type && "pie" !== c2.config.chart.type && "polarArea" !== c2.config.chart.type && "bubble" !== c2.config.chart.type);
      if (r2 = l2 && 0 !== l2.length ? c2.globals.dom.Paper.gradient(f2 ? "radial" : "linear", (function(t4) {
        (Array.isArray(l2[h2]) ? l2[h2] : l2).forEach((function(e3) {
          t4.stop(e3.offset / 100, e3.color, e3.opacity);
        }));
      })) : c2.globals.dom.Paper.gradient(f2 ? "radial" : "linear", (function(t4) {
        t4.stop(d2, e2, a3), t4.stop(u2, i3, s2), t4.stop(g2, i3, s2), null !== p2 && t4.stop(p2, e2, a3);
      })), f2) {
        var x2 = c2.globals.gridWidth / 2, b2 = c2.globals.gridHeight / 2;
        "bubble" !== c2.config.chart.type ? r2.attr({ gradientUnits: "userSpaceOnUse", cx: x2, cy: b2, r: n2 }) : r2.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
      } else "vertical" === t3 ? r2.from(0, 0).to(0, 1) : "diagonal" === t3 ? r2.from(0, 0).to(1, 1) : "horizontal" === t3 ? r2.from(0, 1).to(1, 1) : "diagonal2" === t3 && r2.from(1, 0).to(0, 1);
      return r2;
    } }, { key: "getTextBasedOnMaxWidth", value: function(t3) {
      var e2 = t3.text, i3 = t3.maxWidth, a3 = t3.fontSize, s2 = t3.fontFamily, r2 = this.getTextRects(e2, a3, s2), n2 = r2.width / e2.length, o2 = Math.floor(i3 / n2);
      return i3 < r2.width ? e2.slice(0, o2 - 3) + "..." : e2;
    } }, { key: "drawText", value: function(t3) {
      var e2 = this, i3 = t3.x, a3 = t3.y, s2 = t3.text, r2 = t3.textAnchor, n2 = t3.fontSize, o2 = t3.fontFamily, l2 = t3.fontWeight, h2 = t3.foreColor, c2 = t3.opacity, d2 = t3.maxWidth, g2 = t3.cssClass, p2 = void 0 === g2 ? "" : g2, f2 = t3.isPlainText, x2 = void 0 === f2 || f2, b2 = t3.dominantBaseline, m2 = void 0 === b2 ? "auto" : b2, v2 = this.w;
      void 0 === s2 && (s2 = "");
      var y2 = s2;
      r2 || (r2 = "start"), h2 && h2.length || (h2 = v2.config.chart.foreColor), o2 = o2 || v2.config.chart.fontFamily, l2 = l2 || "regular";
      var w2, k2 = { maxWidth: d2, fontSize: n2 = n2 || "11px", fontFamily: o2 };
      return Array.isArray(s2) ? w2 = v2.globals.dom.Paper.text((function(t4) {
        for (var i4 = 0; i4 < s2.length; i4++) y2 = s2[i4], d2 && (y2 = e2.getTextBasedOnMaxWidth(u({ text: s2[i4] }, k2))), 0 === i4 ? t4.tspan(y2) : t4.tspan(y2).newLine();
      })) : (d2 && (y2 = this.getTextBasedOnMaxWidth(u({ text: s2 }, k2))), w2 = x2 ? v2.globals.dom.Paper.plain(s2) : v2.globals.dom.Paper.text((function(t4) {
        return t4.tspan(y2);
      }))), w2.attr({ x: i3, y: a3, "text-anchor": r2, "dominant-baseline": m2, "font-size": n2, "font-family": o2, "font-weight": l2, fill: h2, class: "apexcharts-text " + p2 }), w2.node.style.fontFamily = o2, w2.node.style.opacity = c2, w2;
    } }, { key: "getMarkerPath", value: function(t3, e2, i3, a3) {
      var s2 = "";
      switch (i3) {
        case "cross":
          s2 = "M ".concat(t3 - (a3 /= 1.4), " ").concat(e2 - a3, " L ").concat(t3 + a3, " ").concat(e2 + a3, "  M ").concat(t3 - a3, " ").concat(e2 + a3, " L ").concat(t3 + a3, " ").concat(e2 - a3);
          break;
        case "plus":
          s2 = "M ".concat(t3 - (a3 /= 1.12), " ").concat(e2, " L ").concat(t3 + a3, " ").concat(e2, "  M ").concat(t3, " ").concat(e2 - a3, " L ").concat(t3, " ").concat(e2 + a3);
          break;
        case "star":
        case "sparkle":
          var r2 = 5;
          a3 *= 1.15, "sparkle" === i3 && (a3 /= 1.1, r2 = 4);
          for (var n2 = Math.PI / r2, o2 = 0; o2 <= 2 * r2; o2++) {
            var l2 = o2 * n2, h2 = o2 % 2 == 0 ? a3 : a3 / 2;
            s2 += (0 === o2 ? "M" : "L") + (t3 + h2 * Math.sin(l2)) + "," + (e2 - h2 * Math.cos(l2));
          }
          s2 += "Z";
          break;
        case "triangle":
          s2 = "M ".concat(t3, " ").concat(e2 - a3, " \n             L ").concat(t3 + a3, " ").concat(e2 + a3, " \n             L ").concat(t3 - a3, " ").concat(e2 + a3, " \n             Z");
          break;
        case "square":
        case "rect":
          s2 = "M ".concat(t3 - (a3 /= 1.125), " ").concat(e2 - a3, " \n           L ").concat(t3 + a3, " ").concat(e2 - a3, " \n           L ").concat(t3 + a3, " ").concat(e2 + a3, " \n           L ").concat(t3 - a3, " ").concat(e2 + a3, " \n           Z");
          break;
        case "diamond":
          a3 *= 1.05, s2 = "M ".concat(t3, " ").concat(e2 - a3, " \n             L ").concat(t3 + a3, " ").concat(e2, " \n             L ").concat(t3, " ").concat(e2 + a3, " \n             L ").concat(t3 - a3, " ").concat(e2, " \n            Z");
          break;
        case "line":
          s2 = "M ".concat(t3 - (a3 /= 1.1), " ").concat(e2, " \n           L ").concat(t3 + a3, " ").concat(e2);
          break;
        default:
          a3 *= 2, s2 = "M ".concat(t3, ", ").concat(e2, " \n           m -").concat(a3 / 2, ", 0 \n           a ").concat(a3 / 2, ",").concat(a3 / 2, " 0 1,0 ").concat(a3, ",0 \n           a ").concat(a3 / 2, ",").concat(a3 / 2, " 0 1,0 -").concat(a3, ",0");
      }
      return s2;
    } }, { key: "drawMarkerShape", value: function(t3, e2, i3, a3, s2) {
      var r2 = this.drawPath({ d: this.getMarkerPath(t3, e2, i3, a3, s2), stroke: s2.pointStrokeColor, strokeDashArray: s2.pointStrokeDashArray, strokeWidth: s2.pointStrokeWidth, fill: s2.pointFillColor, fillOpacity: s2.pointFillOpacity, strokeOpacity: s2.pointStrokeOpacity });
      return r2.attr({ cx: t3, cy: e2, shape: s2.shape, class: s2.class ? s2.class : "" }), r2;
    } }, { key: "drawMarker", value: function(t3, e2, i3) {
      t3 = t3 || 0;
      var a3 = i3.pSize || 0;
      return v.isNumber(e2) || (a3 = 0, e2 = 0), this.drawMarkerShape(t3, e2, null == i3 ? void 0 : i3.shape, a3, u(u({}, i3), "line" === i3.shape || "plus" === i3.shape || "cross" === i3.shape ? { pointStrokeColor: i3.pointFillColor, pointStrokeOpacity: i3.pointFillOpacity } : {}));
    } }, { key: "pathMouseEnter", value: function(t3, e2) {
      var i3 = this.w, a3 = new Li(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10);
      if ("function" == typeof i3.config.chart.events.dataPointMouseEnter && i3.config.chart.events.dataPointMouseEnter(e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i3 }), this.ctx.events.fireEvent("dataPointMouseEnter", [e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i3 }]), ("none" === i3.config.states.active.filter.type || "true" !== t3.node.getAttribute("selected")) && "none" !== i3.config.states.hover.filter.type && !i3.globals.isTouchDevice) {
        var n2 = i3.config.states.hover.filter;
        a3.applyFilter(t3, s2, n2.type);
      }
    } }, { key: "pathMouseLeave", value: function(t3, e2) {
      var i3 = this.w, a3 = new Li(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10);
      "function" == typeof i3.config.chart.events.dataPointMouseLeave && i3.config.chart.events.dataPointMouseLeave(e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i3 }), this.ctx.events.fireEvent("dataPointMouseLeave", [e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i3 }]), "none" !== i3.config.states.active.filter.type && "true" === t3.node.getAttribute("selected") || "none" !== i3.config.states.hover.filter.type && a3.getDefaultFilter(t3, s2);
    } }, { key: "pathMouseDown", value: function(t3, e2) {
      var i3 = this.w, a3 = new Li(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10), n2 = "false";
      if ("true" === t3.node.getAttribute("selected")) {
        if (t3.node.setAttribute("selected", "false"), i3.globals.selectedDataPoints[s2].indexOf(r2) > -1) {
          var o2 = i3.globals.selectedDataPoints[s2].indexOf(r2);
          i3.globals.selectedDataPoints[s2].splice(o2, 1);
        }
      } else {
        if (!i3.config.states.active.allowMultipleDataPointsSelection && i3.globals.selectedDataPoints.length > 0) {
          i3.globals.selectedDataPoints = [];
          var l2 = i3.globals.dom.Paper.find(".apexcharts-series path:not(.apexcharts-decoration-element)"), h2 = i3.globals.dom.Paper.find(".apexcharts-series circle:not(.apexcharts-decoration-element), .apexcharts-series rect:not(.apexcharts-decoration-element)"), c2 = function(t4) {
            Array.prototype.forEach.call(t4, (function(t5) {
              t5.node.setAttribute("selected", "false"), a3.getDefaultFilter(t5, s2);
            }));
          };
          c2(l2), c2(h2);
        }
        t3.node.setAttribute("selected", "true"), n2 = "true", void 0 === i3.globals.selectedDataPoints[s2] && (i3.globals.selectedDataPoints[s2] = []), i3.globals.selectedDataPoints[s2].push(r2);
      }
      if ("true" === n2) {
        var d2 = i3.config.states.active.filter;
        if ("none" !== d2) a3.applyFilter(t3, s2, d2.type);
        else if ("none" !== i3.config.states.hover.filter && !i3.globals.isTouchDevice) {
          var u2 = i3.config.states.hover.filter;
          a3.applyFilter(t3, s2, u2.type);
        }
      } else if ("none" !== i3.config.states.active.filter.type) if ("none" === i3.config.states.hover.filter.type || i3.globals.isTouchDevice) a3.getDefaultFilter(t3, s2);
      else {
        u2 = i3.config.states.hover.filter;
        a3.applyFilter(t3, s2, u2.type);
      }
      "function" == typeof i3.config.chart.events.dataPointSelection && i3.config.chart.events.dataPointSelection(e2, this.ctx, { selectedDataPoints: i3.globals.selectedDataPoints, seriesIndex: s2, dataPointIndex: r2, w: i3 }), e2 && this.ctx.events.fireEvent("dataPointSelection", [e2, this.ctx, { selectedDataPoints: i3.globals.selectedDataPoints, seriesIndex: s2, dataPointIndex: r2, w: i3 }]);
    } }, { key: "rotateAroundCenter", value: function(t3) {
      var e2 = {};
      return t3 && "function" == typeof t3.getBBox && (e2 = t3.getBBox()), { x: e2.x + e2.width / 2, y: e2.y + e2.height / 2 };
    } }, { key: "getTextRects", value: function(t3, e2, i3, a3) {
      var s2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], r2 = this.w, n2 = this.drawText({ x: -200, y: -200, text: t3, textAnchor: "start", fontSize: e2, fontFamily: i3, foreColor: "#fff", opacity: 0 });
      a3 && n2.attr("transform", a3), r2.globals.dom.Paper.add(n2);
      var o2 = n2.bbox();
      return s2 || (o2 = n2.node.getBoundingClientRect()), n2.remove(), { width: o2.width, height: o2.height };
    } }, { key: "placeTextWithEllipsis", value: function(t3, e2, i3) {
      if ("function" == typeof t3.getComputedTextLength && (t3.textContent = e2, e2.length > 0 && t3.getComputedTextLength() >= i3 / 1.1)) {
        for (var a3 = e2.length - 3; a3 > 0; a3 -= 3) if (t3.getSubStringLength(0, a3) <= i3 / 1.1) return void (t3.textContent = e2.substring(0, a3) + "...");
        t3.textContent = ".";
      }
    } }], [{ key: "setAttrs", value: function(t3, e2) {
      for (var i3 in e2) e2.hasOwnProperty(i3) && t3.setAttribute(i3, e2[i3]);
    } }]), t2;
  })(), Pi = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "getStackedSeriesTotals", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = this.w, i3 = [];
      if (0 === e2.globals.series.length) return i3;
      for (var a3 = 0; a3 < e2.globals.series[e2.globals.maxValsInArrayIndex].length; a3++) {
        for (var s2 = 0, r2 = 0; r2 < e2.globals.series.length; r2++) void 0 !== e2.globals.series[r2][a3] && -1 === t3.indexOf(r2) && (s2 += e2.globals.series[r2][a3]);
        i3.push(s2);
      }
      return i3;
    } }, { key: "getSeriesTotalByIndex", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return null === t3 ? this.w.config.series.reduce((function(t4, e2) {
        return t4 + e2;
      }), 0) : this.w.globals.series[t3].reduce((function(t4, e2) {
        return t4 + e2;
      }), 0);
    } }, { key: "getStackedSeriesTotalsByGroups", value: function() {
      var t3 = this, e2 = this.w, i3 = [];
      return e2.globals.seriesGroups.forEach((function(a3) {
        var s2 = [];
        e2.config.series.forEach((function(t4, i4) {
          a3.indexOf(e2.globals.seriesNames[i4]) > -1 && s2.push(i4);
        }));
        var r2 = e2.globals.series.map((function(t4, e3) {
          return -1 === s2.indexOf(e3) ? e3 : -1;
        })).filter((function(t4) {
          return -1 !== t4;
        }));
        i3.push(t3.getStackedSeriesTotals(r2));
      })), i3;
    } }, { key: "setSeriesYAxisMappings", value: function() {
      var t3 = this.w.globals, e2 = this.w.config, i3 = [], a3 = [], s2 = [], r2 = t3.series.length > e2.yaxis.length || e2.yaxis.some((function(t4) {
        return Array.isArray(t4.seriesName);
      }));
      e2.series.forEach((function(t4, e3) {
        s2.push(e3), a3.push(null);
      })), e2.yaxis.forEach((function(t4, e3) {
        i3[e3] = [];
      }));
      var n2 = [];
      e2.yaxis.forEach((function(t4, a4) {
        var o3 = false;
        if (t4.seriesName) {
          var l3 = [];
          Array.isArray(t4.seriesName) ? l3 = t4.seriesName : l3.push(t4.seriesName), l3.forEach((function(t5) {
            e2.series.forEach((function(e3, n3) {
              if (e3.name === t5) {
                var l4 = n3;
                a4 === n3 || r2 ? !r2 || s2.indexOf(n3) > -1 ? i3[a4].push([a4, n3]) : console.warn("Series '" + e3.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (i3[n3].push([n3, a4]), l4 = a4), o3 = true, -1 !== (l4 = s2.indexOf(l4)) && s2.splice(l4, 1);
              }
            }));
          }));
        }
        o3 || n2.push(a4);
      })), i3 = i3.map((function(t4, e3) {
        var i4 = [];
        return t4.forEach((function(t5) {
          a3[t5[1]] = t5[0], i4.push(t5[1]);
        })), i4;
      }));
      for (var o2 = e2.yaxis.length - 1, l2 = 0; l2 < n2.length && (o2 = n2[l2], i3[o2] = [], s2); l2++) {
        var h2 = s2[0];
        s2.shift(), i3[o2].push(h2), a3[h2] = o2;
      }
      s2.forEach((function(t4) {
        i3[o2].push(t4), a3[t4] = o2;
      })), t3.seriesYAxisMap = i3.map((function(t4) {
        return t4;
      })), t3.seriesYAxisReverseMap = a3.map((function(t4) {
        return t4;
      })), t3.seriesYAxisMap.forEach((function(t4, i4) {
        t4.forEach((function(t5) {
          e2.series[t5] && void 0 === e2.series[t5].group && (e2.series[t5].__apexParsed ? e2.series[t5].group = "apexcharts-axis-".concat(t5.toString()) : e2.series[t5].group = "apexcharts-axis-".concat(i4.toString()));
        }));
      }));
    } }, { key: "isSeriesNull", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return 0 === (null === t3 ? this.w.config.series.filter((function(t4) {
        return null !== t4;
      })) : this.w.config.series[t3].data.filter((function(t4) {
        return null !== t4;
      }))).length;
    } }, { key: "seriesHaveSameValues", value: function(t3) {
      return this.w.globals.series[t3].every((function(t4, e2, i3) {
        return t4 === i3[0];
      }));
    } }, { key: "getCategoryLabels", value: function(t3) {
      var e2 = this.w, i3 = t3.slice();
      return e2.config.xaxis.convertedCatToNumeric && (i3 = t3.map((function(t4, i4) {
        return e2.config.xaxis.labels.formatter(t4 - e2.globals.minX + 1);
      }))), i3;
    } }, { key: "getLargestSeries", value: function() {
      var t3 = this.w;
      t3.globals.maxValsInArrayIndex = t3.globals.series.map((function(t4) {
        return t4.length;
      })).indexOf(Math.max.apply(Math, t3.globals.series.map((function(t4) {
        return t4.length;
      }))));
    } }, { key: "getLargestMarkerSize", value: function() {
      var t3 = this.w, e2 = 0;
      return t3.globals.markers.size.forEach((function(t4) {
        e2 = Math.max(e2, t4);
      })), t3.config.markers.discrete && t3.config.markers.discrete.length && t3.config.markers.discrete.forEach((function(t4) {
        e2 = Math.max(e2, t4.size);
      })), e2 > 0 && (t3.config.markers.hover.size > 0 ? e2 = t3.config.markers.hover.size : e2 += t3.config.markers.hover.sizeOffset), t3.globals.markers.largestSize = e2, e2;
    } }, { key: "getSeriesTotals", value: function() {
      var t3 = this.w;
      t3.globals.seriesTotals = t3.globals.series.map((function(t4, e2) {
        var i3 = 0;
        if (Array.isArray(t4)) for (var a3 = 0; a3 < t4.length; a3++) i3 += t4[a3];
        else i3 += t4;
        return i3;
      }));
    } }, { key: "getSeriesTotalsXRange", value: function(t3, e2) {
      var i3 = this.w;
      return i3.globals.series.map((function(a3, s2) {
        for (var r2 = 0, n2 = 0; n2 < a3.length; n2++) i3.globals.seriesX[s2][n2] > t3 && i3.globals.seriesX[s2][n2] < e2 && (r2 += a3[n2]);
        return r2;
      }));
    } }, { key: "getPercentSeries", value: function() {
      var t3 = this.w;
      t3.globals.seriesPercent = t3.globals.series.map((function(e2, i3) {
        var a3 = [];
        if (Array.isArray(e2)) for (var s2 = 0; s2 < e2.length; s2++) {
          var r2 = t3.globals.stackedSeriesTotals[s2], n2 = 0;
          r2 && (n2 = 100 * e2[s2] / r2), a3.push(n2);
        }
        else {
          var o2 = 100 * e2 / t3.globals.seriesTotals.reduce((function(t4, e3) {
            return t4 + e3;
          }), 0);
          a3.push(o2);
        }
        return a3;
      }));
    } }, { key: "getCalculatedRatios", value: function() {
      var t3, e2, i3, a3 = this, s2 = this.w, r2 = s2.globals, n2 = [], o2 = 0, l2 = [], h2 = 0.1, c2 = 0;
      if (r2.yRange = [], r2.isMultipleYAxis) for (var d2 = 0; d2 < r2.minYArr.length; d2++) r2.yRange.push(Math.abs(r2.minYArr[d2] - r2.maxYArr[d2])), l2.push(0);
      else r2.yRange.push(Math.abs(r2.minY - r2.maxY));
      r2.xRange = Math.abs(r2.maxX - r2.minX), r2.zRange = Math.abs(r2.maxZ - r2.minZ);
      for (var u2 = 0; u2 < r2.yRange.length; u2++) n2.push(r2.yRange[u2] / r2.gridHeight);
      if (e2 = r2.xRange / r2.gridWidth, t3 = r2.yRange / r2.gridWidth, i3 = r2.xRange / r2.gridHeight, (o2 = r2.zRange / r2.gridHeight * 16) || (o2 = 1), r2.minY !== Number.MIN_VALUE && 0 !== Math.abs(r2.minY) && (r2.hasNegs = true), s2.globals.seriesYAxisReverseMap.length > 0) {
        var g2 = function(t4, e3) {
          var i4 = s2.config.yaxis[s2.globals.seriesYAxisReverseMap[e3]], r3 = t4 < 0 ? -1 : 1;
          return t4 = Math.abs(t4), i4.logarithmic && (t4 = a3.getBaseLog(i4.logBase, t4)), -r3 * t4 / n2[e3];
        };
        if (r2.isMultipleYAxis) {
          l2 = [];
          for (var p2 = 0; p2 < n2.length; p2++) l2.push(g2(r2.minYArr[p2], p2));
        } else (l2 = []).push(g2(r2.minY, 0)), r2.minY !== Number.MIN_VALUE && 0 !== Math.abs(r2.minY) && (h2 = -r2.minY / t3, c2 = r2.minX / e2);
      } else (l2 = []).push(0), h2 = 0, c2 = 0;
      return { yRatio: n2, invertedYRatio: t3, zRatio: o2, xRatio: e2, invertedXRatio: i3, baseLineInvertedY: h2, baseLineY: l2, baseLineX: c2 };
    } }, { key: "getLogSeries", value: function(t3) {
      var e2 = this, i3 = this.w;
      return i3.globals.seriesLog = t3.map((function(t4, a3) {
        var s2 = i3.globals.seriesYAxisReverseMap[a3];
        return i3.config.yaxis[s2] && i3.config.yaxis[s2].logarithmic ? t4.map((function(t5) {
          return null === t5 ? null : e2.getLogVal(i3.config.yaxis[s2].logBase, t5, a3);
        })) : t4;
      })), i3.globals.invalidLogScale ? t3 : i3.globals.seriesLog;
    } }, { key: "getLogValAtSeriesIndex", value: function(t3, e2) {
      if (null === t3) return null;
      var i3 = this.w, a3 = i3.globals.seriesYAxisReverseMap[e2];
      return i3.config.yaxis[a3] && i3.config.yaxis[a3].logarithmic ? this.getLogVal(i3.config.yaxis[a3].logBase, t3, e2) : t3;
    } }, { key: "getBaseLog", value: function(t3, e2) {
      return Math.log(e2) / Math.log(t3);
    } }, { key: "getLogVal", value: function(t3, e2, i3) {
      if (e2 <= 0) return 0;
      var a3 = this.w, s2 = 0 === a3.globals.minYArr[i3] ? -1 : this.getBaseLog(t3, a3.globals.minYArr[i3]), r2 = (0 === a3.globals.maxYArr[i3] ? 0 : this.getBaseLog(t3, a3.globals.maxYArr[i3])) - s2;
      return e2 < 1 ? e2 / r2 : (this.getBaseLog(t3, e2) - s2) / r2;
    } }, { key: "getLogYRatios", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = this.w.globals;
      return a3.yLogRatio = t3.slice(), a3.logYRange = a3.yRange.map((function(t4, s2) {
        var r2 = i3.globals.seriesYAxisReverseMap[s2];
        if (i3.config.yaxis[r2] && e2.w.config.yaxis[r2].logarithmic) {
          var n2, o2 = -Number.MAX_VALUE, l2 = Number.MIN_VALUE;
          return a3.seriesLog.forEach((function(t5, e3) {
            t5.forEach((function(t6) {
              i3.config.yaxis[e3] && i3.config.yaxis[e3].logarithmic && (o2 = Math.max(t6, o2), l2 = Math.min(t6, l2));
            }));
          })), n2 = Math.pow(a3.yRange[s2], Math.abs(l2 - o2) / a3.yRange[s2]), a3.yLogRatio[s2] = n2 / a3.gridHeight, n2;
        }
      })), a3.invalidLogScale ? t3.slice() : a3.yLogRatio;
    } }, { key: "drawSeriesByGroup", value: function(t3, e2, i3, a3) {
      var s2 = this.w, r2 = [];
      return t3.series.length > 0 && e2.forEach((function(e3) {
        var n2 = [], o2 = [];
        t3.i.forEach((function(i4, a4) {
          s2.config.series[i4].group === e3 && (n2.push(t3.series[a4]), o2.push(i4));
        })), n2.length > 0 && r2.push(a3.draw(n2, i3, o2));
      })), r2;
    } }], [{ key: "checkComboSeries", value: function(t3, e2) {
      var i3 = false, a3 = 0, s2 = 0;
      return void 0 === e2 && (e2 = "line"), t3.length && void 0 !== t3[0].type && t3.forEach((function(t4) {
        "bar" !== t4.type && "column" !== t4.type && "candlestick" !== t4.type && "boxPlot" !== t4.type || a3++, void 0 !== t4.type && t4.type !== e2 && s2++;
      })), s2 > 0 && (i3 = true), { comboBarCount: a3, comboCharts: i3 };
    } }, { key: "extendArrayProps", value: function(t3, e2, i3) {
      var a3, s2, r2, n2, o2, l2;
      (null !== (a3 = e2) && void 0 !== a3 && a3.yaxis && (e2 = t3.extendYAxis(e2, i3)), null !== (s2 = e2) && void 0 !== s2 && s2.annotations) && (e2.annotations.yaxis && (e2 = t3.extendYAxisAnnotations(e2)), null !== (r2 = e2) && void 0 !== r2 && null !== (n2 = r2.annotations) && void 0 !== n2 && n2.xaxis && (e2 = t3.extendXAxisAnnotations(e2)), null !== (o2 = e2) && void 0 !== o2 && null !== (l2 = o2.annotations) && void 0 !== l2 && l2.points && (e2 = t3.extendPointAnnotations(e2)));
      return e2;
    } }]), t2;
  })(), Ii = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.annoCtx = e2;
    }
    return s(t2, [{ key: "setOrientations", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i3 = this.w;
      if ("vertical" === t3.label.orientation) {
        var a3 = null !== e2 ? e2 : 0, s2 = i3.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a3, "']"));
        if (null !== s2) {
          var r2 = s2.getBoundingClientRect();
          s2.setAttribute("x", parseFloat(s2.getAttribute("x")) - r2.height + 4);
          var n2 = "top" === t3.label.position ? r2.width : -r2.width;
          s2.setAttribute("y", parseFloat(s2.getAttribute("y")) + n2);
          var o2 = this.annoCtx.graphics.rotateAroundCenter(s2), l2 = o2.x, h2 = o2.y;
          s2.setAttribute("transform", "rotate(-90 ".concat(l2, " ").concat(h2, ")"));
        }
      }
    } }, { key: "addBackgroundToAnno", value: function(t3, e2) {
      var i3 = this.w;
      if (!t3 || !e2.label.text || !String(e2.label.text).trim()) return null;
      var a3 = i3.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s2 = t3.getBoundingClientRect(), r2 = e2.label.style.padding, n2 = r2.left, o2 = r2.right, l2 = r2.top, h2 = r2.bottom;
      if ("vertical" === e2.label.orientation) {
        var c2 = [n2, o2, l2, h2];
        l2 = c2[0], h2 = c2[1], n2 = c2[2], o2 = c2[3];
      }
      var d2 = s2.left - a3.left - n2, u2 = s2.top - a3.top - l2, g2 = this.annoCtx.graphics.drawRect(d2 - i3.globals.barPadForNumericAxis, u2, s2.width + n2 + o2, s2.height + l2 + h2, e2.label.borderRadius, e2.label.style.background, 1, e2.label.borderWidth, e2.label.borderColor, 0);
      return e2.id && g2.node.classList.add(e2.id), g2;
    } }, { key: "annotationsBackground", value: function() {
      var t3 = this, e2 = this.w, i3 = function(i4, a3, s2) {
        var r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations .apexcharts-").concat(s2, "-annotation-label[rel='").concat(a3, "']"));
        if (r2) {
          var n2 = r2.parentNode, o2 = t3.addBackgroundToAnno(r2, i4);
          o2 && (n2.insertBefore(o2.node, r2), i4.label.mouseEnter && o2.node.addEventListener("mouseenter", i4.label.mouseEnter.bind(t3, i4)), i4.label.mouseLeave && o2.node.addEventListener("mouseleave", i4.label.mouseLeave.bind(t3, i4)), i4.label.click && o2.node.addEventListener("click", i4.label.click.bind(t3, i4)));
        }
      };
      e2.config.annotations.xaxis.forEach((function(t4, e3) {
        return i3(t4, e3, "xaxis");
      })), e2.config.annotations.yaxis.forEach((function(t4, e3) {
        return i3(t4, e3, "yaxis");
      })), e2.config.annotations.points.forEach((function(t4, e3) {
        return i3(t4, e3, "point");
      }));
    } }, { key: "getY1Y2", value: function(t3, e2) {
      var i3, a3 = this.w, s2 = "y1" === t3 ? e2.y : e2.y2, r2 = false;
      if (this.annoCtx.invertAxis) {
        var n2 = a3.config.xaxis.convertedCatToNumeric ? a3.globals.categoryLabels : a3.globals.labels, o2 = n2.indexOf(s2), l2 = a3.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(".concat(o2 + 1, ")"));
        i3 = l2 ? parseFloat(l2.getAttribute("y")) : (a3.globals.gridHeight / n2.length - 1) * (o2 + 1) - a3.globals.barHeight, void 0 !== e2.seriesIndex && a3.globals.barHeight && (i3 -= a3.globals.barHeight / 2 * (a3.globals.series.length - 1) - a3.globals.barHeight * e2.seriesIndex);
      } else {
        var h2, c2 = a3.globals.seriesYAxisMap[e2.yAxisIndex][0], d2 = a3.config.yaxis[e2.yAxisIndex].logarithmic ? new Pi(this.annoCtx.ctx).getLogVal(a3.config.yaxis[e2.yAxisIndex].logBase, s2, c2) / a3.globals.yLogRatio[c2] : (s2 - a3.globals.minYArr[c2]) / (a3.globals.yRange[c2] / a3.globals.gridHeight);
        i3 = a3.globals.gridHeight - Math.min(Math.max(d2, 0), a3.globals.gridHeight), r2 = d2 > a3.globals.gridHeight || d2 < 0, !e2.marker || void 0 !== e2.y && null !== e2.y || (i3 = 0), null !== (h2 = a3.config.yaxis[e2.yAxisIndex]) && void 0 !== h2 && h2.reversed && (i3 = d2);
      }
      return "string" == typeof s2 && s2.includes("px") && (i3 = parseFloat(s2)), { yP: i3, clipped: r2 };
    } }, { key: "getX1X2", value: function(t3, e2) {
      var i3 = this.w, a3 = "x1" === t3 ? e2.x : e2.x2, s2 = this.annoCtx.invertAxis ? i3.globals.minY : i3.globals.minX, r2 = this.annoCtx.invertAxis ? i3.globals.maxY : i3.globals.maxX, n2 = this.annoCtx.invertAxis ? i3.globals.yRange[0] : i3.globals.xRange, o2 = false, l2 = this.annoCtx.inversedReversedAxis ? (r2 - a3) / (n2 / i3.globals.gridWidth) : (a3 - s2) / (n2 / i3.globals.gridWidth);
      return "category" !== i3.config.xaxis.type && !i3.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i3.globals.dataFormatXNumeric || i3.config.chart.sparkline.enabled || (l2 = this.getStringX(a3)), "string" == typeof a3 && a3.includes("px") && (l2 = parseFloat(a3)), null == a3 && e2.marker && (l2 = i3.globals.gridWidth), void 0 !== e2.seriesIndex && i3.globals.barWidth && !this.annoCtx.invertAxis && (l2 -= i3.globals.barWidth / 2 * (i3.globals.series.length - 1) - i3.globals.barWidth * e2.seriesIndex), "number" != typeof l2 && (l2 = 0, o2 = true), parseFloat(l2.toFixed(10)) > parseFloat(i3.globals.gridWidth.toFixed(10)) ? (l2 = i3.globals.gridWidth, o2 = true) : l2 < 0 && (l2 = 0, o2 = true), { x: l2, clipped: o2 };
    } }, { key: "getStringX", value: function(t3) {
      var e2 = this.w, i3 = t3;
      e2.config.xaxis.convertedCatToNumeric && e2.globals.categoryLabels.length && (t3 = e2.globals.categoryLabels.indexOf(t3) + 1);
      var a3 = e2.globals.labels.map((function(t4) {
        return Array.isArray(t4) ? t4.join(" ") : t4;
      })).indexOf(t3), s2 = e2.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(".concat(a3 + 1, ")"));
      return s2 && (i3 = parseFloat(s2.getAttribute("x"))), i3;
    } }]), t2;
  })(), Ti = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.annoCtx = e2, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new Ii(this.annoCtx);
    }
    return s(t2, [{ key: "addXaxisAnnotation", value: function(t3, e2, i3) {
      var a3, s2 = this.w, r2 = this.helpers.getX1X2("x1", t3), n2 = r2.x, o2 = r2.clipped, l2 = true, h2 = t3.label.text, c2 = t3.strokeDashArray;
      if (v.isNumber(n2)) {
        if (null === t3.x2 || void 0 === t3.x2) {
          if (!o2) {
            var d2 = this.annoCtx.graphics.drawLine(n2 + t3.offsetX, 0 + t3.offsetY, n2 + t3.offsetX, s2.globals.gridHeight + t3.offsetY, t3.borderColor, c2, t3.borderWidth);
            e2.appendChild(d2.node), t3.id && d2.node.classList.add(t3.id);
          }
        } else {
          var u2 = this.helpers.getX1X2("x2", t3);
          if (a3 = u2.x, l2 = u2.clipped, a3 < n2) {
            var g2 = n2;
            n2 = a3, a3 = g2;
          }
          var p2 = this.annoCtx.graphics.drawRect(n2 + t3.offsetX, 0 + t3.offsetY, a3 - n2, s2.globals.gridHeight + t3.offsetY, 0, t3.fillColor, t3.opacity, 1, t3.borderColor, c2);
          p2.node.classList.add("apexcharts-annotation-rect"), p2.attr("clip-path", "url(#gridRectMask".concat(s2.globals.cuid, ")")), e2.appendChild(p2.node), t3.id && p2.node.classList.add(t3.id);
        }
        if (!o2 || !l2) {
          var f2 = this.annoCtx.graphics.getTextRects(h2, parseFloat(t3.label.style.fontSize)), x2 = "top" === t3.label.position ? 4 : "center" === t3.label.position ? s2.globals.gridHeight / 2 + ("vertical" === t3.label.orientation ? f2.width / 2 : 0) : s2.globals.gridHeight, b2 = this.annoCtx.graphics.drawText({ x: n2 + t3.label.offsetX, y: x2 + t3.label.offsetY - ("vertical" === t3.label.orientation ? "top" === t3.label.position ? f2.width / 2 - 12 : -f2.width / 2 : 0), text: h2, textAnchor: t3.label.textAnchor, fontSize: t3.label.style.fontSize, fontFamily: t3.label.style.fontFamily, fontWeight: t3.label.style.fontWeight, foreColor: t3.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "") });
          b2.attr({ rel: i3 }), e2.appendChild(b2.node), this.annoCtx.helpers.setOrientations(t3, i3);
        }
      }
    } }, { key: "drawXAxisAnnotations", value: function() {
      var t3 = this, e2 = this.w, i3 = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
      return e2.config.annotations.xaxis.map((function(e3, a3) {
        t3.addXaxisAnnotation(e3, i3.node, a3);
      })), i3;
    } }]), t2;
  })(), zi = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }
    return s(t2, [{ key: "isValidDate", value: function(t3) {
      return "number" != typeof t3 && !isNaN(this.parseDate(t3));
    } }, { key: "getTimeStamp", value: function(t3) {
      return Date.parse(t3) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t3).toISOString().substr(0, 25)).getTime() : new Date(t3).getTime() : t3;
    } }, { key: "getDate", value: function(t3) {
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t3).toUTCString()) : new Date(t3);
    } }, { key: "parseDate", value: function(t3) {
      var e2 = Date.parse(t3);
      if (!isNaN(e2)) return this.getTimeStamp(t3);
      var i3 = Date.parse(t3.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
      return i3 = this.getTimeStamp(i3);
    } }, { key: "parseDateWithTimezone", value: function(t3) {
      return Date.parse(t3.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    } }, { key: "formatDate", value: function(t3, e2) {
      var i3 = this.w.globals.locale, a3 = this.w.config.xaxis.labels.datetimeUTC, s2 = ["\0"].concat(f(i3.months)), r2 = [""].concat(f(i3.shortMonths)), n2 = [""].concat(f(i3.days)), o2 = [""].concat(f(i3.shortDays));
      function l2(t4, e3) {
        var i4 = t4 + "";
        for (e3 = e3 || 2; i4.length < e3; ) i4 = "0" + i4;
        return i4;
      }
      var h2 = a3 ? t3.getUTCFullYear() : t3.getFullYear();
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])yyyy+/g, "$1" + h2)).replace(/(^|[^\\])yy/g, "$1" + h2.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h2);
      var c2 = (a3 ? t3.getUTCMonth() : t3.getMonth()) + 1;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])MMMM+/g, "$1" + s2[0])).replace(/(^|[^\\])MMM/g, "$1" + r2[0])).replace(/(^|[^\\])MM/g, "$1" + l2(c2))).replace(/(^|[^\\])M/g, "$1" + c2);
      var d2 = a3 ? t3.getUTCDate() : t3.getDate();
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])dddd+/g, "$1" + n2[0])).replace(/(^|[^\\])ddd/g, "$1" + o2[0])).replace(/(^|[^\\])dd/g, "$1" + l2(d2))).replace(/(^|[^\\])d/g, "$1" + d2);
      var u2 = a3 ? t3.getUTCHours() : t3.getHours(), g2 = u2 > 12 ? u2 - 12 : 0 === u2 ? 12 : u2;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])HH+/g, "$1" + l2(u2))).replace(/(^|[^\\])H/g, "$1" + u2)).replace(/(^|[^\\])hh+/g, "$1" + l2(g2))).replace(/(^|[^\\])h/g, "$1" + g2);
      var p2 = a3 ? t3.getUTCMinutes() : t3.getMinutes();
      e2 = (e2 = e2.replace(/(^|[^\\])mm+/g, "$1" + l2(p2))).replace(/(^|[^\\])m/g, "$1" + p2);
      var x2 = a3 ? t3.getUTCSeconds() : t3.getSeconds();
      e2 = (e2 = e2.replace(/(^|[^\\])ss+/g, "$1" + l2(x2))).replace(/(^|[^\\])s/g, "$1" + x2);
      var b2 = a3 ? t3.getUTCMilliseconds() : t3.getMilliseconds();
      e2 = e2.replace(/(^|[^\\])fff+/g, "$1" + l2(b2, 3)), b2 = Math.round(b2 / 10), e2 = e2.replace(/(^|[^\\])ff/g, "$1" + l2(b2)), b2 = Math.round(b2 / 10);
      var m2 = u2 < 12 ? "AM" : "PM";
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])f/g, "$1" + b2)).replace(/(^|[^\\])TT+/g, "$1" + m2)).replace(/(^|[^\\])T/g, "$1" + m2.charAt(0));
      var v2 = m2.toLowerCase();
      e2 = (e2 = e2.replace(/(^|[^\\])tt+/g, "$1" + v2)).replace(/(^|[^\\])t/g, "$1" + v2.charAt(0));
      var y2 = -t3.getTimezoneOffset(), w2 = a3 || !y2 ? "Z" : y2 > 0 ? "+" : "-";
      if (!a3) {
        var k2 = (y2 = Math.abs(y2)) % 60;
        w2 += l2(Math.floor(y2 / 60)) + ":" + l2(k2);
      }
      e2 = e2.replace(/(^|[^\\])K/g, "$1" + w2);
      var A2 = (a3 ? t3.getUTCDay() : t3.getDay()) + 1;
      return e2 = (e2 = (e2 = (e2 = (e2 = e2.replace(new RegExp(n2[0], "g"), n2[A2])).replace(new RegExp(o2[0], "g"), o2[A2])).replace(new RegExp(s2[0], "g"), s2[c2])).replace(new RegExp(r2[0], "g"), r2[c2])).replace(/\\(.)/g, "$1");
    } }, { key: "getTimeUnitsfromTimestamp", value: function(t3, e2, i3) {
      var a3 = this.w;
      void 0 !== a3.config.xaxis.min && (t3 = a3.config.xaxis.min), void 0 !== a3.config.xaxis.max && (e2 = a3.config.xaxis.max);
      var s2 = this.getDate(t3), r2 = this.getDate(e2), n2 = this.formatDate(s2, "yyyy MM dd HH mm ss fff").split(" "), o2 = this.formatDate(r2, "yyyy MM dd HH mm ss fff").split(" ");
      return { minMillisecond: parseInt(n2[6], 10), maxMillisecond: parseInt(o2[6], 10), minSecond: parseInt(n2[5], 10), maxSecond: parseInt(o2[5], 10), minMinute: parseInt(n2[4], 10), maxMinute: parseInt(o2[4], 10), minHour: parseInt(n2[3], 10), maxHour: parseInt(o2[3], 10), minDate: parseInt(n2[2], 10), maxDate: parseInt(o2[2], 10), minMonth: parseInt(n2[1], 10) - 1, maxMonth: parseInt(o2[1], 10) - 1, minYear: parseInt(n2[0], 10), maxYear: parseInt(o2[0], 10) };
    } }, { key: "isLeapYear", value: function(t3) {
      return t3 % 4 == 0 && t3 % 100 != 0 || t3 % 400 == 0;
    } }, { key: "calculcateLastDaysOfMonth", value: function(t3, e2, i3) {
      return this.determineDaysOfMonths(t3, e2) - i3;
    } }, { key: "determineDaysOfYear", value: function(t3) {
      var e2 = 365;
      return this.isLeapYear(t3) && (e2 = 366), e2;
    } }, { key: "determineRemainingDaysOfYear", value: function(t3, e2, i3) {
      var a3 = this.daysCntOfYear[e2] + i3;
      return e2 > 1 && this.isLeapYear() && a3++, a3;
    } }, { key: "determineDaysOfMonths", value: function(t3, e2) {
      var i3 = 30;
      switch (t3 = v.monthMod(t3), true) {
        case this.months30.indexOf(t3) > -1:
          2 === t3 && (i3 = this.isLeapYear(e2) ? 29 : 28);
          break;
        case this.months31.indexOf(t3) > -1:
        default:
          i3 = 31;
      }
      return i3;
    } }]), t2;
  })(), Xi = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.tooltipKeyFormat = "dd MMM";
    }
    return s(t2, [{ key: "xLabelFormat", value: function(t3, e2, i3, a3) {
      var s2 = this.w;
      if ("datetime" === s2.config.xaxis.type && void 0 === s2.config.xaxis.labels.formatter && void 0 === s2.config.tooltip.x.formatter) {
        var r2 = new zi(this.ctx);
        return r2.formatDate(r2.getDate(e2), s2.config.tooltip.x.format);
      }
      return t3(e2, i3, a3);
    } }, { key: "defaultGeneralFormatter", value: function(t3) {
      return Array.isArray(t3) ? t3.map((function(t4) {
        return t4;
      })) : t3;
    } }, { key: "defaultYFormatter", value: function(t3, e2, i3) {
      var a3 = this.w;
      if (v.isNumber(t3)) if (0 !== a3.globals.yValueDecimal) t3 = t3.toFixed(void 0 !== e2.decimalsInFloat ? e2.decimalsInFloat : a3.globals.yValueDecimal);
      else {
        var s2 = t3.toFixed(0);
        t3 = t3 == s2 ? s2 : t3.toFixed(1);
      }
      return t3;
    } }, { key: "setLabelFormatters", value: function() {
      var t3 = this, e2 = this.w;
      return e2.globals.xaxisTooltipFormatter = function(e3) {
        return t3.defaultGeneralFormatter(e3);
      }, e2.globals.ttKeyFormatter = function(e3) {
        return t3.defaultGeneralFormatter(e3);
      }, e2.globals.ttZFormatter = function(t4) {
        return t4;
      }, e2.globals.legendFormatter = function(e3) {
        return t3.defaultGeneralFormatter(e3);
      }, void 0 !== e2.config.xaxis.labels.formatter ? e2.globals.xLabelFormatter = e2.config.xaxis.labels.formatter : e2.globals.xLabelFormatter = function(t4) {
        if (v.isNumber(t4)) {
          if (!e2.config.xaxis.convertedCatToNumeric && "numeric" === e2.config.xaxis.type) {
            if (v.isNumber(e2.config.xaxis.decimalsInFloat)) return t4.toFixed(e2.config.xaxis.decimalsInFloat);
            var i3 = e2.globals.maxX - e2.globals.minX;
            return i3 > 0 && i3 < 100 ? t4.toFixed(1) : t4.toFixed(0);
          }
          if (e2.globals.isBarHorizontal) {
            if (e2.globals.maxY - e2.globals.minYArr < 4) return t4.toFixed(1);
          }
          return t4.toFixed(0);
        }
        return t4;
      }, "function" == typeof e2.config.tooltip.x.formatter ? e2.globals.ttKeyFormatter = e2.config.tooltip.x.formatter : e2.globals.ttKeyFormatter = e2.globals.xLabelFormatter, "function" == typeof e2.config.xaxis.tooltip.formatter && (e2.globals.xaxisTooltipFormatter = e2.config.xaxis.tooltip.formatter), (Array.isArray(e2.config.tooltip.y) || void 0 !== e2.config.tooltip.y.formatter) && (e2.globals.ttVal = e2.config.tooltip.y), void 0 !== e2.config.tooltip.z.formatter && (e2.globals.ttZFormatter = e2.config.tooltip.z.formatter), void 0 !== e2.config.legend.formatter && (e2.globals.legendFormatter = e2.config.legend.formatter), e2.config.yaxis.forEach((function(i3, a3) {
        void 0 !== i3.labels.formatter ? e2.globals.yLabelFormatters[a3] = i3.labels.formatter : e2.globals.yLabelFormatters[a3] = function(s2) {
          return e2.globals.xyCharts ? Array.isArray(s2) ? s2.map((function(e3) {
            return t3.defaultYFormatter(e3, i3, a3);
          })) : t3.defaultYFormatter(s2, i3, a3) : s2;
        };
      })), e2.globals;
    } }, { key: "heatmapLabelFormatters", value: function() {
      var t3 = this.w;
      if ("heatmap" === t3.config.chart.type) {
        t3.globals.yAxisScale[0].result = t3.globals.seriesNames.slice();
        var e2 = t3.globals.seriesNames.reduce((function(t4, e3) {
          return t4.length > e3.length ? t4 : e3;
        }), 0);
        t3.globals.yAxisScale[0].niceMax = e2, t3.globals.yAxisScale[0].niceMin = e2;
      }
    } }]), t2;
  })(), Ri = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "getLabel", value: function(t3, e2, i3, a3) {
      var s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [], r2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "12px", n2 = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6], o2 = this.w, l2 = void 0 === t3[a3] ? "" : t3[a3], h2 = l2, c2 = o2.globals.xLabelFormatter, d2 = o2.config.xaxis.labels.formatter, u2 = false, g2 = new Xi(this.ctx), p2 = l2;
      n2 && (h2 = g2.xLabelFormat(c2, l2, p2, { i: a3, dateFormatter: new zi(this.ctx).formatDate, w: o2 }), void 0 !== d2 && (h2 = d2(l2, t3[a3], { i: a3, dateFormatter: new zi(this.ctx).formatDate, w: o2 })));
      var f2, x2;
      e2.length > 0 ? (f2 = e2[a3].unit, x2 = null, e2.forEach((function(t4) {
        "month" === t4.unit ? x2 = "year" : "day" === t4.unit ? x2 = "month" : "hour" === t4.unit ? x2 = "day" : "minute" === t4.unit && (x2 = "hour");
      })), u2 = x2 === f2, i3 = e2[a3].position, h2 = e2[a3].value) : "datetime" === o2.config.xaxis.type && void 0 === d2 && (h2 = ""), void 0 === h2 && (h2 = ""), h2 = Array.isArray(h2) ? h2 : h2.toString();
      var b2 = new Mi(this.ctx), m2 = {};
      m2 = o2.globals.rotateXLabels && n2 ? b2.getTextRects(h2, parseInt(r2, 10), null, "rotate(".concat(o2.config.xaxis.labels.rotate, " 0 0)"), false) : b2.getTextRects(h2, parseInt(r2, 10));
      var v2 = !o2.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
      return !Array.isArray(h2) && ("NaN" === String(h2) || s2.indexOf(h2) >= 0 && v2) && (h2 = ""), { x: i3, text: h2, textRect: m2, isBold: u2 };
    } }, { key: "checkLabelBasedOnTickamount", value: function(t3, e2, i3) {
      var a3 = this.w, s2 = a3.config.xaxis.tickAmount;
      return "dataPoints" === s2 && (s2 = Math.round(a3.globals.gridWidth / 120)), s2 > i3 || t3 % Math.round(i3 / (s2 + 1)) == 0 || (e2.text = ""), e2;
    } }, { key: "checkForOverflowingLabels", value: function(t3, e2, i3, a3, s2) {
      var r2 = this.w;
      if (0 === t3 && r2.globals.skipFirstTimelinelabel && (e2.text = ""), t3 === i3 - 1 && r2.globals.skipLastTimelinelabel && (e2.text = ""), r2.config.xaxis.labels.hideOverlappingLabels && a3.length > 0) {
        var n2 = s2[s2.length - 1];
        if (r2.config.xaxis.labels.trim && "datetime" !== r2.config.xaxis.type) return e2;
        e2.x < n2.textRect.width / (r2.globals.rotateXLabels ? Math.abs(r2.config.xaxis.labels.rotate) / 12 : 1.01) + n2.x && (e2.text = "");
      }
      return e2;
    } }, { key: "checkForReversedLabels", value: function(t3, e2) {
      var i3 = this.w;
      return i3.config.yaxis[t3] && i3.config.yaxis[t3].reversed && e2.reverse(), e2;
    } }, { key: "yAxisAllSeriesCollapsed", value: function(t3) {
      var e2 = this.w.globals;
      return !e2.seriesYAxisMap[t3].some((function(t4) {
        return -1 === e2.collapsedSeriesIndices.indexOf(t4);
      }));
    } }, { key: "translateYAxisIndex", value: function(t3) {
      var e2 = this.w, i3 = e2.globals, a3 = e2.config.yaxis;
      return i3.series.length > a3.length || a3.some((function(t4) {
        return Array.isArray(t4.seriesName);
      })) ? t3 : i3.seriesYAxisReverseMap[t3];
    } }, { key: "isYAxisHidden", value: function(t3) {
      var e2 = this.w, i3 = e2.config.yaxis[t3];
      if (!i3.show || this.yAxisAllSeriesCollapsed(t3)) return true;
      if (!i3.showForNullSeries) {
        var a3 = e2.globals.seriesYAxisMap[t3], s2 = new Pi(this.ctx);
        return a3.every((function(t4) {
          return s2.isSeriesNull(t4);
        }));
      }
      return false;
    } }, { key: "getYAxisForeColor", value: function(t3, e2) {
      var i3 = this.w;
      return Array.isArray(t3) && i3.globals.yAxisScale[e2] && this.ctx.theme.pushExtraColors(t3, i3.globals.yAxisScale[e2].result.length, false), t3;
    } }, { key: "drawYAxisTicks", value: function(t3, e2, i3, a3, s2, r2, n2) {
      var o2 = this.w, l2 = new Mi(this.ctx), h2 = o2.globals.translateY + o2.config.yaxis[s2].labels.offsetY;
      if (o2.globals.isBarHorizontal ? h2 = 0 : "heatmap" === o2.config.chart.type && (h2 += r2 / 2), a3.show && e2 > 0) {
        true === o2.config.yaxis[s2].opposite && (t3 += a3.width);
        for (var c2 = e2; c2 >= 0; c2--) {
          var d2 = l2.drawLine(t3 + i3.offsetX - a3.width + a3.offsetX, h2 + a3.offsetY, t3 + i3.offsetX + a3.offsetX, h2 + a3.offsetY, a3.color);
          n2.add(d2), h2 += r2;
        }
      }
    } }]), t2;
  })(), Ei = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.annoCtx = e2, this.helpers = new Ii(this.annoCtx), this.axesUtils = new Ri(this.annoCtx);
    }
    return s(t2, [{ key: "addYaxisAnnotation", value: function(t3, e2, i3) {
      var a3, s2 = this.w, r2 = t3.strokeDashArray, n2 = this.helpers.getY1Y2("y1", t3), o2 = n2.yP, l2 = n2.clipped, h2 = true, c2 = false, d2 = t3.label.text;
      if (null === t3.y2 || void 0 === t3.y2) {
        if (!l2) {
          c2 = true;
          var u2 = this.annoCtx.graphics.drawLine(0 + t3.offsetX, o2 + t3.offsetY, this._getYAxisAnnotationWidth(t3), o2 + t3.offsetY, t3.borderColor, r2, t3.borderWidth);
          e2.appendChild(u2.node), t3.id && u2.node.classList.add(t3.id);
        }
      } else {
        if (a3 = (n2 = this.helpers.getY1Y2("y2", t3)).yP, h2 = n2.clipped, a3 > o2) {
          var g2 = o2;
          o2 = a3, a3 = g2;
        }
        if (!l2 || !h2) {
          c2 = true;
          var p2 = this.annoCtx.graphics.drawRect(0 + t3.offsetX, a3 + t3.offsetY, this._getYAxisAnnotationWidth(t3), o2 - a3, 0, t3.fillColor, t3.opacity, 1, t3.borderColor, r2);
          p2.node.classList.add("apexcharts-annotation-rect"), p2.attr("clip-path", "url(#gridRectMask".concat(s2.globals.cuid, ")")), e2.appendChild(p2.node), t3.id && p2.node.classList.add(t3.id);
        }
      }
      if (c2) {
        var f2 = "right" === t3.label.position ? s2.globals.gridWidth : "center" === t3.label.position ? s2.globals.gridWidth / 2 : 0, x2 = this.annoCtx.graphics.drawText({ x: f2 + t3.label.offsetX, y: (null != a3 ? a3 : o2) + t3.label.offsetY - 3, text: d2, textAnchor: t3.label.textAnchor, fontSize: t3.label.style.fontSize, fontFamily: t3.label.style.fontFamily, fontWeight: t3.label.style.fontWeight, foreColor: t3.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "") });
        x2.attr({ rel: i3 }), e2.appendChild(x2.node);
      }
    } }, { key: "_getYAxisAnnotationWidth", value: function(t3) {
      var e2 = this.w;
      e2.globals.gridWidth;
      return (t3.width.indexOf("%") > -1 ? e2.globals.gridWidth * parseInt(t3.width, 10) / 100 : parseInt(t3.width, 10)) + t3.offsetX;
    } }, { key: "drawYAxisAnnotations", value: function() {
      var t3 = this, e2 = this.w, i3 = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
      return e2.config.annotations.yaxis.forEach((function(e3, a3) {
        e3.yAxisIndex = t3.axesUtils.translateYAxisIndex(e3.yAxisIndex), t3.axesUtils.isYAxisHidden(e3.yAxisIndex) && t3.axesUtils.yAxisAllSeriesCollapsed(e3.yAxisIndex) || t3.addYaxisAnnotation(e3, i3.node, a3);
      })), i3;
    } }]), t2;
  })(), Yi = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.annoCtx = e2, this.helpers = new Ii(this.annoCtx);
    }
    return s(t2, [{ key: "addPointAnnotation", value: function(t3, e2, i3) {
      if (!(this.w.globals.collapsedSeriesIndices.indexOf(t3.seriesIndex) > -1)) {
        var a3 = this.helpers.getX1X2("x1", t3), s2 = a3.x, r2 = a3.clipped, n2 = (a3 = this.helpers.getY1Y2("y1", t3)).yP, o2 = a3.clipped;
        if (v.isNumber(s2) && !o2 && !r2) {
          var l2 = { pSize: t3.marker.size, pointStrokeWidth: t3.marker.strokeWidth, pointFillColor: t3.marker.fillColor, pointStrokeColor: t3.marker.strokeColor, shape: t3.marker.shape, pRadius: t3.marker.radius, class: "apexcharts-point-annotation-marker ".concat(t3.marker.cssClass, " ").concat(t3.id ? t3.id : "") }, h2 = this.annoCtx.graphics.drawMarker(s2 + t3.marker.offsetX, n2 + t3.marker.offsetY, l2);
          e2.appendChild(h2.node);
          var c2 = t3.label.text ? t3.label.text : "", d2 = this.annoCtx.graphics.drawText({ x: s2 + t3.label.offsetX, y: n2 + t3.label.offsetY - t3.marker.size - parseFloat(t3.label.style.fontSize) / 1.6, text: c2, textAnchor: t3.label.textAnchor, fontSize: t3.label.style.fontSize, fontFamily: t3.label.style.fontFamily, fontWeight: t3.label.style.fontWeight, foreColor: t3.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "") });
          if (d2.attr({ rel: i3 }), e2.appendChild(d2.node), t3.customSVG.SVG) {
            var u2 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t3.customSVG.cssClass });
            u2.attr({ transform: "translate(".concat(s2 + t3.customSVG.offsetX, ", ").concat(n2 + t3.customSVG.offsetY, ")") }), u2.node.innerHTML = t3.customSVG.SVG, e2.appendChild(u2.node);
          }
          if (t3.image.path) {
            var g2 = t3.image.width ? t3.image.width : 20, p2 = t3.image.height ? t3.image.height : 20;
            h2 = this.annoCtx.addImage({ x: s2 + t3.image.offsetX - g2 / 2, y: n2 + t3.image.offsetY - p2 / 2, width: g2, height: p2, path: t3.image.path, appendTo: ".apexcharts-point-annotations" });
          }
          t3.mouseEnter && h2.node.addEventListener("mouseenter", t3.mouseEnter.bind(this, t3)), t3.mouseLeave && h2.node.addEventListener("mouseleave", t3.mouseLeave.bind(this, t3)), t3.click && h2.node.addEventListener("click", t3.click.bind(this, t3));
        }
      }
    } }, { key: "drawPointAnnotations", value: function() {
      var t3 = this, e2 = this.w, i3 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
      return e2.config.annotations.points.map((function(e3, a3) {
        t3.addPointAnnotation(e3, i3.node, a3);
      })), i3;
    } }]), t2;
  })();
  var Hi = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, Oi = (function() {
    function t2() {
      i2(this, t2), this.yAxis = { show: true, showAlways: false, showForNullSeries: true, seriesName: void 0, opposite: false, reversed: false, logarithmic: false, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: false, max: void 0, min: void 0, floating: false, decimalsInFloat: void 0, labels: { show: true, showDuplicates: false, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: false, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: false, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: false, offsetX: 0 }, crosshairs: { show: true, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
    }
    return s(t2, [{ key: "init", value: function() {
      return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: true, speed: 800, animateGradually: { delay: 150, enabled: true }, dynamicAnimation: { enabled: true, speed: 350 } }, background: "", locales: [Hi], defaultLocale: "en", dropShadow: { enabled: false, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.7 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: true, redrawOnWindowResize: true, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, injectStyleSheet: true, selection: { enabled: false, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: false }, brush: { enabled: false, autoScaleYaxis: true, target: void 0, targets: void 0 }, stacked: false, stackOnlyBar: true, stackType: "normal", toolbar: { show: true, offsetX: 0, offsetY: 0, tools: { download: true, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", categoryFormatter: void 0, valueFormatter: void 0 }, png: { filename: void 0 }, svg: { filename: void 0 }, scale: void 0, width: void 0 }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: true, type: "x", autoScaleYaxis: false, allowMouseWheelZoom: true, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } } }, parsing: { x: void 0, y: void 0 }, plotOptions: { line: { isSlopeChart: false, colors: { threshold: 0, colorAboveThreshold: void 0, colorBelowThreshold: void 0 } }, area: { fillTo: "origin" }, bar: { horizontal: false, columnWidth: "70%", barHeight: "70%", distributed: false, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: true, rangeBarGroupRows: false, hideZeroBarsWhenGrouped: false, isDumbbell: false, dumbbellColors: void 0, isFunnel: false, isFunnel3d: true, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: true, orientation: "horizontal", total: { enabled: false, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: true, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: true } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: true, shadeIntensity: 0.5, reverseNegativeShade: false, distributed: false, useFillColorAsStroke: false, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: true, shadeIntensity: 0.5, distributed: false, reverseNegativeShade: false, useFillColorAsStroke: false, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0 }, seriesTitle: { show: true, offsetY: 1, offsetX: 1, borderColor: "#000", borderWidth: 1, borderRadius: 2, style: { background: "rgba(0, 0, 0, 0.6)", color: "#fff", fontSize: "12px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 6, right: 6, top: 2, bottom: 2 } } } }, radialBar: { inverseOrder: false, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: true, position: "front", dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: true, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: true, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(t3) {
        return t3;
      } }, value: { show: true, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(t3) {
        return t3 + "%";
      } }, total: { show: false, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(t3) {
        return t3.globals.seriesTotals.reduce((function(t4, e2) {
          return t4 + e2;
        }), 0) / t3.globals.series.length + "%";
      } } }, barLabels: { enabled: false, offsetX: 0, offsetY: 0, useSeriesColors: true, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: function(t3) {
        return t3;
      }, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: true, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: false, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(t3) {
        return t3;
      } }, value: { show: true, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(t3) {
        return t3;
      } }, total: { show: false, showAlways: false, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(t3) {
        return t3.globals.seriesTotals.reduce((function(t4, e2) {
          return t4 + e2;
        }), 0);
      } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: true, enabledOnSeries: void 0, formatter: function(t3) {
        return null !== t3 ? t3 : "";
      }, textAnchor: "middle", distributed: false, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: true, foreColor: "#fff", backgroundColor: void 0, borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: true, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: false } }, yaxis: { lines: { show: true } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: true, showForSingleSeries: false, showForNullSeries: true, showForZeroSeries: true, floating: false, position: "bottom", horizontalAlign: "center", inverseOrder: false, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], clusterGroupedSeries: true, clusterGroupedSeriesOrientation: "vertical", labels: { colors: void 0, useSeriesColors: false }, markers: { size: 7, fillColors: void 0, strokeWidth: 1, shape: void 0, offsetX: 0, offsetY: 0, customHTML: void 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 4 }, onItemClick: { toggleDataSeries: true }, onItemHover: { highlightDataSeries: true } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 0, offsetY: 0, showNullDataPoints: true, onClick: void 0, onDblClick: void 0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { hover: { filter: { type: "lighten" } }, active: { allowMultipleDataPointsSelection: false, filter: { type: "darken" } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: false, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: false, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: true, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: true, enabledOnSeries: void 0, shared: true, hideEmptySeries: false, followCursor: false, intersect: false, inverseOrder: false, custom: void 0, fillSeriesColor: false, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: false }, x: { show: true, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(t3) {
        return t3 ? t3 + ": " : "";
      } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: true, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: false, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: false, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: true, rotate: -45, rotateAlways: false, hideOverlappingLabels: true, trim: false, minHeight: void 0, maxHeight: 120, showDuplicates: true, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: true, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: true, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: true, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: false, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: true, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: false, left: 0, top: 0, blur: 1, opacity: 0.8 } }, tooltip: { enabled: true, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "", palette: "palette1", monochrome: { enabled: false, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } } };
    } }]), t2;
  })(), Fi = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.graphics = new Mi(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = true), this.helpers = new Ii(this), this.xAxisAnnotations = new Ti(this), this.yAxisAnnotations = new Ei(this), this.pointsAnnotations = new Yi(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = true), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
    }
    return s(t2, [{ key: "drawAxesAnnotations", value: function() {
      var t3 = this.w;
      if (t3.globals.axisCharts && t3.globals.dataPoints) {
        for (var e2 = this.yAxisAnnotations.drawYAxisAnnotations(), i3 = this.xAxisAnnotations.drawXAxisAnnotations(), a3 = this.pointsAnnotations.drawPointAnnotations(), s2 = t3.config.chart.animations.enabled, r2 = [e2, i3, a3], n2 = [i3.node, e2.node, a3.node], o2 = 0; o2 < 3; o2++) t3.globals.dom.elGraphical.add(r2[o2]), !s2 || t3.globals.resized || t3.globals.dataChanged || "scatter" !== t3.config.chart.type && "bubble" !== t3.config.chart.type && t3.globals.dataPoints > 1 && n2[o2].classList.add("apexcharts-element-hidden"), t3.globals.delayedElements.push({ el: n2[o2], index: 0 });
        this.helpers.annotationsBackground();
      }
    } }, { key: "drawImageAnnos", value: function() {
      var t3 = this;
      this.w.config.annotations.images.map((function(e2, i3) {
        t3.addImage(e2, i3);
      }));
    } }, { key: "drawTextAnnos", value: function() {
      var t3 = this;
      this.w.config.annotations.texts.map((function(e2, i3) {
        t3.addText(e2, i3);
      }));
    } }, { key: "addXaxisAnnotation", value: function(t3, e2, i3) {
      this.xAxisAnnotations.addXaxisAnnotation(t3, e2, i3);
    } }, { key: "addYaxisAnnotation", value: function(t3, e2, i3) {
      this.yAxisAnnotations.addYaxisAnnotation(t3, e2, i3);
    } }, { key: "addPointAnnotation", value: function(t3, e2, i3) {
      this.pointsAnnotations.addPointAnnotation(t3, e2, i3);
    } }, { key: "addText", value: function(t3, e2) {
      var i3 = t3.x, a3 = t3.y, s2 = t3.text, r2 = t3.textAnchor, n2 = t3.foreColor, o2 = t3.fontSize, l2 = t3.fontFamily, h2 = t3.fontWeight, c2 = t3.cssClass, d2 = t3.backgroundColor, u2 = t3.borderWidth, g2 = t3.strokeDashArray, p2 = t3.borderRadius, f2 = t3.borderColor, x2 = t3.appendTo, b2 = void 0 === x2 ? ".apexcharts-svg" : x2, m2 = t3.paddingLeft, v2 = void 0 === m2 ? 4 : m2, y2 = t3.paddingRight, w2 = void 0 === y2 ? 4 : y2, k2 = t3.paddingBottom, A2 = void 0 === k2 ? 2 : k2, C2 = t3.paddingTop, S2 = void 0 === C2 ? 2 : C2, L2 = this.w, M2 = this.graphics.drawText({ x: i3, y: a3, text: s2, textAnchor: r2 || "start", fontSize: o2 || "12px", fontWeight: h2 || "regular", fontFamily: l2 || L2.config.chart.fontFamily, foreColor: n2 || L2.config.chart.foreColor, cssClass: c2 }), P2 = L2.globals.dom.baseEl.querySelector(b2);
      P2 && P2.appendChild(M2.node);
      var I2 = M2.bbox();
      if (s2) {
        var T2 = this.graphics.drawRect(I2.x - v2, I2.y - S2, I2.width + v2 + w2, I2.height + A2 + S2, p2, d2 || "transparent", 1, u2, f2, g2);
        P2.insertBefore(T2.node, M2.node);
      }
    } }, { key: "addImage", value: function(t3, e2) {
      var i3 = this.w, a3 = t3.path, s2 = t3.x, r2 = void 0 === s2 ? 0 : s2, n2 = t3.y, o2 = void 0 === n2 ? 0 : n2, l2 = t3.width, h2 = void 0 === l2 ? 20 : l2, c2 = t3.height, d2 = void 0 === c2 ? 20 : c2, u2 = t3.appendTo, g2 = void 0 === u2 ? ".apexcharts-svg" : u2, p2 = i3.globals.dom.Paper.image(a3);
      p2.size(h2, d2).move(r2, o2);
      var f2 = i3.globals.dom.baseEl.querySelector(g2);
      return f2 && f2.appendChild(p2.node), p2;
    } }, { key: "addXaxisAnnotationExternal", value: function(t3, e2, i3) {
      return this.addAnnotationExternal({ params: t3, pushToMemory: e2, context: i3, type: "xaxis", contextMethod: i3.addXaxisAnnotation }), i3;
    } }, { key: "addYaxisAnnotationExternal", value: function(t3, e2, i3) {
      return this.addAnnotationExternal({ params: t3, pushToMemory: e2, context: i3, type: "yaxis", contextMethod: i3.addYaxisAnnotation }), i3;
    } }, { key: "addPointAnnotationExternal", value: function(t3, e2, i3) {
      return void 0 === this.invertAxis && (this.invertAxis = i3.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t3, pushToMemory: e2, context: i3, type: "point", contextMethod: i3.addPointAnnotation }), i3;
    } }, { key: "addAnnotationExternal", value: function(t3) {
      var e2 = t3.params, i3 = t3.pushToMemory, a3 = t3.context, s2 = t3.type, r2 = t3.contextMethod, n2 = a3, o2 = n2.w, l2 = o2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations")), h2 = l2.childNodes.length + 1, c2 = new Oi(), d2 = Object.assign({}, "xaxis" === s2 ? c2.xAxisAnnotation : "yaxis" === s2 ? c2.yAxisAnnotation : c2.pointAnnotation), u2 = v.extend(d2, e2);
      switch (s2) {
        case "xaxis":
          this.addXaxisAnnotation(u2, l2, h2);
          break;
        case "yaxis":
          this.addYaxisAnnotation(u2, l2, h2);
          break;
        case "point":
          this.addPointAnnotation(u2, l2, h2);
      }
      var g2 = o2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations .apexcharts-").concat(s2, "-annotation-label[rel='").concat(h2, "']")), p2 = this.helpers.addBackgroundToAnno(g2, u2);
      return p2 && l2.insertBefore(p2.node, g2), i3 && o2.globals.memory.methodsToExec.push({ context: n2, id: u2.id ? u2.id : v.randomId(), method: r2, label: "addAnnotation", params: e2 }), a3;
    } }, { key: "clearAnnotations", value: function(t3) {
      for (var e2 = t3.w, i3 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"), a3 = e2.globals.memory.methodsToExec.length - 1; a3 >= 0; a3--) "addText" !== e2.globals.memory.methodsToExec[a3].label && "addAnnotation" !== e2.globals.memory.methodsToExec[a3].label || e2.globals.memory.methodsToExec.splice(a3, 1);
      i3 = v.listToArray(i3), Array.prototype.forEach.call(i3, (function(t4) {
        for (; t4.firstChild; ) t4.removeChild(t4.firstChild);
      }));
    } }, { key: "removeAnnotation", value: function(t3, e2) {
      var i3 = t3.w, a3 = i3.globals.dom.baseEl.querySelectorAll(".".concat(e2));
      a3 && (i3.globals.memory.methodsToExec.map((function(t4, a4) {
        t4.id === e2 && i3.globals.memory.methodsToExec.splice(a4, 1);
      })), Object.keys(i3.config.annotations).forEach((function(t4) {
        var a4 = i3.config.annotations[t4];
        Array.isArray(a4) && (i3.config.annotations[t4] = a4.filter((function(t5) {
          return t5.id !== e2;
        })));
      })), Array.prototype.forEach.call(a3, (function(t4) {
        t4.parentElement.removeChild(t4);
      })));
    } }]), t2;
  })(), Di = function(t2) {
    var e2, i3 = t2.isTimeline, a3 = t2.ctx, s2 = t2.seriesIndex, r2 = t2.dataPointIndex, n2 = t2.y1, o2 = t2.y2, l2 = t2.w, h2 = l2.globals.seriesRangeStart[s2][r2], c2 = l2.globals.seriesRangeEnd[s2][r2], d2 = l2.globals.labels[r2], u2 = l2.config.series[s2].name ? l2.config.series[s2].name : "", g2 = l2.globals.ttKeyFormatter, p2 = l2.config.tooltip.y.title.formatter, f2 = { w: l2, seriesIndex: s2, dataPointIndex: r2, start: h2, end: c2 };
    ("function" == typeof p2 && (u2 = p2(u2, f2)), null !== (e2 = l2.config.series[s2].data[r2]) && void 0 !== e2 && e2.x && (d2 = l2.config.series[s2].data[r2].x), i3) || "datetime" === l2.config.xaxis.type && (d2 = new Xi(a3).xLabelFormat(l2.globals.ttKeyFormatter, d2, d2, { i: void 0, dateFormatter: new zi(a3).formatDate, w: l2 }));
    "function" == typeof g2 && (d2 = g2(d2, f2)), Number.isFinite(n2) && Number.isFinite(o2) && (h2 = n2, c2 = o2);
    var x2 = "", b2 = "", m2 = l2.globals.colors[s2];
    if (void 0 === l2.config.tooltip.x.formatter) if ("datetime" === l2.config.xaxis.type) {
      var v2 = new zi(a3);
      x2 = v2.formatDate(v2.getDate(h2), l2.config.tooltip.x.format), b2 = v2.formatDate(v2.getDate(c2), l2.config.tooltip.x.format);
    } else x2 = h2, b2 = c2;
    else x2 = l2.config.tooltip.x.formatter(h2), b2 = l2.config.tooltip.x.formatter(c2);
    return { start: h2, end: c2, startVal: x2, endVal: b2, ylabel: d2, color: m2, seriesName: u2 };
  }, _i = function(t2) {
    var e2 = t2.color, i3 = t2.seriesName, a3 = t2.ylabel, s2 = t2.start, r2 = t2.end, n2 = t2.seriesIndex, o2 = t2.dataPointIndex, l2 = t2.ctx.tooltip.tooltipLabels.getFormatters(n2);
    s2 = l2.yLbFormatter(s2), r2 = l2.yLbFormatter(r2);
    var h2 = l2.yLbFormatter(t2.w.globals.series[n2][o2]), c2 = '<span class="value start-value">\n  '.concat(s2, '\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(r2, "\n  </span>");
    return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e2 + '">' + (i3 || "") + '</span></div><div> <span class="category">' + a3 + ": </span> " + (t2.w.globals.comboCharts ? "rangeArea" === t2.w.config.series[n2].type || "rangeBar" === t2.w.config.series[n2].type ? c2 : "<span>".concat(h2, "</span>") : c2) + " </div></div>";
  }, Ni = (function() {
    function t2(e2) {
      i2(this, t2), this.opts = e2;
    }
    return s(t2, [{ key: "hideYAxis", value: function() {
      this.opts.yaxis[0].show = false, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = false, this.opts.yaxis[0].axisTicks.show = false, this.opts.yaxis[0].floating = true;
    } }, { key: "line", value: function() {
      return { dataLabels: { enabled: false }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "sparkline", value: function(t3) {
      this.hideYAxis();
      return v.extend(t3, { grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: false }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } }, chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false } });
    } }, { key: "slope", value: function() {
      return this.hideYAxis(), { chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: true, formatter: function(t3, e2) {
        var i3 = e2.w.config.series[e2.seriesIndex].name;
        return null !== t3 ? i3 + ": " + t3 : "";
      }, background: { enabled: false }, offsetX: -5 }, grid: { xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } }, xaxis: { position: "top", labels: { style: { fontSize: 14, fontWeight: 900 } }, tooltip: { enabled: false }, crosshairs: { show: false } }, markers: { size: 8, hover: { sizeOffset: 1 } }, legend: { show: false }, tooltip: { shared: false, intersect: true, followCursor: true }, stroke: { width: 5, curve: "straight" } };
    } }, { key: "bar", value: function() {
      return { chart: { stacked: false }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: false } }, stroke: { width: 0, lineCap: "square" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square" } }, tooltip: { shared: false, intersect: true }, xaxis: { tooltip: { enabled: false }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: false }, stroke: { width: 0 } } } };
    } }, { key: "funnel", value: function() {
      return this.hideYAxis(), u(u({}, this.bar()), {}, { chart: { animations: { speed: 800, animateGradually: { enabled: false } } }, plotOptions: { bar: { horizontal: true, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: false, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } } });
    } }, { key: "candlestick", value: function() {
      var t3 = this;
      return { stroke: { width: 1 }, fill: { opacity: 1 }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: function(e2) {
        var i3 = e2.seriesIndex, a3 = e2.dataPointIndex, s2 = e2.w;
        return t3._getBoxTooltip(s2, i3, a3, ["Open", "High", "", "Low", "Close"], "candlestick");
      } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "boxPlot", value: function() {
      var t3 = this;
      return { chart: { animations: { dynamicAnimation: { enabled: false } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: function(e2) {
        var i3 = e2.seriesIndex, a3 = e2.dataPointIndex, s2 = e2.w;
        return t3._getBoxTooltip(s2, i3, a3, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
      } }, markers: { size: 7, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "rangeBar", value: function() {
      return { chart: { animations: { animateGradually: false } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: false, formatter: function(t3, e2) {
        e2.ctx;
        var i3 = e2.seriesIndex, a3 = e2.dataPointIndex, s2 = e2.w, r2 = function() {
          var t4 = s2.globals.seriesRangeStart[i3][a3];
          return s2.globals.seriesRangeEnd[i3][a3] - t4;
        };
        return s2.globals.comboCharts ? "rangeBar" === s2.config.series[i3].type || "rangeArea" === s2.config.series[i3].type ? r2() : t3 : r2();
      }, background: { enabled: false }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: false, followCursor: true, custom: function(t3) {
        return t3.w.config.plotOptions && t3.w.config.plotOptions.bar && t3.w.config.plotOptions.bar.horizontal ? (function(t4) {
          var e2 = Di(u(u({}, t4), {}, { isTimeline: true })), i3 = e2.color, a3 = e2.seriesName, s2 = e2.ylabel, r2 = e2.startVal, n2 = e2.endVal;
          return _i(u(u({}, t4), {}, { color: i3, seriesName: a3, ylabel: s2, start: r2, end: n2 }));
        })(t3) : (function(t4) {
          var e2 = Di(t4), i3 = e2.color, a3 = e2.seriesName, s2 = e2.ylabel, r2 = e2.start, n2 = e2.end;
          return _i(u(u({}, t4), {}, { color: i3, seriesName: a3, ylabel: s2, start: r2, end: n2 }));
        })(t3);
      } }, xaxis: { tickPlacement: "between", tooltip: { enabled: false }, crosshairs: { stroke: { width: 0 } } } };
    } }, { key: "dumbbell", value: function(t3) {
      var e2, i3;
      return null !== (e2 = t3.plotOptions.bar) && void 0 !== e2 && e2.barHeight || (t3.plotOptions.bar.barHeight = 2), null !== (i3 = t3.plotOptions.bar) && void 0 !== i3 && i3.columnWidth || (t3.plotOptions.bar.columnWidth = 2), t3;
    } }, { key: "area", value: function() {
      return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: false } };
    } }, { key: "rangeArea", value: function() {
      return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: false, shared: true, followCursor: true, custom: function(t3) {
        return (function(t4) {
          var e2 = Di(t4), i3 = e2.color, a3 = e2.seriesName, s2 = e2.ylabel, r2 = e2.start, n2 = e2.end;
          return _i(u(u({}, t4), {}, { color: i3, seriesName: a3, ylabel: s2, start: r2, end: n2 }));
        })(t3);
      } } };
    } }, { key: "brush", value: function(t3) {
      return v.extend(t3, { chart: { toolbar: { autoSelected: "selection", show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false }, stroke: { width: 1 }, tooltip: { enabled: false }, xaxis: { tooltip: { enabled: false } } });
    } }, { key: "stacked100", value: function(t3) {
      t3.dataLabels = t3.dataLabels || {}, t3.dataLabels.formatter = t3.dataLabels.formatter || void 0;
      var e2 = t3.dataLabels.formatter;
      return t3.yaxis.forEach((function(e3, i3) {
        t3.yaxis[i3].min = 0, t3.yaxis[i3].max = 100;
      })), "bar" === t3.chart.type && (t3.dataLabels.formatter = e2 || function(t4) {
        return "number" == typeof t4 && t4 ? t4.toFixed(0) + "%" : t4;
      }), t3;
    } }, { key: "stackedBars", value: function() {
      var t3 = this.bar();
      return u(u({}, t3), {}, { plotOptions: u(u({}, t3.plotOptions), {}, { bar: u(u({}, t3.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
    } }, { key: "convertCatToNumeric", value: function(t3) {
      return t3.xaxis.convertedCatToNumeric = true, t3;
    } }, { key: "convertCatToNumericXaxis", value: function(t3, e2, i3) {
      t3.xaxis.type = "numeric", t3.xaxis.labels = t3.xaxis.labels || {}, t3.xaxis.labels.formatter = t3.xaxis.labels.formatter || function(t4) {
        return v.isNumber(t4) ? Math.floor(t4) : t4;
      };
      var a3 = t3.xaxis.labels.formatter, s2 = t3.xaxis.categories && t3.xaxis.categories.length ? t3.xaxis.categories : t3.labels;
      return i3 && i3.length && (s2 = i3.map((function(t4) {
        return Array.isArray(t4) ? t4 : String(t4);
      }))), s2 && s2.length && (t3.xaxis.labels.formatter = function(t4) {
        return v.isNumber(t4) ? a3(s2[Math.floor(t4) - 1]) : a3(t4);
      }), t3.xaxis.categories = [], t3.labels = [], t3.xaxis.tickAmount = t3.xaxis.tickAmount || "dataPoints", t3;
    } }, { key: "bubble", value: function() {
      return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: false, intersect: true }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: true, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
    } }, { key: "scatter", value: function() {
      return { dataLabels: { enabled: false }, tooltip: { shared: false, intersect: true }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
    } }, { key: "heatmap", value: function() {
      return { chart: { stacked: false }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: true, marker: { show: false }, x: { show: false } }, legend: { position: "top", markers: { shape: "square" } }, grid: { padding: { right: 20 } } };
    } }, { key: "treemap", value: function() {
      return { chart: { zoom: { enabled: false } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: true, width: 2, colors: ["#fff"] }, legend: { show: false }, fill: { opacity: 1, gradient: { stops: [0, 100] } }, tooltip: { followCursor: true, x: { show: false } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: false }, tooltip: { enabled: false } } };
    } }, { key: "pie", value: function() {
      return { chart: { toolbar: { show: false } }, plotOptions: { pie: { donut: { labels: { show: false } } } }, dataLabels: { formatter: function(t3) {
        return t3.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "donut", value: function() {
      return { chart: { toolbar: { show: false } }, dataLabels: { formatter: function(t3) {
        return t3.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "polarArea", value: function() {
      return { chart: { toolbar: { show: false } }, dataLabels: { formatter: function(t3) {
        return t3.toFixed(1) + "%";
      }, enabled: false }, stroke: { show: true, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "radar", value: function() {
      return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: false, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: false, intersect: true, followCursor: true }, grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, xaxis: { labels: { formatter: function(t3) {
        return t3;
      }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: false }, crosshairs: { show: false } } };
    } }, { key: "radialBar", value: function() {
      return { chart: { animations: { dynamicAnimation: { enabled: true, speed: 800 } }, toolbar: { show: false } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: false, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: false, position: "right" }, tooltip: { enabled: false, fillSeriesColor: true }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "_getBoxTooltip", value: function(t3, e2, i3, a3, s2) {
      var r2 = t3.globals.seriesCandleO[e2][i3], n2 = t3.globals.seriesCandleH[e2][i3], o2 = t3.globals.seriesCandleM[e2][i3], l2 = t3.globals.seriesCandleL[e2][i3], h2 = t3.globals.seriesCandleC[e2][i3];
      return t3.config.series[e2].type && t3.config.series[e2].type !== s2 ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t3.config.series[e2].name ? t3.config.series[e2].name : "series-" + (e2 + 1), ": <strong>").concat(t3.globals.series[e2][i3], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t3.config.chart.type, '">') + "<div>".concat(a3[0], ': <span class="value">') + r2 + "</span></div>" + "<div>".concat(a3[1], ': <span class="value">') + n2 + "</span></div>" + (o2 ? "<div>".concat(a3[2], ': <span class="value">') + o2 + "</span></div>" : "") + "<div>".concat(a3[3], ': <span class="value">') + l2 + "</span></div>" + "<div>".concat(a3[4], ': <span class="value">') + h2 + "</span></div></div>";
    } }]), t2;
  })(), Wi = (function() {
    function t2(e2) {
      i2(this, t2), this.opts = e2;
    }
    return s(t2, [{ key: "init", value: function(t3) {
      var e2 = t3.responsiveOverride, i3 = this.opts, a3 = new Oi(), s2 = new Ni(i3);
      this.chartType = i3.chart.type, i3 = this.extendYAxis(i3), i3 = this.extendAnnotations(i3);
      var r2 = a3.init(), n2 = {};
      if (i3 && "object" === b(i3)) {
        var o2, l2, h2, c2, d2, u2, g2, p2, f2, x2, m2 = {};
        m2 = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i3.chart.type) ? s2[i3.chart.type]() : s2.line(), null !== (o2 = i3.plotOptions) && void 0 !== o2 && null !== (l2 = o2.bar) && void 0 !== l2 && l2.isFunnel && (m2 = s2.funnel()), i3.chart.stacked && "bar" === i3.chart.type && (m2 = s2.stackedBars()), null !== (h2 = i3.chart.brush) && void 0 !== h2 && h2.enabled && (m2 = s2.brush(m2)), null !== (c2 = i3.plotOptions) && void 0 !== c2 && null !== (d2 = c2.line) && void 0 !== d2 && d2.isSlopeChart && (m2 = s2.slope()), i3.chart.stacked && "100%" === i3.chart.stackType && (i3 = s2.stacked100(i3)), null !== (u2 = i3.plotOptions) && void 0 !== u2 && null !== (g2 = u2.bar) && void 0 !== g2 && g2.isDumbbell && (i3 = s2.dumbbell(i3)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i3), i3.xaxis = i3.xaxis || window.Apex.xaxis || {}, e2 || (i3.xaxis.convertedCatToNumeric = false), (null !== (p2 = (i3 = this.checkForCatToNumericXAxis(this.chartType, m2, i3)).chart.sparkline) && void 0 !== p2 && p2.enabled || null !== (f2 = window.Apex.chart) && void 0 !== f2 && null !== (x2 = f2.sparkline) && void 0 !== x2 && x2.enabled) && (m2 = s2.sparkline(m2)), n2 = v.extend(r2, m2);
      }
      var y2 = v.extend(n2, window.Apex);
      return r2 = v.extend(y2, i3), r2 = this.handleUserInputErrors(r2);
    } }, { key: "checkForCatToNumericXAxis", value: function(t3, e2, i3) {
      var a3, s2, r2 = new Ni(i3), n2 = ("bar" === t3 || "boxPlot" === t3) && (null === (a3 = i3.plotOptions) || void 0 === a3 || null === (s2 = a3.bar) || void 0 === s2 ? void 0 : s2.horizontal), o2 = "pie" === t3 || "polarArea" === t3 || "donut" === t3 || "radar" === t3 || "radialBar" === t3 || "heatmap" === t3, l2 = "datetime" !== i3.xaxis.type && "numeric" !== i3.xaxis.type, h2 = i3.xaxis.tickPlacement ? i3.xaxis.tickPlacement : e2.xaxis && e2.xaxis.tickPlacement;
      return n2 || o2 || !l2 || "between" === h2 || (i3 = r2.convertCatToNumeric(i3)), i3;
    } }, { key: "extendYAxis", value: function(t3, e2) {
      var i3 = new Oi();
      (void 0 === t3.yaxis || !t3.yaxis || Array.isArray(t3.yaxis) && 0 === t3.yaxis.length) && (t3.yaxis = {}), t3.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t3.yaxis = v.extend(t3.yaxis, window.Apex.yaxis)), t3.yaxis.constructor !== Array ? t3.yaxis = [v.extend(i3.yAxis, t3.yaxis)] : t3.yaxis = v.extendArray(t3.yaxis, i3.yAxis);
      var a3 = false;
      t3.yaxis.forEach((function(t4) {
        t4.logarithmic && (a3 = true);
      }));
      var s2 = t3.series;
      return e2 && !s2 && (s2 = e2.config.series), a3 && s2.length !== t3.yaxis.length && s2.length && (t3.yaxis = s2.map((function(e3, a4) {
        if (e3.name || (s2[a4].name = "series-".concat(a4 + 1)), t3.yaxis[a4]) return t3.yaxis[a4].seriesName = s2[a4].name, t3.yaxis[a4];
        var r2 = v.extend(i3.yAxis, t3.yaxis[0]);
        return r2.show = false, r2;
      }))), a3 && s2.length > 1 && s2.length !== t3.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), t3;
    } }, { key: "extendAnnotations", value: function(t3) {
      return void 0 === t3.annotations && (t3.annotations = {}, t3.annotations.yaxis = [], t3.annotations.xaxis = [], t3.annotations.points = []), t3 = this.extendYAxisAnnotations(t3), t3 = this.extendXAxisAnnotations(t3), t3 = this.extendPointAnnotations(t3);
    } }, { key: "extendYAxisAnnotations", value: function(t3) {
      var e2 = new Oi();
      return t3.annotations.yaxis = v.extendArray(void 0 !== t3.annotations.yaxis ? t3.annotations.yaxis : [], e2.yAxisAnnotation), t3;
    } }, { key: "extendXAxisAnnotations", value: function(t3) {
      var e2 = new Oi();
      return t3.annotations.xaxis = v.extendArray(void 0 !== t3.annotations.xaxis ? t3.annotations.xaxis : [], e2.xAxisAnnotation), t3;
    } }, { key: "extendPointAnnotations", value: function(t3) {
      var e2 = new Oi();
      return t3.annotations.points = v.extendArray(void 0 !== t3.annotations.points ? t3.annotations.points : [], e2.pointAnnotation), t3;
    } }, { key: "checkForDarkTheme", value: function(t3) {
      t3.theme && "dark" === t3.theme.mode && (t3.tooltip || (t3.tooltip = {}), "light" !== t3.tooltip.theme && (t3.tooltip.theme = "dark"), t3.chart.foreColor || (t3.chart.foreColor = "#f6f7f8"), t3.theme.palette || (t3.theme.palette = "palette4"));
    } }, { key: "handleUserInputErrors", value: function(t3) {
      var e2 = t3;
      if (e2.tooltip.shared && e2.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
      if ("bar" === e2.chart.type && e2.plotOptions.bar.horizontal) {
        if (e2.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
        e2.yaxis[0].reversed && (e2.yaxis[0].opposite = true), e2.xaxis.tooltip.enabled = false, e2.yaxis[0].tooltip.enabled = false, e2.chart.zoom.enabled = false;
      }
      return "bar" !== e2.chart.type && "rangeBar" !== e2.chart.type || e2.tooltip.shared && "barWidth" === e2.xaxis.crosshairs.width && e2.series.length > 1 && (e2.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e2.chart.type && "boxPlot" !== e2.chart.type || e2.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e2.chart.type, " chart is not supported.")), e2.yaxis[0].reversed = false), e2;
    } }]), t2;
  })(), Bi = (function() {
    function t2() {
      i2(this, t2);
    }
    return s(t2, [{ key: "initGlobalVars", value: function(t3) {
      t3.series = [], t3.seriesCandleO = [], t3.seriesCandleH = [], t3.seriesCandleM = [], t3.seriesCandleL = [], t3.seriesCandleC = [], t3.seriesRangeStart = [], t3.seriesRangeEnd = [], t3.seriesRange = [], t3.seriesPercent = [], t3.seriesGoals = [], t3.seriesX = [], t3.seriesZ = [], t3.seriesNames = [], t3.seriesTotals = [], t3.seriesLog = [], t3.seriesColors = [], t3.stackedSeriesTotals = [], t3.seriesXvalues = [], t3.seriesYvalues = [], t3.dataWasParsed = false, t3.originalSeries = null, t3.labels = [], t3.hasXaxisGroups = false, t3.groups = [], t3.barGroups = [], t3.lineGroups = [], t3.areaGroups = [], t3.hasSeriesGroups = false, t3.seriesGroups = [], t3.categoryLabels = [], t3.timescaleLabels = [], t3.noLabelsProvided = false, t3.resizeTimer = null, t3.selectionResizeTimer = null, t3.lastWheelExecution = 0, t3.delayedElements = [], t3.pointsArray = [], t3.dataLabelsRects = [], t3.isXNumeric = false, t3.skipLastTimelinelabel = false, t3.skipFirstTimelinelabel = false, t3.isDataXYZ = false, t3.isMultiLineX = false, t3.isMultipleYAxis = false, t3.maxY = -Number.MAX_VALUE, t3.minY = Number.MIN_VALUE, t3.minYArr = [], t3.maxYArr = [], t3.maxX = -Number.MAX_VALUE, t3.minX = Number.MAX_VALUE, t3.initialMaxX = -Number.MAX_VALUE, t3.initialMinX = Number.MAX_VALUE, t3.maxDate = 0, t3.minDate = Number.MAX_VALUE, t3.minZ = Number.MAX_VALUE, t3.maxZ = -Number.MAX_VALUE, t3.minXDiff = Number.MAX_VALUE, t3.yAxisScale = [], t3.xAxisScale = null, t3.xAxisTicksPositions = [], t3.yLabelsCoords = [], t3.yTitleCoords = [], t3.barPadForNumericAxis = 0, t3.padHorizontal = 0, t3.xRange = 0, t3.yRange = [], t3.zRange = 0, t3.dataPoints = 0, t3.xTickAmount = 0, t3.multiAxisTickAmount = 0;
    } }, { key: "globalVars", value: function(t3) {
      return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t3.markers.size, largestSize: 0 }, animationEnded: false, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: false, isExecCalled: false, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: false, allSeriesCollapsed: false, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: false, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], invalidLogScale: false, ignoreYAxisIndexes: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: "zoom" === t3.chart.toolbar.autoSelected && t3.chart.toolbar.tools.zoom && t3.chart.zoom.enabled, panEnabled: "pan" === t3.chart.toolbar.autoSelected && t3.chart.toolbar.tools.pan, selectionEnabled: "selection" === t3.chart.toolbar.autoSelected && t3.chart.toolbar.tools.selection, yaxis: null, mousedown: false, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: false, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: true, skipLastTimelinelabel: false, skipFirstTimelinelabel: false, delayedElements: [], axisCharts: true, isDataXYZ: false, isSlopeChart: t3.plotOptions.line.isSlopeChart, resized: false, resizeTimer: null, comboCharts: false, dataChanged: false, previousPaths: [], allSeriesHasEqualX: true, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: false, zoomed: false, gridWidth: 0, gridHeight: 0, rotateXLabels: false, defaultLabels: false, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null, niceScaleAllowedMagMsd: [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]], niceScaleDefaultTicks: [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24], seriesYAxisMap: [], seriesYAxisReverseMap: [] };
    } }, { key: "init", value: function(t3) {
      var e2 = this.globalVars(t3);
      return this.initGlobalVars(e2), e2.initialConfig = v.extend({}, t3), e2.initialSeries = v.clone(t3.series), e2.lastXAxis = v.clone(e2.initialConfig.xaxis), e2.lastYAxis = v.clone(e2.initialConfig.yaxis), e2;
    } }]), t2;
  })(), Gi = (function() {
    function t2(e2) {
      i2(this, t2), this.opts = e2;
    }
    return s(t2, [{ key: "init", value: function() {
      var t3 = new Wi(this.opts).init({ responsiveOverride: false });
      return { config: t3, globals: new Bi().init(t3) };
    } }]), t2;
  })(), ji = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
    }
    return s(t2, [{ key: "clippedImgArea", value: function(t3) {
      var e2 = this.w, i3 = e2.config, a3 = parseInt(e2.globals.gridWidth, 10), s2 = parseInt(e2.globals.gridHeight, 10), r2 = a3 > s2 ? a3 : s2, n2 = t3.image, o2 = 0, l2 = 0;
      void 0 === t3.width && void 0 === t3.height ? void 0 !== i3.fill.image.width && void 0 !== i3.fill.image.height ? (o2 = i3.fill.image.width + 1, l2 = i3.fill.image.height) : (o2 = r2 + 1, l2 = r2) : (o2 = t3.width, l2 = t3.height);
      var h2 = document.createElementNS(e2.globals.SVGNS, "pattern");
      Mi.setAttrs(h2, { id: t3.patternID, patternUnits: t3.patternUnits ? t3.patternUnits : "userSpaceOnUse", width: o2 + "px", height: l2 + "px" });
      var c2 = document.createElementNS(e2.globals.SVGNS, "image");
      h2.appendChild(c2), c2.setAttributeNS(window.SVG.xlink, "href", n2), Mi.setAttrs(c2, { x: 0, y: 0, preserveAspectRatio: "none", width: o2 + "px", height: l2 + "px" }), c2.style.opacity = t3.opacity, e2.globals.dom.elDefs.node.appendChild(h2);
    } }, { key: "getSeriesIndex", value: function(t3) {
      var e2 = this.w, i3 = e2.config.chart.type;
      return ("bar" === i3 || "rangeBar" === i3) && e2.config.plotOptions.bar.distributed || "heatmap" === i3 || "treemap" === i3 ? this.seriesIndex = t3.seriesNumber : this.seriesIndex = t3.seriesNumber % e2.globals.series.length, this.seriesIndex;
    } }, { key: "computeColorStops", value: function(t3, e2) {
      var i3, a3 = this.w, s2 = null, n2 = null, o2 = r(t3);
      try {
        for (o2.s(); !(i3 = o2.n()).done; ) {
          var l2 = i3.value;
          l2 >= e2.threshold ? (null === s2 || l2 > s2) && (s2 = l2) : (null === n2 || l2 < n2) && (n2 = l2);
        }
      } catch (t4) {
        o2.e(t4);
      } finally {
        o2.f();
      }
      null === s2 && (s2 = e2.threshold), null === n2 && (n2 = e2.threshold);
      var h2 = s2 - e2.threshold + (e2.threshold - n2);
      0 === h2 && (h2 = 1);
      var c2 = 100 - (e2.threshold - n2) / h2 * 100;
      return [{ offset: c2 = Math.max(0, Math.min(c2, 100)), color: e2.colorAboveThreshold, opacity: a3.config.fill.opacity }, { offset: 0, color: e2.colorBelowThreshold, opacity: a3.config.fill.opacity }];
    } }, { key: "fillPath", value: function(t3) {
      var e2, i3, a3, s2 = this.w;
      this.opts = t3;
      var r2, n2, o2, l2 = this.w.config;
      this.seriesIndex = this.getSeriesIndex(t3);
      var h2 = l2.plotOptions.line.colors.colorAboveThreshold && l2.plotOptions.line.colors.colorBelowThreshold, c2 = this.getFillColors()[this.seriesIndex];
      void 0 !== s2.globals.seriesColors[this.seriesIndex] && (c2 = s2.globals.seriesColors[this.seriesIndex]), "function" == typeof c2 && (c2 = c2({ seriesIndex: this.seriesIndex, dataPointIndex: t3.dataPointIndex, value: t3.value, w: s2 }));
      var d2, u2, g2, p2 = t3.fillType ? t3.fillType : this.getFillType(this.seriesIndex), x2 = Array.isArray(l2.fill.opacity) ? l2.fill.opacity[this.seriesIndex] : l2.fill.opacity, b2 = "gradient" === p2 || h2;
      (t3.color && (c2 = t3.color), null !== (e2 = s2.config.series[this.seriesIndex]) && void 0 !== e2 && null !== (i3 = e2.data) && void 0 !== i3 && null !== (a3 = i3[t3.dataPointIndex]) && void 0 !== a3 && a3.fillColor) && (c2 = null === (d2 = s2.config.series[this.seriesIndex]) || void 0 === d2 || null === (u2 = d2.data) || void 0 === u2 || null === (g2 = u2[t3.dataPointIndex]) || void 0 === g2 ? void 0 : g2.fillColor);
      c2 || (c2 = "#fff", console.warn("undefined color - ApexCharts"));
      var m2 = c2;
      if (-1 === c2.indexOf("rgb") ? -1 === c2.indexOf("#") ? m2 = c2 : c2.length < 9 && (m2 = v.hexToRgba(c2, x2)) : c2.indexOf("rgba") > -1 ? x2 = v.getOpacityFromRGBA(c2) : m2 = v.hexToRgba(v.rgb2hex(c2), x2), t3.opacity && (x2 = t3.opacity), "pattern" === p2 && (n2 = this.handlePatternFill({ fillConfig: t3.fillConfig, patternFill: n2, fillColor: c2, fillOpacity: x2, defaultColor: m2 })), b2) {
        var y2 = f(l2.fill.gradient.colorStops) || [], w2 = l2.fill.gradient.type;
        h2 && (y2[this.seriesIndex] = this.computeColorStops(s2.globals.series[this.seriesIndex], l2.plotOptions.line.colors), w2 = "vertical"), o2 = this.handleGradientFill({ type: w2, fillConfig: t3.fillConfig, fillColor: c2, fillOpacity: x2, colorStops: y2, i: this.seriesIndex });
      }
      if ("image" === p2) {
        var k2 = l2.fill.image.src, A2 = t3.patternID ? t3.patternID : "", C2 = "pattern".concat(s2.globals.cuid).concat(t3.seriesNumber + 1).concat(A2);
        -1 === this.patternIDs.indexOf(C2) && (this.clippedImgArea({ opacity: x2, image: Array.isArray(k2) ? t3.seriesNumber < k2.length ? k2[t3.seriesNumber] : k2[0] : k2, width: t3.width ? t3.width : void 0, height: t3.height ? t3.height : void 0, patternUnits: t3.patternUnits, patternID: C2 }), this.patternIDs.push(C2)), r2 = "url(#".concat(C2, ")");
      } else r2 = b2 ? o2 : "pattern" === p2 ? n2 : m2;
      return t3.solid && (r2 = m2), r2;
    } }, { key: "getFillType", value: function(t3) {
      var e2 = this.w;
      return Array.isArray(e2.config.fill.type) ? e2.config.fill.type[t3] : e2.config.fill.type;
    } }, { key: "getFillColors", value: function() {
      var t3 = this.w, e2 = t3.config, i3 = this.opts, a3 = [];
      return t3.globals.comboCharts ? "line" === t3.config.series[this.seriesIndex].type ? Array.isArray(t3.globals.stroke.colors) ? a3 = t3.globals.stroke.colors : a3.push(t3.globals.stroke.colors) : Array.isArray(t3.globals.fill.colors) ? a3 = t3.globals.fill.colors : a3.push(t3.globals.fill.colors) : "line" === e2.chart.type ? Array.isArray(t3.globals.stroke.colors) ? a3 = t3.globals.stroke.colors : a3.push(t3.globals.stroke.colors) : Array.isArray(t3.globals.fill.colors) ? a3 = t3.globals.fill.colors : a3.push(t3.globals.fill.colors), void 0 !== i3.fillColors && (a3 = [], Array.isArray(i3.fillColors) ? a3 = i3.fillColors.slice() : a3.push(i3.fillColors)), a3;
    } }, { key: "handlePatternFill", value: function(t3) {
      var e2 = t3.fillConfig, i3 = t3.patternFill, a3 = t3.fillColor, s2 = t3.fillOpacity, r2 = t3.defaultColor, n2 = this.w.config.fill;
      e2 && (n2 = e2);
      var o2 = this.opts, l2 = new Mi(this.ctx), h2 = Array.isArray(n2.pattern.strokeWidth) ? n2.pattern.strokeWidth[this.seriesIndex] : n2.pattern.strokeWidth, c2 = a3;
      Array.isArray(n2.pattern.style) ? i3 = void 0 !== n2.pattern.style[o2.seriesNumber] ? l2.drawPattern(n2.pattern.style[o2.seriesNumber], n2.pattern.width, n2.pattern.height, c2, h2, s2) : r2 : i3 = l2.drawPattern(n2.pattern.style, n2.pattern.width, n2.pattern.height, c2, h2, s2);
      return i3;
    } }, { key: "handleGradientFill", value: function(t3) {
      var e2 = t3.type, i3 = t3.fillColor, a3 = t3.fillOpacity, s2 = t3.fillConfig, r2 = t3.colorStops, n2 = t3.i, o2 = this.w.config.fill;
      s2 && (o2 = u(u({}, o2), s2));
      var l2 = this.opts, h2 = new Mi(this.ctx), c2 = new v();
      e2 = e2 || o2.gradient.type;
      var d2, g2 = i3, p2 = void 0 === o2.gradient.opacityFrom ? a3 : Array.isArray(o2.gradient.opacityFrom) ? o2.gradient.opacityFrom[n2] : o2.gradient.opacityFrom;
      g2.indexOf("rgba") > -1 && (p2 = v.getOpacityFromRGBA(g2));
      var f2 = void 0 === o2.gradient.opacityTo ? a3 : Array.isArray(o2.gradient.opacityTo) ? o2.gradient.opacityTo[n2] : o2.gradient.opacityTo;
      if (void 0 === o2.gradient.gradientToColors || 0 === o2.gradient.gradientToColors.length) d2 = "dark" === o2.gradient.shade ? c2.shadeColor(-1 * parseFloat(o2.gradient.shadeIntensity), i3.indexOf("rgb") > -1 ? v.rgb2hex(i3) : i3) : c2.shadeColor(parseFloat(o2.gradient.shadeIntensity), i3.indexOf("rgb") > -1 ? v.rgb2hex(i3) : i3);
      else if (o2.gradient.gradientToColors[l2.seriesNumber]) {
        var x2 = o2.gradient.gradientToColors[l2.seriesNumber];
        d2 = x2, x2.indexOf("rgba") > -1 && (f2 = v.getOpacityFromRGBA(x2));
      } else d2 = i3;
      if (o2.gradient.gradientFrom && (g2 = o2.gradient.gradientFrom), o2.gradient.gradientTo && (d2 = o2.gradient.gradientTo), o2.gradient.inverseColors) {
        var b2 = g2;
        g2 = d2, d2 = b2;
      }
      return g2.indexOf("rgb") > -1 && (g2 = v.rgb2hex(g2)), d2.indexOf("rgb") > -1 && (d2 = v.rgb2hex(d2)), h2.drawGradient(e2, g2, d2, p2, f2, l2.size, o2.gradient.stops, r2, n2);
    } }]), t2;
  })(), Vi = (function() {
    function t2(e2, a3) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "setGlobalMarkerSize", value: function() {
      var t3 = this.w;
      if (t3.globals.markers.size = Array.isArray(t3.config.markers.size) ? t3.config.markers.size : [t3.config.markers.size], t3.globals.markers.size.length > 0) {
        if (t3.globals.markers.size.length < t3.globals.series.length + 1) for (var e2 = 0; e2 <= t3.globals.series.length; e2++) void 0 === t3.globals.markers.size[e2] && t3.globals.markers.size.push(t3.globals.markers.size[0]);
      } else t3.globals.markers.size = t3.config.series.map((function(e3) {
        return t3.config.markers.size;
      }));
    } }, { key: "plotChartMarkers", value: function(t3) {
      var e2 = t3.pointsPos, i3 = t3.seriesIndex, a3 = t3.j, s2 = t3.pSize, r2 = t3.alwaysDrawMarker, n2 = void 0 !== r2 && r2, o2 = t3.isVirtualPoint, l2 = void 0 !== o2 && o2, h2 = this.w, c2 = i3, d2 = e2, u2 = null, g2 = new Mi(this.ctx), p2 = h2.config.markers.discrete && h2.config.markers.discrete.length;
      if (Array.isArray(d2.x)) for (var f2 = 0; f2 < d2.x.length; f2++) {
        var x2 = void 0, b2 = a3, m2 = !v.isNumber(d2.y[f2]);
        0 === h2.globals.markers.largestSize && h2.globals.hasNullValues && null !== h2.globals.series[c2][a3 + 1] && !l2 && (m2 = true), 1 === a3 && 0 === f2 && (b2 = 0), 1 === a3 && 1 === f2 && (b2 = 1);
        var y2 = "apexcharts-marker";
        if ("line" !== h2.config.chart.type && "area" !== h2.config.chart.type || h2.globals.comboCharts || h2.config.tooltip.intersect || (y2 += " no-pointer-events"), (Array.isArray(h2.config.markers.size) ? h2.globals.markers.size[i3] > 0 : h2.config.markers.size > 0) || n2 || p2) {
          m2 || (y2 += " w".concat(v.randomId()));
          var w2 = this.getMarkerConfig({ cssClass: y2, seriesIndex: i3, dataPointIndex: b2 });
          if (h2.config.series[c2].data[b2] && (h2.config.series[c2].data[b2].fillColor && (w2.pointFillColor = h2.config.series[c2].data[b2].fillColor), h2.config.series[c2].data[b2].strokeColor && (w2.pointStrokeColor = h2.config.series[c2].data[b2].strokeColor)), void 0 !== s2 && (w2.pSize = s2), (d2.x[f2] < -h2.globals.markers.largestSize || d2.x[f2] > h2.globals.gridWidth + h2.globals.markers.largestSize || d2.y[f2] < -h2.globals.markers.largestSize || d2.y[f2] > h2.globals.gridHeight + h2.globals.markers.largestSize) && (w2.pSize = 0), !m2) (h2.globals.markers.size[i3] > 0 || n2 || p2) && !u2 && (u2 = g2.group({ class: n2 || p2 ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(h2.globals.cuid, ")")), (x2 = g2.drawMarker(d2.x[f2], d2.y[f2], w2)).attr("rel", b2), x2.attr("j", b2), x2.attr("index", i3), x2.node.setAttribute("default-marker-size", w2.pSize), new Li(this.ctx).setSelectionFilter(x2, i3, b2), this.addEvents(x2), u2 && u2.add(x2);
        } else void 0 === h2.globals.pointsArray[i3] && (h2.globals.pointsArray[i3] = []), h2.globals.pointsArray[i3].push([d2.x[f2], d2.y[f2]]);
      }
      return u2;
    } }, { key: "getMarkerConfig", value: function(t3) {
      var e2 = t3.cssClass, i3 = t3.seriesIndex, a3 = t3.dataPointIndex, s2 = void 0 === a3 ? null : a3, r2 = t3.radius, n2 = void 0 === r2 ? null : r2, o2 = t3.size, l2 = void 0 === o2 ? null : o2, h2 = t3.strokeWidth, c2 = void 0 === h2 ? null : h2, d2 = this.w, u2 = this.getMarkerStyle(i3), g2 = null === l2 ? d2.globals.markers.size[i3] : l2, p2 = d2.config.markers;
      return null !== s2 && p2.discrete.length && p2.discrete.map((function(t4) {
        t4.seriesIndex === i3 && t4.dataPointIndex === s2 && (u2.pointStrokeColor = t4.strokeColor, u2.pointFillColor = t4.fillColor, g2 = t4.size, u2.pointShape = t4.shape);
      })), { pSize: null === n2 ? g2 : n2, pRadius: null !== n2 ? n2 : p2.radius, pointStrokeWidth: null !== c2 ? c2 : Array.isArray(p2.strokeWidth) ? p2.strokeWidth[i3] : p2.strokeWidth, pointStrokeColor: u2.pointStrokeColor, pointFillColor: u2.pointFillColor, shape: u2.pointShape || (Array.isArray(p2.shape) ? p2.shape[i3] : p2.shape), class: e2, pointStrokeOpacity: Array.isArray(p2.strokeOpacity) ? p2.strokeOpacity[i3] : p2.strokeOpacity, pointStrokeDashArray: Array.isArray(p2.strokeDashArray) ? p2.strokeDashArray[i3] : p2.strokeDashArray, pointFillOpacity: Array.isArray(p2.fillOpacity) ? p2.fillOpacity[i3] : p2.fillOpacity, seriesIndex: i3 };
    } }, { key: "addEvents", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx);
      t3.node.addEventListener("mouseenter", i3.pathMouseEnter.bind(this.ctx, t3)), t3.node.addEventListener("mouseleave", i3.pathMouseLeave.bind(this.ctx, t3)), t3.node.addEventListener("mousedown", i3.pathMouseDown.bind(this.ctx, t3)), t3.node.addEventListener("click", e2.config.markers.onClick), t3.node.addEventListener("dblclick", e2.config.markers.onDblClick), t3.node.addEventListener("touchstart", i3.pathMouseDown.bind(this.ctx, t3), { passive: true });
    } }, { key: "getMarkerStyle", value: function(t3) {
      var e2 = this.w, i3 = e2.globals.markers.colors, a3 = e2.config.markers.strokeColor || e2.config.markers.strokeColors;
      return { pointStrokeColor: Array.isArray(a3) ? a3[t3] : a3, pointFillColor: Array.isArray(i3) ? i3[t3] : i3 };
    } }]), t2;
  })(), Ui = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.initialAnim = this.w.config.chart.animations.enabled;
    }
    return s(t2, [{ key: "draw", value: function(t3, e2, i3) {
      var a3 = this.w, s2 = new Mi(this.ctx), r2 = i3.realIndex, n2 = i3.pointsPos, o2 = i3.zRatio, l2 = i3.elParent, h2 = s2.group({ class: "apexcharts-series-markers apexcharts-series-".concat(a3.config.chart.type) });
      if (h2.attr("clip-path", "url(#gridRectMarkerMask".concat(a3.globals.cuid, ")")), Array.isArray(n2.x)) for (var c2 = 0; c2 < n2.x.length; c2++) {
        var d2 = e2 + 1, u2 = true;
        0 === e2 && 0 === c2 && (d2 = 0), 0 === e2 && 1 === c2 && (d2 = 1);
        var g2 = a3.globals.markers.size[r2];
        if (o2 !== 1 / 0) {
          var p2 = a3.config.plotOptions.bubble;
          g2 = a3.globals.seriesZ[r2][d2], p2.zScaling && (g2 /= o2), p2.minBubbleRadius && g2 < p2.minBubbleRadius && (g2 = p2.minBubbleRadius), p2.maxBubbleRadius && g2 > p2.maxBubbleRadius && (g2 = p2.maxBubbleRadius);
        }
        var f2 = n2.x[c2], x2 = n2.y[c2];
        if (g2 = g2 || 0, null !== x2 && void 0 !== a3.globals.series[r2][d2] || (u2 = false), u2) {
          var b2 = this.drawPoint(f2, x2, g2, r2, d2, e2);
          h2.add(b2);
        }
        l2.add(h2);
      }
    } }, { key: "drawPoint", value: function(t3, e2, i3, a3, s2, r2) {
      var n2 = this.w, o2 = a3, l2 = new y(this.ctx), h2 = new Li(this.ctx), c2 = new ji(this.ctx), d2 = new Vi(this.ctx), u2 = new Mi(this.ctx), g2 = d2.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: o2, dataPointIndex: s2, radius: "bubble" === n2.config.chart.type || n2.globals.comboCharts && n2.config.series[a3] && "bubble" === n2.config.series[a3].type ? i3 : null }), p2 = c2.fillPath({ seriesNumber: a3, dataPointIndex: s2, color: g2.pointFillColor, patternUnits: "objectBoundingBox", value: n2.globals.series[a3][r2] }), f2 = u2.drawMarker(t3, e2, g2);
      if (n2.config.series[o2].data[s2] && n2.config.series[o2].data[s2].fillColor && (p2 = n2.config.series[o2].data[s2].fillColor), f2.attr({ fill: p2 }), n2.config.chart.dropShadow.enabled) {
        var x2 = n2.config.chart.dropShadow;
        h2.dropShadow(f2, x2, a3);
      }
      if (!this.initialAnim || n2.globals.dataChanged || n2.globals.resized) n2.globals.animationEnded = true;
      else {
        var b2 = n2.config.chart.animations.speed;
        l2.animateMarker(f2, b2, n2.globals.easing, (function() {
          window.setTimeout((function() {
            l2.animationCompleted(f2);
          }), 100);
        }));
      }
      return f2.attr({ rel: s2, j: s2, index: a3, "default-marker-size": g2.pSize }), h2.setSelectionFilter(f2, a3, s2), d2.addEvents(f2), f2.node.classList.add("apexcharts-marker"), f2;
    } }, { key: "centerTextInBubble", value: function(t3) {
      var e2 = this.w;
      return { y: t3 += parseInt(e2.config.dataLabels.style.fontSize, 10) / 4 };
    } }]), t2;
  })(), qi = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "dataLabelsCorrection", value: function(t3, e2, i3, a3, s2, r2, n2) {
      var o2 = this.w, l2 = false, h2 = new Mi(this.ctx).getTextRects(i3, n2), c2 = h2.width, d2 = h2.height;
      e2 < 0 && (e2 = 0), e2 > o2.globals.gridHeight + d2 && (e2 = o2.globals.gridHeight + d2 / 2), void 0 === o2.globals.dataLabelsRects[a3] && (o2.globals.dataLabelsRects[a3] = []), o2.globals.dataLabelsRects[a3].push({ x: t3, y: e2, width: c2, height: d2 });
      var u2 = o2.globals.dataLabelsRects[a3].length - 2, g2 = void 0 !== o2.globals.lastDrawnDataLabelsIndexes[a3] ? o2.globals.lastDrawnDataLabelsIndexes[a3][o2.globals.lastDrawnDataLabelsIndexes[a3].length - 1] : 0;
      if (void 0 !== o2.globals.dataLabelsRects[a3][u2]) {
        var p2 = o2.globals.dataLabelsRects[a3][g2];
        (t3 > p2.x + p2.width || e2 > p2.y + p2.height || e2 + d2 < p2.y || t3 + c2 < p2.x) && (l2 = true);
      }
      return (0 === s2 || r2) && (l2 = true), { x: t3, y: e2, textRects: h2, drawnextLabel: l2 };
    } }, { key: "drawDataLabel", value: function(t3) {
      var e2 = this, i3 = t3.type, a3 = t3.pos, s2 = t3.i, r2 = t3.j, n2 = t3.isRangeStart, o2 = t3.strokeWidth, l2 = void 0 === o2 ? 2 : o2, h2 = this.w, c2 = new Mi(this.ctx), d2 = h2.config.dataLabels, u2 = 0, g2 = 0, p2 = r2, f2 = null;
      if (-1 !== h2.globals.collapsedSeriesIndices.indexOf(s2) || !d2.enabled || !Array.isArray(a3.x)) return f2;
      f2 = c2.group({ class: "apexcharts-data-labels" });
      for (var x2 = 0; x2 < a3.x.length; x2++) if (u2 = a3.x[x2] + d2.offsetX, g2 = a3.y[x2] + d2.offsetY + l2, !isNaN(u2)) {
        1 === r2 && 0 === x2 && (p2 = 0), 1 === r2 && 1 === x2 && (p2 = 1);
        var b2 = h2.globals.series[s2][p2];
        "rangeArea" === i3 && (b2 = n2 ? h2.globals.seriesRangeStart[s2][p2] : h2.globals.seriesRangeEnd[s2][p2]);
        var m2 = "", v2 = function(t4) {
          return h2.config.dataLabels.formatter(t4, { ctx: e2.ctx, seriesIndex: s2, dataPointIndex: p2, w: h2 });
        };
        if ("bubble" === h2.config.chart.type) m2 = v2(b2 = h2.globals.seriesZ[s2][p2]), g2 = a3.y[x2], g2 = new Ui(this.ctx).centerTextInBubble(g2, s2, p2).y;
        else void 0 !== b2 && (m2 = v2(b2));
        var y2 = h2.config.dataLabels.textAnchor;
        h2.globals.isSlopeChart && (y2 = 0 === p2 ? "end" : p2 === h2.config.series[s2].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({ x: u2, y: g2, text: m2, i: s2, j: p2, parent: f2, offsetCorrection: true, dataLabelsConfig: h2.config.dataLabels, textAnchor: y2 });
      }
      return f2;
    } }, { key: "plotDataLabelsText", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx), a3 = t3.x, s2 = t3.y, r2 = t3.i, n2 = t3.j, o2 = t3.text, l2 = t3.textAnchor, h2 = t3.fontSize, c2 = t3.parent, d2 = t3.dataLabelsConfig, u2 = t3.color, g2 = t3.alwaysDrawDataLabel, p2 = t3.offsetCorrection, f2 = t3.className, x2 = null;
      if (Array.isArray(e2.config.dataLabels.enabledOnSeries) && e2.config.dataLabels.enabledOnSeries.indexOf(r2) < 0) return x2;
      var b2 = { x: a3, y: s2, drawnextLabel: true, textRects: null };
      p2 && (b2 = this.dataLabelsCorrection(a3, s2, o2, r2, n2, g2, parseInt(d2.style.fontSize, 10))), e2.globals.zoomed || (a3 = b2.x, s2 = b2.y), b2.textRects && (a3 < -20 - b2.textRects.width || a3 > e2.globals.gridWidth + b2.textRects.width + 30) && (o2 = "");
      var m2 = e2.globals.dataLabels.style.colors[r2];
      (("bar" === e2.config.chart.type || "rangeBar" === e2.config.chart.type) && e2.config.plotOptions.bar.distributed || e2.config.dataLabels.distributed) && (m2 = e2.globals.dataLabels.style.colors[n2]), "function" == typeof m2 && (m2 = m2({ series: e2.globals.series, seriesIndex: r2, dataPointIndex: n2, w: e2 })), u2 && (m2 = u2);
      var v2 = d2.offsetX, y2 = d2.offsetY;
      if ("bar" !== e2.config.chart.type && "rangeBar" !== e2.config.chart.type || (v2 = 0, y2 = 0), e2.globals.isSlopeChart && (0 !== n2 && (v2 = -2 * d2.offsetX + 5), 0 !== n2 && n2 !== e2.config.series[r2].data.length - 1 && (v2 = 0)), b2.drawnextLabel) {
        if ("middle" === l2 && a3 === e2.globals.gridWidth && (l2 = "end"), (x2 = i3.drawText({ width: 100, height: parseInt(d2.style.fontSize, 10), x: a3 + v2, y: s2 + y2, foreColor: m2, textAnchor: l2 || d2.textAnchor, text: o2, fontSize: h2 || d2.style.fontSize, fontFamily: d2.style.fontFamily, fontWeight: d2.style.fontWeight || "normal" })).attr({ class: f2 || "apexcharts-datalabel", cx: a3, cy: s2 }), d2.dropShadow.enabled) {
          var w2 = d2.dropShadow;
          new Li(this.ctx).dropShadow(x2, w2);
        }
        c2.add(x2), void 0 === e2.globals.lastDrawnDataLabelsIndexes[r2] && (e2.globals.lastDrawnDataLabelsIndexes[r2] = []), e2.globals.lastDrawnDataLabelsIndexes[r2].push(n2);
      }
      return x2;
    } }, { key: "addBackgroundToDataLabel", value: function(t3, e2) {
      var i3 = this.w, a3 = i3.config.dataLabels.background, s2 = a3.padding, r2 = a3.padding / 2, n2 = e2.width, o2 = e2.height, l2 = new Mi(this.ctx).drawRect(e2.x - s2, e2.y - r2 / 2, n2 + 2 * s2, o2 + r2, a3.borderRadius, "transparent" !== i3.config.chart.background && i3.config.chart.background ? i3.config.chart.background : "#fff", a3.opacity, a3.borderWidth, a3.borderColor);
      a3.dropShadow.enabled && new Li(this.ctx).dropShadow(l2, a3.dropShadow);
      return l2;
    } }, { key: "dataLabelsBackground", value: function() {
      var t3 = this.w;
      if ("bubble" !== t3.config.chart.type) for (var e2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i3 = 0; i3 < e2.length; i3++) {
        var a3 = e2[i3], s2 = a3.getBBox(), r2 = null;
        if (s2.width && s2.height && (r2 = this.addBackgroundToDataLabel(a3, s2)), r2) {
          a3.parentNode.insertBefore(r2.node, a3);
          var n2 = t3.config.dataLabels.background.backgroundColor || a3.getAttribute("fill");
          t3.config.chart.animations.enabled && !t3.globals.resized && !t3.globals.dataChanged ? r2.animate().attr({ fill: n2 }) : r2.attr({ fill: n2 }), a3.setAttribute("fill", t3.config.dataLabels.background.foreColor);
        }
      }
    } }, { key: "bringForward", value: function() {
      for (var t3 = this.w, e2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i3 = t3.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a3 = 0; a3 < e2.length; a3++) i3 && i3.insertBefore(e2[a3], i3.nextSibling);
    } }]), t2;
  })(), Zi = ".apexcharts-flip-y {\n  transform: scaleY(-1) translateY(-100%);\n  transform-origin: top;\n  transform-box: fill-box;\n}\n.apexcharts-flip-x {\n  transform: scaleX(-1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.apexcharts-legend {\n  display: flex;\n  overflow: auto;\n  padding: 0 10px;\n}\n.apexcharts-legend.apexcharts-legend-group-horizontal {\n  flex-direction: column;\n}\n.apexcharts-legend-group {\n  display: flex;\n}\n.apexcharts-legend-group-vertical {\n  flex-direction: column-reverse;\n}\n.apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n  flex-wrap: wrap\n}\n.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  flex-direction: column;\n  bottom: 0;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n  justify-content: center;\n  align-items: center;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.apexcharts-legend-series {\n  cursor: pointer;\n  line-height: normal;\n  display: flex;\n  align-items: center;\n}\n.apexcharts-legend-text {\n  position: relative;\n  font-size: 14px;\n}\n.apexcharts-legend-text *, .apexcharts-legend-marker * {\n  pointer-events: none;\n}\n.apexcharts-legend-marker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 1px;\n}\n\n.apexcharts-legend-series.apexcharts-no-click {\n  cursor: auto;\n}\n.apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n  display: none !important;\n}\n.apexcharts-inactive-legend {\n  opacity: 0.45;\n} ", $i = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.legendInactiveClass = "legend-mouseover-inactive";
    }
    return s(t2, [{ key: "getAllSeriesEls", value: function() {
      return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
    } }, { key: "getSeriesByName", value: function(t3) {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(v.escapeString(t3), "']"));
    } }, { key: "isSeriesHidden", value: function(t3) {
      var e2 = this.getSeriesByName(t3), i3 = parseInt(e2.getAttribute("data:realIndex"), 10);
      return { isHidden: e2.classList.contains("apexcharts-series-collapsed"), realIndex: i3 };
    } }, { key: "addCollapsedClassToSeries", value: function(t3, e2) {
      var i3 = this.w;
      function a3(i4) {
        for (var a4 = 0; a4 < i4.length; a4++) i4[a4].index === e2 && t3.node.classList.add("apexcharts-series-collapsed");
      }
      a3(i3.globals.collapsedSeries), a3(i3.globals.ancillaryCollapsedSeries);
    } }, { key: "toggleSeries", value: function(t3) {
      var e2 = this.isSeriesHidden(t3);
      return this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, e2.isHidden), e2.isHidden;
    } }, { key: "showSeries", value: function(t3) {
      var e2 = this.isSeriesHidden(t3);
      e2.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, true);
    } }, { key: "hideSeries", value: function(t3) {
      var e2 = this.isSeriesHidden(t3);
      e2.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, false);
    } }, { key: "resetSeries", value: function() {
      var t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a3 = this.w, s2 = v.clone(a3.globals.initialSeries);
      a3.globals.previousPaths = [], i3 ? (a3.globals.collapsedSeries = [], a3.globals.ancillaryCollapsedSeries = [], a3.globals.collapsedSeriesIndices = [], a3.globals.ancillaryCollapsedSeriesIndices = []) : s2 = this.emptyCollapsedSeries(s2), a3.config.series = s2, t3 && (e2 && (a3.globals.zoomed = false, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s2, a3.config.chart.animations.dynamicAnimation.enabled));
    } }, { key: "emptyCollapsedSeries", value: function(t3) {
      for (var e2 = this.w, i3 = 0; i3 < t3.length; i3++) e2.globals.collapsedSeriesIndices.indexOf(i3) > -1 && (t3[i3].data = []);
      return t3;
    } }, { key: "highlightSeries", value: function(t3) {
      var e2 = this.w, i3 = this.getSeriesByName(t3), a3 = parseInt(null == i3 ? void 0 : i3.getAttribute("data:realIndex"), 10), s2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), r2 = null, n2 = null, o2 = null;
      if (e2.globals.axisCharts || "radialBar" === e2.config.chart.type) if (e2.globals.axisCharts) {
        r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a3, "']")), n2 = e2.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(a3, "']"));
        var l2 = e2.globals.seriesYAxisReverseMap[a3];
        o2 = e2.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(l2, "']"));
      } else r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a3 + 1, "']"));
      else r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a3 + 1, "'] path"));
      for (var h2 = 0; h2 < s2.length; h2++) s2[h2].classList.add(this.legendInactiveClass);
      if (r2) e2.globals.axisCharts || r2.parentNode.classList.remove(this.legendInactiveClass), r2.classList.remove(this.legendInactiveClass), null !== n2 && n2.classList.remove(this.legendInactiveClass), null !== o2 && o2.classList.remove(this.legendInactiveClass);
      else for (var c2 = 0; c2 < s2.length; c2++) s2[c2].classList.remove(this.legendInactiveClass);
    } }, { key: "toggleSeriesOnHover", value: function(t3, e2) {
      var i3 = this.w;
      e2 || (e2 = t3.target);
      var a3 = i3.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
      if ("mousemove" === t3.type) {
        var s2 = parseInt(e2.getAttribute("rel"), 10) - 1;
        this.highlightSeries(i3.globals.seriesNames[s2]);
      } else if ("mouseout" === t3.type) for (var r2 = 0; r2 < a3.length; r2++) a3[r2].classList.remove(this.legendInactiveClass);
    } }, { key: "highlightRangeInSeries", value: function(t3, e2) {
      var i3 = this, a3 = this.w, s2 = a3.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r2 = function(t4) {
        for (var e3 = 0; e3 < s2.length; e3++) s2[e3].classList[t4](i3.legendInactiveClass);
      };
      if ("mousemove" === t3.type) {
        var n2 = parseInt(e2.getAttribute("rel"), 10) - 1;
        r2("add");
        var o2 = a3.config.plotOptions.heatmap.colorScale.ranges;
        !(function(t4, e3) {
          for (var a4 = 0; a4 < s2.length; a4++) {
            var r3 = Number(s2[a4].getAttribute("val"));
            r3 >= t4.from && (r3 < t4.to || t4.to === e3 && r3 === e3) && s2[a4].classList.remove(i3.legendInactiveClass);
          }
        })(o2[n2], o2.reduce((function(t4, e3) {
          return Math.max(t4, e3.to);
        }), 0));
      } else "mouseout" === t3.type && r2("remove");
    } }, { key: "getActiveConfigSeriesIndex", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "asc", e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i3 = this.w, a3 = 0;
      if (i3.config.series.length > 1) {
        for (var s2 = i3.config.series.map((function(t4, a4) {
          return t4.data && t4.data.length > 0 && -1 === i3.globals.collapsedSeriesIndices.indexOf(a4) && (!i3.globals.comboCharts || 0 === e2.length || e2.length && e2.indexOf(i3.config.series[a4].type) > -1) ? a4 : -1;
        })), r2 = "asc" === t3 ? 0 : s2.length - 1; "asc" === t3 ? r2 < s2.length : r2 >= 0; "asc" === t3 ? r2++ : r2--) if (-1 !== s2[r2]) {
          a3 = s2[r2];
          break;
        }
      }
      return a3;
    } }, { key: "getBarSeriesIndices", value: function() {
      return this.w.globals.comboCharts ? this.w.config.series.map((function(t3, e2) {
        return "bar" === t3.type || "column" === t3.type ? e2 : -1;
      })).filter((function(t3) {
        return -1 !== t3;
      })) : this.w.config.series.map((function(t3, e2) {
        return e2;
      }));
    } }, { key: "getPreviousPaths", value: function() {
      var t3 = this.w;
      function e2(e3, i4, a4) {
        for (var s3 = e3[i4].childNodes, r2 = { type: a4, paths: [], realIndex: e3[i4].getAttribute("data:realIndex") }, n2 = 0; n2 < s3.length; n2++) if (s3[n2].hasAttribute("pathTo")) {
          var o2 = s3[n2].getAttribute("pathTo");
          r2.paths.push({ d: o2 });
        }
        t3.globals.previousPaths.push(r2);
      }
      t3.globals.previousPaths = [];
      ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach((function(i4) {
        for (var a4, s3 = (a4 = i4, t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a4, "-series .apexcharts-series"))), r2 = 0; r2 < s3.length; r2++) e2(s3, r2, i4);
      }));
      var i3 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3.config.chart.type, " .apexcharts-series"));
      if (i3.length > 0) for (var a3 = function(e3) {
        for (var i4 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(e3, "'] rect")), a4 = [], s3 = function(t4) {
          var e4 = function(e5) {
            return i4[t4].getAttribute(e5);
          }, s4 = { x: parseFloat(e4("x")), y: parseFloat(e4("y")), width: parseFloat(e4("width")), height: parseFloat(e4("height")) };
          a4.push({ rect: s4, color: i4[t4].getAttribute("color") });
        }, r2 = 0; r2 < i4.length; r2++) s3(r2);
        t3.globals.previousPaths.push(a4);
      }, s2 = 0; s2 < i3.length; s2++) a3(s2);
      t3.globals.axisCharts || (t3.globals.previousPaths = t3.globals.series);
    } }, { key: "clearPreviousPaths", value: function() {
      var t3 = this.w;
      t3.globals.previousPaths = [], t3.globals.allSeriesCollapsed = false;
    } }, { key: "handleNoData", value: function() {
      var t3 = this.w, e2 = t3.config.noData, i3 = new Mi(this.ctx), a3 = t3.globals.svgWidth / 2, s2 = t3.globals.svgHeight / 2, r2 = "middle";
      if (t3.globals.noData = true, t3.globals.animationEnded = true, "left" === e2.align ? (a3 = 10, r2 = "start") : "right" === e2.align && (a3 = t3.globals.svgWidth - 10, r2 = "end"), "top" === e2.verticalAlign ? s2 = 50 : "bottom" === e2.verticalAlign && (s2 = t3.globals.svgHeight - 50), a3 += e2.offsetX, s2 = s2 + parseInt(e2.style.fontSize, 10) + 2 + e2.offsetY, void 0 !== e2.text && "" !== e2.text) {
        var n2 = i3.drawText({ x: a3, y: s2, text: e2.text, textAnchor: r2, fontSize: e2.style.fontSize, fontFamily: e2.style.fontFamily, foreColor: e2.style.color, opacity: 1, class: "apexcharts-text-nodata" });
        t3.globals.dom.Paper.add(n2);
      }
    } }, { key: "setNullSeriesToZeroValues", value: function(t3) {
      for (var e2 = this.w, i3 = 0; i3 < t3.length; i3++) if (0 === t3[i3].length) for (var a3 = 0; a3 < t3[e2.globals.maxValsInArrayIndex].length; a3++) t3[i3].push(0);
      return t3;
    } }, { key: "hasAllSeriesEqualX", value: function() {
      for (var t3 = true, e2 = this.w, i3 = this.filteredSeriesX(), a3 = 0; a3 < i3.length - 1; a3++) if (i3[a3][0] !== i3[a3 + 1][0]) {
        t3 = false;
        break;
      }
      return e2.globals.allSeriesHasEqualX = t3, t3;
    } }, { key: "filteredSeriesX", value: function() {
      var t3 = this.w.globals.seriesX.map((function(t4) {
        return t4.length > 0 ? t4 : [];
      }));
      return t3;
    } }]), t2;
  })(), Ji = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new Pi(this.ctx);
    }
    return s(t2, [{ key: "isMultiFormat", value: function() {
      return this.isFormatXY() || this.isFormat2DArray();
    } }, { key: "isFormatXY", value: function() {
      var t3 = this.w.config.series.slice(), e2 = new $i(this.ctx);
      if (this.activeSeriesIndex = e2.getActiveConfigSeriesIndex(), void 0 !== t3[this.activeSeriesIndex].data && t3[this.activeSeriesIndex].data.length > 0 && null !== t3[this.activeSeriesIndex].data[0] && void 0 !== t3[this.activeSeriesIndex].data[0].x && null !== t3[this.activeSeriesIndex].data[0]) return true;
    } }, { key: "isFormat2DArray", value: function() {
      var t3 = this.w.config.series.slice(), e2 = new $i(this.ctx);
      if (this.activeSeriesIndex = e2.getActiveConfigSeriesIndex(), void 0 !== t3[this.activeSeriesIndex].data && t3[this.activeSeriesIndex].data.length > 0 && void 0 !== t3[this.activeSeriesIndex].data[0] && null !== t3[this.activeSeriesIndex].data[0] && t3[this.activeSeriesIndex].data[0].constructor === Array) return true;
    } }, { key: "handleFormat2DArray", value: function(t3, e2) {
      for (var i3 = this.w.config, a3 = this.w.globals, s2 = "boxPlot" === i3.chart.type || "boxPlot" === i3.series[e2].type, r2 = 0; r2 < t3[e2].data.length; r2++) if (void 0 !== t3[e2].data[r2][1] && (Array.isArray(t3[e2].data[r2][1]) && 4 === t3[e2].data[r2][1].length && !s2 ? this.twoDSeries.push(v.parseNumber(t3[e2].data[r2][1][3])) : t3[e2].data[r2].length >= 5 ? this.twoDSeries.push(v.parseNumber(t3[e2].data[r2][4])) : this.twoDSeries.push(v.parseNumber(t3[e2].data[r2][1])), a3.dataFormatXNumeric = true), "datetime" === i3.xaxis.type) {
        var n2 = new Date(t3[e2].data[r2][0]);
        n2 = new Date(n2).getTime(), this.twoDSeriesX.push(n2);
      } else this.twoDSeriesX.push(t3[e2].data[r2][0]);
      for (var o2 = 0; o2 < t3[e2].data.length; o2++) void 0 !== t3[e2].data[o2][2] && (this.threeDSeries.push(t3[e2].data[o2][2]), a3.isDataXYZ = true);
    } }, { key: "handleFormatXY", value: function(t3, e2) {
      var i3 = this.w.config, a3 = this.w.globals, s2 = new zi(this.ctx), r2 = e2;
      a3.collapsedSeriesIndices.indexOf(e2) > -1 && (r2 = this.activeSeriesIndex);
      for (var n2 = 0; n2 < t3[e2].data.length; n2++) void 0 !== t3[e2].data[n2].y && (Array.isArray(t3[e2].data[n2].y) ? this.twoDSeries.push(v.parseNumber(t3[e2].data[n2].y[t3[e2].data[n2].y.length - 1])) : this.twoDSeries.push(v.parseNumber(t3[e2].data[n2].y))), void 0 !== t3[e2].data[n2].goals && Array.isArray(t3[e2].data[n2].goals) ? (void 0 === this.seriesGoals[e2] && (this.seriesGoals[e2] = []), this.seriesGoals[e2].push(t3[e2].data[n2].goals)) : (void 0 === this.seriesGoals[e2] && (this.seriesGoals[e2] = []), this.seriesGoals[e2].push(null));
      for (var o2 = 0; o2 < t3[r2].data.length; o2++) {
        var l2 = "string" == typeof t3[r2].data[o2].x, h2 = Array.isArray(t3[r2].data[o2].x), c2 = !h2 && !!s2.isValidDate(t3[r2].data[o2].x);
        if (l2 || c2) if (l2 || i3.xaxis.convertedCatToNumeric) {
          var d2 = a3.isBarHorizontal && a3.isRangeData;
          "datetime" !== i3.xaxis.type || d2 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(t3[r2].data[o2].x), isNaN(t3[r2].data[o2].x) || "category" === this.w.config.xaxis.type || "string" == typeof t3[r2].data[o2].x || (a3.isXNumeric = true)) : this.twoDSeriesX.push(s2.parseDate(t3[r2].data[o2].x));
        } else "datetime" === i3.xaxis.type ? this.twoDSeriesX.push(s2.parseDate(t3[r2].data[o2].x.toString())) : (a3.dataFormatXNumeric = true, a3.isXNumeric = true, this.twoDSeriesX.push(parseFloat(t3[r2].data[o2].x)));
        else h2 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(t3[r2].data[o2].x)) : (a3.isXNumeric = true, a3.dataFormatXNumeric = true, this.twoDSeriesX.push(t3[r2].data[o2].x));
      }
      if (t3[e2].data[0] && void 0 !== t3[e2].data[0].z) {
        for (var u2 = 0; u2 < t3[e2].data.length; u2++) this.threeDSeries.push(t3[e2].data[u2].z);
        a3.isDataXYZ = true;
      }
    } }, { key: "handleRangeData", value: function(t3, e2) {
      var i3 = this.w.globals, a3 = {};
      return this.isFormat2DArray() ? a3 = this.handleRangeDataFormat("array", t3, e2) : this.isFormatXY() && (a3 = this.handleRangeDataFormat("xy", t3, e2)), i3.seriesRangeStart[e2] = void 0 === a3.start ? [] : a3.start, i3.seriesRangeEnd[e2] = void 0 === a3.end ? [] : a3.end, i3.seriesRange[e2] = a3.rangeUniques, i3.seriesRange.forEach((function(t4, e3) {
        t4 && t4.forEach((function(t5, e4) {
          t5.y.forEach((function(e5, i4) {
            for (var a4 = 0; a4 < t5.y.length; a4++) if (i4 !== a4) {
              var s2 = e5.y1, r2 = e5.y2, n2 = t5.y[a4].y1;
              s2 <= t5.y[a4].y2 && n2 <= r2 && (t5.overlaps.indexOf(e5.rangeName) < 0 && t5.overlaps.push(e5.rangeName), t5.overlaps.indexOf(t5.y[a4].rangeName) < 0 && t5.overlaps.push(t5.y[a4].rangeName));
            }
          }));
        }));
      })), a3;
    } }, { key: "handleCandleStickBoxData", value: function(t3, e2) {
      var i3 = this.w.globals, a3 = {};
      return this.isFormat2DArray() ? a3 = this.handleCandleStickBoxDataFormat("array", t3, e2) : this.isFormatXY() && (a3 = this.handleCandleStickBoxDataFormat("xy", t3, e2)), i3.seriesCandleO[e2] = a3.o, i3.seriesCandleH[e2] = a3.h, i3.seriesCandleM[e2] = a3.m, i3.seriesCandleL[e2] = a3.l, i3.seriesCandleC[e2] = a3.c, a3;
    } }, { key: "handleRangeDataFormat", value: function(t3, e2, i3) {
      var a3 = [], s2 = [], r2 = e2[i3].data.filter((function(t4, e3, i4) {
        return e3 === i4.findIndex((function(e4) {
          return e4.x === t4.x;
        }));
      })).map((function(t4, e3) {
        return { x: t4.x, overlaps: [], y: [] };
      }));
      if ("array" === t3) for (var n2 = 0; n2 < e2[i3].data.length; n2++) Array.isArray(e2[i3].data[n2]) ? (a3.push(e2[i3].data[n2][1][0]), s2.push(e2[i3].data[n2][1][1])) : (a3.push(e2[i3].data[n2]), s2.push(e2[i3].data[n2]));
      else if ("xy" === t3) for (var o2 = function(t4) {
        var n3 = Array.isArray(e2[i3].data[t4].y), o3 = v.randomId(), l3 = e2[i3].data[t4].x, h2 = { y1: n3 ? e2[i3].data[t4].y[0] : e2[i3].data[t4].y, y2: n3 ? e2[i3].data[t4].y[1] : e2[i3].data[t4].y, rangeName: o3 };
        e2[i3].data[t4].rangeName = o3;
        var c2 = r2.findIndex((function(t5) {
          return t5.x === l3;
        }));
        r2[c2].y.push(h2), a3.push(h2.y1), s2.push(h2.y2);
      }, l2 = 0; l2 < e2[i3].data.length; l2++) o2(l2);
      return { start: a3, end: s2, rangeUniques: r2 };
    } }, { key: "handleCandleStickBoxDataFormat", value: function(t3, e2, i3) {
      var a3 = this.w, s2 = "boxPlot" === a3.config.chart.type || "boxPlot" === a3.config.series[i3].type, r2 = [], n2 = [], o2 = [], l2 = [], h2 = [];
      if ("array" === t3) if (s2 && 6 === e2[i3].data[0].length || !s2 && 5 === e2[i3].data[0].length) for (var c2 = 0; c2 < e2[i3].data.length; c2++) r2.push(e2[i3].data[c2][1]), n2.push(e2[i3].data[c2][2]), s2 ? (o2.push(e2[i3].data[c2][3]), l2.push(e2[i3].data[c2][4]), h2.push(e2[i3].data[c2][5])) : (l2.push(e2[i3].data[c2][3]), h2.push(e2[i3].data[c2][4]));
      else for (var d2 = 0; d2 < e2[i3].data.length; d2++) Array.isArray(e2[i3].data[d2][1]) && (r2.push(e2[i3].data[d2][1][0]), n2.push(e2[i3].data[d2][1][1]), s2 ? (o2.push(e2[i3].data[d2][1][2]), l2.push(e2[i3].data[d2][1][3]), h2.push(e2[i3].data[d2][1][4])) : (l2.push(e2[i3].data[d2][1][2]), h2.push(e2[i3].data[d2][1][3])));
      else if ("xy" === t3) for (var u2 = 0; u2 < e2[i3].data.length; u2++) Array.isArray(e2[i3].data[u2].y) && (r2.push(e2[i3].data[u2].y[0]), n2.push(e2[i3].data[u2].y[1]), s2 ? (o2.push(e2[i3].data[u2].y[2]), l2.push(e2[i3].data[u2].y[3]), h2.push(e2[i3].data[u2].y[4])) : (l2.push(e2[i3].data[u2].y[2]), h2.push(e2[i3].data[u2].y[3])));
      return { o: r2, h: n2, m: o2, l: l2, c: h2 };
    } }, { key: "parseDataAxisCharts", value: function(t3) {
      var e2 = this, i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx, a3 = this.w.config, s2 = this.w.globals, r2 = new zi(i3), n2 = a3.labels.length > 0 ? a3.labels.slice() : a3.xaxis.categories.slice();
      s2.isRangeBar = "rangeBar" === a3.chart.type && s2.isBarHorizontal, s2.hasXaxisGroups = "category" === a3.xaxis.type && a3.xaxis.group.groups.length > 0, s2.hasXaxisGroups && (s2.groups = a3.xaxis.group.groups), t3.forEach((function(t4, e3) {
        void 0 !== t4.name ? s2.seriesNames.push(t4.name) : s2.seriesNames.push("series-" + parseInt(e3 + 1, 10));
      })), this.coreUtils.setSeriesYAxisMappings();
      var o2 = [], l2 = f(new Set(a3.series.map((function(t4) {
        return t4.group;
      }))));
      a3.series.forEach((function(t4, e3) {
        var i4 = l2.indexOf(t4.group);
        o2[i4] || (o2[i4] = []), o2[i4].push(s2.seriesNames[e3]);
      })), s2.seriesGroups = o2;
      for (var h2 = function() {
        for (var t4 = 0; t4 < n2.length; t4++) if ("string" == typeof n2[t4]) {
          if (!r2.isValidDate(n2[t4])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
          e2.twoDSeriesX.push(r2.parseDate(n2[t4]));
        } else e2.twoDSeriesX.push(n2[t4]);
      }, c2 = 0; c2 < t3.length; c2++) {
        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t3[c2].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
        if ("rangeBar" !== a3.chart.type && "rangeArea" !== a3.chart.type && "rangeBar" !== t3[c2].type && "rangeArea" !== t3[c2].type || (s2.isRangeData = true, this.handleRangeData(t3, c2)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t3, c2) : this.isFormatXY() && this.handleFormatXY(t3, c2), "candlestick" !== a3.chart.type && "candlestick" !== t3[c2].type && "boxPlot" !== a3.chart.type && "boxPlot" !== t3[c2].type || this.handleCandleStickBoxData(t3, c2), s2.series.push(this.twoDSeries), s2.labels.push(this.twoDSeriesX), s2.seriesX.push(this.twoDSeriesX), s2.seriesGoals = this.seriesGoals, c2 !== this.activeSeriesIndex || this.fallbackToCategory || (s2.isXNumeric = true);
        else {
          "datetime" === a3.xaxis.type ? (s2.isXNumeric = true, h2(), s2.seriesX.push(this.twoDSeriesX)) : "numeric" === a3.xaxis.type && (s2.isXNumeric = true, n2.length > 0 && (this.twoDSeriesX = n2, s2.seriesX.push(this.twoDSeriesX))), s2.labels.push(this.twoDSeriesX);
          var d2 = t3[c2].data.map((function(t4) {
            return v.parseNumber(t4);
          }));
          s2.series.push(d2);
        }
        s2.seriesZ.push(this.threeDSeries), void 0 !== t3[c2].color ? s2.seriesColors.push(t3[c2].color) : s2.seriesColors.push(void 0);
      }
      return this.w;
    } }, { key: "parseDataNonAxisCharts", value: function(t3) {
      var e2 = this.w.globals, i3 = this.w.config, a3 = Array.isArray(t3) && t3.every((function(t4) {
        return "number" == typeof t4;
      })) && i3.labels.length > 0, s2 = Array.isArray(t3) && t3.some((function(t4) {
        return t4 && "object" === b(t4) && t4.data || t4 && "object" === b(t4) && t4.parsing;
      }));
      if (a3 && s2 && console.warn("ApexCharts: Both old format (numeric series + labels) and new format (series objects with data/parsing) detected. Using old format for backward compatibility."), a3) {
        e2.series = t3.slice(), e2.seriesNames = i3.labels.slice();
        for (var r2 = 0; r2 < e2.series.length; r2++) void 0 === e2.seriesNames[r2] && e2.seriesNames.push("series-" + (r2 + 1));
        return this.w;
      }
      if (Array.isArray(t3) && t3.every((function(t4) {
        return "number" == typeof t4;
      }))) {
        e2.series = t3.slice(), e2.seriesNames = [];
        for (var n2 = 0; n2 < e2.series.length; n2++) e2.seriesNames.push(i3.labels[n2] || "series-".concat(n2 + 1));
        return this.w;
      }
      var o2 = this.extractPieDataFromSeries(t3);
      e2.series = o2.values, e2.seriesNames = o2.labels, "radialBar" === i3.chart.type && (e2.series = e2.series.map((function(t4) {
        var e3 = v.parseNumber(t4);
        return e3 > 100 && console.warn("ApexCharts: RadialBar value ".concat(e3, " > 100, consider using percentage values (0-100)")), e3;
      })));
      for (var l2 = 0; l2 < e2.series.length; l2++) void 0 === e2.seriesNames[l2] && e2.seriesNames.push("series-" + (l2 + 1));
      return this.w;
    } }, { key: "resetParsingFlags", value: function() {
      var t3 = this.w;
      t3.globals.dataWasParsed = false, t3.globals.originalSeries = null, t3.config.series && t3.config.series.forEach((function(t4) {
        t4.__apexParsed && delete t4.__apexParsed;
      }));
    } }, { key: "extractPieDataFromSeries", value: function(t3) {
      var e2 = [], i3 = [];
      if (!Array.isArray(t3)) return console.warn("ApexCharts: Expected array for series data"), { values: [], labels: [] };
      if (0 === t3.length) return console.warn("ApexCharts: Empty series array"), { values: [], labels: [] };
      var a3 = t3[0];
      return "object" === b(a3) && null !== a3 && a3.data ? (this.extractPieDataFromSeriesObjects(t3, e2, i3), { values: e2, labels: i3 }) : (console.warn("ApexCharts: Unsupported series format for pie/donut/radialBar. Expected series objects with data property."), { values: [], labels: [] });
    } }, { key: "extractPieDataFromSeriesObjects", value: function(t3, e2, i3) {
      t3.forEach((function(t4, a3) {
        t4.data && Array.isArray(t4.data) ? t4.data.forEach((function(t5) {
          "object" === b(t5) && null !== t5 ? void 0 !== t5.x && void 0 !== t5.y ? (i3.push(String(t5.x)), e2.push(v.parseNumber(t5.y))) : console.warn("ApexCharts: Invalid data point format for pie chart. Expected {x, y} format:", t5) : console.warn("ApexCharts: Expected object data point, got:", b(t5));
        })) : console.warn("ApexCharts: Series ".concat(a3, " has no valid data array"));
      }));
    } }, { key: "handleExternalLabelsData", value: function(t3) {
      var e2 = this.w.config, i3 = this.w.globals;
      if (e2.xaxis.categories.length > 0) i3.labels = e2.xaxis.categories;
      else if (e2.labels.length > 0) i3.labels = e2.labels.slice();
      else if (this.fallbackToCategory) {
        if (i3.labels = i3.labels[0], i3.seriesRange.length && (i3.seriesRange.map((function(t4) {
          t4.forEach((function(t5) {
            i3.labels.indexOf(t5.x) < 0 && t5.x && i3.labels.push(t5.x);
          }));
        })), i3.labels = Array.from(new Set(i3.labels.map(JSON.stringify)), JSON.parse)), e2.xaxis.convertedCatToNumeric) new Ni(e2).convertCatToNumericXaxis(e2, this.ctx, i3.seriesX[0]), this._generateExternalLabels(t3);
      } else this._generateExternalLabels(t3);
    } }, { key: "_generateExternalLabels", value: function(t3) {
      var e2 = this.w.globals, i3 = this.w.config, a3 = [];
      if (e2.axisCharts) {
        if (e2.series.length > 0) if (this.isFormatXY()) for (var s2 = i3.series.map((function(t4, e3) {
          return t4.data.filter((function(t5, e4, i4) {
            return i4.findIndex((function(e5) {
              return e5.x === t5.x;
            })) === e4;
          }));
        })), r2 = s2.reduce((function(t4, e3, i4, a4) {
          return a4[t4].length > e3.length ? t4 : i4;
        }), 0), n2 = 0; n2 < s2[r2].length; n2++) a3.push(n2 + 1);
        else for (var o2 = 0; o2 < e2.series[e2.maxValsInArrayIndex].length; o2++) a3.push(o2 + 1);
        e2.seriesX = [];
        for (var l2 = 0; l2 < t3.length; l2++) e2.seriesX.push(a3);
        this.w.globals.isBarHorizontal || (e2.isXNumeric = true);
      }
      if (0 === a3.length) {
        a3 = e2.axisCharts ? [] : e2.series.map((function(t4, e3) {
          return e3 + 1;
        }));
        for (var h2 = 0; h2 < t3.length; h2++) e2.seriesX.push(a3);
      }
      e2.labels = a3, i3.xaxis.convertedCatToNumeric && (e2.categoryLabels = a3.map((function(t4) {
        return i3.xaxis.labels.formatter(t4);
      }))), e2.noLabelsProvided = true;
    } }, { key: "parseRawDataIfNeeded", value: function(t3) {
      var e2 = this, i3 = this.w.config, a3 = this.w.globals, s2 = i3.parsing;
      if (a3.dataWasParsed) return t3;
      if (!s2 && !t3.some((function(t4) {
        return t4.parsing;
      }))) return t3;
      var r2 = t3.map((function(t4, i4) {
        var a4, r3, n2;
        if (!t4.data || !Array.isArray(t4.data) || 0 === t4.data.length) return t4;
        var o2 = { x: (null === (a4 = t4.parsing) || void 0 === a4 ? void 0 : a4.x) || (null == s2 ? void 0 : s2.x), y: (null === (r3 = t4.parsing) || void 0 === r3 ? void 0 : r3.y) || (null == s2 ? void 0 : s2.y), z: (null === (n2 = t4.parsing) || void 0 === n2 ? void 0 : n2.z) || (null == s2 ? void 0 : s2.z) };
        if (!o2.x && !o2.y) return t4;
        var l2 = t4.data[0];
        if ("object" === b(l2) && null !== l2 && (l2.hasOwnProperty("x") || l2.hasOwnProperty("y")) || Array.isArray(l2)) return t4;
        if (!o2.x || !o2.y || Array.isArray(o2.y) && 0 === o2.y.length) return console.warn("ApexCharts: Series ".concat(i4, " has parsing config but missing x or y field specification")), t4;
        var h2 = t4.data.map((function(t5, a5) {
          if ("object" !== b(t5) || null === t5) return console.warn("ApexCharts: Series ".concat(i4, ", data point ").concat(a5, " is not an object, skipping parsing")), t5;
          var s3, r4 = e2.getNestedValue(t5, o2.x), n3 = void 0;
          if (Array.isArray(o2.y)) {
            var l3 = o2.y.map((function(i5) {
              return e2.getNestedValue(t5, i5);
            }));
            s3 = "bubble" === e2.w.config.chart.type && 2 === l3.length ? l3[0] : l3;
          } else s3 = e2.getNestedValue(t5, o2.y);
          o2.z && (n3 = e2.getNestedValue(t5, o2.z)), void 0 === r4 && console.warn("ApexCharts: Series ".concat(i4, ", data point ").concat(a5, " missing field '").concat(o2.x, "'")), void 0 === s3 && console.warn("ApexCharts: Series ".concat(i4, ", data point ").concat(a5, " missing field '").concat(o2.y, "'"));
          var h3 = { x: r4, y: s3 };
          if ("bubble" === e2.w.config.chart.type && Array.isArray(o2.y) && 2 === o2.y.length) {
            var c2 = e2.getNestedValue(t5, o2.y[1]);
            void 0 !== c2 && (h3.z = c2);
          }
          return void 0 !== n3 && (h3.z = n3), h3;
        }));
        return u(u({}, t4), {}, { data: h2, __apexParsed: true });
      }));
      return a3.dataWasParsed = true, a3.originalSeries || (a3.originalSeries = v.clone(t3)), r2;
    } }, { key: "getNestedValue", value: function(t3, e2) {
      if (t3 && "object" === b(t3) && e2) {
        if (-1 === e2.indexOf(".")) return t3[e2];
        for (var i3 = e2.split("."), a3 = t3, s2 = 0; s2 < i3.length; s2++) {
          if (null == a3 || "object" !== b(a3)) return;
          a3 = a3[i3[s2]];
        }
        return a3;
      }
    } }, { key: "parseData", value: function(t3) {
      var e2 = this.w, i3 = e2.config, a3 = e2.globals;
      if (t3 = this.parseRawDataIfNeeded(t3), i3.series = t3, a3.initialSeries = v.clone(t3), this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = false, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a3.axisCharts ? (this.parseDataAxisCharts(t3), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t3), i3.chart.stacked) {
        var s2 = new $i(this.ctx);
        a3.series = s2.setNullSeriesToZeroValues(a3.series);
      }
      this.coreUtils.getSeriesTotals(), a3.axisCharts && (a3.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), a3.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), a3.dataFormatXNumeric || a3.isXNumeric && ("numeric" !== i3.xaxis.type || 0 !== i3.labels.length || 0 !== i3.xaxis.categories.length) || this.handleExternalLabelsData(t3);
      for (var r2 = this.coreUtils.getCategoryLabels(a3.labels), n2 = 0; n2 < r2.length; n2++) if (Array.isArray(r2[n2])) {
        a3.isMultiLineX = true;
        break;
      }
    } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
      var t3 = this.w, e2 = [];
      t3.globals.seriesYAxisMap.forEach((function(i3, a3) {
        var s2 = 0;
        i3.forEach((function(e3) {
          -1 !== t3.globals.collapsedSeriesIndices.indexOf(e3) && s2++;
        })), s2 > 0 && s2 == i3.length && e2.push(a3);
      })), t3.globals.ignoreYAxisIndexes = e2.map((function(t4) {
        return t4;
      }));
    } }]), t2;
  })(), Qi = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "svgStringToNode", value: function(t3) {
      return new DOMParser().parseFromString(t3, "image/svg+xml").documentElement;
    } }, { key: "scaleSvgNode", value: function(t3, e2) {
      var i3 = parseFloat(t3.getAttributeNS(null, "width")), a3 = parseFloat(t3.getAttributeNS(null, "height"));
      t3.setAttributeNS(null, "width", i3 * e2), t3.setAttributeNS(null, "height", a3 * e2), t3.setAttributeNS(null, "viewBox", "0 0 " + i3 + " " + a3);
    } }, { key: "getSvgString", value: function(t3) {
      var e2 = this;
      return new Promise((function(i3) {
        var a3 = e2.w, s2 = t3 || a3.config.chart.toolbar.export.scale || a3.config.chart.toolbar.export.width / a3.globals.svgWidth;
        s2 || (s2 = 1);
        var r2 = a3.globals.svgWidth * s2, n2 = a3.globals.svgHeight * s2, o2 = a3.globals.dom.elWrap.cloneNode(true);
        o2.style.width = r2 + "px", o2.style.height = n2 + "px";
        var l2 = new XMLSerializer().serializeToString(o2), h2 = "\n        .apexcharts-tooltip, .apexcharts-toolbar, .apexcharts-xaxistooltip, .apexcharts-yaxistooltip, .apexcharts-xcrosshairs, .apexcharts-ycrosshairs, .apexcharts-zoom-rect, .apexcharts-selection-rect {\n          display: none;\n        }\n      ";
        a3.config.legend.show && a3.globals.dom.elLegendWrap && a3.globals.dom.elLegendWrap.children.length > 0 && (h2 += Zi);
        var c2 = '\n        <svg xmlns="http://www.w3.org/2000/svg"\n          version="1.1"\n          xmlns:xlink="http://www.w3.org/1999/xlink"\n          class="apexcharts-svg"\n          xmlns:data="ApexChartsNS"\n          transform="translate(0, 0)"\n          width="'.concat(a3.globals.svgWidth, 'px" height="').concat(a3.globals.svgHeight, 'px">\n          <foreignObject width="100%" height="100%">\n            <div xmlns="http://www.w3.org/1999/xhtml" style="width:').concat(r2, "px; height:").concat(n2, 'px;">\n            <style type="text/css">\n              ').concat(h2, "\n            </style>\n              ").concat(l2, "\n            </div>\n          </foreignObject>\n        </svg>\n      "), d2 = e2.svgStringToNode(c2);
        1 !== s2 && e2.scaleSvgNode(d2, s2), e2.convertImagesToBase64(d2).then((function() {
          c2 = new XMLSerializer().serializeToString(d2), i3(c2.replace(/&nbsp;/g, "&#160;"));
        }));
      }));
    } }, { key: "convertImagesToBase64", value: function(t3) {
      var e2 = this, i3 = t3.getElementsByTagName("image"), a3 = Array.from(i3).map((function(t4) {
        var i4 = t4.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        return i4 && !i4.startsWith("data:") ? e2.getBase64FromUrl(i4).then((function(e3) {
          t4.setAttributeNS("http://www.w3.org/1999/xlink", "href", e3);
        })).catch((function(t5) {
          console.error("Error converting image to base64:", t5);
        })) : Promise.resolve();
      }));
      return Promise.all(a3);
    } }, { key: "getBase64FromUrl", value: function(t3) {
      return new Promise((function(e2, i3) {
        var a3 = new Image();
        a3.crossOrigin = "Anonymous", a3.onload = function() {
          var t4 = document.createElement("canvas");
          t4.width = a3.width, t4.height = a3.height, t4.getContext("2d").drawImage(a3, 0, 0), e2(t4.toDataURL());
        }, a3.onerror = i3, a3.src = t3;
      }));
    } }, { key: "svgUrl", value: function() {
      var t3 = this;
      return new Promise((function(e2) {
        t3.getSvgString().then((function(t4) {
          var i3 = new Blob([t4], { type: "image/svg+xml;charset=utf-8" });
          e2(URL.createObjectURL(i3));
        }));
      }));
    } }, { key: "dataURI", value: function(t3) {
      var e2 = this;
      return new Promise((function(i3) {
        var a3 = e2.w, s2 = t3 ? t3.scale || t3.width / a3.globals.svgWidth : 1, r2 = document.createElement("canvas");
        r2.width = a3.globals.svgWidth * s2, r2.height = parseInt(a3.globals.dom.elWrap.style.height, 10) * s2;
        var n2 = "transparent" !== a3.config.chart.background && a3.config.chart.background ? a3.config.chart.background : "#fff", o2 = r2.getContext("2d");
        o2.fillStyle = n2, o2.fillRect(0, 0, r2.width * s2, r2.height * s2), e2.getSvgString(s2).then((function(t4) {
          var e3 = "data:image/svg+xml," + encodeURIComponent(t4), a4 = new Image();
          a4.crossOrigin = "anonymous", a4.onload = function() {
            if (o2.drawImage(a4, 0, 0), r2.msToBlob) {
              var t5 = r2.msToBlob();
              i3({ blob: t5 });
            } else {
              var e4 = r2.toDataURL("image/png");
              i3({ imgURI: e4 });
            }
          }, a4.src = e3;
        }));
      }));
    } }, { key: "exportToSVG", value: function() {
      var t3 = this;
      this.svgUrl().then((function(e2) {
        t3.triggerDownload(e2, t3.w.config.chart.toolbar.export.svg.filename, ".svg");
      }));
    } }, { key: "exportToPng", value: function() {
      var t3 = this, e2 = this.w.config.chart.toolbar.export.scale, i3 = this.w.config.chart.toolbar.export.width, a3 = e2 ? { scale: e2 } : i3 ? { width: i3 } : void 0;
      this.dataURI(a3).then((function(e3) {
        var i4 = e3.imgURI, a4 = e3.blob;
        a4 ? navigator.msSaveOrOpenBlob(a4, t3.w.globals.chartID + ".png") : t3.triggerDownload(i4, t3.w.config.chart.toolbar.export.png.filename, ".png");
      }));
    } }, { key: "exportToCSV", value: function(t3) {
      var e2 = this, i3 = t3.series, a3 = t3.fileName, s2 = t3.columnDelimiter, r2 = void 0 === s2 ? "," : s2, n2 = t3.lineDelimiter, o2 = void 0 === n2 ? "\n" : n2, l2 = this.w;
      i3 || (i3 = l2.config.series);
      var h2 = [], c2 = [], d2 = "", u2 = l2.globals.series.map((function(t4, e3) {
        return -1 === l2.globals.collapsedSeriesIndices.indexOf(e3) ? t4 : [];
      })), g2 = function(t4) {
        return "function" == typeof l2.config.chart.toolbar.export.csv.categoryFormatter ? l2.config.chart.toolbar.export.csv.categoryFormatter(t4) : "datetime" === l2.config.xaxis.type && String(t4).length >= 10 ? new Date(t4).toDateString() : v.isNumber(t4) ? t4 : t4.split(r2).join("");
      }, p2 = function(t4) {
        return "function" == typeof l2.config.chart.toolbar.export.csv.valueFormatter ? l2.config.chart.toolbar.export.csv.valueFormatter(t4) : t4;
      }, x2 = Math.max.apply(Math, f(i3.map((function(t4) {
        return t4.data ? t4.data.length : 0;
      })))), b2 = new Ji(this.ctx), m2 = new Ri(this.ctx), y2 = function(t4) {
        var i4 = "";
        if (l2.globals.axisCharts) {
          if ("category" === l2.config.xaxis.type || l2.config.xaxis.convertedCatToNumeric) if (l2.globals.isBarHorizontal) {
            var a4 = l2.globals.yLabelFormatters[0], s3 = new $i(e2.ctx).getActiveConfigSeriesIndex();
            i4 = a4(l2.globals.labels[t4], { seriesIndex: s3, dataPointIndex: t4, w: l2 });
          } else i4 = m2.getLabel(l2.globals.labels, l2.globals.timescaleLabels, 0, t4).text;
          "datetime" === l2.config.xaxis.type && (l2.config.xaxis.categories.length ? i4 = l2.config.xaxis.categories[t4] : l2.config.labels.length && (i4 = l2.config.labels[t4]));
        } else i4 = l2.config.labels[t4];
        return null === i4 ? "nullvalue" : (Array.isArray(i4) && (i4 = i4.join(" ")), v.isNumber(i4) ? i4 : i4.split(r2).join(""));
      }, w2 = function(t4, e3) {
        if (h2.length && 0 === e3 && c2.push(h2.join(r2)), t4.data) {
          t4.data = t4.data.length && t4.data || f(Array(x2)).map((function() {
            return "";
          }));
          for (var a4 = 0; a4 < t4.data.length; a4++) {
            h2 = [];
            var s3 = y2(a4);
            if ("nullvalue" !== s3) {
              if (s3 || (b2.isFormatXY() ? s3 = i3[e3].data[a4].x : b2.isFormat2DArray() && (s3 = i3[e3].data[a4] ? i3[e3].data[a4][0] : "")), 0 === e3) {
                h2.push(g2(s3));
                for (var n3 = 0; n3 < l2.globals.series.length; n3++) {
                  var o3, d3 = b2.isFormatXY() ? null === (o3 = i3[n3].data[a4]) || void 0 === o3 ? void 0 : o3.y : u2[n3][a4];
                  h2.push(p2(d3));
                }
              }
              ("candlestick" === l2.config.chart.type || t4.type && "candlestick" === t4.type) && (h2.pop(), h2.push(l2.globals.seriesCandleO[e3][a4]), h2.push(l2.globals.seriesCandleH[e3][a4]), h2.push(l2.globals.seriesCandleL[e3][a4]), h2.push(l2.globals.seriesCandleC[e3][a4])), ("boxPlot" === l2.config.chart.type || t4.type && "boxPlot" === t4.type) && (h2.pop(), h2.push(l2.globals.seriesCandleO[e3][a4]), h2.push(l2.globals.seriesCandleH[e3][a4]), h2.push(l2.globals.seriesCandleM[e3][a4]), h2.push(l2.globals.seriesCandleL[e3][a4]), h2.push(l2.globals.seriesCandleC[e3][a4])), "rangeBar" === l2.config.chart.type && (h2.pop(), h2.push(l2.globals.seriesRangeStart[e3][a4]), h2.push(l2.globals.seriesRangeEnd[e3][a4])), h2.length && c2.push(h2.join(r2));
            }
          }
        }
      };
      h2.push(l2.config.chart.toolbar.export.csv.headerCategory), "boxPlot" === l2.config.chart.type ? (h2.push("minimum"), h2.push("q1"), h2.push("median"), h2.push("q3"), h2.push("maximum")) : "candlestick" === l2.config.chart.type ? (h2.push("open"), h2.push("high"), h2.push("low"), h2.push("close")) : "rangeBar" === l2.config.chart.type ? (h2.push("minimum"), h2.push("maximum")) : i3.map((function(t4, e3) {
        var i4 = (t4.name ? t4.name : "series-".concat(e3)) + "";
        l2.globals.axisCharts && h2.push(i4.split(r2).join("") ? i4.split(r2).join("") : "series-".concat(e3));
      })), l2.globals.axisCharts || (h2.push(l2.config.chart.toolbar.export.csv.headerValue), c2.push(h2.join(r2))), l2.globals.allSeriesHasEqualX || !l2.globals.axisCharts || l2.config.xaxis.categories.length || l2.config.labels.length ? i3.map((function(t4, e3) {
        l2.globals.axisCharts ? w2(t4, e3) : ((h2 = []).push(g2(l2.globals.labels[e3])), h2.push(p2(u2[e3])), c2.push(h2.join(r2)));
      })) : (function() {
        var t4 = /* @__PURE__ */ new Set(), e3 = {};
        i3.forEach((function(a4, s3) {
          null == a4 || a4.data.forEach((function(a5) {
            var r3, n3;
            if (b2.isFormatXY()) r3 = a5.x, n3 = a5.y;
            else {
              if (!b2.isFormat2DArray()) return;
              r3 = a5[0], n3 = a5[1];
            }
            e3[r3] || (e3[r3] = Array(i3.length).fill("")), e3[r3][s3] = p2(n3), t4.add(r3);
          }));
        })), h2.length && c2.push(h2.join(r2)), Array.from(t4).sort().forEach((function(t5) {
          c2.push([g2(t5), e3[t5].join(r2)]);
        }));
      })(), d2 += c2.join(o2), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + d2), a3 || l2.config.chart.toolbar.export.csv.filename, ".csv");
    } }, { key: "triggerDownload", value: function(t3, e2, i3) {
      var a3 = document.createElement("a");
      a3.href = t3, a3.download = (e2 || this.w.globals.chartID) + i3, document.body.appendChild(a3), a3.click(), document.body.removeChild(a3);
    } }]), t2;
  })(), Ki = (function() {
    function t2(e2, a3) {
      i2(this, t2), this.ctx = e2, this.elgrid = a3, this.w = e2.w;
      var s2 = this.w;
      this.axesUtils = new Ri(e2), this.xaxisLabels = s2.globals.labels.slice(), s2.globals.timescaleLabels.length > 0 && !s2.globals.isBarHorizontal && (this.xaxisLabels = s2.globals.timescaleLabels.slice()), s2.config.xaxis.overwriteCategories && (this.xaxisLabels = s2.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === s2.config.xaxis.position ? this.offY = 0 : this.offY = s2.globals.gridHeight, this.offY = this.offY + s2.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === s2.config.chart.type && s2.config.plotOptions.bar.horizontal, this.xaxisFontSize = s2.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = s2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s2.config.xaxis.labels.style.colors, this.xaxisBorderWidth = s2.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = s2.config.yaxis[0].axisBorder.width.toString()), String(this.xaxisBorderWidth).indexOf("%") > -1 ? this.xaxisBorderWidth = s2.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = s2.config.xaxis.axisBorder.height, this.yaxis = s2.config.yaxis[0];
    }
    return s(t2, [{ key: "drawXaxis", value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i3 = e2.group({ class: "apexcharts-xaxis", transform: "translate(".concat(t3.config.xaxis.offsetX, ", ").concat(t3.config.xaxis.offsetY, ")") }), a3 = e2.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t3.globals.translateXAxisX, ", ").concat(t3.globals.translateXAxisY, ")") });
      i3.add(a3);
      for (var s2 = [], r2 = 0; r2 < this.xaxisLabels.length; r2++) s2.push(this.xaxisLabels[r2]);
      if (this.drawXAxisLabelAndGroup(true, e2, a3, s2, t3.globals.isXNumeric, (function(t4, e3) {
        return e3;
      })), t3.globals.hasXaxisGroups) {
        var n2 = t3.globals.groups;
        s2 = [];
        for (var o2 = 0; o2 < n2.length; o2++) s2.push(n2[o2].title);
        var l2 = {};
        t3.config.xaxis.group.style && (l2.xaxisFontSize = t3.config.xaxis.group.style.fontSize, l2.xaxisFontFamily = t3.config.xaxis.group.style.fontFamily, l2.xaxisForeColors = t3.config.xaxis.group.style.colors, l2.fontWeight = t3.config.xaxis.group.style.fontWeight, l2.cssClass = t3.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(false, e2, a3, s2, false, (function(t4, e3) {
          return n2[t4].cols * e3;
        }), l2);
      }
      if (void 0 !== t3.config.xaxis.title.text) {
        var h2 = e2.group({ class: "apexcharts-xaxis-title" }), c2 = e2.drawText({ x: t3.globals.gridWidth / 2 + t3.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + ("bottom" === t3.config.xaxis.position ? t3.globals.xAxisLabelsHeight : -t3.globals.xAxisLabelsHeight - 10) + t3.config.xaxis.title.offsetY, text: t3.config.xaxis.title.text, textAnchor: "middle", fontSize: t3.config.xaxis.title.style.fontSize, fontFamily: t3.config.xaxis.title.style.fontFamily, fontWeight: t3.config.xaxis.title.style.fontWeight, foreColor: t3.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t3.config.xaxis.title.style.cssClass });
        h2.add(c2), i3.add(h2);
      }
      if (t3.config.xaxis.axisBorder.show) {
        var d2 = t3.globals.barPadForNumericAxis, u2 = e2.drawLine(t3.globals.padHorizontal + t3.config.xaxis.axisBorder.offsetX - d2, this.offY, this.xaxisBorderWidth + d2, this.offY, t3.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
        this.elgrid && this.elgrid.elGridBorders && t3.config.grid.show ? this.elgrid.elGridBorders.add(u2) : i3.add(u2);
      }
      return i3;
    } }, { key: "drawXAxisLabelAndGroup", value: function(t3, e2, i3, a3, s2, r2) {
      var n2, o2 = this, l2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {}, h2 = [], c2 = [], d2 = this.w, u2 = l2.xaxisFontSize || this.xaxisFontSize, g2 = l2.xaxisFontFamily || this.xaxisFontFamily, p2 = l2.xaxisForeColors || this.xaxisForeColors, f2 = l2.fontWeight || d2.config.xaxis.labels.style.fontWeight, x2 = l2.cssClass || d2.config.xaxis.labels.style.cssClass, b2 = d2.globals.padHorizontal, m2 = a3.length, v2 = "category" === d2.config.xaxis.type ? d2.globals.dataPoints : m2;
      if (0 === v2 && m2 > v2 && (v2 = m2), s2) {
        var y2 = Math.max(Number(d2.config.xaxis.tickAmount) || 1, v2 > 1 ? v2 - 1 : v2);
        n2 = d2.globals.gridWidth / Math.min(y2, m2 - 1), b2 = b2 + r2(0, n2) / 2 + d2.config.xaxis.labels.offsetX;
      } else n2 = d2.globals.gridWidth / v2, b2 = b2 + r2(0, n2) + d2.config.xaxis.labels.offsetX;
      for (var w2 = function(s3) {
        var l3 = b2 - r2(s3, n2) / 2 + d2.config.xaxis.labels.offsetX;
        0 === s3 && 1 === m2 && n2 / 2 === b2 && 1 === v2 && (l3 = d2.globals.gridWidth / 2);
        var y3 = o2.axesUtils.getLabel(a3, d2.globals.timescaleLabels, l3, s3, h2, u2, t3), w3 = 28;
        d2.globals.rotateXLabels && t3 && (w3 = 22), d2.config.xaxis.title.text && "top" === d2.config.xaxis.position && (w3 += parseFloat(d2.config.xaxis.title.style.fontSize) + 2), t3 || (w3 = w3 + parseFloat(u2) + (d2.globals.xAxisLabelsHeight - d2.globals.xAxisGroupLabelsHeight) + (d2.globals.rotateXLabels ? 10 : 0)), y3 = void 0 !== d2.config.xaxis.tickAmount && "dataPoints" !== d2.config.xaxis.tickAmount && "datetime" !== d2.config.xaxis.type ? o2.axesUtils.checkLabelBasedOnTickamount(s3, y3, m2) : o2.axesUtils.checkForOverflowingLabels(s3, y3, m2, h2, c2);
        if (d2.config.xaxis.labels.show) {
          var k3 = e2.drawText({ x: y3.x, y: o2.offY + d2.config.xaxis.labels.offsetY + w3 - ("top" === d2.config.xaxis.position ? d2.globals.xAxisHeight + d2.config.xaxis.axisTicks.height - 2 : 0), text: y3.text, textAnchor: "middle", fontWeight: y3.isBold ? 600 : f2, fontSize: u2, fontFamily: g2, foreColor: Array.isArray(p2) ? t3 && d2.config.xaxis.convertedCatToNumeric ? p2[d2.globals.minX + s3 - 1] : p2[s3] : p2, isPlainText: false, cssClass: (t3 ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + x2 });
          if (i3.add(k3), k3.on("click", (function(t4) {
            if ("function" == typeof d2.config.chart.events.xAxisLabelClick) {
              var e3 = Object.assign({}, d2, { labelIndex: s3 });
              d2.config.chart.events.xAxisLabelClick(t4, o2.ctx, e3);
            }
          })), t3) {
            var A2 = document.createElementNS(d2.globals.SVGNS, "title");
            A2.textContent = Array.isArray(y3.text) ? y3.text.join(" ") : y3.text, k3.node.appendChild(A2), "" !== y3.text && (h2.push(y3.text), c2.push(y3));
          }
        }
        s3 < m2 - 1 && (b2 += r2(s3 + 1, n2));
      }, k2 = 0; k2 <= m2 - 1; k2++) w2(k2);
    } }, { key: "drawXaxisInversed", value: function(t3) {
      var e2, i3, a3 = this, s2 = this.w, r2 = new Mi(this.ctx), n2 = s2.config.yaxis[0].opposite ? s2.globals.translateYAxisX[t3] : 0, o2 = r2.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t3 }), l2 = r2.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + n2 + ", 0)" });
      o2.add(l2);
      var h2 = [];
      if (s2.config.yaxis[t3].show) for (var c2 = 0; c2 < this.xaxisLabels.length; c2++) h2.push(this.xaxisLabels[c2]);
      e2 = s2.globals.gridHeight / h2.length, i3 = -e2 / 2.2;
      var d2 = s2.globals.yLabelFormatters[0], u2 = s2.config.yaxis[0].labels;
      if (u2.show) for (var g2 = function(n3) {
        var o3 = void 0 === h2[n3] ? "" : h2[n3];
        o3 = d2(o3, { seriesIndex: t3, dataPointIndex: n3, w: s2 });
        var c3 = a3.axesUtils.getYAxisForeColor(u2.style.colors, t3), g3 = 0;
        Array.isArray(o3) && (g3 = o3.length / 2 * parseInt(u2.style.fontSize, 10));
        var p3 = u2.offsetX - 15, f3 = "end";
        a3.yaxis.opposite && (f3 = "start"), "left" === s2.config.yaxis[0].labels.align ? (p3 = u2.offsetX, f3 = "start") : "center" === s2.config.yaxis[0].labels.align ? (p3 = u2.offsetX, f3 = "middle") : "right" === s2.config.yaxis[0].labels.align && (f3 = "end");
        var x3 = r2.drawText({ x: p3, y: i3 + e2 + u2.offsetY - g3, text: o3, textAnchor: f3, foreColor: Array.isArray(c3) ? c3[n3] : c3, fontSize: u2.style.fontSize, fontFamily: u2.style.fontFamily, fontWeight: u2.style.fontWeight, isPlainText: false, cssClass: "apexcharts-yaxis-label " + u2.style.cssClass, maxWidth: u2.maxWidth });
        l2.add(x3), x3.on("click", (function(t4) {
          if ("function" == typeof s2.config.chart.events.xAxisLabelClick) {
            var e3 = Object.assign({}, s2, { labelIndex: n3 });
            s2.config.chart.events.xAxisLabelClick(t4, a3.ctx, e3);
          }
        }));
        var b3 = document.createElementNS(s2.globals.SVGNS, "title");
        if (b3.textContent = Array.isArray(o3) ? o3.join(" ") : o3, x3.node.appendChild(b3), 0 !== s2.config.yaxis[t3].labels.rotate) {
          var m3 = r2.rotateAroundCenter(x3.node);
          x3.node.setAttribute("transform", "rotate(".concat(s2.config.yaxis[t3].labels.rotate, " 0 ").concat(m3.y, ")"));
        }
        i3 += e2;
      }, p2 = 0; p2 <= h2.length - 1; p2++) g2(p2);
      if (void 0 !== s2.config.yaxis[0].title.text) {
        var f2 = r2.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + n2 + ", 0)" }), x2 = r2.drawText({ x: s2.config.yaxis[0].title.offsetX, y: s2.globals.gridHeight / 2 + s2.config.yaxis[0].title.offsetY, text: s2.config.yaxis[0].title.text, textAnchor: "middle", foreColor: s2.config.yaxis[0].title.style.color, fontSize: s2.config.yaxis[0].title.style.fontSize, fontWeight: s2.config.yaxis[0].title.style.fontWeight, fontFamily: s2.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + s2.config.yaxis[0].title.style.cssClass });
        f2.add(x2), o2.add(f2);
      }
      var b2 = 0;
      this.isCategoryBarHorizontal && s2.config.yaxis[0].opposite && (b2 = s2.globals.gridWidth);
      var m2 = s2.config.xaxis.axisBorder;
      if (m2.show) {
        var v2 = r2.drawLine(s2.globals.padHorizontal + m2.offsetX + b2, 1 + m2.offsetY, s2.globals.padHorizontal + m2.offsetX + b2, s2.globals.gridHeight + m2.offsetY, m2.color, 0);
        this.elgrid && this.elgrid.elGridBorders && s2.config.grid.show ? this.elgrid.elGridBorders.add(v2) : o2.add(v2);
      }
      return s2.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(b2, h2.length, s2.config.yaxis[0].axisBorder, s2.config.yaxis[0].axisTicks, 0, e2, o2), o2;
    } }, { key: "drawXaxisTicks", value: function(t3, e2, i3) {
      var a3 = this.w, s2 = t3;
      if (!(t3 < 0 || t3 - 2 > a3.globals.gridWidth)) {
        var r2 = this.offY + a3.config.xaxis.axisTicks.offsetY;
        if (e2 = e2 + r2 + a3.config.xaxis.axisTicks.height, "top" === a3.config.xaxis.position && (e2 = r2 - a3.config.xaxis.axisTicks.height), a3.config.xaxis.axisTicks.show) {
          var n2 = new Mi(this.ctx).drawLine(t3 + a3.config.xaxis.axisTicks.offsetX, r2 + a3.config.xaxis.offsetY, s2 + a3.config.xaxis.axisTicks.offsetX, e2 + a3.config.xaxis.offsetY, a3.config.xaxis.axisTicks.color);
          i3.add(n2), n2.node.classList.add("apexcharts-xaxis-tick");
        }
      }
    } }, { key: "getXAxisTicksPositions", value: function() {
      var t3 = this.w, e2 = [], i3 = this.xaxisLabels.length, a3 = t3.globals.padHorizontal;
      if (t3.globals.timescaleLabels.length > 0) for (var s2 = 0; s2 < i3; s2++) a3 = this.xaxisLabels[s2].position, e2.push(a3);
      else for (var r2 = i3, n2 = 0; n2 < r2; n2++) {
        var o2 = r2;
        t3.globals.isXNumeric && "bar" !== t3.config.chart.type && (o2 -= 1), a3 += t3.globals.gridWidth / o2, e2.push(a3);
      }
      return e2;
    } }, { key: "xAxisLabelCorrections", value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i3 = t3.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a3 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), s2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
      if (t3.globals.rotateXLabels || t3.config.xaxis.labels.rotateAlways) for (var n2 = 0; n2 < a3.length; n2++) {
        var o2 = e2.rotateAroundCenter(a3[n2]);
        o2.y = o2.y - 1, o2.x = o2.x + 1, a3[n2].setAttribute("transform", "rotate(".concat(t3.config.xaxis.labels.rotate, " ").concat(o2.x, " ").concat(o2.y, ")")), a3[n2].setAttribute("text-anchor", "end");
        i3.setAttribute("transform", "translate(0, ".concat(-10, ")"));
        var l2 = a3[n2].childNodes;
        t3.config.xaxis.labels.trim && Array.prototype.forEach.call(l2, (function(i4) {
          e2.placeTextWithEllipsis(i4, i4.textContent, t3.globals.xAxisLabelsHeight - ("bottom" === t3.config.legend.position ? 20 : 10));
        }));
      }
      else !(function() {
        for (var i4 = t3.globals.gridWidth / (t3.globals.labels.length + 1), s3 = 0; s3 < a3.length; s3++) {
          var r3 = a3[s3].childNodes;
          t3.config.xaxis.labels.trim && "datetime" !== t3.config.xaxis.type && Array.prototype.forEach.call(r3, (function(t4) {
            e2.placeTextWithEllipsis(t4, t4.textContent, i4);
          }));
        }
      })();
      if (s2.length > 0) {
        var h2 = s2[s2.length - 1].getBBox(), c2 = s2[0].getBBox();
        h2.x < -20 && s2[s2.length - 1].parentNode.removeChild(s2[s2.length - 1]), c2.x + c2.width > t3.globals.gridWidth && !t3.globals.isBarHorizontal && s2[0].parentNode.removeChild(s2[0]);
        for (var d2 = 0; d2 < r2.length; d2++) e2.placeTextWithEllipsis(r2[d2], r2[d2].textContent, t3.config.yaxis[0].labels.maxWidth - (t3.config.yaxis[0].title.text ? 2 * parseFloat(t3.config.yaxis[0].title.style.fontSize) : 0) - 15);
      }
    } }]), t2;
  })(), ta = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
      var a3 = this.w;
      this.xaxisLabels = a3.globals.labels.slice(), this.axesUtils = new Ri(e2), this.isRangeBar = a3.globals.seriesRange.length && a3.globals.isBarHorizontal, a3.globals.timescaleLabels.length > 0 && (this.xaxisLabels = a3.globals.timescaleLabels.slice());
    }
    return s(t2, [{ key: "drawGridArea", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e2 = this.w, i3 = new Mi(this.ctx);
      t3 || (t3 = i3.group({ class: "apexcharts-grid" }));
      var a3 = i3.drawLine(e2.globals.padHorizontal, 1, e2.globals.padHorizontal, e2.globals.gridHeight, "transparent"), s2 = i3.drawLine(e2.globals.padHorizontal, e2.globals.gridHeight, e2.globals.gridWidth, e2.globals.gridHeight, "transparent");
      return t3.add(s2), t3.add(a3), t3;
    } }, { key: "drawGrid", value: function() {
      if (this.w.globals.axisCharts) {
        var t3 = this.renderGrid();
        return this.drawGridArea(t3.el), t3;
      }
      return null;
    } }, { key: "createGridMask", value: function() {
      var t3 = this.w, e2 = t3.globals, i3 = new Mi(this.ctx), a3 = Array.isArray(t3.config.stroke.width) ? Math.max.apply(Math, f(t3.config.stroke.width)) : t3.config.stroke.width, s2 = function(t4) {
        var i4 = document.createElementNS(e2.SVGNS, "clipPath");
        return i4.setAttribute("id", t4), i4;
      };
      e2.dom.elGridRectMask = s2("gridRectMask".concat(e2.cuid)), e2.dom.elGridRectBarMask = s2("gridRectBarMask".concat(e2.cuid)), e2.dom.elGridRectMarkerMask = s2("gridRectMarkerMask".concat(e2.cuid)), e2.dom.elForecastMask = s2("forecastMask".concat(e2.cuid)), e2.dom.elNonForecastMask = s2("nonForecastMask".concat(e2.cuid));
      var r2 = 0, n2 = 0;
      (["bar", "rangeBar", "candlestick", "boxPlot"].includes(t3.config.chart.type) || t3.globals.comboBarCount > 0) && t3.globals.isXNumeric && !t3.globals.isBarHorizontal && (r2 = Math.max(t3.config.grid.padding.left, e2.barPadForNumericAxis), n2 = Math.max(t3.config.grid.padding.right, e2.barPadForNumericAxis)), e2.dom.elGridRect = i3.drawRect(-a3 / 2 - 2, -a3 / 2 - 2, e2.gridWidth + a3 + 4, e2.gridHeight + a3 + 4, 0, "#fff"), e2.dom.elGridRectBar = i3.drawRect(-a3 / 2 - r2 - 2, -a3 / 2 - 2, e2.gridWidth + a3 + n2 + r2 + 4, e2.gridHeight + a3 + 4, 0, "#fff");
      var o2 = t3.globals.markers.largestSize;
      e2.dom.elGridRectMarker = i3.drawRect(Math.min(-a3 / 2 - r2 - 2, -o2), -o2, e2.gridWidth + Math.max(a3 + n2 + r2 + 4, 2 * o2), e2.gridHeight + 2 * o2, 0, "#fff"), e2.dom.elGridRectMask.appendChild(e2.dom.elGridRect.node), e2.dom.elGridRectBarMask.appendChild(e2.dom.elGridRectBar.node), e2.dom.elGridRectMarkerMask.appendChild(e2.dom.elGridRectMarker.node);
      var l2 = e2.dom.baseEl.querySelector("defs");
      l2.appendChild(e2.dom.elGridRectMask), l2.appendChild(e2.dom.elGridRectBarMask), l2.appendChild(e2.dom.elGridRectMarkerMask), l2.appendChild(e2.dom.elForecastMask), l2.appendChild(e2.dom.elNonForecastMask);
    } }, { key: "_drawGridLines", value: function(t3) {
      var e2 = t3.i, i3 = t3.x1, a3 = t3.y1, s2 = t3.x2, r2 = t3.y2, n2 = t3.xCount, o2 = t3.parent, l2 = this.w;
      if (!(0 === e2 && l2.globals.skipFirstTimelinelabel || e2 === n2 - 1 && l2.globals.skipLastTimelinelabel && !l2.config.xaxis.labels.formatter || "radar" === l2.config.chart.type)) {
        l2.config.grid.xaxis.lines.show && this._drawGridLine({ i: e2, x1: i3, y1: a3, x2: s2, y2: r2, xCount: n2, parent: o2 });
        var h2 = 0;
        if (l2.globals.hasXaxisGroups && "between" === l2.config.xaxis.tickPlacement) {
          var c2 = l2.globals.groups;
          if (c2) {
            for (var d2 = 0, u2 = 0; d2 < e2 && u2 < c2.length; u2++) d2 += c2[u2].cols;
            d2 === e2 && (h2 = 0.6 * l2.globals.xAxisLabelsHeight);
          }
        }
        new Ki(this.ctx).drawXaxisTicks(i3, h2, l2.globals.dom.elGraphical);
      }
    } }, { key: "_drawGridLine", value: function(t3) {
      var e2 = t3.i, i3 = t3.x1, a3 = t3.y1, s2 = t3.x2, r2 = t3.y2, n2 = t3.xCount, o2 = t3.parent, l2 = this.w, h2 = o2.node.classList.contains("apexcharts-gridlines-horizontal"), c2 = l2.globals.barPadForNumericAxis, d2 = 0 === a3 && 0 === r2 || 0 === i3 && 0 === s2 || a3 === l2.globals.gridHeight && r2 === l2.globals.gridHeight || l2.globals.isBarHorizontal && (0 === e2 || e2 === n2 - 1), u2 = new Mi(this).drawLine(i3 - (h2 ? c2 : 0), a3, s2 + (h2 ? c2 : 0), r2, l2.config.grid.borderColor, l2.config.grid.strokeDashArray);
      u2.node.classList.add("apexcharts-gridline"), d2 && l2.config.grid.show ? this.elGridBorders.add(u2) : o2.add(u2);
    } }, { key: "_drawGridBandRect", value: function(t3) {
      var e2 = t3.c, i3 = t3.x1, a3 = t3.y1, s2 = t3.x2, r2 = t3.y2, n2 = t3.type, o2 = this.w, l2 = new Mi(this.ctx), h2 = o2.globals.barPadForNumericAxis, c2 = o2.config.grid[n2].colors[e2], d2 = l2.drawRect(i3 - ("row" === n2 ? h2 : 0), a3, s2 + ("row" === n2 ? 2 * h2 : 0), r2, 0, c2, o2.config.grid[n2].opacity);
      this.elg.add(d2), d2.attr("clip-path", "url(#gridRectMask".concat(o2.globals.cuid, ")")), d2.node.classList.add("apexcharts-grid-".concat(n2));
    } }, { key: "_drawXYLines", value: function(t3) {
      var e2 = this, i3 = t3.xCount, a3 = t3.tickAmount, s2 = this.w;
      if (s2.config.grid.xaxis.lines.show || s2.config.xaxis.axisTicks.show) {
        var r2, n2 = s2.globals.padHorizontal, o2 = s2.globals.gridHeight;
        s2.globals.timescaleLabels.length ? (function(t4) {
          for (var a4 = t4.xC, s3 = t4.x1, r3 = t4.y1, n3 = t4.x2, o3 = t4.y2, l3 = 0; l3 < a4; l3++) s3 = e2.xaxisLabels[l3].position, n3 = e2.xaxisLabels[l3].position, e2._drawGridLines({ i: l3, x1: s3, y1: r3, x2: n3, y2: o3, xCount: i3, parent: e2.elgridLinesV });
        })({ xC: i3, x1: n2, y1: 0, x2: r2, y2: o2 }) : (s2.globals.isXNumeric && (i3 = s2.globals.xAxisScale.result.length), (function(t4) {
          for (var a4 = t4.xC, r3 = t4.x1, n3 = t4.y1, o3 = t4.x2, l3 = t4.y2, h3 = 0; h3 < a4 + (s2.globals.isXNumeric ? 0 : 1); h3++) 0 === h3 && 1 === a4 && 1 === s2.globals.dataPoints && (o3 = r3 = s2.globals.gridWidth / 2), e2._drawGridLines({ i: h3, x1: r3, y1: n3, x2: o3, y2: l3, xCount: i3, parent: e2.elgridLinesV }), o3 = r3 += s2.globals.gridWidth / (s2.globals.isXNumeric ? a4 - 1 : a4);
        })({ xC: i3, x1: n2, y1: 0, x2: r2, y2: o2 }));
      }
      if (s2.config.grid.yaxis.lines.show) {
        var l2 = 0, h2 = 0, c2 = s2.globals.gridWidth, d2 = a3 + 1;
        this.isRangeBar && (d2 = s2.globals.labels.length);
        for (var u2 = 0; u2 < d2 + (this.isRangeBar ? 1 : 0); u2++) this._drawGridLine({ i: u2, xCount: d2 + (this.isRangeBar ? 1 : 0), x1: 0, y1: l2, x2: c2, y2: h2, parent: this.elgridLinesH }), h2 = l2 += s2.globals.gridHeight / (this.isRangeBar ? d2 : a3);
      }
    } }, { key: "_drawInvertedXYLines", value: function(t3) {
      var e2 = t3.xCount, i3 = this.w;
      if (i3.config.grid.xaxis.lines.show || i3.config.xaxis.axisTicks.show) for (var a3, s2 = i3.globals.padHorizontal, r2 = i3.globals.gridHeight, n2 = 0; n2 < e2 + 1; n2++) {
        i3.config.grid.xaxis.lines.show && this._drawGridLine({ i: n2, xCount: e2 + 1, x1: s2, y1: 0, x2: a3, y2: r2, parent: this.elgridLinesV }), new Ki(this.ctx).drawXaxisTicks(s2, 0, i3.globals.dom.elGraphical), a3 = s2 += i3.globals.gridWidth / e2;
      }
      if (i3.config.grid.yaxis.lines.show) for (var o2 = 0, l2 = 0, h2 = i3.globals.gridWidth, c2 = 0; c2 < i3.globals.dataPoints + 1; c2++) this._drawGridLine({ i: c2, xCount: i3.globals.dataPoints + 1, x1: 0, y1: o2, x2: h2, y2: l2, parent: this.elgridLinesH }), l2 = o2 += i3.globals.gridHeight / i3.globals.dataPoints;
    } }, { key: "renderGrid", value: function() {
      var t3 = this.w, e2 = t3.globals, i3 = new Mi(this.ctx);
      this.elg = i3.group({ class: "apexcharts-grid" }), this.elgridLinesH = i3.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = i3.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = i3.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t3.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
      for (var a3 = 0; a3 < e2.seriesYAxisMap.length && e2.ignoreYAxisIndexes.includes(a3); ) a3++;
      a3 === e2.seriesYAxisMap.length && (a3 = 0);
      var s2, r2 = e2.yAxisScale[a3].result.length - 1;
      if (!e2.isBarHorizontal || this.isRangeBar) {
        var n2, o2, l2;
        if (s2 = this.xaxisLabels.length, this.isRangeBar) r2 = e2.labels.length, t3.config.xaxis.tickAmount && t3.config.xaxis.labels.formatter && (s2 = t3.config.xaxis.tickAmount), (null === (n2 = e2.yAxisScale) || void 0 === n2 || null === (o2 = n2[a3]) || void 0 === o2 || null === (l2 = o2.result) || void 0 === l2 ? void 0 : l2.length) > 0 && "datetime" !== t3.config.xaxis.type && (s2 = e2.yAxisScale[a3].result.length - 1);
        this._drawXYLines({ xCount: s2, tickAmount: r2 });
      } else s2 = r2, r2 = e2.xTickAmount, this._drawInvertedXYLines({ xCount: s2, tickAmount: r2 });
      return this.drawGridBands(s2, r2), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: e2.gridWidth / s2 };
    } }, { key: "drawGridBands", value: function(t3, e2) {
      var i3, a3, s2 = this, r2 = this.w;
      if ((null === (i3 = r2.config.grid.row.colors) || void 0 === i3 ? void 0 : i3.length) > 0 && (function(t4, i4, a4, n3, o3, l3) {
        for (var h3 = 0, c3 = 0; h3 < i4; h3++, c3++) c3 >= r2.config.grid[t4].colors.length && (c3 = 0), s2._drawGridBandRect({ c: c3, x1: a4, y1: n3, x2: o3, y2: l3, type: t4 }), n3 += r2.globals.gridHeight / e2;
      })("row", e2, 0, 0, r2.globals.gridWidth, r2.globals.gridHeight / e2), (null === (a3 = r2.config.grid.column.colors) || void 0 === a3 ? void 0 : a3.length) > 0) {
        var n2 = r2.globals.isBarHorizontal || "on" !== r2.config.xaxis.tickPlacement || "category" !== r2.config.xaxis.type && !r2.config.xaxis.convertedCatToNumeric ? t3 : t3 - 1;
        r2.globals.isXNumeric && (n2 = r2.globals.xAxisScale.result.length - 1);
        for (var o2 = r2.globals.padHorizontal, l2 = r2.globals.padHorizontal + r2.globals.gridWidth / n2, h2 = r2.globals.gridHeight, c2 = 0, d2 = 0; c2 < t3; c2++, d2++) {
          var u2;
          if (d2 >= r2.config.grid.column.colors.length && (d2 = 0), "datetime" === r2.config.xaxis.type) o2 = this.xaxisLabels[c2].position, l2 = ((null === (u2 = this.xaxisLabels[c2 + 1]) || void 0 === u2 ? void 0 : u2.position) || r2.globals.gridWidth) - this.xaxisLabels[c2].position;
          this._drawGridBandRect({ c: d2, x1: o2, y1: 0, x2: l2, y2: h2, type: "column" }), o2 += r2.globals.gridWidth / n2;
        }
      }
    } }]), t2;
  })(), ea = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.coreUtils = new Pi(this.ctx);
    }
    return s(t2, [{ key: "niceScale", value: function(t3, e2) {
      var i3, a3, s2, r2, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o2 = 1e-11, l2 = this.w, h2 = l2.globals;
      h2.isBarHorizontal ? (i3 = l2.config.xaxis, a3 = Math.max((h2.svgWidth - 100) / 25, 2)) : (i3 = l2.config.yaxis[n2], a3 = Math.max((h2.svgHeight - 100) / 15, 2)), v.isNumber(a3) || (a3 = 10), s2 = void 0 !== i3.min && null !== i3.min, r2 = void 0 !== i3.max && null !== i3.min;
      var c2 = void 0 !== i3.stepSize && null !== i3.stepSize, d2 = void 0 !== i3.tickAmount && null !== i3.tickAmount, u2 = d2 ? i3.tickAmount : h2.niceScaleDefaultTicks[Math.min(Math.round(a3 / 2), h2.niceScaleDefaultTicks.length - 1)];
      if (h2.isMultipleYAxis && !d2 && h2.multiAxisTickAmount > 0 && (u2 = h2.multiAxisTickAmount, d2 = true), u2 = "dataPoints" === u2 ? h2.dataPoints - 1 : Math.abs(Math.round(u2)), (t3 === Number.MIN_VALUE && 0 === e2 || !v.isNumber(t3) && !v.isNumber(e2) || t3 === Number.MIN_VALUE && e2 === -Number.MAX_VALUE) && (t3 = v.isNumber(i3.min) ? i3.min : 0, e2 = v.isNumber(i3.max) ? i3.max : t3 + u2, h2.allSeriesCollapsed = false), t3 > e2) {
        console.warn("axis.min cannot be greater than axis.max: swapping min and max");
        var g2 = e2;
        e2 = t3, t3 = g2;
      } else t3 === e2 && (t3 = 0 === t3 ? 0 : t3 - 1, e2 = 0 === e2 ? 2 : e2 + 1);
      var p2 = [];
      u2 < 1 && (u2 = 1);
      var f2 = u2, x2 = Math.abs(e2 - t3);
      !s2 && t3 > 0 && t3 / x2 < 0.15 && (t3 = 0, s2 = true), !r2 && e2 < 0 && -e2 / x2 < 0.15 && (e2 = 0, r2 = true);
      var b2 = (x2 = Math.abs(e2 - t3)) / f2, m2 = b2, y2 = Math.floor(Math.log10(m2)), w2 = Math.pow(10, y2), k2 = Math.ceil(m2 / w2);
      if (b2 = m2 = (k2 = h2.niceScaleAllowedMagMsd[0 === h2.yValueDecimal ? 0 : 1][k2]) * w2, h2.isBarHorizontal && i3.stepSize && "datetime" !== i3.type ? (b2 = i3.stepSize, c2 = true) : c2 && (b2 = i3.stepSize), c2 && i3.forceNiceScale) {
        var A2 = Math.floor(Math.log10(b2));
        b2 *= Math.pow(10, y2 - A2);
      }
      if (s2 && r2) {
        var C2 = x2 / f2;
        if (d2) if (c2) if (0 != v.mod(x2, b2)) {
          var S2 = v.getGCD(b2, C2);
          b2 = C2 / S2 < 10 ? S2 : C2;
        } else 0 == v.mod(b2, C2) ? b2 = C2 : (C2 = b2, d2 = false);
        else b2 = C2;
        else if (c2) 0 == v.mod(x2, b2) ? C2 = b2 : b2 = C2;
        else if (0 == v.mod(x2, b2)) C2 = b2;
        else {
          C2 = x2 / (f2 = Math.ceil(x2 / b2));
          var L2 = v.getGCD(x2, b2);
          x2 / L2 < a3 && (C2 = L2), b2 = C2;
        }
        f2 = Math.round(x2 / b2);
      } else {
        if (s2 || r2) {
          if (r2) if (d2) t3 = e2 - b2 * f2;
          else {
            var M2 = t3;
            t3 = b2 * Math.floor(t3 / b2), Math.abs(e2 - t3) / v.getGCD(x2, b2) > a3 && (t3 = e2 - b2 * u2, t3 += b2 * Math.floor((M2 - t3) / b2));
          }
          else if (s2) if (d2) e2 = t3 + b2 * f2;
          else {
            var P2 = e2;
            e2 = b2 * Math.ceil(e2 / b2), Math.abs(e2 - t3) / v.getGCD(x2, b2) > a3 && (e2 = t3 + b2 * u2, e2 += b2 * Math.ceil((P2 - e2) / b2));
          }
        } else if (h2.isMultipleYAxis && d2) {
          var I2 = b2 * Math.floor(t3 / b2), T2 = I2 + b2 * f2;
          T2 < e2 && (b2 *= 2), T2 = e2, e2 = (t3 = I2) + b2 * f2, x2 = Math.abs(e2 - t3), t3 > 0 && t3 < Math.abs(T2 - e2) && (t3 = 0, e2 = b2 * f2), e2 < 0 && -e2 < Math.abs(I2 - t3) && (e2 = 0, t3 = -b2 * f2);
        } else t3 = b2 * Math.floor(t3 / b2), e2 = b2 * Math.ceil(e2 / b2);
        x2 = Math.abs(e2 - t3), b2 = v.getGCD(x2, b2), f2 = Math.round(x2 / b2);
      }
      if (d2 || s2 || r2 || (f2 = Math.ceil((x2 - o2) / (b2 + o2))) > 16 && v.getPrimeFactors(f2).length < 2 && f2++, !d2 && i3.forceNiceScale && 0 === h2.yValueDecimal && f2 > x2 && (f2 = x2, b2 = Math.round(x2 / f2)), f2 > a3 && (!d2 && !c2 || i3.forceNiceScale)) {
        var z2 = v.getPrimeFactors(f2), X2 = z2.length - 1, R2 = f2;
        t: for (var E2 = 0; E2 < X2; E2++) for (var Y2 = 0; Y2 <= X2 - E2; Y2++) {
          for (var H2 = Math.min(Y2 + E2, X2), O2 = R2, F2 = 1, D2 = Y2; D2 <= H2; D2++) F2 *= z2[D2];
          if ((O2 /= F2) < a3) {
            R2 = O2;
            break t;
          }
        }
        b2 = R2 === f2 ? x2 : x2 / R2, f2 = Math.round(x2 / b2);
      }
      h2.isMultipleYAxis && 0 == h2.multiAxisTickAmount && h2.ignoreYAxisIndexes.indexOf(n2) < 0 && (h2.multiAxisTickAmount = f2);
      var _2 = t3 - b2, N2 = b2 * o2;
      do {
        _2 += b2, p2.push(v.stripNumber(_2, 7));
      } while (e2 - _2 > N2);
      return { result: p2, niceMin: p2[0], niceMax: p2[p2.length - 1] };
    } }, { key: "linearScale", value: function(t3, e2) {
      var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, r2 = Math.abs(e2 - t3), n2 = [];
      if (t3 === e2) return { result: n2 = [t3], niceMin: n2[0], niceMax: n2[n2.length - 1] };
      "dataPoints" === (i3 = this._adjustTicksForSmallRange(i3, a3, r2)) && (i3 = this.w.globals.dataPoints - 1), s2 || (s2 = r2 / i3), s2 = Math.round(100 * (s2 + Number.EPSILON)) / 100, i3 === Number.MAX_VALUE && (i3 = 5, s2 = 1);
      for (var o2 = t3; i3 >= 0; ) n2.push(o2), o2 = v.preciseAddition(o2, s2), i3 -= 1;
      return { result: n2, niceMin: n2[0], niceMax: n2[n2.length - 1] };
    } }, { key: "logarithmicScaleNice", value: function(t3, e2, i3) {
      e2 <= 0 && (e2 = Math.max(t3, i3)), t3 <= 0 && (t3 = Math.min(e2, i3));
      for (var a3 = [], s2 = Math.ceil(Math.log(e2) / Math.log(i3) + 1), r2 = Math.floor(Math.log(t3) / Math.log(i3)); r2 < s2; r2++) a3.push(Math.pow(i3, r2));
      return { result: a3, niceMin: a3[0], niceMax: a3[a3.length - 1] };
    } }, { key: "logarithmicScale", value: function(t3, e2, i3) {
      e2 <= 0 && (e2 = Math.max(t3, i3)), t3 <= 0 && (t3 = Math.min(e2, i3));
      for (var a3 = [], s2 = Math.log(e2) / Math.log(i3), r2 = Math.log(t3) / Math.log(i3), n2 = s2 - r2, o2 = Math.round(n2), l2 = n2 / o2, h2 = 0, c2 = r2; h2 < o2; h2++, c2 += l2) a3.push(Math.pow(i3, c2));
      return a3.push(Math.pow(i3, s2)), { result: a3, niceMin: t3, niceMax: e2 };
    } }, { key: "_adjustTicksForSmallRange", value: function(t3, e2, i3) {
      var a3 = t3;
      if (void 0 !== e2 && this.w.config.yaxis[e2].labels.formatter && void 0 === this.w.config.yaxis[e2].tickAmount) {
        var s2 = Number(this.w.config.yaxis[e2].labels.formatter(1));
        v.isNumber(s2) && 0 === this.w.globals.yValueDecimal && (a3 = Math.ceil(i3));
      }
      return a3 < t3 ? a3 : t3;
    } }, { key: "setYScaleForIndex", value: function(t3, e2, i3) {
      var a3 = this.w.globals, s2 = this.w.config, r2 = a3.isBarHorizontal ? s2.xaxis : s2.yaxis[t3];
      void 0 === a3.yAxisScale[t3] && (a3.yAxisScale[t3] = []);
      var n2 = Math.abs(i3 - e2);
      r2.logarithmic && n2 <= 5 && (a3.invalidLogScale = true), r2.logarithmic && n2 > 5 ? (a3.allSeriesCollapsed = false, a3.yAxisScale[t3] = r2.forceNiceScale ? this.logarithmicScaleNice(e2, i3, r2.logBase) : this.logarithmicScale(e2, i3, r2.logBase)) : i3 !== -Number.MAX_VALUE && v.isNumber(i3) && e2 !== Number.MAX_VALUE && v.isNumber(e2) ? (a3.allSeriesCollapsed = false, a3.yAxisScale[t3] = this.niceScale(e2, i3, t3)) : a3.yAxisScale[t3] = this.niceScale(Number.MIN_VALUE, 0, t3);
    } }, { key: "setXScale", value: function(t3, e2) {
      var i3 = this.w, a3 = i3.globals;
      if (e2 !== -Number.MAX_VALUE && v.isNumber(e2)) {
        var s2 = a3.xTickAmount;
        a3.xAxisScale = this.linearScale(t3, e2, s2, 0, void 0 === i3.config.xaxis.max ? i3.config.xaxis.stepSize : void 0);
      } else a3.xAxisScale = this.linearScale(0, 10, 10);
      return a3.xAxisScale;
    } }, { key: "scaleMultipleYAxes", value: function() {
      var t3 = this, e2 = this.w.config, i3 = this.w.globals;
      this.coreUtils.setSeriesYAxisMappings();
      var a3 = i3.seriesYAxisMap, s2 = i3.minYArr, r2 = i3.maxYArr;
      i3.allSeriesCollapsed = true, i3.barGroups = [], a3.forEach((function(a4, n2) {
        var o2 = [];
        a4.forEach((function(t4) {
          var i4, a5 = null === (i4 = e2.series[t4]) || void 0 === i4 ? void 0 : i4.group;
          o2.indexOf(a5) < 0 && o2.push(a5);
        })), a4.length > 0 ? (function() {
          var l2, h2, c2 = Number.MAX_VALUE, d2 = -Number.MAX_VALUE, u2 = c2, g2 = d2;
          if (e2.chart.stacked) !(function() {
            var t4 = new Array(i3.dataPoints).fill(0), s3 = [], r3 = [], p3 = [];
            o2.forEach((function() {
              s3.push(t4.map((function() {
                return Number.MIN_VALUE;
              }))), r3.push(t4.map((function() {
                return Number.MIN_VALUE;
              }))), p3.push(t4.map((function() {
                return Number.MIN_VALUE;
              })));
            }));
            for (var f3 = function(t5) {
              !l2 && e2.series[a4[t5]].type && (l2 = e2.series[a4[t5]].type);
              var c3 = a4[t5];
              h2 = e2.series[c3].group ? e2.series[c3].group : "axis-".concat(n2), !(i3.collapsedSeriesIndices.indexOf(c3) < 0 && i3.ancillaryCollapsedSeriesIndices.indexOf(c3) < 0) || (i3.allSeriesCollapsed = false, o2.forEach((function(t6, a5) {
                if (e2.series[c3].group === t6) for (var n3 = 0; n3 < i3.series[c3].length; n3++) {
                  var o3 = i3.series[c3][n3];
                  o3 >= 0 ? r3[a5][n3] += o3 : p3[a5][n3] += o3, s3[a5][n3] += o3, u2 = Math.min(u2, o3), g2 = Math.max(g2, o3);
                }
              }))), "bar" !== l2 && "column" !== l2 || i3.barGroups.push(h2);
            }, x2 = 0; x2 < a4.length; x2++) f3(x2);
            l2 || (l2 = e2.chart.type), "bar" === l2 || "column" === l2 ? o2.forEach((function(t5, e3) {
              c2 = Math.min(c2, Math.min.apply(null, p3[e3])), d2 = Math.max(d2, Math.max.apply(null, r3[e3]));
            })) : (o2.forEach((function(t5, e3) {
              u2 = Math.min(u2, Math.min.apply(null, s3[e3])), g2 = Math.max(g2, Math.max.apply(null, s3[e3]));
            })), c2 = u2, d2 = g2), c2 === Number.MIN_VALUE && d2 === Number.MIN_VALUE && (d2 = -Number.MAX_VALUE);
          })();
          else for (var p2 = 0; p2 < a4.length; p2++) {
            var f2 = a4[p2];
            c2 = Math.min(c2, s2[f2]), d2 = Math.max(d2, r2[f2]), !(i3.collapsedSeriesIndices.indexOf(f2) < 0 && i3.ancillaryCollapsedSeriesIndices.indexOf(f2) < 0) || (i3.allSeriesCollapsed = false);
          }
          void 0 !== e2.yaxis[n2].min && (c2 = "function" == typeof e2.yaxis[n2].min ? e2.yaxis[n2].min(c2) : e2.yaxis[n2].min), void 0 !== e2.yaxis[n2].max && (d2 = "function" == typeof e2.yaxis[n2].max ? e2.yaxis[n2].max(d2) : e2.yaxis[n2].max), i3.barGroups = i3.barGroups.filter((function(t4, e3, i4) {
            return i4.indexOf(t4) === e3;
          })), t3.setYScaleForIndex(n2, c2, d2), a4.forEach((function(t4) {
            s2[t4] = i3.yAxisScale[n2].niceMin, r2[t4] = i3.yAxisScale[n2].niceMax;
          }));
        })() : t3.setYScaleForIndex(n2, 0, -Number.MAX_VALUE);
      }));
    } }]), t2;
  })(), ia = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.scales = new ea(e2);
    }
    return s(t2, [{ key: "init", value: function() {
      this.setYRange(), this.setXRange(), this.setZRange();
    } }, { key: "getMinYMaxY", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE, a3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s2 = this.w.config, r2 = this.w.globals, n2 = -Number.MAX_VALUE, o2 = Number.MIN_VALUE;
      null === a3 && (a3 = t3 + 1);
      var l2 = r2.series, h2 = l2, c2 = l2;
      "candlestick" === s2.chart.type ? (h2 = r2.seriesCandleL, c2 = r2.seriesCandleH) : "boxPlot" === s2.chart.type ? (h2 = r2.seriesCandleO, c2 = r2.seriesCandleC) : r2.isRangeData && (h2 = r2.seriesRangeStart, c2 = r2.seriesRangeEnd);
      var d2 = false;
      if (r2.seriesX.length >= a3) {
        var u2, g2 = null === (u2 = r2.brushSource) || void 0 === u2 ? void 0 : u2.w.config.chart.brush;
        (s2.chart.zoom.enabled && s2.chart.zoom.autoScaleYaxis || null != g2 && g2.enabled && null != g2 && g2.autoScaleYaxis) && (d2 = true);
      }
      for (var p2 = t3; p2 < a3; p2++) {
        r2.dataPoints = Math.max(r2.dataPoints, l2[p2].length);
        var f2 = s2.series[p2].type;
        r2.categoryLabels.length && (r2.dataPoints = r2.categoryLabels.filter((function(t4) {
          return void 0 !== t4;
        })).length), r2.labels.length && "datetime" !== s2.xaxis.type && 0 !== r2.series.reduce((function(t4, e3) {
          return t4 + e3.length;
        }), 0) && (r2.dataPoints = Math.max(r2.dataPoints, r2.labels.length));
        var x2 = 0, b2 = l2[p2].length - 1;
        if (d2) {
          if (s2.xaxis.min) for (; x2 < b2 && r2.seriesX[p2][x2] < s2.xaxis.min; x2++) ;
          if (s2.xaxis.max) for (; b2 > x2 && r2.seriesX[p2][b2] > s2.xaxis.max; b2--) ;
        }
        for (var m2 = x2; m2 <= b2 && m2 < r2.series[p2].length; m2++) {
          var y2 = l2[p2][m2];
          if (null !== y2 && v.isNumber(y2)) {
            var w2, k2, A2, C2;
            switch (void 0 !== (null === (w2 = c2[p2]) || void 0 === w2 ? void 0 : w2[m2]) && (n2 = Math.max(n2, c2[p2][m2]), e2 = Math.min(e2, c2[p2][m2])), void 0 !== (null === (k2 = h2[p2]) || void 0 === k2 ? void 0 : k2[m2]) && (e2 = Math.min(e2, h2[p2][m2]), i3 = Math.max(i3, h2[p2][m2])), f2) {
              case "candlestick":
                void 0 !== r2.seriesCandleC[p2][m2] && (n2 = Math.max(n2, r2.seriesCandleH[p2][m2]), e2 = Math.min(e2, r2.seriesCandleL[p2][m2]));
                break;
              case "boxPlot":
                void 0 !== r2.seriesCandleC[p2][m2] && (n2 = Math.max(n2, r2.seriesCandleC[p2][m2]), e2 = Math.min(e2, r2.seriesCandleO[p2][m2]));
            }
            f2 && "candlestick" !== f2 && "boxPlot" !== f2 && "rangeArea" !== f2 && "rangeBar" !== f2 && (n2 = Math.max(n2, r2.series[p2][m2]), e2 = Math.min(e2, r2.series[p2][m2])), r2.seriesGoals[p2] && r2.seriesGoals[p2][m2] && Array.isArray(r2.seriesGoals[p2][m2]) && r2.seriesGoals[p2][m2].forEach((function(t4) {
              n2 = Math.max(n2, t4.value), e2 = Math.min(e2, t4.value);
            })), i3 = n2, y2 = v.noExponents(y2), v.isFloat(y2) && (r2.yValueDecimal = Math.max(r2.yValueDecimal, y2.toString().split(".")[1].length)), o2 > (null === (A2 = h2[p2]) || void 0 === A2 ? void 0 : A2[m2]) && (null === (C2 = h2[p2]) || void 0 === C2 ? void 0 : C2[m2]) < 0 && (o2 = h2[p2][m2]);
          } else r2.hasNullValues = true;
        }
        "bar" !== f2 && "column" !== f2 || (o2 < 0 && n2 < 0 && (n2 = 0, i3 = Math.max(i3, 0)), o2 === Number.MIN_VALUE && (o2 = 0, e2 = Math.min(e2, 0)));
      }
      return "rangeBar" === s2.chart.type && r2.seriesRangeStart.length && r2.isBarHorizontal && (o2 = e2), "bar" === s2.chart.type && (o2 < 0 && n2 < 0 && (n2 = 0), o2 === Number.MIN_VALUE && (o2 = 0)), { minY: o2, maxY: n2, lowestY: e2, highestY: i3 };
    } }, { key: "setYRange", value: function() {
      var t3 = this.w.globals, e2 = this.w.config;
      t3.maxY = -Number.MAX_VALUE, t3.minY = Number.MIN_VALUE;
      var i3, a3 = Number.MAX_VALUE;
      if (t3.isMultipleYAxis) {
        a3 = Number.MAX_VALUE;
        for (var s2 = 0; s2 < t3.series.length; s2++) i3 = this.getMinYMaxY(s2), t3.minYArr[s2] = i3.lowestY, t3.maxYArr[s2] = i3.highestY, a3 = Math.min(a3, i3.lowestY);
      }
      if (i3 = this.getMinYMaxY(0, a3, null, t3.series.length), "bar" === e2.chart.type ? (t3.minY = i3.minY, t3.maxY = i3.maxY) : (t3.minY = i3.lowestY, t3.maxY = i3.highestY), a3 = i3.lowestY, e2.chart.stacked && this._setStackedMinMax(), "line" === e2.chart.type || "area" === e2.chart.type || "scatter" === e2.chart.type || "candlestick" === e2.chart.type || "boxPlot" === e2.chart.type || "rangeBar" === e2.chart.type && !t3.isBarHorizontal ? t3.minY === Number.MIN_VALUE && a3 !== -Number.MAX_VALUE && a3 !== t3.maxY && (t3.minY = a3) : t3.minY = t3.minY !== Number.MIN_VALUE ? Math.min(i3.minY, t3.minY) : i3.minY, e2.yaxis.forEach((function(e3, i4) {
        void 0 !== e3.max && ("number" == typeof e3.max ? t3.maxYArr[i4] = e3.max : "function" == typeof e3.max && (t3.maxYArr[i4] = e3.max(t3.isMultipleYAxis ? t3.maxYArr[i4] : t3.maxY)), t3.maxY = t3.maxYArr[i4]), void 0 !== e3.min && ("number" == typeof e3.min ? t3.minYArr[i4] = e3.min : "function" == typeof e3.min && (t3.minYArr[i4] = e3.min(t3.isMultipleYAxis ? t3.minYArr[i4] === Number.MIN_VALUE ? 0 : t3.minYArr[i4] : t3.minY)), t3.minY = t3.minYArr[i4]);
      })), t3.isBarHorizontal) {
        ["min", "max"].forEach((function(i4) {
          void 0 !== e2.xaxis[i4] && "number" == typeof e2.xaxis[i4] && ("min" === i4 ? t3.minY = e2.xaxis[i4] : t3.maxY = e2.xaxis[i4]);
        }));
      }
      return t3.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), t3.minY = a3) : (this.scales.setYScaleForIndex(0, t3.minY, t3.maxY), t3.minY = t3.yAxisScale[0].niceMin, t3.maxY = t3.yAxisScale[0].niceMax, t3.minYArr[0] = t3.minY, t3.maxYArr[0] = t3.maxY), t3.barGroups = [], t3.lineGroups = [], t3.areaGroups = [], e2.series.forEach((function(i4) {
        switch (i4.type || e2.chart.type) {
          case "bar":
          case "column":
            t3.barGroups.push(i4.group);
            break;
          case "line":
            t3.lineGroups.push(i4.group);
            break;
          case "area":
            t3.areaGroups.push(i4.group);
        }
      })), t3.barGroups = t3.barGroups.filter((function(t4, e3, i4) {
        return i4.indexOf(t4) === e3;
      })), t3.lineGroups = t3.lineGroups.filter((function(t4, e3, i4) {
        return i4.indexOf(t4) === e3;
      })), t3.areaGroups = t3.areaGroups.filter((function(t4, e3, i4) {
        return i4.indexOf(t4) === e3;
      })), { minY: t3.minY, maxY: t3.maxY, minYArr: t3.minYArr, maxYArr: t3.maxYArr, yAxisScale: t3.yAxisScale };
    } }, { key: "setXRange", value: function() {
      var t3 = this.w.globals, e2 = this.w.config, i3 = "numeric" === e2.xaxis.type || "datetime" === e2.xaxis.type || "category" === e2.xaxis.type && !t3.noLabelsProvided || t3.noLabelsProvided || t3.isXNumeric;
      if (t3.isXNumeric && (function() {
        for (var e3 = 0; e3 < t3.series.length; e3++) if (t3.labels[e3]) for (var i4 = 0; i4 < t3.labels[e3].length; i4++) null !== t3.labels[e3][i4] && v.isNumber(t3.labels[e3][i4]) && (t3.maxX = Math.max(t3.maxX, t3.labels[e3][i4]), t3.initialMaxX = Math.max(t3.maxX, t3.labels[e3][i4]), t3.minX = Math.min(t3.minX, t3.labels[e3][i4]), t3.initialMinX = Math.min(t3.minX, t3.labels[e3][i4]));
      })(), t3.noLabelsProvided && 0 === e2.xaxis.categories.length && (t3.maxX = t3.labels[t3.labels.length - 1], t3.initialMaxX = t3.labels[t3.labels.length - 1], t3.minX = 1, t3.initialMinX = 1), t3.isXNumeric || t3.noLabelsProvided || t3.dataFormatXNumeric) {
        var a3 = 10;
        if (void 0 === e2.xaxis.tickAmount) a3 = Math.round(t3.svgWidth / 150), "numeric" === e2.xaxis.type && t3.dataPoints < 30 && (a3 = t3.dataPoints - 1), a3 > t3.dataPoints && 0 !== t3.dataPoints && (a3 = t3.dataPoints - 1);
        else if ("dataPoints" === e2.xaxis.tickAmount) {
          if (t3.series.length > 1 && (a3 = t3.series[t3.maxValsInArrayIndex].length - 1), t3.isXNumeric) {
            var s2 = Math.round(t3.maxX - t3.minX);
            s2 < 30 && (a3 = s2);
          }
        } else a3 = e2.xaxis.tickAmount;
        if (t3.xTickAmount = a3, void 0 !== e2.xaxis.max && "number" == typeof e2.xaxis.max && (t3.maxX = e2.xaxis.max), void 0 !== e2.xaxis.min && "number" == typeof e2.xaxis.min && (t3.minX = e2.xaxis.min), void 0 !== e2.xaxis.range && (t3.minX = t3.maxX - e2.xaxis.range), t3.minX !== Number.MAX_VALUE && t3.maxX !== -Number.MAX_VALUE) if (e2.xaxis.convertedCatToNumeric && !t3.dataFormatXNumeric) {
          for (var r2 = [], n2 = t3.minX - 1; n2 < t3.maxX; n2++) r2.push(n2 + 1);
          t3.xAxisScale = { result: r2, niceMin: r2[0], niceMax: r2[r2.length - 1] };
        } else t3.xAxisScale = this.scales.setXScale(t3.minX, t3.maxX);
        else t3.xAxisScale = this.scales.linearScale(0, a3, a3, 0, e2.xaxis.stepSize), t3.noLabelsProvided && t3.labels.length > 0 && (t3.xAxisScale = this.scales.linearScale(1, t3.labels.length, a3 - 1, 0, e2.xaxis.stepSize), t3.seriesX = t3.labels.slice());
        i3 && (t3.labels = t3.xAxisScale.result.slice());
      }
      return t3.isBarHorizontal && t3.labels.length && (t3.xTickAmount = t3.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t3.minX, maxX: t3.maxX };
    } }, { key: "setZRange", value: function() {
      var t3 = this.w.globals;
      if (t3.isDataXYZ) {
        for (var e2 = 0; e2 < t3.series.length; e2++) if (void 0 !== t3.seriesZ[e2]) for (var i3 = 0; i3 < t3.seriesZ[e2].length; i3++) null !== t3.seriesZ[e2][i3] && v.isNumber(t3.seriesZ[e2][i3]) && (t3.maxZ = Math.max(t3.maxZ, t3.seriesZ[e2][i3]), t3.minZ = Math.min(t3.minZ, t3.seriesZ[e2][i3]));
      }
    } }, { key: "_handleSingleDataPoint", value: function() {
      var t3 = this.w.globals, e2 = this.w.config;
      if (t3.minX === t3.maxX) {
        var i3 = new zi(this.ctx);
        if ("datetime" === e2.xaxis.type) {
          var a3 = i3.getDate(t3.minX);
          e2.xaxis.labels.datetimeUTC ? a3.setUTCDate(a3.getUTCDate() - 2) : a3.setDate(a3.getDate() - 2), t3.minX = new Date(a3).getTime();
          var s2 = i3.getDate(t3.maxX);
          e2.xaxis.labels.datetimeUTC ? s2.setUTCDate(s2.getUTCDate() + 2) : s2.setDate(s2.getDate() + 2), t3.maxX = new Date(s2).getTime();
        } else ("numeric" === e2.xaxis.type || "category" === e2.xaxis.type && !t3.noLabelsProvided) && (t3.minX = t3.minX - 2, t3.initialMinX = t3.minX, t3.maxX = t3.maxX + 2, t3.initialMaxX = t3.maxX);
      }
    } }, { key: "_getMinXDiff", value: function() {
      var t3 = this.w.globals;
      t3.isXNumeric && t3.seriesX.forEach((function(e2, i3) {
        if (e2.length) {
          1 === e2.length && e2.push(t3.seriesX[t3.maxValsInArrayIndex][t3.seriesX[t3.maxValsInArrayIndex].length - 1]);
          var a3 = e2.slice();
          a3.sort((function(t4, e3) {
            return t4 - e3;
          })), a3.forEach((function(e3, i4) {
            if (i4 > 0) {
              var s2 = e3 - a3[i4 - 1];
              s2 > 0 && (t3.minXDiff = Math.min(s2, t3.minXDiff));
            }
          })), 1 !== t3.dataPoints && t3.minXDiff !== Number.MAX_VALUE || (t3.minXDiff = 0.5);
        }
      }));
    } }, { key: "_setStackedMinMax", value: function() {
      var t3 = this, e2 = this.w.globals;
      if (e2.series.length) {
        var i3 = e2.seriesGroups;
        i3.length || (i3 = [this.w.globals.seriesNames.map((function(t4) {
          return t4;
        }))]);
        var a3 = {}, s2 = {};
        i3.forEach((function(i4) {
          a3[i4] = [], s2[i4] = [], t3.w.config.series.map((function(t4, a4) {
            return i4.indexOf(e2.seriesNames[a4]) > -1 ? a4 : null;
          })).filter((function(t4) {
            return null !== t4;
          })).forEach((function(r2) {
            for (var n2 = 0; n2 < e2.series[e2.maxValsInArrayIndex].length; n2++) {
              var o2, l2, h2, c2;
              void 0 === a3[i4][n2] && (a3[i4][n2] = 0, s2[i4][n2] = 0), (t3.w.config.chart.stacked && !e2.comboCharts || t3.w.config.chart.stacked && e2.comboCharts && (!t3.w.config.chart.stackOnlyBar || "bar" === (null === (o2 = t3.w.config.series) || void 0 === o2 || null === (l2 = o2[r2]) || void 0 === l2 ? void 0 : l2.type) || "column" === (null === (h2 = t3.w.config.series) || void 0 === h2 || null === (c2 = h2[r2]) || void 0 === c2 ? void 0 : c2.type))) && null !== e2.series[r2][n2] && v.isNumber(e2.series[r2][n2]) && (e2.series[r2][n2] > 0 ? a3[i4][n2] += parseFloat(e2.series[r2][n2]) + 1e-4 : s2[i4][n2] += parseFloat(e2.series[r2][n2]));
            }
          }));
        })), Object.entries(a3).forEach((function(t4) {
          var i4 = p(t4, 1)[0];
          a3[i4].forEach((function(t5, r2) {
            e2.maxY = Math.max(e2.maxY, a3[i4][r2]), e2.minY = Math.min(e2.minY, s2[i4][r2]);
          }));
        }));
      }
    } }]), t2;
  })(), aa = (function() {
    function t2(e2, a3) {
      i2(this, t2), this.ctx = e2, this.elgrid = a3, this.w = e2.w;
      var s2 = this.w;
      this.xaxisFontSize = s2.config.xaxis.labels.style.fontSize, this.axisFontFamily = s2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s2.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === s2.config.chart.type && s2.config.plotOptions.bar.horizontal, this.xAxisoffX = "bottom" === s2.config.xaxis.position ? s2.globals.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new Ri(e2);
    }
    return s(t2, [{ key: "drawYaxis", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx), a3 = e2.config.yaxis[t3].labels.style, s2 = a3.fontSize, r2 = a3.fontFamily, n2 = a3.fontWeight, o2 = i3.group({ class: "apexcharts-yaxis", rel: t3, transform: "translate(".concat(e2.globals.translateYAxisX[t3], ", 0)") });
      if (this.axesUtils.isYAxisHidden(t3)) return o2;
      var l2 = i3.group({ class: "apexcharts-yaxis-texts-g" });
      o2.add(l2);
      var h2 = e2.globals.yAxisScale[t3].result.length - 1, c2 = e2.globals.gridHeight / h2, d2 = e2.globals.yLabelFormatters[t3], u2 = this.axesUtils.checkForReversedLabels(t3, e2.globals.yAxisScale[t3].result.slice());
      if (e2.config.yaxis[t3].labels.show) {
        var g2 = e2.globals.translateY + e2.config.yaxis[t3].labels.offsetY;
        e2.globals.isBarHorizontal ? g2 = 0 : "heatmap" === e2.config.chart.type && (g2 -= c2 / 2), g2 += parseInt(s2, 10) / 3;
        for (var p2 = h2; p2 >= 0; p2--) {
          var f2 = d2(u2[p2], p2, e2), x2 = e2.config.yaxis[t3].labels.padding;
          e2.config.yaxis[t3].opposite && 0 !== e2.config.yaxis.length && (x2 *= -1);
          var b2 = this.getTextAnchor(e2.config.yaxis[t3].labels.align, e2.config.yaxis[t3].opposite), m2 = this.axesUtils.getYAxisForeColor(a3.colors, t3), y2 = Array.isArray(m2) ? m2[p2] : m2, w2 = v.listToArray(e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-label tspan"))).map((function(t4) {
            return t4.textContent;
          })), k2 = i3.drawText({ x: x2, y: g2, text: w2.includes(f2) && !e2.config.yaxis[t3].labels.showDuplicates ? "" : f2, textAnchor: b2, fontSize: s2, fontFamily: r2, fontWeight: n2, maxWidth: e2.config.yaxis[t3].labels.maxWidth, foreColor: y2, isPlainText: false, cssClass: "apexcharts-yaxis-label ".concat(a3.cssClass) });
          l2.add(k2), this.addTooltip(k2, f2), 0 !== e2.config.yaxis[t3].labels.rotate && this.rotateLabel(i3, k2, firstLabel, e2.config.yaxis[t3].labels.rotate), g2 += c2;
        }
      }
      return this.addYAxisTitle(i3, o2, t3), this.addAxisBorder(i3, o2, t3, h2, c2), o2;
    } }, { key: "getTextAnchor", value: function(t3, e2) {
      return "left" === t3 ? "start" : "center" === t3 ? "middle" : "right" === t3 ? "end" : e2 ? "start" : "end";
    } }, { key: "addTooltip", value: function(t3, e2) {
      var i3 = document.createElementNS(this.w.globals.SVGNS, "title");
      i3.textContent = Array.isArray(e2) ? e2.join(" ") : e2, t3.node.appendChild(i3);
    } }, { key: "rotateLabel", value: function(t3, e2, i3, a3) {
      var s2 = t3.rotateAroundCenter(i3.node), r2 = t3.rotateAroundCenter(e2.node);
      e2.node.setAttribute("transform", "rotate(".concat(a3, " ").concat(s2.x, " ").concat(r2.y, ")"));
    } }, { key: "addYAxisTitle", value: function(t3, e2, i3) {
      var a3 = this.w;
      if (void 0 !== a3.config.yaxis[i3].title.text) {
        var s2 = t3.group({ class: "apexcharts-yaxis-title" }), r2 = a3.config.yaxis[i3].opposite ? a3.globals.translateYAxisX[i3] : 0, n2 = t3.drawText({ x: r2, y: a3.globals.gridHeight / 2 + a3.globals.translateY + a3.config.yaxis[i3].title.offsetY, text: a3.config.yaxis[i3].title.text, textAnchor: "end", foreColor: a3.config.yaxis[i3].title.style.color, fontSize: a3.config.yaxis[i3].title.style.fontSize, fontWeight: a3.config.yaxis[i3].title.style.fontWeight, fontFamily: a3.config.yaxis[i3].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text ".concat(a3.config.yaxis[i3].title.style.cssClass) });
        s2.add(n2), e2.add(s2);
      }
    } }, { key: "addAxisBorder", value: function(t3, e2, i3, a3, s2) {
      var r2 = this.w, n2 = r2.config.yaxis[i3].axisBorder, o2 = 31 + n2.offsetX;
      if (r2.config.yaxis[i3].opposite && (o2 = -31 - n2.offsetX), n2.show) {
        var l2 = t3.drawLine(o2, r2.globals.translateY + n2.offsetY - 2, o2, r2.globals.gridHeight + r2.globals.translateY + n2.offsetY + 2, n2.color, 0, n2.width);
        e2.add(l2);
      }
      r2.config.yaxis[i3].axisTicks.show && this.axesUtils.drawYAxisTicks(o2, a3, n2, r2.config.yaxis[i3].axisTicks, i3, s2, e2);
    } }, { key: "drawYaxisInversed", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx), a3 = i3.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), s2 = i3.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e2.globals.translateXAxisX, ", ").concat(e2.globals.translateXAxisY, ")") });
      a3.add(s2);
      var r2 = e2.globals.yAxisScale[t3].result.length - 1, n2 = e2.globals.gridWidth / r2 + 0.1, o2 = n2 + e2.config.xaxis.labels.offsetX, l2 = e2.globals.xLabelFormatter, h2 = this.axesUtils.checkForReversedLabels(t3, e2.globals.yAxisScale[t3].result.slice()), c2 = e2.globals.timescaleLabels;
      if (c2.length > 0 && (this.xaxisLabels = c2.slice(), r2 = (h2 = c2.slice()).length), e2.config.xaxis.labels.show) for (var d2 = c2.length ? 0 : r2; c2.length ? d2 < c2.length : d2 >= 0; c2.length ? d2++ : d2--) {
        var u2 = l2(h2[d2], d2, e2), g2 = e2.globals.gridWidth + e2.globals.padHorizontal - (o2 - n2 + e2.config.xaxis.labels.offsetX);
        if (c2.length) {
          var p2 = this.axesUtils.getLabel(h2, c2, g2, d2, this.drawnLabels, this.xaxisFontSize);
          g2 = p2.x, u2 = p2.text, this.drawnLabels.push(p2.text), 0 === d2 && e2.globals.skipFirstTimelinelabel && (u2 = ""), d2 === h2.length - 1 && e2.globals.skipLastTimelinelabel && (u2 = "");
        }
        var f2 = i3.drawText({ x: g2, y: this.xAxisoffX + e2.config.xaxis.labels.offsetY + 30 - ("top" === e2.config.xaxis.position ? e2.globals.xAxisHeight + e2.config.xaxis.axisTicks.height - 2 : 0), text: u2, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t3] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: e2.config.xaxis.labels.style.fontWeight, isPlainText: false, cssClass: "apexcharts-xaxis-label ".concat(e2.config.xaxis.labels.style.cssClass) });
        s2.add(f2), f2.tspan(u2), this.addTooltip(f2, u2), o2 += n2;
      }
      return this.inversedYAxisTitleText(a3), this.inversedYAxisBorder(a3), a3;
    } }, { key: "inversedYAxisBorder", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx), a3 = e2.config.xaxis.axisBorder;
      if (a3.show) {
        var s2 = 0;
        "bar" === e2.config.chart.type && e2.globals.isXNumeric && (s2 -= 15);
        var r2 = i3.drawLine(e2.globals.padHorizontal + s2 + a3.offsetX, this.xAxisoffX, e2.globals.gridWidth, this.xAxisoffX, a3.color, 0, a3.height);
        this.elgrid && this.elgrid.elGridBorders && e2.config.grid.show ? this.elgrid.elGridBorders.add(r2) : t3.add(r2);
      }
    } }, { key: "inversedYAxisTitleText", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx);
      if (void 0 !== e2.config.xaxis.title.text) {
        var a3 = i3.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), s2 = i3.drawText({ x: e2.globals.gridWidth / 2 + e2.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e2.config.xaxis.title.style.fontSize) + e2.config.xaxis.title.offsetY + 20, text: e2.config.xaxis.title.text, textAnchor: "middle", fontSize: e2.config.xaxis.title.style.fontSize, fontFamily: e2.config.xaxis.title.style.fontFamily, fontWeight: e2.config.xaxis.title.style.fontWeight, foreColor: e2.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text ".concat(e2.config.xaxis.title.style.cssClass) });
        a3.add(s2), t3.add(a3);
      }
    } }, { key: "yAxisTitleRotate", value: function(t3, e2) {
      var i3 = this.w, a3 = new Mi(this.ctx), s2 = i3.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-texts-g")), r2 = s2 ? s2.getBoundingClientRect() : { width: 0, height: 0 }, n2 = i3.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-title text")), o2 = n2 ? n2.getBoundingClientRect() : { width: 0, height: 0 };
      if (n2) {
        var l2 = this.xPaddingForYAxisTitle(t3, r2, o2, e2);
        n2.setAttribute("x", l2.xPos - (e2 ? 10 : 0));
        var h2 = a3.rotateAroundCenter(n2);
        n2.setAttribute("transform", "rotate(".concat(e2 ? -1 * i3.config.yaxis[t3].title.rotate : i3.config.yaxis[t3].title.rotate, " ").concat(h2.x, " ").concat(h2.y, ")"));
      }
    } }, { key: "xPaddingForYAxisTitle", value: function(t3, e2, i3, a3) {
      var s2 = this.w, r2 = 0, n2 = 10;
      return void 0 === s2.config.yaxis[t3].title.text || t3 < 0 ? { xPos: r2, padd: 0 } : (a3 ? r2 = e2.width + s2.config.yaxis[t3].title.offsetX + i3.width / 2 + n2 / 2 : (r2 = -1 * e2.width + s2.config.yaxis[t3].title.offsetX + n2 / 2 + i3.width / 2, s2.globals.isBarHorizontal && (n2 = 25, r2 = -1 * e2.width - s2.config.yaxis[t3].title.offsetX - n2)), { xPos: r2, padd: n2 });
    } }, { key: "setYAxisXPosition", value: function(t3, e2) {
      var i3 = this.w, a3 = 0, s2 = 0, r2 = 18, n2 = 1;
      i3.config.yaxis.length > 1 && (this.multipleYs = true), i3.config.yaxis.forEach((function(o2, l2) {
        var h2 = i3.globals.ignoreYAxisIndexes.includes(l2) || !o2.show || o2.floating || 0 === t3[l2].width, c2 = t3[l2].width + e2[l2].width;
        o2.opposite ? i3.globals.isBarHorizontal ? (s2 = i3.globals.gridWidth + i3.globals.translateX - 1, i3.globals.translateYAxisX[l2] = s2 - o2.labels.offsetX) : (s2 = i3.globals.gridWidth + i3.globals.translateX + n2, h2 || (n2 += c2 + 20), i3.globals.translateYAxisX[l2] = s2 - o2.labels.offsetX + 20) : (a3 = i3.globals.translateX - r2, h2 || (r2 += c2 + 20), i3.globals.translateYAxisX[l2] = a3 + o2.labels.offsetX);
      }));
    } }, { key: "setYAxisTextAlignments", value: function() {
      var t3 = this.w;
      v.listToArray(t3.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach((function(e2, i3) {
        var a3 = t3.config.yaxis[i3];
        if (a3 && !a3.floating && void 0 !== a3.labels.align) {
          var s2 = t3.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i3, "'] .apexcharts-yaxis-texts-g")), r2 = v.listToArray(t3.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i3, "'] .apexcharts-yaxis-label"))), n2 = s2.getBoundingClientRect();
          r2.forEach((function(t4) {
            t4.setAttribute("text-anchor", a3.labels.align);
          })), "left" !== a3.labels.align || a3.opposite ? "center" === a3.labels.align ? s2.setAttribute("transform", "translate(".concat(n2.width / 2 * (a3.opposite ? 1 : -1), ", 0)")) : "right" === a3.labels.align && a3.opposite && s2.setAttribute("transform", "translate(".concat(n2.width, ", 0)")) : s2.setAttribute("transform", "translate(-".concat(n2.width, ", 0)"));
        }
      }));
    } }]), t2;
  })(), sa = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.documentEvent = v.bind(this.documentEvent, this);
    }
    return s(t2, [{ key: "addEventListener", value: function(t3, e2) {
      var i3 = this.w;
      i3.globals.events.hasOwnProperty(t3) ? i3.globals.events[t3].push(e2) : i3.globals.events[t3] = [e2];
    } }, { key: "removeEventListener", value: function(t3, e2) {
      var i3 = this.w;
      if (i3.globals.events.hasOwnProperty(t3)) {
        var a3 = i3.globals.events[t3].indexOf(e2);
        -1 !== a3 && i3.globals.events[t3].splice(a3, 1);
      }
    } }, { key: "fireEvent", value: function(t3, e2) {
      var i3 = this.w;
      if (i3.globals.events.hasOwnProperty(t3)) {
        e2 && e2.length || (e2 = []);
        for (var a3 = i3.globals.events[t3], s2 = a3.length, r2 = 0; r2 < s2; r2++) a3[r2].apply(null, e2);
      }
    } }, { key: "setupEventHandlers", value: function() {
      var t3 = this, e2 = this.w, i3 = this.ctx, a3 = e2.globals.dom.baseEl.querySelector(e2.globals.chartClass);
      this.ctx.eventList.forEach((function(t4) {
        a3.addEventListener(t4, (function(t5) {
          var a4 = null === t5.target.getAttribute("i") && -1 !== e2.globals.capturedSeriesIndex ? e2.globals.capturedSeriesIndex : t5.target.getAttribute("i"), s2 = null === t5.target.getAttribute("j") && -1 !== e2.globals.capturedDataPointIndex ? e2.globals.capturedDataPointIndex : t5.target.getAttribute("j"), r2 = Object.assign({}, e2, { seriesIndex: e2.globals.axisCharts ? a4 : 0, dataPointIndex: s2 });
          "mousemove" === t5.type || "touchmove" === t5.type ? "function" == typeof e2.config.chart.events.mouseMove && e2.config.chart.events.mouseMove(t5, i3, r2) : "mouseleave" === t5.type || "touchleave" === t5.type ? "function" == typeof e2.config.chart.events.mouseLeave && e2.config.chart.events.mouseLeave(t5, i3, r2) : ("mouseup" === t5.type && 1 === t5.which || "touchend" === t5.type) && ("function" == typeof e2.config.chart.events.click && e2.config.chart.events.click(t5, i3, r2), i3.ctx.events.fireEvent("click", [t5, i3, r2]));
        }), { capture: false, passive: true });
      })), this.ctx.eventList.forEach((function(i4) {
        e2.globals.dom.baseEl.addEventListener(i4, t3.documentEvent, { passive: true });
      })), this.ctx.core.setupBrushHandler();
    } }, { key: "documentEvent", value: function(t3) {
      var e2 = this.w, i3 = t3.target.className;
      if ("click" === t3.type) {
        var a3 = e2.globals.dom.baseEl.querySelector(".apexcharts-menu");
        a3 && a3.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== i3 && a3.classList.remove("apexcharts-menu-open");
      }
      e2.globals.clientX = "touchmove" === t3.type ? t3.touches[0].clientX : t3.clientX, e2.globals.clientY = "touchmove" === t3.type ? t3.touches[0].clientY : t3.clientY;
    } }]), t2;
  })(), ra = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "setCurrentLocaleValues", value: function(t3) {
      var e2 = this.w.config.chart.locales;
      window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e2 = this.w.config.chart.locales.concat(window.Apex.chart.locales));
      var i3 = e2.filter((function(e3) {
        return e3.name === t3;
      }))[0];
      if (!i3) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
      var a3 = v.extend(Hi, i3);
      this.w.globals.locale = a3.options;
    } }]), t2;
  })(), na = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "drawAxis", value: function(t3, e2) {
      var i3, a3, s2 = this, r2 = this.w.globals, n2 = this.w.config, o2 = new Ki(this.ctx, e2), l2 = new aa(this.ctx, e2);
      r2.axisCharts && "radar" !== t3 && (r2.isBarHorizontal ? (a3 = l2.drawYaxisInversed(0), i3 = o2.drawXaxisInversed(0), r2.dom.elGraphical.add(i3), r2.dom.elGraphical.add(a3)) : (i3 = o2.drawXaxis(), r2.dom.elGraphical.add(i3), n2.yaxis.map((function(t4, e3) {
        if (-1 === r2.ignoreYAxisIndexes.indexOf(e3) && (a3 = l2.drawYaxis(e3), r2.dom.Paper.add(a3), "back" === s2.w.config.grid.position)) {
          var i4 = r2.dom.Paper.children()[1];
          i4.remove(), r2.dom.Paper.add(i4);
        }
      }))));
    } }]), t2;
  })(), oa = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "drawXCrosshairs", value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i3 = new Li(this.ctx), a3 = t3.config.xaxis.crosshairs.fill.gradient, s2 = t3.config.xaxis.crosshairs.dropShadow, r2 = t3.config.xaxis.crosshairs.fill.type, n2 = a3.colorFrom, o2 = a3.colorTo, l2 = a3.opacityFrom, h2 = a3.opacityTo, c2 = a3.stops, d2 = s2.enabled, u2 = s2.left, g2 = s2.top, p2 = s2.blur, f2 = s2.color, x2 = s2.opacity, b2 = t3.config.xaxis.crosshairs.fill.color;
      if (t3.config.xaxis.crosshairs.show) {
        "gradient" === r2 && (b2 = e2.drawGradient("vertical", n2, o2, l2, h2, null, c2, null));
        var m2 = e2.drawRect();
        1 === t3.config.xaxis.crosshairs.width && (m2 = e2.drawLine());
        var y2 = t3.globals.gridHeight;
        (!v.isNumber(y2) || y2 < 0) && (y2 = 0);
        var w2 = t3.config.xaxis.crosshairs.width;
        (!v.isNumber(w2) || w2 < 0) && (w2 = 0), m2.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2, width: w2, height: y2, fill: b2, filter: "none", "fill-opacity": t3.config.xaxis.crosshairs.opacity, stroke: t3.config.xaxis.crosshairs.stroke.color, "stroke-width": t3.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t3.config.xaxis.crosshairs.stroke.dashArray }), d2 && (m2 = i3.dropShadow(m2, { left: u2, top: g2, blur: p2, color: f2, opacity: x2 })), t3.globals.dom.elGraphical.add(m2);
      }
    } }, { key: "drawYCrosshairs", value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i3 = t3.config.yaxis[0].crosshairs, a3 = t3.globals.barPadForNumericAxis;
      if (t3.config.yaxis[0].crosshairs.show) {
        var s2 = e2.drawLine(-a3, 0, t3.globals.gridWidth + a3, 0, i3.stroke.color, i3.stroke.dashArray, i3.stroke.width);
        s2.attr({ class: "apexcharts-ycrosshairs" }), t3.globals.dom.elGraphical.add(s2);
      }
      var r2 = e2.drawLine(-a3, 0, t3.globals.gridWidth + a3, 0, i3.stroke.color, 0, 0);
      r2.attr({ class: "apexcharts-ycrosshairs-hidden" }), t3.globals.dom.elGraphical.add(r2);
    } }]), t2;
  })(), la = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "checkResponsiveConfig", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = i3.config;
      if (0 !== a3.responsive.length) {
        var s2 = a3.responsive.slice();
        s2.sort((function(t4, e3) {
          return t4.breakpoint > e3.breakpoint ? 1 : e3.breakpoint > t4.breakpoint ? -1 : 0;
        })).reverse();
        var r2 = new Wi({}), n2 = function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a4 = s2[0].breakpoint, n3 = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (n3 > a4) {
            var o3 = v.clone(i3.globals.initialConfig);
            o3.series = v.clone(i3.config.series);
            var l2 = Pi.extendArrayProps(r2, o3, i3);
            t4 = v.extend(l2, t4), t4 = v.extend(i3.config, t4), e2.overrideResponsiveOptions(t4);
          } else for (var h2 = 0; h2 < s2.length; h2++) n3 < s2[h2].breakpoint && (t4 = Pi.extendArrayProps(r2, s2[h2].options, i3), t4 = v.extend(i3.config, t4), e2.overrideResponsiveOptions(t4));
        };
        if (t3) {
          var o2 = Pi.extendArrayProps(r2, t3, i3);
          o2 = v.extend(i3.config, o2), n2(o2 = v.extend(o2, t3));
        } else n2({});
      }
    } }, { key: "overrideResponsiveOptions", value: function(t3) {
      var e2 = new Wi(t3).init({ responsiveOverride: true });
      this.w.config = e2;
    } }]), t2;
  })(), ha = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.colors = [], this.isColorFn = false, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
    }
    return s(t2, [{ key: "checkHeatmapDistributed", value: function() {
      var t3 = this.w.config, e2 = t3.chart, i3 = t3.plotOptions;
      return "treemap" === e2.type && i3.treemap && i3.treemap.distributed || "heatmap" === e2.type && i3.heatmap && i3.heatmap.distributed;
    } }, { key: "checkBarDistributed", value: function() {
      var t3 = this.w.config, e2 = t3.chart, i3 = t3.plotOptions;
      return i3.bar && i3.bar.distributed && ("bar" === e2.type || "rangeBar" === e2.type);
    } }, { key: "init", value: function() {
      this.setDefaultColors();
    } }, { key: "setDefaultColors", value: function() {
      var t3 = this.w, e2 = new v();
      t3.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(t3.config.theme.mode || "light"));
      var i3 = f(t3.config.colors || t3.config.fill.colors || []);
      t3.globals.colors = this.getColors(i3), this.applySeriesColors(t3.globals.seriesColors, t3.globals.colors), t3.config.theme.monochrome.enabled && (t3.globals.colors = this.getMonochromeColors(t3.config.theme.monochrome, t3.globals.series, e2));
      var a3 = t3.globals.colors.slice();
      this.pushExtraColors(t3.globals.colors), this.applyColorTypes(["fill", "stroke"], a3), this.applyDataLabelsColors(a3), this.applyRadarPolygonsColors(), this.applyMarkersColors(a3);
    } }, { key: "getColors", value: function(t3) {
      var e2 = this, i3 = this.w;
      return t3 && 0 !== t3.length ? Array.isArray(t3) && t3.length > 0 && "function" == typeof t3[0] ? (this.isColorFn = true, i3.config.series.map((function(a3, s2) {
        var r2 = t3[s2] || t3[0];
        return "function" == typeof r2 ? r2({ value: i3.globals.axisCharts ? i3.globals.series[s2][0] || 0 : i3.globals.series[s2], seriesIndex: s2, dataPointIndex: s2, w: e2.w }) : r2;
      }))) : t3 : this.predefined();
    } }, { key: "applySeriesColors", value: function(t3, e2) {
      t3.forEach((function(t4, i3) {
        t4 && (e2[i3] = t4);
      }));
    } }, { key: "getMonochromeColors", value: function(t3, e2, i3) {
      var a3 = t3.color, s2 = t3.shadeIntensity, r2 = t3.shadeTo, n2 = this.isBarDistributed || this.isHeatmapDistributed ? e2[0].length * e2.length : e2.length, o2 = 1 / (n2 / s2), l2 = 0;
      return Array.from({ length: n2 }, (function() {
        var t4 = "dark" === r2 ? i3.shadeColor(-1 * l2, a3) : i3.shadeColor(l2, a3);
        return l2 += o2, t4;
      }));
    } }, { key: "applyColorTypes", value: function(t3, e2) {
      var i3 = this, a3 = this.w;
      t3.forEach((function(t4) {
        a3.globals[t4].colors = void 0 === a3.config[t4].colors ? i3.isColorFn ? a3.config.colors : e2 : a3.config[t4].colors.slice(), i3.pushExtraColors(a3.globals[t4].colors);
      }));
    } }, { key: "applyDataLabelsColors", value: function(t3) {
      var e2 = this.w;
      e2.globals.dataLabels.style.colors = void 0 === e2.config.dataLabels.style.colors ? t3 : e2.config.dataLabels.style.colors.slice(), this.pushExtraColors(e2.globals.dataLabels.style.colors, 50);
    } }, { key: "applyRadarPolygonsColors", value: function() {
      var t3 = this.w;
      t3.globals.radarPolygons.fill.colors = void 0 === t3.config.plotOptions.radar.polygons.fill.colors ? ["dark" === t3.config.theme.mode ? "#343A3F" : "none"] : t3.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(t3.globals.radarPolygons.fill.colors, 20);
    } }, { key: "applyMarkersColors", value: function(t3) {
      var e2 = this.w;
      e2.globals.markers.colors = void 0 === e2.config.markers.colors ? t3 : e2.config.markers.colors.slice(), this.pushExtraColors(e2.globals.markers.colors);
    } }, { key: "pushExtraColors", value: function(t3, e2) {
      var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a3 = this.w, s2 = e2 || a3.globals.series.length;
      if (null === i3 && (i3 = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === a3.config.chart.type && a3.config.plotOptions.heatmap && a3.config.plotOptions.heatmap.colorScale.inverse), i3 && a3.globals.series.length && (s2 = a3.globals.series[a3.globals.maxValsInArrayIndex].length * a3.globals.series.length), t3.length < s2) for (var r2 = s2 - t3.length, n2 = 0; n2 < r2; n2++) t3.push(t3[n2]);
    } }, { key: "updateThemeOptions", value: function(t3) {
      t3.chart = t3.chart || {}, t3.tooltip = t3.tooltip || {};
      var e2 = t3.theme.mode, i3 = "dark" === e2 ? "palette4" : "light" === e2 ? "palette1" : t3.theme.palette || "palette1", a3 = "dark" === e2 ? "#f6f7f8" : "light" === e2 ? "#373d3f" : t3.chart.foreColor || "#373d3f";
      return t3.tooltip.theme = e2 || "light", t3.chart.foreColor = a3, t3.theme.palette = i3, t3;
    } }, { key: "predefined", value: function() {
      var t3 = this.w.config.theme.palette, e2 = this.ctx.constructor.getThemePalettes();
      return e2[t3] || e2.palette1;
    } }]), t2;
  })(), ca = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "draw", value: function() {
      this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
    } }, { key: "drawTitleSubtitle", value: function(t3) {
      var e2 = this.w, i3 = "title" === t3 ? e2.config.title : e2.config.subtitle, a3 = e2.globals.svgWidth / 2, s2 = i3.offsetY, r2 = "middle";
      if ("left" === i3.align ? (a3 = 10, r2 = "start") : "right" === i3.align && (a3 = e2.globals.svgWidth - 10, r2 = "end"), a3 += i3.offsetX, s2 = s2 + parseInt(i3.style.fontSize, 10) + i3.margin / 2, void 0 !== i3.text) {
        var n2 = new Mi(this.ctx).drawText({ x: a3, y: s2, text: i3.text, textAnchor: r2, fontSize: i3.style.fontSize, fontFamily: i3.style.fontFamily, fontWeight: i3.style.fontWeight, foreColor: i3.style.color, opacity: 1 });
        n2.node.setAttribute("class", "apexcharts-".concat(t3, "-text")), e2.globals.dom.Paper.add(n2);
      }
    } }]), t2;
  })(), da = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.dCtx = e2;
    }
    return s(t2, [{ key: "getTitleSubtitleCoords", value: function(t3) {
      var e2 = this.w, i3 = 0, a3 = 0, s2 = "title" === t3 ? e2.config.title.floating : e2.config.subtitle.floating, r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-".concat(t3, "-text"));
      if (null !== r2 && !s2) {
        var n2 = r2.getBoundingClientRect();
        i3 = n2.width, a3 = e2.globals.axisCharts ? n2.height + 5 : n2.height;
      }
      return { width: i3, height: a3 };
    } }, { key: "getLegendsRect", value: function() {
      var t3 = this.w, e2 = t3.globals.dom.elLegendWrap;
      t3.config.legend.height || "top" !== t3.config.legend.position && "bottom" !== t3.config.legend.position || (e2.style.maxHeight = t3.globals.svgHeight / 2 + "px");
      var i3 = Object.assign({}, v.getBoundingClientRect(e2));
      return null !== e2 && !t3.config.legend.floating && t3.config.legend.show ? this.dCtx.lgRect = { x: i3.x, y: i3.y, height: i3.height, width: 0 === i3.height ? 0 : i3.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, "left" !== t3.config.legend.position && "right" !== t3.config.legend.position || 1.5 * this.dCtx.lgRect.width > t3.globals.svgWidth && (this.dCtx.lgRect.width = t3.globals.svgWidth / 1.5), this.dCtx.lgRect;
    } }, { key: "getDatalabelsRect", value: function() {
      var t3 = this, e2 = this.w, i3 = [];
      e2.config.series.forEach((function(s3, r3) {
        s3.data.forEach((function(s4, n3) {
          var o2;
          o2 = e2.globals.series[r3][n3], a3 = e2.config.dataLabels.formatter(o2, { ctx: t3.dCtx.ctx, seriesIndex: r3, dataPointIndex: n3, w: e2 }), i3.push(a3);
        }));
      }));
      var a3 = v.getLargestStringFromArr(i3), s2 = new Mi(this.dCtx.ctx), r2 = e2.config.dataLabels.style, n2 = s2.getTextRects(a3, parseInt(r2.fontSize), r2.fontFamily);
      return { width: 1.05 * n2.width, height: n2.height };
    } }, { key: "getLargestStringFromMultiArr", value: function(t3, e2) {
      var i3 = t3;
      if (this.w.globals.isMultiLineX) {
        var a3 = e2.map((function(t4, e3) {
          return Array.isArray(t4) ? t4.length : 1;
        })), s2 = Math.max.apply(Math, f(a3));
        i3 = e2[a3.indexOf(s2)];
      }
      return i3;
    } }]), t2;
  })(), ua = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.dCtx = e2;
    }
    return s(t2, [{ key: "getxAxisLabelsCoords", value: function() {
      var t3, e2 = this.w, i3 = e2.globals.labels.slice();
      if (e2.config.xaxis.convertedCatToNumeric && 0 === i3.length && (i3 = e2.globals.categoryLabels), e2.globals.timescaleLabels.length > 0) {
        var a3 = this.getxAxisTimeScaleLabelsCoords();
        t3 = { width: a3.width, height: a3.height }, e2.globals.rotateXLabels = false;
      } else {
        this.dCtx.lgWidthForSideLegends = "left" !== e2.config.legend.position && "right" !== e2.config.legend.position || e2.config.legend.floating ? 0 : this.dCtx.lgRect.width;
        var s2 = e2.globals.xLabelFormatter, r2 = v.getLargestStringFromArr(i3), n2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r2, i3);
        e2.globals.isBarHorizontal && (n2 = r2 = e2.globals.yAxisScale[0].result.reduce((function(t4, e3) {
          return t4.length > e3.length ? t4 : e3;
        }), 0));
        var o2 = new Xi(this.dCtx.ctx), l2 = r2;
        r2 = o2.xLabelFormat(s2, r2, l2, { i: void 0, dateFormatter: new zi(this.dCtx.ctx).formatDate, w: e2 }), n2 = o2.xLabelFormat(s2, n2, l2, { i: void 0, dateFormatter: new zi(this.dCtx.ctx).formatDate, w: e2 }), (e2.config.xaxis.convertedCatToNumeric && void 0 === r2 || "" === String(r2).trim()) && (n2 = r2 = "1");
        var h2 = new Mi(this.dCtx.ctx), c2 = h2.getTextRects(r2, e2.config.xaxis.labels.style.fontSize), d2 = c2;
        if (r2 !== n2 && (d2 = h2.getTextRects(n2, e2.config.xaxis.labels.style.fontSize)), (t3 = { width: c2.width >= d2.width ? c2.width : d2.width, height: c2.height >= d2.height ? c2.height : d2.height }).width * i3.length > e2.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== e2.config.xaxis.labels.rotate || e2.config.xaxis.labels.rotateAlways) {
          if (!e2.globals.isBarHorizontal) {
            e2.globals.rotateXLabels = true;
            var u2 = function(t4) {
              return h2.getTextRects(t4, e2.config.xaxis.labels.style.fontSize, e2.config.xaxis.labels.style.fontFamily, "rotate(".concat(e2.config.xaxis.labels.rotate, " 0 0)"), false);
            };
            c2 = u2(r2), r2 !== n2 && (d2 = u2(n2)), t3.height = (c2.height > d2.height ? c2.height : d2.height) / 1.5, t3.width = c2.width > d2.width ? c2.width : d2.width;
          }
        } else e2.globals.rotateXLabels = false;
      }
      return e2.config.xaxis.labels.show || (t3 = { width: 0, height: 0 }), { width: t3.width, height: t3.height };
    } }, { key: "getxAxisGroupLabelsCoords", value: function() {
      var t3, e2 = this.w;
      if (!e2.globals.hasXaxisGroups) return { width: 0, height: 0 };
      var i3, a3 = (null === (t3 = e2.config.xaxis.group.style) || void 0 === t3 ? void 0 : t3.fontSize) || e2.config.xaxis.labels.style.fontSize, s2 = e2.globals.groups.map((function(t4) {
        return t4.title;
      })), r2 = v.getLargestStringFromArr(s2), n2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r2, s2), o2 = new Mi(this.dCtx.ctx), l2 = o2.getTextRects(r2, a3), h2 = l2;
      return r2 !== n2 && (h2 = o2.getTextRects(n2, a3)), i3 = { width: l2.width >= h2.width ? l2.width : h2.width, height: l2.height >= h2.height ? l2.height : h2.height }, e2.config.xaxis.labels.show || (i3 = { width: 0, height: 0 }), { width: i3.width, height: i3.height };
    } }, { key: "getxAxisTitleCoords", value: function() {
      var t3 = this.w, e2 = 0, i3 = 0;
      if (void 0 !== t3.config.xaxis.title.text) {
        var a3 = new Mi(this.dCtx.ctx).getTextRects(t3.config.xaxis.title.text, t3.config.xaxis.title.style.fontSize);
        e2 = a3.width, i3 = a3.height;
      }
      return { width: e2, height: i3 };
    } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
      var t3, e2 = this.w;
      this.dCtx.timescaleLabels = e2.globals.timescaleLabels.slice();
      var i3 = this.dCtx.timescaleLabels.map((function(t4) {
        return t4.value;
      })), a3 = i3.reduce((function(t4, e3) {
        return void 0 === t4 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t4.length > e3.length ? t4 : e3;
      }), 0);
      return 1.05 * (t3 = new Mi(this.dCtx.ctx).getTextRects(a3, e2.config.xaxis.labels.style.fontSize)).width * i3.length > e2.globals.gridWidth && 0 !== e2.config.xaxis.labels.rotate && (e2.globals.overlappingXLabels = true), t3;
    } }, { key: "additionalPaddingXLabels", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = i3.globals, s2 = i3.config, r2 = s2.xaxis.type, n2 = t3.width;
      a3.skipLastTimelinelabel = false, a3.skipFirstTimelinelabel = false;
      var o2 = i3.config.yaxis[0].opposite && i3.globals.isBarHorizontal, l2 = function(t4, o3) {
        s2.yaxis.length > 1 && (function(t5) {
          return -1 !== a3.collapsedSeriesIndices.indexOf(t5);
        })(o3) || (function(t5) {
          if (e2.dCtx.timescaleLabels && e2.dCtx.timescaleLabels.length) {
            var o4 = e2.dCtx.timescaleLabels[0], l3 = e2.dCtx.timescaleLabels[e2.dCtx.timescaleLabels.length - 1].position + n2 / 1.75 - e2.dCtx.yAxisWidthRight, h2 = o4.position - n2 / 1.75 + e2.dCtx.yAxisWidthLeft, c2 = "right" === i3.config.legend.position && e2.dCtx.lgRect.width > 0 ? e2.dCtx.lgRect.width : 0;
            l3 > a3.svgWidth - a3.translateX - c2 && (a3.skipLastTimelinelabel = true), h2 < -(t5.show && !t5.floating || "bar" !== s2.chart.type && "candlestick" !== s2.chart.type && "rangeBar" !== s2.chart.type && "boxPlot" !== s2.chart.type ? 10 : n2 / 1.75) && (a3.skipFirstTimelinelabel = true);
          } else "datetime" === r2 ? e2.dCtx.gridPad.right < n2 && !a3.rotateXLabels && (a3.skipLastTimelinelabel = true) : "datetime" !== r2 && e2.dCtx.gridPad.right < n2 / 2 - e2.dCtx.yAxisWidthRight && !a3.rotateXLabels && !i3.config.xaxis.labels.trim && (e2.dCtx.xPadRight = n2 / 2 + 1);
        })(t4);
      };
      s2.yaxis.forEach((function(t4, i4) {
        o2 ? (e2.dCtx.gridPad.left < n2 && (e2.dCtx.xPadLeft = n2 / 2 + 1), e2.dCtx.xPadRight = n2 / 2 + 1) : l2(t4, i4);
      }));
    } }]), t2;
  })(), ga = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.dCtx = e2;
    }
    return s(t2, [{ key: "getyAxisLabelsCoords", value: function() {
      var t3 = this, e2 = this.w, i3 = [], a3 = 10, s2 = new Ri(this.dCtx.ctx);
      return e2.config.yaxis.map((function(r2, n2) {
        var o2 = { seriesIndex: n2, dataPointIndex: -1, w: e2 }, l2 = e2.globals.yAxisScale[n2], h2 = 0;
        if (!s2.isYAxisHidden(n2) && r2.labels.show && void 0 !== r2.labels.minWidth && (h2 = r2.labels.minWidth), !s2.isYAxisHidden(n2) && r2.labels.show && l2.result.length) {
          var c2 = e2.globals.yLabelFormatters[n2], d2 = l2.niceMin === Number.MIN_VALUE ? 0 : l2.niceMin, u2 = l2.result.reduce((function(t4, e3) {
            var i4, a4;
            return (null === (i4 = String(c2(t4, o2))) || void 0 === i4 ? void 0 : i4.length) > (null === (a4 = String(c2(e3, o2))) || void 0 === a4 ? void 0 : a4.length) ? t4 : e3;
          }), d2), g2 = u2 = c2(u2, o2);
          if (void 0 !== u2 && 0 !== u2.length || (u2 = l2.niceMax), e2.globals.isBarHorizontal) {
            a3 = 0;
            var p2 = e2.globals.labels.slice();
            u2 = v.getLargestStringFromArr(p2), u2 = c2(u2, { seriesIndex: n2, dataPointIndex: -1, w: e2 }), g2 = t3.dCtx.dimHelpers.getLargestStringFromMultiArr(u2, p2);
          }
          var f2 = new Mi(t3.dCtx.ctx), x2 = "rotate(".concat(r2.labels.rotate, " 0 0)"), b2 = f2.getTextRects(u2, r2.labels.style.fontSize, r2.labels.style.fontFamily, x2, false), m2 = b2;
          u2 !== g2 && (m2 = f2.getTextRects(g2, r2.labels.style.fontSize, r2.labels.style.fontFamily, x2, false)), i3.push({ width: (h2 > m2.width || h2 > b2.width ? h2 : m2.width > b2.width ? m2.width : b2.width) + a3, height: m2.height > b2.height ? m2.height : b2.height });
        } else i3.push({ width: 0, height: 0 });
      })), i3;
    } }, { key: "getyAxisTitleCoords", value: function() {
      var t3 = this, e2 = this.w, i3 = [];
      return e2.config.yaxis.map((function(e3, a3) {
        if (e3.show && void 0 !== e3.title.text) {
          var s2 = new Mi(t3.dCtx.ctx), r2 = "rotate(".concat(e3.title.rotate, " 0 0)"), n2 = s2.getTextRects(e3.title.text, e3.title.style.fontSize, e3.title.style.fontFamily, r2, false);
          i3.push({ width: n2.width, height: n2.height });
        } else i3.push({ width: 0, height: 0 });
      })), i3;
    } }, { key: "getTotalYAxisWidth", value: function() {
      var t3 = this.w, e2 = 0, i3 = 0, a3 = 0, s2 = t3.globals.yAxisScale.length > 1 ? 10 : 0, r2 = new Ri(this.dCtx.ctx), n2 = function(n3, o2) {
        var l2 = t3.config.yaxis[o2].floating, h2 = 0;
        n3.width > 0 && !l2 ? (h2 = n3.width + s2, (function(e3) {
          return t3.globals.ignoreYAxisIndexes.indexOf(e3) > -1;
        })(o2) && (h2 = h2 - n3.width - s2)) : h2 = l2 || r2.isYAxisHidden(o2) ? 0 : 5, t3.config.yaxis[o2].opposite ? a3 += h2 : i3 += h2, e2 += h2;
      };
      return t3.globals.yLabelsCoords.map((function(t4, e3) {
        n2(t4, e3);
      })), t3.globals.yTitleCoords.map((function(t4, e3) {
        n2(t4, e3);
      })), t3.globals.isBarHorizontal && !t3.config.yaxis[0].floating && (e2 = t3.globals.yLabelsCoords[0].width + t3.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i3, this.dCtx.yAxisWidthRight = a3, e2;
    } }]), t2;
  })(), pa = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.dCtx = e2;
    }
    return s(t2, [{ key: "gridPadForColumnsInNumericAxis", value: function(t3) {
      var e2 = this.w, i3 = e2.config, a3 = e2.globals;
      if (a3.noData || a3.collapsedSeries.length + a3.ancillaryCollapsedSeries.length === i3.series.length) return 0;
      var s2 = function(t4) {
        return ["bar", "rangeBar", "candlestick", "boxPlot"].includes(t4);
      }, r2 = i3.chart.type, n2 = 0, o2 = s2(r2) ? i3.series.length : 1;
      a3.comboBarCount > 0 && (o2 = a3.comboBarCount), a3.collapsedSeries.forEach((function(t4) {
        s2(t4.type) && (o2 -= 1);
      })), i3.chart.stacked && (o2 = 1);
      var l2 = s2(r2) || a3.comboBarCount > 0, h2 = Math.abs(a3.initialMaxX - a3.initialMinX);
      if (l2 && a3.isXNumeric && !a3.isBarHorizontal && o2 > 0 && 0 !== h2) {
        h2 <= 3 && (h2 = a3.dataPoints);
        var c2 = h2 / t3, d2 = a3.minXDiff && a3.minXDiff / c2 > 0 ? a3.minXDiff / c2 : 0;
        d2 > t3 / 2 && (d2 /= 2), (n2 = d2 * parseInt(i3.plotOptions.bar.columnWidth, 10) / 100) < 1 && (n2 = 1), a3.barPadForNumericAxis = n2;
      }
      return n2;
    } }, { key: "gridPadFortitleSubtitle", value: function() {
      var t3 = this, e2 = this.w, i3 = e2.globals, a3 = this.dCtx.isSparkline || !i3.axisCharts ? 0 : 10;
      ["title", "subtitle"].forEach((function(s3) {
        void 0 !== e2.config[s3].text ? a3 += e2.config[s3].margin : a3 += t3.dCtx.isSparkline || !i3.axisCharts ? 0 : 5;
      })), !e2.config.legend.show || "bottom" !== e2.config.legend.position || e2.config.legend.floating || i3.axisCharts || (a3 += 10);
      var s2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
      i3.gridHeight -= s2.height + r2.height + a3, i3.translateY += s2.height + r2.height + a3;
    } }, { key: "setGridXPosForDualYAxis", value: function(t3, e2) {
      var i3 = this.w, a3 = new Ri(this.dCtx.ctx);
      i3.config.yaxis.forEach((function(s2, r2) {
        -1 !== i3.globals.ignoreYAxisIndexes.indexOf(r2) || s2.floating || a3.isYAxisHidden(r2) || (s2.opposite && (i3.globals.translateX -= e2[r2].width + t3[r2].width + parseInt(s2.labels.style.fontSize, 10) / 1.2 + 12), i3.globals.translateX < 2 && (i3.globals.translateX = 2));
      }));
    } }]), t2;
  })(), fa = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new da(this), this.dimYAxis = new ga(this), this.dimXAxis = new ua(this), this.dimGrid = new pa(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
    }
    return s(t2, [{ key: "plotCoords", value: function() {
      var t3 = this, e2 = this.w, i3 = e2.globals;
      this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = { width: 0, height: 0 };
      var a3 = Array.isArray(e2.config.stroke.width) ? Math.max.apply(Math, f(e2.config.stroke.width)) : e2.config.stroke.width;
      this.isSparkline && ((e2.config.markers.discrete.length > 0 || e2.config.markers.size > 0) && Object.entries(this.gridPad).forEach((function(e3) {
        var i4 = p(e3, 2), a4 = i4[0], s3 = i4[1];
        t3.gridPad[a4] = Math.max(s3, t3.w.globals.markers.largestSize / 1.5);
      })), this.gridPad.top = Math.max(a3 / 2, this.gridPad.top), this.gridPad.bottom = Math.max(a3 / 2, this.gridPad.bottom)), i3.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i3.gridHeight = i3.gridHeight - this.gridPad.top - this.gridPad.bottom, i3.gridWidth = i3.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
      var s2 = this.dimGrid.gridPadForColumnsInNumericAxis(i3.gridWidth);
      i3.gridWidth = i3.gridWidth - 2 * s2, i3.translateX = i3.translateX + this.gridPad.left + this.xPadLeft + (s2 > 0 ? s2 : 0), i3.translateY = i3.translateY + this.gridPad.top;
    } }, { key: "setDimensionsForAxisCharts", value: function() {
      var t3 = this, e2 = this.w, i3 = e2.globals, a3 = this.dimYAxis.getyAxisLabelsCoords(), s2 = this.dimYAxis.getyAxisTitleCoords();
      i3.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), e2.globals.yLabelsCoords = [], e2.globals.yTitleCoords = [], e2.config.yaxis.map((function(t4, i4) {
        e2.globals.yLabelsCoords.push({ width: a3[i4].width, index: i4 }), e2.globals.yTitleCoords.push({ width: s2[i4].width, index: i4 });
      })), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
      var r2 = this.dimXAxis.getxAxisLabelsCoords(), n2 = this.dimXAxis.getxAxisGroupLabelsCoords(), o2 = this.dimXAxis.getxAxisTitleCoords();
      this.conditionalChecksForAxisCoords(r2, o2, n2), i3.translateXAxisY = e2.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i3.translateXAxisX = e2.globals.rotateXLabels && e2.globals.isXNumeric && e2.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e2.globals.isBarHorizontal && (i3.rotateXLabels = false, i3.translateXAxisY = parseInt(e2.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i3.translateXAxisY = i3.translateXAxisY + e2.config.xaxis.labels.offsetY, i3.translateXAxisX = i3.translateXAxisX + e2.config.xaxis.labels.offsetX;
      var l2 = this.yAxisWidth, h2 = this.xAxisHeight;
      i3.xAxisLabelsHeight = this.xAxisHeight - o2.height, i3.xAxisGroupLabelsHeight = i3.xAxisLabelsHeight - r2.height, i3.xAxisLabelsWidth = this.xAxisWidth, i3.xAxisHeight = this.xAxisHeight;
      var c2 = 10;
      ("radar" === e2.config.chart.type || this.isSparkline) && (l2 = 0, h2 = 0), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || "treemap" === e2.config.chart.type) && (l2 = 0, h2 = 0, c2 = 0), this.isSparkline || "treemap" === e2.config.chart.type || this.dimXAxis.additionalPaddingXLabels(r2);
      var d2 = function() {
        i3.translateX = l2 + t3.datalabelsCoords.width, i3.gridHeight = i3.svgHeight - t3.lgRect.height - h2 - (t3.isSparkline || "treemap" === e2.config.chart.type ? 0 : e2.globals.rotateXLabels ? 10 : 15), i3.gridWidth = i3.svgWidth - l2 - 2 * t3.datalabelsCoords.width;
      };
      switch ("top" === e2.config.xaxis.position && (c2 = i3.xAxisHeight - e2.config.xaxis.axisTicks.height - 5), e2.config.legend.position) {
        case "bottom":
          i3.translateY = c2, d2();
          break;
        case "top":
          i3.translateY = this.lgRect.height + c2, d2();
          break;
        case "left":
          i3.translateY = c2, i3.translateX = this.lgRect.width + l2 + this.datalabelsCoords.width, i3.gridHeight = i3.svgHeight - h2 - 12, i3.gridWidth = i3.svgWidth - this.lgRect.width - l2 - 2 * this.datalabelsCoords.width;
          break;
        case "right":
          i3.translateY = c2, i3.translateX = l2 + this.datalabelsCoords.width, i3.gridHeight = i3.svgHeight - h2 - 12, i3.gridWidth = i3.svgWidth - this.lgRect.width - l2 - 2 * this.datalabelsCoords.width - 5;
          break;
        default:
          throw new Error("Legend position not supported");
      }
      this.dimGrid.setGridXPosForDualYAxis(s2, a3), new aa(this.ctx).setYAxisXPosition(a3, s2);
    } }, { key: "setDimensionsForNonAxisCharts", value: function() {
      var t3 = this.w, e2 = t3.globals, i3 = t3.config, a3 = 0;
      t3.config.legend.show && !t3.config.legend.floating && (a3 = 20);
      var s2 = "pie" === i3.chart.type || "polarArea" === i3.chart.type || "donut" === i3.chart.type ? "pie" : "radialBar", r2 = i3.plotOptions[s2].offsetY, n2 = i3.plotOptions[s2].offsetX;
      if (!i3.legend.show || i3.legend.floating) {
        e2.gridHeight = e2.svgHeight;
        var o2 = e2.dom.elWrap.getBoundingClientRect().width;
        return e2.gridWidth = Math.min(o2, e2.gridHeight), e2.translateY = r2, void (e2.translateX = n2 + (e2.svgWidth - e2.gridWidth) / 2);
      }
      switch (i3.legend.position) {
        case "bottom":
          e2.gridHeight = e2.svgHeight - this.lgRect.height, e2.gridWidth = e2.svgWidth, e2.translateY = r2 - 10, e2.translateX = n2 + (e2.svgWidth - e2.gridWidth) / 2;
          break;
        case "top":
          e2.gridHeight = e2.svgHeight - this.lgRect.height, e2.gridWidth = e2.svgWidth, e2.translateY = this.lgRect.height + r2 + 10, e2.translateX = n2 + (e2.svgWidth - e2.gridWidth) / 2;
          break;
        case "left":
          e2.gridWidth = e2.svgWidth - this.lgRect.width - a3, e2.gridHeight = "auto" !== i3.chart.height ? e2.svgHeight : e2.gridWidth, e2.translateY = r2, e2.translateX = n2 + this.lgRect.width + a3;
          break;
        case "right":
          e2.gridWidth = e2.svgWidth - this.lgRect.width - a3 - 5, e2.gridHeight = "auto" !== i3.chart.height ? e2.svgHeight : e2.gridWidth, e2.translateY = r2, e2.translateX = n2 + 10;
          break;
        default:
          throw new Error("Legend position not supported");
      }
    } }, { key: "conditionalChecksForAxisCoords", value: function(t3, e2, i3) {
      var a3 = this.w, s2 = a3.globals.hasXaxisGroups ? 2 : 1, r2 = i3.height + t3.height + e2.height, n2 = a3.globals.isMultiLineX ? 1.2 : a3.globals.LINE_HEIGHT_RATIO, o2 = a3.globals.rotateXLabels ? 22 : 10, l2 = a3.globals.rotateXLabels && "bottom" === a3.config.legend.position ? 10 : 0;
      this.xAxisHeight = r2 * n2 + s2 * o2 + l2, this.xAxisWidth = t3.width, this.xAxisHeight - e2.height > a3.config.xaxis.labels.maxHeight && (this.xAxisHeight = a3.config.xaxis.labels.maxHeight), a3.config.xaxis.labels.minHeight && this.xAxisHeight < a3.config.xaxis.labels.minHeight && (this.xAxisHeight = a3.config.xaxis.labels.minHeight), a3.config.xaxis.floating && (this.xAxisHeight = 0);
      var h2 = 0, c2 = 0;
      a3.config.yaxis.forEach((function(t4) {
        h2 += t4.labels.minWidth, c2 += t4.labels.maxWidth;
      })), this.yAxisWidth < h2 && (this.yAxisWidth = h2), this.yAxisWidth > c2 && (this.yAxisWidth = c2);
    } }]), t2;
  })(), xa = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.lgCtx = e2;
    }
    return s(t2, [{ key: "getLegendStyles", value: function() {
      var t3, e2, i3, a3 = document.createElement("style");
      a3.setAttribute("type", "text/css");
      var s2 = (null === (t3 = this.lgCtx.ctx) || void 0 === t3 || null === (e2 = t3.opts) || void 0 === e2 || null === (i3 = e2.chart) || void 0 === i3 ? void 0 : i3.nonce) || this.w.config.chart.nonce;
      s2 && a3.setAttribute("nonce", s2);
      var r2 = document.createTextNode(Zi);
      return a3.appendChild(r2), a3;
    } }, { key: "getLegendDimensions", value: function() {
      var t3 = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e2 = t3.width;
      return { clwh: t3.height, clww: e2 };
    } }, { key: "appendToForeignObject", value: function() {
      var t3 = this.w.globals;
      false !== this.w.config.chart.injectStyleSheet && t3.dom.elLegendForeign.appendChild(this.getLegendStyles());
    } }, { key: "toggleDataSeries", value: function(t3, e2) {
      var i3 = this, a3 = this.w;
      if (a3.globals.axisCharts || "radialBar" === a3.config.chart.type) {
        a3.globals.resized = true;
        var s2 = null, r2 = null;
        if (a3.globals.risingSeries = [], a3.globals.axisCharts ? (s2 = a3.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t3, "']")), r2 = parseInt(s2.getAttribute("data:realIndex"), 10)) : (s2 = a3.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t3 + 1, "']")), r2 = parseInt(s2.getAttribute("rel"), 10) - 1), e2) [{ cs: a3.globals.collapsedSeries, csi: a3.globals.collapsedSeriesIndices }, { cs: a3.globals.ancillaryCollapsedSeries, csi: a3.globals.ancillaryCollapsedSeriesIndices }].forEach((function(t4) {
          i3.riseCollapsedSeries(t4.cs, t4.csi, r2);
        }));
        else this.hideSeries({ seriesEl: s2, realIndex: r2 });
      } else {
        var n2 = a3.globals.dom.Paper.findOne(" .apexcharts-series[rel='".concat(t3 + 1, "'] path")), o2 = a3.config.chart.type;
        if ("pie" === o2 || "polarArea" === o2 || "donut" === o2) {
          var l2 = a3.config.plotOptions.pie.donut.labels;
          new Mi(this.lgCtx.ctx).pathMouseDown(n2, null), this.lgCtx.ctx.pie.printDataLabelsInner(n2.node, l2);
        }
        n2.fire("click");
      }
    } }, { key: "getSeriesAfterCollapsing", value: function(t3) {
      var e2 = t3.realIndex, i3 = this.w, a3 = i3.globals, s2 = v.clone(i3.config.series);
      if (a3.axisCharts) {
        var r2 = i3.config.yaxis[a3.seriesYAxisReverseMap[e2]], n2 = { index: e2, data: s2[e2].data.slice(), type: s2[e2].type || i3.config.chart.type };
        if (r2 && r2.show && r2.showAlways) a3.ancillaryCollapsedSeriesIndices.indexOf(e2) < 0 && (a3.ancillaryCollapsedSeries.push(n2), a3.ancillaryCollapsedSeriesIndices.push(e2));
        else if (a3.collapsedSeriesIndices.indexOf(e2) < 0) {
          a3.collapsedSeries.push(n2), a3.collapsedSeriesIndices.push(e2);
          var o2 = a3.risingSeries.indexOf(e2);
          a3.risingSeries.splice(o2, 1);
        }
      } else a3.collapsedSeries.push({ index: e2, data: s2[e2] }), a3.collapsedSeriesIndices.push(e2);
      return a3.allSeriesCollapsed = a3.collapsedSeries.length + a3.ancillaryCollapsedSeries.length === i3.config.series.length, this._getSeriesBasedOnCollapsedState(s2);
    } }, { key: "hideSeries", value: function(t3) {
      for (var e2 = t3.seriesEl, i3 = t3.realIndex, a3 = this.w, s2 = this.getSeriesAfterCollapsing({ realIndex: i3 }), r2 = e2.childNodes, n2 = 0; n2 < r2.length; n2++) r2[n2].classList.contains("apexcharts-series-markers-wrap") && (r2[n2].classList.contains("apexcharts-hide") ? r2[n2].classList.remove("apexcharts-hide") : r2[n2].classList.add("apexcharts-hide"));
      this.lgCtx.ctx.updateHelpers._updateSeries(s2, a3.config.chart.animations.dynamicAnimation.enabled);
    } }, { key: "riseCollapsedSeries", value: function(t3, e2, i3) {
      var a3 = this.w, s2 = v.clone(a3.config.series);
      if (t3.length > 0) {
        for (var r2 = 0; r2 < t3.length; r2++) t3[r2].index === i3 && (a3.globals.axisCharts ? s2[i3].data = t3[r2].data.slice() : s2[i3] = t3[r2].data, "number" != typeof s2[i3] && (s2[i3].hidden = false), t3.splice(r2, 1), e2.splice(r2, 1), a3.globals.risingSeries.push(i3));
        s2 = this._getSeriesBasedOnCollapsedState(s2), this.lgCtx.ctx.updateHelpers._updateSeries(s2, a3.config.chart.animations.dynamicAnimation.enabled);
      }
    } }, { key: "_getSeriesBasedOnCollapsedState", value: function(t3) {
      var e2 = this.w, i3 = 0;
      return e2.globals.axisCharts ? t3.forEach((function(a3, s2) {
        e2.globals.collapsedSeriesIndices.indexOf(s2) < 0 && e2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2) < 0 || (t3[s2].data = [], i3++);
      })) : t3.forEach((function(a3, s2) {
        !e2.globals.collapsedSeriesIndices.indexOf(s2) < 0 && (t3[s2] = 0, i3++);
      })), e2.globals.allSeriesCollapsed = i3 === t3.length, t3;
    } }]), t2;
  })(), ba = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new xa(this);
    }
    return s(t2, [{ key: "init", value: function() {
      var t3 = this.w, e2 = t3.globals, i3 = t3.config, a3 = i3.legend.showForSingleSeries && 1 === e2.series.length || this.isBarsDistributed || e2.series.length > 1;
      if (this.legendHelpers.appendToForeignObject(), (a3 || !e2.axisCharts) && i3.legend.show) {
        for (; e2.dom.elLegendWrap.firstChild; ) e2.dom.elLegendWrap.removeChild(e2.dom.elLegendWrap.firstChild);
        this.drawLegends(), "bottom" === i3.legend.position || "top" === i3.legend.position ? this.legendAlignHorizontal() : "right" !== i3.legend.position && "left" !== i3.legend.position || this.legendAlignVertical();
      }
    } }, { key: "createLegendMarker", value: function(t3) {
      var e2 = t3.i, i3 = t3.fillcolor, a3 = this.w, s2 = document.createElement("span");
      s2.classList.add("apexcharts-legend-marker");
      var r2 = a3.config.legend.markers.shape || a3.config.markers.shape, n2 = r2;
      Array.isArray(r2) && (n2 = r2[e2]);
      var o2 = Array.isArray(a3.config.legend.markers.size) ? parseFloat(a3.config.legend.markers.size[e2]) : parseFloat(a3.config.legend.markers.size), l2 = Array.isArray(a3.config.legend.markers.offsetX) ? parseFloat(a3.config.legend.markers.offsetX[e2]) : parseFloat(a3.config.legend.markers.offsetX), h2 = Array.isArray(a3.config.legend.markers.offsetY) ? parseFloat(a3.config.legend.markers.offsetY[e2]) : parseFloat(a3.config.legend.markers.offsetY), c2 = Array.isArray(a3.config.legend.markers.strokeWidth) ? parseFloat(a3.config.legend.markers.strokeWidth[e2]) : parseFloat(a3.config.legend.markers.strokeWidth), d2 = s2.style;
      if (d2.height = 2 * (o2 + c2) + "px", d2.width = 2 * (o2 + c2) + "px", d2.left = l2 + "px", d2.top = h2 + "px", a3.config.legend.markers.customHTML) d2.background = "transparent", d2.color = i3[e2], Array.isArray(a3.config.legend.markers.customHTML) ? a3.config.legend.markers.customHTML[e2] && (s2.innerHTML = a3.config.legend.markers.customHTML[e2]()) : s2.innerHTML = a3.config.legend.markers.customHTML();
      else {
        var g2 = new Vi(this.ctx).getMarkerConfig({ cssClass: "apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(n2), seriesIndex: e2, strokeWidth: c2, size: o2 }), p2 = window.SVG().addTo(s2).size("100%", "100%"), f2 = new Mi(this.ctx).drawMarker(0, 0, u(u({}, g2), {}, { pointFillColor: Array.isArray(i3) ? i3[e2] : g2.pointFillColor, shape: n2 }));
        a3.globals.dom.Paper.find(".apexcharts-legend-marker.apexcharts-marker").forEach((function(t4) {
          t4.node.classList.contains("apexcharts-marker-triangle") ? t4.node.style.transform = "translate(50%, 45%)" : t4.node.style.transform = "translate(50%, 50%)";
        })), p2.add(f2);
      }
      return s2;
    } }, { key: "drawLegends", value: function() {
      var t3 = this, e2 = this, i3 = this.w, a3 = i3.config.legend.fontFamily, s2 = i3.globals.seriesNames, r2 = i3.config.legend.markers.fillColors ? i3.config.legend.markers.fillColors.slice() : i3.globals.colors.slice();
      if ("heatmap" === i3.config.chart.type) {
        var n2 = i3.config.plotOptions.heatmap.colorScale.ranges;
        s2 = n2.map((function(t4) {
          return t4.name ? t4.name : t4.from + " - " + t4.to;
        })), r2 = n2.map((function(t4) {
          return t4.color;
        }));
      } else this.isBarsDistributed && (s2 = i3.globals.labels.slice());
      i3.config.legend.customLegendItems.length && (s2 = i3.config.legend.customLegendItems);
      var o2 = i3.globals.legendFormatter, l2 = i3.config.legend.inverseOrder, h2 = [];
      i3.globals.seriesGroups.length > 1 && i3.config.legend.clusterGroupedSeries && i3.globals.seriesGroups.forEach((function(t4, e3) {
        h2[e3] = document.createElement("div"), h2[e3].classList.add("apexcharts-legend-group", "apexcharts-legend-group-".concat(e3)), "horizontal" === i3.config.legend.clusterGroupedSeriesOrientation ? i3.globals.dom.elLegendWrap.classList.add("apexcharts-legend-group-horizontal") : h2[e3].classList.add("apexcharts-legend-group-vertical");
      }));
      for (var c2 = function(e3) {
        var n3, l3 = o2(s2[e3], { seriesIndex: e3, w: i3 }), c3 = false, d3 = false;
        if (i3.globals.collapsedSeries.length > 0) for (var u2 = 0; u2 < i3.globals.collapsedSeries.length; u2++) i3.globals.collapsedSeries[u2].index === e3 && (c3 = true);
        if (i3.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var g2 = 0; g2 < i3.globals.ancillaryCollapsedSeriesIndices.length; g2++) i3.globals.ancillaryCollapsedSeriesIndices[g2] === e3 && (d3 = true);
        var p2 = t3.createLegendMarker({ i: e3, fillcolor: r2 });
        Mi.setAttrs(p2, { rel: e3 + 1, "data:collapsed": c3 || d3 }), (c3 || d3) && p2.classList.add("apexcharts-inactive-legend");
        var f2 = document.createElement("div"), x2 = document.createElement("span");
        x2.classList.add("apexcharts-legend-text"), x2.innerHTML = Array.isArray(l3) ? l3.join(" ") : l3;
        var b2 = i3.config.legend.labels.useSeriesColors ? i3.globals.colors[e3] : Array.isArray(i3.config.legend.labels.colors) ? null === (n3 = i3.config.legend.labels.colors) || void 0 === n3 ? void 0 : n3[e3] : i3.config.legend.labels.colors;
        b2 || (b2 = i3.config.chart.foreColor), x2.style.color = b2, x2.style.fontSize = parseFloat(i3.config.legend.fontSize) + "px", x2.style.fontWeight = i3.config.legend.fontWeight, x2.style.fontFamily = a3 || i3.config.chart.fontFamily, Mi.setAttrs(x2, { rel: e3 + 1, i: e3, "data:default-text": encodeURIComponent(l3), "data:collapsed": c3 || d3 }), f2.appendChild(p2), f2.appendChild(x2);
        var m2 = new Pi(t3.ctx);
        i3.config.legend.showForZeroSeries || 0 === m2.getSeriesTotalByIndex(e3) && m2.seriesHaveSameValues(e3) && !m2.isSeriesNull(e3) && -1 === i3.globals.collapsedSeriesIndices.indexOf(e3) && -1 === i3.globals.ancillaryCollapsedSeriesIndices.indexOf(e3) && f2.classList.add("apexcharts-hidden-zero-series");
        i3.config.legend.showForNullSeries || m2.isSeriesNull(e3) && -1 === i3.globals.collapsedSeriesIndices.indexOf(e3) && -1 === i3.globals.ancillaryCollapsedSeriesIndices.indexOf(e3) && f2.classList.add("apexcharts-hidden-null-series"), h2.length ? i3.globals.seriesGroups.forEach((function(t4, a4) {
          var s3;
          t4.includes(null === (s3 = i3.config.series[e3]) || void 0 === s3 ? void 0 : s3.name) && (i3.globals.dom.elLegendWrap.appendChild(h2[a4]), h2[a4].appendChild(f2));
        })) : i3.globals.dom.elLegendWrap.appendChild(f2), i3.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(i3.config.legend.horizontalAlign)), i3.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + i3.config.legend.position), f2.classList.add("apexcharts-legend-series"), f2.style.margin = "".concat(i3.config.legend.itemMargin.vertical, "px ").concat(i3.config.legend.itemMargin.horizontal, "px"), i3.globals.dom.elLegendWrap.style.width = i3.config.legend.width ? i3.config.legend.width + "px" : "", i3.globals.dom.elLegendWrap.style.height = i3.config.legend.height ? i3.config.legend.height + "px" : "", Mi.setAttrs(f2, { rel: e3 + 1, seriesName: v.escapeString(s2[e3]), "data:collapsed": c3 || d3 }), (c3 || d3) && f2.classList.add("apexcharts-inactive-legend"), i3.config.legend.onItemClick.toggleDataSeries || f2.classList.add("apexcharts-no-click");
      }, d2 = l2 ? s2.length - 1 : 0; l2 ? d2 >= 0 : d2 <= s2.length - 1; l2 ? d2-- : d2++) c2(d2);
      i3.globals.dom.elWrap.addEventListener("click", e2.onLegendClick, true), i3.config.legend.onItemHover.highlightDataSeries && 0 === i3.config.legend.customLegendItems.length && (i3.globals.dom.elWrap.addEventListener("mousemove", e2.onLegendHovered, true), i3.globals.dom.elWrap.addEventListener("mouseout", e2.onLegendHovered, true));
    } }, { key: "setLegendWrapXY", value: function(t3, e2) {
      var i3 = this.w, a3 = i3.globals.dom.elLegendWrap, s2 = a3.clientHeight, r2 = 0, n2 = 0;
      if ("bottom" === i3.config.legend.position) n2 = i3.globals.svgHeight - Math.min(s2, i3.globals.svgHeight / 2) - 5;
      else if ("top" === i3.config.legend.position) {
        var o2 = new fa(this.ctx), l2 = o2.dimHelpers.getTitleSubtitleCoords("title").height, h2 = o2.dimHelpers.getTitleSubtitleCoords("subtitle").height;
        n2 = (l2 > 0 ? l2 - 10 : 0) + (h2 > 0 ? h2 - 10 : 0);
      }
      a3.style.position = "absolute", r2 = r2 + t3 + i3.config.legend.offsetX, n2 = n2 + e2 + i3.config.legend.offsetY, a3.style.left = r2 + "px", a3.style.top = n2 + "px", "right" === i3.config.legend.position && (a3.style.left = "auto", a3.style.right = 25 + i3.config.legend.offsetX + "px");
      ["width", "height"].forEach((function(t4) {
        a3.style[t4] && (a3.style[t4] = parseInt(i3.config.legend[t4], 10) + "px");
      }));
    } }, { key: "legendAlignHorizontal", value: function() {
      var t3 = this.w;
      t3.globals.dom.elLegendWrap.style.right = 0;
      var e2 = new fa(this.ctx), i3 = e2.dimHelpers.getTitleSubtitleCoords("title"), a3 = e2.dimHelpers.getTitleSubtitleCoords("subtitle"), s2 = 0;
      "top" === t3.config.legend.position && (s2 = i3.height + a3.height + t3.config.title.margin + t3.config.subtitle.margin - 10), this.setLegendWrapXY(20, s2);
    } }, { key: "legendAlignVertical", value: function() {
      var t3 = this.w, e2 = this.legendHelpers.getLegendDimensions(), i3 = 0;
      "left" === t3.config.legend.position && (i3 = 20), "right" === t3.config.legend.position && (i3 = t3.globals.svgWidth - e2.clww - 10), this.setLegendWrapXY(i3, 20);
    } }, { key: "onLegendHovered", value: function(t3) {
      var e2 = this.w, i3 = t3.target.classList.contains("apexcharts-legend-series") || t3.target.classList.contains("apexcharts-legend-text") || t3.target.classList.contains("apexcharts-legend-marker");
      if ("heatmap" === e2.config.chart.type || this.isBarsDistributed) {
        if (i3) {
          var a3 = parseInt(t3.target.getAttribute("rel"), 10) - 1;
          this.ctx.events.fireEvent("legendHover", [this.ctx, a3, this.w]), new $i(this.ctx).highlightRangeInSeries(t3, t3.target);
        }
      } else !t3.target.classList.contains("apexcharts-inactive-legend") && i3 && new $i(this.ctx).toggleSeriesOnHover(t3, t3.target);
    } }, { key: "onLegendClick", value: function(t3) {
      var e2 = this.w;
      if (!e2.config.legend.customLegendItems.length && (t3.target.classList.contains("apexcharts-legend-series") || t3.target.classList.contains("apexcharts-legend-text") || t3.target.classList.contains("apexcharts-legend-marker"))) {
        var i3 = parseInt(t3.target.getAttribute("rel"), 10) - 1, a3 = "true" === t3.target.getAttribute("data:collapsed"), s2 = this.w.config.chart.events.legendClick;
        "function" == typeof s2 && s2(this.ctx, i3, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i3, this.w]);
        var r2 = this.w.config.legend.markers.onClick;
        "function" == typeof r2 && t3.target.classList.contains("apexcharts-legend-marker") && (r2(this.ctx, i3, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i3, this.w])), "treemap" !== e2.config.chart.type && "heatmap" !== e2.config.chart.type && !this.isBarsDistributed && e2.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i3, a3);
      }
    } }]), t2;
  })(), ma = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
      var a3 = this.w;
      this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = a3.globals.minX, this.maxX = a3.globals.maxX;
    }
    return s(t2, [{ key: "createToolbar", value: function() {
      var t3 = this, e2 = this.w, i3 = function() {
        return document.createElement("div");
      }, a3 = i3();
      if (a3.setAttribute("class", "apexcharts-toolbar"), a3.style.top = e2.config.chart.toolbar.offsetY + "px", a3.style.right = 3 - e2.config.chart.toolbar.offsetX + "px", e2.globals.dom.elWrap.appendChild(a3), this.elZoom = i3(), this.elZoomIn = i3(), this.elZoomOut = i3(), this.elPan = i3(), this.elSelection = i3(), this.elZoomReset = i3(), this.elMenuIcon = i3(), this.elMenu = i3(), this.elCustomIcons = [], this.t = e2.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var s2 = 0; s2 < this.t.customIcons.length; s2++) this.elCustomIcons.push(i3());
      var r2 = [], n2 = function(i4, a4, s3) {
        var n3 = i4.toLowerCase();
        t3.t[n3] && e2.config.chart.zoom.enabled && r2.push({ el: a4, icon: "string" == typeof t3.t[n3] ? t3.t[n3] : s3, title: t3.localeValues[i4], class: "apexcharts-".concat(n3, "-icon") });
      };
      n2("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), n2("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');
      var o2 = function(i4) {
        t3.t[i4] && e2.config.chart[i4].enabled && r2.push({ el: "zoom" === i4 ? t3.elZoom : t3.elSelection, icon: "string" == typeof t3.t[i4] ? t3.t[i4] : "zoom" === i4 ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>', title: t3.localeValues["zoom" === i4 ? "selectionZoom" : "selection"], class: "apexcharts-".concat(i4, "-icon") });
      };
      o2("zoom"), o2("selection"), this.t.pan && e2.config.chart.zoom.enabled && r2.push({ el: this.elPan, icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>', title: this.localeValues.pan, class: "apexcharts-pan-icon" }), n2("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && r2.push({ el: this.elMenuIcon, icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
      for (var l2 = 0; l2 < this.elCustomIcons.length; l2++) r2.push({ el: this.elCustomIcons[l2], icon: this.t.customIcons[l2].icon, title: this.t.customIcons[l2].title, index: this.t.customIcons[l2].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l2].class });
      r2.forEach((function(t4, e3) {
        t4.index && v.moveIndexInArray(r2, e3, t4.index);
      }));
      for (var h2 = 0; h2 < r2.length; h2++) Mi.setAttrs(r2[h2].el, { class: r2[h2].class, title: r2[h2].title }), r2[h2].el.innerHTML = r2[h2].icon, a3.appendChild(r2[h2].el);
      this._createHamburgerMenu(a3), e2.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e2.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e2.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
    } }, { key: "_createHamburgerMenu", value: function(t3) {
      this.elMenuItems = [], t3.appendChild(this.elMenu), Mi.setAttrs(this.elMenu, { class: "apexcharts-menu" });
      for (var e2 = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], i3 = 0; i3 < e2.length; i3++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i3].innerHTML = e2[i3].title, Mi.setAttrs(this.elMenuItems[i3], { class: "apexcharts-menu-item ".concat(e2[i3].name), title: e2[i3].title }), this.elMenu.appendChild(this.elMenuItems[i3]);
    } }, { key: "addToolbarEventListeners", value: function() {
      var t3 = this;
      this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((function(e3) {
        e3.classList.contains("exportSVG") ? e3.addEventListener("click", t3.handleDownload.bind(t3, "svg")) : e3.classList.contains("exportPNG") ? e3.addEventListener("click", t3.handleDownload.bind(t3, "png")) : e3.classList.contains("exportCSV") && e3.addEventListener("click", t3.handleDownload.bind(t3, "csv"));
      }));
      for (var e2 = 0; e2 < this.t.customIcons.length; e2++) this.elCustomIcons[e2].addEventListener("click", this.t.customIcons[e2].click.bind(this, this.ctx, this.ctx.w));
    } }, { key: "toggleZoomSelection", value: function(t3) {
      this.ctx.getSyncedCharts().forEach((function(e2) {
        e2.ctx.toolbar.toggleOtherControls();
        var i3 = "selection" === t3 ? e2.ctx.toolbar.elSelection : e2.ctx.toolbar.elZoom, a3 = "selection" === t3 ? "selectionEnabled" : "zoomEnabled";
        e2.w.globals[a3] = !e2.w.globals[a3], i3.classList.contains(e2.ctx.toolbar.selectedClass) ? i3.classList.remove(e2.ctx.toolbar.selectedClass) : i3.classList.add(e2.ctx.toolbar.selectedClass);
      }));
    } }, { key: "getToolbarIconsReference", value: function() {
      var t3 = this.w;
      this.elZoom || (this.elZoom = t3.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t3.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t3.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
    } }, { key: "enableZoomPanFromToolbar", value: function(t3) {
      this.toggleOtherControls(), "pan" === t3 ? this.w.globals.panEnabled = true : this.w.globals.zoomEnabled = true;
      var e2 = "pan" === t3 ? this.elPan : this.elZoom, i3 = "pan" === t3 ? this.elZoom : this.elPan;
      e2 && e2.classList.add(this.selectedClass), i3 && i3.classList.remove(this.selectedClass);
    } }, { key: "togglePanning", value: function() {
      this.ctx.getSyncedCharts().forEach((function(t3) {
        t3.ctx.toolbar.toggleOtherControls(), t3.w.globals.panEnabled = !t3.w.globals.panEnabled, t3.ctx.toolbar.elPan.classList.contains(t3.ctx.toolbar.selectedClass) ? t3.ctx.toolbar.elPan.classList.remove(t3.ctx.toolbar.selectedClass) : t3.ctx.toolbar.elPan.classList.add(t3.ctx.toolbar.selectedClass);
      }));
    } }, { key: "toggleOtherControls", value: function() {
      var t3 = this, e2 = this.w;
      e2.globals.panEnabled = false, e2.globals.zoomEnabled = false, e2.globals.selectionEnabled = false, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach((function(e3) {
        e3 && e3.classList.remove(t3.selectedClass);
      }));
    } }, { key: "handleZoomIn", value: function() {
      var t3 = this.w;
      t3.globals.isRangeBar && (this.minX = t3.globals.minY, this.maxX = t3.globals.maxY);
      var e2 = (this.minX + this.maxX) / 2, i3 = (this.minX + e2) / 2, a3 = (this.maxX + e2) / 2, s2 = this._getNewMinXMaxX(i3, a3);
      t3.globals.disableZoomIn || this.zoomUpdateOptions(s2.minX, s2.maxX);
    } }, { key: "handleZoomOut", value: function() {
      var t3 = this.w;
      if (t3.globals.isRangeBar && (this.minX = t3.globals.minY, this.maxX = t3.globals.maxY), !("datetime" === t3.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3)) {
        var e2 = (this.minX + this.maxX) / 2, i3 = this.minX - (e2 - this.minX), a3 = this.maxX - (e2 - this.maxX), s2 = this._getNewMinXMaxX(i3, a3);
        t3.globals.disableZoomOut || this.zoomUpdateOptions(s2.minX, s2.maxX);
      }
    } }, { key: "_getNewMinXMaxX", value: function(t3, e2) {
      var i3 = this.w.config.xaxis.convertedCatToNumeric;
      return { minX: i3 ? Math.floor(t3) : t3, maxX: i3 ? Math.floor(e2) : e2 };
    } }, { key: "zoomUpdateOptions", value: function(t3, e2) {
      var i3 = this.w;
      if (void 0 !== t3 || void 0 !== e2) {
        if (!(i3.config.xaxis.convertedCatToNumeric && (t3 < 1 && (t3 = 1, e2 = i3.globals.dataPoints), e2 - t3 < 2))) {
          var a3 = { min: t3, max: e2 }, s2 = this.getBeforeZoomRange(a3);
          s2 && (a3 = s2.xaxis);
          var r2 = { xaxis: a3 }, n2 = v.clone(i3.globals.initialConfig.yaxis);
          i3.config.chart.group || (r2.yaxis = n2), this.w.globals.zoomed = true, this.ctx.updateHelpers._updateOptions(r2, false, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a3, n2);
        }
      } else this.handleZoomReset();
    } }, { key: "zoomCallback", value: function(t3, e2) {
      "function" == typeof this.ev.zoomed && (this.ev.zoomed(this.ctx, { xaxis: t3, yaxis: e2 }), this.ctx.events.fireEvent("zoomed", { xaxis: t3, yaxis: e2 }));
    } }, { key: "getBeforeZoomRange", value: function(t3, e2) {
      var i3 = null;
      return "function" == typeof this.ev.beforeZoom && (i3 = this.ev.beforeZoom(this, { xaxis: t3, yaxis: e2 })), i3;
    } }, { key: "toggleMenu", value: function() {
      var t3 = this;
      window.setTimeout((function() {
        t3.elMenu.classList.contains("apexcharts-menu-open") ? t3.elMenu.classList.remove("apexcharts-menu-open") : t3.elMenu.classList.add("apexcharts-menu-open");
      }), 0);
    } }, { key: "handleDownload", value: function(t3) {
      var e2 = this.w, i3 = new Qi(this.ctx);
      switch (t3) {
        case "svg":
          i3.exportToSVG(this.ctx);
          break;
        case "png":
          i3.exportToPng(this.ctx);
          break;
        case "csv":
          i3.exportToCSV({ series: e2.config.series, columnDelimiter: e2.config.chart.toolbar.export.csv.columnDelimiter });
      }
    } }, { key: "handleZoomReset", value: function(t3) {
      this.ctx.getSyncedCharts().forEach((function(t4) {
        var e2 = t4.w;
        if (e2.globals.lastXAxis.min = e2.globals.initialConfig.xaxis.min, e2.globals.lastXAxis.max = e2.globals.initialConfig.xaxis.max, t4.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e2.config.chart.events.beforeResetZoom) {
          var i3 = e2.config.chart.events.beforeResetZoom(t4, e2);
          i3 && t4.updateHelpers.revertDefaultAxisMinMax(i3);
        }
        "function" == typeof e2.config.chart.events.zoomed && t4.ctx.toolbar.zoomCallback({ min: e2.config.xaxis.min, max: e2.config.xaxis.max }), e2.globals.zoomed = false;
        var a3 = t4.ctx.series.emptyCollapsedSeries(v.clone(e2.globals.initialSeries));
        t4.updateHelpers._updateSeries(a3, e2.config.chart.animations.dynamicAnimation.enabled);
      }));
    } }, { key: "destroy", value: function() {
      this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
    } }]), t2;
  })(), va = (function(t2) {
    h(a3, t2);
    var e2 = n(a3);
    function a3(t3) {
      var s2;
      return i2(this, a3), (s2 = e2.call(this, t3)).ctx = t3, s2.w = t3.w, s2.dragged = false, s2.graphics = new Mi(s2.ctx), s2.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend", "wheel"], s2.clientX = 0, s2.clientY = 0, s2.startX = 0, s2.endX = 0, s2.dragX = 0, s2.startY = 0, s2.endY = 0, s2.dragY = 0, s2.moveDirection = "none", s2.debounceTimer = null, s2.debounceDelay = 100, s2.wheelDelay = 400, s2;
    }
    return s(a3, [{ key: "init", value: function(t3) {
      var e3 = this, i3 = t3.xyRatios, a4 = this.w, s2 = this;
      this.xyRatios = i3, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a4.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.constraints = new kt(0, 0, a4.globals.gridWidth, a4.globals.gridHeight), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a4.globals.dom.Paper.add(this.zoomRect), a4.globals.dom.Paper.add(this.selectionRect), "x" === a4.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: a4.globals.gridWidth, maxY: a4.globals.gridHeight }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : "y" === a4.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: a4.globals.gridWidth }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a4.globals.dom.baseEl.querySelector("".concat(a4.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach((function(t4) {
        e3.hoverArea.addEventListener(t4, s2.svgMouseEvents.bind(s2, i3), { capture: false, passive: true });
      })), a4.config.chart.zoom.enabled && a4.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", s2.mouseWheelEvent.bind(s2), { capture: false, passive: false });
    } }, { key: "destroy", value: function() {
      this.slDraggableRect && (this.slDraggableRect.draggable(false), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
    } }, { key: "svgMouseEvents", value: function(t3, e3) {
      var i3 = this.w, a4 = this.ctx.toolbar, s2 = i3.globals.zoomEnabled ? i3.config.chart.zoom.type : i3.config.chart.selection.type, r2 = i3.config.chart.toolbar.autoSelected;
      if (e3.shiftKey ? (this.shiftWasPressed = true, a4.enableZoomPanFromToolbar("pan" === r2 ? "zoom" : "pan")) : this.shiftWasPressed && (a4.enableZoomPanFromToolbar(r2), this.shiftWasPressed = false), e3.target) {
        var n2, o2 = e3.target.classList;
        if (e3.target.parentNode && null !== e3.target.parentNode && (n2 = e3.target.parentNode.classList), !(o2.contains("apexcharts-legend-marker") || o2.contains("apexcharts-legend-text") || n2 && n2.contains("apexcharts-toolbar"))) {
          if (this.clientX = "touchmove" === e3.type || "touchstart" === e3.type ? e3.touches[0].clientX : "touchend" === e3.type ? e3.changedTouches[0].clientX : e3.clientX, this.clientY = "touchmove" === e3.type || "touchstart" === e3.type ? e3.touches[0].clientY : "touchend" === e3.type ? e3.changedTouches[0].clientY : e3.clientY, "mousedown" === e3.type && 1 === e3.which || "touchstart" === e3.type) {
            var l2 = this.gridRect.getBoundingClientRect();
            this.startX = this.clientX - l2.left - i3.globals.barPadForNumericAxis, this.startY = this.clientY - l2.top, this.dragged = false, this.w.globals.mousedown = true;
          }
          ("mousemove" === e3.type && 1 === e3.which || "touchmove" === e3.type) && (this.dragged = true, i3.globals.panEnabled ? (i3.globals.selection = null, this.w.globals.mousedown && this.panDragging({ context: this, zoomtype: s2, xyRatios: t3 })) : (this.w.globals.mousedown && i3.globals.zoomEnabled || this.w.globals.mousedown && i3.globals.selectionEnabled) && (this.selection = this.selectionDrawing({ context: this, zoomtype: s2 }))), "mouseup" !== e3.type && "touchend" !== e3.type && "mouseleave" !== e3.type || this.handleMouseUp({ zoomtype: s2 }), this.makeSelectionRectDraggable();
        }
      }
    } }, { key: "handleMouseUp", value: function(t3) {
      var e3, i3 = t3.zoomtype, a4 = t3.isResized, s2 = this.w, r2 = null === (e3 = this.gridRect) || void 0 === e3 ? void 0 : e3.getBoundingClientRect();
      r2 && (this.w.globals.mousedown || a4) && (this.endX = this.clientX - r2.left - s2.globals.barPadForNumericAxis, this.endY = this.clientY - r2.top, this.dragX = Math.abs(this.endX - this.startX), this.dragY = Math.abs(this.endY - this.startY), (s2.globals.zoomEnabled || s2.globals.selectionEnabled) && this.selectionDrawn({ context: this, zoomtype: i3 })), s2.globals.zoomEnabled && this.hideSelectionRect(this.selectionRect), this.dragged = false, this.w.globals.mousedown = false;
    } }, { key: "mouseWheelEvent", value: function(t3) {
      var e3 = this, i3 = this.w;
      t3.preventDefault();
      var a4 = Date.now();
      a4 - i3.globals.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(t3), i3.globals.lastWheelExecution = a4), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout((function() {
        a4 - i3.globals.lastWheelExecution > e3.wheelDelay && (e3.executeMouseWheelZoom(t3), i3.globals.lastWheelExecution = a4);
      }), this.debounceDelay);
    } }, { key: "executeMouseWheelZoom", value: function(t3) {
      var e3, i3 = this.w;
      this.minX = i3.globals.isRangeBar ? i3.globals.minY : i3.globals.minX, this.maxX = i3.globals.isRangeBar ? i3.globals.maxY : i3.globals.maxX;
      var a4 = null === (e3 = this.gridRect) || void 0 === e3 ? void 0 : e3.getBoundingClientRect();
      if (a4) {
        var s2, r2, n2, o2 = (t3.clientX - a4.left) / a4.width, l2 = this.minX, h2 = this.maxX, c2 = h2 - l2;
        if (t3.deltaY < 0) {
          var d2 = l2 + o2 * c2;
          r2 = d2 - (s2 = 0.5 * c2) / 2, n2 = d2 + s2 / 2;
        } else r2 = l2 - (s2 = 1.5 * c2) / 2, n2 = h2 + s2 / 2;
        if (!i3.globals.isRangeBar) {
          r2 = Math.max(r2, i3.globals.initialMinX), n2 = Math.min(n2, i3.globals.initialMaxX);
          var u2 = 0.01 * (i3.globals.initialMaxX - i3.globals.initialMinX);
          if (n2 - r2 < u2) {
            var g2 = (r2 + n2) / 2;
            r2 = g2 - u2 / 2, n2 = g2 + u2 / 2;
          }
        }
        var p2 = this._getNewMinXMaxX(r2, n2);
        isNaN(p2.minX) || isNaN(p2.maxX) || this.zoomUpdateOptions(p2.minX, p2.maxX);
      }
    } }, { key: "makeSelectionRectDraggable", value: function() {
      var t3 = this, e3 = this.w;
      if (this.selectionRect) {
        var i3 = this.selectionRect.node.getBoundingClientRect();
        i3.width > 0 && i3.height > 0 && (this.selectionRect.select(false).resize(false), this.selectionRect.select({ createRot: function() {
        }, updateRot: function() {
        }, createHandle: function(t4, e4, i4, a4, s2) {
          return "l" === s2 || "r" === s2 ? t4.circle(8).css({ "stroke-width": 1, stroke: "#333", fill: "#fff" }) : t4.circle(0);
        }, updateHandle: function(t4, e4) {
          return t4.center(e4[0], e4[1]);
        } }).resize().on("resize", (function() {
          var i4 = e3.globals.zoomEnabled ? e3.config.chart.zoom.type : e3.config.chart.selection.type;
          t3.handleMouseUp({ zoomtype: i4, isResized: true });
        })));
      }
    } }, { key: "preselectedSelection", value: function() {
      var t3 = this.w, e3 = this.xyRatios;
      if (!t3.globals.zoomEnabled) {
        if (void 0 !== t3.globals.selection && null !== t3.globals.selection) this.drawSelectionRect(u(u({}, t3.globals.selection), {}, { translateX: t3.globals.translateX, translateY: t3.globals.translateY }));
        else if (void 0 !== t3.config.chart.selection.xaxis.min && void 0 !== t3.config.chart.selection.xaxis.max) {
          var i3 = (t3.config.chart.selection.xaxis.min - t3.globals.minX) / e3.xRatio, a4 = t3.globals.gridWidth - (t3.globals.maxX - t3.config.chart.selection.xaxis.max) / e3.xRatio - i3;
          t3.globals.isRangeBar && (i3 = (t3.config.chart.selection.xaxis.min - t3.globals.yAxisScale[0].niceMin) / e3.invertedYRatio, a4 = (t3.config.chart.selection.xaxis.max - t3.config.chart.selection.xaxis.min) / e3.invertedYRatio);
          var s2 = { x: i3, y: 0, width: a4, height: t3.globals.gridHeight, translateX: t3.globals.translateX, translateY: t3.globals.translateY, selectionEnabled: true };
          this.drawSelectionRect(s2), this.makeSelectionRectDraggable(), "function" == typeof t3.config.chart.events.selection && t3.config.chart.events.selection(this.ctx, { xaxis: { min: t3.config.chart.selection.xaxis.min, max: t3.config.chart.selection.xaxis.max }, yaxis: {} });
        }
      }
    } }, { key: "drawSelectionRect", value: function(t3) {
      var e3 = t3.x, i3 = t3.y, a4 = t3.width, s2 = t3.height, r2 = t3.translateX, n2 = void 0 === r2 ? 0 : r2, o2 = t3.translateY, l2 = void 0 === o2 ? 0 : o2, h2 = this.w, c2 = this.zoomRect, d2 = this.selectionRect;
      if (this.dragged || null !== h2.globals.selection) {
        var u2 = { transform: "translate(" + n2 + ", " + l2 + ")" };
        h2.globals.zoomEnabled && this.dragged && (a4 < 0 && (a4 = 1), c2.attr({ x: e3, y: i3, width: a4, height: s2, fill: h2.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": h2.config.chart.zoom.zoomedArea.fill.opacity, stroke: h2.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": h2.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": h2.config.chart.zoom.zoomedArea.stroke.opacity }), Mi.setAttrs(c2.node, u2)), h2.globals.selectionEnabled && (d2.attr({ x: e3, y: i3, width: a4 > 0 ? a4 : 0, height: s2 > 0 ? s2 : 0, fill: h2.config.chart.selection.fill.color, "fill-opacity": h2.config.chart.selection.fill.opacity, stroke: h2.config.chart.selection.stroke.color, "stroke-width": h2.config.chart.selection.stroke.width, "stroke-dasharray": h2.config.chart.selection.stroke.dashArray, "stroke-opacity": h2.config.chart.selection.stroke.opacity }), Mi.setAttrs(d2.node, u2));
      }
    } }, { key: "hideSelectionRect", value: function(t3) {
      t3 && t3.attr({ x: 0, y: 0, width: 0, height: 0 });
    } }, { key: "selectionDrawing", value: function(t3) {
      var e3 = t3.context, i3 = t3.zoomtype, a4 = this.w, s2 = e3, r2 = this.gridRect.getBoundingClientRect(), n2 = s2.startX - 1, o2 = s2.startY, l2 = false, h2 = false, c2 = s2.clientX - r2.left - a4.globals.barPadForNumericAxis, d2 = s2.clientY - r2.top, g2 = c2 - n2, p2 = d2 - o2, f2 = { translateX: a4.globals.translateX, translateY: a4.globals.translateY };
      return Math.abs(g2 + n2) > a4.globals.gridWidth ? g2 = a4.globals.gridWidth - n2 : c2 < 0 && (g2 = n2), n2 > c2 && (l2 = true, g2 = Math.abs(g2)), o2 > d2 && (h2 = true, p2 = Math.abs(p2)), f2 = u(u({}, f2 = "x" === i3 ? { x: l2 ? n2 - g2 : n2, y: 0, width: g2, height: a4.globals.gridHeight } : "y" === i3 ? { x: 0, y: h2 ? o2 - p2 : o2, width: a4.globals.gridWidth, height: p2 } : { x: l2 ? n2 - g2 : n2, y: h2 ? o2 - p2 : o2, width: g2, height: p2 }), {}, { translateX: a4.globals.translateX, translateY: a4.globals.translateY }), s2.drawSelectionRect(f2), s2.selectionDragging("resizing"), f2;
    } }, { key: "selectionDragging", value: function(t3, e3) {
      var i3 = this, a4 = this.w;
      if (e3) {
        e3.preventDefault();
        var s2 = e3.detail, r2 = s2.handler, n2 = s2.box, o2 = n2.x, l2 = n2.y;
        o2 < this.constraints.x && (o2 = this.constraints.x), l2 < this.constraints.y && (l2 = this.constraints.y), n2.x2 > this.constraints.x2 && (o2 = this.constraints.x2 - n2.w), n2.y2 > this.constraints.y2 && (l2 = this.constraints.y2 - n2.h), r2.move(o2, l2);
        var h2 = this.xyRatios, c2 = this.selectionRect, d2 = 0;
        "resizing" === t3 && (d2 = 30);
        var u2 = function(t4) {
          return parseFloat(c2.node.getAttribute(t4));
        }, g2 = { x: u2("x"), y: u2("y"), width: u2("width"), height: u2("height") };
        a4.globals.selection = g2, "function" == typeof a4.config.chart.events.selection && a4.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout((function() {
          var t4, e4, s3, r3, n3 = i3.gridRect.getBoundingClientRect(), o3 = c2.node.getBoundingClientRect();
          a4.globals.isRangeBar ? (t4 = a4.globals.yAxisScale[0].niceMin + (o3.left - n3.left) * h2.invertedYRatio, e4 = a4.globals.yAxisScale[0].niceMin + (o3.right - n3.left) * h2.invertedYRatio, s3 = 0, r3 = 1) : (t4 = a4.globals.xAxisScale.niceMin + (o3.left - n3.left) * h2.xRatio, e4 = a4.globals.xAxisScale.niceMin + (o3.right - n3.left) * h2.xRatio, s3 = a4.globals.yAxisScale[0].niceMin + (n3.bottom - o3.bottom) * h2.yRatio[0], r3 = a4.globals.yAxisScale[0].niceMax - (o3.top - n3.top) * h2.yRatio[0]);
          var l3 = { xaxis: { min: t4, max: e4 }, yaxis: { min: s3, max: r3 } };
          a4.config.chart.events.selection(i3.ctx, l3), a4.config.chart.brush.enabled && void 0 !== a4.config.chart.events.brushScrolled && a4.config.chart.events.brushScrolled(i3.ctx, l3);
        }), d2));
      }
    } }, { key: "selectionDrawn", value: function(t3) {
      var e3, i3, a4 = t3.context, s2 = t3.zoomtype, r2 = this.w, n2 = a4, o2 = this.xyRatios, l2 = this.ctx.toolbar, h2 = r2.globals.zoomEnabled ? n2.zoomRect.node.getBoundingClientRect() : n2.selectionRect.node.getBoundingClientRect(), c2 = n2.gridRect.getBoundingClientRect(), d2 = h2.left - c2.left - r2.globals.barPadForNumericAxis, u2 = h2.right - c2.left - r2.globals.barPadForNumericAxis, g2 = h2.top - c2.top, p2 = h2.bottom - c2.top;
      r2.globals.isRangeBar ? (e3 = r2.globals.yAxisScale[0].niceMin + d2 * o2.invertedYRatio, i3 = r2.globals.yAxisScale[0].niceMin + u2 * o2.invertedYRatio) : (e3 = r2.globals.xAxisScale.niceMin + d2 * o2.xRatio, i3 = r2.globals.xAxisScale.niceMin + u2 * o2.xRatio);
      var f2 = [], x2 = [];
      if (r2.config.yaxis.forEach((function(t4, e4) {
        var i4 = r2.globals.seriesYAxisMap[e4][0], a5 = r2.globals.yAxisScale[e4].niceMax - o2.yRatio[i4] * g2, s3 = r2.globals.yAxisScale[e4].niceMax - o2.yRatio[i4] * p2;
        f2.push(a5), x2.push(s3);
      })), n2.dragged && (n2.dragX > 10 || n2.dragY > 10) && e3 !== i3) {
        if (r2.globals.zoomEnabled) {
          var b2 = v.clone(r2.globals.initialConfig.yaxis), m2 = v.clone(r2.globals.initialConfig.xaxis);
          if (r2.globals.zoomed = true, r2.config.xaxis.convertedCatToNumeric && (e3 = Math.floor(e3), i3 = Math.floor(i3), e3 < 1 && (e3 = 1, i3 = r2.globals.dataPoints), i3 - e3 < 2 && (i3 = e3 + 1)), "xy" !== s2 && "x" !== s2 || (m2 = { min: e3, max: i3 }), "xy" !== s2 && "y" !== s2 || b2.forEach((function(t4, e4) {
            b2[e4].min = x2[e4], b2[e4].max = f2[e4];
          })), l2) {
            var y2 = l2.getBeforeZoomRange(m2, b2);
            y2 && (m2 = y2.xaxis ? y2.xaxis : m2, b2 = y2.yaxis ? y2.yaxis : b2);
          }
          var w2 = { xaxis: m2 };
          r2.config.chart.group || (w2.yaxis = b2), n2.ctx.updateHelpers._updateOptions(w2, false, n2.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof r2.config.chart.events.zoomed && l2.zoomCallback(m2, b2);
        } else if (r2.globals.selectionEnabled) {
          var k2, A2 = null;
          k2 = { min: e3, max: i3 }, "xy" !== s2 && "y" !== s2 || (A2 = v.clone(r2.config.yaxis)).forEach((function(t4, e4) {
            A2[e4].min = x2[e4], A2[e4].max = f2[e4];
          })), r2.globals.selection = n2.selection, "function" == typeof r2.config.chart.events.selection && r2.config.chart.events.selection(n2.ctx, { xaxis: k2, yaxis: A2 });
        }
      }
    } }, { key: "panDragging", value: function(t3) {
      var e3 = t3.context, i3 = this.w, a4 = e3;
      if (void 0 !== i3.globals.lastClientPosition.x) {
        var s2 = i3.globals.lastClientPosition.x - a4.clientX, r2 = i3.globals.lastClientPosition.y - a4.clientY;
        Math.abs(s2) > Math.abs(r2) && s2 > 0 ? this.moveDirection = "left" : Math.abs(s2) > Math.abs(r2) && s2 < 0 ? this.moveDirection = "right" : Math.abs(r2) > Math.abs(s2) && r2 > 0 ? this.moveDirection = "up" : Math.abs(r2) > Math.abs(s2) && r2 < 0 && (this.moveDirection = "down");
      }
      i3.globals.lastClientPosition = { x: a4.clientX, y: a4.clientY };
      var n2 = i3.globals.isRangeBar ? i3.globals.minY : i3.globals.minX, o2 = i3.globals.isRangeBar ? i3.globals.maxY : i3.globals.maxX;
      a4.panScrolled(n2, o2);
    } }, { key: "panScrolled", value: function(t3, e3) {
      var i3 = this.w, a4 = this.xyRatios, s2 = v.clone(i3.globals.initialConfig.yaxis), r2 = a4.xRatio, n2 = i3.globals.minX, o2 = i3.globals.maxX;
      i3.globals.isRangeBar && (r2 = a4.invertedYRatio, n2 = i3.globals.minY, o2 = i3.globals.maxY), "left" === this.moveDirection ? (t3 = n2 + i3.globals.gridWidth / 15 * r2, e3 = o2 + i3.globals.gridWidth / 15 * r2) : "right" === this.moveDirection && (t3 = n2 - i3.globals.gridWidth / 15 * r2, e3 = o2 - i3.globals.gridWidth / 15 * r2), i3.globals.isRangeBar || (t3 < i3.globals.initialMinX || e3 > i3.globals.initialMaxX) && (t3 = n2, e3 = o2);
      var l2 = { xaxis: { min: t3, max: e3 } };
      i3.config.chart.group || (l2.yaxis = s2), this.updateScrolledChart(l2, t3, e3);
    } }, { key: "updateScrolledChart", value: function(t3, e3, i3) {
      var a4 = this.w;
      if (this.ctx.updateHelpers._updateOptions(t3, false, false), "function" == typeof a4.config.chart.events.scrolled) {
        var s2 = { xaxis: { min: e3, max: i3 } };
        a4.config.chart.events.scrolled(this.ctx, s2), this.ctx.events.fireEvent("scrolled", s2);
      }
    } }]), a3;
  })(ma), ya = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.ttCtx = e2, this.ctx = e2.ctx;
    }
    return s(t2, [{ key: "getNearestValues", value: function(t3) {
      var e2 = t3.hoverArea, i3 = t3.elGrid, a3 = t3.clientX, s2 = t3.clientY, r2 = this.w, n2 = i3.getBoundingClientRect(), o2 = n2.width, l2 = n2.height, h2 = o2 / (r2.globals.dataPoints - 1), c2 = l2 / r2.globals.dataPoints, d2 = this.hasBars();
      !r2.globals.comboCharts && !d2 || r2.config.xaxis.convertedCatToNumeric || (h2 = o2 / r2.globals.dataPoints);
      var u2 = a3 - n2.left - r2.globals.barPadForNumericAxis, g2 = s2 - n2.top;
      u2 < 0 || g2 < 0 || u2 > o2 || g2 > l2 ? (e2.classList.remove("hovering-zoom"), e2.classList.remove("hovering-pan")) : r2.globals.zoomEnabled ? (e2.classList.remove("hovering-pan"), e2.classList.add("hovering-zoom")) : r2.globals.panEnabled && (e2.classList.remove("hovering-zoom"), e2.classList.add("hovering-pan"));
      var p2 = Math.round(u2 / h2), f2 = Math.floor(g2 / c2);
      d2 && !r2.config.xaxis.convertedCatToNumeric && (p2 = Math.ceil(u2 / h2), p2 -= 1);
      var x2 = null, b2 = null, m2 = r2.globals.seriesXvalues.map((function(t4) {
        return t4.filter((function(t5) {
          return v.isNumber(t5);
        }));
      })), y2 = r2.globals.seriesYvalues.map((function(t4) {
        return t4.filter((function(t5) {
          return v.isNumber(t5);
        }));
      }));
      if (r2.globals.isXNumeric) {
        var w2 = this.ttCtx.getElGrid().getBoundingClientRect(), k2 = u2 * (w2.width / o2), A2 = g2 * (w2.height / l2);
        x2 = (b2 = this.closestInMultiArray(k2, A2, m2, y2)).index, p2 = b2.j, null !== x2 && r2.globals.hasNullValues && (m2 = r2.globals.seriesXvalues[x2], p2 = (b2 = this.closestInArray(k2, m2)).j);
      }
      return r2.globals.capturedSeriesIndex = null === x2 ? -1 : x2, (!p2 || p2 < 1) && (p2 = 0), r2.globals.isBarHorizontal ? r2.globals.capturedDataPointIndex = f2 : r2.globals.capturedDataPointIndex = p2, { capturedSeries: x2, j: r2.globals.isBarHorizontal ? f2 : p2, hoverX: u2, hoverY: g2 };
    } }, { key: "getFirstActiveXArray", value: function(t3) {
      for (var e2 = this.w, i3 = 0, a3 = t3.map((function(t4, e3) {
        return t4.length > 0 ? e3 : -1;
      })), s2 = 0; s2 < a3.length; s2++) if (-1 !== a3[s2] && -1 === e2.globals.collapsedSeriesIndices.indexOf(s2) && -1 === e2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2)) {
        i3 = a3[s2];
        break;
      }
      return i3;
    } }, { key: "closestInMultiArray", value: function(t3, e2, i3, a3) {
      for (var s2, r2 = this.w, n2 = 1 / 0, o2 = null, l2 = null, h2 = 0; h2 < i3.length; h2++) if (s2 = h2, -1 === r2.globals.collapsedSeriesIndices.indexOf(s2) && -1 === r2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2)) for (var c2 = i3[h2], d2 = a3[h2], u2 = Math.min(c2.length, d2.length), g2 = 0; g2 < u2; g2++) {
        var p2 = t3 - c2[g2], f2 = Math.sqrt(p2 * p2);
        if (!r2.globals.allSeriesHasEqualX) {
          var x2 = e2 - d2[g2];
          f2 = Math.sqrt(p2 * p2 + x2 * x2);
        }
        f2 < n2 && (n2 = f2, o2 = h2, l2 = g2);
      }
      return { index: o2, j: l2 };
    } }, { key: "closestInArray", value: function(t3, e2) {
      for (var i3 = e2[0], a3 = null, s2 = Math.abs(t3 - i3), r2 = 0; r2 < e2.length; r2++) {
        var n2 = Math.abs(t3 - e2[r2]);
        n2 < s2 && (s2 = n2, a3 = r2);
      }
      return { j: a3 };
    } }, { key: "isXoverlap", value: function(t3) {
      var e2 = [], i3 = this.w.globals.seriesX.filter((function(t4) {
        return void 0 !== t4[0];
      }));
      if (i3.length > 0) for (var a3 = 0; a3 < i3.length - 1; a3++) void 0 !== i3[a3][t3] && void 0 !== i3[a3 + 1][t3] && i3[a3][t3] !== i3[a3 + 1][t3] && e2.push("unEqual");
      return 0 === e2.length;
    } }, { key: "isInitialSeriesSameLen", value: function() {
      for (var t3 = true, e2 = this.w.globals.initialSeries, i3 = 0; i3 < e2.length - 1; i3++) if (e2[i3].data.length !== e2[i3 + 1].data.length) {
        t3 = false;
        break;
      }
      return t3;
    } }, { key: "getBarsHeight", value: function(t3) {
      return f(t3).reduce((function(t4, e2) {
        return t4 + e2.getBBox().height;
      }), 0);
    } }, { key: "getElMarkers", value: function(t3) {
      return "number" == typeof t3 ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t3, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
    } }, { key: "getAllMarkers", value: function() {
      var t3 = this, e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i3 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
      i3 = f(i3), e2 && (i3 = i3.filter((function(e3) {
        var i4 = Number(e3.getAttribute("data:realIndex"));
        return -1 === t3.w.globals.collapsedSeriesIndices.indexOf(i4);
      }))), i3.sort((function(t4, e3) {
        var i4 = Number(t4.getAttribute("data:realIndex")), a4 = Number(e3.getAttribute("data:realIndex"));
        return a4 < i4 ? 1 : a4 > i4 ? -1 : 0;
      }));
      var a3 = [];
      return i3.forEach((function(t4) {
        a3.push(t4.querySelector(".apexcharts-marker"));
      })), a3;
    } }, { key: "hasMarkers", value: function(t3) {
      return this.getElMarkers(t3).length > 0;
    } }, { key: "getPathFromPoint", value: function(t3, e2) {
      var i3 = Number(t3.getAttribute("cx")), a3 = Number(t3.getAttribute("cy")), s2 = t3.getAttribute("shape");
      return new Mi(this.ctx).getMarkerPath(i3, a3, s2, e2);
    } }, { key: "getElBars", value: function() {
      return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
    } }, { key: "hasBars", value: function() {
      return this.getElBars().length > 0;
    } }, { key: "getHoverMarkerSize", value: function(t3) {
      var e2 = this.w, i3 = e2.config.markers.hover.size;
      return void 0 === i3 && (i3 = e2.globals.markers.size[t3] + e2.config.markers.hover.sizeOffset), i3;
    } }, { key: "toggleAllTooltipSeriesGroups", value: function(t3) {
      var e2 = this.w, i3 = this.ttCtx;
      0 === i3.allTooltipSeriesGroups.length && (i3.allTooltipSeriesGroups = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
      for (var a3 = i3.allTooltipSeriesGroups, s2 = 0; s2 < a3.length; s2++) "enable" === t3 ? (a3[s2].classList.add("apexcharts-active"), a3[s2].style.display = e2.config.tooltip.items.display) : (a3[s2].classList.remove("apexcharts-active"), a3[s2].style.display = "none");
    } }]), t2;
  })(), wa = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.ctx = e2.ctx, this.ttCtx = e2, this.tooltipUtil = new ya(e2);
    }
    return s(t2, [{ key: "drawSeriesTexts", value: function(t3) {
      var e2 = t3.shared, i3 = void 0 === e2 || e2, a3 = t3.ttItems, s2 = t3.i, r2 = void 0 === s2 ? 0 : s2, n2 = t3.j, o2 = void 0 === n2 ? null : n2, l2 = t3.y1, h2 = t3.y2, c2 = t3.e, d2 = this.w;
      void 0 !== d2.config.tooltip.custom ? this.handleCustomTooltip({ i: r2, j: o2, y1: l2, y2: h2, w: d2 }) : this.toggleActiveInactiveSeries(i3, r2);
      var u2 = this.getValuesToPrint({ i: r2, j: o2 });
      this.printLabels({ i: r2, j: o2, values: u2, ttItems: a3, shared: i3, e: c2 });
      var g2 = this.ttCtx.getElTooltip();
      this.ttCtx.tooltipRect.ttWidth = g2.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = g2.getBoundingClientRect().height;
    } }, { key: "printLabels", value: function(t3) {
      var e2, i3 = this, a3 = t3.i, s2 = t3.j, r2 = t3.values, n2 = t3.ttItems, o2 = t3.shared, l2 = t3.e, h2 = this.w, c2 = [], d2 = function(t4) {
        return h2.globals.seriesGoals[t4] && h2.globals.seriesGoals[t4][s2] && Array.isArray(h2.globals.seriesGoals[t4][s2]);
      }, g2 = r2.xVal, p2 = r2.zVal, f2 = r2.xAxisTTVal, x2 = "", b2 = h2.globals.colors[a3];
      null !== s2 && h2.config.plotOptions.bar.distributed && (b2 = h2.globals.colors[s2]);
      for (var m2 = function(t4, r3) {
        var m3 = i3.getFormatters(a3);
        x2 = i3.getSeriesName({ fn: m3.yLbTitleFormatter, index: a3, seriesIndex: a3, j: s2 }), "treemap" === h2.config.chart.type && (x2 = m3.yLbTitleFormatter(String(h2.config.series[a3].data[s2].x), { series: h2.globals.series, seriesIndex: a3, dataPointIndex: s2, w: h2 }));
        var v3 = h2.config.tooltip.inverseOrder ? r3 : t4;
        if (h2.globals.axisCharts) {
          var y3 = function(t5) {
            var e3, i4, a4, r4;
            return h2.globals.isRangeData ? m3.yLbFormatter(null === (e3 = h2.globals.seriesRangeStart) || void 0 === e3 || null === (i4 = e3[t5]) || void 0 === i4 ? void 0 : i4[s2], { series: h2.globals.seriesRangeStart, seriesIndex: t5, dataPointIndex: s2, w: h2 }) + " - " + m3.yLbFormatter(null === (a4 = h2.globals.seriesRangeEnd) || void 0 === a4 || null === (r4 = a4[t5]) || void 0 === r4 ? void 0 : r4[s2], { series: h2.globals.seriesRangeEnd, seriesIndex: t5, dataPointIndex: s2, w: h2 }) : m3.yLbFormatter(h2.globals.series[t5][s2], { series: h2.globals.series, seriesIndex: t5, dataPointIndex: s2, w: h2 });
          };
          if (o2) m3 = i3.getFormatters(v3), x2 = i3.getSeriesName({ fn: m3.yLbTitleFormatter, index: v3, seriesIndex: a3, j: s2 }), b2 = h2.globals.colors[v3], e2 = y3(v3), d2(v3) && (c2 = h2.globals.seriesGoals[v3][s2].map((function(t5) {
            return { attrs: t5, val: m3.yLbFormatter(t5.value, { seriesIndex: v3, dataPointIndex: s2, w: h2 }) };
          })));
          else {
            var w2, k2 = null == l2 || null === (w2 = l2.target) || void 0 === w2 ? void 0 : w2.getAttribute("fill");
            k2 && (-1 !== k2.indexOf("url") ? -1 !== k2.indexOf("Pattern") && (b2 = h2.globals.dom.baseEl.querySelector(k2.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke")) : b2 = k2), e2 = y3(a3), d2(a3) && Array.isArray(h2.globals.seriesGoals[a3][s2]) && (c2 = h2.globals.seriesGoals[a3][s2].map((function(t5) {
              return { attrs: t5, val: m3.yLbFormatter(t5.value, { seriesIndex: a3, dataPointIndex: s2, w: h2 }) };
            })));
          }
        }
        null === s2 && (e2 = m3.yLbFormatter(h2.globals.series[a3], u(u({}, h2), {}, { seriesIndex: a3, dataPointIndex: a3 }))), i3.DOMHandling({ i: a3, t: v3, j: s2, ttItems: n2, values: { val: e2, goalVals: c2, xVal: g2, xAxisTTVal: f2, zVal: p2 }, seriesName: x2, shared: o2, pColor: b2 });
      }, v2 = 0, y2 = h2.globals.series.length - 1; v2 < h2.globals.series.length; v2++, y2--) m2(v2, y2);
    } }, { key: "getFormatters", value: function(t3) {
      var e2, i3 = this.w, a3 = i3.globals.yLabelFormatters[t3];
      return void 0 !== i3.globals.ttVal ? Array.isArray(i3.globals.ttVal) ? (a3 = i3.globals.ttVal[t3] && i3.globals.ttVal[t3].formatter, e2 = i3.globals.ttVal[t3] && i3.globals.ttVal[t3].title && i3.globals.ttVal[t3].title.formatter) : (a3 = i3.globals.ttVal.formatter, "function" == typeof i3.globals.ttVal.title.formatter && (e2 = i3.globals.ttVal.title.formatter)) : e2 = i3.config.tooltip.y.title.formatter, "function" != typeof a3 && (a3 = i3.globals.yLabelFormatters[0] ? i3.globals.yLabelFormatters[0] : function(t4) {
        return t4;
      }), "function" != typeof e2 && (e2 = function(t4) {
        return t4 ? t4 + ": " : "";
      }), { yLbFormatter: a3, yLbTitleFormatter: e2 };
    } }, { key: "getSeriesName", value: function(t3) {
      var e2 = t3.fn, i3 = t3.index, a3 = t3.seriesIndex, s2 = t3.j, r2 = this.w;
      return e2(String(r2.globals.seriesNames[i3]), { series: r2.globals.series, seriesIndex: a3, dataPointIndex: s2, w: r2 });
    } }, { key: "DOMHandling", value: function(t3) {
      t3.i;
      var e2 = t3.t, i3 = t3.j, a3 = t3.ttItems, s2 = t3.values, r2 = t3.seriesName, n2 = t3.shared, o2 = t3.pColor, l2 = this.w, h2 = this.ttCtx, c2 = s2.val, d2 = s2.goalVals, u2 = s2.xVal, g2 = s2.xAxisTTVal, p2 = s2.zVal, f2 = null;
      f2 = a3[e2].children, l2.config.tooltip.fillSeriesColor && (a3[e2].style.backgroundColor = o2, f2[0].style.display = "none"), h2.showTooltipTitle && (null === h2.tooltipTitle && (h2.tooltipTitle = l2.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h2.tooltipTitle.innerHTML = u2), h2.isXAxisTooltipEnabled && (h2.xaxisTooltipText.innerHTML = "" !== g2 ? g2 : u2);
      var x2 = a3[e2].querySelector(".apexcharts-tooltip-text-y-label");
      x2 && (x2.innerHTML = r2 || "");
      var b2 = a3[e2].querySelector(".apexcharts-tooltip-text-y-value");
      b2 && (b2.innerHTML = void 0 !== c2 ? c2 : ""), f2[0] && f2[0].classList.contains("apexcharts-tooltip-marker") && (l2.config.tooltip.marker.fillColors && Array.isArray(l2.config.tooltip.marker.fillColors) && (o2 = l2.config.tooltip.marker.fillColors[e2]), l2.config.tooltip.fillSeriesColor ? f2[0].style.backgroundColor = o2 : f2[0].style.color = o2), l2.config.tooltip.marker.show || (f2[0].style.display = "none");
      var m2 = a3[e2].querySelector(".apexcharts-tooltip-text-goals-label"), v2 = a3[e2].querySelector(".apexcharts-tooltip-text-goals-value");
      if (d2.length && l2.globals.seriesGoals[e2]) {
        var y2 = function() {
          var t4 = "<div>", e3 = "<div>";
          d2.forEach((function(i4, a4) {
            t4 += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i4.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i4.attrs.name, "</div>"), e3 += "<div>".concat(i4.val, "</div>");
          })), m2.innerHTML = t4 + "</div>", v2.innerHTML = e3 + "</div>";
        };
        n2 ? l2.globals.seriesGoals[e2][i3] && Array.isArray(l2.globals.seriesGoals[e2][i3]) ? y2() : (m2.innerHTML = "", v2.innerHTML = "") : y2();
      } else m2.innerHTML = "", v2.innerHTML = "";
      null !== p2 && (a3[e2].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l2.config.tooltip.z.title, a3[e2].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== p2 ? p2 : "");
      if (n2 && f2[0]) {
        if (l2.config.tooltip.hideEmptySeries) {
          var w2 = a3[e2].querySelector(".apexcharts-tooltip-marker"), k2 = a3[e2].querySelector(".apexcharts-tooltip-text");
          0 == parseFloat(c2) ? (w2.style.display = "none", k2.style.display = "none") : (w2.style.display = "block", k2.style.display = "block");
        }
        null == c2 || l2.globals.ancillaryCollapsedSeriesIndices.indexOf(e2) > -1 || l2.globals.collapsedSeriesIndices.indexOf(e2) > -1 || Array.isArray(h2.tConfig.enabledOnSeries) && -1 === h2.tConfig.enabledOnSeries.indexOf(e2) ? f2[0].parentNode.style.display = "none" : f2[0].parentNode.style.display = l2.config.tooltip.items.display;
      } else Array.isArray(h2.tConfig.enabledOnSeries) && -1 === h2.tConfig.enabledOnSeries.indexOf(e2) && (f2[0].parentNode.style.display = "none");
    } }, { key: "toggleActiveInactiveSeries", value: function(t3, e2) {
      var i3 = this.w;
      if (t3) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
      else {
        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
        var a3 = i3.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(e2));
        a3 && (a3.classList.add("apexcharts-active"), a3.style.display = i3.config.tooltip.items.display);
      }
    } }, { key: "getValuesToPrint", value: function(t3) {
      var e2 = t3.i, i3 = t3.j, a3 = this.w, s2 = this.ctx.series.filteredSeriesX(), r2 = "", n2 = "", o2 = null, l2 = null, h2 = { series: a3.globals.series, seriesIndex: e2, dataPointIndex: i3, w: a3 }, c2 = a3.globals.ttZFormatter;
      null === i3 ? l2 = a3.globals.series[e2] : a3.globals.isXNumeric && "treemap" !== a3.config.chart.type ? (r2 = s2[e2][i3], 0 === s2[e2].length && (r2 = s2[this.tooltipUtil.getFirstActiveXArray(s2)][i3])) : r2 = new Ji(this.ctx).isFormatXY() ? void 0 !== a3.config.series[e2].data[i3] ? a3.config.series[e2].data[i3].x : "" : void 0 !== a3.globals.labels[i3] ? a3.globals.labels[i3] : "";
      var d2 = r2;
      a3.globals.isXNumeric && "datetime" === a3.config.xaxis.type ? r2 = new Xi(this.ctx).xLabelFormat(a3.globals.ttKeyFormatter, d2, d2, { i: void 0, dateFormatter: new zi(this.ctx).formatDate, w: this.w }) : r2 = a3.globals.isBarHorizontal ? a3.globals.yLabelFormatters[0](d2, h2) : a3.globals.xLabelFormatter(d2, h2);
      return void 0 !== a3.config.tooltip.x.formatter && (r2 = a3.globals.ttKeyFormatter(d2, h2)), a3.globals.seriesZ.length > 0 && a3.globals.seriesZ[e2].length > 0 && (o2 = c2(a3.globals.seriesZ[e2][i3], a3)), n2 = "function" == typeof a3.config.xaxis.tooltip.formatter ? a3.globals.xaxisTooltipFormatter(d2, h2) : r2, { val: Array.isArray(l2) ? l2.join(" ") : l2, xVal: Array.isArray(r2) ? r2.join(" ") : r2, xAxisTTVal: Array.isArray(n2) ? n2.join(" ") : n2, zVal: o2 };
    } }, { key: "handleCustomTooltip", value: function(t3) {
      var e2 = t3.i, i3 = t3.j, a3 = t3.y1, s2 = t3.y2, r2 = t3.w, n2 = this.ttCtx.getElTooltip(), o2 = r2.config.tooltip.custom;
      Array.isArray(o2) && o2[e2] && (o2 = o2[e2]);
      var l2 = o2({ ctx: this.ctx, series: r2.globals.series, seriesIndex: e2, dataPointIndex: i3, y1: a3, y2: s2, w: r2 });
      "string" == typeof l2 || "number" == typeof l2 ? n2.innerHTML = l2 : (l2 instanceof Element || "string" == typeof l2.nodeName) && (n2.innerHTML = "", n2.appendChild(l2.cloneNode(true)));
    } }]), t2;
  })(), ka = (function() {
    function t2(e2) {
      i2(this, t2), this.ttCtx = e2, this.ctx = e2.ctx, this.w = e2.w;
    }
    return s(t2, [{ key: "moveXCrosshairs", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i3 = this.ttCtx, a3 = this.w, s2 = i3.getElXCrosshairs(), r2 = t3 - i3.xcrosshairsWidth / 2, n2 = a3.globals.labels.slice().length;
      if (null !== e2 && (r2 = a3.globals.gridWidth / n2 * e2), null === s2 || a3.globals.isBarHorizontal || (s2.setAttribute("x", r2), s2.setAttribute("x1", r2), s2.setAttribute("x2", r2), s2.setAttribute("y2", a3.globals.gridHeight), s2.classList.add("apexcharts-active")), r2 < 0 && (r2 = 0), r2 > a3.globals.gridWidth && (r2 = a3.globals.gridWidth), i3.isXAxisTooltipEnabled) {
        var o2 = r2;
        "tickWidth" !== a3.config.xaxis.crosshairs.width && "barWidth" !== a3.config.xaxis.crosshairs.width || (o2 = r2 + i3.xcrosshairsWidth / 2), this.moveXAxisTooltip(o2);
      }
    } }, { key: "moveYCrosshairs", value: function(t3) {
      var e2 = this.ttCtx;
      null !== e2.ycrosshairs && Mi.setAttrs(e2.ycrosshairs, { y1: t3, y2: t3 }), null !== e2.ycrosshairsHidden && Mi.setAttrs(e2.ycrosshairsHidden, { y1: t3, y2: t3 });
    } }, { key: "moveXAxisTooltip", value: function(t3) {
      var e2 = this.w, i3 = this.ttCtx;
      if (null !== i3.xaxisTooltip && 0 !== i3.xcrosshairsWidth) {
        i3.xaxisTooltip.classList.add("apexcharts-active");
        var a3 = i3.xaxisOffY + e2.config.xaxis.tooltip.offsetY + e2.globals.translateY + 1 + e2.config.xaxis.offsetY;
        if (t3 -= i3.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t3)) {
          t3 += e2.globals.translateX;
          var s2;
          s2 = new Mi(this.ctx).getTextRects(i3.xaxisTooltipText.innerHTML), i3.xaxisTooltipText.style.minWidth = s2.width + "px", i3.xaxisTooltip.style.left = t3 + "px", i3.xaxisTooltip.style.top = a3 + "px";
        }
      }
    } }, { key: "moveYAxisTooltip", value: function(t3) {
      var e2 = this.w, i3 = this.ttCtx;
      null === i3.yaxisTTEls && (i3.yaxisTTEls = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      var a3 = parseInt(i3.ycrosshairsHidden.getAttribute("y1"), 10), s2 = e2.globals.translateY + a3, r2 = i3.yaxisTTEls[t3].getBoundingClientRect(), n2 = r2.height, o2 = e2.globals.translateYAxisX[t3] - 2;
      e2.config.yaxis[t3].opposite && (o2 -= r2.width), s2 -= n2 / 2, -1 === e2.globals.ignoreYAxisIndexes.indexOf(t3) && s2 > 0 && s2 < e2.globals.gridHeight ? (i3.yaxisTTEls[t3].classList.add("apexcharts-active"), i3.yaxisTTEls[t3].style.top = s2 + "px", i3.yaxisTTEls[t3].style.left = o2 + e2.config.yaxis[t3].tooltip.offsetX + "px") : i3.yaxisTTEls[t3].classList.remove("apexcharts-active");
    } }, { key: "moveTooltip", value: function(t3, e2) {
      var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a3 = this.w, s2 = this.ttCtx, r2 = s2.getElTooltip(), n2 = s2.tooltipRect, o2 = null !== i3 ? parseFloat(i3) : 1, l2 = parseFloat(t3) + o2 + 5, h2 = parseFloat(e2) + o2 / 2;
      if (l2 > a3.globals.gridWidth / 2 && (l2 = l2 - n2.ttWidth - o2 - 10), l2 > a3.globals.gridWidth - n2.ttWidth - 10 && (l2 = a3.globals.gridWidth - n2.ttWidth), l2 < -20 && (l2 = -20), a3.config.tooltip.followCursor) {
        var c2 = s2.getElGrid().getBoundingClientRect();
        (l2 = s2.e.clientX - c2.left) > a3.globals.gridWidth / 2 && (l2 -= s2.tooltipRect.ttWidth), (h2 = s2.e.clientY + a3.globals.translateY - c2.top) > a3.globals.gridHeight / 2 && (h2 -= s2.tooltipRect.ttHeight);
      } else a3.globals.isBarHorizontal || n2.ttHeight / 2 + h2 > a3.globals.gridHeight && (h2 = a3.globals.gridHeight - n2.ttHeight + a3.globals.translateY);
      isNaN(l2) || (l2 += a3.globals.translateX, r2.style.left = l2 + "px", r2.style.top = h2 + "px");
    } }, { key: "moveMarkers", value: function(t3, e2) {
      var i3 = this.w, a3 = this.ttCtx;
      if (i3.globals.markers.size[t3] > 0) for (var s2 = i3.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t3, "'] .apexcharts-marker")), r2 = 0; r2 < s2.length; r2++) parseInt(s2[r2].getAttribute("rel"), 10) === e2 && (a3.marker.resetPointsSize(), a3.marker.enlargeCurrentPoint(e2, s2[r2]));
      else a3.marker.resetPointsSize(), this.moveDynamicPointOnHover(e2, t3);
    } }, { key: "moveDynamicPointOnHover", value: function(t3, e2) {
      var i3, a3, s2, r2, n2 = this.w, o2 = this.ttCtx, l2 = new Mi(this.ctx), h2 = n2.globals.pointsArray, c2 = o2.tooltipUtil.getHoverMarkerSize(e2), d2 = n2.config.series[e2].type;
      if (!d2 || "column" !== d2 && "candlestick" !== d2 && "boxPlot" !== d2) {
        s2 = null === (i3 = h2[e2][t3]) || void 0 === i3 ? void 0 : i3[0], r2 = (null === (a3 = h2[e2][t3]) || void 0 === a3 ? void 0 : a3[1]) || 0;
        var u2 = n2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e2, "'] .apexcharts-series-markers path"));
        if (u2 && r2 < n2.globals.gridHeight && r2 > 0) {
          var g2 = u2.getAttribute("shape"), p2 = l2.getMarkerPath(s2, r2, g2, 1.5 * c2);
          u2.setAttribute("d", p2);
        }
        this.moveXCrosshairs(s2), o2.fixedTooltip || this.moveTooltip(s2, r2, c2);
      }
    } }, { key: "moveDynamicPointsOnHover", value: function(t3) {
      var e2, i3 = this.ttCtx, a3 = i3.w, s2 = 0, r2 = 0, n2 = a3.globals.pointsArray, o2 = new $i(this.ctx), l2 = new Mi(this.ctx);
      e2 = o2.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
      var h2 = i3.tooltipUtil.getHoverMarkerSize(e2);
      if (n2[e2] && (s2 = n2[e2][t3][0], r2 = n2[e2][t3][1]), !isNaN(s2)) {
        var c2 = i3.tooltipUtil.getAllMarkers();
        if (c2.length) for (var d2 = 0; d2 < a3.globals.series.length; d2++) {
          var u2 = n2[d2];
          if (a3.globals.comboCharts && void 0 === u2 && c2.splice(d2, 0, null), u2 && u2.length) {
            var g2 = n2[d2][t3][1], p2 = void 0;
            c2[d2].setAttribute("cx", s2);
            var f2 = c2[d2].getAttribute("shape");
            if ("rangeArea" === a3.config.chart.type && !a3.globals.comboCharts) {
              var x2 = t3 + a3.globals.series[d2].length;
              p2 = n2[d2][x2][1], g2 -= Math.abs(g2 - p2) / 2;
            }
            if (null !== g2 && !isNaN(g2) && g2 < a3.globals.gridHeight + h2 && g2 + h2 > 0) {
              var b2 = l2.getMarkerPath(s2, g2, f2, h2);
              c2[d2].setAttribute("d", b2);
            } else c2[d2].setAttribute("d", "");
          }
        }
        this.moveXCrosshairs(s2), i3.fixedTooltip || this.moveTooltip(s2, r2 || a3.globals.gridHeight, h2);
      }
    } }, { key: "moveStickyTooltipOverBars", value: function(t3, e2) {
      var i3 = this.w, a3 = this.ttCtx, s2 = i3.globals.columnSeries ? i3.globals.columnSeries.length : i3.globals.series.length;
      i3.config.chart.stacked && (s2 = i3.globals.barGroups.length);
      var r2 = s2 >= 2 && s2 % 2 == 0 ? Math.floor(s2 / 2) : Math.floor(s2 / 2) + 1;
      i3.globals.isBarHorizontal && (r2 = new $i(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
      var n2 = i3.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "']"));
      n2 || "number" != typeof e2 || (n2 = i3.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e2, "'] path[j='").concat(t3, "'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='").concat(e2, "'] path[j='").concat(t3, "'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='").concat(e2, "'] path[j='").concat(t3, "'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='").concat(e2, "'] path[j='").concat(t3, "']")));
      var o2 = n2 ? parseFloat(n2.getAttribute("cx")) : 0, l2 = n2 ? parseFloat(n2.getAttribute("cy")) : 0, h2 = n2 ? parseFloat(n2.getAttribute("barWidth")) : 0, c2 = a3.getElGrid().getBoundingClientRect(), d2 = n2 && (n2.classList.contains("apexcharts-candlestick-area") || n2.classList.contains("apexcharts-boxPlot-area"));
      i3.globals.isXNumeric ? (n2 && !d2 && (o2 -= s2 % 2 != 0 ? h2 / 2 : 0), n2 && d2 && (o2 -= h2 / 2)) : i3.globals.isBarHorizontal || (o2 = a3.xAxisTicksPositions[t3 - 1] + a3.dataPointsDividedWidth / 2, isNaN(o2) && (o2 = a3.xAxisTicksPositions[t3] - a3.dataPointsDividedWidth / 2)), i3.globals.isBarHorizontal ? l2 -= a3.tooltipRect.ttHeight : i3.config.tooltip.followCursor ? l2 = a3.e.clientY - c2.top - a3.tooltipRect.ttHeight / 2 : l2 + a3.tooltipRect.ttHeight + 15 > i3.globals.gridHeight && (l2 = i3.globals.gridHeight), i3.globals.isBarHorizontal || this.moveXCrosshairs(o2), a3.fixedTooltip || this.moveTooltip(o2, l2 || i3.globals.gridHeight);
    } }]), t2;
  })(), Aa = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.ttCtx = e2, this.ctx = e2.ctx, this.tooltipPosition = new ka(e2);
    }
    return s(t2, [{ key: "drawDynamicPoints", value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i3 = new Vi(this.ctx), a3 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      a3 = f(a3), t3.config.chart.stacked && a3.sort((function(t4, e3) {
        return parseFloat(t4.getAttribute("data:realIndex")) - parseFloat(e3.getAttribute("data:realIndex"));
      }));
      for (var s2 = 0; s2 < a3.length; s2++) {
        var r2 = a3[s2].querySelector(".apexcharts-series-markers-wrap");
        if (null !== r2) {
          var n2 = void 0, o2 = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
          "line" !== t3.config.chart.type && "area" !== t3.config.chart.type || t3.globals.comboCharts || t3.config.tooltip.intersect || (o2 += " no-pointer-events");
          var l2 = i3.getMarkerConfig({ cssClass: o2, seriesIndex: Number(r2.getAttribute("data:realIndex")) });
          (n2 = e2.drawMarker(0, 0, l2)).node.setAttribute("default-marker-size", 0);
          var h2 = document.createElementNS(t3.globals.SVGNS, "g");
          h2.classList.add("apexcharts-series-markers"), h2.appendChild(n2.node), r2.appendChild(h2);
        }
      }
    } }, { key: "enlargeCurrentPoint", value: function(t3, e2) {
      var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s2 = this.w;
      "bubble" !== s2.config.chart.type && this.newPointSize(t3, e2);
      var r2 = e2.getAttribute("cx"), n2 = e2.getAttribute("cy");
      if (null !== i3 && null !== a3 && (r2 = i3, n2 = a3), this.tooltipPosition.moveXCrosshairs(r2), !this.fixedTooltip) {
        if ("radar" === s2.config.chart.type) {
          var o2 = this.ttCtx.getElGrid().getBoundingClientRect();
          r2 = this.ttCtx.e.clientX - o2.left;
        }
        this.tooltipPosition.moveTooltip(r2, n2, s2.config.markers.hover.size);
      }
    } }, { key: "enlargePoints", value: function(t3) {
      for (var e2 = this.w, i3 = this, a3 = this.ttCtx, s2 = t3, r2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n2 = e2.config.markers.hover.size, o2 = 0; o2 < r2.length; o2++) {
        var l2 = r2[o2].getAttribute("rel"), h2 = r2[o2].getAttribute("index");
        if (void 0 === n2 && (n2 = e2.globals.markers.size[h2] + e2.config.markers.hover.sizeOffset), s2 === parseInt(l2, 10)) {
          i3.newPointSize(s2, r2[o2]);
          var c2 = r2[o2].getAttribute("cx"), d2 = r2[o2].getAttribute("cy");
          i3.tooltipPosition.moveXCrosshairs(c2), a3.fixedTooltip || i3.tooltipPosition.moveTooltip(c2, d2, n2);
        } else i3.oldPointSize(r2[o2]);
      }
    } }, { key: "newPointSize", value: function(t3, e2) {
      var i3 = this.w, a3 = i3.config.markers.hover.size, s2 = 0 === t3 ? e2.parentNode.firstChild : e2.parentNode.lastChild;
      if ("0" !== s2.getAttribute("default-marker-size")) {
        var r2 = parseInt(s2.getAttribute("index"), 10);
        void 0 === a3 && (a3 = i3.globals.markers.size[r2] + i3.config.markers.hover.sizeOffset), a3 < 0 && (a3 = 0);
        var n2 = this.ttCtx.tooltipUtil.getPathFromPoint(e2, a3);
        e2.setAttribute("d", n2);
      }
    } }, { key: "oldPointSize", value: function(t3) {
      var e2 = parseFloat(t3.getAttribute("default-marker-size")), i3 = this.ttCtx.tooltipUtil.getPathFromPoint(t3, e2);
      t3.setAttribute("d", i3);
    } }, { key: "resetPointsSize", value: function() {
      for (var t3 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e2 = 0; e2 < t3.length; e2++) {
        var i3 = parseFloat(t3[e2].getAttribute("default-marker-size"));
        if (v.isNumber(i3) && i3 > 0) {
          var a3 = this.ttCtx.tooltipUtil.getPathFromPoint(t3[e2], i3);
          t3[e2].setAttribute("d", a3);
        } else t3[e2].setAttribute("d", "M0,0");
      }
    } }]), t2;
  })(), Ca = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w;
      var a3 = this.w;
      this.ttCtx = e2, this.isVerticalGroupedRangeBar = !a3.globals.isBarHorizontal && "rangeBar" === a3.config.chart.type && a3.config.plotOptions.bar.rangeBarGroupRows;
    }
    return s(t2, [{ key: "getAttr", value: function(t3, e2) {
      return parseFloat(t3.target.getAttribute(e2));
    } }, { key: "handleHeatTreeTooltip", value: function(t3) {
      var e2 = t3.e, i3 = t3.opt, a3 = t3.x, s2 = t3.y, r2 = t3.type, n2 = this.ttCtx, o2 = this.w;
      if (e2.target.classList.contains("apexcharts-".concat(r2, "-rect"))) {
        var l2 = this.getAttr(e2, "i"), h2 = this.getAttr(e2, "j"), c2 = this.getAttr(e2, "cx"), d2 = this.getAttr(e2, "cy"), u2 = this.getAttr(e2, "width"), g2 = this.getAttr(e2, "height");
        if (n2.tooltipLabels.drawSeriesTexts({ ttItems: i3.ttItems, i: l2, j: h2, shared: false, e: e2 }), o2.globals.capturedSeriesIndex = l2, o2.globals.capturedDataPointIndex = h2, a3 = c2 + n2.tooltipRect.ttWidth / 2 + u2, s2 = d2 + n2.tooltipRect.ttHeight / 2 - g2 / 2, n2.tooltipPosition.moveXCrosshairs(c2 + u2 / 2), a3 > o2.globals.gridWidth / 2 && (a3 = c2 - n2.tooltipRect.ttWidth / 2 + u2), n2.w.config.tooltip.followCursor) {
          var p2 = o2.globals.dom.elWrap.getBoundingClientRect();
          a3 = o2.globals.clientX - p2.left - (a3 > o2.globals.gridWidth / 2 ? n2.tooltipRect.ttWidth : 0), s2 = o2.globals.clientY - p2.top - (s2 > o2.globals.gridHeight / 2 ? n2.tooltipRect.ttHeight : 0);
        }
      }
      return { x: a3, y: s2 };
    } }, { key: "handleMarkerTooltip", value: function(t3) {
      var e2, i3, a3 = t3.e, s2 = t3.opt, r2 = t3.x, n2 = t3.y, o2 = this.w, l2 = this.ttCtx;
      if (a3.target.classList.contains("apexcharts-marker")) {
        var h2 = parseInt(s2.paths.getAttribute("cx"), 10), c2 = parseInt(s2.paths.getAttribute("cy"), 10), d2 = parseFloat(s2.paths.getAttribute("val"));
        if (i3 = parseInt(s2.paths.getAttribute("rel"), 10), e2 = parseInt(s2.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, l2.intersect) {
          var u2 = v.findAncestor(s2.paths, "apexcharts-series");
          u2 && (e2 = parseInt(u2.getAttribute("data:realIndex"), 10));
        }
        if (l2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: e2, j: i3, shared: !l2.showOnIntersect && o2.config.tooltip.shared, e: a3 }), "mouseup" === a3.type && l2.markerClick(a3, e2, i3), o2.globals.capturedSeriesIndex = e2, o2.globals.capturedDataPointIndex = i3, r2 = h2, n2 = c2 + o2.globals.translateY - 1.4 * l2.tooltipRect.ttHeight, l2.w.config.tooltip.followCursor) {
          var g2 = l2.getElGrid().getBoundingClientRect();
          n2 = l2.e.clientY + o2.globals.translateY - g2.top;
        }
        d2 < 0 && (n2 = c2), l2.marker.enlargeCurrentPoint(i3, s2.paths, r2, n2);
      }
      return { x: r2, y: n2 };
    } }, { key: "handleBarTooltip", value: function(t3) {
      var e2, i3, a3 = t3.e, s2 = t3.opt, r2 = this.w, n2 = this.ttCtx, o2 = n2.getElTooltip(), l2 = 0, h2 = 0, c2 = 0, d2 = this.getBarTooltipXY({ e: a3, opt: s2 });
      if (null !== d2.j || 0 !== d2.barHeight || 0 !== d2.barWidth) {
        e2 = d2.i;
        var u2 = d2.j;
        if (r2.globals.capturedSeriesIndex = e2, r2.globals.capturedDataPointIndex = u2, r2.globals.isBarHorizontal && n2.tooltipUtil.hasBars() || !r2.config.tooltip.shared ? (h2 = d2.x, c2 = d2.y, i3 = Array.isArray(r2.config.stroke.width) ? r2.config.stroke.width[e2] : r2.config.stroke.width, l2 = h2) : r2.globals.comboCharts || r2.config.tooltip.shared || (l2 /= 2), isNaN(c2) && (c2 = r2.globals.svgHeight - n2.tooltipRect.ttHeight), parseInt(s2.paths.parentNode.getAttribute("data:realIndex"), 10), h2 + n2.tooltipRect.ttWidth > r2.globals.gridWidth ? h2 -= n2.tooltipRect.ttWidth : h2 < 0 && (h2 = 0), n2.w.config.tooltip.followCursor) {
          var g2 = n2.getElGrid().getBoundingClientRect();
          c2 = n2.e.clientY - g2.top;
        }
        null === n2.tooltip && (n2.tooltip = r2.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r2.config.tooltip.shared || (r2.globals.comboBarCount > 0 ? n2.tooltipPosition.moveXCrosshairs(l2 + i3 / 2) : n2.tooltipPosition.moveXCrosshairs(l2)), !n2.fixedTooltip && (!r2.config.tooltip.shared || r2.globals.isBarHorizontal && n2.tooltipUtil.hasBars()) && (c2 = c2 + r2.globals.translateY - n2.tooltipRect.ttHeight / 2, o2.style.left = h2 + r2.globals.translateX + "px", o2.style.top = c2 + "px");
      }
    } }, { key: "getBarTooltipXY", value: function(t3) {
      var e2 = this, i3 = t3.e, a3 = t3.opt, s2 = this.w, r2 = null, n2 = this.ttCtx, o2 = 0, l2 = 0, h2 = 0, c2 = 0, d2 = 0, u2 = i3.target.classList;
      if (u2.contains("apexcharts-bar-area") || u2.contains("apexcharts-candlestick-area") || u2.contains("apexcharts-boxPlot-area") || u2.contains("apexcharts-rangebar-area")) {
        var g2 = i3.target, p2 = g2.getBoundingClientRect(), f2 = a3.elGrid.getBoundingClientRect(), x2 = p2.height;
        d2 = p2.height;
        var b2 = p2.width, m2 = parseInt(g2.getAttribute("cx"), 10), v2 = parseInt(g2.getAttribute("cy"), 10);
        c2 = parseFloat(g2.getAttribute("barWidth"));
        var y2 = "touchmove" === i3.type ? i3.touches[0].clientX : i3.clientX;
        r2 = parseInt(g2.getAttribute("j"), 10), o2 = parseInt(g2.parentNode.getAttribute("rel"), 10) - 1;
        var w2 = g2.getAttribute("data-range-y1"), k2 = g2.getAttribute("data-range-y2");
        s2.globals.comboCharts && (o2 = parseInt(g2.parentNode.getAttribute("data:realIndex"), 10));
        var A2 = function(t4) {
          return s2.globals.isXNumeric ? m2 - b2 / 2 : e2.isVerticalGroupedRangeBar ? m2 + b2 / 2 : m2 - n2.dataPointsDividedWidth + b2 / 2;
        }, C2 = function() {
          return v2 - n2.dataPointsDividedHeight + x2 / 2 - n2.tooltipRect.ttHeight / 2;
        };
        n2.tooltipLabels.drawSeriesTexts({ ttItems: a3.ttItems, i: o2, j: r2, y1: w2 ? parseInt(w2, 10) : null, y2: k2 ? parseInt(k2, 10) : null, shared: !n2.showOnIntersect && s2.config.tooltip.shared, e: i3 }), s2.config.tooltip.followCursor ? s2.globals.isBarHorizontal ? (l2 = y2 - f2.left + 15, h2 = C2()) : (l2 = A2(), h2 = i3.clientY - f2.top - n2.tooltipRect.ttHeight / 2 - 15) : s2.globals.isBarHorizontal ? ((l2 = m2) < n2.xyRatios.baseLineInvertedY && (l2 = m2 - n2.tooltipRect.ttWidth), h2 = C2()) : (l2 = A2(), h2 = v2);
      }
      return { x: l2, y: h2, barHeight: d2, barWidth: c2, i: o2, j: r2 };
    } }]), t2;
  })(), Sa = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.ttCtx = e2;
    }
    return s(t2, [{ key: "drawXaxisTooltip", value: function() {
      var t3 = this.w, e2 = this.ttCtx, i3 = "bottom" === t3.config.xaxis.position;
      e2.xaxisOffY = i3 ? t3.globals.gridHeight + 1 : -t3.globals.xAxisHeight - t3.config.xaxis.axisTicks.height + 3;
      var a3 = i3 ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s2 = t3.globals.dom.elWrap;
      e2.isXAxisTooltipEnabled && (null === t3.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e2.xaxisTooltip = document.createElement("div"), e2.xaxisTooltip.setAttribute("class", a3 + " apexcharts-theme-" + t3.config.tooltip.theme), s2.appendChild(e2.xaxisTooltip), e2.xaxisTooltipText = document.createElement("div"), e2.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e2.xaxisTooltipText.style.fontFamily = t3.config.xaxis.tooltip.style.fontFamily || t3.config.chart.fontFamily, e2.xaxisTooltipText.style.fontSize = t3.config.xaxis.tooltip.style.fontSize, e2.xaxisTooltip.appendChild(e2.xaxisTooltipText)));
    } }, { key: "drawYaxisTooltip", value: function() {
      for (var t3 = this.w, e2 = this.ttCtx, i3 = 0; i3 < t3.config.yaxis.length; i3++) {
        var a3 = t3.config.yaxis[i3].opposite || t3.config.yaxis[i3].crosshairs.opposite;
        e2.yaxisOffX = a3 ? t3.globals.gridWidth + 1 : 1;
        var s2 = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i3, a3 ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"), r2 = t3.globals.dom.elWrap;
        null === t3.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i3)) && (e2.yaxisTooltip = document.createElement("div"), e2.yaxisTooltip.setAttribute("class", s2 + " apexcharts-theme-" + t3.config.tooltip.theme), r2.appendChild(e2.yaxisTooltip), 0 === i3 && (e2.yaxisTooltipText = []), e2.yaxisTooltipText[i3] = document.createElement("div"), e2.yaxisTooltipText[i3].classList.add("apexcharts-yaxistooltip-text"), e2.yaxisTooltip.appendChild(e2.yaxisTooltipText[i3]));
      }
    } }, { key: "setXCrosshairWidth", value: function() {
      var t3 = this.w, e2 = this.ttCtx, i3 = e2.getElXCrosshairs();
      if (e2.xcrosshairsWidth = parseInt(t3.config.xaxis.crosshairs.width, 10), t3.globals.comboCharts) {
        var a3 = t3.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== a3 && "barWidth" === t3.config.xaxis.crosshairs.width) {
          var s2 = parseFloat(a3.getAttribute("barWidth"));
          e2.xcrosshairsWidth = s2;
        } else if ("tickWidth" === t3.config.xaxis.crosshairs.width) {
          var r2 = t3.globals.labels.length;
          e2.xcrosshairsWidth = t3.globals.gridWidth / r2;
        }
      } else if ("tickWidth" === t3.config.xaxis.crosshairs.width) {
        var n2 = t3.globals.labels.length;
        e2.xcrosshairsWidth = t3.globals.gridWidth / n2;
      } else if ("barWidth" === t3.config.xaxis.crosshairs.width) {
        var o2 = t3.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== o2) {
          var l2 = parseFloat(o2.getAttribute("barWidth"));
          e2.xcrosshairsWidth = l2;
        } else e2.xcrosshairsWidth = 1;
      }
      t3.globals.isBarHorizontal && (e2.xcrosshairsWidth = 0), null !== i3 && e2.xcrosshairsWidth > 0 && i3.setAttribute("width", e2.xcrosshairsWidth);
    } }, { key: "handleYCrosshair", value: function() {
      var t3 = this.w, e2 = this.ttCtx;
      e2.ycrosshairs = t3.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e2.ycrosshairsHidden = t3.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
    } }, { key: "drawYaxisTooltipText", value: function(t3, e2, i3) {
      var a3 = this.ttCtx, s2 = this.w, r2 = s2.globals, n2 = r2.seriesYAxisMap[t3];
      if (a3.yaxisTooltips[t3] && n2.length > 0) {
        var o2 = r2.yLabelFormatters[t3], l2 = a3.getElGrid().getBoundingClientRect(), h2 = n2[0], c2 = 0;
        i3.yRatio.length > 1 && (c2 = h2);
        var d2 = (e2 - l2.top) * i3.yRatio[c2], u2 = r2.maxYArr[h2] - r2.minYArr[h2], g2 = r2.minYArr[h2] + (u2 - d2);
        s2.config.yaxis[t3].reversed && (g2 = r2.maxYArr[h2] - (u2 - d2)), a3.tooltipPosition.moveYCrosshairs(e2 - l2.top), a3.yaxisTooltipText[t3].innerHTML = o2(g2), a3.tooltipPosition.moveYAxisTooltip(t3);
      }
    } }]), t2;
  })(), La = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
      var a3 = this.w;
      this.tConfig = a3.config.tooltip, this.tooltipUtil = new ya(this), this.tooltipLabels = new wa(this), this.tooltipPosition = new ka(this), this.marker = new Aa(this), this.intersect = new Ca(this), this.axesTooltip = new Sa(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !a3.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
    }
    return s(t2, [{ key: "getElTooltip", value: function(t3) {
      return t3 || (t3 = this), t3.w.globals.dom.baseEl ? t3.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
    } }, { key: "getElXCrosshairs", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
    } }, { key: "getElGrid", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
    } }, { key: "drawTooltip", value: function(t3) {
      var e2 = this.w;
      this.xyRatios = t3, this.isXAxisTooltipEnabled = e2.config.xaxis.tooltip.enabled && e2.globals.axisCharts, this.yaxisTooltips = e2.config.yaxis.map((function(t4, i4) {
        return !!(t4.show && t4.tooltip.enabled && e2.globals.axisCharts);
      })), this.allTooltipSeriesGroups = [], e2.globals.axisCharts || (this.showTooltipTitle = false);
      var i3 = document.createElement("div");
      if (i3.classList.add("apexcharts-tooltip"), e2.config.tooltip.cssClass && i3.classList.add(e2.config.tooltip.cssClass), i3.classList.add("apexcharts-theme-".concat(this.tConfig.theme || "light")), e2.globals.dom.elWrap.appendChild(i3), e2.globals.axisCharts) {
        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
        var a3 = new Ki(this.ctx);
        this.xAxisTicksPositions = a3.getXAxisTicksPositions();
      }
      if (!e2.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e2.config.chart.type || this.tConfig.shared || (this.showOnIntersect = true), 0 !== e2.config.markers.size && 0 !== e2.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e2.globals.collapsedSeries.length !== e2.globals.series.length) {
        this.dataPointsDividedHeight = e2.globals.gridHeight / e2.globals.dataPoints, this.dataPointsDividedWidth = e2.globals.gridWidth / e2.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e2.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i3.appendChild(this.tooltipTitle));
        var s2 = e2.globals.series.length;
        (e2.globals.xyCharts || e2.globals.comboCharts) && this.tConfig.shared && (s2 = this.showOnIntersect ? 1 : e2.globals.series.length), this.legendLabels = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s2), this.addSVGEvents();
      }
    } }, { key: "createTTElements", value: function(t3) {
      for (var e2 = this, i3 = this.w, a3 = [], s2 = this.getElTooltip(), r2 = function(r3) {
        var n3 = document.createElement("div");
        n3.classList.add("apexcharts-tooltip-series-group", "apexcharts-tooltip-series-group-".concat(r3)), n3.style.order = i3.config.tooltip.inverseOrder ? t3 - r3 : r3 + 1;
        var o2 = document.createElement("span");
        o2.classList.add("apexcharts-tooltip-marker"), i3.config.tooltip.fillSeriesColor ? o2.style.backgroundColor = i3.globals.colors[r3] : o2.style.color = i3.globals.colors[r3];
        var l2 = i3.config.markers.shape, h2 = l2;
        Array.isArray(l2) && (h2 = l2[r3]), o2.setAttribute("shape", h2), n3.appendChild(o2);
        var c2 = document.createElement("div");
        c2.classList.add("apexcharts-tooltip-text"), c2.style.fontFamily = e2.tConfig.style.fontFamily || i3.config.chart.fontFamily, c2.style.fontSize = e2.tConfig.style.fontSize, ["y", "goals", "z"].forEach((function(t4) {
          var e3 = document.createElement("div");
          e3.classList.add("apexcharts-tooltip-".concat(t4, "-group"));
          var i4 = document.createElement("span");
          i4.classList.add("apexcharts-tooltip-text-".concat(t4, "-label")), e3.appendChild(i4);
          var a4 = document.createElement("span");
          a4.classList.add("apexcharts-tooltip-text-".concat(t4, "-value")), e3.appendChild(a4), c2.appendChild(e3);
        })), n3.appendChild(c2), s2.appendChild(n3), a3.push(n3);
      }, n2 = 0; n2 < t3; n2++) r2(n2);
      return a3;
    } }, { key: "addSVGEvents", value: function() {
      var t3 = this.w, e2 = t3.config.chart.type, i3 = this.getElTooltip(), a3 = !("bar" !== e2 && "candlestick" !== e2 && "boxPlot" !== e2 && "rangeBar" !== e2), s2 = "area" === e2 || "line" === e2 || "scatter" === e2 || "bubble" === e2 || "radar" === e2, r2 = t3.globals.dom.Paper.node, n2 = this.getElGrid();
      n2 && (this.seriesBound = n2.getBoundingClientRect());
      var o2, l2 = [], h2 = [], c2 = { hoverArea: r2, elGrid: n2, tooltipEl: i3, tooltipY: l2, tooltipX: h2, ttItems: this.ttItems };
      if (t3.globals.axisCharts && (s2 ? o2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a3 ? o2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e2 && "treemap" !== e2 || (o2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), o2 && o2.length)) for (var d2 = 0; d2 < o2.length; d2++) l2.push(o2[d2].getAttribute("cy")), h2.push(o2[d2].getAttribute("cx"));
      if (t3.globals.xyCharts && !this.showOnIntersect || t3.globals.comboCharts && !this.showOnIntersect || a3 && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([r2], c2);
      else if (a3 && !t3.globals.comboCharts || s2 && this.showOnIntersect) this.addDatapointEventsListeners(c2);
      else if (!t3.globals.axisCharts || "heatmap" === e2 || "treemap" === e2) {
        var u2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
        this.addPathsEventListeners(u2, c2);
      }
      if (this.showOnIntersect) {
        var g2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
        g2.length > 0 && this.addPathsEventListeners(g2, c2), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c2);
      }
    } }, { key: "drawFixedTooltipRect", value: function() {
      var t3 = this.w, e2 = this.getElTooltip(), i3 = e2.getBoundingClientRect(), a3 = i3.width + 10, s2 = i3.height + 10, r2 = this.tConfig.fixed.offsetX, n2 = this.tConfig.fixed.offsetY, o2 = this.tConfig.fixed.position.toLowerCase();
      return o2.indexOf("right") > -1 && (r2 = r2 + t3.globals.svgWidth - a3 + 10), o2.indexOf("bottom") > -1 && (n2 = n2 + t3.globals.svgHeight - s2 - 10), e2.style.left = r2 + "px", e2.style.top = n2 + "px", { x: r2, y: n2, ttWidth: a3, ttHeight: s2 };
    } }, { key: "addDatapointEventsListeners", value: function(t3) {
      var e2 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
      this.addPathsEventListeners(e2, t3);
    } }, { key: "addPathsEventListeners", value: function(t3, e2) {
      for (var i3 = this, a3 = function(a4) {
        var s3 = { paths: t3[a4], tooltipEl: e2.tooltipEl, tooltipY: e2.tooltipY, tooltipX: e2.tooltipX, elGrid: e2.elGrid, hoverArea: e2.hoverArea, ttItems: e2.ttItems };
        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map((function(e3) {
          return t3[a4].addEventListener(e3, i3.onSeriesHover.bind(i3, s3), { capture: false, passive: true });
        }));
      }, s2 = 0; s2 < t3.length; s2++) a3(s2);
    } }, { key: "onSeriesHover", value: function(t3, e2) {
      var i3 = this, a3 = Date.now() - this.lastHoverTime;
      a3 >= 20 ? this.seriesHover(t3, e2) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout((function() {
        i3.seriesHover(t3, e2);
      }), 20 - a3));
    } }, { key: "seriesHover", value: function(t3, e2) {
      var i3 = this;
      this.lastHoverTime = Date.now();
      var a3 = [], s2 = this.w;
      s2.config.chart.group && (a3 = this.ctx.getGroupedCharts()), s2.globals.axisCharts && (s2.globals.minX === -1 / 0 && s2.globals.maxX === 1 / 0 || 0 === s2.globals.dataPoints) || (a3.length ? a3.forEach((function(a4) {
        var s3 = i3.getElTooltip(a4), r2 = { paths: t3.paths, tooltipEl: s3, tooltipY: t3.tooltipY, tooltipX: t3.tooltipX, elGrid: t3.elGrid, hoverArea: t3.hoverArea, ttItems: a4.w.globals.tooltip.ttItems };
        a4.w.globals.minX === i3.w.globals.minX && a4.w.globals.maxX === i3.w.globals.maxX && a4.w.globals.tooltip.seriesHoverByContext({ chartCtx: a4, ttCtx: a4.w.globals.tooltip, opt: r2, e: e2 });
      })) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t3, e: e2 }));
    } }, { key: "seriesHoverByContext", value: function(t3) {
      var e2 = t3.chartCtx, i3 = t3.ttCtx, a3 = t3.opt, s2 = t3.e, r2 = e2.w, n2 = this.getElTooltip(e2);
      if (n2) {
        if (i3.tooltipRect = { x: 0, y: 0, ttWidth: n2.getBoundingClientRect().width, ttHeight: n2.getBoundingClientRect().height }, i3.e = s2, i3.tooltipUtil.hasBars() && !r2.globals.comboCharts && !i3.isBarShared) {
          if (this.tConfig.onDatasetHover.highlightDataSeries) new $i(e2).toggleSeriesOnHover(s2, s2.target.parentNode);
        }
        r2.globals.axisCharts ? i3.axisChartsTooltips({ e: s2, opt: a3, tooltipRect: i3.tooltipRect }) : i3.nonAxisChartsTooltips({ e: s2, opt: a3, tooltipRect: i3.tooltipRect }), i3.fixedTooltip && i3.drawFixedTooltipRect();
      }
    } }, { key: "axisChartsTooltips", value: function(t3) {
      var e2, i3, a3 = t3.e, s2 = t3.opt, r2 = this.w, n2 = s2.elGrid.getBoundingClientRect(), o2 = "touchmove" === a3.type ? a3.touches[0].clientX : a3.clientX, l2 = "touchmove" === a3.type ? a3.touches[0].clientY : a3.clientY;
      if (this.clientY = l2, this.clientX = o2, r2.globals.capturedSeriesIndex = -1, r2.globals.capturedDataPointIndex = -1, l2 < n2.top || l2 > n2.top + n2.height) this.handleMouseOut(s2);
      else {
        if (Array.isArray(this.tConfig.enabledOnSeries) && !r2.config.tooltip.shared) {
          var h2 = parseInt(s2.paths.getAttribute("index"), 10);
          if (this.tConfig.enabledOnSeries.indexOf(h2) < 0) return void this.handleMouseOut(s2);
        }
        var c2 = this.getElTooltip(), d2 = this.getElXCrosshairs(), u2 = [];
        r2.config.chart.group && (u2 = this.ctx.getSyncedCharts());
        var g2 = r2.globals.xyCharts || "bar" === r2.config.chart.type && !r2.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r2.globals.comboCharts && this.tooltipUtil.hasBars();
        if ("mousemove" === a3.type || "touchmove" === a3.type || "mouseup" === a3.type) {
          if (r2.globals.collapsedSeries.length + r2.globals.ancillaryCollapsedSeries.length === r2.globals.series.length) return;
          null !== d2 && d2.classList.add("apexcharts-active");
          var p2 = this.yaxisTooltips.filter((function(t4) {
            return true === t4;
          }));
          if (null !== this.ycrosshairs && p2.length && this.ycrosshairs.classList.add("apexcharts-active"), g2 && !this.showOnIntersect || u2.length > 1) this.handleStickyTooltip(a3, o2, l2, s2);
          else if ("heatmap" === r2.config.chart.type || "treemap" === r2.config.chart.type) {
            var f2 = this.intersect.handleHeatTreeTooltip({ e: a3, opt: s2, x: e2, y: i3, type: r2.config.chart.type });
            e2 = f2.x, i3 = f2.y, c2.style.left = e2 + "px", c2.style.top = i3 + "px";
          } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: a3, opt: s2 }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: a3, opt: s2, x: e2, y: i3 });
          if (this.yaxisTooltips.length) for (var x2 = 0; x2 < r2.config.yaxis.length; x2++) this.axesTooltip.drawYaxisTooltipText(x2, l2, this.xyRatios);
          r2.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), s2.tooltipEl.classList.add("apexcharts-active");
        } else "mouseout" !== a3.type && "touchend" !== a3.type || this.handleMouseOut(s2);
      }
    } }, { key: "nonAxisChartsTooltips", value: function(t3) {
      var e2 = t3.e, i3 = t3.opt, a3 = t3.tooltipRect, s2 = this.w, r2 = i3.paths.getAttribute("rel"), n2 = this.getElTooltip(), o2 = s2.globals.dom.elWrap.getBoundingClientRect();
      if ("mousemove" === e2.type || "touchmove" === e2.type) {
        s2.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), n2.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i3.ttItems, i: parseInt(r2, 10) - 1, shared: false });
        var l2 = s2.globals.clientX - o2.left - a3.ttWidth / 2, h2 = s2.globals.clientY - o2.top - a3.ttHeight - 10;
        if (n2.style.left = l2 + "px", n2.style.top = h2 + "px", s2.config.legend.tooltipHoverFormatter) {
          var c2 = r2 - 1, d2 = (0, s2.config.legend.tooltipHoverFormatter)(this.legendLabels[c2].getAttribute("data:default-text"), { seriesIndex: c2, dataPointIndex: c2, w: s2 });
          this.legendLabels[c2].innerHTML = d2;
        }
      } else "mouseout" !== e2.type && "touchend" !== e2.type || (n2.classList.remove("apexcharts-active"), s2.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), s2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function(t4) {
        var e3 = t4.getAttribute("data:default-text");
        t4.innerHTML = decodeURIComponent(e3);
      })));
    } }, { key: "handleStickyTooltip", value: function(t3, e2, i3, a3) {
      var s2 = this.w, r2 = this.tooltipUtil.getNearestValues({ context: this, hoverArea: a3.hoverArea, elGrid: a3.elGrid, clientX: e2, clientY: i3 }), n2 = r2.j, o2 = r2.capturedSeries;
      s2.globals.collapsedSeriesIndices.includes(o2) && (o2 = null);
      var l2 = a3.elGrid.getBoundingClientRect();
      if (r2.hoverX < 0 || r2.hoverX > l2.width) this.handleMouseOut(a3);
      else if (null !== o2) this.handleStickyCapturedSeries(t3, o2, a3, n2);
      else if (this.tooltipUtil.isXoverlap(n2) || s2.globals.isBarHorizontal) {
        var h2 = s2.globals.series.findIndex((function(t4, e3) {
          return !s2.globals.collapsedSeriesIndices.includes(e3);
        }));
        this.create(t3, this, h2, n2, a3.ttItems);
      }
    } }, { key: "handleStickyCapturedSeries", value: function(t3, e2, i3, a3) {
      var s2 = this.w;
      if (!this.tConfig.shared && null === s2.globals.series[e2][a3]) return void this.handleMouseOut(i3);
      if (void 0 !== s2.globals.series[e2][a3]) this.tConfig.shared && this.tooltipUtil.isXoverlap(a3) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t3, this, e2, a3, i3.ttItems) : this.create(t3, this, e2, a3, i3.ttItems, false);
      else if (this.tooltipUtil.isXoverlap(a3)) {
        var r2 = s2.globals.series.findIndex((function(t4, e3) {
          return !s2.globals.collapsedSeriesIndices.includes(e3);
        }));
        this.create(t3, this, r2, a3, i3.ttItems);
      }
    } }, { key: "deactivateHoverFilter", value: function() {
      for (var t3 = this.w, e2 = new Mi(this.ctx), i3 = t3.globals.dom.Paper.find(".apexcharts-bar-area"), a3 = 0; a3 < i3.length; a3++) e2.pathMouseLeave(i3[a3]);
    } }, { key: "handleMouseOut", value: function(t3) {
      var e2 = this.w, i3 = this.getElXCrosshairs();
      if (e2.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), t3.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e2.config.chart.type && this.marker.resetPointsSize(), null !== i3 && i3.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
        null === this.yaxisTTEls && (this.yaxisTTEls = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
        for (var a3 = 0; a3 < this.yaxisTTEls.length; a3++) this.yaxisTTEls[a3].classList.remove("apexcharts-active");
      }
      e2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function(t4) {
        var e3 = t4.getAttribute("data:default-text");
        t4.innerHTML = decodeURIComponent(e3);
      }));
    } }, { key: "markerClick", value: function(t3, e2, i3) {
      var a3 = this.w;
      "function" == typeof a3.config.chart.events.markerClick && a3.config.chart.events.markerClick(t3, this.ctx, { seriesIndex: e2, dataPointIndex: i3, w: a3 }), this.ctx.events.fireEvent("markerClick", [t3, this.ctx, { seriesIndex: e2, dataPointIndex: i3, w: a3 }]);
    } }, { key: "create", value: function(t3, e2, i3, a3, s2) {
      var r2, n2, o2, l2, h2, c2, d2, g2, p2, f2, x2, b2, m2, v2, y2, w2, k2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, A2 = this.w, C2 = e2;
      "mouseup" === t3.type && this.markerClick(t3, i3, a3), null === k2 && (k2 = this.tConfig.shared);
      var S2 = this.tooltipUtil.hasMarkers(i3), L2 = this.tooltipUtil.getElBars(), M2 = function() {
        A2.globals.markers.largestSize > 0 ? C2.marker.enlargePoints(a3) : C2.tooltipPosition.moveDynamicPointsOnHover(a3);
      };
      if (A2.config.legend.tooltipHoverFormatter) {
        var P2 = A2.config.legend.tooltipHoverFormatter, I2 = Array.from(this.legendLabels);
        I2.forEach((function(t4) {
          var e3 = t4.getAttribute("data:default-text");
          t4.innerHTML = decodeURIComponent(e3);
        }));
        for (var T2 = 0; T2 < I2.length; T2++) {
          var z2 = I2[T2], X2 = parseInt(z2.getAttribute("i"), 10), R2 = decodeURIComponent(z2.getAttribute("data:default-text")), E2 = P2(R2, { seriesIndex: k2 ? X2 : i3, dataPointIndex: a3, w: A2 });
          if (k2) z2.innerHTML = A2.globals.collapsedSeriesIndices.indexOf(X2) < 0 ? E2 : R2;
          else if (z2.innerHTML = X2 === i3 ? E2 : R2, i3 === X2) break;
        }
      }
      var Y2 = u(u({ ttItems: s2, i: i3, j: a3 }, void 0 !== (null === (r2 = A2.globals.seriesRange) || void 0 === r2 || null === (n2 = r2[i3]) || void 0 === n2 || null === (o2 = n2[a3]) || void 0 === o2 || null === (l2 = o2.y[0]) || void 0 === l2 ? void 0 : l2.y1) && { y1: null === (h2 = A2.globals.seriesRange) || void 0 === h2 || null === (c2 = h2[i3]) || void 0 === c2 || null === (d2 = c2[a3]) || void 0 === d2 || null === (g2 = d2.y[0]) || void 0 === g2 ? void 0 : g2.y1 }), void 0 !== (null === (p2 = A2.globals.seriesRange) || void 0 === p2 || null === (f2 = p2[i3]) || void 0 === f2 || null === (x2 = f2[a3]) || void 0 === x2 || null === (b2 = x2.y[0]) || void 0 === b2 ? void 0 : b2.y2) && { y2: null === (m2 = A2.globals.seriesRange) || void 0 === m2 || null === (v2 = m2[i3]) || void 0 === v2 || null === (y2 = v2[a3]) || void 0 === y2 || null === (w2 = y2.y[0]) || void 0 === w2 ? void 0 : w2.y2 });
      if (k2) {
        if (C2.tooltipLabels.drawSeriesTexts(u(u({}, Y2), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), S2) M2();
        else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(L2), this.barSeriesHeight > 0)) {
          var H2 = new Mi(this.ctx), O2 = A2.globals.dom.Paper.find(".apexcharts-bar-area[j='".concat(a3, "']"));
          this.deactivateHoverFilter(), C2.tooltipUtil.getAllMarkers(true).length && !this.barSeriesHeight && M2(), C2.tooltipPosition.moveStickyTooltipOverBars(a3, i3);
          for (var F2 = 0; F2 < O2.length; F2++) H2.pathMouseEnter(O2[F2]);
        }
      } else C2.tooltipLabels.drawSeriesTexts(u({ shared: false }, Y2)), this.tooltipUtil.hasBars() && C2.tooltipPosition.moveStickyTooltipOverBars(a3, i3), S2 && C2.tooltipPosition.moveMarkers(i3, a3);
    } }]), t2;
  })(), Ma = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.barCtx = e2, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
    }
    return s(t2, [{ key: "handleBarDataLabels", value: function(t3) {
      var e2, i3, a3 = t3.x, s2 = t3.y, r2 = t3.y1, n2 = t3.y2, o2 = t3.i, l2 = t3.j, h2 = t3.realIndex, c2 = t3.columnGroupIndex, d2 = t3.series, g2 = t3.barHeight, p2 = t3.barWidth, f2 = t3.barXPosition, x2 = t3.barYPosition, b2 = t3.visibleSeries, m2 = this.w, v2 = new Mi(this.barCtx.ctx), y2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[h2] : this.barCtx.strokeWidth;
      m2.globals.isXNumeric && !m2.globals.isBarHorizontal ? (e2 = a3 + parseFloat(p2 * (b2 + 1)), i3 = s2 + parseFloat(g2 * (b2 + 1)) - y2) : (e2 = a3 + parseFloat(p2 * b2), i3 = s2 + parseFloat(g2 * b2));
      var w2, k2 = null, A2 = a3, C2 = s2, S2 = {}, L2 = m2.config.dataLabels, M2 = this.barCtx.barOptions.dataLabels, P2 = this.barCtx.barOptions.dataLabels.total;
      void 0 !== x2 && this.barCtx.isRangeBar && (i3 = x2, C2 = x2), void 0 !== f2 && this.barCtx.isVerticalGroupedRangeBar && (e2 = f2, A2 = f2);
      var I2 = L2.offsetX, T2 = L2.offsetY, z2 = { width: 0, height: 0 };
      if (m2.config.dataLabels.enabled) {
        var X2 = m2.globals.series[o2][l2];
        z2 = v2.getTextRects(m2.config.dataLabels.formatter ? m2.config.dataLabels.formatter(X2, u(u({}, m2), {}, { seriesIndex: o2, dataPointIndex: l2, w: m2 })) : m2.globals.yLabelFormatters[0](X2), parseFloat(L2.style.fontSize));
      }
      var R2 = { x: a3, y: s2, i: o2, j: l2, realIndex: h2, columnGroupIndex: c2, bcx: e2, bcy: i3, barHeight: g2, barWidth: p2, textRects: z2, strokeWidth: y2, dataLabelsX: A2, dataLabelsY: C2, dataLabelsConfig: L2, barDataLabelsConfig: M2, barTotalDataLabelsConfig: P2, offX: I2, offY: T2 };
      return S2 = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(R2) : this.calculateColumnsDataLabelsPosition(R2), w2 = this.drawCalculatedDataLabels({ x: S2.dataLabelsX, y: S2.dataLabelsY, val: this.barCtx.isRangeBar ? [r2, n2] : "100%" === m2.config.chart.stackType ? d2[h2][l2] : m2.globals.series[h2][l2], i: h2, j: l2, barWidth: p2, barHeight: g2, textRects: z2, dataLabelsConfig: L2 }), m2.config.chart.stacked && P2.enabled && (k2 = this.drawTotalDataLabels({ x: S2.totalDataLabelsX, y: S2.totalDataLabelsY, barWidth: p2, barHeight: g2, realIndex: h2, textAnchor: S2.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: h2, j: l2 }), dataLabelsConfig: L2, barTotalDataLabelsConfig: P2 })), { dataLabelsPos: S2, dataLabels: w2, totalDataLabels: k2 };
    } }, { key: "getStackedTotalDataLabel", value: function(t3) {
      var e2 = t3.realIndex, i3 = t3.j, a3 = this.w, s2 = this.barCtx.stackedSeriesTotals[i3];
      return this.totalFormatter && (s2 = this.totalFormatter(s2, u(u({}, a3), {}, { seriesIndex: e2, dataPointIndex: i3, w: a3 }))), s2;
    } }, { key: "calculateColumnsDataLabelsPosition", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = t3.i, s2 = t3.j, r2 = t3.realIndex;
      t3.columnGroupIndex;
      var n2, o2, l2 = t3.y, h2 = t3.bcx, c2 = t3.barWidth, d2 = t3.barHeight, u2 = t3.textRects, g2 = t3.dataLabelsX, p2 = t3.dataLabelsY, f2 = t3.dataLabelsConfig, x2 = t3.barDataLabelsConfig, b2 = t3.barTotalDataLabelsConfig, m2 = t3.strokeWidth, v2 = t3.offX, y2 = t3.offY, w2 = h2;
      d2 = Math.abs(d2);
      var k2 = "vertical" === i3.config.plotOptions.bar.dataLabels.orientation, A2 = this.barCtx.barHelpers.getZeroValueEncounters({ i: a3, j: s2 }).zeroEncounters;
      h2 -= m2 / 2;
      var C2 = i3.globals.gridWidth / i3.globals.dataPoints;
      if (this.barCtx.isVerticalGroupedRangeBar ? g2 += c2 / 2 : (g2 = i3.globals.isXNumeric ? h2 - c2 / 2 + v2 : h2 - C2 + c2 / 2 + v2, !i3.config.chart.stacked && A2 > 0 && i3.config.plotOptions.bar.hideZeroBarsWhenGrouped && (g2 -= c2 * A2)), k2) {
        g2 = g2 + u2.height / 2 - m2 / 2 - 2;
      }
      var S2 = i3.globals.series[a3][s2] < 0, L2 = l2;
      switch (this.barCtx.isReversed && (L2 = l2 + (S2 ? d2 : -d2)), x2.position) {
        case "center":
          p2 = k2 ? S2 ? L2 - d2 / 2 + y2 : L2 + d2 / 2 - y2 : S2 ? L2 - d2 / 2 + u2.height / 2 + y2 : L2 + d2 / 2 + u2.height / 2 - y2;
          break;
        case "bottom":
          p2 = k2 ? S2 ? L2 - d2 + y2 : L2 + d2 - y2 : S2 ? L2 - d2 + u2.height + m2 + y2 : L2 + d2 - u2.height / 2 + m2 - y2;
          break;
        case "top":
          p2 = k2 ? S2 ? L2 + y2 : L2 - y2 : S2 ? L2 - u2.height / 2 - y2 : L2 + u2.height + y2;
      }
      var M2 = L2;
      if (i3.globals.seriesGroups.forEach((function(t4) {
        var i4;
        null === (i4 = e2.barCtx[t4.join(",")]) || void 0 === i4 || i4.prevY.forEach((function(t5) {
          M2 = S2 ? Math.max(t5[s2], M2) : Math.min(t5[s2], M2);
        }));
      })), this.barCtx.lastActiveBarSerieIndex === r2 && b2.enabled) {
        var P2 = new Mi(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r2, j: s2 }), f2.fontSize);
        n2 = S2 ? M2 - P2.height / 2 - y2 - b2.offsetY + 18 : M2 + P2.height + y2 + b2.offsetY - 18;
        var I2 = C2;
        o2 = w2 + (i3.globals.isXNumeric ? -c2 * i3.globals.barGroups.length / 2 : i3.globals.barGroups.length * c2 / 2 - (i3.globals.barGroups.length - 1) * c2 - I2) + b2.offsetX;
      }
      return i3.config.chart.stacked || (p2 < 0 ? p2 = 0 + m2 : p2 + u2.height / 3 > i3.globals.gridHeight && (p2 = i3.globals.gridHeight - m2)), { bcx: h2, bcy: l2, dataLabelsX: g2, dataLabelsY: p2, totalDataLabelsX: o2, totalDataLabelsY: n2, totalDataLabelsAnchor: "middle" };
    } }, { key: "calculateBarsDataLabelsPosition", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = t3.x, s2 = t3.i, r2 = t3.j, n2 = t3.realIndex, o2 = t3.bcy, l2 = t3.barHeight, h2 = t3.barWidth, c2 = t3.textRects, d2 = t3.dataLabelsX, u2 = t3.strokeWidth, g2 = t3.dataLabelsConfig, p2 = t3.barDataLabelsConfig, f2 = t3.barTotalDataLabelsConfig, x2 = t3.offX, b2 = t3.offY, m2 = i3.globals.gridHeight / i3.globals.dataPoints, v2 = this.barCtx.barHelpers.getZeroValueEncounters({ i: s2, j: r2 }).zeroEncounters;
      h2 = Math.abs(h2);
      var y2, w2, k2 = o2 - (this.barCtx.isRangeBar ? 0 : m2) + l2 / 2 + c2.height / 2 + b2 - 3;
      !i3.config.chart.stacked && v2 > 0 && i3.config.plotOptions.bar.hideZeroBarsWhenGrouped && (k2 -= l2 * v2);
      var A2 = "start", C2 = i3.globals.series[s2][r2] < 0, S2 = a3;
      switch (this.barCtx.isReversed && (S2 = a3 + (C2 ? -h2 : h2), A2 = C2 ? "start" : "end"), p2.position) {
        case "center":
          d2 = C2 ? S2 + h2 / 2 - x2 : Math.max(c2.width / 2, S2 - h2 / 2) + x2;
          break;
        case "bottom":
          d2 = C2 ? S2 + h2 - u2 - x2 : S2 - h2 + u2 + x2;
          break;
        case "top":
          d2 = C2 ? S2 - u2 - x2 : S2 - u2 + x2;
      }
      var L2 = S2;
      if (i3.globals.seriesGroups.forEach((function(t4) {
        var i4;
        null === (i4 = e2.barCtx[t4.join(",")]) || void 0 === i4 || i4.prevX.forEach((function(t5) {
          L2 = C2 ? Math.min(t5[r2], L2) : Math.max(t5[r2], L2);
        }));
      })), this.barCtx.lastActiveBarSerieIndex === n2 && f2.enabled) {
        var M2 = new Mi(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: n2, j: r2 }), g2.fontSize);
        C2 ? (y2 = L2 - u2 - x2 - f2.offsetX, A2 = "end") : y2 = L2 + x2 + f2.offsetX + (this.barCtx.isReversed ? -(h2 + u2) : u2), w2 = k2 - c2.height / 2 + M2.height / 2 + f2.offsetY + u2, i3.globals.barGroups.length > 1 && (w2 -= i3.globals.barGroups.length / 2 * (l2 / 2));
      }
      return i3.config.chart.stacked || ("start" === g2.textAnchor ? d2 - c2.width < 0 ? d2 = C2 ? c2.width + u2 : u2 : d2 + c2.width > i3.globals.gridWidth && (d2 = C2 ? i3.globals.gridWidth - u2 : i3.globals.gridWidth - c2.width - u2) : "middle" === g2.textAnchor ? d2 - c2.width / 2 < 0 ? d2 = c2.width / 2 + u2 : d2 + c2.width / 2 > i3.globals.gridWidth && (d2 = i3.globals.gridWidth - c2.width / 2 - u2) : "end" === g2.textAnchor && (d2 < 1 ? d2 = c2.width + u2 : d2 + 1 > i3.globals.gridWidth && (d2 = i3.globals.gridWidth - c2.width - u2))), { bcx: a3, bcy: o2, dataLabelsX: d2, dataLabelsY: k2, totalDataLabelsX: y2, totalDataLabelsY: w2, totalDataLabelsAnchor: A2 };
    } }, { key: "drawCalculatedDataLabels", value: function(t3) {
      var e2 = t3.x, i3 = t3.y, a3 = t3.val, s2 = t3.i, r2 = t3.j, n2 = t3.textRects, o2 = t3.barHeight, l2 = t3.barWidth, h2 = t3.dataLabelsConfig, c2 = this.w, d2 = "rotate(0)";
      "vertical" === c2.config.plotOptions.bar.dataLabels.orientation && (d2 = "rotate(-90, ".concat(e2, ", ").concat(i3, ")"));
      var g2 = new qi(this.barCtx.ctx), p2 = new Mi(this.barCtx.ctx), f2 = h2.formatter, x2 = null, b2 = c2.globals.collapsedSeriesIndices.indexOf(s2) > -1;
      if (h2.enabled && !b2) {
        x2 = p2.group({ class: "apexcharts-data-labels", transform: d2 });
        var m2 = "";
        void 0 !== a3 && (m2 = f2(a3, u(u({}, c2), {}, { seriesIndex: s2, dataPointIndex: r2, w: c2 }))), !a3 && c2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (m2 = "");
        var v2 = c2.globals.series[s2][r2] < 0, y2 = c2.config.plotOptions.bar.dataLabels.position;
        if ("vertical" === c2.config.plotOptions.bar.dataLabels.orientation && ("top" === y2 && (h2.textAnchor = v2 ? "end" : "start"), "center" === y2 && (h2.textAnchor = "middle"), "bottom" === y2 && (h2.textAnchor = v2 ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) l2 < p2.getTextRects(m2, parseFloat(h2.style.fontSize)).width && (m2 = "");
        c2.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? n2.width / 1.6 > Math.abs(l2) && (m2 = "") : n2.height / 1.6 > Math.abs(o2) && (m2 = ""));
        var w2 = u({}, h2);
        this.barCtx.isHorizontal && a3 < 0 && ("start" === h2.textAnchor ? w2.textAnchor = "end" : "end" === h2.textAnchor && (w2.textAnchor = "start")), g2.plotDataLabelsText({ x: e2, y: i3, text: m2, i: s2, j: r2, parent: x2, dataLabelsConfig: w2, alwaysDrawDataLabel: true, offsetCorrection: true });
      }
      return x2;
    } }, { key: "drawTotalDataLabels", value: function(t3) {
      var e2 = t3.x, i3 = t3.y, a3 = t3.val, s2 = t3.realIndex, r2 = t3.textAnchor, n2 = t3.barTotalDataLabelsConfig;
      this.w;
      var o2, l2 = new Mi(this.barCtx.ctx);
      return n2.enabled && void 0 !== e2 && void 0 !== i3 && this.barCtx.lastActiveBarSerieIndex === s2 && (o2 = l2.drawText({ x: e2, y: i3, foreColor: n2.style.color, text: a3, textAnchor: r2, fontFamily: n2.style.fontFamily, fontSize: n2.style.fontSize, fontWeight: n2.style.fontWeight })), o2;
    } }]), t2;
  })(), Pa = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.barCtx = e2;
    }
    return s(t2, [{ key: "initVariables", value: function(t3) {
      var e2 = this.w;
      this.barCtx.series = t3, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
      for (var i3 = 0; i3 < t3.length; i3++) if (t3[i3].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t3[i3].length), e2.globals.isXNumeric) for (var a3 = 0; a3 < t3[i3].length; a3++) e2.globals.seriesX[i3][a3] > e2.globals.minX && e2.globals.seriesX[i3][a3] < e2.globals.maxX && this.barCtx.visibleItems++;
      else this.barCtx.visibleItems = e2.globals.dataPoints;
      this.arrBorderRadius = this.createBorderRadiusArr(e2.globals.series), v.isSafari() && (this.arrBorderRadius = this.arrBorderRadius.map((function(t4) {
        return t4.map((function(t5) {
          return "none";
        }));
      }))), 0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e2.globals.comboCharts || this.checkZeroSeries({ series: t3 });
    } }, { key: "initialPositions", value: function(t3) {
      var e2, i3, a3, s2, r2, n2, o2, l2, h2 = this.w, c2 = h2.globals.dataPoints;
      this.barCtx.isRangeBar && (c2 = h2.globals.labels.length);
      var d2 = this.barCtx.seriesLen;
      if (h2.config.plotOptions.bar.rangeBarGroupRows && (d2 = 1), this.barCtx.isHorizontal) r2 = (a3 = h2.globals.gridHeight / c2) / d2, h2.globals.isXNumeric && (r2 = (a3 = h2.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), r2 = r2 * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, -1 === String(this.barCtx.barOptions.barHeight).indexOf("%") && (r2 = parseInt(this.barCtx.barOptions.barHeight, 10)), l2 = this.barCtx.baseLineInvertedY + h2.globals.padHorizontal + (this.barCtx.isReversed ? h2.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (l2 = h2.globals.gridWidth / 2), i3 = (a3 - r2 * this.barCtx.seriesLen) / 2;
      else {
        if (s2 = h2.globals.gridWidth / this.barCtx.visibleItems, h2.config.xaxis.convertedCatToNumeric && (s2 = h2.globals.gridWidth / h2.globals.dataPoints), n2 = s2 / d2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, h2.globals.isXNumeric) {
          var u2 = this.barCtx.xRatio;
          h2.globals.minXDiff && 0.5 !== h2.globals.minXDiff && h2.globals.minXDiff / u2 > 0 && (s2 = h2.globals.minXDiff / u2), (n2 = s2 / d2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (n2 = 1);
        }
        if (-1 === String(this.barCtx.barOptions.columnWidth).indexOf("%") && (n2 = parseInt(this.barCtx.barOptions.columnWidth, 10)), o2 = h2.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? h2.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), h2.globals.isXNumeric) e2 = this.barCtx.getBarXForNumericXAxis({ x: e2, j: 0, realIndex: t3, barWidth: n2 }).x;
        else e2 = h2.globals.padHorizontal + v.noExponents(s2 - n2 * this.barCtx.seriesLen) / 2;
      }
      return h2.globals.barHeight = r2, h2.globals.barWidth = n2, { x: e2, y: i3, yDivision: a3, xDivision: s2, barHeight: r2, barWidth: n2, zeroH: o2, zeroW: l2 };
    } }, { key: "initializeStackedPrevVars", value: function(t3) {
      t3.w.globals.seriesGroups.forEach((function(e2) {
        t3[e2] || (t3[e2] = {}), t3[e2].prevY = [], t3[e2].prevX = [], t3[e2].prevYF = [], t3[e2].prevXF = [], t3[e2].prevYVal = [], t3[e2].prevXVal = [];
      }));
    } }, { key: "initializeStackedXYVars", value: function(t3) {
      t3.w.globals.seriesGroups.forEach((function(e2) {
        t3[e2] || (t3[e2] = {}), t3[e2].xArrj = [], t3[e2].xArrjF = [], t3[e2].xArrjVal = [], t3[e2].yArrj = [], t3[e2].yArrjF = [], t3[e2].yArrjVal = [];
      }));
    } }, { key: "getPathFillColor", value: function(t3, e2, i3, a3) {
      var s2, r2, n2, o2, l2 = this.w, h2 = this.barCtx.ctx.fill, c2 = null, d2 = this.barCtx.barOptions.distributed ? i3 : e2, u2 = false;
      this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map((function(a4) {
        t3[e2][i3] >= a4.from && t3[e2][i3] <= a4.to && (c2 = a4.color, u2 = true);
      }));
      return { color: h2.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? d2 : a3, dataPointIndex: i3, color: c2, value: t3[e2][i3], fillConfig: null === (s2 = l2.config.series[e2].data[i3]) || void 0 === s2 ? void 0 : s2.fill, fillType: null !== (r2 = l2.config.series[e2].data[i3]) && void 0 !== r2 && null !== (n2 = r2.fill) && void 0 !== n2 && n2.type ? null === (o2 = l2.config.series[e2].data[i3]) || void 0 === o2 ? void 0 : o2.fill.type : Array.isArray(l2.config.fill.type) ? l2.config.fill.type[a3] : l2.config.fill.type }), useRangeColor: u2 };
    } }, { key: "getStrokeWidth", value: function(t3, e2, i3) {
      var a3 = 0, s2 = this.w;
      return void 0 === this.barCtx.series[t3][e2] || null === this.barCtx.series[t3][e2] || "bar" === s2.config.chart.type && !this.barCtx.series[t3][e2] ? this.barCtx.isNullValue = true : this.barCtx.isNullValue = false, s2.config.stroke.show && (this.barCtx.isNullValue || (a3 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i3] : this.barCtx.strokeWidth)), a3;
    } }, { key: "createBorderRadiusArr", value: function(t3) {
      var e2, i3 = this.w, a3 = !this.w.config.chart.stacked || i3.config.plotOptions.bar.borderRadius <= 0, s2 = t3.length, n2 = 0 | (null === (e2 = t3[0]) || void 0 === e2 ? void 0 : e2.length), o2 = Array.from({ length: s2 }, (function() {
        return Array(n2).fill(a3 ? "top" : "none");
      }));
      if (a3) return o2;
      for (var l2 = 0; l2 < n2; l2++) {
        for (var h2 = [], c2 = [], d2 = 0, u2 = 0; u2 < s2; u2++) {
          var g2 = t3[u2][l2];
          g2 > 0 ? (h2.push(u2), d2++) : g2 < 0 && (c2.push(u2), d2++);
        }
        if (h2.length > 0 && 0 === c2.length) if (1 === h2.length) o2[h2[0]][l2] = "both";
        else {
          var p2, f2 = h2[0], x2 = h2[h2.length - 1], b2 = r(h2);
          try {
            for (b2.s(); !(p2 = b2.n()).done; ) {
              var m2 = p2.value;
              o2[m2][l2] = m2 === f2 ? "bottom" : m2 === x2 ? "top" : "none";
            }
          } catch (t4) {
            b2.e(t4);
          } finally {
            b2.f();
          }
        }
        else if (c2.length > 0 && 0 === h2.length) if (1 === c2.length) o2[c2[0]][l2] = "both";
        else {
          var v2, y2 = Math.max.apply(Math, c2), w2 = Math.min.apply(Math, c2), k2 = r(c2);
          try {
            for (k2.s(); !(v2 = k2.n()).done; ) {
              var A2 = v2.value;
              o2[A2][l2] = A2 === y2 ? "bottom" : A2 === w2 ? "top" : "none";
            }
          } catch (t4) {
            k2.e(t4);
          } finally {
            k2.f();
          }
        }
        else if (h2.length > 0 && c2.length > 0) {
          var C2, S2 = h2[h2.length - 1], L2 = r(h2);
          try {
            for (L2.s(); !(C2 = L2.n()).done; ) {
              var M2 = C2.value;
              o2[M2][l2] = M2 === S2 ? "top" : "none";
            }
          } catch (t4) {
            L2.e(t4);
          } finally {
            L2.f();
          }
          var P2, I2 = Math.max.apply(Math, c2), T2 = r(c2);
          try {
            for (T2.s(); !(P2 = T2.n()).done; ) {
              var z2 = P2.value;
              o2[z2][l2] = z2 === I2 ? "bottom" : "none";
            }
          } catch (t4) {
            T2.e(t4);
          } finally {
            T2.f();
          }
        } else if (1 === d2) {
          o2[h2[0] || c2[0]][l2] = "both";
        }
      }
      return o2;
    } }, { key: "barBackground", value: function(t3) {
      var e2 = t3.j, i3 = t3.i, a3 = t3.x1, s2 = t3.x2, r2 = t3.y1, n2 = t3.y2, o2 = t3.elSeries, l2 = this.w, h2 = new Mi(this.barCtx.ctx), c2 = new $i(this.barCtx.ctx).getActiveConfigSeriesIndex();
      if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && c2 === i3) {
        e2 >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e2 %= this.barCtx.barOptions.colors.backgroundBarColors.length);
        var d2 = this.barCtx.barOptions.colors.backgroundBarColors[e2], u2 = h2.drawRect(void 0 !== a3 ? a3 : 0, void 0 !== r2 ? r2 : 0, void 0 !== s2 ? s2 : l2.globals.gridWidth, void 0 !== n2 ? n2 : l2.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d2, this.barCtx.barOptions.colors.backgroundBarOpacity);
        o2.add(u2), u2.node.classList.add("apexcharts-backgroundBar");
      }
    } }, { key: "getColumnPaths", value: function(t3) {
      var e2, i3 = t3.barWidth, a3 = t3.barXPosition, s2 = t3.y1, r2 = t3.y2, n2 = t3.strokeWidth, o2 = t3.isReversed, l2 = t3.series, h2 = t3.seriesGroup, c2 = t3.realIndex, d2 = t3.i, u2 = t3.j, g2 = t3.w, p2 = new Mi(this.barCtx.ctx);
      (n2 = Array.isArray(n2) ? n2[c2] : n2) || (n2 = 0);
      var f2 = i3, x2 = a3;
      null !== (e2 = g2.config.series[c2].data[u2]) && void 0 !== e2 && e2.columnWidthOffset && (x2 = a3 - g2.config.series[c2].data[u2].columnWidthOffset / 2, f2 = i3 + g2.config.series[c2].data[u2].columnWidthOffset);
      var b2 = n2 / 2, m2 = x2 + b2, v2 = x2 + f2 - b2, y2 = (l2[d2][u2] >= 0 ? 1 : -1) * (o2 ? -1 : 1);
      s2 += 1e-3 - b2 * y2, r2 += 1e-3 + b2 * y2;
      var w2 = p2.move(m2, s2), k2 = p2.move(m2, s2), A2 = p2.line(v2, s2);
      if (g2.globals.previousPaths.length > 0 && (k2 = this.barCtx.getPreviousPath(c2, u2, false)), w2 = w2 + p2.line(m2, r2) + p2.line(v2, r2) + A2 + ("around" === g2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][u2] ? " Z" : " z"), k2 = k2 + p2.line(m2, s2) + A2 + A2 + A2 + A2 + A2 + p2.line(m2, s2) + ("around" === g2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][u2] ? " Z" : " z"), "none" !== this.arrBorderRadius[c2][u2] && (w2 = p2.roundPathCorners(w2, g2.config.plotOptions.bar.borderRadius)), g2.config.chart.stacked) {
        var C2 = this.barCtx;
        (C2 = this.barCtx[h2]).yArrj.push(r2 - b2 * y2), C2.yArrjF.push(Math.abs(s2 - r2 + n2 * y2)), C2.yArrjVal.push(this.barCtx.series[d2][u2]);
      }
      return { pathTo: w2, pathFrom: k2 };
    } }, { key: "getBarpaths", value: function(t3) {
      var e2, i3 = t3.barYPosition, a3 = t3.barHeight, s2 = t3.x1, r2 = t3.x2, n2 = t3.strokeWidth, o2 = t3.isReversed, l2 = t3.series, h2 = t3.seriesGroup, c2 = t3.realIndex, d2 = t3.i, u2 = t3.j, g2 = t3.w, p2 = new Mi(this.barCtx.ctx);
      (n2 = Array.isArray(n2) ? n2[c2] : n2) || (n2 = 0);
      var f2 = i3, x2 = a3;
      null !== (e2 = g2.config.series[c2].data[u2]) && void 0 !== e2 && e2.barHeightOffset && (f2 = i3 - g2.config.series[c2].data[u2].barHeightOffset / 2, x2 = a3 + g2.config.series[c2].data[u2].barHeightOffset);
      var b2 = n2 / 2, m2 = f2 + b2, v2 = f2 + x2 - b2, y2 = (l2[d2][u2] >= 0 ? 1 : -1) * (o2 ? -1 : 1);
      s2 += 1e-3 + b2 * y2, r2 += 1e-3 - b2 * y2;
      var w2 = p2.move(s2, m2), k2 = p2.move(s2, m2);
      g2.globals.previousPaths.length > 0 && (k2 = this.barCtx.getPreviousPath(c2, u2, false));
      var A2 = p2.line(s2, v2);
      if (w2 = w2 + p2.line(r2, m2) + p2.line(r2, v2) + A2 + ("around" === g2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][u2] ? " Z" : " z"), k2 = k2 + p2.line(s2, m2) + A2 + A2 + A2 + A2 + A2 + p2.line(s2, m2) + ("around" === g2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][u2] ? " Z" : " z"), "none" !== this.arrBorderRadius[c2][u2] && (w2 = p2.roundPathCorners(w2, g2.config.plotOptions.bar.borderRadius)), g2.config.chart.stacked) {
        var C2 = this.barCtx;
        (C2 = this.barCtx[h2]).xArrj.push(r2 + b2 * y2), C2.xArrjF.push(Math.abs(s2 - r2 - n2 * y2)), C2.xArrjVal.push(this.barCtx.series[d2][u2]);
      }
      return { pathTo: w2, pathFrom: k2 };
    } }, { key: "checkZeroSeries", value: function(t3) {
      for (var e2 = t3.series, i3 = this.w, a3 = 0; a3 < e2.length; a3++) {
        for (var s2 = 0, r2 = 0; r2 < e2[i3.globals.maxValsInArrayIndex].length; r2++) s2 += e2[a3][r2];
        0 === s2 && this.barCtx.zeroSerieses.push(a3);
      }
    } }, { key: "getXForValue", value: function(t3, e2) {
      var i3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? e2 : null;
      return null != t3 && (i3 = e2 + t3 / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t3 / this.barCtx.invertedYRatio : 0)), i3;
    } }, { key: "getYForValue", value: function(t3, e2, i3) {
      var a3 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3] ? e2 : null;
      return null != t3 && (a3 = e2 - t3 / this.barCtx.yRatio[i3] + 2 * (this.barCtx.isReversed ? t3 / this.barCtx.yRatio[i3] : 0)), a3;
    } }, { key: "getGoalValues", value: function(t3, e2, i3, a3, s2, r2) {
      var n2 = this, l2 = this.w, h2 = [], c2 = function(a4, s3) {
        var l3;
        h2.push((o(l3 = {}, t3, "x" === t3 ? n2.getXForValue(a4, e2, false) : n2.getYForValue(a4, i3, r2, false)), o(l3, "attrs", s3), l3));
      };
      if (l2.globals.seriesGoals[a3] && l2.globals.seriesGoals[a3][s2] && Array.isArray(l2.globals.seriesGoals[a3][s2]) && l2.globals.seriesGoals[a3][s2].forEach((function(t4) {
        c2(t4.value, t4);
      })), this.barCtx.barOptions.isDumbbell && l2.globals.seriesRange.length) {
        var d2 = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : l2.globals.colors, g2 = { strokeHeight: "x" === t3 ? 0 : l2.globals.markers.size[a3], strokeWidth: "x" === t3 ? l2.globals.markers.size[a3] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(d2[a3]) ? d2[a3][0] : d2[a3] };
        c2(l2.globals.seriesRangeStart[a3][s2], g2), c2(l2.globals.seriesRangeEnd[a3][s2], u(u({}, g2), {}, { strokeColor: Array.isArray(d2[a3]) ? d2[a3][1] : d2[a3] }));
      }
      return h2;
    } }, { key: "drawGoalLine", value: function(t3) {
      var e2 = t3.barXPosition, i3 = t3.barYPosition, a3 = t3.goalX, s2 = t3.goalY, r2 = t3.barWidth, n2 = t3.barHeight, o2 = new Mi(this.barCtx.ctx), l2 = o2.group({ className: "apexcharts-bar-goals-groups" });
      l2.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: l2.node }), l2.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
      var h2 = null;
      return this.barCtx.isHorizontal ? Array.isArray(a3) && a3.forEach((function(t4) {
        if (t4.x >= -1 && t4.x <= o2.w.globals.gridWidth + 1) {
          var e3 = void 0 !== t4.attrs.strokeHeight ? t4.attrs.strokeHeight : n2 / 2, a4 = i3 + e3 + n2 / 2;
          h2 = o2.drawLine(t4.x, a4 - 2 * e3, t4.x, a4, t4.attrs.strokeColor ? t4.attrs.strokeColor : void 0, t4.attrs.strokeDashArray, t4.attrs.strokeWidth ? t4.attrs.strokeWidth : 2, t4.attrs.strokeLineCap), l2.add(h2);
        }
      })) : Array.isArray(s2) && s2.forEach((function(t4) {
        if (t4.y >= -1 && t4.y <= o2.w.globals.gridHeight + 1) {
          var i4 = void 0 !== t4.attrs.strokeWidth ? t4.attrs.strokeWidth : r2 / 2, a4 = e2 + i4 + r2 / 2;
          h2 = o2.drawLine(a4 - 2 * i4, t4.y, a4, t4.y, t4.attrs.strokeColor ? t4.attrs.strokeColor : void 0, t4.attrs.strokeDashArray, t4.attrs.strokeHeight ? t4.attrs.strokeHeight : 2, t4.attrs.strokeLineCap), l2.add(h2);
        }
      })), l2;
    } }, { key: "drawBarShadow", value: function(t3) {
      var e2 = t3.prevPaths, i3 = t3.currPaths, a3 = t3.color, s2 = this.w, r2 = e2.x, n2 = e2.x1, o2 = e2.barYPosition, l2 = i3.x, h2 = i3.x1, c2 = i3.barYPosition, d2 = o2 + i3.barHeight, u2 = new Mi(this.barCtx.ctx), g2 = new v(), p2 = u2.move(n2, d2) + u2.line(r2, d2) + u2.line(l2, c2) + u2.line(h2, c2) + u2.line(n2, d2) + ("around" === s2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[realIndex][j] ? " Z" : " z");
      return u2.drawPath({ d: p2, fill: g2.shadeColor(0.5, v.rgb2hex(a3)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadow apexcharts-decoration-element" });
    } }, { key: "getZeroValueEncounters", value: function(t3) {
      var e2, i3 = t3.i, a3 = t3.j, s2 = this.w, r2 = 0, n2 = 0;
      return (s2.config.plotOptions.bar.horizontal ? s2.globals.series.map((function(t4, e3) {
        return e3;
      })) : (null === (e2 = s2.globals.columnSeries) || void 0 === e2 ? void 0 : e2.i.map((function(t4) {
        return t4;
      }))) || []).forEach((function(t4) {
        var e3 = s2.globals.seriesPercent[t4][a3];
        e3 && r2++, t4 < i3 && 0 === e3 && n2++;
      })), { nonZeroColumns: r2, zeroEncounters: n2 };
    } }, { key: "getGroupIndex", value: function(t3) {
      var e2 = this.w, i3 = e2.globals.seriesGroups.findIndex((function(i4) {
        return i4.indexOf(e2.globals.seriesNames[t3]) > -1;
      })), a3 = this.barCtx.columnGroupIndices, s2 = a3.indexOf(i3);
      return s2 < 0 && (a3.push(i3), s2 = a3.length - 1), { groupIndex: i3, columnGroupIndex: s2 };
    } }]), t2;
  })(), Ia = (function() {
    function t2(e2, a3) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
      var s2 = this.w;
      this.barOptions = s2.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = s2.config.stroke.width, this.isNullValue = false, this.isRangeBar = s2.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !s2.globals.isBarHorizontal && s2.globals.seriesRange.length && s2.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = a3, null !== this.xyRatios && (this.xRatio = a3.xRatio, this.yRatio = a3.yRatio, this.invertedXRatio = a3.invertedXRatio, this.invertedYRatio = a3.invertedYRatio, this.baseLineY = a3.baseLineY, this.baseLineInvertedY = a3.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
      var r2 = new $i(this.ctx);
      this.lastActiveBarSerieIndex = r2.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
      var n2 = r2.getBarSeriesIndices(), o2 = new Pi(this.ctx);
      this.stackedSeriesTotals = o2.getStackedSeriesTotals(this.w.config.series.map((function(t3, e3) {
        return -1 === n2.indexOf(e3) ? e3 : -1;
      })).filter((function(t3) {
        return -1 !== t3;
      }))), this.barHelpers = new Pa(this);
    }
    return s(t2, [{ key: "draw", value: function(t3, e2) {
      var i3 = this.w, a3 = new Mi(this.ctx), s2 = new Pi(this.ctx, i3);
      t3 = s2.getLogSeries(t3), this.series = t3, this.yRatio = s2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3);
      var r2 = a3.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      i3.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
      for (var n2 = 0, o2 = 0; n2 < t3.length; n2++, o2++) {
        var l2, h2, c2, d2, g2 = void 0, p2 = void 0, f2 = [], x2 = [], b2 = i3.globals.comboCharts ? e2[n2] : n2, m2 = this.barHelpers.getGroupIndex(b2).columnGroupIndex, y2 = a3.group({ class: "apexcharts-series", rel: n2 + 1, seriesName: v.escapeString(i3.globals.seriesNames[b2]), "data:realIndex": b2 });
        this.ctx.series.addCollapsedClassToSeries(y2, b2), t3[n2].length > 0 && (this.visibleI = this.visibleI + 1);
        var w2 = 0, k2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = i3.globals.seriesYAxisReverseMap[b2], this.translationsIndex = b2);
        var A2 = this.translationsIndex;
        this.isReversed = i3.config.yaxis[this.yaxisIndex] && i3.config.yaxis[this.yaxisIndex].reversed;
        var C2 = this.barHelpers.initialPositions(b2);
        p2 = C2.y, w2 = C2.barHeight, h2 = C2.yDivision, d2 = C2.zeroW, g2 = C2.x, k2 = C2.barWidth, l2 = C2.xDivision, c2 = C2.zeroH, this.isHorizontal || x2.push(g2 + k2 / 2);
        var S2 = a3.group({ class: "apexcharts-datalabels", "data:realIndex": b2 });
        i3.globals.delayedElements.push({ el: S2.node }), S2.node.classList.add("apexcharts-element-hidden");
        var L2 = a3.group({ class: "apexcharts-bar-goals-markers" }), M2 = a3.group({ class: "apexcharts-bar-shadows" });
        i3.globals.delayedElements.push({ el: M2.node }), M2.node.classList.add("apexcharts-element-hidden");
        for (var P2 = 0; P2 < t3[n2].length; P2++) {
          var I2 = this.barHelpers.getStrokeWidth(n2, P2, b2), T2 = null, z2 = { indexes: { i: n2, j: P2, realIndex: b2, translationsIndex: A2, bc: o2 }, x: g2, y: p2, strokeWidth: I2, elSeries: y2 };
          this.isHorizontal ? (T2 = this.drawBarPaths(u(u({}, z2), {}, { barHeight: w2, zeroW: d2, yDivision: h2 })), k2 = this.series[n2][P2] / this.invertedYRatio) : (T2 = this.drawColumnPaths(u(u({}, z2), {}, { xDivision: l2, barWidth: k2, zeroH: c2 })), w2 = this.series[n2][P2] / this.yRatio[A2]);
          var X2 = this.barHelpers.getPathFillColor(t3, n2, P2, b2);
          if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && P2 > 0) {
            var R2, E2 = this.barHelpers.drawBarShadow({ color: "string" == typeof X2.color && -1 === (null === (R2 = X2.color) || void 0 === R2 ? void 0 : R2.indexOf("url")) ? X2.color : v.hexToRgba(i3.globals.colors[n2]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: T2 });
            if (M2.add(E2), i3.config.chart.dropShadow.enabled) new Li(this.ctx).dropShadow(E2, i3.config.chart.dropShadow, b2);
          }
          this.pathArr.push(T2);
          var Y2 = this.barHelpers.drawGoalLine({ barXPosition: T2.barXPosition, barYPosition: T2.barYPosition, goalX: T2.goalX, goalY: T2.goalY, barHeight: w2, barWidth: k2 });
          Y2 && L2.add(Y2), p2 = T2.y, g2 = T2.x, P2 > 0 && x2.push(g2 + k2 / 2), f2.push(p2), this.renderSeries(u(u({ realIndex: b2, pathFill: X2.color }, X2.useRangeColor ? { lineFill: X2.color } : {}), {}, { j: P2, i: n2, columnGroupIndex: m2, pathFrom: T2.pathFrom, pathTo: T2.pathTo, strokeWidth: I2, elSeries: y2, x: g2, y: p2, series: t3, barHeight: Math.abs(T2.barHeight ? T2.barHeight : w2), barWidth: Math.abs(T2.barWidth ? T2.barWidth : k2), elDataLabelsWrap: S2, elGoalsMarkers: L2, elBarShadows: M2, visibleSeries: this.visibleI, type: "bar" }));
        }
        i3.globals.seriesXvalues[b2] = x2, i3.globals.seriesYvalues[b2] = f2, r2.add(y2);
      }
      return r2;
    } }, { key: "renderSeries", value: function(t3) {
      var e2 = t3.realIndex, i3 = t3.pathFill, a3 = t3.lineFill, s2 = t3.j, r2 = t3.i, n2 = t3.columnGroupIndex, o2 = t3.pathFrom, l2 = t3.pathTo, h2 = t3.strokeWidth, c2 = t3.elSeries, d2 = t3.x, u2 = t3.y, g2 = t3.y1, p2 = t3.y2, f2 = t3.series, x2 = t3.barHeight, b2 = t3.barWidth, m2 = t3.barXPosition, v2 = t3.barYPosition, y2 = t3.elDataLabelsWrap, w2 = t3.elGoalsMarkers, k2 = t3.elBarShadows, A2 = t3.visibleSeries, C2 = t3.type, S2 = t3.classes, L2 = this.w, M2 = new Mi(this.ctx), P2 = false;
      if (!a3) {
        var I2 = "function" == typeof L2.globals.stroke.colors[e2] ? (function(t4) {
          var e3, i4 = L2.config.stroke.colors;
          return Array.isArray(i4) && i4.length > 0 && ((e3 = i4[t4]) || (e3 = ""), "function" == typeof e3) ? e3({ value: L2.globals.series[t4][s2], dataPointIndex: s2, w: L2 }) : e3;
        })(e2) : L2.globals.stroke.colors[e2];
        a3 = this.barOptions.distributed ? L2.globals.stroke.colors[s2] : I2;
      }
      var T2 = new Ma(this).handleBarDataLabels({ x: d2, y: u2, y1: g2, y2: p2, i: r2, j: s2, series: f2, realIndex: e2, columnGroupIndex: n2, barHeight: x2, barWidth: b2, barXPosition: m2, barYPosition: v2, visibleSeries: A2 });
      L2.globals.isBarHorizontal || (T2.dataLabelsPos.dataLabelsX + Math.max(b2, L2.globals.barPadForNumericAxis) < 0 || T2.dataLabelsPos.dataLabelsX - Math.max(b2, L2.globals.barPadForNumericAxis) > L2.globals.gridWidth) && (P2 = true), L2.config.series[r2].data[s2] && L2.config.series[r2].data[s2].strokeColor && (a3 = L2.config.series[r2].data[s2].strokeColor), this.isNullValue && (i3 = "none");
      var z2 = s2 / L2.config.chart.animations.animateGradually.delay * (L2.config.chart.animations.speed / L2.globals.dataPoints) / 2.4;
      if (!P2) {
        var X2 = M2.renderPaths({ i: r2, j: s2, realIndex: e2, pathFrom: o2, pathTo: l2, stroke: a3, strokeWidth: h2, strokeLineCap: L2.config.stroke.lineCap, fill: i3, animationDelay: z2, initialSpeed: L2.config.chart.animations.speed, dataChangeSpeed: L2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(C2, "-area ").concat(S2), chartType: C2 });
        X2.attr("clip-path", "url(#gridRectBarMask".concat(L2.globals.cuid, ")"));
        var R2 = L2.config.forecastDataPoints;
        R2.count > 0 && s2 >= L2.globals.dataPoints - R2.count && (X2.node.setAttribute("stroke-dasharray", R2.dashArray), X2.node.setAttribute("stroke-width", R2.strokeWidth), X2.node.setAttribute("fill-opacity", R2.fillOpacity)), void 0 !== g2 && void 0 !== p2 && (X2.attr("data-range-y1", g2), X2.attr("data-range-y2", p2)), new Li(this.ctx).setSelectionFilter(X2, e2, s2), c2.add(X2), X2.attr({ cy: T2.dataLabelsPos.bcy, cx: T2.dataLabelsPos.bcx, j: s2, val: L2.globals.series[r2][s2], barHeight: x2, barWidth: b2 }), null !== T2.dataLabels && y2.add(T2.dataLabels), T2.totalDataLabels && y2.add(T2.totalDataLabels), c2.add(y2), w2 && c2.add(w2), k2 && c2.add(k2);
      }
      return c2;
    } }, { key: "drawBarPaths", value: function(t3) {
      var e2, i3 = t3.indexes, a3 = t3.barHeight, s2 = t3.strokeWidth, r2 = t3.zeroW, n2 = t3.x, o2 = t3.y, l2 = t3.yDivision, h2 = t3.elSeries, c2 = this.w, d2 = i3.i, u2 = i3.j;
      if (c2.globals.isXNumeric) e2 = (o2 = (c2.globals.seriesX[d2][u2] - c2.globals.minX) / this.invertedXRatio - a3) + a3 * this.visibleI;
      else if (c2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var g2 = this.barHelpers.getZeroValueEncounters({ i: d2, j: u2 }), p2 = g2.nonZeroColumns, f2 = g2.zeroEncounters;
        p2 > 0 && (a3 = this.seriesLen * a3 / p2), e2 = o2 + a3 * this.visibleI, e2 -= a3 * f2;
      } else e2 = o2 + a3 * this.visibleI;
      this.isFunnel && (r2 -= (this.barHelpers.getXForValue(this.series[d2][u2], r2) - r2) / 2), n2 = this.barHelpers.getXForValue(this.series[d2][u2], r2);
      var x2 = this.barHelpers.getBarpaths({ barYPosition: e2, barHeight: a3, x1: r2, x2: n2, strokeWidth: s2, isReversed: this.isReversed, series: this.series, realIndex: i3.realIndex, i: d2, j: u2, w: c2 });
      return c2.globals.isXNumeric || (o2 += l2), this.barHelpers.barBackground({ j: u2, i: d2, y1: e2 - a3 * this.visibleI, y2: a3 * this.seriesLen, elSeries: h2 }), { pathTo: x2.pathTo, pathFrom: x2.pathFrom, x1: r2, x: n2, y: o2, goalX: this.barHelpers.getGoalValues("x", r2, null, d2, u2), barYPosition: e2, barHeight: a3 };
    } }, { key: "drawColumnPaths", value: function(t3) {
      var e2, i3 = t3.indexes, a3 = t3.x, s2 = t3.y, r2 = t3.xDivision, n2 = t3.barWidth, o2 = t3.zeroH, l2 = t3.strokeWidth, h2 = t3.elSeries, c2 = this.w, d2 = i3.realIndex, u2 = i3.translationsIndex, g2 = i3.i, p2 = i3.j, f2 = i3.bc;
      if (c2.globals.isXNumeric) {
        var x2 = this.getBarXForNumericXAxis({ x: a3, j: p2, realIndex: d2, barWidth: n2 });
        a3 = x2.x, e2 = x2.barXPosition;
      } else if (c2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var b2 = this.barHelpers.getZeroValueEncounters({ i: g2, j: p2 }), m2 = b2.nonZeroColumns, v2 = b2.zeroEncounters;
        m2 > 0 && (n2 = this.seriesLen * n2 / m2), e2 = a3 + n2 * this.visibleI, e2 -= n2 * v2;
      } else e2 = a3 + n2 * this.visibleI;
      s2 = this.barHelpers.getYForValue(this.series[g2][p2], o2, u2);
      var y2 = this.barHelpers.getColumnPaths({ barXPosition: e2, barWidth: n2, y1: o2, y2: s2, strokeWidth: l2, isReversed: this.isReversed, series: this.series, realIndex: d2, i: g2, j: p2, w: c2 });
      return c2.globals.isXNumeric || (a3 += r2), this.barHelpers.barBackground({ bc: f2, j: p2, i: g2, x1: e2 - l2 / 2 - n2 * this.visibleI, x2: n2 * this.seriesLen + l2 / 2, elSeries: h2 }), { pathTo: y2.pathTo, pathFrom: y2.pathFrom, x: a3, y: s2, goalY: this.barHelpers.getGoalValues("y", null, o2, g2, p2, u2), barXPosition: e2, barWidth: n2 };
    } }, { key: "getBarXForNumericXAxis", value: function(t3) {
      var e2 = t3.x, i3 = t3.barWidth, a3 = t3.realIndex, s2 = t3.j, r2 = this.w, n2 = a3;
      return r2.globals.seriesX[a3].length || (n2 = r2.globals.maxValsInArrayIndex), v.isNumber(r2.globals.seriesX[n2][s2]) && (e2 = (r2.globals.seriesX[n2][s2] - r2.globals.minX) / this.xRatio - i3 * this.seriesLen / 2), { barXPosition: e2 + i3 * this.visibleI, x: e2 };
    } }, { key: "getPreviousPath", value: function(t3, e2) {
      for (var i3 = this.w, a3 = "M 0 0", s2 = 0; s2 < i3.globals.previousPaths.length; s2++) {
        var r2 = i3.globals.previousPaths[s2];
        r2.paths && r2.paths.length > 0 && parseInt(r2.realIndex, 10) === parseInt(t3, 10) && void 0 !== i3.globals.previousPaths[s2].paths[e2] && (a3 = i3.globals.previousPaths[s2].paths[e2].d);
      }
      return a3;
    } }]), t2;
  })(), Ta = (function(t2) {
    h(a3, t2);
    var e2 = n(a3);
    function a3() {
      return i2(this, a3), e2.apply(this, arguments);
    }
    return s(a3, [{ key: "draw", value: function(t3, e3) {
      var i3 = this, a4 = this.w;
      this.graphics = new Mi(this.ctx), this.bar = new Ia(this.ctx, this.xyRatios);
      var s2 = new Pi(this.ctx, a4);
      t3 = s2.getLogSeries(t3), this.yRatio = s2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3), "100%" === a4.config.chart.stackType && (t3 = a4.globals.comboCharts ? e3.map((function(t4) {
        return a4.globals.seriesPercent[t4];
      })) : a4.globals.seriesPercent.slice()), this.series = t3, this.barHelpers.initializeStackedPrevVars(this);
      for (var r2 = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), n2 = 0, o2 = 0, l2 = function(s3, l3) {
        var h3 = void 0, c3 = void 0, d2 = void 0, g2 = void 0, p2 = a4.globals.comboCharts ? e3[s3] : s3, f2 = i3.barHelpers.getGroupIndex(p2), x2 = f2.groupIndex, b2 = f2.columnGroupIndex;
        i3.groupCtx = i3[a4.globals.seriesGroups[x2]];
        var m2 = [], y2 = [], w2 = 0;
        i3.yRatio.length > 1 && (i3.yaxisIndex = a4.globals.seriesYAxisReverseMap[p2][0], w2 = p2), i3.isReversed = a4.config.yaxis[i3.yaxisIndex] && a4.config.yaxis[i3.yaxisIndex].reversed;
        var k2 = i3.graphics.group({ class: "apexcharts-series", seriesName: v.escapeString(a4.globals.seriesNames[p2]), rel: s3 + 1, "data:realIndex": p2 });
        i3.ctx.series.addCollapsedClassToSeries(k2, p2);
        var A2 = i3.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": p2 }), C2 = i3.graphics.group({ class: "apexcharts-bar-goals-markers" }), S2 = 0, L2 = 0, M2 = i3.initialPositions(n2, o2, h3, c3, d2, g2, w2);
        o2 = M2.y, S2 = M2.barHeight, c3 = M2.yDivision, g2 = M2.zeroW, n2 = M2.x, L2 = M2.barWidth, h3 = M2.xDivision, d2 = M2.zeroH, a4.globals.barHeight = S2, a4.globals.barWidth = L2, i3.barHelpers.initializeStackedXYVars(i3), 1 === i3.groupCtx.prevY.length && i3.groupCtx.prevY[0].every((function(t4) {
          return isNaN(t4);
        })) && (i3.groupCtx.prevY[0] = i3.groupCtx.prevY[0].map((function() {
          return d2;
        })), i3.groupCtx.prevYF[0] = i3.groupCtx.prevYF[0].map((function() {
          return 0;
        })));
        for (var P2 = 0; P2 < a4.globals.dataPoints; P2++) {
          var I2 = i3.barHelpers.getStrokeWidth(s3, P2, p2), T2 = { indexes: { i: s3, j: P2, realIndex: p2, translationsIndex: w2, bc: l3 }, strokeWidth: I2, x: n2, y: o2, elSeries: k2, columnGroupIndex: b2, seriesGroup: a4.globals.seriesGroups[x2] }, z2 = null;
          i3.isHorizontal ? (z2 = i3.drawStackedBarPaths(u(u({}, T2), {}, { zeroW: g2, barHeight: S2, yDivision: c3 })), L2 = i3.series[s3][P2] / i3.invertedYRatio) : (z2 = i3.drawStackedColumnPaths(u(u({}, T2), {}, { xDivision: h3, barWidth: L2, zeroH: d2 })), S2 = i3.series[s3][P2] / i3.yRatio[w2]);
          var X2 = i3.barHelpers.drawGoalLine({ barXPosition: z2.barXPosition, barYPosition: z2.barYPosition, goalX: z2.goalX, goalY: z2.goalY, barHeight: S2, barWidth: L2 });
          X2 && C2.add(X2), o2 = z2.y, n2 = z2.x, m2.push(n2), y2.push(o2);
          var R2 = i3.barHelpers.getPathFillColor(t3, s3, P2, p2), E2 = "", Y2 = a4.globals.isBarHorizontal ? "apexcharts-flip-x" : "apexcharts-flip-y";
          ("bottom" === i3.barHelpers.arrBorderRadius[p2][P2] && a4.globals.series[p2][P2] > 0 || "top" === i3.barHelpers.arrBorderRadius[p2][P2] && a4.globals.series[p2][P2] < 0) && (E2 = Y2), k2 = i3.renderSeries(u(u({ realIndex: p2, pathFill: R2.color }, R2.useRangeColor ? { lineFill: R2.color } : {}), {}, { j: P2, i: s3, columnGroupIndex: b2, pathFrom: z2.pathFrom, pathTo: z2.pathTo, strokeWidth: I2, elSeries: k2, x: n2, y: o2, series: t3, barHeight: S2, barWidth: L2, elDataLabelsWrap: A2, elGoalsMarkers: C2, type: "bar", visibleSeries: b2, classes: E2 }));
        }
        a4.globals.seriesXvalues[p2] = m2, a4.globals.seriesYvalues[p2] = y2, i3.groupCtx.prevY.push(i3.groupCtx.yArrj), i3.groupCtx.prevYF.push(i3.groupCtx.yArrjF), i3.groupCtx.prevYVal.push(i3.groupCtx.yArrjVal), i3.groupCtx.prevX.push(i3.groupCtx.xArrj), i3.groupCtx.prevXF.push(i3.groupCtx.xArrjF), i3.groupCtx.prevXVal.push(i3.groupCtx.xArrjVal), r2.add(k2);
      }, h2 = 0, c2 = 0; h2 < t3.length; h2++, c2++) l2(h2, c2);
      return r2;
    } }, { key: "initialPositions", value: function(t3, e3, i3, a4, s2, r2, n2) {
      var o2, l2, h2 = this.w;
      if (this.isHorizontal) {
        a4 = h2.globals.gridHeight / h2.globals.dataPoints;
        var c2 = h2.config.plotOptions.bar.barHeight;
        o2 = -1 === String(c2).indexOf("%") ? parseInt(c2, 10) : a4 * parseInt(c2, 10) / 100, r2 = h2.globals.padHorizontal + (this.isReversed ? h2.globals.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), e3 = (a4 - o2) / 2;
      } else {
        l2 = i3 = h2.globals.gridWidth / h2.globals.dataPoints;
        var d2 = h2.config.plotOptions.bar.columnWidth;
        h2.globals.isXNumeric && h2.globals.dataPoints > 1 ? l2 = (i3 = h2.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : -1 === String(d2).indexOf("%") ? l2 = parseInt(d2, 10) : l2 *= parseInt(d2, 10) / 100, s2 = this.isReversed ? this.baseLineY[n2] : h2.globals.gridHeight - this.baseLineY[n2], t3 = h2.globals.padHorizontal + (i3 - l2) / 2;
      }
      var u2 = h2.globals.barGroups.length || 1;
      return { x: t3, y: e3, yDivision: a4, xDivision: i3, barHeight: o2 / u2, barWidth: l2 / u2, zeroH: s2, zeroW: r2 };
    } }, { key: "drawStackedBarPaths", value: function(t3) {
      for (var e3, i3 = t3.indexes, a4 = t3.barHeight, s2 = t3.strokeWidth, r2 = t3.zeroW, n2 = t3.x, o2 = t3.y, l2 = t3.columnGroupIndex, h2 = t3.seriesGroup, c2 = t3.yDivision, d2 = t3.elSeries, u2 = this.w, g2 = o2 + l2 * a4, p2 = i3.i, f2 = i3.j, x2 = i3.realIndex, b2 = i3.translationsIndex, m2 = 0, v2 = 0; v2 < this.groupCtx.prevXF.length; v2++) m2 += this.groupCtx.prevXF[v2][f2];
      var y2 = p2;
      if (u2.config.series[x2].name && (y2 = h2.indexOf(u2.config.series[x2].name)), y2 > 0) {
        var w2 = r2;
        this.groupCtx.prevXVal[y2 - 1][f2] < 0 ? w2 = this.series[p2][f2] >= 0 ? this.groupCtx.prevX[y2 - 1][f2] + m2 - 2 * (this.isReversed ? m2 : 0) : this.groupCtx.prevX[y2 - 1][f2] : this.groupCtx.prevXVal[y2 - 1][f2] >= 0 && (w2 = this.series[p2][f2] >= 0 ? this.groupCtx.prevX[y2 - 1][f2] : this.groupCtx.prevX[y2 - 1][f2] - m2 + 2 * (this.isReversed ? m2 : 0)), e3 = w2;
      } else e3 = r2;
      n2 = null === this.series[p2][f2] ? e3 : e3 + this.series[p2][f2] / this.invertedYRatio - 2 * (this.isReversed ? this.series[p2][f2] / this.invertedYRatio : 0);
      var k2 = this.barHelpers.getBarpaths({ barYPosition: g2, barHeight: a4, x1: e3, x2: n2, strokeWidth: s2, isReversed: this.isReversed, series: this.series, realIndex: i3.realIndex, seriesGroup: h2, i: p2, j: f2, w: u2 });
      return this.barHelpers.barBackground({ j: f2, i: p2, y1: g2, y2: a4, elSeries: d2 }), o2 += c2, { pathTo: k2.pathTo, pathFrom: k2.pathFrom, goalX: this.barHelpers.getGoalValues("x", r2, null, p2, f2, b2), barXPosition: e3, barYPosition: g2, x: n2, y: o2 };
    } }, { key: "drawStackedColumnPaths", value: function(t3) {
      var e3 = t3.indexes, i3 = t3.x, a4 = t3.y, s2 = t3.xDivision, r2 = t3.barWidth, n2 = t3.zeroH, o2 = t3.columnGroupIndex, l2 = t3.seriesGroup, h2 = t3.elSeries, c2 = this.w, d2 = e3.i, u2 = e3.j, g2 = e3.bc, p2 = e3.realIndex, f2 = e3.translationsIndex;
      if (c2.globals.isXNumeric) {
        var x2 = c2.globals.seriesX[p2][u2];
        x2 || (x2 = 0), i3 = (x2 - c2.globals.minX) / this.xRatio - r2 / 2 * c2.globals.barGroups.length;
      }
      for (var b2, m2 = i3 + o2 * r2, v2 = 0, y2 = 0; y2 < this.groupCtx.prevYF.length; y2++) v2 += isNaN(this.groupCtx.prevYF[y2][u2]) ? 0 : this.groupCtx.prevYF[y2][u2];
      var w2 = d2;
      if (l2 && (w2 = l2.indexOf(c2.globals.seriesNames[p2])), w2 > 0 && !c2.globals.isXNumeric || w2 > 0 && c2.globals.isXNumeric && c2.globals.seriesX[p2 - 1][u2] === c2.globals.seriesX[p2][u2]) {
        var k2, A2, C2, S2 = Math.min(this.yRatio.length + 1, p2 + 1);
        if (void 0 !== this.groupCtx.prevY[w2 - 1] && this.groupCtx.prevY[w2 - 1].length) for (var L2 = 1; L2 < S2; L2++) {
          var M2;
          if (!isNaN(null === (M2 = this.groupCtx.prevY[w2 - L2]) || void 0 === M2 ? void 0 : M2[u2])) {
            C2 = this.groupCtx.prevY[w2 - L2][u2];
            break;
          }
        }
        for (var P2 = 1; P2 < S2; P2++) {
          var I2, T2;
          if ((null === (I2 = this.groupCtx.prevYVal[w2 - P2]) || void 0 === I2 ? void 0 : I2[u2]) < 0) {
            A2 = this.series[d2][u2] >= 0 ? C2 - v2 + 2 * (this.isReversed ? v2 : 0) : C2;
            break;
          }
          if ((null === (T2 = this.groupCtx.prevYVal[w2 - P2]) || void 0 === T2 ? void 0 : T2[u2]) >= 0) {
            A2 = this.series[d2][u2] >= 0 ? C2 : C2 + v2 - 2 * (this.isReversed ? v2 : 0);
            break;
          }
        }
        void 0 === A2 && (A2 = c2.globals.gridHeight), b2 = null !== (k2 = this.groupCtx.prevYF[0]) && void 0 !== k2 && k2.every((function(t4) {
          return 0 === t4;
        })) && this.groupCtx.prevYF.slice(1, w2).every((function(t4) {
          return t4.every((function(t5) {
            return isNaN(t5);
          }));
        })) ? n2 : A2;
      } else b2 = n2;
      a4 = this.series[d2][u2] ? b2 - this.series[d2][u2] / this.yRatio[f2] + 2 * (this.isReversed ? this.series[d2][u2] / this.yRatio[f2] : 0) : b2;
      var z2 = this.barHelpers.getColumnPaths({ barXPosition: m2, barWidth: r2, y1: b2, y2: a4, yRatio: this.yRatio[f2], strokeWidth: this.strokeWidth, isReversed: this.isReversed, series: this.series, seriesGroup: l2, realIndex: e3.realIndex, i: d2, j: u2, w: c2 });
      return this.barHelpers.barBackground({ bc: g2, j: u2, i: d2, x1: m2, x2: r2, elSeries: h2 }), { pathTo: z2.pathTo, pathFrom: z2.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, n2, d2, u2), barXPosition: m2, x: c2.globals.isXNumeric ? i3 : i3 + s2, y: a4 };
    } }]), a3;
  })(Ia), za = (function(t2) {
    h(a3, t2);
    var e2 = n(a3);
    function a3() {
      return i2(this, a3), e2.apply(this, arguments);
    }
    return s(a3, [{ key: "draw", value: function(t3, e3, i3) {
      var a4 = this, s2 = this.w, r2 = new Mi(this.ctx), n2 = s2.globals.comboCharts ? e3 : s2.config.chart.type, o2 = new ji(this.ctx);
      this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = s2.config.plotOptions.bar.horizontal, this.isOHLC = this.candlestickOptions && "ohlc" === this.candlestickOptions.type;
      var l2 = new Pi(this.ctx, s2);
      t3 = l2.getLogSeries(t3), this.series = t3, this.yRatio = l2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3);
      for (var h2 = r2.group({ class: "apexcharts-".concat(n2, "-series apexcharts-plot-series") }), c2 = function(e4) {
        a4.isBoxPlot = "boxPlot" === s2.config.chart.type || "boxPlot" === s2.config.series[e4].type;
        var n3, l3, c3, d3, g2 = void 0, p2 = void 0, f2 = [], x2 = [], b2 = s2.globals.comboCharts ? i3[e4] : e4, m2 = a4.barHelpers.getGroupIndex(b2).columnGroupIndex, y2 = r2.group({ class: "apexcharts-series", seriesName: v.escapeString(s2.globals.seriesNames[b2]), rel: e4 + 1, "data:realIndex": b2 });
        a4.ctx.series.addCollapsedClassToSeries(y2, b2), t3[e4].length > 0 && (a4.visibleI = a4.visibleI + 1);
        var w2, k2, A2 = 0;
        a4.yRatio.length > 1 && (a4.yaxisIndex = s2.globals.seriesYAxisReverseMap[b2][0], A2 = b2);
        var C2 = a4.barHelpers.initialPositions(b2);
        p2 = C2.y, w2 = C2.barHeight, l3 = C2.yDivision, d3 = C2.zeroW, g2 = C2.x, k2 = C2.barWidth, n3 = C2.xDivision, c3 = C2.zeroH, x2.push(g2 + k2 / 2);
        for (var S2 = r2.group({ class: "apexcharts-datalabels", "data:realIndex": b2 }), L2 = r2.group({ class: "apexcharts-bar-goals-markers" }), M2 = function(i4) {
          var r3 = a4.barHelpers.getStrokeWidth(e4, i4, b2), h3 = null, v2 = { indexes: { i: e4, j: i4, realIndex: b2, translationsIndex: A2 }, x: g2, y: p2, strokeWidth: r3, elSeries: y2 };
          h3 = a4.isHorizontal ? a4.drawHorizontalBoxPaths(u(u({}, v2), {}, { yDivision: l3, barHeight: w2, zeroW: d3 })) : a4.drawVerticalBoxPaths(u(u({}, v2), {}, { xDivision: n3, barWidth: k2, zeroH: c3 })), p2 = h3.y, g2 = h3.x;
          var C3 = a4.barHelpers.drawGoalLine({ barXPosition: h3.barXPosition, barYPosition: h3.barYPosition, goalX: h3.goalX, goalY: h3.goalY, barHeight: w2, barWidth: k2 });
          C3 && L2.add(C3), i4 > 0 && x2.push(g2 + k2 / 2), f2.push(p2), h3.pathTo.forEach((function(n4, l4) {
            var c4 = !a4.isBoxPlot && a4.candlestickOptions.wick.useFillColor ? h3.color[l4] : s2.globals.stroke.colors[e4], d4 = o2.fillPath({ seriesNumber: b2, dataPointIndex: i4, color: h3.color[l4], value: t3[e4][i4] });
            a4.renderSeries({ realIndex: b2, pathFill: d4, lineFill: c4, j: i4, i: e4, pathFrom: h3.pathFrom, pathTo: n4, strokeWidth: r3, elSeries: y2, x: g2, y: p2, series: t3, columnGroupIndex: m2, barHeight: w2, barWidth: k2, elDataLabelsWrap: S2, elGoalsMarkers: L2, visibleSeries: a4.visibleI, type: s2.config.chart.type });
          }));
        }, P2 = 0; P2 < s2.globals.dataPoints; P2++) M2(P2);
        s2.globals.seriesXvalues[b2] = x2, s2.globals.seriesYvalues[b2] = f2, h2.add(y2);
      }, d2 = 0; d2 < t3.length; d2++) c2(d2);
      return h2;
    } }, { key: "drawVerticalBoxPaths", value: function(t3) {
      var e3 = t3.indexes, i3 = t3.x;
      t3.y;
      var a4 = t3.xDivision, s2 = t3.barWidth, r2 = t3.zeroH, n2 = t3.strokeWidth, o2 = this.w, l2 = new Mi(this.ctx), h2 = e3.i, c2 = e3.j, d2 = o2.config.plotOptions.candlestick.colors, u2 = this.boxOptions.colors, g2 = e3.realIndex, p2 = function(t4) {
        return Array.isArray(t4) ? t4[g2] : t4;
      }, f2 = p2(d2.upward), x2 = p2(d2.downward), b2 = this.yRatio[e3.translationsIndex], m2 = this.getOHLCValue(g2, c2), v2 = r2, y2 = r2, w2 = m2.o < m2.c ? [f2] : [x2];
      this.isBoxPlot && (w2 = [p2(u2.lower), p2(u2.upper)]);
      var k2 = Math.min(m2.o, m2.c), A2 = Math.max(m2.o, m2.c), C2 = m2.m;
      o2.globals.isXNumeric && (i3 = (o2.globals.seriesX[g2][c2] - o2.globals.minX) / this.xRatio - s2 / 2);
      var S2 = i3 + s2 * this.visibleI;
      void 0 === this.series[h2][c2] || null === this.series[h2][c2] ? (k2 = r2, A2 = r2) : (k2 = r2 - k2 / b2, A2 = r2 - A2 / b2, v2 = r2 - m2.h / b2, y2 = r2 - m2.l / b2, C2 = r2 - m2.m / b2);
      var L2 = l2.move(S2, r2), M2 = l2.move(S2 + s2 / 2, k2);
      if (o2.globals.previousPaths.length > 0 && (M2 = this.getPreviousPath(g2, c2, true)), this.isOHLC) {
        var P2 = S2 + s2 / 2, I2 = r2 - m2.o / b2, T2 = r2 - m2.c / b2;
        L2 = [l2.move(P2, v2) + l2.line(P2, y2) + l2.move(P2, I2) + l2.line(S2, I2) + l2.move(P2, T2) + l2.line(S2 + s2, T2)];
      } else L2 = this.isBoxPlot ? [l2.move(S2, k2) + l2.line(S2 + s2 / 2, k2) + l2.line(S2 + s2 / 2, v2) + l2.line(S2 + s2 / 4, v2) + l2.line(S2 + s2 - s2 / 4, v2) + l2.line(S2 + s2 / 2, v2) + l2.line(S2 + s2 / 2, k2) + l2.line(S2 + s2, k2) + l2.line(S2 + s2, C2) + l2.line(S2, C2) + l2.line(S2, k2 + n2 / 2), l2.move(S2, C2) + l2.line(S2 + s2, C2) + l2.line(S2 + s2, A2) + l2.line(S2 + s2 / 2, A2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2 + s2 - s2 / 4, y2) + l2.line(S2 + s2 / 4, y2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2 + s2 / 2, A2) + l2.line(S2, A2) + l2.line(S2, C2) + "z"] : [l2.move(S2, A2) + l2.line(S2 + s2 / 2, A2) + l2.line(S2 + s2 / 2, v2) + l2.line(S2 + s2 / 2, A2) + l2.line(S2 + s2, A2) + l2.line(S2 + s2, k2) + l2.line(S2 + s2 / 2, k2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2 + s2 / 2, k2) + l2.line(S2, k2) + l2.line(S2, A2 - n2 / 2)];
      return M2 += l2.move(S2, k2), o2.globals.isXNumeric || (i3 += a4), { pathTo: L2, pathFrom: M2, x: i3, y: A2, goalY: this.barHelpers.getGoalValues("y", null, r2, h2, c2, e3.translationsIndex), barXPosition: S2, color: w2 };
    } }, { key: "drawHorizontalBoxPaths", value: function(t3) {
      var e3 = t3.indexes;
      t3.x;
      var i3 = t3.y, a4 = t3.yDivision, s2 = t3.barHeight, r2 = t3.zeroW, n2 = t3.strokeWidth, o2 = this.w, l2 = new Mi(this.ctx), h2 = e3.i, c2 = e3.j, d2 = this.boxOptions.colors.lower;
      this.isBoxPlot && (d2 = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var u2 = this.invertedYRatio, g2 = e3.realIndex, p2 = this.getOHLCValue(g2, c2), f2 = r2, x2 = r2, b2 = Math.min(p2.o, p2.c), m2 = Math.max(p2.o, p2.c), v2 = p2.m;
      o2.globals.isXNumeric && (i3 = (o2.globals.seriesX[g2][c2] - o2.globals.minX) / this.invertedXRatio - s2 / 2);
      var y2 = i3 + s2 * this.visibleI;
      void 0 === this.series[h2][c2] || null === this.series[h2][c2] ? (b2 = r2, m2 = r2) : (b2 = r2 + b2 / u2, m2 = r2 + m2 / u2, f2 = r2 + p2.h / u2, x2 = r2 + p2.l / u2, v2 = r2 + p2.m / u2);
      var w2 = l2.move(r2, y2), k2 = l2.move(b2, y2 + s2 / 2);
      return o2.globals.previousPaths.length > 0 && (k2 = this.getPreviousPath(g2, c2, true)), w2 = [l2.move(b2, y2) + l2.line(b2, y2 + s2 / 2) + l2.line(f2, y2 + s2 / 2) + l2.line(f2, y2 + s2 / 2 - s2 / 4) + l2.line(f2, y2 + s2 / 2 + s2 / 4) + l2.line(f2, y2 + s2 / 2) + l2.line(b2, y2 + s2 / 2) + l2.line(b2, y2 + s2) + l2.line(v2, y2 + s2) + l2.line(v2, y2) + l2.line(b2 + n2 / 2, y2), l2.move(v2, y2) + l2.line(v2, y2 + s2) + l2.line(m2, y2 + s2) + l2.line(m2, y2 + s2 / 2) + l2.line(x2, y2 + s2 / 2) + l2.line(x2, y2 + s2 - s2 / 4) + l2.line(x2, y2 + s2 / 4) + l2.line(x2, y2 + s2 / 2) + l2.line(m2, y2 + s2 / 2) + l2.line(m2, y2) + l2.line(v2, y2) + "z"], k2 += l2.move(b2, y2), o2.globals.isXNumeric || (i3 += a4), { pathTo: w2, pathFrom: k2, x: m2, y: i3, goalX: this.barHelpers.getGoalValues("x", r2, null, h2, c2), barYPosition: y2, color: d2 };
    } }, { key: "getOHLCValue", value: function(t3, e3) {
      var i3 = this.w, a4 = new Pi(this.ctx, i3), s2 = a4.getLogValAtSeriesIndex(i3.globals.seriesCandleH[t3][e3], t3), r2 = a4.getLogValAtSeriesIndex(i3.globals.seriesCandleO[t3][e3], t3), n2 = a4.getLogValAtSeriesIndex(i3.globals.seriesCandleM[t3][e3], t3), o2 = a4.getLogValAtSeriesIndex(i3.globals.seriesCandleC[t3][e3], t3), l2 = a4.getLogValAtSeriesIndex(i3.globals.seriesCandleL[t3][e3], t3);
      return { o: this.isBoxPlot ? s2 : r2, h: this.isBoxPlot ? r2 : s2, m: n2, l: this.isBoxPlot ? o2 : l2, c: this.isBoxPlot ? l2 : o2 };
    } }]), a3;
  })(Ia), Xa = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "checkColorRange", value: function() {
      var t3 = this.w, e2 = false, i3 = t3.config.plotOptions[t3.config.chart.type];
      return i3.colorScale.ranges.length > 0 && i3.colorScale.ranges.map((function(t4, i4) {
        t4.from <= 0 && (e2 = true);
      })), e2;
    } }, { key: "getShadeColor", value: function(t3, e2, i3, a3) {
      var s2 = this.w, r2 = 1, n2 = s2.config.plotOptions[t3].shadeIntensity, o2 = this.determineColor(t3, e2, i3);
      s2.globals.hasNegs || a3 ? r2 = s2.config.plotOptions[t3].reverseNegativeShade ? o2.percent < 0 ? o2.percent / 100 * (1.25 * n2) : (1 - o2.percent / 100) * (1.25 * n2) : o2.percent <= 0 ? 1 - (1 + o2.percent / 100) * n2 : (1 - o2.percent / 100) * n2 : (r2 = 1 - o2.percent / 100, "treemap" === t3 && (r2 = (1 - o2.percent / 100) * (1.25 * n2)));
      var l2 = o2.color, h2 = new v();
      if (s2.config.plotOptions[t3].enableShades) if ("dark" === this.w.config.theme.mode) {
        var c2 = h2.shadeColor(-1 * r2, o2.color);
        l2 = v.hexToRgba(v.isColorHex(c2) ? c2 : v.rgb2hex(c2), s2.config.fill.opacity);
      } else {
        var d2 = h2.shadeColor(r2, o2.color);
        l2 = v.hexToRgba(v.isColorHex(d2) ? d2 : v.rgb2hex(d2), s2.config.fill.opacity);
      }
      return { color: l2, colorProps: o2 };
    } }, { key: "determineColor", value: function(t3, e2, i3) {
      var a3 = this.w, s2 = a3.globals.series[e2][i3], r2 = a3.config.plotOptions[t3], n2 = r2.colorScale.inverse ? i3 : e2;
      r2.distributed && "treemap" === a3.config.chart.type && (n2 = i3);
      var o2 = a3.globals.colors[n2], l2 = null, h2 = Math.min.apply(Math, f(a3.globals.series[e2])), c2 = Math.max.apply(Math, f(a3.globals.series[e2]));
      r2.distributed || "heatmap" !== t3 || (h2 = a3.globals.minY, c2 = a3.globals.maxY), void 0 !== r2.colorScale.min && (h2 = r2.colorScale.min < a3.globals.minY ? r2.colorScale.min : a3.globals.minY, c2 = r2.colorScale.max > a3.globals.maxY ? r2.colorScale.max : a3.globals.maxY);
      var d2 = Math.abs(c2) + Math.abs(h2), u2 = 100 * s2 / (0 === d2 ? d2 - 1e-6 : d2);
      r2.colorScale.ranges.length > 0 && r2.colorScale.ranges.map((function(t4, e3) {
        if (s2 >= t4.from && s2 <= t4.to) {
          o2 = t4.color, l2 = t4.foreColor ? t4.foreColor : null, h2 = t4.from, c2 = t4.to;
          var i4 = Math.abs(c2) + Math.abs(h2);
          u2 = 100 * s2 / (0 === i4 ? i4 - 1e-6 : i4);
        }
      }));
      return { color: o2, foreColor: l2, percent: u2 };
    } }, { key: "calculateDataLabels", value: function(t3) {
      var e2 = t3.text, i3 = t3.x, a3 = t3.y, s2 = t3.i, r2 = t3.j, n2 = t3.colorProps, o2 = t3.fontSize, l2 = this.w.config.dataLabels, h2 = new Mi(this.ctx), c2 = new qi(this.ctx), d2 = null;
      if (l2.enabled) {
        d2 = h2.group({ class: "apexcharts-data-labels" });
        var u2 = l2.offsetX, g2 = l2.offsetY, p2 = i3 + u2, f2 = a3 + parseFloat(l2.style.fontSize) / 3 + g2;
        c2.plotDataLabelsText({ x: p2, y: f2, text: e2, i: s2, j: r2, color: n2.foreColor, parent: d2, fontSize: o2, dataLabelsConfig: l2 });
      }
      return d2;
    } }, { key: "addListeners", value: function(t3) {
      var e2 = new Mi(this.ctx);
      t3.node.addEventListener("mouseenter", e2.pathMouseEnter.bind(this, t3)), t3.node.addEventListener("mouseleave", e2.pathMouseLeave.bind(this, t3)), t3.node.addEventListener("mousedown", e2.pathMouseDown.bind(this, t3));
    } }]), t2;
  })(), Ra = (function() {
    function t2(e2, a3) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.xRatio = a3.xRatio, this.yRatio = a3.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new Xa(e2), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
    }
    return s(t2, [{ key: "draw", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx), a3 = i3.group({ class: "apexcharts-heatmap" });
      a3.attr("clip-path", "url(#gridRectMask".concat(e2.globals.cuid, ")"));
      var s2 = e2.globals.gridWidth / e2.globals.dataPoints, r2 = e2.globals.gridHeight / e2.globals.series.length, n2 = 0, o2 = false;
      this.negRange = this.helpers.checkColorRange();
      var l2 = t3.slice();
      e2.config.yaxis[0].reversed && (o2 = true, l2.reverse());
      for (var h2 = o2 ? 0 : l2.length - 1; o2 ? h2 < l2.length : h2 >= 0; o2 ? h2++ : h2--) {
        var c2 = i3.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: v.escapeString(e2.globals.seriesNames[h2]), rel: h2 + 1, "data:realIndex": h2 });
        if (this.ctx.series.addCollapsedClassToSeries(c2, h2), e2.config.chart.dropShadow.enabled) {
          var d2 = e2.config.chart.dropShadow;
          new Li(this.ctx).dropShadow(c2, d2, h2);
        }
        for (var u2 = 0, g2 = e2.config.plotOptions.heatmap.shadeIntensity, p2 = 0, f2 = 0; f2 < e2.globals.dataPoints; f2++) if (e2.globals.seriesX.length && !e2.globals.allSeriesHasEqualX && e2.globals.minX + e2.globals.minXDiff * f2 < e2.globals.seriesX[h2][p2]) u2 += s2;
        else {
          if (p2 >= l2[h2].length) break;
          var x2 = this.helpers.getShadeColor(e2.config.chart.type, h2, p2, this.negRange), b2 = x2.color, m2 = x2.colorProps;
          if ("image" === e2.config.fill.type) b2 = new ji(this.ctx).fillPath({ seriesNumber: h2, dataPointIndex: p2, opacity: e2.globals.hasNegs ? m2.percent < 0 ? 1 - (1 + m2.percent / 100) : g2 + m2.percent / 100 : m2.percent / 100, patternID: v.randomId(), width: e2.config.fill.image.width ? e2.config.fill.image.width : s2, height: e2.config.fill.image.height ? e2.config.fill.image.height : r2 });
          var y2 = this.rectRadius, w2 = i3.drawRect(u2, n2, s2, r2, y2);
          if (w2.attr({ cx: u2, cy: n2 }), w2.node.classList.add("apexcharts-heatmap-rect"), c2.add(w2), w2.attr({ fill: b2, i: h2, index: h2, j: p2, val: t3[h2][p2], "stroke-width": this.strokeWidth, stroke: e2.config.plotOptions.heatmap.useFillColorAsStroke ? b2 : e2.globals.stroke.colors[0], color: b2 }), this.helpers.addListeners(w2), e2.config.chart.animations.enabled && !e2.globals.dataChanged) {
            var k2 = 1;
            e2.globals.resized || (k2 = e2.config.chart.animations.speed), this.animateHeatMap(w2, u2, n2, s2, r2, k2);
          }
          if (e2.globals.dataChanged) {
            var A2 = 1;
            if (this.dynamicAnim.enabled && e2.globals.shouldAnimate) {
              A2 = this.dynamicAnim.speed;
              var C2 = e2.globals.previousPaths[h2] && e2.globals.previousPaths[h2][p2] && e2.globals.previousPaths[h2][p2].color;
              C2 || (C2 = "rgba(255, 255, 255, 0)"), this.animateHeatColor(w2, v.isColorHex(C2) ? C2 : v.rgb2hex(C2), v.isColorHex(b2) ? b2 : v.rgb2hex(b2), A2);
            }
          }
          var S2 = (0, e2.config.dataLabels.formatter)(e2.globals.series[h2][p2], { value: e2.globals.series[h2][p2], seriesIndex: h2, dataPointIndex: p2, w: e2 }), L2 = this.helpers.calculateDataLabels({ text: S2, x: u2 + s2 / 2, y: n2 + r2 / 2, i: h2, j: p2, colorProps: m2, series: l2 });
          null !== L2 && c2.add(L2), u2 += s2, p2++;
        }
        n2 += r2, a3.add(c2);
      }
      var M2 = e2.globals.yAxisScale[0].result.slice();
      return e2.config.yaxis[0].reversed ? M2.unshift("") : M2.push(""), e2.globals.yAxisScale[0].result = M2, a3;
    } }, { key: "animateHeatMap", value: function(t3, e2, i3, a3, s2, r2) {
      var n2 = new y(this.ctx);
      n2.animateRect(t3, { x: e2 + a3 / 2, y: i3 + s2 / 2, width: 0, height: 0 }, { x: e2, y: i3, width: a3, height: s2 }, r2, (function() {
        n2.animationCompleted(t3);
      }));
    } }, { key: "animateHeatColor", value: function(t3, e2, i3, a3) {
      t3.attr({ fill: e2 }).animate(a3).attr({ fill: i3 });
    } }]), t2;
  })(), Ea = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "drawYAxisTexts", value: function(t3, e2, i3, a3) {
      var s2 = this.w, r2 = s2.config.yaxis[0], n2 = s2.globals.yLabelFormatters[0];
      return new Mi(this.ctx).drawText({ x: t3 + r2.labels.offsetX, y: e2 + r2.labels.offsetY, text: n2(a3, i3), textAnchor: "middle", fontSize: r2.labels.style.fontSize, fontFamily: r2.labels.style.fontFamily, foreColor: Array.isArray(r2.labels.style.colors) ? r2.labels.style.colors[i3] : r2.labels.style.colors });
    } }]), t2;
  })(), Ya = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
      var a3 = this.w;
      this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== a3.globals.stroke.colors ? a3.globals.stroke.colors : a3.globals.colors, this.defaultSize = Math.min(a3.globals.gridWidth, a3.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = a3.globals.gridWidth / 2, "radialBar" === a3.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(a3.config.plotOptions.pie.endAngle - a3.config.plotOptions.pie.startAngle), this.initialAngle = a3.config.plotOptions.pie.startAngle % this.fullAngle, a3.globals.radialSize = this.defaultSize / 2.05 - a3.config.stroke.width - (a3.config.chart.sparkline.enabled ? 0 : a3.config.chart.dropShadow.blur), this.donutSize = a3.globals.radialSize * parseInt(a3.config.plotOptions.pie.donut.size, 10) / 100;
      var s2 = a3.config.plotOptions.pie.customScale, r2 = a3.globals.gridWidth / 2, n2 = a3.globals.gridHeight / 2;
      this.translateX = r2 - r2 * s2, this.translateY = n2 - n2 * s2, this.dataLabelsGroup = new Mi(this.ctx).group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(s2, ")") }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
    }
    return s(t2, [{ key: "draw", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = new Mi(this.ctx), s2 = a3.group({ class: "apexcharts-pie" });
      if (i3.globals.noData) return s2;
      for (var r2 = 0, n2 = 0; n2 < t3.length; n2++) r2 += v.negToZero(t3[n2]);
      var o2 = [], l2 = a3.group();
      0 === r2 && (r2 = 1e-5), t3.forEach((function(t4) {
        e2.maxY = Math.max(e2.maxY, t4);
      })), i3.config.yaxis[0].max && (this.maxY = i3.config.yaxis[0].max), "back" === i3.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(s2);
      for (var h2 = 0; h2 < t3.length; h2++) {
        var c2 = this.fullAngle * v.negToZero(t3[h2]) / r2;
        o2.push(c2), "polarArea" === this.chartType ? (o2[h2] = this.fullAngle / t3.length, this.sliceSizes.push(i3.globals.radialSize * t3[h2] / this.maxY)) : this.sliceSizes.push(i3.globals.radialSize);
      }
      if (i3.globals.dataChanged) {
        for (var d2, u2 = 0, g2 = 0; g2 < i3.globals.previousPaths.length; g2++) u2 += v.negToZero(i3.globals.previousPaths[g2]);
        for (var p2 = 0; p2 < i3.globals.previousPaths.length; p2++) d2 = this.fullAngle * v.negToZero(i3.globals.previousPaths[p2]) / u2, this.prevSectorAngleArr.push(d2);
      }
      if (this.donutSize < 0 && (this.donutSize = 0), "donut" === this.chartType) {
        var f2 = a3.drawCircle(this.donutSize);
        f2.attr({ cx: this.centerX, cy: this.centerY, fill: i3.config.plotOptions.pie.donut.background ? i3.config.plotOptions.pie.donut.background : "transparent" }), l2.add(f2);
      }
      var x2 = this.drawArcs(o2, t3);
      if (this.sliceLabels.forEach((function(t4) {
        x2.add(t4);
      })), l2.attr({ transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(i3.config.plotOptions.pie.customScale, ")") }), l2.add(x2), s2.add(l2), this.donutDataLabels.show) {
        var b2 = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
        s2.add(b2);
      }
      return "front" === i3.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(s2), s2;
    } }, { key: "drawArcs", value: function(t3, e2) {
      var i3 = this.w, a3 = new Li(this.ctx), s2 = new Mi(this.ctx), r2 = new ji(this.ctx), n2 = s2.group({ class: "apexcharts-slices" }), o2 = this.initialAngle, l2 = this.initialAngle, h2 = this.initialAngle, c2 = this.initialAngle;
      this.strokeWidth = i3.config.stroke.show ? i3.config.stroke.width : 0;
      for (var d2 = 0; d2 < t3.length; d2++) {
        var u2 = s2.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: v.escapeString(i3.globals.seriesNames[d2]), rel: d2 + 1, "data:realIndex": d2 });
        n2.add(u2), l2 = c2, h2 = (o2 = h2) + t3[d2], c2 = l2 + this.prevSectorAngleArr[d2];
        var g2 = h2 < o2 ? this.fullAngle + h2 - o2 : h2 - o2, p2 = r2.fillPath({ seriesNumber: d2, size: this.sliceSizes[d2], value: e2[d2] }), f2 = this.getChangedPath(l2, c2), x2 = s2.drawPath({ d: f2, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d2] : this.lineColorArr, strokeWidth: 0, fill: p2, fillOpacity: i3.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d2) });
        if (x2.attr({ index: 0, j: d2 }), a3.setSelectionFilter(x2, 0, d2), i3.config.chart.dropShadow.enabled) {
          var b2 = i3.config.chart.dropShadow;
          a3.dropShadow(x2, b2, d2);
        }
        this.addListeners(x2, this.donutDataLabels), Mi.setAttrs(x2.node, { "data:angle": g2, "data:startAngle": o2, "data:strokeWidth": this.strokeWidth, "data:value": e2[d2] });
        var m2 = { x: 0, y: 0 };
        "pie" === this.chartType || "polarArea" === this.chartType ? m2 = v.polarToCartesian(this.centerX, this.centerY, i3.globals.radialSize / 1.25 + i3.config.plotOptions.pie.dataLabels.offset, (o2 + g2 / 2) % this.fullAngle) : "donut" === this.chartType && (m2 = v.polarToCartesian(this.centerX, this.centerY, (i3.globals.radialSize + this.donutSize) / 2 + i3.config.plotOptions.pie.dataLabels.offset, (o2 + g2 / 2) % this.fullAngle)), u2.add(x2);
        var y2 = 0;
        if (!this.initialAnim || i3.globals.resized || i3.globals.dataChanged ? this.animBeginArr.push(0) : (0 === (y2 = g2 / this.fullAngle * i3.config.chart.animations.speed) && (y2 = 1), this.animDur = y2 + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i3.globals.dataChanged ? this.animatePaths(x2, { size: this.sliceSizes[d2], endAngle: h2, startAngle: o2, prevStartAngle: l2, prevEndAngle: c2, animateStartingPos: true, i: d2, animBeginArr: this.animBeginArr, shouldSetPrevPaths: true, dur: i3.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(x2, { size: this.sliceSizes[d2], endAngle: h2, startAngle: o2, i: d2, totalItems: t3.length - 1, animBeginArr: this.animBeginArr, dur: y2 }), i3.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && x2.node.addEventListener("mouseup", this.pieClicked.bind(this, d2)), void 0 !== i3.globals.selectedDataPoints[0] && i3.globals.selectedDataPoints[0].indexOf(d2) > -1 && this.pieClicked(d2), i3.config.dataLabels.enabled) {
          var w2 = m2.x, k2 = m2.y, A2 = 100 * g2 / this.fullAngle + "%";
          if (0 !== g2 && i3.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t3[d2]) {
            var C2 = i3.config.dataLabels.formatter;
            void 0 !== C2 && (A2 = C2(i3.globals.seriesPercent[d2][0], { seriesIndex: d2, w: i3 }));
            var S2 = i3.globals.dataLabels.style.colors[d2], L2 = s2.group({ class: "apexcharts-datalabels" }), M2 = s2.drawText({ x: w2, y: k2, text: A2, textAnchor: "middle", fontSize: i3.config.dataLabels.style.fontSize, fontFamily: i3.config.dataLabels.style.fontFamily, fontWeight: i3.config.dataLabels.style.fontWeight, foreColor: S2 });
            if (L2.add(M2), i3.config.dataLabels.dropShadow.enabled) {
              var P2 = i3.config.dataLabels.dropShadow;
              a3.dropShadow(M2, P2);
            }
            M2.node.classList.add("apexcharts-pie-label"), i3.config.chart.animations.animate && false === i3.globals.resized && (M2.node.classList.add("apexcharts-pie-label-delay"), M2.node.style.animationDelay = i3.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(L2);
          }
        }
      }
      return n2;
    } }, { key: "addListeners", value: function(t3, e2) {
      var i3 = new Mi(this.ctx);
      t3.node.addEventListener("mouseenter", i3.pathMouseEnter.bind(this, t3)), t3.node.addEventListener("mouseleave", i3.pathMouseLeave.bind(this, t3)), t3.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t3.node, e2)), t3.node.addEventListener("mousedown", i3.pathMouseDown.bind(this, t3)), this.donutDataLabels.total.showAlways || (t3.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t3.node, e2)), t3.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t3.node, e2)));
    } }, { key: "animatePaths", value: function(t3, e2) {
      var i3 = this.w, a3 = e2.endAngle < e2.startAngle ? this.fullAngle + e2.endAngle - e2.startAngle : e2.endAngle - e2.startAngle, s2 = a3, r2 = e2.startAngle, n2 = e2.startAngle;
      void 0 !== e2.prevStartAngle && void 0 !== e2.prevEndAngle && (r2 = e2.prevEndAngle, s2 = e2.prevEndAngle < e2.prevStartAngle ? this.fullAngle + e2.prevEndAngle - e2.prevStartAngle : e2.prevEndAngle - e2.prevStartAngle), e2.i === i3.config.series.length - 1 && (a3 + n2 > this.fullAngle ? e2.endAngle = e2.endAngle - (a3 + n2) : a3 + n2 < this.fullAngle && (e2.endAngle = e2.endAngle + (this.fullAngle - (a3 + n2)))), a3 === this.fullAngle && (a3 = this.fullAngle - 0.01), this.animateArc(t3, r2, n2, a3, s2, e2);
    } }, { key: "animateArc", value: function(t3, e2, i3, a3, s2, r2) {
      var n2, o2 = this, l2 = this.w, h2 = new y(this.ctx), c2 = r2.size;
      (isNaN(e2) || isNaN(s2)) && (e2 = i3, s2 = a3, r2.dur = 0);
      var d2 = a3, u2 = i3, g2 = e2 < i3 ? this.fullAngle + e2 - i3 : e2 - i3;
      l2.globals.dataChanged && r2.shouldSetPrevPaths && r2.prevEndAngle && (n2 = o2.getPiePath({ me: o2, startAngle: r2.prevStartAngle, angle: r2.prevEndAngle < r2.prevStartAngle ? this.fullAngle + r2.prevEndAngle - r2.prevStartAngle : r2.prevEndAngle - r2.prevStartAngle, size: c2 }), t3.attr({ d: n2 })), 0 !== r2.dur ? t3.animate(r2.dur, r2.animBeginArr[r2.i]).after((function() {
        "pie" !== o2.chartType && "donut" !== o2.chartType && "polarArea" !== o2.chartType || this.animate(l2.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": o2.strokeWidth }), r2.i === l2.config.series.length - 1 && h2.animationCompleted(t3);
      })).during((function(l3) {
        d2 = g2 + (a3 - g2) * l3, r2.animateStartingPos && (d2 = s2 + (a3 - s2) * l3, u2 = e2 - s2 + (i3 - (e2 - s2)) * l3), n2 = o2.getPiePath({ me: o2, startAngle: u2, angle: d2, size: c2 }), t3.node.setAttribute("data:pathOrig", n2), t3.attr({ d: n2 });
      })) : (n2 = o2.getPiePath({ me: o2, startAngle: u2, angle: a3, size: c2 }), r2.isTrack || (l2.globals.animationEnded = true), t3.node.setAttribute("data:pathOrig", n2), t3.attr({ d: n2, "stroke-width": o2.strokeWidth }));
    } }, { key: "pieClicked", value: function(t3) {
      var e2, i3 = this.w, a3 = this, s2 = a3.sliceSizes[t3] + (i3.config.plotOptions.pie.expandOnClick ? 4 : 0), r2 = i3.globals.dom.Paper.findOne(".apexcharts-".concat(a3.chartType.toLowerCase(), "-slice-").concat(t3));
      if ("true" !== r2.attr("data:pieClicked")) {
        var n2 = i3.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
        Array.prototype.forEach.call(n2, (function(t4) {
          t4.setAttribute("data:pieClicked", "false");
          var e3 = t4.getAttribute("data:pathOrig");
          e3 && t4.setAttribute("d", e3);
        })), i3.globals.capturedDataPointIndex = t3, r2.attr("data:pieClicked", "true");
        var o2 = parseInt(r2.attr("data:startAngle"), 10), l2 = parseInt(r2.attr("data:angle"), 10);
        e2 = a3.getPiePath({ me: a3, startAngle: o2, angle: l2, size: s2 }), 360 !== l2 && r2.plot(e2);
      } else {
        r2.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(r2.node, this.donutDataLabels);
        var h2 = r2.attr("data:pathOrig");
        r2.attr({ d: h2 });
      }
    } }, { key: "getChangedPath", value: function(t3, e2) {
      var i3 = "";
      return this.dynamicAnim && this.w.globals.dataChanged && (i3 = this.getPiePath({ me: this, startAngle: t3, angle: e2 - t3, size: this.size })), i3;
    } }, { key: "getPiePath", value: function(t3) {
      var e2, i3 = t3.me, a3 = t3.startAngle, s2 = t3.angle, r2 = t3.size, n2 = new Mi(this.ctx), o2 = a3, l2 = Math.PI * (o2 - 90) / 180, h2 = s2 + a3;
      Math.ceil(h2) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (h2 = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(h2) > this.fullAngle && (h2 -= this.fullAngle);
      var c2 = Math.PI * (h2 - 90) / 180, d2 = i3.centerX + r2 * Math.cos(l2), u2 = i3.centerY + r2 * Math.sin(l2), g2 = i3.centerX + r2 * Math.cos(c2), p2 = i3.centerY + r2 * Math.sin(c2), f2 = v.polarToCartesian(i3.centerX, i3.centerY, i3.donutSize, h2), x2 = v.polarToCartesian(i3.centerX, i3.centerY, i3.donutSize, o2), b2 = s2 > 180 ? 1 : 0, m2 = ["M", d2, u2, "A", r2, r2, 0, b2, 1, g2, p2];
      return e2 = "donut" === i3.chartType ? [].concat(m2, ["L", f2.x, f2.y, "A", i3.donutSize, i3.donutSize, 0, b2, 0, x2.x, x2.y, "L", d2, u2, "z"]).join(" ") : "pie" === i3.chartType || "polarArea" === i3.chartType ? [].concat(m2, ["L", i3.centerX, i3.centerY, "L", d2, u2]).join(" ") : [].concat(m2).join(" "), n2.roundPathCorners(e2, 2 * this.strokeWidth);
    } }, { key: "drawPolarElements", value: function(t3) {
      var e2 = this.w, i3 = new ea(this.ctx), a3 = new Mi(this.ctx), s2 = new Ea(this.ctx), r2 = a3.group(), n2 = a3.group(), o2 = i3.niceScale(0, Math.ceil(this.maxY), 0), l2 = o2.result.reverse(), h2 = o2.result.length;
      this.maxY = o2.niceMax;
      for (var c2 = e2.globals.radialSize, d2 = c2 / (h2 - 1), u2 = 0; u2 < h2 - 1; u2++) {
        var g2 = a3.drawCircle(c2);
        if (g2.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": e2.config.plotOptions.polarArea.rings.strokeWidth, stroke: e2.config.plotOptions.polarArea.rings.strokeColor }), e2.config.yaxis[0].show) {
          var p2 = s2.drawYAxisTexts(this.centerX, this.centerY - c2 + parseInt(e2.config.yaxis[0].labels.style.fontSize, 10) / 2, u2, l2[u2]);
          n2.add(p2);
        }
        r2.add(g2), c2 -= d2;
      }
      this.drawSpokes(t3), t3.add(r2), t3.add(n2);
    } }, { key: "renderInnerDataLabels", value: function(t3, e2, i3) {
      var a3 = this.w, s2 = new Mi(this.ctx), r2 = e2.total.show;
      t3.node.innerHTML = "", t3.node.style.opacity = i3.opacity;
      var n2, o2, l2 = i3.centerX, h2 = this.donutDataLabels.total.label ? i3.centerY : i3.centerY - i3.centerY / 6;
      n2 = void 0 === e2.name.color ? a3.globals.colors[0] : e2.name.color;
      var c2 = e2.name.fontSize, d2 = e2.name.fontFamily, u2 = e2.name.fontWeight;
      o2 = void 0 === e2.value.color ? a3.config.chart.foreColor : e2.value.color;
      var g2 = e2.value.formatter, p2 = "", f2 = "";
      if (r2 ? (n2 = e2.total.color, c2 = e2.total.fontSize, d2 = e2.total.fontFamily, u2 = e2.total.fontWeight, f2 = this.donutDataLabels.total.label ? e2.total.label : "", p2 = e2.total.formatter(a3)) : 1 === a3.globals.series.length && (p2 = g2(a3.globals.series[0], a3), f2 = a3.globals.seriesNames[0]), f2 && (f2 = e2.name.formatter(f2, e2.total.show, a3)), e2.name.show) {
        var x2 = s2.drawText({ x: l2, y: h2 + parseFloat(e2.name.offsetY), text: f2, textAnchor: "middle", foreColor: n2, fontSize: c2, fontWeight: u2, fontFamily: d2 });
        x2.node.classList.add("apexcharts-datalabel-label"), t3.add(x2);
      }
      if (e2.value.show) {
        var b2 = e2.name.show ? parseFloat(e2.value.offsetY) + 16 : e2.value.offsetY, m2 = s2.drawText({ x: l2, y: h2 + b2, text: p2, textAnchor: "middle", foreColor: o2, fontWeight: e2.value.fontWeight, fontSize: e2.value.fontSize, fontFamily: e2.value.fontFamily });
        m2.node.classList.add("apexcharts-datalabel-value"), t3.add(m2);
      }
      return t3;
    } }, { key: "printInnerLabels", value: function(t3, e2, i3, a3) {
      var s2, r2 = this.w;
      a3 ? s2 = void 0 === t3.name.color ? r2.globals.colors[parseInt(a3.parentNode.getAttribute("rel"), 10) - 1] : t3.name.color : r2.globals.series.length > 1 && t3.total.show && (s2 = t3.total.color);
      var n2 = r2.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), o2 = r2.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
      i3 = (0, t3.value.formatter)(i3, r2), a3 || "function" != typeof t3.total.formatter || (i3 = t3.total.formatter(r2));
      var l2 = e2 === t3.total.label;
      e2 = this.donutDataLabels.total.label ? t3.name.formatter(e2, l2, r2) : "", null !== n2 && (n2.textContent = e2), null !== o2 && (o2.textContent = i3), null !== n2 && (n2.style.fill = s2);
    } }, { key: "printDataLabelsInner", value: function(t3, e2) {
      var i3 = this.w, a3 = t3.getAttribute("data:value"), s2 = i3.globals.seriesNames[parseInt(t3.parentNode.getAttribute("rel"), 10) - 1];
      i3.globals.series.length > 1 && this.printInnerLabels(e2, s2, a3, t3);
      var r2 = i3.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
      null !== r2 && (r2.style.opacity = 1);
    } }, { key: "drawSpokes", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = new Mi(this.ctx), s2 = i3.config.plotOptions.polarArea.spokes;
      if (0 !== s2.strokeWidth) {
        for (var r2 = [], n2 = 360 / i3.globals.series.length, o2 = 0; o2 < i3.globals.series.length; o2++) r2.push(v.polarToCartesian(this.centerX, this.centerY, i3.globals.radialSize, i3.config.plotOptions.pie.startAngle + n2 * o2));
        r2.forEach((function(i4, r3) {
          var n3 = a3.drawLine(i4.x, i4.y, e2.centerX, e2.centerY, Array.isArray(s2.connectorColors) ? s2.connectorColors[r3] : s2.connectorColors);
          t3.add(n3);
        }));
      }
    } }, { key: "revertDataLabelsInner", value: function() {
      var t3 = this.w;
      if (this.donutDataLabels.show) {
        var e2 = t3.globals.dom.Paper.findOne(".apexcharts-datalabels-group"), i3 = this.renderInnerDataLabels(e2, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
        t3.globals.dom.Paper.findOne(".apexcharts-radialbar, .apexcharts-pie").add(i3);
      }
    } }]), t2;
  })(), Ha = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
      var a3 = this.w;
      this.graphics = new Mi(this.ctx), this.lineColorArr = void 0 !== a3.globals.stroke.colors ? a3.globals.stroke.colors : a3.globals.colors, this.defaultSize = a3.globals.svgHeight < a3.globals.svgWidth ? a3.globals.gridHeight : a3.globals.gridWidth, this.isLog = a3.config.yaxis[0].logarithmic, this.logBase = a3.config.yaxis[0].logBase, this.coreUtils = new Pi(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, a3.globals.maxY, 0) : a3.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : a3.globals.minY, this.polygons = a3.config.plotOptions.radar.polygons, this.strokeWidth = a3.config.stroke.show ? a3.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - a3.config.chart.dropShadow.blur, a3.config.xaxis.labels.show && (this.size = this.size - a3.globals.xAxisLabelsWidth / 1.75), void 0 !== a3.config.plotOptions.radar.size && (this.size = a3.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
    }
    return s(t2, [{ key: "draw", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = new ji(this.ctx), s2 = [], r2 = new qi(this.ctx);
      t3.length && (this.dataPointsLen = t3[i3.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
      var n2 = i3.globals.gridWidth / 2, o2 = i3.globals.gridHeight / 2, l2 = n2 + i3.config.plotOptions.radar.offsetX, h2 = o2 + i3.config.plotOptions.radar.offsetY, c2 = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(l2 || 0, ", ").concat(h2 || 0, ")") }), d2 = [], g2 = null, p2 = null;
      if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t3.forEach((function(t4, n3) {
        var o3 = t4.length === i3.globals.dataPoints, l3 = e2.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": o3, seriesName: v.escapeString(i3.globals.seriesNames[n3]), rel: n3 + 1, "data:realIndex": n3 });
        e2.dataRadiusOfPercent[n3] = [], e2.dataRadius[n3] = [], e2.angleArr[n3] = [], t4.forEach((function(t5, i4) {
          var a4 = Math.abs(e2.maxValue - e2.minValue);
          t5 -= e2.minValue, e2.isLog && (t5 = e2.coreUtils.getLogVal(e2.logBase, t5, 0)), e2.dataRadiusOfPercent[n3][i4] = t5 / a4, e2.dataRadius[n3][i4] = e2.dataRadiusOfPercent[n3][i4] * e2.size, e2.angleArr[n3][i4] = i4 * e2.disAngle;
        })), d2 = e2.getDataPointsPos(e2.dataRadius[n3], e2.angleArr[n3]);
        var h3 = e2.createPaths(d2, { x: 0, y: 0 });
        g2 = e2.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), p2 = e2.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": n3 }), i3.globals.delayedElements.push({ el: g2.node, index: n3 });
        var c3 = { i: n3, realIndex: n3, animationDelay: n3, initialSpeed: i3.config.chart.animations.speed, dataChangeSpeed: i3.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: false, bindEventsOnPaths: false, stroke: i3.globals.stroke.colors[n3], strokeLineCap: i3.config.stroke.lineCap }, f3 = null;
        i3.globals.previousPaths.length > 0 && (f3 = e2.getPreviousPath(n3));
        for (var x2 = 0; x2 < h3.linePathsTo.length; x2++) {
          var b2 = e2.graphics.renderPaths(u(u({}, c3), {}, { pathFrom: null === f3 ? h3.linePathsFrom[x2] : f3, pathTo: h3.linePathsTo[x2], strokeWidth: Array.isArray(e2.strokeWidth) ? e2.strokeWidth[n3] : e2.strokeWidth, fill: "none", drawShadow: false }));
          l3.add(b2);
          var m2 = a3.fillPath({ seriesNumber: n3 }), y2 = e2.graphics.renderPaths(u(u({}, c3), {}, { pathFrom: null === f3 ? h3.areaPathsFrom[x2] : f3, pathTo: h3.areaPathsTo[x2], strokeWidth: 0, fill: m2, drawShadow: false }));
          if (i3.config.chart.dropShadow.enabled) {
            var w2 = new Li(e2.ctx), k2 = i3.config.chart.dropShadow;
            w2.dropShadow(y2, Object.assign({}, k2, { noUserSpaceOnUse: true }), n3);
          }
          l3.add(y2);
        }
        t4.forEach((function(t5, a4) {
          var s3 = new Vi(e2.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: n3, dataPointIndex: a4 }), o4 = e2.graphics.drawMarker(d2[a4].x, d2[a4].y, s3);
          o4.attr("rel", a4), o4.attr("j", a4), o4.attr("index", n3), o4.node.setAttribute("default-marker-size", s3.pSize);
          var h4 = e2.graphics.group({ class: "apexcharts-series-markers" });
          h4 && h4.add(o4), g2.add(h4), l3.add(g2);
          var c4 = i3.config.dataLabels;
          if (c4.enabled) {
            var f4 = c4.formatter(i3.globals.series[n3][a4], { seriesIndex: n3, dataPointIndex: a4, w: i3 });
            r2.plotDataLabelsText({ x: d2[a4].x, y: d2[a4].y, text: f4, textAnchor: "middle", i: n3, j: n3, parent: p2, offsetCorrection: false, dataLabelsConfig: u({}, c4) });
          }
          l3.add(p2);
        })), s2.push(l3);
      })), this.drawPolygons({ parent: c2 }), i3.config.xaxis.labels.show) {
        var f2 = this.drawXAxisTexts();
        c2.add(f2);
      }
      return s2.forEach((function(t4) {
        c2.add(t4);
      })), c2.add(this.yaxisLabels), c2;
    } }, { key: "drawPolygons", value: function(t3) {
      for (var e2 = this, i3 = this.w, a3 = t3.parent, s2 = new Ea(this.ctx), r2 = i3.globals.yAxisScale[0].result.reverse(), n2 = r2.length, o2 = [], l2 = this.size / (n2 - 1), h2 = 0; h2 < n2; h2++) o2[h2] = l2 * h2;
      o2.reverse();
      var c2 = [], d2 = [];
      o2.forEach((function(t4, i4) {
        var a4 = v.getPolygonPos(t4, e2.dataPointsLen), s3 = "";
        a4.forEach((function(t5, a5) {
          if (0 === i4) {
            var r3 = e2.graphics.drawLine(t5.x, t5.y, 0, 0, Array.isArray(e2.polygons.connectorColors) ? e2.polygons.connectorColors[a5] : e2.polygons.connectorColors);
            d2.push(r3);
          }
          0 === a5 && e2.yaxisLabelsTextsPos.push({ x: t5.x, y: t5.y }), s3 += t5.x + "," + t5.y + " ";
        })), c2.push(s3);
      })), c2.forEach((function(t4, s3) {
        var r3 = e2.polygons.strokeColors, n3 = e2.polygons.strokeWidth, o3 = e2.graphics.drawPolygon(t4, Array.isArray(r3) ? r3[s3] : r3, Array.isArray(n3) ? n3[s3] : n3, i3.globals.radarPolygons.fill.colors[s3]);
        a3.add(o3);
      })), d2.forEach((function(t4) {
        a3.add(t4);
      })), i3.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach((function(t4, i4) {
        var a4 = s2.drawYAxisTexts(t4.x, t4.y, i4, r2[i4]);
        e2.yaxisLabels.add(a4);
      }));
    } }, { key: "drawXAxisTexts", value: function() {
      var t3 = this, e2 = this.w, i3 = e2.config.xaxis.labels, a3 = this.graphics.group({ class: "apexcharts-xaxis" }), s2 = v.getPolygonPos(this.size, this.dataPointsLen);
      return e2.globals.labels.forEach((function(r2, n2) {
        var o2 = e2.config.xaxis.labels.formatter, l2 = new qi(t3.ctx);
        if (s2[n2]) {
          var h2 = t3.getTextPos(s2[n2], t3.size), c2 = o2(r2, { seriesIndex: -1, dataPointIndex: n2, w: e2 });
          l2.plotDataLabelsText({ x: h2.newX, y: h2.newY, text: c2, textAnchor: h2.textAnchor, i: n2, j: n2, parent: a3, className: "apexcharts-xaxis-label", color: Array.isArray(i3.style.colors) && i3.style.colors[n2] ? i3.style.colors[n2] : "#a8a8a8", dataLabelsConfig: u({ textAnchor: h2.textAnchor, dropShadow: { enabled: false } }, i3), offsetCorrection: false }).on("click", (function(i4) {
            if ("function" == typeof e2.config.chart.events.xAxisLabelClick) {
              var a4 = Object.assign({}, e2, { labelIndex: n2 });
              e2.config.chart.events.xAxisLabelClick(i4, t3.ctx, a4);
            }
          }));
        }
      })), a3;
    } }, { key: "createPaths", value: function(t3, e2) {
      var i3 = this, a3 = [], s2 = [], r2 = [], n2 = [];
      if (t3.length) {
        s2 = [this.graphics.move(e2.x, e2.y)], n2 = [this.graphics.move(e2.x, e2.y)];
        var o2 = this.graphics.move(t3[0].x, t3[0].y), l2 = this.graphics.move(t3[0].x, t3[0].y);
        t3.forEach((function(e3, a4) {
          o2 += i3.graphics.line(e3.x, e3.y), l2 += i3.graphics.line(e3.x, e3.y), a4 === t3.length - 1 && (o2 += "Z", l2 += "Z");
        })), a3.push(o2), r2.push(l2);
      }
      return { linePathsFrom: s2, linePathsTo: a3, areaPathsFrom: n2, areaPathsTo: r2 };
    } }, { key: "getTextPos", value: function(t3, e2) {
      var i3 = "middle", a3 = t3.x, s2 = t3.y;
      return Math.abs(t3.x) >= 10 ? t3.x > 0 ? (i3 = "start", a3 += 10) : t3.x < 0 && (i3 = "end", a3 -= 10) : i3 = "middle", Math.abs(t3.y) >= e2 - 10 && (t3.y < 0 ? s2 -= 10 : t3.y > 0 && (s2 += 10)), { textAnchor: i3, newX: a3, newY: s2 };
    } }, { key: "getPreviousPath", value: function(t3) {
      for (var e2 = this.w, i3 = null, a3 = 0; a3 < e2.globals.previousPaths.length; a3++) {
        var s2 = e2.globals.previousPaths[a3];
        s2.paths.length > 0 && parseInt(s2.realIndex, 10) === parseInt(t3, 10) && void 0 !== e2.globals.previousPaths[a3].paths[0] && (i3 = e2.globals.previousPaths[a3].paths[0].d);
      }
      return i3;
    } }, { key: "getDataPointsPos", value: function(t3, e2) {
      var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
      t3 = t3 || [], e2 = e2 || [];
      for (var a3 = [], s2 = 0; s2 < i3; s2++) {
        var r2 = {};
        r2.x = t3[s2] * Math.sin(e2[s2]), r2.y = -t3[s2] * Math.cos(e2[s2]), a3.push(r2);
      }
      return a3;
    } }]), t2;
  })(), Oa = (function(t2) {
    h(r2, t2);
    var a3 = n(r2);
    function r2(t3) {
      var s2;
      i2(this, r2), (s2 = a3.call(this, t3)).ctx = t3, s2.w = t3.w, s2.animBeginArr = [0], s2.animDur = 0;
      var n2 = s2.w;
      return s2.startAngle = n2.config.plotOptions.radialBar.startAngle, s2.endAngle = n2.config.plotOptions.radialBar.endAngle, s2.totalAngle = Math.abs(n2.config.plotOptions.radialBar.endAngle - n2.config.plotOptions.radialBar.startAngle), s2.trackStartAngle = n2.config.plotOptions.radialBar.track.startAngle, s2.trackEndAngle = n2.config.plotOptions.radialBar.track.endAngle, s2.barLabels = s2.w.config.plotOptions.radialBar.barLabels, s2.donutDataLabels = s2.w.config.plotOptions.radialBar.dataLabels, s2.radialDataLabels = s2.donutDataLabels, s2.trackStartAngle || (s2.trackStartAngle = s2.startAngle), s2.trackEndAngle || (s2.trackEndAngle = s2.endAngle), 360 === s2.endAngle && (s2.endAngle = 359.99), s2.margin = parseInt(n2.config.plotOptions.radialBar.track.margin, 10), s2.onBarLabelClick = s2.onBarLabelClick.bind(e(s2)), s2;
    }
    return s(r2, [{ key: "draw", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx), a4 = i3.group({ class: "apexcharts-radialbar" });
      if (e2.globals.noData) return a4;
      var s2 = i3.group(), r3 = this.defaultSize / 2, n2 = e2.globals.gridWidth / 2, o2 = this.defaultSize / 2.05;
      e2.config.chart.sparkline.enabled || (o2 = o2 - e2.config.stroke.width - e2.config.chart.dropShadow.blur);
      var l2 = e2.globals.fill.colors;
      if (e2.config.plotOptions.radialBar.track.show) {
        var h2 = this.drawTracks({ size: o2, centerX: n2, centerY: r3, colorArr: l2, series: t3 });
        s2.add(h2);
      }
      var c2 = this.drawArcs({ size: o2, centerX: n2, centerY: r3, colorArr: l2, series: t3 }), d2 = 360;
      e2.config.plotOptions.radialBar.startAngle < 0 && (d2 = this.totalAngle);
      var u2 = (360 - d2) / 360;
      if (e2.globals.radialSize = o2 - o2 * u2, this.radialDataLabels.value.show) {
        var g2 = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
        e2.globals.radialSize += g2 * u2;
      }
      return s2.add(c2.g), "front" === e2.config.plotOptions.radialBar.hollow.position && (c2.g.add(c2.elHollow), c2.dataLabels && c2.g.add(c2.dataLabels)), a4.add(s2), a4;
    } }, { key: "drawTracks", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx), a4 = i3.group({ class: "apexcharts-tracks" }), s2 = new Li(this.ctx), r3 = new ji(this.ctx), n2 = this.getStrokeWidth(t3);
      t3.size = t3.size - n2 / 2;
      for (var o2 = 0; o2 < t3.series.length; o2++) {
        var l2 = i3.group({ class: "apexcharts-radialbar-track apexcharts-track" });
        a4.add(l2), l2.attr({ rel: o2 + 1 }), t3.size = t3.size - n2 - this.margin;
        var h2 = e2.config.plotOptions.radialBar.track, c2 = r3.fillPath({ seriesNumber: 0, size: t3.size, fillColors: Array.isArray(h2.background) ? h2.background[o2] : h2.background, solid: true }), d2 = this.trackStartAngle, u2 = this.trackEndAngle;
        Math.abs(u2) + Math.abs(d2) >= 360 && (u2 = 360 - Math.abs(this.startAngle) - 0.1);
        var g2 = i3.drawPath({ d: "", stroke: c2, strokeWidth: n2 * parseInt(h2.strokeWidth, 10) / 100, fill: "none", strokeOpacity: h2.opacity, classes: "apexcharts-radialbar-area" });
        if (h2.dropShadow.enabled) {
          var p2 = h2.dropShadow;
          s2.dropShadow(g2, p2);
        }
        l2.add(g2), g2.attr("id", "apexcharts-radialbarTrack-" + o2), this.animatePaths(g2, { centerX: t3.centerX, centerY: t3.centerY, endAngle: u2, startAngle: d2, size: t3.size, i: o2, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: true });
      }
      return a4;
    } }, { key: "drawArcs", value: function(t3) {
      var e2 = this.w, i3 = new Mi(this.ctx), a4 = new ji(this.ctx), s2 = new Li(this.ctx), r3 = i3.group(), n2 = this.getStrokeWidth(t3);
      t3.size = t3.size - n2 / 2;
      var o2 = e2.config.plotOptions.radialBar.hollow.background, l2 = t3.size - n2 * t3.series.length - this.margin * t3.series.length - n2 * parseInt(e2.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, h2 = l2 - e2.config.plotOptions.radialBar.hollow.margin;
      void 0 !== e2.config.plotOptions.radialBar.hollow.image && (o2 = this.drawHollowImage(t3, r3, l2, o2));
      var c2 = this.drawHollow({ size: h2, centerX: t3.centerX, centerY: t3.centerY, fill: o2 || "transparent" });
      if (e2.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
        var d2 = e2.config.plotOptions.radialBar.hollow.dropShadow;
        s2.dropShadow(c2, d2);
      }
      var u2 = 1;
      !this.radialDataLabels.total.show && e2.globals.series.length > 1 && (u2 = 0);
      var g2 = null;
      if (this.radialDataLabels.show) {
        var p2 = e2.globals.dom.Paper.findOne(".apexcharts-datalabels-group");
        g2 = this.renderInnerDataLabels(p2, this.radialDataLabels, { hollowSize: l2, centerX: t3.centerX, centerY: t3.centerY, opacity: u2 });
      }
      "back" === e2.config.plotOptions.radialBar.hollow.position && (r3.add(c2), g2 && r3.add(g2));
      var f2 = false;
      e2.config.plotOptions.radialBar.inverseOrder && (f2 = true);
      for (var x2 = f2 ? t3.series.length - 1 : 0; f2 ? x2 >= 0 : x2 < t3.series.length; f2 ? x2-- : x2++) {
        var b2 = i3.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: v.escapeString(e2.globals.seriesNames[x2]) });
        r3.add(b2), b2.attr({ rel: x2 + 1, "data:realIndex": x2 }), this.ctx.series.addCollapsedClassToSeries(b2, x2), t3.size = t3.size - n2 - this.margin;
        var m2 = a4.fillPath({ seriesNumber: x2, size: t3.size, value: t3.series[x2] }), y2 = this.startAngle, w2 = void 0, k2 = v.negToZero(t3.series[x2] > 100 ? 100 : t3.series[x2]) / 100, A2 = Math.round(this.totalAngle * k2) + this.startAngle, C2 = void 0;
        e2.globals.dataChanged && (w2 = this.startAngle, C2 = Math.round(this.totalAngle * v.negToZero(e2.globals.previousPaths[x2]) / 100) + w2), Math.abs(A2) + Math.abs(y2) > 360 && (A2 -= 0.01), Math.abs(C2) + Math.abs(w2) > 360 && (C2 -= 0.01);
        var S2 = A2 - y2, L2 = Array.isArray(e2.config.stroke.dashArray) ? e2.config.stroke.dashArray[x2] : e2.config.stroke.dashArray, M2 = i3.drawPath({ d: "", stroke: m2, strokeWidth: n2, fill: "none", fillOpacity: e2.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + x2, strokeDashArray: L2 });
        if (Mi.setAttrs(M2.node, { "data:angle": S2, "data:value": t3.series[x2] }), e2.config.chart.dropShadow.enabled) {
          var P2 = e2.config.chart.dropShadow;
          s2.dropShadow(M2, P2, x2);
        }
        if (s2.setSelectionFilter(M2, 0, x2), this.addListeners(M2, this.radialDataLabels), b2.add(M2), M2.attr({ index: 0, j: x2 }), this.barLabels.enabled) {
          var I2 = v.polarToCartesian(t3.centerX, t3.centerY, t3.size, y2), T2 = this.barLabels.formatter(e2.globals.seriesNames[x2], { seriesIndex: x2, w: e2 }), z2 = ["apexcharts-radialbar-label"];
          this.barLabels.onClick || z2.push("apexcharts-no-click");
          var X2 = this.barLabels.useSeriesColors ? e2.globals.colors[x2] : e2.config.chart.foreColor;
          X2 || (X2 = e2.config.chart.foreColor);
          var R2 = I2.x + this.barLabels.offsetX, E2 = I2.y + this.barLabels.offsetY, Y2 = i3.drawText({ x: R2, y: E2, text: T2, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: X2, cssClass: z2.join(" ") });
          Y2.on("click", this.onBarLabelClick), Y2.attr({ rel: x2 + 1 }), 0 !== y2 && Y2.attr({ "transform-origin": "".concat(R2, " ").concat(E2), transform: "rotate(".concat(y2, " 0 0)") }), b2.add(Y2);
        }
        var H2 = 0;
        !this.initialAnim || e2.globals.resized || e2.globals.dataChanged || (H2 = e2.config.chart.animations.speed), e2.globals.dataChanged && (H2 = e2.config.chart.animations.dynamicAnimation.speed), this.animDur = H2 / (1.2 * t3.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(M2, { centerX: t3.centerX, centerY: t3.centerY, endAngle: A2, startAngle: y2, prevEndAngle: C2, prevStartAngle: w2, size: t3.size, i: x2, totalItems: 2, animBeginArr: this.animBeginArr, dur: H2, shouldSetPrevPaths: true });
      }
      return { g: r3, elHollow: c2, dataLabels: g2 };
    } }, { key: "drawHollow", value: function(t3) {
      var e2 = new Mi(this.ctx).drawCircle(2 * t3.size);
      return e2.attr({ class: "apexcharts-radialbar-hollow", cx: t3.centerX, cy: t3.centerY, r: t3.size, fill: t3.fill }), e2;
    } }, { key: "drawHollowImage", value: function(t3, e2, i3, a4) {
      var s2 = this.w, r3 = new ji(this.ctx), n2 = v.randomId(), o2 = s2.config.plotOptions.radialBar.hollow.image;
      if (s2.config.plotOptions.radialBar.hollow.imageClipped) r3.clippedImgArea({ width: i3, height: i3, image: o2, patternID: "pattern".concat(s2.globals.cuid).concat(n2) }), a4 = "url(#pattern".concat(s2.globals.cuid).concat(n2, ")");
      else {
        var l2 = s2.config.plotOptions.radialBar.hollow.imageWidth, h2 = s2.config.plotOptions.radialBar.hollow.imageHeight;
        if (void 0 === l2 && void 0 === h2) {
          var c2 = s2.globals.dom.Paper.image(o2, (function(e3) {
            this.move(t3.centerX - e3.width / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetX, t3.centerY - e3.height / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetY);
          }));
          e2.add(c2);
        } else {
          var d2 = s2.globals.dom.Paper.image(o2, (function(e3) {
            this.move(t3.centerX - l2 / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetX, t3.centerY - h2 / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l2, h2);
          }));
          e2.add(d2);
        }
      }
      return a4;
    } }, { key: "getStrokeWidth", value: function(t3) {
      var e2 = this.w;
      return t3.size * (100 - parseInt(e2.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t3.series.length + 1) - this.margin;
    } }, { key: "onBarLabelClick", value: function(t3) {
      var e2 = parseInt(t3.target.getAttribute("rel"), 10) - 1, i3 = this.barLabels.onClick, a4 = this.w;
      i3 && i3(a4.globals.seriesNames[e2], { w: a4, seriesIndex: e2 });
    } }]), r2;
  })(Ya), Fa = (function(t2) {
    h(a3, t2);
    var e2 = n(a3);
    function a3() {
      return i2(this, a3), e2.apply(this, arguments);
    }
    return s(a3, [{ key: "draw", value: function(t3, e3) {
      var i3 = this.w, a4 = new Mi(this.ctx);
      this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t3, this.seriesRangeStart = i3.globals.seriesRangeStart, this.seriesRangeEnd = i3.globals.seriesRangeEnd, this.barHelpers.initVariables(t3);
      for (var s2 = a4.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), r2 = 0; r2 < t3.length; r2++) {
        var n2, o2, l2, h2, c2 = void 0, d2 = void 0, g2 = i3.globals.comboCharts ? e3[r2] : r2, p2 = this.barHelpers.getGroupIndex(g2).columnGroupIndex, f2 = a4.group({ class: "apexcharts-series", seriesName: v.escapeString(i3.globals.seriesNames[g2]), rel: r2 + 1, "data:realIndex": g2 });
        this.ctx.series.addCollapsedClassToSeries(f2, g2), t3[r2].length > 0 && (this.visibleI = this.visibleI + 1);
        var x2 = 0, b2 = 0, m2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = i3.globals.seriesYAxisReverseMap[g2][0], m2 = g2);
        var y2 = this.barHelpers.initialPositions(g2);
        d2 = y2.y, h2 = y2.zeroW, c2 = y2.x, b2 = y2.barWidth, x2 = y2.barHeight, n2 = y2.xDivision, o2 = y2.yDivision, l2 = y2.zeroH;
        for (var w2 = a4.group({ class: "apexcharts-datalabels", "data:realIndex": g2 }), k2 = a4.group({ class: "apexcharts-rangebar-goals-markers" }), A2 = 0; A2 < i3.globals.dataPoints; A2++) {
          var C2 = this.barHelpers.getStrokeWidth(r2, A2, g2), S2 = this.seriesRangeStart[r2][A2], L2 = this.seriesRangeEnd[r2][A2], M2 = null, P2 = null, I2 = null, T2 = { x: c2, y: d2, strokeWidth: C2, elSeries: f2 }, z2 = this.seriesLen;
          if (i3.config.plotOptions.bar.rangeBarGroupRows && (z2 = 1), void 0 === i3.config.series[r2].data[A2]) break;
          if (this.isHorizontal) {
            I2 = d2 + x2 * this.visibleI;
            var X2 = (o2 - x2 * z2) / 2;
            if (i3.config.series[r2].data[A2].x) {
              var R2 = this.detectOverlappingBars({ i: r2, j: A2, barYPosition: I2, srty: X2, barHeight: x2, yDivision: o2, initPositions: y2 });
              x2 = R2.barHeight, I2 = R2.barYPosition;
            }
            b2 = (M2 = this.drawRangeBarPaths(u({ indexes: { i: r2, j: A2, realIndex: g2 }, barHeight: x2, barYPosition: I2, zeroW: h2, yDivision: o2, y1: S2, y2: L2 }, T2))).barWidth;
          } else {
            i3.globals.isXNumeric && (c2 = (i3.globals.seriesX[r2][A2] - i3.globals.minX) / this.xRatio - b2 / 2), P2 = c2 + b2 * this.visibleI;
            var E2 = (n2 - b2 * z2) / 2;
            if (i3.config.series[r2].data[A2].x) {
              var Y2 = this.detectOverlappingBars({ i: r2, j: A2, barXPosition: P2, srtx: E2, barWidth: b2, xDivision: n2, initPositions: y2 });
              b2 = Y2.barWidth, P2 = Y2.barXPosition;
            }
            x2 = (M2 = this.drawRangeColumnPaths(u({ indexes: { i: r2, j: A2, realIndex: g2, translationsIndex: m2 }, barWidth: b2, barXPosition: P2, zeroH: l2, xDivision: n2 }, T2))).barHeight;
          }
          var H2 = this.barHelpers.drawGoalLine({ barXPosition: M2.barXPosition, barYPosition: I2, goalX: M2.goalX, goalY: M2.goalY, barHeight: x2, barWidth: b2 });
          H2 && k2.add(H2), d2 = M2.y, c2 = M2.x;
          var O2 = this.barHelpers.getPathFillColor(t3, r2, A2, g2);
          this.renderSeries({ realIndex: g2, pathFill: O2.color, lineFill: O2.useRangeColor ? O2.color : i3.globals.stroke.colors[g2], j: A2, i: r2, x: c2, y: d2, y1: S2, y2: L2, pathFrom: M2.pathFrom, pathTo: M2.pathTo, strokeWidth: C2, elSeries: f2, series: t3, barHeight: x2, barWidth: b2, barXPosition: P2, barYPosition: I2, columnGroupIndex: p2, elDataLabelsWrap: w2, elGoalsMarkers: k2, visibleSeries: this.visibleI, type: "rangebar" });
        }
        s2.add(f2);
      }
      return s2;
    } }, { key: "detectOverlappingBars", value: function(t3) {
      var e3 = t3.i, i3 = t3.j, a4 = t3.barYPosition, s2 = t3.barXPosition, r2 = t3.srty, n2 = t3.srtx, o2 = t3.barHeight, l2 = t3.barWidth, h2 = t3.yDivision, c2 = t3.xDivision, d2 = t3.initPositions, u2 = this.w, g2 = [], p2 = u2.config.series[e3].data[i3].rangeName, f2 = u2.config.series[e3].data[i3].x, x2 = Array.isArray(f2) ? f2.join(" ") : f2, b2 = u2.globals.labels.map((function(t4) {
        return Array.isArray(t4) ? t4.join(" ") : t4;
      })).indexOf(x2), m2 = u2.globals.seriesRange[e3].findIndex((function(t4) {
        return t4.x === x2 && t4.overlaps.length > 0;
      }));
      return this.isHorizontal ? (a4 = u2.config.plotOptions.bar.rangeBarGroupRows ? r2 + h2 * b2 : r2 + o2 * this.visibleI + h2 * b2, m2 > -1 && !u2.config.plotOptions.bar.rangeBarOverlap && (g2 = u2.globals.seriesRange[e3][m2].overlaps).indexOf(p2) > -1 && (a4 = (o2 = d2.barHeight / g2.length) * this.visibleI + h2 * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + o2 * (this.visibleI + g2.indexOf(p2)) + h2 * b2)) : (b2 > -1 && !u2.globals.timescaleLabels.length && (s2 = u2.config.plotOptions.bar.rangeBarGroupRows ? n2 + c2 * b2 : n2 + l2 * this.visibleI + c2 * b2), m2 > -1 && !u2.config.plotOptions.bar.rangeBarOverlap && (g2 = u2.globals.seriesRange[e3][m2].overlaps).indexOf(p2) > -1 && (s2 = (l2 = d2.barWidth / g2.length) * this.visibleI + c2 * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + l2 * (this.visibleI + g2.indexOf(p2)) + c2 * b2)), { barYPosition: a4, barXPosition: s2, barHeight: o2, barWidth: l2 };
    } }, { key: "drawRangeColumnPaths", value: function(t3) {
      var e3 = t3.indexes, i3 = t3.x, a4 = t3.xDivision, s2 = t3.barWidth, r2 = t3.barXPosition, n2 = t3.zeroH, o2 = this.w, l2 = e3.i, h2 = e3.j, c2 = e3.realIndex, d2 = e3.translationsIndex, u2 = this.yRatio[d2], g2 = this.getRangeValue(c2, h2), p2 = Math.min(g2.start, g2.end), f2 = Math.max(g2.start, g2.end);
      void 0 === this.series[l2][h2] || null === this.series[l2][h2] ? p2 = n2 : (p2 = n2 - p2 / u2, f2 = n2 - f2 / u2);
      var x2 = Math.abs(f2 - p2), b2 = this.barHelpers.getColumnPaths({ barXPosition: r2, barWidth: s2, y1: p2, y2: f2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: c2, i: c2, j: h2, w: o2 });
      if (o2.globals.isXNumeric) {
        var m2 = this.getBarXForNumericXAxis({ x: i3, j: h2, realIndex: c2, barWidth: s2 });
        i3 = m2.x, r2 = m2.barXPosition;
      } else i3 += a4;
      return { pathTo: b2.pathTo, pathFrom: b2.pathFrom, barHeight: x2, x: i3, y: g2.start < 0 && g2.end < 0 ? p2 : f2, goalY: this.barHelpers.getGoalValues("y", null, n2, l2, h2, d2), barXPosition: r2 };
    } }, { key: "preventBarOverflow", value: function(t3) {
      var e3 = this.w;
      return t3 < 0 && (t3 = 0), t3 > e3.globals.gridWidth && (t3 = e3.globals.gridWidth), t3;
    } }, { key: "drawRangeBarPaths", value: function(t3) {
      var e3 = t3.indexes, i3 = t3.y, a4 = t3.y1, s2 = t3.y2, r2 = t3.yDivision, n2 = t3.barHeight, o2 = t3.barYPosition, l2 = t3.zeroW, h2 = this.w, c2 = e3.realIndex, d2 = e3.j, u2 = this.preventBarOverflow(l2 + a4 / this.invertedYRatio), g2 = this.preventBarOverflow(l2 + s2 / this.invertedYRatio), p2 = this.getRangeValue(c2, d2), f2 = Math.abs(g2 - u2), x2 = this.barHelpers.getBarpaths({ barYPosition: o2, barHeight: n2, x1: u2, x2: g2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: c2, realIndex: c2, j: d2, w: h2 });
      return h2.globals.isXNumeric || (i3 += r2), { pathTo: x2.pathTo, pathFrom: x2.pathFrom, barWidth: f2, x: p2.start < 0 && p2.end < 0 ? u2 : g2, goalX: this.barHelpers.getGoalValues("x", l2, null, c2, d2), y: i3 };
    } }, { key: "getRangeValue", value: function(t3, e3) {
      var i3 = this.w;
      return { start: i3.globals.seriesRangeStart[t3][e3], end: i3.globals.seriesRangeEnd[t3][e3] };
    } }]), a3;
  })(Ia), Da = (function() {
    function t2(e2) {
      i2(this, t2), this.w = e2.w, this.lineCtx = e2;
    }
    return s(t2, [{ key: "sameValueSeriesFix", value: function(t3, e2) {
      var i3 = this.w;
      if (("gradient" === i3.config.fill.type || "gradient" === i3.config.fill.type[t3]) && new Pi(this.lineCtx.ctx, i3).seriesHaveSameValues(t3)) {
        var a3 = e2[t3].slice();
        a3[a3.length - 1] = a3[a3.length - 1] + 1e-6, e2[t3] = a3;
      }
      return e2;
    } }, { key: "calculatePoints", value: function(t3) {
      var e2 = t3.series, i3 = t3.realIndex, a3 = t3.x, s2 = t3.y, r2 = t3.i, n2 = t3.j, o2 = t3.prevY, l2 = this.w, h2 = [], c2 = [], d2 = this.lineCtx.categoryAxisCorrection + l2.config.markers.offsetX;
      return l2.globals.isXNumeric && (d2 = (l2.globals.seriesX[i3][0] - l2.globals.minX) / this.lineCtx.xRatio + l2.config.markers.offsetX), 0 === n2 && (h2.push(d2), c2.push(v.isNumber(e2[r2][0]) ? o2 + l2.config.markers.offsetY : null)), h2.push(a3 + l2.config.markers.offsetX), c2.push(v.isNumber(e2[r2][n2 + 1]) ? s2 + l2.config.markers.offsetY : null), { x: h2, y: c2 };
    } }, { key: "checkPreviousPaths", value: function(t3) {
      for (var e2 = t3.pathFromLine, i3 = t3.pathFromArea, a3 = t3.realIndex, s2 = this.w, r2 = 0; r2 < s2.globals.previousPaths.length; r2++) {
        var n2 = s2.globals.previousPaths[r2];
        ("line" === n2.type || "area" === n2.type) && n2.paths.length > 0 && parseInt(n2.realIndex, 10) === parseInt(a3, 10) && ("line" === n2.type ? (this.lineCtx.appendPathFrom = false, e2 = s2.globals.previousPaths[r2].paths[0].d) : "area" === n2.type && (this.lineCtx.appendPathFrom = false, i3 = s2.globals.previousPaths[r2].paths[0].d, s2.config.stroke.show && s2.globals.previousPaths[r2].paths[1] && (e2 = s2.globals.previousPaths[r2].paths[1].d)));
      }
      return { pathFromLine: e2, pathFromArea: i3 };
    } }, { key: "determineFirstPrevY", value: function(t3) {
      var e2, i3, a3, s2 = t3.i, r2 = t3.realIndex, n2 = t3.series, o2 = t3.prevY, l2 = t3.lineYPosition, h2 = t3.translationsIndex, c2 = this.w, d2 = c2.config.chart.stacked && !c2.globals.comboCharts || c2.config.chart.stacked && c2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e2 = this.w.config.series[r2]) || void 0 === e2 ? void 0 : e2.type) || "column" === (null === (i3 = this.w.config.series[r2]) || void 0 === i3 ? void 0 : i3.type));
      if (void 0 !== (null === (a3 = n2[s2]) || void 0 === a3 ? void 0 : a3[0])) o2 = (l2 = d2 && s2 > 0 ? this.lineCtx.prevSeriesY[s2 - 1][0] : this.lineCtx.zeroY) - n2[s2][0] / this.lineCtx.yRatio[h2] + 2 * (this.lineCtx.isReversed ? n2[s2][0] / this.lineCtx.yRatio[h2] : 0);
      else if (d2 && s2 > 0 && void 0 === n2[s2][0]) {
        for (var u2 = s2 - 1; u2 >= 0; u2--) if (null !== n2[u2][0] && void 0 !== n2[u2][0]) {
          o2 = l2 = this.lineCtx.prevSeriesY[u2][0];
          break;
        }
      }
      return { prevY: o2, lineYPosition: l2 };
    } }]), t2;
  })(), _a = function(t2) {
    for (var e2, i3, a3, s2, r2 = (function(t3) {
      for (var e3 = [], i4 = t3[0], a4 = t3[1], s3 = e3[0] = Ba(i4, a4), r3 = 1, n3 = t3.length - 1; r3 < n3; r3++) i4 = a4, a4 = t3[r3 + 1], e3[r3] = 0.5 * (s3 + (s3 = Ba(i4, a4)));
      return e3[r3] = s3, e3;
    })(t2), n2 = t2.length - 1, o2 = [], l2 = 0; l2 < n2; l2++) a3 = Ba(t2[l2], t2[l2 + 1]), Math.abs(a3) < 1e-6 ? r2[l2] = r2[l2 + 1] = 0 : (s2 = (e2 = r2[l2] / a3) * e2 + (i3 = r2[l2 + 1] / a3) * i3) > 9 && (s2 = 3 * a3 / Math.sqrt(s2), r2[l2] = s2 * e2, r2[l2 + 1] = s2 * i3);
    for (var h2 = 0; h2 <= n2; h2++) s2 = (t2[Math.min(n2, h2 + 1)][0] - t2[Math.max(0, h2 - 1)][0]) / (6 * (1 + r2[h2] * r2[h2])), o2.push([s2 || 0, r2[h2] * s2 || 0]);
    return o2;
  }, Na = function(t2) {
    var e2 = _a(t2), i3 = t2[1], a3 = t2[0], s2 = [], r2 = e2[1], n2 = e2[0];
    s2.push(a3, [a3[0] + n2[0], a3[1] + n2[1], i3[0] - r2[0], i3[1] - r2[1], i3[0], i3[1]]);
    for (var o2 = 2, l2 = e2.length; o2 < l2; o2++) {
      var h2 = t2[o2], c2 = e2[o2];
      s2.push([h2[0] - c2[0], h2[1] - c2[1], h2[0], h2[1]]);
    }
    return s2;
  }, Wa = function(t2, e2, i3) {
    var a3 = t2.slice(e2, i3);
    if (e2) {
      if (i3 - e2 > 1 && a3[1].length < 6) {
        var s2 = a3[0].length;
        a3[1] = [2 * a3[0][s2 - 2] - a3[0][s2 - 4], 2 * a3[0][s2 - 1] - a3[0][s2 - 3]].concat(a3[1]);
      }
      a3[0] = a3[0].slice(-2);
    }
    return a3;
  };
  function Ba(t2, e2) {
    return (e2[1] - t2[1]) / (e2[0] - t2[0]);
  }
  var Ga = (function() {
    function t2(e2, a3, s2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.xyRatios = a3, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || s2, this.scatter = new Ui(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Da(this), this.markers = new Vi(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
    }
    return s(t2, [{ key: "draw", value: function(t3, e2, i3, a3) {
      var s2, r2 = this.w, n2 = new Mi(this.ctx), o2 = r2.globals.comboCharts ? e2 : r2.config.chart.type, l2 = n2.group({ class: "apexcharts-".concat(o2, "-series apexcharts-plot-series") }), h2 = new Pi(this.ctx, r2);
      this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t3 = h2.getLogSeries(t3), this.yRatio = h2.getLogYRatios(this.yRatio), this.prevSeriesY = [];
      for (var c2 = [], d2 = 0; d2 < t3.length; d2++) {
        t3 = this.lineHelpers.sameValueSeriesFix(d2, t3);
        var g2 = r2.globals.comboCharts ? i3[d2] : d2, p2 = this.yRatio.length > 1 ? g2 : 0;
        this._initSerieVariables(t3, d2, g2);
        var f2 = [], x2 = [], b2 = [], m2 = r2.globals.padHorizontal + this.categoryAxisCorrection;
        this.ctx.series.addCollapsedClassToSeries(this.elSeries, g2), r2.globals.isXNumeric && r2.globals.seriesX.length > 0 && (m2 = (r2.globals.seriesX[g2][0] - r2.globals.minX) / this.xRatio), b2.push(m2);
        var v2, y2 = m2, w2 = void 0, k2 = y2, A2 = this.zeroY, C2 = this.zeroY;
        A2 = this.lineHelpers.determineFirstPrevY({ i: d2, realIndex: g2, series: t3, prevY: A2, lineYPosition: 0, translationsIndex: p2 }).prevY, "monotoneCubic" === r2.config.stroke.curve && null === t3[d2][0] ? f2.push(null) : f2.push(A2), v2 = A2;
        "rangeArea" === o2 && (w2 = C2 = this.lineHelpers.determineFirstPrevY({ i: d2, realIndex: g2, series: a3, prevY: C2, lineYPosition: 0, translationsIndex: p2 }).prevY, x2.push(null !== f2[0] ? C2 : null));
        var S2 = this._calculatePathsFrom({ type: o2, series: t3, i: d2, realIndex: g2, translationsIndex: p2, prevX: k2, prevY: A2, prevY2: C2 }), L2 = [f2[0]], M2 = [x2[0]], P2 = { type: o2, series: t3, realIndex: g2, translationsIndex: p2, i: d2, x: m2, y: 1, pX: y2, pY: v2, pathsFrom: S2, linePaths: [], areaPaths: [], seriesIndex: i3, lineYPosition: 0, xArrj: b2, yArrj: f2, y2Arrj: x2, seriesRangeEnd: a3 }, I2 = this._iterateOverDataPoints(u(u({}, P2), {}, { iterations: "rangeArea" === o2 ? t3[d2].length - 1 : void 0, isRangeStart: true }));
        if ("rangeArea" === o2) {
          for (var T2 = this._calculatePathsFrom({ series: a3, i: d2, realIndex: g2, prevX: k2, prevY: C2 }), z2 = this._iterateOverDataPoints(u(u({}, P2), {}, { series: a3, xArrj: [m2], yArrj: L2, y2Arrj: M2, pY: w2, areaPaths: I2.areaPaths, pathsFrom: T2, iterations: a3[d2].length - 1, isRangeStart: false })), X2 = I2.linePaths.length / 2, R2 = 0; R2 < X2; R2++) I2.linePaths[R2] = z2.linePaths[R2 + X2] + I2.linePaths[R2];
          I2.linePaths.splice(X2), I2.pathFromLine = z2.pathFromLine + I2.pathFromLine;
        } else I2.pathFromArea += "z";
        this._handlePaths({ type: o2, realIndex: g2, i: d2, paths: I2 }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), c2.push(this.elSeries);
      }
      if (void 0 !== (null === (s2 = r2.config.series[0]) || void 0 === s2 ? void 0 : s2.zIndex) && c2.sort((function(t4, e3) {
        return Number(t4.node.getAttribute("zIndex")) - Number(e3.node.getAttribute("zIndex"));
      })), r2.config.chart.stacked) for (var E2 = c2.length - 1; E2 >= 0; E2--) l2.add(c2[E2]);
      else for (var Y2 = 0; Y2 < c2.length; Y2++) l2.add(c2[Y2]);
      return l2;
    } }, { key: "_initSerieVariables", value: function(t3, e2, i3) {
      var a3 = this.w, s2 = new Mi(this.ctx);
      this.xDivision = a3.globals.gridWidth / (a3.globals.dataPoints - ("on" === a3.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(a3.config.stroke.width) ? a3.config.stroke.width[i3] : a3.config.stroke.width;
      var r2 = 0;
      if (this.yRatio.length > 1 && (this.yaxisIndex = a3.globals.seriesYAxisReverseMap[i3], r2 = i3), this.isReversed = a3.config.yaxis[this.yaxisIndex] && a3.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a3.globals.gridHeight - this.baseLineY[r2] - (this.isReversed ? a3.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[r2] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a3.globals.gridHeight || "end" === a3.config.plotOptions.area.fillTo) && (this.areaBottomY = a3.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s2.group({ class: "apexcharts-series", zIndex: void 0 !== a3.config.series[i3].zIndex ? a3.config.series[i3].zIndex : i3, seriesName: v.escapeString(a3.globals.seriesNames[i3]) }), this.elPointsMain = s2.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i3 }), a3.globals.hasNullValues) {
        var n2 = this.markers.plotChartMarkers({ pointsPos: { x: [0], y: [a3.globals.gridHeight + a3.globals.markers.largestSize] }, seriesIndex: e2, j: 0, pSize: 0.1, alwaysDrawMarker: true, isVirtualPoint: true });
        null !== n2 && this.elPointsMain.add(n2);
      }
      this.elDataLabelsWrap = s2.group({ class: "apexcharts-datalabels", "data:realIndex": i3 });
      var o2 = t3[e2].length === a3.globals.dataPoints;
      this.elSeries.attr({ "data:longestSeries": o2, rel: e2 + 1, "data:realIndex": i3 }), this.appendPathFrom = true;
    } }, { key: "_calculatePathsFrom", value: function(t3) {
      var e2, i3, a3, s2, r2 = t3.type, n2 = t3.series, o2 = t3.i, l2 = t3.realIndex, h2 = t3.translationsIndex, c2 = t3.prevX, d2 = t3.prevY, u2 = t3.prevY2, g2 = this.w, p2 = new Mi(this.ctx);
      if (null === n2[o2][0]) {
        for (var f2 = 0; f2 < n2[o2].length; f2++) if (null !== n2[o2][f2]) {
          c2 = this.xDivision * f2, d2 = this.zeroY - n2[o2][f2] / this.yRatio[h2], e2 = p2.move(c2, d2), i3 = p2.move(c2, this.areaBottomY);
          break;
        }
      } else e2 = p2.move(c2, d2), "rangeArea" === r2 && (e2 = p2.move(c2, u2) + p2.line(c2, d2)), i3 = p2.move(c2, this.areaBottomY) + p2.line(c2, d2);
      if (a3 = p2.move(0, this.areaBottomY) + p2.line(0, this.areaBottomY), s2 = p2.move(0, this.areaBottomY) + p2.line(0, this.areaBottomY), g2.globals.previousPaths.length > 0) {
        var x2 = this.lineHelpers.checkPreviousPaths({ pathFromLine: a3, pathFromArea: s2, realIndex: l2 });
        a3 = x2.pathFromLine, s2 = x2.pathFromArea;
      }
      return { prevX: c2, prevY: d2, linePath: e2, areaPath: i3, pathFromLine: a3, pathFromArea: s2 };
    } }, { key: "_handlePaths", value: function(t3) {
      var e2 = t3.type, i3 = t3.realIndex, a3 = t3.i, s2 = t3.paths, r2 = this.w, n2 = new Mi(this.ctx), o2 = new ji(this.ctx);
      this.prevSeriesY.push(s2.yArrj), r2.globals.seriesXvalues[i3] = s2.xArrj, r2.globals.seriesYvalues[i3] = s2.yArrj;
      var l2 = r2.config.forecastDataPoints;
      if (l2.count > 0 && "rangeArea" !== e2) {
        var h2 = r2.globals.seriesXvalues[i3][r2.globals.seriesXvalues[i3].length - l2.count - 1], c2 = n2.drawRect(h2, 0, r2.globals.gridWidth, r2.globals.gridHeight, 0);
        r2.globals.dom.elForecastMask.appendChild(c2.node);
        var d2 = n2.drawRect(0, 0, h2, r2.globals.gridHeight, 0);
        r2.globals.dom.elNonForecastMask.appendChild(d2.node);
      }
      this.pointsChart || r2.globals.delayedElements.push({ el: this.elPointsMain.node, index: i3 });
      var g2 = { i: a3, realIndex: i3, animationDelay: a3, initialSpeed: r2.config.chart.animations.speed, dataChangeSpeed: r2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(e2) };
      if ("area" === e2) for (var p2 = o2.fillPath({ seriesNumber: i3 }), f2 = 0; f2 < s2.areaPaths.length; f2++) {
        var x2 = n2.renderPaths(u(u({}, g2), {}, { pathFrom: s2.pathFromArea, pathTo: s2.areaPaths[f2], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: p2 }));
        this.elSeries.add(x2);
      }
      if (r2.config.stroke.show && !this.pointsChart) {
        var b2 = null;
        if ("line" === e2) b2 = o2.fillPath({ seriesNumber: i3, i: a3 });
        else if ("solid" === r2.config.stroke.fill.type) b2 = r2.globals.stroke.colors[i3];
        else {
          var m2 = r2.config.fill;
          r2.config.fill = r2.config.stroke.fill, b2 = o2.fillPath({ seriesNumber: i3, i: a3 }), r2.config.fill = m2;
        }
        for (var v2 = 0; v2 < s2.linePaths.length; v2++) {
          var y2 = b2;
          "rangeArea" === e2 && (y2 = o2.fillPath({ seriesNumber: i3 }));
          var w2 = u(u({}, g2), {}, { pathFrom: s2.pathFromLine, pathTo: s2.linePaths[v2], stroke: b2, strokeWidth: this.strokeWidth, strokeLineCap: r2.config.stroke.lineCap, fill: "rangeArea" === e2 ? y2 : "none" }), k2 = n2.renderPaths(w2);
          if (this.elSeries.add(k2), k2.attr("fill-rule", "evenodd"), l2.count > 0 && "rangeArea" !== e2) {
            var A2 = n2.renderPaths(w2);
            A2.node.setAttribute("stroke-dasharray", l2.dashArray), l2.strokeWidth && A2.node.setAttribute("stroke-width", l2.strokeWidth), this.elSeries.add(A2), A2.attr("clip-path", "url(#forecastMask".concat(r2.globals.cuid, ")")), k2.attr("clip-path", "url(#nonForecastMask".concat(r2.globals.cuid, ")"));
          }
        }
      }
    } }, { key: "_iterateOverDataPoints", value: function(t3) {
      var e2, i3, a3 = this, s2 = t3.type, r2 = t3.series, n2 = t3.iterations, o2 = t3.realIndex, l2 = t3.translationsIndex, h2 = t3.i, c2 = t3.x, d2 = t3.y, u2 = t3.pX, g2 = t3.pY, p2 = t3.pathsFrom, f2 = t3.linePaths, x2 = t3.areaPaths, b2 = t3.seriesIndex, m2 = t3.lineYPosition, y2 = t3.xArrj, w2 = t3.yArrj, k2 = t3.y2Arrj, A2 = t3.isRangeStart, C2 = t3.seriesRangeEnd, S2 = this.w, L2 = new Mi(this.ctx), M2 = this.yRatio, P2 = p2.prevY, I2 = p2.linePath, T2 = p2.areaPath, z2 = p2.pathFromLine, X2 = p2.pathFromArea, R2 = v.isNumber(S2.globals.minYArr[o2]) ? S2.globals.minYArr[o2] : S2.globals.minY;
      n2 || (n2 = S2.globals.dataPoints > 1 ? S2.globals.dataPoints - 1 : S2.globals.dataPoints);
      var E2 = function(t4, e3) {
        return e3 - t4 / M2[l2] + 2 * (a3.isReversed ? t4 / M2[l2] : 0);
      }, Y2 = d2, H2 = S2.config.chart.stacked && !S2.globals.comboCharts || S2.config.chart.stacked && S2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e2 = this.w.config.series[o2]) || void 0 === e2 ? void 0 : e2.type) || "column" === (null === (i3 = this.w.config.series[o2]) || void 0 === i3 ? void 0 : i3.type)), O2 = S2.config.stroke.curve;
      Array.isArray(O2) && (O2 = Array.isArray(b2) ? O2[b2[h2]] : O2[h2]);
      for (var F2, D2 = 0, _2 = 0; _2 < n2 && 0 !== r2[h2].length; _2++) {
        var N2 = void 0 === r2[h2][_2 + 1] || null === r2[h2][_2 + 1];
        if (S2.globals.isXNumeric) {
          var W2 = S2.globals.seriesX[o2][_2 + 1];
          void 0 === S2.globals.seriesX[o2][_2 + 1] && (W2 = S2.globals.seriesX[o2][n2 - 1]), c2 = (W2 - S2.globals.minX) / this.xRatio;
        } else c2 += this.xDivision;
        if (H2) if (h2 > 0 && S2.globals.collapsedSeries.length < S2.config.series.length - 1) {
          m2 = this.prevSeriesY[(function(t4) {
            for (var e3 = t4; e3 > 0; e3--) {
              if (!(S2.globals.collapsedSeriesIndices.indexOf((null == b2 ? void 0 : b2[e3]) || e3) > -1)) return e3;
              e3--;
            }
            return 0;
          })(h2 - 1)][_2 + 1];
        } else m2 = this.zeroY;
        else m2 = this.zeroY;
        N2 ? d2 = E2(R2, m2) : (d2 = E2(r2[h2][_2 + 1], m2), "rangeArea" === s2 && (Y2 = E2(C2[h2][_2 + 1], m2))), y2.push(null === r2[h2][_2 + 1] ? null : c2), !N2 || "smooth" !== S2.config.stroke.curve && "monotoneCubic" !== S2.config.stroke.curve ? (w2.push(d2), k2.push(Y2)) : (w2.push(null), k2.push(null));
        var B2 = this.lineHelpers.calculatePoints({ series: r2, x: c2, y: d2, realIndex: o2, i: h2, j: _2, prevY: P2 }), G2 = this._createPaths({ type: s2, series: r2, i: h2, realIndex: o2, j: _2, x: c2, y: d2, y2: Y2, xArrj: y2, yArrj: w2, y2Arrj: k2, pX: u2, pY: g2, pathState: D2, segmentStartX: F2, linePath: I2, areaPath: T2, linePaths: f2, areaPaths: x2, curve: O2, isRangeStart: A2 });
        x2 = G2.areaPaths, f2 = G2.linePaths, u2 = G2.pX, g2 = G2.pY, D2 = G2.pathState, F2 = G2.segmentStartX, T2 = G2.areaPath, I2 = G2.linePath, !this.appendPathFrom || S2.globals.hasNullValues || "monotoneCubic" === O2 && "rangeArea" === s2 || (z2 += L2.line(c2, this.areaBottomY), X2 += L2.line(c2, this.areaBottomY)), this.handleNullDataPoints(r2, B2, h2, _2, o2), this._handleMarkersAndLabels({ type: s2, pointsPos: B2, i: h2, j: _2, realIndex: o2, isRangeStart: A2 });
      }
      return { yArrj: w2, xArrj: y2, pathFromArea: X2, areaPaths: x2, pathFromLine: z2, linePaths: f2, linePath: I2, areaPath: T2 };
    } }, { key: "_handleMarkersAndLabels", value: function(t3) {
      var e2 = t3.type, i3 = t3.pointsPos, a3 = t3.isRangeStart, s2 = t3.i, r2 = t3.j, n2 = t3.realIndex, o2 = this.w, l2 = new qi(this.ctx);
      if (this.pointsChart) this.scatter.draw(this.elSeries, r2, { realIndex: n2, pointsPos: i3, zRatio: this.zRatio, elParent: this.elPointsMain });
      else {
        o2.globals.series[s2].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
        var h2 = this.markers.plotChartMarkers({ pointsPos: i3, seriesIndex: n2, j: r2 + 1 });
        null !== h2 && this.elPointsMain.add(h2);
      }
      var c2 = l2.drawDataLabel({ type: e2, isRangeStart: a3, pos: i3, i: n2, j: r2 + 1 });
      null !== c2 && this.elDataLabelsWrap.add(c2);
    } }, { key: "_createPaths", value: function(t3) {
      var e2 = t3.type, i3 = t3.series, a3 = t3.i;
      t3.realIndex;
      var s2, r2 = t3.j, n2 = t3.x, o2 = t3.y, l2 = t3.xArrj, h2 = t3.yArrj, c2 = t3.y2, d2 = t3.y2Arrj, u2 = t3.pX, g2 = t3.pY, p2 = t3.pathState, f2 = t3.segmentStartX, x2 = t3.linePath, b2 = t3.areaPath, m2 = t3.linePaths, v2 = t3.areaPaths, y2 = t3.curve, w2 = t3.isRangeStart, k2 = new Mi(this.ctx), A2 = this.areaBottomY, C2 = "rangeArea" === e2, S2 = "rangeArea" === e2 && w2;
      switch (y2) {
        case "monotoneCubic":
          var L2 = w2 ? h2 : d2;
          switch (p2) {
            case 0:
              if (null === L2[r2 + 1]) break;
              p2 = 1;
            case 1:
              if (!(C2 ? l2.length === i3[a3].length : r2 === i3[a3].length - 2)) break;
            case 2:
              var M2 = w2 ? l2 : l2.slice().reverse(), P2 = w2 ? L2 : L2.slice().reverse(), I2 = (s2 = P2, M2.map((function(t4, e3) {
                return [t4, s2[e3]];
              })).filter((function(t4) {
                return null !== t4[1];
              }))), T2 = I2.length > 1 ? Na(I2) : I2, z2 = [];
              C2 && (S2 ? v2 = I2 : z2 = v2.reverse());
              var X2 = 0, R2 = 0;
              if ((function(t4, e3) {
                for (var i4 = (function(t5) {
                  var e4 = [], i5 = 0;
                  return t5.forEach((function(t6) {
                    null !== t6 ? i5++ : i5 > 0 && (e4.push(i5), i5 = 0);
                  })), i5 > 0 && e4.push(i5), e4;
                })(t4), a4 = [], s3 = 0, r3 = 0; s3 < i4.length; r3 += i4[s3++]) a4[s3] = Wa(e3, r3, r3 + i4[s3]);
                return a4;
              })(P2, T2).forEach((function(t4) {
                X2++;
                var e3 = (function(t5) {
                  for (var e4 = "", i5 = 0; i5 < t5.length; i5++) {
                    var a5 = t5[i5], s3 = a5.length;
                    s3 > 4 ? (e4 += "C".concat(a5[0], ", ").concat(a5[1]), e4 += ", ".concat(a5[2], ", ").concat(a5[3]), e4 += ", ".concat(a5[4], ", ").concat(a5[5])) : s3 > 2 && (e4 += "S".concat(a5[0], ", ").concat(a5[1]), e4 += ", ".concat(a5[2], ", ").concat(a5[3]));
                  }
                  return e4;
                })(t4), i4 = R2, a4 = (R2 += t4.length) - 1;
                S2 ? x2 = k2.move(I2[i4][0], I2[i4][1]) + e3 : C2 ? x2 = k2.move(z2[i4][0], z2[i4][1]) + k2.line(I2[i4][0], I2[i4][1]) + e3 + k2.line(z2[a4][0], z2[a4][1]) : (x2 = k2.move(I2[i4][0], I2[i4][1]) + e3, b2 = x2 + k2.line(I2[a4][0], A2) + k2.line(I2[i4][0], A2) + "z", v2.push(b2)), m2.push(x2);
              })), C2 && X2 > 1 && !S2) {
                var E2 = m2.slice(X2).reverse();
                m2.splice(X2), E2.forEach((function(t4) {
                  return m2.push(t4);
                }));
              }
              p2 = 0;
          }
          break;
        case "smooth":
          var Y2 = 0.35 * (n2 - u2);
          if (null === i3[a3][r2]) p2 = 0;
          else switch (p2) {
            case 0:
              if (f2 = u2, x2 = S2 ? k2.move(u2, d2[r2]) + k2.line(u2, g2) : k2.move(u2, g2), b2 = k2.move(u2, g2), null === i3[a3][r2 + 1] || void 0 === i3[a3][r2 + 1]) {
                m2.push(x2), v2.push(b2);
                break;
              }
              if (p2 = 1, r2 < i3[a3].length - 2) {
                var H2 = k2.curve(u2 + Y2, g2, n2 - Y2, o2, n2, o2);
                x2 += H2, b2 += H2;
                break;
              }
            case 1:
              if (null === i3[a3][r2 + 1]) x2 += S2 ? k2.line(u2, c2) : k2.move(u2, g2), b2 += k2.line(u2, A2) + k2.line(f2, A2) + "z", m2.push(x2), v2.push(b2), p2 = -1;
              else {
                var O2 = k2.curve(u2 + Y2, g2, n2 - Y2, o2, n2, o2);
                x2 += O2, b2 += O2, r2 >= i3[a3].length - 2 && (S2 && (x2 += k2.curve(n2, o2, n2, o2, n2, c2) + k2.move(n2, c2)), b2 += k2.curve(n2, o2, n2, o2, n2, A2) + k2.line(f2, A2) + "z", m2.push(x2), v2.push(b2), p2 = -1);
              }
          }
          u2 = n2, g2 = o2;
          break;
        default:
          var F2 = function(t4, e3, i4) {
            var a4 = [];
            switch (t4) {
              case "stepline":
                a4 = k2.line(e3, null, "H") + k2.line(null, i4, "V");
                break;
              case "linestep":
                a4 = k2.line(null, i4, "V") + k2.line(e3, null, "H");
                break;
              case "straight":
                a4 = k2.line(e3, i4);
            }
            return a4;
          };
          if (null === i3[a3][r2]) p2 = 0;
          else switch (p2) {
            case 0:
              if (f2 = u2, x2 = S2 ? k2.move(u2, d2[r2]) + k2.line(u2, g2) : k2.move(u2, g2), b2 = k2.move(u2, g2), null === i3[a3][r2 + 1] || void 0 === i3[a3][r2 + 1]) {
                m2.push(x2), v2.push(b2);
                break;
              }
              if (p2 = 1, r2 < i3[a3].length - 2) {
                var D2 = F2(y2, n2, o2);
                x2 += D2, b2 += D2;
                break;
              }
            case 1:
              if (null === i3[a3][r2 + 1]) x2 += S2 ? k2.line(u2, c2) : k2.move(u2, g2), b2 += k2.line(u2, A2) + k2.line(f2, A2) + "z", m2.push(x2), v2.push(b2), p2 = -1;
              else {
                var _2 = F2(y2, n2, o2);
                x2 += _2, b2 += _2, r2 >= i3[a3].length - 2 && (S2 && (x2 += k2.line(n2, c2)), b2 += k2.line(n2, A2) + k2.line(f2, A2) + "z", m2.push(x2), v2.push(b2), p2 = -1);
              }
          }
          u2 = n2, g2 = o2;
      }
      return { linePaths: m2, areaPaths: v2, pX: u2, pY: g2, pathState: p2, segmentStartX: f2, linePath: x2, areaPath: b2 };
    } }, { key: "handleNullDataPoints", value: function(t3, e2, i3, a3, s2) {
      var r2 = this.w;
      if (null === t3[i3][a3] && r2.config.markers.showNullDataPoints || 1 === t3[i3].length) {
        var n2 = this.strokeWidth - r2.config.markers.strokeWidth / 2;
        n2 > 0 || (n2 = 0);
        var o2 = this.markers.plotChartMarkers({ pointsPos: e2, seriesIndex: s2, j: a3 + 1, pSize: n2, alwaysDrawMarker: true });
        null !== o2 && this.elPointsMain.add(o2);
      }
    } }]), t2;
  })();
  window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ (function() {
    function t2(e3, i4, a4, s3) {
      this.xoffset = e3, this.yoffset = i4, this.height = s3, this.width = a4, this.shortestEdge = function() {
        return Math.min(this.height, this.width);
      }, this.getCoordinates = function(t3) {
        var e4, i5 = [], a5 = this.xoffset, s4 = this.yoffset, n3 = r2(t3) / this.height, o2 = r2(t3) / this.width;
        if (this.width >= this.height) for (e4 = 0; e4 < t3.length; e4++) i5.push([a5, s4, a5 + n3, s4 + t3[e4] / n3]), s4 += t3[e4] / n3;
        else for (e4 = 0; e4 < t3.length; e4++) i5.push([a5, s4, a5 + t3[e4] / o2, s4 + o2]), a5 += t3[e4] / o2;
        return i5;
      }, this.cutArea = function(e4) {
        var i5;
        if (this.width >= this.height) {
          var a5 = e4 / this.height, s4 = this.width - a5;
          i5 = new t2(this.xoffset + a5, this.yoffset, s4, this.height);
        } else {
          var r3 = e4 / this.width, n3 = this.height - r3;
          i5 = new t2(this.xoffset, this.yoffset + r3, this.width, n3);
        }
        return i5;
      };
    }
    function e2(e3, a4, s3, n3, o2) {
      n3 = void 0 === n3 ? 0 : n3, o2 = void 0 === o2 ? 0 : o2;
      var l2 = i3((function(t3, e4) {
        var i4, a5 = [], s4 = e4 / r2(t3);
        for (i4 = 0; i4 < t3.length; i4++) a5[i4] = t3[i4] * s4;
        return a5;
      })(e3, a4 * s3), [], new t2(n3, o2, a4, s3), []);
      return (function(t3) {
        var e4, i4, a5 = [];
        for (e4 = 0; e4 < t3.length; e4++) for (i4 = 0; i4 < t3[e4].length; i4++) a5.push(t3[e4][i4]);
        return a5;
      })(l2);
    }
    function i3(t3, e3, s3, n3) {
      var o2, l2, h2;
      if (0 !== t3.length) return o2 = s3.shortestEdge(), (function(t4, e4, i4) {
        var s4;
        if (0 === t4.length) return true;
        (s4 = t4.slice()).push(e4);
        var r3 = a3(t4, i4), n4 = a3(s4, i4);
        return r3 >= n4;
      })(e3, l2 = t3[0], o2) ? (e3.push(l2), i3(t3.slice(1), e3, s3, n3)) : (h2 = s3.cutArea(r2(e3), n3), n3.push(s3.getCoordinates(e3)), i3(t3, [], h2, n3)), n3;
      n3.push(s3.getCoordinates(e3));
    }
    function a3(t3, e3) {
      var i4 = Math.min.apply(Math, t3), a4 = Math.max.apply(Math, t3), s3 = r2(t3);
      return Math.max(Math.pow(e3, 2) * a4 / Math.pow(s3, 2), Math.pow(s3, 2) / (Math.pow(e3, 2) * i4));
    }
    function s2(t3) {
      return t3 && t3.constructor === Array;
    }
    function r2(t3) {
      var e3, i4 = 0;
      for (e3 = 0; e3 < t3.length; e3++) i4 += t3[e3];
      return i4;
    }
    function n2(t3) {
      var e3, i4 = 0;
      if (s2(t3[0])) for (e3 = 0; e3 < t3.length; e3++) i4 += n2(t3[e3]);
      else i4 = r2(t3);
      return i4;
    }
    return function t3(i4, a4, r3, o2, l2) {
      o2 = void 0 === o2 ? 0 : o2, l2 = void 0 === l2 ? 0 : l2;
      var h2, c2, d2 = [], u2 = [];
      if (s2(i4[0])) {
        for (c2 = 0; c2 < i4.length; c2++) d2[c2] = n2(i4[c2]);
        for (h2 = e2(d2, a4, r3, o2, l2), c2 = 0; c2 < i4.length; c2++) u2.push(t3(i4[c2], h2[c2][2] - h2[c2][0], h2[c2][3] - h2[c2][1], h2[c2][0], h2[c2][1]));
      } else u2 = e2(i4, a4, r3, o2, l2);
      return u2;
    };
  })();
  var ja = (function() {
    function t2(e2, a3) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new Xa(e2), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
    }
    return s(t2, [{ key: "draw", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = new Mi(this.ctx), s2 = new ji(this.ctx), r2 = a3.group({ class: "apexcharts-treemap" });
      if (i3.globals.noData) return r2;
      var n2 = [];
      return t3.forEach((function(t4) {
        var e3 = t4.map((function(t5) {
          return Math.abs(t5);
        }));
        n2.push(e3);
      })), this.negRange = this.helpers.checkColorRange(), i3.config.series.forEach((function(t4, i4) {
        t4.data.forEach((function(t5) {
          Array.isArray(e2.labels[i4]) || (e2.labels[i4] = []), e2.labels[i4].push(t5.x);
        }));
      })), window.TreemapSquared.generate(n2, i3.globals.gridWidth, i3.globals.gridHeight).forEach((function(n3, o2) {
        var l2 = a3.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: v.escapeString(i3.globals.seriesNames[o2]), rel: o2 + 1, "data:realIndex": o2 });
        if (i3.config.chart.dropShadow.enabled) {
          var h2 = i3.config.chart.dropShadow;
          new Li(e2.ctx).dropShadow(r2, h2, o2);
        }
        var c2 = a3.group({ class: "apexcharts-data-labels" }), d2 = { xMin: 1 / 0, yMin: 1 / 0, xMax: -1 / 0, yMax: -1 / 0 };
        n3.forEach((function(r3, n4) {
          var h3 = r3[0], c3 = r3[1], u3 = r3[2], g3 = r3[3];
          d2.xMin = Math.min(d2.xMin, h3), d2.yMin = Math.min(d2.yMin, c3), d2.xMax = Math.max(d2.xMax, u3), d2.yMax = Math.max(d2.yMax, g3);
          var p3 = e2.helpers.getShadeColor(i3.config.chart.type, o2, n4, e2.negRange), f3 = p3.color, x3 = s2.fillPath({ color: f3, seriesNumber: o2, dataPointIndex: n4 }), b3 = a3.drawRect(h3, c3, u3 - h3, g3 - c3, i3.config.plotOptions.treemap.borderRadius, "#fff", 1, e2.strokeWidth, i3.config.plotOptions.treemap.useFillColorAsStroke ? f3 : i3.globals.stroke.colors[o2]);
          b3.attr({ cx: h3, cy: c3, index: o2, i: o2, j: n4, width: u3 - h3, height: g3 - c3, fill: x3 }), b3.node.classList.add("apexcharts-treemap-rect"), e2.helpers.addListeners(b3);
          var m3 = { x: h3 + (u3 - h3) / 2, y: c3 + (g3 - c3) / 2, width: 0, height: 0 }, v2 = { x: h3, y: c3, width: u3 - h3, height: g3 - c3 };
          if (i3.config.chart.animations.enabled && !i3.globals.dataChanged) {
            var y3 = 1;
            i3.globals.resized || (y3 = i3.config.chart.animations.speed), e2.animateTreemap(b3, m3, v2, y3);
          }
          if (i3.globals.dataChanged) {
            var w3 = 1;
            e2.dynamicAnim.enabled && i3.globals.shouldAnimate && (w3 = e2.dynamicAnim.speed, i3.globals.previousPaths[o2] && i3.globals.previousPaths[o2][n4] && i3.globals.previousPaths[o2][n4].rect && (m3 = i3.globals.previousPaths[o2][n4].rect), e2.animateTreemap(b3, m3, v2, w3));
          }
          var k3 = e2.getFontSize(r3), A3 = i3.config.dataLabels.formatter(e2.labels[o2][n4], { value: i3.globals.series[o2][n4], seriesIndex: o2, dataPointIndex: n4, w: i3 });
          "truncate" === i3.config.plotOptions.treemap.dataLabels.format && (k3 = parseInt(i3.config.dataLabels.style.fontSize, 10), A3 = e2.truncateLabels(A3, k3, h3, c3, u3, g3));
          var C3 = null;
          i3.globals.series[o2][n4] && (C3 = e2.helpers.calculateDataLabels({ text: A3, x: (h3 + u3) / 2, y: (c3 + g3) / 2 + e2.strokeWidth / 2 + k3 / 3, i: o2, j: n4, colorProps: p3, fontSize: k3, series: t3 })), i3.config.dataLabels.enabled && C3 && e2.rotateToFitLabel(C3, k3, A3, h3, c3, u3, g3), l2.add(b3), null !== C3 && l2.add(C3);
        }));
        var u2 = i3.config.plotOptions.treemap.seriesTitle;
        if (i3.config.series.length > 1 && u2 && u2.show) {
          var g2 = i3.config.series[o2].name || "";
          if (g2 && d2.xMin < 1 / 0 && d2.yMin < 1 / 0) {
            var p2 = u2.offsetX, f2 = u2.offsetY, x2 = u2.borderColor, b2 = u2.borderWidth, m2 = u2.borderRadius, y2 = u2.style, w2 = y2.color || i3.config.chart.foreColor, k2 = { left: y2.padding.left, right: y2.padding.right, top: y2.padding.top, bottom: y2.padding.bottom }, A2 = a3.getTextRects(g2, y2.fontSize, y2.fontFamily), C2 = A2.width + k2.left + k2.right, S2 = A2.height + k2.top + k2.bottom, L2 = d2.xMin + (p2 || 0), M2 = d2.yMin + (f2 || 0), P2 = a3.drawRect(L2, M2, C2, S2, m2, y2.background, 1, b2, x2), I2 = a3.drawText({ x: L2 + k2.left, y: M2 + k2.top + 0.75 * A2.height, text: g2, fontSize: y2.fontSize, fontFamily: y2.fontFamily, fontWeight: y2.fontWeight, foreColor: w2, cssClass: y2.cssClass || "" });
            l2.add(P2), l2.add(I2);
          }
        }
        l2.add(c2), r2.add(l2);
      })), r2;
    } }, { key: "getFontSize", value: function(t3) {
      var e2 = this.w;
      var i3 = (function t4(e3) {
        var i4, a3 = 0;
        if (Array.isArray(e3[0])) for (i4 = 0; i4 < e3.length; i4++) a3 += t4(e3[i4]);
        else for (i4 = 0; i4 < e3.length; i4++) a3 += e3[i4].length;
        return a3;
      })(this.labels) / (function t4(e3) {
        var i4, a3 = 0;
        if (Array.isArray(e3[0])) for (i4 = 0; i4 < e3.length; i4++) a3 += t4(e3[i4]);
        else for (i4 = 0; i4 < e3.length; i4++) a3 += 1;
        return a3;
      })(this.labels);
      return (function(t4, a3) {
        var s2 = t4 * a3, r2 = Math.pow(s2, 0.5);
        return Math.min(r2 / i3, parseInt(e2.config.dataLabels.style.fontSize, 10));
      })(t3[2] - t3[0], t3[3] - t3[1]);
    } }, { key: "rotateToFitLabel", value: function(t3, e2, i3, a3, s2, r2, n2) {
      var o2 = new Mi(this.ctx), l2 = o2.getTextRects(i3, e2);
      if (l2.width + this.w.config.stroke.width + 5 > r2 - a3 && l2.width <= n2 - s2) {
        var h2 = o2.rotateAroundCenter(t3.node);
        t3.node.setAttribute("transform", "rotate(-90 ".concat(h2.x, " ").concat(h2.y, ") translate(").concat(l2.height / 3, ")"));
      }
    } }, { key: "truncateLabels", value: function(t3, e2, i3, a3, s2, r2) {
      var n2 = new Mi(this.ctx), o2 = n2.getTextRects(t3, e2).width + this.w.config.stroke.width + 5 > s2 - i3 && r2 - a3 > s2 - i3 ? r2 - a3 : s2 - i3, l2 = n2.getTextBasedOnMaxWidth({ text: t3, maxWidth: o2, fontSize: e2 });
      return t3.length !== l2.length && o2 / e2 < 5 ? "" : l2;
    } }, { key: "animateTreemap", value: function(t3, e2, i3, a3) {
      var s2 = new y(this.ctx);
      s2.animateRect(t3, e2, i3, a3, (function() {
        s2.animationCompleted(t3);
      }));
    } }]), t2;
  })(), Va = 86400, Ua = 10 / Va, qa = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
    }
    return s(t2, [{ key: "calculateTimeScaleTicks", value: function(t3, e2) {
      var i3 = this, a3 = this.w;
      if (a3.globals.allSeriesCollapsed) return a3.globals.labels = [], a3.globals.timescaleLabels = [], [];
      var s2 = new zi(this.ctx), r2 = (e2 - t3) / 864e5;
      this.determineInterval(r2), a3.globals.disableZoomIn = false, a3.globals.disableZoomOut = false, r2 < Ua ? a3.globals.disableZoomIn = true : r2 > 5e4 && (a3.globals.disableZoomOut = true);
      var n2 = s2.getTimeUnitsfromTimestamp(t3, e2, this.utc), o2 = a3.globals.gridWidth / r2, l2 = o2 / 24, h2 = l2 / 60, c2 = h2 / 60, d2 = Math.floor(24 * r2), g2 = Math.floor(1440 * r2), p2 = Math.floor(r2 * Va), f2 = Math.floor(r2), x2 = Math.floor(r2 / 30), b2 = Math.floor(r2 / 365), m2 = { minMillisecond: n2.minMillisecond, minSecond: n2.minSecond, minMinute: n2.minMinute, minHour: n2.minHour, minDate: n2.minDate, minMonth: n2.minMonth, minYear: n2.minYear }, v2 = { firstVal: m2, currentMillisecond: m2.minMillisecond, currentSecond: m2.minSecond, currentMinute: m2.minMinute, currentHour: m2.minHour, currentMonthDate: m2.minDate, currentDate: m2.minDate, currentMonth: m2.minMonth, currentYear: m2.minYear, daysWidthOnXAxis: o2, hoursWidthOnXAxis: l2, minutesWidthOnXAxis: h2, secondsWidthOnXAxis: c2, numberOfSeconds: p2, numberOfMinutes: g2, numberOfHours: d2, numberOfDays: f2, numberOfMonths: x2, numberOfYears: b2 };
      switch (this.tickInterval) {
        case "years":
          this.generateYearScale(v2);
          break;
        case "months":
        case "half_year":
          this.generateMonthScale(v2);
          break;
        case "months_days":
        case "months_fortnight":
        case "days":
        case "week_days":
          this.generateDayScale(v2);
          break;
        case "hours":
          this.generateHourScale(v2);
          break;
        case "minutes_fives":
        case "minutes":
          this.generateMinuteScale(v2);
          break;
        case "seconds_tens":
        case "seconds_fives":
        case "seconds":
          this.generateSecondScale(v2);
      }
      var y2 = this.timeScaleArray.map((function(t4) {
        var e3 = { position: t4.position, unit: t4.unit, year: t4.year, day: t4.day ? t4.day : 1, hour: t4.hour ? t4.hour : 0, month: t4.month + 1 };
        return "month" === t4.unit ? u(u({}, e3), {}, { day: 1, value: t4.value + 1 }) : "day" === t4.unit || "hour" === t4.unit ? u(u({}, e3), {}, { value: t4.value }) : "minute" === t4.unit ? u(u({}, e3), {}, { value: t4.value, minute: t4.value }) : "second" === t4.unit ? u(u({}, e3), {}, { value: t4.value, minute: t4.minute, second: t4.second }) : t4;
      }));
      return y2.filter((function(t4) {
        var e3 = 1, s3 = Math.ceil(a3.globals.gridWidth / 120), r3 = t4.value;
        void 0 !== a3.config.xaxis.tickAmount && (s3 = a3.config.xaxis.tickAmount), y2.length > s3 && (e3 = Math.floor(y2.length / s3));
        var n3 = false, o3 = false;
        switch (i3.tickInterval) {
          case "years":
            "year" === t4.unit && (n3 = true);
            break;
          case "half_year":
            e3 = 7, "year" === t4.unit && (n3 = true);
            break;
          case "months":
            e3 = 1, "year" === t4.unit && (n3 = true);
            break;
          case "months_fortnight":
            e3 = 15, "year" !== t4.unit && "month" !== t4.unit || (n3 = true), 30 === r3 && (o3 = true);
            break;
          case "months_days":
            e3 = 10, "month" === t4.unit && (n3 = true), 30 === r3 && (o3 = true);
            break;
          case "week_days":
            e3 = 8, "month" === t4.unit && (n3 = true);
            break;
          case "days":
            e3 = 1, "month" === t4.unit && (n3 = true);
            break;
          case "hours":
            "day" === t4.unit && (n3 = true);
            break;
          case "minutes_fives":
          case "seconds_fives":
            r3 % 5 != 0 && (o3 = true);
            break;
          case "seconds_tens":
            r3 % 10 != 0 && (o3 = true);
        }
        if ("hours" === i3.tickInterval || "minutes_fives" === i3.tickInterval || "seconds_tens" === i3.tickInterval || "seconds_fives" === i3.tickInterval) {
          if (!o3) return true;
        } else if ((r3 % e3 == 0 || n3) && !o3) return true;
      }));
    } }, { key: "recalcDimensionsBasedOnFormat", value: function(t3, e2) {
      var i3 = this.w, a3 = this.formatDates(t3), s2 = this.removeOverlappingTS(a3);
      i3.globals.timescaleLabels = s2.slice(), new fa(this.ctx).plotCoords();
    } }, { key: "determineInterval", value: function(t3) {
      var e2 = 24 * t3, i3 = 60 * e2;
      switch (true) {
        case t3 / 365 > 5:
          this.tickInterval = "years";
          break;
        case t3 > 800:
          this.tickInterval = "half_year";
          break;
        case t3 > 180:
          this.tickInterval = "months";
          break;
        case t3 > 90:
          this.tickInterval = "months_fortnight";
          break;
        case t3 > 60:
          this.tickInterval = "months_days";
          break;
        case t3 > 30:
          this.tickInterval = "week_days";
          break;
        case t3 > 2:
          this.tickInterval = "days";
          break;
        case e2 > 2.4:
          this.tickInterval = "hours";
          break;
        case i3 > 15:
          this.tickInterval = "minutes_fives";
          break;
        case i3 > 5:
          this.tickInterval = "minutes";
          break;
        case i3 > 1:
          this.tickInterval = "seconds_tens";
          break;
        case 60 * i3 > 20:
          this.tickInterval = "seconds_fives";
          break;
        default:
          this.tickInterval = "seconds";
      }
    } }, { key: "generateYearScale", value: function(t3) {
      var e2 = t3.firstVal, i3 = t3.currentMonth, a3 = t3.currentYear, s2 = t3.daysWidthOnXAxis, r2 = t3.numberOfYears, n2 = e2.minYear, o2 = 0, l2 = new zi(this.ctx), h2 = "year";
      if (e2.minDate > 1 || e2.minMonth > 0) {
        var c2 = l2.determineRemainingDaysOfYear(e2.minYear, e2.minMonth, e2.minDate);
        o2 = (l2.determineDaysOfYear(e2.minYear) - c2 + 1) * s2, n2 = e2.minYear + 1, this.timeScaleArray.push({ position: o2, value: n2, unit: h2, year: n2, month: v.monthMod(i3 + 1) });
      } else 1 === e2.minDate && 0 === e2.minMonth && this.timeScaleArray.push({ position: o2, value: n2, unit: h2, year: a3, month: v.monthMod(i3 + 1) });
      for (var d2 = n2, u2 = o2, g2 = 0; g2 < r2; g2++) d2++, u2 = l2.determineDaysOfYear(d2 - 1) * s2 + u2, this.timeScaleArray.push({ position: u2, value: d2, unit: h2, year: d2, month: 1 });
    } }, { key: "generateMonthScale", value: function(t3) {
      var e2 = t3.firstVal, i3 = t3.currentMonthDate, a3 = t3.currentMonth, s2 = t3.currentYear, r2 = t3.daysWidthOnXAxis, n2 = t3.numberOfMonths, o2 = a3, l2 = 0, h2 = new zi(this.ctx), c2 = "month", d2 = 0;
      if (e2.minDate > 1) {
        l2 = (h2.determineDaysOfMonths(a3 + 1, e2.minYear) - i3 + 1) * r2, o2 = v.monthMod(a3 + 1);
        var u2 = s2 + d2, g2 = v.monthMod(o2), p2 = o2;
        0 === o2 && (c2 = "year", p2 = u2, g2 = 1, u2 += d2 += 1), this.timeScaleArray.push({ position: l2, value: p2, unit: c2, year: u2, month: g2 });
      } else this.timeScaleArray.push({ position: l2, value: o2, unit: c2, year: s2, month: v.monthMod(a3) });
      for (var f2 = o2 + 1, x2 = l2, b2 = 0, m2 = 1; b2 < n2; b2++, m2++) {
        0 === (f2 = v.monthMod(f2)) ? (c2 = "year", d2 += 1) : c2 = "month";
        var y2 = this._getYear(s2, f2, d2);
        x2 = h2.determineDaysOfMonths(f2, y2) * r2 + x2;
        var w2 = 0 === f2 ? y2 : f2;
        this.timeScaleArray.push({ position: x2, value: w2, unit: c2, year: y2, month: 0 === f2 ? 1 : f2 }), f2++;
      }
    } }, { key: "generateDayScale", value: function(t3) {
      var e2 = t3.firstVal, i3 = t3.currentMonth, a3 = t3.currentYear, s2 = t3.hoursWidthOnXAxis, r2 = t3.numberOfDays, n2 = new zi(this.ctx), o2 = "day", l2 = e2.minDate + 1, h2 = l2, c2 = function(t4, e3, i4) {
        return t4 > n2.determineDaysOfMonths(e3 + 1, i4) ? (h2 = 1, o2 = "month", u2 = e3 += 1, e3) : e3;
      }, d2 = (24 - e2.minHour) * s2, u2 = l2, g2 = c2(h2, i3, a3);
      0 === e2.minHour && 1 === e2.minDate ? (d2 = 0, u2 = v.monthMod(e2.minMonth), o2 = "month", h2 = e2.minDate) : 1 !== e2.minDate && 0 === e2.minHour && 0 === e2.minMinute && (d2 = 0, l2 = e2.minDate, u2 = l2, g2 = c2(h2 = l2, i3, a3), 1 !== u2 && (o2 = "day")), this.timeScaleArray.push({ position: d2, value: u2, unit: o2, year: this._getYear(a3, g2, 0), month: v.monthMod(g2), day: h2 });
      for (var p2 = d2, f2 = 0; f2 < r2; f2++) {
        o2 = "day", g2 = c2(h2 += 1, g2, this._getYear(a3, g2, 0));
        var x2 = this._getYear(a3, g2, 0);
        p2 = 24 * s2 + p2;
        var b2 = 1 === h2 ? v.monthMod(g2) : h2;
        this.timeScaleArray.push({ position: p2, value: b2, unit: o2, year: x2, month: v.monthMod(g2), day: b2 });
      }
    } }, { key: "generateHourScale", value: function(t3) {
      var e2 = t3.firstVal, i3 = t3.currentDate, a3 = t3.currentMonth, s2 = t3.currentYear, r2 = t3.minutesWidthOnXAxis, n2 = t3.numberOfHours, o2 = new zi(this.ctx), l2 = "hour", h2 = function(t4, e3) {
        return t4 > o2.determineDaysOfMonths(e3 + 1, s2) && (f2 = 1, e3 += 1), { month: e3, date: f2 };
      }, c2 = function(t4, e3) {
        return t4 > o2.determineDaysOfMonths(e3 + 1, s2) ? e3 += 1 : e3;
      }, d2 = 60 - (e2.minMinute + e2.minSecond / 60), u2 = d2 * r2, g2 = e2.minHour + 1, p2 = g2;
      60 === d2 && (u2 = 0, p2 = g2 = e2.minHour);
      var f2 = i3;
      p2 >= 24 && (p2 = 0, l2 = "day", g2 = f2 += 1);
      var x2 = h2(f2, a3).month;
      x2 = c2(f2, x2), g2 > 31 && (g2 = f2 = 1), this.timeScaleArray.push({ position: u2, value: g2, unit: l2, day: f2, hour: p2, year: s2, month: v.monthMod(x2) }), p2++;
      for (var b2 = u2, m2 = 0; m2 < n2; m2++) {
        if (l2 = "hour", p2 >= 24) p2 = 0, l2 = "day", x2 = h2(f2 += 1, x2).month, x2 = c2(f2, x2);
        var y2 = this._getYear(s2, x2, 0);
        b2 = 60 * r2 + b2;
        var w2 = 0 === p2 ? f2 : p2;
        this.timeScaleArray.push({ position: b2, value: w2, unit: l2, hour: p2, day: f2, year: y2, month: v.monthMod(x2) }), p2++;
      }
    } }, { key: "generateMinuteScale", value: function(t3) {
      for (var e2 = t3.currentMillisecond, i3 = t3.currentSecond, a3 = t3.currentMinute, s2 = t3.currentHour, r2 = t3.currentDate, n2 = t3.currentMonth, o2 = t3.currentYear, l2 = t3.minutesWidthOnXAxis, h2 = t3.secondsWidthOnXAxis, c2 = t3.numberOfMinutes, d2 = a3 + 1, u2 = r2, g2 = n2, p2 = o2, f2 = s2, x2 = (60 - i3 - e2 / 1e3) * h2, b2 = 0; b2 < c2; b2++) d2 >= 60 && (d2 = 0, 24 === (f2 += 1) && (f2 = 0)), this.timeScaleArray.push({ position: x2, value: d2, unit: "minute", hour: f2, minute: d2, day: u2, year: this._getYear(p2, g2, 0), month: v.monthMod(g2) }), x2 += l2, d2++;
    } }, { key: "generateSecondScale", value: function(t3) {
      for (var e2 = t3.currentMillisecond, i3 = t3.currentSecond, a3 = t3.currentMinute, s2 = t3.currentHour, r2 = t3.currentDate, n2 = t3.currentMonth, o2 = t3.currentYear, l2 = t3.secondsWidthOnXAxis, h2 = t3.numberOfSeconds, c2 = i3 + 1, d2 = a3, u2 = r2, g2 = n2, p2 = o2, f2 = s2, x2 = (1e3 - e2) / 1e3 * l2, b2 = 0; b2 < h2; b2++) c2 >= 60 && (c2 = 0, ++d2 >= 60 && (d2 = 0, 24 === ++f2 && (f2 = 0))), this.timeScaleArray.push({ position: x2, value: c2, unit: "second", hour: f2, minute: d2, second: c2, day: u2, year: this._getYear(p2, g2, 0), month: v.monthMod(g2) }), x2 += l2, c2++;
    } }, { key: "createRawDateString", value: function(t3, e2) {
      var i3 = t3.year;
      return 0 === t3.month && (t3.month = 1), i3 += "-" + ("0" + t3.month.toString()).slice(-2), "day" === t3.unit ? i3 += "day" === t3.unit ? "-" + ("0" + e2).slice(-2) : "-01" : i3 += "-" + ("0" + (t3.day ? t3.day : "1")).slice(-2), "hour" === t3.unit ? i3 += "hour" === t3.unit ? "T" + ("0" + e2).slice(-2) : "T00" : i3 += "T" + ("0" + (t3.hour ? t3.hour : "0")).slice(-2), "minute" === t3.unit ? i3 += ":" + ("0" + e2).slice(-2) : i3 += ":" + (t3.minute ? ("0" + t3.minute).slice(-2) : "00"), "second" === t3.unit ? i3 += ":" + ("0" + e2).slice(-2) : i3 += ":00", this.utc && (i3 += ".000Z"), i3;
    } }, { key: "formatDates", value: function(t3) {
      var e2 = this, i3 = this.w;
      return t3.map((function(t4) {
        var a3 = t4.value.toString(), s2 = new zi(e2.ctx), r2 = e2.createRawDateString(t4, a3), n2 = s2.getDate(s2.parseDate(r2));
        if (e2.utc || (n2 = s2.getDate(s2.parseDateWithTimezone(r2))), void 0 === i3.config.xaxis.labels.format) {
          var o2 = "dd MMM", l2 = i3.config.xaxis.labels.datetimeFormatter;
          "year" === t4.unit && (o2 = l2.year), "month" === t4.unit && (o2 = l2.month), "day" === t4.unit && (o2 = l2.day), "hour" === t4.unit && (o2 = l2.hour), "minute" === t4.unit && (o2 = l2.minute), "second" === t4.unit && (o2 = l2.second), a3 = s2.formatDate(n2, o2);
        } else a3 = s2.formatDate(n2, i3.config.xaxis.labels.format);
        return { dateString: r2, position: t4.position, value: a3, unit: t4.unit, year: t4.year, month: t4.month };
      }));
    } }, { key: "removeOverlappingTS", value: function(t3) {
      var e2, i3 = this, a3 = new Mi(this.ctx), s2 = false;
      t3.length > 0 && t3[0].value && t3.every((function(e3) {
        return e3.value.length === t3[0].value.length;
      })) && (s2 = true, e2 = a3.getTextRects(t3[0].value).width);
      var r2 = 0, n2 = t3.map((function(n3, o2) {
        if (o2 > 0 && i3.w.config.xaxis.labels.hideOverlappingLabels) {
          var l2 = s2 ? e2 : a3.getTextRects(t3[r2].value).width, h2 = t3[r2].position;
          return n3.position > h2 + l2 + 10 ? (r2 = o2, n3) : null;
        }
        return n3;
      }));
      return n2 = n2.filter((function(t4) {
        return null !== t4;
      }));
    } }, { key: "_getYear", value: function(t3, e2, i3) {
      return t3 + Math.floor(e2 / 12) + i3;
    } }]), t2;
  })(), Za = (function() {
    function t2(e2, a3) {
      i2(this, t2), this.ctx = a3, this.w = a3.w, this.el = e2;
    }
    return s(t2, [{ key: "setupElements", value: function() {
      var t3 = this.w, e2 = t3.globals, i3 = t3.config, a3 = i3.chart.type;
      e2.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].includes(a3), e2.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].includes(a3), e2.isBarHorizontal = ["bar", "rangeBar", "boxPlot"].includes(a3) && i3.plotOptions.bar.horizontal, e2.chartClass = ".apexcharts".concat(e2.chartID), e2.dom.baseEl = this.el, e2.dom.elWrap = document.createElement("div"), Mi.setAttrs(e2.dom.elWrap, { id: e2.chartClass.substring(1), class: "apexcharts-canvas ".concat(e2.chartClass.substring(1)) }), this.el.appendChild(e2.dom.elWrap), e2.dom.Paper = window.SVG().addTo(e2.dom.elWrap), e2.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(i3.chart.offsetX, ", ").concat(i3.chart.offsetY, ")") }), e2.dom.Paper.node.style.background = "dark" !== i3.theme.mode || i3.chart.background ? "light" !== i3.theme.mode || i3.chart.background ? i3.chart.background : "#fff" : "#343A3F", this.setSVGDimensions(), e2.dom.elLegendForeign = document.createElementNS(e2.SVGNS, "foreignObject"), Mi.setAttrs(e2.dom.elLegendForeign, { x: 0, y: 0, width: e2.svgWidth, height: e2.svgHeight }), e2.dom.elLegendWrap = document.createElement("div"), e2.dom.elLegendWrap.classList.add("apexcharts-legend"), e2.dom.elWrap.appendChild(e2.dom.elLegendWrap), e2.dom.Paper.node.appendChild(e2.dom.elLegendForeign), e2.dom.elGraphical = e2.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), e2.dom.elDefs = e2.dom.Paper.defs(), e2.dom.Paper.add(e2.dom.elGraphical), e2.dom.elGraphical.add(e2.dom.elDefs);
    } }, { key: "plotChartType", value: function(t3, e2) {
      var i3 = this.w, a3 = this.ctx, s2 = i3.config, r2 = i3.globals, n2 = { line: { series: [], i: [] }, area: { series: [], i: [] }, scatter: { series: [], i: [] }, bubble: { series: [], i: [] }, bar: { series: [], i: [] }, candlestick: { series: [], i: [] }, boxPlot: { series: [], i: [] }, rangeBar: { series: [], i: [] }, rangeArea: { series: [], seriesRangeEnd: [], i: [] } }, o2 = s2.chart.type || "line", l2 = null, h2 = 0;
      r2.series.forEach((function(e3, a4) {
        var s3, c3, d3 = "column" === (null === (s3 = t3[a4]) || void 0 === s3 ? void 0 : s3.type) ? "bar" : (null === (c3 = t3[a4]) || void 0 === c3 ? void 0 : c3.type) || ("column" === o2 ? "bar" : o2);
        n2[d3] ? ("rangeArea" === d3 ? (n2[d3].series.push(r2.seriesRangeStart[a4]), n2[d3].seriesRangeEnd.push(r2.seriesRangeEnd[a4])) : n2[d3].series.push(e3), n2[d3].i.push(a4), "bar" === d3 && (i3.globals.columnSeries = n2.bar)) : ["heatmap", "treemap", "pie", "donut", "polarArea", "radialBar", "radar"].includes(d3) ? l2 = d3 : console.warn("You have specified an unrecognized series type (".concat(d3, ").")), o2 !== d3 && "scatter" !== d3 && h2++;
      })), h2 > 0 && (l2 && console.warn("Chart or series type ".concat(l2, " cannot appear with other chart or series types.")), n2.bar.series.length > 0 && s2.plotOptions.bar.horizontal && (h2 -= n2.bar.series.length, n2.bar = { series: [], i: [] }, i3.globals.columnSeries = { series: [], i: [] }, console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))), r2.comboCharts || (r2.comboCharts = h2 > 0);
      var c2 = new Ga(a3, e2), d2 = new za(a3, e2);
      a3.pie = new Ya(a3);
      var u2 = new Oa(a3);
      a3.rangeBar = new Fa(a3, e2);
      var g2 = new Ha(a3), p2 = [];
      if (r2.comboCharts) {
        var x2, b2, m2 = new Pi(a3);
        if (n2.area.series.length > 0) (x2 = p2).push.apply(x2, f(m2.drawSeriesByGroup(n2.area, r2.areaGroups, "area", c2)));
        if (n2.bar.series.length > 0) if (s2.chart.stacked) {
          var v2 = new Ta(a3, e2);
          p2.push(v2.draw(n2.bar.series, n2.bar.i));
        } else a3.bar = new Ia(a3, e2), p2.push(a3.bar.draw(n2.bar.series, n2.bar.i));
        if (n2.rangeArea.series.length > 0 && p2.push(c2.draw(n2.rangeArea.series, "rangeArea", n2.rangeArea.i, n2.rangeArea.seriesRangeEnd)), n2.line.series.length > 0) (b2 = p2).push.apply(b2, f(m2.drawSeriesByGroup(n2.line, r2.lineGroups, "line", c2)));
        if (n2.candlestick.series.length > 0 && p2.push(d2.draw(n2.candlestick.series, "candlestick", n2.candlestick.i)), n2.boxPlot.series.length > 0 && p2.push(d2.draw(n2.boxPlot.series, "boxPlot", n2.boxPlot.i)), n2.rangeBar.series.length > 0 && p2.push(a3.rangeBar.draw(n2.rangeBar.series, n2.rangeBar.i)), n2.scatter.series.length > 0) {
          var y2 = new Ga(a3, e2, true);
          p2.push(y2.draw(n2.scatter.series, "scatter", n2.scatter.i));
        }
        if (n2.bubble.series.length > 0) {
          var w2 = new Ga(a3, e2, true);
          p2.push(w2.draw(n2.bubble.series, "bubble", n2.bubble.i));
        }
      } else switch (s2.chart.type) {
        case "line":
          p2 = c2.draw(r2.series, "line");
          break;
        case "area":
          p2 = c2.draw(r2.series, "area");
          break;
        case "bar":
          if (s2.chart.stacked) p2 = new Ta(a3, e2).draw(r2.series);
          else a3.bar = new Ia(a3, e2), p2 = a3.bar.draw(r2.series);
          break;
        case "candlestick":
          p2 = new za(a3, e2).draw(r2.series, "candlestick");
          break;
        case "boxPlot":
          p2 = new za(a3, e2).draw(r2.series, s2.chart.type);
          break;
        case "rangeBar":
          p2 = a3.rangeBar.draw(r2.series);
          break;
        case "rangeArea":
          p2 = c2.draw(r2.seriesRangeStart, "rangeArea", void 0, r2.seriesRangeEnd);
          break;
        case "heatmap":
          p2 = new Ra(a3, e2).draw(r2.series);
          break;
        case "treemap":
          p2 = new ja(a3, e2).draw(r2.series);
          break;
        case "pie":
        case "donut":
        case "polarArea":
          p2 = a3.pie.draw(r2.series);
          break;
        case "radialBar":
          p2 = u2.draw(r2.series);
          break;
        case "radar":
          p2 = g2.draw(r2.series);
          break;
        default:
          p2 = c2.draw(r2.series);
      }
      return p2;
    } }, { key: "setSVGDimensions", value: function() {
      var t3 = this.w, e2 = t3.globals, i3 = t3.config;
      i3.chart.width = i3.chart.width || "100%", i3.chart.height = i3.chart.height || "auto", e2.svgWidth = i3.chart.width, e2.svgHeight = i3.chart.height;
      var a3 = v.getDimensions(this.el), s2 = i3.chart.width.toString().split(/[0-9]+/g).pop();
      "%" === s2 ? v.isNumber(a3[0]) && (0 === a3[0].width && (a3 = v.getDimensions(this.el.parentNode)), e2.svgWidth = a3[0] * parseInt(i3.chart.width, 10) / 100) : "px" !== s2 && "" !== s2 || (e2.svgWidth = parseInt(i3.chart.width, 10));
      var r2 = String(i3.chart.height).toString().split(/[0-9]+/g).pop();
      if ("auto" !== e2.svgHeight && "" !== e2.svgHeight) if ("%" === r2) {
        var n2 = v.getDimensions(this.el.parentNode);
        e2.svgHeight = n2[1] * parseInt(i3.chart.height, 10) / 100;
      } else e2.svgHeight = parseInt(i3.chart.height, 10);
      else e2.svgHeight = e2.axisCharts ? e2.svgWidth / 1.61 : e2.svgWidth / 1.2;
      if (e2.svgWidth = Math.max(e2.svgWidth, 0), e2.svgHeight = Math.max(e2.svgHeight, 0), Mi.setAttrs(e2.dom.Paper.node, { width: e2.svgWidth, height: e2.svgHeight }), "%" !== r2) {
        var o2 = i3.chart.sparkline.enabled ? 0 : e2.axisCharts ? i3.chart.parentHeightOffset : 0;
        e2.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(e2.svgHeight + o2, "px");
      }
      e2.dom.elWrap.style.width = "".concat(e2.svgWidth, "px"), e2.dom.elWrap.style.height = "".concat(e2.svgHeight, "px");
    } }, { key: "shiftGraphPosition", value: function() {
      var t3 = this.w.globals, e2 = t3.translateY, i3 = t3.translateX;
      Mi.setAttrs(t3.dom.elGraphical.node, { transform: "translate(".concat(i3, ", ").concat(e2, ")") });
    } }, { key: "resizeNonAxisCharts", value: function() {
      var t3 = this.w, e2 = t3.globals, i3 = 0, a3 = t3.config.chart.sparkline.enabled ? 1 : 15;
      a3 += t3.config.grid.padding.bottom, ["top", "bottom"].includes(t3.config.legend.position) && t3.config.legend.show && !t3.config.legend.floating && (i3 = new ba(this.ctx).legendHelpers.getLegendDimensions().clwh + 7);
      var s2 = t3.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r2 = 2.05 * t3.globals.radialSize;
      if (s2 && !t3.config.chart.sparkline.enabled && 0 !== t3.config.plotOptions.radialBar.startAngle) {
        var n2 = v.getBoundingClientRect(s2);
        r2 = n2.bottom;
        var o2 = n2.bottom - n2.top;
        r2 = Math.max(2.05 * t3.globals.radialSize, o2);
      }
      var l2 = Math.ceil(r2 + e2.translateY + i3 + a3);
      e2.dom.elLegendForeign && e2.dom.elLegendForeign.setAttribute("height", l2), t3.config.chart.height && String(t3.config.chart.height).includes("%") || (e2.dom.elWrap.style.height = "".concat(l2, "px"), Mi.setAttrs(e2.dom.Paper.node, { height: l2 }), e2.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(l2, "px"));
    } }, { key: "coreCalculations", value: function() {
      new ia(this.ctx).init();
    } }, { key: "resetGlobals", value: function() {
      var t3 = this, e2 = function() {
        return t3.w.config.series.map((function() {
          return [];
        }));
      }, i3 = new Bi(), a3 = this.w.globals, s2 = { dataWasParsed: a3.dataWasParsed, originalSeries: a3.originalSeries };
      i3.initGlobalVars(a3), a3.seriesXvalues = e2(), a3.seriesYvalues = e2(), s2.dataWasParsed && (a3.dataWasParsed = s2.dataWasParsed, a3.originalSeries = s2.originalSeries);
    } }, { key: "isMultipleY", value: function() {
      return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = true, true);
    } }, { key: "xySettings", value: function() {
      var t3 = this.w, e2 = null;
      if (t3.globals.axisCharts) {
        if ("back" === t3.config.xaxis.crosshairs.position && new oa(this.ctx).drawXCrosshairs(), "back" === t3.config.yaxis[0].crosshairs.position && new oa(this.ctx).drawYCrosshairs(), "datetime" === t3.config.xaxis.type && void 0 === t3.config.xaxis.labels.formatter) {
          this.ctx.timeScale = new qa(this.ctx);
          var i3 = [];
          isFinite(t3.globals.minX) && isFinite(t3.globals.maxX) && !t3.globals.isBarHorizontal ? i3 = this.ctx.timeScale.calculateTimeScaleTicks(t3.globals.minX, t3.globals.maxX) : t3.globals.isBarHorizontal && (i3 = this.ctx.timeScale.calculateTimeScaleTicks(t3.globals.minY, t3.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i3);
        }
        e2 = new Pi(this.ctx).getCalculatedRatios();
      }
      return e2;
    } }, { key: "updateSourceChart", value: function(t3) {
      this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t3.w.globals.minX, max: t3.w.globals.maxX } } } }, false, false);
    } }, { key: "setupBrushHandler", value: function() {
      var t3 = this, e2 = this.ctx, i3 = this.w;
      if (i3.config.chart.brush.enabled && "function" != typeof i3.config.chart.events.selection) {
        var a3 = Array.isArray(i3.config.chart.brush.targets) ? i3.config.chart.brush.targets : [i3.config.chart.brush.target];
        a3.forEach((function(i4) {
          var a4 = e2.constructor.getChartByID(i4);
          a4.w.globals.brushSource = t3.ctx, "function" != typeof a4.w.config.chart.events.zoomed && (a4.w.config.chart.events.zoomed = function() {
            return t3.updateSourceChart(a4);
          }), "function" != typeof a4.w.config.chart.events.scrolled && (a4.w.config.chart.events.scrolled = function() {
            return t3.updateSourceChart(a4);
          });
        })), i3.config.chart.events.selection = function(t4, i4) {
          a3.forEach((function(t5) {
            e2.constructor.getChartByID(t5).ctx.updateHelpers._updateOptions({ xaxis: { min: i4.xaxis.min, max: i4.xaxis.max } }, false, false, false, false);
          }));
        };
      }
    } }]), t2;
  })(), $a = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "_updateOptions", value: function(t3) {
      var e2 = this, i3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return new Promise((function(n2) {
        var o2 = [e2.ctx];
        s2 && (o2 = e2.ctx.getSyncedCharts()), e2.ctx.w.globals.isExecCalled && (o2 = [e2.ctx], e2.ctx.w.globals.isExecCalled = false), o2.forEach((function(s3, l2) {
          var h2 = s3.w;
          if (h2.globals.shouldAnimate = a3, i3 || (h2.globals.resized = true, h2.globals.dataChanged = true, a3 && s3.series.getPreviousPaths()), t3 && "object" === b(t3) && (s3.config = new Wi(t3), t3 = Pi.extendArrayProps(s3.config, t3, h2), s3.w.globals.chartID !== e2.ctx.w.globals.chartID && delete t3.series, h2.config = v.extend(h2.config, t3), r2 && (h2.globals.lastXAxis = t3.xaxis ? v.clone(t3.xaxis) : [], h2.globals.lastYAxis = t3.yaxis ? v.clone(t3.yaxis) : [], h2.globals.initialConfig = v.extend({}, h2.config), h2.globals.initialSeries = v.clone(h2.config.series), t3.series))) {
            for (var c2 = 0; c2 < h2.globals.collapsedSeriesIndices.length; c2++) {
              var d2 = h2.config.series[h2.globals.collapsedSeriesIndices[c2]];
              h2.globals.collapsedSeries[c2].data = h2.globals.axisCharts ? d2.data.slice() : d2;
            }
            for (var u2 = 0; u2 < h2.globals.ancillaryCollapsedSeriesIndices.length; u2++) {
              var g2 = h2.config.series[h2.globals.ancillaryCollapsedSeriesIndices[u2]];
              h2.globals.ancillaryCollapsedSeries[u2].data = h2.globals.axisCharts ? g2.data.slice() : g2;
            }
            s3.series.emptyCollapsedSeries(h2.config.series);
          }
          return s3.update(t3).then((function() {
            l2 === o2.length - 1 && n2(s3);
          }));
        }));
      }));
    } }, { key: "_updateSeries", value: function(t3, e2) {
      var i3 = this, a3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return new Promise((function(s2) {
        var r2 = i3.w;
        return r2.globals.shouldAnimate = e2, r2.globals.dataChanged = true, e2 && i3.ctx.series.getPreviousPaths(), i3.ctx.data.resetParsingFlags(), i3.ctx.data.parseData(t3), a3 && (r2.globals.initialConfig.series = v.clone(r2.config.series), r2.globals.initialSeries = v.clone(r2.config.series)), i3.ctx.update().then((function() {
          s2(i3.ctx);
        }));
      }));
    } }, { key: "_extendSeries", value: function(t3, e2) {
      var i3 = this.w, a3 = i3.config.series[e2];
      return u(u({}, i3.config.series[e2]), {}, { name: t3.name ? t3.name : null == a3 ? void 0 : a3.name, color: t3.color ? t3.color : null == a3 ? void 0 : a3.color, type: t3.type ? t3.type : null == a3 ? void 0 : a3.type, group: t3.group ? t3.group : null == a3 ? void 0 : a3.group, hidden: void 0 !== t3.hidden ? t3.hidden : null == a3 ? void 0 : a3.hidden, data: t3.data ? t3.data : null == a3 ? void 0 : a3.data, zIndex: void 0 !== t3.zIndex ? t3.zIndex : e2 });
    } }, { key: "toggleDataPointSelection", value: function(t3, e2) {
      var i3 = this.w, a3 = null, s2 = ".apexcharts-series[data\\:realIndex='".concat(t3, "']");
      return i3.globals.axisCharts ? a3 = i3.globals.dom.Paper.findOne("".concat(s2, " path[j='").concat(e2, "'], ").concat(s2, " circle[j='").concat(e2, "'], ").concat(s2, " rect[j='").concat(e2, "']")) : void 0 === e2 && (a3 = i3.globals.dom.Paper.findOne("".concat(s2, " path[j='").concat(t3, "']")), "pie" !== i3.config.chart.type && "polarArea" !== i3.config.chart.type && "donut" !== i3.config.chart.type || this.ctx.pie.pieClicked(t3)), a3 ? (new Mi(this.ctx).pathMouseDown(a3, null), a3.node ? a3.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
    } }, { key: "forceXAxisUpdate", value: function(t3) {
      var e2 = this.w;
      if (["min", "max"].forEach((function(i4) {
        void 0 !== t3.xaxis[i4] && (e2.config.xaxis[i4] = t3.xaxis[i4], e2.globals.lastXAxis[i4] = t3.xaxis[i4]);
      })), t3.xaxis.categories && t3.xaxis.categories.length && (e2.config.xaxis.categories = t3.xaxis.categories), e2.config.xaxis.convertedCatToNumeric) {
        var i3 = new Ni(t3);
        t3 = i3.convertCatToNumericXaxis(t3, this.ctx);
      }
      return t3;
    } }, { key: "forceYAxisUpdate", value: function(t3) {
      return t3.chart && t3.chart.stacked && "100%" === t3.chart.stackType && (Array.isArray(t3.yaxis) ? t3.yaxis.forEach((function(e2, i3) {
        t3.yaxis[i3].min = 0, t3.yaxis[i3].max = 100;
      })) : (t3.yaxis.min = 0, t3.yaxis.max = 100)), t3;
    } }, { key: "revertDefaultAxisMinMax", value: function(t3) {
      var e2 = this, i3 = this.w, a3 = i3.globals.lastXAxis, s2 = i3.globals.lastYAxis;
      t3 && t3.xaxis && (a3 = t3.xaxis), t3 && t3.yaxis && (s2 = t3.yaxis), i3.config.xaxis.min = a3.min, i3.config.xaxis.max = a3.max;
      var r2 = function(t4) {
        void 0 !== s2[t4] && (i3.config.yaxis[t4].min = s2[t4].min, i3.config.yaxis[t4].max = s2[t4].max);
      };
      i3.config.yaxis.map((function(t4, a4) {
        i3.globals.zoomed || void 0 !== s2[a4] ? r2(a4) : void 0 !== e2.ctx.opts.yaxis[a4] && (t4.min = e2.ctx.opts.yaxis[a4].min, t4.max = e2.ctx.opts.yaxis[a4].max);
      }));
    } }]), t2;
  })();
  !(function() {
    function t2() {
      for (var t3 = arguments.length > 0 && arguments[0] !== h2 ? arguments[0] : [], s3 = arguments.length > 1 ? arguments[1] : h2, r2 = arguments.length > 2 ? arguments[2] : h2, n2 = arguments.length > 3 ? arguments[3] : h2, o2 = arguments.length > 4 ? arguments[4] : h2, l2 = arguments.length > 5 ? arguments[5] : h2, h2 = arguments.length > 6 ? arguments[6] : h2, c2 = t3.slice(s3, r2 || h2), d2 = n2.slice(o2, l2 || h2), u2 = 0, g2 = { pos: [0, 0], start: [0, 0] }, p2 = { pos: [0, 0], start: [0, 0] }; ; ) {
        if (c2[u2] = e2.call(g2, c2[u2]), d2[u2] = e2.call(p2, d2[u2]), c2[u2][0] != d2[u2][0] || "M" == c2[u2][0] || "A" == c2[u2][0] && (c2[u2][4] != d2[u2][4] || c2[u2][5] != d2[u2][5]) ? (Array.prototype.splice.apply(c2, [u2, 1].concat(a3.call(g2, c2[u2]))), Array.prototype.splice.apply(d2, [u2, 1].concat(a3.call(p2, d2[u2])))) : (c2[u2] = i3.call(g2, c2[u2]), d2[u2] = i3.call(p2, d2[u2])), ++u2 == c2.length && u2 == d2.length) break;
        u2 == c2.length && c2.push(["C", g2.pos[0], g2.pos[1], g2.pos[0], g2.pos[1], g2.pos[0], g2.pos[1]]), u2 == d2.length && d2.push(["C", p2.pos[0], p2.pos[1], p2.pos[0], p2.pos[1], p2.pos[0], p2.pos[1]]);
      }
      return { start: c2, dest: d2 };
    }
    function e2(t3) {
      switch (t3[0]) {
        case "z":
        case "Z":
          t3[0] = "L", t3[1] = this.start[0], t3[2] = this.start[1];
          break;
        case "H":
          t3[0] = "L", t3[2] = this.pos[1];
          break;
        case "V":
          t3[0] = "L", t3[2] = t3[1], t3[1] = this.pos[0];
          break;
        case "T":
          t3[0] = "Q", t3[3] = t3[1], t3[4] = t3[2], t3[1] = this.reflection[1], t3[2] = this.reflection[0];
          break;
        case "S":
          t3[0] = "C", t3[6] = t3[4], t3[5] = t3[3], t3[4] = t3[2], t3[3] = t3[1], t3[2] = this.reflection[1], t3[1] = this.reflection[0];
      }
      return t3;
    }
    function i3(t3) {
      var e3 = t3.length;
      return this.pos = [t3[e3 - 2], t3[e3 - 1]], -1 != "SCQT".indexOf(t3[0]) && (this.reflection = [2 * this.pos[0] - t3[e3 - 4], 2 * this.pos[1] - t3[e3 - 3]]), t3;
    }
    function a3(t3) {
      var e3 = [t3];
      switch (t3[0]) {
        case "M":
          return this.pos = this.start = [t3[1], t3[2]], e3;
        case "L":
          t3[5] = t3[3] = t3[1], t3[6] = t3[4] = t3[2], t3[1] = this.pos[0], t3[2] = this.pos[1];
          break;
        case "Q":
          t3[6] = t3[4], t3[5] = t3[3], t3[4] = 1 * t3[4] / 3 + 2 * t3[2] / 3, t3[3] = 1 * t3[3] / 3 + 2 * t3[1] / 3, t3[2] = 1 * this.pos[1] / 3 + 2 * t3[2] / 3, t3[1] = 1 * this.pos[0] / 3 + 2 * t3[1] / 3;
          break;
        case "A":
          e3 = (function(t4, e4) {
            var i4, a4, s3, r2, n2, o2, l2, h2, c2, d2, u2, g2, p2, f2, x2, b2, m2, v2, y2, w2, k2, A2, C2, S2, L2, M2, P2 = Math.abs(e4[1]), I2 = Math.abs(e4[2]), T2 = e4[3] % 360, z2 = e4[4], X2 = e4[5], R2 = e4[6], E2 = e4[7], Y2 = new bt(t4), H2 = new bt(R2, E2), O2 = [];
            if (0 === P2 || 0 === I2 || Y2.x === H2.x && Y2.y === H2.y) return [["C", Y2.x, Y2.y, H2.x, H2.y, H2.x, H2.y]];
            i4 = new bt((Y2.x - H2.x) / 2, (Y2.y - H2.y) / 2).transform(new vt().rotate(T2)), a4 = i4.x * i4.x / (P2 * P2) + i4.y * i4.y / (I2 * I2), a4 > 1 && (P2 *= a4 = Math.sqrt(a4), I2 *= a4);
            s3 = new vt().rotate(T2).scale(1 / P2, 1 / I2).rotate(-T2), Y2 = Y2.transform(s3), H2 = H2.transform(s3), r2 = [H2.x - Y2.x, H2.y - Y2.y], o2 = r2[0] * r2[0] + r2[1] * r2[1], n2 = Math.sqrt(o2), r2[0] /= n2, r2[1] /= n2, l2 = o2 < 4 ? Math.sqrt(1 - o2 / 4) : 0, z2 === X2 && (l2 *= -1);
            h2 = new bt((H2.x + Y2.x) / 2 + l2 * -r2[1], (H2.y + Y2.y) / 2 + l2 * r2[0]), c2 = new bt(Y2.x - h2.x, Y2.y - h2.y), d2 = new bt(H2.x - h2.x, H2.y - h2.y), u2 = Math.acos(c2.x / Math.sqrt(c2.x * c2.x + c2.y * c2.y)), c2.y < 0 && (u2 *= -1);
            g2 = Math.acos(d2.x / Math.sqrt(d2.x * d2.x + d2.y * d2.y)), d2.y < 0 && (g2 *= -1);
            X2 && u2 > g2 && (g2 += 2 * Math.PI);
            !X2 && u2 < g2 && (g2 -= 2 * Math.PI);
            for (f2 = Math.ceil(2 * Math.abs(u2 - g2) / Math.PI), b2 = [], m2 = u2, p2 = (g2 - u2) / f2, x2 = 4 * Math.tan(p2 / 4) / 3, k2 = 0; k2 <= f2; k2++) y2 = Math.cos(m2), v2 = Math.sin(m2), w2 = new bt(h2.x + y2, h2.y + v2), b2[k2] = [new bt(w2.x + x2 * v2, w2.y - x2 * y2), w2, new bt(w2.x - x2 * v2, w2.y + x2 * y2)], m2 += p2;
            for (b2[0][0] = b2[0][1].clone(), b2[b2.length - 1][2] = b2[b2.length - 1][1].clone(), s3 = new vt().rotate(T2).scale(P2, I2).rotate(-T2), k2 = 0, A2 = b2.length; k2 < A2; k2++) b2[k2][0] = b2[k2][0].transform(s3), b2[k2][1] = b2[k2][1].transform(s3), b2[k2][2] = b2[k2][2].transform(s3);
            for (k2 = 1, A2 = b2.length; k2 < A2; k2++) C2 = (w2 = b2[k2 - 1][2]).x, S2 = w2.y, L2 = (w2 = b2[k2][0]).x, M2 = w2.y, R2 = (w2 = b2[k2][1]).x, E2 = w2.y, O2.push(["C", C2, S2, L2, M2, R2, E2]);
            return O2;
          })(this.pos, t3), t3 = e3[0];
      }
      return t3[0] = "C", this.pos = [t3[5], t3[6]], this.reflection = [2 * t3[5] - t3[3], 2 * t3[6] - t3[4]], e3;
    }
    function s2() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e3 = arguments.length > 1 ? arguments[1] : void 0;
      if (false === e3) return false;
      for (var i4 = e3, a4 = t3.length; i4 < a4; ++i4) if ("M" == t3[i4][0]) return i4;
      return false;
    }
    Q(Ee, { morph: function(e3, i4, a4, r2, n2) {
      for (var o2 = this.parse(e3), l2 = this.parse(i4), h2 = 0, c2 = 0, d2 = false, u2 = false; false !== h2 || false !== c2; ) {
        var g2;
        d2 = s2(o2, false !== h2 && h2 + 1), u2 = s2(l2, false !== c2 && c2 + 1), false === h2 && (h2 = 0 == (g2 = new Ee(p2.start).bbox()).height || 0 == g2.width ? o2.push(o2[0]) - 1 : o2.push(["M", g2.x + g2.width / 2, g2.y + g2.height / 2]) - 1), false === c2 && (c2 = 0 == (g2 = new Ee(p2.dest).bbox()).height || 0 == g2.width ? l2.push(l2[0]) - 1 : l2.push(["M", g2.x + g2.width / 2, g2.y + g2.height / 2]) - 1);
        var p2 = t2(o2, h2, d2, l2, c2, u2);
        o2 = o2.slice(0, h2).concat(p2.start, false === d2 ? [] : o2.slice(d2)), l2 = l2.slice(0, c2).concat(p2.dest, false === u2 ? [] : l2.slice(u2)), h2 = false !== d2 && h2 + p2.start.length, c2 = false !== u2 && c2 + p2.dest.length;
      }
      this._array = o2, this.destination = new Ee(), this.destination._array = l2;
      var f2 = this.fromArray(o2.map((function(t3, e4) {
        var i5 = l2[e4].map((function(i6, s3) {
          return 0 === s3 ? i6 : r2.step(t3[s3], l2[e4][s3], a4, n2[e4], n2);
        }));
        return i5;
      })));
      return f2;
    } });
  })();
  const Ja = (t2) => (t2.changedTouches && (t2 = t2.changedTouches[0]), { x: t2.clientX, y: t2.clientY });
  class Qa {
    constructor(t2) {
      t2.remember("_draggable", this), this.el = t2, this.drag = this.drag.bind(this), this.startDrag = this.startDrag.bind(this), this.endDrag = this.endDrag.bind(this);
    }
    init(t2) {
      t2 ? (this.el.on("mousedown.drag", this.startDrag), this.el.on("touchstart.drag", this.startDrag, { passive: false })) : (this.el.off("mousedown.drag"), this.el.off("touchstart.drag"));
    }
    startDrag(t2) {
      const e2 = !t2.type.indexOf("mouse");
      if (e2 && 1 !== t2.which && 0 !== t2.buttons) return;
      if (this.el.dispatch("beforedrag", { event: t2, handler: this }).defaultPrevented) return;
      t2.preventDefault(), t2.stopPropagation(), this.init(false), this.box = this.el.bbox(), this.lastClick = this.el.point(Ja(t2));
      const i3 = (e2 ? "mouseup" : "touchend") + ".drag";
      zt(window, (e2 ? "mousemove" : "touchmove") + ".drag", this.drag, this, { passive: false }), zt(window, i3, this.endDrag, this, { passive: false }), this.el.fire("dragstart", { event: t2, handler: this, box: this.box });
    }
    drag(t2) {
      const { box: e2, lastClick: i3 } = this, a3 = this.el.point(Ja(t2)), s2 = a3.x - i3.x, r2 = a3.y - i3.y;
      if (!s2 && !r2) return e2;
      const n2 = e2.x + s2, o2 = e2.y + r2;
      this.box = new kt(n2, o2, e2.w, e2.h), this.lastClick = a3, this.el.dispatch("dragmove", { event: t2, handler: this, box: this.box }).defaultPrevented || this.move(n2, o2);
    }
    move(t2, e2) {
      "svg" === this.el.type ? gi.prototype.move.call(this.el, t2, e2) : this.el.move(t2, e2);
    }
    endDrag(t2) {
      this.drag(t2), this.el.fire("dragend", { event: t2, handler: this, box: this.box }), Xt(window, "mousemove.drag"), Xt(window, "touchmove.drag"), Xt(window, "mouseup.drag"), Xt(window, "touchend.drag"), this.init(true);
    }
  }
  /*!
    * @svgdotjs/svg.select.js - An extension of svg.js which allows to select elements with mouse
    * @version 4.0.1
    * https://github.com/svgdotjs/svg.select.js
    *
    * @copyright Ulrich-Matthias Schäfer
    * @license MIT
    *
    * BUILT: Mon Jul 01 2024 15:04:42 GMT+0200 (Central European Summer Time)
    */
  function Ka(t2, e2, i3, a3 = null) {
    return function(s2) {
      s2.preventDefault(), s2.stopPropagation();
      var r2 = s2.pageX || s2.touches[0].pageX, n2 = s2.pageY || s2.touches[0].pageY;
      e2.fire(t2, { x: r2, y: n2, event: s2, index: a3, points: i3 });
    };
  }
  function ts([t2, e2], { a: i3, b: a3, c: s2, d: r2, e: n2, f: o2 }) {
    return [t2 * i3 + e2 * s2 + n2, t2 * a3 + e2 * r2 + o2];
  }
  Q(Gt, { draggable(t2 = true) {
    return (this.remember("_draggable") || new Qa(this)).init(t2), this;
  } });
  let es = class {
    constructor(t2) {
      this.el = t2, t2.remember("_selectHandler", this), this.selection = new gi(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
      const e2 = F();
      this.observer = new e2.MutationObserver(this.mutationHandler);
    }
    init(t2) {
      this.createHandle = t2.createHandle || this.createHandleFn, this.createRot = t2.createRot || this.createRotFn, this.updateHandle = t2.updateHandle || this.updateHandleFn, this.updateRot = t2.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, { attributes: true });
    }
    active(t2, e2) {
      if (!t2) return this.selection.clear().remove(), void this.observer.disconnect();
      this.init(e2);
    }
    createSelection() {
      this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
    }
    updateSelection() {
      this.selection.get(0).plot(this.handlePoints);
    }
    createResizeHandles() {
      this.handlePoints.forEach(((t2, e2, i3) => {
        const a3 = this.order[e2];
        this.createHandle.call(this, this.selection, t2, e2, i3, a3), this.selection.get(e2 + 1).addClass("svg_select_handle svg_select_handle_" + a3).on("mousedown.selection touchstart.selection", Ka(a3, this.el, this.handlePoints, e2));
      }));
    }
    createHandleFn(t2) {
      t2.polyline();
    }
    updateHandleFn(t2, e2, i3, a3) {
      const s2 = a3.at(i3 - 1), r2 = a3[(i3 + 1) % a3.length], n2 = e2, o2 = [n2[0] - s2[0], n2[1] - s2[1]], l2 = [n2[0] - r2[0], n2[1] - r2[1]], h2 = Math.sqrt(o2[0] * o2[0] + o2[1] * o2[1]), c2 = Math.sqrt(l2[0] * l2[0] + l2[1] * l2[1]), d2 = [o2[0] / h2, o2[1] / h2], u2 = [l2[0] / c2, l2[1] / c2], g2 = [n2[0] - 10 * d2[0], n2[1] - 10 * d2[1]], p2 = [n2[0] - 10 * u2[0], n2[1] - 10 * u2[1]];
      t2.plot([g2, n2, p2]);
    }
    updateResizeHandles() {
      this.handlePoints.forEach(((t2, e2, i3) => {
        const a3 = this.order[e2];
        this.updateHandle.call(this, this.selection.get(e2 + 1), t2, e2, i3, a3);
      }));
    }
    createRotFn(t2) {
      t2.line(), t2.circle(5);
    }
    getPoint(t2) {
      return this.handlePoints[this.order.indexOf(t2)];
    }
    getPointHandle(t2) {
      return this.selection.get(this.order.indexOf(t2) + 1);
    }
    updateRotFn(t2, e2) {
      const i3 = this.getPoint("t");
      t2.get(0).plot(i3[0], i3[1], e2[0], e2[1]), t2.get(1).center(e2[0], e2[1]);
    }
    createRotationHandle() {
      const t2 = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", Ka("rot", this.el, this.handlePoints));
      this.createRot.call(this, t2);
    }
    updateRotationHandle() {
      const t2 = this.selection.findOne("g.svg_select_handle_rot");
      this.updateRot(t2, this.rotationPoint, this.handlePoints);
    }
    updatePoints() {
      const t2 = this.el.bbox(), e2 = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
      this.handlePoints = this.getHandlePoints(t2).map(((t3) => ts(t3, e2))), this.rotationPoint = ts(this.getRotationPoint(t2), e2);
    }
    getHandlePoints({ x: t2, x2: e2, y: i3, y2: a3, cx: s2, cy: r2 } = this.el.bbox()) {
      return [[t2, i3], [s2, i3], [e2, i3], [e2, r2], [e2, a3], [s2, a3], [t2, a3], [t2, r2]];
    }
    getRotationPoint({ y: t2, cx: e2 } = this.el.bbox()) {
      return [e2, t2 - 20];
    }
    mutationHandler() {
      this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
    }
  };
  const is = (t2) => function(e2 = true, i3 = {}) {
    "object" == typeof e2 && (i3 = e2, e2 = true);
    let a3 = this.remember("_" + t2.name);
    return a3 || (e2.prototype instanceof es ? (a3 = new e2(this), e2 = true) : a3 = new t2(this), this.remember("_" + t2.name, a3)), a3.active(e2, i3), this;
  };
  /*!
    * @svgdotjs/svg.resize.js - An extension for svg.js which allows to resize elements which are selected
    * @version 2.0.4
    * https://github.com/svgdotjs/svg.resize.js
    *
    * @copyright [object Object]
    * @license MIT
    *
    * BUILT: Fri Sep 13 2024 12:43:14 GMT+0200 (Central European Summer Time)
    */
  /*!
    * @svgdotjs/svg.select.js - An extension of svg.js which allows to select elements with mouse
    * @version 4.0.1
    * https://github.com/svgdotjs/svg.select.js
    *
    * @copyright Ulrich-Matthias Schäfer
    * @license MIT
    *
    * BUILT: Mon Jul 01 2024 15:04:42 GMT+0200 (Central European Summer Time)
    */
  function as(t2, e2, i3, a3 = null) {
    return function(s2) {
      s2.preventDefault(), s2.stopPropagation();
      var r2 = s2.pageX || s2.touches[0].pageX, n2 = s2.pageY || s2.touches[0].pageY;
      e2.fire(t2, { x: r2, y: n2, event: s2, index: a3, points: i3 });
    };
  }
  function ss([t2, e2], { a: i3, b: a3, c: s2, d: r2, e: n2, f: o2 }) {
    return [t2 * i3 + e2 * s2 + n2, t2 * a3 + e2 * r2 + o2];
  }
  Q(Gt, { select: is(es) }), Q([Ge, je, xe], { pointSelect: is(class {
    constructor(t2) {
      this.el = t2, t2.remember("_pointSelectHandler", this), this.selection = new gi(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
      const e2 = F();
      this.observer = new e2.MutationObserver(this.mutationHandler);
    }
    init(t2) {
      this.createHandle = t2.createHandle || this.createHandleFn, this.updateHandle = t2.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, { attributes: true });
    }
    active(t2, e2) {
      if (!t2) return this.selection.clear().remove(), void this.observer.disconnect();
      this.init(e2);
    }
    createSelection() {
      this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
    }
    updateSelection() {
      this.selection.get(0).plot(this.points);
    }
    createPointHandles() {
      this.points.forEach(((t2, e2, i3) => {
        this.createHandle.call(this, this.selection, t2, e2, i3), this.selection.get(e2 + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", Ka("point", this.el, this.points, e2));
      }));
    }
    createHandleFn(t2) {
      t2.circle(5);
    }
    updateHandleFn(t2, e2) {
      t2.center(e2[0], e2[1]);
    }
    updatePointHandles() {
      this.points.forEach(((t2, e2, i3) => {
        this.updateHandle.call(this, this.selection.get(e2 + 1), t2, e2, i3);
      }));
    }
    updatePoints() {
      const t2 = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
      this.points = this.el.array().map(((e2) => ts(e2, t2)));
    }
    mutationHandler() {
      this.updatePoints(), this.updateSelection(), this.updatePointHandles();
    }
  }) });
  class rs {
    constructor(t2) {
      this.el = t2, t2.remember("_selectHandler", this), this.selection = new gi(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
      const e2 = F();
      this.observer = new e2.MutationObserver(this.mutationHandler);
    }
    init(t2) {
      this.createHandle = t2.createHandle || this.createHandleFn, this.createRot = t2.createRot || this.createRotFn, this.updateHandle = t2.updateHandle || this.updateHandleFn, this.updateRot = t2.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, { attributes: true });
    }
    active(t2, e2) {
      if (!t2) return this.selection.clear().remove(), void this.observer.disconnect();
      this.init(e2);
    }
    createSelection() {
      this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
    }
    updateSelection() {
      this.selection.get(0).plot(this.handlePoints);
    }
    createResizeHandles() {
      this.handlePoints.forEach(((t2, e2, i3) => {
        const a3 = this.order[e2];
        this.createHandle.call(this, this.selection, t2, e2, i3, a3), this.selection.get(e2 + 1).addClass("svg_select_handle svg_select_handle_" + a3).on("mousedown.selection touchstart.selection", as(a3, this.el, this.handlePoints, e2));
      }));
    }
    createHandleFn(t2) {
      t2.polyline();
    }
    updateHandleFn(t2, e2, i3, a3) {
      const s2 = a3.at(i3 - 1), r2 = a3[(i3 + 1) % a3.length], n2 = e2, o2 = [n2[0] - s2[0], n2[1] - s2[1]], l2 = [n2[0] - r2[0], n2[1] - r2[1]], h2 = Math.sqrt(o2[0] * o2[0] + o2[1] * o2[1]), c2 = Math.sqrt(l2[0] * l2[0] + l2[1] * l2[1]), d2 = [o2[0] / h2, o2[1] / h2], u2 = [l2[0] / c2, l2[1] / c2], g2 = [n2[0] - 10 * d2[0], n2[1] - 10 * d2[1]], p2 = [n2[0] - 10 * u2[0], n2[1] - 10 * u2[1]];
      t2.plot([g2, n2, p2]);
    }
    updateResizeHandles() {
      this.handlePoints.forEach(((t2, e2, i3) => {
        const a3 = this.order[e2];
        this.updateHandle.call(this, this.selection.get(e2 + 1), t2, e2, i3, a3);
      }));
    }
    createRotFn(t2) {
      t2.line(), t2.circle(5);
    }
    getPoint(t2) {
      return this.handlePoints[this.order.indexOf(t2)];
    }
    getPointHandle(t2) {
      return this.selection.get(this.order.indexOf(t2) + 1);
    }
    updateRotFn(t2, e2) {
      const i3 = this.getPoint("t");
      t2.get(0).plot(i3[0], i3[1], e2[0], e2[1]), t2.get(1).center(e2[0], e2[1]);
    }
    createRotationHandle() {
      const t2 = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", as("rot", this.el, this.handlePoints));
      this.createRot.call(this, t2);
    }
    updateRotationHandle() {
      const t2 = this.selection.findOne("g.svg_select_handle_rot");
      this.updateRot(t2, this.rotationPoint, this.handlePoints);
    }
    updatePoints() {
      const t2 = this.el.bbox(), e2 = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
      this.handlePoints = this.getHandlePoints(t2).map(((t3) => ss(t3, e2))), this.rotationPoint = ss(this.getRotationPoint(t2), e2);
    }
    getHandlePoints({ x: t2, x2: e2, y: i3, y2: a3, cx: s2, cy: r2 } = this.el.bbox()) {
      return [[t2, i3], [s2, i3], [e2, i3], [e2, r2], [e2, a3], [s2, a3], [t2, a3], [t2, r2]];
    }
    getRotationPoint({ y: t2, cx: e2 } = this.el.bbox()) {
      return [e2, t2 - 20];
    }
    mutationHandler() {
      this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
    }
  }
  const ns = (t2) => function(e2 = true, i3 = {}) {
    "object" == typeof e2 && (i3 = e2, e2 = true);
    let a3 = this.remember("_" + t2.name);
    return a3 || (e2.prototype instanceof rs ? (a3 = new e2(this), e2 = true) : a3 = new t2(this), this.remember("_" + t2.name, a3)), a3.active(e2, i3), this;
  };
  Q(Gt, { select: ns(rs) }), Q([Ge, je, xe], { pointSelect: ns(class {
    constructor(t2) {
      this.el = t2, t2.remember("_pointSelectHandler", this), this.selection = new gi(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
      const e2 = F();
      this.observer = new e2.MutationObserver(this.mutationHandler);
    }
    init(t2) {
      this.createHandle = t2.createHandle || this.createHandleFn, this.updateHandle = t2.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, { attributes: true });
    }
    active(t2, e2) {
      if (!t2) return this.selection.clear().remove(), void this.observer.disconnect();
      this.init(e2);
    }
    createSelection() {
      this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
    }
    updateSelection() {
      this.selection.get(0).plot(this.points);
    }
    createPointHandles() {
      this.points.forEach(((t2, e2, i3) => {
        this.createHandle.call(this, this.selection, t2, e2, i3), this.selection.get(e2 + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", as("point", this.el, this.points, e2));
      }));
    }
    createHandleFn(t2) {
      t2.circle(5);
    }
    updateHandleFn(t2, e2) {
      t2.center(e2[0], e2[1]);
    }
    updatePointHandles() {
      this.points.forEach(((t2, e2, i3) => {
        this.updateHandle.call(this, this.selection.get(e2 + 1), t2, e2, i3);
      }));
    }
    updatePoints() {
      const t2 = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
      this.points = this.el.array().map(((e2) => ss(e2, t2)));
    }
    mutationHandler() {
      this.updatePoints(), this.updateSelection(), this.updatePointHandles();
    }
  }) });
  const os = (t2) => (t2.changedTouches && (t2 = t2.changedTouches[0]), { x: t2.clientX, y: t2.clientY }), ls = (t2) => {
    let e2 = 1 / 0, i3 = 1 / 0, a3 = -1 / 0, s2 = -1 / 0;
    for (let r2 = 0; r2 < t2.length; r2++) {
      const n2 = t2[r2];
      e2 = Math.min(e2, n2[0]), i3 = Math.min(i3, n2[1]), a3 = Math.max(a3, n2[0]), s2 = Math.max(s2, n2[1]);
    }
    return new kt(e2, i3, a3 - e2, s2 - i3);
  };
  class hs {
    constructor(t2) {
      this.el = t2, t2.remember("_ResizeHandler", this), this.lastCoordinates = null, this.eventType = "", this.lastEvent = null, this.handleResize = this.handleResize.bind(this), this.resize = this.resize.bind(this), this.endResize = this.endResize.bind(this), this.rotate = this.rotate.bind(this), this.movePoint = this.movePoint.bind(this);
    }
    active(t2, e2) {
      this.preserveAspectRatio = e2.preserveAspectRatio ?? false, this.aroundCenter = e2.aroundCenter ?? false, this.grid = e2.grid ?? 0, this.degree = e2.degree ?? 0, this.el.off(".resize"), t2 && (this.el.on(["lt.resize", "rt.resize", "rb.resize", "lb.resize", "t.resize", "r.resize", "b.resize", "l.resize", "rot.resize", "point.resize"], this.handleResize), this.lastEvent && ("rot" === this.eventType ? this.rotate(this.lastEvent) : "point" === this.eventType ? this.movePoint(this.lastEvent) : this.resize(this.lastEvent)));
    }
    handleResize(t2) {
      this.eventType = t2.type;
      const { event: e2, index: i3, points: a3 } = t2.detail, s2 = !e2.type.indexOf("mouse");
      if (s2 && 1 !== (e2.which || e2.buttons)) return;
      if (this.el.dispatch("beforeresize", { event: t2, handler: this }).defaultPrevented) return;
      this.box = this.el.bbox(), this.startPoint = this.el.point(os(e2)), this.index = i3, this.points = a3.slice();
      const r2 = (s2 ? "mousemove" : "touchmove") + ".resize", n2 = (s2 ? "mouseup" : "touchcancel.resize touchend") + ".resize";
      "point" === t2.type ? zt(window, r2, this.movePoint) : "rot" === t2.type ? zt(window, r2, this.rotate) : zt(window, r2, this.resize), zt(window, n2, this.endResize);
    }
    resize(t2) {
      this.lastEvent = t2;
      const e2 = this.snapToGrid(this.el.point(os(t2)));
      let i3 = e2.x - this.startPoint.x, a3 = e2.y - this.startPoint.y;
      this.preserveAspectRatio && this.aroundCenter && (i3 *= 2, a3 *= 2);
      const s2 = this.box.x + i3, r2 = this.box.y + a3, n2 = this.box.x2 + i3, o2 = this.box.y2 + a3;
      let l2 = new kt(this.box);
      if (this.eventType.includes("l") && (l2.x = Math.min(s2, this.box.x2), l2.x2 = Math.max(s2, this.box.x2)), this.eventType.includes("r") && (l2.x = Math.min(n2, this.box.x), l2.x2 = Math.max(n2, this.box.x)), this.eventType.includes("t") && (l2.y = Math.min(r2, this.box.y2), l2.y2 = Math.max(r2, this.box.y2)), this.eventType.includes("b") && (l2.y = Math.min(o2, this.box.y), l2.y2 = Math.max(o2, this.box.y)), l2.width = l2.x2 - l2.x, l2.height = l2.y2 - l2.y, this.preserveAspectRatio) {
        const t3 = l2.width / this.box.width, e3 = l2.height / this.box.height, i4 = ["lt", "t", "rt", "r", "rb", "b", "lb", "l"], a4 = (i4.indexOf(this.eventType) + 4) % i4.length, s3 = this.aroundCenter ? [this.box.cx, this.box.cy] : this.points[a4];
        let r3 = this.eventType.includes("t") || this.eventType.includes("b") ? e3 : t3;
        r3 = 2 === this.eventType.length ? Math.max(t3, e3) : r3, l2 = (function(t4, e4, i5) {
          const a5 = [[t4.x, t4.y], [t4.x + t4.width, t4.y], [t4.x + t4.width, t4.y + t4.height], [t4.x, t4.y + t4.height]].map((([t5, a6]) => {
            const s4 = t5 - e4[0], r4 = (a6 - e4[1]) * i5;
            return [s4 * i5 + e4[0], r4 + e4[1]];
          }));
          return ls(a5);
        })(this.box, s3, r3);
      }
      this.el.dispatch("resize", { box: new kt(l2), angle: 0, eventType: this.eventType, event: t2, handler: this }).defaultPrevented || this.el.size(l2.width, l2.height).move(l2.x, l2.y);
    }
    movePoint(t2) {
      this.lastEvent = t2;
      const { x: e2, y: i3 } = this.snapToGrid(this.el.point(os(t2))), a3 = this.el.array().slice();
      a3[this.index] = [e2, i3], this.el.dispatch("resize", { box: ls(a3), angle: 0, eventType: this.eventType, event: t2, handler: this }).defaultPrevented || this.el.plot(a3);
    }
    rotate(t2) {
      this.lastEvent = t2;
      const e2 = this.startPoint, i3 = this.el.point(os(t2)), { cx: a3, cy: s2 } = this.box, r2 = e2.x - a3, n2 = e2.y - s2, o2 = i3.x - a3, l2 = i3.y - s2, h2 = Math.sqrt(r2 * r2 + n2 * n2) * Math.sqrt(o2 * o2 + l2 * l2);
      if (0 === h2) return;
      let c2 = Math.acos((r2 * o2 + n2 * l2) / h2) / Math.PI * 180;
      if (!c2) return;
      i3.x < e2.x && (c2 = -c2);
      const d2 = new vt(this.el), { x: u2, y: g2 } = new bt(a3, s2).transformO(d2), { rotate: p2 } = d2.decompose(), f2 = this.snapToAngle(p2 + c2) - p2;
      this.el.dispatch("resize", { box: this.box, angle: f2, eventType: this.eventType, event: t2, handler: this }).defaultPrevented || this.el.transform(d2.rotateO(f2, u2, g2));
    }
    endResize(t2) {
      "rot" !== this.eventType && "point" !== this.eventType && this.resize(t2), this.lastEvent = null, this.eventType = "", Xt(window, "mousemove.resize touchmove.resize"), Xt(window, "mouseup.resize touchend.resize");
    }
    snapToGrid(t2) {
      return this.grid && (t2.x = Math.round(t2.x / this.grid) * this.grid, t2.y = Math.round(t2.y / this.grid) * this.grid), t2;
    }
    snapToAngle(t2) {
      return this.degree && (t2 = Math.round(t2 / this.degree) * this.degree), t2;
    }
  }
  Q(Gt, { resize: function(t2 = true, e2 = {}) {
    "object" == typeof t2 && (e2 = t2, t2 = true);
    let i3 = this.remember("_ResizeHandler");
    return i3 || (t2.prototype instanceof hs ? (i3 = new t2(this), t2 = true) : i3 = new hs(this), this.remember("_resizeHandler", i3)), i3.active(t2, e2), this;
  } }), void 0 === window.SVG && (window.SVG = yi), void 0 === window.Apex && (window.Apex = {});
  var cs = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "initModules", value: function() {
      this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "highlightSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new y(this.ctx), this.ctx.axes = new na(this.ctx), this.ctx.core = new Za(this.ctx.el, this.ctx), this.ctx.config = new Wi({}), this.ctx.data = new Ji(this.ctx), this.ctx.grid = new ta(this.ctx), this.ctx.graphics = new Mi(this.ctx), this.ctx.coreUtils = new Pi(this.ctx), this.ctx.crosshairs = new oa(this.ctx), this.ctx.events = new sa(this.ctx), this.ctx.exports = new Qi(this.ctx), this.ctx.fill = new ji(this.ctx), this.ctx.localization = new ra(this.ctx), this.ctx.options = new Oi(), this.ctx.responsive = new la(this.ctx), this.ctx.series = new $i(this.ctx), this.ctx.theme = new ha(this.ctx), this.ctx.formatters = new Xi(this.ctx), this.ctx.titleSubtitle = new ca(this.ctx), this.ctx.legend = new ba(this.ctx), this.ctx.toolbar = new ma(this.ctx), this.ctx.tooltip = new La(this.ctx), this.ctx.dimensions = new fa(this.ctx), this.ctx.updateHelpers = new $a(this.ctx), this.ctx.zoomPanSelection = new va(this.ctx), this.ctx.w.globals.tooltip = new La(this.ctx);
    } }]), t2;
  })(), ds = (function() {
    function t2(e2) {
      i2(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "clear", value: function(t3) {
      var e2 = t3.isUpdating;
      this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: e2 });
    } }, { key: "killSVG", value: function(t3) {
      t3.each((function() {
        this.removeClass("*"), this.off();
      }), true), t3.clear();
    } }, { key: "clearDomElements", value: function(t3) {
      var e2 = this, i3 = t3.isUpdating, a3 = this.w.globals.dom.Paper.node;
      a3.parentNode && a3.parentNode.parentNode && !i3 && (a3.parentNode.parentNode.style.minHeight = "unset");
      var s2 = this.w.globals.dom.baseEl;
      s2 && this.ctx.eventList.forEach((function(t4) {
        s2.removeEventListener(t4, e2.ctx.events.documentEvent);
      }));
      var r2 = this.w.globals.dom;
      if (null !== this.ctx.el) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
      this.killSVG(r2.Paper), r2.Paper.remove(), r2.elWrap = null, r2.elGraphical = null, r2.elLegendWrap = null, r2.elLegendForeign = null, r2.baseEl = null, r2.elGridRect = null, r2.elGridRectMask = null, r2.elGridRectBarMask = null, r2.elGridRectMarkerMask = null, r2.elForecastMask = null, r2.elNonForecastMask = null, r2.elDefs = null;
    } }]), t2;
  })(), us = /* @__PURE__ */ new WeakMap();
  var gs = (function() {
    function t2(e2, a3) {
      i2(this, t2), this.opts = a3, this.ctx = this, this.w = new Gi(a3).init(), this.el = e2, this.w.globals.cuid = v.randomId(), this.w.globals.chartID = this.w.config.chart.id ? v.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new cs(this).initModules(), this.lastUpdateOptions = null, this.create = v.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
    }
    return s(t2, [{ key: "render", value: function() {
      var t3 = this;
      return new Promise((function(e2, i3) {
        if (v.elementExists(t3.el)) {
          void 0 === Apex._chartInstances && (Apex._chartInstances = []), t3.w.config.chart.id && Apex._chartInstances.push({ id: t3.w.globals.chartID, group: t3.w.config.chart.group, chart: t3 }), t3.setLocale(t3.w.config.chart.defaultLocale);
          var a3 = t3.w.config.chart.events.beforeMount;
          "function" == typeof a3 && a3(t3, t3.w), t3.events.fireEvent("beforeMount", [t3, t3.w]), window.addEventListener("resize", t3.windowResizeHandler), (function(t4, e3) {
            var i4 = false;
            if (t4.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
              var a4 = t4.getBoundingClientRect();
              "none" !== t4.style.display && 0 !== a4.width || (i4 = true);
            }
            var s3 = new ResizeObserver((function(a5) {
              i4 && e3.call(t4, a5), i4 = true;
            }));
            t4.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t4.children).forEach((function(t5) {
              return s3.observe(t5);
            })) : s3.observe(t4), us.set(e3, s3);
          })(t3.el.parentNode, t3.parentResizeHandler);
          var s2 = t3.el.getRootNode && t3.el.getRootNode(), r2 = v.is("ShadowRoot", s2), n2 = t3.el.ownerDocument, o2 = r2 ? s2.getElementById("apexcharts-css") : n2.getElementById("apexcharts-css");
          if (!o2) {
            var l2;
            (o2 = document.createElement("style")).id = "apexcharts-css", o2.textContent = '@keyframes opaque {\n  0% {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n\n  0%,\n  to {\n    opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  direction: ltr !important;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\nrect.legend-mouseover-inactive,\n.legend-mouseover-inactive rect,\n.legend-mouseover-inactive path,\n.legend-mouseover-inactive circle,\n.legend-mouseover-inactive line,\n.legend-mouseover-inactive text.apexcharts-yaxis-title-text,\n.legend-mouseover-inactive text.apexcharts-yaxis-label {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, .96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, .8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, .7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-z-value:empty,\n.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  display: inline-block;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  line-height: 16px;\n  margin-right: 4px;\n  text-align: center;\n  vertical-align: middle;\n  color: inherit;\n}\n\n.apexcharts-tooltip-marker::before {\n  content: "";\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: currentcolor;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  font-size: 26px;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 14px;\n  font-weight: 900;\n}\n\n.apexcharts-tooltip-marker[shape="circle"]::before {\n  content: "\\25CF";\n}\n\n.apexcharts-tooltip-marker[shape="square"]::before,\n.apexcharts-tooltip-marker[shape="rect"]::before {\n  content: "\\25A0";\n  transform: translate(-1px, -2px);\n}\n\n.apexcharts-tooltip-marker[shape="line"]::before {\n  content: "\\2500";\n}\n\n.apexcharts-tooltip-marker[shape="diamond"]::before {\n  content: "\\25C6";\n  font-size: 28px;\n}\n\n.apexcharts-tooltip-marker[shape="triangle"]::before {\n  content: "\\25B2";\n  font-size: 22px;\n}\n\n.apexcharts-tooltip-marker[shape="cross"]::before {\n  content: "\\2715";\n  font-size: 18px;\n}\n\n.apexcharts-tooltip-marker[shape="plus"]::before {\n  content: "\\2715";\n  transform: rotate(45deg) translate(-1px, -1px);\n  font-size: 18px;\n}\n\n.apexcharts-tooltip-marker[shape="star"]::before {\n  content: "\\2605";\n  font-size: 18px;\n}\n\n.apexcharts-tooltip-marker[shape="sparkle"]::before {\n  content: "\\2726";\n  font-size: 20px;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,\n.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_shape {\n  stroke-width: 1;\n  stroke-dasharray: 10 10;\n  stroke: black;\n  stroke-opacity: 0.1;\n  pointer-events: none;\n  fill: none;\n}\n\n.svg_select_handle {\n  stroke-width: 3;\n  stroke: black;\n  fill: none;\n}\n\n.svg_select_handle_r {\n  cursor: e-resize;\n}\n\n.svg_select_handle_l {\n  cursor: w-resize;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,\n.apexcharts-pan-icon,\n.apexcharts-reset-icon,\n.apexcharts-selection-icon,\n.apexcharts-toolbar-custom-icon,\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,\n.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,\n.apexcharts-reset-icon,\n.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, .7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,\n.apexcharts-datalabel.apexcharts-element-hidden,\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value,\n.apexcharts-datalabels,\n.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-gridline,\n.apexcharts-line,\n.apexcharts-point-annotation-label,\n.apexcharts-radar-series path:not(.apexcharts-marker),\n.apexcharts-radar-series polygon,\n.apexcharts-toolbar svg,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-zoom-rect,\n.no-pointer-events {\n  pointer-events: none\n}\n\n.apexcharts-tooltip-active .apexcharts-marker {\n  transition: .15s ease all\n}\n\n.apexcharts-radar-series .apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,\n.resize-triggers,\n.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows {\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-disable-transitions * {\n  transition: none !important;\n}';
            var h2 = (null === (l2 = t3.opts.chart) || void 0 === l2 ? void 0 : l2.nonce) || t3.w.config.chart.nonce;
            h2 && o2.setAttribute("nonce", h2), r2 ? s2.prepend(o2) : false !== t3.w.config.chart.injectStyleSheet && n2.head.appendChild(o2);
          }
          var c2 = t3.create(t3.w.config.series, {});
          if (!c2) return e2(t3);
          t3.mount(c2).then((function() {
            "function" == typeof t3.w.config.chart.events.mounted && t3.w.config.chart.events.mounted(t3, t3.w), t3.events.fireEvent("mounted", [t3, t3.w]), e2(c2);
          })).catch((function(t4) {
            i3(t4);
          }));
        } else i3(new Error("Element not found"));
      }));
    } }, { key: "create", value: function(t3, e2) {
      var i3 = this, a3 = this.w;
      new cs(this).initModules();
      var s2 = this.w.globals;
      if (s2.noData = false, s2.animationEnded = false, !v.elementExists(this.el)) return s2.animationEnded = true, null;
      (this.responsive.checkResponsiveConfig(e2), a3.config.xaxis.convertedCatToNumeric) && new Ni(a3.config).convertCatToNumericXaxis(a3.config, this.ctx);
      if (this.core.setupElements(), "treemap" === a3.config.chart.type && (a3.config.grid.show = false, a3.config.yaxis[0].show = false), 0 === s2.svgWidth) return s2.animationEnded = true, null;
      var r2 = t3;
      t3.forEach((function(t4, e3) {
        t4.hidden && (r2 = i3.legend.legendHelpers.getSeriesAfterCollapsing({ realIndex: e3 }));
      }));
      var n2 = Pi.checkComboSeries(r2, a3.config.chart.type);
      s2.comboCharts = n2.comboCharts, s2.comboBarCount = n2.comboBarCount;
      var o2 = r2.every((function(t4) {
        return t4.data && 0 === t4.data.length;
      }));
      (0 === r2.length || o2 && s2.collapsedSeries.length < 1) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(r2), this.theme.init(), new Vi(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), s2.noData && s2.collapsedSeries.length !== s2.series.length && !a3.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), s2.axisCharts && (this.core.coreCalculations(), "category" !== a3.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = a3.globals.minX, this.ctx.toolbar.maxX = a3.globals.maxX), this.formatters.heatmapLabelFormatters(), new Pi(this).getLargestMarkerSize(), this.dimensions.plotCoords();
      var l2 = this.core.xySettings();
      this.grid.createGridMask();
      var h2 = this.core.plotChartType(r2, l2), c2 = new qi(this);
      return c2.bringForward(), a3.config.dataLabels.background.enabled && c2.dataLabelsBackground(), this.core.shiftGraphPosition(), a3.globals.dataPoints > 50 && a3.globals.dom.elWrap.classList.add("apexcharts-disable-transitions"), { elGraph: h2, xyRatios: l2, dimensions: { plot: { left: a3.globals.translateX, top: a3.globals.translateY, width: a3.globals.gridWidth, height: a3.globals.gridHeight } } };
    } }, { key: "mount", value: function() {
      var t3 = this, e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i3 = this, a3 = i3.w;
      return new Promise((function(s2, r2) {
        if (null === i3.el) return r2(new Error("Not enough data to display or target element not found"));
        (null === e2 || a3.globals.allSeriesCollapsed) && i3.series.handleNoData(), i3.grid = new ta(i3);
        var n2, o2, l2 = i3.grid.drawGrid();
        (i3.annotations = new Fi(i3), i3.annotations.drawImageAnnos(), i3.annotations.drawTextAnnos(), "back" === a3.config.grid.position) && (l2 && a3.globals.dom.elGraphical.add(l2.el), null != l2 && null !== (n2 = l2.elGridBorders) && void 0 !== n2 && n2.node && a3.globals.dom.elGraphical.add(l2.elGridBorders));
        if (Array.isArray(e2.elGraph)) for (var h2 = 0; h2 < e2.elGraph.length; h2++) a3.globals.dom.elGraphical.add(e2.elGraph[h2]);
        else a3.globals.dom.elGraphical.add(e2.elGraph);
        "front" === a3.config.grid.position && (l2 && a3.globals.dom.elGraphical.add(l2.el), null != l2 && null !== (o2 = l2.elGridBorders) && void 0 !== o2 && o2.node && a3.globals.dom.elGraphical.add(l2.elGridBorders));
        "front" === a3.config.xaxis.crosshairs.position && i3.crosshairs.drawXCrosshairs(), "front" === a3.config.yaxis[0].crosshairs.position && i3.crosshairs.drawYCrosshairs(), "treemap" !== a3.config.chart.type && i3.axes.drawAxis(a3.config.chart.type, l2);
        var c2 = new Ki(t3.ctx, l2), d2 = new aa(t3.ctx, l2);
        if (null !== l2 && (c2.xAxisLabelCorrections(l2.xAxisTickWidth), d2.setYAxisTextAlignments(), a3.config.yaxis.map((function(t4, e3) {
          -1 === a3.globals.ignoreYAxisIndexes.indexOf(e3) && d2.yAxisTitleRotate(e3, t4.opposite);
        }))), i3.annotations.drawAxesAnnotations(), !a3.globals.noData) {
          if (a3.config.tooltip.enabled && !a3.globals.noData && i3.w.globals.tooltip.drawTooltip(e2.xyRatios), a3.globals.axisCharts && (a3.globals.isXNumeric || a3.config.xaxis.convertedCatToNumeric || a3.globals.isRangeBar)) (a3.config.chart.zoom.enabled || a3.config.chart.selection && a3.config.chart.selection.enabled || a3.config.chart.pan && a3.config.chart.pan.enabled) && i3.zoomPanSelection.init({ xyRatios: e2.xyRatios });
          else {
            var u2 = a3.config.chart.toolbar.tools;
            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach((function(t4) {
              u2[t4] = false;
            }));
          }
          a3.config.chart.toolbar.show && !a3.globals.allSeriesCollapsed && i3.toolbar.createToolbar();
        }
        a3.globals.memory.methodsToExec.length > 0 && a3.globals.memory.methodsToExec.forEach((function(t4) {
          t4.method(t4.params, false, t4.context);
        })), a3.globals.axisCharts || a3.globals.noData || i3.core.resizeNonAxisCharts(), s2(i3);
      }));
    } }, { key: "destroy", value: function() {
      window.removeEventListener("resize", this.windowResizeHandler), (function(t4, e2) {
        var i3 = us.get(e2);
        i3 && (i3.disconnect(), us.delete(e2));
      })(this.el.parentNode, this.parentResizeHandler);
      var t3 = this.w.config.chart.id;
      t3 && Apex._chartInstances.forEach((function(e2, i3) {
        e2.id === v.escapeString(t3) && Apex._chartInstances.splice(i3, 1);
      })), new ds(this.ctx).clear({ isUpdating: false });
    } }, { key: "updateOptions", value: function(t3) {
      var e2 = this, i3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], n2 = this.w;
      return n2.globals.selection = void 0, this.lastUpdateOptions && JSON.stringify(this.lastUpdateOptions) === JSON.stringify(t3) ? this : (t3.series && (this.data.resetParsingFlags(), this.series.resetSeries(false, true, false), t3.series.length && t3.series[0].data && (t3.series = t3.series.map((function(t4, i4) {
        return e2.updateHelpers._extendSeries(t4, i4);
      }))), this.updateHelpers.revertDefaultAxisMinMax()), t3.xaxis && (t3 = this.updateHelpers.forceXAxisUpdate(t3)), t3.yaxis && (t3 = this.updateHelpers.forceYAxisUpdate(t3)), n2.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t3.theme && (t3 = this.theme.updateThemeOptions(t3)), this.updateHelpers._updateOptions(t3, i3, a3, s2, r2));
    } }, { key: "updateSeries", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      return this.data.resetParsingFlags(), this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t3, e2, i3);
    } }, { key: "appendSeries", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      this.data.resetParsingFlags();
      var a3 = this.w.config.series.slice();
      return a3.push(t3), this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a3, e2, i3);
    } }, { key: "appendData", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i3 = this;
      i3.data.resetParsingFlags(), i3.w.globals.dataChanged = true, i3.series.getPreviousPaths();
      for (var a3 = i3.w.config.series.slice(), s2 = 0; s2 < a3.length; s2++) if (null !== t3[s2] && void 0 !== t3[s2]) for (var r2 = 0; r2 < t3[s2].data.length; r2++) a3[s2].data.push(t3[s2].data[r2]);
      return i3.w.config.series = a3, e2 && (i3.w.globals.initialSeries = v.clone(i3.w.config.series)), this.update();
    } }, { key: "update", value: function(t3) {
      var e2 = this;
      return new Promise((function(i3, a3) {
        if (e2.lastUpdateOptions && JSON.stringify(e2.lastUpdateOptions) === JSON.stringify(t3)) return i3(e2);
        e2.lastUpdateOptions = v.clone(t3), new ds(e2.ctx).clear({ isUpdating: true });
        var s2 = e2.create(e2.w.config.series, t3);
        if (!s2) return i3(e2);
        e2.mount(s2).then((function() {
          "function" == typeof e2.w.config.chart.events.updated && e2.w.config.chart.events.updated(e2, e2.w), e2.events.fireEvent("updated", [e2, e2.w]), e2.w.globals.isDirty = true, i3(e2);
        })).catch((function(t4) {
          a3(t4);
        }));
      }));
    } }, { key: "getSyncedCharts", value: function() {
      var t3 = this.getGroupedCharts(), e2 = [this];
      return t3.length && (e2 = [], t3.forEach((function(t4) {
        e2.push(t4);
      }))), e2;
    } }, { key: "getGroupedCharts", value: function() {
      var t3 = this;
      return Apex._chartInstances.filter((function(t4) {
        if (t4.group) return true;
      })).map((function(e2) {
        return t3.w.config.chart.group === e2.group ? e2.chart : t3;
      }));
    } }, { key: "toggleSeries", value: function(t3) {
      return this.series.toggleSeries(t3);
    } }, { key: "highlightSeriesOnLegendHover", value: function(t3, e2) {
      return this.series.toggleSeriesOnHover(t3, e2);
    } }, { key: "showSeries", value: function(t3) {
      this.series.showSeries(t3);
    } }, { key: "hideSeries", value: function(t3) {
      this.series.hideSeries(t3);
    } }, { key: "highlightSeries", value: function(t3) {
      this.series.highlightSeries(t3);
    } }, { key: "isSeriesHidden", value: function(t3) {
      this.series.isSeriesHidden(t3);
    } }, { key: "resetSeries", value: function() {
      var t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.series.resetSeries(t3, e2);
    } }, { key: "addEventListener", value: function(t3, e2) {
      this.events.addEventListener(t3, e2);
    } }, { key: "removeEventListener", value: function(t3, e2) {
      this.events.removeEventListener(t3, e2);
    } }, { key: "addXaxisAnnotation", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a3 = this;
      i3 && (a3 = i3), a3.annotations.addXaxisAnnotationExternal(t3, e2, a3);
    } }, { key: "addYaxisAnnotation", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a3 = this;
      i3 && (a3 = i3), a3.annotations.addYaxisAnnotationExternal(t3, e2, a3);
    } }, { key: "addPointAnnotation", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a3 = this;
      i3 && (a3 = i3), a3.annotations.addPointAnnotationExternal(t3, e2, a3);
    } }, { key: "clearAnnotations", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, e2 = this;
      t3 && (e2 = t3), e2.annotations.clearAnnotations(e2);
    } }, { key: "removeAnnotation", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i3 = this;
      e2 && (i3 = e2), i3.annotations.removeAnnotation(i3, t3);
    } }, { key: "getChartArea", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
    } }, { key: "getSeriesTotalXRange", value: function(t3, e2) {
      return this.coreUtils.getSeriesTotalsXRange(t3, e2);
    } }, { key: "getHighestValueInSeries", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return new ia(this.ctx).getMinYMaxY(t3).highestY;
    } }, { key: "getLowestValueInSeries", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return new ia(this.ctx).getMinYMaxY(t3).lowestY;
    } }, { key: "getSeriesTotal", value: function() {
      return this.w.globals.seriesTotals;
    } }, { key: "toggleDataPointSelection", value: function(t3, e2) {
      return this.updateHelpers.toggleDataPointSelection(t3, e2);
    } }, { key: "zoomX", value: function(t3, e2) {
      this.ctx.toolbar.zoomUpdateOptions(t3, e2);
    } }, { key: "setLocale", value: function(t3) {
      this.localization.setCurrentLocaleValues(t3);
    } }, { key: "dataURI", value: function(t3) {
      return new Qi(this.ctx).dataURI(t3);
    } }, { key: "getSvgString", value: function(t3) {
      return new Qi(this.ctx).getSvgString(t3);
    } }, { key: "exportToCSV", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return new Qi(this.ctx).exportToCSV(t3);
    } }, { key: "paper", value: function() {
      return this.w.globals.dom.Paper;
    } }, { key: "_parentResizeCallback", value: function() {
      this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
    } }, { key: "_windowResize", value: function() {
      var t3 = this;
      clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout((function() {
        t3.w.globals.resized = true, t3.w.globals.dataChanged = false, t3.ctx.update();
      }), 150);
    } }, { key: "_windowResizeHandler", value: function() {
      var t3 = this.w.config.chart.redrawOnWindowResize;
      "function" == typeof t3 && (t3 = t3()), t3 && this._windowResize();
    } }], [{ key: "getChartByID", value: function(t3) {
      var e2 = v.escapeString(t3);
      if (Apex._chartInstances) {
        var i3 = Apex._chartInstances.filter((function(t4) {
          return t4.id === e2;
        }))[0];
        return i3 && i3.chart;
      }
    } }, { key: "initOnLoad", value: function() {
      for (var e2 = document.querySelectorAll("[data-apexcharts]"), i3 = 0; i3 < e2.length; i3++) {
        new t2(e2[i3], JSON.parse(e2[i3].getAttribute("data-options"))).render();
      }
    } }, { key: "exec", value: function(t3, e2) {
      var i3 = this.getChartByID(t3);
      if (i3) {
        i3.w.globals.isExecCalled = true;
        var a3 = null;
        if (-1 !== i3.publicMethods.indexOf(e2)) {
          for (var s2 = arguments.length, r2 = new Array(s2 > 2 ? s2 - 2 : 0), n2 = 2; n2 < s2; n2++) r2[n2 - 2] = arguments[n2];
          a3 = i3[e2].apply(i3, r2);
        }
        return a3;
      }
    } }, { key: "merge", value: function(t3, e2) {
      return v.extend(t3, e2);
    } }, { key: "getThemePalettes", value: function() {
      return { palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], palette2: ["#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800"], palette3: ["#33B2DF", "#546E7A", "#D4526E", "#13D8AA", "#A5978B"], palette4: ["#4ECDC4", "#C7F464", "#81D4FA", "#FD6A6A", "#546E7A"], palette5: ["#2B908F", "#F9A3A4", "#90EE7E", "#FA4443", "#69D2E7"], palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"], palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"], palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"], palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"], palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"] };
    } }]), t2;
  })();
  return gs;
}));
(function(window2) {
  function HTMLMagnifier(options) {
    const _this = this;
    _this.options = Object.assign({ zoom: 2, shape: "square", width: 200, height: 200 }, options);
    const magnifierTemplate = `<div class="magnifier" style="display: none;position: fixed;overflow: hidden;background-color: white;border: 1px solid #555;border-radius: 4px;z-index:10000;">
                               <div class="magnifier-content" style="top: 0px;left: 0px;margin-left: 0px;margin-top: 0px;overflow: visible;position: absolute;display: block;transform-origin: left top;-moz-transform-origin: left top;-ms-transform-origin: left top;-webkit-transform-origin: left top;-o-transform-origin: left top;user-select: none;-moz-user-select: none;-webkit-user-select: none;padding-top: 0px"></div>
                               <div class="magnifier-glass" style="position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;opacity: 0.0;-ms-filter: alpha(opacity=0);background-color: white;cursor: move;"></div>
                             </div>`;
    const MutationObserver = window2.MutationObserver || window2.WebKitMutationObserver;
    let magnifier, magnifierContent;
    let observerObj;
    let syncTimeout;
    let isVisible = false;
    let magnifierBody;
    let events = {};
    function setPosition(element, left, top) {
      element.style.left = `${left}px`;
      element.style.top = `${top}px`;
    }
    function setDimensions(element, width, height) {
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
    }
    function setupMagnifier() {
      switch (_this.options.shape) {
        case "square":
          setDimensions(magnifier, _this.options.width, _this.options.height);
          break;
        case "circle":
          setDimensions(magnifier, _this.options.width, _this.options.height);
          magnifier.style.borderRadius = "50%";
          break;
      }
      magnifierContent.style.WebkitTransform = magnifierContent.style.MozTransform = magnifierContent.style.OTransform = magnifierContent.style.MsTransform = magnifierContent.style.transform = `scale(${_this.options.zoom})`;
    }
    function isDescendant(parent, child) {
      let node = child;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
    function syncContent() {
      if (isVisible) {
        prepareContent();
        syncViewport();
        syncScrollBars();
      }
    }
    function syncContentQueued() {
      if (isVisible) {
        window2.clearTimeout(syncTimeout);
        syncTimeout = window2.setTimeout(syncContent, 100);
      }
    }
    function domChanged() {
      if (isVisible) {
        syncContentQueued();
      }
    }
    function unBindDOMObserver() {
      if (observerObj) {
        observerObj.disconnect();
        observerObj = null;
      }
      if (document.removeEventListener) {
        document.removeEventListener("DOMNodeInserted", domChanged, false);
        document.removeEventListener("DOMNodeRemoved", domChanged, false);
      }
    }
    function bindDOMObserver() {
      if (MutationObserver) {
        observerObj = new MutationObserver(function(mutations) {
          for (let i2 = 0; i2 < mutations.length; i2++) {
            if (!isDescendant(magnifier, mutations[i2].target)) {
              try {
                triggerEvent("checkMutation", mutations[i2]);
                domChanged();
                break;
              } catch (error) {
              }
            }
          }
        });
        observerObj.observe(document, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: [
            "class",
            "width",
            "height",
            "style"
          ],
          attributeOldValue: true
        });
      } else if (document.addEventListener) {
        document.addEventListener("DOMNodeInserted", domChanged, false);
        document.addEventListener("DOMNodeRemoved", domChanged, false);
      }
    }
    function triggerEvent(event, data) {
      const handlers = events[event];
      if (handlers) {
        for (let i2 = 0; i2 < handlers.length; i2++) {
          handlers[i2].call(_this, data);
        }
      }
    }
    function syncViewport() {
      const x1 = magnifier.offsetLeft;
      const y1 = magnifier.offsetTop;
      const x2 = document.body.scrollLeft;
      const y2 = document.body.scrollTop;
      const left = -x1 * _this.options.zoom - x2 * _this.options.zoom;
      const top = -y1 * _this.options.zoom - y2 * _this.options.zoom;
      setPosition(magnifierContent, left, top);
      triggerEvent("viewPortChanged", magnifierBody);
    }
    function removeSelectors(container, selector) {
      const elements = container.querySelectorAll(selector);
      if (elements.length > 0) {
        for (let i2 = 0; i2 < elements.length; i2++) {
          elements[i2].parentNode.removeChild(elements[i2]);
        }
      }
    }
    function prepareContent() {
      magnifierContent.innerHTML = "";
      const bodyOriginal = document.body;
      const bodyCopy = bodyOriginal.cloneNode(true);
      const color = bodyOriginal.style.backgroundColor;
      if (color) {
        magnifier.css("background-color", color);
      }
      bodyCopy.style.cursor = "auto";
      bodyCopy.style.paddingTop = "0px";
      bodyCopy.setAttribute("unselectable", "on");
      const canvasOriginal = bodyOriginal.querySelectorAll("canvas");
      const canvasCopy = bodyCopy.querySelectorAll("canvas");
      if (canvasOriginal.length > 0) {
        if (canvasOriginal.length === canvasCopy.length) {
          for (let i2 = 0; i2 < canvasOriginal.length; i2++) {
            let ctx = canvasCopy[i2].getContext("2d");
            try {
              ctx.drawImage(canvasOriginal[i2], 0, 0);
            } catch (error) {
            }
          }
        }
      }
      removeSelectors(bodyCopy, "script");
      removeSelectors(bodyCopy, "audio");
      removeSelectors(bodyCopy, "video");
      removeSelectors(bodyCopy, ".magnifier");
      triggerEvent("prepareContent", bodyCopy);
      magnifierContent.appendChild(bodyCopy);
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      setDimensions(magnifierContent, width, height);
      magnifierBody = magnifierContent.querySelector("body");
      triggerEvent("contentUpdated", magnifierBody);
    }
    function initScrollBars() {
      triggerEvent("initScrollBars", magnifierBody);
    }
    function syncScroll(ctrl) {
      const selectors = [];
      if (ctrl.getAttribute) {
        if (ctrl.getAttribute("id")) {
          selectors.push("#" + ctrl.getAttribute("id"));
        }
        if (ctrl.className) {
          selectors.push("." + ctrl.className.split(" ").join("."));
        }
        for (let i2 = 0; i2 < selectors.length; i2++) {
          let t = magnifierBody.querySelectorAll(selectors[i2]);
          if (t.length == 1) {
            t[0].scrollTop = ctrl.scrollTop;
            t[0].scrollLeft = ctrl.scrollLeft;
            return true;
          }
        }
      } else if (ctrl == document) {
        syncViewport();
      }
      return false;
    }
    function syncScrollBars(e) {
      if (isVisible) {
        if (e && e.target) {
          syncScroll(e.target);
        } else {
          let scrolled = [];
          let elements = document.querySelectorAll("div");
          for (let i2 = 0; i2 < elements.length; i2++) {
            if (elements[i2].scrollTop > 0) {
              scrolled.push(elements[i2]);
            }
          }
          for (let i2 = 0; i2 < scrolled.length; i2++) {
            if (!isDescendant(magnifier, scrolled[i2])) {
              syncScroll(scrolled[i2]);
            }
          }
        }
        triggerEvent("syncScrollBars", magnifierBody);
      }
    }
    function makeDraggable(ctrl, options2) {
      const _this2 = this;
      let dragObject = null;
      let dragHandler = null;
      options2 = options2 || {};
      options2.exclude = ["INPUT", "TEXTAREA", "SELECT", "A", "BUTTON"];
      if (options2.handler) {
        dragHandler = ctrl.querySelector(options2.handler);
      } else {
        dragHandler = ctrl;
      }
      function setPosition2(element, left, top) {
        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
      }
      let pos_y, pos_x, ofs_x, ofs_y;
      ctrl.style.cursor = "move";
      function downHandler(e) {
        const target = e.target || e.srcElement;
        const parent = target.parentNode;
        if (target && options2.exclude.indexOf(target.tagName.toUpperCase()) == -1) {
          if (!parent || options2.exclude.indexOf(parent.tagName.toUpperCase()) == -1) {
            dragObject = ctrl;
            const pageX = e.pageX || e.touches[0].pageX;
            const pageY = e.pageY || e.touches[0].pageY;
            ofs_x = dragObject.getBoundingClientRect().left - dragObject.offsetLeft;
            ofs_y = dragObject.getBoundingClientRect().top - dragObject.offsetTop;
            pos_x = pageX - (dragObject.getBoundingClientRect().left + document.body.scrollLeft);
            pos_y = pageY - (dragObject.getBoundingClientRect().top + document.body.scrollTop);
            e.preventDefault();
          }
        }
      }
      function moveHandler(e) {
        if (dragObject !== null) {
          const pageX = e.pageX || e.touches[0].pageX;
          const pageY = e.pageY || e.touches[0].pageY;
          const left = pageX - pos_x - ofs_x - document.body.scrollLeft;
          const top = pageY - pos_y - ofs_y - document.body.scrollTop;
          setPosition2(dragObject, left, top);
          if (options2.ondrag) {
            options2.ondrag.call(e);
          }
        }
      }
      function upHandler() {
        if (dragObject !== null) {
          dragObject = null;
        }
      }
      dragHandler.addEventListener("mousedown", function(e) {
        downHandler(e);
      });
      window2.addEventListener("mousemove", function(e) {
        moveHandler(e);
      });
      window2.addEventListener("mouseup", function(e) {
        upHandler(e);
      });
      dragHandler.addEventListener("touchstart", function(e) {
        downHandler(e);
      });
      window2.addEventListener("touchmove", function(e) {
        moveHandler(e);
      });
      window2.addEventListener("touchend", function(e) {
        upHandler(e);
      });
      return _this2;
    }
    function init() {
      const div = document.createElement("div");
      div.innerHTML = magnifierTemplate;
      magnifier = div.querySelector(".magnifier");
      document.body.appendChild(magnifier);
      magnifierContent = magnifier.querySelector(".magnifier-content");
      if (window2.addEventListener) {
        window2.addEventListener("resize", syncContent, false);
        window2.addEventListener("scroll", syncScrollBars, true);
      }
      makeDraggable(magnifier, { ondrag: syncViewport });
    }
    _this.setZoom = function(value2) {
      _this.options.zoom = value2;
      setupMagnifier();
    };
    _this.setShape = function(shape, width, height) {
      _this.options.shape = shape;
      if (width) {
        _this.options.width = width;
      }
      if (height) {
        _this.options.height = height;
      }
      setupMagnifier();
    };
    _this.setWidth = function(value2) {
      _this.options.width = value2;
      setupMagnifier();
    };
    _this.setHeight = function(value2) {
      _this.options.height = value2;
      setupMagnifier();
    };
    _this.getZoom = function() {
      return _this.options.zoom;
    };
    _this.getShape = function() {
      return _this.options.shape;
    };
    _this.getWidth = function() {
      return _this.options.width;
    };
    _this.getHeight = function() {
      return _this.options.height;
    };
    _this.isVisible = function() {
      return isVisible;
    };
    _this.on = function(event, callback) {
      events[event] = events[event] || [];
      events[event].push(callback);
    };
    _this.syncScrollBars = function() {
      syncScrollBars();
    };
    _this.syncContent = function() {
      syncContentQueued();
    };
    _this.hide = function() {
      unBindDOMObserver();
      magnifierContent.innerHTML = "";
      magnifier.style.display = "none";
      isVisible = false;
    };
    _this.show = function(event) {
      let left, top;
      if (event) {
        left = event.pageX - 20;
        top = event.pageY - 20;
      } else {
        left = 200;
        top = 200;
      }
      setupMagnifier();
      prepareContent();
      setPosition(magnifier, left, top);
      magnifier.style.display = "";
      syncViewport();
      syncScrollBars();
      initScrollBars();
      bindDOMObserver();
      isVisible = true;
    };
    init();
    return _this;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = HTMLMagnifier;
  else window2.HTMLMagnifier = HTMLMagnifier;
})(window);
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
;
(function() {
  var async2 = {};
  function noop() {
  }
  function identity(v) {
    return v;
  }
  function toBool(v) {
    return !!v;
  }
  function notId(v) {
    return !v;
  }
  var previous_async;
  var root = typeof self === "object" && self.self === self && self || typeof global === "object" && global.global === global && global || this;
  if (root != null) {
    previous_async = root.async;
  }
  async2.noConflict = function() {
    root.async = previous_async;
    return async2;
  };
  function only_once(fn) {
    return function() {
      if (fn === null) throw new Error("Callback was already called.");
      fn.apply(this, arguments);
      fn = null;
    };
  }
  function _once(fn) {
    return function() {
      if (fn === null) return;
      fn.apply(this, arguments);
      fn = null;
    };
  }
  var _toString = Object.prototype.toString;
  var _isArray = Array.isArray || function(obj) {
    return _toString.call(obj) === "[object Array]";
  };
  var _isObject = function(obj) {
    var type = typeof obj;
    return type === "function" || type === "object" && !!obj;
  };
  function _isArrayLike(arr) {
    return _isArray(arr) || // has a positive integer length property
    typeof arr.length === "number" && arr.length >= 0 && arr.length % 1 === 0;
  }
  function _arrayEach(arr, iterator) {
    var index = -1, length = arr.length;
    while (++index < length) {
      iterator(arr[index], index, arr);
    }
  }
  function _map(arr, iterator) {
    var index = -1, length = arr.length, result = Array(length);
    while (++index < length) {
      result[index] = iterator(arr[index], index, arr);
    }
    return result;
  }
  function _range(count) {
    return _map(Array(count), function(v, i2) {
      return i2;
    });
  }
  function _reduce(arr, iterator, memo) {
    _arrayEach(arr, function(x, i2, a2) {
      memo = iterator(memo, x, i2, a2);
    });
    return memo;
  }
  function _forEachOf(object, iterator) {
    _arrayEach(_keys(object), function(key) {
      iterator(object[key], key);
    });
  }
  function _indexOf(arr, item) {
    for (var i2 = 0; i2 < arr.length; i2++) {
      if (arr[i2] === item) return i2;
    }
    return -1;
  }
  var _keys = Object.keys || function(obj) {
    var keys = [];
    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
        keys.push(k);
      }
    }
    return keys;
  };
  function _keyIterator(coll) {
    var i2 = -1;
    var len;
    var keys;
    if (_isArrayLike(coll)) {
      len = coll.length;
      return function next() {
        i2++;
        return i2 < len ? i2 : null;
      };
    } else {
      keys = _keys(coll);
      len = keys.length;
      return function next() {
        i2++;
        return i2 < len ? keys[i2] : null;
      };
    }
  }
  function _restParam(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0);
      var rest = Array(length);
      for (var index = 0; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0:
          return func.call(this, rest);
        case 1:
          return func.call(this, arguments[0], rest);
      }
    };
  }
  function _withoutIndex(iterator) {
    return function(value2, index, callback) {
      return iterator(value2, callback);
    };
  }
  var _setImmediate = typeof setImmediate === "function" && setImmediate;
  var _delay = _setImmediate ? function(fn) {
    _setImmediate(fn);
  } : function(fn) {
    setTimeout(function() {
      fn();
    }, 0);
  };
  if (typeof process === "object" && typeof process.nextTick === "function") {
    async2.nextTick = process.nextTick;
  } else {
    async2.nextTick = _delay;
  }
  async2.setImmediate = _setImmediate ? _delay : async2.nextTick;
  async2.forEach = async2.each = function(arr, iterator, callback) {
    return async2.eachOf(arr, _withoutIndex(iterator), callback);
  };
  async2.forEachSeries = async2.eachSeries = function(arr, iterator, callback) {
    return async2.eachOfSeries(arr, _withoutIndex(iterator), callback);
  };
  async2.forEachLimit = async2.eachLimit = function(arr, limit, iterator, callback) {
    return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
  };
  async2.forEachOf = async2.eachOf = function(object, iterator, callback) {
    callback = _once(callback || noop);
    object = object || [];
    var iter = _keyIterator(object);
    var key, completed = 0;
    while ((key = iter()) != null) {
      completed += 1;
      iterator(object[key], key, only_once(done));
    }
    if (completed === 0) callback(null);
    function done(err) {
      completed--;
      if (err) {
        callback(err);
      } else if (key === null && completed <= 0) {
        callback(null);
      }
    }
  };
  async2.forEachOfSeries = async2.eachOfSeries = function(obj, iterator, callback) {
    callback = _once(callback || noop);
    obj = obj || [];
    var nextKey = _keyIterator(obj);
    var key = nextKey();
    function iterate() {
      var sync = true;
      if (key === null) {
        return callback(null);
      }
      iterator(obj[key], key, only_once(function(err) {
        if (err) {
          callback(err);
        } else {
          key = nextKey();
          if (key === null) {
            return callback(null);
          } else {
            if (sync) {
              async2.setImmediate(iterate);
            } else {
              iterate();
            }
          }
        }
      }));
      sync = false;
    }
    iterate();
  };
  async2.forEachOfLimit = async2.eachOfLimit = function(obj, limit, iterator, callback) {
    _eachOfLimit(limit)(obj, iterator, callback);
  };
  function _eachOfLimit(limit) {
    return function(obj, iterator, callback) {
      callback = _once(callback || noop);
      obj = obj || [];
      var nextKey = _keyIterator(obj);
      if (limit <= 0) {
        return callback(null);
      }
      var done = false;
      var running = 0;
      var errored = false;
      (function replenish() {
        if (done && running <= 0) {
          return callback(null);
        }
        while (running < limit && !errored) {
          var key = nextKey();
          if (key === null) {
            done = true;
            if (running <= 0) {
              callback(null);
            }
            return;
          }
          running += 1;
          iterator(obj[key], key, only_once(function(err) {
            running -= 1;
            if (err) {
              callback(err);
              errored = true;
            } else {
              replenish();
            }
          }));
        }
      })();
    };
  }
  function doParallel(fn) {
    return function(obj, iterator, callback) {
      return fn(async2.eachOf, obj, iterator, callback);
    };
  }
  function doParallelLimit(fn) {
    return function(obj, limit, iterator, callback) {
      return fn(_eachOfLimit(limit), obj, iterator, callback);
    };
  }
  function doSeries(fn) {
    return function(obj, iterator, callback) {
      return fn(async2.eachOfSeries, obj, iterator, callback);
    };
  }
  function _asyncMap(eachfn, arr, iterator, callback) {
    callback = _once(callback || noop);
    arr = arr || [];
    var results = _isArrayLike(arr) ? [] : {};
    eachfn(arr, function(value2, index, callback2) {
      iterator(value2, function(err, v) {
        results[index] = v;
        callback2(err);
      });
    }, function(err) {
      callback(err, results);
    });
  }
  async2.map = doParallel(_asyncMap);
  async2.mapSeries = doSeries(_asyncMap);
  async2.mapLimit = doParallelLimit(_asyncMap);
  async2.inject = async2.foldl = async2.reduce = function(arr, memo, iterator, callback) {
    async2.eachOfSeries(arr, function(x, i2, callback2) {
      iterator(memo, x, function(err, v) {
        memo = v;
        callback2(err);
      });
    }, function(err) {
      callback(err, memo);
    });
  };
  async2.foldr = async2.reduceRight = function(arr, memo, iterator, callback) {
    var reversed = _map(arr, identity).reverse();
    async2.reduce(reversed, memo, iterator, callback);
  };
  async2.transform = function(arr, memo, iterator, callback) {
    if (arguments.length === 3) {
      callback = iterator;
      iterator = memo;
      memo = _isArray(arr) ? [] : {};
    }
    async2.eachOf(arr, function(v, k, cb) {
      iterator(memo, v, k, cb);
    }, function(err) {
      callback(err, memo);
    });
  };
  function _filter(eachfn, arr, iterator, callback) {
    var results = [];
    eachfn(arr, function(x, index, callback2) {
      iterator(x, function(v) {
        if (v) {
          results.push({ index, value: x });
        }
        callback2();
      });
    }, function() {
      callback(_map(results.sort(function(a2, b) {
        return a2.index - b.index;
      }), function(x) {
        return x.value;
      }));
    });
  }
  async2.select = async2.filter = doParallel(_filter);
  async2.selectLimit = async2.filterLimit = doParallelLimit(_filter);
  async2.selectSeries = async2.filterSeries = doSeries(_filter);
  function _reject(eachfn, arr, iterator, callback) {
    _filter(eachfn, arr, function(value2, cb) {
      iterator(value2, function(v) {
        cb(!v);
      });
    }, callback);
  }
  async2.reject = doParallel(_reject);
  async2.rejectLimit = doParallelLimit(_reject);
  async2.rejectSeries = doSeries(_reject);
  function _createTester(eachfn, check, getResult) {
    return function(arr, limit, iterator, cb) {
      function done() {
        if (cb) cb(getResult(false, void 0));
      }
      function iteratee(x, _, callback) {
        if (!cb) return callback();
        iterator(x, function(v) {
          if (cb && check(v)) {
            cb(getResult(true, x));
            cb = iterator = false;
          }
          callback();
        });
      }
      if (arguments.length > 3) {
        eachfn(arr, limit, iteratee, done);
      } else {
        cb = iterator;
        iterator = limit;
        eachfn(arr, iteratee, done);
      }
    };
  }
  async2.any = async2.some = _createTester(async2.eachOf, toBool, identity);
  async2.someLimit = _createTester(async2.eachOfLimit, toBool, identity);
  async2.all = async2.every = _createTester(async2.eachOf, notId, notId);
  async2.everyLimit = _createTester(async2.eachOfLimit, notId, notId);
  function _findGetResult(v, x) {
    return x;
  }
  async2.detect = _createTester(async2.eachOf, identity, _findGetResult);
  async2.detectSeries = _createTester(async2.eachOfSeries, identity, _findGetResult);
  async2.detectLimit = _createTester(async2.eachOfLimit, identity, _findGetResult);
  async2.sortBy = function(arr, iterator, callback) {
    async2.map(arr, function(x, callback2) {
      iterator(x, function(err, criteria) {
        if (err) {
          callback2(err);
        } else {
          callback2(null, { value: x, criteria });
        }
      });
    }, function(err, results) {
      if (err) {
        return callback(err);
      } else {
        callback(null, _map(results.sort(comparator), function(x) {
          return x.value;
        }));
      }
    });
    function comparator(left, right) {
      var a2 = left.criteria, b = right.criteria;
      return a2 < b ? -1 : a2 > b ? 1 : 0;
    }
  };
  async2.auto = function(tasks, concurrency, callback) {
    if (!callback) {
      callback = concurrency;
      concurrency = null;
    }
    callback = _once(callback || noop);
    var keys = _keys(tasks);
    var remainingTasks = keys.length;
    if (!remainingTasks) {
      return callback(null);
    }
    if (!concurrency) {
      concurrency = remainingTasks;
    }
    var results = {};
    var runningTasks = 0;
    var listeners = [];
    function addListener(fn) {
      listeners.unshift(fn);
    }
    function removeListener(fn) {
      var idx = _indexOf(listeners, fn);
      if (idx >= 0) listeners.splice(idx, 1);
    }
    function taskComplete() {
      remainingTasks--;
      _arrayEach(listeners.slice(0), function(fn) {
        fn();
      });
    }
    addListener(function() {
      if (!remainingTasks) {
        callback(null, results);
      }
    });
    _arrayEach(keys, function(k) {
      var task = _isArray(tasks[k]) ? tasks[k] : [tasks[k]];
      var taskCallback = _restParam(function(err, args) {
        runningTasks--;
        if (args.length <= 1) {
          args = args[0];
        }
        if (err) {
          var safeResults = {};
          _forEachOf(results, function(val, rkey) {
            safeResults[rkey] = val;
          });
          safeResults[k] = args;
          callback(err, safeResults);
        } else {
          results[k] = args;
          async2.setImmediate(taskComplete);
        }
      });
      var requires = task.slice(0, task.length - 1);
      var len = requires.length;
      var dep;
      while (len--) {
        if (!(dep = tasks[requires[len]])) {
          throw new Error("Has inexistant dependency");
        }
        if (_isArray(dep) && _indexOf(dep, k) >= 0) {
          throw new Error("Has cyclic dependencies");
        }
      }
      function ready() {
        return runningTasks < concurrency && _reduce(requires, function(a2, x) {
          return a2 && results.hasOwnProperty(x);
        }, true) && !results.hasOwnProperty(k);
      }
      if (ready()) {
        runningTasks++;
        task[task.length - 1](taskCallback, results);
      } else {
        addListener(listener);
      }
      function listener() {
        if (ready()) {
          runningTasks++;
          removeListener(listener);
          task[task.length - 1](taskCallback, results);
        }
      }
    });
  };
  async2.retry = function(times, task, callback) {
    var DEFAULT_TIMES = 5;
    var DEFAULT_INTERVAL = 0;
    var attempts = [];
    var opts = {
      times: DEFAULT_TIMES,
      interval: DEFAULT_INTERVAL
    };
    function parseTimes(acc, t) {
      if (typeof t === "number") {
        acc.times = parseInt(t, 10) || DEFAULT_TIMES;
      } else if (typeof t === "object") {
        acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
        acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
      } else {
        throw new Error("Unsupported argument type for 'times': " + typeof t);
      }
    }
    var length = arguments.length;
    if (length < 1 || length > 3) {
      throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");
    } else if (length <= 2 && typeof times === "function") {
      callback = task;
      task = times;
    }
    if (typeof times !== "function") {
      parseTimes(opts, times);
    }
    opts.callback = callback;
    opts.task = task;
    function wrappedTask(wrappedCallback, wrappedResults) {
      function retryAttempt(task2, finalAttempt2) {
        return function(seriesCallback) {
          task2(function(err, result) {
            seriesCallback(!err || finalAttempt2, { err, result });
          }, wrappedResults);
        };
      }
      function retryInterval(interval) {
        return function(seriesCallback) {
          setTimeout(function() {
            seriesCallback(null);
          }, interval);
        };
      }
      while (opts.times) {
        var finalAttempt = !(opts.times -= 1);
        attempts.push(retryAttempt(opts.task, finalAttempt));
        if (!finalAttempt && opts.interval > 0) {
          attempts.push(retryInterval(opts.interval));
        }
      }
      async2.series(attempts, function(done, data) {
        data = data[data.length - 1];
        (wrappedCallback || opts.callback)(data.err, data.result);
      });
    }
    return opts.callback ? wrappedTask() : wrappedTask;
  };
  async2.waterfall = function(tasks, callback) {
    callback = _once(callback || noop);
    if (!_isArray(tasks)) {
      var err = new Error("First argument to waterfall must be an array of functions");
      return callback(err);
    }
    if (!tasks.length) {
      return callback();
    }
    function wrapIterator(iterator) {
      return _restParam(function(err2, args) {
        if (err2) {
          callback.apply(null, [err2].concat(args));
        } else {
          var next = iterator.next();
          if (next) {
            args.push(wrapIterator(next));
          } else {
            args.push(callback);
          }
          ensureAsync(iterator).apply(null, args);
        }
      });
    }
    wrapIterator(async2.iterator(tasks))();
  };
  function _parallel(eachfn, tasks, callback) {
    callback = callback || noop;
    var results = _isArrayLike(tasks) ? [] : {};
    eachfn(tasks, function(task, key, callback2) {
      task(_restParam(function(err, args) {
        if (args.length <= 1) {
          args = args[0];
        }
        results[key] = args;
        callback2(err);
      }));
    }, function(err) {
      callback(err, results);
    });
  }
  async2.parallel = function(tasks, callback) {
    _parallel(async2.eachOf, tasks, callback);
  };
  async2.parallelLimit = function(tasks, limit, callback) {
    _parallel(_eachOfLimit(limit), tasks, callback);
  };
  async2.series = function(tasks, callback) {
    _parallel(async2.eachOfSeries, tasks, callback);
  };
  async2.iterator = function(tasks) {
    function makeCallback(index) {
      function fn() {
        if (tasks.length) {
          tasks[index].apply(null, arguments);
        }
        return fn.next();
      }
      fn.next = function() {
        return index < tasks.length - 1 ? makeCallback(index + 1) : null;
      };
      return fn;
    }
    return makeCallback(0);
  };
  async2.apply = _restParam(function(fn, args) {
    return _restParam(function(callArgs) {
      return fn.apply(
        null,
        args.concat(callArgs)
      );
    });
  });
  function _concat(eachfn, arr, fn, callback) {
    var result = [];
    eachfn(arr, function(x, index, cb) {
      fn(x, function(err, y) {
        result = result.concat(y || []);
        cb(err);
      });
    }, function(err) {
      callback(err, result);
    });
  }
  async2.concat = doParallel(_concat);
  async2.concatSeries = doSeries(_concat);
  async2.whilst = function(test, iterator, callback) {
    callback = callback || noop;
    if (test()) {
      var next = _restParam(function(err, args) {
        if (err) {
          callback(err);
        } else if (test.apply(this, args)) {
          iterator(next);
        } else {
          callback(null);
        }
      });
      iterator(next);
    } else {
      callback(null);
    }
  };
  async2.doWhilst = function(iterator, test, callback) {
    var calls = 0;
    return async2.whilst(function() {
      return ++calls <= 1 || test.apply(this, arguments);
    }, iterator, callback);
  };
  async2.until = function(test, iterator, callback) {
    return async2.whilst(function() {
      return !test.apply(this, arguments);
    }, iterator, callback);
  };
  async2.doUntil = function(iterator, test, callback) {
    return async2.doWhilst(iterator, function() {
      return !test.apply(this, arguments);
    }, callback);
  };
  async2.during = function(test, iterator, callback) {
    callback = callback || noop;
    var next = _restParam(function(err, args) {
      if (err) {
        callback(err);
      } else {
        args.push(check);
        test.apply(this, args);
      }
    });
    var check = function(err, truth) {
      if (err) {
        callback(err);
      } else if (truth) {
        iterator(next);
      } else {
        callback(null);
      }
    };
    test(check);
  };
  async2.doDuring = function(iterator, test, callback) {
    var calls = 0;
    async2.during(function(next) {
      if (calls++ < 1) {
        next(null, true);
      } else {
        test.apply(this, arguments);
      }
    }, iterator, callback);
  };
  function _queue(worker, concurrency, payload) {
    if (concurrency == null) {
      concurrency = 1;
    } else if (concurrency === 0) {
      throw new Error("Concurrency must not be zero");
    }
    function _insert(q2, data, pos, callback) {
      if (callback != null && typeof callback !== "function") {
        throw new Error("task callback must be a function");
      }
      q2.started = true;
      if (!_isArray(data)) {
        data = [data];
      }
      if (data.length === 0 && q2.idle()) {
        return async2.setImmediate(function() {
          q2.drain();
        });
      }
      _arrayEach(data, function(task) {
        var item = {
          data: task,
          callback: callback || noop
        };
        if (pos) {
          q2.tasks.unshift(item);
        } else {
          q2.tasks.push(item);
        }
        if (q2.tasks.length === q2.concurrency) {
          q2.saturated();
        }
      });
      async2.setImmediate(q2.process);
    }
    function _next(q2, tasks) {
      return function() {
        workers -= 1;
        var removed = false;
        var args = arguments;
        _arrayEach(tasks, function(task) {
          _arrayEach(workersList, function(worker2, index) {
            if (worker2 === task && !removed) {
              workersList.splice(index, 1);
              removed = true;
            }
          });
          task.callback.apply(task, args);
        });
        if (q2.tasks.length + workers === 0) {
          q2.drain();
        }
        q2.process();
      };
    }
    var workers = 0;
    var workersList = [];
    var q = {
      tasks: [],
      concurrency,
      payload,
      saturated: noop,
      empty: noop,
      drain: noop,
      started: false,
      paused: false,
      push: function(data, callback) {
        _insert(q, data, false, callback);
      },
      kill: function() {
        q.drain = noop;
        q.tasks = [];
      },
      unshift: function(data, callback) {
        _insert(q, data, true, callback);
      },
      process: function() {
        if (!q.paused && workers < q.concurrency && q.tasks.length) {
          while (workers < q.concurrency && q.tasks.length) {
            var tasks = q.payload ? q.tasks.splice(0, q.payload) : q.tasks.splice(0, q.tasks.length);
            var data = _map(tasks, function(task) {
              return task.data;
            });
            if (q.tasks.length === 0) {
              q.empty();
            }
            workers += 1;
            workersList.push(tasks[0]);
            var cb = only_once(_next(q, tasks));
            worker(data, cb);
          }
        }
      },
      length: function() {
        return q.tasks.length;
      },
      running: function() {
        return workers;
      },
      workersList: function() {
        return workersList;
      },
      idle: function() {
        return q.tasks.length + workers === 0;
      },
      pause: function() {
        q.paused = true;
      },
      resume: function() {
        if (q.paused === false) {
          return;
        }
        q.paused = false;
        var resumeCount = Math.min(q.concurrency, q.tasks.length);
        for (var w = 1; w <= resumeCount; w++) {
          async2.setImmediate(q.process);
        }
      }
    };
    return q;
  }
  async2.queue = function(worker, concurrency) {
    var q = _queue(function(items, cb) {
      worker(items[0], cb);
    }, concurrency, 1);
    return q;
  };
  async2.priorityQueue = function(worker, concurrency) {
    function _compareTasks(a2, b) {
      return a2.priority - b.priority;
    }
    function _binarySearch(sequence, item, compare) {
      var beg = -1, end = sequence.length - 1;
      while (beg < end) {
        var mid = beg + (end - beg + 1 >>> 1);
        if (compare(item, sequence[mid]) >= 0) {
          beg = mid;
        } else {
          end = mid - 1;
        }
      }
      return beg;
    }
    function _insert(q2, data, priority, callback) {
      if (callback != null && typeof callback !== "function") {
        throw new Error("task callback must be a function");
      }
      q2.started = true;
      if (!_isArray(data)) {
        data = [data];
      }
      if (data.length === 0) {
        return async2.setImmediate(function() {
          q2.drain();
        });
      }
      _arrayEach(data, function(task) {
        var item = {
          data: task,
          priority,
          callback: typeof callback === "function" ? callback : noop
        };
        q2.tasks.splice(_binarySearch(q2.tasks, item, _compareTasks) + 1, 0, item);
        if (q2.tasks.length === q2.concurrency) {
          q2.saturated();
        }
        async2.setImmediate(q2.process);
      });
    }
    var q = async2.queue(worker, concurrency);
    q.push = function(data, priority, callback) {
      _insert(q, data, priority, callback);
    };
    delete q.unshift;
    return q;
  };
  async2.cargo = function(worker, payload) {
    return _queue(worker, 1, payload);
  };
  function _console_fn(name) {
    return _restParam(function(fn, args) {
      fn.apply(null, args.concat([_restParam(function(err, args2) {
        if (typeof console === "object") {
          if (err) {
            if (console.error) {
              console.error(err);
            }
          } else if (console[name]) {
            _arrayEach(args2, function(x) {
              console[name](x);
            });
          }
        }
      })]));
    });
  }
  async2.log = _console_fn("log");
  async2.dir = _console_fn("dir");
  async2.memoize = function(fn, hasher) {
    var memo = {};
    var queues = {};
    hasher = hasher || identity;
    var memoized = _restParam(function memoized2(args) {
      var callback = args.pop();
      var key = hasher.apply(null, args);
      if (key in memo) {
        async2.setImmediate(function() {
          callback.apply(null, memo[key]);
        });
      } else if (key in queues) {
        queues[key].push(callback);
      } else {
        queues[key] = [callback];
        fn.apply(null, args.concat([_restParam(function(args2) {
          memo[key] = args2;
          var q = queues[key];
          delete queues[key];
          for (var i2 = 0, l = q.length; i2 < l; i2++) {
            q[i2].apply(null, args2);
          }
        })]));
      }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
  };
  async2.unmemoize = function(fn) {
    return function() {
      return (fn.unmemoized || fn).apply(null, arguments);
    };
  };
  function _times(mapper) {
    return function(count, iterator, callback) {
      mapper(_range(count), iterator, callback);
    };
  }
  async2.times = _times(async2.map);
  async2.timesSeries = _times(async2.mapSeries);
  async2.timesLimit = function(count, limit, iterator, callback) {
    return async2.mapLimit(_range(count), limit, iterator, callback);
  };
  async2.seq = function() {
    var fns = arguments;
    return _restParam(function(args) {
      var that = this;
      var callback = args[args.length - 1];
      if (typeof callback == "function") {
        args.pop();
      } else {
        callback = noop;
      }
      async2.reduce(
        fns,
        args,
        function(newargs, fn, cb) {
          fn.apply(that, newargs.concat([_restParam(function(err, nextargs) {
            cb(err, nextargs);
          })]));
        },
        function(err, results) {
          callback.apply(that, [err].concat(results));
        }
      );
    });
  };
  async2.compose = function() {
    return async2.seq.apply(null, Array.prototype.reverse.call(arguments));
  };
  function _applyEach(eachfn) {
    return _restParam(function(fns, args) {
      var go = _restParam(function(args2) {
        var that = this;
        var callback = args2.pop();
        return eachfn(
          fns,
          function(fn, _, cb) {
            fn.apply(that, args2.concat([cb]));
          },
          callback
        );
      });
      if (args.length) {
        return go.apply(this, args);
      } else {
        return go;
      }
    });
  }
  async2.applyEach = _applyEach(async2.eachOf);
  async2.applyEachSeries = _applyEach(async2.eachOfSeries);
  async2.forever = function(fn, callback) {
    var done = only_once(callback || noop);
    var task = ensureAsync(fn);
    function next(err) {
      if (err) {
        return done(err);
      }
      task(next);
    }
    next();
  };
  function ensureAsync(fn) {
    return _restParam(function(args) {
      var callback = args.pop();
      args.push(function() {
        var innerArgs = arguments;
        if (sync) {
          async2.setImmediate(function() {
            callback.apply(null, innerArgs);
          });
        } else {
          callback.apply(null, innerArgs);
        }
      });
      var sync = true;
      fn.apply(this, args);
      sync = false;
    });
  }
  async2.ensureAsync = ensureAsync;
  async2.constant = _restParam(function(values) {
    var args = [null].concat(values);
    return function(callback) {
      return callback.apply(this, args);
    };
  });
  async2.wrapSync = async2.asyncify = function asyncify(func) {
    return _restParam(function(args) {
      var callback = args.pop();
      var result;
      try {
        result = func.apply(this, args);
      } catch (e) {
        return callback(e);
      }
      if (_isObject(result) && typeof result.then === "function") {
        result.then(function(value2) {
          callback(null, value2);
        })["catch"](function(err) {
          callback(err.message ? err : new Error(err));
        });
      } else {
        callback(null, result);
      }
    });
  };
  if (typeof module === "object" && module.exports) {
    module.exports = async2;
  } else if (typeof define === "function" && define.amd) {
    define("async", function() {
      return async2;
    });
  } else {
    root.async = async2;
  }
})();
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("sha1", [], factory);
  } else {
    window.sha1 = factory();
  }
})(function() {
  var sha12 = function() {
    var hex_chr = "0123456789abcdef";
    function hex(num) {
      var str = "";
      for (var j2 = 7; j2 >= 0; j2--)
        str += hex_chr.charAt(num >> j2 * 4 & 15);
      return str;
    }
    function str2blks_SHA1(str) {
      var nblk = (str.length + 8 >> 6) + 1;
      var blks = new Array(nblk * 16);
      for (var i2 = 0; i2 < nblk * 16; i2++) blks[i2] = 0;
      for (i2 = 0; i2 < str.length; i2++)
        blks[i2 >> 2] |= str.charCodeAt(i2) << 24 - i2 % 4 * 8;
      blks[i2 >> 2] |= 128 << 24 - i2 % 4 * 8;
      blks[nblk * 16 - 1] = str.length * 8;
      return blks;
    }
    function hex2blks_SHA1(hex2) {
      var len = hex2.length + 1 >> 1;
      var nblk = (len + 8 >> 6) + 1;
      var blks = new Array(nblk * 16);
      for (var i2 = 0; i2 < nblk * 16; i2++) blks[i2] = 0;
      for (i2 = 0; i2 < len; i2++)
        blks[i2 >> 2] |= parseInt(hex2.substr(2 * i2, 2), 16) << 24 - i2 % 4 * 8;
      blks[i2 >> 2] |= 128 << 24 - i2 % 4 * 8;
      blks[nblk * 16 - 1] = len * 8;
      return blks;
    }
    function ba2blks_SHA1(ba, off, len) {
      var nblk = (len + 8 >> 6) + 1;
      var blks = new Array(nblk * 16);
      for (var i2 = 0; i2 < nblk * 16; i2++) blks[i2] = 0;
      for (i2 = 0; i2 < len; i2++)
        blks[i2 >> 2] |= (ba[off + i2] & 255) << 24 - i2 % 4 * 8;
      blks[i2 >> 2] |= 128 << 24 - i2 % 4 * 8;
      blks[nblk * 16 - 1] = len * 8;
      return blks;
    }
    function add(x, y) {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function rol(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function ft(t, b, c, d) {
      if (t < 20) return b & c | ~b & d;
      if (t < 40) return b ^ c ^ d;
      if (t < 60) return b & c | b & d | c & d;
      return b ^ c ^ d;
    }
    function kt(t) {
      return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
    }
    function calcSHA1(str) {
      return calcSHA1Blks(str2blks_SHA1(str));
    }
    function calcSHA1Hex(str) {
      return calcSHA1Blks(hex2blks_SHA1(str));
    }
    function calcSHA1BA(ba) {
      return calcSHA1Blks(ba2blks_SHA1(ba, 0, ba.length));
    }
    function calcSHA1BAEx(ba, off, len) {
      return calcSHA1Blks(ba2blks_SHA1(ba, off, len));
    }
    function calcSHA1Blks(x) {
      var s = calcSHA1Raw(x);
      return hex(s[0]) + hex(s[1]) + hex(s[2]) + hex(s[3]) + hex(s[4]);
    }
    function calcSHA1Raw(x) {
      var w = new Array(80);
      var a2 = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;
      var e = -1009589776;
      for (var i2 = 0; i2 < x.length; i2 += 16) {
        var olda = a2;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        var olde = e;
        for (var j2 = 0; j2 < 80; j2++) {
          var t;
          if (j2 < 16) w[j2] = x[i2 + j2];
          else w[j2] = rol(w[j2 - 3] ^ w[j2 - 8] ^ w[j2 - 14] ^ w[j2 - 16], 1);
          t = add(add(rol(a2, 5), ft(j2, b, c, d)), add(add(e, w[j2]), kt(j2)));
          e = d;
          d = c;
          c = rol(b, 30);
          b = a2;
          a2 = t;
        }
        a2 = add(a2, olda);
        b = add(b, oldb);
        c = add(c, oldc);
        d = add(d, oldd);
        e = add(e, olde);
      }
      return new Array(a2, b, c, d, e);
    }
    function core_sha1(x, len) {
      x[len >> 5] |= 128 << 24 - len % 32;
      x[(len + 64 >> 9 << 4) + 15] = len;
      return calcSHA1Raw(x);
    }
    return {
      calcSHA1,
      calcSHA1Hex,
      calcSHA1BA,
      calcSHA1BAEx
    };
  };
  return sha12();
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("sjcl", [], factory);
  } else {
    window.sjcl = factory();
  }
})(function() {
  "use strict";
  var sjcl2 = {
    /** @namespace Symmetric ciphers. */
    cipher: {},
    /** @namespace Hash functions.  Right now only SHA256 is implemented. */
    hash: {},
    /** @namespace Key exchange functions.  Right now only SRP is implemented. */
    keyexchange: {},
    /** @namespace Block cipher modes of operation. */
    mode: {},
    /** @namespace Miscellaneous.  HMAC and PBKDF2. */
    misc: {},
    /**
     * @namespace Bit array encoders and decoders.
     *
     * @description
     * The members of this namespace are functions which translate between
     * SJCL's bitArrays and other objects (usually strings).  Because it
     * isn't always clear which direction is encoding and which is decoding,
     * the method names are "fromBits" and "toBits".
     */
    codec: {},
    /** @namespace Exceptions. */
    exception: {
      /** @constructor Ciphertext is corrupt. */
      corrupt: function(message) {
        this.toString = function() {
          return "CORRUPT: " + this.message;
        };
        this.message = message;
      },
      /** @constructor Invalid parameter. */
      invalid: function(message) {
        this.toString = function() {
          return "INVALID: " + this.message;
        };
        this.message = message;
      },
      /** @constructor Bug or missing feature in SJCL. @constructor */
      bug: function(message) {
        this.toString = function() {
          return "BUG: " + this.message;
        };
        this.message = message;
      },
      /** @constructor Something isn't ready. */
      notReady: function(message) {
        this.toString = function() {
          return "NOT READY: " + this.message;
        };
        this.message = message;
      }
    }
  };
  sjcl2.bitArray = {
    /**
     * Array slices in units of bits.
     * @param {bitArray} a The array to slice.
     * @param {Number} bstart The offset to the start of the slice, in bits.
     * @param {Number} bend The offset to the end of the slice, in bits.  If this is undefined,
     * slice until the end of the array.
     * @return {bitArray} The requested slice.
     */
    bitSlice: function(a2, bstart, bend) {
      a2 = sjcl2.bitArray._shiftRight(a2.slice(bstart / 32), 32 - (bstart & 31)).slice(1);
      return bend === void 0 ? a2 : sjcl2.bitArray.clamp(a2, bend - bstart);
    },
    /**
     * Extract a number packed into a bit array.
     * @param {bitArray} a The array to slice.
     * @param {Number} bstart The offset to the start of the slice, in bits.
     * @param {Number} length The length of the number to extract.
     * @return {Number} The requested slice.
     */
    extract: function(a2, bstart, blength) {
      var x, sh = Math.floor(-bstart - blength & 31);
      if ((bstart + blength - 1 ^ bstart) & -32) {
        x = a2[bstart / 32 | 0] << 32 - sh ^ a2[bstart / 32 + 1 | 0] >>> sh;
      } else {
        x = a2[bstart / 32 | 0] >>> sh;
      }
      return x & (1 << blength) - 1;
    },
    /**
     * Concatenate two bit arrays.
     * @param {bitArray} a1 The first array.
     * @param {bitArray} a2 The second array.
     * @return {bitArray} The concatenation of a1 and a2.
     */
    concat: function(a1, a2) {
      if (a1.length === 0 || a2.length === 0) {
        return a1.concat(a2);
      }
      var last = a1[a1.length - 1], shift = sjcl2.bitArray.getPartial(last);
      if (shift === 32) {
        return a1.concat(a2);
      } else {
        return sjcl2.bitArray._shiftRight(a2, shift, last | 0, a1.slice(0, a1.length - 1));
      }
    },
    /**
     * Find the length of an array of bits.
     * @param {bitArray} a The array.
     * @return {Number} The length of a, in bits.
     */
    bitLength: function(a2) {
      var l = a2.length, x;
      if (l === 0) {
        return 0;
      }
      x = a2[l - 1];
      return (l - 1) * 32 + sjcl2.bitArray.getPartial(x);
    },
    /**
     * Truncate an array.
     * @param {bitArray} a The array.
     * @param {Number} len The length to truncate to, in bits.
     * @return {bitArray} A new array, truncated to len bits.
     */
    clamp: function(a2, len) {
      if (a2.length * 32 < len) {
        return a2;
      }
      a2 = a2.slice(0, Math.ceil(len / 32));
      var l = a2.length;
      len = len & 31;
      if (l > 0 && len) {
        a2[l - 1] = sjcl2.bitArray.partial(len, a2[l - 1] & 2147483648 >> len - 1, 1);
      }
      return a2;
    },
    /**
     * Make a partial word for a bit array.
     * @param {Number} len The number of bits in the word.
     * @param {Number} x The bits.
     * @param {Number} [0] _end Pass 1 if x has already been shifted to the high side.
     * @return {Number} The partial word.
     */
    partial: function(len, x, _end) {
      if (len === 32) {
        return x;
      }
      return (_end ? x | 0 : x << 32 - len) + len * 1099511627776;
    },
    /**
     * Get the number of bits used by a partial word.
     * @param {Number} x The partial word.
     * @return {Number} The number of bits used by the partial word.
     */
    getPartial: function(x) {
      return Math.round(x / 1099511627776) || 32;
    },
    /**
     * Compare two arrays for equality in a predictable amount of time.
     * @param {bitArray} a The first array.
     * @param {bitArray} b The second array.
     * @return {boolean} true if a == b; false otherwise.
     */
    equal: function(a2, b) {
      if (sjcl2.bitArray.bitLength(a2) !== sjcl2.bitArray.bitLength(b)) {
        return false;
      }
      var x = 0, i2;
      for (i2 = 0; i2 < a2.length; i2++) {
        x |= a2[i2] ^ b[i2];
      }
      return x === 0;
    },
    /** Shift an array right.
     * @param {bitArray} a The array to shift.
     * @param {Number} shift The number of bits to shift.
     * @param {Number} [carry=0] A byte to carry in
     * @param {bitArray} [out=[]] An array to prepend to the output.
     * @private
     */
    _shiftRight: function(a2, shift, carry, out) {
      var i2, last2 = 0, shift2;
      if (out === void 0) {
        out = [];
      }
      for (; shift >= 32; shift -= 32) {
        out.push(carry);
        carry = 0;
      }
      if (shift === 0) {
        return out.concat(a2);
      }
      for (i2 = 0; i2 < a2.length; i2++) {
        out.push(carry | a2[i2] >>> shift);
        carry = a2[i2] << 32 - shift;
      }
      last2 = a2.length ? a2[a2.length - 1] : 0;
      shift2 = sjcl2.bitArray.getPartial(last2);
      out.push(sjcl2.bitArray.partial(shift + shift2 & 31, shift + shift2 > 32 ? carry : out.pop(), 1));
      return out;
    },
    /** xor a block of 4 words together.
     * @private
     */
    _xor4: function(x, y) {
      return [x[0] ^ y[0], x[1] ^ y[1], x[2] ^ y[2], x[3] ^ y[3]];
    },
    /** byteswap a word array inplace.
     * (does not handle partial words)
     * @param {sjcl.bitArray} a word array
     * @return {sjcl.bitArray} byteswapped array
     */
    byteswapM: function(a2) {
      var i2, v, m = 65280;
      for (i2 = 0; i2 < a2.length; ++i2) {
        v = a2[i2];
        a2[i2] = v >>> 24 | v >>> 8 & m | (v & m) << 8 | v << 24;
      }
      return a2;
    }
  };
  sjcl2.hash.sha256 = function(hash) {
    if (!this._key[0]) {
      this._precompute();
    }
    if (hash) {
      this._h = hash._h.slice(0);
      this._buffer = hash._buffer.slice(0);
      this._length = hash._length;
    } else {
      this.reset();
    }
  };
  sjcl2.hash.sha256.hash = function(data) {
    return new sjcl2.hash.sha256().update(data).finalize();
  };
  sjcl2.hash.sha256.prototype = {
    /**
     * The hash's block size, in bits.
     * @constant
     */
    blockSize: 512,
    /**
     * Reset the hash state.
     * @return this
     */
    reset: function() {
      this._h = this._init.slice(0);
      this._buffer = [];
      this._length = 0;
      return this;
    },
    /**
     * Input several words to the hash.
     * @param {bitArray|String} data the data to hash.
     * @return this
     */
    update: function(data) {
      if (typeof data === "string") {
        data = sjcl2.codec.utf8String.toBits(data);
      }
      var i2, b = this._buffer = sjcl2.bitArray.concat(this._buffer, data), ol = this._length, nl = this._length = ol + sjcl2.bitArray.bitLength(data);
      for (i2 = 512 + ol & -512; i2 <= nl; i2 += 512) {
        this._block(b.splice(0, 16));
      }
      return this;
    },
    /**
     * Complete hashing and output the hash value.
     * @return {bitArray} The hash value, an array of 8 big-endian words.
     */
    finalize: function() {
      var i2, b = this._buffer, h = this._h;
      b = sjcl2.bitArray.concat(b, [sjcl2.bitArray.partial(1, 1)]);
      for (i2 = b.length + 2; i2 & 15; i2++) {
        b.push(0);
      }
      b.push(Math.floor(this._length / 4294967296));
      b.push(this._length | 0);
      while (b.length) {
        this._block(b.splice(0, 16));
      }
      this.reset();
      return h;
    },
    /**
     * The SHA-256 initialization vector, to be precomputed.
     * @private
     */
    _init: [],
    /*
    _init:[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],
    */
    /**
     * The SHA-256 hash key, to be precomputed.
     * @private
     */
    _key: [],
    /*
    _key:
      [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
       0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
       0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
       0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
       0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
       0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
       0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
       0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2],
    */
    /**
     * Function to precompute _init and _key.
     * @private
     */
    _precompute: function() {
      var i2 = 0, prime = 2, factor;
      function frac(x) {
        return (x - Math.floor(x)) * 4294967296 | 0;
      }
      outer: for (; i2 < 64; prime++) {
        for (factor = 2; factor * factor <= prime; factor++) {
          if (prime % factor === 0) {
            continue outer;
          }
        }
        if (i2 < 8) {
          this._init[i2] = frac(Math.pow(prime, 1 / 2));
        }
        this._key[i2] = frac(Math.pow(prime, 1 / 3));
        i2++;
      }
    },
    /**
     * Perform one cycle of SHA-256.
     * @param {bitArray} words one block of words.
     * @private
     */
    _block: function(words) {
      var i2, tmp, a2, b, w = words.slice(0), h = this._h, k = this._key, h0 = h[0], h1 = h[1], h2 = h[2], h3 = h[3], h4 = h[4], h5 = h[5], h6 = h[6], h7 = h[7];
      for (i2 = 0; i2 < 64; i2++) {
        if (i2 < 16) {
          tmp = w[i2];
        } else {
          a2 = w[i2 + 1 & 15];
          b = w[i2 + 14 & 15];
          tmp = w[i2 & 15] = (a2 >>> 7 ^ a2 >>> 18 ^ a2 >>> 3 ^ a2 << 25 ^ a2 << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
        }
        tmp = tmp + h7 + (h4 >>> 6 ^ h4 >>> 11 ^ h4 >>> 25 ^ h4 << 26 ^ h4 << 21 ^ h4 << 7) + (h6 ^ h4 & (h5 ^ h6)) + k[i2];
        h7 = h6;
        h6 = h5;
        h5 = h4;
        h4 = h3 + tmp | 0;
        h3 = h2;
        h2 = h1;
        h1 = h0;
        h0 = tmp + (h1 & h2 ^ h3 & (h1 ^ h2)) + (h1 >>> 2 ^ h1 >>> 13 ^ h1 >>> 22 ^ h1 << 30 ^ h1 << 19 ^ h1 << 10) | 0;
      }
      h[0] = h[0] + h0 | 0;
      h[1] = h[1] + h1 | 0;
      h[2] = h[2] + h2 | 0;
      h[3] = h[3] + h3 | 0;
      h[4] = h[4] + h4 | 0;
      h[5] = h[5] + h5 | 0;
      h[6] = h[6] + h6 | 0;
      h[7] = h[7] + h7 | 0;
    }
  };
  sjcl2.cipher.aes = function(key) {
    if (!this._tables[0][0][0]) {
      this._precompute();
    }
    var i2, j2, tmp, encKey, decKey, sbox = this._tables[0][4], decTable = this._tables[1], keyLen = key.length, rcon = 1;
    if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
      throw new sjcl2.exception.invalid("invalid aes key size");
    }
    this._key = [encKey = key.slice(0), decKey = []];
    for (i2 = keyLen; i2 < 4 * keyLen + 28; i2++) {
      tmp = encKey[i2 - 1];
      if (i2 % keyLen === 0 || keyLen === 8 && i2 % keyLen === 4) {
        tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
        if (i2 % keyLen === 0) {
          tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
          rcon = rcon << 1 ^ (rcon >> 7) * 283;
        }
      }
      encKey[i2] = encKey[i2 - keyLen] ^ tmp;
    }
    for (j2 = 0; i2; j2++, i2--) {
      tmp = encKey[j2 & 3 ? i2 : i2 - 4];
      if (i2 <= 4 || j2 < 4) {
        decKey[j2] = tmp;
      } else {
        decKey[j2] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
      }
    }
  };
  sjcl2.cipher.aes.prototype = {
    // public
    /* Something like this might appear here eventually
    name: "AES",
    blockSize: 4,
    keySizes: [4,6,8],
    */
    /**
     * Encrypt an array of 4 big-endian words.
     * @param {Array} data The plaintext.
     * @return {Array} The ciphertext.
     */
    encrypt: function(data) {
      return this._crypt(data, 0);
    },
    /**
     * Decrypt an array of 4 big-endian words.
     * @param {Array} data The ciphertext.
     * @return {Array} The plaintext.
     */
    decrypt: function(data) {
      return this._crypt(data, 1);
    },
    /**
     * The expanded S-box and inverse S-box tables.  These will be computed
     * on the client so that we don't have to send them down the wire.
     *
     * There are two tables, _tables[0] is for encryption and
     * _tables[1] is for decryption.
     *
     * The first 4 sub-tables are the expanded S-box with MixColumns.  The
     * last (_tables[01][4]) is the S-box itself.
     *
     * @private
     */
    _tables: [[[], [], [], [], []], [[], [], [], [], []]],
    /**
     * Expand the S-box tables.
     *
     * @private
     */
    _precompute: function() {
      var encTable = this._tables[0], decTable = this._tables[1], sbox = encTable[4], sboxInv = decTable[4], i2, x, xInv, d = [], th = [], x2, x4, x8, s, tEnc, tDec;
      for (i2 = 0; i2 < 256; i2++) {
        th[(d[i2] = i2 << 1 ^ (i2 >> 7) * 283) ^ i2] = i2;
      }
      for (x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
        s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
        s = s >> 8 ^ s & 255 ^ 99;
        sbox[x] = s;
        sboxInv[s] = x;
        x8 = d[x4 = d[x2 = d[x]]];
        tDec = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
        tEnc = d[s] * 257 ^ s * 16843008;
        for (i2 = 0; i2 < 4; i2++) {
          encTable[i2][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
          decTable[i2][s] = tDec = tDec << 24 ^ tDec >>> 8;
        }
      }
      for (i2 = 0; i2 < 5; i2++) {
        encTable[i2] = encTable[i2].slice(0);
        decTable[i2] = decTable[i2].slice(0);
      }
    },
    /**
     * Encryption and decryption core.
     * @param {Array} input Four words to be encrypted or decrypted.
     * @param dir The direction, 0 for encrypt and 1 for decrypt.
     * @return {Array} The four encrypted or decrypted words.
     * @private
     */
    _crypt: function(input, dir) {
      if (input.length !== 4) {
        throw new sjcl2.exception.invalid("invalid aes block size");
      }
      var key = this._key[dir], a2 = input[0] ^ key[0], b = input[dir ? 3 : 1] ^ key[1], c = input[2] ^ key[2], d = input[dir ? 1 : 3] ^ key[3], a22, b2, c2, nInnerRounds = key.length / 4 - 2, i2, kIndex = 4, out = [0, 0, 0, 0], table = this._tables[dir], t0 = table[0], t1 = table[1], t2 = table[2], t3 = table[3], sbox = table[4];
      for (i2 = 0; i2 < nInnerRounds; i2++) {
        a22 = t0[a2 >>> 24] ^ t1[b >> 16 & 255] ^ t2[c >> 8 & 255] ^ t3[d & 255] ^ key[kIndex];
        b2 = t0[b >>> 24] ^ t1[c >> 16 & 255] ^ t2[d >> 8 & 255] ^ t3[a2 & 255] ^ key[kIndex + 1];
        c2 = t0[c >>> 24] ^ t1[d >> 16 & 255] ^ t2[a2 >> 8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
        d = t0[d >>> 24] ^ t1[a2 >> 16 & 255] ^ t2[b >> 8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
        kIndex += 4;
        a2 = a22;
        b = b2;
        c = c2;
      }
      for (i2 = 0; i2 < 4; i2++) {
        out[dir ? 3 & -i2 : i2] = sbox[a2 >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
        a22 = a2;
        a2 = b;
        b = c;
        c = d;
        d = a22;
      }
      return out;
    }
  };
  sjcl2.prng = function(defaultParanoia) {
    this._pools = [new sjcl2.hash.sha256()];
    this._poolEntropy = [0];
    this._reseedCount = 0;
    this._robins = {};
    this._eventId = 0;
    this._collectorIds = {};
    this._collectorIdNext = 0;
    this._strength = 0;
    this._poolStrength = 0;
    this._nextReseed = 0;
    this._key = [0, 0, 0, 0, 0, 0, 0, 0];
    this._counter = [0, 0, 0, 0];
    this._cipher = void 0;
    this._defaultParanoia = defaultParanoia;
    this._collectorsStarted = false;
    this._callbacks = { progress: {}, seeded: {} };
    this._callbackI = 0;
    this._NOT_READY = 0;
    this._READY = 1;
    this._REQUIRES_RESEED = 2;
    this._MAX_WORDS_PER_BURST = 65536;
    this._PARANOIA_LEVELS = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024];
    this._MILLISECONDS_PER_RESEED = 3e4;
    this._BITS_PER_RESEED = 80;
  };
  sjcl2.prng.prototype = {
    /** Generate several random words, and return them in an array.
     * A word consists of 32 bits (4 bytes)
     * @param {Number} nwords The number of words to generate.
     */
    randomWords: function(nwords, paranoia) {
      var out = [], i2, readiness = this.isReady(paranoia), g;
      if (readiness === this._NOT_READY) {
        throw new sjcl2.exception.notReady("generator isn't seeded");
      } else if (readiness & this._REQUIRES_RESEED) {
        this._reseedFromPools(!(readiness & this._READY));
      }
      for (i2 = 0; i2 < nwords; i2 += 4) {
        if ((i2 + 1) % this._MAX_WORDS_PER_BURST === 0) {
          this._gate();
        }
        g = this._gen4words();
        out.push(g[0], g[1], g[2], g[3]);
      }
      this._gate();
      return out.slice(0, nwords);
    },
    setDefaultParanoia: function(paranoia, allowZeroParanoia) {
      if (paranoia === 0 && allowZeroParanoia !== "Setting paranoia=0 will ruin your security; use it only for testing") {
        throw "Setting paranoia=0 will ruin your security; use it only for testing";
      }
      this._defaultParanoia = paranoia;
    },
    /**
     * Add entropy to the pools.
     * @param data The entropic value.  Should be a 32-bit integer, array of 32-bit integers, or string
     * @param {Number} estimatedEntropy The estimated entropy of data, in bits
     * @param {String} source The source of the entropy, eg "mouse"
     */
    addEntropy: function(data, estimatedEntropy, source) {
      source = source || "user";
      var id, i2, tmp, t = (/* @__PURE__ */ new Date()).valueOf(), robin = this._robins[source], oldReady = this.isReady(), err = 0, objName;
      id = this._collectorIds[source];
      if (id === void 0) {
        id = this._collectorIds[source] = this._collectorIdNext++;
      }
      if (robin === void 0) {
        robin = this._robins[source] = 0;
      }
      this._robins[source] = (this._robins[source] + 1) % this._pools.length;
      switch (typeof data) {
        case "number":
          if (estimatedEntropy === void 0) {
            estimatedEntropy = 1;
          }
          this._pools[robin].update([id, this._eventId++, 1, estimatedEntropy, t, 1, data | 0]);
          break;
        case "object":
          objName = Object.prototype.toString.call(data);
          if (objName === "[object Uint32Array]") {
            tmp = [];
            for (i2 = 0; i2 < data.length; i2++) {
              tmp.push(data[i2]);
            }
            data = tmp;
          } else {
            if (objName !== "[object Array]") {
              err = 1;
            }
            for (i2 = 0; i2 < data.length && !err; i2++) {
              if (typeof data[i2] !== "number") {
                err = 1;
              }
            }
          }
          if (!err) {
            if (estimatedEntropy === void 0) {
              estimatedEntropy = 0;
              for (i2 = 0; i2 < data.length; i2++) {
                tmp = data[i2];
                while (tmp > 0) {
                  estimatedEntropy++;
                  tmp = tmp >>> 1;
                }
              }
            }
            this._pools[robin].update([id, this._eventId++, 2, estimatedEntropy, t, data.length].concat(data));
          }
          break;
        case "string":
          if (estimatedEntropy === void 0) {
            estimatedEntropy = data.length;
          }
          this._pools[robin].update([id, this._eventId++, 3, estimatedEntropy, t, data.length]);
          this._pools[robin].update(data);
          break;
        default:
          err = 1;
      }
      if (err) {
        throw new sjcl2.exception.bug("random: addEntropy only supports number, array of numbers or string");
      }
      this._poolEntropy[robin] += estimatedEntropy;
      this._poolStrength += estimatedEntropy;
      if (oldReady === this._NOT_READY) {
        if (this.isReady() !== this._NOT_READY) {
          this._fireEvent("seeded", Math.max(this._strength, this._poolStrength));
        }
        this._fireEvent("progress", this.getProgress());
      }
    },
    /** Is the generator ready? */
    isReady: function(paranoia) {
      var entropyRequired = this._PARANOIA_LEVELS[paranoia !== void 0 ? paranoia : this._defaultParanoia];
      if (this._strength && this._strength >= entropyRequired) {
        return this._poolEntropy[0] > this._BITS_PER_RESEED && (/* @__PURE__ */ new Date()).valueOf() > this._nextReseed ? this._REQUIRES_RESEED | this._READY : this._READY;
      } else {
        return this._poolStrength >= entropyRequired ? this._REQUIRES_RESEED | this._NOT_READY : this._NOT_READY;
      }
    },
    /** Get the generator's progress toward readiness, as a fraction */
    getProgress: function(paranoia) {
      var entropyRequired = this._PARANOIA_LEVELS[paranoia ? paranoia : this._defaultParanoia];
      if (this._strength >= entropyRequired) {
        return 1;
      } else {
        return this._poolStrength > entropyRequired ? 1 : this._poolStrength / entropyRequired;
      }
    },
    /** start the built-in entropy collectors */
    startCollectors: function() {
      if (this._collectorsStarted) {
        return;
      }
      this._eventListener = {
        loadTimeCollector: this._bind(this._loadTimeCollector),
        mouseCollector: this._bind(this._mouseCollector),
        keyboardCollector: this._bind(this._keyboardCollector),
        accelerometerCollector: this._bind(this._accelerometerCollector),
        touchCollector: this._bind(this._touchCollector)
      };
      if (window.addEventListener) {
        window.addEventListener("load", this._eventListener.loadTimeCollector, false);
        window.addEventListener("keypress", this._eventListener.keyboardCollector, false);
      } else if (document.attachEvent) {
        document.attachEvent("onload", this._eventListener.loadTimeCollector);
        document.attachEvent("keypress", this._eventListener.keyboardCollector);
      } else {
        throw new sjcl2.exception.bug("can't attach event");
      }
      this._collectorsStarted = true;
    },
    /** stop the built-in entropy collectors */
    stopCollectors: function() {
      if (!this._collectorsStarted) {
        return;
      }
      if (window.removeEventListener) {
        window.removeEventListener("load", this._eventListener.loadTimeCollector, false);
        window.removeEventListener("keypress", this._eventListener.keyboardCollector, false);
      } else if (document.detachEvent) {
        document.detachEvent("onload", this._eventListener.loadTimeCollector);
        document.detachEvent("keypress", this._eventListener.keyboardCollector);
      }
      this._collectorsStarted = false;
    },
    /* use a cookie to store entropy.
    useCookie: function (all_cookies) {
        throw new sjcl.exception.bug("random: useCookie is unimplemented");
    },*/
    /** add an event listener for progress or seeded-ness. */
    addEventListener: function(name, callback) {
      this._callbacks[name][this._callbackI++] = callback;
    },
    /** remove an event listener for progress or seeded-ness */
    removeEventListener: function(name, cb) {
      var i2, j2, cbs = this._callbacks[name], jsTemp = [];
      for (j2 in cbs) {
        if (cbs.hasOwnProperty(j2) && cbs[j2] === cb) {
          jsTemp.push(j2);
        }
      }
      for (i2 = 0; i2 < jsTemp.length; i2++) {
        j2 = jsTemp[i2];
        delete cbs[j2];
      }
    },
    _bind: function(func) {
      var that = this;
      return function() {
        func.apply(that, arguments);
      };
    },
    /** Generate 4 random words, no reseed, no gate.
     * @private
     */
    _gen4words: function() {
      for (var i2 = 0; i2 < 4; i2++) {
        this._counter[i2] = this._counter[i2] + 1 | 0;
        if (this._counter[i2]) {
          break;
        }
      }
      return this._cipher.encrypt(this._counter);
    },
    /* Rekey the AES instance with itself after a request, or every _MAX_WORDS_PER_BURST words.
     * @private
     */
    _gate: function() {
      this._key = this._gen4words().concat(this._gen4words());
      this._cipher = new sjcl2.cipher.aes(this._key);
    },
    /** Reseed the generator with the given words
     * @private
     */
    _reseed: function(seedWords) {
      this._key = sjcl2.hash.sha256.hash(this._key.concat(seedWords));
      this._cipher = new sjcl2.cipher.aes(this._key);
      for (var i2 = 0; i2 < 4; i2++) {
        this._counter[i2] = this._counter[i2] + 1 | 0;
        if (this._counter[i2]) {
          break;
        }
      }
    },
    /** reseed the data from the entropy pools
     * @param full If set, use all the entropy pools in the reseed.
     */
    _reseedFromPools: function(full) {
      var reseedData = [], strength = 0, i2;
      this._nextReseed = reseedData[0] = (/* @__PURE__ */ new Date()).valueOf() + this._MILLISECONDS_PER_RESEED;
      for (i2 = 0; i2 < 16; i2++) {
        reseedData.push(Math.random() * 4294967296 | 0);
      }
      for (i2 = 0; i2 < this._pools.length; i2++) {
        reseedData = reseedData.concat(this._pools[i2].finalize());
        strength += this._poolEntropy[i2];
        this._poolEntropy[i2] = 0;
        if (!full && this._reseedCount & 1 << i2) {
          break;
        }
      }
      if (this._reseedCount >= 1 << this._pools.length) {
        this._pools.push(new sjcl2.hash.sha256());
        this._poolEntropy.push(0);
      }
      this._poolStrength -= strength;
      if (strength > this._strength) {
        this._strength = strength;
      }
      this._reseedCount++;
      this._reseed(reseedData);
    },
    _keyboardCollector: function() {
      this._addCurrentTimeToEntropy(1);
    },
    _mouseCollector: function(ev) {
      var x, y;
      try {
        x = ev.x || ev.clientX || ev.offsetX || 0;
        y = ev.y || ev.clientY || ev.offsetY || 0;
      } catch (err) {
        x = 0;
        y = 0;
      }
      if (x != 0 && y != 0) {
        sjcl2.random.addEntropy([x, y], 2, "mouse");
      }
      this._addCurrentTimeToEntropy(0);
    },
    _touchCollector: function(ev) {
      var touch = ev.touches[0] || ev.changedTouches[0];
      var x = touch.pageX || touch.clientX, y = touch.pageY || touch.clientY;
      sjcl2.random.addEntropy([x, y], 1, "touch");
      this._addCurrentTimeToEntropy(0);
    },
    _loadTimeCollector: function() {
      this._addCurrentTimeToEntropy(2);
    },
    _addCurrentTimeToEntropy: function(estimatedEntropy) {
      if (typeof window !== "undefined" && window.performance && typeof window.performance.now === "function") {
        sjcl2.random.addEntropy(window.performance.now(), estimatedEntropy, "loadtime");
      } else {
        sjcl2.random.addEntropy((/* @__PURE__ */ new Date()).valueOf(), estimatedEntropy, "loadtime");
      }
    },
    _accelerometerCollector: function(ev) {
      var ac = ev.accelerationIncludingGravity.x || ev.accelerationIncludingGravity.y || ev.accelerationIncludingGravity.z;
      if (window.orientation) {
        var or = window.orientation;
        if (typeof or === "number") {
          sjcl2.random.addEntropy(or, 1, "accelerometer");
        }
      }
      if (ac) {
        sjcl2.random.addEntropy(ac, 2, "accelerometer");
      }
      this._addCurrentTimeToEntropy(0);
    },
    _fireEvent: function(name, arg) {
      var j2, cbs = sjcl2.random._callbacks[name], cbsTemp = [];
      for (j2 in cbs) {
        if (cbs.hasOwnProperty(j2)) {
          cbsTemp.push(cbs[j2]);
        }
      }
      for (j2 = 0; j2 < cbsTemp.length; j2++) {
        cbsTemp[j2](arg);
      }
    }
  };
  sjcl2.random = new sjcl2.prng(6);
  (function() {
    function getCryptoModule() {
      try {
        return require("crypto");
      } catch (e) {
        return null;
      }
    }
    try {
      var buf, crypt, ab;
      if (typeof module !== "undefined" && module.exports && (crypt = getCryptoModule()) && crypt.randomBytes) {
        buf = crypt.randomBytes(1024 / 8);
        buf = new Uint32Array(new Uint8Array(buf).buffer);
        sjcl2.random.addEntropy(buf, 1024, "crypto.randomBytes");
      } else if (typeof window !== "undefined" && typeof Uint32Array !== "undefined") {
        ab = new Uint32Array(32);
        if (window.crypto && window.crypto.getRandomValues) {
          window.crypto.getRandomValues(ab);
        } else if (window.msCrypto && window.msCrypto.getRandomValues) {
          window.msCrypto.getRandomValues(ab);
        } else {
          return;
        }
        sjcl2.random.addEntropy(ab, 1024, "crypto.getRandomValues");
      } else {
      }
    } catch (e) {
      if (typeof window !== "undefined" && window.console) {
        console.log("There was an error collecting entropy from the browser:");
        console.log(e);
      }
    }
  })();
  sjcl2.codec.hex = {
    /** Convert from a bitArray to a hex string. */
    fromBits: function(arr) {
      var out = "", i2;
      for (i2 = 0; i2 < arr.length; i2++) {
        out += ((arr[i2] | 0) + 263882790666240).toString(16).substr(4);
      }
      return out.substr(0, sjcl2.bitArray.bitLength(arr) / 4);
    },
    /** Convert from a hex string to a bitArray. */
    toBits: function(str) {
      var i2, out = [], len;
      str = str.replace(/\s|0x/g, "");
      len = str.length;
      str = str + "00000000";
      for (i2 = 0; i2 < str.length; i2 += 8) {
        out.push(parseInt(str.substr(i2, 8), 16) ^ 0);
      }
      return sjcl2.bitArray.clamp(out, len * 4);
    }
  };
  sjcl2.codec.utf8String = {
    /** Convert from a bitArray to a UTF-8 string. */
    fromBits: function(arr) {
      var out = "", bl = sjcl2.bitArray.bitLength(arr), i2, tmp;
      for (i2 = 0; i2 < bl / 8; i2++) {
        if ((i2 & 3) === 0) {
          tmp = arr[i2 / 4];
        }
        out += String.fromCharCode(tmp >>> 24);
        tmp <<= 8;
      }
      return decodeURIComponent(escape(out));
    },
    /** Convert from a UTF-8 string to a bitArray. */
    toBits: function(str) {
      str = unescape(encodeURIComponent(str));
      var out = [], i2, tmp = 0;
      for (i2 = 0; i2 < str.length; i2++) {
        tmp = tmp << 8 | str.charCodeAt(i2);
        if ((i2 & 3) === 3) {
          out.push(tmp);
          tmp = 0;
        }
      }
      if (i2 & 3) {
        out.push(sjcl2.bitArray.partial(8 * (i2 & 3), tmp));
      }
      return out;
    }
  };
  sjcl2.codec.base64 = {
    /** The base64 alphabet.
     * @private
     */
    _chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    /** Convert from a bitArray to a base64 string. */
    fromBits: function(arr, _noEquals, _url) {
      var out = "", i2, bits = 0, c = sjcl2.codec.base64._chars, ta = 0, bl = sjcl2.bitArray.bitLength(arr);
      if (_url) {
        c = c.substr(0, 62) + "-_";
      }
      for (i2 = 0; out.length * 6 < bl; ) {
        out += c.charAt((ta ^ arr[i2] >>> bits) >>> 26);
        if (bits < 6) {
          ta = arr[i2] << 6 - bits;
          bits += 26;
          i2++;
        } else {
          ta <<= 6;
          bits -= 6;
        }
      }
      while (out.length & 3 && !_noEquals) {
        out += "=";
      }
      return out;
    },
    /** Convert from a base64 string to a bitArray */
    toBits: function(str, _url) {
      str = str.replace(/\s|=/g, "");
      var out = [], i2, bits = 0, c = sjcl2.codec.base64._chars, ta = 0, x;
      if (_url) {
        c = c.substr(0, 62) + "-_";
      }
      for (i2 = 0; i2 < str.length; i2++) {
        x = c.indexOf(str.charAt(i2));
        if (x < 0) {
          throw new sjcl2.exception.invalid("this isn't base64!");
        }
        if (bits > 26) {
          bits -= 26;
          out.push(ta ^ x >>> bits);
          ta = x << 32 - bits;
        } else {
          bits += 6;
          ta ^= x << 32 - bits;
        }
      }
      if (bits & 56) {
        out.push(sjcl2.bitArray.partial(bits & 56, ta, 1));
      }
      return out;
    }
  };
  sjcl2.codec.base64url = {
    fromBits: function(arr) {
      return sjcl2.codec.base64.fromBits(arr, 1, 1);
    },
    toBits: function(str) {
      return sjcl2.codec.base64.toBits(str, 1);
    }
  };
  return sjcl2;
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("BigInteger", [], factory);
  } else {
    window.BigInteger = factory();
  }
})(function() {
  ;
  var dbits;
  var canary = 244837814094590;
  var j_lm = (canary & 16777215) == 15715070;
  function BigInteger2(a2, b, c) {
    if (a2 != null)
      if ("number" == typeof a2) this.fromNumber(a2, b, c);
      else if (b == null && "string" != typeof a2) this.fromString(a2, 256);
      else this.fromString(a2, b);
  }
  function nbi() {
    return new BigInteger2(null);
  }
  function am1(i2, x, w, j2, c, n) {
    while (--n >= 0) {
      var v = x * this[i2++] + w[j2] + c;
      c = Math.floor(v / 67108864);
      w[j2++] = v & 67108863;
    }
    return c;
  }
  function am2(i2, x, w, j2, c, n) {
    var xl = x & 32767, xh = x >> 15;
    while (--n >= 0) {
      var l = this[i2] & 32767;
      var h = this[i2++] >> 15;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 32767) << 15) + w[j2] + (c & 1073741823);
      c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
      w[j2++] = l & 1073741823;
    }
    return c;
  }
  function am3(i2, x, w, j2, c, n) {
    var xl = x & 16383, xh = x >> 14;
    while (--n >= 0) {
      var l = this[i2] & 16383;
      var h = this[i2++] >> 14;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 16383) << 14) + w[j2] + c;
      c = (l >> 28) + (m >> 14) + xh * h;
      w[j2++] = l & 268435455;
    }
    return c;
  }
  if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
    BigInteger2.prototype.am = am2;
    dbits = 30;
  } else if (j_lm && navigator.appName != "Netscape") {
    BigInteger2.prototype.am = am1;
    dbits = 26;
  } else {
    BigInteger2.prototype.am = am3;
    dbits = 28;
  }
  BigInteger2.prototype.DB = dbits;
  BigInteger2.prototype.DM = (1 << dbits) - 1;
  BigInteger2.prototype.DV = 1 << dbits;
  var BI_FP = 52;
  BigInteger2.prototype.FV = Math.pow(2, BI_FP);
  BigInteger2.prototype.F1 = BI_FP - dbits;
  BigInteger2.prototype.F2 = 2 * dbits - BI_FP;
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr, vv;
  rr = "0".charCodeAt(0);
  for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) {
    return BI_RM.charAt(n);
  }
  function intAt(s, i2) {
    var c = BI_RC[s.charCodeAt(i2)];
    return c == null ? -1 : c;
  }
  function bnpCopyTo(r) {
    for (var i2 = this.t - 1; i2 >= 0; --i2) r[i2] = this[i2];
    r.t = this.t;
    r.s = this.s;
  }
  function bnpFromInt(x) {
    this.t = 1;
    this.s = x < 0 ? -1 : 0;
    if (x > 0) this[0] = x;
    else if (x < -1) this[0] = x + DV;
    else this.t = 0;
  }
  function nbv(i2) {
    var r = nbi();
    r.fromInt(i2);
    return r;
  }
  function bnpFromString(s, b) {
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 256) k = 8;
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 4) k = 2;
    else {
      this.fromRadix(s, b);
      return;
    }
    this.t = 0;
    this.s = 0;
    var i2 = s.length, mi = false, sh = 0;
    while (--i2 >= 0) {
      var x = k == 8 ? s[i2] & 255 : intAt(s, i2);
      if (x < 0) {
        if (s.charAt(i2) == "-") mi = true;
        continue;
      }
      mi = false;
      if (sh == 0)
        this[this.t++] = x;
      else if (sh + k > this.DB) {
        this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
        this[this.t++] = x >> this.DB - sh;
      } else
        this[this.t - 1] |= x << sh;
      sh += k;
      if (sh >= this.DB) sh -= this.DB;
    }
    if (k == 8 && (s[0] & 128) != 0) {
      this.s = -1;
      if (sh > 0) this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
    }
    this.clamp();
    if (mi) BigInteger2.ZERO.subTo(this, this);
  }
  function bnpClamp() {
    var c = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == c) --this.t;
  }
  function bnToString(b) {
    if (this.s < 0) return "-" + this.negate().toString(b);
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1 << k) - 1, d, m = false, r = "", i2 = this.t;
    var p = this.DB - i2 * this.DB % k;
    if (i2-- > 0) {
      if (p < this.DB && (d = this[i2] >> p) > 0) {
        m = true;
        r = int2char(d);
      }
      while (i2 >= 0) {
        if (p < k) {
          d = (this[i2] & (1 << p) - 1) << k - p;
          d |= this[--i2] >> (p += this.DB - k);
        } else {
          d = this[i2] >> (p -= k) & km;
          if (p <= 0) {
            p += this.DB;
            --i2;
          }
        }
        if (d > 0) m = true;
        if (m) r += int2char(d);
      }
    }
    return m ? r : "0";
  }
  function bnNegate() {
    var r = nbi();
    BigInteger2.ZERO.subTo(this, r);
    return r;
  }
  function bnAbs() {
    return this.s < 0 ? this.negate() : this;
  }
  function bnCompareTo(a2) {
    var r = this.s - a2.s;
    if (r != 0) return r;
    var i2 = this.t;
    r = i2 - a2.t;
    if (r != 0) return this.s < 0 ? -r : r;
    while (--i2 >= 0) if ((r = this[i2] - a2[i2]) != 0) return r;
    return 0;
  }
  function nbits(x) {
    var r = 1, t;
    if ((t = x >>> 16) != 0) {
      x = t;
      r += 16;
    }
    if ((t = x >> 8) != 0) {
      x = t;
      r += 8;
    }
    if ((t = x >> 4) != 0) {
      x = t;
      r += 4;
    }
    if ((t = x >> 2) != 0) {
      x = t;
      r += 2;
    }
    if ((t = x >> 1) != 0) {
      x = t;
      r += 1;
    }
    return r;
  }
  function bnBitLength() {
    if (this.t <= 0) return 0;
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
  }
  function bnpDLShiftTo(n, r) {
    var i2;
    for (i2 = this.t - 1; i2 >= 0; --i2) r[i2 + n] = this[i2];
    for (i2 = n - 1; i2 >= 0; --i2) r[i2] = 0;
    r.t = this.t + n;
    r.s = this.s;
  }
  function bnpDRShiftTo(n, r) {
    for (var i2 = n; i2 < this.t; ++i2) r[i2 - n] = this[i2];
    r.t = Math.max(this.t - n, 0);
    r.s = this.s;
  }
  function bnpLShiftTo(n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i2;
    for (i2 = this.t - 1; i2 >= 0; --i2) {
      r[i2 + ds + 1] = this[i2] >> cbs | c;
      c = (this[i2] & bm) << bs;
    }
    for (i2 = ds - 1; i2 >= 0; --i2) r[i2] = 0;
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp();
  }
  function bnpRShiftTo(n, r) {
    r.s = this.s;
    var ds = Math.floor(n / this.DB);
    if (ds >= this.t) {
      r.t = 0;
      return;
    }
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for (var i2 = ds + 1; i2 < this.t; ++i2) {
      r[i2 - ds - 1] |= (this[i2] & bm) << cbs;
      r[i2 - ds] = this[i2] >> bs;
    }
    if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
    r.t = this.t - ds;
    r.clamp();
  }
  function bnpSubTo(a2, r) {
    var i2 = 0, c = 0, m = Math.min(a2.t, this.t);
    while (i2 < m) {
      c += this[i2] - a2[i2];
      r[i2++] = c & this.DM;
      c >>= this.DB;
    }
    if (a2.t < this.t) {
      c -= a2.s;
      while (i2 < this.t) {
        c += this[i2];
        r[i2++] = c & this.DM;
        c >>= this.DB;
      }
      c += this.s;
    } else {
      c += this.s;
      while (i2 < a2.t) {
        c -= a2[i2];
        r[i2++] = c & this.DM;
        c >>= this.DB;
      }
      c -= a2.s;
    }
    r.s = c < 0 ? -1 : 0;
    if (c < -1) r[i2++] = this.DV + c;
    else if (c > 0) r[i2++] = c;
    r.t = i2;
    r.clamp();
  }
  function bnpMultiplyTo(a2, r) {
    var x = this.abs(), y = a2.abs();
    var i2 = x.t;
    r.t = i2 + y.t;
    while (--i2 >= 0) r[i2] = 0;
    for (i2 = 0; i2 < y.t; ++i2) r[i2 + x.t] = x.am(0, y[i2], r, i2, 0, x.t);
    r.s = 0;
    r.clamp();
    if (this.s != a2.s) BigInteger2.ZERO.subTo(r, r);
  }
  function bnpSquareTo(r) {
    var x = this.abs();
    var i2 = r.t = 2 * x.t;
    while (--i2 >= 0) r[i2] = 0;
    for (i2 = 0; i2 < x.t - 1; ++i2) {
      var c = x.am(i2, x[i2], r, 2 * i2, 0, 1);
      if ((r[i2 + x.t] += x.am(i2 + 1, 2 * x[i2], r, 2 * i2 + 1, c, x.t - i2 - 1)) >= x.DV) {
        r[i2 + x.t] -= x.DV;
        r[i2 + x.t + 1] = 1;
      }
    }
    if (r.t > 0) r[r.t - 1] += x.am(i2, x[i2], r, 2 * i2, 0, 1);
    r.s = 0;
    r.clamp();
  }
  function bnpDivRemTo(m, q, r) {
    var pm = m.abs();
    if (pm.t <= 0) return;
    var pt = this.abs();
    if (pt.t < pm.t) {
      if (q != null) q.fromInt(0);
      if (r != null) this.copyTo(r);
      return;
    }
    if (r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB - nbits(pm[pm.t - 1]);
    if (nsh > 0) {
      pm.lShiftTo(nsh, y);
      pt.lShiftTo(nsh, r);
    } else {
      pm.copyTo(y);
      pt.copyTo(r);
    }
    var ys = y.t;
    var y0 = y[ys - 1];
    if (y0 == 0) return;
    var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
    var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
    var i2 = r.t, j2 = i2 - ys, t = q == null ? nbi() : q;
    y.dlShiftTo(j2, t);
    if (r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t, r);
    }
    BigInteger2.ONE.dlShiftTo(ys, t);
    t.subTo(y, y);
    while (y.t < ys) y[y.t++] = 0;
    while (--j2 >= 0) {
      var qd = r[--i2] == y0 ? this.DM : Math.floor(r[i2] * d1 + (r[i2 - 1] + e) * d2);
      if ((r[i2] += y.am(0, qd, r, j2, 0, ys)) < qd) {
        y.dlShiftTo(j2, t);
        r.subTo(t, r);
        while (r[i2] < --qd) r.subTo(t, r);
      }
    }
    if (q != null) {
      r.drShiftTo(ys, q);
      if (ts != ms) BigInteger2.ZERO.subTo(q, q);
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0) r.rShiftTo(nsh, r);
    if (ts < 0) BigInteger2.ZERO.subTo(r, r);
  }
  function bnMod(a2) {
    var r = nbi();
    this.abs().divRemTo(a2, null, r);
    if (this.s < 0 && r.compareTo(BigInteger2.ZERO) > 0) a2.subTo(r, r);
    return r;
  }
  function Classic(m) {
    this.m = m;
  }
  function cConvert(x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) {
    return x;
  }
  function cReduce(x) {
    x.divRemTo(this.m, null, x);
  }
  function cMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
  }
  function cSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
  }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  function bnpInvDigit() {
    if (this.t < 1) return 0;
    var x = this[0];
    if ((x & 1) == 0) return 0;
    var y = x & 3;
    y = y * (2 - (x & 15) * y) & 15;
    y = y * (2 - (x & 255) * y) & 255;
    y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
    y = y * (2 - x * y % this.DV) % this.DV;
    return y > 0 ? this.DV - y : -y;
  }
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << m.DB - 15) - 1;
    this.mt2 = 2 * m.t;
  }
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(BigInteger2.ZERO) > 0) this.m.subTo(r, r);
    return r;
  }
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  function montReduce(x) {
    while (x.t <= this.mt2)
      x[x.t++] = 0;
    for (var i2 = 0; i2 < this.m.t; ++i2) {
      var j2 = x[i2] & 32767;
      var u0 = j2 * this.mpl + ((j2 * this.mph + (x[i2] >> 15) * this.mpl & this.um) << 15) & x.DM;
      j2 = i2 + this.m.t;
      x[j2] += this.m.am(0, u0, x, i2, 0, this.m.t);
      while (x[j2] >= x.DV) {
        x[j2] -= x.DV;
        x[++j2]++;
      }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
  }
  function montSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
  }
  function montMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
  }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  function bnpIsEven() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
  }
  function bnpExp(e, z) {
    if (e > 4294967295 || e < 1) return BigInteger2.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i2 = nbits(e) - 1;
    g.copyTo(r);
    while (--i2 >= 0) {
      z.sqrTo(r, r2);
      if ((e & 1 << i2) > 0) z.mulTo(r2, g, r);
      else {
        var t = r;
        r = r2;
        r2 = t;
      }
    }
    return z.revert(r);
  }
  function bnModPowInt(e, m) {
    var z;
    if (e < 256 || m.isEven()) z = new Classic(m);
    else z = new Montgomery(m);
    return this.exp(e, z);
  }
  BigInteger2.prototype.copyTo = bnpCopyTo;
  BigInteger2.prototype.fromInt = bnpFromInt;
  BigInteger2.prototype.fromString = bnpFromString;
  BigInteger2.prototype.clamp = bnpClamp;
  BigInteger2.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger2.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger2.prototype.lShiftTo = bnpLShiftTo;
  BigInteger2.prototype.rShiftTo = bnpRShiftTo;
  BigInteger2.prototype.subTo = bnpSubTo;
  BigInteger2.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger2.prototype.squareTo = bnpSquareTo;
  BigInteger2.prototype.divRemTo = bnpDivRemTo;
  BigInteger2.prototype.invDigit = bnpInvDigit;
  BigInteger2.prototype.isEven = bnpIsEven;
  BigInteger2.prototype.exp = bnpExp;
  BigInteger2.prototype.toString = bnToString;
  BigInteger2.prototype.negate = bnNegate;
  BigInteger2.prototype.abs = bnAbs;
  BigInteger2.prototype.compareTo = bnCompareTo;
  BigInteger2.prototype.bitLength = bnBitLength;
  BigInteger2.prototype.mod = bnMod;
  BigInteger2.prototype.modPowInt = bnModPowInt;
  BigInteger2.ZERO = nbv(0);
  BigInteger2.ONE = nbv(1);
  function bnClone() {
    var r = nbi();
    this.copyTo(r);
    return r;
  }
  function bnIntValue() {
    if (this.s < 0) {
      if (this.t == 1) return this[0] - this.DV;
      else if (this.t == 0) return -1;
    } else if (this.t == 1) return this[0];
    else if (this.t == 0) return 0;
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
  }
  function bnByteValue() {
    return this.t == 0 ? this.s : this[0] << 24 >> 24;
  }
  function bnShortValue() {
    return this.t == 0 ? this.s : this[0] << 16 >> 16;
  }
  function bnpChunkSize(r) {
    return Math.floor(Math.LN2 * this.DB / Math.log(r));
  }
  function bnSigNum() {
    if (this.s < 0) return -1;
    else if (this.t <= 0 || this.t == 1 && this[0] <= 0) return 0;
    else return 1;
  }
  function bnpToRadix(b) {
    if (b == null) b = 10;
    if (this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a2 = Math.pow(b, cs);
    var d = nbv(a2), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d, y, z);
    while (y.signum() > 0) {
      r = (a2 + z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d, y, z);
    }
    return z.intValue().toString(b) + r;
  }
  function bnpFromRadix(s, b) {
    this.fromInt(0);
    if (b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b, cs), mi = false, j2 = 0, w = 0;
    for (var i2 = 0; i2 < s.length; ++i2) {
      var x = intAt(s, i2);
      if (x < 0) {
        if (s.charAt(i2) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b * w + x;
      if (++j2 >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w, 0);
        j2 = 0;
        w = 0;
      }
    }
    if (j2 > 0) {
      this.dMultiply(Math.pow(b, j2));
      this.dAddOffset(w, 0);
    }
    if (mi) BigInteger2.ZERO.subTo(this, this);
  }
  function bnpFromNumber(a2, b, c) {
    if ("number" == typeof b) {
      if (a2 < 2) this.fromInt(1);
      else {
        this.fromNumber(a2, c);
        if (!this.testBit(a2 - 1))
          this.bitwiseTo(BigInteger2.ONE.shiftLeft(a2 - 1), op_or, this);
        if (this.isEven()) this.dAddOffset(1, 0);
        while (!this.isProbablePrime(b)) {
          this.dAddOffset(2, 0);
          if (this.bitLength() > a2) this.subTo(BigInteger2.ONE.shiftLeft(a2 - 1), this);
        }
      }
    } else {
      var x = new Array(), t = a2 & 7;
      x.length = (a2 >> 3) + 1;
      b.nextBytes(x);
      if (t > 0) x[0] &= (1 << t) - 1;
      else x[0] = 0;
      this.fromString(x, 256);
    }
  }
  function bnToByteArray() {
    var i2 = this.t, r = new Array();
    r[0] = this.s;
    var p = this.DB - i2 * this.DB % 8, d, k = 0;
    if (i2-- > 0) {
      if (p < this.DB && (d = this[i2] >> p) != (this.s & this.DM) >> p)
        r[k++] = d | this.s << this.DB - p;
      while (i2 >= 0) {
        if (p < 8) {
          d = (this[i2] & (1 << p) - 1) << 8 - p;
          d |= this[--i2] >> (p += this.DB - 8);
        } else {
          d = this[i2] >> (p -= 8) & 255;
          if (p <= 0) {
            p += this.DB;
            --i2;
          }
        }
        if ((d & 128) != 0) d |= -256;
        if (k == 0 && (this.s & 128) != (d & 128)) ++k;
        if (k > 0 || d != this.s) r[k++] = d;
      }
    }
    return r;
  }
  function bnEquals(a2) {
    return this.compareTo(a2) == 0;
  }
  function bnMin(a2) {
    return this.compareTo(a2) < 0 ? this : a2;
  }
  function bnMax(a2) {
    return this.compareTo(a2) > 0 ? this : a2;
  }
  function bnpBitwiseTo(a2, op, r) {
    var i2, f, m = Math.min(a2.t, this.t);
    for (i2 = 0; i2 < m; ++i2) r[i2] = op(this[i2], a2[i2]);
    if (a2.t < this.t) {
      f = a2.s & this.DM;
      for (i2 = m; i2 < this.t; ++i2) r[i2] = op(this[i2], f);
      r.t = this.t;
    } else {
      f = this.s & this.DM;
      for (i2 = m; i2 < a2.t; ++i2) r[i2] = op(f, a2[i2]);
      r.t = a2.t;
    }
    r.s = op(this.s, a2.s);
    r.clamp();
  }
  function op_and(x, y) {
    return x & y;
  }
  function bnAnd(a2) {
    var r = nbi();
    this.bitwiseTo(a2, op_and, r);
    return r;
  }
  function op_or(x, y) {
    return x | y;
  }
  function bnOr(a2) {
    var r = nbi();
    this.bitwiseTo(a2, op_or, r);
    return r;
  }
  function op_xor(x, y) {
    return x ^ y;
  }
  function bnXor(a2) {
    var r = nbi();
    this.bitwiseTo(a2, op_xor, r);
    return r;
  }
  function op_andnot(x, y) {
    return x & ~y;
  }
  function bnAndNot(a2) {
    var r = nbi();
    this.bitwiseTo(a2, op_andnot, r);
    return r;
  }
  function bnNot() {
    var r = nbi();
    for (var i2 = 0; i2 < this.t; ++i2) r[i2] = this.DM & ~this[i2];
    r.t = this.t;
    r.s = ~this.s;
    return r;
  }
  function bnShiftLeft(n) {
    var r = nbi();
    if (n < 0) this.rShiftTo(-n, r);
    else this.lShiftTo(n, r);
    return r;
  }
  function bnShiftRight(n) {
    var r = nbi();
    if (n < 0) this.lShiftTo(-n, r);
    else this.rShiftTo(n, r);
    return r;
  }
  function lbit(x) {
    if (x == 0) return -1;
    var r = 0;
    if ((x & 65535) == 0) {
      x >>= 16;
      r += 16;
    }
    if ((x & 255) == 0) {
      x >>= 8;
      r += 8;
    }
    if ((x & 15) == 0) {
      x >>= 4;
      r += 4;
    }
    if ((x & 3) == 0) {
      x >>= 2;
      r += 2;
    }
    if ((x & 1) == 0) ++r;
    return r;
  }
  function bnGetLowestSetBit() {
    for (var i2 = 0; i2 < this.t; ++i2)
      if (this[i2] != 0) return i2 * this.DB + lbit(this[i2]);
    if (this.s < 0) return this.t * this.DB;
    return -1;
  }
  function cbit(x) {
    var r = 0;
    while (x != 0) {
      x &= x - 1;
      ++r;
    }
    return r;
  }
  function bnBitCount() {
    var r = 0, x = this.s & this.DM;
    for (var i2 = 0; i2 < this.t; ++i2) r += cbit(this[i2] ^ x);
    return r;
  }
  function bnTestBit(n) {
    var j2 = Math.floor(n / this.DB);
    if (j2 >= this.t) return this.s != 0;
    return (this[j2] & 1 << n % this.DB) != 0;
  }
  function bnpChangeBit(n, op) {
    var r = BigInteger2.ONE.shiftLeft(n);
    this.bitwiseTo(r, op, r);
    return r;
  }
  function bnSetBit(n) {
    return this.changeBit(n, op_or);
  }
  function bnClearBit(n) {
    return this.changeBit(n, op_andnot);
  }
  function bnFlipBit(n) {
    return this.changeBit(n, op_xor);
  }
  function bnpAddTo(a2, r) {
    var i2 = 0, c = 0, m = Math.min(a2.t, this.t);
    while (i2 < m) {
      c += this[i2] + a2[i2];
      r[i2++] = c & this.DM;
      c >>= this.DB;
    }
    if (a2.t < this.t) {
      c += a2.s;
      while (i2 < this.t) {
        c += this[i2];
        r[i2++] = c & this.DM;
        c >>= this.DB;
      }
      c += this.s;
    } else {
      c += this.s;
      while (i2 < a2.t) {
        c += a2[i2];
        r[i2++] = c & this.DM;
        c >>= this.DB;
      }
      c += a2.s;
    }
    r.s = c < 0 ? -1 : 0;
    if (c > 0) r[i2++] = c;
    else if (c < -1) r[i2++] = this.DV + c;
    r.t = i2;
    r.clamp();
  }
  function bnAdd(a2) {
    var r = nbi();
    this.addTo(a2, r);
    return r;
  }
  function bnSubtract(a2) {
    var r = nbi();
    this.subTo(a2, r);
    return r;
  }
  function bnMultiply(a2) {
    var r = nbi();
    this.multiplyTo(a2, r);
    return r;
  }
  function bnSquare() {
    var r = nbi();
    this.squareTo(r);
    return r;
  }
  function bnDivide(a2) {
    var r = nbi();
    this.divRemTo(a2, r, null);
    return r;
  }
  function bnRemainder(a2) {
    var r = nbi();
    this.divRemTo(a2, null, r);
    return r;
  }
  function bnDivideAndRemainder(a2) {
    var q = nbi(), r = nbi();
    this.divRemTo(a2, q, r);
    return new Array(q, r);
  }
  function bnpDMultiply(n) {
    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
  }
  function bnpDAddOffset(n, w) {
    if (n == 0) return;
    while (this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while (this[w] >= this.DV) {
      this[w] -= this.DV;
      if (++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  function NullExp() {
  }
  function nNop(x) {
    return x;
  }
  function nMulTo(x, y, r) {
    x.multiplyTo(y, r);
  }
  function nSqrTo(x, r) {
    x.squareTo(r);
  }
  NullExp.prototype.convert = nNop;
  NullExp.prototype.revert = nNop;
  NullExp.prototype.mulTo = nMulTo;
  NullExp.prototype.sqrTo = nSqrTo;
  function bnPow(e) {
    return this.exp(e, new NullExp());
  }
  function bnpMultiplyLowerTo(a2, n, r) {
    var i2 = Math.min(this.t + a2.t, n);
    r.s = 0;
    r.t = i2;
    while (i2 > 0) r[--i2] = 0;
    var j2;
    for (j2 = r.t - this.t; i2 < j2; ++i2) r[i2 + this.t] = this.am(0, a2[i2], r, i2, 0, this.t);
    for (j2 = Math.min(a2.t, n); i2 < j2; ++i2) this.am(0, a2[i2], r, i2, 0, n - i2);
    r.clamp();
  }
  function bnpMultiplyUpperTo(a2, n, r) {
    --n;
    var i2 = r.t = this.t + a2.t - n;
    r.s = 0;
    while (--i2 >= 0) r[i2] = 0;
    for (i2 = Math.max(n - this.t, 0); i2 < a2.t; ++i2)
      r[this.t + i2 - n] = this.am(n - i2, a2[i2], r, 0, 0, this.t + i2 - n);
    r.clamp();
    r.drShiftTo(1, r);
  }
  function Barrett(m) {
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger2.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
    this.m = m;
  }
  function barrettConvert(x) {
    if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
    else if (x.compareTo(this.m) < 0) return x;
    else {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }
  }
  function barrettRevert(x) {
    return x;
  }
  function barrettReduce(x) {
    x.drShiftTo(this.m.t - 1, this.r2);
    if (x.t > this.m.t + 1) {
      x.t = this.m.t + 1;
      x.clamp();
    }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
    x.subTo(this.r2, x);
    while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
  }
  function barrettSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
  }
  function barrettMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
  }
  Barrett.prototype.convert = barrettConvert;
  Barrett.prototype.revert = barrettRevert;
  Barrett.prototype.reduce = barrettReduce;
  Barrett.prototype.mulTo = barrettMulTo;
  Barrett.prototype.sqrTo = barrettSqrTo;
  function bnModPow(e, m) {
    var i2 = e.bitLength(), k, r = nbv(1), z;
    if (i2 <= 0) return r;
    else if (i2 < 18) k = 1;
    else if (i2 < 48) k = 3;
    else if (i2 < 144) k = 4;
    else if (i2 < 768) k = 5;
    else k = 6;
    if (i2 < 8)
      z = new Classic(m);
    else if (m.isEven())
      z = new Barrett(m);
    else
      z = new Montgomery(m);
    var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
    g[1] = z.convert(this);
    if (k > 1) {
      var g2 = nbi();
      z.sqrTo(g[1], g2);
      while (n <= km) {
        g[n] = nbi();
        z.mulTo(g2, g[n - 2], g[n]);
        n += 2;
      }
    }
    var j2 = e.t - 1, w, is1 = true, r2 = nbi(), t;
    i2 = nbits(e[j2]) - 1;
    while (j2 >= 0) {
      if (i2 >= k1) w = e[j2] >> i2 - k1 & km;
      else {
        w = (e[j2] & (1 << i2 + 1) - 1) << k1 - i2;
        if (j2 > 0) w |= e[j2 - 1] >> this.DB + i2 - k1;
      }
      n = k;
      while ((w & 1) == 0) {
        w >>= 1;
        --n;
      }
      if ((i2 -= n) < 0) {
        i2 += this.DB;
        --j2;
      }
      if (is1) {
        g[w].copyTo(r);
        is1 = false;
      } else {
        while (n > 1) {
          z.sqrTo(r, r2);
          z.sqrTo(r2, r);
          n -= 2;
        }
        if (n > 0) z.sqrTo(r, r2);
        else {
          t = r;
          r = r2;
          r2 = t;
        }
        z.mulTo(r2, g[w], r);
      }
      while (j2 >= 0 && (e[j2] & 1 << i2) == 0) {
        z.sqrTo(r, r2);
        t = r;
        r = r2;
        r2 = t;
        if (--i2 < 0) {
          i2 = this.DB - 1;
          --j2;
        }
      }
    }
    return z.revert(r);
  }
  function bnGCD(a2) {
    var x = this.s < 0 ? this.negate() : this.clone();
    var y = a2.s < 0 ? a2.negate() : a2.clone();
    if (x.compareTo(y) < 0) {
      var t = x;
      x = y;
      y = t;
    }
    var i2 = x.getLowestSetBit(), g = y.getLowestSetBit();
    if (g < 0) return x;
    if (i2 < g) g = i2;
    if (g > 0) {
      x.rShiftTo(g, x);
      y.rShiftTo(g, y);
    }
    while (x.signum() > 0) {
      if ((i2 = x.getLowestSetBit()) > 0) x.rShiftTo(i2, x);
      if ((i2 = y.getLowestSetBit()) > 0) y.rShiftTo(i2, y);
      if (x.compareTo(y) >= 0) {
        x.subTo(y, x);
        x.rShiftTo(1, x);
      } else {
        y.subTo(x, y);
        y.rShiftTo(1, y);
      }
    }
    if (g > 0) y.lShiftTo(g, y);
    return y;
  }
  function bnpModInt(n) {
    if (n <= 0) return 0;
    var d = this.DV % n, r = this.s < 0 ? n - 1 : 0;
    if (this.t > 0)
      if (d == 0) r = this[0] % n;
      else for (var i2 = this.t - 1; i2 >= 0; --i2) r = (d * r + this[i2]) % n;
    return r;
  }
  function bnModInverse(m) {
    var ac = m.isEven();
    if (this.isEven() && ac || m.signum() == 0) return BigInteger2.ZERO;
    var u = m.clone(), v = this.clone();
    var a2 = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
    while (u.signum() != 0) {
      while (u.isEven()) {
        u.rShiftTo(1, u);
        if (ac) {
          if (!a2.isEven() || !b.isEven()) {
            a2.addTo(this, a2);
            b.subTo(m, b);
          }
          a2.rShiftTo(1, a2);
        } else if (!b.isEven()) b.subTo(m, b);
        b.rShiftTo(1, b);
      }
      while (v.isEven()) {
        v.rShiftTo(1, v);
        if (ac) {
          if (!c.isEven() || !d.isEven()) {
            c.addTo(this, c);
            d.subTo(m, d);
          }
          c.rShiftTo(1, c);
        } else if (!d.isEven()) d.subTo(m, d);
        d.rShiftTo(1, d);
      }
      if (u.compareTo(v) >= 0) {
        u.subTo(v, u);
        if (ac) a2.subTo(c, a2);
        b.subTo(d, b);
      } else {
        v.subTo(u, v);
        if (ac) c.subTo(a2, c);
        d.subTo(b, d);
      }
    }
    if (v.compareTo(BigInteger2.ONE) != 0) return BigInteger2.ZERO;
    if (d.compareTo(m) >= 0) return d.subtract(m);
    if (d.signum() < 0) d.addTo(m, d);
    else return d;
    if (d.signum() < 0) return d.add(m);
    else return d;
  }
  var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
  var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
  function bnIsProbablePrime(t) {
    var i2, x = this.abs();
    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
      for (i2 = 0; i2 < lowprimes.length; ++i2)
        if (x[0] == lowprimes[i2]) return true;
      return false;
    }
    if (x.isEven()) return false;
    i2 = 1;
    while (i2 < lowprimes.length) {
      var m = lowprimes[i2], j2 = i2 + 1;
      while (j2 < lowprimes.length && m < lplim) m *= lowprimes[j2++];
      m = x.modInt(m);
      while (i2 < j2) if (m % lowprimes[i2++] == 0) return false;
    }
    return x.millerRabin(t);
  }
  function bnpMillerRabin(t) {
    var n1 = this.subtract(BigInteger2.ONE);
    var k = n1.getLowestSetBit();
    if (k <= 0) return false;
    var r = n1.shiftRight(k);
    t = t + 1 >> 1;
    if (t > lowprimes.length) t = lowprimes.length;
    var a2 = nbi();
    for (var i2 = 0; i2 < t; ++i2) {
      a2.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
      var y = a2.modPow(r, this);
      if (y.compareTo(BigInteger2.ONE) != 0 && y.compareTo(n1) != 0) {
        var j2 = 1;
        while (j2++ < k && y.compareTo(n1) != 0) {
          y = y.modPowInt(2, this);
          if (y.compareTo(BigInteger2.ONE) == 0) return false;
        }
        if (y.compareTo(n1) != 0) return false;
      }
    }
    return true;
  }
  BigInteger2.prototype.chunkSize = bnpChunkSize;
  BigInteger2.prototype.toRadix = bnpToRadix;
  BigInteger2.prototype.fromRadix = bnpFromRadix;
  BigInteger2.prototype.fromNumber = bnpFromNumber;
  BigInteger2.prototype.bitwiseTo = bnpBitwiseTo;
  BigInteger2.prototype.changeBit = bnpChangeBit;
  BigInteger2.prototype.addTo = bnpAddTo;
  BigInteger2.prototype.dMultiply = bnpDMultiply;
  BigInteger2.prototype.dAddOffset = bnpDAddOffset;
  BigInteger2.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
  BigInteger2.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
  BigInteger2.prototype.modInt = bnpModInt;
  BigInteger2.prototype.millerRabin = bnpMillerRabin;
  BigInteger2.prototype.clone = bnClone;
  BigInteger2.prototype.intValue = bnIntValue;
  BigInteger2.prototype.byteValue = bnByteValue;
  BigInteger2.prototype.shortValue = bnShortValue;
  BigInteger2.prototype.signum = bnSigNum;
  BigInteger2.prototype.toByteArray = bnToByteArray;
  BigInteger2.prototype.equals = bnEquals;
  BigInteger2.prototype.min = bnMin;
  BigInteger2.prototype.max = bnMax;
  BigInteger2.prototype.and = bnAnd;
  BigInteger2.prototype.or = bnOr;
  BigInteger2.prototype.xor = bnXor;
  BigInteger2.prototype.andNot = bnAndNot;
  BigInteger2.prototype.not = bnNot;
  BigInteger2.prototype.shiftLeft = bnShiftLeft;
  BigInteger2.prototype.shiftRight = bnShiftRight;
  BigInteger2.prototype.getLowestSetBit = bnGetLowestSetBit;
  BigInteger2.prototype.bitCount = bnBitCount;
  BigInteger2.prototype.testBit = bnTestBit;
  BigInteger2.prototype.setBit = bnSetBit;
  BigInteger2.prototype.clearBit = bnClearBit;
  BigInteger2.prototype.flipBit = bnFlipBit;
  BigInteger2.prototype.add = bnAdd;
  BigInteger2.prototype.subtract = bnSubtract;
  BigInteger2.prototype.multiply = bnMultiply;
  BigInteger2.prototype.divide = bnDivide;
  BigInteger2.prototype.remainder = bnRemainder;
  BigInteger2.prototype.divideAndRemainder = bnDivideAndRemainder;
  BigInteger2.prototype.modPow = bnModPow;
  BigInteger2.prototype.modInverse = bnModInverse;
  BigInteger2.prototype.pow = bnPow;
  BigInteger2.prototype.gcd = bnGCD;
  BigInteger2.prototype.isProbablePrime = bnIsProbablePrime;
  BigInteger2.prototype.square = bnSquare;
  return BigInteger2;
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("SRPClient", [
      "sha1",
      "sjcl",
      "BigInteger"
    ], factory);
  } else {
    window.SRPClient = factory(sha1, sjcl, BigInteger);
  }
})(function(sha12, sjcl2, BigInteger2) {
  var SRPClient2 = function(username, password, group, hashFn) {
    if (!username)
      throw "Username cannot be empty.";
    this.username = username;
    this.password = password;
    this.hashFn = hashFn || "sha-1";
    var group = group || 1024;
    var initVal = this.initVals[group];
    this.N = new BigInteger2(initVal.N, 16);
    this.g = new BigInteger2(initVal.g, 16);
    this.gBn = new BigInteger2(initVal.g, 16);
    this.k = this.k();
    this.one = new BigInteger2("1", 16);
    this.two = new BigInteger2("2", 16);
  };
  SRPClient2.prototype = {
    toHexString: function(bi) {
      var hex = bi.toString(16);
      if (hex.length % 2 === 1) {
        hex = "0" + hex;
      }
      return hex;
    },
    padLeft: function(orig, len) {
      if (orig.length > len) return orig;
      var arr = Array(len - orig.length + 1);
      return arr.join("0") + orig;
    },
    bytesToHex: function(bytes) {
      var self2 = this;
      var b = bytes.map(function(x) {
        return self2.padLeft(self2.toHexString(x), 2);
      });
      return b.join("");
    },
    hexToBytes: function(hex) {
      if (hex.length % 2 === 1) throw new Error("hexToBytes can't have a string with an odd number of characters.");
      if (hex.indexOf("0x") === 0) hex = hex.slice(2);
      return hex.match(/../g).map(function(x) {
        return parseInt(x, 16);
      });
    },
    stringToBytes: function(str) {
      var bytes = [];
      for (var i2 = 0; i2 < str.length; ++i2) {
        bytes.push(str.charCodeAt(i2));
      }
      return bytes;
    },
    bytesToString: function(byteArr) {
      var str = "";
      for (var i2 = 0; i2 < byteArr.length; i2++)
        str += String.fromCharCode(byteArr[i2]);
      return str;
    },
    /*
    * Calculate k = H(N || g), which is used
    * throughout various SRP calculations.
    */
    k: function() {
      var toHash = [
        this.toHexString(this.N),
        this.toHexString(this.g)
      ];
      return this.paddedHash(toHash);
    },
    /*
    * Calculate x = SHA1(s | SHA1(I | ":" | P))
    */
    calculateX: function(saltHex) {
      if (!saltHex) throw "Missing parameter.";
      if (!this.username || !this.password)
        throw "Username and password cannot be empty.";
      var usernameBytes = this.stringToBytes(this.username);
      var passwordBytes = this.hexToBytes(this.password);
      var upBytes = usernameBytes.concat([58]).concat(passwordBytes);
      var upHash = this.hash(this.bytesToString(upBytes));
      var upHashBytes = this.hexToBytes(upHash);
      var saltBytes = this.hexToBytes(saltHex);
      var saltUpBytes = saltBytes.concat(upHashBytes);
      var saltUpHash = this.hash(this.bytesToString(saltUpBytes));
      var xtmp = new BigInteger2(saltUpHash, 16);
      if (xtmp.compareTo(this.N) < 0) {
        return xtmp;
      } else {
        var one = new BigInteger2(1, 16);
        return xtmp.mod(this.N.subtract(one));
      }
    },
    /*
    * Calculate v = g^x % N
    */
    calculateV: function(salt) {
      if (!salt) throw "Missing parameter.";
      var x = this.calculateX(salt);
      return this.g.modPow(x, this.N);
    },
    /*
    * Calculate u = SHA1(PAD(A) | PAD(B)), which serves
    * to prevent an attacker who learns a user's verifier
    * from being able to authenticate as that user.
    */
    calculateU: function(A, B) {
      if (!A || !B) throw "Missing parameter(s).";
      if (A.mod(this.N).toString() == "0" || B.mod(this.N).toString() == "0")
        throw "ABORT: illegal_parameter";
      var toHash = [this.toHexString(A), this.toHexString(B)];
      return this.paddedHash(toHash);
    },
    canCalculateA: function(a2) {
      if (!a2) throw "Missing parameter.";
      return Math.ceil(a2.bitLength() / 8) >= 256 / 8;
    },
    /*
    * 2.5.4 Calculate the client's public value A = g^a % N,
    * where a is a random number at least 256 bits in length.
    */
    calculateA: function(a2) {
      if (!a2) throw "Missing parameter.";
      if (!this.canCalculateA(a2))
        throw "Client key length is less than 256 bits.";
      var A = this.g.modPow(a2, this.N);
      if (A.mod(this.N).toString() == "0")
        throw "ABORT: illegal_parameter";
      return A;
    },
    /*
    * Calculate match M = H(H(N) XOR H(g) | H(username) | s | A | B | K)
    */
    calculateM1: function(A, B, K, salt) {
      if (!A || !B || !K || !salt)
        throw "Missing parameter(s).";
      if (A.mod(this.N).toString() == "0" || B.mod(this.N).toString() == "0")
        throw "ABORT: illegal_parameter";
      var hashN = this.hexHash(this.toHexString(this.N));
      var hashg = this.hexHash(this.toHexString(this.g));
      var hashUsername = this.hash(this.username);
      var xorNg_bytes = [], hashN_bytes = this.hexToBytes(hashN), hashg_bytes = this.hexToBytes(hashg);
      for (var i2 = 0; i2 < hashN_bytes.length; i2++)
        xorNg_bytes[i2] = hashN_bytes[i2] ^ hashg_bytes[i2];
      var xorNg = this.bytesToHex(xorNg_bytes);
      var aHex = this.toHexString(A);
      var bHex = this.toHexString(B);
      var toHash = [xorNg, hashUsername, salt, aHex, bHex, K];
      var toHash_str = "";
      for (var j2 = 0; j2 < toHash.length; j2++) {
        toHash_str += toHash[j2];
      }
      return new BigInteger2(this.hexHash(toHash_str), 16);
    },
    /*
    * Calculate match M = H(H(N) XOR H(g) | H(username) | s | A | B | K) and return as hex string
    */
    calculateM: function(A, B, K, salt) {
      if (!A || !B || !K || !salt)
        throw "Missing parameter(s).";
      if (A.mod(this.N).toString() == "0" || B.mod(this.N).toString() == "0")
        throw "ABORT: illegal_parameter";
      var hashN = this.hexHash(this.toHexString(this.N));
      var hashg = this.hexHash(this.toHexString(this.g));
      var hashUsername = this.hash(this.username);
      var xorNg_bytes = [], hashN_bytes = this.hexToBytes(hashN), hashg_bytes = this.hexToBytes(hashg);
      for (var i2 = 0; i2 < hashN_bytes.length; i2++)
        xorNg_bytes[i2] = hashN_bytes[i2] ^ hashg_bytes[i2];
      var xorNg = this.bytesToHex(xorNg_bytes);
      var aHex = this.toHexString(A);
      var bHex = this.toHexString(B);
      var toHash = [xorNg, hashUsername, salt, aHex, bHex, K];
      var toHash_str = "";
      for (var j2 = 0; j2 < toHash.length; j2++) {
        toHash_str += toHash[j2];
      }
      return this.hexHash(toHash_str);
    },
    /*
    * Calculate match M = H(A, B, K) or M = H(A, M, K)
    */
    calculateM2: function(A, B_or_M, K) {
      if (!A || !B_or_M || !K)
        throw "Missing parameter(s).";
      if (A.mod(this.N).toString() == "0" || B_or_M.mod(this.N).toString() == "0")
        throw "ABORT: illegal_parameter";
      var aHex = this.toHexString(A);
      var bHex = this.toHexString(B_or_M);
      var toHash = [aHex, bHex, K];
      var toHash_str = "";
      for (var j2 = 0; j2 < toHash.length; j2++) {
        toHash_str += toHash[j2];
      }
      return new BigInteger2(this.hexHash(toHash_str), 16);
    },
    /*
    * Calculate the client's premaster secret 
    * S = (B - (k * g^x)) ^ (a + (u * x)) % N
    */
    calculateS: function(B, salt, uu, aa) {
      if (!B || !salt || !uu || !aa)
        throw "Missing parameters.";
      if (B.mod(this.N).toString() == "0")
        throw "ABORT: illegal_parameter";
      var x = this.calculateX(salt);
      var bx = this.g.modPow(x, this.N);
      var btmp = B.add(this.N.multiply(this.k)).subtract(bx.multiply(this.k)).mod(this.N);
      return btmp.modPow(x.multiply(uu).add(aa), this.N);
    },
    calculateK: function(S) {
      return this.hexHash(this.toHexString(S));
    },
    /*
    * Helper functions for random number
    * generation and format conversion.
    */
    /* Generate a random big integer */
    srpRandom: function() {
      var words = sjcl2.random.randomWords(8, 0);
      var hex = sjcl2.codec.hex.fromBits(words);
      if (hex.length != 64)
        throw "Invalid random number size.";
      var r = new BigInteger2(hex, 16);
      if (r.compareTo(this.N) >= 0)
        r = a.mod(this.N.subtract(this.one));
      if (r.compareTo(this.two) < 0)
        r = two;
      return r;
    },
    /* Return a random hexadecimal salt */
    randomHexSalt: function() {
      var words = sjcl2.random.randomWords(8, 0);
      var hex = sjcl2.codec.hex.fromBits(words);
      return hex;
    },
    /*
    * Helper functions for hasing/padding.
    */
    /*
    * SHA1 hashing function with padding: input 
    * is prefixed with 0 to meet N hex width.
    */
    paddedHash: function(array) {
      var nlen = 2 * (this.toHexString(this.N).length * 4 + 7 >> 3);
      var toHash = "";
      for (var i2 = 0; i2 < array.length; i2++) {
        toHash += this.nZeros(nlen - array[i2].length) + array[i2];
      }
      var hash = new BigInteger2(this.hexHash(toHash), 16);
      return hash.mod(this.N);
    },
    /* 
    * Generic hashing function.
    */
    hash: function(str) {
      switch (this.hashFn.toLowerCase()) {
        case "sha-256":
          var s = sjcl2.codec.hex.fromBits(
            sjcl2.hash.sha256.hash(str)
          );
          return this.nZeros(64 - s.length) + s;
        case "sha-1":
        default:
          return sha12.calcSHA1(str);
      }
    },
    /*
    * Hexadecimal hashing function.
    */
    hexHash: function(str) {
      switch (this.hashFn.toLowerCase()) {
        case "sha-256":
          var s = sjcl2.codec.hex.fromBits(
            sjcl2.hash.sha256.hash(
              sjcl2.codec.hex.toBits(str)
            )
          );
          return this.nZeros(64 - s.length) + s;
        case "sha-1":
        default:
          return this.hash(this.pack(str));
      }
    },
    /*
    * Hex to string conversion.
    */
    pack: function(hex) {
      if (hex.length % 2 != 0) hex = "0" + hex;
      i = 0;
      ascii = "";
      while (i < hex.length / 2) {
        ascii = ascii + String.fromCharCode(
          parseInt(hex.substr(i * 2, 2), 16)
        );
        i++;
      }
      return ascii;
    },
    /* Return a string with N zeros. */
    nZeros: function(n) {
      if (n < 1) return "";
      var t = this.nZeros(n >> 1);
      return (n & 1) == 0 ? t + t : t + t + "0";
    },
    /*
    * SRP group parameters, composed of N (hexadecimal
    * prime value) and g (decimal group generator).
    * See http://tools.ietf.org/html/rfc5054#appendix-A
    */
    initVals: {
      1024: {
        N: "EEAF0AB9ADB38DD69C33F80AFA8FC5E86072618775FF3C0B9EA2314C9C256576D674DF7496EA81D3383B4813D692C6E0E0D5D8E250B98BE48E495C1D6089DAD15DC7D7B46154D6B6CE8EF4AD69B15D4982559B297BCF1885C529F566660E57EC68EDBC3C05726CC02FD4CBF4976EAA9AFD5138FE8376435B9FC61D2FC0EB06E3",
        g: "2"
      },
      1536: {
        N: "9DEF3CAFB939277AB1F12A8617A47BBBDBA51DF499AC4C80BEEEA9614B19CC4D5F4F5F556E27CBDE51C6A94BE4607A291558903BA0D0F84380B655BB9A22E8DCDF028A7CEC67F0D08134B1C8B97989149B609E0BE3BAB63D47548381DBC5B1FC764E3F4B53DD9DA1158BFD3E2B9C8CF56EDF019539349627DB2FD53D24B7C48665772E437D6C7F8CE442734AF7CCB7AE837C264AE3A9BEB87F8A2FE9B8B5292E5A021FFF5E91479E8CE7A28C2442C6F315180F93499A234DCF76E3FED135F9BB",
        g: "2"
      },
      2048: {
        N: "AC6BDB41324A9A9BF166DE5E1389582FAF72B6651987EE07FC3192943DB56050A37329CBB4A099ED8193E0757767A13DD52312AB4B03310DCD7F48A9DA04FD50E8083969EDB767B0CF6095179A163AB3661A05FBD5FAAAE82918A9962F0B93B855F97993EC975EEAA80D740ADBF4FF747359D041D5C33EA71D281E446B14773BCA97B43A23FB801676BD207A436C6481F1D2B9078717461A5B9D32E688F87748544523B524B0D57D5EA77A2775D2ECFA032CFBDBF52FB3786160279004E57AE6AF874E7303CE53299CCC041C7BC308D82A5698F3A8D0C38271AE35F8E9DBFBB694B5C803D89F7AE435DE236D525F54759B65E372FCD68EF20FA7111F9E4AFF73",
        g: "2"
      },
      3072: {
        N: "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",
        g: "5"
      },
      4096: {
        N: "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A92108011A723C12A787E6D788719A10BDBA5B2699C327186AF4E23C1A946834B6150BDA2583E9CA2AD44CE8DBBBC2DB04DE8EF92E8EFC141FBECAA6287C59474E6BC05D99B2964FA090C3A2233BA186515BE7ED1F612970CEE2D7AFB81BDD762170481CD0069127D5B05AA993B4EA988D8FDDC186FFB7DC90A6C08F4DF435C934063199FFFFFFFFFFFFFFFF",
        g: "5"
      },
      6144: {
        N: "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A92108011A723C12A787E6D788719A10BDBA5B2699C327186AF4E23C1A946834B6150BDA2583E9CA2AD44CE8DBBBC2DB04DE8EF92E8EFC141FBECAA6287C59474E6BC05D99B2964FA090C3A2233BA186515BE7ED1F612970CEE2D7AFB81BDD762170481CD0069127D5B05AA993B4EA988D8FDDC186FFB7DC90A6C08F4DF435C93402849236C3FAB4D27C7026C1D4DCB2602646DEC9751E763DBA37BDF8FF9406AD9E530EE5DB382F413001AEB06A53ED9027D831179727B0865A8918DA3EDBEBCF9B14ED44CE6CBACED4BB1BDB7F1447E6CC254B332051512BD7AF426FB8F401378CD2BF5983CA01C64B92ECF032EA15D1721D03F482D7CE6E74FEF6D55E702F46980C82B5A84031900B1C9E59E7C97FBEC7E8F323A97A7E36CC88BE0F1D45B7FF585AC54BD407B22B4154AACC8F6D7EBF48E1D814CC5ED20F8037E0A79715EEF29BE32806A1D58BB7C5DA76F550AA3D8A1FBFF0EB19CCB1A313D55CDA56C9EC2EF29632387FE8D76E3C0468043E8F663F4860EE12BF2D5B0B7474D6E694F91E6DCC4024FFFFFFFFFFFFFFFF",
        g: "5"
      },
      8192: {
        N: "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A92108011A723C12A787E6D788719A10BDBA5B2699C327186AF4E23C1A946834B6150BDA2583E9CA2AD44CE8DBBBC2DB04DE8EF92E8EFC141FBECAA6287C59474E6BC05D99B2964FA090C3A2233BA186515BE7ED1F612970CEE2D7AFB81BDD762170481CD0069127D5B05AA993B4EA988D8FDDC186FFB7DC90A6C08F4DF435C93402849236C3FAB4D27C7026C1D4DCB2602646DEC9751E763DBA37BDF8FF9406AD9E530EE5DB382F413001AEB06A53ED9027D831179727B0865A8918DA3EDBEBCF9B14ED44CE6CBACED4BB1BDB7F1447E6CC254B332051512BD7AF426FB8F401378CD2BF5983CA01C64B92ECF032EA15D1721D03F482D7CE6E74FEF6D55E702F46980C82B5A84031900B1C9E59E7C97FBEC7E8F323A97A7E36CC88BE0F1D45B7FF585AC54BD407B22B4154AACC8F6D7EBF48E1D814CC5ED20F8037E0A79715EEF29BE32806A1D58BB7C5DA76F550AA3D8A1FBFF0EB19CCB1A313D55CDA56C9EC2EF29632387FE8D76E3C0468043E8F663F4860EE12BF2D5B0B7474D6E694F91E6DBE115974A3926F12FEE5E438777CB6A932DF8CD8BEC4D073B931BA3BC832B68D9DD300741FA7BF8AFC47ED2576F6936BA424663AAB639C5AE4F5683423B4742BF1C978238F16CBE39D652DE3FDB8BEFC848AD922222E04A4037C0713EB57A81A23F0C73473FC646CEA306B4BCBC8862F8385DDFA9D4B7FA2C087E879683303ED5BDD3A062B3CF5B3A278A66D2A13F83F44F82DDF310EE074AB6A364597E899A0255DC164F31CC50846851DF9AB48195DED7EA1B1D510BD7EE74D73FAF36BC31ECFA268359046F4EB879F924009438B481C6CD7889A002ED5EE382BC9190DA6FC026E479558E4475677E9AA9E3050E2765694DFC81F56E880B96E7160C980DD98EDD3DFFFFFFFFFFFFFFFFF",
        g: "19"
      }
    },
    /*
    * Server-side SRP functions. These should not
    * be used on the client except for debugging.
    */
    /* Calculate the server's public value B. */
    calculateB: function(b, v) {
      if (!b || !v) throw "Missing parameters.";
      var bb = this.g.modPow(b, this.N);
      var B = bb.add(v.multiply(this.k)).mod(this.N);
      return B;
    },
    /* Calculate the server's premaster secret */
    calculateServerS: function(A, v, u, B) {
      if (!A || !v || !u || !B)
        throw "Missing parameters.";
      if (A.mod(this.N).toString() == "0" || B.mod(this.N).toString() == "0")
        throw "ABORT: illegal_parameter";
      return v.modPow(u, this.N).multiply(A).mod(this.N).modPow(B, this.N);
    }
  };
  return SRPClient2;
});
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.0.2
 */
;
(function() {
  "use strict";
  function lib$es6$promise$utils$$objectOrFunction(x) {
    return typeof x === "function" || typeof x === "object" && x !== null;
  }
  function lib$es6$promise$utils$$isFunction(x) {
    return typeof x === "function";
  }
  function lib$es6$promise$utils$$isMaybeThenable(x) {
    return typeof x === "object" && x !== null;
  }
  var lib$es6$promise$utils$$_isArray;
  if (!Array.isArray) {
    lib$es6$promise$utils$$_isArray = function(x) {
      return Object.prototype.toString.call(x) === "[object Array]";
    };
  } else {
    lib$es6$promise$utils$$_isArray = Array.isArray;
  }
  var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
  var lib$es6$promise$asap$$len = 0;
  var lib$es6$promise$asap$$toString = {}.toString;
  var lib$es6$promise$asap$$vertxNext;
  var lib$es6$promise$asap$$customSchedulerFn;
  var lib$es6$promise$asap$$asap = function asap(callback, arg) {
    lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
    lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
    lib$es6$promise$asap$$len += 2;
    if (lib$es6$promise$asap$$len === 2) {
      if (lib$es6$promise$asap$$customSchedulerFn) {
        lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
      } else {
        lib$es6$promise$asap$$scheduleFlush();
      }
    }
  };
  function lib$es6$promise$asap$$setScheduler(scheduleFn) {
    lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
  }
  function lib$es6$promise$asap$$setAsap(asapFn) {
    lib$es6$promise$asap$$asap = asapFn;
  }
  var lib$es6$promise$asap$$browserWindow = typeof window !== "undefined" ? window : void 0;
  var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
  var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
  var lib$es6$promise$asap$$isNode = typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
  var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
  function lib$es6$promise$asap$$useNextTick() {
    return function() {
      process.nextTick(lib$es6$promise$asap$$flush);
    };
  }
  function lib$es6$promise$asap$$useVertxTimer() {
    return function() {
      lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
    };
  }
  function lib$es6$promise$asap$$useMutationObserver() {
    var iterations = 0;
    var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
    var node = document.createTextNode("");
    observer.observe(node, { characterData: true });
    return function() {
      node.data = iterations = ++iterations % 2;
    };
  }
  function lib$es6$promise$asap$$useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = lib$es6$promise$asap$$flush;
    return function() {
      channel.port2.postMessage(0);
    };
  }
  function lib$es6$promise$asap$$useSetTimeout() {
    return function() {
      setTimeout(lib$es6$promise$asap$$flush, 1);
    };
  }
  var lib$es6$promise$asap$$queue = new Array(1e3);
  function lib$es6$promise$asap$$flush() {
    for (var i2 = 0; i2 < lib$es6$promise$asap$$len; i2 += 2) {
      var callback = lib$es6$promise$asap$$queue[i2];
      var arg = lib$es6$promise$asap$$queue[i2 + 1];
      callback(arg);
      lib$es6$promise$asap$$queue[i2] = void 0;
      lib$es6$promise$asap$$queue[i2 + 1] = void 0;
    }
    lib$es6$promise$asap$$len = 0;
  }
  function lib$es6$promise$asap$$attemptVertx() {
    try {
      var r = require;
      var vertx = r("vertx");
      lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
      return lib$es6$promise$asap$$useVertxTimer();
    } catch (e) {
      return lib$es6$promise$asap$$useSetTimeout();
    }
  }
  var lib$es6$promise$asap$$scheduleFlush;
  if (lib$es6$promise$asap$$isNode) {
    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
  } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
  } else if (lib$es6$promise$asap$$isWorker) {
    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
  } else if (lib$es6$promise$asap$$browserWindow === void 0 && typeof require === "function") {
    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
  } else {
    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
  }
  function lib$es6$promise$$internal$$noop() {
  }
  var lib$es6$promise$$internal$$PENDING = void 0;
  var lib$es6$promise$$internal$$FULFILLED = 1;
  var lib$es6$promise$$internal$$REJECTED = 2;
  var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
  function lib$es6$promise$$internal$$selfFulfillment() {
    return new TypeError("You cannot resolve a promise with itself");
  }
  function lib$es6$promise$$internal$$cannotReturnOwn() {
    return new TypeError("A promises callback cannot return that same promise.");
  }
  function lib$es6$promise$$internal$$getThen(promise) {
    try {
      return promise.then;
    } catch (error) {
      lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
      return lib$es6$promise$$internal$$GET_THEN_ERROR;
    }
  }
  function lib$es6$promise$$internal$$tryThen(then, value2, fulfillmentHandler, rejectionHandler) {
    try {
      then.call(value2, fulfillmentHandler, rejectionHandler);
    } catch (e) {
      return e;
    }
  }
  function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
    lib$es6$promise$asap$$asap(function(promise2) {
      var sealed = false;
      var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value2) {
        if (sealed) {
          return;
        }
        sealed = true;
        if (thenable !== value2) {
          lib$es6$promise$$internal$$resolve(promise2, value2);
        } else {
          lib$es6$promise$$internal$$fulfill(promise2, value2);
        }
      }, function(reason) {
        if (sealed) {
          return;
        }
        sealed = true;
        lib$es6$promise$$internal$$reject(promise2, reason);
      }, "Settle: " + (promise2._label || " unknown promise"));
      if (!sealed && error) {
        sealed = true;
        lib$es6$promise$$internal$$reject(promise2, error);
      }
    }, promise);
  }
  function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
    if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
      lib$es6$promise$$internal$$fulfill(promise, thenable._result);
    } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
      lib$es6$promise$$internal$$reject(promise, thenable._result);
    } else {
      lib$es6$promise$$internal$$subscribe(thenable, void 0, function(value2) {
        lib$es6$promise$$internal$$resolve(promise, value2);
      }, function(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      });
    }
  }
  function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
    if (maybeThenable.constructor === promise.constructor) {
      lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
    } else {
      var then = lib$es6$promise$$internal$$getThen(maybeThenable);
      if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
      } else if (then === void 0) {
        lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
      } else if (lib$es6$promise$utils$$isFunction(then)) {
        lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
      }
    }
  }
  function lib$es6$promise$$internal$$resolve(promise, value2) {
    if (promise === value2) {
      lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
    } else if (lib$es6$promise$utils$$objectOrFunction(value2)) {
      lib$es6$promise$$internal$$handleMaybeThenable(promise, value2);
    } else {
      lib$es6$promise$$internal$$fulfill(promise, value2);
    }
  }
  function lib$es6$promise$$internal$$publishRejection(promise) {
    if (promise._onerror) {
      promise._onerror(promise._result);
    }
    lib$es6$promise$$internal$$publish(promise);
  }
  function lib$es6$promise$$internal$$fulfill(promise, value2) {
    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
      return;
    }
    promise._result = value2;
    promise._state = lib$es6$promise$$internal$$FULFILLED;
    if (promise._subscribers.length !== 0) {
      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
    }
  }
  function lib$es6$promise$$internal$$reject(promise, reason) {
    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
      return;
    }
    promise._state = lib$es6$promise$$internal$$REJECTED;
    promise._result = reason;
    lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
  }
  function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
    var subscribers = parent._subscribers;
    var length = subscribers.length;
    parent._onerror = null;
    subscribers[length] = child;
    subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
    subscribers[length + lib$es6$promise$$internal$$REJECTED] = onRejection;
    if (length === 0 && parent._state) {
      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
    }
  }
  function lib$es6$promise$$internal$$publish(promise) {
    var subscribers = promise._subscribers;
    var settled = promise._state;
    if (subscribers.length === 0) {
      return;
    }
    var child, callback, detail = promise._result;
    for (var i2 = 0; i2 < subscribers.length; i2 += 3) {
      child = subscribers[i2];
      callback = subscribers[i2 + settled];
      if (child) {
        lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
      } else {
        callback(detail);
      }
    }
    promise._subscribers.length = 0;
  }
  function lib$es6$promise$$internal$$ErrorObject() {
    this.error = null;
  }
  var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
  function lib$es6$promise$$internal$$tryCatch(callback, detail) {
    try {
      return callback(detail);
    } catch (e) {
      lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
      return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
    }
  }
  function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
    var hasCallback = lib$es6$promise$utils$$isFunction(callback), value2, error, succeeded, failed;
    if (hasCallback) {
      value2 = lib$es6$promise$$internal$$tryCatch(callback, detail);
      if (value2 === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
        failed = true;
        error = value2.error;
        value2 = null;
      } else {
        succeeded = true;
      }
      if (promise === value2) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
        return;
      }
    } else {
      value2 = detail;
      succeeded = true;
    }
    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
    } else if (hasCallback && succeeded) {
      lib$es6$promise$$internal$$resolve(promise, value2);
    } else if (failed) {
      lib$es6$promise$$internal$$reject(promise, error);
    } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
      lib$es6$promise$$internal$$fulfill(promise, value2);
    } else if (settled === lib$es6$promise$$internal$$REJECTED) {
      lib$es6$promise$$internal$$reject(promise, value2);
    }
  }
  function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
    try {
      resolver(function resolvePromise(value2) {
        lib$es6$promise$$internal$$resolve(promise, value2);
      }, function rejectPromise(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      });
    } catch (e) {
      lib$es6$promise$$internal$$reject(promise, e);
    }
  }
  function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
    var enumerator = this;
    enumerator._instanceConstructor = Constructor;
    enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);
    if (enumerator._validateInput(input)) {
      enumerator._input = input;
      enumerator.length = input.length;
      enumerator._remaining = input.length;
      enumerator._init();
      if (enumerator.length === 0) {
        lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
      } else {
        enumerator.length = enumerator.length || 0;
        enumerator._enumerate();
        if (enumerator._remaining === 0) {
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
        }
      }
    } else {
      lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
    }
  }
  lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
    return lib$es6$promise$utils$$isArray(input);
  };
  lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
    return new Error("Array Methods must be provided an Array");
  };
  lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
    this._result = new Array(this.length);
  };
  var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
  lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
    var enumerator = this;
    var length = enumerator.length;
    var promise = enumerator.promise;
    var input = enumerator._input;
    for (var i2 = 0; promise._state === lib$es6$promise$$internal$$PENDING && i2 < length; i2++) {
      enumerator._eachEntry(input[i2], i2);
    }
  };
  lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i2) {
    var enumerator = this;
    var c = enumerator._instanceConstructor;
    if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
      if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
        entry._onerror = null;
        enumerator._settledAt(entry._state, i2, entry._result);
      } else {
        enumerator._willSettleAt(c.resolve(entry), i2);
      }
    } else {
      enumerator._remaining--;
      enumerator._result[i2] = entry;
    }
  };
  lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i2, value2) {
    var enumerator = this;
    var promise = enumerator.promise;
    if (promise._state === lib$es6$promise$$internal$$PENDING) {
      enumerator._remaining--;
      if (state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value2);
      } else {
        enumerator._result[i2] = value2;
      }
    }
    if (enumerator._remaining === 0) {
      lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
    }
  };
  lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i2) {
    var enumerator = this;
    lib$es6$promise$$internal$$subscribe(promise, void 0, function(value2) {
      enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i2, value2);
    }, function(reason) {
      enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i2, reason);
    });
  };
  function lib$es6$promise$promise$all$$all(entries) {
    return new lib$es6$promise$enumerator$$default(this, entries).promise;
  }
  var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
  function lib$es6$promise$promise$race$$race(entries) {
    var Constructor = this;
    var promise = new Constructor(lib$es6$promise$$internal$$noop);
    if (!lib$es6$promise$utils$$isArray(entries)) {
      lib$es6$promise$$internal$$reject(promise, new TypeError("You must pass an array to race."));
      return promise;
    }
    var length = entries.length;
    function onFulfillment(value2) {
      lib$es6$promise$$internal$$resolve(promise, value2);
    }
    function onRejection(reason) {
      lib$es6$promise$$internal$$reject(promise, reason);
    }
    for (var i2 = 0; promise._state === lib$es6$promise$$internal$$PENDING && i2 < length; i2++) {
      lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i2]), void 0, onFulfillment, onRejection);
    }
    return promise;
  }
  var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
  function lib$es6$promise$promise$resolve$$resolve(object) {
    var Constructor = this;
    if (object && typeof object === "object" && object.constructor === Constructor) {
      return object;
    }
    var promise = new Constructor(lib$es6$promise$$internal$$noop);
    lib$es6$promise$$internal$$resolve(promise, object);
    return promise;
  }
  var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
  function lib$es6$promise$promise$reject$$reject(reason) {
    var Constructor = this;
    var promise = new Constructor(lib$es6$promise$$internal$$noop);
    lib$es6$promise$$internal$$reject(promise, reason);
    return promise;
  }
  var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
  var lib$es6$promise$promise$$counter = 0;
  function lib$es6$promise$promise$$needsResolver() {
    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
  }
  function lib$es6$promise$promise$$needsNew() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }
  var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
  function lib$es6$promise$promise$$Promise(resolver) {
    this._id = lib$es6$promise$promise$$counter++;
    this._state = void 0;
    this._result = void 0;
    this._subscribers = [];
    if (lib$es6$promise$$internal$$noop !== resolver) {
      if (!lib$es6$promise$utils$$isFunction(resolver)) {
        lib$es6$promise$promise$$needsResolver();
      }
      if (!(this instanceof lib$es6$promise$promise$$Promise)) {
        lib$es6$promise$promise$$needsNew();
      }
      lib$es6$promise$$internal$$initializePromise(this, resolver);
    }
  }
  lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
  lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
  lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
  lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
  lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
  lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
  lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
  lib$es6$promise$promise$$Promise.prototype = {
    constructor: lib$es6$promise$promise$$Promise,
    /**
          The primary way of interacting with a promise is through its `then` method,
          which registers callbacks to receive either a promise's eventual value or the
          reason why the promise cannot be fulfilled.
    
          ```js
          findUser().then(function(user){
            // user is available
          }, function(reason){
            // user is unavailable, and you are given the reason why
          });
          ```
    
          Chaining
          --------
    
          The return value of `then` is itself a promise.  This second, 'downstream'
          promise is resolved with the return value of the first promise's fulfillment
          or rejection handler, or rejected if the handler throws an exception.
    
          ```js
          findUser().then(function (user) {
            return user.name;
          }, function (reason) {
            return 'default name';
          }).then(function (userName) {
            // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
            // will be `'default name'`
          });
    
          findUser().then(function (user) {
            throw new Error('Found user, but still unhappy');
          }, function (reason) {
            throw new Error('`findUser` rejected and we're unhappy');
          }).then(function (value) {
            // never reached
          }, function (reason) {
            // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
            // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
          });
          ```
          If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
    
          ```js
          findUser().then(function (user) {
            throw new PedagogicalException('Upstream error');
          }).then(function (value) {
            // never reached
          }).then(function (value) {
            // never reached
          }, function (reason) {
            // The `PedgagocialException` is propagated all the way down to here
          });
          ```
    
          Assimilation
          ------------
    
          Sometimes the value you want to propagate to a downstream promise can only be
          retrieved asynchronously. This can be achieved by returning a promise in the
          fulfillment or rejection handler. The downstream promise will then be pending
          until the returned promise is settled. This is called *assimilation*.
    
          ```js
          findUser().then(function (user) {
            return findCommentsByAuthor(user);
          }).then(function (comments) {
            // The user's comments are now available
          });
          ```
    
          If the assimliated promise rejects, then the downstream promise will also reject.
    
          ```js
          findUser().then(function (user) {
            return findCommentsByAuthor(user);
          }).then(function (comments) {
            // If `findCommentsByAuthor` fulfills, we'll have the value here
          }, function (reason) {
            // If `findCommentsByAuthor` rejects, we'll have the reason here
          });
          ```
    
          Simple Example
          --------------
    
          Synchronous Example
    
          ```javascript
          var result;
    
          try {
            result = findResult();
            // success
          } catch(reason) {
            // failure
          }
          ```
    
          Errback Example
    
          ```js
          findResult(function(result, err){
            if (err) {
              // failure
            } else {
              // success
            }
          });
          ```
    
          Promise Example;
    
          ```javascript
          findResult().then(function(result){
            // success
          }, function(reason){
            // failure
          });
          ```
    
          Advanced Example
          --------------
    
          Synchronous Example
    
          ```javascript
          var author, books;
    
          try {
            author = findAuthor();
            books  = findBooksByAuthor(author);
            // success
          } catch(reason) {
            // failure
          }
          ```
    
          Errback Example
    
          ```js
    
          function foundBooks(books) {
    
          }
    
          function failure(reason) {
    
          }
    
          findAuthor(function(author, err){
            if (err) {
              failure(err);
              // failure
            } else {
              try {
                findBoooksByAuthor(author, function(books, err) {
                  if (err) {
                    failure(err);
                  } else {
                    try {
                      foundBooks(books);
                    } catch(reason) {
                      failure(reason);
                    }
                  }
                });
              } catch(error) {
                failure(err);
              }
              // success
            }
          });
          ```
    
          Promise Example;
    
          ```javascript
          findAuthor().
            then(findBooksByAuthor).
            then(function(books){
              // found books
          }).catch(function(reason){
            // something went wrong
          });
          ```
    
          @method then
          @param {Function} onFulfilled
          @param {Function} onRejected
          Useful for tooling.
          @return {Promise}
        */
    then: function(onFulfillment, onRejection) {
      var parent = this;
      var state = parent._state;
      if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
        return this;
      }
      var child = new this.constructor(lib$es6$promise$$internal$$noop);
      var result = parent._result;
      if (state) {
        var callback = arguments[state - 1];
        lib$es6$promise$asap$$asap(function() {
          lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
        });
      } else {
        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
      }
      return child;
    },
    /**
          `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
          as the catch block of a try/catch statement.
    
          ```js
          function findAuthor(){
            throw new Error('couldn't find that author');
          }
    
          // synchronous
          try {
            findAuthor();
          } catch(reason) {
            // something went wrong
          }
    
          // async with promises
          findAuthor().catch(function(reason){
            // something went wrong
          });
          ```
    
          @method catch
          @param {Function} onRejection
          Useful for tooling.
          @return {Promise}
        */
    "catch": function(onRejection) {
      return this.then(null, onRejection);
    }
  };
  function lib$es6$promise$polyfill$$polyfill() {
    var local;
    if (typeof global !== "undefined") {
      local = global;
    } else if (typeof self !== "undefined") {
      local = self;
    } else {
      try {
        local = Function("return this")();
      } catch (e) {
        throw new Error("polyfill failed because global object is unavailable in this environment");
      }
    }
    var P = local.Promise;
    if (P && Object.prototype.toString.call(P.resolve()) === "[object Promise]" && !P.cast) {
      return;
    }
    local.Promise = lib$es6$promise$promise$$default;
  }
  var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
  var lib$es6$promise$umd$$ES6Promise = {
    "Promise": lib$es6$promise$promise$$default,
    "polyfill": lib$es6$promise$polyfill$$default
  };
  if (typeof define === "function" && define["amd"]) {
    define("ES6Promise", function() {
      return lib$es6$promise$umd$$ES6Promise;
    });
  } else if (typeof module !== "undefined" && module["exports"]) {
    module["exports"] = lib$es6$promise$umd$$ES6Promise;
  } else if (typeof this !== "undefined") {
    this["ES6Promise"] = lib$es6$promise$umd$$ES6Promise;
  }
  lib$es6$promise$polyfill$$default();
}).call(this);
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("WebSdkCore", [], factory);
  } else {
    window.WebSdkCore = factory();
  }
})(function() {
  var WebSdk = {
    Promise: null,
    // allows passing custom implementation of promises,
    debug: false,
    // if true browser console will be used to output debug messages
    version: 4
  };
  var WebSdkEncryptionSupport = {
    None: 1,
    Encoding: 2,
    Encryption: 3,
    AESEncryption: 4
  };
  var WebSdkDataSupport = {
    Binary: 1,
    String: 2
  };
  var core = {
    WebSdk,
    WebSdkEncryptionSupport,
    WebSdkDataSupport
  };
  core.log = function() {
    if (!core.WebSdk.debug) return;
    if (console.log.apply)
      console.log.apply(console, [].slice.call(arguments));
    else
      console.log(arguments[0]);
  };
  return core;
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("WebSdkCore.utils", [
      "WebSdkCore"
    ], factory);
  } else {
    if (!window.WebSdkCore)
      throw new Error("WebSdkCore is not loaded.");
    window.WebSdkCore.utils = factory(window.WebSdkCore);
  }
})(function(core) {
  function getQueryParam(url, name) {
    var match = RegExp("[?&]" + name + "=([^&]*)").exec(url);
    return match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : null;
  }
  function ajax(method, url, data) {
    var promise = new window.Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.responseType = "json";
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function onreadystatechange() {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            var data2;
            if (this.responseType === "" && typeof this.responseText === "string")
              data2 = JSON.parse(this.responseText);
            else
              data2 = this.response;
            resolve(data2);
          } else {
            reject(this);
          }
        }
      };
      if (method.toLowerCase() === "post" && data) {
        var urlEncodedData = "";
        var urlEncodedDataPairs = [];
        var name;
        for (name in data) {
          urlEncodedDataPairs.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        }
        urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");
        xhr.send(urlEncodedData);
      } else {
        xhr.send();
      }
    });
    return promise;
  }
  function defer(deferred) {
    deferred.promise = new window.Promise(function(resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  }
  function Deferred() {
    if (this instanceof Deferred) return defer(this);
    else return defer(Object.create(Deferred.prototype));
  }
  function tryParseJson(str) {
    if (!str)
      return null;
    var obj;
    try {
      obj = JSON.parse(str);
    } catch (e) {
      obj = null;
    }
    return obj;
  }
  var FixedQueue = (function() {
    function FixedQueue2(maxSize) {
      this.m_items = [];
      this.m_maxSize = maxSize;
    }
    Object.defineProperty(FixedQueue2.prototype, "length", {
      get: function() {
        return this.m_items.length;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FixedQueue2.prototype, "items", {
      get: function() {
        return this.m_items;
      },
      enumerable: true,
      configurable: true
    });
    FixedQueue2.prototype.trimHead = function() {
      if (this.m_items.length <= this.m_maxSize)
        return;
      Array.prototype.splice.call(this.m_items, 0, this.m_items.length - this.m_maxSize);
    };
    FixedQueue2.prototype.trimTail = function() {
      if (this.m_items.length <= this.m_maxSize)
        return;
      Array.prototype.splice.call(this.m_items, this.m_maxSize, this.m_items.length - this.m_maxSize);
    };
    FixedQueue2.prototype.push = function() {
      var result = Array.prototype.push.apply(this.m_items, arguments);
      this.trimHead();
      return result;
    };
    FixedQueue2.prototype.splice = function() {
      var result = Array.prototype.splice.apply(this.m_items, arguments);
      this.trimTail();
      return result;
    };
    FixedQueue2.prototype.unshift = function() {
      var result = Array.prototype.unshift.apply(this.m_items, arguments);
      this.trimTail();
      return result;
    };
    return FixedQueue2;
  })();
  return {
    getQueryParam,
    ajax,
    tryParseJson,
    Deferred,
    FixedQueue
  };
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("WebSdkCore.configurator", [
      "WebSdkCore",
      "WebSdkCore.utils"
    ], factory);
  } else {
    if (!window.WebSdkCore)
      throw new Error("WebSdkCore is not loaded.");
    window.WebSdkCore.configurator = factory(window.WebSdkCore, window.WebSdkCore.utils);
  }
})(function(core, utils) {
  function Configurator() {
    this.m_key = "websdk";
    var sessionData = utils.tryParseJson(sessionStorage.getItem(this.m_key));
    if (sessionData) {
      this.m_port = parseInt(sessionData.port);
      this.m_host = sessionData.host || "127.0.0.1";
      this.m_isSecure = sessionData.isSecure;
      this.m_srp = sessionData.srp;
    }
  }
  Object.defineProperty(Configurator.prototype, "url", {
    get: function() {
      if (!this.m_port || !this.m_host) return null;
      var protocol = this.m_isSecure ? "https" : "http";
      return protocol + "://" + this.m_host + ":" + this.m_port.toString();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Configurator.prototype, "srp", {
    get: function() {
      return this.m_srp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Configurator.prototype, "sessionId", {
    get: function() {
      return sessionStorage.getItem("websdk.sessionId");
    },
    set: function(value2) {
      return sessionStorage.setItem("websdk.sessionId", value2);
    },
    enumerable: true,
    configurable: true
  });
  Configurator.prototype.ensureLoaded = function(callback) {
    core.log("Configurator: ensureLoaded");
    if (!!this.url && !!this.srp) return callback(null);
    var self2 = this, uri = "https://127.0.0.1:52181/get_connection";
    utils.ajax("get", uri).then(function(response) {
      core.log("Configurator: findConfiguration -> ", response);
      if (response && response.endpoint && self2.tryParse(response.endpoint)) {
        callback(null);
      } else {
        callback(new Error("Cannot load configuration"));
      }
    }).catch(function(err) {
      core.log("Configurator: findConfiguration -> ERROR ", err);
      callback(err);
    });
  };
  Configurator.prototype.tryParse = function(connectionString) {
    core.log("Configurator: tryParse " + connectionString);
    var urlEl = document.createElement("a");
    urlEl.href = connectionString;
    var port = parseInt(utils.getQueryParam(urlEl.search, "web_sdk_port") || ""), isSecure = utils.getQueryParam(urlEl.search, "web_sdk_secure") == "true", host = urlEl.hostname;
    var p1 = utils.getQueryParam(urlEl.search, "web_sdk_username"), p2 = utils.getQueryParam(urlEl.search, "web_sdk_password"), salt = utils.getQueryParam(urlEl.search, "web_sdk_salt");
    if (!port || !host || !p1 || !p2 || !salt) return false;
    this.m_port = port;
    this.m_host = host;
    this.m_isSecure = isSecure;
    this.m_srp = {
      p1,
      p2,
      salt
    };
    sessionStorage.setItem(this.m_key, JSON.stringify({
      port: this.m_port,
      host: this.m_host,
      isSecure: this.m_isSecure,
      srp: this.m_srp
    }));
    return true;
  };
  return new Configurator();
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("WebSdkCore.cipher", [
      "WebSdkCore"
    ], factory);
  } else {
    if (!window.WebSdkCore)
      throw new Error("WebSdkCore is not loaded.");
    window.WebSdkCore.cipher = factory(window.WebSdkCore);
  }
})(function(core) {
  var WebSdkAESVersion = 1;
  var WebSdkAESDataType = {
    Binary: 1,
    UnicodeString: 2,
    UTF8String: 3
  };
  var crypt = window.crypto || window.msCrypto;
  function utf8ToBase64(str) {
    var binstr = utf8ToBinaryString(str);
    return btoa(binstr);
  }
  function base64ToUtf8(b64) {
    var binstr = atob(b64);
    return binaryStringToUtf8(binstr);
  }
  function utf8ToBinaryString(str) {
    var escstr = encodeURIComponent(str);
    var binstr = escstr.replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode(parseInt(p1, 16));
    });
    return binstr;
  }
  function binaryStringToUtf8(binstr) {
    var escstr = binstr.replace(/(.)/g, function(m, p) {
      var code = p.charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = "0" + code;
      }
      return "%" + code;
    });
    return decodeURIComponent(escstr);
  }
  function keyCharAt(key, i2) {
    return key.charCodeAt(Math.floor(i2 % key.length));
  }
  function xor(key, data) {
    var strArr = Array.prototype.map.call(data, function(x) {
      return x;
    });
    return strArr.map(function(c, i2) {
      return String.fromCharCode(c.charCodeAt(0) ^ keyCharAt(key, i2));
    }).join("");
  }
  function getHdr(buf) {
    var dv = new DataView(buf);
    var version = dv.getUint8(0);
    var type = dv.getUint8(1);
    var length = dv.getUint32(2, true);
    var offset = dv.getUint16(6, true);
    return { version, type, length, offset };
  }
  function setHdr(buf, type) {
    var dv = new DataView(buf);
    dv.setUint8(0, WebSdkAESVersion);
    dv.setUint8(1, type);
    dv.setUint32(2, buf.byteLength - 8, true);
    dv.setUint16(6, 8, true);
  }
  function ab2str(buf) {
    return new window.Promise(function(resolve, reject) {
      var blob = new Blob([new Uint8Array(buf)]);
      var fileReader = new FileReader();
      fileReader.onload = function(event) {
        return resolve(event.target.result);
      };
      fileReader.onerror = function(event) {
        return reject(event.target.error);
      };
      fileReader.readAsText(blob, "utf-16");
    });
  }
  function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2 + 8);
    setHdr(buf, WebSdkAESDataType.UnicodeString);
    var bufView = new Uint16Array(buf, 8);
    for (var i2 = 0, strLen = str.length; i2 < strLen; i2++) {
      bufView[i2] = str.charCodeAt(i2);
    }
    return buf;
  }
  function binary2ab(bin) {
    var buf = new ArrayBuffer(bin.length + 8);
    setHdr(buf, WebSdkAESDataType.Binary);
    var bufSrc = new Uint8Array(bin);
    var bufDest = new Uint8Array(buf, 8);
    bufDest.set(bufSrc);
    return buf;
  }
  function generateKey(rawKey) {
    var usages = ["encrypt", "decrypt"];
    var extractable = false;
    return crypt.subtle.importKey(
      "raw",
      rawKey,
      { name: "AES-CBC" },
      extractable,
      usages
    );
  }
  function encrypt(data, key, iv) {
    return crypt.subtle.encrypt(
      { name: "AES-CBC", iv },
      key,
      data
    );
  }
  ;
  function decrypt(data, key, iv) {
    return crypt.subtle.decrypt(
      { name: "AES-CBC", iv },
      key,
      data
    );
  }
  ;
  function msGenerateKey(rawKey) {
    var usages = ["encrypt", "decrypt"];
    var extractable = false;
    return new window.Promise(function(resolve, reject) {
      var keyOpp = crypt.subtle.importKey(
        "raw",
        rawKey,
        { name: "AES-CBC" },
        extractable,
        usages
      );
      keyOpp.oncomplete = function(e) {
        resolve(keyOpp.result);
      };
      keyOpp.onerror = function(e) {
        reject(new Error("Cannot create a key..."));
      };
    });
  }
  function msEncrypt(data, key, iv) {
    return new window.Promise(function(resolve, reject) {
      var encOpp = crypt.subtle.encrypt(
        { name: "AES-CBC", iv },
        key,
        data
      );
      encOpp.oncomplete = function(e) {
        resolve(encOpp.result);
      };
      encOpp.onerror = function(e) {
        reject(new Error("Fail to encrypt data..."));
      };
    });
  }
  function msDecrypt(data, key, iv) {
    return new window.Promise(function(resolve, reject) {
      var decOpp = crypt.subtle.decrypt(
        { name: "AES-CBC", iv },
        key,
        data
      );
      decOpp.oncomplete = function(e) {
        resolve(decOpp.result);
      };
      decOpp.onerror = function(e) {
        reject(new Error("Fail to encrypt data..."));
      };
    });
  }
  function encryptAES(data, key, iv) {
    if (typeof window.crypto !== "undefined") {
      return generateKey(key).then(function(key2) {
        return encrypt(data, key2, iv);
      });
    } else {
      return msGenerateKey(key).then(function(key2) {
        return msEncrypt(data, key2, iv);
      });
    }
  }
  ;
  function decryptAES(data, key, iv) {
    if (typeof window.crypto !== "undefined") {
      return generateKey(key).then(function(key2) {
        return decrypt(data, key2, iv);
      });
    } else {
      return msGenerateKey(key).then(function(key2) {
        return msDecrypt(data, key2, iv);
      });
    }
  }
  ;
  function hexToArray(hex) {
    if (hex.length % 2 === 1) throw new Error("hexToBytes can't have a string with an odd number of characters.");
    if (hex.indexOf("0x") === 0) hex = hex.slice(2);
    return new Uint8Array(hex.match(/../g).map(function(x) {
      return parseInt(x, 16);
    }));
  }
  ;
  function promisefy(data) {
    return new window.Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(data);
      });
    });
  }
  function AESEncryption(key, M1, data) {
    var iv = new Uint8Array(hexToArray(M1).buffer, 0, 16);
    var buff;
    if (typeof data === "string")
      buff = str2ab(data);
    else
      buff = binary2ab(data);
    return encryptAES(buff, key, iv);
  }
  function AESDecryption(key, M1, data) {
    var iv = new Uint8Array(hexToArray(M1).buffer, 0, 16);
    return decryptAES(data, key, iv).then(function(data2) {
      var hdr = getHdr(data2);
      if (hdr.version !== WebSdkAESVersion)
        throw new Error("Invalid data version!");
      switch (hdr.type) {
        case WebSdkAESDataType.Binary:
          return data2.slice(hdr.offset);
        case WebSdkAESDataType.UnicodeString:
          return ab2str(data2.slice(hdr.offset));
        default:
          throw new Error("Invalid data type!");
      }
      return ab2str(data2);
    });
  }
  return {
    encode: function(key, M1, data) {
      switch (core.WebSdk.version) {
        case core.WebSdkEncryptionSupport.AESEncryption:
          return AESEncryption(key, M1, data);
        case core.WebSdkEncryptionSupport.Encryption:
          return promisefy(utf8ToBase64(xor(M1, data)));
        case core.WebSdkEncryptionSupport.Encoding:
          return promisefy(utf8ToBase64(data));
        default:
          return promisefy(data);
      }
    },
    decode: function(key, M1, data) {
      switch (core.WebSdk.version) {
        case core.WebSdkEncryptionSupport.AESEncryption:
          return AESDecryption(key, M1, data);
        case core.WebSdkEncryptionSupport.Encryption:
          return promisefy(xor(M1, base64ToUtf8(data)));
        case core.WebSdkEncryptionSupport.Encoding:
          return promisefy(base64ToUtf8(data));
        default:
          return promisefy(data);
      }
    },
    isCryptoSupported: function() {
      return typeof crypt !== "undefined" && crypt.subtle && crypt.subtle.importKey && crypt.subtle.encrypt;
    },
    hexToBytes: function(hex) {
      return hexToArray(hex);
    }
  };
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("WebSdkCore.channelOptions", [
      "WebSdkCore"
    ], factory);
  } else {
    var core = window.WebSdkCore;
    if (!core)
      throw new Error("WebSdkCore is not loaded.");
    window.WebSdkCore.channelOptions = factory(core);
  }
})(function(core) {
  function WebChannelOptions(options) {
    if (!options) options = {};
    var version = core.WebSdkEncryptionSupport.AESEncryption, debug = options.debug === true;
    if (!!options.version) {
      validateVersion(options.version);
      version = options.version;
    }
    Object.defineProperties(this, {
      "version": {
        get: function() {
          return version;
        },
        set: function(value2) {
          validateVersion(value2);
          version = value2;
        },
        enumerable: true
      },
      "debug": {
        get: function() {
          return debug;
        },
        set: function() {
          debug = value;
        },
        enumerable: true
      }
    });
    function validateVersion(v) {
      for (var supportedVersion in core.WebSdkEncryptionSupport) {
        if (core.WebSdkEncryptionSupport.hasOwnProperty(supportedVersion) && core.WebSdkEncryptionSupport[supportedVersion] === v)
          return;
      }
      throw new Error("invalid WebSdk version requested");
    }
  }
  return WebChannelOptions;
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("WebSdkCore.channelClientImplementation", [
      "async",
      "sjcl",
      "BigInteger",
      "SRPClient",
      "ES6Promise",
      "WebSdkCore",
      "WebSdkCore.utils",
      "WebSdkCore.configurator",
      "WebSdkCore.cipher"
    ], factory);
  } else {
    var core = window.WebSdkCore;
    if (!core)
      throw new Error("WebSdkCore is not loaded.");
    window.WebSdkCore.channelClientImplementation = factory(async, sjcl, BigInteger, SRPClient, ES6Promise, core, core.utils, core.configurator, core.cipher);
  }
})(function(async2, sjcl2, BigInteger2, SRPClient2, ES6Promise2, core, utils, configurator, cipher) {
  if (!window.Promise)
    window.Promise = ES6Promise2.Promise;
  function WebChannelClientImpl(clientPath) {
    if (!clientPath)
      throw new Error("clientPath cannot be empty");
    core.log("WebSdkVersion: ", core.WebSdk.version, "clientPath: ", clientPath);
    this.clientPath = clientPath;
    this.wsThreshold = 10240;
    this.wsQueueInterval = 1e3;
    this.wsQueueLimit = 100;
    this.wsReconnectInterval = 5e3;
    this.queue = new utils.FixedQueue(this.wsQueueLimit);
    this.queueInterval = null;
    this.webSocket = null;
    this.sessionKey = null;
    this.M1 = null;
    this.reconnectTimer = null;
    this.onConnectionFailed = null;
    this.onConnectionSucceed = null;
    this.onDataReceivedBin = null;
    this.onDataReceivedTxt = null;
    var self2 = this;
    window.parent.parent.addEventListener("blur", function() {
      self2.resetReconnectTimer();
      self2.notifyFocusChanged(false);
    });
    window.parent.parent.addEventListener("focus", function() {
      self2.notifyFocusChanged(true);
    });
  }
  WebChannelClientImpl.prototype.notifyFocusChanged = function(isFocused) {
    if (!this.isConnected()) return;
    core.log("WebChannelClientImpl: notifyFocusChanged ->", isFocused);
    var data = {
      type: "sdk.focusChanged",
      data: isFocused
    };
    this.sendData(JSON.stringify(data));
  };
  WebChannelClientImpl.prototype.fireConnectionFailed = function() {
    if (window.parent.parent.document.hasFocus()) {
      this.setReconnectTimer();
    }
    if (this.onConnectionFailed) {
      this.onConnectionFailed();
    }
  };
  WebChannelClientImpl.prototype.fireConnectionSucceed = function() {
    if (this.onConnectionSucceed) {
      this.onConnectionSucceed();
    }
  };
  WebChannelClientImpl.prototype.resetReconnectTimer = function() {
    if (this.reconnectTimer) {
      clearInterval(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  };
  WebChannelClientImpl.prototype.setReconnectTimer = function() {
    this.resetReconnectTimer();
    var self2 = this;
    this.reconnectTimer = setInterval(function() {
      self2.connectInternal(false);
    }, this.wsReconnectInterval);
  };
  WebChannelClientImpl.prototype.wsconnect = function(url) {
    core.log("WebChannelClientImpl: wsconnect " + url);
    var self2 = this;
    var $q = utils.Deferred();
    if (this.webSocket && this.webSocket.readyState !== WebSocket.CLOSED)
      throw new Error("wsdisconnect has not been called");
    this.webSocket = new WebSocket(url);
    this.webSocket.binaryType = "arraybuffer";
    this.webSocket.onclose = function(event) {
      core.log("WebChannelClientImpl: wsonclose");
      return self2.wsonclose(true);
    };
    this.webSocket.onopen = function(event) {
      core.log("WebChannelClientImpl: wsonopen");
      $q.resolve();
      if (window.parent.parent.document.hasFocus()) {
        self2.notifyFocusChanged(true);
      } else {
        self2.notifyFocusChanged(false);
      }
    };
    this.webSocket.onerror = function(event) {
      core.log("WebChannelClientImpl: wsonerror " + arguments);
      return $q.reject(new Error("WebSocket connection failed."));
    };
    this.webSocket.onmessage = function(event) {
      return self2.wsonmessage(event);
    };
    return $q.promise;
  };
  WebChannelClientImpl.prototype.wsdisconnect = function() {
    var self2 = this;
    var $q = utils.Deferred();
    if (!this.webSocket || this.webSocket.readyState !== WebSocket.OPEN) {
      $q.resolve();
    } else {
      this.webSocket.onclose = function(event) {
        self2.wsonclose(false);
        $q.resolve();
      };
      this.webSocket.close();
    }
    return $q.promise;
  };
  WebChannelClientImpl.prototype.wsonclose = function(isFailed) {
    core.log("WebChannelClientImpl: connection closed");
    this.webSocket.onclose = null;
    this.webSocket.onopen = null;
    this.webSocket.onmessage = null;
    this.webSocket.onerror = null;
    this.deactivateBufferCheck();
    if (isFailed) {
      this.fireConnectionFailed();
    }
  };
  WebChannelClientImpl.prototype.wsonmessage = function(event) {
    var self2 = this;
    cipher.decode(this.sessionKey, this.M1, event.data).then(function(data) {
      if (typeof data === "string") {
        if (self2.onDataReceivedTxt) {
          self2.onDataReceivedTxt(data);
        }
      } else {
        if (self2.onDataReceivedBin) {
          self2.onDataReceivedBin(data);
        }
      }
    });
  };
  WebChannelClientImpl.prototype.wssend = function(data) {
    if (!this.isConnected())
      return false;
    if (this.webSocket.bufferedAmount >= this.wsThreshold) {
      this.activateBufferCheck();
      return false;
    }
    this.webSocket.send(data);
    return true;
  };
  WebChannelClientImpl.prototype.generateSessionKey = function(callback) {
    var srpData = configurator.srp;
    if (!srpData.p1 || !srpData.p2 || !srpData.salt)
      return callback(new Error("No data available for authentication"));
    var self2 = this;
    var srp = new SRPClient2(srpData.p1, srpData.p2);
    var a2;
    do {
      a2 = srp.srpRandom();
    } while (!srp.canCalculateA(a2));
    var A = srp.calculateA(a2);
    if (core.WebSdk.version >= core.WebSdkEncryptionSupport.AESEncryption && !cipher.isCryptoSupported())
      core.WebSdk.version = core.WebSdkEncryptionSupport.Encryption;
    utils.ajax("post", configurator.url + "/connect", {
      username: srpData.p1,
      A: srp.toHexString(A),
      version: core.WebSdk.version.toString()
    }).then(function(response) {
      if (response.version === void 0)
        core.WebSdk.version = Math.min(core.WebSdk.version, core.WebSdkEncryptionSupport.Encryption);
      else core.WebSdk.version = response.version;
      var B = new BigInteger2(response.B, 16), u = srp.calculateU(A, B), S = srp.calculateS(B, srpData.salt, u, a2), K = srp.calculateK(S), M1 = srp.calculateM(A, B, K, srpData.salt);
      self2.sessionKey = cipher.hexToBytes(sjcl2.codec.hex.fromBits(sjcl2.hash.sha256.hash(sjcl2.codec.hex.toBits(K))));
      self2.M1 = M1;
      callback(null, M1);
    }).catch(callback);
  };
  WebChannelClientImpl.prototype.setupSecureChannel = function(callback) {
    core.log("WebChannelClientImpl.setupSecureChannel");
    var self2 = this;
    async2.waterfall([
      function(callback2) {
        self2.generateSessionKey(callback2);
      },
      function(sessionKey, callback2) {
        var connectionUrl = configurator.url.replace("http", "ws") + "/" + self2.clientPath + "?username=" + configurator.srp.p1 + "&M1=" + self2.M1;
        if (!configurator.sessionId) {
          configurator.sessionId = sjcl2.codec.hex.fromBits(sjcl2.random.randomWords(2, 0));
        }
        connectionUrl += "&sessionId=" + configurator.sessionId;
        connectionUrl += "&version=" + core.WebSdk.version.toString();
        self2.wsconnect(connectionUrl).then(function() {
          callback2(null);
        }).catch(function(err) {
          core.log(err);
          callback2(err);
        });
      }
    ], callback);
  };
  WebChannelClientImpl.prototype.isConnected = function() {
    return !!this.webSocket && this.webSocket.readyState === WebSocket.OPEN;
  };
  WebChannelClientImpl.prototype.sendData = function(data) {
    if (!this.wssend(data)) {
      this.queue.push(data);
    }
  };
  WebChannelClientImpl.prototype.deactivateBufferCheck = function() {
    if (!this.queueInterval) return;
    clearInterval(this.queueInterval);
    this.queueInterval = null;
  };
  WebChannelClientImpl.prototype.activateBufferCheck = function() {
    if (this.queueInterval) return;
    var self2 = this;
    this.queueInterval = setInterval(function() {
      self2.processMessageQueue();
      if (self2.queue.length === 0) {
        self2.deactivateBufferCheck();
      }
    }, this.wsQueueInterval);
  };
  WebChannelClientImpl.prototype.processMessageQueue = function() {
    core.log("WebChannelClientImpl: processMessageQueue " + this.queue.length);
    if (this.queue.length === 0)
      return;
    for (var i2 = 0; i2 < this.queue.length; ) {
      if (!this.wssend(this.queue.items[i2])) break;
      this.queue.splice(i2, 1);
    }
  };
  WebChannelClientImpl.prototype.connectInternal = function(multipleAttempts) {
    core.log("WebChannelClientImpl.connectInternal");
    this.resetReconnectTimer();
    var self2 = this;
    async2.waterfall([
      function(callback) {
        configurator.ensureLoaded(callback);
      },
      function(callback) {
        async2.retry(multipleAttempts ? 3 : 1, function() {
          self2.setupSecureChannel(callback);
        }, callback);
      }
    ], function(err) {
      if (err) return self2.fireConnectionFailed();
      self2.fireConnectionSucceed();
      self2.processMessageQueue();
    });
  };
  WebChannelClientImpl.prototype.connect = function() {
    this.connectInternal(true);
  };
  WebChannelClientImpl.prototype.disconnect = function() {
    this.wsdisconnect();
  };
  WebChannelClientImpl.prototype.sendDataBin = function(data) {
    var self2 = this;
    cipher.encode(this.sessionKey, this.M1, data).then(function(data2) {
      self2.sendData(data2);
    });
  };
  WebChannelClientImpl.prototype.sendDataTxt = function(data) {
    var self2 = this;
    cipher.encode(this.sessionKey, this.M1, data).then(function(data2) {
      self2.sendData(data2);
    });
  };
  return WebChannelClientImpl;
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("WebSdkCore.channelClient", [
      "WebSdkCore",
      "WebSdkCore.channelOptions",
      "WebSdkCore.channelClientImplementation"
    ], factory);
  } else {
    var core = window.WebSdkCore;
    if (!core)
      throw new Error("WebSdkCore is not loaded.");
    window.WebSdkCore.channelClient = factory(core, core.channelOptions, core.channelClientImplementation);
  }
})(function(core, WebChannelOptions, WebChannelClientImpl) {
  function WebChannelClient(clientPath, options) {
    if (options) {
      core.log(options);
      var webChannelOptions = new WebChannelOptions(options);
      core.WebSdk.debug = webChannelOptions.debug;
      core.WebSdk.version = webChannelOptions.version;
    }
    var client = new WebChannelClientImpl(clientPath);
    Object.defineProperties(this, {
      "path": {
        get: function() {
          return clientPath;
        },
        enumerable: true
      },
      "onConnectionFailed": {
        get: function() {
          return client.onConnectionFailed;
        },
        set: function(value2) {
          client.onConnectionFailed = value2;
        },
        enumerable: true
      },
      "onConnectionSucceed": {
        get: function() {
          return client.onConnectionSucceed;
        },
        set: function(value2) {
          client.onConnectionSucceed = value2;
        },
        enumerable: true
      },
      "onDataReceivedBin": {
        get: function() {
          return client.onDataReceivedBin;
        },
        set: function(value2) {
          client.onDataReceivedBin = value2;
        },
        enumerable: true
      },
      "onDataReceivedTxt": {
        get: function() {
          return client.onDataReceivedTxt;
        },
        set: function(value2) {
          client.onDataReceivedTxt = value2;
        },
        enumerable: true
      }
    });
    this.connect = function() {
      client.connect();
    };
    this.disconnect = function() {
      client.disconnect();
    };
    this.isConnected = function() {
      return client.isConnected();
    };
    this.sendDataBin = function(data) {
      client.sendDataBin(data);
    };
    this.sendDataTxt = function(data) {
      client.sendDataTxt(data);
    };
    this.resetReconnectTimer = function() {
      client.resetReconnectTimer();
    };
  }
  return WebChannelClient;
});
;
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("WebSdk", [
      "WebSdkCore",
      "WebSdkCore.channelOptions",
      "WebSdkCore.channelClient"
    ], factory);
  } else {
    var core = window.WebSdkCore;
    if (!core)
      throw new Error("WebSdkCore is not loaded.");
    window.WebSdk = factory(core, core.channelOptions, core.channelClient);
  }
})(function(core, WebChannelOptions, WebChannelClient) {
  core.log("loaded websdk.client");
  return {
    WebChannelOptions,
    WebChannelClient
  };
});
//# sourceMappingURL=scripts.js.map
