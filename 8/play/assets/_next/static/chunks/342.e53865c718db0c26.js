"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[342], {
    51342: function(e, t, n) {
        n.r(t),
        n.d(t, {
            Categories: function() {
                return s
            }
        });
        var i = n(11720)
          , r = n(7940)
          , l = n(64067)
          , a = n(64300)
          , o = n(97997)
          , c = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var i, r = 0, l = t.length; r < l; r++)
                    !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)),
                    i[r] = t[r]);
            return e.concat(i || Array.prototype.slice.call(t))
        }
          , s = function() {
            var e = (0,
            i.useState)(l.oj.slice(0, 15))
              , t = e[0]
              , n = e[1];
            return (0,
            o.BX)(a.$0, {
                children: [(0,
                o.tZ)(a.OT, {
                    className: "d-desk",
                    id: "categories",
                    children: "Explore by Category"
                }), (0,
                o.tZ)(a.OT, {
                    className: "d-mobile",
                    id: "categories",
                    children: "Explore More Categories"
                }), (0,
                o.tZ)(a.Co, {
                    children: t.map((function(e) {
                        return (0,
                        o.BX)(a.WD, {
                            href: "/games/".concat(e.slug, ".html"),
                            children: [(0,
                            o.tZ)("img", {
                                loading: "lazy",
                                src: e.icon.thumbnail,
                                alt: "Play ".concat(e.name, " on now.gg"),
                                width: 33,
                                height: 33
                            }), (0,
                            o.tZ)("span", {
                                children: e.name
                            })]
                        }, e.id)
                    }
                    ))
                }), t.length < l.oj.length && (0,
                o.tZ)(a.gi, {
                    children: (0,
                    o.tZ)(r.z, {
                        className: "more-cta",
                        id: "showMoreCategories",
                        variant: "outline",
                        size: "medium",
                        onClick: function() {
                            n(c(c([], t, !0), l.oj.slice(t.length, t.length + 15), !0))
                        },
                        children: "Show More"
                    })
                })]
            })
        };
        t.default = s
    }
}]);
//# sourceMappingURL=342.e53865c718db0c26.js.map
