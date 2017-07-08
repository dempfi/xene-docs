module.exports = { contents: "\"use strict\";\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [0, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Koa = require(\"koa\");\nvar send = require(\"koa-send\");\nvar etag = require(\"koa-etag\");\nvar Router = require(\"koa-router\");\nvar compress = require(\"koa-compress\");\nvar path = require(\"path\");\nvar documentation_1 = require(\"./documentation\");\nvar staticRoot = path.resolve(__dirname, '..', 'static');\nvar serve = function (ctx, path) { return send(ctx, path, {\n    root: staticRoot, index: 'index.html', maxAge: 604800\n}); };\nvar router = new Router()\n    .use('/api', function (ctx, next) {\n    ctx.set('Cache-Control', 'max-age=86400');\n    return next();\n})\n    .get('/api/:module/:article', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {\n    var markdown, index;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, documentation_1.default.markdown(ctx.params.module, ctx.params.article)];\n            case 1:\n                markdown = _a.sent();\n                return [4 /*yield*/, documentation_1.default.index()];\n            case 2:\n                index = _a.sent();\n                ctx.body = { index: index, markdown: markdown };\n                return [2 /*return*/, next()];\n        }\n    });\n}); })\n    .get('/docs/:module?/:article?/:chapter?', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {\n    var _a, module, article, index;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = ctx.params, module = _a.module, article = _a.article;\n                if (!(module && article)) return [3 /*break*/, 2];\n                return [4 /*yield*/, serve(ctx, '/')];\n            case 1:\n                _b.sent();\n                return [3 /*break*/, 4];\n            case 2: return [4 /*yield*/, documentation_1.default.index()];\n            case 3:\n                index = _b.sent();\n                if (!module)\n                    module = index[0].module;\n                if (!article)\n                    article = index.find(function (i) { return i.module === module; }).articles[0].id;\n                ctx.redirect(\"/docs/\" + module + \"/\" + article);\n                _b.label = 4;\n            case 4: return [2 /*return*/, next()];\n        }\n    });\n}); });\nvar app = new Koa()\n    .use(router.routes())\n    .use(function (ctx, next) {\n    if (ctx.method != 'HEAD' && ctx.method != 'GET')\n        return next();\n    if (/(api|docs)/i.test(ctx.path))\n        return next();\n    return serve(ctx, ctx.path).then(next);\n})\n    .use(compress())\n    .use(etag())\n    .listen(process.env.PORT || 3000);\n",
dependencies: ["koa","koa-send","koa-etag","koa-router","koa-compress","path","./documentation","process"],
sourceMap: {},
headerContent: ["/* fuse:injection: */ var process = require(\"process\");"],
mtime: 1498854988000,
devLibsRequired : undefined
};