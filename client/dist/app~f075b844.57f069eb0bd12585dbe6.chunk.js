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

/***/ "GADZ":
/*!***********************!*\
  !*** ./src/matrix.ts ***!
  \***********************/
/*! exports provided: Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Matrix\", function() { return Matrix; });\nvar Matrix = (function () {\n    function Matrix() {\n    }\n    Matrix.getNeighbors = function (totalRows, totalColumns, row, col) {\n        var retValue = [];\n        var rowCandidates = [];\n        rowCandidates.push(row);\n        if (row === 0) {\n            rowCandidates.push(1);\n        }\n        else if (row === totalRows - 1) {\n            rowCandidates.push(row - 1);\n        }\n        else {\n            rowCandidates.push(row - 1);\n            rowCandidates.push(row + 1);\n        }\n        var colCandidates = [];\n        colCandidates.push(col);\n        if (col === 0) {\n            colCandidates.push(1);\n        }\n        else if (col === totalColumns - 1) {\n            colCandidates.push(col - 1);\n        }\n        else {\n            colCandidates.push(col - 1);\n            colCandidates.push(col + 1);\n        }\n        rowCandidates.forEach(function (r) {\n            colCandidates.forEach(function (c) {\n                if (row != r || col != c) {\n                    retValue.push({\n                        row: r,\n                        col: c\n                    });\n                }\n            });\n        });\n        return retValue;\n    };\n    return Matrix;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR0FEWi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYXRyaXgudHM/MTgwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWF0cml4IHsgIFxuICBwdWJsaWMgc3RhdGljIGdldE5laWdoYm9ycyh0b3RhbFJvd3M6IG51bWJlciwgdG90YWxDb2x1bW5zOiBudW1iZXIsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgOiBhbnlbXSB7XG4gICAgbGV0IHJldFZhbHVlID0gW107XG4gICAgbGV0IHJvd0NhbmRpZGF0ZXMgPSBbXTtcbiAgICByb3dDYW5kaWRhdGVzLnB1c2gocm93KTtcbiAgICBpZiAocm93ID09PSAwKSB7ICAgICAgXG4gICAgICByb3dDYW5kaWRhdGVzLnB1c2goMSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJvdyA9PT0gdG90YWxSb3dzIC0gMSkge1xuICAgICAgcm93Q2FuZGlkYXRlcy5wdXNoKHJvdy0xKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByb3dDYW5kaWRhdGVzLnB1c2gocm93LTEpO1xuICAgICAgcm93Q2FuZGlkYXRlcy5wdXNoKHJvdysxKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IGNvbENhbmRpZGF0ZXMgPSBbXTtcbiAgICBjb2xDYW5kaWRhdGVzLnB1c2goY29sKTtcbiAgICBpZiAoY29sID09PSAwKSB7XG4gICAgICBjb2xDYW5kaWRhdGVzLnB1c2goMSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbCA9PT0gdG90YWxDb2x1bW5zIC0gMSkge1xuICAgICAgY29sQ2FuZGlkYXRlcy5wdXNoKGNvbC0xKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb2xDYW5kaWRhdGVzLnB1c2goY29sLTEpO1xuICAgICAgY29sQ2FuZGlkYXRlcy5wdXNoKGNvbCsxKTtcbiAgICB9XG4gICAgcm93Q2FuZGlkYXRlcy5mb3JFYWNoKHIgPT4ge1xuICAgICAgY29sQ2FuZGlkYXRlcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBpZiAocm93ICE9IHIgfHwgY29sICE9IGMpIHtcbiAgICAgICAgICByZXRWYWx1ZS5wdXNoKHtcbiAgICAgICAgICAgIHJvdzogcixcbiAgICAgICAgICAgIGNvbDogY1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgICAgIFxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0VmFsdWU7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUF3Q0E7QUF2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///GADZ\n");

/***/ }),

/***/ "WGAN":
/*!**********************!*\
  !*** ./src/pixel.ts ***!
  \**********************/
