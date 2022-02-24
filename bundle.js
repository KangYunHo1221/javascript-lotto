/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/Controller.js */ "./src/js/controllers/Controller.js");

new _controllers_Controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller();

/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "CONDITIONS": () => (/* binding */ CONDITIONS)
/* harmony export */ });
var ERROR_MESSAGE = {
  NEGATIVE_INPUT_ERROR: 'is money negative',
  NOT_INTEGER_INPUT_ERROR: 'is money not a integer',
  NOT_MUTIPLE_THOUSAND: 'is money not mutiple of thousand'
};
var CONDITIONS = {
  LOTTO_SIZE: 7,
  LOTTO_NUM_MIN: 1,
  LOTTO_NUM_MAX: 45,
  LOTTO_PRICE: 1000
};

/***/ }),

/***/ "./src/js/controllers/Controller.js":
/*!******************************************!*\
  !*** ./src/js/controllers/Controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _view_View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/View.js */ "./src/js/view/View.js");
/* harmony import */ var _model_LottoGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/LottoGame.js */ "./src/js/model/LottoGame.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.view = new _view_View_js__WEBPACK_IMPORTED_MODULE_0__.View();
    this.lottoGame = new _model_LottoGame_js__WEBPACK_IMPORTED_MODULE_1__.LottoGame();
    this.purchaseLotto();
  }

  _createClass(Controller, [{
    key: "purchaseLotto",
    value: function purchaseLotto() {
      var _this = this;

      this.view.purchaseBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (_this.detectInvalidInput()) {
          return;
        }

        _this.lottoGame.insertMoney(Number(_this.view.moneyInput.value));

        _this.lottoGame.buyLotto();

        _this.view.uncheckToggleSwitch();

        _this.view.clearMoneyInput();

        _this.view.showLottoStatusContainer();

        _this.view.showWinningLottoContainer();

        _this.view.showPurchasedLottos(_this.lottoGame.lottoWallet);

        _this.bindToggleEvent();
      });
    }
  }, {
    key: "bindToggleEvent",
    value: function bindToggleEvent() {
      var _this2 = this;

      this.view.toggleBtn.addEventListener('click', function () {
        if (_this2.view.toggleBtn.checked) {
          _this2.view.lottosToggleOn(_this2.lottoGame.lottoWallet);

          return;
        }

        _this2.view.lottosToggleOff(_this2.lottoGame.lottoWallet);
      });
    }
  }, {
    key: "detectInvalidInput",
    value: function detectInvalidInput() {
      try {
        _utils_js__WEBPACK_IMPORTED_MODULE_2__.validator.isInputValid(Number(this.view.moneyInput.value));
      } catch (err) {
        this.view.clearMoneyInput();
        return true;
      }

      return false;
    }
  }]);

  return Controller;
}();

/***/ }),

/***/ "./src/js/model/Lotto.js":
/*!*******************************!*\
  !*** ./src/js/model/Lotto.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lotto": () => (/* binding */ Lotto)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Lotto = /*#__PURE__*/function () {
  function Lotto() {
    _classCallCheck(this, Lotto);

    this.numbers = [];
    this.makeLottoNumber();
  }

  _createClass(Lotto, [{
    key: "makeLottoNumber",
    value: function makeLottoNumber() {
      var tempLottoNumbers = new Set();

      while (tempLottoNumbers.size < _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.CONDITIONS.LOTTO_SIZE) {
        tempLottoNumbers.add(_utils_js__WEBPACK_IMPORTED_MODULE_0__.getValues.randomInt(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.CONDITIONS.LOTTO_NUM_MIN, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.CONDITIONS.LOTTO_NUM_MAX));
      }

      this.numbers = _toConsumableArray(tempLottoNumbers);
    }
  }]);

  return Lotto;
}();

/***/ }),

/***/ "./src/js/model/LottoGame.js":
/*!***********************************!*\
  !*** ./src/js/model/LottoGame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LottoGame": () => (/* binding */ LottoGame)
