/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./virtual-keyboard/js/create.js":
/*!***************************************!*\
  !*** ./virtual-keyboard/js/create.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return create; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction create(el, classNames, child, parent) {\n  var element = null;\n\n  try {\n    element = document.createElement(el);\n  } catch (error) {\n    throw new Error(\"Error creating element - invalid tag name \".concat(String(el), \": \").concat(error));\n  }\n\n  if (classNames) {\n    var _element$classList;\n\n    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classNames.split(' ')));\n  }\n\n  if (child && Array.isArray(child)) {\n    child.forEach(function (childElement) {\n      return childElement && element.appendChild(childElement);\n    });\n  } else if (child && _typeof(child) === 'object') {\n    element.appendChild(child);\n  } else if (child && typeof child === 'string') {\n    element.innerHTML = child;\n  }\n\n  if (parent) {\n    parent.appendChild(element);\n  }\n\n  for (var _len = arguments.length, attrs = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {\n    attrs[_key - 4] = arguments[_key];\n  }\n\n  if (attrs.length) {\n    attrs.forEach(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n          attrName = _ref2[0],\n          attrValue = _ref2[1];\n\n      if (attrValue === '') {\n        element.setAttribute(attrName, '');\n      }\n\n      if (attrName.match(/value|id|placeholder|cols|rows/)) {\n        element.setAttribute(attrName, attrValue);\n      } else {\n        element.dataset[attrName] = attrValue;\n      }\n    });\n  }\n\n  return element;\n}\n\n//# sourceURL=webpack:///./virtual-keyboard/js/create.js?");

/***/ }),

