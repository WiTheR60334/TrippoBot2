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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatBot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineCopy,AiOutlinePaperClip,AiOutlinePlus,AiOutlineSave,AiOutlineSend!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ChatBot() {\n    _s();\n    const handleGold = ()=>{\n        window.location.href = \"/chat-gold\";\n    };\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            text: \"Hello! How can I assist you today?\",\n            sender: \"bot\"\n        },\n        {\n            text: \"What are your services?\",\n            sender: \"user\"\n        }\n    ]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSend = ()=>{\n        if (newMessage.trim() !== \"\") {\n            setMessages([\n                ...messages,\n                {\n                    text: newMessage,\n                    sender: \"user\"\n                }\n            ]);\n            setNewMessage(\"\");\n        // Logic to handle message sending can be added here.\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"items-center outfit mesh bg-white min-h-screen  flex flex-col justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"text-xl md:text-3xl text-center tracking-tight text-[var(--g)] font-medium\",\n                            children: \"Trippo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-2xl md:text-4xl text-center bg-gradient-to-r from-[var(--lb)] via-[var(--b)] to-[var(--lb)] bg-clip-text text-transparent mb-5 mx-5 font-semibold tracking-tighter\",\n                            children: \"Your Personal AI-Assisted Travel Advisor\"\n                        }, void 0, false, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end w-[90%] md:w-[60%] mb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"relative text-[var(--g)] hover:text-[var(--b)] mr-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlus, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block\",\n                                    children: \"New Chat\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"relative text-[var(--g)] hover:text-[var(--b)]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSave, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block\",\n                                    children: \"Save Chat\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col rounded-3xl mx-20 bg-white border-gray-200 border-[0.5px] shadow-black/10 shadow-2xl w-[90%] md:w-[70%] h-[500px] md:h-[600px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 overflow-y-auto md:p-4 p-2 bg-opacity-10 mesh-light backdrop-blur-xl rounded-t-3xl transition-all duration-500 ease-in-out\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" mx-auto\",\n                                children: messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-3 md:p-3 p-2 rounded-xl border-[0.5px] border-gray-300 md:max-w-[60%] max-w-[90%] relative group transition-transform duration-300 ease-in-out \".concat(msg.sender === \"user\" ? \"bg-white text-[var(--g)] self-end ml-auto animate-slideUp\" : \"bg-white text-[var(--b)] animate-slideDown\"),\n                                        children: [\n                                            msg.text,\n                                            msg.sender === \"bot\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"absolute top-1/2 right-[-35px] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[var(--g)] hover:text-[var(--b)]\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCopy, {\n                                                    className: \"h-5 w-5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white border-t border-gray-200 px-4 py-2 flex items-center rounded-b-3xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-[var(--g)] hover:text-[var(--b)] transition-colors duration-200\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePaperClip, {\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Type your message\",\n                                    value: newMessage,\n                                    onChange: (e)=>setNewMessage(e.target.value),\n                                    onKeyDown: (e)=>e.key === \"Enter\" && handleSend(),\n                                    className: \"flex-1 mx-4 py-2 px-4 bg-[var(--llg)] outline-none focus:outline-none rounded-full text-[var(--g)] md:text-xl text-lg transition-all duration-300 ease-in-out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSend,\n                                    className: \"text-[var(--g)] hover:text-[var(--b)] duration-200\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSend, {\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"text-md md:text-xl text-center px-4 py-2 mt-4 bg-white rounded-full tracking-tight text-[var(--g)] font-medium\",\n                    children: [\n                        \"Want better results? Try Our new\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"text-[var(--b)] hover:text-[var(--gr)] cursor-pointer rounded-xl bg-none\",\n                            onClick: handleGold,\n                            children: \"Trippo GOLD\"\n                        }, void 0, false, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBot.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBot, \"VP2aIOqXchMc9mplwgTnyRaw3MA=\");\n_c = ChatBot;\nvar _c;\n$RefreshReg$(_c, \"ChatBot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdEJvdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQU9UO0FBRVQsU0FBU007O0lBQ3RCLE1BQU1DLGFBQWE7UUFDakJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCO0lBQ0EsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO1FBQ3ZDO1lBQUVhLE1BQU07WUFBc0NDLFFBQVE7UUFBTTtRQUM1RDtZQUFFRCxNQUFNO1lBQTJCQyxRQUFRO1FBQU87S0FDbkQ7SUFDRCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1pQixhQUFhO1FBQ2pCLElBQUlGLFdBQVdHLElBQUksT0FBTyxJQUFJO1lBQzVCTixZQUFZO21CQUFJRDtnQkFBVTtvQkFBRUUsTUFBTUU7b0JBQVlELFFBQVE7Z0JBQU87YUFBRTtZQUMvREUsY0FBYztRQUNkLHFEQUFxRDtRQUN2RDtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7a0JBRWIsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUE2RTs7Ozs7O3NDQUczRiw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQTBLOzs7Ozs7Ozs7Ozs7OEJBTTFMLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNHOzRCQUFPSCxXQUFVOzs4Q0FDaEIsOERBQUNqQiwySkFBYUE7b0NBQUNpQixXQUFVOzs7Ozs7OENBQ3pCLDhEQUFDSTtvQ0FBS0osV0FBVTs4Q0FBK0g7Ozs7Ozs7Ozs7OztzQ0FNakosOERBQUNHOzRCQUFPSCxXQUFVOzs4Q0FDaEIsOERBQUNoQiwySkFBYUE7b0NBQUNnQixXQUFVOzs7Ozs7OENBQ3pCLDhEQUFDSTtvQ0FBS0osV0FBVTs4Q0FBK0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPbkosOERBQUNEO29CQUFJQyxXQUFVOztzQ0FFYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNaVCxTQUFTYyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2xCLDhEQUFDUjt3Q0FFQ0MsV0FBVyxxSkFJVixPQUhDTSxJQUFJWixNQUFNLEtBQUssU0FDWCw4REFDQTs7NENBR0xZLElBQUliLElBQUk7NENBR1JhLElBQUlaLE1BQU0sS0FBSyx1QkFDZCw4REFBQ1M7Z0RBQU9ILFdBQVU7MERBQ2hCLDRFQUFDZiwySkFBYUE7b0RBQUNlLFdBQVU7Ozs7Ozs7Ozs7Ozt1Q0FaeEJPOzs7Ozs7Ozs7Ozs7Ozs7c0NBcUJiLDhEQUFDUjs0QkFBSUMsV0FBVTs7OENBRWIsOERBQUNHO29DQUFPSCxXQUFVOzhDQUNoQiw0RUFBQ2xCLGdLQUFrQkE7d0NBQUNrQixXQUFVOzs7Ozs7Ozs7Ozs4Q0FJaEMsOERBQUNRO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPaEI7b0NBQ1BpQixVQUFVLENBQUNDLElBQU1qQixjQUFjaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUM3Q0ksV0FBVyxDQUFDRixJQUFNQSxFQUFFRyxHQUFHLEtBQUssV0FBV25CO29DQUN2Q0csV0FBVTs7Ozs7OzhDQUdaLDhEQUFDRztvQ0FDQ2MsU0FBU3BCO29DQUNURyxXQUFVOzhDQUVWLDRFQUFDbkIsMkpBQWFBO3dDQUFDbUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSS9CLDhEQUFDQztvQkFBR0QsV0FBVTs7d0JBQWlIO3dCQUM1RjtzQ0FDakMsOERBQUNrQjs0QkFDQ2xCLFdBQVU7NEJBQ1ZpQixTQUFTOUI7c0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FsSHdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRCb3QuanN4Pzc3ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWlPdXRsaW5lU2VuZCxcbiAgQWlPdXRsaW5lUGFwZXJDbGlwLFxuICBBaU91dGxpbmVQbHVzLFxuICBBaU91dGxpbmVTYXZlLFxuICBBaU91dGxpbmVDb3B5LFxufSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdEJvdCgpIHtcbiAgY29uc3QgaGFuZGxlR29sZCA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NoYXQtZ29sZFwiO1xuICB9O1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtcbiAgICB7IHRleHQ6IFwiSGVsbG8hIEhvdyBjYW4gSSBhc3Npc3QgeW91IHRvZGF5P1wiLCBzZW5kZXI6IFwiYm90XCIgfSxcbiAgICB7IHRleHQ6IFwiV2hhdCBhcmUgeW91ciBzZXJ2aWNlcz9cIiwgc2VuZGVyOiBcInVzZXJcIiB9LFxuICBdKTtcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU2VuZCA9ICgpID0+IHtcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgeyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6IFwidXNlclwiIH1dKTtcbiAgICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XG4gICAgICAvLyBMb2dpYyB0byBoYW5kbGUgbWVzc2FnZSBzZW5kaW5nIGNhbiBiZSBhZGRlZCBoZXJlLlxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIG91dGZpdCBtZXNoIGJnLXdoaXRlIG1pbi1oLXNjcmVlbiAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgey8qIFRpdGxlIFNlY3Rpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtYi01XCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0zeGwgdGV4dC1jZW50ZXIgdHJhY2tpbmctdGlnaHQgdGV4dC1bdmFyKC0tZyldIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBUcmlwcG9cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCB0ZXh0LWNlbnRlciBiZy1ncmFkaWVudC10by1yIGZyb20tW3ZhcigtLWxiKV0gdmlhLVt2YXIoLS1iKV0gdG8tW3ZhcigtLWxiKV0gYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgbWItNSBteC01IGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGlnaHRlclwiPlxuICAgICAgICAgICAgWW91ciBQZXJzb25hbCBBSS1Bc3Npc3RlZCBUcmF2ZWwgQWR2aXNvclxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBJY29ucyBmb3IgTmV3IENoYXQgYW5kIFNhdmUgQ2hhdCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHctWzkwJV0gbWQ6dy1bNjAlXSBtYi0yXCI+XG4gICAgICAgICAgey8qIE5ldyBDaGF0IEljb24gKi99XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LVt2YXIoLS1nKV0gaG92ZXI6dGV4dC1bdmFyKC0tYildIG1yLTRcIj5cbiAgICAgICAgICAgIDxBaU91dGxpbmVQbHVzIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTggbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgYmctZ3JheS01MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHJvdW5kZWQgcHgtMiBweS0xIGhpZGRlbiBncm91cC1ob3ZlcjpibG9ja1wiPlxuICAgICAgICAgICAgICBOZXcgQ2hhdFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIFNhdmUgQ2hhdCBJY29uICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1bdmFyKC0tZyldIGhvdmVyOnRleHQtW3ZhcigtLWIpXVwiPlxuICAgICAgICAgICAgPEFpT3V0bGluZVNhdmUgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtOCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHRleHQteHMgcm91bmRlZCBweC0yIHB5LTEgaGlkZGVuIGdyb3VwLWhvdmVyOmJsb2NrXCI+XG4gICAgICAgICAgICAgIFNhdmUgQ2hhdFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2hhdCBDb250YWluZXIgd2l0aCBGaXhlZCBIZWlnaHQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLTN4bCBteC0yMCBiZy13aGl0ZSBib3JkZXItZ3JheS0yMDAgYm9yZGVyLVswLjVweF0gc2hhZG93LWJsYWNrLzEwIHNoYWRvdy0yeGwgdy1bOTAlXSBtZDp3LVs3MCVdIGgtWzUwMHB4XSBtZDpoLVs2MDBweF1cIj5cbiAgICAgICAgICB7LyogQ2hhdCBtZXNzYWdlcyBhcmVhIHdpdGggb3ZlcmZsb3cgc2Nyb2xsaW5nICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBtZDpwLTQgcC0yIGJnLW9wYWNpdHktMTAgbWVzaC1saWdodCBiYWNrZHJvcC1ibHVyLXhsIHJvdW5kZWQtdC0zeGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWItMyBtZDpwLTMgcC0yIHJvdW5kZWQteGwgYm9yZGVyLVswLjVweF0gYm9yZGVyLWdyYXktMzAwIG1kOm1heC13LVs2MCVdIG1heC13LVs5MCVdIHJlbGF0aXZlIGdyb3VwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke1xuICAgICAgICAgICAgICAgICAgICBtc2cuc2VuZGVyID09PSBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy13aGl0ZSB0ZXh0LVt2YXIoLS1nKV0gc2VsZi1lbmQgbWwtYXV0byBhbmltYXRlLXNsaWRlVXBcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy13aGl0ZSB0ZXh0LVt2YXIoLS1iKV0gYW5pbWF0ZS1zbGlkZURvd25cIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21zZy50ZXh0fVxuXG4gICAgICAgICAgICAgICAgICB7LyogQ29weSBJY29uICh2aXNpYmxlIG9uIGhvdmVyKSAqL31cbiAgICAgICAgICAgICAgICAgIHttc2cuc2VuZGVyID09PSBcImJvdFwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIHJpZ2h0LVstMzVweF0gdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0yMDAgdGV4dC1bdmFyKC0tZyldIGhvdmVyOnRleHQtW3ZhcigtLWIpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVDb3B5IGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogSW5wdXQgRmllbGQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHgtNCBweS0yIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtYi0zeGxcIj5cbiAgICAgICAgICAgIHsvKiBVcGxvYWQgSWNvbiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1bdmFyKC0tZyldIGhvdmVyOnRleHQtW3ZhcigtLWIpXSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZVBhcGVyQ2xpcCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7LyogVGV4dCBJbnB1dCAqL31cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmV3TWVzc2FnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBoYW5kbGVTZW5kKCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBteC00IHB5LTIgcHgtNCBiZy1bdmFyKC0tbGxnKV0gb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSByb3VuZGVkLWZ1bGwgdGV4dC1bdmFyKC0tZyldIG1kOnRleHQteGwgdGV4dC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBTZW5kIEljb24gKi99XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLWcpXSBob3Zlcjp0ZXh0LVt2YXIoLS1iKV0gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZVNlbmQgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LW1kIG1kOnRleHQteGwgdGV4dC1jZW50ZXIgcHgtNCBweS0yIG10LTQgYmctd2hpdGUgcm91bmRlZC1mdWxsIHRyYWNraW5nLXRpZ2h0IHRleHQtW3ZhcigtLWcpXSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIFdhbnQgYmV0dGVyIHJlc3VsdHM/IFRyeSBPdXIgbmV3e1wiIFwifVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS1iKV0gaG92ZXI6dGV4dC1bdmFyKC0tZ3IpXSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLXhsIGJnLW5vbmVcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR29sZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBUcmlwcG8gR09MRFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWlPdXRsaW5lU2VuZCIsIkFpT3V0bGluZVBhcGVyQ2xpcCIsIkFpT3V0bGluZVBsdXMiLCJBaU91dGxpbmVTYXZlIiwiQWlPdXRsaW5lQ29weSIsIkNoYXRCb3QiLCJoYW5kbGVHb2xkIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInRleHQiLCJzZW5kZXIiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsImhhbmRsZVNlbmQiLCJ0cmltIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDUiLCJoMyIsImJ1dHRvbiIsInNwYW4iLCJtYXAiLCJtc2ciLCJpbmRleCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbktleURvd24iLCJrZXkiLCJvbkNsaWNrIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatBot.jsx\n"));

/***/ })

});