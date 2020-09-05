/*! For license information please see main.89df4abd.js.LICENSE.txt */
(window["webpackJsonppurescript-mix"] =
  window["webpackJsonppurescript-mix"] || []).push([
  [1],
  {
    6: function (t, r, e) {
      "use strict";
      function n(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function o(t, r) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, r) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
              var e = [],
                n = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, u = t[Symbol.iterator]();
                  !(n = (a = u.next()).done) &&
                  (e.push(a.value), !r || e.length !== r);
                  n = !0
                );
              } catch (c) {
                (o = !0), (i = c);
              } finally {
                try {
                  n || null == u.return || u.return();
                } finally {
                  if (o) throw i;
                }
              }
              return e;
            }
          })(t, r) ||
          (function (t, r) {
            if (t) {
              if ("string" === typeof t) return n(t, r);
              var e = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === e && t.constructor && (e = t.constructor.name),
                "Map" === e || "Set" === e
                  ? Array.from(e)
                  : "Arguments" === e ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                  ? n(t, r)
                  : void 0
              );
            }
          })(t, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      e.r(r);
      var i = e(0),
        a = e.n(i);
      r.default = function (t) {
        var r = o(Object(i.useState)(0), 2),
          e = r[0],
          n = r[1];
        return a.a.createElement(
          "div",
          null,
          a.a.createElement("p", null, "You clicked ", e, " times"),
          a.a.createElement(
            "button",
            {
              onClick: function () {
                return n(e + 1);
              },
            },
            t.label
          )
        );
      };
    },
  },
]);
!(function (e) {
  function t(t) {
    for (var r, o, u = t[0], i = t[1], a = 0, f = []; a < u.length; a++)
      (o = u[a]),
        Object.prototype.hasOwnProperty.call(n, o) && n[o] && f.push(n[o][0]),
        (n[o] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (c && c(t); f.length; ) f.shift()();
  }
  var r = {},
    n = { 0: 0 };
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.e = function (e) {
    var t = [],
      r = n[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var u = new Promise(function (t, o) {
          r = n[e] = [t, o];
        });
        t.push((r[2] = u));
        var i,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          (a.src = (function (e) {
            return (
              o.p +
              "static/js/" +
              ({}[e] || e) +
              "." +
              { 1: "9d5385a7" }[e] +
              ".chunk.js"
            );
          })(e));
        var c = new Error();
        i = function (t) {
          (a.onerror = a.onload = null), clearTimeout(f);
          var r = n[e];
          if (0 !== r) {
            if (r) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                u = t && t.target && t.target.src;
              (c.message =
                "Loading chunk " + e + " failed.\n(" + o + ": " + u + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = o),
                (c.request = u),
                r[1](c);
            }
            n[e] = void 0;
          }
        };
        var f = setTimeout(function () {
          i({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = i), document.head.appendChild(a);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = r),
    (o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/"),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonppurescript-mix"] =
      window["webpackJsonppurescript-mix"] || []),
    i = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var a = 0; a < u.length; a++) t(u[a]);
  var c = i;
  o((o.s = 1));
})([
  function (e, t, r) {
    "use strict";
    e.exports = r(2);
  },
  function (e, t, r) {
    e.exports = r(5);
  },
  function (e, t, r) {
    "use strict";
    var n = r(3),
      o = 60103,
      u = 60106;
    (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
    var i = 60109,
      a = 60110,
      c = 60112;
    t.Suspense = 60113;
    var f = 60115,
      s = 60116;
    if ("function" === typeof Symbol && Symbol.for) {
      var l = Symbol.for;
      (o = l("react.element")),
        (u = l("react.portal")),
        (t.Fragment = l("react.fragment")),
        (t.StrictMode = l("react.strict_mode")),
        (t.Profiler = l("react.profiler")),
        (i = l("react.provider")),
        (a = l("react.context")),
        (c = l("react.forward_ref")),
        (t.Suspense = l("react.suspense")),
        (f = l("react.memo")),
        (s = l("react.lazy"));
    }
    var p = "function" === typeof Symbol && Symbol.iterator;
    function y(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          r = 1;
        r < arguments.length;
        r++
      )
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var d = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      h = {};
    function v(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = h),
        (this.updater = r || d);
    }
    function m() {}
    function b(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = h),
        (this.updater = r || d);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if ("object" !== typeof e && "function" !== typeof e && null != e)
          throw Error(y(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (m.prototype = v.prototype);
    var g = (b.prototype = new m());
    (g.constructor = b), n(g, v.prototype), (g.isPureReactComponent = !0);
    var _ = { current: null },
      w = Object.prototype.hasOwnProperty,
      j = { key: !0, ref: !0, __self: !0, __source: !0 };
    function O(e, t, r) {
      var n,
        u = {},
        i = null,
        a = null;
      if (null != t)
        for (n in (void 0 !== t.ref && (a = t.ref),
        void 0 !== t.key && (i = "" + t.key),
        t))
          w.call(t, n) && !j.hasOwnProperty(n) && (u[n] = t[n]);
      var c = arguments.length - 2;
      if (1 === c) u.children = r;
      else if (1 < c) {
        for (var f = Array(c), s = 0; s < c; s++) f[s] = arguments[s + 2];
        u.children = f;
      }
      if (e && e.defaultProps)
        for (n in (c = e.defaultProps)) void 0 === u[n] && (u[n] = c[n]);
      return {
        $$typeof: o,
        type: e,
        key: i,
        ref: a,
        props: u,
        _owner: _.current,
      };
    }
    function S(e) {
      return "object" === typeof e && null !== e && e.$$typeof === o;
    }
    var k = /\/+/g;
    function P(e, t) {
      return "object" === typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })("" + e.key)
        : t.toString(36);
    }
    function C(e, t, r, n, i) {
      var a = typeof e;
      ("undefined" !== a && "boolean" !== a) || (e = null);
      var c = !1;
      if (null === e) c = !0;
      else
        switch (a) {
          case "string":
          case "number":
            c = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case o:
              case u:
                c = !0;
            }
        }
      if (c)
        return (
          (i = i((c = e))),
          (e = "" === n ? "." + P(c, 0) : n),
          Array.isArray(i)
            ? ((r = ""),
              null != e && (r = e.replace(k, "$&/") + "/"),
              C(i, t, r, "", function (e) {
                return e;
              }))
            : null != i &&
              (S(i) &&
                (i = (function (e, t) {
                  return {
                    $$typeof: o,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  i,
                  r +
                    (!i.key || (c && c.key === i.key)
                      ? ""
                      : ("" + i.key).replace(k, "$&/") + "/") +
                    e
                )),
              t.push(i)),
          1
        );
      if (((c = 0), (n = "" === n ? "." : n + ":"), Array.isArray(e)))
        for (var f = 0; f < e.length; f++) {
          var s = n + P((a = e[f]), f);
          c += C(a, t, r, s, i);
        }
      else if (
        "function" ===
        typeof (s = (function (e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
            ? e
            : null;
        })(e))
      )
        for (e = s.call(e), f = 0; !(a = e.next()).done; )
          c += C((a = a.value), t, r, (s = n + P(a, f++)), i);
      else if ("object" === a)
        throw (
          ((t = "" + e),
          Error(
            y(
              31,
              "[object Object]" === t
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t
            )
          ))
        );
      return c;
    }
    function E(e, t, r) {
      if (null == e) return e;
      var n = [],
        o = 0;
      return (
        C(e, n, "", "", function (e) {
          return t.call(r, e, o++);
        }),
        n
      );
    }
    function $(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()),
          (e._status = 0),
          (e._result = t),
          t.then(
            function (t) {
              0 === e._status &&
                ((t = t.default), (e._status = 1), (e._result = t));
            },
            function (t) {
              0 === e._status && ((e._status = 2), (e._result = t));
            }
          );
      }
      if (1 === e._status) return e._result;
      throw e._result;
    }
    var R = { current: null };
    function x() {
      var e = R.current;
      if (null === e) throw Error(y(321));
      return e;
    }
    var A = {
      ReactCurrentDispatcher: R,
      ReactCurrentBatchConfig: { suspense: null },
      ReactCurrentOwner: _,
      IsSomeRendererActing: { current: !1 },
      assign: n,
    };
    (t.Children = {
      map: E,
      forEach: function (e, t, r) {
        E(
          e,
          function () {
            t.apply(this, arguments);
          },
          r
        );
      },
      count: function (e) {
        var t = 0;
        return (
          E(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          E(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!S(e)) throw Error(y(143));
        return e;
      },
    }),
      (t.Component = v),
      (t.PureComponent = b),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
      (t.cloneElement = function (e, t, r) {
        if (null === e || void 0 === e) throw Error(y(267, e));
        var u = n({}, e.props),
          i = e.key,
          a = e.ref,
          c = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((a = t.ref), (c = _.current)),
            void 0 !== t.key && (i = "" + t.key),
            e.type && e.type.defaultProps)
          )
            var f = e.type.defaultProps;
          for (s in t)
            w.call(t, s) &&
              !j.hasOwnProperty(s) &&
              (u[s] = void 0 === t[s] && void 0 !== f ? f[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) u.children = r;
        else if (1 < s) {
          f = Array(s);
          for (var l = 0; l < s; l++) f[l] = arguments[l + 2];
          u.children = f;
        }
        return {
          $$typeof: o,
          type: e.type,
          key: i,
          ref: a,
          props: u,
          _owner: c,
        };
      }),
      (t.createContext = function (e, t) {
        return (
          void 0 === t && (t = null),
          ((e = {
            $$typeof: a,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = { $$typeof: i, _context: e }),
          (e.Consumer = e)
        );
      }),
      (t.createElement = O),
      (t.createFactory = function (e) {
        var t = O.bind(null, e);
        return (t.type = e), t;
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (t.isValidElement = S),
      (t.lazy = function (e) {
        return { $$typeof: s, _payload: { _status: -1, _result: e }, _init: $ };
      }),
      (t.memo = function (e, t) {
        return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
      }),
      (t.useCallback = function (e, t) {
        return x().useCallback(e, t);
      }),
      (t.useContext = function (e, t) {
        return x().useContext(e, t);
      }),
      (t.useDebugValue = function () {}),
      (t.useEffect = function (e, t) {
        return x().useEffect(e, t);
      }),
      (t.useImperativeHandle = function (e, t, r) {
        return x().useImperativeHandle(e, t, r);
      }),
      (t.useLayoutEffect = function (e, t) {
        return x().useLayoutEffect(e, t);
      }),
      (t.useMemo = function (e, t) {
        return x().useMemo(e, t);
      }),
      (t.useReducer = function (e, t, r) {
        return x().useReducer(e, t, r);
      }),
      (t.useRef = function (e) {
        return x().useRef(e);
      }),
      (t.useState = function (e) {
        return x().useState(e);
      }),
      (t.version = "17.0.0-alpha.0-2d131d782");
  },
  function (e, t, r) {
    "use strict";
    var n = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable;
    function i(e) {
      if (null === e || void 0 === e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, r = 0; r < 10; r++)
          t["_" + String.fromCharCode(r)] = r;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            n[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (o) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var r, a, c = i(e), f = 1; f < arguments.length; f++) {
            for (var s in (r = Object(arguments[f])))
              o.call(r, s) && (c[s] = r[s]);
            if (n) {
              a = n(r);
              for (var l = 0; l < a.length; l++)
                u.call(r, a[l]) && (c[a[l]] = r[a[l]]);
            }
          }
          return c;
        };
  },
  function (e, t, r) {},
  function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0),
      o = r.n(n);
    r(4),
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
    var u = o.a.lazy(function () {
      return r.e(1).then(r.bind(null, 6));
    });
    "serviceWorker" in navigator &&
      navigator.serviceWorker.ready
        .then(function (e) {
          e.unregister();
        })
        .catch(function (e) {
          console.error(e.message);
        });
    var i = window;
    i.components || (i.components = {}),
      (i.components["purescript-app"] = { Counter: u });
  },
]);
//# sourceMappingURL=main.89df4abd.js.map
