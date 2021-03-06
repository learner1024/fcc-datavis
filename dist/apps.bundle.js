webpackJsonp([0],{

/***/ "../node_modules/bootstrap/dist/css/bootstrap.min.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/font-awesome/css/font-awesome.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./camper-leaderboard/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_camper_leaderboard_jsx__ = __webpack_require__("./camper-leaderboard/components/camper-leaderboard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_camper_leaderboard_scss__ = __webpack_require__("./camper-leaderboard/styles/camper-leaderboard.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_camper_leaderboard_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_camper_leaderboard_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);





__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_camper_leaderboard_jsx__["a" /* default */], null), document.querySelector('#app2Container'));

/***/ }),

/***/ "./camper-leaderboard/components/camper-leaderboard-table-row.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var CamperLeaderboardTableRow = function CamperLeaderboardTableRow(_ref) {
    var leader = _ref.leader;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tr',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            leader.indx
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'rounded', src: leader.imgUrl }),
            leader.userName
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            leader.allTimePoints
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            leader.recentPoints
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            leader.lastUpdate
        )
    );
};
/* harmony default export */ __webpack_exports__["a"] = (CamperLeaderboardTableRow);

/***/ }),

/***/ "./camper-leaderboard/components/camper-leaderboard-table.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camper_leaderboard_table_row_jsx__ = __webpack_require__("./camper-leaderboard/components/camper-leaderboard-table-row.jsx");


var CamperLeaderboardTable = function CamperLeaderboardTable(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'table',
        { className: 'table table-striped table-bordered' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'thead',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'th',
                    null,
                    '#'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'th',
                    null,
                    'Leader'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'th',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { onClick: props.onTopAllTimeCommand },
                        'All time brownie points'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'th',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { onClick: props.onTopRecentCommand },
                        'Recent brownie points'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'th',
                    null,
                    'last updated'
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tbody',
            null,
            props.leaders.map(function (l, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__camper_leaderboard_table_row_jsx__["a" /* default */], { key: l.username, leader: {
                        indx: i + 1,
                        imgUrl: l.img,
                        userName: l.username,
                        allTimePoints: l.alltime,
                        recentPoints: l.recent,
                        lastUpdate: l.lastUpdate
                    } });
            })
        )
    );
};
/* harmony default export */ __webpack_exports__["a"] = (CamperLeaderboardTable);

/***/ }),

/***/ "./camper-leaderboard/components/camper-leaderboard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camper_leaderboard_table_jsx__ = __webpack_require__("./camper-leaderboard/components/camper-leaderboard-table.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CamperLeaderboard = function (_Component) {
    _inherits(CamperLeaderboard, _Component);

    _createClass(CamperLeaderboard, [{
        key: 'retrieveAlltimeData',
        value: function retrieveAlltimeData() {
            var _this2 = this;

            fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(function (response) {
                return response.json();
            }).then(function (json) {
                _this2.setState({
                    data: json
                });
            }).catch(function (ex) {
                console.log('parsing failed', ex);
            });
        }
    }, {
        key: 'retrieveRecentData',
        value: function retrieveRecentData() {
            var _this3 = this;

            fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(function (response) {
                return response.json();
            }).then(function (json) {
                _this3.setState({
                    data: json
                });
            }).catch(function (ex) {
                console.log('parsing failed', ex);
            });
        }
    }]);

    function CamperLeaderboard(props) {
        _classCallCheck(this, CamperLeaderboard);

        var _this = _possibleConstructorReturn(this, (CamperLeaderboard.__proto__ || Object.getPrototypeOf(CamperLeaderboard)).call(this, props));

        _this.state = {
            data: []
        };
        _this.retrieveRecentData();
        return _this;
    }

    _createClass(CamperLeaderboard, [{
        key: 'onTopRecentCommandHandler',
        value: function onTopRecentCommandHandler() {
            this.retrieveRecentData();
        }
    }, {
        key: 'onTopAllTimeCommandHandler',
        value: function onTopAllTimeCommandHandler() {
            this.retrieveAlltimeData();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col text-center' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h1',
                            null,
                            'FreeCodeCamp - Camper Leaderboard'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__camper_leaderboard_table_jsx__["a" /* default */], {
                            onTopRecentCommand: this.onTopRecentCommandHandler.bind(this),
                            onTopAllTimeCommand: this.onTopAllTimeCommandHandler.bind(this),
                            leaders: this.state.data })
                    )
                )
            );
        }
    }]);

    return CamperLeaderboard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CamperLeaderboard);

/***/ }),

/***/ "./camper-leaderboard/styles/camper-leaderboard.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./datavis-bargraph/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_bar_graph_component_jsx__ = __webpack_require__("./datavis-bargraph/components/bar-graph-component.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BarGraph = function (_Component) {
    _inherits(BarGraph, _Component);

    _createClass(BarGraph, [{
        key: 'retrieveDataForBarGraph',
        value: function retrieveDataForBarGraph() {
            var _this2 = this;

            fetch('data/us-gdp.json').then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                _this2.setState({
                    data: jsonData.data.map(function (d) {
                        return { 'quarterStartDate': new Date(d[0]), 'gdpValue': +d[1] };
                    })
                });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }]);

    function BarGraph(props) {
        _classCallCheck(this, BarGraph);

        //fetch data
        var _this = _possibleConstructorReturn(this, (BarGraph.__proto__ || Object.getPrototypeOf(BarGraph)).call(this, props));

        _this.state = { data: [] };
        _this.retrieveDataForBarGraph();
        return _this;
    }

    _createClass(BarGraph, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    null,
                    'Gross Domestic Product - US'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_bar_graph_component_jsx__["a" /* default */], { barData: this.state.data })
            );
        }
    }]);

    return BarGraph;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarGraph, null), document.querySelector('#app5Container'));

