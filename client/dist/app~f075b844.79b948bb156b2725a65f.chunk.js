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

/***/ "BEPO":
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/*! exports provided: debug, testing, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"debug\\\":true,\\\"testing\\\":true}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkVQTy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///BEPO\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\nvar App = (function () {\n    function App() {\n        var canvas = document.getElementById('myCanvas');\n        var context = canvas.getContext('2d');\n        this.drawGrid(context);\n        canvas.addEventListener('click', function (evt) {\n            var mousePos = this.getSquare(canvas, evt);\n            this.fillSquare(context, mousePos.x, mousePos.y);\n        }, false);\n    }\n    App.prototype.getSquare = function (canvas, evt) {\n        var rect = canvas.getBoundingClientRect();\n        return {\n            x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left) % 10,\n            y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top) % 10\n        };\n    };\n    App.prototype.drawGrid = function (context) {\n        for (var x = 0.5; x < 10001; x += 10) {\n            context.moveTo(x, 0);\n            context.lineTo(x, 10000);\n        }\n        for (var y = 0.5; y < 10001; y += 10) {\n            context.moveTo(0, y);\n            context.lineTo(10000, y);\n        }\n        context.strokeStyle = \"#ddd\";\n        context.stroke();\n    };\n    App.prototype.fillSquare = function (context, x, y) {\n        context.fillStyle = \"gray\";\n        context.fillRect(x, y, 9, 9);\n    };\n    return App;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNhbnZhczphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdGhpcy5kcmF3R3JpZChjb250ZXh0KTtcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgIHZhciBtb3VzZVBvcyA9IHRoaXMuZ2V0U3F1YXJlKGNhbnZhcywgZXZ0KTtcbiAgICB0aGlzLmZpbGxTcXVhcmUoY29udGV4dCwgbW91c2VQb3MueCwgbW91c2VQb3MueSlcbn0sIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3F1YXJlKGNhbnZhcywgZXZ0KSB7XG4gICAgdmFyIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogMSArIChldnQuY2xpZW50WCAtIHJlY3QubGVmdCkgLSAoZXZ0LmNsaWVudFggLSByZWN0LmxlZnQpJTEwLFxuICAgICAgICB5OiAxICsgKGV2dC5jbGllbnRZIC0gcmVjdC50b3ApIC0gKGV2dC5jbGllbnRZIC0gcmVjdC50b3ApJTEwXG4gICAgfTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBkcmF3R3JpZChjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgeCA9IDAuNTsgeCA8IDEwMDAxOyB4ICs9IDEwKSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyh4LCAwKTtcbiAgICAgIGNvbnRleHQubGluZVRvKHgsIDEwMDAwKTtcbiAgICB9XG4gICAgXG4gICAgZm9yICh2YXIgeSA9IDAuNTsgeSA8IDEwMDAxOyB5ICs9IDEwKSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbygwLCB5KTtcbiAgICAgIGNvbnRleHQubGluZVRvKDEwMDAwLCB5KTtcbiAgICB9XG4gICAgXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiI2RkZFwiO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cbiAgXG4gIHByaXZhdGUgZmlsbFNxdWFyZShjb250ZXh0LCB4LCB5KXtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiZ3JheVwiXG4gICAgY29udGV4dC5maWxsUmVjdCh4LHksOSw5KTtcbiAgfVxuXG59XG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n  <!-- <h1>${message}</h1>\\n  <form submit.trigger=\\\"calculate()\\\">\\n      <input id=\\\"firstParameter\\\" type=\\\"text\\\" value.bind=\\\"firstParameter\\\">\\n      <select value.bind=\\\"selectedOperator\\\" >\\n        <option model.bind=\\\"null\\\">Choose...</option>\\n        <option repeat.for=\\\"operator of operators\\\"\\n                model.bind=\\\"operator\\\">\\n          ${operator.displayName}\\n        </option>\\n      </select>     \\n      <button type=\\\"submit\\\">Calculate</button>\\n      <input id=\\\"secondParameter\\\" type=\\\"text\\\" value.bind=\\\"secondParameter\\\">\\n    </form>\\n  <div>\\n      <textarea value.bind=\\\"result\\\">\\n  </div> -->\\n  \\n  <!-- <table border=\\\"1\\\">\\n      <template repeat.for=\\\"i of 100\\\">\\n          <tr>\\n              <td virtual-repeat.for=\\\"j of numbers\\\">${$parent.i}, ${j}</td>\\n          </tr>\\n      </template>\\n  </table> -->\\n  \\n  <canvas id=\\\"myCanvas\\\" width=\\\"10000\\\" height=\\\"10000\\\"></canvas>\\n\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgPCEtLSA8aDE+JHttZXNzYWdlfTwvaDE+XFxuICA8Zm9ybSBzdWJtaXQudHJpZ2dlcj1cXFwiY2FsY3VsYXRlKClcXFwiPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiZmlyc3RQYXJhbWV0ZXJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlLmJpbmQ9XFxcImZpcnN0UGFyYW1ldGVyXFxcIj5cXG4gICAgICA8c2VsZWN0IHZhbHVlLmJpbmQ9XFxcInNlbGVjdGVkT3BlcmF0b3JcXFwiID5cXG4gICAgICAgIDxvcHRpb24gbW9kZWwuYmluZD1cXFwibnVsbFxcXCI+Q2hvb3NlLi4uPC9vcHRpb24+XFxuICAgICAgICA8b3B0aW9uIHJlcGVhdC5mb3I9XFxcIm9wZXJhdG9yIG9mIG9wZXJhdG9yc1xcXCJcXG4gICAgICAgICAgICAgICAgbW9kZWwuYmluZD1cXFwib3BlcmF0b3JcXFwiPlxcbiAgICAgICAgICAke29wZXJhdG9yLmRpc3BsYXlOYW1lfVxcbiAgICAgICAgPC9vcHRpb24+XFxuICAgICAgPC9zZWxlY3Q+ICAgICBcXG4gICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+Q2FsY3VsYXRlPC9idXR0b24+XFxuICAgICAgPGlucHV0IGlkPVxcXCJzZWNvbmRQYXJhbWV0ZXJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlLmJpbmQ9XFxcInNlY29uZFBhcmFtZXRlclxcXCI+XFxuICAgIDwvZm9ybT5cXG4gIDxkaXY+XFxuICAgICAgPHRleHRhcmVhIHZhbHVlLmJpbmQ9XFxcInJlc3VsdFxcXCI+XFxuICA8L2Rpdj4gLS0+XFxuICBcXG4gIDwhLS0gPHRhYmxlIGJvcmRlcj1cXFwiMVxcXCI+XFxuICAgICAgPHRlbXBsYXRlIHJlcGVhdC5mb3I9XFxcImkgb2YgMTAwXFxcIj5cXG4gICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgPHRkIHZpcnR1YWwtcmVwZWF0LmZvcj1cXFwiaiBvZiBudW1iZXJzXFxcIj4keyRwYXJlbnQuaX0sICR7an08L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICA8L3RhYmxlPiAtLT5cXG4gIFxcbiAgPGNhbnZhcyBpZD1cXFwibXlDYW52YXNcXFwiIHdpZHRoPVxcXCIxMDAwMFxcXCIgaGVpZ2h0PVxcXCIxMDAwMFxcXCI+PC9jYW52YXM+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ \"BEPO\");\nvar _config_environment_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/environment.json */ \"BEPO\", 1);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\n\nfunction configure(aurelia) {\n    aurelia.use\n        .standardConfiguration()\n        .feature('resources/index')\n        .plugin('aurelia-ui-virtualization');\n    aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"debug\"] ? 'debug' : 'warn');\n    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"testing\"]) {\n        aurelia.use.plugin('aurelia-testing');\n    }\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCAqIGFzIGVudmlyb25tZW50IGZyb20gJy4uL2NvbmZpZy9lbnZpcm9ubWVudC5qc29uJztcbmltcG9ydCB7UExBVEZPUk19IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmZlYXR1cmUoUExBVEZPUk0ubW9kdWxlTmFtZSgncmVzb3VyY2VzL2luZGV4JykpXG4gICAgLnBsdWdpbihQTEFURk9STS5tb2R1bGVOYW1lKCdhdXJlbGlhLXVpLXZpcnR1YWxpemF0aW9uJykpO1xuXG4gIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZyhlbnZpcm9ubWVudC5kZWJ1ZyA/ICdkZWJ1ZycgOiAnd2FybicpO1xuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2F1cmVsaWEtdGVzdGluZycpKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdChQTEFURk9STS5tb2R1bGVOYW1lKCdhcHAnKSkpO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///main\n");

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

},[[0,"runtime~app","vendors~0ba1d959","vendors~556c66f2","vendors~72fdf3f2","vendors~50e8d500","vendors~ecff2e3d","vendors~9e0f4621","vendors~4eb3b4b8","vendors~8c6a94b5","vendors~f9ca8911"]]]);