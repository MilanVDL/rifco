"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/webshop",{

/***/ "./src/components/WebshopPage/WebshopPage.tsx":
/*!****************************************************!*\
  !*** ./src/components/WebshopPage/WebshopPage.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Example; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal_Modal2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal/Modal2 */ \"./src/components/Modal/Modal2.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst products = [\n    {\n        id: 1,\n        name: \"Test Item 1\",\n        href: \"#\",\n        price: \"$48\",\n        imageSrc: \"https://placehold.co/300x300\",\n        imageAlt: \"Tall slender porcelain bottle with natural clay textured body and cork stopper.\"\n    },\n    {\n        id: 2,\n        name: \"Test Item 2\",\n        href: \"#\",\n        price: \"$35\",\n        imageSrc: \"https://placehold.co/300x300\",\n        imageAlt: \"Olive drab green insulated bottle with flared screw lid and flat top.\"\n    },\n    {\n        id: 3,\n        name: \"Test Item 3\",\n        href: \"#\",\n        price: \"$89\",\n        imageSrc: \"https://placehold.co/300x300\",\n        imageAlt: \"Person using a pen to cross a task off a productivity paper card.\"\n    },\n    {\n        id: 4,\n        name: \"Test Item 4\",\n        href: \"#\",\n        price: \"$35\",\n        imageSrc: \"https://placehold.co/300x300\",\n        imageAlt: \"Hand holding black machined steel mechanical pencil with brass tip and top.\"\n    },\n    {\n        id: 5,\n        name: \"Test Item 5\",\n        href: \"#\",\n        price: \"$35\",\n        imageSrc: \"https://placehold.co/300x300\",\n        imageAlt: \"Hand holding black machined steel mechanical pencil with brass tip and top.\"\n    },\n    {\n        id: 6,\n        name: \"Test Item 6\",\n        href: \"#\",\n        price: \"$35\",\n        imageSrc: \"https://placehold.co/300x300\",\n        imageAlt: \"Dit is een voorbeeld wat er toont als een foto niet kan laden.\"\n    }\n];\nfunction Example() {\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleModal = ()=>{\n        setShowModal(!_Modal_Modal2__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-2xl px-12 py-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"sr-only\",\n                    children: \"Products\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-titleFont font-bold text-3xl content-center align-middle text-center w-full pt-2 pb-2\",\n                    children: \"Webshop\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bodyFont content-center align-middle text-center w-full pb-12\",\n                    children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore esse, blanditiis tempore rerum maiores.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                    children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: product.href,\n                            className: \"group border-solid border-primary border-2 p-4 rounded-lg shadow-2xl bg-gray-300\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: product.imageSrc,\n                                        alt: product.imageAlt,\n                                        className: \"h-full w-full object-cover object-center group-hover:opacity-75\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"mt-4 text-sm text-gray-700\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-1 text-lg font-medium text-gray-900\",\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-primary hover:opacity-75 transition duration-300 ease-in text-white font-bold py-2 px-4 rounded\",\n                                    children: \"Button\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, product.id, true, {\n                            fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Marlu\\\\Desktop\\\\School opdracht\\\\rifco\\\\src\\\\components\\\\WebshopPage\\\\WebshopPage.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Example, \"uVlnG5KLfXemZk5i5Fl+Cg356FU=\");\n_c = Example;\nvar _c;\n$RefreshReg$(_c, \"Example\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJzaG9wUGFnZS9XZWJzaG9wUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFFSDtBQUVyQyxNQUFNRyxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQ0U7SUFDSjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUNFO0lBQ0o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsVUFDRTtJQUNKO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQ0U7SUFDSjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUNFO0lBQ0o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsVUFBVTtJQUNaO0NBRUQ7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1ZLGNBQWM7UUFDbEJELGFBQWEsQ0FBQ1YscURBQU1BO0lBQ3RCO0lBQ0EscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBVTs7Ozs7OzhCQUV4Qiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQTZGOzs7Ozs7OEJBRzNHLDhEQUFDRztvQkFBRUgsV0FBVTs4QkFBcUU7Ozs7Ozs4QkFLbEYsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaWixTQUFTZ0IsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDQzs0QkFFQ2YsTUFBTWMsUUFBUWQsSUFBSTs0QkFDbEJTLFdBQVU7OzhDQUVWLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ087d0NBQ0NDLEtBQUtILFFBQVFaLFFBQVE7d0NBQ3JCZ0IsS0FBS0osUUFBUVgsUUFBUTt3Q0FDckJNLFdBQVU7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDVTtvQ0FBR1YsV0FBVTs4Q0FBOEJLLFFBQVFmLElBQUk7Ozs7Ozs4Q0FDeEQsOERBQUNhO29DQUFFSCxXQUFVOzhDQUNWSyxRQUFRYixLQUFLOzs7Ozs7OENBRWhCLDhEQUFDbUI7b0NBQU9YLFdBQVU7OENBQXFHOzs7Ozs7OzJCQWZsSEssUUFBUWhCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCN0I7R0E5Q3dCTTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9XZWJzaG9wUGFnZS9XZWJzaG9wUGFnZS50c3g/MDM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkXCI7XHJcbmltcG9ydCBNb2RhbDIgZnJvbSBcIi4uL01vZGFsL01vZGFsMlwiO1xyXG5cclxuY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiBcIlRlc3QgSXRlbSAxXCIsXHJcbiAgICBocmVmOiBcIiNcIixcclxuICAgIHByaWNlOiBcIiQ0OFwiLFxyXG4gICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZWhvbGQuY28vMzAweDMwMFwiLFxyXG4gICAgaW1hZ2VBbHQ6XHJcbiAgICAgIFwiVGFsbCBzbGVuZGVyIHBvcmNlbGFpbiBib3R0bGUgd2l0aCBuYXR1cmFsIGNsYXkgdGV4dHVyZWQgYm9keSBhbmQgY29yayBzdG9wcGVyLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcIlRlc3QgSXRlbSAyXCIsXHJcbiAgICBocmVmOiBcIiNcIixcclxuICAgIHByaWNlOiBcIiQzNVwiLFxyXG4gICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZWhvbGQuY28vMzAweDMwMFwiLFxyXG4gICAgaW1hZ2VBbHQ6XHJcbiAgICAgIFwiT2xpdmUgZHJhYiBncmVlbiBpbnN1bGF0ZWQgYm90dGxlIHdpdGggZmxhcmVkIHNjcmV3IGxpZCBhbmQgZmxhdCB0b3AuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6IFwiVGVzdCBJdGVtIDNcIixcclxuICAgIGhyZWY6IFwiI1wiLFxyXG4gICAgcHJpY2U6IFwiJDg5XCIsXHJcbiAgICBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlaG9sZC5jby8zMDB4MzAwXCIsXHJcbiAgICBpbWFnZUFsdDpcclxuICAgICAgXCJQZXJzb24gdXNpbmcgYSBwZW4gdG8gY3Jvc3MgYSB0YXNrIG9mZiBhIHByb2R1Y3Rpdml0eSBwYXBlciBjYXJkLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiBcIlRlc3QgSXRlbSA0XCIsXHJcbiAgICBocmVmOiBcIiNcIixcclxuICAgIHByaWNlOiBcIiQzNVwiLFxyXG4gICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZWhvbGQuY28vMzAweDMwMFwiLFxyXG4gICAgaW1hZ2VBbHQ6XHJcbiAgICAgIFwiSGFuZCBob2xkaW5nIGJsYWNrIG1hY2hpbmVkIHN0ZWVsIG1lY2hhbmljYWwgcGVuY2lsIHdpdGggYnJhc3MgdGlwIGFuZCB0b3AuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIG5hbWU6IFwiVGVzdCBJdGVtIDVcIixcclxuICAgIGhyZWY6IFwiI1wiLFxyXG4gICAgcHJpY2U6IFwiJDM1XCIsXHJcbiAgICBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlaG9sZC5jby8zMDB4MzAwXCIsXHJcbiAgICBpbWFnZUFsdDpcclxuICAgICAgXCJIYW5kIGhvbGRpbmcgYmxhY2sgbWFjaGluZWQgc3RlZWwgbWVjaGFuaWNhbCBwZW5jaWwgd2l0aCBicmFzcyB0aXAgYW5kIHRvcC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogXCJUZXN0IEl0ZW0gNlwiLFxyXG4gICAgaHJlZjogXCIjXCIsXHJcbiAgICBwcmljZTogXCIkMzVcIixcclxuICAgIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2Vob2xkLmNvLzMwMHgzMDBcIixcclxuICAgIGltYWdlQWx0OiBcIkRpdCBpcyBlZW4gdm9vcmJlZWxkIHdhdCBlciB0b29udCBhbHMgZWVuIGZvdG8gbmlldCBrYW4gbGFkZW4uXCIsXHJcbiAgfSxcclxuICAvLyBNb3JlIHByb2R1Y3RzLi4uXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlKCkge1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd01vZGFsKCFNb2RhbDIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweC0xMiBweS0xNiBzbTpweC02IHNtOnBiLTI0IGxnOm1heC13LTd4bCBsZzpweC04XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Qcm9kdWN0czwvaDI+XHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXRpdGxlRm9udCBmb250LWJvbGQgdGV4dC0zeGwgY29udGVudC1jZW50ZXIgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIHctZnVsbCBwdC0yIHBiLTJcIj5cclxuICAgICAgICAgIFdlYnNob3BcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9keUZvbnQgY29udGVudC1jZW50ZXIgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIHctZnVsbCBwYi0xMlwiPlxyXG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWEgZG9sb3JlXHJcbiAgICAgICAgICBlc3NlLCBibGFuZGl0aWlzIHRlbXBvcmUgcmVydW0gbWFpb3Jlcy5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteC02IGdhcC15LTEwIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cclxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgaHJlZj17cHJvZHVjdC5ocmVmfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGJvcmRlci1zb2xpZCBib3JkZXItcHJpbWFyeSBib3JkZXItMiBwLTQgcm91bmRlZC1sZyBzaGFkb3ctMnhsIGJnLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LWgtMSBhc3BlY3Qtdy0xIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy1ncmF5LTIwMCB4bDphc3BlY3QtaC04IHhsOmFzcGVjdC13LTdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QuaW1hZ2VBbHR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC00IHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcHJpbWFyeSBob3ZlcjpvcGFjaXR5LTc1IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4gdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIEJ1dHRvblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTW9kYWwyIiwicHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJocmVmIiwicHJpY2UiLCJpbWFnZVNyYyIsImltYWdlQWx0IiwiRXhhbXBsZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInRvZ2dsZU1vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJoMSIsInAiLCJtYXAiLCJwcm9kdWN0IiwiYSIsImltZyIsInNyYyIsImFsdCIsImgzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/WebshopPage/WebshopPage.tsx\n"));

/***/ })

});