import $e, { useState as De, useCallback as Le, useMemo as oe, useRef as Ae, useEffect as Er } from "react";
import { isToday as jr, format as Ye, startOfWeek as wr, parseISO as Sr } from "date-fns";
var J = { exports: {} }, V = {};
var Ie;
function Nr() {
  if (Ie) return V;
  Ie = 1;
  var t = $e, n = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(v, p, l) {
    var _, b = {}, j = null, S = null;
    l !== void 0 && (j = "" + l), p.key !== void 0 && (j = "" + p.key), p.ref !== void 0 && (S = p.ref);
    for (_ in p) c.call(p, _) && !d.hasOwnProperty(_) && (b[_] = p[_]);
    if (v && v.defaultProps) for (_ in p = v.defaultProps, p) b[_] === void 0 && (b[_] = p[_]);
    return { $$typeof: n, type: v, key: j, ref: S, props: b, _owner: o.current };
  }
  return V.Fragment = i, V.jsx = s, V.jsxs = s, V;
}
var $ = {};
var Fe;
function Tr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = $e, n = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), l = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), b = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.offscreen"), w = Symbol.iterator, k = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[k];
      return typeof r == "function" ? r : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          a[u - 1] = arguments[u];
        Y("error", e, a);
      }
    }
    function Y(e, r, a) {
      {
        var u = C.ReactDebugCurrentFrame, h = u.getStackAddendum();
        h !== "" && (r += "%s", a = a.concat([h]));
        var g = a.map(function(y) {
          return String(y);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var Ue = !1, Ke = !1, qe = !1, Je = !1, He = !1, le;
    le = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === d || He || e === o || e === l || e === _ || Je || e === S || Ue || Ke || qe || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === b || e.$$typeof === s || e.$$typeof === v || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Xe(e, r, a) {
      var u = e.displayName;
      if (u)
        return u;
      var h = r.displayName || r.name || "";
      return h !== "" ? a + "(" + h + ")" : a;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case i:
          return "Portal";
        case d:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ce(r) + ".Consumer";
          case s:
            var a = e;
            return ce(a._context) + ".Provider";
          case p:
            return Xe(e, e.render, "ForwardRef");
          case b:
            var u = e.displayName || null;
            return u !== null ? u : P(e.type) || "Memo";
          case j: {
            var h = e, g = h._payload, y = h._init;
            try {
              return P(y(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, M = 0, ue, de, fe, ve, pe, me, ye;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ze() {
      {
        if (M === 0) {
          ue = console.log, de = console.info, fe = console.warn, ve = console.error, pe = console.group, me = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
    function ze() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ue
            }),
            info: D({}, e, {
              value: de
            }),
            warn: D({}, e, {
              value: fe
            }),
            error: D({}, e, {
              value: ve
            }),
            group: D({}, e, {
              value: pe
            }),
            groupCollapsed: D({}, e, {
              value: me
            }),
            groupEnd: D({}, e, {
              value: ye
            })
          });
        }
        M < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = C.ReactCurrentDispatcher, G;
    function B(e, r, a) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (h) {
            var u = h.stack.trim().match(/\n( *(at )?)/);
            G = u && u[1] || "";
          }
        return `
` + G + e;
      }
    }
    var X = !1, U;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Qe();
    }
    function be(e, r) {
      if (!e || X)
        return "";
      {
        var a = U.get(e);
        if (a !== void 0)
          return a;
      }
      var u;
      X = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = H.current, H.current = null, Ze();
      try {
        if (r) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (T) {
              u = T;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (T) {
              u = T;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            u = T;
          }
          e();
        }
      } catch (T) {
        if (T && u && typeof T.stack == "string") {
          for (var m = T.stack.split(`
`), N = u.stack.split(`
`), R = m.length - 1, E = N.length - 1; R >= 1 && E >= 0 && m[R] !== N[E]; )
            E--;
          for (; R >= 1 && E >= 0; R--, E--)
            if (m[R] !== N[E]) {
              if (R !== 1 || E !== 1)
                do
                  if (R--, E--, E < 0 || m[R] !== N[E]) {
                    var O = `
` + m[R].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, O), O;
                  }
                while (R >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        X = !1, H.current = g, ze(), Error.prepareStackTrace = h;
      }
      var I = e ? e.displayName || e.name : "", L = I ? B(I) : "";
      return typeof e == "function" && U.set(e, L), L;
    }
    function er(e, r, a) {
      return be(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, rr(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case l:
          return B("Suspense");
        case _:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return er(e.render);
          case b:
            return K(e.type, r, a);
          case j: {
            var u = e, h = u._payload, g = u._init;
            try {
              return K(g(h), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, _e = {}, ge = C.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, a = K(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(a);
      } else
        ge.setExtraStackFrame(null);
    }
    function tr(e, r, a, u, h) {
      {
        var g = Function.call.bind(W);
        for (var y in e)
          if (g(e, y)) {
            var m = void 0;
            try {
              if (typeof e[y] != "function") {
                var N = Error((u || "React class") + ": " + a + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              m = e[y](r, y, u, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              m = R;
            }
            m && !(m instanceof Error) && (q(h), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", a, y, typeof m), q(null)), m instanceof Error && !(m.message in _e) && (_e[m.message] = !0, q(h), x("Failed %s type: %s", a, m.message), q(null));
          }
      }
    }
    var nr = Array.isArray;
    function Z(e) {
      return nr(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function or(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function xe(e) {
      if (or(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), ke(e);
    }
    var Re = C.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, je;
    function ir(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, r) {
      typeof e.ref == "string" && Re.current;
    }
    function ur(e, r) {
      {
        var a = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function dr(e, r) {
      {
        var a = function() {
          je || (je = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, a, u, h, g, y) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: y,
        // Record the component responsible for creating this element.
        _owner: g
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
        value: u
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function vr(e, r, a, u, h) {
      {
        var g, y = {}, m = null, N = null;
        a !== void 0 && (xe(a), m = "" + a), lr(r) && (xe(r.key), m = "" + r.key), ir(r) && (N = r.ref, cr(r, h));
        for (g in r)
          W.call(r, g) && !sr.hasOwnProperty(g) && (y[g] = r[g]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (g in R)
            y[g] === void 0 && (y[g] = R[g]);
        }
        if (m || N) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && ur(y, E), N && dr(y, E);
        }
        return fr(e, m, N, h, u, Re.current, y);
      }
    }
    var z = C.ReactCurrentOwner, we = C.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, a = K(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(a);
      } else
        we.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Se() {
      {
        if (z.current) {
          var e = P(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function pr(e) {
      return "";
    }
    var Ne = {};
    function mr(e) {
      {
        var r = Se();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = mr(r);
        if (Ne[a])
          return;
        Ne[a] = !0;
        var u = "";
        e && e._owner && e._owner !== z.current && (u = " It was passed a child from " + P(e._owner.type) + "."), A(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, u), A(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var a = 0; a < e.length; a++) {
            var u = e[a];
            ee(u) && Te(u, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = F(e);
          if (typeof h == "function" && h !== e.entries)
            for (var g = h.call(e), y; !(y = g.next()).done; )
              ee(y.value) && Te(y.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          a = r.propTypes;
        else
          return;
        if (a) {
          var u = P(r);
          tr(a, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var h = P(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var u = r[a];
          if (u !== "children" && u !== "key") {
            A(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Oe = {};
    function Pe(e, r, a, u, h, g) {
      {
        var y = Ge(e);
        if (!y) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = pr();
          N ? m += N : m += Se();
          var R;
          e === null ? R = "null" : Z(e) ? R = "array" : e !== void 0 && e.$$typeof === n ? (R = "<" + (P(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, m);
        }
        var E = vr(e, r, a, h, g);
        if (E == null)
          return E;
        if (y) {
          var O = r.children;
          if (O !== void 0)
            if (u)
              if (Z(O)) {
                for (var I = 0; I < O.length; I++)
                  Ce(O[I], e);
                Object.freeze && Object.freeze(O);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(O, e);
        }
        if (W.call(r, "key")) {
          var L = P(e), T = Object.keys(r).filter(function(Rr) {
            return Rr !== "key";
          }), re = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[L + re]) {
            var xr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, L, xr, L), Oe[L + re] = !0;
          }
        }
        return e === c ? hr(E) : yr(E), E;
      }
    }
    function br(e, r, a) {
      return Pe(e, r, a, !0);
    }
    function _r(e, r, a) {
      return Pe(e, r, a, !1);
    }
    var gr = _r, kr = br;
    $.Fragment = c, $.jsx = gr, $.jsxs = kr;
  })()), $;
}
var Me;
function Cr() {
  return Me || (Me = 1, process.env.NODE_ENV === "production" ? J.exports = Nr() : J.exports = Tr()), J.exports;
}
var f = Cr();
function Or(t) {
  return !t || !t.hasContent ? !1 : t.hasUncompletedTodo ? "primary" : "secondary";
}
function We(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
}
function se(t) {
  const {
    key: n,
    value: i,
    selectionEnabled: c = !0,
    metadata: o,
    outside: d = !1,
    date: s
  } = t, v = c && i.key === n, p = !!s && jr(s), l = !!s && !d && !p && We(s) < We(/* @__PURE__ */ new Date());
  return { indicator: d ? !1 : Or(o?.[n]), selected: v, today: p, past: l };
}
function Pr(t, n) {
  if (t.length === 0)
    return { beforeRows: [], activeRows: [], afterRows: [] };
  if (n.kind === "month") {
    const c = t.findIndex(
      (d) => d.some(
        (s) => s.kind === "day" && s.today
      )
    ), o = c >= 0 ? c : 0;
    return {
      beforeRows: t.slice(0, o),
      activeRows: [t[o]],
      afterRows: t.slice(o + 1)
    };
  }
  const i = t.findIndex(
    (c) => c.some((o) => o.value === n.key)
  );
  return i < 0 ? {
    beforeRows: [],
    activeRows: t,
    afterRows: []
  } : {
    beforeRows: t.slice(0, i),
    activeRows: [t[i]],
    afterRows: t.slice(i + 1)
  };
}
function Dr(t) {
  return typeof t.month == "number" ? Ye(new Date(t.year, t.month - 1, 1), "LLLL") : t.weekKey ?? t.id;
}
function Lr(t, n, i = !0, c) {
  return t.items.map((o) => {
    if (o.kind === "marker") {
      const v = se({
        key: o.meta?.weekKey ?? o.id,
        value: n,
        selectionEnabled: i,
        metadata: c
      });
      return {
        kind: "week",
        key: o.id,
        label: o.meta?.weekNumber ?? 0,
        value: o.meta?.weekKey ?? o.id,
        weekNumber: o.meta?.weekNumber ?? 0,
        selected: v.selected,
        indicator: v.indicator
      };
    }
    const d = o, s = se({
      key: d.dayKey,
      value: n,
      selectionEnabled: i,
      metadata: c,
      outside: !d.inMonth,
      date: d.date
    });
    return {
      kind: "day",
      key: d.dayKey,
      label: d.date.getDate(),
      value: d.dayKey,
      date: d.date,
      today: s.today,
      past: s.past,
      selected: s.selected,
      outside: !d.inMonth,
      indicator: s.indicator
    };
  });
}
function Ar(t) {
  const {
    data: n,
    value: i,
    selectionEnabled: c = !0,
    metadata: o,
    expanded: d
  } = t;
  return {
    expanded: d,
    sections: n.map((s) => {
      const v = s.rows.map(
        (b) => Lr(b, i, c, o)
      ), p = Pr(v, i), l = s.monthKey ?? s.id, _ = se({
        key: l,
        value: i,
        selectionEnabled: c,
        metadata: o
      }).indicator;
      return {
        key: s.id,
        monthLabel: Dr(s),
        monthValue: l,
        year: s.year,
        month: s.month,
        selected: i.kind === "month" && i.key === l,
        indicator: _,
        ...p
      };
    })
  };
}
function Ir(t, n = 1) {
  if (t) {
    if (t.kind === "month") return t.key;
    if (t.kind === "day") return t.key.slice(0, 7);
    if (t.kind === "week")
      return Ye(
        wr(Sr(t.key), { weekStartsOn: n }),
        "yyyy-MM"
      );
  }
}
function Fr(t) {
  const {
    value: n,
    defaultValue: i,
    onValueChange: c,
    expanded: o,
    defaultExpanded: d = !1,
    onExpandedChange: s
  } = t, [v, p] = De(
    i ?? { kind: "month", key: "" }
  ), [l, _] = De(d), b = n ?? v, j = o ?? l, S = Le(
    (k) => {
      n === void 0 && p(k), c?.(k);
    },
    [n, c]
  ), w = Le(
    (k) => {
      o === void 0 && _(k), s?.(k);
    },
    [o, s]
  );
  return oe(
    () => ({
      value: b,
      setValue: S,
      expanded: j,
      setExpanded: w
    }),
    [j, w, S, b]
  );
}
const Mr = "_root_6yki9_1", Ve = "_toggle_6yki9_78", Wr = "_root_1qcp0_1", Vr = "_section_1qcp0_7", $r = "_row_1qcp0_20", Yr = "_root_1upud_1", Br = "_inner_1upud_13";
function te(t) {
  const { expanded: n, className: i, children: c } = t;
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: [Yr, i].filter(Boolean).join(" "),
      "data-expanded": n,
      "aria-hidden": !n,
      children: /* @__PURE__ */ f.jsx("div", { className: Br, children: c })
    }
  );
}
const Ur = "_cell_146sj_1", Kr = "_marker_146sj_19", qr = "_label_146sj_34", Jr = "_indicator_146sj_75";
function Hr(t) {
  const { label: n, className: i, selected: c, today: o, past: d, outside: s, indicator: v, onSelect: p } = t, l = s ? void 0 : p;
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: [Ur, i].filter(Boolean).join(" "),
      "data-selected": c,
      "data-today": o,
      "data-outside": s,
      "data-past": d,
      "aria-disabled": s || void 0,
      tabIndex: s ? -1 : void 0,
      onClick: l,
      children: /* @__PURE__ */ f.jsxs(
        "span",
        {
          className: Kr,
          "data-selected": c,
          "data-today": o,
          "data-past": d,
          children: [
            /* @__PURE__ */ f.jsx("span", { className: qr, children: n }),
            v && /* @__PURE__ */ f.jsx("span", { className: Jr, "data-indicator": v })
          ]
        }
      )
    }
  );
}
const Gr = "_root_1npl4_1", Xr = "_chevron_1npl4_22", Zr = "_title_1npl4_37", zr = "_indicator_1npl4_53";
function Qr(t) {
  const { label: n, className: i, selected: c, isActive: o, indicator: d, onSelect: s } = t;
  return /* @__PURE__ */ f.jsxs(
    "button",
    {
      type: "button",
      className: [Gr, i].filter(Boolean).join(" "),
      "data-kind": "month",
      "data-selected": c,
      "data-active": o,
      onClick: s,
      children: [
        /* @__PURE__ */ f.jsx("span", { className: Zr, children: n }),
        d && /* @__PURE__ */ f.jsx("span", { className: zr, "data-indicator": d }),
        /* @__PURE__ */ f.jsx(
          "svg",
          {
            className: Xr,
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /* @__PURE__ */ f.jsx("path", { d: "M6 4l4 4-4 4" })
          }
        )
      ]
    }
  );
}
const et = "_root_1rsz1_1", rt = "_content_1rsz1_38", tt = "_label_1rsz1_47", nt = "_indicator_1rsz1_65";
function at(t) {
  const { label: n, className: i, selected: c, indicator: o, onSelect: d } = t;
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: [et, i].filter(Boolean).join(" "),
      "data-selected": c,
      onClick: d,
      children: /* @__PURE__ */ f.jsxs("span", { className: rt, children: [
        /* @__PURE__ */ f.jsx("span", { className: tt, children: n }),
        o && /* @__PURE__ */ f.jsx("span", { className: nt, "data-indicator": o })
      ] })
    }
  );
}
const ot = "_root_rf1qy_1", st = "_weekNumberMarker_rf1qy_18", it = "_border_rf1qy_44", lt = "_root_1ocjv_1";
function ct({ label: t, className: n }) {
  return /* @__PURE__ */ f.jsx("span", { className: [lt, n].filter(Boolean).join(" "), children: t });
}
const ne = ["M", "T", "W", "T", "F", "S", "S"];
function Be(t = 1) {
  const n = (t - 1 + 7) % 7;
  return n === 0 ? ne : [
    ...ne.slice(n),
    ...ne.slice(0, n)
  ];
}
function ut(t) {
  const {
    labels: n = Be(),
    scrolled: i,
    expanded: c,
    className: o,
    dayNameClassName: d
  } = t;
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: [ot, o].filter(Boolean).join(" "),
      "data-expanded": !!c,
      children: [
        /* @__PURE__ */ f.jsx("span", { className: st, children: "#" }),
        n.map((s, v) => /* @__PURE__ */ f.jsx(
          ct,
          {
            label: s,
            className: d
          },
          `weekday-${v}`
        )),
        /* @__PURE__ */ f.jsx("div", { className: it, "data-visible": !!i })
      ]
    }
  );
}
function ie(...t) {
  return t.filter(Boolean).join(" ") || void 0;
}
function dt(t, n, i, c) {
  if (t.kind === "week") {
    const v = t, p = n?.formatters?.weekLabel?.(v) ?? v.label, l = n?.slots?.week;
    return l ? /* @__PURE__ */ f.jsx(
      l,
      {
        item: v,
        label: p,
        className: n?.classNames?.week,
        onSelect: () => c?.(v.value)
      },
      v.key
    ) : /* @__PURE__ */ f.jsx(
      at,
      {
        label: p,
        className: n?.classNames?.week,
        selected: v.selected,
        indicator: v.indicator,
        onSelect: () => c?.(v.value)
      },
      v.key
    );
  }
  const o = t, d = n?.formatters?.dayLabel?.(o) ?? o.label, s = n?.slots?.day;
  return s ? /* @__PURE__ */ f.jsx(
    s,
    {
      item: o,
      label: d,
      className: n?.classNames?.day,
      onSelect: () => i?.(o.value)
    },
    o.key
  ) : /* @__PURE__ */ f.jsx(
    Hr,
    {
      label: d,
      className: n?.classNames?.day,
      selected: o.selected,
      today: o.today,
      past: o.past,
      outside: o.outside,
      indicator: o.indicator,
      onSelect: () => i?.(o.value)
    },
    o.key
  );
}
function ae(t, n, i, c) {
  return t.map((o, d) => /* @__PURE__ */ f.jsx(
    "div",
    {
      className: ie($r, n?.classNames?.row),
      children: o.map(
        (s) => dt(s, n, i, c)
      )
    },
    `row-${d}`
  ));
}
function ft(t) {
  const {
    sections: n,
    expanded: i,
    monthSelected: c,
    activeMonthKey: o,
    scrolled: d,
    onDaySelect: s,
    onWeekSelect: v,
    onMonthSelect: p,
    customization: l
  } = t, _ = l?.weekdayLabels?.length ? l.weekdayLabels : Be(l?.firstDayOfWeek), b = l?.slots?.weekdayHeader, j = l?.slots?.dayName, S = l?.slots?.month, w = l?.classNames?.dayName;
  return /* @__PURE__ */ f.jsx("div", { className: ie(Wr, l?.classNames?.grid), children: n.map((k, F) => {
    const C = k.monthValue === o;
    return /* @__PURE__ */ f.jsx(
      te,
      {
        expanded: i || C,
        className: l?.classNames?.expandableZone,
        children: /* @__PURE__ */ f.jsxs(
          "section",
          {
            className: ie(
              Vr,
              l?.classNames?.section
            ),
            children: [
              (() => {
                const x = l?.formatters?.monthLabel?.(k) ?? k.monthLabel;
                return /* @__PURE__ */ f.jsx(
                  Qr,
                  {
                    label: S ? /* @__PURE__ */ f.jsx(
                      S,
                      {
                        section: k,
                        label: x,
                        isActive: C,
                        selected: k.selected,
                        indicator: k.indicator
                      }
                    ) : x,
                    className: l?.classNames?.month,
                    selected: k.selected,
                    isActive: C,
                    indicator: k.indicator,
                    onSelect: () => p?.(k.monthValue)
                  }
                );
              })(),
              (!i || F === 0) && (b ? /* @__PURE__ */ f.jsx(
                b,
                {
                  labels: _.map(
                    (x, Y) => j ? /* @__PURE__ */ f.jsx(
                      j,
                      {
                        index: Y,
                        label: x,
                        className: w
                      },
                      `weekday-${Y}`
                    ) : x
                  ),
                  scrolled: d,
                  expanded: i,
                  className: l?.classNames?.weekdayHeader,
                  dayNameClassName: w
                }
              ) : /* @__PURE__ */ f.jsx(
                ut,
                {
                  labels: _,
                  scrolled: d,
                  expanded: i,
                  className: l?.classNames?.weekdayHeader,
                  dayNameClassName: w
                }
              )),
              /* @__PURE__ */ f.jsx(
                te,
                {
                  expanded: i || C && !!c,
                  className: l?.classNames?.expandableZone,
                  children: ae(k.beforeRows, l, s, v)
                }
              ),
              ae(k.activeRows, l, s, v),
              /* @__PURE__ */ f.jsx(
                te,
                {
                  expanded: i || C && !!c,
                  className: l?.classNames?.expandableZone,
                  children: ae(k.afterRows, l, s, v)
                }
              )
            ]
          }
        )
      },
      k.key
    );
  }) });
}
function vt(t) {
  const {
    model: n,
    activeMonthKey: i,
    monthSelected: c,
    scrolled: o,
    onDaySelect: d,
    onWeekSelect: s,
    onMonthSelect: v,
    onExpandedChange: p,
    customization: l,
    style: _
  } = t, b = Ae(null), j = Ae(n.expanded);
  Er(() => {
    const k = j.current !== n.expanded;
    if (j.current = n.expanded, !k) return;
    if (!n.expanded) {
      b.current && (b.current.scrollTop = 0);
      return;
    }
    const F = setTimeout(() => {
      b.current?.querySelector('[data-selected="true"]')?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
    return () => clearTimeout(F);
  }, [n.expanded]);
  const S = l?.slots?.toggle, w = l?.formatters?.toggleLabel?.(!!n.expanded) ?? /* @__PURE__ */ f.jsx(
    "svg",
    {
      viewBox: "0 0 16 16",
      width: "12",
      height: "12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ f.jsx("path", { d: n.expanded ? "M4 10l4-4 4 4" : "M4 6l4 4 4-4" })
    }
  );
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      ref: b,
      className: [Mr, l?.classNames?.root].filter(Boolean).join(" "),
      style: _,
      children: [
        /* @__PURE__ */ f.jsx(
          ft,
          {
            sections: n.sections,
            expanded: !!n.expanded,
            monthSelected: c,
            activeMonthKey: i,
            scrolled: o,
            onDaySelect: d,
            onWeekSelect: s,
            onMonthSelect: v,
            customization: l
          }
        ),
        p && (S ? /* @__PURE__ */ f.jsx(
          S,
          {
            expanded: !!n.expanded,
            label: w,
            className: [Ve, l?.classNames?.toggle].filter(Boolean).join(" "),
            onToggle: () => p(!n.expanded)
          }
        ) : /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "button",
            className: [Ve, l?.classNames?.toggle].filter(Boolean).join(" "),
            "data-expanded": !!n.expanded,
            onClick: () => p(!n.expanded),
            children: w
          }
        ))
      ]
    }
  );
}
function pt(t) {
  return /* @__PURE__ */ f.jsx(vt, { ...t });
}
function ht(t) {
  const n = Fr(t), {
    customization: i,
    data: c,
    metadata: o,
    scrolled: d,
    selectionEnabled: s = !0,
    style: v
  } = t, { expanded: p, setExpanded: l, setValue: _, value: b } = n, j = oe(
    () => Ar({
      data: c,
      value: b,
      selectionEnabled: s,
      metadata: o,
      expanded: p
    }),
    [i, c, p, o, s, b]
  ), S = oe(
    () => Ir(b, i?.firstDayOfWeek),
    [b, i?.firstDayOfWeek]
  );
  return /* @__PURE__ */ f.jsx(
    pt,
    {
      model: j,
      activeMonthKey: S,
      monthSelected: b.kind === "month",
      scrolled: d,
      onDaySelect: (w) => _({ kind: "day", key: w }),
      onWeekSelect: (w) => _({ kind: "week", key: w }),
      onMonthSelect: (w) => _({ kind: "month", key: w }),
      onExpandedChange: l,
      customization: i,
      style: v
    }
  );
}
export {
  ht as Calendar,
  pt as CalendarPure
};
//# sourceMappingURL=index.js.map