/***/ }),

/***/ "./datavis-bargraph/components/bar-graph-component.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_bar_graph_styles_scss__ = __webpack_require__("./datavis-bargraph/styles/bar-graph-styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_bar_graph_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_bar_graph_styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BarGraphComponent = function (_Component) {
    _inherits(BarGraphComponent, _Component);

    function BarGraphComponent(props) {
        _classCallCheck(this, BarGraphComponent);

        return _possibleConstructorReturn(this, (BarGraphComponent.__proto__ || Object.getPrototypeOf(BarGraphComponent)).call(this, props));
    }

    _createClass(BarGraphComponent, [{
        key: 'getQuarterString',
        value: function getQuarterString(m) {
            var ret = '';
            if (m < 3) {
                ret = 'Q1';
            } else if (m < 6) {
                ret = 'Q2';
            } else if (m < 9) {
                ret = 'Q3';
            } else ret = 'Q4';

            return ret;
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'bargraph-tooltip' })
            );
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            var thisNode = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this);

            var tooltipWidth = 50;
            var tooltipHeight = 30;

            var tooltipBox = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](thisNode).select('.bargraph-tooltip').style('width', tooltipWidth).style('height', tooltipHeight).style('opacity', 0);

            var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](thisNode).select('svg');

            var svgWidth = 960;
            var svgHeight = 500;

            var margin = { top: 5, right: 5, bottom: 40, left: 40 };
            var graphWidth = svgWidth - margin.right - margin.left;
            var graphHeight = svgHeight - margin.top - margin.bottom;

            var gdpExtent = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](this.props.barData, function (d) {
                return d.gdpValue;
            });
            var timeExtent = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](this.props.barData, function (d) {
                return d.quarterStartDate;
            });

            var xScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleTime"]().domain(timeExtent).range([0, graphWidth]);
            var yScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]().domain(gdpExtent).range([graphHeight, 0]);

            var xAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["axisBottom"](xScale);
            var yAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["axisLeft"](yScale);

            svg.attr('width', svgWidth).attr('height', svgHeight);

            var container = svg.append('g').attr('class', 'graph-container');
            container.append("g").attr('class', 'axis x').attr("transform", 'translate(' + margin.left + ', ' + (margin.right + graphHeight) + ')').call(xAxis);
            container.append("g").attr('class', 'axis y').attr("transform", 'translate(' + margin.left + ', ' + margin.right + ')').call(yAxis);

            var rectWidth = Math.ceil(graphWidth / this.props.barData.length);
            container.selectAll('rect').data(this.props.barData).enter().append('rect').attr('class', 'bar').attr('x', function (d) {
                return margin.left + xScale(d.quarterStartDate);
            }).attr('y', function (d) {
                return yScale(d.gdpValue);
            }).attr('width', rectWidth).attr('height', function (d) {
                return margin.top + graphHeight - yScale(d.gdpValue);
            }).attr('fill', 'teal').on('mouseover', function (d, i) {
                var mouseCoords = __WEBPACK_IMPORTED_MODULE_2_d3__["mouse"](__WEBPACK_IMPORTED_MODULE_2_d3__["event"].currentTarget);
                tooltipBox.transition().duration(200).style('opacity', 0.9);
                tooltipBox.html('<span>' + d.quarterStartDate.getFullYear() + ' - ' + _this2.getQuarterString(d.quarterStartDate.getMonth()) + ' : ' + d.gdpValue + '</span>').style('left', mouseCoords[0] + 'px').style('top', mouseCoords[1] + 'px');
            }).on('mouseout', function (d, i) {
                tooltipBox.transition().duration(500).style('opacity', 0);
            });
        }
    }]);

    return BarGraphComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BarGraphComponent);

/***/ }),

/***/ "./datavis-bargraph/styles/bar-graph-styles.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./datavis-forcedirectedgraph/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fdg_component_jsx__ = __webpack_require__("./datavis-forcedirectedgraph/components/fdg-component.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_fdg_styles_scss__ = __webpack_require__("./datavis-forcedirectedgraph/styles/fdg-styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_fdg_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_fdg_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_flags_css__ = __webpack_require__("./datavis-forcedirectedgraph/styles/flags.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_flags_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_flags_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ForceDirectedGraph = function (_Component) {
    _inherits(ForceDirectedGraph, _Component);

    function ForceDirectedGraph(props) {
        _classCallCheck(this, ForceDirectedGraph);

        var _this = _possibleConstructorReturn(this, (ForceDirectedGraph.__proto__ || Object.getPrototypeOf(ForceDirectedGraph)).call(this, props));

        _this.state = {
            data: {}
        };
        _this.retrieveFDGData();
        return _this;
    }

    _createClass(ForceDirectedGraph, [{
        key: 'retrieveFDGData',
        value: function retrieveFDGData() {
            var _this2 = this;

            fetch('data/fdg_data.json').then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                _this2.setState({
                    data: jsonData
                });
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
                    'Force Directed Graph'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_fdg_component_jsx__["a" /* default */], { fdgData: this.state.data })
            );
        }
    }]);

    return ForceDirectedGraph;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ForceDirectedGraph, null), document.querySelector('#app8Container'));

/***/ }),