/* harmony export */ });
/* harmony import */ var _Lotto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lotto.js */ "./src/js/model/Lotto.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var LottoGame = /*#__PURE__*/function () {
  function LottoGame() {
    _classCallCheck(this, LottoGame);

    this.moneyInput;
    this.lottoWallet = [];
  }

  _createClass(LottoGame, [{
    key: "insertMoney",
    value: function insertMoney(moneyInput) {
      this.moneyInput = moneyInput;
    }
  }, {
    key: "buyLotto",
    value: function buyLotto() {
      for (var i = 0; i * _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.CONDITIONS.LOTTO_PRICE < this.moneyInput; i++) {
        this.lottoWallet.push(new _Lotto_js__WEBPACK_IMPORTED_MODULE_0__.Lotto());
      }
    }
  }]);

  return LottoGame;
}();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validator": () => (/* binding */ validator),
/* harmony export */   "getValues": () => (/* binding */ getValues)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/constants */ "./src/js/constants/constants.js");

var validator = {
  isInputValid: function isInputValid(input) {
    if (!this.isMoneyPositive(input)) {
      alert(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NEGATIVE_INPUT_ERROR);
      throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NEGATIVE_INPUT_ERROR);
    }

    if (!this.isMoneyInteger(input)) {
      alert(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_INTEGER_INPUT_ERROR);
      throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_INTEGER_INPUT_ERROR);
    }

    if (!this.isMoneyMultiplesOfThousand(input)) {
      alert(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_MUTIPLE_THOUSAND);
      throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_MUTIPLE_THOUSAND);
    }

    return true;
  },
  isMoneyPositive: function isMoneyPositive(input) {
    return input > 0;
  },
  isMoneyInteger: function isMoneyInteger(input) {
    return Number.isInteger(input);
  },
  isMoneyMultiplesOfThousand: function isMoneyMultiplesOfThousand(input) {
    return input % 1000 === 0;
  }
};
var getValues = {
  randomInt: function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

/***/ }),

