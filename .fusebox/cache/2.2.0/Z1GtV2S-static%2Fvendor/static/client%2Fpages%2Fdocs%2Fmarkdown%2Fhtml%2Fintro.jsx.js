module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = require(\"react\");\nvar clean = function (a) { return a.replace(/<\\/?intro>/g, ''); };\nexports.default = function (a) {\n    return React.createElement(\"div\", { className: 'intro' }, clean(a));\n};\n",
dependencies: ["react"],
sourceMap: {},
headerContent: undefined,
mtime: 1499528799000,
devLibsRequired : undefined
};