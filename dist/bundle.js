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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n@media (max-width: 450px) {\\n  * {\\n    font-size: 0.95em;\\n  }\\n}\\n\\n#wrapper {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  padding-top: 10px;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n#header {\\n  width: 50vw;\\n  height: 7.5vh;\\n  background-color: white;\\n  border: 2px solid black;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 5px;\\n}\\n@media (max-width: 768px) {\\n  #header {\\n    width: 60vw;\\n    height: 8vh;\\n  }\\n}\\n\\n#countTime {\\n  width: auto;\\n  height: auto;\\n  background-color: gray;\\n  border: 5px solid black;\\n  border-style: outset;\\n  padding: 5px;\\n  font-size: 1.5em;\\n}\\n@media (max-width: 768px) {\\n  #countTime {\\n    font-size: 1em;\\n  }\\n}\\n@media (max-width: 550px) {\\n  #countTime {\\n    font-size: 0.7em;\\n  }\\n}\\n\\n#newGame {\\n  width: auto;\\n  height: auto;\\n  background-color: gray;\\n  border: 5px solid black;\\n  border-style: outset;\\n  padding: 5px;\\n  font-size: 1.5em;\\n  border-style: outset;\\n}\\n@media (max-width: 768px) {\\n  #newGame {\\n    font-size: 1em;\\n  }\\n}\\n@media (max-width: 550px) {\\n  #newGame {\\n    font-size: 0.7em;\\n  }\\n}\\n#newGame:hover {\\n  cursor: pointer;\\n  border-style: inset;\\n  border: 8px solid black;\\n}\\n\\n#countMove {\\n  width: auto;\\n  height: auto;\\n  background-color: gray;\\n  border: 5px solid black;\\n  border-style: outset;\\n  padding: 5px;\\n  font-size: 1.5em;\\n}\\n@media (max-width: 768px) {\\n  #countMove {\\n    font-size: 1em;\\n  }\\n}\\n@media (max-width: 550px) {\\n  #countMove {\\n    font-size: 0.7em;\\n  }\\n}\\n\\n#game-field {\\n  max-width: calc(3.5vw*10);\\n  max-height: calc(3.5vw*10);\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n@media (max-width: 768px) {\\n  #game-field {\\n    max-width: calc(6vw*10);\\n    max-height: calc(6vw*10);\\n  }\\n}\\n#game-field .box {\\n  width: 3.5vw;\\n  height: 3.5vw;\\n  background-color: lightgray;\\n  border: 1px solid darkgray;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 1.5em;\\n  font-weight: bolder;\\n  cursor: pointer;\\n}\\n@media (max-width: 768px) {\\n  #game-field .box {\\n    width: 6vw;\\n    height: 6vw;\\n    box-sizing: border-box;\\n    font-size: 1em;\\n  }\\n}\\n@media (max-width: 550px) {\\n  #game-field .box {\\n    font-size: 0.7em;\\n  }\\n}\\n#game-field .box.creating {\\n  border: 4px solid gray;\\n  border-style: outset;\\n}\\n#game-field .box.creating:hover {\\n  border-style: inset;\\n}\\n#game-field .box.cell-count-1 {\\n  color: rgb(57, 57, 199);\\n}\\n#game-field .box.cell-count-2 {\\n  color: green;\\n}\\n#game-field .box.cell-count-3 {\\n  color: red;\\n}\\n#game-field .box.cell-count-4 {\\n  color: rgb(0, 0, 81);\\n}\\n#game-field .box.cell-count-5 {\\n  color: rgb(74, 12, 12);\\n}\\n#game-field .box.cell-count-6 {\\n  color: rgb(0, 255, 247);\\n}\\n#game-field .box.cell-count-2 {\\n  color: green;\\n}\\n#game-field .box.cell-count-8 {\\n  color: rgb(255, 255, 255);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://miner/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://miner/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://miner/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://miner/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://miner/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://miner/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://miner/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://miner/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://miner/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://miner/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/createCells.js":
/*!************************************!*\
  !*** ./src/scripts/createCells.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cell: () => (/* binding */ Cell),\n/* harmony export */   appElement: () => (/* binding */ appElement),\n/* harmony export */   countTime: () => (/* binding */ countTime),\n/* harmony export */   createCells: () => (/* binding */ createCells),\n/* harmony export */   moveCount: () => (/* binding */ moveCount)\n/* harmony export */ });\n/* harmony import */ var _createMinefield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMinefield */ \"./src/scripts/createMinefield.js\");\n/* harmony import */ var _endOfTheGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endOfTheGame */ \"./src/scripts/endOfTheGame.js\");\n/* harmony import */ var _timeAndMoves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeAndMoves */ \"./src/scripts/timeAndMoves.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"./src/scripts/index.js\");\n\r\n\r\n\r\n\r\n\r\nconst wrapper = document.createElement('div')\r\nwrapper.id = 'wrapper'\r\ndocument.body.appendChild(wrapper)\r\n\r\nconst header = document.createElement('div')\r\nheader.id = 'header'\r\nwrapper.appendChild(header)\r\n\r\nconst appElement = document.createElement('div')\r\nappElement.id = 'game-field'\r\nwrapper.appendChild(appElement)\r\n\r\nconst countTime = document.createElement('div')\r\ncountTime.id = 'countTime'\r\nheader.appendChild(countTime)\r\ncountTime.textContent = \"Time:\" + \" 0\"\r\n\r\nconst newGame = document.createElement('button')\r\nnewGame.id = 'newGame'\r\nheader.appendChild(newGame)\r\nnewGame.textContent = \"New Game\"\r\n\r\nconst countMove = document.createElement('div')\r\ncountMove.id = 'countMove'\r\nheader.appendChild(countMove)\r\ncountMove.textContent = \"Move:\" + \" 0\"\r\n\r\n\r\nappElement.addEventListener('click', () => {\r\n  ;(0,_timeAndMoves__WEBPACK_IMPORTED_MODULE_2__.startTimer)();\r\n});\r\n\r\nclass Cell {\r\n  constructor(isBomb, coordinates) {\r\n    this.isBomb = isBomb\r\n    this.coordinates = coordinates\r\n    ;(0,_endOfTheGame__WEBPACK_IMPORTED_MODULE_1__.winGame)()\r\n  }\r\n\r\n  setCellValue(value) {\r\n    this.value = value\r\n  }\r\n\r\n  setCellType() {\r\n    if (this.isBomb) {\r\n      this.setCellValue('💣');\r\n      return\r\n    }\r\n\r\n    const allCellsNearby = (0,_createMinefield__WEBPACK_IMPORTED_MODULE_0__.findBombsNearby)(this.coordinates);\r\n    let bombs = 0;\r\n\r\n    allCellsNearby.forEach(element => {\r\n      if (element === 1 || element.isBomb) {\r\n        bombs++\r\n      }\r\n    });\r\n\r\n    if (bombs) {\r\n      this.setCellValue(bombs)\r\n    }\r\n  }\r\n\r\n  showCellvalue() {\r\n    this.cellElement.innerHTML = this.value || ''\r\n  }\r\n\r\n  setFlag(isFlagged) {\r\n    this.isFlagged = isFlagged\r\n    this.cellElement.innerHTML = isFlagged ? \"🚩\" : \"\"\r\n  }\r\n\r\n  static openedNonBombCount = 0;\r\n\r\n  open() {\r\n    this.isOppened = true\r\n    this.cellElement.classList.remove('creating')\r\n    this.showCellvalue()\r\n\r\n    if (!this.isBomb) {\r\n      Cell.openedNonBombCount++;\r\n      (0,_endOfTheGame__WEBPACK_IMPORTED_MODULE_1__.winGame)();\r\n    }\r\n  }\r\n\r\n  cellClick(allowOpenNumber = false) {\r\n    if (this.isFlagged) {\r\n      this.setFlag(false);\r\n      return\r\n    }\r\n    if (!this.value && !this.isOppened) {\r\n      this.open()\r\n      const allCellsNearby = (0,_createMinefield__WEBPACK_IMPORTED_MODULE_0__.findBombsNearby)(this.coordinates);\r\n      allCellsNearby.forEach(element => {\r\n        if (!element.isOppened) {\r\n          element.cellClick(true)\r\n        }\r\n      });\r\n    } else if ((this.value && allowOpenNumber) || typeof this.value === 'number') {\r\n      this.open()\r\n      ;(0,_endOfTheGame__WEBPACK_IMPORTED_MODULE_1__.winGame)()\r\n    } else if (this.isBomb) {\r\n      (0,_endOfTheGame__WEBPACK_IMPORTED_MODULE_1__.loseGame)()\r\n    }\r\n    this.showCellvalue()\r\n  }\r\n\r\n  createCellOnArea() {\r\n    const cellElement = document.createElement('div')\r\n    cellElement.classList.add('box')\r\n    cellElement.classList.add('creating')\r\n    cellElement.addEventListener('click', handleClick);\r\n    if (this.value) {\r\n      cellElement.classList.add(`cell-count-${this.value}`)\r\n    }\r\n    this.cellElement = cellElement\r\n    this.cellElement.addEventListener('click', () => this.cellClick())\r\n    this.cellElement.addEventListener('contextmenu', (e) => {\r\n      e.preventDefault()\r\n      this.setFlag(true)\r\n    })\r\n    appElement.appendChild(cellElement)\r\n  }\r\n\r\n\r\n}\r\n\r\nfunction createCells(isBomb, coordinates) {\r\n  const newCell = new Cell(isBomb, coordinates)\r\n\r\n  newCell.setCellType()\r\n  newCell.createCellOnArea()\r\n\r\n  return newCell\r\n}\r\n\r\n\r\n\r\nlet moveCount = 0;\r\n\r\nfunction handleClick() {\r\n  moveCount++;\r\n  countMove.textContent = \"Move: \" + moveCount;\r\n}\r\n\r\nnewGame.addEventListener('click', () => {\r\n  (0,___WEBPACK_IMPORTED_MODULE_3__.start)()\r\n})\r\n\r\n\n\n//# sourceURL=webpack://miner/./src/scripts/createCells.js?");