/***/ "./datavis-forcedirectedgraph/components/fdg-component.jsx":
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





var FDGComponent = function (_Component) {
    _inherits(FDGComponent, _Component);

    function FDGComponent(props) {
        _classCallCheck(this, FDGComponent);

        return _possibleConstructorReturn(this, (FDGComponent.__proto__ || Object.getPrototypeOf(FDGComponent)).call(this, props));
    }

    _createClass(FDGComponent, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'fdg-tooltip' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'fdg-flags' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', null)
            );
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var nodes = this.props.fdgData.nodes;
            var links = this.props.fdgData.links;

            var thisNode = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this);
            var tooltipWidth = 50;
            var tooltipHeight = 30;
            var tooltipBox = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](thisNode).select('.fdg-tooltip').style('width', tooltipWidth).style('height', tooltipHeight).style('opacity', 0).style('z-index', 1000);

            var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](thisNode).select('svg');

            var svgWidth = 960;
            var svgHeight = 600;

            svg.attr('width', svgWidth).attr('height', svgHeight);

            var container = svg.append('g').attr('class', 'graph-container');
            var linesContainer = container.append('g').attr('class', 'lines-c');
            var flagsContainer = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](thisNode).select('.fdg-flags');

            var forceSim = __WEBPACK_IMPORTED_MODULE_2_d3__["forceSimulation"]().force("link", __WEBPACK_IMPORTED_MODULE_2_d3__["forceLink"]().id(function (d) {
                return d.index;
            })).force("charge", __WEBPACK_IMPORTED_MODULE_2_d3__["forceManyBody"]().strength(-50)).force("center", __WEBPACK_IMPORTED_MODULE_2_d3__["forceCenter"](svgWidth / 2, svgHeight / 2)).force("y", __WEBPACK_IMPORTED_MODULE_2_d3__["forceY"](0)).force("x", __WEBPACK_IMPORTED_MODULE_2_d3__["forceX"](0));

            var flags = flagsContainer.selectAll('div').data(nodes).enter().append('div').attr('class', function (d) {
                return 'flag flag-' + d.code;
            }).call(__WEBPACK_IMPORTED_MODULE_2_d3__["drag"]().on("start", function (d) {
                if (!__WEBPACK_IMPORTED_MODULE_2_d3__["event"].active) forceSim.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }).on("drag", function (d) {
                d.fx = __WEBPACK_IMPORTED_MODULE_2_d3__["event"].x;
                d.fy = __WEBPACK_IMPORTED_MODULE_2_d3__["event"].y;
            }).on("end", function (d) {
                if (!__WEBPACK_IMPORTED_MODULE_2_d3__["event"].active) forceSim.alphaTarget(0);
                delete d.fx;
                delete d.fy;
            }));
            var lines = linesContainer.selectAll('line').data(links).enter().append('line').attr('stroke-width', 1).attr('stroke', 'teal');

            forceSim.nodes(nodes).on("tick", function () {
                lines.attr("x1", function (d) {
                    return d.source.x;
                }).attr("y1", function (d) {
                    return d.source.y;
                }).attr("x2", function (d) {
                    return d.target.x;
                }).attr("y2", function (d) {
                    return d.target.y;
                });

                flags.style('left', function (d) {
                    return d.x + 'px';
                }).style('top', function (d) {
                    return d.y + 65 + 'px';
                });
                flags.on('mouseover', function (d) {
                    tooltipBox.transition().duration(200).style('opacity', 0.9);
                    tooltipBox.html(d.country).style('left', d.x + 20 + 'px').style('top', d.y + 65 + 'px');
                }).on('mouseout', function (d, i) {
                    tooltipBox.transition().duration(500).style('opacity', 0);
                });
            });

            forceSim.force("link").links(links);
        }
    }]);

    return FDGComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FDGComponent);

/***/ }),

/***/ "./datavis-forcedirectedgraph/styles/fdg-styles.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./datavis-forcedirectedgraph/styles/flags.css":
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
                    'WIP - Meteorite landings across globe'
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

/***/ "./datavis-heatmap/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_heatmap_component_jsx__ = __webpack_require__("./datavis-heatmap/components/heatmap-component.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_heatmap_styles_scss__ = __webpack_require__("./datavis-heatmap/styles/heatmap-styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_heatmap_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_heatmap_styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Heatmap = function (_Component) {
    _inherits(Heatmap, _Component);

    function Heatmap(props) {
        _classCallCheck(this, Heatmap);

        var _this = _possibleConstructorReturn(this, (Heatmap.__proto__ || Object.getPrototypeOf(Heatmap)).call(this, props));

        _this.state = { data: [] };
        _this.retrieveDataForHeatmap();
        return _this;
    }

    _createClass(Heatmap, [{
        key: 'retrieveDataForHeatmap',
        value: function retrieveDataForHeatmap() {
            var _this2 = this;

            fetch('data/global-temperature.json').then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                jsonData.monthlyVariance.forEach(function (d) {
                    d.temp = jsonData.baseTemperature + d.variance;
                    d.date = new Date(d.year, 1, 1);
                });
                return jsonData.monthlyVariance;
            }).then(function (formattedData) {
                return _this2.setState({
                    data: formattedData
                });
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
                    'Heatmap'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_heatmap_component_jsx__["a" /* default */], { heatmapData: this.state.data })
            );
        }
    }]);

    return Heatmap;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Heatmap, null), document.querySelector('#app7Container'));

/***/ }),

/***/ "./datavis-heatmap/components/heatmap-component.jsx":
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





