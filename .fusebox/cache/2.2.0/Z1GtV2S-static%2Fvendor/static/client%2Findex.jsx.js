module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nrequire(\"whatwg-fetch\");\nvar React = require(\"react\");\nvar DOM = require(\"react-dom\");\nvar react_router_dom_1 = require(\"react-router-dom\");\nvar main_1 = require(\"./pages/main\");\nvar docs_1 = require(\"./pages/docs\");\nvar Router = react_router_dom_1.BrowserRouter;\nvar App = function () {\n    return React.createElement(Router, null,\n        React.createElement(\"div\", null,\n            React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: main_1.Main }),\n            React.createElement(react_router_dom_1.Route, { path: '/docs/:module/:article/:chapter?', component: docs_1.default })));\n};\nDOM.render(React.createElement(App), document.querySelector('#root'));\n",
dependencies: ["whatwg-fetch","react","react-dom","react-router-dom","./pages/main","./pages/docs"],
sourceMap: {},
headerContent: undefined,
mtime: 1499528826000,
devLibsRequired : undefined
};