/***/ }),

/***/ "./src/scripts/createMinefield.js":
/*!****************************************!*\
  !*** ./src/scripts/createMinefield.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMinefield: () => (/* binding */ createMinefield),\n/* harmony export */   findBombsNearby: () => (/* binding */ findBombsNearby),\n/* harmony export */   matrix: () => (/* binding */ matrix),\n/* harmony export */   openAllCells: () => (/* binding */ openAllCells)\n/* harmony export */ });\n/* harmony import */ var _createCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCells */ \"./src/scripts/createCells.js\");\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random */ \"./src/scripts/random.js\");\n/* harmony import */ var _endOfTheGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endOfTheGame */ \"./src/scripts/endOfTheGame.js\");\n\r\n\r\n\r\n\r\nlet matrix = []\r\n\r\nfunction addBombs(bombs) {\r\n\r\n  let currentBombCount = bombs\r\n\r\n  const matrixHeight = matrix.length\r\n  const matrixWidth = matrix[0].length\r\n\r\n  while (currentBombCount) {\r\n    const x = (0,_random__WEBPACK_IMPORTED_MODULE_1__.random)(0, matrixWidth - 1)\r\n    const y = (0,_random__WEBPACK_IMPORTED_MODULE_1__.random)(0, matrixHeight - 1)\r\n\r\n    const matrixElement = matrix[y][x]\r\n\r\n    if (!matrixElement) {\r\n      matrix[y][x] = 1\r\n      currentBombCount--\r\n\r\n    }\r\n  }\r\n}\r\n\r\nfunction findBombsNearby(coordinates) {\r\n  const { x, y } = coordinates\r\n\r\n  const n1 = matrix[y - 1]?.[x]\r\n  const n2 = matrix[y - 1]?.[x + 1]\r\n  const n3 = matrix[y]?.[x + 1]\r\n  const n4 = matrix[y + 1]?.[x + 1]\r\n  const n5 = matrix[y + 1]?.[x]\r\n  const n6 = matrix[y + 1]?.[x - 1]\r\n  const n7 = matrix[y]?.[x - 1]\r\n  const n8 = matrix[y - 1]?.[x - 1]\r\n\r\n  return [\r\n    n1,\r\n    n2,\r\n    n3,\r\n    n4,\r\n    n5,\r\n    n6,\r\n    n7,\r\n    n8,\r\n  ].filter(item => typeof item !== 'undefined')\r\n\r\n}\r\n\r\nfunction openAllCells() {\r\n  matrix.forEach((matrixLine) => {\r\n    matrixLine.forEach((cell) => {\r\n      if (cell.isBomb) {\r\n        cell.open()\r\n      }\r\n    })\r\n  })\r\n  ;(0,_endOfTheGame__WEBPACK_IMPORTED_MODULE_2__.winGame)()\r\n}\r\n\r\nfunction createMinefield(width = 10, height = 10, bombs = 10) {\r\n  matrix = Array.from({ length: height }, () => Array.from({ length: width }, () => 0));\r\n\r\n  addBombs(bombs)\r\n\r\n  matrix.forEach((matrixLine, y) => {\r\n    matrixLine.forEach((matrixElement, x) => {\r\n      const newCell = (0,_createCells__WEBPACK_IMPORTED_MODULE_0__.createCells)(Boolean(matrixElement), { x, y })\r\n\r\n      matrix[y][x] = newCell;\r\n    })\r\n  })\r\n}\n\n//# sourceURL=webpack://miner/./src/scripts/createMinefield.js?");

