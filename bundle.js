/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Kanit-Regular.ttf */ \"./src/assets/fonts/Kanit-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Kanit-Bold.ttf */ \"./src/assets/fonts/Kanit-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Kanit-Light.ttf */ \"./src/assets/fonts/Kanit-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --dark-blue: #0F172A;\n    --light-blue: #0A88FF;\n    --gray: #F5F7F9;\n    --low-priority: #34D399;\n    --med-priority: #F59E0B;\n    --high-priority: #DC2626;\n}\n\n@font-face {\n    font-family: 'Kanit';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}),\n}\n@font-face {\n    font-family: 'Kanit';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    font-weight: bold;\n}\n@font-face {\n    font-family: 'Kanit';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    font-weight: light;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Kanit';\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr 1.5fr;\n    column-gap: 20px;\n    align-items: center;\n    height: 100vh;\n    background-color: var(--dark-blue);\n    padding: 0 15px;\n}\n\nbody > section {\n    height: 95vh;\n    overflow: auto;\n    background-color: #FFF;\n    border-radius: 10px;\n    padding: 20px;\n}\n\nh1 {\n    font-size: 1.8rem;\n}\n\n/* @media screen and (max-width: 1200px) {\n    body {\n        display: flex;\n        flex-direction: column;\n    }\n} */\n\n/*\n    SIDEBAR\n*/\n\n#sidebar h1 {\n    font-size: 2rem;\n}\n\n.blue {\n    color: var(--light-blue);\n}\n\n.view-item {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    cursor: pointer;\n    margin-top: 20px;\n    font-size: 1.4rem;\n}\n\n.view-item:hover {\n    color: var(--light-blue);\n}\n\n.icon {\n    aspect-ratio: 1 / 1;\n    height: 20px;\n}\n\n.num-tasks {\n    background-color: var(--gray);\n    color: var(--light-blue);\n    font-size: 1rem;\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.projects-menu {\n    margin-top: 50px;\n}\n\n.flex-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-btn {\n    background: none;\n    color: var(--light-blue);\n    cursor: pointer;\n}\n\n.add-project-btn {\n    font-size: 40px;\n    border: none;\n    padding-bottom: 8px;\n    transition: transform .5s ease-in-out;\n}\n\n.add-project-btn:hover {\n    transform: rotate(180deg)\n}\n\n/*\n    TASKS\n*/\n\n.completed {\n    text-decoration: line-through;\n}\n\n#tasks span {\n    font-style: italic;\n}\n\n.add-task-btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid var(--light-blue);\n    font-size: 1rem;\n    height: 2rem;\n    border-radius: 2rem;\n    padding: 0.3rem 0.6rem;\n    white-space: nowrap;\n}\n\n.add-task-btn:hover {\n    border-width: 3px;\n}\n\n.task-list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 1rem;\n    padding-top: 1rem;\n}\n\n.task {\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n    position: relative;\n    margin-bottom: 1.5rem;\n}\n\n.task input[type=\"checkbox\"] {\n    position: absolute;\n    top: 1rem;\n    right: 2rem;\n    width: 1.5rem;\n    height: 1.5rem;\n    accent-color: var(--light-blue);\n    vertical-align: middle;\n    background-color: #FFF;\n    cursor: pointer;\n}\n\n.tagged-project {\n    background-color: rgba(255, 255, 255, 0.3);\n    width: max-content;\n    padding: 0.25rem 0.5rem;\n    margin: 1rem 0 0.5rem 0;\n    border-radius: 2rem\n}\n\n.date {\n    color: var(--gray);\n    font-size: 14px;\n    font-style: italic;\n}\n\n.icons {\n    position: absolute;\n    bottom: 1rem;\n    right: 1rem;\n    display: flex;\n    gap: 10px;\n}\n\n.icon {\n    cursor: pointer;\n}\n\n.low {\n    background-color: var(--low-priority);\n}\n\n.med {\n    background-color: var(--med-priority);\n}\n\n.high {\n    background-color: var(--high-priority);\n}\n\n/*\n    NOTES\n*/\n\n.notes-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: 0 1rem;\n}\n\n.note {\n    background-color: var(--dark-blue);\n    padding: 1rem 1.5rem;\n    margin-bottom: 2rem;\n    color: #FFF;\n    border-radius: 10px;\n    position: relative;\n}\n\n.white {\n    filter: invert(100%) sepia(0%) saturate(24%) hue-rotate(114deg) brightness(108%) contrast(108%);\n}\n\n/*\n    DIALOG\n*/\n\ndialog {\n    margin: 0 auto;\n    border: none;\n    border-radius: 10px;\n    padding: 1.5rem;\n    width: 20vw;\n    position: absolute;\n    left: 25%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n.dialog-button {\n    margin: 0.75rem 1rem 0 1rem;\n    width: 60px;\n    height: 30px;\n    font-weight: 500;\n    font-size: 12px;\n    border-radius: 10px;\n    border: none;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.create {\n    background-color: var(--light-blue);\n    color: #FFF;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, networkInterfaces, mac, os; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports[\"default\"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Element: () => (/* binding */ Element),\n/* harmony export */   Librarian: () => (/* binding */ Librarian),\n/* harmony export */   Note: () => (/* binding */ Note),\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/isWithinInterval.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/compareAsc.mjs\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_edit_button_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/edit-button.svg */ \"./src/assets/images/edit-button.svg\");\n/* harmony import */ var _assets_images_trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/trash.svg */ \"./src/assets/images/trash.svg\");\n/* harmony import */ var _helpers_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/date */ \"./src/helpers/date.js\");\n\n\n\n\n\n\n\nclass Task {\n    constructor (title, dueDate, priority, project, completed=false) {\n        this.id = uniqid__WEBPACK_IMPORTED_MODULE_1___default()();\n        this.title = title;\n        this.date = (0,_helpers_date__WEBPACK_IMPORTED_MODULE_4__.convertDateToStringFormat)(new Date(dueDate));\n        this.priority = priority;\n        this.project = project;\n        this.completed = completed;\n    }\n\n    priorityText() {\n        if (this.priority == 0) {\n            return 'low';\n        }\n        else if (this.priority == 1) {\n            return 'med';\n        }\n        else {\n            return 'high';\n        }\n    }\n\n    toggleComplete(e) {\n        this.completed = !this.completed;\n\n        var editTask = document.querySelector('.edit-task');\n        var deleteTask = document.querySelector('.delete-task');\n        \n        var parentNode = document.getElementById(e.target.parentNode.id);\n        var editTask = parentNode.querySelector('.edit-task');\n        var deleteTask = parentNode.querySelector('.delete-task');\n        var nodes = parentNode.childNodes\n\n        for (var i = 0; i < nodes.length; i++) {\n            nodes[i].classList.toggle('completed');\n        }\n\n        if (this.completed) {\n            editTask.style['pointer-events'] = \"none\";\n            deleteTask.style['pointer-events'] = \"none\";\n        } \n        else {\n            editTask.style['pointer-events'] = \"auto\";\n            deleteTask.style['pointer-events'] = \"auto\";\n        }\n    }\n\n    updateTask(title, dueDate, priority, project) {\n        this.title = title;\n        this.date = (0,_helpers_date__WEBPACK_IMPORTED_MODULE_4__.convertDateToStringFormat)(new Date(dueDate));\n        this.priority = priority;\n        this.project = project;\n    }\n\n    buildTaskHtml() {\n        const taskHtml = new Element('div');\n\n        taskHtml.setAttributes({class: `task ${this.priorityText()}`, id: this.id})\n\n        taskHtml\n        .addChild(new Element('h3').setTextContent(this.title))\n        .addChild(new Element('div').setTextContent(this.project).setAttributes({class: 'tagged-project'}))\n        .addChild(new Element('div').setTextContent(this.date).setAttributes({class: 'date'}))\n        .addChild(new Element('div').setAttributes({class: 'icons'})\n            .addChild(new Element('img')\n                .setAttributes({class: 'icon edit-task', src: _assets_images_edit_button_svg__WEBPACK_IMPORTED_MODULE_2__})\n                .appendEventListener('click', ___WEBPACK_IMPORTED_MODULE_0__.editTaskHandler))\n            .addChild(new Element('img')\n                .setAttributes({class: 'icon delete-task', src: _assets_images_trash_svg__WEBPACK_IMPORTED_MODULE_3__})\n                .appendEventListener('click', ___WEBPACK_IMPORTED_MODULE_0__.deleteTaskHandler))\n        )\n        .addChild(new Element('input').setAttributes({type: 'checkbox'}).appendEventListener('click', this.toggleComplete))\n\n        return taskHtml.buildElement();\n\n        // <div class=\"task ${this.priority}\">\n        //     <h3>${this.title}</h3>\n        //     <div class=\"tagged-project\">PERSONAL</div>\n        //     <div class=\"date\">${this.date}</div>\n        //     <div class=\"icons\">\n        //         <img class=\"icon edit-task\" src=\"\">\n        //         <img class=\"icon delete-task\" src=\"\">\n        //     </div>\n        //     <input type=\"checkbox\">\n        // </div>\n    }\n}\n\nclass Project {\n    constructor (name) {\n        this.name = name;\n        this.tasks = [];\n    }\n\n    addTask(task) {\n        this.tasks.push(task);\n    }\n\n    deleteTask(task) {\n        const index = this.tasks.indexOf(task);\n        if (index > -1) {\n            this.tasks.splice(index, 1);\n        }\n    }\n\n    findTask(id) {\n        return this.tasks.find((task) => task.id == id);\n    }\n\n    filterTasks(interval) {\n        return this.tasks.filter((task) => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isWithinInterval)(new Date(task.date), interval))\n    }\n\n    // Method sorts tasks by priority, then by date\n    sortTasks() {\n        this.tasks.sort((taskA, taskB) => {\n            if (Number(taskA.priority) < Number(taskB.priority)) return 1; \n            if (Number(taskA.priority) > Number(taskB.priority)) return -1; \n\n            return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.compareAsc)(taskA.date, taskB.date);\n        })\n    }\n}\n\nclass Note {\n    constructor (content) {\n        this.id = uniqid__WEBPACK_IMPORTED_MODULE_1___default()();\n        this.content = content;\n        this.date = (0,_helpers_date__WEBPACK_IMPORTED_MODULE_4__.convertDateToStringFormat)(new Date());\n    }\n\n    buildNoteHtml() {\n        const noteHtml = new Element('div').setAttributes({class: 'note', id: this.id})\n\n        noteHtml\n        .addChild(new Element('div').setAttributes({class: 'note-text'}).setTextContent(this.content))\n        .addChild(new Element('div').setAttributes({class: 'date'}).setTextContent(this.date))\n        .addChild(new Element('div').setAttributes({class: 'icons'})\n            .addChild(new Element('img')\n                .setAttributes({class: 'icon edit-task white', src: _assets_images_edit_button_svg__WEBPACK_IMPORTED_MODULE_2__})\n                .appendEventListener('click', ___WEBPACK_IMPORTED_MODULE_0__.editNoteHandler))\n            .addChild(new Element('img')\n                .setAttributes({class: 'icon delete-task white', src: _assets_images_trash_svg__WEBPACK_IMPORTED_MODULE_3__})\n                .appendEventListener('click', ___WEBPACK_IMPORTED_MODULE_0__.deleteNoteHandler))\n        )\n\n        return noteHtml.buildElement();\n\n        \n        //   <div class=\"note\">\n        //       <div class=\"note-text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>\n        //       <div class=\"date\">30/05/2024</div>\n        //       <div class=\"icons\">\n        //           <img class=\"icon edit-task\" src=\"\">\n        //           <img class=\"icon delete-task\" src=\"\">\n        //       </div>\n        //   </div>\n        \n    }\n}\n\nclass Librarian {\n    static projects = [];\n\n    static getAllProjects() {\n        return Librarian.projects;\n    };\n\n    static addProject(project) {\n        Librarian.projects.push(project);\n    }\n\n    static deleteProject(project) {\n        Librarian.projects.splice(Librarian.projects.indexOf(project), 1);\n    }\n\n    static notes = [];\n\n    static getAllNotes() {\n        return Librarian.notes;\n    }\n\n    static addNote(note) {\n        Librarian.notes.push(note);\n    }\n\n    static deleteNote(note) {\n        Librarian.notes.splice(Librarian.notes.indexOf(note), 1);\n    }\n\n    static findNote(id) {\n        return Librarian.notes.find((note) => note.id === id);\n    }\n};\n\nclass Element {\n    constructor (type) {\n        this.elementType = type;\n        this.attributes = {};\n        this.children = [];\n        this.eventListeners = {};\n    }\n\n    buildElement() {\n        var element = document.createElement(this.elementType);\n\n        // Assign attributes to element\n        for (const att in this.attributes) {\n            element.setAttribute(att, this.attributes[att]);\n        }\n\n        // Assign event listeners to element\n        for (const ev in this.eventListeners) {\n           this.eventListeners[ev].forEach((fn) => {\n                element.addEventListener(ev, fn);\n            })\n        }\n\n        // Assign children to element\n        if (this.text === undefined) {\n            for (const child of this.children) {\n                element.appendChild(child.buildElement());\n            }\n        } else {\n            const realText = document.createTextNode(this.text);\n            element.appendChild(realText);\n        }\n\n\n        return element;\n    }\n\n    setAttributes(object) {\n        Object.assign(this.attributes, object);\n        return this;\n    }\n\n    addChild(element) {\n        this.text = undefined;\n        this.children.push(element);\n        return this;\n    }\n\n    setTextContent(text) {\n        this.children = [];\n        this.text = text;\n        return this;\n    }\n\n    appendEventListener(event, callbackFn) {\n        if (this.eventListeners[event]) {\n            this.eventListeners[event].push(callbackFn);\n        } else {\n            this.eventListeners[event] = [callbackFn];\n        }\n        return this;\n    }\n}\n\n//# sourceURL=webpack://top-todolist/./src/classes.js?");

