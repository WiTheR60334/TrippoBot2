"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/WelcomeTips.jsx":
/*!************************************!*\
  !*** ./components/WelcomeTips.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WelcomeTips; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoArrowBackOutline_IoArrowForwardOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=IoArrowBackOutline,IoArrowForwardOutline!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// import { useRouter } from \"next/router\"; // Uncomment this if you're using useRouter\nconst steps = [\n    {\n        title: \"Plan your Trip Perfectly using AI\",\n        subtitle: \"Start your journey today\",\n        bgImage: \"/images/landscape1.jpg\"\n    },\n    {\n        title: \"Find the Best Destinations\",\n        subtitle: \"Explore hidden gems across the globe\",\n        bgImage: \"/images/landscape2.jpg\"\n    },\n    {\n        title: \"Get AI-Driven Recommendations\",\n        subtitle: \"Personalized suggestions just for you\",\n        bgImage: \"/images/landscape3.jpg\"\n    },\n    {\n        title: \"Book Easily and Securely\",\n        subtitle: \"Seamless booking with a few clicks\",\n        bgImage: \"/images/landscape4.jpg\"\n    }\n];\nfunction WelcomeTips() {\n    _s();\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const router = useRouter(); // Initialize useRouter to control navigation\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCurrentStep((prevStep)=>(prevStep + 1) % steps.length);\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const goToHomePage = ()=>{\n        window.location.href = \"/home\";\n    };\n    const handleNext = ()=>{\n        setCurrentStep((prevStep)=>(prevStep + 1) % steps.length);\n    };\n    const handlePrev = ()=>{\n        setCurrentStep((prevStep)=>prevStep === 0 ? steps.length - 1 : prevStep - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white max-h-screen pt-10 outfit\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-[89%] rounded-3xl m-6 overflow-hidden bg-cover transition-all duration-700 ease-in-out\",\n                    style: {\n                        backgroundImage: \"url(\".concat(steps[currentStep].bgImage, \")\")\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 bg-black bg-opacity-40\"\n                        }, void 0, false, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white p-[10%] absolute top-0 left-0 right-0 z-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-6xl font-bold\",\n                                        children: steps[currentStep].title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-3xl pt-4 font-medium\",\n                                        children: steps[currentStep].subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-0 left-0 right-0 p-[10%] flex justify-between items-center z-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-black bg-opacity-20 border-[1px] hover:bg-white hover:text-black backdrop-blur-lg text-white p-4 rounded-full mx-2 transition-all duration-300\",\n                                            onClick: handlePrev,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoArrowBackOutline_IoArrowForwardOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoArrowBackOutline, {}, void 0, false, {\n                                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-black bg-opacity-20 border-[1px] hover:bg-white hover:text-black backdrop-blur-lg text-white p-4 rounded-full mx-2 transition-all duration-300\",\n                                            onClick: handleNext,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoArrowBackOutline_IoArrowForwardOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoArrowForwardOutline, {}, void 0, false, {\n                                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black bg-opacity-20 border-[1px] hover:bg-white hover:text-black backdrop-blur-lg text-white px-4 py-2 rounded-full transition-all duration-300\",\n                                    onClick: goToHomePage,\n                                    children: \"Enter\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/WelcomeTips.jsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(WelcomeTips, \"dqJMRMh825IZM3uH5OU+Vfn9tX8=\");\n_c = WelcomeTips;\nvar _c;\n$RefreshReg$(_c, \"WelcomeTips\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2VsY29tZVRpcHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFDZ0M7QUFDNUUsdUZBQXVGO0FBRXZGLE1BQU1JLFFBQVE7SUFDWjtRQUNFQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsU0FBUztJQUNYO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDWDtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxTQUFTO0lBQ1g7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsU0FBUztJQUNYO0NBQ0Q7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBQy9DLDRFQUE0RTtJQUU1RUMsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxXQUFXQyxZQUFZO1lBQzNCRixlQUFlLENBQUNHLFdBQWEsQ0FBQ0EsV0FBVyxLQUFLVCxNQUFNVSxNQUFNO1FBQzVELEdBQUc7UUFDSCxPQUFPLElBQU1DLGNBQWNKO0lBQzdCLEdBQUcsRUFBRTtJQUVMLE1BQU1LLGVBQWU7UUFDbkJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCO0lBRUEsTUFBTUMsYUFBYTtRQUNqQlYsZUFBZSxDQUFDRyxXQUFhLENBQUNBLFdBQVcsS0FBS1QsTUFBTVUsTUFBTTtJQUM1RDtJQUVBLE1BQU1PLGFBQWE7UUFDakJYLGVBQWUsQ0FBQ0csV0FDZEEsYUFBYSxJQUFJVCxNQUFNVSxNQUFNLEdBQUcsSUFBSUQsV0FBVztJQUVuRDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDUztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQ0NDLFdBQVU7b0JBQ1ZDLE9BQU87d0JBQUVDLGlCQUFpQixPQUFrQyxPQUEzQnJCLEtBQUssQ0FBQ0ssWUFBWSxDQUFDRixPQUFPLEVBQUM7b0JBQUc7O3NDQUUvRCw4REFBQ2U7NEJBQUlDLFdBQVU7Ozs7OztzQ0FFZiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEOztrREFDQyw4REFBQ0E7d0NBQUlDLFdBQVU7a0RBQ1puQixLQUFLLENBQUNLLFlBQVksQ0FBQ0osS0FBSzs7Ozs7O2tEQUUzQiw4REFBQ2lCO3dDQUFJQyxXQUFVO2tEQUNabkIsS0FBSyxDQUFDSyxZQUFZLENBQUNILFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUtsQyw4REFBQ2dCOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRzs0Q0FDQ0gsV0FBVTs0Q0FDVkksU0FBU047c0RBRVQsNEVBQUNuQiwrSEFBa0JBOzs7Ozs7Ozs7O3NEQUdyQiw4REFBQ3dCOzRDQUNDSCxXQUFVOzRDQUNWSSxTQUFTUDtzREFFVCw0RUFBQ2pCLGtJQUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSTFCLDhEQUFDdUI7b0NBQ0NILFdBQVU7b0NBQ1ZJLFNBQVNYOzhDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBM0V3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWxjb21lVGlwcy5qc3g/YTNjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgLy8gRW5zdXJlIHRoZSBjb21wb25lbnQgaXMgY2xpZW50LXNpZGVcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvQXJyb3dCYWNrT3V0bGluZSwgSW9BcnJvd0ZvcndhcmRPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIFVuY29tbWVudCB0aGlzIGlmIHlvdSdyZSB1c2luZyB1c2VSb3V0ZXJcblxuY29uc3Qgc3RlcHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJQbGFuIHlvdXIgVHJpcCBQZXJmZWN0bHkgdXNpbmcgQUlcIixcbiAgICBzdWJ0aXRsZTogXCJTdGFydCB5b3VyIGpvdXJuZXkgdG9kYXlcIixcbiAgICBiZ0ltYWdlOiBcIi9pbWFnZXMvbGFuZHNjYXBlMS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZpbmQgdGhlIEJlc3QgRGVzdGluYXRpb25zXCIsXG4gICAgc3VidGl0bGU6IFwiRXhwbG9yZSBoaWRkZW4gZ2VtcyBhY3Jvc3MgdGhlIGdsb2JlXCIsXG4gICAgYmdJbWFnZTogXCIvaW1hZ2VzL2xhbmRzY2FwZTIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHZXQgQUktRHJpdmVuIFJlY29tbWVuZGF0aW9uc1wiLFxuICAgIHN1YnRpdGxlOiBcIlBlcnNvbmFsaXplZCBzdWdnZXN0aW9ucyBqdXN0IGZvciB5b3VcIixcbiAgICBiZ0ltYWdlOiBcIi9pbWFnZXMvbGFuZHNjYXBlMy5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJvb2sgRWFzaWx5IGFuZCBTZWN1cmVseVwiLFxuICAgIHN1YnRpdGxlOiBcIlNlYW1sZXNzIGJvb2tpbmcgd2l0aCBhIGZldyBjbGlja3NcIixcbiAgICBiZ0ltYWdlOiBcIi9pbWFnZXMvbGFuZHNjYXBlNC5qcGdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlbGNvbWVUaXBzKCkge1xuICBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gSW5pdGlhbGl6ZSB1c2VSb3V0ZXIgdG8gY29udHJvbCBuYXZpZ2F0aW9uXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEN1cnJlbnRTdGVwKChwcmV2U3RlcCkgPT4gKHByZXZTdGVwICsgMSkgJSBzdGVwcy5sZW5ndGgpO1xuICAgIH0sIDUwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdvVG9Ib21lUGFnZSA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2hvbWVcIjtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRTdGVwKChwcmV2U3RlcCkgPT4gKHByZXZTdGVwICsgMSkgJSBzdGVwcy5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudFN0ZXAoKHByZXZTdGVwKSA9PlxuICAgICAgcHJldlN0ZXAgPT09IDAgPyBzdGVwcy5sZW5ndGggLSAxIDogcHJldlN0ZXAgLSAxXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG1heC1oLXNjcmVlbiBwdC0xMCBvdXRmaXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlblwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzg5JV0gcm91bmRlZC0zeGwgbS02IG92ZXJmbG93LWhpZGRlbiBiZy1jb3ZlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3RlcHNbY3VycmVudFN0ZXBdLmJnSW1hZ2V9KWAgfX0gLy8gRml4ZWQgaGVyZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTQwXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLVsxMCVdIGFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIHotMTBcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAge3N0ZXBzW2N1cnJlbnRTdGVwXS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIHB0LTQgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgIHtzdGVwc1tjdXJyZW50U3RlcF0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgcC1bMTAlXSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgei0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTIwIGJvcmRlci1bMXB4XSBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrIGJhY2tkcm9wLWJsdXItbGcgdGV4dC13aGl0ZSBwLTQgcm91bmRlZC1mdWxsIG14LTIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPElvQXJyb3dCYWNrT3V0bGluZSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgYmctb3BhY2l0eS0yMCBib3JkZXItWzFweF0gaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFjayBiYWNrZHJvcC1ibHVyLWxnIHRleHQtd2hpdGUgcC00IHJvdW5kZWQtZnVsbCBteC0yIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJb0Fycm93Rm9yd2FyZE91dGxpbmUgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIGJnLW9wYWNpdHktMjAgYm9yZGVyLVsxcHhdIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgYmFja2Ryb3AtYmx1ci1sZyB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtnb1RvSG9tZVBhZ2V9IC8vIFRyaWdnZXIgbmF2aWdhdGlvbiB0byB0aGUgSG9tZSBwYWdlXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnRlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW9BcnJvd0JhY2tPdXRsaW5lIiwiSW9BcnJvd0ZvcndhcmRPdXRsaW5lIiwic3RlcHMiLCJ0aXRsZSIsInN1YnRpdGxlIiwiYmdJbWFnZSIsIldlbGNvbWVUaXBzIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2U3RlcCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJnb1RvSG9tZVBhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WelcomeTips.jsx\n"));

/***/ })

});