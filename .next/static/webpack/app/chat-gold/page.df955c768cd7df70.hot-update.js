"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat-gold/page",{

/***/ "(app-pages-browser)/./components/ChatBotGold.jsx":
/*!************************************!*\
  !*** ./components/ChatBotGold.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatBotGold; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineCopy,AiOutlinePaperClip,AiOutlinePlus,AiOutlineSave,AiOutlineSend!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ChatBotGold() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            text: \"Hello! How can I assist you today?\",\n            sender: \"bot\"\n        },\n        {\n            text: \"What are your services?\",\n            sender: \"user\"\n        }\n    ]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSend = ()=>{\n        if (newMessage.trim() !== \"\") {\n            setMessages([\n                ...messages,\n                {\n                    text: newMessage,\n                    sender: \"user\"\n                }\n            ]);\n            setNewMessage(\"\");\n        // Logic to handle message sending can be added here.\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"items-center outfit mesh-gold bg-white min-h-screen flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl md:text-3xl text-center tracking-tight text-[var(--g)] font-medium\",\n                        children: \"Trippo Gold\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl md:text-4xl text-center bg-gradient-to-r from-[hsla(47,100%,77%,1)] via-[#e0aa3e)] to-[#e0aa3e] bg-clip-text text-transparent mb-5 mx-5 font-semibold tracking-tighter\",\n                        children: \"Your Personal AI-Assisted Travel Advisor\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end w-[90%] md:w-[60%] mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"relative text-[var(--g)] hover:text-[var(--b)] mr-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlus, {\n                                className: \"h-6 w-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block\",\n                                children: \"New Chat\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"relative text-[var(--g)] hover:text-[var(--b)]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSave, {\n                                className: \"h-6 w-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block\",\n                                children: \"Save Chat\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col rounded-3xl mx-20 bg-white border-gray-200 border-[0.5px] shadow-black/10 shadow-2xl w-[90%] md:w-[70%] h-[500px] md:h-[600px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto md:p-4 p-2 bg-opacity-10 mesh-light backdrop-blur-xl rounded-t-3xl transition-all duration-500 ease-in-out\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" mx-auto\",\n                            children: messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3 md:p-3 p-2 rounded-xl border-[0.5px] border-gray-300 md:max-w-[60%] max-w-[90%] relative group transition-transform duration-300 ease-in-out \".concat(msg.sender === \"user\" ? \"bg-white text-[var(--g)] self-end ml-auto animate-slideUp\" : \"bg-white text-[var(--b)] animate-slideDown\"),\n                                    children: [\n                                        msg.text,\n                                        msg.sender === \"bot\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"absolute top-1/2 right-[-35px] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[var(--g)] hover:text-[var(--b)]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCopy, {\n                                                className: \"h-5 w-5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white border-t border-gray-200 px-4 py-2 flex items-center rounded-b-3xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-[var(--g)] hover:text-[var(--b)] transition-colors duration-200\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePaperClip, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Type your message\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                onKeyDown: (e)=>e.key === \"Enter\" && handleSend(),\n                                className: \"flex-1 mx-4 py-2 px-4 bg-[var(--llg)] outline-none focus:outline-none rounded-full text-[var(--g)] md:text-xl text-lg transition-all duration-300 ease-in-out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSend,\n                                className: \"text-[var(--g)] hover:text-[var(--b)] duration-200\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineCopy_AiOutlinePaperClip_AiOutlinePlus_AiOutlineSave_AiOutlineSend_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSend, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-md md:text-2xl text-center p-4 tracking-tight text-[var(--g)] font-medium\",\n                children: [\n                    \"Want better results? Try Our new\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-[var(--b)] hover:text-[var(--gr)] cursor-pointer rounded-xl bg-none\",\n                        children: \"Trippo GOLD\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meetyashvantbhaisuthar/Development Projects and Tools/Projects/TrippoBot/components/ChatBotGold.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBotGold, \"VP2aIOqXchMc9mplwgTnyRaw3MA=\");\n_c = ChatBotGold;\nvar _c;\n$RefreshReg$(_c, \"ChatBotGold\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdEJvdEdvbGQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFPVDtBQUVULFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7UUFDdkM7WUFBRVMsTUFBTTtZQUFzQ0MsUUFBUTtRQUFNO1FBQzVEO1lBQUVELE1BQU07WUFBMkJDLFFBQVE7UUFBTztLQUNuRDtJQUNELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNYSxhQUFhO1FBQ2pCLElBQUlGLFdBQVdHLElBQUksT0FBTyxJQUFJO1lBQzVCTixZQUFZO21CQUFJRDtnQkFBVTtvQkFBRUUsTUFBTUU7b0JBQVlELFFBQVE7Z0JBQU87YUFBRTtZQUMvREUsY0FBYztRQUNkLHFEQUFxRDtRQUN2RDtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUE2RTs7Ozs7O2tDQUczRiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQWtMOzs7Ozs7Ozs7Ozs7MEJBTWxNLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNHO3dCQUFPSCxXQUFVOzswQ0FDaEIsOERBQUNiLDJKQUFhQTtnQ0FBQ2EsV0FBVTs7Ozs7OzBDQUN6Qiw4REFBQ0k7Z0NBQUtKLFdBQVU7MENBQStIOzs7Ozs7Ozs7Ozs7a0NBTWpKLDhEQUFDRzt3QkFBT0gsV0FBVTs7MENBQ2hCLDhEQUFDWiwySkFBYUE7Z0NBQUNZLFdBQVU7Ozs7OzswQ0FDekIsOERBQUNJO2dDQUFLSixXQUFVOzBDQUErSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9uSiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1pULFNBQVNjLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDbEIsOERBQUNSO29DQUVDQyxXQUFXLHFKQUlWLE9BSENNLElBQUlaLE1BQU0sS0FBSyxTQUNYLDhEQUNBOzt3Q0FHTFksSUFBSWIsSUFBSTt3Q0FHUmEsSUFBSVosTUFBTSxLQUFLLHVCQUNkLDhEQUFDUzs0Q0FBT0gsV0FBVTtzREFDaEIsNEVBQUNYLDJKQUFhQTtnREFBQ1csV0FBVTs7Ozs7Ozs7Ozs7O21DQVp4Qk87Ozs7Ozs7Ozs7Ozs7OztrQ0FxQmIsOERBQUNSO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ0c7Z0NBQU9ILFdBQVU7MENBQ2hCLDRFQUFDZCxnS0FBa0JBO29DQUFDYyxXQUFVOzs7Ozs7Ozs7OzswQ0FJaEMsOERBQUNRO2dDQUNDQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxPQUFPaEI7Z0NBQ1BpQixVQUFVLENBQUNDLElBQU1qQixjQUFjaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUM3Q0ksV0FBVyxDQUFDRixJQUFNQSxFQUFFRyxHQUFHLEtBQUssV0FBV25CO2dDQUN2Q0csV0FBVTs7Ozs7OzBDQUdaLDhEQUFDRztnQ0FDQ2MsU0FBU3BCO2dDQUNURyxXQUFVOzBDQUVWLDRFQUFDZiwySkFBYUE7b0NBQUNlLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkvQiw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUFpRjtvQkFDNUQ7a0NBQ2pDLDhEQUFDa0I7d0JBQUVsQixXQUFVO2tDQUEyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhHO0dBMUd3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm90R29sZC5qc3g/ODhmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBBaU91dGxpbmVTZW5kLFxuICBBaU91dGxpbmVQYXBlckNsaXAsXG4gIEFpT3V0bGluZVBsdXMsXG4gIEFpT3V0bGluZVNhdmUsXG4gIEFpT3V0bGluZUNvcHksXG59IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Qm90R29sZCgpIHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXG4gICAgeyB0ZXh0OiBcIkhlbGxvISBIb3cgY2FuIEkgYXNzaXN0IHlvdSB0b2RheT9cIiwgc2VuZGVyOiBcImJvdFwiIH0sXG4gICAgeyB0ZXh0OiBcIldoYXQgYXJlIHlvdXIgc2VydmljZXM/XCIsIHNlbmRlcjogXCJ1c2VyXCIgfSxcbiAgXSk7XG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmQgPSAoKSA9PiB7XG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiBcInVzZXJcIiB9XSk7XG4gICAgICBzZXROZXdNZXNzYWdlKFwiXCIpO1xuICAgICAgLy8gTG9naWMgdG8gaGFuZGxlIG1lc3NhZ2Ugc2VuZGluZyBjYW4gYmUgYWRkZWQgaGVyZS5cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBvdXRmaXQgbWVzaC1nb2xkIGJnLXdoaXRlIG1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICB7LyogVGl0bGUgU2VjdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWItNVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTN4bCB0ZXh0LWNlbnRlciB0cmFja2luZy10aWdodCB0ZXh0LVt2YXIoLS1nKV0gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICBUcmlwcG8gR29sZFxuICAgICAgICA8L2g1PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC00eGwgdGV4dC1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLVtoc2xhKDQ3LDEwMCUsNzclLDEpXSB2aWEtWyNlMGFhM2UpXSB0by1bI2UwYWEzZV0gYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgbWItNSBteC01IGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGlnaHRlclwiPlxuICAgICAgICAgIFlvdXIgUGVyc29uYWwgQUktQXNzaXN0ZWQgVHJhdmVsIEFkdmlzb3JcbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogSWNvbnMgZm9yIE5ldyBDaGF0IGFuZCBTYXZlIENoYXQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgdy1bOTAlXSBtZDp3LVs2MCVdIG1iLTJcIj5cbiAgICAgICAgey8qIE5ldyBDaGF0IEljb24gKi99XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1bdmFyKC0tZyldIGhvdmVyOnRleHQtW3ZhcigtLWIpXSBtci00XCI+XG4gICAgICAgICAgPEFpT3V0bGluZVBsdXMgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTggbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgYmctZ3JheS01MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHJvdW5kZWQgcHgtMiBweS0xIGhpZGRlbiBncm91cC1ob3ZlcjpibG9ja1wiPlxuICAgICAgICAgICAgTmV3IENoYXRcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIHsvKiBTYXZlIENoYXQgSWNvbiAqL31cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LVt2YXIoLS1nKV0gaG92ZXI6dGV4dC1bdmFyKC0tYildXCI+XG4gICAgICAgICAgPEFpT3V0bGluZVNhdmUgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTggbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgYmctZ3JheS01MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHJvdW5kZWQgcHgtMiBweS0xIGhpZGRlbiBncm91cC1ob3ZlcjpibG9ja1wiPlxuICAgICAgICAgICAgU2F2ZSBDaGF0XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ2hhdCBDb250YWluZXIgd2l0aCBGaXhlZCBIZWlnaHQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcm91bmRlZC0zeGwgbXgtMjAgYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1bMC41cHhdIHNoYWRvdy1ibGFjay8xMCBzaGFkb3ctMnhsIHctWzkwJV0gbWQ6dy1bNzAlXSBoLVs1MDBweF0gbWQ6aC1bNjAwcHhdXCI+XG4gICAgICAgIHsvKiBDaGF0IG1lc3NhZ2VzIGFyZWEgd2l0aCBvdmVyZmxvdyBzY3JvbGxpbmcgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBtZDpwLTQgcC0yIGJnLW9wYWNpdHktMTAgbWVzaC1saWdodCBiYWNrZHJvcC1ibHVyLXhsIHJvdW5kZWQtdC0zeGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXgtYXV0b1wiPlxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtYi0zIG1kOnAtMyBwLTIgcm91bmRlZC14bCBib3JkZXItWzAuNXB4XSBib3JkZXItZ3JheS0zMDAgbWQ6bWF4LXctWzYwJV0gbWF4LXctWzkwJV0gcmVsYXRpdmUgZ3JvdXAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7XG4gICAgICAgICAgICAgICAgICBtc2cuc2VuZGVyID09PSBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctd2hpdGUgdGV4dC1bdmFyKC0tZyldIHNlbGYtZW5kIG1sLWF1dG8gYW5pbWF0ZS1zbGlkZVVwXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlIHRleHQtW3ZhcigtLWIpXSBhbmltYXRlLXNsaWRlRG93blwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bXNnLnRleHR9XG5cbiAgICAgICAgICAgICAgICB7LyogQ29weSBJY29uICh2aXNpYmxlIG9uIGhvdmVyKSAqL31cbiAgICAgICAgICAgICAgICB7bXNnLnNlbmRlciA9PT0gXCJib3RcIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgcmlnaHQtWy0zNXB4XSB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTIwMCB0ZXh0LVt2YXIoLS1nKV0gaG92ZXI6dGV4dC1bdmFyKC0tYildXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVDb3B5IGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIElucHV0IEZpZWxkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBweC00IHB5LTIgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1iLTN4bFwiPlxuICAgICAgICAgIHsvKiBVcGxvYWQgSWNvbiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLWcpXSBob3Zlcjp0ZXh0LVt2YXIoLS1iKV0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICA8QWlPdXRsaW5lUGFwZXJDbGlwIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIFRleHQgSW5wdXQgKi99XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlXCJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IGUua2V5ID09PSBcIkVudGVyXCIgJiYgaGFuZGxlU2VuZCgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIG14LTQgcHktMiBweC00IGJnLVt2YXIoLS1sbGcpXSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHJvdW5kZWQtZnVsbCB0ZXh0LVt2YXIoLS1nKV0gbWQ6dGV4dC14bCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogU2VuZCBJY29uICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS1nKV0gaG92ZXI6dGV4dC1bdmFyKC0tYildIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFpT3V0bGluZVNlbmQgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1tZCBtZDp0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBwLTQgdHJhY2tpbmctdGlnaHQgdGV4dC1bdmFyKC0tZyldIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgIFdhbnQgYmV0dGVyIHJlc3VsdHM/IFRyeSBPdXIgbmV3e1wiIFwifVxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS1iKV0gaG92ZXI6dGV4dC1bdmFyKC0tZ3IpXSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLXhsIGJnLW5vbmVcIj5cbiAgICAgICAgICBUcmlwcG8gR09MRFxuICAgICAgICA8L2E+XG4gICAgICA8L2g1PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWlPdXRsaW5lU2VuZCIsIkFpT3V0bGluZVBhcGVyQ2xpcCIsIkFpT3V0bGluZVBsdXMiLCJBaU91dGxpbmVTYXZlIiwiQWlPdXRsaW5lQ29weSIsIkNoYXRCb3RHb2xkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInRleHQiLCJzZW5kZXIiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsImhhbmRsZVNlbmQiLCJ0cmltIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDUiLCJoMyIsImJ1dHRvbiIsInNwYW4iLCJtYXAiLCJtc2ciLCJpbmRleCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbktleURvd24iLCJrZXkiLCJvbkNsaWNrIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatBotGold.jsx\n"));

/***/ })

});