/***/ }),

/***/ "./src/helpers/date.js":
/*!*****************************!*\
  !*** ./src/helpers/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertDateToStringFormat: () => (/* binding */ convertDateToStringFormat),\n/* harmony export */   convertStringToDate: () => (/* binding */ convertStringToDate),\n/* harmony export */   convertStringToFormDateFormat: () => (/* binding */ convertStringToFormDateFormat)\n/* harmony export */ });\nfunction convertDateToStringFormat(date) {\n    const options = {\n        weekday: 'short',\n        year: 'numeric',\n        month: 'long',\n        day: 'numeric',\n        };\n    return date.toLocaleString(undefined, options);\n}\n\nfunction convertStringToFormDateFormat(str) {\n    const date = new Date(str);\n\n    const year = date.getFullYear();\n\n    let month = date.getMonth() + 1; // month is returned as an index position in an array, so index is always one less than actual month\n    month = month.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });\n\n    let day = date.getDate();\n    day = day.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });\n\n    return `${year}-${month}-${day}`;\n}\n\nfunction convertStringToDate(str) {\n    return new Date(str);\n}\n\n//# sourceURL=webpack://top-todolist/./src/helpers/date.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteNoteHandler: () => (/* binding */ deleteNoteHandler),\n/* harmony export */   deleteTaskHandler: () => (/* binding */ deleteTaskHandler),\n/* harmony export */   editNoteHandler: () => (/* binding */ editNoteHandler),\n/* harmony export */   editTaskHandler: () => (/* binding */ editTaskHandler),\n/* harmony export */   filterHandler: () => (/* binding */ filterHandler)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/sidebar.js */ \"./src/ui/sidebar.js\");\n/* harmony import */ var _ui_taskUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/taskUI.js */ \"./src/ui/taskUI.js\");\n/* harmony import */ var _ui_notesUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/notesUI.js */ \"./src/ui/notesUI.js\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes.js */ \"./src/classes.js\");\n/* harmony import */ var _ui_dialogs_taskDialog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/dialogs/taskDialog.js */ \"./src/ui/dialogs/taskDialog.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/startOfToday.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/addDays.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/endOfToday.mjs\");\n/* harmony import */ var _ui_dialogs_noteDialog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/dialogs/noteDialog.js */ \"./src/ui/dialogs/noteDialog.js\");\n\n\n\n\n\n\n\n\n\nfunction init() {\n    const initialTasks = [\n        new _classes_js__WEBPACK_IMPORTED_MODULE_4__.Task('Bring dog out for walk', (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfToday)(), 0, 'Personal'),\n        new _classes_js__WEBPACK_IMPORTED_MODULE_4__.Task('Do coding assignment', (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfToday)(), 1, 'Personal'),\n        new _classes_js__WEBPACK_IMPORTED_MODULE_4__.Task('Apply for full time job', (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.addDays)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfToday)(), 7), 2, 'Personal'),\n        new _classes_js__WEBPACK_IMPORTED_MODULE_4__.Task('Buy coffin', (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.addDays)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfToday)(), 20000), 0, 'Personal'),\n        new _classes_js__WEBPACK_IMPORTED_MODULE_4__.Task('Haircut', (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfToday)(), 0, 'Personal'),\n        new _classes_js__WEBPACK_IMPORTED_MODULE_4__.Task('Pack bags for trip', (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfToday)(), 2, 'Personal')\n    ];\n\n    const initialNotes = [\n        new _classes_js__WEBPACK_IMPORTED_MODULE_4__.Note(\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\")\n    ]\n\n    const initialProject = new _classes_js__WEBPACK_IMPORTED_MODULE_4__.Project('Personal');\n    _classes_js__WEBPACK_IMPORTED_MODULE_4__.Librarian.addProject(initialProject);\n    initialProject.tasks.push(...initialTasks);\n    initialProject.sortTasks();\n\n    _classes_js__WEBPACK_IMPORTED_MODULE_4__.Librarian.notes.push(...initialNotes);\n\n    (0,_ui_sidebar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    (0,_ui_taskUI_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(initialProject.tasks, initialProject.name);\n    (0,_ui_notesUI_js__WEBPACK_IMPORTED_MODULE_3__.renderNotes)();\n}\n\nfunction deleteTaskHandler(e) {\n    const taskId = e.target.parentNode.parentNode.id;\n    const projectsArray = _classes_js__WEBPACK_IMPORTED_MODULE_4__.Librarian.getAllProjects();\n    projectsArray.every((project) => {\n        const targetTask = project.findTask(taskId);\n        if (targetTask !== undefined) {\n            project.deleteTask(targetTask);\n            (0,_ui_sidebar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            (0,_ui_taskUI_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(project.tasks, project.name);\n            return false; // break out of loop\n        }\n        return true; // continue\n    })\n}\n\nfunction editTaskHandler(e) {\n    const taskId = e.target.parentNode.parentNode.id;\n    const projectsArray = _classes_js__WEBPACK_IMPORTED_MODULE_4__.Librarian.getAllProjects();\n    projectsArray.every((project) => {\n        const targetTask = project.findTask(taskId);\n        if (targetTask !== undefined) {\n            (0,_ui_dialogs_taskDialog_js__WEBPACK_IMPORTED_MODULE_5__.openPreFilledTaskDialog)(targetTask);\n            return false; // break out of loop\n        }\n        return true; // continue\n    })\n}\n\nfunction deleteNoteHandler(e) {\n    const noteId = e.target.parentNode.parentNode.id;\n    _classes_js__WEBPACK_IMPORTED_MODULE_4__.Librarian.deleteNote(_classes_js__WEBPACK_IMPORTED_MODULE_4__.Librarian.findNote(noteId));\n    (0,_ui_notesUI_js__WEBPACK_IMPORTED_MODULE_3__.renderNotes)();\n}\n\nfunction editNoteHandler(e) {\n    const noteId = e.target.parentNode.parentNode.id;\n    const noteToEdit = _classes_js__WEBPACK_IMPORTED_MODULE_4__.Librarian.findNote(noteId);\n    (0,_ui_dialogs_noteDialog_js__WEBPACK_IMPORTED_MODULE_6__.openFilledNoteDialog)(noteToEdit);\n}                                                                                       \n\nfunction filterHandler(type) {\n    const tempProject = new _classes_js__WEBPACK_IMPORTED_MODULE_4__.Project('Temp');\n    let interval = {};\n\n    if (type === 'All') {\n        _classes_js__WEBPACK_IMPORTED_MODULE_4__.Librarian.projects.forEach((project) => tempProject.tasks.push(...project.tasks));\n        tempProject.sortTasks();\n        (0,_ui_taskUI_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(tempProject.tasks, 'All');\n        return;\n    } \n    else {\n        if (type === 'Today') {\n            interval = {\n                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfToday)(),\n                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfToday)()\n            }\n        } \n        else if (type === 'Next 7 Days') {\n            interval = {\n                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfToday)(),\n                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.addDays)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfToday)(), 7)\n            }\n        } \n\n        _classes_js__WEBPACK_IMPORTED_MODULE_4__.Librarian.projects.forEach((project) => {\n            tempProject.tasks.push(...project.filterTasks(interval))\n        });\n        \n        tempProject.sortTasks();\n        (0,_ui_taskUI_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(tempProject.tasks, type);\n    } \n}\n\ninit();\n\n//# sourceURL=webpack://top-todolist/./src/index.js?");

/***/ }),