/***/ "./virtual-keyboard/js/en.js":
/*!***********************************!*\
  !*** ./virtual-keyboard/js/en.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  small: '`',\n  shift: '~',\n  code: 'Backquote'\n}, {\n  small: '1',\n  shift: '!',\n  code: 'Digit1'\n}, {\n  small: '2',\n  shift: '@',\n  code: 'Digit2'\n}, {\n  small: '3',\n  shift: '#',\n  code: 'Digit3'\n}, {\n  small: '4',\n  shift: '$',\n  code: 'Digit4'\n}, {\n  small: '5',\n  shift: '%',\n  code: 'Digit5'\n}, {\n  small: '6',\n  shift: '^',\n  code: 'Digit6'\n}, {\n  small: '7',\n  shift: '&',\n  code: 'Digit7'\n}, {\n  small: '8',\n  shift: '*',\n  code: 'Digit8'\n}, {\n  small: '9',\n  shift: '(',\n  code: 'Digit9'\n}, {\n  small: '0',\n  shift: ')',\n  code: 'Digit0'\n}, {\n  small: '-',\n  shift: '_',\n  code: 'Minus'\n}, {\n  small: '=',\n  shift: '+',\n  code: 'Equal'\n}, {\n  small: 'Backspace',\n  shift: null,\n  code: 'Backspace'\n}, {\n  small: 'Delete',\n  shift: null,\n  code: 'Delete'\n}, {\n  small: 'Tab',\n  shift: null,\n  code: 'Tab'\n}, {\n  small: 'q',\n  shift: 'Q',\n  code: 'KeyQ'\n}, {\n  small: 'w',\n  shift: 'W',\n  code: 'KeyW'\n}, {\n  small: 'e',\n  shift: 'E',\n  code: 'KeyE'\n}, {\n  small: 'r',\n  shift: 'R',\n  code: 'KeyR'\n}, {\n  small: 't',\n  shift: 'T',\n  code: 'KeyT'\n}, {\n  small: 'y',\n  shift: 'Y',\n  code: 'KeyY'\n}, {\n  small: 'u',\n  shift: 'U',\n  code: 'KeyU'\n}, {\n  small: 'i',\n  shift: 'I',\n  code: 'KeyI'\n}, {\n  small: 'o',\n  shift: 'O',\n  code: 'KeyO'\n}, {\n  small: 'p',\n  shift: 'P',\n  code: 'KeyP'\n}, {\n  small: '[',\n  shift: '{',\n  code: 'BracketLeft'\n}, {\n  small: ']',\n  shift: '}',\n  code: 'BracketRight'\n}, {\n  small: 'Enter',\n  shift: null,\n  code: 'Enter'\n}, {\n  small: 'CapsLock',\n  shift: null,\n  code: 'CapsLock'\n}, {\n  small: 'a',\n  shift: 'A',\n  code: 'KeyA'\n}, {\n  small: 's',\n  shift: 'S',\n  code: 'KeyS'\n}, {\n  small: 'd',\n  shift: 'D',\n  code: 'KeyD'\n}, {\n  small: 'f',\n  shift: 'F',\n  code: 'KeyF'\n}, {\n  small: 'g',\n  shift: 'G',\n  code: 'KeyG'\n}, {\n  small: 'h',\n  shift: 'H',\n  code: 'KeyH'\n}, {\n  small: 'j',\n  shift: 'J',\n  code: 'KeyJ'\n}, {\n  small: 'k',\n  shift: 'K',\n  code: 'KeyK'\n}, {\n  small: 'l',\n  shift: 'L',\n  code: 'KeyL'\n}, {\n  small: ';',\n  shift: ':',\n  code: 'Semicolon'\n}, {\n  small: \"'\",\n  shift: '\"',\n  code: 'Quote'\n}, {\n  small: '\\\\',\n  shift: '|',\n  code: 'Backslash'\n}, {\n  small: 'Shift',\n  shift: null,\n  code: 'ShiftLeft'\n}, {\n  small: 'z',\n  shift: 'Z',\n  code: 'KeyZ'\n}, {\n  small: 'x',\n  shift: 'X',\n  code: 'KeyX'\n}, {\n  small: 'c',\n  shift: 'C',\n  code: 'KeyC'\n}, {\n  small: 'v',\n  shift: 'V',\n  code: 'KeyV'\n}, {\n  small: 'b',\n  shift: 'B',\n  code: 'KeyB'\n}, {\n  small: 'n',\n  shift: 'N',\n  code: 'KeyN'\n}, {\n  small: 'm',\n  shift: 'M',\n  code: 'KeyM'\n}, {\n  small: ',',\n  shift: '<',\n  code: 'Comma'\n}, {\n  small: '.',\n  shift: '>',\n  code: 'Period'\n}, {\n  small: '/',\n  shift: '?',\n  code: 'Slash'\n}, {\n  small: 'Shift',\n  shift: null,\n  code: 'ShiftRight'\n}, {\n  small: 'Ctrl',\n  shift: null,\n  code: 'ControlLeft'\n}, {\n  small: 'Alt',\n  shift: null,\n  code: 'AltLeft'\n}, {\n  small: ' ',\n  shift: null,\n  code: 'Space'\n}, {\n  small: 'Alt',\n  shift: null,\n  code: 'AltRight'\n}, {\n  small: 'Ctrl',\n  shift: null,\n  code: 'ControlRight'\n}, {\n  small: '&larr;',\n  shift: null,\n  code: 'ArrowLeft'\n}, {\n  small: '&uarr;',\n  shift: null,\n  code: 'ArrowUp'\n}, {\n  small: '&darr;',\n  shift: null,\n  code: 'ArrowDown'\n}, {\n  small: '&rarr;',\n  shift: null,\n  code: 'ArrowRight'\n}, {\n  small: 'Win',\n  shift: null,\n  code: 'Win'\n}]);\n\n//# sourceURL=webpack:///./virtual-keyboard/js/en.js?");

/***/ }),

/***/ "./virtual-keyboard/js/key.js":
/*!************************************!*\
  !*** ./virtual-keyboard/js/key.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Key; });\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ \"./virtual-keyboard/js/create.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* eslint-disable import/extensions */\n\n\nvar Key = function Key(_ref) {\n  var small = _ref.small,\n      shift = _ref.shift,\n      code = _ref.code;\n\n  _classCallCheck(this, Key);\n\n  this.code = code;\n  this.small = small;\n  this.shift = shift;\n  this.letter = Object(_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'letter', small);\n  this.div = Object(_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'key', this.letter, null, ['code', this.code]);\n};\n\n\n\n//# sourceURL=webpack:///./virtual-keyboard/js/key.js?");

