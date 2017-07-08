module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = require(\"react\");\nvar type_1 = require(\"./type\");\nvar intro_1 = require(\"./intro\");\nvar renderers = [{ type: '<type>', renderer: type_1.default }, { type: '<intro>', renderer: intro_1.default }];\nexports.default = function (_a) {\n    var literal = _a.literal;\n    var renderer = renderers.find(function (_a) {\n        var type = _a.type;\n        return literal.startsWith(type);\n    });\n    return renderer ? renderer.renderer(literal) : React.createElement(\"span\", null);\n};\n",
dependencies: ["react","./type","./intro"],
sourceMap: {},
headerContent: undefined,
mtime: 1499528799000,
devLibsRequired : undefined
};