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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatBot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineCopy,AiOutlinePaperClip,AiOutlinePlus,AiOutlineSave,AiOutlineSend!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ChatBot() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            text: \"Hello! How can I assist you today?\",\n            sender: \"bot\"\n        },\n        {\n            text: \"What are your services?\",\n            sender: \"user\"\n        }\n    ]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSend = ()=>{\n        if (newMessage.trim() !== \"\") {\n            setMessages([\n                ...messages,\n                {\n                    text: newMessage,\n                    sender: \"user\"\n                }\n            ]);\n            setNewMessage(\"\");\n        // Logic to handle message sending can be added here.\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"items-center outfit mesh bg-white min-h-screen flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl md:text-3xl text-center tracking-tight text-[var(--g)] font-medium\",\n                        children: \"Trippo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl md:text-4xl text-center bg-gradient-to-r from-[var(--lb)] via-[var(--b)] to-[var(--lb)] bg-clip-text text-transparent mb-5 mx-5 font-semibold tracking-tighter\",\n                        children: \"Your Personal AI-Assisted Travel Advisor\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end w-[90%] md:w-[60%] mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"relative text-[var(--g)] hover:text-[var(--b)] mr-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlus, {\n                                className: \"h-6 w-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block\",\n                                children: \"New Chat\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"relative text-[var(--g)] hover:text-[var(--b)]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSave, {\n                                className: \"h-6 w-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block\",\n                                children: \"Save Chat\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col rounded-3xl mx-20 bg-white border-gray-200 border-[0.5px] shadow-black/10 shadow-2xl w-[90%] md:w-[70%] h-[500px] md:h-[600px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto md:p-4 p-2 bg-opacity-10 mesh-light backdrop-blur-xl rounded-t-3xl transition-all duration-500 ease-in-out\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" mx-auto\",\n                            children: messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3 md:p-3 p-2 rounded-xl border-[0.5px] border-gray-300 md:max-w-[60%] max-w-[90%] relative group transition-transform duration-300 ease-in-out \".concat(msg.sender === \"user\" ? \"bg-white text-[var(--g)] self-end ml-auto animate-slideUp\" : \"bg-white text-[var(--b)] animate-slideDown\"),\n                                    children: [\n                                        msg.text,\n                                        msg.sender === \"bot\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"absolute top-1/2 right-[-35px] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[var(--g)] hover:text-[var(--b)]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCopy, {\n                                                className: \"h-5 w-5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white border-t border-gray-200 px-4 py-2 flex items-center rounded-b-3xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-[var(--g)] hover:text-[var(--b)] transition-colors duration-200\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePaperClip, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Type your message\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                onKeyDown: (e)=>e.key === \"Enter\" && handleSend(),\n                                className: \"flex-1 mx-4 py-2 px-4 bg-[var(--llg)] outline-none focus:outline-none rounded-full text-[var(--g)] md:text-xl text-lg transition-all duration-300 ease-in-out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSend,\n                                className: \"text-[var(--g)] hover:text-[var(--b)] duration-200\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSend, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-md md:text-2xl text-center p-4 tracking-tight text-[var(--g)] font-medium\",\n                children: [\n                    \"Want better results? Try Our new\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-[var(--b)] hover:text-[#ffbf00] bg-none hover:bg-[#a67c00]\",\n                        children: \"Trippo GOLD\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBot, \"VP2aIOqXchMc9mplwgTnyRaw3MA=\");\n_c = ChatBot;\nvar _c;\n$RefreshReg$(_c, \"ChatBot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdEJvdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQU9UO0FBRVQsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztRQUN2QztZQUFFUyxNQUFNO1lBQXNDQyxRQUFRO1FBQU07UUFDNUQ7WUFBRUQsTUFBTTtZQUEyQkMsUUFBUTtRQUFPO0tBQ25EO0lBQ0QsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1hLGFBQWE7UUFDakIsSUFBSUYsV0FBV0csSUFBSSxPQUFPLElBQUk7WUFDNUJOLFlBQVk7bUJBQUlEO2dCQUFVO29CQUFFRSxNQUFNRTtvQkFBWUQsUUFBUTtnQkFBTzthQUFFO1lBQy9ERSxjQUFjO1FBQ2QscURBQXFEO1FBQ3ZEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQTZFOzs7Ozs7a0NBRzNGLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBMEs7Ozs7Ozs7Ozs7OzswQkFNMUwsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0c7d0JBQU9ILFdBQVU7OzBDQUNoQiw4REFBQ2IsMkpBQWFBO2dDQUFDYSxXQUFVOzs7Ozs7MENBQ3pCLDhEQUFDSTtnQ0FBS0osV0FBVTswQ0FBK0g7Ozs7Ozs7Ozs7OztrQ0FNakosOERBQUNHO3dCQUFPSCxXQUFVOzswQ0FDaEIsOERBQUNaLDJKQUFhQTtnQ0FBQ1ksV0FBVTs7Ozs7OzBDQUN6Qiw4REFBQ0k7Z0NBQUtKLFdBQVU7MENBQStIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT25KLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWlQsU0FBU2MsR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNsQiw4REFBQ1I7b0NBRUNDLFdBQVcscUpBSVYsT0FIQ00sSUFBSVosTUFBTSxLQUFLLFNBQ1gsOERBQ0E7O3dDQUdMWSxJQUFJYixJQUFJO3dDQUdSYSxJQUFJWixNQUFNLEtBQUssdUJBQ2QsOERBQUNTOzRDQUFPSCxXQUFVO3NEQUNoQiw0RUFBQ1gsMkpBQWFBO2dEQUFDVyxXQUFVOzs7Ozs7Ozs7Ozs7bUNBWnhCTzs7Ozs7Ozs7Ozs7Ozs7O2tDQXFCYiw4REFBQ1I7d0JBQUlDLFdBQVU7OzBDQUViLDhEQUFDRztnQ0FBT0gsV0FBVTswQ0FDaEIsNEVBQUNkLGdLQUFrQkE7b0NBQUNjLFdBQVU7Ozs7Ozs7Ozs7OzBDQUloQyw4REFBQ1E7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU9oQjtnQ0FDUGlCLFVBQVUsQ0FBQ0MsSUFBTWpCLGNBQWNpQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzdDSSxXQUFXLENBQUNGLElBQU1BLEVBQUVHLEdBQUcsS0FBSyxXQUFXbkI7Z0NBQ3ZDRyxXQUFVOzs7Ozs7MENBR1osOERBQUNHO2dDQUNDYyxTQUFTcEI7Z0NBQ1RHLFdBQVU7MENBRVYsNEVBQUNmLDJKQUFhQTtvQ0FBQ2UsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSS9CLDhEQUFDQztnQkFBR0QsV0FBVTs7b0JBQWlGO29CQUM1RDtrQ0FDakMsOERBQUNrQjt3QkFBRWxCLFdBQVU7a0NBQWtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkY7R0ExR3dCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRCb3QuanN4Pzc3ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWlPdXRsaW5lU2VuZCxcbiAgQWlPdXRsaW5lUGFwZXJDbGlwLFxuICBBaU91dGxpbmVQbHVzLFxuICBBaU91dGxpbmVTYXZlLFxuICBBaU91dGxpbmVDb3B5LFxufSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdEJvdCgpIHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXG4gICAgeyB0ZXh0OiBcIkhlbGxvISBIb3cgY2FuIEkgYXNzaXN0IHlvdSB0b2RheT9cIiwgc2VuZGVyOiBcImJvdFwiIH0sXG4gICAgeyB0ZXh0OiBcIldoYXQgYXJlIHlvdXIgc2VydmljZXM/XCIsIHNlbmRlcjogXCJ1c2VyXCIgfSxcbiAgXSk7XG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmQgPSAoKSA9PiB7XG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiBcInVzZXJcIiB9XSk7XG4gICAgICBzZXROZXdNZXNzYWdlKFwiXCIpO1xuICAgICAgLy8gTG9naWMgdG8gaGFuZGxlIG1lc3NhZ2Ugc2VuZGluZyBjYW4gYmUgYWRkZWQgaGVyZS5cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBvdXRmaXQgbWVzaCBiZy13aGl0ZSBtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgey8qIFRpdGxlIFNlY3Rpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1iLTVcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0zeGwgdGV4dC1jZW50ZXIgdHJhY2tpbmctdGlnaHQgdGV4dC1bdmFyKC0tZyldIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgVHJpcHBvXG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCB0ZXh0LWNlbnRlciBiZy1ncmFkaWVudC10by1yIGZyb20tW3ZhcigtLWxiKV0gdmlhLVt2YXIoLS1iKV0gdG8tW3ZhcigtLWxiKV0gYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgbWItNSBteC01IGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGlnaHRlclwiPlxuICAgICAgICAgIFlvdXIgUGVyc29uYWwgQUktQXNzaXN0ZWQgVHJhdmVsIEFkdmlzb3JcbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogSWNvbnMgZm9yIE5ldyBDaGF0IGFuZCBTYXZlIENoYXQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgdy1bOTAlXSBtZDp3LVs2MCVdIG1iLTJcIj5cbiAgICAgICAgey8qIE5ldyBDaGF0IEljb24gKi99XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1bdmFyKC0tZyldIGhvdmVyOnRleHQtW3ZhcigtLWIpXSBtci00XCI+XG4gICAgICAgICAgPEFpT3V0bGluZVBsdXMgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTggbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgYmctZ3JheS01MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHJvdW5kZWQgcHgtMiBweS0xIGhpZGRlbiBncm91cC1ob3ZlcjpibG9ja1wiPlxuICAgICAgICAgICAgTmV3IENoYXRcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIHsvKiBTYXZlIENoYXQgSWNvbiAqL31cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LVt2YXIoLS1nKV0gaG92ZXI6dGV4dC1bdmFyKC0tYildXCI+XG4gICAgICAgICAgPEFpT3V0bGluZVNhdmUgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTggbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgYmctZ3JheS01MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHJvdW5kZWQgcHgtMiBweS0xIGhpZGRlbiBncm91cC1ob3ZlcjpibG9ja1wiPlxuICAgICAgICAgICAgU2F2ZSBDaGF0XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ2hhdCBDb250YWluZXIgd2l0aCBGaXhlZCBIZWlnaHQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcm91bmRlZC0zeGwgbXgtMjAgYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1bMC41cHhdIHNoYWRvdy1ibGFjay8xMCBzaGFkb3ctMnhsIHctWzkwJV0gbWQ6dy1bNzAlXSBoLVs1MDBweF0gbWQ6aC1bNjAwcHhdXCI+XG4gICAgICAgIHsvKiBDaGF0IG1lc3NhZ2VzIGFyZWEgd2l0aCBvdmVyZmxvdyBzY3JvbGxpbmcgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBtZDpwLTQgcC0yIGJnLW9wYWNpdHktMTAgbWVzaC1saWdodCBiYWNrZHJvcC1ibHVyLXhsIHJvdW5kZWQtdC0zeGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXgtYXV0b1wiPlxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtYi0zIG1kOnAtMyBwLTIgcm91bmRlZC14bCBib3JkZXItWzAuNXB4XSBib3JkZXItZ3JheS0zMDAgbWQ6bWF4LXctWzYwJV0gbWF4LXctWzkwJV0gcmVsYXRpdmUgZ3JvdXAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7XG4gICAgICAgICAgICAgICAgICBtc2cuc2VuZGVyID09PSBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctd2hpdGUgdGV4dC1bdmFyKC0tZyldIHNlbGYtZW5kIG1sLWF1dG8gYW5pbWF0ZS1zbGlkZVVwXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlIHRleHQtW3ZhcigtLWIpXSBhbmltYXRlLXNsaWRlRG93blwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bXNnLnRleHR9XG5cbiAgICAgICAgICAgICAgICB7LyogQ29weSBJY29uICh2aXNpYmxlIG9uIGhvdmVyKSAqL31cbiAgICAgICAgICAgICAgICB7bXNnLnNlbmRlciA9PT0gXCJib3RcIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgcmlnaHQtWy0zNXB4XSB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTIwMCB0ZXh0LVt2YXIoLS1nKV0gaG92ZXI6dGV4dC1bdmFyKC0tYildXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVDb3B5IGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIElucHV0IEZpZWxkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBweC00IHB5LTIgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1iLTN4bFwiPlxuICAgICAgICAgIHsvKiBVcGxvYWQgSWNvbiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLWcpXSBob3Zlcjp0ZXh0LVt2YXIoLS1iKV0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICA8QWlPdXRsaW5lUGFwZXJDbGlwIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIFRleHQgSW5wdXQgKi99XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlXCJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IGUua2V5ID09PSBcIkVudGVyXCIgJiYgaGFuZGxlU2VuZCgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIG14LTQgcHktMiBweC00IGJnLVt2YXIoLS1sbGcpXSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHJvdW5kZWQtZnVsbCB0ZXh0LVt2YXIoLS1nKV0gbWQ6dGV4dC14bCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogU2VuZCBJY29uICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS1nKV0gaG92ZXI6dGV4dC1bdmFyKC0tYildIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFpT3V0bGluZVNlbmQgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1tZCBtZDp0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBwLTQgdHJhY2tpbmctdGlnaHQgdGV4dC1bdmFyKC0tZyldIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgIFdhbnQgYmV0dGVyIHJlc3VsdHM/IFRyeSBPdXIgbmV3e1wiIFwifVxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS1iKV0gaG92ZXI6dGV4dC1bI2ZmYmYwMF0gYmctbm9uZSBob3ZlcjpiZy1bI2E2N2MwMF1cIj5cbiAgICAgICAgICBUcmlwcG8gR09MRFxuICAgICAgICA8L2E+XG4gICAgICA8L2g1PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWlPdXRsaW5lU2VuZCIsIkFpT3V0bGluZVBhcGVyQ2xpcCIsIkFpT3V0bGluZVBsdXMiLCJBaU91dGxpbmVTYXZlIiwiQWlPdXRsaW5lQ29weSIsIkNoYXRCb3QiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidGV4dCIsInNlbmRlciIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiaGFuZGxlU2VuZCIsInRyaW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsImgzIiwiYnV0dG9uIiwic3BhbiIsIm1hcCIsIm1zZyIsImluZGV4IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5RG93biIsImtleSIsIm9uQ2xpY2siLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatBot.jsx\n"));

/***/ })

});