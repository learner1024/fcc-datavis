webpackJsonp([0],{

/***/ "../node_modules/bootstrap/dist/css/bootstrap.min.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/font-awesome/css/font-awesome.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./datavis-globe/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_meteorite_globe_component_jsx__ = __webpack_require__("./datavis-globe/components/meteorite-globe-component.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




//import './styles/globe-styles.scss';


var MeteoriteGlobeApp = function (_Component) {
    _inherits(MeteoriteGlobeApp, _Component);

    function MeteoriteGlobeApp(props) {
        _classCallCheck(this, MeteoriteGlobeApp);

        var _this = _possibleConstructorReturn(this, (MeteoriteGlobeApp.__proto__ || Object.getPrototypeOf(MeteoriteGlobeApp)).call(this, props));

        _this.state = {
            data: []
        };
        _this.retrieveGlobeData();
        return _this;
    }

    _createClass(MeteoriteGlobeApp, [{
        key: 'retrieveGlobeData',
        value: function retrieveGlobeData() {
            var _this2 = this;

            //fetch('http://enjalot.github.io/wwsd/data/world/world-110m.geojson')
            fetch('data/meteorite-data.json').then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                return _this2.setState({ data: jsonData });
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    null,
                    'Meteorite landings across globe'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_meteorite_globe_component_jsx__["a" /* default */], { globeData: this.state.data })
            );
        }
    }]);

    return MeteoriteGlobeApp;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MeteoriteGlobeApp, null), document.querySelector('#app9Container'));

/***/ }),

/***/ "./datavis-globe/components/meteorite-globe-component.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MeteoriteGlobeComponent = function (_Component) {
    _inherits(MeteoriteGlobeComponent, _Component);

    function MeteoriteGlobeComponent(props) {
        _classCallCheck(this, MeteoriteGlobeComponent);

        return _possibleConstructorReturn(this, (MeteoriteGlobeComponent.__proto__ || Object.getPrototypeOf(MeteoriteGlobeComponent)).call(this, props));
    }

    _createClass(MeteoriteGlobeComponent, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'globe-tooltip' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', null)
            );
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var geoJson = this.props.globeData;
            var width = 960;
            var height = 500;

            var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this)).select("svg");
            svg.attr('width', width).attr('height', height);

            var projection = __WEBPACK_IMPORTED_MODULE_2_d3__["geoMercator"]();
            //.scale(width / 2 / Math.PI)
            //.scale(100)
            //.translate([width / 2, height / 2])

            var path = __WEBPACK_IMPORTED_MODULE_2_d3__["geoPath"]().projection(projection);

            svg.append("path").attr("d", path(geoJson));
        }
    }]);

    return MeteoriteGlobeComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MeteoriteGlobeComponent);

/***/ }),

/***/ "./landing/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__("../node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_style1_scss__ = __webpack_require__("./landing/styles/style1.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_style1_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_style1_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_min_js__ = __webpack_require__("../node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_font_awesome_css_font_awesome_css__ = __webpack_require__("../node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_font_awesome_css_font_awesome_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_whatwg_fetch__ = __webpack_require__("../node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_promise_polyfill__ = __webpack_require__("../node_modules/promise-polyfill/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_promise_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_promise_polyfill__);








if (!window.Promise) {
    window.Promise = __WEBPACK_IMPORTED_MODULE_5_promise_polyfill___default.a;
}

/***/ }),

/***/ "./landing/styles/style1.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./landing/app.js");
module.exports = __webpack_require__("./datavis-globe/app.js");


/***/ })

},[0]);