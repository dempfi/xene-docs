module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = require(\"react\");\nexports.default = function (_a) {\n    var size = _a.size, textSize = _a.textSize, className = _a.className;\n    return react_1.default.createElement(\"div\", { className: \"logo \" + (className || ''), style: { width: size, height: size } },\n        react_1.default.createElement(\"object\", { className: 'icon', type: 'image/svg+xml', data: '/imgs/xene.svg' }),\n        react_1.default.createElement(\"span\", { className: 'shadow' }));\n};\n// <object\n// className='text'\n// type='image/svg+xml'\n// data='/static/imgs/xene-text.svg'\n// width={textSize || size}\n// />\n",
dependencies: ["react"],
sourceMap: {},
headerContent: undefined,
mtime: 1498659933000,
devLibsRequired : undefined
};