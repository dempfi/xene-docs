module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = require(\"react\");\nvar upperCase_1 = require(\"lodash/upperCase\");\nvar article_1 = require(\"./article\");\nexports.default = function (route) { return function (_a) {\n    var module = _a.module, articles = _a.articles;\n    return react_1.default.createElement(\"ul\", { key: module, className: 'module' },\n        react_1.default.createElement(\"span\", { className: 'title' }, upperCase_1.default(module)),\n        articles.map(article_1.default(route, module)));\n}; };\n",
dependencies: ["react","lodash/upperCase","./article"],
sourceMap: {},
headerContent: undefined,
mtime: 1499527964000,
devLibsRequired : undefined
};