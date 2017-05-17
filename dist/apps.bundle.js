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
module.exports = __webpack_require__("./recipe-box/app.js");


/***/ })

},[0]);