var HeatmapComponent = function (_Component) {
    _inherits(HeatmapComponent, _Component);

    function HeatmapComponent(props) {
        _classCallCheck(this, HeatmapComponent);

        return _possibleConstructorReturn(this, (HeatmapComponent.__proto__ || Object.getPrototypeOf(HeatmapComponent)).call(this, props));
    }

    _createClass(HeatmapComponent, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'heatmap-tooltip' })
            );
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var thisNode = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this);

            var tooltipWidth = 50;
            var tooltipHeight = 30;

            var tooltipBox = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](thisNode).select('.heatmap-tooltip').style('width', tooltipWidth).style('height', tooltipHeight).style('opacity', 0);

            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](thisNode).select('svg');

            var svgWidth = 960;
            var svgHeight = 500;

            var margin = { top: 5, right: 5, bottom: 40, left: 40 };
            var graphWidth = svgWidth - margin.right - margin.left;
            var graphHeight = svgHeight - margin.top - margin.bottom;

            var yearExtent = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](this.props.heatmapData, function (d) {
                return d.date;
            });
            var monthExtent = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](this.props.heatmapData, function (d) {
                return d.month;
            });
            var varianceExtent = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](this.props.heatmapData, function (d) {
                return d.temp;
            });

            var xScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleTime"]().domain(yearExtent).range([0, graphWidth]);
            var yScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]().domain([monthExtent[0] - 0.5, monthExtent[1] + 0.5]).range([graphHeight, 0]);
            var colorScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]().domain(varianceExtent).range([100, 0]);

            var xAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["axisBottom"](xScale).ticks(__WEBPACK_IMPORTED_MODULE_2_d3__["timeYear"].every(10));
            var yAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["axisLeft"](yScale);

            svg.attr('width', svgWidth).attr('height', svgHeight);

            var container = svg.append('g').attr('class', 'graph-container');
            container.append("g").attr('class', 'axis x').attr("transform", 'translate(' + margin.left + ', ' + (margin.top + graphHeight) + ')').call(xAxis);
            container.append("g").attr('class', 'axis y').attr("transform", 'translate(' + margin.left + ', ' + margin.top + ')').call(yAxis);

            var rectWidth = xScale(new Date(2015, 1, 1)) - xScale(new Date(2014, 1, 1));
            var rectHeight = yScale(1) - yScale(2);
            var rectHeightBy2 = rectHeight / 2;
            container.selectAll('rect')
            //.data([this.props.heatmapData[0]])
            .data(this.props.heatmapData).enter().append('rect').attr('class', 'heatmap-block').attr('x', function (d) {
                return margin.left + xScale(d.date);
            }).attr('y', function (d) {
                return margin.top + yScale(d.month) - rectHeightBy2;
            }).attr('width', rectWidth).attr('height', rectHeight).attr('fill', function (d) {
                return 'hsla(' + colorScale(d.temp) + ', 100%, 60%, 0.8)';
            }).attr('dt', function (d) {
                return d.temp;
            }).on('mouseover', function (d, i) {
                var mouseCoords = __WEBPACK_IMPORTED_MODULE_2_d3__["mouse"](__WEBPACK_IMPORTED_MODULE_2_d3__["event"].currentTarget);
                tooltipBox.transition().duration(200).style('opacity', 0.9);
                tooltipBox.html('<span>' + months[d.month - 1] + ' ' + d.date.getFullYear() + ' : ' + d.temp + '</span>').style('left', mouseCoords[0] + 'px').style('top', mouseCoords[1] + 'px');
            }).on('mouseout', function (d, i) {
                tooltipBox.transition().duration(500).style('opacity', 0);
            });
        }
    }]);

    return HeatmapComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (HeatmapComponent);

/***/ }),

/***/ "./datavis-heatmap/styles/heatmap-styles.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./datavis-scatterplot/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_scatter_plot_component_jsx__ = __webpack_require__("./datavis-scatterplot/components/scatter-plot-component.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scatter_plot_styles_scss__ = __webpack_require__("./datavis-scatterplot/styles/scatter-plot-styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scatter_plot_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_scatter_plot_styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ScatterPlot = function (_Component) {
    _inherits(ScatterPlot, _Component);

    function ScatterPlot(props) {
        _classCallCheck(this, ScatterPlot);

        var _this = _possibleConstructorReturn(this, (ScatterPlot.__proto__ || Object.getPrototypeOf(ScatterPlot)).call(this, props));

        _this.state = {
            data: []
        };
        _this.retrieveDataForScatterPlot();
        return _this;
    }

    _createClass(ScatterPlot, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    null,
                    'Scatter Plot - Cyclists and Doping'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_scatter_plot_component_jsx__["a" /* default */], { scatterData: this.state.data })
            );
        }
    }, {
        key: 'retrieveDataForScatterPlot',
        value: function retrieveDataForScatterPlot() {
            var _this2 = this;

            fetch('data/cyclist-data.json').then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                jsonData.forEach(function (d) {
                    d.Year = new Date(d.Year + '-1-1');
                });
                _this2.setState({
                    data: jsonData
                });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }]);

    return ScatterPlot;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScatterPlot, null), document.querySelector('#app6Container'));

/***/ }),

/***/ "./datavis-scatterplot/components/scatter-plot-component.jsx":
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





