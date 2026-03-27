import Fe, { useState as je, useCallback as Te, useMemo as Ae } from "react";
import { isToday as _r, format as br } from "date-fns";
var q = { exports: {} }, $ = {};
var Ce;
function mr() {
  if (Ce) return $;
  Ce = 1;
  var n = Fe, o = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(R, y, g) {
    var m, w = {}, j = null, C = null;
    g !== void 0 && (j = "" + g), y.key !== void 0 && (j = "" + y.key), y.ref !== void 0 && (C = y.ref);
    for (m in y) i.call(y, m) && !f.hasOwnProperty(m) && (w[m] = y[m]);
    if (R && R.defaultProps) for (m in y = R.defaultProps, y) w[m] === void 0 && (w[m] = y[m]);
    return { $$typeof: o, type: R, key: j, ref: C, props: w, _owner: l.current };
  }
  return $.Fragment = s, $.jsx = v, $.jsxs = v, $;
}
var L = {};
var Oe;
function Rr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = Fe, o = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), l = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.provider"), R = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator, O = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[O];
      return typeof r == "function" ? r : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        We("error", e, t);
      }
    }
    function We(e, r, t) {
      {
        var a = F.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var p = t.map(function(c) {
          return String(c);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Ne = !1, Ve = !1, $e = !1, Le = !1, Me = !1, te;
    te = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === f || Me || e === l || e === g || e === m || Le || e === C || Ne || Ve || $e || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === w || e.$$typeof === v || e.$$typeof === R || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case f:
          return "Profiler";
        case l:
          return "StrictMode";
        case g:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ne(r) + ".Consumer";
          case v:
            var t = e;
            return ne(t._context) + ".Provider";
          case y:
            return Ue(e, e.render, "ForwardRef");
          case w:
            var a = e.displayName || null;
            return a !== null ? a : T(e.type) || "Memo";
          case j: {
            var d = e, p = d._payload, c = d._init;
            try {
              return T(c(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, N = 0, ae, oe, ie, se, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ke() {
      {
        if (N === 0) {
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
        N++;
      }
    }
    function qe() {
      {
        if (N--, N === 0) {
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
        N < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = F.ReactCurrentDispatcher, B;
    function M(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            B = a && a[1] || "";
          }
        return `
` + B + e;
      }
    }
    var z = !1, Y;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Je();
    }
    function de(e, r) {
      if (!e || z)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      z = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = J.current, J.current = null, Ke();
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
              a = k;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (k) {
              a = k;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            a = k;
          }
          e();
        }
      } catch (k) {
        if (k && a && typeof k.stack == "string") {
          for (var u = k.stack.split(`
`), x = a.stack.split(`
`), _ = u.length - 1, b = x.length - 1; _ >= 1 && b >= 0 && u[_] !== x[b]; )
            b--;
          for (; _ >= 1 && b >= 0; _--, b--)
            if (u[_] !== x[b]) {
              if (_ !== 1 || b !== 1)
                do
                  if (_--, b--, b < 0 || u[_] !== x[b]) {
                    var S = `
` + u[_].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, S), S;
                  }
                while (_ >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        z = !1, J.current = p, qe(), Error.prepareStackTrace = d;
      }
      var I = e ? e.displayName || e.name : "", D = I ? M(I) : "";
      return typeof e == "function" && Y.set(e, D), D;
    }
    function Be(e, r, t) {
      return de(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, ze(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case g:
          return M("Suspense");
        case m:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Be(e.render);
          case w:
            return U(e.type, r, t);
          case j: {
            var a = e, d = a._payload, p = a._init;
            try {
              return U(p(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, ve = {}, pe = F.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ge(e, r, t, a, d) {
      {
        var p = Function.call.bind(V);
        for (var c in e)
          if (p(e, c)) {
            var u = void 0;
            try {
              if (typeof e[c] != "function") {
                var x = Error((a || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              u = e[c](r, c, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              u = _;
            }
            u && !(u instanceof Error) && (K(d), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, c, typeof u), K(null)), u instanceof Error && !(u.message in ve) && (ve[u.message] = !0, K(d), E("Failed %s type: %s", t, u.message), K(null));
          }
      }
    }
    var Xe = Array.isArray;
    function G(e) {
      return Xe(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
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
      if (Ze(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), ye(e);
    }
    var _e = F.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, me;
    function er(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function nr(e, r) {
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
    function ar(e, r) {
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
    var or = function(e, r, t, a, d, p, c) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: p
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
        value: a
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ir(e, r, t, a, d) {
      {
        var p, c = {}, u = null, x = null;
        t !== void 0 && (he(t), u = "" + t), rr(r) && (he(r.key), u = "" + r.key), er(r) && (x = r.ref, tr(r, d));
        for (p in r)
          V.call(r, p) && !Qe.hasOwnProperty(p) && (c[p] = r[p]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (p in _)
            c[p] === void 0 && (c[p] = _[p]);
        }
        if (u || x) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && nr(c, b), x && ar(c, b);
        }
        return or(e, u, x, d, a, _e.current, c);
      }
    }
    var X = F.ReactCurrentOwner, Re = F.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function ge() {
      {
        if (X.current) {
          var e = T(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      return "";
    }
    var Ee = {};
    function ur(e) {
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
        var t = ur(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var a = "";
        e && e._owner && e._owner !== X.current && (a = " It was passed a child from " + T(e._owner.type) + "."), A(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), A(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Z(a) && xe(a, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = Ie(e);
          if (typeof d == "function" && d !== e.entries)
            for (var p = d.call(e), c; !(c = p.next()).done; )
              Z(c.value) && xe(c.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = T(r);
          Ge(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var d = T(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            A(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var we = {};
    function Se(e, r, t, a, d, p) {
      {
        var c = Ye(e);
        if (!c) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = sr();
          x ? u += x : u += ge();
          var _;
          e === null ? _ = "null" : G(e) ? _ = "array" : e !== void 0 && e.$$typeof === o ? (_ = "<" + (T(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, u);
        }
        var b = ir(e, r, t, d, p);
        if (b == null)
          return b;
        if (c) {
          var S = r.children;
          if (S !== void 0)
            if (a)
              if (G(S)) {
                for (var I = 0; I < S.length; I++)
                  ke(S[I], e);
                Object.freeze && Object.freeze(S);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(S, e);
        }
        if (V.call(r, "key")) {
          var D = T(e), k = Object.keys(r).filter(function(hr) {
            return hr !== "key";
          }), Q = k.length > 0 ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[D + Q]) {
            var yr = k.length > 0 ? "{" + k.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, D, yr, D), we[D + Q] = !0;
          }
        }
        return e === i ? cr(b) : lr(b), b;
      }
    }
    function fr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var vr = dr, pr = fr;
    L.Fragment = i, L.jsx = vr, L.jsxs = pr;
  })()), L;
}
var Pe;
function gr() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? q.exports = mr() : q.exports = Rr()), q.exports;
}
var h = gr();
function Er(n) {
  return !n || !n.hasContent ? !1 : n.hasUncompletedTodo ? "primary" : "secondary";
}
function re(n) {
  const { key: o, value: s, metadata: i, outside: l = !1, date: f } = n, v = s.key === o, R = !!f && _r(f);
  return { indicator: l ? !1 : Er(i?.[o]), selected: v, today: R };
}
function xr(n, o) {
  if (o.kind === "month")
    return {
      beforeRows: [],
      activeRows: n,
      afterRows: []
    };
  const s = n.findIndex(
    (i) => i.some((l) => l.value === o.key)
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
function kr(n) {
  return typeof n.month == "number" ? br(new Date(n.year, n.month - 1, 1), "LLLL") : n.weekKey ?? n.id;
}
function wr(n, o, s) {
  return n.items.map((i) => {
    if (i.kind === "marker") {
      const v = re({
        key: i.meta?.weekKey ?? i.id,
        value: o,
        metadata: s
      });
      return {
        kind: "week",
        key: i.id,
        label: i.meta?.weekNumber ?? 0,
        value: i.meta?.weekKey ?? i.id,
        selected: v.selected,
        indicator: v.indicator
      };
    }
    const l = i, f = re({
      key: l.dayKey,
      value: o,
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
function Sr(n) {
  const { data: o, value: s, metadata: i, expanded: l } = n;
  return {
    expanded: l,
    sections: o.map((f) => {
      const v = f.rows.map((m) => wr(m, s, i)), R = xr(v, s), y = f.monthKey ?? f.id, g = re({
        key: y,
        value: s,
        metadata: i
      }).indicator;
      return {
        key: f.id,
        monthLabel: kr(f),
        monthValue: y,
        selected: s.kind === "month" && s.key === y,
        indicator: g,
        ...R
      };
    })
  };
}
function jr(n) {
  const {
    value: o,
    defaultValue: s,
    onValueChange: i,
    expanded: l,
    defaultExpanded: f = !1,
    onExpandedChange: v
  } = n, [R, y] = je(
    s ?? { kind: "month", key: "" }
  ), [g, m] = je(f), w = o ?? R, j = l ?? g, C = Te(
    (O) => {
      o === void 0 && y(O), i?.(O);
    },
    [o, i]
  ), W = Te(
    (O) => {
      l === void 0 && m(O), v?.(O);
    },
    [l, v]
  );
  return Ae(
    () => ({
      value: w,
      setValue: C,
      expanded: j,
      setExpanded: W
    }),
    [j, W, C, w]
  );
}
const Tr = "_root_19cwz_1", Cr = "_toggle_19cwz_7", Or = "_root_1axuh_1", Pr = "_section_1axuh_7", Dr = "_row_1axuh_11", Fr = "_root_1cwda_1", Ar = "_inner_1cwda_12";
function De(n) {
  const { expanded: o, children: s } = n;
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      className: Fr,
      "data-expanded": o,
      "aria-hidden": !o,
      children: /* @__PURE__ */ h.jsx("div", { className: Ar, children: s })
    }
  );
}
const Ir = "_root_3lr8g_1";
function Wr(n) {
  const { label: o, selected: s, today: i, outside: l, onSelect: f } = n;
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      type: "button",
      className: Ir,
      "data-selected": s,
      "data-today": i,
      "data-outside": l,
      onClick: f,
      children: o
    }
  );
}
const Nr = "_root_f8gdt_1";
function Vr(n) {
  const { label: o, selected: s, onSelect: i } = n;
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      type: "button",
      className: Nr,
      "data-selected": s,
      onClick: i,
      children: o
    }
  );
}
const $r = "_root_15vsq_1";
function Lr(n) {
  const { label: o, selected: s, onSelect: i } = n;
  return /* @__PURE__ */ h.jsxs(
    "button",
    {
      type: "button",
      className: $r,
      "data-selected": s,
      onClick: i,
      children: [
        "W",
        o
      ]
    }
  );
}
const Mr = "_root_1npxx_1", Yr = "_root_12rog_1";
function Ur({ label: n }) {
  return /* @__PURE__ */ h.jsx("span", { className: Yr, children: n });
}
const Kr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function qr() {
  return /* @__PURE__ */ h.jsxs("div", { className: Mr, children: [
    /* @__PURE__ */ h.jsx("span", {}),
    Kr.map((n) => /* @__PURE__ */ h.jsx(Ur, { label: n }, n))
  ] });
}
function Jr(n, o, s) {
  return n.kind === "week" ? /* @__PURE__ */ h.jsx(
    Lr,
    {
      label: n.label,
      selected: n.selected,
      onSelect: () => s?.(n.value)
    },
    n.key
  ) : /* @__PURE__ */ h.jsx(
    Wr,
    {
      label: n.label,
      selected: n.selected,
      today: n.today,
      outside: n.outside,
      onSelect: () => o?.(n.value)
    },
    n.key
  );
}
function ee(n, o, s) {
  return n.map((i, l) => /* @__PURE__ */ h.jsx("div", { className: Dr, children: i.map((f) => Jr(f, o, s)) }, `row-${l}`));
}
function Br(n) {
  const { sections: o, expanded: s, onDaySelect: i, onWeekSelect: l, onMonthSelect: f } = n;
  return /* @__PURE__ */ h.jsx("div", { className: Or, children: o.map((v) => /* @__PURE__ */ h.jsxs("section", { className: Pr, children: [
    /* @__PURE__ */ h.jsx(
      Vr,
      {
        label: v.monthLabel,
        selected: v.selected,
        onSelect: () => f?.(v.monthValue)
      }
    ),
    /* @__PURE__ */ h.jsx(qr, {}),
    /* @__PURE__ */ h.jsx(De, { expanded: s, children: ee(v.beforeRows, i, l) }),
    ee(v.activeRows, i, l),
    /* @__PURE__ */ h.jsx(De, { expanded: s, children: ee(v.afterRows, i, l) })
  ] }, v.key)) });
}
function zr(n) {
  const { model: o, onDaySelect: s, onWeekSelect: i, onMonthSelect: l, onExpandedChange: f } = n;
  return /* @__PURE__ */ h.jsxs("div", { className: Tr, children: [
    /* @__PURE__ */ h.jsx(
      Br,
      {
        sections: o.sections,
        expanded: !!o.expanded,
        onDaySelect: s,
        onWeekSelect: i,
        onMonthSelect: l
      }
    ),
    f && /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "button",
        className: Cr,
        onClick: () => f(!o.expanded),
        children: o.expanded ? "Collapse" : "Expand"
      }
    )
  ] });
}
function Gr(n) {
  return /* @__PURE__ */ h.jsx(zr, { ...n });
}
function Zr(n) {
  const o = jr(n), { data: s, metadata: i } = n, { expanded: l, setExpanded: f, setValue: v, value: R } = o, y = Ae(
    () => Sr({
      data: s,
      value: R,
      metadata: i,
      expanded: l
    }),
    [s, l, i, R]
  );
  return /* @__PURE__ */ h.jsx(
    Gr,
    {
      model: y,
      onDaySelect: (g) => v({ kind: "day", key: g }),
      onWeekSelect: (g) => v({ kind: "week", key: g }),
      onMonthSelect: (g) => v({ kind: "month", key: g }),
      onExpandedChange: f
    }
  );
}
export {
  Zr as Calendar,
  Gr as CalendarPure
};
//# sourceMappingURL=index.js.map
