module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = require(\"react\");\nvar clean = function (a) { return a.replace(/<\\/?intro>/g, ''); };\nexports.default = function (a) {\n    return react_1.default.createElement(\"div\", { className: 'intro' }, clean(a));\n};\n",
dependencies: ["react"],
sourceMap: {},
headerContent: undefined,
mtime: 1498729954000,
devLibsRequired : undefined
};