var ScatterPlotComponent = function (_Component) {
    _inherits(ScatterPlotComponent, _Component);

    function ScatterPlotComponent(props) {
        _classCallCheck(this, ScatterPlotComponent);

        return _possibleConstructorReturn(this, (ScatterPlotComponent.__proto__ || Object.getPrototypeOf(ScatterPlotComponent)).call(this, props));
    }

    _createClass(ScatterPlotComponent, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'scatterplot-tooltip' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h3',
                        null,
                        'Info'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        null,
                        'X Axis - Year'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        null,
                        'Y Axis - Rank'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        null,
                        'Smaller Scatter Ball - Lesser timespan to finish, hover to get more details'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        null,
                        'Bigger Scatter Ball - More timespan to finish, hover to get more details'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        null,
                        'Scatter Ball with red outline - Cyclist involved in Doping. See tooltip for more details'
                    )
                )
            );
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var scatterData = this.props.scatterData;
            var thisNode = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this);

            var tooltipWidth = 50;
            var tooltipHeight = 30;

            var tooltipBox = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](thisNode).select('.scatterplot-tooltip').style('width', tooltipWidth).style('height', tooltipHeight).style('opacity', 0);

            var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](thisNode).select('svg');

            var svgWidth = 960;
            var svgHeight = 500;

            var margin = { top: 5, right: 15, bottom: 40, left: 20 };
            var graphWidth = svgWidth - margin.right - margin.left;
            var graphHeight = svgHeight - margin.top - margin.bottom;

            var yearExtent = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](scatterData, function (d) {
                return d.Year;
            });
            var rankExtent = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](scatterData, function (d) {
                return d.Place;
            });
            var secondsExtent = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](scatterData, function (d) {
                return d.Seconds;
            });

            var xScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleTime"]().domain([new Date(yearExtent[0].getFullYear() - 2, 0, 1), new Date(yearExtent[1].getFullYear() + 2, 0, 1)]).range([0, graphWidth]);
            var yScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]().domain([0, rankExtent[1] + 5]).range([graphHeight, 0]);
            var zScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]().domain(secondsExtent).range([10, 30]);

            var xAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["axisBottom"](xScale);
            var yAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["axisLeft"](yScale);

            svg.attr('width', svgWidth).attr('height', svgHeight);

            var container = svg.append('g').attr('class', 'graph-container');
            container.append("g").attr('class', 'axis x').attr("transform", 'translate(' + margin.left + ', ' + (margin.right + graphHeight) + ')').call(xAxis);
            container.append("g").attr('class', 'axis y').attr("transform", 'translate(' + margin.left + ', ' + margin.right + ')').call(yAxis);
            var scatterBalls = container.selectAll('g.scatter-ball').data(scatterData).enter().append('g').attr('class', 'scatter-ball');

            scatterBalls.append('circle').attr('cx', function (d) {
                return margin.left + xScale(d.Year);
            }).attr('cy', function (d) {
                return margin.top + yScale(d.Place);
            }).attr('r', function (d) {
                return zScale(d.Seconds);
            }).attr('fill', 'teal').attr('stroke', function (d) {
                if (d.Doping && d.URL) {
                    return 'red';
                }
            }).attr('stroke-width', function (d) {
                if (d.Doping && d.URL) {
                    return 3;
                }
            }).attr('opacity', '0.3').on('mouseover', function (d, i) {
                var mouseCoords = __WEBPACK_IMPORTED_MODULE_2_d3__["mouse"](__WEBPACK_IMPORTED_MODULE_2_d3__["event"].currentTarget);
                var dopingHref = '';
                if (d.URL && d.Doping) {
                    dopingHref = '<br /><span><a href=' + d.URL + '>' + d.Doping + '</a></span>';
                }
                tooltipBox.transition().duration(200).style('opacity', 0.9);
                tooltipBox.html('<span>#' + d.Place + '(' + d.Time + 'S) : ' + d.Nationality + ' - ' + d.Name + '</span>' + dopingHref).style('left', mouseCoords[0] + 'px').style('top', mouseCoords[1] + 'px');
            }).on('mouseout', function (d, i) {
                tooltipBox.transition().duration(500).style('opacity', 0);
            });
            // scatterBalls            
            //     .append('text')             
            //         .attr('x', d => margin.left + xScale(d.Year))
            //         .attr('y', d => margin.top + yScale(d.Place))
            //         .attr('r', d => zScale(d.Seconds))
            //         .attr('fill', 'blue')      
            //         .text(d => `#${d.Place}`)
        }
    }]);

    return ScatterPlotComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ScatterPlotComponent);

/***/ }),

/***/ "./datavis-scatterplot/styles/scatter-plot-styles.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./game-of-life/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_game_of_life_jsx__ = __webpack_require__("./game-of-life/components/game-of-life.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_game_of_life_scss__ = __webpack_require__("./game-of-life/styles/game-of-life.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_game_of_life_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_game_of_life_scss__);





__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_game_of_life_jsx__["a" /* default */], null), document.querySelector('#app4Container'));

/***/ }),

