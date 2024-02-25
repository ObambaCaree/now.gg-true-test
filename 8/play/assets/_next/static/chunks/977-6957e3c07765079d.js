"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[977], {
    92284: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return T
            }
        });
        var i, o, r, a, p, d, l, c, s = t(11720), u = t(94564), x = t(13978), h = t(45024), f = t(1003), g = t(77691), b = t(79354), m = t(50445), y = t(95860), v = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, w = m.ZP.ul(i || (i = v(["\n  overflow: auto;\n  max-height: 240px;\n  width: 100%;\n  position: absolute;\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n  background: rgba(0, 0, 0, 0.2);\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);\n  backdrop-filter: blur(12px);\n  border-radius: 0px 0px 8px 8px;\n\n  ::-webkit-scrollbar {\n    width: 4px;\n    display: flex;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 80px;\n  }\n"], ["\n  overflow: auto;\n  max-height: 240px;\n  width: 100%;\n  position: absolute;\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n  background: rgba(0, 0, 0, 0.2);\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);\n  backdrop-filter: blur(12px);\n  border-radius: 0px 0px 8px 8px;\n\n  ::-webkit-scrollbar {\n    width: 4px;\n    display: flex;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 80px;\n  }\n"])), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white10
        }
        )), k = m.ZP.li(o || (o = v(["\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 6px;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n    button {\n      display: flex;\n    }\n  }\n"], ["\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 6px;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n    button {\n      display: flex;\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.white10
        }
        )), Z = m.ZP.div(r || (r = v(["\n  display: flex;\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n"]))), P = (0,
        m.ZP)(u.gd)(a || (a = v(["\n  ", "\n"], ["\n  ", "\n"])), y.LH), S = m.ZP.button(p || (p = v(["\n  display: none;\n  cursor: pointer;\n  background: ", ";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 4px 16px;\n  margin-left: auto;\n  border: none;\n  color: white;\n"], ["\n  display: none;\n  cursor: pointer;\n  background: ", ";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 4px 16px;\n  margin-left: auto;\n  border: none;\n  color: white;\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        )), C = (0,
        m.ZP)(k)(d || (d = v(["\n  gap: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n\n  &:hover {\n    background: transparent;\n  }\n"], ["\n  gap: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n\n  &:hover {\n    background: transparent;\n  }\n"]))), E = m.ZP.div(l || (l = v(["\n  height: 36px;\n  border-radius: 4px;\n  background: ", ";\n  width: 100%;\n  display: flex;\n  gap: 8px;\n  padding: 8px;\n  cursor: pointer;\n  align-items: center;\n  color: ", ";\n\n  svg {\n    transform: rotate(-90deg);\n  }\n\n  p {\n    width: -webkit-fill-available;\n  }\n"], ["\n  height: 36px;\n  border-radius: 4px;\n  background: ", ";\n  width: 100%;\n  display: flex;\n  gap: 8px;\n  padding: 8px;\n  cursor: pointer;\n  align-items: center;\n  color: ", ";\n\n  svg {\n    transform: rotate(-90deg);\n  }\n\n  p {\n    width: -webkit-fill-available;\n  }\n"])), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), j = t(97997), A = function(n) {
            var e = n.searchText
              , t = n.items
              , i = n.isAptoidePresent
              , o = n.onClick;
            return (0,
            j.tZ)(w, {
                onClick: function(n) {
                    return n.stopPropagation()
                },
                children: t.length > 0 ? t.map((function(n) {
                    return (0,
                    j.BX)(k, {
                        onClick: function() {
                            return o(n)
                        },
                        children: [(0,
                        j.tZ)(Z, {
                            children: (0,
                            j.tZ)("img", {
                                src: n.media.icon,
                                width: 32,
                                height: 32,
                                alt: n.appName
                            })
                        }), (0,
                        j.tZ)(P, {
                            children: n.appName
                        }), !(0,
                        g.Em)() && (0,
                        j.tZ)(S, {
                            children: (0,
                            j.tZ)(u.qm, {
                                children: (0,
                                x.t)("play")
                            })
                        })]
                    })
                }
                )) : (0,
                j.BX)(C, {
                    children: [(0,
                    j.tZ)(u.gd, {
                        children: (0,
                        x.t)("noSearchResults")
                    }), i && (0,
                    j.BX)(E, {
                        onClick: function() {
                            (0,
                            g.jj)(e)
                        },
                        children: [(0,
                        j.tZ)("img", {
                            alt: "Aptoid ".concat((0,
                            x.t)("logo")),
                            src: (0,
                            h.j)(f.Z),
                            style: {
                                width: "20px",
                                height: "20px"
                            }
                        }), (0,
                        j.tZ)(u.IS, {
                            children: (0,
                            x.t)("searchAppStore")
                        }), (0,
                        j.tZ)(b.pL, {})]
                    })]
                })
            })
        }, L = t(89598), N = t(94381), B = t(25617), R = t(88557), O = t(47139), X = t(66971), I = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, z = m.ZP.div(c || (c = I(["\n  position: absolute;\n  left: 50%;\n  top: 12px;\n  transform: translateX(-50%);\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"], ["\n  position: absolute;\n  left: 50%;\n  top: 12px;\n  transform: translateX(-50%);\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]))), _ = t(77036), F = function(n, e, t) {
            if (t || 2 === arguments.length)
                for (var i, o = 0, r = e.length; o < r; o++)
                    !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)),
                    i[o] = e[o]);
            return n.concat(i || Array.prototype.slice.call(e))
        }, T = function(n) {
            var e = n.wrapperClass
              , t = void 0 === e ? "" : e
              , i = (0,
            s.useState)("")
              , o = i[0]
              , r = i[1]
              , a = (0,
            s.useState)([])
              , p = a[0]
              , d = a[1]
              , l = (0,
            s.useState)([])
              , c = l[0]
              , u = l[1]
              , x = (0,
            s.useContext)(O.Q)
              , h = (0,
            B.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , f = (0,
            B.I0)();
            (0,
            s.useEffect)((function() {
                if (x) {
                    var n = F(F(F(F([], x.topApps, !0), x.topBarApps, !0), x.otherApps, !0), x.remainingApps, !0).filter((function(n) {
                        return n.appId === N.Rv
                    }
                    ));
                    n.length > 0 && u(n)
                }
            }
            ), [x]),
            (0,
            s.useEffect)((function() {
                var n = function() {
                    r("")
                }
                  , e = function(n) {
                    "Escape" === n.key && r("")
                };
                return document.body.addEventListener("click", n),
                document.body.addEventListener("keydown", e),
                function() {
                    document.body.removeEventListener("click", n),
                    document.body.removeEventListener("keydown", e)
                }
            }
            ), []);
            var g = function(n, e) {
                (0,
                L.L9)(N.S5, {
                    element: "".concat(N.$D, "Input"),
                    input: n,
                    hasResult: e
                })
            };
            return (0,
            j.BX)(z, {
                className: t,
                children: [(0,
                j.tZ)(_.E, {
                    onChange: function(n) {
                        var e;
                        if ("" === n)
                            return r(n),
                            d([]),
                            void g("", !1);
                        var t = n.toLowerCase().split(/\s+/)
                          , i = (null === (e = F(F(F(F([], x.topApps, !0), x.topBarApps, !0), x.otherApps, !0), x.remainingApps, !0)) || void 0 === e ? void 0 : e.filter((function(n) {
                            var e = n.appName
                              , i = void 0 === e ? "" : e;
                            return t.every((function(n) {
                                return i.toLocaleLowerCase().includes(n)
                            }
                            ))
                        }
                        ))).filter((function(n, e, t) {
                            return e === t.findIndex((function(e) {
                                return e.appName === n.appName
                            }
                            ))
                        }
                        ));
                        r(n),
                        d(i || []),
                        g(n, !0)
                    },
                    onBlur: function(n) {
                        return g(n, p.length > 0)
                    },
                    autoFocus: !1,
                    timeout: 90,
                    searchString: o
                }), o.length > 0 && (0,
                j.tZ)(A, {
                    isAptoidePresent: c[0],
                    searchText: o,
                    items: p,
                    onClick: function(n) {
                        if (g(o, p.length > 0),
                        h)
                            return f({
                                type: X.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    showRecordingModalBeforeExit: !0,
                                    showRecordingModalBeforeExitSource: "gameTile",
                                    urlToOpenAfterRecordModalExit: n.playUrl
                                }
                            }),
                            void (0,
                            L.L9)(N.S5, {
                                element: "SearchResult",
                                action: "Clicked",
                                packageName: n.packageName
                            });
                        (0,
                        L.L9)(N.S5, {
                            element: "SearchResult",
                            action: "Clicked",
                            packageName: n.packageName
                        }, (function() {
                            window.location.href = (0,
                            R.ZP)(n.playUrl, "SearchBarGameClicked")
                        }
                        ))
                    }
                })]
            })
        }
    },
    53574: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return _
            }
        });
        var i, o, r, a, p, d, l, c, s, u, x, h, f = t(11720), g = t(79354), b = t(50301), m = t(7763), y = t(25617), v = t(77036), w = t(45628), k = t(72742), Z = t(50445), P = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, S = (0,
        Z.F4)(i || (i = P(["\n  0% {\n    top: 100px;\n    opacity: 0;\n  } 100% {\n    top: 0;\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: 100px;\n    opacity: 0;\n  } 100% {\n    top: 0;\n    opacity: 1;\n  }\n"]))), C = (0,
        Z.F4)(o || (o = P(["\n  0% {\n    top: 0;\n    opacity: 1;\n  }\n  50% {\n    top: 100px;\n    opacity: 0;\n  }\n"], ["\n  0% {\n    top: 0;\n    opacity: 1;\n  }\n  50% {\n    top: 100px;\n    opacity: 0;\n  }\n"]))), E = Z.ZP.div(a || (a = P(["\n  overflow: auto;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: calc(var(--vw, 1vw) * 100);\n  display: flex;\n  flex-direction: column;\n\n  animation: ", " 0.3s ease-out;\n  /* ", "  */\n"], ["\n  overflow: auto;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: calc(var(--vw, 1vw) * 100);\n  display: flex;\n  flex-direction: column;\n\n  animation: ", " 0.3s ease-out;\n  /* ", "  */\n"])), S, (function(n) {
            return n.hide && (0,
            Z.iv)(r || (r = P(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), C)
        }
        )), j = Z.ZP.div(p || (p = P(["\n  padding: 20px 24px;\n  position: sticky;\n  top: 0;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  z-index: 20;\n  display: flex;\n  justify-content: center;\n\n  @media only screen and (orientation: landscape) {\n    padding: 16px 24px;\n  }\n"], ["\n  padding: 20px 24px;\n  position: sticky;\n  top: 0;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  z-index: 20;\n  display: flex;\n  justify-content: center;\n\n  @media only screen and (orientation: landscape) {\n    padding: 16px 24px;\n  }\n"])), (function(n) {
            return n.theme.colors.black70
        }
        )), A = Z.ZP.div(d || (d = P(["\n  background: ", ";\n  backdrop-filter: blur(60px);\n  width: 100%;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  background: ", ";\n  backdrop-filter: blur(60px);\n  width: 100%;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])), (function(n) {
            return n.theme.colors.black70
        }
        )), L = Z.ZP.div(l || (l = P(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  left: 24px;\n\n  img {\n    width: 124px;\n    height: 32px;\n  }\n\n  @media only screen and (orientation: landscape) {\n    img {\n      position: absolute;\n      clip: rect(0, 48px, 32px, 0);\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  left: 24px;\n\n  img {\n    width: 124px;\n    height: 32px;\n  }\n\n  @media only screen and (orientation: landscape) {\n    img {\n      position: absolute;\n      clip: rect(0, 48px, 32px, 0);\n    }\n  }\n"]))), N = Z.ZP.div(c || (c = P(["\n  position: relative;\n  height: 32px;\n"], ["\n  position: relative;\n  height: 32px;\n"]))), B = Z.ZP.span(s || (s = P(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  z-index: 20;\n  position: absolute;\n  top: 24px;\n  right: 20px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  z-index: 20;\n  position: absolute;\n  top: 24px;\n  right: 20px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"]))), R = Z.ZP.div(u || (u = P(["\n  margin-top: 76px;\n\n  @media only screen and (orientation: landscape) {\n    margin-top: 0;\n  }\n\n  @media only screen and (orientation: portrait) {\n    width: 100%;\n  }\n"], ["\n  margin-top: 76px;\n\n  @media only screen and (orientation: landscape) {\n    margin-top: 0;\n  }\n\n  @media only screen and (orientation: portrait) {\n    width: 100%;\n  }\n"]))), O = Z.ZP.div(x || (x = P(["\n  padding: 24px;\n  &>div {\n    padding: 0;\n    width: 100% !important;\n    position: relative;\n    border: 0;\n    gap: 24px;\n    background: transparent;\n\n    &.fit-html {\n      left: 0;\n    }\n  }\n\n  .icon-cross-thin, .genre-list {\n    display: none;\n  }\n\n  .trending-section {\n    display: block;\n  }\n"], ["\n  padding: 24px;\n  &>div {\n    padding: 0;\n    width: 100% !important;\n    position: relative;\n    border: 0;\n    gap: 24px;\n    background: transparent;\n\n    &.fit-html {\n      left: 0;\n    }\n  }\n\n  .icon-cross-thin, .genre-list {\n    display: none;\n  }\n\n  .trending-section {\n    display: block;\n  }\n"]))), X = Z.ZP.div(h || (h = P(["\n  &>div {\n    top: 0px;\n    bottom: 0px;\n    position: relative;\n    width: 100%;\n    padding: 24px;\n    background: transparent;\n    backdrop-filter: none;\n\n    h3 {\n      text-align: left;\n    }\n\n    &.fit-html {\n      left: 0;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      left: 0 !important;\n      width: 100% !important;\n      padding-top: 24px;\n    }\n  }\n\n  .icon-cross-thin {\n    display: none;\n  }\n"], ["\n  &>div {\n    top: 0px;\n    bottom: 0px;\n    position: relative;\n    width: 100%;\n    padding: 24px;\n    background: transparent;\n    backdrop-filter: none;\n\n    h3 {\n      text-align: left;\n    }\n\n    &.fit-html {\n      left: 0;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      left: 0 !important;\n      width: 100% !important;\n      padding-top: 24px;\n    }\n  }\n\n  .icon-cross-thin {\n    display: none;\n  }\n"]))), I = E, z = t(97997), _ = function(n) {
            var e = n.close
              , t = n.origin
              , i = (0,
            y.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , o = (0,
            f.useState)(!1)
              , r = o[0]
              , a = o[1]
              , p = (0,
            f.useState)("browse" === t)
              , d = p[0]
              , l = p[1]
              , c = (0,
            f.useState)()
              , s = c[0]
              , u = c[1]
              , x = (0,
            f.useState)(null)
              , h = (x[0],
            x[1]);
            (0,
            f.useEffect)((function() {
                return document.body.classList.add("revert-rotation", "overflow-hidden"),
                function() {
                    document.body.classList.remove("revert-rotation", "overflow-hidden")
                }
            }
            ), []);
            return (0,
            f.createPortal)((0,
            z.BX)(I, {
                hide: r,
                ref: function(n) {
                    return h(n)
                },
                children: [(0,
                z.BX)(j, {
                    children: [(0,
                    z.tZ)(L, {
                        isPortrait: w.cj.portrait === i,
                        children: (0,
                        z.tZ)(N, {
                            children: (0,
                            z.tZ)(k.Z, {
                                className: "app-logo"
                            })
                        })
                    }), (0,
                    z.tZ)(R, {
                        children: (0,
                        z.tZ)(v.Z, {
                            autoFocus: "browse" === t,
                            onFocus: function() {
                                l(!0)
                            },
                            onChange: function(n) {
                                return u(n)
                            }
                        })
                    }), (0,
                    z.tZ)(B, {
                        onClick: function() {
                            a(!0),
                            e()
                        },
                        children: (0,
                        z.tZ)(g.x8, {})
                    })]
                }), (0,
                z.BX)(A, {
                    children: [d && (0,
                    z.tZ)(O, {
                        children: (0,
                        z.tZ)(b.Z, {
                            isOverlay: !0,
                            overlayKeywords: s
                        })
                    }), !d && (0,
                    z.tZ)(X, {
                        children: (0,
                        z.tZ)(m.default, {
                            isOverlay: !0
                        })
                    })]
                })]
            }), document.body)
        }
    }
}]);
//# sourceMappingURL=977-6957e3c07765079d.js.map
