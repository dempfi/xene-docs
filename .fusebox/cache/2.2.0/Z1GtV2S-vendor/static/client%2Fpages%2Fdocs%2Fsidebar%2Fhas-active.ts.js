module.exports = { contents: "\"use strict\";\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar some_1 = require(\"lodash/some\");\nvar isActive = function (active, current) {\n    return current.module === active.module &&\n        current.article === active.article &&\n        current.chapter === active.chapter;\n};\nvar hasActive = function (active, current) {\n    if (isActive(active, current))\n        return true;\n    return some_1.default(current.chapters, function (i) { return hasActive(active, __assign({}, current, { chapters: i.chapters, chapter: i.id })); });\n};\nexports.default = hasActive;\n",
dependencies: ["lodash/some"],
sourceMap: {},
headerContent: undefined,
mtime: 1499527958000,
devLibsRequired : undefined
};