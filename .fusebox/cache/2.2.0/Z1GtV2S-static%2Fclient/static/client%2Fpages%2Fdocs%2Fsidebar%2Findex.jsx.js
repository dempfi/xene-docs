module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = require(\"react\");\nvar module_1 = require(\"./module\");\nvar react_router_dom_1 = require(\"react-router-dom\");\nvar logo_1 = require(\"../../../components/logo\");\nexports.default = function (_a) {\n    var index = _a.index, route = _a.route;\n    return React.createElement(\"div\", { className: 'sidebar' },\n        React.createElement(react_router_dom_1.Link, { to: '/' },\n            React.createElement(logo_1.default, { size: 56 })),\n        React.createElement(\"nav\", null, index.map(module_1.default(route))));\n};\n",
dependencies: ["react","./module","react-router-dom","../../../components/logo"],
sourceMap: {},
headerContent: undefined,
mtime: 1499528799000,
devLibsRequired : undefined
};