/***/ }),

/***/ "./virtual-keyboard/js/keyboard.js":
/*!*****************************************!*\
  !*** ./virtual-keyboard/js/keyboard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\n/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang.js */ \"./virtual-keyboard/js/lang.js\");\n/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key.js */ \"./virtual-keyboard/js/key.js\");\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.js */ \"./virtual-keyboard/js/create.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./virtual-keyboard/js/storage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable no-param-reassign */\n\n/* eslint-disable import/extensions */\n\n\n\n\nvar form = Object(_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('section', '', Object(_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('h1', 'title', 'RSS Virtual Keyboard'));\n\nvar Keyboard = /*#__PURE__*/function () {\n  function Keyboard(symbolsOrder) {\n    var _this = this;\n\n    _classCallCheck(this, Keyboard);\n\n    _defineProperty(this, \"preHandleEvent\", function (e) {\n      e.stopPropagation();\n      var keyDiv = e.target.closest('.key');\n\n      if (!keyDiv) {\n        return;\n      }\n\n      var code = keyDiv.dataset.code;\n      keyDiv.addEventListener('mouseleave', _this.resetButtonState);\n\n      _this.handleEvent({\n        code: code,\n        type: e.type\n      });\n    });\n\n    _defineProperty(this, \"resetButtonState\", function (_ref) {\n      var code = _ref.target.dataset.code;\n\n      if (code.match('Shift')) {\n        _this.shiftKey = false;\n\n        _this.toLower();\n\n        _this.keysPressed[code].div.classList.remove('active');\n      }\n\n      if (code.match(/Control/)) {\n        _this.ctrlKey = false;\n      }\n\n      if (code.match(/Alt/)) {\n        _this.altKey = false;\n      }\n\n      _this.resetPressedButtons(code);\n\n      _this.output.focus();\n    });\n\n    _defineProperty(this, \"resetPressedButtons\", function (targetCode) {\n      if (!_this.keysPressed[targetCode]) {\n        return;\n      }\n\n      if (!_this.isCaps) {\n        _this.keysPressed[targetCode].div.classList.remove('active');\n      }\n\n      _this.keysPressed[targetCode].div.removeEventListener('mouseleave', _this.resetButtonState);\n\n      delete _this.keysPressed[targetCode];\n    });\n\n    _defineProperty(this, \"handleEvent\", function (e) {\n      if (e.stopPropagation) {\n        e.stopPropagation();\n      }\n\n      var code = e.code,\n          type = e.type;\n\n      var keyObj = _this.keyButtons.find(function (key) {\n        return key.code === code;\n      });\n\n      if (!keyObj) {\n        return;\n      }\n\n      _this.output.focus();\n\n      if (type.match(/keydown|mousedown/)) {\n        if (type.match(/key/)) {\n          e.preventDefault();\n        }\n\n        if (code.match(/Shift/)) {\n          _this.shiftKey = true;\n\n          _this.toUpper();\n        }\n\n        keyObj.div.classList.add('active');\n\n        if (code.match(/Caps/) && !_this.isCaps) {\n          _this.isCaps = true;\n\n          _this.toUpper();\n        } else if (code.match(/Caps/)) {\n          _this.isCaps = false;\n          keyObj.div.classList.remove('active');\n\n          _this.toLower();\n        }\n\n        if (code.match(/Control/)) {\n          _this.ctrlKey = true;\n        }\n\n        if (code.match(/Alt/)) {\n          _this.altKey = true;\n        }\n\n        if (code.match(/Control/) && _this.altKey || code.match(/Alt/) && _this.ctrlKey) {\n          _this.changeLang();\n        }\n\n        if (!_this.isCaps) {\n          _this.printKey(keyObj, _this.shiftKey ? keyObj.shift : keyObj.small);\n        } else if (_this.isCaps) {\n          if (_this.shiftKey && keyObj.shift != null && keyObj.small.match(/[a-zа-яё]/)) {\n            _this.printKey(keyObj, keyObj.small);\n          } else if (!_this.shiftKey && keyObj.small.match(/[^a-zа-яё]/)) {\n            _this.printKey(keyObj, keyObj.small);\n          } else {\n            _this.printKey(keyObj, keyObj.shift);\n          }\n        }\n\n        _this.keysPressed[keyObj.code] = keyObj;\n      } else if (type.match(/keyup|mouseup/)) {\n        if (!code.match(/Caps/)) {\n          keyObj.div.classList.remove('active');\n        }\n\n        if (code.match(/Control/)) {\n          _this.ctrlKey = false;\n        }\n\n        if (code.match(/Alt/)) {\n          _this.altKey = false;\n        }\n\n        if (code.match(/Shift/)) {\n          _this.shiftKey = false;\n\n          _this.toLower();\n        }\n      }\n    });\n\n    _defineProperty(this, \"changeLang\", function () {\n      var langs = Object.keys(_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      var langId = langs.indexOf(_this.container.dataset.language);\n      _this.keyBase = langId + 1 < langs.length ? _lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][langs[langId += 1]] : _lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][langs[langId -= langId]];\n      _this.container.dataset.language = langs[langId];\n      _storage_js__WEBPACK_IMPORTED_MODULE_3__[\"set\"]('lang', langs[langId]);\n\n      _this.keyButtons.forEach(function (button) {\n        var keyObj = _this.keyBase.find(function (key) {\n          return key.code === button.code;\n        });\n\n        if (!keyObj) {\n          return;\n        }\n\n        button.shift = keyObj.shift;\n        button.small = keyObj.small;\n        button.letter.innerHTML = keyObj.small;\n      });\n\n      if (_this.isCaps) {\n        _this.toUpper();\n      }\n    });\n\n    this.symbolsOrder = symbolsOrder;\n    this.keysPressed = {};\n    this.isCaps = false;\n  }\n\n  _createClass(Keyboard, [{\n    key: \"init\",\n    value: function init(langCode) {\n      this.keyBase = _lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][langCode];\n      this.output = Object(_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('textarea', 'output', null, form, ['placeholder', 'Напишите что-нибудь'], ['rows', 5], ['cols', 50]);\n      this.container = Object(_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', 'keyboard', null, form, ['language', langCode]);\n      document.body.prepend(form);\n      return this;\n    }\n  }, {\n    key: \"generateLayout\",\n    value: function generateLayout() {\n      var _this2 = this;\n\n      this.keyButtons = [];\n      this.symbolsOrder.forEach(function (row, i) {\n        var rowElement = Object(_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', 'row', null, _this2.container, ['row', i + 1]);\n        row.forEach(function (code) {\n          var keyObj = _this2.keyBase.find(function (key) {\n            return key.code === code;\n          });\n\n          if (keyObj) {\n            var keyButton = new _key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](keyObj);\n\n            _this2.keyButtons.push(keyButton);\n\n            rowElement.appendChild(keyButton.div);\n          }\n        });\n      });\n      Object(_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('p', '', 'Клавиатура создана в операционной системе Windows', form);\n      Object(_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('p', '', 'Для переключения языка комбинация: левыe ctrl + alt', form);\n      document.addEventListener('keydown', this.handleEvent);\n      document.addEventListener('keyup', this.handleEvent);\n      this.container.onmousedown = this.preHandleEvent;\n      this.container.onmouseup = this.preHandleEvent;\n    }\n  }, {\n    key: \"toUpper\",\n    value: function toUpper() {\n      var _this3 = this;\n\n      this.keyButtons.forEach(function (button) {\n        if (button.shift != null && _this3.isCaps && button.small.match(/[^a-zA-Zа-яА-ЯёЁ]/) && !_this3.shiftKey) {\n          button.letter.innerHTML = button.small;\n        } else if (button.shift != null && _this3.isCaps && _this3.shiftKey && button.small.match(/[^a-zA-Zа-яА-ЯёЁ]/)) {\n          button.letter.innerHTML = button.shift;\n        } else if (button.shift != null && _this3.isCaps && !_this3.shiftKey) {\n          button.letter.innerHTML = button.shift;\n        } else if (button.shift != null && _this3.isCaps && _this3.shiftKey) {\n          button.letter.innerHTML = button.small;\n        } else if (button.shift != null) {\n          button.letter.innerHTML = button.shift;\n        }\n      });\n    }\n  }, {\n    key: \"toLower\",\n    value: function toLower() {\n      var _this4 = this;\n\n      this.keyButtons.forEach(function (button) {\n        if (button.shift != null) {\n          if (_this4.isCaps) {\n            if (!_this4.shiftKey && button.small.match(/[^a-zA-Zа-яА-ЯёЁ]/)) {\n              button.letter.innerHTML = button.small;\n            } else {\n              button.letter.innerHTML = button.shift;\n            }\n          } else {\n            button.letter.innerHTML = button.small;\n          }\n        }\n      });\n    }\n  }, {\n    key: \"printKey\",\n    value: function printKey(keyObj, symbol) {\n      var _this5 = this;\n\n      var cursorPos = this.output.selectionStart;\n      var left = this.output.value.slice(0, cursorPos);\n      var right = this.output.value.slice(cursorPos);\n      var keysHandler = {\n        Tab: function Tab() {\n          _this5.output.value = \"\".concat(left, \"\\t\").concat(right);\n          cursorPos += 1;\n        },\n        ArrowLeft: function ArrowLeft() {\n          cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;\n        },\n        ArrowRight: function ArrowRight() {\n          cursorPos += 1;\n        },\n        ArrowUp: function ArrowUp() {\n          var leftPosition = _this5.output.value.slice(0, cursorPos).match(/(\\n).*$(?!\\1)/g) || [[1]];\n          cursorPos -= leftPosition[0].length;\n        },\n        ArrowDown: function ArrowDown() {\n          var leftPosition = _this5.output.value.slice(cursorPos).match(/^.*(\\n).*$(?!\\1)/) || [[1]];\n          cursorPos += leftPosition[0].length;\n        },\n        Enter: function Enter() {\n          _this5.output.value = \"\".concat(left, \"\\n\").concat(right);\n          cursorPos += 1;\n        },\n        Delete: function Delete() {\n          _this5.output.value = \"\".concat(left).concat(right.slice(1));\n        },\n        Backspace: function Backspace() {\n          _this5.output.value = \"\".concat(left.slice(0, -1)).concat(right);\n          cursorPos -= 1;\n        },\n        Space: function Space() {\n          _this5.output.value = \"\".concat(left, \" \").concat(right);\n          cursorPos += 1;\n        }\n      };\n\n      if (keysHandler[keyObj.code]) {\n        keysHandler[keyObj.code]();\n      } else if (keyObj.shift != null) {\n        cursorPos += 1;\n        this.output.value = \"\".concat(left).concat(symbol || '').concat(right);\n      }\n\n      this.output.setSelectionRange(cursorPos, cursorPos);\n    }\n  }]);\n\n  return Keyboard;\n}();\n\n\n\n//# sourceURL=webpack:///./virtual-keyboard/js/keyboard.js?");