/***/ }),

/***/ "./src/scripts/endOfTheGame.js":
/*!*************************************!*\
  !*** ./src/scripts/endOfTheGame.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loseGame: () => (/* binding */ loseGame),\n/* harmony export */   winGame: () => (/* binding */ winGame)\n/* harmony export */ });\n/* harmony import */ var _createMinefield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMinefield */ \"./src/scripts/createMinefield.js\");\n/* harmony import */ var _createCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCells */ \"./src/scripts/createCells.js\");\n/* harmony import */ var _timeAndMoves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeAndMoves */ \"./src/scripts/timeAndMoves.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loseGame() {\r\n  (0,_createMinefield__WEBPACK_IMPORTED_MODULE_0__.openAllCells)()\r\n  setTimeout(function () {\r\n    var result = confirm(\"Game over. Try again\");\r\n\r\n    if (result === true) {\r\n      location.reload();\r\n    }\r\n  }, 500);\r\n}\r\n\r\nfunction winGame() {\r\n  const nonBombCells = _createMinefield__WEBPACK_IMPORTED_MODULE_0__.matrix.flat().filter(cell => !cell.isBomb);\r\n  if (_createCells__WEBPACK_IMPORTED_MODULE_1__.Cell.openedNonBombCount === nonBombCells.length) {\r\n    setTimeout(function () {\r\n      alert(\"Hooray! You found all mines in \" + _timeAndMoves__WEBPACK_IMPORTED_MODULE_2__.timer + \" seconds and \" + _createCells__WEBPACK_IMPORTED_MODULE_1__.moveCount + \"moves!\");\r\n      location.reload();\r\n    }, 500);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://miner/./src/scripts/endOfTheGame.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   start: () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _createMinefield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMinefield */ \"./src/scripts/createMinefield.js\");\n/* harmony import */ var _createCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCells */ \"./src/scripts/createCells.js\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n\r\n\r\n\r\n\r\nfunction start() {\r\n  _createCells__WEBPACK_IMPORTED_MODULE_1__.appElement.innerHTML = ''\r\n  ;(0,_createMinefield__WEBPACK_IMPORTED_MODULE_0__.createMinefield)();\r\n}\r\n\r\nstart()\r\n\n\n//# sourceURL=webpack://miner/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/random.js":
/*!*******************************!*\
  !*** ./src/scripts/random.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   random: () => (/* binding */ random)\n/* harmony export */ });\nfunction random(min, max) {\r\n  min = Math.ceil(min);\r\n  max = Math.floor(max);\r\n  return Math.floor(Math.random() * (max - min + 1)) + min;\r\n}\n\n//# sourceURL=webpack://miner/./src/scripts/random.js?");

/***/ }),

/***/ "./src/scripts/timeAndMoves.js":
/*!*************************************!*\
  !*** ./src/scripts/timeAndMoves.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startTimer: () => (/* binding */ startTimer),\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _createCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCells */ \"./src/scripts/createCells.js\");\n\r\n\r\nlet intervalId;\r\nlet timer = 0;\r\n\r\nfunction startTimer() {\r\n  if (!intervalId) {\r\n    intervalId = setInterval(() => {\r\n      timer++;\r\n      _createCells__WEBPACK_IMPORTED_MODULE_0__.countTime.textContent = \"Time: \" + timer;\r\n    }, 1000);\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://miner/./src/scripts/timeAndMoves.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;