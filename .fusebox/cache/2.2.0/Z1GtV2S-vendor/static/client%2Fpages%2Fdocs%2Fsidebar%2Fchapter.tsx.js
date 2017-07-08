module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = require(\"react\");\nvar react_router_dom_1 = require(\"react-router-dom\");\nvar has_active_1 = require(\"./has-active\");\nvar isMethod = function (str) { return /\\(\\)/.test(str); };\nfunction Chapter(route, module, article) {\n    return function (_a) {\n        var title = _a.title, id = _a.id, chapters = _a.chapters;\n        return react_1.default.createElement(\"li\", { key: id, className: \"chapter \" + (isMethod(title) && 'is-method') + \" \" + (has_active_1.default(route, { module: module, article: article, chapter: id, chapters: chapters }) && 'has-active') },\n            react_1.default.createElement(react_router_dom_1.NavLink, { to: \"/docs/\" + module + \"/\" + article + \"/\" + id }, title),\n            react_1.default.createElement(\"ul\", { className: 'chapters' }, chapters.map(Chapter(route, module, article))));\n    };\n}\nexports.default = Chapter;\n",
dependencies: ["react","react-router-dom","./has-active"],
sourceMap: {},
headerContent: undefined,
mtime: 1498845742000,
devLibsRequired : undefined
};