/***/ }),

/***/ "./virtual-keyboard/js/lang.js":
/*!*************************************!*\
  !*** ./virtual-keyboard/js/lang.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ru.js */ \"./virtual-keyboard/js/ru.js\");\n/* harmony import */ var _en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en.js */ \"./virtual-keyboard/js/en.js\");\n/* eslint-disable import/extensions */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ru: _ru_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  en: _en_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./virtual-keyboard/js/lang.js?");

/***/ }),

/***/ "./virtual-keyboard/js/ru.js":
/*!***********************************!*\
  !*** ./virtual-keyboard/js/ru.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  small: 'CapsLock',\n  shift: null,\n  code: 'CapsLock'\n}, {\n  small: 'ё',\n  shift: 'Ё',\n  code: 'Backquote'\n}, {\n  small: '1',\n  shift: '!',\n  code: 'Digit1'\n}, {\n  small: '2',\n  shift: '\"',\n  code: 'Digit2'\n}, {\n  small: '3',\n  shift: '№',\n  code: 'Digit3'\n}, {\n  small: '4',\n  shift: ';',\n  code: 'Digit4'\n}, {\n  small: '5',\n  shift: '%',\n  code: 'Digit5'\n}, {\n  small: '6',\n  shift: ':',\n  code: 'Digit6'\n}, {\n  small: '7',\n  shift: '?',\n  code: 'Digit7'\n}, {\n  small: '8',\n  shift: '*',\n  code: 'Digit8'\n}, {\n  small: '9',\n  shift: '(',\n  code: 'Digit9'\n}, {\n  small: '0',\n  shift: ')',\n  code: 'Digit0'\n}, {\n  small: '-',\n  shift: '_',\n  code: 'Minus'\n}, {\n  small: '=',\n  shift: '+',\n  code: 'Equal'\n}, {\n  small: 'Backspace',\n  shift: null,\n  code: 'Backspace'\n}, {\n  small: 'Delete',\n  shift: null,\n  code: 'Delete'\n}, {\n  small: 'Tab',\n  shift: null,\n  code: 'Tab'\n}, {\n  small: 'й',\n  shift: 'Й',\n  code: 'KeyQ'\n}, {\n  small: 'ц',\n  shift: 'Ц',\n  code: 'KeyW'\n}, {\n  small: 'у',\n  shift: 'У',\n  code: 'KeyE'\n}, {\n  small: 'к',\n  shift: 'К',\n  code: 'KeyR'\n}, {\n  small: 'е',\n  shift: 'Е',\n  code: 'KeyT'\n}, {\n  small: 'н',\n  shift: 'Н',\n  code: 'KeyY'\n}, {\n  small: 'г',\n  shift: 'Г',\n  code: 'KeyU'\n}, {\n  small: 'ш',\n  shift: 'Ш',\n  code: 'KeyI'\n}, {\n  small: 'щ',\n  shift: 'Щ',\n  code: 'KeyO'\n}, {\n  small: 'з',\n  shift: 'З',\n  code: 'KeyP'\n}, {\n  small: 'х',\n  shift: 'Х',\n  code: 'BracketLeft'\n}, {\n  small: 'ъ',\n  shift: 'Ъ',\n  code: 'BracketRight'\n}, {\n  small: 'Enter',\n  shift: null,\n  code: 'Enter'\n}, {\n  small: 'ф',\n  shift: 'Ф',\n  code: 'KeyA'\n}, {\n  small: 'ы',\n  shift: 'Ы',\n  code: 'KeyS'\n}, {\n  small: 'в',\n  shift: 'В',\n  code: 'KeyD'\n}, {\n  small: 'а',\n  shift: 'А',\n  code: 'KeyF'\n}, {\n  small: 'п',\n  shift: 'П',\n  code: 'KeyG'\n}, {\n  small: 'р',\n  shift: 'Р',\n  code: 'KeyH'\n}, {\n  small: 'о',\n  shift: 'О',\n  code: 'KeyJ'\n}, {\n  small: 'л',\n  shift: 'Л',\n  code: 'KeyK'\n}, {\n  small: 'д',\n  shift: 'Д',\n  code: 'KeyL'\n}, {\n  small: 'ж',\n  shift: 'Ж',\n  code: 'Semicolon'\n}, {\n  small: 'э',\n  shift: 'Э',\n  code: 'Quote'\n}, {\n  small: '\\\\',\n  shift: '/',\n  code: 'Backslash'\n}, {\n  small: 'Shift',\n  shift: null,\n  code: 'ShiftLeft'\n}, {\n  small: 'я',\n  shift: 'Я',\n  code: 'KeyZ'\n}, {\n  small: 'ч',\n  shift: 'Ч',\n  code: 'KeyX'\n}, {\n  small: 'с',\n  shift: 'С',\n  code: 'KeyC'\n}, {\n  small: 'м',\n  shift: 'М',\n  code: 'KeyV'\n}, {\n  small: 'и',\n  shift: 'И',\n  code: 'KeyB'\n}, {\n  small: 'т',\n  shift: 'Т',\n  code: 'KeyN'\n}, {\n  small: 'ь',\n  shift: 'Ь',\n  code: 'KeyM'\n}, {\n  small: 'б',\n  shift: 'Б',\n  code: 'Comma'\n}, {\n  small: 'ю',\n  shift: 'Ю',\n  code: 'Period'\n}, {\n  small: '.',\n  shift: ',',\n  code: 'Slash'\n}, {\n  small: 'Shift',\n  shift: null,\n  code: 'ShiftRight'\n}, {\n  small: 'Ctrl',\n  shift: null,\n  code: 'ControlLeft'\n}, {\n  small: 'Alt',\n  shift: null,\n  code: 'AltLeft'\n}, {\n  small: ' ',\n  shift: null,\n  code: 'Space'\n}, {\n  small: 'Alt',\n  shift: null,\n  code: 'AltRight'\n}, {\n  small: 'Ctrl',\n  shift: null,\n  code: 'ControlRight'\n}, {\n  small: '&larr;',\n  shift: null,\n  code: 'ArrowLeft'\n}, {\n  small: '&uarr;',\n  shift: null,\n  code: 'ArrowUp'\n}, {\n  small: '&darr;',\n  shift: null,\n  code: 'ArrowDown'\n}, {\n  small: '&rarr;',\n  shift: null,\n  code: 'ArrowRight'\n}, {\n  small: 'Win',\n  shift: null,\n  code: 'Win'\n}]);\n\n//# sourceURL=webpack:///./virtual-keyboard/js/ru.js?");

/***/ }),

