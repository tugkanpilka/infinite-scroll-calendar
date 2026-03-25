import De, { useState as je, useCallback as Se, useMemo as Fe } from "react";
import { isToday as hr, format as _r } from "date-fns";
var ee = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function br() {
  if (Ce) return W;
  Ce = 1;
  var n = De, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(m, p, R) {
    var g, w = {}, j = null, C = null;
    R !== void 0 && (j = "" + R), p.key !== void 0 && (j = "" + p.key), p.ref !== void 0 && (C = p.ref);
    for (g in p) a.call(p, g) && !f.hasOwnProperty(g) && (w[g] = p[g]);
    if (m && m.defaultProps) for (g in p = m.defaultProps, p) w[g] === void 0 && (w[g] = p[g]);
    return { $$typeof: i, type: m, key: j, ref: C, props: w, _owner: l.current };
  }
  return W.Fragment = s, W.jsx = v, W.jsxs = v, W;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function mr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = De, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), m = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), $ = Symbol.iterator, O = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[O];
      return typeof r == "function" ? r : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Ie("error", e, t);
      }
    }
    function Ie(e, r, t) {
      {
        var o = F.ReactDebugCurrentFrame, d = o.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var y = t.map(function(c) {
          return String(c);
        });
        y.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var $e = !1, Le = !1, Ne = !1, We = !1, Ve = !1, te;
    te = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === f || Ve || e === l || e === R || e === g || We || e === C || $e || Le || Ne || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === w || e.$$typeof === v || e.$$typeof === m || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case f:
          return "Profiler";
        case l:
          return "StrictMode";
        case R:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ne(r) + ".Consumer";
          case v:
            var t = e;
            return ne(t._context) + ".Provider";
          case p:
            return Ye(e, e.render, "ForwardRef");
          case w:
            var o = e.displayName || null;
            return o !== null ? o : S(e.type) || "Memo";
          case j: {
            var d = e, y = d._payload, c = d._init;
            try {
              return S(c(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, L = 0, ae, oe, ie, se, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ue() {
      {
        if (L === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, ue = console.group, le = console.groupCollapsed, ce = console.groupEnd;
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
        L++;
      }
    }
    function Ke() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ae
            }),
            info: P({}, e, {
              value: oe
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: se
            }),
            group: P({}, e, {
              value: ue
            }),
            groupCollapsed: P({}, e, {
              value: le
            }),
            groupEnd: P({}, e, {
              value: ce
            })
          });
        }
        L < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = F.ReactCurrentDispatcher, B;
    function M(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (d) {
            var o = d.stack.trim().match(/\n( *(at )?)/);
            B = o && o[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, Y;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new qe();
    }
    function de(e, r) {
      if (!e || J)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      J = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = q.current, q.current = null, Ue();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (k) {
              o = k;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (k) {
              o = k;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            o = k;
          }
          e();
        }
      } catch (k) {
        if (k && o && typeof k.stack == "string") {
          for (var u = k.stack.split(`
`), x = o.stack.split(`
`), _ = u.length - 1, b = x.length - 1; _ >= 1 && b >= 0 && u[_] !== x[b]; )
            b--;
          for (; _ >= 1 && b >= 0; _--, b--)
            if (u[_] !== x[b]) {
              if (_ !== 1 || b !== 1)
                do
                  if (_--, b--, b < 0 || u[_] !== x[b]) {
                    var T = `
` + u[_].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, T), T;
                  }
                while (_ >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        J = !1, q.current = y, Ke(), Error.prepareStackTrace = d;
      }
      var I = e ? e.displayName || e.name : "", D = I ? M(I) : "";
      return typeof e == "function" && Y.set(e, D), D;
    }
    function Be(e, r, t) {
      return de(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Je(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case R:
          return M("Suspense");
        case g:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Be(e.render);
          case w:
            return U(e.type, r, t);
          case j: {
            var o = e, d = o._payload, y = o._init;
            try {
              return U(y(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, ve = {}, pe = F.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function ze(e, r, t, o, d) {
      {
        var y = Function.call.bind(N);
        for (var c in e)
          if (y(e, c)) {
            var u = void 0;
            try {
              if (typeof e[c] != "function") {
                var x = Error((o || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              u = e[c](r, c, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              u = _;
            }
            u && !(u instanceof Error) && (K(d), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, c, typeof u), K(null)), u instanceof Error && !(u.message in ve) && (ve[u.message] = !0, K(d), E("Failed %s type: %s", t, u.message), K(null));
          }
      }
    }
    var Ge = Array.isArray;
    function z(e) {
      return Ge(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function he(e) {
      if (He(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), ye(e);
    }
    var _e = F.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, me;
    function Qe(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function tr(e, r) {
      {
        var t = function() {
          be || (be = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          me || (me = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, o, d, y, c) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function or(e, r, t, o, d) {
      {
        var y, c = {}, u = null, x = null;
        t !== void 0 && (he(t), u = "" + t), er(r) && (he(r.key), u = "" + r.key), Qe(r) && (x = r.ref, rr(r, d));
        for (y in r)
          N.call(r, y) && !Ze.hasOwnProperty(y) && (c[y] = r[y]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (y in _)
            c[y] === void 0 && (c[y] = _[y]);
        }
        if (u || x) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && tr(c, b), x && nr(c, b);
        }
        return ar(e, u, x, d, o, _e.current, c);
      }
    }
    var G = F.ReactCurrentOwner, Re = F.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function ge() {
      {
        if (G.current) {
          var e = S(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Ee = {};
    function sr(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var o = "";
        e && e._owner && e._owner !== G.current && (o = " It was passed a child from " + S(e._owner.type) + "."), A(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), A(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            H(o) && xe(o, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = Ae(e);
          if (typeof d == "function" && d !== e.entries)
            for (var y = d.call(e), c; !(c = y.next()).done; )
              H(c.value) && xe(c.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = S(r);
          ze(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var d = S(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            A(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var we = {};
    function Te(e, r, t, o, d, y) {
      {
        var c = Me(e);
        if (!c) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = ir();
          x ? u += x : u += ge();
          var _;
          e === null ? _ = "null" : z(e) ? _ = "array" : e !== void 0 && e.$$typeof === i ? (_ = "<" + (S(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, u);
        }
        var b = or(e, r, t, d, y);
        if (b == null)
          return b;
        if (c) {
          var T = r.children;
          if (T !== void 0)
            if (o)
              if (z(T)) {
                for (var I = 0; I < T.length; I++)
                  ke(T[I], e);
                Object.freeze && Object.freeze(T);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(T, e);
        }
        if (N.call(r, "key")) {
          var D = S(e), k = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), Z = k.length > 0 ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[D + Z]) {
            var pr = k.length > 0 ? "{" + k.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, D, pr, D), we[D + Z] = !0;
          }
        }
        return e === a ? lr(b) : ur(b), b;
      }
    }
    function cr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function fr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var dr = fr, vr = cr;
    V.Fragment = a, V.jsx = dr, V.jsxs = vr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ee.exports = br() : ee.exports = mr();
var h = ee.exports;
function Rr(n) {
  return !n || !n.hasContent ? !1 : n.hasUncompletedTodo ? "primary" : "secondary";
}
function re(n) {
  const { key: i, value: s, metadata: a, outside: l = !1, date: f } = n, v = s.key === i, m = !!f && hr(f);
  return { indicator: l ? !1 : Rr(a == null ? void 0 : a[i]), selected: v, today: m };
}
function gr(n, i) {
  if (i.kind === "month")
    return {
      beforeRows: [],
      activeRows: n,
      afterRows: []
    };
  const s = n.findIndex(
    (a) => a.some((l) => l.value === i.key)
  );
  return s < 0 ? {
    beforeRows: [],
    activeRows: n,
    afterRows: []
  } : {
    beforeRows: n.slice(0, s),
    activeRows: [n[s]],
    afterRows: n.slice(s + 1)
  };
}
function Er(n) {
  return typeof n.month == "number" ? _r(new Date(n.year, n.month - 1, 1), "LLLL") : n.weekKey ?? n.id;
}
function xr(n, i, s) {
  return n.items.map((a) => {
    var v, m, p;
    if (a.kind === "marker") {
      const R = re({
        key: ((v = a.meta) == null ? void 0 : v.weekKey) ?? a.id,
        value: i,
        metadata: s
      });
      return {
        kind: "week",
        key: a.id,
        label: ((m = a.meta) == null ? void 0 : m.weekNumber) ?? 0,
        value: ((p = a.meta) == null ? void 0 : p.weekKey) ?? a.id,
        selected: R.selected,
        indicator: R.indicator
      };
    }
    const l = a, f = re({
      key: l.dayKey,
      value: i,
      metadata: s,
      outside: !l.inMonth,
      date: l.date
    });
    return {
      kind: "day",
      key: l.dayKey,
      label: l.date.getDate(),
      value: l.dayKey,
      today: f.today,
      selected: f.selected,
      outside: !l.inMonth,
      indicator: f.indicator
    };
  });
}
function kr(n) {
  const { data: i, value: s, metadata: a, expanded: l } = n;
  return {
    expanded: l,
    sections: i.map((f) => {
      const v = f.rows.map((g) => xr(g, s, a)), m = gr(v, s), p = f.monthKey ?? f.id, R = re({
        key: p,
        value: s,
        metadata: a
      }).indicator;
      return {
        key: f.id,
        monthLabel: Er(f),
        monthValue: p,
        selected: s.kind === "month" && s.key === p,
        indicator: R,
        ...m
      };
    })
  };
}
function wr(n) {
  const {
    value: i,
    defaultValue: s,
    onValueChange: a,
    expanded: l,
    defaultExpanded: f = !1,
    onExpandedChange: v
  } = n, [m, p] = je(
    s ?? { kind: "month", key: "" }
  ), [R, g] = je(f), w = i ?? m, j = l ?? R, C = Se(
    (O) => {
      i === void 0 && p(O), a == null || a(O);
    },
    [i, a]
  ), $ = Se(
    (O) => {
      l === void 0 && g(O), v == null || v(O);
    },
    [l, v]
  );
  return Fe(
    () => ({
      value: w,
      setValue: C,
      expanded: j,
      setExpanded: $
    }),
    [j, $, C, w]
  );
}
const Tr = "_root_19cwz_1", jr = "_toggle_19cwz_7", Sr = "_root_1axuh_1", Cr = "_section_1axuh_7", Or = "_row_1axuh_11", Pr = "_root_1qcqp_1";
function Pe(n) {
  const { expanded: i, children: s } = n;
  return /* @__PURE__ */ h.jsx("div", { className: Pr, "data-expanded": i, children: s });
}
const Dr = "_root_3lr8g_1";
function Fr(n) {
  const { label: i, selected: s, today: a, outside: l, onSelect: f } = n;
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      type: "button",
      className: Dr,
      "data-selected": s,
      "data-today": a,
      "data-outside": l,
      onClick: f,
      children: i
    }
  );
}
const Ar = "_root_f8gdt_1";
function Ir(n) {
  const { label: i, selected: s, onSelect: a } = n;
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      type: "button",
      className: Ar,
      "data-selected": s,
      onClick: a,
      children: i
    }
  );
}
const $r = "_root_15vsq_1";
function Lr(n) {
  const { label: i, selected: s, onSelect: a } = n;
  return /* @__PURE__ */ h.jsxs(
    "button",
    {
      type: "button",
      className: $r,
      "data-selected": s,
      onClick: a,
      children: [
        "W",
        i
      ]
    }
  );
}
const Nr = "_root_1npxx_1", Wr = "_root_12rog_1";
function Vr({ label: n }) {
  return /* @__PURE__ */ h.jsx("span", { className: Wr, children: n });
}
const Mr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function Yr() {
  return /* @__PURE__ */ h.jsxs("div", { className: Nr, children: [
    /* @__PURE__ */ h.jsx("span", {}),
    Mr.map((n) => /* @__PURE__ */ h.jsx(Vr, { label: n }, n))
  ] });
}
function Ur(n, i, s) {
  return n.kind === "week" ? /* @__PURE__ */ h.jsx(
    Lr,
    {
      label: n.label,
      selected: n.selected,
      onSelect: () => s == null ? void 0 : s(n.value)
    },
    n.key
  ) : /* @__PURE__ */ h.jsx(
    Fr,
    {
      label: n.label,
      selected: n.selected,
      today: n.today,
      outside: n.outside,
      onSelect: () => i == null ? void 0 : i(n.value)
    },
    n.key
  );
}
function Q(n, i, s) {
  return n.map((a, l) => /* @__PURE__ */ h.jsx("div", { className: Or, children: a.map((f) => Ur(f, i, s)) }, `row-${l}`));
}
function Kr(n) {
  const { sections: i, expanded: s, onDaySelect: a, onWeekSelect: l, onMonthSelect: f } = n;
  return /* @__PURE__ */ h.jsx("div", { className: Sr, children: i.map((v) => /* @__PURE__ */ h.jsxs("section", { className: Cr, children: [
    /* @__PURE__ */ h.jsx(
      Ir,
      {
        label: v.monthLabel,
        selected: v.selected,
        onSelect: () => f == null ? void 0 : f(v.monthValue)
      }
    ),
    /* @__PURE__ */ h.jsx(Yr, {}),
    /* @__PURE__ */ h.jsx(Pe, { expanded: s, children: Q(v.beforeRows, a, l) }),
    Q(v.activeRows, a, l),
    /* @__PURE__ */ h.jsx(Pe, { expanded: s, children: Q(v.afterRows, a, l) })
  ] }, v.key)) });
}
function qr(n) {
  const { model: i, onDaySelect: s, onWeekSelect: a, onMonthSelect: l, onExpandedChange: f } = n;
  return /* @__PURE__ */ h.jsxs("div", { className: Tr, children: [
    /* @__PURE__ */ h.jsx(
      Kr,
      {
        sections: i.sections,
        expanded: !!i.expanded,
        onDaySelect: s,
        onWeekSelect: a,
        onMonthSelect: l
      }
    ),
    f && /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "button",
        className: jr,
        onClick: () => f(!i.expanded),
        children: i.expanded ? "Collapse" : "Expand"
      }
    )
  ] });
}
function Br(n) {
  return /* @__PURE__ */ h.jsx(qr, { ...n });
}
function Gr(n) {
  const i = wr(n), { data: s, metadata: a } = n, { expanded: l, setExpanded: f, setValue: v, value: m } = i, p = Fe(
    () => kr({
      data: s,
      value: m,
      metadata: a,
      expanded: l
    }),
    [s, l, a, m]
  );
  return /* @__PURE__ */ h.jsx(
    Br,
    {
      model: p,
      onDaySelect: (R) => v({ kind: "day", key: R }),
      onWeekSelect: (R) => v({ kind: "week", key: R }),
      onMonthSelect: (R) => v({ kind: "month", key: R }),
      onExpandedChange: f
    }
  );
}
export {
  Gr as Calendar,
  Br as CalendarPure
};
//# sourceMappingURL=index.js.map
