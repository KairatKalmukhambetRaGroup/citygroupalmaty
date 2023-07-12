"use strict";
(() => {
var exports = {};
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 7182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/applications/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  PATCH: () => (PATCH),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/db/connect.js
var connect = __webpack_require__(4972);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/db/models/application.js

const applicationSchema = external_mongoose_default().Schema({
    name: String,
    phone: String,
    address: String,
    osi: (external_mongoose_default()).Schema.Types.Boolean,
    status: {
        type: String,
        default: "new"
    }
}, {
    timestamps: true
});
const Application = (external_mongoose_default()).models.Application || external_mongoose_default().model("Application", applicationSchema);
/* harmony default export */ const models_application = (Application);

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(2413);
;// CONCATENATED MODULE: ./src/app/api/applications/route.js



async function GET(request) {
    try {
        const params = request.nextUrl.searchParams;
        const status = params.get("status");
        const search = params.get("search");
        await (0,connect/* default */.Z)();
        // await Application.deleteMany({});
        const applications = await models_application.find({
            "$or": [
                {
                    name: {
                        "$regex": search,
                        "$options": "i"
                    }
                },
                {
                    phone: {
                        "$regex": search,
                        "$options": "i"
                    }
                },
                {
                    address: {
                        "$regex": search,
                        "$options": "i"
                    }
                }
            ],
            status: {
                "$regex": status,
                "$options": "i"
            }
        }).sort("-createdAt");
        // const applications =  await Application.find();
        return next_response/* default */.Z.json(applications);
    } catch (error) {
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const data = await request.json();
        await (0,connect/* default */.Z)();
        const application = await models_application.create(data);
        return next_response/* default */.Z.json(application);
    } catch (error) {
        return next_response/* default */.Z.json(error, {
            status: 500
        });
    }
}
async function PATCH(request) {
    try {
        const ids = await request.json();
        const params = request.nextUrl.searchParams;
        const status = params.get("status");
        const search = params.get("search");
        await (0,connect/* default */.Z)();
        for await (const id of ids){
            await models_application.findByIdAndUpdate(id, {
                status: ""
            });
        }
        const applications = await models_application.find({
            "$or": [
                {
                    name: {
                        "$regex": search,
                        "$options": "i"
                    }
                },
                {
                    phone: {
                        "$regex": search,
                        "$options": "i"
                    }
                },
                {
                    address: {
                        "$regex": search,
                        "$options": "i"
                    }
                }
            ],
            status: {
                "$regex": status,
                "$options": "i"
            }
        }).sort("-createdAt");
        return next_response/* default */.Z.json(applications);
    } catch (error) {
        return next_response/* default */.Z.json(error, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fapplications%2Froute&name=app%2Fapi%2Fapplications%2Froute&pagePath=private-next-app-dir%2Fapi%2Fapplications%2Froute.js&appDir=D%3A%5CRa%20Group%5Cwave%20projects%5Ccity-group-almaty%5Csrc%5Capp&appPaths=%2Fapi%2Fapplications%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/applications/route","pathname":"/api/applications","filename":"route","bundlePath":"app/api/applications/route"},"resolvedPagePath":"D:\\Ra Group\\wave projects\\city-group-almaty\\src\\app\\api\\applications\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/applications/route"

    

/***/ }),

/***/ 2413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(2917); //# sourceMappingURL=next-response.js.map


/***/ }),

/***/ 4972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectMongo = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,625], () => (__webpack_exec__(7182)));
module.exports = __webpack_exports__;

})();