/***/ "./src/ui/dialogs/noteDialog.js":
/*!**************************************!*\
  !*** ./src/ui/dialogs/noteDialog.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openFilledNoteDialog: () => (/* binding */ openFilledNoteDialog),\n/* harmony export */   openNoteDialog: () => (/* binding */ openNoteDialog)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes */ \"./src/classes.js\");\n/* harmony import */ var _notesUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notesUI */ \"./src/ui/notesUI.js\");\n/* harmony import */ var _helpers_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/date */ \"./src/helpers/date.js\");\n\n\n\n\nfunction openNoteDialog() {\n    buildNoteDialogHtml();\n\n    const noteModal = document.getElementById('note-dialog');\n    noteModal.showModal();\n}\n\nfunction openFilledNoteDialog(note) {\n    buildNoteDialogHtml(note);\n\n    const noteModal = document.getElementById('note-dialog');\n    noteModal.showModal();\n\n    document.querySelector('.note-dialog-text').value = note.content;\n}\n\nfunction closeNoteDialog() {\n    var noteText = document.querySelector('.note-dialog-text');\n    noteText.innerHTML = '';\n\n    const noteModal = document.getElementById('note-dialog');\n    noteModal.close();\n    noteModal.remove();\n}\n\nfunction submitNoteDialog(note) {\n    var noteText = document.querySelector('.note-dialog-text').value;\n\n    if (note === null) {\n        var newNote = new _classes__WEBPACK_IMPORTED_MODULE_0__.Note(noteText);\n\n        _classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.addNote(newNote);\n    }\n    else {\n        var noteToEdit = _classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.findNote(note.id);\n        noteToEdit.content = noteText;\n        noteToEdit.date = (0,_helpers_date__WEBPACK_IMPORTED_MODULE_2__.convertDateToStringFormat)(new Date());\n    }\n    \n\n    (0,_notesUI__WEBPACK_IMPORTED_MODULE_1__.renderNotes)();\n    closeNoteDialog();\n}\n\nfunction buildNoteDialogHtml(note=null) {\n    const noteDialogHtml = new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('dialog').setAttributes({id: 'note-dialog', class: 'modal'});\n\n    noteDialogHtml\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('h1').setTextContent('New Note'))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('textarea').setAttributes({class: 'note-dialog-text', rows: '4', cols: '30'}))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div').setAttributes({class: 'dialog-btns'})\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('button').setTextContent('Cancel').setAttributes({id: 'cancel-btn', class: 'dialog-button cancel'}).appendEventListener('click', closeNoteDialog))\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('button').setTextContent('Create').setAttributes({id: 'create-btn', class: 'dialog-button create'}).appendEventListener('click', () => submitNoteDialog(note)))\n    );\n\n    document.body.appendChild(noteDialogHtml.buildElement());\n}\n\n//# sourceURL=webpack://top-todolist/./src/ui/dialogs/noteDialog.js?");

