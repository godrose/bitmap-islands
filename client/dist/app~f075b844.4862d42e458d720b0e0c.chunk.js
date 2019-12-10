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

/***/ "WGAN":
/*!**********************!*\
  !*** ./src/pixel.ts ***!
  \**********************/
/*! exports provided: Pixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pixel\", function() { return Pixel; });\nvar Pixel = (function () {\n    function Pixel(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return Pixel;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV0dBTi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9waXhlbC50cz81ODYwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQaXhlbCB7XG4gIFxuICBwdWJsaWMgeDogbnVtYmVyO1xuICBwdWJsaWMgeTogbnVtYmVyO1xuICBwdWJsaWMgaXNNYXJrZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfSBcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///WGAN\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _pixel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pixel */ \"WGAN\");\n\nvar App = (function () {\n    function App() {\n    }\n    App.prototype.attached = function () {\n        var _this = this;\n        var canvas = document.getElementById('myCanvas');\n        this.context = canvas.getContext('2d');\n        this.width = 1000;\n        this.height = 1000;\n        this.populateData();\n        this.render();\n        canvas.addEventListener('click', function (evt) {\n            var mousePos = _this.getSquare(canvas, evt);\n            _this.data[mousePos.x][mousePos.y].isMarked = true;\n            _this.render();\n        }, false);\n    };\n    App.prototype.generate = function () {\n        this.populateData();\n        var canvas = document.getElementById('myCanvas');\n        this.drawGridOnCanvas(canvas);\n    };\n    App.prototype.populateData = function () {\n        this.data = new Array();\n        for (var i = 0; i < this.height; i++) {\n            var arr = new Array();\n            for (var j = 0; j < this.width; j++) {\n                arr.push(new _pixel__WEBPACK_IMPORTED_MODULE_0__[\"Pixel\"](i, j));\n            }\n            this.data.push(arr);\n        }\n    };\n    App.prototype.drawGridOnCanvas = function (canvas) {\n        this.drawGrid();\n    };\n    App.prototype.render = function () {\n        this.drawGrid();\n        for (var i = 0; i < this.height; i++) {\n            for (var j = 0; j < this.width; j++) {\n                if (this.data[i][j].isMarked) {\n                    this.fillSquare(i, j);\n                }\n            }\n        }\n        requestAnimationFrame(this.render);\n    };\n    App.prototype.getSquare = function (canvas, evt) {\n        var rect = canvas.getBoundingClientRect();\n        return {\n            x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left) % 10,\n            y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top) % 10\n        };\n    };\n    App.prototype.drawGrid = function () {\n        for (var x = 0.5; x < 10001; x += 10) {\n            this.context.moveTo(x, 0);\n            this.context.lineTo(x, 10000);\n        }\n        for (var y = 0.5; y < 10001; y += 10) {\n            this.context.moveTo(0, y);\n            this.context.lineTo(10000, y);\n        }\n        this.context.strokeStyle = \"#ddd\";\n        this.context.stroke();\n    };\n    App.prototype.fillSquare = function (x, y) {\n        this.context.fillStyle = \"gray\";\n        this.context.fillRect(x, y, 9, 9);\n    };\n    return App;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGl4ZWx9IGZyb20gJy4vcGl4ZWwnO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICBwdWJsaWMgZGF0YTogUGl4ZWxbXVtdO1xuICBwcml2YXRlIGNvbnRleHQ6IGFueTtcbiAgXG4gIGF0dGFjaGVkKCkge1xuICAgIGNvbnN0IGNhbnZhczphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcbiAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLndpZHRoID0gMTAwMDtcbiAgICB0aGlzLmhlaWdodCA9IDEwMDA7XG4gICAgdGhpcy5wb3B1bGF0ZURhdGEoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHsgICAgICBcbiAgICAgIHZhciBtb3VzZVBvcyA9IHRoaXMuZ2V0U3F1YXJlKGNhbnZhcywgZXZ0KTtcbiAgICAgIHRoaXMuZGF0YVttb3VzZVBvcy54XVttb3VzZVBvcy55XS5pc01hcmtlZCA9IHRydWU7ICBcbiAgICAgIHRoaXMucmVuZGVyKCk7ICBcbn0sIGZhbHNlKTtcbiAgfVxuXG4gIGdlbmVyYXRlKCkgeyAgXG4gICAgdGhpcy5wb3B1bGF0ZURhdGEoKTtcbiAgICBjb25zdCBjYW52YXM6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2FudmFzJyk7XG4gICAgdGhpcy5kcmF3R3JpZE9uQ2FudmFzKGNhbnZhcyk7IFxuICB9XG5cbiAgcHJpdmF0ZSBwb3B1bGF0ZURhdGEoKSB7XG4gICAgdGhpcy5kYXRhID0gbmV3IEFycmF5PEFycmF5PFBpeGVsPj4oKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgIGxldCBhcnIgPSBuZXcgQXJyYXk8UGl4ZWw+KCk7ICAgICAgXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2lkdGg7IGorKykge1xuICAgICAgICBhcnIucHVzaChuZXcgUGl4ZWwoaSwgaikpO1xuICAgICAgfSAgICAgIFxuICAgICAgdGhpcy5kYXRhLnB1c2goYXJyKTtcbiAgICB9ICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBkcmF3R3JpZE9uQ2FudmFzKGNhbnZhcykgOiBhbnkgeyAgICAgICAgXG4gICAgdGhpcy5kcmF3R3JpZCgpOyAgICBcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIHRoaXMuZHJhd0dyaWQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFbaV1bal0uaXNNYXJrZWQpIHtcbiAgICAgICAgICB0aGlzLmZpbGxTcXVhcmUoaSwgaik7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgfSAgICAgIFxuICAgIH0gICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3F1YXJlKGNhbnZhcywgZXZ0KSB7XG4gICAgdmFyIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogMSArIChldnQuY2xpZW50WCAtIHJlY3QubGVmdCkgLSAoZXZ0LmNsaWVudFggLSByZWN0LmxlZnQpJTEwLFxuICAgICAgICB5OiAxICsgKGV2dC5jbGllbnRZIC0gcmVjdC50b3ApIC0gKGV2dC5jbGllbnRZIC0gcmVjdC50b3ApJTEwXG4gICAgfTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBkcmF3R3JpZCgpIHtcbiAgICBmb3IgKHZhciB4ID0gMC41OyB4IDwgMTAwMDE7IHggKz0gMTApIHtcbiAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeCwgMCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCwgMTAwMDApO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKHZhciB5ID0gMC41OyB5IDwgMTAwMDE7IHkgKz0gMTApIHtcbiAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oMCwgeSk7XG4gICAgICB0aGlzLmNvbnRleHQubGluZVRvKDEwMDAwLCB5KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjZGRkXCI7XG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICB9XG4gIFxuICBwcml2YXRlIGZpbGxTcXVhcmUoIHgsIHkpe1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImdyYXlcIlxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LHksOSw5KTtcbiAgfVxufVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQWtGQTtBQTNFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>   \\n  <input id = \\\"width\\\" type = \\\"text\\\" value.bind = \\\"width\\\" />\\n  <input id = \\\"height\\\" type = \\\"text\\\" value.bind = \\\"height\\\" />\\n  <button click.delegate = \\\"generate()\\\">Generate</button>\\n  <canvas id=\\\"myCanvas\\\" width.bind=\\\"width\\\" height.bind=\\\"height\\\" ></canvas>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPiAgIFxcbiAgPGlucHV0IGlkID0gXFxcIndpZHRoXFxcIiB0eXBlID0gXFxcInRleHRcXFwiIHZhbHVlLmJpbmQgPSBcXFwid2lkdGhcXFwiIC8+XFxuICA8aW5wdXQgaWQgPSBcXFwiaGVpZ2h0XFxcIiB0eXBlID0gXFxcInRleHRcXFwiIHZhbHVlLmJpbmQgPSBcXFwiaGVpZ2h0XFxcIiAvPlxcbiAgPGJ1dHRvbiBjbGljay5kZWxlZ2F0ZSA9IFxcXCJnZW5lcmF0ZSgpXFxcIj5HZW5lcmF0ZTwvYnV0dG9uPlxcbiAgPGNhbnZhcyBpZD1cXFwibXlDYW52YXNcXFwiIHdpZHRoLmJpbmQ9XFxcIndpZHRoXFxcIiBoZWlnaHQuYmluZD1cXFwiaGVpZ2h0XFxcIiA+PC9jYW52YXM+XFxuPC90ZW1wbGF0ZT5cXG5cIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app.html\n");

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