(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~f075b844"],{

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ "2/Y+":
/*!**************************!*\
  !*** ./src/parameter.ts ***!
  \**************************/
/*! exports provided: Parameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Parameter\", function() { return Parameter; });\nvar Parameter = (function () {\n    function Parameter(value) {\n        this.value = value;\n    }\n    return Parameter;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi9ZKy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJhbWV0ZXIudHM/ZGJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFyYW1ldGVyIHtcblxuICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2/Y+\n");

/***/ }),

/***/ "BEPO":
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/*! exports provided: debug, testing, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"debug\\\":true,\\\"testing\\\":true}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkVQTy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///BEPO\n");

/***/ }),

/***/ "IFHk":
/*!*************************!*\
  !*** ./src/operator.ts ***!
  \*************************/
/*! exports provided: OperatorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OperatorBase\", function() { return OperatorBase; });\nvar OperatorBase = (function () {\n    function OperatorBase() {\n    }\n    return OperatorBase;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUZIay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9vcGVyYXRvci50cz8yMDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcmFtZXRlciB9IGZyb20gJy4vcGFyYW1ldGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9wZXJhdG9yQmFzZSB7ICAgIFxuICBhYnN0cmFjdCBuYW1lOiBzdHJpbmc7XG4gIGFic3RyYWN0IGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGFic3RyYWN0IGFwcGx5KHBhcmFtZXRlcnM6IFBhcmFtZXRlcltdKSA6IGFueTtcbn1cblxuXG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///IFHk\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameter */ \"2/Y+\");\n/* harmony import */ var _add_operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-operator */ \"r5dd\");\n\n\nvar App = (function () {\n    function App() {\n        this.message = 'Hello World!';\n        this.operators = [];\n        this.operators.push(new _add_operator__WEBPACK_IMPORTED_MODULE_1__[\"AddOperator\"]());\n        this.operators.push(new _add_operator__WEBPACK_IMPORTED_MODULE_1__[\"SubOperator\"]());\n        this.operators.push(new _add_operator__WEBPACK_IMPORTED_MODULE_1__[\"MulOperator\"]());\n        this.operators.push(new _add_operator__WEBPACK_IMPORTED_MODULE_1__[\"DivOperator\"]());\n    }\n    App.prototype.calculate = function () {\n        var parameters = [];\n        parameters.push(new _parameter__WEBPACK_IMPORTED_MODULE_0__[\"Parameter\"](this.firstParameter));\n        parameters.push(new _parameter__WEBPACK_IMPORTED_MODULE_0__[\"Parameter\"](this.secondParameter));\n        this.result = this.selectedOperator.apply(parameters);\n    };\n    return App;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcmFtZXRlciB9IGZyb20gJy4vcGFyYW1ldGVyJztcbmltcG9ydCB7IE9wZXJhdG9yQmFzZSB9IGZyb20gJy4vb3BlcmF0b3InO1xuaW1wb3J0IHtBZGRPcGVyYXRvciwgU3ViT3BlcmF0b3IsIE11bE9wZXJhdG9yLCBEaXZPcGVyYXRvcn0gZnJvbSAnLi9hZGQtb3BlcmF0b3InO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyA9ICdIZWxsbyBXb3JsZCEnO1xuXG4gIHB1YmxpYyBmaXJzdFBhcmFtZXRlciA6IHN0cmluZztcbiAgcHVibGljIHNlY29uZFBhcmFtZXRlciA6IHN0cmluZztcbiAgcHVibGljIHNlbGVjdGVkT3BlcmF0b3I6IE9wZXJhdG9yQmFzZTtcbiAgcHVibGljIG9wZXJhdG9yczogT3BlcmF0b3JCYXNlW10gPSBbXTtcbiAgcHVibGljIHJlc3VsdDogYW55O1xuIFxuICBjb25zdHJ1Y3RvcigpIHsgICBcbiAgICB0aGlzLm9wZXJhdG9ycy5wdXNoKG5ldyBBZGRPcGVyYXRvcigpKTtcbiAgICB0aGlzLm9wZXJhdG9ycy5wdXNoKG5ldyBTdWJPcGVyYXRvcigpKTtcbiAgICB0aGlzLm9wZXJhdG9ycy5wdXNoKG5ldyBNdWxPcGVyYXRvcigpKTtcbiAgICB0aGlzLm9wZXJhdG9ycy5wdXNoKG5ldyBEaXZPcGVyYXRvcigpKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IFtdO1xuICAgIHBhcmFtZXRlcnMucHVzaChuZXcgUGFyYW1ldGVyKHRoaXMuZmlyc3RQYXJhbWV0ZXIpKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2gobmV3IFBhcmFtZXRlcih0aGlzLnNlY29uZFBhcmFtZXRlcikpO1xuICAgIHRoaXMucmVzdWx0ID0gdGhpcy5zZWxlY3RlZE9wZXJhdG9yLmFwcGx5KHBhcmFtZXRlcnMpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBU0E7QUFSQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n  <!-- <h1>${message}</h1>\\n  <form submit.trigger=\\\"calculate()\\\">\\n      <input id=\\\"firstParameter\\\" type=\\\"text\\\" value.bind=\\\"firstParameter\\\">\\n      <select value.bind=\\\"selectedOperator\\\" >\\n        <option model.bind=\\\"null\\\">Choose...</option>\\n        <option repeat.for=\\\"operator of operators\\\"\\n                model.bind=\\\"operator\\\">\\n          ${operator.displayName}\\n        </option>\\n      </select>     \\n      <button type=\\\"submit\\\">Calculate</button>\\n      <input id=\\\"secondParameter\\\" type=\\\"text\\\" value.bind=\\\"secondParameter\\\">\\n    </form>\\n  <div>\\n      <textarea value.bind=\\\"result\\\">\\n  </div> -->\\n  <table> \\n    <tr> \\n      <th>Name</th> \\n      <th>Favorite Color</th> \\n    </tr> \\n    <tr> \\n      <td>Bob</td> \\n      <td>Yellow</td> \\n    </tr> \\n    <tr> \\n      <td>Michelle</td> \\n      <td>Purple</td> \\n    </tr>\\n   </table>\\n\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgPCEtLSA8aDE+JHttZXNzYWdlfTwvaDE+XFxuICA8Zm9ybSBzdWJtaXQudHJpZ2dlcj1cXFwiY2FsY3VsYXRlKClcXFwiPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiZmlyc3RQYXJhbWV0ZXJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlLmJpbmQ9XFxcImZpcnN0UGFyYW1ldGVyXFxcIj5cXG4gICAgICA8c2VsZWN0IHZhbHVlLmJpbmQ9XFxcInNlbGVjdGVkT3BlcmF0b3JcXFwiID5cXG4gICAgICAgIDxvcHRpb24gbW9kZWwuYmluZD1cXFwibnVsbFxcXCI+Q2hvb3NlLi4uPC9vcHRpb24+XFxuICAgICAgICA8b3B0aW9uIHJlcGVhdC5mb3I9XFxcIm9wZXJhdG9yIG9mIG9wZXJhdG9yc1xcXCJcXG4gICAgICAgICAgICAgICAgbW9kZWwuYmluZD1cXFwib3BlcmF0b3JcXFwiPlxcbiAgICAgICAgICAke29wZXJhdG9yLmRpc3BsYXlOYW1lfVxcbiAgICAgICAgPC9vcHRpb24+XFxuICAgICAgPC9zZWxlY3Q+ICAgICBcXG4gICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+Q2FsY3VsYXRlPC9idXR0b24+XFxuICAgICAgPGlucHV0IGlkPVxcXCJzZWNvbmRQYXJhbWV0ZXJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlLmJpbmQ9XFxcInNlY29uZFBhcmFtZXRlclxcXCI+XFxuICAgIDwvZm9ybT5cXG4gIDxkaXY+XFxuICAgICAgPHRleHRhcmVhIHZhbHVlLmJpbmQ9XFxcInJlc3VsdFxcXCI+XFxuICA8L2Rpdj4gLS0+XFxuICA8dGFibGU+IFxcbiAgICA8dHI+IFxcbiAgICAgIDx0aD5OYW1lPC90aD4gXFxuICAgICAgPHRoPkZhdm9yaXRlIENvbG9yPC90aD4gXFxuICAgIDwvdHI+IFxcbiAgICA8dHI+IFxcbiAgICAgIDx0ZD5Cb2I8L3RkPiBcXG4gICAgICA8dGQ+WWVsbG93PC90ZD4gXFxuICAgIDwvdHI+IFxcbiAgICA8dHI+IFxcbiAgICAgIDx0ZD5NaWNoZWxsZTwvdGQ+IFxcbiAgICAgIDx0ZD5QdXJwbGU8L3RkPiBcXG4gICAgPC90cj5cXG4gICA8L3RhYmxlPlxcblxcbjwvdGVtcGxhdGU+XFxuXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ \"BEPO\");\nvar _config_environment_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/environment.json */ \"BEPO\", 1);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\n\nfunction configure(aurelia) {\n    aurelia.use\n        .standardConfiguration()\n        .feature('resources/index');\n    aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"debug\"] ? 'debug' : 'warn');\n    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"testing\"]) {\n        aurelia.use.plugin('aurelia-testing');\n    }\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCAqIGFzIGVudmlyb25tZW50IGZyb20gJy4uL2NvbmZpZy9lbnZpcm9ubWVudC5qc29uJztcbmltcG9ydCB7UExBVEZPUk19IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmZlYXR1cmUoUExBVEZPUk0ubW9kdWxlTmFtZSgncmVzb3VyY2VzL2luZGV4JykpO1xuXG4gIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZyhlbnZpcm9ubWVudC5kZWJ1ZyA/ICdkZWJ1ZycgOiAnd2FybicpO1xuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2F1cmVsaWEtdGVzdGluZycpKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdChQTEFURk9STS5tb2R1bGVOYW1lKCdhcHAnKSkpO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "r5dd":
/*!*****************************!*\
  !*** ./src/add-operator.ts ***!
  \*****************************/