/***/ }),

/***/ "./src/ui/dialogs/projectDialog.js":
/*!*****************************************!*\
  !*** ./src/ui/dialogs/projectDialog.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openProjectDialog: () => (/* binding */ openProjectDialog)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes */ \"./src/classes.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar */ \"./src/ui/sidebar.js\");\n/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../taskUI */ \"./src/ui/taskUI.js\");\n\n\n\n\nbuildProjectDialogHtml();\n\nconst projectModal = document.getElementById('project-dialog');\nconst projectText = document.querySelector('.project-dialog-text');\n\nfunction openProjectDialog() {\n    projectModal.showModal();\n}\n\nfunction closeProjectDialog() {\n    projectText.value = \"\";\n    projectModal.close();\n}\n\nfunction submitProjectDialog() {\n    const newProj = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(projectText.value);\n    _classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.addProject(newProj);\n\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_taskUI__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(newProj.tasks, newProj.name);\n    closeProjectDialog();\n}\n\nfunction buildProjectDialogHtml() {\n    const projectDialogHtml = new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('dialog').setAttributes({id: 'project-dialog', class: 'modal'});\n\n    projectDialogHtml\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('h1').setTextContent('New Project'))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('input').setAttributes({placeholder: 'Project name', class: 'project-dialog-text'}))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div').setAttributes({class: 'dialog-btns'})\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('button').setTextContent('Cancel').setAttributes({id: 'cancel-btn', class: 'dialog-button cancel'}).appendEventListener('click', closeProjectDialog))\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('button').setTextContent('Create').setAttributes({id: 'create-btn', class: 'dialog-button create'}).appendEventListener('click', submitProjectDialog))\n    );\n\n    document.body.appendChild(projectDialogHtml.buildElement());\n}\n\n//# sourceURL=webpack://top-todolist/./src/ui/dialogs/projectDialog.js?");

