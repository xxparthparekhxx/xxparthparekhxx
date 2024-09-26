/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/EyeContext.tsx":
/*!********************************!*\
  !*** ./context/EyeContext.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EyeState: () => (/* binding */ EyeState),\n/* harmony export */   useEyeContext: () => (/* binding */ useEyeContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defaultEyeState = {\n    expanded: false,\n    style: \"default\"\n};\nconst EyeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: {\n        ...defaultEyeState\n    },\n    dispatch: (e)=>{}\n});\nfunction EyeState({ children }) {\n    const [eyeC, seteyeC] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultEyeState);\n    const eyeStateReduser = ({ type })=>{\n        if (type != undefined) {\n            seteyeC({\n                expanded: true,\n                style: type\n            });\n        } else {\n            seteyeC(defaultEyeState);\n        }\n    };\n    const val = {\n        state: eyeC,\n        dispatch: eyeStateReduser\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EyeContext.Provider, {\n        value: val,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\code\\\\xxparthparekhxx\\\\context\\\\EyeContext.tsx\",\n        lineNumber: 36,\n        columnNumber: 10\n    }, this);\n}\nfunction useEyeContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(EyeContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0V5ZUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEU7QUFFMUUsTUFBTUcsa0JBQWtCO0lBQ3RCQyxVQUFVO0lBQ1ZDLE9BQU87QUFDVDtBQVdBLE1BQU1DLDJCQUFhTixvREFBYUEsQ0FBQztJQUMvQk8sT0FBTztRQUFFLEdBQUdKLGVBQWU7SUFBQztJQUM1QkssVUFBVSxDQUFDQyxLQUNYO0FBQ0Y7QUFFTyxTQUFTQyxTQUFTLEVBQUVDLFFBQVEsRUFBZ0M7SUFDakUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDQztJQUNqQyxNQUFNVyxrQkFBa0IsQ0FBQyxFQUFFQyxJQUFJLEVBQWdDO1FBQzdELElBQUlBLFFBQVFDLFdBQVc7WUFDckJILFFBQVE7Z0JBQ05ULFVBQVU7Z0JBQ1ZDLE9BQU9VO1lBQ1Q7UUFDRixPQUFPO1lBQ0xGLFFBQVFWO1FBQ1Y7SUFDRjtJQUNBLE1BQU1jLE1BQU07UUFBRVYsT0FBT0s7UUFBTUosVUFBVU07SUFBZ0I7SUFDckQscUJBQU8sOERBQUNSLFdBQVdZLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQU1OOzs7Ozs7QUFDM0M7QUFFTyxTQUFTUztJQUNkLE9BQU9uQixpREFBVUEsQ0FBQ0s7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94eHBhcnRocGFyZWtoeHgvLi9jb250ZXh0L0V5ZUNvbnRleHQudHN4PzAzMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdEV5ZVN0YXRlID0ge1xyXG4gIGV4cGFuZGVkOiBmYWxzZSxcclxuICBzdHlsZTogXCJkZWZhdWx0XCIsXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuICBzdHlsZTogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBJQ29udGV4dFByb3BzIHtcclxuICBzdGF0ZTogSVN0YXRlO1xyXG4gIGRpc3BhdGNoOiAoeyB0eXBlIH06IHsgdHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkIH0pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEV5ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICBzdGF0ZTogeyAuLi5kZWZhdWx0RXllU3RhdGUgfSxcclxuICBkaXNwYXRjaDogKGUpID0+IHtcclxuICB9LFxyXG59IGFzIElDb250ZXh0UHJvcHMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV5ZVN0YXRlKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3RFbGVtZW50W10gfSkge1xyXG4gIGNvbnN0IFtleWVDLCBzZXRleWVDXSA9IHVzZVN0YXRlKGRlZmF1bHRFeWVTdGF0ZSk7XHJcbiAgY29uc3QgZXllU3RhdGVSZWR1c2VyID0gKHsgdHlwZSB9OiB7IHR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICBpZiAodHlwZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgc2V0ZXllQyh7XHJcbiAgICAgICAgZXhwYW5kZWQ6IHRydWUsXHJcbiAgICAgICAgc3R5bGU6IHR5cGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0ZXllQyhkZWZhdWx0RXllU3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgdmFsID0geyBzdGF0ZTogZXllQywgZGlzcGF0Y2g6IGV5ZVN0YXRlUmVkdXNlciB9O1xyXG4gIHJldHVybiA8RXllQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsfT57Y2hpbGRyZW59PC9FeWVDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUV5ZUNvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoRXllQ29udGV4dCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJkZWZhdWx0RXllU3RhdGUiLCJleHBhbmRlZCIsInN0eWxlIiwiRXllQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJlIiwiRXllU3RhdGUiLCJjaGlsZHJlbiIsImV5ZUMiLCJzZXRleWVDIiwiZXllU3RhdGVSZWR1c2VyIiwidHlwZSIsInVuZGVmaW5lZCIsInZhbCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VFeWVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/EyeContext.tsx\n");

/***/ }),

