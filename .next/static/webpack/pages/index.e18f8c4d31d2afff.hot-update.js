"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BlogFeed.tsx":
/*!*********************************!*\
  !*** ./components/BlogFeed.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ \"./components/Container.tsx\");\nvar _this = undefined;\n\n\n\nvar BlogFeed = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mt-10 text-blue font-light text-xl\",\n                    children: \"recent articles\"\n                }, void 0, false, {\n                    fileName: \"/Users/karolproksa/personal-website/components/BlogFeed.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogPost, {\n                    name: \"Using LLMs as Super High Level Programming Languages\",\n                    date: \"11 Sep 2023\"\n                }, void 0, false, {\n                    fileName: \"/Users/karolproksa/personal-website/components/BlogFeed.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/karolproksa/personal-website/components/BlogFeed.tsx\",\n            lineNumber: 7,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/karolproksa/personal-website/components/BlogFeed.tsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, _this);\n};\n_c = BlogFeed;\nvar BlogPost = function(param) {\n    var name = param.name, date = param.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex items-center font-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/karolproksa/personal-website/components/BlogFeed.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/karolproksa/personal-website/components/BlogFeed.tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/karolproksa/personal-website/components/BlogFeed.tsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = BlogPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogFeed);\nvar _c, _c1;\n$RefreshReg$(_c, \"BlogFeed\");\n$RefreshReg$(_c1, \"BlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2dGZWVkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBeUI7QUFDVTtBQUVuQyxJQUFNRSxRQUFRLEdBQUcsV0FBTTtJQUN0QixxQkFDQyw4REFBQ0MsU0FBTztrQkFDUCw0RUFBQ0Ysa0RBQVM7OzhCQUNULDhEQUFDRyxJQUFFO29CQUFDQyxTQUFTLEVBQUMsb0NBQW9DOzhCQUFDLGlCQUVuRDs7Ozs7eUJBQUs7OEJBQ0wsOERBQUNDLFFBQVE7b0JBQ1JDLElBQUksRUFBQyxzREFBc0Q7b0JBQzNEQyxJQUFJLEVBQUMsYUFBYTs7Ozs7eUJBQ2pCOzs7Ozs7aUJBQ1M7Ozs7O2FBQ0gsQ0FDVjtDQUNEO0FBZEtOLEtBQUFBLFFBQVE7QUFvQmQsSUFBTUksUUFBUSxHQUFHLGdCQUErQjtRQUE1QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLElBQUksU0FBSkEsSUFBSTtJQUM3QixxQkFDQyw4REFBQ0MsU0FBTztRQUFDSixTQUFTLEVBQUMsNkJBQTZCOzswQkFDL0MsOERBQUNLLEdBQUM7MEJBQUVILElBQUk7Ozs7O3FCQUFLOzBCQUNiLDhEQUFDRyxHQUFDOzBCQUFFRixJQUFJOzs7OztxQkFBSzs7Ozs7O2FBQ0osQ0FDVjtDQUNEO0FBUEtGLE1BQUFBLFFBQVE7QUFTZCwrREFBZUosUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jsb2dGZWVkLnRzeD9hYTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInXG5cbmNvbnN0IEJsb2dGZWVkID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uPlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibHVlIGZvbnQtbGlnaHQgdGV4dC14bCc+XG5cdFx0XHRcdFx0cmVjZW50IGFydGljbGVzXG5cdFx0XHRcdDwvaDI+XG5cdFx0XHRcdDxCbG9nUG9zdFxuXHRcdFx0XHRcdG5hbWU9J1VzaW5nIExMTXMgYXMgU3VwZXIgSGlnaCBMZXZlbCBQcm9ncmFtbWluZyBMYW5ndWFnZXMnXG5cdFx0XHRcdFx0ZGF0ZT0nMTEgU2VwIDIwMjMnXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cbmludGVyZmFjZSBCbG9nUG9zdEkge1xuXHRuYW1lOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG59XG5cbmNvbnN0IEJsb2dQb3N0ID0gKHsgbmFtZSwgZGF0ZSB9OiBCbG9nUG9zdEkpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGZvbnQtbWFpbic+XG5cdFx0XHQ8cD57bmFtZX08L3A+XG5cdFx0XHQ8cD57ZGF0ZX08L3A+XG5cdFx0PC9hcnRpY2xlPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dGZWVkXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJCbG9nRmVlZCIsInNlY3Rpb24iLCJoMiIsImNsYXNzTmFtZSIsIkJsb2dQb3N0IiwibmFtZSIsImRhdGUiLCJhcnRpY2xlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlogFeed.tsx\n"));

/***/ })

});