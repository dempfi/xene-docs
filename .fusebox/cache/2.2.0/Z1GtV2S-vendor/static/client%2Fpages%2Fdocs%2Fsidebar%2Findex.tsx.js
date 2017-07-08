module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = require(\"react\");\nvar module_1 = require(\"./module\");\nvar react_router_dom_1 = require(\"react-router-dom\");\nvar logo_1 = require(\"../../../components/logo\");\nexports.default = function (_a) {\n    var index = _a.index, route = _a.route;\n    return react_1.default.createElement(\"div\", { className: 'sidebar' },\n        react_1.default.createElement(react_router_dom_1.Link, { to: '/' },\n            react_1.default.createElement(logo_1.default, { size: 56 })),\n        react_1.default.createElement(\"nav\", null, index.map(module_1.default(route))));\n};\n",
dependencies: ["react","./module","react-router-dom","../../../components/logo"],
sourceMap: {},
headerContent: undefined,
mtime: 1498826858000,
devLibsRequired : undefined
};