/***/ "./game-of-life/components/game-of-life.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_GameOfLifeEngine_js__ = __webpack_require__("./game-of-life/lib/GameOfLifeEngine.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GameOfLife = function (_Component) {
    _inherits(GameOfLife, _Component);

    function GameOfLife(props) {
        _classCallCheck(this, GameOfLife);

        var _this = _possibleConstructorReturn(this, (GameOfLife.__proto__ || Object.getPrototypeOf(GameOfLife)).call(this, props));

        _this.rowsCount = 40;
        _this.colsCount = 40;
        _this.engine = new __WEBPACK_IMPORTED_MODULE_1__lib_GameOfLifeEngine_js__["a" /* default */]({
            rows: _this.rowsCount,
            cols: _this.colsCount
        });
        _this.state = {
            grid: _this.engine.grid
        };
        return _this;
    }

    _createClass(GameOfLife, [{
        key: 'cellUpdateHandler',
        value: function cellUpdateHandler(rowIndex, colIndex) {
            this.engine.update(rowIndex, colIndex);
            this.setState({
                grid: this.engine.grid
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    null,
                    'Game of Life'
                ),
                this.state.grid.map(function (row, rowIndex) {

                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'grid-row', key: rowIndex },
                        row.map(function (col, colIndex) {
                            var clsName = col == __WEBPACK_IMPORTED_MODULE_1__lib_GameOfLifeEngine_js__["a" /* default */].ALIVE_CELL ? 'cell alive-cell' : 'cell dead-cell';
                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: clsName, key: colIndex, onClick: _this2.cellUpdateHandler.bind(_this2, rowIndex, colIndex) });
                        })
                    );
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.engine.nextGen();
                            _this2.setState({
                                grid: _this2.engine.grid
                            });
                        } },
                    'Next Gen'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: function onClick() {
                            clearInterval(_this2.timer);
                            _this2.timer = setInterval(function () {
                                _this2.engine.nextGen();
                                _this2.setState({
                                    grid: _this2.engine.grid
                                });
                            }, 500);
                        } },
                    'Loop'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: function onClick() {
                            clearInterval(_this2.timer);
                        } },
                    'Pause'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: function onClick() {
                            if (_this2.timer) {
                                clearInterval(_this2.timer);
                            }
                            _this2.engine.reset();
                            _this2.setState({
                                grid: _this2.engine.grid
                            });
                        } },
                    'Clear'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    'Gen Count : ',
                    this.engine.genCount
                )
            );
        }
    }]);

    return GameOfLife;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (GameOfLife);

/***/ }),

/***/ "./game-of-life/lib/GameOfLifeEngine.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameOfLifeEngine = function () {
    function GameOfLifeEngine(opts) {
        _classCallCheck(this, GameOfLifeEngine);

        this.rowsCount = opts.rows || 10;
        this.colsCount = opts.cols || 10;
        this.grid = this.getEmptyGrid();
        this._genCount = 0;
    }

    _createClass(GameOfLifeEngine, [{
        key: 'getEmptyGrid',
        value: function getEmptyGrid() {
            var emptyGrid = [];
            for (var rowIndex = 0; rowIndex < this.rowsCount; rowIndex++) {
                var row = [];
                for (var colIndex = 0; colIndex < this.colsCount; colIndex++) {
                    row.push(GameOfLifeEngine.DEAD_CELL);
                }
                emptyGrid.push(row);
            }
            return emptyGrid;
        }
    }, {
        key: 'nextGen',
        value: function nextGen() {
            var _this = this;

            var nextGenGrid = this.getEmptyGrid();
            this.grid.forEach(function (row, rowIndex) {
                row.forEach(function (col, colIndex) {
                    nextGenGrid[rowIndex][colIndex] = col;
                    var adjacentCells = _this.getAdjacentCells(rowIndex, colIndex);
                    var aliveAdjacentCells = adjacentCells.filter(function (cell) {
                        return _this.grid[cell[0]][cell[1]] == GameOfLifeEngine.ALIVE_CELL;
                    });
                    if (col == GameOfLifeEngine.DEAD_CELL) {
                        if (aliveAdjacentCells.length == 3) {
                            nextGenGrid[rowIndex][colIndex] = GameOfLifeEngine.ALIVE_CELL;
                        }
                    } else if (col == GameOfLifeEngine.ALIVE_CELL) {
                        if (aliveAdjacentCells.length < 2 || aliveAdjacentCells.length > 3) {
                            nextGenGrid[rowIndex][colIndex] = GameOfLifeEngine.DEAD_CELL;
                        }
                    } else {
                        console.log('Err: ' + row + ':' + col + ' neither zero nor one!');
                    }
                });
            });

            this.grid = nextGenGrid;
            this._genCount++;
        }
    }, {
        key: 'getAdjacentCells',
        value: function getAdjacentCells(rowIndex, colIndex) {
            var adjacentCellIndices = [];
            var isFirstRow = rowIndex == 0,
                isFirstCol = colIndex == 0,
                isLastRow = rowIndex == this.rowsCount - 1,
                isLastCol = colIndex == this.colsCount - 1;

            if (!isFirstCol) {
                adjacentCellIndices.push([rowIndex, colIndex - 1]);
            }
            if (!isLastCol) {
                adjacentCellIndices.push([rowIndex, colIndex + 1]);
            }
            if (!isFirstRow && !isLastCol) {
                adjacentCellIndices.push([rowIndex - 1, colIndex - 1]);
            }
            if (!isFirstRow) {
                adjacentCellIndices.push([rowIndex - 1, colIndex]);
            }
            if (!isFirstRow && !isLastCol) {
                adjacentCellIndices.push([rowIndex - 1, colIndex + 1]);
            }
            if (!isLastRow && !isFirstCol) {
                adjacentCellIndices.push([rowIndex + 1, colIndex - 1]);
            }
            if (!isLastRow) {
                adjacentCellIndices.push([rowIndex + 1, colIndex]);
            }
            if (!isLastRow && !isLastCol) {
                adjacentCellIndices.push([rowIndex + 1, colIndex + 1]);
            }

            return adjacentCellIndices;
        }
    }, {
        key: 'update',
        value: function update(rowIndex, colIndex) {
            this.grid[rowIndex][colIndex] = this.grid[rowIndex][colIndex] == GameOfLifeEngine.ALIVE_CELL ? GameOfLifeEngine.DEAD_CELL : GameOfLifeEngine.ALIVE_CELL;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.grid = this.getEmptyGrid();
            this._genCount = 0;
        }
    }, {
        key: 'genCount',
        get: function get() {
            return this._genCount;
        }
    }], [{
        key: 'ALIVE_CELL',
        get: function get() {
            return 'a';
        }
    }, {
        key: 'DEAD_CELL',
        get: function get() {
            return 'd';
        }
    }]);

    return GameOfLifeEngine;
}();

