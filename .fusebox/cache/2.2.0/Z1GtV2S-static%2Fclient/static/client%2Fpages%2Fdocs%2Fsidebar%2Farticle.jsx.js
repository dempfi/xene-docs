module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = require(\"react\");\nvar react_router_dom_1 = require(\"react-router-dom\");\nvar chapter_1 = require(\"./chapter\");\nvar has_active_1 = require(\"./has-active\");\nexports.default = function (route, module) {\n    return function (_a) {\n        var title = _a.title, id = _a.id, chapters = _a.chapters, category = _a.category;\n        return React.createElement(\"li\", { key: id, className: \"article \" + category + \" \" + (has_active_1.default(route, { module: module, article: id, chapters: chapters }) && 'has-active') },\n            React.createElement(react_router_dom_1.NavLink, { to: \"/docs/\" + module + \"/\" + id, exact: true }, title),\n            has_active_1.default(route, { module: module, article: id, chapters: chapters }) && React.createElement(\"ul\", { className: 'chapters' }, chapters.map(chapter_1.default(route, module, id))));\n    };\n};\n",
dependencies: ["react","react-router-dom","./chapter","./has-active"],
sourceMap: {},
headerContent: undefined,
mtime: 1499528799000,
devLibsRequired : undefined
};