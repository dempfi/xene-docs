module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = require(\"react\");\nexports.default = function (_a) {\n    var size = _a.size, textSize = _a.textSize, className = _a.className;\n    return React.createElement(\"div\", { className: \"logo \" + (className || ''), style: { width: size, height: size } },\n        React.createElement(\"object\", { className: 'icon', type: 'image/svg+xml', data: '/imgs/xene.svg' }),\n        React.createElement(\"span\", { className: 'shadow' }));\n};\n// <object\n// className='text'\n// type='image/svg+xml'\n// data='/static/imgs/xene-text.svg'\n// width={textSize || size}\n// />\n",
dependencies: ["react"],
sourceMap: {},
headerContent: undefined,
mtime: 1499528799000,
devLibsRequired : undefined
};