/*! exports provided: Pixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pixel\", function() { return Pixel; });\nvar Pixel = (function () {\n    function Pixel(row, col) {\n        this.row = row;\n        this.col = col;\n        this.isMarked = false;\n        this.color = \"gray\";\n    }\n    return Pixel;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV0dBTi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9waXhlbC50cz81ODYwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQaXhlbCB7XG4gIFxuICBwdWJsaWMgcm93OiBudW1iZXI7XG4gIHB1YmxpYyBjb2w6IG51bWJlcjtcbiAgcHVibGljIGlzTWFya2VkOiBib29sZWFuO1xuICBwdWJsaWMgY29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpe1xuICAgIHRoaXMucm93ID0gcm93O1xuICAgIHRoaXMuY29sID0gY29sO1xuICAgIHRoaXMuaXNNYXJrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNvbG9yID0gXCJncmF5XCI7XG4gIH0gXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///WGAN\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph */ \"sAiF\");\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ \"GADZ\");\n/* harmony import */ var _pixel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pixel */ \"WGAN\");\n\n\n\nvar App = (function () {\n    function App() {\n        this.columns = 200;\n        this.rows = 200;\n        this.SIZE = 10;\n    }\n    App.prototype.attached = function () {\n        var _this = this;\n        var canvas = document.getElementById('myCanvas');\n        this.context = canvas.getContext('2d');\n        this.generate();\n        canvas.addEventListener('click', function (evt) {\n            var mousePos = _this.getSquare(canvas, evt);\n            var position = _this.toData(mousePos);\n            _this.data[position.row][position.col].isMarked = !_this.data[position.row][position.col].isMarked;\n            _this.render();\n        }, false);\n    };\n    App.prototype.toData = function (mouse) {\n        return {\n            row: Math.floor(mouse.y / this.SIZE),\n            col: Math.floor(mouse.x / this.SIZE)\n        };\n    };\n    App.prototype.generate = function () {\n        this.width = this.columns * this.SIZE;\n        this.height = this.rows * this.SIZE;\n        this.populateData();\n        this.render();\n    };\n    App.prototype.clear = function () {\n        this.generate();\n    };\n    App.prototype.randomise = function () {\n        for (var row = 0; row < this.rows; row++) {\n            for (var col = 0; col < this.columns; col++) {\n                var pixel = this.data[row][col];\n                var val = Math.random();\n                pixel.isMarked = val >= 0.8;\n            }\n        }\n        this.render();\n    };\n    App.prototype.solve = function () {\n        var _this = this;\n        var graph = this.mapToGraph();\n        var components = graph.calcConnectedComponents();\n        components.forEach(function (component, componentIndex) {\n            component.forEach(function (nodeIndex) {\n                var row = Math.floor(nodeIndex / _this.columns);\n                var col = nodeIndex % _this.columns;\n                _this.data[row][col].color = _this.getColor(componentIndex);\n            });\n        });\n        this.render();\n    };\n    App.prototype.getColor = function (index) {\n        var colors = ['red', 'blue', 'green', 'yellow'];\n        return colors[index % colors.length];\n    };\n    App.prototype.mapToGraph = function () {\n        var _this = this;\n        var nodes = [];\n        for (var i = 0; i < this.data.length; i++) {\n            var row = this.data[i];\n            for (var j = 0; j < row.length; j++) {\n                var element = row[j];\n                if (element.isMarked) {\n                    nodes.push(this.getIndex(i, j));\n                }\n            }\n        }\n        var graph = new _graph__WEBPACK_IMPORTED_MODULE_0__[\"Graph\"](nodes);\n        var cols = this.columns;\n        var rows = this.rows;\n        var _loop_1 = function (rowIndex) {\n            var row = this_1.data[rowIndex];\n            var _loop_2 = function (colIndex) {\n                var element = row[colIndex];\n                if (element.isMarked) {\n                    var neighbors = _matrix__WEBPACK_IMPORTED_MODULE_1__[\"Matrix\"].getNeighbors(this_1.rows, this_1.columns, rowIndex, colIndex);\n                    neighbors.forEach(function (n) {\n                        if (_this.data[n.row][n.col].isMarked) {\n                            graph.addEdge(rowIndex * cols + colIndex, n.row * rows + n.col);\n                        }\n                    });\n                }\n            };\n            for (var colIndex = 0; colIndex < row.length; colIndex++) {\n                _loop_2(colIndex);\n            }\n        };\n        var this_1 = this;\n        for (var rowIndex = 0; rowIndex < this.data.length; rowIndex++) {\n            _loop_1(rowIndex);\n        }\n        return graph;\n    };\n    App.prototype.getIndex = function (row, col) {\n        return row * this.columns + col;\n    };\n    App.prototype.populateData = function () {\n        this.data = new Array();\n        for (var row = 0; row < this.rows; row++) {\n            var arr = new Array();\n            for (var col = 0; col < this.columns; col++) {\n                arr.push(new _pixel__WEBPACK_IMPORTED_MODULE_2__[\"Pixel\"](row, col));\n            }\n            this.data.push(arr);\n        }\n    };\n    App.prototype.render = function () {\n        this.drawGrid();\n        for (var row = 0; row < this.rows; row++) {\n            for (var col = 0; col < this.columns; col++) {\n                var x = 1 + col * this.SIZE;\n                var y = 1 + row * this.SIZE;\n                if (this.data[row][col].isMarked) {\n                    this.fillSquare(x, y, this.data[row][col].color);\n                }\n                else {\n                    this.fillSquare(x, y, \"white\");\n                }\n            }\n        }\n        requestAnimationFrame(this.render);\n    };\n    App.prototype.getSquare = function (canvas, evt) {\n        var rect = canvas.getBoundingClientRect();\n        return {\n            x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left) % this.SIZE,\n            y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top) % this.SIZE\n        };\n    };\n    App.prototype.drawGrid = function () {\n        for (var x = 0.5; x < (this.columns * this.SIZE) + 1; x += this.SIZE) {\n            this.context.moveTo(x, 0);\n            this.context.lineTo(x, this.columns * this.SIZE);\n        }\n        for (var y = 0.5; y < (this.rows * this.SIZE) + 1; y += this.SIZE) {\n            this.context.moveTo(0, y);\n            this.context.lineTo((this.rows * this.SIZE), y);\n        }\n        this.context.strokeStyle = \"#ddd\";\n        this.context.stroke();\n    };\n    App.prototype.fillSquare = function (x, y, color) {\n        this.context.fillStyle = color;\n        this.context.fillRect(x, y, this.SIZE - 1, this.SIZE - 1);\n    };\n    return App;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoIH0gZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tICcuL21hdHJpeCc7XG5pbXBvcnQgeyBQaXhlbCB9IGZyb20gJy4vcGl4ZWwnO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICBwdWJsaWMgY29sdW1uczogbnVtYmVyID0gMjAwO1xuICBwdWJsaWMgcm93czogbnVtYmVyID0gMjAwO1xuICBwdWJsaWMgZGF0YTogUGl4ZWxbXVtdO1xuICBwcml2YXRlIGNvbnRleHQ6IGFueTtcbiAgcHJpdmF0ZSBTSVpFOiBudW1iZXIgPSAxMDtcbiAgcHVibGljIHdpZHRoO1xuICBwdWJsaWMgaGVpZ2h0O1xuICBcbiAgYXR0YWNoZWQoKSB7XG4gICAgY29uc3QgY2FudmFzOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xuICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpOyAgIFxuICAgIHRoaXMuZ2VuZXJhdGUoKTtcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7ICAgICAgXG4gICAgICB2YXIgbW91c2VQb3MgPSB0aGlzLmdldFNxdWFyZShjYW52YXMsIGV2dCk7XG4gICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnRvRGF0YShtb3VzZVBvcyk7XG4gICAgICB0aGlzLmRhdGFbcG9zaXRpb24ucm93XVtwb3NpdGlvbi5jb2xdLmlzTWFya2VkID0gIXRoaXMuZGF0YVtwb3NpdGlvbi5yb3ddW3Bvc2l0aW9uLmNvbF0uaXNNYXJrZWQ7ICBcbiAgICAgIHRoaXMucmVuZGVyKCk7ICBcbn0sIGZhbHNlKTtcbiAgfVxuXG4gIHRvRGF0YShtb3VzZTogYW55KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdyA6IE1hdGguZmxvb3IobW91c2UueSAvIHRoaXMuU0laRSksXG4gICAgICBjb2wgOiBNYXRoLmZsb29yKG1vdXNlLnggLyB0aGlzLlNJWkUpXG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGUoKSB7ICBcbiAgICB0aGlzLndpZHRoID0gdGhpcy5jb2x1bW5zICogdGhpcy5TSVpFO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5yb3dzICogdGhpcy5TSVpFO1xuICAgIHRoaXMucG9wdWxhdGVEYXRhKCk7ICAgIFxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlKCk7XG4gIH1cblxuICByYW5kb21pc2UoKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykgeyAgICAgIFxuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jb2x1bW5zOyBjb2wrKykgeyAgICAgICAgXG4gICAgICAgIGxldCBwaXhlbCA9IHRoaXMuZGF0YVtyb3ddW2NvbF07ICAgICAgICBcbiAgICAgICAgbGV0IHZhbCA9IE1hdGgucmFuZG9tKCk7ICAgICAgICBcbiAgICAgICAgcGl4ZWwuaXNNYXJrZWQgPSB2YWwgPj0gMC44OyAgICAgICAgXG4gICAgICB9ICAgICAgICAgICAgXG4gICAgfSAgICBcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc29sdmUoKSB7XG4gICAgbGV0IGdyYXBoID0gdGhpcy5tYXBUb0dyYXBoKCk7XG4gICAgbGV0IGNvbXBvbmVudHMgPSBncmFwaC5jYWxjQ29ubmVjdGVkQ29tcG9uZW50cygpO1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBjb21wb25lbnRJbmRleCkgPT4ge1xuICAgICAgY29tcG9uZW50LmZvckVhY2gobm9kZUluZGV4ID0+IHtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3Iobm9kZUluZGV4IC8gdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgbGV0IGNvbCA9IG5vZGVJbmRleCAlIHRoaXMuY29sdW1uczsgICAgICAgIFxuICAgICAgICB0aGlzLmRhdGFbcm93XVtjb2xdLmNvbG9yID0gdGhpcy5nZXRDb2xvcihjb21wb25lbnRJbmRleCk7XG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXRDb2xvcihpbmRleDogbnVtYmVyKSA6IHN0cmluZyB7XG4gICAgdmFyIGNvbG9ycyA9IFsncmVkJywgJ2JsdWUnLCAnZ3JlZW4nLCAneWVsbG93J107XG4gICAgcmV0dXJuIGNvbG9yc1tpbmRleCAlIGNvbG9ycy5sZW5ndGhdO1xuICB9XG5cbiAgbWFwVG9HcmFwaCgpIDogR3JhcGgge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLmRhdGFbaV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcm93W2pdO1xuICAgICAgICBpZiAoZWxlbWVudC5pc01hcmtlZCkge1xuICAgICAgICAgIG5vZGVzLnB1c2godGhpcy5nZXRJbmRleChpLCBqKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGdyYXBoID0gbmV3IEdyYXBoKG5vZGVzKTtcbiAgICBsZXQgY29scyA9IHRoaXMuY29sdW1ucztcbiAgICBsZXQgcm93cyA9IHRoaXMucm93cztcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgdGhpcy5kYXRhLmxlbmd0aDsgcm93SW5kZXgrKykge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5kYXRhW3Jvd0luZGV4XTtcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCByb3cubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByb3dbY29sSW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudC5pc01hcmtlZCkge1xuICAgICAgICAgIGxldCBuZWlnaGJvcnMgPSBNYXRyaXguZ2V0TmVpZ2hib3JzKHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByb3dJbmRleCwgY29sSW5kZXgpO1xuICAgICAgICAgIG5laWdoYm9ycy5mb3JFYWNoKG4gPT4geyAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhW24ucm93XVtuLmNvbF0uaXNNYXJrZWQpIHtcbiAgICAgICAgICAgICAgZ3JhcGguYWRkRWRnZShyb3dJbmRleCAqIGNvbHMgKyBjb2xJbmRleCwgbi5yb3cgKiByb3dzICsgbi5jb2wpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdyYXBoO1xuICB9XG5cbiAgZ2V0SW5kZXgocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA6IG51bWJlciB7XG4gICAgcmV0dXJuIHJvdyAqIHRoaXMuY29sdW1ucyArIGNvbDtcbiAgfSAgXG5cbiAgcHJpdmF0ZSBwb3B1bGF0ZURhdGEoKSB7XG4gICAgdGhpcy5kYXRhID0gbmV3IEFycmF5PEFycmF5PFBpeGVsPj4oKTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnJvd3M7IHJvdysrKSB7XG4gICAgICBsZXQgYXJyID0gbmV3IEFycmF5PFBpeGVsPigpOyAgICAgIFxuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jb2x1bW5zOyBjb2wrKykgeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGFyci5wdXNoKG5ldyBQaXhlbChyb3csY29sKSk7XG4gICAgICB9ICAgICAgXG4gICAgICB0aGlzLmRhdGEucHVzaChhcnIpOyAgXG4gICAgfSAgICBcbiAgfVxuICBcbiAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgdGhpcy5kcmF3R3JpZCgpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMucm93czsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgbGV0IHggPSAxICsgY29sICogdGhpcy5TSVpFOyAgICAgICAgIFxuICAgICAgICBsZXQgeSA9IDEgKyByb3cgKiB0aGlzLlNJWkU7ICAgIFxuICAgICAgICBpZiAodGhpcy5kYXRhW3Jvd11bY29sXS5pc01hcmtlZCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5maWxsU3F1YXJlKHgsIHksIHRoaXMuZGF0YVtyb3ddW2NvbF0uY29sb3IpO1xuICAgICAgICB9ICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5maWxsU3F1YXJlKHgsIHksIFwid2hpdGVcIik7XG4gICAgICAgIH0gICBcbiAgICAgIH0gICAgICBcbiAgICB9ICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlcik7XG4gIH1cblxuICBwcml2YXRlIGdldFNxdWFyZShjYW52YXM6IGFueSwgZXZ0OiBhbnkpIHtcbiAgICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiAxICsgKGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAtIChldnQuY2xpZW50WCAtIHJlY3QubGVmdCkldGhpcy5TSVpFLFxuICAgICAgICB5OiAxICsgKGV2dC5jbGllbnRZIC0gcmVjdC50b3ApIC0gKGV2dC5jbGllbnRZIC0gcmVjdC50b3ApJXRoaXMuU0laRVxuICAgIH07XG4gIH1cbiAgXG4gIHByaXZhdGUgZHJhd0dyaWQoKSB7XG4gICAgZm9yICh2YXIgeCA9IDAuNTsgeCA8ICh0aGlzLmNvbHVtbnMgKiB0aGlzLlNJWkUpICsgMTsgeCArPSB0aGlzLlNJWkUpIHtcbiAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeCwgMCk7XG4gICAgICB0aGlzLmNvbnRleHQubGluZVRvKHgsIHRoaXMuY29sdW1ucyAqIHRoaXMuU0laRSk7XG4gICAgfVxuICAgIFxuICAgIGZvciAodmFyIHkgPSAwLjU7IHkgPCAodGhpcy5yb3dzICogdGhpcy5TSVpFKSArIDE7IHkgKz0gdGhpcy5TSVpFKSB7XG4gICAgICB0aGlzLmNvbnRleHQubW92ZVRvKDAsIHkpO1xuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbygodGhpcy5yb3dzICogdGhpcy5TSVpFKSwgeSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IFwiI2RkZFwiO1xuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBmaWxsU3F1YXJlKCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZyl7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LHksdGhpcy5TSVpFIC0gMSx0aGlzLlNJWkUgLSAxKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQTBKQTtBQXRKQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7QUFBQTtBQVVBOzs7QUFaQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>   \\n  <input id = \\\"width\\\" type = \\\"text\\\" value.bind = \\\"width\\\" />\\n  <input id = \\\"height\\\" type = \\\"text\\\" value.bind = \\\"height\\\" />\\n  <button click.delegate = \\\"randomise()\\\">Randomise</button>\\n  <button click.delegate = \\\"solve()\\\">Solve</button>\\n  <button click.delegate = \\\"clear()\\\">Clear</button>\\n  <canvas id=\\\"myCanvas\\\" width=\\\"10000\\\" height=\\\"10000\\\"></canvas>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPiAgIFxcbiAgPGlucHV0IGlkID0gXFxcIndpZHRoXFxcIiB0eXBlID0gXFxcInRleHRcXFwiIHZhbHVlLmJpbmQgPSBcXFwid2lkdGhcXFwiIC8+XFxuICA8aW5wdXQgaWQgPSBcXFwiaGVpZ2h0XFxcIiB0eXBlID0gXFxcInRleHRcXFwiIHZhbHVlLmJpbmQgPSBcXFwiaGVpZ2h0XFxcIiAvPlxcbiAgPGJ1dHRvbiBjbGljay5kZWxlZ2F0ZSA9IFxcXCJyYW5kb21pc2UoKVxcXCI+UmFuZG9taXNlPC9idXR0b24+XFxuICA8YnV0dG9uIGNsaWNrLmRlbGVnYXRlID0gXFxcInNvbHZlKClcXFwiPlNvbHZlPC9idXR0b24+XFxuICA8YnV0dG9uIGNsaWNrLmRlbGVnYXRlID0gXFxcImNsZWFyKClcXFwiPkNsZWFyPC9idXR0b24+XFxuICA8Y2FudmFzIGlkPVxcXCJteUNhbnZhc1xcXCIgd2lkdGg9XFxcIjEwMDAwXFxcIiBoZWlnaHQ9XFxcIjEwMDAwXFxcIj48L2NhbnZhcz5cXG48L3RlbXBsYXRlPlxcblwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app.html\n");

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