/***/ }),

/***/ "./src/ui/dialogs/taskDialog.js":
/*!**************************************!*\
  !*** ./src/ui/dialogs/taskDialog.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openPreFilledTaskDialog: () => (/* binding */ openPreFilledTaskDialog),\n/* harmony export */   openTaskDialog: () => (/* binding */ openTaskDialog)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes */ \"./src/classes.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar */ \"./src/ui/sidebar.js\");\n/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../taskUI */ \"./src/ui/taskUI.js\");\n/* harmony import */ var _helpers_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/date */ \"./src/helpers/date.js\");\n\n\n\n\n\nfunction openTaskDialog() {\n    buildTaskDialogHtml();\n\n    const taskModal = document.getElementById('task-dialog');\n    taskModal.showModal();\n}\n\nfunction openPreFilledTaskDialog(task) {\n    buildTaskDialogHtml(task);\n\n    document.getElementById('form-title').value = task.title;\n    document.getElementById('form-date').value = (0,_helpers_date__WEBPACK_IMPORTED_MODULE_3__.convertStringToFormDateFormat)(task.date);\n    document.getElementById('form-priority').value = task.priority;\n\n    const assignedProject = document.querySelector('.tagged-project').innerHTML;\n    const projectIndex = _classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.projects.findIndex((project) => { return project.name.toLowerCase() == assignedProject.toLowerCase()});\n    document.getElementById('form-project').selectedIndex = projectIndex;\n\n    const taskModal = document.getElementById('task-dialog');\n    taskModal.showModal();\n}\n\nfunction closeTaskDialog() {\n    resetForm();\n\n    const taskModal = document.getElementById('task-dialog');\n    taskModal.close();\n    taskModal.remove();\n}\n\nfunction resetForm() {\n    const taskName = document.getElementById('form-title');\n    const taskDate = document.getElementById('form-date');\n    const taskPriority = document.getElementById('form-priority');\n    const taskAssignedProject = document.getElementById('form-project');\n\n    taskName.value = \"\";\n    taskDate.value = \"\";\n    taskPriority.selectedIndex = 0;\n    taskAssignedProject.selectedIndex = 0;\n}\n\nfunction submitTaskDialog(task) {\n    // Create new task with form values\n    const taskName = document.getElementById('form-title').value;\n    const taskDate = document.getElementById('form-date').value;\n    const taskPriority = document.getElementById('form-priority').value;\n    const taskAssignedProject = document.getElementById('form-project').value;\n\n    // Get selected project\n    const chosenProj = _classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.projects.find((project) => project.name.toLowerCase() === taskAssignedProject.toLowerCase());\n    if (task !== null) {\n        // Update existing task\n        const oldProj = _classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.projects.find((project) => project.findTask(task.id) !== undefined);\n\n        const targetTask = oldProj.findTask(task.id);\n        targetTask.updateTask(taskName, taskDate, taskPriority, chosenProj.name); \n\n        if (oldProj !== chosenProj) {\n            // Task reassigned to diff project\n            oldProj.deleteTask(task);\n            chosenProj.addTask(targetTask);\n        }\n    } else {\n        // Create new task\n        const newTask = new _classes__WEBPACK_IMPORTED_MODULE_0__.Task(taskName, taskDate, taskPriority, chosenProj.name);\n        chosenProj.addTask(newTask);\n    }\n\n    chosenProj.sortTasks();\n    (0,_taskUI__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(chosenProj.tasks, chosenProj.name);\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    closeTaskDialog();\n}\n\nfunction buildTaskDialogHtml(task=null) {\n    const taskDialogHtml = new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('dialog').setAttributes({id: 'task-dialog', class: 'modal'});\n\n    taskDialogHtml\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('h1').setTextContent('New Todo'))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('form')\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div')\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('label').setTextContent('Task Name').setAttributes({for: 'form-title'}))\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('input').setAttributes({type: 'text', name: 'form-title', id: 'form-title'}))\n        )\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div')\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('label').setTextContent('Due Date').setAttributes({for: 'form-date'}))\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('input').setAttributes({type: 'date', name: 'form-date', id: 'form-date'}))\n        )\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div')\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('label').setTextContent('Priority').setAttributes({for: 'form-priority'}))\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('select').setAttributes({name: 'form-priority', id: 'form-priority'})\n                .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('option').setTextContent('Low').setAttributes({value: 0}))\n                .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('option').setTextContent('Medium').setAttributes({value: 1}))\n                .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('option').setTextContent('High').setAttributes({value: 2}))\n            )\n        )\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div')\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('label').setTextContent('Add to Project').setAttributes({for: 'form-project'}))\n            .addChild(buildProjectSelectHtml())\n        )\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div')\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('input').setAttributes({type: 'button', value: 'Cancel', class: 'dialog-button cancel'}).appendEventListener('click', closeTaskDialog))\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('input').setAttributes({type: 'button', value: 'Submit', class: 'dialog-button create'}).appendEventListener('click', () => {submitTaskDialog(task=task)}))\n        )\n    );\n\n    document.body.appendChild(taskDialogHtml.buildElement());\n\n}\n\nfunction buildProjectSelectHtml() {\n    const selectHtml = new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('select').setAttributes({name: 'form-project', id: 'form-project'});\n\n    _classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.getAllProjects().forEach((project) => {\n        selectHtml.addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('option').setTextContent(project.name).setAttributes({value: project.name.toLowerCase()}))\n    })\n\n    return selectHtml;\n}\n\n{/* \n<dialog id=\"project-dialog\" class=\"modal\">\n    <h1>New Project</h1>\n    <input type=\"text\" placeholder=\"Project name\" class=\"project-dialog-text\">\n    <div class=\"dialog-btns\">\n        <button id=\"cancel-btn\">Cancel</button>\n        <button id=\"create-btn\">Create</button>\n    </div>\n</dialog>\n\n<dialog id=\"task-dialog\" class=\"modal\">\n    <h1>New Todo</h1>\n    <form>\n        <div>\n            <label for=\"title\">Task Name</label>\n            <input type=\"text\" name=\"title\" id=\"title\">\n        </div>\n        <div>\n            <label for=\"date\">Due Date</label>\n            <input type=\"date\" name=\"date\" id=\"date\">\n        </div>\n        <div>\n            <label for=\"priority\">Priority</label>\n            <select name=\"priority\" id=\"priority\">\n                <option value=\"low\">Low</option>\n                <option value=\"med\">Medium</option>\n                <option value=\"high\">High</option>\n            </select>\n        </div>\n        <div>\n            <label for=\"project\">Add to Project</label>\n            <select name=\"project\" id=\"project\">\n                <option value=\"personal\">Personal</option>\n            </select>\n        </div>\n        <div>\n            <input type=\"button\" value=\"Cancel\">\n            <input type=\"button\" value=\"Submit\">\n        </div>\n    </form>\n</dialog>  \n*/}\n\n//# sourceURL=webpack://top-todolist/./src/ui/dialogs/taskDialog.js?");

