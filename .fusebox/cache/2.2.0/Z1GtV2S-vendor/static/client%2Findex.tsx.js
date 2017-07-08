module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nrequire(\"whatwg-fetch\");\nvar react_1 = require(\"react\");\nvar react_dom_1 = require(\"react-dom\");\nvar react_router_dom_1 = require(\"react-router-dom\");\nvar main_1 = require(\"./pages/main\");\nvar docs_1 = require(\"./pages/docs\");\nvar Router = react_router_dom_1.BrowserRouter;\nvar App = function () {\n    return react_1.default.createElement(Router, null,\n        react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: main_1.Main }),\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/docs/:module/:article/:chapter?', component: docs_1.default })));\n};\nreact_dom_1.default.render(react_1.default.createElement(App), document.querySelector('#root'));\n",
dependencies: ["whatwg-fetch","react","react-dom","react-router-dom","./pages/main","./pages/docs"],
sourceMap: {},
headerContent: undefined,
mtime: 1498828175000,
devLibsRequired : undefined
};