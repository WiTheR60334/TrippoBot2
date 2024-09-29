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

/***/ "(app-pages-browser)/./components/ChatBot.jsx":
/*!********************************!*\
  !*** ./components/ChatBot.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatBot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineCopy,AiOutlinePaperClip,AiOutlinePlus,AiOutlineSave,AiOutlineSend!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ChatBot() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            text: \"Hello! How can I assist you today?\",\n            sender: \"bot\"\n        },\n        {\n            text: \"What are your services?\",\n            sender: \"user\"\n        }\n    ]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSend = ()=>{\n        if (newMessage.trim() !== \"\") {\n            setMessages([\n                ...messages,\n                {\n                    text: newMessage,\n                    sender: \"user\"\n                }\n            ]);\n            setNewMessage(\"\");\n        // Logic to handle message sending can be added here.\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"items-center outfit mesh bg-white min-h-screen flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl md:text-3xl text-center tracking-tight text-[var(--g)] font-medium\",\n                        children: \"Trippo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl md:text-4xl text-center bg-gradient-to-r from-[var(--lb)] via-[var(--b)] to-[var(--lb)] bg-clip-text text-transparent mb-5 mx-5 font-semibold tracking-tighter\",\n                        children: \"Your Personal AI-Assisted Travel Advisor\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end w-[90%] md:w-[60%] mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"relative text-[var(--g)] hover:text-[var(--b)] mr-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlus, {\n                                className: \"h-6 w-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block\",\n                                children: \"New Chat\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"relative text-[var(--g)] hover:text-[var(--b)]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSave, {\n                                className: \"h-6 w-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block\",\n                                children: \"Save Chat\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col rounded-3xl mx-20 bg-white border-gray-200 border-[0.5px] shadow-black/10 shadow-2xl w-[90%] md:w-[70%] h-[500px] md:h-[600px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto md:p-4 p-2 bg-opacity-10 mesh-light backdrop-blur-xl rounded-t-3xl transition-all duration-500 ease-in-out\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" mx-auto\",\n                            children: messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3 md:p-3 p-2 rounded-xl border-[0.5px] border-gray-300 md:max-w-[60%] max-w-[90%] relative group transition-transform duration-300 ease-in-out \".concat(msg.sender === \"user\" ? \"bg-white text-[var(--g)] self-end ml-auto animate-slideUp\" : \"bg-white text-[var(--b)] animate-slideDown\"),\n                                    children: [\n                                        msg.text,\n                                        msg.sender === \"bot\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"absolute top-1/2 right-[-35px] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[var(--g)] hover:text-[var(--b)]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCopy, {\n                                                className: \"h-5 w-5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white border-t border-gray-200 px-4 py-2 flex items-center rounded-b-3xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-[var(--g)] hover:text-[var(--b)] transition-colors duration-200\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePaperClip, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Type your message\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                onKeyDown: (e)=>e.key === \"Enter\" && handleSend(),\n                                className: \"flex-1 mx-4 py-2 px-4 bg-[var(--llg)] outline-none focus:outline-none rounded-full text-[var(--g)] md:text-xl text-lg transition-all duration-300 ease-in-out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSend,\n                                className: \"text-[var(--g)] hover:text-[var(--b)] duration-200\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSend, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-xl md:text-3xl text-center tracking-tight text-[var(--g)] font-medium\",\n                children: \"Trippo\"\n            }, void 0, false, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBot, \"VP2aIOqXchMc9mplwgTnyRaw3MA=\");\n_c = ChatBot;\nvar _c;\n$RefreshReg$(_c, \"ChatBot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdEJvdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQU9UO0FBRVQsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztRQUN2QztZQUFFUyxNQUFNO1lBQXNDQyxRQUFRO1FBQU07UUFDNUQ7WUFBRUQsTUFBTTtZQUEyQkMsUUFBUTtRQUFPO0tBQ25EO0lBQ0QsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1hLGFBQWE7UUFDakIsSUFBSUYsV0FBV0csSUFBSSxPQUFPLElBQUk7WUFDNUJOLFlBQVk7bUJBQUlEO2dCQUFVO29CQUFFRSxNQUFNRTtvQkFBWUQsUUFBUTtnQkFBTzthQUFFO1lBQy9ERSxjQUFjO1FBQ2QscURBQXFEO1FBQ3ZEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQTZFOzs7Ozs7a0NBRzNGLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBMEs7Ozs7Ozs7Ozs7OzswQkFNMUwsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0c7d0JBQU9ILFdBQVU7OzBDQUNoQiw4REFBQ2IsMkpBQWFBO2dDQUFDYSxXQUFVOzs7Ozs7MENBQ3pCLDhEQUFDSTtnQ0FBS0osV0FBVTswQ0FBK0g7Ozs7Ozs7Ozs7OztrQ0FNakosOERBQUNHO3dCQUFPSCxXQUFVOzswQ0FDaEIsOERBQUNaLDJKQUFhQTtnQ0FBQ1ksV0FBVTs7Ozs7OzBDQUN6Qiw4REFBQ0k7Z0NBQUtKLFdBQVU7MENBQStIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT25KLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWlQsU0FBU2MsR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNsQiw4REFBQ1I7b0NBRUNDLFdBQVcscUpBSVYsT0FIQ00sSUFBSVosTUFBTSxLQUFLLFNBQ1gsOERBQ0E7O3dDQUdMWSxJQUFJYixJQUFJO3dDQUdSYSxJQUFJWixNQUFNLEtBQUssdUJBQ2QsOERBQUNTOzRDQUFPSCxXQUFVO3NEQUNoQiw0RUFBQ1gsMkpBQWFBO2dEQUFDVyxXQUFVOzs7Ozs7Ozs7Ozs7bUNBWnhCTzs7Ozs7Ozs7Ozs7Ozs7O2tDQXFCYiw4REFBQ1I7d0JBQUlDLFdBQVU7OzBDQUViLDhEQUFDRztnQ0FBT0gsV0FBVTswQ0FDaEIsNEVBQUNkLGdLQUFrQkE7b0NBQUNjLFdBQVU7Ozs7Ozs7Ozs7OzBDQUloQyw4REFBQ1E7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU9oQjtnQ0FDUGlCLFVBQVUsQ0FBQ0MsSUFBTWpCLGNBQWNpQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzdDSSxXQUFXLENBQUNGLElBQU1BLEVBQUVHLEdBQUcsS0FBSyxXQUFXbkI7Z0NBQ3ZDRyxXQUFVOzs7Ozs7MENBR1osOERBQUNHO2dDQUNDYyxTQUFTcEI7Z0NBQ1RHLFdBQVU7MENBRVYsNEVBQUNmLDJKQUFhQTtvQ0FBQ2UsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSS9CLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBNkU7Ozs7Ozs7Ozs7OztBQUtqRztHQXZHd0JWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdEJvdC5qc3g/NzdkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBBaU91dGxpbmVTZW5kLFxuICBBaU91dGxpbmVQYXBlckNsaXAsXG4gIEFpT3V0bGluZVBsdXMsXG4gIEFpT3V0bGluZVNhdmUsXG4gIEFpT3V0bGluZUNvcHksXG59IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Qm90KCkge1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtcbiAgICB7IHRleHQ6IFwiSGVsbG8hIEhvdyBjYW4gSSBhc3Npc3QgeW91IHRvZGF5P1wiLCBzZW5kZXI6IFwiYm90XCIgfSxcbiAgICB7IHRleHQ6IFwiV2hhdCBhcmUgeW91ciBzZXJ2aWNlcz9cIiwgc2VuZGVyOiBcInVzZXJcIiB9LFxuICBdKTtcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU2VuZCA9ICgpID0+IHtcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgeyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6IFwidXNlclwiIH1dKTtcbiAgICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XG4gICAgICAvLyBMb2dpYyB0byBoYW5kbGUgbWVzc2FnZSBzZW5kaW5nIGNhbiBiZSBhZGRlZCBoZXJlLlxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIG91dGZpdCBtZXNoIGJnLXdoaXRlIG1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICB7LyogVGl0bGUgU2VjdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWItNVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTN4bCB0ZXh0LWNlbnRlciB0cmFja2luZy10aWdodCB0ZXh0LVt2YXIoLS1nKV0gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICBUcmlwcG9cbiAgICAgICAgPC9oNT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNHhsIHRleHQtY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bdmFyKC0tbGIpXSB2aWEtW3ZhcigtLWIpXSB0by1bdmFyKC0tbGIpXSBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBtYi01IG14LTUgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodGVyXCI+XG4gICAgICAgICAgWW91ciBQZXJzb25hbCBBSS1Bc3Npc3RlZCBUcmF2ZWwgQWR2aXNvclxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBJY29ucyBmb3IgTmV3IENoYXQgYW5kIFNhdmUgQ2hhdCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCB3LVs5MCVdIG1kOnctWzYwJV0gbWItMlwiPlxuICAgICAgICB7LyogTmV3IENoYXQgSWNvbiAqL31cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LVt2YXIoLS1nKV0gaG92ZXI6dGV4dC1bdmFyKC0tYildIG1yLTRcIj5cbiAgICAgICAgICA8QWlPdXRsaW5lUGx1cyBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtOCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHRleHQteHMgcm91bmRlZCBweC0yIHB5LTEgaGlkZGVuIGdyb3VwLWhvdmVyOmJsb2NrXCI+XG4gICAgICAgICAgICBOZXcgQ2hhdFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgey8qIFNhdmUgQ2hhdCBJY29uICovfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtW3ZhcigtLWcpXSBob3Zlcjp0ZXh0LVt2YXIoLS1iKV1cIj5cbiAgICAgICAgICA8QWlPdXRsaW5lU2F2ZSBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtOCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHRleHQteHMgcm91bmRlZCBweC0yIHB5LTEgaGlkZGVuIGdyb3VwLWhvdmVyOmJsb2NrXCI+XG4gICAgICAgICAgICBTYXZlIENoYXRcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDaGF0IENvbnRhaW5lciB3aXRoIEZpeGVkIEhlaWdodCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLTN4bCBteC0yMCBiZy13aGl0ZSBib3JkZXItZ3JheS0yMDAgYm9yZGVyLVswLjVweF0gc2hhZG93LWJsYWNrLzEwIHNoYWRvdy0yeGwgdy1bOTAlXSBtZDp3LVs3MCVdIGgtWzUwMHB4XSBtZDpoLVs2MDBweF1cIj5cbiAgICAgICAgey8qIENoYXQgbWVzc2FnZXMgYXJlYSB3aXRoIG92ZXJmbG93IHNjcm9sbGluZyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIG1kOnAtNCBwLTIgYmctb3BhY2l0eS0xMCBtZXNoLWxpZ2h0IGJhY2tkcm9wLWJsdXIteGwgcm91bmRlZC10LTN4bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBteC1hdXRvXCI+XG4gICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtc2csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1iLTMgbWQ6cC0zIHAtMiByb3VuZGVkLXhsIGJvcmRlci1bMC41cHhdIGJvcmRlci1ncmF5LTMwMCBtZDptYXgtdy1bNjAlXSBtYXgtdy1bOTAlXSByZWxhdGl2ZSBncm91cCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtcbiAgICAgICAgICAgICAgICAgIG1zZy5zZW5kZXIgPT09IFwidXNlclwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy13aGl0ZSB0ZXh0LVt2YXIoLS1nKV0gc2VsZi1lbmQgbWwtYXV0byBhbmltYXRlLXNsaWRlVXBcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctd2hpdGUgdGV4dC1bdmFyKC0tYildIGFuaW1hdGUtc2xpZGVEb3duXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttc2cudGV4dH1cblxuICAgICAgICAgICAgICAgIHsvKiBDb3B5IEljb24gKHZpc2libGUgb24gaG92ZXIpICovfVxuICAgICAgICAgICAgICAgIHttc2cuc2VuZGVyID09PSBcImJvdFwiICYmIChcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiByaWdodC1bLTM1cHhdIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMjAwIHRleHQtW3ZhcigtLWcpXSBob3Zlcjp0ZXh0LVt2YXIoLS1iKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUNvcHkgY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSW5wdXQgRmllbGQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHB4LTQgcHktMiBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWItM3hsXCI+XG4gICAgICAgICAgey8qIFVwbG9hZCBJY29uICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1bdmFyKC0tZyldIGhvdmVyOnRleHQtW3ZhcigtLWIpXSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgIDxBaU91dGxpbmVQYXBlckNsaXAgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7LyogVGV4dCBJbnB1dCAqL31cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBoYW5kbGVTZW5kKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgbXgtNCBweS0yIHB4LTQgYmctW3ZhcigtLWxsZyldIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgcm91bmRlZC1mdWxsIHRleHQtW3ZhcigtLWcpXSBtZDp0ZXh0LXhsIHRleHQtbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBTZW5kIEljb24gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLWcpXSBob3Zlcjp0ZXh0LVt2YXIoLS1iKV0gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWlPdXRsaW5lU2VuZCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtM3hsIHRleHQtY2VudGVyIHRyYWNraW5nLXRpZ2h0IHRleHQtW3ZhcigtLWcpXSBmb250LW1lZGl1bVwiPlxuICAgICAgICBUcmlwcG9cbiAgICAgIDwvaDU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBaU91dGxpbmVTZW5kIiwiQWlPdXRsaW5lUGFwZXJDbGlwIiwiQWlPdXRsaW5lUGx1cyIsIkFpT3V0bGluZVNhdmUiLCJBaU91dGxpbmVDb3B5IiwiQ2hhdEJvdCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ0ZXh0Iiwic2VuZGVyIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJoYW5kbGVTZW5kIiwidHJpbSIsImRpdiIsImNsYXNzTmFtZSIsImg1IiwiaDMiLCJidXR0b24iLCJzcGFuIiwibWFwIiwibXNnIiwiaW5kZXgiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlEb3duIiwia2V5Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatBot.jsx\n"));

/***/ })

});