/* harmony default export */ __webpack_exports__["a"] = (GameOfLifeEngine);

/***/ }),

/***/ "./game-of-life/styles/game-of-life.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "./md-previewer/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_md_previewer_scss__ = __webpack_require__("./md-previewer/styles/md-previewer.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_md_previewer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_md_previewer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_md_previewer_jsx__ = __webpack_require__("./md-previewer/components/md-previewer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);





__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_md_previewer_jsx__["a" /* default */], null), document.querySelector('#app1Container'));

/***/ }),

/***/ "./md-previewer/components/md-previewer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_remarkable__ = __webpack_require__("../node_modules/remarkable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_remarkable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_remarkable__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MarkdownPreviewer = function (_Component) {
    _inherits(MarkdownPreviewer, _Component);

    function MarkdownPreviewer(props) {
        _classCallCheck(this, MarkdownPreviewer);

        var _this = _possibleConstructorReturn(this, (MarkdownPreviewer.__proto__ || Object.getPrototypeOf(MarkdownPreviewer)).call(this, props));

        _this.markdownParser = new __WEBPACK_IMPORTED_MODULE_1_remarkable___default.a();
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

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col text-center' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h1',
                            null,
                            'FreeCodeCamp - Markdown Previewer'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { className: 'inpt', onChange: function onChange(e) {
                                return _this2.onMarkdownContentChanged(e.target.value);
                            } })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'outpt', dangerouslySetInnerHTML: this.state.htmlMarkup })
                    )
                )
            );
        }
    }]);

    return MarkdownPreviewer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MarkdownPreviewer);

/***/ }),

/***/ "./md-previewer/styles/md-previewer.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./recipe-box/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_recipe_box_scss__ = __webpack_require__("./recipe-box/styles/recipe-box.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_recipe_box_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_recipe_box_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_recipe_box_jsx__ = __webpack_require__("./recipe-box/components/recipe-box.jsx");





__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_recipe_box_jsx__["a" /* default */], null), document.querySelector('#app3Container'));

/***/ }),

/***/ "./recipe-box/components/recipe-box.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_jsx__ = __webpack_require__("./recipe-box/components/recipe.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_RecipeStore_js__ = __webpack_require__("./recipe-box/stores/RecipeStore.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var RecipeBox = function (_Component) {
    _inherits(RecipeBox, _Component);

    function RecipeBox(props) {
        _classCallCheck(this, RecipeBox);

        var _this = _possibleConstructorReturn(this, (RecipeBox.__proto__ || Object.getPrototypeOf(RecipeBox)).call(this, props));

        _this.recipeStore = new __WEBPACK_IMPORTED_MODULE_2__stores_RecipeStore_js__["a" /* default */]();
        _this.state = {
            newRecipeName: '',
            recipes: _this.recipeStore.getAllRecipes()
        };
        return _this;
    }

    _createClass(RecipeBox, [{
        key: 'recipeNameChangeHandler',
        value: function recipeNameChangeHandler(e) {
            this.setState({ newRecipeName: e.target.value });
        }
    }, {
        key: 'createRecipeCommandHandler',
        value: function createRecipeCommandHandler() {
            this.recipeStore.createRecipe({ name: this.state.newRecipeName, ingredients: [] });
            this.setState({
                recipes: this.recipeStore.getAllRecipes()
            });
        }
    }, {
        key: 'deleteRecipeCommandHandler',
        value: function deleteRecipeCommandHandler(recipeId) {
            this.recipeStore.deleteRecipe(recipeId);
            this.setState({
                recipes: this.recipeStore.getAllRecipes()
            });
        }
    }, {
        key: 'updateRecipeCommandHandler',
        value: function updateRecipeCommandHandler(recipe) {
            this.recipeStore.updateRecipe(recipe);
            this.setState({
                recipes: this.recipeStore.getAllRecipes()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'recipe name...', onChange: this.recipeNameChangeHandler.bind(this) }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'button',
                            { onClick: this.createRecipeCommandHandler.bind(this) },
                            'Create'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { id: 'accordion', role: 'tablist', 'aria-multiselectable': 'true' },
                    this.state.recipes.map(function (r) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__recipe_jsx__["a" /* default */], { recipe: r, key: r.id,
                            deleteCommand: _this2.deleteRecipeCommandHandler.bind(_this2),
                            updateCommand: _this2.updateRecipeCommandHandler.bind(_this2)
                        });
                    })
                )
            );
        }
    }]);

    return RecipeBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RecipeBox);

/***/ }),