/***/ }),

/***/ "./src/ui/notesUI.js":
/*!***************************!*\
  !*** ./src/ui/notesUI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderNotes: () => (/* binding */ renderNotes)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes.js\");\n/* harmony import */ var _dialogs_noteDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/noteDialog */ \"./src/ui/dialogs/noteDialog.js\");\n\n\n\nfunction renderNotes() {\n    const notesSection = document.getElementById('notes');\n    notesSection.innerHTML = '';\n\n    const noteHead = buildNoteHead();\n\n    var notesList = new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div').setAttributes({class: 'notes-list'}).buildElement();\n\n    _classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.notes.forEach((note) => {\n        notesList.appendChild(note.buildNoteHtml());\n    })\n\n    notesSection.appendChild(noteHead);\n    notesSection.appendChild(notesList);\n}\n\nfunction buildNoteHead() {\n    var headHtml = new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div').setAttributes({class: 'flex-row'});\n\n    headHtml\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('h1').setTextContent('Notes'))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('button')\n        .setTextContent('+')\n        .setAttributes({'class': 'add-btn add-project-btn'})\n        .appendEventListener('click', _dialogs_noteDialog__WEBPACK_IMPORTED_MODULE_1__.openNoteDialog)\n    )\n\n    return headHtml.buildElement();\n}\n\n{/* \n<div class=\"flex-row\">\n    <h1>Notes</h1>\n    <button class=\"add-btn add-project-btn\">+</button>\n</div> \n<div class=\"notes-list\"> */}\n\n\n\n\n\n//# sourceURL=webpack://top-todolist/./src/ui/notesUI.js?");

/***/ }),

