module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = require(\"react\");\nvar react_router_dom_1 = require(\"react-router-dom\");\nvar filter_1 = require(\"lodash-es/filter\");\nvar startsWith_1 = require(\"lodash-es/startsWith\");\n/**\n * Parses href of next formats\n * /dialog.md, #static-match, ../../slack/docs/slackbot.md#slackbot\n */\nvar parseLink = function (href) {\n    var _a = href.split('#'), pathname = _a[0], chapter = _a[1];\n    var matches = /(?:([^/]*)\\/docs\\/)?([^/]*).md$/m.exec(pathname);\n    if (!matches)\n        return chapter ? { chapter: chapter } : undefined;\n    return { module: matches[1], article: matches[2], chapter: chapter };\n};\nvar link = function (route, link) {\n    var path = [link.module || route.module];\n    path.push(path[0] === link.module ? link.article : link.article || route.article);\n    path.push(path[1] === link.article ? link.chapter : link.chapter || route.chapter);\n    return \"/docs/\" + filter_1.default(path, function (i) { return !!i; }).join('/');\n};\nexports.default = function (route) { return function (_a) {\n    var href = _a.href, children = _a.children;\n    var parsed = parseLink(href);\n    return startsWith_1.default(href, 'http') || !parsed\n        ? react_1.default.createElement(\"a\", { href: href }, children)\n        : react_1.default.createElement(react_router_dom_1.Link, { to: link(route, parsed) }, children);\n}; };\n",
dependencies: ["react","react-router-dom","lodash-es/filter","lodash-es/startsWith"],
sourceMap: {},
headerContent: undefined,
mtime: 1498802504000,
devLibsRequired : undefined
};