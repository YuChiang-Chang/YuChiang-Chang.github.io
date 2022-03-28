/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n{\n  // class hover {\n  //     hover(){\n  //         openNavBtn.addEventListener(\"mouseover\", this.mouseover);\n  //         openNavBtn.addEventListener(\"mouseout\", this.mouseout);\n  //     }\n  //     mouseover() {\n  //         openNavBtn.style.backgroundColor = \"#000000\";\n  //     }\n  //     mouseout() {\n  //         openNavBtn.style.backgroundColor = \"#222222\";\n  //     }\n  // }\n  var hover = function hover() {\n    openNavBtn.addEventListener(\"mouseover\", function () {\n      openNavBtn.style.backgroundColor = \"#000000\";\n    });\n    openNavBtn.addEventListener(\"mouseout\", function () {\n      openNavBtn.style.backgroundColor = \"#222222\";\n    });\n  };\n\n  var CloseNav = function CloseNav() {\n    SideNav.style.left = \"100%\";\n    SideNav.style.width = \"0\";\n    content.style.marginRight = \"0\";\n    openNavBtn.style.backgroundColor = \"#222222\"; // openNavBtn.addEventListener(\"mouseover\", hover.mouseover);\n    // openNavBtn.addEventListener(\"mouseout\", hover.mouseout);\n\n    hover();\n  }; // if (window.matchMedia(\"(max-width: 1024px)\") {\n  // }\n  // if(window.innerWidth <= 1024){\n  //     console.log(\"close\")\n  //     CloseNav();\n  // }\n  //「關於我」按鈕\n\n\n  var openNavBtn = document.getElementById(\"open-right-navbtn\");\n  var closeNavBtn = document.getElementById(\"close-right-navbtn\");\n  var SideNav = document.getElementById(\"about\");\n  var aboutContent = document.getElementById(\"about-content\");\n  var navWidth = \"20%\";\n  var content = document.getElementById(\"content\");\n  openNavBtn.addEventListener(\"click\", function OpenNav() {\n    //判斷螢幕大小是否符合\n    if (window.innerWidth <= 1024) {\n      CloseNav();\n    } else {\n      // 判斷「關於我」寬度\n      if (SideNav.style.width != navWidth) {\n        // SideNav.style.left = \"80%\";\n        SideNav.style.setProperty(\"left\", \"calc(50% + 30%)\");\n        SideNav.style.width = navWidth;\n        content.style.marginRight = navWidth;\n        openNavBtn.style.backgroundColor = \"#000000\";\n        aboutContent.style.display = \"none\";\n        setTimeout(function () {\n          aboutContent.style.display = \"inherit\";\n        }, 500);\n      } else {\n        aboutContent.style.display = \"none\";\n        setTimeout(function () {\n          aboutContent.style.display = \"inherit\";\n        }, 500);\n        CloseNav();\n      }\n    }\n  }); //導覽列「關於我」按鈕\n  //關於我左上的差號按鈕\n\n  closeNavBtn.addEventListener(\"click\", CloseNav);\n}\n\n//# sourceURL=webpack://yuchiang-chang.github.io-webpack/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yuchiang-chang.github.io-webpack/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;