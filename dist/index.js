import Le, { useState as Te, useCallback as Ce, useMemo as Ae } from "react";
import { isToday as _r, format as gr } from "date-fns";
var K = { exports: {} }, M = {};
var Ne;
function Rr() {
  if (Ne) return M;
  Ne = 1;
  var o = Le, s = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, n = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(d, v, g) {
    var R, h = {}, _ = null, T = null;
    g !== void 0 && (_ = "" + g), v.key !== void 0 && (_ = "" + v.key), v.ref !== void 0 && (T = v.ref);
    for (R in v) c.call(v, R) && !u.hasOwnProperty(R) && (h[R] = v[R]);
    if (d && d.defaultProps) for (R in v = d.defaultProps, v) h[R] === void 0 && (h[R] = v[R]);
    return { $$typeof: s, type: d, key: _, ref: T, props: h, _owner: n.current };
  }
  return M.Fragment = l, M.jsx = a, M.jsxs = a, M;
}
var V = {};
var Oe;
function Er() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && (function() {
    var o = Le, s = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.provider"), d = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), R = /* @__PURE__ */ Symbol.for("react.suspense_list"), h = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.offscreen"), C = Symbol.iterator, O = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = C && e[C] || e[O];
      return typeof r == "function" ? r : null;
    }
    var F = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        We("error", e, t);
      }
    }
    function We(e, r, t) {
      {
        var i = F.ReactDebugCurrentFrame, y = i.getStackAddendum();
        y !== "" && (r += "%s", t = t.concat([y]));
        var b = t.map(function(m) {
          return String(m);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var Me = !1, Ve = !1, $e = !1, Ye = !1, Be = !1, ae;
    ae = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === u || Be || e === n || e === g || e === R || Ye || e === T || Me || Ve || $e || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === h || e.$$typeof === a || e.$$typeof === d || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var y = r.displayName || r.name || "";
      return y !== "" ? t + "(" + y + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case l:
          return "Portal";
        case u:
          return "Profiler";
        case n:
          return "StrictMode";
        case g:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return ne(r) + ".Consumer";
          case a:
            var t = e;
            return ne(t._context) + ".Provider";
          case v:
            return Ke(e, e.render, "ForwardRef");
          case h:
            var i = e.displayName || null;
            return i !== null ? i : N(e.type) || "Memo";
          case _: {
            var y = e, b = y._payload, m = y._init;
            try {
              return N(m(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, I = 0, oe, se, ie, le, ce, ue, de;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function qe() {
      {
        if (I === 0) {
          oe = console.log, se = console.info, ie = console.warn, le = console.error, ce = console.group, ue = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Je() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: oe
            }),
            info: P({}, e, {
              value: se
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: le
            }),
            group: P({}, e, {
              value: ce
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: de
            })
          });
        }
        I < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = F.ReactCurrentDispatcher, J;
    function $(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (y) {
            var i = y.stack.trim().match(/\n( *(at )?)/);
            J = i && i[1] || "";
          }
        return `
` + J + e;
      }
    }
    var H = !1, Y;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new He();
    }
    function ve(e, r) {
      if (!e || H)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      H = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = q.current, q.current = null, qe();
      try {
        if (r) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (j) {
              i = j;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            i = j;
          }
          e();
        }
      } catch (j) {
        if (j && i && typeof j.stack == "string") {
          for (var f = j.stack.split(`
`), w = i.stack.split(`
`), E = f.length - 1, x = w.length - 1; E >= 1 && x >= 0 && f[E] !== w[x]; )
            x--;
          for (; E >= 1 && x >= 0; E--, x--)
            if (f[E] !== w[x]) {
              if (E !== 1 || x !== 1)
                do
                  if (E--, x--, x < 0 || f[E] !== w[x]) {
                    var S = `
` + f[E].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, S), S;
                  }
                while (E >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        H = !1, q.current = b, Je(), Error.prepareStackTrace = y;
      }
      var A = e ? e.displayName || e.name : "", D = A ? $(A) : "";
      return typeof e == "function" && Y.set(e, D), D;
    }
    function Ge(e, r, t) {
      return ve(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Xe(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case g:
          return $("Suspense");
        case R:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ge(e.render);
          case h:
            return B(e.type, r, t);
          case _: {
            var i = e, y = i._payload, b = i._init;
            try {
              return B(b(y), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, me = {}, pe = F.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ze(e, r, t, i, y) {
      {
        var b = Function.call.bind(W);
        for (var m in e)
          if (b(e, m)) {
            var f = void 0;
            try {
              if (typeof e[m] != "function") {
                var w = Error((i || "React class") + ": " + t + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              f = e[m](r, m, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              f = E;
            }
            f && !(f instanceof Error) && (U(y), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, m, typeof f), U(null)), f instanceof Error && !(f.message in me) && (me[f.message] = !0, U(y), k("Failed %s type: %s", t, f.message), U(null));
          }
      }
    }
    var ze = Array.isArray;
    function G(e) {
      return ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function be(e) {
      if (er(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), ye(e);
    }
    var he = F.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, ge;
    function tr(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      typeof e.ref == "string" && he.current;
    }
    function or(e, r) {
      {
        var t = function() {
          _e || (_e = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, i, y, b, m) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: m,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function lr(e, r, t, i, y) {
      {
        var b, m = {}, f = null, w = null;
        t !== void 0 && (be(t), f = "" + t), ar(r) && (be(r.key), f = "" + r.key), tr(r) && (w = r.ref, nr(r, y));
        for (b in r)
          W.call(r, b) && !rr.hasOwnProperty(b) && (m[b] = r[b]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (b in E)
            m[b] === void 0 && (m[b] = E[b]);
        }
        if (f || w) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && or(m, x), w && sr(m, x);
        }
        return ir(e, f, w, y, i, he.current, m);
      }
    }
    var X = F.ReactCurrentOwner, Re = F.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Ee() {
      {
        if (X.current) {
          var e = N(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      return "";
    }
    var xe = {};
    function ur(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var i = "";
        e && e._owner && e._owner !== X.current && (i = " It was passed a child from " + N(e._owner.type) + "."), L(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), L(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            z(i) && ke(i, r);
          }
        else if (z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = Ie(e);
          if (typeof y == "function" && y !== e.entries)
            for (var b = y.call(e), m; !(m = b.next()).done; )
              z(m.value) && ke(m.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = N(r);
          Ze(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var y = N(r);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            L(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var je = {};
    function Se(e, r, t, i, y, b) {
      {
        var m = Ue(e);
        if (!m) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = cr();
          w ? f += w : f += Ee();
          var E;
          e === null ? E = "null" : G(e) ? E = "array" : e !== void 0 && e.$$typeof === s ? (E = "<" + (N(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, f);
        }
        var x = lr(e, r, t, y, b);
        if (x == null)
          return x;
        if (m) {
          var S = r.children;
          if (S !== void 0)
            if (i)
              if (G(S)) {
                for (var A = 0; A < S.length; A++)
                  we(S[A], e);
                Object.freeze && Object.freeze(S);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(S, e);
        }
        if (W.call(r, "key")) {
          var D = N(e), j = Object.keys(r).filter(function(hr) {
            return hr !== "key";
          }), Q = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[D + Q]) {
            var br = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, D, br, D), je[D + Q] = !0;
          }
        }
        return e === c ? fr(x) : dr(x), x;
      }
    }
    function vr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function mr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var pr = mr, yr = vr;
    V.Fragment = c, V.jsx = pr, V.jsxs = yr;
  })()), V;
}
var Pe;
function xr() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? K.exports = Rr() : K.exports = Er()), K.exports;
}
var p = xr();
function kr(o) {
  return !o || !o.hasContent ? !1 : o.hasUncompletedTodo ? "primary" : "secondary";
}
function re(o) {
  const {
    key: s,
    value: l,
    selectionEnabled: c = !0,
    metadata: n,
    outside: u = !1,
    date: a
  } = o, d = c && l.key === s, v = !!a && _r(a);
  return { indicator: u ? !1 : kr(n?.[s]), selected: d, today: v };
}
function wr(o, s) {
  if (s.kind === "month")
    return {
      beforeRows: [],
      activeRows: o,
      afterRows: []
    };
  const l = o.findIndex(
    (c) => c.some((n) => n.value === s.key)
  );
  return l < 0 ? {
    beforeRows: [],
    activeRows: o,
    afterRows: []
  } : {
    beforeRows: o.slice(0, l),
    activeRows: [o[l]],
    afterRows: o.slice(l + 1)
  };
}
function jr(o) {
  return typeof o.month == "number" ? gr(new Date(o.year, o.month - 1, 1), "LLLL") : o.weekKey ?? o.id;
}
function Sr(o, s, l = !0, c) {
  return o.items.map((n) => {
    if (n.kind === "marker") {
      const d = re({
        key: n.meta?.weekKey ?? n.id,
        value: s,
        selectionEnabled: l,
        metadata: c
      });
      return {
        kind: "week",
        key: n.id,
        label: n.meta?.weekNumber ?? 0,
        value: n.meta?.weekKey ?? n.id,
        weekNumber: n.meta?.weekNumber ?? 0,
        selected: d.selected,
        indicator: d.indicator
      };
    }
    const u = n, a = re({
      key: u.dayKey,
      value: s,
      selectionEnabled: l,
      metadata: c,
      outside: !u.inMonth,
      date: u.date
    });
    return {
      kind: "day",
      key: u.dayKey,
      label: u.date.getDate(),
      value: u.dayKey,
      date: u.date,
      today: a.today,
      selected: a.selected,
      outside: !u.inMonth,
      indicator: a.indicator
    };
  });
}
function Tr(o) {
  const {
    data: s,
    value: l,
    selectionEnabled: c = !0,
    metadata: n,
    expanded: u
  } = o;
  return {
    expanded: u,
    sections: s.map((a) => {
      const d = a.rows.map(
        (h) => Sr(h, l, c, n)
      ), v = wr(d, l), g = a.monthKey ?? a.id, R = re({
        key: g,
        value: l,
        selectionEnabled: c,
        metadata: n
      }).indicator;
      return {
        key: a.id,
        monthLabel: jr(a),
        monthValue: g,
        year: a.year,
        month: a.month,
        selected: l.kind === "month" && l.key === g,
        indicator: R,
        ...v
      };
    })
  };
}
function Cr(o) {
  const {
    value: s,
    defaultValue: l,
    onValueChange: c,
    expanded: n,
    defaultExpanded: u = !1,
    onExpandedChange: a
  } = o, [d, v] = Te(
    l ?? { kind: "month", key: "" }
  ), [g, R] = Te(u), h = s ?? d, _ = n ?? g, T = Ce(
    (O) => {
      s === void 0 && v(O), c?.(O);
    },
    [s, c]
  ), C = Ce(
    (O) => {
      n === void 0 && R(O), a?.(O);
    },
    [n, a]
  );
  return Ae(
    () => ({
      value: h,
      setValue: T,
      expanded: _,
      setExpanded: C
    }),
    [_, C, T, h]
  );
}
const Nr = "_root_19cwz_1", De = "_toggle_19cwz_7", Or = "_root_1axuh_1", Pr = "_section_1axuh_7", Dr = "_row_1axuh_11", Fr = "_root_1cwda_1", Lr = "_inner_1cwda_12";
function Fe(o) {
  const { expanded: s, className: l, children: c } = o;
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: [Fr, l].filter(Boolean).join(" "),
      "data-expanded": s,
      "aria-hidden": !s,
      children: /* @__PURE__ */ p.jsx("div", { className: Lr, children: c })
    }
  );
}
const Ar = "_root_1n4q2_1", Ir = "_indicator_1n4q2_21";
function Wr(o) {
  const { label: s, className: l, selected: c, today: n, outside: u, indicator: a, onSelect: d } = o;
  return /* @__PURE__ */ p.jsxs(
    "button",
    {
      type: "button",
      className: [Ar, l].filter(Boolean).join(" "),
      "data-selected": c,
      "data-today": n,
      "data-outside": u,
      onClick: d,
      children: [
        s,
        a && /* @__PURE__ */ p.jsx("span", { className: Ir, "data-indicator": a })
      ]
    }
  );
}
const Mr = "_root_ycn9u_1", Vr = "_indicator_ycn9u_14";
function $r(o) {
  const { label: s, className: l, selected: c, indicator: n, onSelect: u } = o;
  return /* @__PURE__ */ p.jsxs(
    "button",
    {
      type: "button",
      className: [Mr, l].filter(Boolean).join(" "),
      "data-selected": c,
      onClick: u,
      children: [
        s,
        n && /* @__PURE__ */ p.jsx("span", { className: Vr, "data-indicator": n })
      ]
    }
  );
}
const Yr = "_root_1sc26_1", Br = "_indicator_1sc26_13";
function Ur(o) {
  const { label: s, className: l, selected: c, indicator: n, onSelect: u } = o;
  return /* @__PURE__ */ p.jsxs(
    "button",
    {
      type: "button",
      className: [Yr, l].filter(Boolean).join(" "),
      "data-selected": c,
      onClick: u,
      children: [
        s,
        n && /* @__PURE__ */ p.jsx("span", { className: Br, "data-indicator": n })
      ]
    }
  );
}
const Kr = "_root_1npxx_1", qr = "_root_12rog_1";
function Jr({ label: o, className: s }) {
  return /* @__PURE__ */ p.jsx("span", { className: [qr, s].filter(Boolean).join(" "), children: o });
}
const Hr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function Gr(o) {
  const { labels: s = Hr, className: l, dayNameClassName: c } = o;
  return /* @__PURE__ */ p.jsxs("div", { className: [Kr, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ p.jsx("span", {}),
    s.map((n, u) => /* @__PURE__ */ p.jsx(
      Jr,
      {
        label: n,
        className: c
      },
      `weekday-${u}`
    ))
  ] });
}
const Xr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function te(...o) {
  return o.filter(Boolean).join(" ") || void 0;
}
function Zr(o, s, l, c) {
  if (o.kind === "week") {
    const d = o, v = s?.formatters?.weekLabel?.(d) ?? `W${d.label}`, g = s?.slots?.week;
    return g ? /* @__PURE__ */ p.jsx(
      g,
      {
        item: d,
        label: v,
        className: s?.classNames?.week,
        onSelect: () => c?.(d.value)
      },
      d.key
    ) : /* @__PURE__ */ p.jsx(
      Ur,
      {
        label: v,
        className: s?.classNames?.week,
        selected: d.selected,
        indicator: d.indicator,
        onSelect: () => c?.(d.value)
      },
      d.key
    );
  }
  const n = o, u = s?.formatters?.dayLabel?.(n) ?? n.label, a = s?.slots?.day;
  return a ? /* @__PURE__ */ p.jsx(
    a,
    {
      item: n,
      label: u,
      className: s?.classNames?.day,
      onSelect: () => l?.(n.value)
    },
    n.key
  ) : /* @__PURE__ */ p.jsx(
    Wr,
    {
      label: u,
      className: s?.classNames?.day,
      selected: n.selected,
      today: n.today,
      outside: n.outside,
      indicator: n.indicator,
      onSelect: () => l?.(n.value)
    },
    n.key
  );
}
function ee(o, s, l, c) {
  return o.map((n, u) => /* @__PURE__ */ p.jsx(
    "div",
    {
      className: te(Dr, s?.classNames?.row),
      children: n.map(
        (a) => Zr(a, s, l, c)
      )
    },
    `row-${u}`
  ));
}
function zr(o) {
  const {
    sections: s,
    expanded: l,
    onDaySelect: c,
    onWeekSelect: n,
    onMonthSelect: u,
    customization: a
  } = o, d = a?.weekdayLabels?.length ? a.weekdayLabels : Xr, v = a?.slots?.weekdayHeader, g = a?.slots?.dayName, R = a?.slots?.month, h = a?.classNames?.dayName;
  return /* @__PURE__ */ p.jsx("div", { className: te(Or, a?.classNames?.grid), children: s.map((_) => /* @__PURE__ */ p.jsxs(
    "section",
    {
      className: te(
        Pr,
        a?.classNames?.section
      ),
      children: [
        R ? /* @__PURE__ */ p.jsx(
          R,
          {
            section: _,
            label: a?.formatters?.monthLabel?.(_) ?? _.monthLabel,
            className: a?.classNames?.month,
            onSelect: () => u?.(_.monthValue)
          }
        ) : /* @__PURE__ */ p.jsx(
          $r,
          {
            label: a?.formatters?.monthLabel?.(_) ?? _.monthLabel,
            className: a?.classNames?.month,
            selected: _.selected,
            indicator: _.indicator,
            onSelect: () => u?.(_.monthValue)
          }
        ),
        v ? /* @__PURE__ */ p.jsx(
          v,
          {
            labels: d.map(
              (T, C) => g ? /* @__PURE__ */ p.jsx(
                g,
                {
                  index: C,
                  label: T,
                  className: h
                },
                `weekday-${C}`
              ) : T
            ),
            className: a?.classNames?.weekdayHeader,
            dayNameClassName: h
          }
        ) : /* @__PURE__ */ p.jsx(
          Gr,
          {
            labels: d,
            className: a?.classNames?.weekdayHeader,
            dayNameClassName: h
          }
        ),
        /* @__PURE__ */ p.jsx(
          Fe,
          {
            expanded: l,
            className: a?.classNames?.expandableZone,
            children: ee(_.beforeRows, a, c, n)
          }
        ),
        ee(_.activeRows, a, c, n),
        /* @__PURE__ */ p.jsx(
          Fe,
          {
            expanded: l,
            className: a?.classNames?.expandableZone,
            children: ee(_.afterRows, a, c, n)
          }
        )
      ]
    },
    _.key
  )) });
}
function Qr(o) {
  const {
    model: s,
    onDaySelect: l,
    onWeekSelect: c,
    onMonthSelect: n,
    onExpandedChange: u,
    customization: a
  } = o, d = a?.slots?.toggle, v = a?.formatters?.toggleLabel?.(!!s.expanded) ?? (s.expanded ? "Collapse" : "Expand");
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: [Nr, a?.classNames?.root].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ p.jsx(
          zr,
          {
            sections: s.sections,
            expanded: !!s.expanded,
            onDaySelect: l,
            onWeekSelect: c,
            onMonthSelect: n,
            customization: a
          }
        ),
        u && (d ? /* @__PURE__ */ p.jsx(
          d,
          {
            expanded: !!s.expanded,
            label: v,
            className: [De, a?.classNames?.toggle].filter(Boolean).join(" "),
            onToggle: () => u(!s.expanded)
          }
        ) : /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            className: [De, a?.classNames?.toggle].filter(Boolean).join(" "),
            onClick: () => u(!s.expanded),
            children: v
          }
        ))
      ]
    }
  );
}
function et(o) {
  return /* @__PURE__ */ p.jsx(Qr, { ...o });
}
function at(o) {
  const s = Cr(o), { customization: l, data: c, metadata: n, selectionEnabled: u = !0 } = o, { expanded: a, setExpanded: d, setValue: v, value: g } = s, R = Ae(
    () => Tr({
      data: c,
      value: g,
      selectionEnabled: u,
      metadata: n,
      expanded: a
    }),
    [l, c, a, n, u, g]
  );
  return /* @__PURE__ */ p.jsx(
    et,
    {
      model: R,
      onDaySelect: (h) => v({ kind: "day", key: h }),
      onWeekSelect: (h) => v({ kind: "week", key: h }),
      onMonthSelect: (h) => v({ kind: "month", key: h }),
      onExpandedChange: d,
      customization: l
    }
  );
}
export {
  at as Calendar,
  et as CalendarPure
};
//# sourceMappingURL=index.js.map
