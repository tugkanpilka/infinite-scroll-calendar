import We, { useState as Pe, useCallback as De, useMemo as ae } from "react";
import { isToday as gr, format as Ve, startOfISOWeek as xr, parseISO as Rr } from "date-fns";
var K = { exports: {} }, W = {};
var Le;
function Er() {
  if (Le) return W;
  Le = 1;
  var t = We, o = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(v, m, i) {
    var b, k = {}, E = null, T = null;
    i !== void 0 && (E = "" + i), m.key !== void 0 && (E = "" + m.key), m.ref !== void 0 && (T = m.ref);
    for (b in m) c.call(m, b) && !d.hasOwnProperty(b) && (k[b] = m[b]);
    if (v && v.defaultProps) for (b in m = v.defaultProps, m) k[b] === void 0 && (k[b] = m[b]);
    return { $$typeof: o, type: v, key: E, ref: T, props: k, _owner: a.current };
  }
  return W.Fragment = l, W.jsx = s, W.jsxs = s, W;
}
var V = {};
var Ie;
function jr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = We, o = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), a = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), i = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.suspense_list"), k = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.offscreen"), w = Symbol.iterator, g = "@@iterator";
    function J(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[g];
      return typeof r == "function" ? r : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          n[u - 1] = arguments[u];
        $("error", e, n);
      }
    }
    function $(e, r, n) {
      {
        var u = C.ReactDebugCurrentFrame, h = u.getStackAddendum();
        h !== "" && (r += "%s", n = n.concat([h]));
        var _ = n.map(function(y) {
          return String(y);
        });
        _.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var $e = !1, Ye = !1, Be = !1, Ue = !1, qe = !1, ie;
    ie = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === d || qe || e === a || e === i || e === b || Ue || e === T || $e || Ye || Be || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === k || e.$$typeof === s || e.$$typeof === v || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Je(e, r, n) {
      var u = e.displayName;
      if (u)
        return u;
      var h = r.displayName || r.name || "";
      return h !== "" ? n + "(" + h + ")" : n;
    }
    function le(e) {
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
        case c:
          return "Fragment";
        case l:
          return "Portal";
        case d:
          return "Profiler";
        case a:
          return "StrictMode";
        case i:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return le(r) + ".Consumer";
          case s:
            var n = e;
            return le(n._context) + ".Provider";
          case m:
            return Je(e, e.render, "ForwardRef");
          case k:
            var u = e.displayName || null;
            return u !== null ? u : P(e.type) || "Memo";
          case E: {
            var h = e, _ = h._payload, y = h._init;
            try {
              return P(y(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, A = 0, ce, ue, de, fe, ve, me, pe;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function He() {
      {
        if (A === 0) {
          ce = console.log, ue = console.info, de = console.warn, fe = console.error, ve = console.group, me = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
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
        A++;
      }
    }
    function Ge() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ce
            }),
            info: D({}, e, {
              value: ue
            }),
            warn: D({}, e, {
              value: de
            }),
            error: D({}, e, {
              value: fe
            }),
            group: D({}, e, {
              value: ve
            }),
            groupCollapsed: D({}, e, {
              value: me
            }),
            groupEnd: D({}, e, {
              value: pe
            })
          });
        }
        A < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = C.ReactCurrentDispatcher, G;
    function Y(e, r, n) {
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
    var X = !1, B;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Xe();
    }
    function he(e, r) {
      if (!e || X)
        return "";
      {
        var n = B.get(e);
        if (n !== void 0)
          return n;
      }
      var u;
      X = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = H.current, H.current = null, He();
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
            } catch (N) {
              u = N;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (N) {
              u = N;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            u = N;
          }
          e();
        }
      } catch (N) {
        if (N && u && typeof N.stack == "string") {
          for (var p = N.stack.split(`
`), S = u.stack.split(`
`), x = p.length - 1, R = S.length - 1; x >= 1 && R >= 0 && p[x] !== S[R]; )
            R--;
          for (; x >= 1 && R >= 0; x--, R--)
            if (p[x] !== S[R]) {
              if (x !== 1 || R !== 1)
                do
                  if (x--, R--, R < 0 || p[x] !== S[R]) {
                    var O = `
` + p[x].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, O), O;
                  }
                while (x >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        X = !1, H.current = _, Ge(), Error.prepareStackTrace = h;
      }
      var M = e ? e.displayName || e.name : "", L = M ? Y(M) : "";
      return typeof e == "function" && B.set(e, L), L;
    }
    function Ze(e, r, n) {
      return he(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, ze(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case i:
          return Y("Suspense");
        case b:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Ze(e.render);
          case k:
            return U(e.type, r, n);
          case E: {
            var u = e, h = u._payload, _ = u._init;
            try {
              return U(_(h), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, be = {}, _e = C.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, n = U(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(n);
      } else
        _e.setExtraStackFrame(null);
    }
    function Qe(e, r, n, u, h) {
      {
        var _ = Function.call.bind(F);
        for (var y in e)
          if (_(e, y)) {
            var p = void 0;
            try {
              if (typeof e[y] != "function") {
                var S = Error((u || "React class") + ": " + n + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              p = e[y](r, y, u, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              p = x;
            }
            p && !(p instanceof Error) && (q(h), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", n, y, typeof p), q(null)), p instanceof Error && !(p.message in be) && (be[p.message] = !0, q(h), j("Failed %s type: %s", n, p.message), q(null));
          }
      }
    }
    var er = Array.isArray;
    function Z(e) {
      return er(e);
    }
    function rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function tr(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function ge(e) {
      if (tr(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), ke(e);
    }
    var xe = C.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Ee;
    function ar(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      typeof e.ref == "string" && xe.current;
    }
    function ir(e, r) {
      {
        var n = function() {
          Re || (Re = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var n = function() {
          Ee || (Ee = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, u, h, _, y) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: y,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function ur(e, r, n, u, h) {
      {
        var _, y = {}, p = null, S = null;
        n !== void 0 && (ge(n), p = "" + n), or(r) && (ge(r.key), p = "" + r.key), ar(r) && (S = r.ref, sr(r, h));
        for (_ in r)
          F.call(r, _) && !nr.hasOwnProperty(_) && (y[_] = r[_]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (_ in x)
            y[_] === void 0 && (y[_] = x[_]);
        }
        if (p || S) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && ir(y, R), S && lr(y, R);
        }
        return cr(e, p, S, h, u, xe.current, y);
      }
    }
    var z = C.ReactCurrentOwner, je = C.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, n = U(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function we() {
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
    function dr(e) {
      return "";
    }
    var Se = {};
    function fr(e) {
      {
        var r = we();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ne(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = fr(r);
        if (Se[n])
          return;
        Se[n] = !0;
        var u = "";
        e && e._owner && e._owner !== z.current && (u = " It was passed a child from " + P(e._owner.type) + "."), I(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, u), I(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var n = 0; n < e.length; n++) {
            var u = e[n];
            ee(u) && Ne(u, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = J(e);
          if (typeof h == "function" && h !== e.entries)
            for (var _ = h.call(e), y; !(y = _.next()).done; )
              ee(y.value) && Ne(y.value, r);
        }
      }
    }
    function vr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === k))
          n = r.propTypes;
        else
          return;
        if (n) {
          var u = P(r);
          Qe(n, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var h = P(r);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var u = r[n];
          if (u !== "children" && u !== "key") {
            I(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Ce = {};
    function Oe(e, r, n, u, h, _) {
      {
        var y = Ke(e);
        if (!y) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = dr();
          S ? p += S : p += we();
          var x;
          e === null ? x = "null" : Z(e) ? x = "array" : e !== void 0 && e.$$typeof === o ? (x = "<" + (P(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, p);
        }
        var R = ur(e, r, n, h, _);
        if (R == null)
          return R;
        if (y) {
          var O = r.children;
          if (O !== void 0)
            if (u)
              if (Z(O)) {
                for (var M = 0; M < O.length; M++)
                  Te(O[M], e);
                Object.freeze && Object.freeze(O);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(O, e);
        }
        if (F.call(r, "key")) {
          var L = P(e), N = Object.keys(r).filter(function(kr) {
            return kr !== "key";
          }), re = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[L + re]) {
            var _r = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, L, _r, L), Ce[L + re] = !0;
          }
        }
        return e === c ? mr(R) : vr(R), R;
      }
    }
    function pr(e, r, n) {
      return Oe(e, r, n, !0);
    }
    function yr(e, r, n) {
      return Oe(e, r, n, !1);
    }
    var hr = yr, br = pr;
    V.Fragment = c, V.jsx = hr, V.jsxs = br;
  })()), V;
}
var Me;
function wr() {
  return Me || (Me = 1, process.env.NODE_ENV === "production" ? K.exports = Er() : K.exports = jr()), K.exports;
}
var f = wr();
function Sr(t) {
  return !t || !t.hasContent ? !1 : t.hasUncompletedTodo ? "primary" : "secondary";
}
function Ae(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
}
function oe(t) {
  const {
    key: o,
    value: l,
    selectionEnabled: c = !0,
    metadata: a,
    outside: d = !1,
    date: s
  } = t, v = c && l.key === o, m = !!s && gr(s), i = !!s && !d && !m && Ae(s) < Ae(/* @__PURE__ */ new Date());
  return { indicator: d ? !1 : Sr(a?.[o]), selected: v, today: m, past: i };
}
function Nr(t, o) {
  if (t.length === 0)
    return { beforeRows: [], activeRows: [], afterRows: [] };
  if (o.kind === "month") {
    const c = t.findIndex(
      (d) => d.some(
        (s) => s.kind === "day" && s.today
      )
    ), a = c >= 0 ? c : 0;
    return {
      beforeRows: t.slice(0, a),
      activeRows: [t[a]],
      afterRows: t.slice(a + 1)
    };
  }
  const l = t.findIndex(
    (c) => c.some((a) => a.value === o.key)
  );
  return l < 0 ? {
    beforeRows: [],
    activeRows: t,
    afterRows: []
  } : {
    beforeRows: t.slice(0, l),
    activeRows: [t[l]],
    afterRows: t.slice(l + 1)
  };
}
function Tr(t) {
  return typeof t.month == "number" ? Ve(new Date(t.year, t.month - 1, 1), "LLLL") : t.weekKey ?? t.id;
}
function Cr(t, o, l = !0, c) {
  return t.items.map((a) => {
    if (a.kind === "marker") {
      const v = oe({
        key: a.meta?.weekKey ?? a.id,
        value: o,
        selectionEnabled: l,
        metadata: c
      });
      return {
        kind: "week",
        key: a.id,
        label: a.meta?.weekNumber ?? 0,
        value: a.meta?.weekKey ?? a.id,
        weekNumber: a.meta?.weekNumber ?? 0,
        selected: v.selected,
        indicator: v.indicator
      };
    }
    const d = a, s = oe({
      key: d.dayKey,
      value: o,
      selectionEnabled: l,
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
function Or(t) {
  const {
    data: o,
    value: l,
    selectionEnabled: c = !0,
    metadata: a,
    expanded: d
  } = t;
  return {
    expanded: d,
    sections: o.map((s) => {
      const v = s.rows.map(
        (k) => Cr(k, l, c, a)
      ), m = Nr(v, l), i = s.monthKey ?? s.id, b = oe({
        key: i,
        value: l,
        selectionEnabled: c,
        metadata: a
      }).indicator;
      return {
        key: s.id,
        monthLabel: Tr(s),
        monthValue: i,
        year: s.year,
        month: s.month,
        selected: l.kind === "month" && l.key === i,
        indicator: b,
        ...m
      };
    })
  };
}
function Pr(t) {
  if (t) {
    if (t.kind === "month") return t.key;
    if (t.kind === "day") return t.key.slice(0, 7);
    if (t.kind === "week")
      return Ve(xr(Rr(t.key)), "yyyy-MM");
  }
}
function Dr(t) {
  const {
    value: o,
    defaultValue: l,
    onValueChange: c,
    expanded: a,
    defaultExpanded: d = !1,
    onExpandedChange: s
  } = t, [v, m] = Pe(
    l ?? { kind: "month", key: "" }
  ), [i, b] = Pe(d), k = o ?? v, E = a ?? i, T = De(
    (g) => {
      o === void 0 && m(g), c?.(g);
    },
    [o, c]
  ), w = De(
    (g) => {
      a === void 0 && b(g), s?.(g);
    },
    [a, s]
  );
  return ae(
    () => ({
      value: k,
      setValue: T,
      expanded: E,
      setExpanded: w
    }),
    [E, w, T, k]
  );
}
const Lr = "_root_18n17_1", Fe = "_toggle_18n17_54", Ir = "_root_1ho1n_1", Mr = "_section_1ho1n_7", Ar = "_row_1ho1n_20", Fr = "_root_1cwda_1", Wr = "_inner_1cwda_12";
function te(t) {
  const { expanded: o, className: l, children: c } = t;
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: [Fr, l].filter(Boolean).join(" "),
      "data-expanded": o,
      "aria-hidden": !o,
      children: /* @__PURE__ */ f.jsx("div", { className: Wr, children: c })
    }
  );
}
const Vr = "_cell_1dky2_1", $r = "_marker_1dky2_19", Yr = "_label_1dky2_34", Br = "_indicator_1dky2_74";
function Ur(t) {
  const { label: o, className: l, selected: c, today: a, past: d, outside: s, indicator: v, onSelect: m } = t, i = s ? void 0 : m;
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: [Vr, l].filter(Boolean).join(" "),
      "data-selected": c,
      "data-today": a,
      "data-outside": s,
      "data-past": d,
      "aria-disabled": s || void 0,
      tabIndex: s ? -1 : void 0,
      onClick: i,
      children: /* @__PURE__ */ f.jsxs(
        "span",
        {
          className: $r,
          "data-selected": c,
          "data-today": a,
          "data-past": d,
          children: [
            /* @__PURE__ */ f.jsx("span", { className: Yr, children: o }),
            v && /* @__PURE__ */ f.jsx("span", { className: Br, "data-indicator": v })
          ]
        }
      )
    }
  );
}
const qr = "_root_1q0yp_1", Kr = "_chevron_1q0yp_22", Jr = "_title_1q0yp_37", Hr = "_indicator_1q0yp_55";
function Gr(t) {
  const { label: o, className: l, selected: c, isActive: a, indicator: d, onSelect: s } = t;
  return /* @__PURE__ */ f.jsxs(
    "button",
    {
      type: "button",
      className: [qr, l].filter(Boolean).join(" "),
      "data-kind": "month",
      "data-selected": c,
      "data-active": a,
      onClick: s,
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
        d && /* @__PURE__ */ f.jsx("span", { className: Hr, "data-indicator": d })
      ]
    }
  );
}
const Xr = "_root_1c4iq_1", Zr = "_content_1c4iq_38", zr = "_label_1c4iq_48", Qr = "_indicator_1c4iq_65";
function et(t) {
  const { label: o, className: l, selected: c, indicator: a, onSelect: d } = t;
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: [Xr, l].filter(Boolean).join(" "),
      "data-selected": c,
      onClick: d,
      children: /* @__PURE__ */ f.jsxs("span", { className: Zr, children: [
        /* @__PURE__ */ f.jsx("span", { className: zr, children: o }),
        a && /* @__PURE__ */ f.jsx("span", { className: Qr, "data-indicator": a })
      ] })
    }
  );
}
const rt = "_root_1ckvi_1", tt = "_weekNumberMarker_1ckvi_22", nt = "_border_1ckvi_33", at = "_root_1ocjv_1";
function ot({ label: t, className: o }) {
  return /* @__PURE__ */ f.jsx("span", { className: [at, o].filter(Boolean).join(" "), children: t });
}
const st = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function it(t) {
  const { labels: o = st, scrolled: l, className: c, dayNameClassName: a } = t;
  return /* @__PURE__ */ f.jsxs("div", { className: [rt, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ f.jsx("span", { className: tt, children: "#" }),
    o.map((d, s) => /* @__PURE__ */ f.jsx(
      ot,
      {
        label: d,
        className: a
      },
      `weekday-${s}`
    )),
    /* @__PURE__ */ f.jsx("div", { className: nt, "data-visible": !!l })
  ] });
}
const lt = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function se(...t) {
  return t.filter(Boolean).join(" ") || void 0;
}
function ct(t, o, l, c) {
  if (t.kind === "week") {
    const v = t, m = o?.formatters?.weekLabel?.(v) ?? v.label, i = o?.slots?.week;
    return i ? /* @__PURE__ */ f.jsx(
      i,
      {
        item: v,
        label: m,
        className: o?.classNames?.week,
        onSelect: () => c?.(v.value)
      },
      v.key
    ) : /* @__PURE__ */ f.jsx(
      et,
      {
        label: m,
        className: o?.classNames?.week,
        selected: v.selected,
        indicator: v.indicator,
        onSelect: () => c?.(v.value)
      },
      v.key
    );
  }
  const a = t, d = o?.formatters?.dayLabel?.(a) ?? a.label, s = o?.slots?.day;
  return s ? /* @__PURE__ */ f.jsx(
    s,
    {
      item: a,
      label: d,
      className: o?.classNames?.day,
      onSelect: () => l?.(a.value)
    },
    a.key
  ) : /* @__PURE__ */ f.jsx(
    Ur,
    {
      label: d,
      className: o?.classNames?.day,
      selected: a.selected,
      today: a.today,
      past: a.past,
      outside: a.outside,
      indicator: a.indicator,
      onSelect: () => l?.(a.value)
    },
    a.key
  );
}
function ne(t, o, l, c) {
  return t.map((a, d) => /* @__PURE__ */ f.jsx(
    "div",
    {
      className: se(Ar, o?.classNames?.row),
      children: a.map(
        (s) => ct(s, o, l, c)
      )
    },
    `row-${d}`
  ));
}
function ut(t) {
  const {
    sections: o,
    expanded: l,
    monthSelected: c,
    activeMonthKey: a,
    scrolled: d,
    onDaySelect: s,
    onWeekSelect: v,
    onMonthSelect: m,
    customization: i
  } = t, b = i?.weekdayLabels?.length ? i.weekdayLabels : lt, k = i?.slots?.weekdayHeader, E = i?.slots?.dayName, T = i?.slots?.month, w = i?.classNames?.dayName;
  return /* @__PURE__ */ f.jsx("div", { className: se(Ir, i?.classNames?.grid), children: o.map((g, J) => {
    const C = g.monthValue === a;
    return /* @__PURE__ */ f.jsx(
      te,
      {
        expanded: l || C,
        className: i?.classNames?.expandableZone,
        children: /* @__PURE__ */ f.jsxs(
          "section",
          {
            className: se(
              Mr,
              i?.classNames?.section
            ),
            children: [
              T ? /* @__PURE__ */ f.jsx(
                T,
                {
                  section: g,
                  label: i?.formatters?.monthLabel?.(g) ?? g.monthLabel,
                  isActive: C,
                  className: i?.classNames?.month,
                  onSelect: () => m?.(g.monthValue)
                }
              ) : /* @__PURE__ */ f.jsx(
                Gr,
                {
                  label: i?.formatters?.monthLabel?.(g) ?? g.monthLabel,
                  className: i?.classNames?.month,
                  selected: g.selected,
                  isActive: C,
                  indicator: g.indicator,
                  onSelect: () => m?.(g.monthValue)
                }
              ),
              (!l || J === 0) && (k ? /* @__PURE__ */ f.jsx(
                k,
                {
                  labels: b.map(
                    (j, $) => E ? /* @__PURE__ */ f.jsx(
                      E,
                      {
                        index: $,
                        label: j,
                        className: w
                      },
                      `weekday-${$}`
                    ) : j
                  ),
                  scrolled: d,
                  className: i?.classNames?.weekdayHeader,
                  dayNameClassName: w
                }
              ) : /* @__PURE__ */ f.jsx(
                it,
                {
                  labels: b,
                  scrolled: d,
                  className: i?.classNames?.weekdayHeader,
                  dayNameClassName: w
                }
              )),
              /* @__PURE__ */ f.jsx(
                te,
                {
                  expanded: l || C && !!c,
                  className: i?.classNames?.expandableZone,
                  children: ne(g.beforeRows, i, s, v)
                }
              ),
              ne(g.activeRows, i, s, v),
              /* @__PURE__ */ f.jsx(
                te,
                {
                  expanded: l || C && !!c,
                  className: i?.classNames?.expandableZone,
                  children: ne(g.afterRows, i, s, v)
                }
              )
            ]
          }
        )
      },
      g.key
    );
  }) });
}
function dt(t) {
  const {
    model: o,
    activeMonthKey: l,
    monthSelected: c,
    scrolled: a,
    onDaySelect: d,
    onWeekSelect: s,
    onMonthSelect: v,
    onExpandedChange: m,
    customization: i,
    style: b
  } = t, k = i?.slots?.toggle, E = i?.formatters?.toggleLabel?.(!!o.expanded) ?? /* @__PURE__ */ f.jsx(
    "svg",
    {
      viewBox: "0 0 16 16",
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ f.jsx("path", { d: o.expanded ? "M4 10l4-4 4 4" : "M4 6l4 4 4-4" })
    }
  );
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: [Lr, i?.classNames?.root].filter(Boolean).join(" "),
      style: b,
      children: [
        /* @__PURE__ */ f.jsx(
          ut,
          {
            sections: o.sections,
            expanded: !!o.expanded,
            monthSelected: c,
            activeMonthKey: l,
            scrolled: a,
            onDaySelect: d,
            onWeekSelect: s,
            onMonthSelect: v,
            customization: i
          }
        ),
        m && (k ? /* @__PURE__ */ f.jsx(
          k,
          {
            expanded: !!o.expanded,
            label: E,
            className: [Fe, i?.classNames?.toggle].filter(Boolean).join(" "),
            onToggle: () => m(!o.expanded)
          }
        ) : /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "button",
            className: [Fe, i?.classNames?.toggle].filter(Boolean).join(" "),
            onClick: () => m(!o.expanded),
            children: E
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
    customization: l,
    data: c,
    metadata: a,
    scrolled: d,
    selectionEnabled: s = !0,
    style: v
  } = t, { expanded: m, setExpanded: i, setValue: b, value: k } = o, E = ae(
    () => Or({
      data: c,
      value: k,
      selectionEnabled: s,
      metadata: a,
      expanded: m
    }),
    [l, c, m, a, s, k]
  ), T = ae(
    () => Pr(k),
    [k]
  );
  return /* @__PURE__ */ f.jsx(
    ft,
    {
      model: E,
      activeMonthKey: T,
      monthSelected: k.kind === "month",
      scrolled: d,
      onDaySelect: (w) => b({ kind: "day", key: w }),
      onWeekSelect: (w) => b({ kind: "week", key: w }),
      onMonthSelect: (w) => b({ kind: "month", key: w }),
      onExpandedChange: i,
      customization: l,
      style: v
    }
  );
}
export {
  pt as Calendar,
  ft as CalendarPure
};
//# sourceMappingURL=index.js.map