/***/ "./src/js/view/View.js":
/*!*****************************!*\
  !*** ./src/js/view/View.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);

    this.registerButtons();
    this.registerInput();
  }

  _createClass(View, [{
    key: "registerButtons",
    value: function registerButtons() {
      this.purchaseBtn = document.getElementById('purchase-button');
      this.toggleBtn = document.getElementById('toggle-check');
    }
  }, {
    key: "registerInput",
    value: function registerInput() {
      this.moneyInput = document.getElementById('money-input');
    }
  }, {
    key: "showLottoStatusContainer",
    value: function showLottoStatusContainer() {
      this.lottoStatusContainer = document.getElementById('lotto-status-container');
      this.lottoStatusContainer.style.visibility = 'visible';
    }
  }, {
    key: "showWinningLottoContainer",
    value: function showWinningLottoContainer() {
      this.winningLottoContainer = document.getElementById('winning-lotto-container');
      this.winningLottoContainer.style.visibility = 'visible';
    }
  }, {
    key: "showPurchasedLottos",
    value: function showPurchasedLottos(lottoWallet) {
      this.lottoIcons = document.getElementById('lotto-icons');
      this.lottoIcons.innerHTML = '🎟️'.repeat(lottoWallet.length);
      this.lottoNumberLabel = document.getElementById('lotto-quantity-label');
      this.lottoNumberLabel.innerHTML = "\uCD1D ".concat(lottoWallet.length, "\uAC1C\uB97C \uAD6C\uB9E4\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
  }, {
    key: "lottosToggleOn",
    value: function lottosToggleOn(lottoWallet) {
      var paddedLottoNumbers = this.padLottoNumbers(lottoWallet);
      var lottoStatusString = paddedLottoNumbers.map(function (padded) {
        return "\uD83C\uDF9F\uFE0F ".concat(padded, "<br>");
      });
      this.lottoIcons.innerHTML = lottoStatusString.join('');
    }
  }, {
    key: "lottosToggleOff",
    value: function lottosToggleOff(lottoWallet) {
      this.lottoIcons = document.getElementById('lotto-icons');
      this.lottoIcons.innerHTML = '🎟️'.repeat(lottoWallet.length);
    }
  }, {
    key: "clearMoneyInput",
    value: function clearMoneyInput() {
      this.moneyInput.value = '';
      this.moneyInput.focus();
    }
  }, {
    key: "uncheckToggleSwitch",
    value: function uncheckToggleSwitch() {
      this.toggleBtn.checked = false;
    }
  }, {
    key: "padLottoNumbers",
    value: function padLottoNumbers(lottoWallet) {
      return lottoWallet.map(function (lotto) {
        return lotto.numbers.map(function (x) {
          return String(x).padStart(3, ' ');
        });
      });
    }
  }]);

  return View;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#app {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#money-input-container {\r\n  display: flex;\r\n  padding: 10px;\r\n  width: 70%;\r\n  flex-direction: column;\r\n}\r\n\r\n#money-input-field {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n}\r\n\r\n#money-input {\r\n  width: 80%;\r\n  height: 36px;\r\n  left: 0px;\r\n  top: 28px;\r\n}\r\n\r\n#purchase-button {\r\n  padding: 6px;\r\n  width: 15%;\r\n  background: #00bcd4;\r\n  border-radius: 4px;\r\n}\r\n\r\n#lotto-status-container {\r\n  visibility: collapse;\r\n  display: grid;\r\n  padding: 10px;\r\n  width: 70%;\r\n  flex-direction: column;\r\n  grid-template-areas:\r\n    'nl nl nl nl nl nl nl tg'\r\n    'ic ic ic ic ic ic ic sw';\r\n}\r\n\r\n#lotto-quantity-label {\r\n  grid-area: nl;\r\n}\r\n\r\n#lotto-icons {\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  line-height: 36px;\r\n  grid-area: ic;\r\n}\r\n\r\n#toggle-label {\r\n  grid-area: tg;\r\n}\r\n\r\n#winning-lotto-container {\r\n  display: grid;\r\n  padding: 10px;\r\n  width: 70%;\r\n  grid-gap: 3px;\r\n  visibility: collapse;\r\n\r\n  grid-template-areas:\r\n    'hd hd hd hd hd hd hd hd'\r\n    'hd2 hd2 hd2  hd2  .  .  . hd3'\r\n    'wn1 wn2 wn3 wn4 wn5 wn6 . wn7'\r\n    'cr cr cr cr cr cr cr cr';\r\n}\r\n\r\n#winning-lotto-guide-label {\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  grid-area: hd;\r\n  padding: 5px;\r\n}\r\n\r\n#winning-number-label {\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  grid-area: hd2;\r\n  padding: 5px;\r\n}\r\n\r\n#bonus-number-label {\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  grid-area: hd3;\r\n  padding: 5px;\r\n}\r\n\r\n.winning-number {\r\n  height: 35px;\r\n  width: 35px;\r\n  background: #ffffff;\r\n  border: 1px solid rgba(0, 0, 0, 0.12);\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n}\r\n\r\n#winning-number1 {\r\n  grid-area: wn1;\r\n}\r\n#winning-number2 {\r\n  grid-area: wn2;\r\n}\r\n#winning-number3 {\r\n  grid-area: wn3;\r\n}\r\n#winning-number4 {\r\n  grid-area: wn4;\r\n}\r\n#winning-number5 {\r\n  grid-area: wn5;\r\n}\r\n#winning-number6 {\r\n  grid-area: wn6;\r\n}\r\n#winning-number7 {\r\n  grid-area: wn7;\r\n}\r\n\r\n#confirm-result-label {\r\n  grid-area: cr;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  padding: 6px;\r\n  width: 100%;\r\n  background: #00bcd4;\r\n  border-radius: 4px;\r\n  margin-top: 20px;\r\n}\r\n\r\n/* 토글 버튼 */\r\n.switch {\r\n  grid-area: sw;\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 21px;\r\n  top: 5px;\r\n  left: 20px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: '';\r\n  height: 17px;\r\n  width: 17px;\r\n  left: 4px;\r\n  bottom: 2.5px;\r\n  background-color: white;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196f3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196f3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  -ms-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\nbutton {\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n\r\n  border-radius: 10px;\r\n  border-color: #00bcd4;\r\n\r\n  cursor: pointer;\r\n  letter-spacing: 1.25px;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,SAAS;EACT,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB;;6BAE2B;AAC7B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,aAAa;EACb,UAAU;EACV,aAAa;EACb,oBAAoB;;EAEpB;;;;6BAI2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,qCAAqC;EACrC,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,UAAU;AACV;EACE,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA,oBAAoB;AACpB;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;;EAEvB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;;EAEjB,mBAAmB;EACnB,qBAAqB;;EAErB,eAAe;EACf,sBAAsB;EACtB,yBAAyB;EACzB,cAAc;AAChB","sourcesContent":["#app {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#money-input-container {\r\n  display: flex;\r\n  padding: 10px;\r\n  width: 70%;\r\n  flex-direction: column;\r\n}\r\n\r\n#money-input-field {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n}\r\n\r\n#money-input {\r\n  width: 80%;\r\n  height: 36px;\r\n  left: 0px;\r\n  top: 28px;\r\n}\r\n\r\n#purchase-button {\r\n  padding: 6px;\r\n  width: 15%;\r\n  background: #00bcd4;\r\n  border-radius: 4px;\r\n}\r\n\r\n#lotto-status-container {\r\n  visibility: collapse;\r\n  display: grid;\r\n  padding: 10px;\r\n  width: 70%;\r\n  flex-direction: column;\r\n  grid-template-areas:\r\n    'nl nl nl nl nl nl nl tg'\r\n    'ic ic ic ic ic ic ic sw';\r\n}\r\n\r\n#lotto-quantity-label {\r\n  grid-area: nl;\r\n}\r\n\r\n#lotto-icons {\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  line-height: 36px;\r\n  grid-area: ic;\r\n}\r\n\r\n#toggle-label {\r\n  grid-area: tg;\r\n}\r\n\r\n#winning-lotto-container {\r\n  display: grid;\r\n  padding: 10px;\r\n  width: 70%;\r\n  grid-gap: 3px;\r\n  visibility: collapse;\r\n\r\n  grid-template-areas:\r\n    'hd hd hd hd hd hd hd hd'\r\n    'hd2 hd2 hd2  hd2  .  .  . hd3'\r\n    'wn1 wn2 wn3 wn4 wn5 wn6 . wn7'\r\n    'cr cr cr cr cr cr cr cr';\r\n}\r\n\r\n#winning-lotto-guide-label {\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  grid-area: hd;\r\n  padding: 5px;\r\n}\r\n\r\n#winning-number-label {\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  grid-area: hd2;\r\n  padding: 5px;\r\n}\r\n\r\n#bonus-number-label {\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  grid-area: hd3;\r\n  padding: 5px;\r\n}\r\n\r\n.winning-number {\r\n  height: 35px;\r\n  width: 35px;\r\n  background: #ffffff;\r\n  border: 1px solid rgba(0, 0, 0, 0.12);\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n}\r\n\r\n#winning-number1 {\r\n  grid-area: wn1;\r\n}\r\n#winning-number2 {\r\n  grid-area: wn2;\r\n}\r\n#winning-number3 {\r\n  grid-area: wn3;\r\n}\r\n#winning-number4 {\r\n  grid-area: wn4;\r\n}\r\n#winning-number5 {\r\n  grid-area: wn5;\r\n}\r\n#winning-number6 {\r\n  grid-area: wn6;\r\n}\r\n#winning-number7 {\r\n  grid-area: wn7;\r\n}\r\n\r\n#confirm-result-label {\r\n  grid-area: cr;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  padding: 6px;\r\n  width: 100%;\r\n  background: #00bcd4;\r\n  border-radius: 4px;\r\n  margin-top: 20px;\r\n}\r\n\r\n/* 토글 버튼 */\r\n.switch {\r\n  grid-area: sw;\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 21px;\r\n  top: 5px;\r\n  left: 20px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: '';\r\n  height: 17px;\r\n  width: 17px;\r\n  left: 4px;\r\n  bottom: 2.5px;\r\n  background-color: white;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196f3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196f3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  -ms-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\nbutton {\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  font-family: Roboto;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n\r\n  border-radius: 10px;\r\n  border-color: #00bcd4;\r\n\r\n  cursor: pointer;\r\n  letter-spacing: 1.25px;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map