/***/ }),

/***/ "sAiF":
/*!**********************!*\
  !*** ./src/graph.ts ***!
  \**********************/
/*! exports provided: Graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graph\", function() { return Graph; });\n/* harmony import */ var stack_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stack-typescript */ \"orxD\");\n/* harmony import */ var stack_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stack_typescript__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Graph = (function () {\n    function Graph(nodes) {\n        var _this = this;\n        this.numberOfVertices = nodes.length;\n        this.adjacencyList = new Map();\n        nodes.forEach(function (n) {\n            _this.adjacencyList.set(n, new Array());\n        });\n    }\n    Graph.prototype.addEdge = function (src, dest) {\n        var source = this.adjacencyList.get(src);\n        if (source == undefined) {\n            console.log(\"source is undefined\");\n        }\n        if (source.includes(dest) == false) {\n            source.push(dest);\n        }\n        var destination = this.adjacencyList.get(dest);\n        if (destination == undefined) {\n            console.log(\"source is undefined\");\n        }\n        if (destination.includes(src) == false) {\n            destination.push(src);\n        }\n    };\n    Graph.prototype.runIterativeDFS = function (node) {\n        var retValue = [];\n        var visitedList = new Map();\n        this.adjacencyList.forEach(function (value, key) {\n            visitedList.set(key, false);\n        });\n        var stack = new stack_typescript__WEBPACK_IMPORTED_MODULE_0__[\"Stack\"]();\n        stack.push(node);\n        while (stack.top) {\n            var current = stack.pop();\n            if (visitedList.get(current) == false) {\n                retValue.push(current);\n                visitedList.set(current, true);\n            }\n            this.adjacencyList.get(current).forEach(function (elem) {\n                if (visitedList.get(elem) == false) {\n                    stack.push(elem);\n                }\n            });\n        }\n        return retValue;\n    };\n    Graph.prototype.runDFS = function (node, visited) {\n        var _this = this;\n        visited.set(node, true);\n        var retValue = new Array();\n        retValue.push(node);\n        this.adjacencyList.get(node).forEach(function (element) {\n            if (!visited.get(element)) {\n                retValue = retValue.concat(_this.runDFS(element, visited));\n            }\n        });\n        return retValue;\n    };\n    Graph.prototype.calcConnectedComponents = function () {\n        var _this = this;\n        var visited = new Map();\n        this.adjacencyList.forEach(function (value, key) {\n            visited.set(key, false);\n        });\n        var retValue = new Array();\n        this.adjacencyList.forEach(function (value, key) {\n            var element = visited.get(key);\n            if (!element) {\n                var component = _this.runIterativeDFS(key);\n                retValue.push(component);\n                component.forEach(function (element) {\n                    if (!visited.get(element)) {\n                        visited.set(element, true);\n                    }\n                });\n            }\n        });\n        return retValue;\n    };\n    return Graph;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic0FpRi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ncmFwaC50cz9iMDA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNrIH0gZnJvbSAnc3RhY2stdHlwZXNjcmlwdCc7XG5cbmV4cG9ydCBjbGFzcyBHcmFwaCB7XG5cbiAgcHJpdmF0ZSBudW1iZXJPZlZlcnRpY2VzOiBudW1iZXI7XG4gIHByaXZhdGUgYWRqYWNlbmN5TGlzdDogTWFwPG51bWJlciwgQXJyYXk8bnVtYmVyPj47XG5cbiAgY29uc3RydWN0b3Iobm9kZXM6IG51bWJlcltdKSB7XG4gICAgdGhpcy5udW1iZXJPZlZlcnRpY2VzID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgdGhpcy5hZGphY2VuY3lMaXN0ID0gbmV3IE1hcDxudW1iZXIsIEFycmF5PG51bWJlcj4+KCk7XG4gICBcbiAgICBub2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgdGhpcy5hZGphY2VuY3lMaXN0LnNldChuLCBuZXcgQXJyYXk8bnVtYmVyPigpKTtcbiAgICB9KSAgICAgICBcbiAgfSAgXG5cbiAgYWRkRWRnZShzcmMgOiBudW1iZXIsIGRlc3Q6IG51bWJlcik6IHZvaWQgeyAgXG4gICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLmFkamFjZW5jeUxpc3QuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChzb3VyY2UgPT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzb3VyY2UgaXMgdW5kZWZpbmVkXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZS5pbmNsdWRlcyhkZXN0KSA9PSBmYWxzZSkge1xuICAgICAgICAgIHNvdXJjZS5wdXNoKGRlc3QpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVzdGluYXRpb24gPSB0aGlzLmFkamFjZW5jeUxpc3QuZ2V0KGRlc3QpO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24gPT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzb3VyY2UgaXMgdW5kZWZpbmVkXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmluY2x1ZGVzKHNyYykgPT0gZmFsc2UpIHtcbiAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKHNyYyk7XG4gICAgICAgIH0gICAgICAgICAgICBcbiAgICB9XG5cbiAgcnVuSXRlcmF0aXZlREZTKG5vZGU6IG51bWJlcikgOiBudW1iZXJbXSB7XG4gICAgbGV0IHJldFZhbHVlIDpudW1iZXJbXSA9IFtdO1xuXG4gICAgbGV0IHZpc2l0ZWRMaXN0ID0gbmV3IE1hcDxudW1iZXIsIGJvb2xlYW4+KCk7XG4gICAgdGhpcy5hZGphY2VuY3lMaXN0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHZpc2l0ZWRMaXN0LnNldChrZXksIGZhbHNlKTtcbiAgICB9KVxuICAgXG4gICAgbGV0IHN0YWNrID0gbmV3IFN0YWNrPG51bWJlcj4oKTtcbiAgICBzdGFjay5wdXNoKG5vZGUpOyBcblxuICAgIHdoaWxlIChzdGFjay50b3ApIHsgICAgICBcbiAgICAgIGxldCBjdXJyZW50ID0gc3RhY2sucG9wKCk7IFxuICAgICAgaWYgKHZpc2l0ZWRMaXN0LmdldChjdXJyZW50KSA9PSBmYWxzZSkge1xuICAgICAgICByZXRWYWx1ZS5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB2aXNpdGVkTGlzdC5zZXQoY3VycmVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkamFjZW5jeUxpc3QuZ2V0KGN1cnJlbnQpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmICh2aXNpdGVkTGlzdC5nZXQoZWxlbSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICBzdGFjay5wdXNoKGVsZW0pO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIHJldFZhbHVlO1xuICB9XG5cbiAgcnVuREZTKG5vZGU6IG51bWJlciwgdmlzaXRlZCA6IE1hcDxudW1iZXIsIGJvb2xlYW4+ICkgOiBudW1iZXJbXSB7XG4gICAgICAgIC8vIE1hcmsgdGhlIGN1cnJlbnQgbm9kZSBhcyB2aXNpdGVkIGFuZCBwcmludCBpdCBcbiAgICAgICAgdmlzaXRlZC5zZXQobm9kZSx0cnVlKTtcbiAgICAgICAgbGV0IHJldFZhbHVlID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgcmV0VmFsdWUucHVzaChub2RlKTtcblxuICAgICAgICB0aGlzLmFkamFjZW5jeUxpc3QuZ2V0KG5vZGUpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgaWYgKCF2aXNpdGVkLmdldChlbGVtZW50KSkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgcmV0VmFsdWUgPSByZXRWYWx1ZS5jb25jYXQodGhpcy5ydW5ERlMoZWxlbWVudCwgdmlzaXRlZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0VmFsdWU7XG4gIH0gIFxuXG4gICAgY2FsY0Nvbm5lY3RlZENvbXBvbmVudHMoKSA6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblxuICAgICAgICAvLyBNYXJrIGFsbCB0aGUgdmVydGljZXMgYXMgbm90IHZpc2l0ZWQgXG4gICAgICAgIGxldCB2aXNpdGVkID0gbmV3IE1hcDxudW1iZXIsIGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuYWRqYWNlbmN5TGlzdC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgdmlzaXRlZC5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIGxldCByZXRWYWx1ZSA6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gbmV3IEFycmF5PEFycmF5PG51bWJlcj4+KCk7XG4gICAgICAgIHRoaXMuYWRqYWNlbmN5TGlzdC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHZpc2l0ZWQuZ2V0KGtleSk7XG4gICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5ydW5JdGVyYXRpdmVERlMoa2V5KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldFZhbHVlLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWQuZ2V0KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdmlzaXRlZC5zZXQoZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgIFxuICAgICAgICByZXR1cm4gcmV0VmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///sAiF\n");

/***/ })

},[[0,"runtime~app","vendors~2a42e354","vendors~0ba1d959","vendors~556c66f2","vendors~72fdf3f2","vendors~50e8d500","vendors~ecff2e3d","vendors~9e0f4621","vendors~4eb3b4b8","vendors~f9ca8911"]]]);