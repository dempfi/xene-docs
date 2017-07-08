module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = require(\"react\");\nvar upperCase_1 = require(\"lodash/upperCase\");\nvar article_1 = require(\"./article\");\nexports.default = function (route) { return function (_a) {\n    var module = _a.module, articles = _a.articles;\n    return React.createElement(\"ul\", { key: module, className: 'module' },\n        React.createElement(\"span\", { className: 'title' }, upperCase_1.default(module)),\n        articles.map(article_1.default(route, module)));\n}; };\n",
dependencies: ["react","lodash/upperCase","./article"],
sourceMap: {},
headerContent: undefined,
mtime: 1499528799000,
devLibsRequired : undefined
};