/***/ "./recipe-box/components/recipe.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Recipe = function (_Component) {
    _inherits(Recipe, _Component);

    function Recipe(props) {
        _classCallCheck(this, Recipe);

        var _this = _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this, props));

        _this.state = {
            recipeName: _this.props.recipe.name,
            ingredients: _this.props.recipe.ingredients,
            isEditMode: false
        };
        return _this;
    }

    _createClass(Recipe, [{
        key: 'updateRecipeCommandHandler',
        value: function updateRecipeCommandHandler() {
            this.props.updateCommand({ id: this.props.recipe.id, name: this.state.recipeName, ingredients: this.state.ingredients });
            this.setState({ isEditMode: false });
        }
    }, {
        key: 'cancelUpdateRecipeCommandHandler',
        value: function cancelUpdateRecipeCommandHandler() {
            this.setState({ isEditMode: false });
        }
    }, {
        key: 'recipeNameChangeHandler',
        value: function recipeNameChangeHandler(e) {
            this.setState({ recipeName: e.target.value });
        }
    }, {
        key: 'ingredientsChangeHandler',
        value: function ingredientsChangeHandler(e) {
            this.setState({ ingredients: e.target.value.split(',') });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var markp = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-header', role: 'tab', id: 'rcp' + this.props.recipe.id },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h5',
                        { className: 'mb-0' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { 'data-toggle': 'collapse', 'data-parent': '#recipeBox', href: '#rcpClps' + this.props.recipe.id, 'aria-expanded': 'true', 'aria-controls': 'rcpClps' + this.props.recipe.id },
                            this.props.recipe.name
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { id: 'rcpClps' + this.props.recipe.id, className: 'collapse show', role: 'tabpanel', 'aria-labelledby': 'rcp' + this.props.recipe.id },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-block' },
                        this.state.isEditMode && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'button',
                                    {
                                        onClick: this.updateRecipeCommandHandler.bind(this),
                                        className: 'btn btn-default' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-floppy-o' })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'button',
                                    { className: 'btn btn-default',
                                        onClick: this.cancelUpdateRecipeCommandHandler.bind(this) },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-undo' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', defaultValue: this.props.recipe.name, onChange: this.recipeNameChangeHandler.bind(this) })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: this.props.recipe.ingredients.join(','), onChange: this.ingredientsChangeHandler.bind(this) })
                            )
                        ),
                        !this.state.isEditMode && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'button',
                                {
                                    onClick: function onClick() {
                                        return _this2.setState({ isEditMode: true });
                                    },
                                    className: 'btn btn-default' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-pencil' })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'button',
                                { className: 'btn btn-default',
                                    onClick: function onClick() {
                                        if (window.confirm('are you sure?')) {
                                            _this2.props.deleteCommand(_this2.props.recipe.id);
                                        }
                                    } },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-times' })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'ul',
                                { className: 'list-group' },
                                this.props.recipe.ingredients.map(function (i, indx) {
                                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'li',
                                        { key: indx, className: 'list-group-item' },
                                        i
                                    );
                                })
                            )
                        )
                    )
                )
            );

            return markp;
        }
    }]);

    return Recipe;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Recipe);

/***/ }),

/***/ "./recipe-box/stores/RecipeStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecipeStore = function () {
    function RecipeStore() {
        _classCallCheck(this, RecipeStore);

        this.recipes = [];
        var localStore = localStorage.getItem('fcc-recipe-box');
        if (!localStore) {
            localStorage.setItem('fcc-recipe-box', JSON.stringify(this.recipes));
        } else {
            this.recipes = JSON.parse(localStore);
        }
    }

    _createClass(RecipeStore, [{
        key: 'createRecipe',
        value: function createRecipe(recipe) {
            recipe.id = this.recipes.length == 0 ? 1 : this.recipes[this.recipes.length - 1].id + 1;
            this.recipes.push(recipe);
            localStorage.setItem('fcc-recipe-box', JSON.stringify(this.recipes));
        }
    }, {
        key: 'updateRecipe',
        value: function updateRecipe(recipe) {
            var indexToUpdate = this.recipes.findIndex(function (r) {
                return r.id == recipe.id;
            });

            for (var p in recipe) {
                if (p != 'id') {
                    this.recipes[indexToUpdate][p] = recipe[p];
                }
            }
            localStorage.setItem('fcc-recipe-box', JSON.stringify(this.recipes));
        }
    }, {
        key: 'deleteRecipe',
        value: function deleteRecipe(recipeId) {
            var indexToDelete = this.recipes.findIndex(function (r) {
                return r.id == recipeId;
            });
            this.recipes.splice(indexToDelete, 1);
            localStorage.setItem('fcc-recipe-box', JSON.stringify(this.recipes));
        }
    }, {
        key: 'getRecipe',
        value: function getRecipe(recipeId) {
            return this.recipes.find(function (r) {
                return r.id == recipeId;
            });
        }
    }, {
        key: 'getAllRecipes',
        value: function getAllRecipes() {
            return this.recipes;
        }
    }]);

    return RecipeStore;
}();

/* harmony default export */ __webpack_exports__["a"] = (RecipeStore);

/***/ }),

/***/ "./recipe-box/styles/recipe-box.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./landing/app.js");
__webpack_require__("./camper-leaderboard/app.js");
__webpack_require__("./md-previewer/app.js");
__webpack_require__("./recipe-box/app.js");
__webpack_require__("./game-of-life/app.js");
__webpack_require__("./datavis-bargraph/app.js");
__webpack_require__("./datavis-scatterplot/app.js");
__webpack_require__("./datavis-heatmap/app.js");
__webpack_require__("./datavis-forcedirectedgraph/app.js");
module.exports = __webpack_require__("./datavis-globe/app.js");


/***/ })

},[0]);