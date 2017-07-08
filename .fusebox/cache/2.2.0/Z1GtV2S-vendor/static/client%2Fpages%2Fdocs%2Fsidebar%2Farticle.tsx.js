module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = require(\"react\");\nvar react_router_dom_1 = require(\"react-router-dom\");\nvar chapter_1 = require(\"./chapter\");\nvar has_active_1 = require(\"./has-active\");\nexports.default = function (route, module) {\n    return function (_a) {\n        var title = _a.title, id = _a.id, chapters = _a.chapters, category = _a.category;\n        return react_1.default.createElement(\"li\", { key: id, className: \"article \" + category + \" \" + (has_active_1.default(route, { module: module, article: id, chapters: chapters }) && 'has-active') },\n            react_1.default.createElement(react_router_dom_1.NavLink, { to: \"/docs/\" + module + \"/\" + id, exact: true }, title),\n            has_active_1.default(route, { module: module, article: id, chapters: chapters }) && react_1.default.createElement(\"ul\", { className: 'chapters' }, chapters.map(chapter_1.default(route, module, id))));\n    };\n};\n",
dependencies: ["react","react-router-dom","./chapter","./has-active"],
sourceMap: {},
headerContent: undefined,
mtime: 1498985964000,
devLibsRequired : undefined
};