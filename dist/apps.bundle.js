webpackJsonp([0],{

/***/ "../node_modules/bootstrap/dist/css/bootstrap.min.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./camper-leaderboard/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_camper_leaderboard_jsx__ = __webpack_require__("./camper-leaderboard/components/camper-leaderboard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dist_react_min_js__ = __webpack_require__("../node_modules/react/dist/react.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dist_react_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dist_react_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react_dist_react_min_js___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_camper_leaderboard_jsx__["a" /* default */], null), document.querySelector('#app1Container'));

/***/ }),

/***/ "./camper-leaderboard/components/camper-leaderboard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js__ = __webpack_require__("../node_modules/react/dist/react.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CamperLeaderboard = function (_Component) {
    _inherits(CamperLeaderboard, _Component);

    _createClass(CamperLeaderboard, [{
        key: 'refreshData',
        value: function refreshData() {
            var topRecent = [];
            var topAllTime = [];

            fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log('recent : parsed json', json);
            }).catch(function (ex) {
                console.log('parsing failed', ex);
            });

            fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log('alltime parsed json', json);
            }).catch(function (ex) {
                console.log('parsing failed', ex);
            });
        }
    }]);

    function CamperLeaderboard(props) {
        _classCallCheck(this, CamperLeaderboard);

        var _this = _possibleConstructorReturn(this, (CamperLeaderboard.__proto__ || Object.getPrototypeOf(CamperLeaderboard)).call(this, props));

        _this.refreshData();
        return _this;
    }

    _createClass(CamperLeaderboard, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement(
                'h1',
                null,
                'FreeCodeCamp : Camper Leaderboard'
            );
        }
    }]);

    return CamperLeaderboard;
}(__WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CamperLeaderboard);

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




/***/ }),

/***/ "./landing/styles/style1.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./md-previewer/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_md_previewer_scss__ = __webpack_require__("./md-previewer/styles/md-previewer.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_md_previewer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_md_previewer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_md_previewer_jsx__ = __webpack_require__("./md-previewer/components/md-previewer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dist_react_min_js__ = __webpack_require__("../node_modules/react/dist/react.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dist_react_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dist_react_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);





// ReactDOM.render(<MarkdownPreviewer />, document.querySelector('#app1Container'));

/***/ }),

/***/ "./md-previewer/components/md-previewer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js__ = __webpack_require__("../node_modules/react/dist/react.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_remarkable_dist_remarkable_min_js__ = __webpack_require__("../node_modules/remarkable/dist/remarkable.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_remarkable_dist_remarkable_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_remarkable_dist_remarkable_min_js__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MarkdownPreviewer = function (_Component) {
    _inherits(MarkdownPreviewer, _Component);

    function MarkdownPreviewer(props) {
        _classCallCheck(this, MarkdownPreviewer);

        var _this = _possibleConstructorReturn(this, (MarkdownPreviewer.__proto__ || Object.getPrototypeOf(MarkdownPreviewer)).call(this, props));

        _this.markdownParser = new __WEBPACK_IMPORTED_MODULE_1_remarkable_dist_remarkable_min_js___default.a();
        _this.state = {
            markdownContent: '',
            htmlMarkup: {
                __html: ''
            }
        };
        return _this;
    }

    _createClass(MarkdownPreviewer, [{
        key: 'onMarkdownContentChanged',
        value: function onMarkdownContentChanged(changedContent) {
            this.setState({
                htmlMarkup: {
                    __html: this.markdownParser.render(changedContent)
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement(
                        'div',
                        { className: 'col text-center' },
                        __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement(
                            'h1',
                            null,
                            'FreeCodeCamp - Markdown Previewer'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement(
                        'div',
                        { className: 'col' },
                        __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement('textarea', { className: 'inpt', onChange: function onChange(e) {
                                return _this2.onMarkdownContentChanged(e.target.value);
                            } })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement(
                        'div',
                        { className: 'col' },
                        __WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js___default.a.createElement('div', { className: 'outpt', dangerouslySetInnerHTML: this.state.htmlMarkup })
                    )
                )
            );
        }
    }]);

    return MarkdownPreviewer;
}(__WEBPACK_IMPORTED_MODULE_0_react_dist_react_min_js__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (MarkdownPreviewer);

/***/ }),

/***/ "./md-previewer/styles/md-previewer.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./landing/app.js");
__webpack_require__("./camper-leaderboard/app.js");
module.exports = __webpack_require__("./md-previewer/app.js");


/***/ })

},[0]);