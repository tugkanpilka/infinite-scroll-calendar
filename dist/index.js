import Ie, { useState as Ce, useCallback as Oe, useMemo as te } from "react";
import { isToday as kr, format as We, startOfISOWeek as xr, parseISO as Rr } from "date-fns";
var K = { exports: {} }, W = {};
var Pe;
function Er() {
  if (Pe) return W;
  Pe = 1;
  var t = Ie, o = /* @__PURE__ */ Symbol.for("react.element"), c = /* @__PURE__ */ Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(v, s, h) {
    var _, R = {}, w = null, E = null;
    h !== void 0 && (w = "" + h), s.key !== void 0 && (w = "" + s.key), s.ref !== void 0 && (E = s.ref);
    for (_ in s) d.call(s, _) && !u.hasOwnProperty(_) && (R[_] = s[_]);
    if (v && v.defaultProps) for (_ in s = v.defaultProps, s) R[_] === void 0 && (R[_] = s[_]);
    return { $$typeof: o, type: v, key: w, ref: E, props: R, _owner: n.current };
  }
  return W.Fragment = c, W.jsx = i, W.jsxs = i, W;
}
var V = {};
var De;
function wr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Ie, o = /* @__PURE__ */ Symbol.for("react.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.offscreen"), k = Symbol.iterator, C = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = k && e[k] || e[C];
      return typeof r == "function" ? r : null;
    }
    var O = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          a[l - 1] = arguments[l];
        Ve("error", e, a);
      }
    }
    function Ve(e, r, a) {
      {
        var l = O.ReactDebugCurrentFrame, y = l.getStackAddendum();
        y !== "" && (r += "%s", a = a.concat([y]));
        var b = a.map(function(p) {
          return String(p);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var $e = !1, Ye = !1, Be = !1, Ue = !1, qe = !1, oe;
    oe = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === u || qe || e === n || e === h || e === _ || Ue || e === E || $e || Ye || Be || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === R || e.$$typeof === i || e.$$typeof === v || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Je(e, r, a) {
      var l = e.displayName;
      if (l)
        return l;
      var y = r.displayName || r.name || "";
      return y !== "" ? a + "(" + y + ")" : a;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case c:
          return "Portal";
        case u:
          return "Profiler";
        case n:
          return "StrictMode";
        case h:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return se(r) + ".Consumer";
          case i:
            var a = e;
            return se(a._context) + ".Provider";
          case s:
            return Je(e, e.render, "ForwardRef");
          case R:
            var l = e.displayName || null;
            return l !== null ? l : P(e.type) || "Memo";
          case w: {
            var y = e, b = y._payload, p = y._init;
            try {
              return P(p(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, M = 0, ie, le, ce, ue, de, fe, ve;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function He() {
      {
        if (M === 0) {
          ie = console.log, le = console.info, ce = console.warn, ue = console.error, de = console.group, fe = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        M++;
      }
    }
    function Ge() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ie
            }),
            info: D({}, e, {
              value: le
            }),
            warn: D({}, e, {
              value: ce
            }),
            error: D({}, e, {
              value: ue
            }),
            group: D({}, e, {
              value: de
            }),
            groupCollapsed: D({}, e, {
              value: fe
            }),
            groupEnd: D({}, e, {
              value: ve
            })
          });
        }
        M < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = O.ReactCurrentDispatcher, H;
    function Y(e, r, a) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (y) {
            var l = y.stack.trim().match(/\n( *(at )?)/);
            H = l && l[1] || "";
          }
        return `
` + H + e;
      }
    }
    var G = !1, B;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Xe();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var a = B.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      G = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = J.current, J.current = null, He();
      try {
        if (r) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (N) {
              l = N;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (N) {
              l = N;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            l = N;
          }
          e();
        }
      } catch (N) {
        if (N && l && typeof N.stack == "string") {
          for (var m = N.stack.split(`
`), S = l.stack.split(`
`), g = m.length - 1, x = S.length - 1; g >= 1 && x >= 0 && m[g] !== S[x]; )
            x--;
          for (; g >= 1 && x >= 0; g--, x--)
            if (m[g] !== S[x]) {
              if (g !== 1 || x !== 1)
                do
                  if (g--, x--, x < 0 || m[g] !== S[x]) {
                    var T = `
` + m[g].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, T), T;
                  }
                while (g >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = b, Ge(), Error.prepareStackTrace = y;
      }
      var F = e ? e.displayName || e.name : "", L = F ? Y(F) : "";
      return typeof e == "function" && B.set(e, L), L;
    }
    function Ze(e, r, a) {
      return pe(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, ze(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case h:
          return Y("Suspense");
        case _:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ze(e.render);
          case R:
            return U(e.type, r, a);
          case w: {
            var l = e, y = l._payload, b = l._init;
            try {
              return U(b(y), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ye = {}, he = O.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, a = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(a);
      } else
        he.setExtraStackFrame(null);
    }
    function Qe(e, r, a, l, y) {
      {
        var b = Function.call.bind(I);
        for (var p in e)
          if (b(e, p)) {
            var m = void 0;
            try {
              if (typeof e[p] != "function") {
                var S = Error((l || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              m = e[p](r, p, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              m = g;
            }
            m && !(m instanceof Error) && (q(y), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, p, typeof m), q(null)), m instanceof Error && !(m.message in ye) && (ye[m.message] = !0, q(y), j("Failed %s type: %s", a, m.message), q(null));
          }
      }
    }
    var er = Array.isArray;
    function X(e) {
      return er(e);
    }
    function rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function tr(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function be(e) {
      if (tr(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), _e(e);
    }
    var ge = O.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, xe;
    function nr(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function ir(e, r) {
      {
        var a = function() {
          ke || (ke = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var a = function() {
          xe || (xe = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, a, l, y, b, p) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: p,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ur(e, r, a, l, y) {
      {
        var b, p = {}, m = null, S = null;
        a !== void 0 && (be(a), m = "" + a), or(r) && (be(r.key), m = "" + r.key), nr(r) && (S = r.ref, sr(r, y));
        for (b in r)
          I.call(r, b) && !ar.hasOwnProperty(b) && (p[b] = r[b]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (b in g)
            p[b] === void 0 && (p[b] = g[b]);
        }
        if (m || S) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && ir(p, x), S && lr(p, x);
        }
        return cr(e, m, S, y, l, ge.current, p);
      }
    }
    var Z = O.ReactCurrentOwner, Re = O.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, a = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(a);
      } else
        Re.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ee() {
      {
        if (Z.current) {
          var e = P(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dr(e) {
      return "";
    }
    var we = {};
    function fr(e) {
      {
        var r = Ee();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = fr(r);
        if (we[a])
          return;
        we[a] = !0;
        var l = "";
        e && e._owner && e._owner !== Z.current && (l = " It was passed a child from " + P(e._owner.type) + "."), A(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, l), A(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var a = 0; a < e.length; a++) {
            var l = e[a];
            Q(l) && je(l, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = $(e);
          if (typeof y == "function" && y !== e.entries)
            for (var b = y.call(e), p; !(p = b.next()).done; )
              Q(p.value) && je(p.value, r);
        }
      }
    }
    function vr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          a = r.propTypes;
        else
          return;
        if (a) {
          var l = P(r);
          Qe(a, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var y = P(r);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var l = r[a];
          if (l !== "children" && l !== "key") {
            A(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Ne = {};
    function Te(e, r, a, l, y, b) {
      {
        var p = Ke(e);
        if (!p) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = dr();
          S ? m += S : m += Ee();
          var g;
          e === null ? g = "null" : X(e) ? g = "array" : e !== void 0 && e.$$typeof === o ? (g = "<" + (P(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, m);
        }
        var x = ur(e, r, a, y, b);
        if (x == null)
          return x;
        if (p) {
          var T = r.children;
          if (T !== void 0)
            if (l)
              if (X(T)) {
                for (var F = 0; F < T.length; F++)
                  Se(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(T, e);
        }
        if (I.call(r, "key")) {
          var L = P(e), N = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), ee = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[L + ee]) {
            var br = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, L, br, L), Ne[L + ee] = !0;
          }
        }
        return e === d ? mr(x) : vr(x), x;
      }
    }
    function pr(e, r, a) {
      return Te(e, r, a, !0);
    }
    function yr(e, r, a) {
      return Te(e, r, a, !1);
    }
    var hr = yr, _r = pr;
    V.Fragment = d, V.jsx = hr, V.jsxs = _r;
  })()), V;
}
var Le;
function jr() {
  return Le || (Le = 1, process.env.NODE_ENV === "production" ? K.exports = Er() : K.exports = wr()), K.exports;
}
var f = jr();
function Sr(t) {
  return !t || !t.hasContent ? !1 : t.hasUncompletedTodo ? "primary" : "secondary";
}
function Ae(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
}
function ae(t) {
  const {
    key: o,
    value: c,
    selectionEnabled: d = !0,
    metadata: n,
    outside: u = !1,
    date: i
  } = t, v = d && c.key === o, s = !!i && kr(i), h = !!i && !u && !s && Ae(i) < Ae(/* @__PURE__ */ new Date());
  return { indicator: u ? !1 : Sr(n?.[o]), selected: v, today: s, past: h };
}
function Nr(t, o) {
  if (o.kind === "month")
    return {
      beforeRows: [],
      activeRows: t,
      afterRows: []
    };
  const c = t.findIndex(
    (d) => d.some((n) => n.value === o.key)
  );
  return c < 0 ? {
    beforeRows: [],
    activeRows: t,
    afterRows: []
  } : {
    beforeRows: t.slice(0, c),
    activeRows: [t[c]],
    afterRows: t.slice(c + 1)
  };
}
function Tr(t) {
  return typeof t.month == "number" ? We(new Date(t.year, t.month - 1, 1), "LLLL") : t.weekKey ?? t.id;
}
function Cr(t, o, c = !0, d) {
  return t.items.map((n) => {
    if (n.kind === "marker") {
      const v = ae({
        key: n.meta?.weekKey ?? n.id,
        value: o,
        selectionEnabled: c,
        metadata: d
      });
      return {
        kind: "week",
        key: n.id,
        label: n.meta?.weekNumber ?? 0,
        value: n.meta?.weekKey ?? n.id,
        weekNumber: n.meta?.weekNumber ?? 0,
        selected: v.selected,
        indicator: v.indicator
      };
    }
    const u = n, i = ae({
      key: u.dayKey,
      value: o,
      selectionEnabled: c,
      metadata: d,
      outside: !u.inMonth,
      date: u.date
    });
    return {
      kind: "day",
      key: u.dayKey,
      label: u.date.getDate(),
      value: u.dayKey,
      date: u.date,
      today: i.today,
      past: i.past,
      selected: i.selected,
      outside: !u.inMonth,
      indicator: i.indicator
    };
  });
}
function Or(t) {
  const {
    data: o,
    value: c,
    selectionEnabled: d = !0,
    metadata: n,
    expanded: u
  } = t;
  return {
    expanded: u,
    sections: o.map((i) => {
      const v = i.rows.map(
        (R) => Cr(R, c, d, n)
      ), s = Nr(v, c), h = i.monthKey ?? i.id, _ = ae({
        key: h,
        value: c,
        selectionEnabled: d,
        metadata: n
      }).indicator;
      return {
        key: i.id,
        monthLabel: Tr(i),
        monthValue: h,
        year: i.year,
        month: i.month,
        selected: c.kind === "month" && c.key === h,
        indicator: _,
        ...s
      };
    })
  };
}
function Pr(t) {
  if (t) {
    if (t.kind === "month") return t.key;
    if (t.kind === "day") return t.key.slice(0, 7);
    if (t.kind === "week")
      return We(xr(Rr(t.key)), "yyyy-MM");
  }
}
function Dr(t) {
  const {
    value: o,
    defaultValue: c,
    onValueChange: d,
    expanded: n,
    defaultExpanded: u = !1,
    onExpandedChange: i
  } = t, [v, s] = Ce(
    c ?? { kind: "month", key: "" }
  ), [h, _] = Ce(u), R = o ?? v, w = n ?? h, E = Oe(
    (C) => {
      o === void 0 && s(C), d?.(C);
    },
    [o, d]
  ), k = Oe(
    (C) => {
      n === void 0 && _(C), i?.(C);
    },
    [n, i]
  );
  return te(
    () => ({
      value: R,
      setValue: E,
      expanded: w,
      setExpanded: k
    }),
    [w, k, E, R]
  );
}
const Lr = "_root_1n2g1_1", Fe = "_toggle_1n2g1_34", Ar = "_root_1xys0_1", Fr = "_section_1xys0_7", Mr = "_row_1xys0_19", Ir = "_root_1cwda_1", Wr = "_inner_1cwda_12";
function Me(t) {
  const { expanded: o, className: c, children: d } = t;
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: [Ir, c].filter(Boolean).join(" "),
      "data-expanded": o,
      "aria-hidden": !o,
      children: /* @__PURE__ */ f.jsx("div", { className: Wr, children: d })
    }
  );
}
const Vr = "_cell_1dky2_1", $r = "_marker_1dky2_19", Yr = "_label_1dky2_34", Br = "_indicator_1dky2_74";
function Ur(t) {
  const { label: o, className: c, selected: d, today: n, past: u, outside: i, indicator: v, onSelect: s } = t, h = i ? void 0 : s;
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: [Vr, c].filter(Boolean).join(" "),
      "data-selected": d,
      "data-today": n,
      "data-outside": i,
      "data-past": u,
      "aria-disabled": i || void 0,
      tabIndex: i ? -1 : void 0,
      onClick: h,
      children: /* @__PURE__ */ f.jsxs(
        "span",
        {
          className: $r,
          "data-selected": d,
          "data-today": n,
          "data-past": u,
          children: [
            /* @__PURE__ */ f.jsx("span", { className: Yr, children: o }),
            v && /* @__PURE__ */ f.jsx("span", { className: Br, "data-indicator": v })
          ]
        }
      )
    }
  );
}
const qr = "_root_qa852_1", Kr = "_chevron_qa852_22", Jr = "_title_qa852_27", Hr = "_indicator_qa852_43";
function Gr(t) {
  const { label: o, className: c, selected: d, isActive: n, indicator: u, onSelect: i } = t;
  return /* @__PURE__ */ f.jsxs(
    "button",
    {
      type: "button",
      className: [qr, c].filter(Boolean).join(" "),
      "data-kind": "month",
      "data-selected": d,
      "data-active": n,
      onClick: i,
      children: [
        /* @__PURE__ */ f.jsx("span", { className: Jr, children: o }),
        /* @__PURE__ */ f.jsx(
          "svg",
          {
            className: Kr,
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /* @__PURE__ */ f.jsx("path", { d: "M6 4l4 4-4 4" })
          }
        ),
        u && /* @__PURE__ */ f.jsx("span", { className: Hr, "data-indicator": u })
      ]
    }
  );
}
const Xr = "_root_1c4iq_1", Zr = "_content_1c4iq_38", zr = "_label_1c4iq_48", Qr = "_indicator_1c4iq_65";
function et(t) {
  const { label: o, className: c, selected: d, indicator: n, onSelect: u } = t;
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: [Xr, c].filter(Boolean).join(" "),
      "data-selected": d,
      onClick: u,
      children: /* @__PURE__ */ f.jsxs("span", { className: Zr, children: [
        /* @__PURE__ */ f.jsx("span", { className: zr, children: o }),
        n && /* @__PURE__ */ f.jsx("span", { className: Qr, "data-indicator": n })
      ] })
    }
  );
}
const rt = "_root_1ckvi_1", tt = "_weekNumberMarker_1ckvi_22", at = "_border_1ckvi_33", nt = "_root_1ocjv_1";
function ot({ label: t, className: o }) {
  return /* @__PURE__ */ f.jsx("span", { className: [nt, o].filter(Boolean).join(" "), children: t });
}
const st = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function it(t) {
  const { labels: o = st, scrolled: c, className: d, dayNameClassName: n } = t;
  return /* @__PURE__ */ f.jsxs("div", { className: [rt, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ f.jsx("span", { className: tt, children: "#" }),
    o.map((u, i) => /* @__PURE__ */ f.jsx(
      ot,
      {
        label: u,
        className: n
      },
      `weekday-${i}`
    )),
    /* @__PURE__ */ f.jsx("div", { className: at, "data-visible": !!c })
  ] });
}
const lt = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function ne(...t) {
  return t.filter(Boolean).join(" ") || void 0;
}
function ct(t, o, c, d) {
  if (t.kind === "week") {
    const v = t, s = o?.formatters?.weekLabel?.(v) ?? v.label, h = o?.slots?.week;
    return h ? /* @__PURE__ */ f.jsx(
      h,
      {
        item: v,
        label: s,
        className: o?.classNames?.week,
        onSelect: () => d?.(v.value)
      },
      v.key
    ) : /* @__PURE__ */ f.jsx(
      et,
      {
        label: s,
        className: o?.classNames?.week,
        selected: v.selected,
        indicator: v.indicator,
        onSelect: () => d?.(v.value)
      },
      v.key
    );
  }
  const n = t, u = o?.formatters?.dayLabel?.(n) ?? n.label, i = o?.slots?.day;
  return i ? /* @__PURE__ */ f.jsx(
    i,
    {
      item: n,
      label: u,
      className: o?.classNames?.day,
      onSelect: () => c?.(n.value)
    },
    n.key
  ) : /* @__PURE__ */ f.jsx(
    Ur,
    {
      label: u,
      className: o?.classNames?.day,
      selected: n.selected,
      today: n.today,
      past: n.past,
      outside: n.outside,
      indicator: n.indicator,
      onSelect: () => c?.(n.value)
    },
    n.key
  );
}
function re(t, o, c, d) {
  return t.map((n, u) => /* @__PURE__ */ f.jsx(
    "div",
    {
      className: ne(Mr, o?.classNames?.row),
      children: n.map(
        (i) => ct(i, o, c, d)
      )
    },
    `row-${u}`
  ));
}
function ut(t) {
  const {
    sections: o,
    expanded: c,
    activeMonthKey: d,
    scrolled: n,
    onDaySelect: u,
    onWeekSelect: i,
    onMonthSelect: v,
    customization: s
  } = t, h = s?.weekdayLabels?.length ? s.weekdayLabels : lt, _ = s?.slots?.weekdayHeader, R = s?.slots?.dayName, w = s?.slots?.month, E = s?.classNames?.dayName;
  return /* @__PURE__ */ f.jsx("div", { className: ne(Ar, s?.classNames?.grid), children: o.map((k) => {
    const C = k.monthValue === d;
    return /* @__PURE__ */ f.jsxs(
      "section",
      {
        className: ne(
          Fr,
          s?.classNames?.section
        ),
        children: [
          w ? /* @__PURE__ */ f.jsx(
            w,
            {
              section: k,
              label: s?.formatters?.monthLabel?.(k) ?? k.monthLabel,
              isActive: C,
              className: s?.classNames?.month,
              onSelect: () => v?.(k.monthValue)
            }
          ) : /* @__PURE__ */ f.jsx(
            Gr,
            {
              label: s?.formatters?.monthLabel?.(k) ?? k.monthLabel,
              className: s?.classNames?.month,
              selected: k.selected,
              isActive: C,
              indicator: k.indicator,
              onSelect: () => v?.(k.monthValue)
            }
          ),
          _ ? /* @__PURE__ */ f.jsx(
            _,
            {
              labels: h.map(
                ($, O) => R ? /* @__PURE__ */ f.jsx(
                  R,
                  {
                    index: O,
                    label: $,
                    className: E
                  },
                  `weekday-${O}`
                ) : $
              ),
              scrolled: n,
              className: s?.classNames?.weekdayHeader,
              dayNameClassName: E
            }
          ) : /* @__PURE__ */ f.jsx(
            it,
            {
              labels: h,
              scrolled: n,
              className: s?.classNames?.weekdayHeader,
              dayNameClassName: E
            }
          ),
          /* @__PURE__ */ f.jsx(
            Me,
            {
              expanded: c,
              className: s?.classNames?.expandableZone,
              children: re(k.beforeRows, s, u, i)
            }
          ),
          re(k.activeRows, s, u, i),
          /* @__PURE__ */ f.jsx(
            Me,
            {
              expanded: c,
              className: s?.classNames?.expandableZone,
              children: re(k.afterRows, s, u, i)
            }
          )
        ]
      },
      k.key
    );
  }) });
}
function dt(t) {
  const {
    model: o,
    activeMonthKey: c,
    scrolled: d,
    onDaySelect: n,
    onWeekSelect: u,
    onMonthSelect: i,
    onExpandedChange: v,
    customization: s
  } = t, h = s?.slots?.toggle, _ = s?.formatters?.toggleLabel?.(!!o.expanded) ?? (o.expanded ? "Collapse" : "Expand");
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: [Lr, s?.classNames?.root].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ f.jsx(
          ut,
          {
            sections: o.sections,
            expanded: !!o.expanded,
            activeMonthKey: c,
            scrolled: d,
            onDaySelect: n,
            onWeekSelect: u,
            onMonthSelect: i,
            customization: s
          }
        ),
        v && (h ? /* @__PURE__ */ f.jsx(
          h,
          {
            expanded: !!o.expanded,
            label: _,
            className: [Fe, s?.classNames?.toggle].filter(Boolean).join(" "),
            onToggle: () => v(!o.expanded)
          }
        ) : /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "button",
            className: [Fe, s?.classNames?.toggle].filter(Boolean).join(" "),
            onClick: () => v(!o.expanded),
            children: _
          }
        ))
      ]
    }
  );
}
function ft(t) {
  return /* @__PURE__ */ f.jsx(dt, { ...t });
}
function pt(t) {
  const o = Dr(t), {
    customization: c,
    data: d,
    metadata: n,
    scrolled: u,
    selectionEnabled: i = !0
  } = t, { expanded: v, setExpanded: s, setValue: h, value: _ } = o, R = te(
    () => Or({
      data: d,
      value: _,
      selectionEnabled: i,
      metadata: n,
      expanded: v
    }),
    [c, d, v, n, i, _]
  ), w = te(
    () => Pr(_),
    [_]
  );
  return /* @__PURE__ */ f.jsx(
    ft,
    {
      model: R,
      activeMonthKey: w,
      scrolled: u,
      onDaySelect: (E) => h({ kind: "day", key: E }),
      onWeekSelect: (E) => h({ kind: "week", key: E }),
      onMonthSelect: (E) => h({ kind: "month", key: E }),
      onExpandedChange: s,
      customization: c
    }
  );
}
export {
  pt as Calendar,
  ft as CalendarPure
};
//# sourceMappingURL=index.js.map
