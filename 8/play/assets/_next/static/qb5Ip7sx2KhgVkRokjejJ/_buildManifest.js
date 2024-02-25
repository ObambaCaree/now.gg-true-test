self.__BUILD_MANIFEST = function(s, e, c, a, t, d, n, i, u, o, f, b) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: n,
                destination: n
            }, {
                source: i,
                destination: i
            }, {
                source: "/play/404",
                destination: "/play/notFoundScreen"
            }, {
                source: "/play/:path*",
                destination: "/play"
            }],
            fallback: []
        },
        "/": [c, a, "static/css/1634d5343d0c5502.css", "static/chunks/919-961530544238edce.js", s, e, t, d, u, o, f, "static/chunks/56-d68c75434b688cfb.js", b, "static/chunks/pages/index-7877732e4b9a2f1e.js"],
        "/_error": [c, a, s, e, t, "static/chunks/pages/_error-aefc8ee201807efe.js"],
        "/apps/[dev-slug]/[id]/[pub-slug]": [c, a, s, e, t, d, u, o, b, "static/chunks/977-6957e3c07765079d.js", "static/chunks/880-46b726e8ba4b6815.js", "static/chunks/pages/apps/[dev-slug]/[id]/[pub-slug]-eea5ef0f8df88722.js"],
        "/browse": [c, a, s, e, t, "static/chunks/pages/browse-94de2a1eeb72582d.js"],
        "/notFoundScreen": [c, a, s, e, t, "static/chunks/pages/notFoundScreen-eb8d5f6b324cd271.js"],
        "/videos/watch/[videoId]": [s, e, d, f, "static/chunks/pages/videos/watch/[videoId]-1a02bca557506b66.js"],
        "/videos/[channelHandle]": [s, d, "static/chunks/pages/videos/[channelHandle]-cc32939fe839facf.js"],
        sortedPages: ["/", "/_app", "/_error", "/apps/[dev-slug]/[id]/[pub-slug]", "/browse", "/notFoundScreen", "/videos/watch/[videoId]", "/videos/[channelHandle]"]
    }
}("static/chunks/806-30fe3cd2389af2c1.js", "static/chunks/804-c8e3058f86755a30.js", "static/css/3d0ae4c613f4697f.css", "static/chunks/164-f867bd57cb37503b.js", "static/chunks/166-8507a75c3739ff74.js", "static/chunks/742-8b9049011b2dbba4.js", "/play/browse", "/play/videos/:path*", "static/chunks/53-5e162af49ef8b1d4.js", "static/chunks/761-7222d0a77ff64c73.js", "static/chunks/235-09e831ccc0d85df0.js", "static/chunks/673-d1f0ee9fcb59e3f8.js"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