/***/ "./src/ui/sidebar.js":
/*!***************************!*\
  !*** ./src/ui/sidebar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_bullseye_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/bullseye.svg */ \"./src/assets/images/bullseye.svg\");\n/* harmony import */ var _assets_images_calendar7_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/calendar7.svg */ \"./src/assets/images/calendar7.svg\");\n/* harmony import */ var _assets_images_documents_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/documents.svg */ \"./src/assets/images/documents.svg\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes */ \"./src/classes.js\");\n/* harmony import */ var _dialogs_projectDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/projectDialog */ \"./src/ui/dialogs/projectDialog.js\");\n/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskUI */ \"./src/ui/taskUI.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\n\n\n\n\n\n\nconst sidebar = document.getElementById('sidebar');\n\nfunction loadSidebar() {\n    sidebar.innerHTML = \"\";\n\n    const todoHeader = new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('h1');\n\n    todoHeader\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('span').setTextContent('ToDo').setAttributes({class: 'blue'}))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('span').setTextContent(' App'))\n\n    sidebar.appendChild(todoHeader.buildElement());\n\n    buildViewMenuHtml();\n    buildProjectsMenuHtml();\n}\n\nfunction buildViewMenuHtml() {\n    const ViewMenuHtml = new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('div');\n\n    ViewMenuHtml.setAttributes({class: 'view-menu'})\n\n    ViewMenuHtml\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('div').setAttributes({class: 'view-item'}).appendEventListener('click', () => (0,___WEBPACK_IMPORTED_MODULE_6__.filterHandler)('Today'))\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('img').setAttributes({class: 'icon', src: _assets_images_bullseye_svg__WEBPACK_IMPORTED_MODULE_0__}))\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('p').setTextContent('Today')))\n        // .addChild(new Element('div').setTextContent('7').setAttributes({class: 'num-tasks'})))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('div').setAttributes({class: 'view-item'}).appendEventListener('click', () => (0,___WEBPACK_IMPORTED_MODULE_6__.filterHandler)('Next 7 Days'))\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('img').setAttributes({class: 'icon', src: _assets_images_calendar7_svg__WEBPACK_IMPORTED_MODULE_1__}))\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('p').setTextContent('Next 7 days')))\n        // .addChild(new Element('div').setTextContent('10').setAttributes({class: 'num-tasks'})))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('div').setAttributes({class: 'view-item'}).appendEventListener('click', () => (0,___WEBPACK_IMPORTED_MODULE_6__.filterHandler)('All'))\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('img').setAttributes({class: 'icon', src: _assets_images_documents_svg__WEBPACK_IMPORTED_MODULE_2__}))\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('p').setTextContent('All my tasks')))\n        // .addChild(new Element('div').setTextContent('14').setAttributes({class: 'num-tasks'})))\n\n    sidebar.appendChild(ViewMenuHtml.buildElement());\n}\n\nfunction buildProjectsMenuHtml() {\n    const ProjectsMenuHtml = new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('div').setAttributes({class: 'projects-menu'});\n\n    ProjectsMenuHtml\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('div').setAttributes({class: 'flex-row'})\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('h2').setTextContent('My Projects'))\n        .addChild(\n            new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('button')\n            .setTextContent('+')\n            .setAttributes({class: 'add-btn add-project-btn'})\n            .appendEventListener('click', _dialogs_projectDialog__WEBPACK_IMPORTED_MODULE_4__.openProjectDialog)\n        ));\n\n    const ProjectsListHtml = new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('div').setAttributes({class: 'projects'});\n\n    _classes__WEBPACK_IMPORTED_MODULE_3__.Librarian.getAllProjects().forEach((project) => {\n        ProjectsListHtml.addChild(loadProject(project));\n    })\n\n    ProjectsMenuHtml.addChild(ProjectsListHtml);\n\n    sidebar.appendChild(ProjectsMenuHtml.buildElement());\n}\n\nfunction loadProject(project) {\n    const projectHtml = new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('div');\n\n    projectHtml.setAttributes({class: 'view-item'});\n\n    projectHtml\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('p').setTextContent(project.name))\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_3__.Element('div').setTextContent(project.tasks.length).setAttributes({class: 'num-tasks'}))\n\n    projectHtml.appendEventListener('click', () => {\n        ;(0,_taskUI__WEBPACK_IMPORTED_MODULE_5__.renderTasks)(project.tasks, project.name);\n    })\n\n    return projectHtml;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSidebar);\n\n\n\n{/* <div class=\"view-menu\">\n    <div class=\"view-item\">\n        <img class=\"icon\" src=\"\">\n        <p>Today</p>\n        <div class=\"num-tasks\">7</div>\n    </div>\n    <div class=\"view-item\">\n        <img class=\"icon\" src=\"\">\n        <p>Next 7 days</p>\n        <div class=\"num-tasks\">10</div>\n    </div>\n    <div class=\"view-item\">\n        <img class=\"icon\" src=\"\">\n        <p>All my tasks</p>\n        <div class=\"num-tasks\">14</div>\n    </div> \n</div> */}\n\n\n{/* <div class=\"projects-menu\">\n    <div class=\"flex-row\">\n        <h2>My Projects</h2>\n        <button class=\"add-btn add-project-btn\">+</button>\n    </div>\n    <div class=\"projects\">\n        <div class=\"view-item\">\n            <p>Personal</p>\n            <div class=\"num-tasks\">36</div>\n        </div>\n    </div>\n</div> */}\n\n//# sourceURL=webpack://top-todolist/./src/ui/sidebar.js?");

/***/ }),

/***/ "./src/ui/taskUI.js":
/*!**************************!*\
  !*** ./src/ui/taskUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes.js\");\n/* harmony import */ var _dialogs_taskDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/taskDialog */ \"./src/ui/dialogs/taskDialog.js\");\n\n\n\nconst tasksSection = document.getElementById('tasks');\n\nfunction renderTasks(taskArray, title) {\n    tasksSection.innerHTML = \"\";\n    loadHeader(title);\n\n    const taskDiv = document.querySelector('.task-list');\n    taskDiv.innerHTML = \"\";\n\n    taskArray.forEach((task) => {\n        taskDiv.appendChild(task.buildTaskHtml());\n    })\n}\n\nfunction loadHeader(projectTitle) {\n    const taskHeaderHtml = new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div').setAttributes({class: 'flex-row'});\n\n    taskHeaderHtml\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div')\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('h1').setTextContent('Tasks'))\n        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('p')\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('span').setTextContent('from '))\n            .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('span').setTextContent(projectTitle).setAttributes({class: 'blue'}))\n        )\n    )\n    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('button')\n    .setTextContent('Add New Task +')\n    .setAttributes({class: 'add-btn add-task-btn'})\n    .appendEventListener('click', _dialogs_taskDialog__WEBPACK_IMPORTED_MODULE_1__.openTaskDialog))\n\n    tasksSection.appendChild(taskHeaderHtml.buildElement());\n    tasksSection.appendChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element('div').setAttributes({class: 'task-list'}).buildElement());\n}\n\n{/* <div class=\"flex-row\">\n    <div>\n        <h1>Tasks</h1>\n        <p>from <span class=\"blue\">all projects</span></p>\n    </div>\n    <button class=\"add-btn add-task-btn\">Add New Task +</button>\n</div>\n\n<div class=\"task-list\"></div> */}\n\n//# sourceURL=webpack://top-todolist/./src/ui/taskUI.js?");

/***/ }),

/***/ "./src/assets/fonts/Kanit-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/assets/fonts/Kanit-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"46cd98a815b9874526ad.ttf\";\n\n//# sourceURL=webpack://top-todolist/./src/assets/fonts/Kanit-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Kanit-Light.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Kanit-Light.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7b6b95563f4c5697d973.ttf\";\n\n//# sourceURL=webpack://top-todolist/./src/assets/fonts/Kanit-Light.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Kanit-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Kanit-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f3bae13d78ced30b6ea3.ttf\";\n\n//# sourceURL=webpack://top-todolist/./src/assets/fonts/Kanit-Regular.ttf?");

/***/ }),

/***/ "./src/assets/images/bullseye.svg":
/*!****************************************!*\
  !*** ./src/assets/images/bullseye.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"135843b83e70fa922692.svg\";\n\n//# sourceURL=webpack://top-todolist/./src/assets/images/bullseye.svg?");

/***/ }),

/***/ "./src/assets/images/calendar7.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/calendar7.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"37a9e57177acf984bd62.svg\";\n\n//# sourceURL=webpack://top-todolist/./src/assets/images/calendar7.svg?");

