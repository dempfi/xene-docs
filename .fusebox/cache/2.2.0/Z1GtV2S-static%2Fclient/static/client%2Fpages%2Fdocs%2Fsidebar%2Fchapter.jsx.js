module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = require(\"react\");\nvar react_router_dom_1 = require(\"react-router-dom\");\nvar has_active_1 = require(\"./has-active\");\nvar isMethod = function (str) { return /\\(\\)/.test(str); };\nfunction Chapter(route, module, article) {\n    return function (_a) {\n        var title = _a.title, id = _a.id, chapters = _a.chapters;\n        return React.createElement(\"li\", { key: id, className: \"chapter \" + (isMethod(title) && 'is-method') + \" \" + (has_active_1.default(route, { module: module, article: article, chapter: id, chapters: chapters }) && 'has-active') },\n            React.createElement(react_router_dom_1.NavLink, { to: \"/docs/\" + module + \"/\" + article + \"/\" + id }, title),\n            React.createElement(\"ul\", { className: 'chapters' }, chapters.map(Chapter(route, module, article))));\n    };\n}\nexports.default = Chapter;\n",
dependencies: ["react","react-router-dom","./has-active"],
sourceMap: {},
headerContent: undefined,
mtime: 1499528799000,
devLibsRequired : undefined
};