/***/ "./next-seo.config.js":
/*!****************************!*\
  !*** ./next-seo.config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QrSeo: () => (/* binding */ QrSeo),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    title: \"Parth Parekh | Fullstack Developer & AI Specialist\",\n    description: \"Fullstack Developer with AI expertise. Web dev, JavaScript, React, Node.js, and AI solutions. Parth Parekh's portfolio and services.\",\n    openGraph: {\n        type: \"website\",\n        locale: \"en_US\",\n        url: \"https://parthp.in/\",\n        siteName: \"Parth Parekh - Fullstack Developer & AI Specialist\",\n        images: [\n            {\n                url: \"https://parthp.in/parth.png\",\n                width: 553,\n                height: 553,\n                alt: \"Parth Parekh - Fullstack Developer & AI Specialist\"\n            }\n        ]\n    },\n    twitter: {\n        handle: \"@parthparekhx\",\n        site: \"@parthparekhx\",\n        cardType: \"summary_large_image\"\n    },\n    additionalMetaTags: [\n        {\n            name: \"keywords\",\n            content: \"Parth Parekh, Fullstack Developer, AI Specialist, Artificial Intelligence, Web Development, JavaScript, React, Node.js, Software Engineer, Machine Learning, xxparthparekhxx\"\n        },\n        {\n            name: \"author\",\n            content: \"Parth Parekh\"\n        }\n    ],\n    canonical: \"https://parthp.in/\",\n    siteMap: \"https://parthp.in/api/sitemap\",\n    additionalLinkTags: [\n        {\n            rel: \"me\",\n            href: \"https://github.com/xxparthparekhxx\"\n        },\n        {\n            rel: \"me\",\n            href: \"https://twitter.com/parthparekhx\"\n        },\n        {\n            rel: \"me\",\n            href: \"https://www.linkedin.com/in/xxparthparekhxx/\"\n        }\n    ]\n});\nconst QrSeo = {\n    title: \"Qr Code Genreator (free)\",\n    description: \"Simple app to generate qr code copy and download them free\",\n    openGraph: {\n        type: \"website\",\n        locale: \"en_IE\",\n        url: \"https://parthp.in/Projects/Qr\",\n        siteName: \"xxparthparekhxx\",\n        images: [\n            {\n                url: \"https://api.parthp.in/media/qrimage.png\",\n                width: 553,\n                height: 553,\n                alt: \"\"\n            }\n        ]\n    },\n    twitter: {\n        handle: \"@parthparekhx\",\n        site: \"@XxParthparekhxX\",\n        cardType: \"summary_large_image\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LXNlby5jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRUFBZTtJQUNYQSxPQUFPO0lBQ1BDLGFBQWE7SUFDYkMsV0FBVztRQUNUQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsS0FBSztRQUNMQyxVQUFVO1FBQ1ZDLFFBQVE7WUFDTjtnQkFDRUYsS0FBSztnQkFDTEcsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSztZQUNQO1NBQ0Q7SUFDSDtJQUNBQyxTQUFTO1FBQ1BDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsb0JBQW9CO1FBQ2xCO1lBQ0VDLE1BQU07WUFDTkMsU0FBUztRQUNYO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxTQUFTO1FBQ1g7S0FDRDtJQUNEQyxXQUFXO0lBQ1hDLFNBQVM7SUFDVEMsb0JBQW9CO1FBQ2xCO1lBQ0VDLEtBQUs7WUFDTEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxLQUFLO1lBQ0xDLE1BQU07UUFDUjtLQUNEO0FBQ0gsQ0FBQyxFQUFDO0FBQ0csTUFBTUMsUUFBUztJQUNsQnZCLE9BQU87SUFDUEMsYUFBYTtJQUNiQyxXQUFXO1FBQ1BDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxLQUFLO1FBQ0xDLFVBQVU7UUFDVkMsUUFBUTtZQUNKO2dCQUNJRixLQUFLO2dCQUNMRyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFLO1lBQ1Q7U0FDSDtJQUNMO0lBQ0FDLFNBQVM7UUFDTEMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLFVBQVU7SUFDZDtBQUdKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94eHBhcnRocGFyZWtoeHgvLi9uZXh0LXNlby5jb25maWcuanM/NGIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogXCJQYXJ0aCBQYXJla2ggfCBGdWxsc3RhY2sgRGV2ZWxvcGVyICYgQUkgU3BlY2lhbGlzdFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRnVsbHN0YWNrIERldmVsb3BlciB3aXRoIEFJIGV4cGVydGlzZS4gV2ViIGRldiwgSmF2YVNjcmlwdCwgUmVhY3QsIE5vZGUuanMsIGFuZCBBSSBzb2x1dGlvbnMuIFBhcnRoIFBhcmVraCdzIHBvcnRmb2xpbyBhbmQgc2VydmljZXMuXCIsXHJcbiAgICBvcGVuR3JhcGg6IHtcclxuICAgICAgdHlwZTogJ3dlYnNpdGUnLFxyXG4gICAgICBsb2NhbGU6ICdlbl9VUycsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vcGFydGhwLmluLycsXHJcbiAgICAgIHNpdGVOYW1lOiAnUGFydGggUGFyZWtoIC0gRnVsbHN0YWNrIERldmVsb3BlciAmIEFJIFNwZWNpYWxpc3QnLFxyXG4gICAgICBpbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL3BhcnRocC5pbi9wYXJ0aC5wbmcnLFxyXG4gICAgICAgICAgd2lkdGg6IDU1MyxcclxuICAgICAgICAgIGhlaWdodDogNTUzLFxyXG4gICAgICAgICAgYWx0OiAnUGFydGggUGFyZWtoIC0gRnVsbHN0YWNrIERldmVsb3BlciAmIEFJIFNwZWNpYWxpc3QnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgdHdpdHRlcjoge1xyXG4gICAgICBoYW5kbGU6ICdAcGFydGhwYXJla2h4JyxcclxuICAgICAgc2l0ZTogJ0BwYXJ0aHBhcmVraHgnLFxyXG4gICAgICBjYXJkVHlwZTogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxyXG4gICAgfSxcclxuICAgIGFkZGl0aW9uYWxNZXRhVGFnczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2tleXdvcmRzJyxcclxuICAgICAgICBjb250ZW50OiAnUGFydGggUGFyZWtoLCBGdWxsc3RhY2sgRGV2ZWxvcGVyLCBBSSBTcGVjaWFsaXN0LCBBcnRpZmljaWFsIEludGVsbGlnZW5jZSwgV2ViIERldmVsb3BtZW50LCBKYXZhU2NyaXB0LCBSZWFjdCwgTm9kZS5qcywgU29mdHdhcmUgRW5naW5lZXIsIE1hY2hpbmUgTGVhcm5pbmcsIHh4cGFydGhwYXJla2h4eCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdhdXRob3InLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdQYXJ0aCBQYXJla2gnXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBjYW5vbmljYWw6ICdodHRwczovL3BhcnRocC5pbi8nLFxyXG4gICAgc2l0ZU1hcDogJ2h0dHBzOi8vcGFydGhwLmluL2FwaS9zaXRlbWFwJyxcclxuICAgIGFkZGl0aW9uYWxMaW5rVGFnczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcmVsOiAnbWUnLFxyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20veHhwYXJ0aHBhcmVraHh4J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVsOiAnbWUnLFxyXG4gICAgICAgIGhyZWY6ICdodHRwczovL3R3aXR0ZXIuY29tL3BhcnRocGFyZWtoeCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlbDogJ21lJyxcclxuICAgICAgICBocmVmOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3h4cGFydGhwYXJla2h4eC8nXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5leHBvcnQgY29uc3QgUXJTZW8gPSAge1xyXG4gICAgdGl0bGU6IFwiUXIgQ29kZSBHZW5yZWF0b3IgKGZyZWUpXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTaW1wbGUgYXBwIHRvIGdlbmVyYXRlIHFyIGNvZGUgY29weSBhbmQgZG93bmxvYWQgdGhlbSBmcmVlXCIsXHJcbiAgICBvcGVuR3JhcGg6IHtcclxuICAgICAgICB0eXBlOiAnd2Vic2l0ZScsXHJcbiAgICAgICAgbG9jYWxlOiAnZW5fSUUnLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcGFydGhwLmluL1Byb2plY3RzL1FyJyxcclxuICAgICAgICBzaXRlTmFtZTogJ3h4cGFydGhwYXJla2h4eCcsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLnBhcnRocC5pbi9tZWRpYS9xcmltYWdlLnBuZycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTUzLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NTMsXHJcbiAgICAgICAgICAgICAgICBhbHQ6ICcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgdHdpdHRlcjoge1xyXG4gICAgICAgIGhhbmRsZTogJ0BwYXJ0aHBhcmVraHgnLFxyXG4gICAgICAgIHNpdGU6ICdAWHhQYXJ0aHBhcmVraHhYJyxcclxuICAgICAgICBjYXJkVHlwZTogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxyXG4gICAgfSxcclxuXHJcblxyXG59OyJdLCJuYW1lcyI6WyJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3BlbkdyYXBoIiwidHlwZSIsImxvY2FsZSIsInVybCIsInNpdGVOYW1lIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ0d2l0dGVyIiwiaGFuZGxlIiwic2l0ZSIsImNhcmRUeXBlIiwiYWRkaXRpb25hbE1ldGFUYWdzIiwibmFtZSIsImNvbnRlbnQiLCJjYW5vbmljYWwiLCJzaXRlTWFwIiwiYWRkaXRpb25hbExpbmtUYWdzIiwicmVsIiwiaHJlZiIsIlFyU2VvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./next-seo.config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_EyeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/EyeContext */ \"./context/EyeContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next-seo.config */ \"./next-seo.config.js\");\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_EyeContext__WEBPACK_IMPORTED_MODULE_2__.EyeState, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\code\\\\xxparthparekhxx\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\code\\\\xxparthparekhxx\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDVztBQUNsQjtBQUNNO0FBQ3JCLFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBRUUsOERBQUNKLHlEQUFRQTtrQkFDUCw0RUFBQ0c7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3h4cGFydGhwYXJla2h4eC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXHJcbmltcG9ydCB7IEV5ZVN0YXRlIH0gZnJvbSAnLi4vY29udGV4dC9FeWVDb250ZXh0J1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IFNFTyBmcm9tIFwiLi4vbmV4dC1zZW8uY29uZmlnXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPEV5ZVN0YXRlPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0V5ZVN0YXRlPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiRGVmYXVsdFNlbyIsIkV5ZVN0YXRlIiwiU0VPIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();