/***/ "./virtual-keyboard/js/script.js":
/*!***************************************!*\
  !*** ./virtual-keyboard/js/script.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard.js */ \"./virtual-keyboard/js/keyboard.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./virtual-keyboard/js/storage.js\");\n/* eslint-disable import/no-named-as-default */\n\n/* eslint-disable import/no-named-as-default-member */\n\n/* eslint-disable import/extensions */\n\n\nvar symbolsOrder = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'], ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'], ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'], ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'], ['ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']];\nnew _keyboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](symbolsOrder).init(Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"get\"])('lang', '\"en\"')).generateLayout();\n\n//# sourceURL=webpack:///./virtual-keyboard/js/script.js?");

/***/ }),

/***/ "./virtual-keyboard/js/storage.js":
/*!****************************************!*\
  !*** ./virtual-keyboard/js/storage.js ***!
  \****************************************/
/*! exports provided: set, get, del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"del\", function() { return del; });\nfunction set(name, value) {\n  window.localStorage.setItem(name, JSON.stringify(value));\n}\nfunction get(name) {\n  var subst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  return JSON.parse(window.localStorage.getItem(name) || subst);\n}\nfunction del(name) {\n  localStorage.removeItem(name);\n}\n\n//# sourceURL=webpack:///./virtual-keyboard/js/storage.js?");

/***/ }),

/***/ "./virtual-keyboard/style.css":
/*!************************************!*\
  !*** ./virtual-keyboard/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./virtual-keyboard/style.css?");

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./virtual-keyboard/js/script.js ./virtual-keyboard/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./virtual-keyboard/js/script.js */\"./virtual-keyboard/js/script.js\");\nmodule.exports = __webpack_require__(/*! ./virtual-keyboard/style.css */\"./virtual-keyboard/style.css\");\n\n\n//# sourceURL=webpack:///multi_./virtual-keyboard/js/script.js_./virtual-keyboard/style.css?");

/***/ })

/******/ });