/***/ }),

/***/ "./src/assets/images/documents.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/documents.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4e4e12420d6d60934894.svg\";\n\n//# sourceURL=webpack://top-todolist/./src/assets/images/documents.svg?");

/***/ }),

/***/ "./src/assets/images/edit-button.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/edit-button.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3d874d5ebd9734c17c67.svg\";\n\n//# sourceURL=webpack://top-todolist/./src/assets/images/edit-button.svg?");

/***/ }),

/***/ "./src/assets/images/trash.svg":
/*!*************************************!*\
  !*** ./src/assets/images/trash.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bad1461008e8b66738ad.svg\";\n\n//# sourceURL=webpack://top-todolist/./src/assets/images/trash.svg?");

/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDays: () => (/* binding */ addDays),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ \"./node_modules/date-fns/constructFrom.mjs\");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to be changed\n * @param amount - The amount of days to be added.\n *\n * @returns The new date with the days added\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\nfunction addDays(date, amount) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return _date;\n  }\n  _date.setDate(_date.getDate() + amount);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/date-fns/addDays.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compareAsc: () => (/* binding */ compareAsc),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The first date to compare\n * @param dateRight - The second date to compare\n *\n * @returns The result of the comparison\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\nfunction compareAsc(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const diff = _dateLeft.getTime() - _dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/date-fns/compareAsc.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFrom: () => (/* binding */ constructFrom),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @name constructFrom\n * @category Generic Helpers\n * @summary Constructs a date using the reference date and the value\n *\n * @description\n * The function constructs a new date using the constructor from the reference\n * date and the given value. It helps to build generic functions that accept\n * date extensions.\n *\n * It defaults to `Date` if the passed reference date is a number or a string.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The reference date to take constructor from\n * @param value - The value to create the date\n *\n * @returns Date initialized using the given date and value\n *\n * @example\n * import { constructFrom } from 'date-fns'\n *\n * // A function that clones a date preserving the original type\n * function cloneDate<DateType extends Date(date: DateType): DateType {\n *   return constructFrom(\n *     date, // Use contrustor from the given date\n *     date.getTime() // Use the date value to create a new date\n *   )\n * }\n */\nfunction constructFrom(date, value) {\n  if (date instanceof Date) {\n    return new date.constructor(value);\n  } else {\n    return new Date(value);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/date-fns/constructFrom.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/endOfDay.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/endOfDay.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   endOfDay: () => (/* binding */ endOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name endOfDay\n * @category Day Helpers\n * @summary Return the end of a day for the given date.\n *\n * @description\n * Return the end of a day for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The end of a day\n *\n * @example\n * // The end of a day for 2 September 2014 11:55:00:\n * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 23:59:59.999\n */\nfunction endOfDay(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  _date.setHours(23, 59, 59, 999);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfDay);\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/date-fns/endOfDay.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/endOfToday.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/endOfToday.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   endOfToday: () => (/* binding */ endOfToday)\n/* harmony export */ });\n/* harmony import */ var _endOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endOfDay.mjs */ \"./node_modules/date-fns/endOfDay.mjs\");\n\n\n/**\n * @name endOfToday\n * @category Day Helpers\n * @summary Return the end of today.\n * @pure false\n *\n * @description\n * Return the end of today.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @returns The end of today\n *\n * @example\n * // If today is 6 October 2014:\n * const result = endOfToday()\n * //=> Mon Oct 6 2014 23:59:59.999\n */\nfunction endOfToday() {\n  return (0,_endOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.endOfDay)(Date.now());\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfToday);\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/date-fns/endOfToday.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isWithinInterval.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/isWithinInterval.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isWithinInterval: () => (/* binding */ isWithinInterval)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name isWithinInterval\n * @category Interval Helpers\n * @summary Is the given date within the interval?\n *\n * @description\n * Is the given date within the interval? (Including start and end.)\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to check\n * @param interval - The interval to check\n *\n * @returns The date is within the interval\n *\n * @example\n * // For the date within the interval:\n * isWithinInterval(new Date(2014, 0, 3), {\n *   start: new Date(2014, 0, 1),\n *   end: new Date(2014, 0, 7)\n * })\n * //=> true\n *\n * @example\n * // For the date outside of the interval:\n * isWithinInterval(new Date(2014, 0, 10), {\n *   start: new Date(2014, 0, 1),\n *   end: new Date(2014, 0, 7)\n * })\n * //=> false\n *\n * @example\n * // For date equal to interval start:\n * isWithinInterval(date, { start, end: date })\n * // => true\n *\n * @example\n * // For date equal to interval end:\n * isWithinInterval(date, { start: date, end })\n * // => true\n */\nfunction isWithinInterval(date, interval) {\n  const time = +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const [startTime, endTime] = [\n    +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.start),\n    +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.end),\n  ].sort((a, b) => a - b);\n\n  return time >= startTime && time <= endTime;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isWithinInterval);\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/date-fns/isWithinInterval.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfDay: () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The start of a day\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  _date.setHours(0, 0, 0, 0);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/date-fns/startOfDay.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/startOfToday.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/startOfToday.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfToday: () => (/* binding */ startOfToday)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ \"./node_modules/date-fns/startOfDay.mjs\");\n\n\n/**\n * @name startOfToday\n * @category Day Helpers\n * @summary Return the start of today.\n * @pure false\n *\n * @description\n * Return the start of today.\n *\n * @returns The start of today\n *\n * @example\n * // If today is 6 October 2014:\n * const result = startOfToday()\n * //=> Mon Oct 6 2014 00:00:00\n */\nfunction startOfToday() {\n  return (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(Date.now());\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfToday);\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/date-fns/startOfToday.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  const argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (\n    argument instanceof Date ||\n    (typeof argument === \"object\" && argStr === \"[object Date]\")\n  ) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new argument.constructor(+argument);\n  } else if (\n    typeof argument === \"number\" ||\n    argStr === \"[object Number]\" ||\n    typeof argument === \"string\" ||\n    argStr === \"[object String]\"\n  ) {\n    // TODO: Can we get rid of as?\n    return new Date(argument);\n  } else {\n    // TODO: Can we get rid of as?\n    return new Date(NaN);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://top-todolist/./node_modules/date-fns/toDate.mjs?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;