/*! exports provided: AddOperator, SubOperator, MulOperator, DivOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddOperator\", function() { return AddOperator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubOperator\", function() { return SubOperator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MulOperator\", function() { return MulOperator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivOperator\", function() { return DivOperator; });\n/* harmony import */ var _operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operator */ \"IFHk\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar AddOperator = (function (_super) {\n    __extends(AddOperator, _super);\n    function AddOperator() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.name = \"Add\";\n        _this.displayName = \"+\";\n        return _this;\n    }\n    AddOperator.prototype.apply = function (parameters) {\n        var sum = 0.0;\n        parameters.forEach(function (element) {\n            sum += +element.value;\n        });\n        return sum;\n    };\n    return AddOperator;\n}(_operator__WEBPACK_IMPORTED_MODULE_0__[\"OperatorBase\"]));\n\nvar SubOperator = (function (_super) {\n    __extends(SubOperator, _super);\n    function SubOperator() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.name = \"Sub\";\n        _this.displayName = \"-\";\n        return _this;\n    }\n    SubOperator.prototype.apply = function (parameters) {\n        return parameters[0].value - parameters[1].value;\n    };\n    return SubOperator;\n}(_operator__WEBPACK_IMPORTED_MODULE_0__[\"OperatorBase\"]));\n\nvar MulOperator = (function (_super) {\n    __extends(MulOperator, _super);\n    function MulOperator() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.name = \"Mul\";\n        _this.displayName = \"*\";\n        return _this;\n    }\n    MulOperator.prototype.apply = function (parameters) {\n        var product = 1.0;\n        parameters.forEach(function (element) {\n            product *= element.value;\n        });\n        return product;\n    };\n    return MulOperator;\n}(_operator__WEBPACK_IMPORTED_MODULE_0__[\"OperatorBase\"]));\n\nvar DivOperator = (function (_super) {\n    __extends(DivOperator, _super);\n    function DivOperator() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.name = \"Div\";\n        _this.displayName = \"/\";\n        return _this;\n    }\n    DivOperator.prototype.apply = function (parameters) {\n        return parameters[0].value / parameters[1].value;\n    };\n    return DivOperator;\n}(_operator__WEBPACK_IMPORTED_MODULE_0__[\"OperatorBase\"]));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjVkZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hZGQtb3BlcmF0b3IudHM/YWY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcGVyYXRvckJhc2UgfSBmcm9tIFwiLi9vcGVyYXRvclwiO1xuaW1wb3J0IHsgUGFyYW1ldGVyIH0gZnJvbSBcInBhcmFtZXRlclwiO1xuXG5leHBvcnQgY2xhc3MgQWRkT3BlcmF0b3IgZXh0ZW5kcyBPcGVyYXRvckJhc2Uge1xuICBuYW1lOiBzdHJpbmcgPSBcIkFkZFwiOyAgXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIitcIjtcbiAgYXBwbHkocGFyYW1ldGVyczogUGFyYW1ldGVyW10pIHtcbiAgICBsZXQgc3VtIDogbnVtYmVyID0gMC4wO1xuICAgIHBhcmFtZXRlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHN1bSs9K2VsZW1lbnQudmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3ViT3BlcmF0b3IgZXh0ZW5kcyBPcGVyYXRvckJhc2Uge1xuICBuYW1lOiBzdHJpbmcgPSBcIlN1YlwiOyAgXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIi1cIjtcbiAgYXBwbHkocGFyYW1ldGVyczogUGFyYW1ldGVyW10pIHtcbiAgICByZXR1cm4gcGFyYW1ldGVyc1swXS52YWx1ZSAtIHBhcmFtZXRlcnNbMV0udmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE11bE9wZXJhdG9yIGV4dGVuZHMgT3BlcmF0b3JCYXNlIHtcbiAgbmFtZTogc3RyaW5nID0gXCJNdWxcIjsgIFxuICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCIqXCI7XG4gIGFwcGx5KHBhcmFtZXRlcnM6IFBhcmFtZXRlcltdKSB7XG4gICAgbGV0IHByb2R1Y3QgPSAxLjA7XG4gICAgcGFyYW1ldGVycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgcHJvZHVjdCo9ZWxlbWVudC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvZHVjdDtcbiAgfVxufVxuXG4gIGV4cG9ydCBjbGFzcyBEaXZPcGVyYXRvciBleHRlbmRzIE9wZXJhdG9yQmFzZSB7XG4gICAgbmFtZTogc3RyaW5nID0gXCJEaXZcIjsgIFxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIi9cIjtcbiAgICBhcHBseShwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJbXSkge1xuICAgICAgcmV0dXJuIHBhcmFtZXRlcnNbMF0udmFsdWUgLyBwYXJhbWV0ZXJzWzFdLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFRQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBSUE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFRQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBSUE7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///r5dd\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\nfunction configure(config) {\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC50cz83NDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ })

},[[0,"runtime~app","vendors~0ba1d959","vendors~556c66f2","vendors~72fdf3f2","vendors~50e8d500","vendors~5ea1390f","vendors~ecff2e3d","vendors~9e0f4621","vendors~f9ca8911"]]]);