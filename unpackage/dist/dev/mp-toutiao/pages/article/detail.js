(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/article/detail"],{

/***/ 197:
/*!***************************************************************************!*\
  !*** /Volumes/50/shequapp/户外/main.js?{"page":"pages%2Farticle%2Fdetail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/article/detail.vue */ 198));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 198:
/*!********************************************************!*\
  !*** /Volumes/50/shequapp/户外/pages/article/detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_7e72117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=7e72117a&scoped=true& */ 199);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 201);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_id_7e72117a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=7e72117a&scoped=true&lang=scss& */ 204);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_7e72117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_7e72117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e72117a",
  null,
  false,
  _detail_vue_vue_type_template_id_7e72117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/article/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 199:
/*!***************************************************************************************************!*\
  !*** /Volumes/50/shequapp/户外/pages/article/detail.vue?vue&type=template&id=7e72117a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_7e72117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=7e72117a&scoped=true& */ 200);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_7e72117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_7e72117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_7e72117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_7e72117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 200:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/50/shequapp/户外/pages/article/detail.vue?vue&type=template&id=7e72117a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    parser: function() {
      return Promise.all(/*! import() | components/parser/parser */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/parser/parser")]).then(__webpack_require__.bind(null, /*! @/components/parser/parser.vue */ 270))
    },
    loading: function() {
      return __webpack_require__.e(/*! import() | components/loading/loading */ "components/loading/loading").then(__webpack_require__.bind(null, /*! @/components/loading/loading.vue */ 280))
    },
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 287))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 201:
/*!*********************************************************************************!*\
  !*** /Volumes/50/shequapp/户外/pages/article/detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 202);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 202:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/50/shequapp/户外/pages/article/detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




































































































































































var _util = _interopRequireDefault(__webpack_require__(/*! @/common/util.js */ 194));
var _wechatMP = _interopRequireDefault(__webpack_require__(/*! @/common/sdk/wechatMP.js */ 203));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var parser = function parser() {Promise.all(/*! require.ensure | components/parser/parser */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/parser/parser")]).then((function () {return resolve(__webpack_require__(/*! @/components/parser/parser.vue */ 270));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var pageLoading = function pageLoading() {__webpack_require__.e(/*! require.ensure | components/loading/pageLoading */ "components/loading/pageLoading").then((function () {return resolve(__webpack_require__(/*! @/components/loading/pageLoading.vue */ 263));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iconfont = function iconfont() {__webpack_require__.e(/*! require.ensure | components/iconfont/iconfont */ "components/iconfont/iconfont").then((function () {return resolve(__webpack_require__(/*! @/components/iconfont/iconfont.vue */ 242));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var loading = function loading() {__webpack_require__.e(/*! require.ensure | components/loading/loading */ "components/loading/loading").then((function () {return resolve(__webpack_require__(/*! @/components/loading/loading.vue */ 280));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniPopup = function uniPopup() {__webpack_require__.e(/*! require.ensure | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 287));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  components: {
    parser: parser,
    pageLoading: pageLoading,
    loading: loading,
    iconfont: iconfont,
    uniPopup: uniPopup },

  data: function data() {
    return {
      id: 0,
      info: { comment: { count: 0, list: [] } },
      showAddComment: false,
      showCommenBar: true,
      addCommentFocus: false,
      commentContent: '',
      replyCommentId: 0,
      replyNickname: '',
      page_index: 1,
      page_size: 10,
      hasMoreData: false,
      showPageLoading: true,
      currentUrl: '',
      shareUrl: '',
      showShareTip: false,
      showH5Share: false,
      showBrowserShareTip: false };

  },
  onShow: function onShow(e) {
    this.$initPageTitle(); //初始化页面标题
    if (this.page_index > 1) {
      this.page_index = 1;
      this.getData();
    }

    /*来源是登录时更新*/
    var source = uni.getStorageSync('source');
    if (source == 'login') {
      uni.removeStorageSync('source');
      this.loadData();
    }

    /*当前页面*/
    if (!uni.getStorageSync('source')) {
      uni.setStorageSync('source', 'article/detail');
    }
  },
  onLoad: function onLoad(e) {
    if (e.id > 0) {
      this.id = e.id;
    }



    this.getData();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    uni.showLoading({
      title: '刷新中' });

    this.page_index = 1;
    this.getData();
  },
  onReachBottom: function onReachBottom(e) {
    if (this.hasMoreData) {
      this.getComment();
    }
  },
  /*小程序分享*/
  onShareAppMessage: function onShareAppMessage() {
    return {
      path: '/pages/article/detail?id=' + this.info.id,
      success: function success(e) {},
      title: this.info.title,
      imageUrl: this.info.photo_url };

  },
  methods: {
    /*加载数据*/
    loadData: function loadData() {
      this.getData();
    },

    /*获取文章详情*/
    getData: function getData() {var _this = this;
      console.log('this.$articleapi.article.detail:');
      console.log(this.$articleapi.article.detail);
      this.$app.request({
        url: this.$articleapi.article.detail,
        data: {
          id: this.id,
          page_size: this.page_size },

        method: 'POST',
        dataType: 'json',
        success: function success(res) {
          console.log('res');
          if (res.code == 0) {
            _this.info = res.data;
            uni.setNavigationBarTitle({
              title: _this.info.title });

            _this.$initPageTitle();
            _this.showPageLoading = false;
            if (res.data.comment.page > _this.page_index) {
              _this.hasMoreData = true;
            } else {
              _this.hasMoreData = false;
            }
            _this.page_index += 1;
            _this.initMPShare(); //公众号分享
          } else {
            _this.$alert(res.msg);
          }
        },
        complete: function complete(res) {
          uni.stopPullDownRefresh();
          uni.hideLoading();
        } });

    },

    /*点赞*/
    like: function like() {var _this2 = this;
      this.$app.request({
        url: this.$articleapi.article.like,
        data: {
          article_id: this.id },

        method: 'POST',
        dataType: 'json',
        success: function success(res) {
          console.log('res');
          if (res.code == 0) {
            _this2.info.is_like = !_this2.info.is_like;
            var msg = _this2.info.is_like ? '点赞成功' : '已取消点赞';
            _this2.$alert(msg, 'success');
          } else {
            _this2.$alert(res.msg, 'warning');
          }
        } });

    },

    /*评论点赞*/
    commentLike: function commentLike(comment_id, index) {var _this3 = this;
      this.$app.request({
        url: this.$articleapi.article.commentLike,
        data: {
          comment_id: comment_id },

        method: 'POST',
        dataType: 'json',
        success: function success(res) {
          if (res.code == 0) {
            if (_this3.info.comment.list[index].is_like) {
              _this3.info.comment.list[index].is_like = false;
              _this3.info.comment.list[index].like_count -= 1;
            } else {
              _this3.info.comment.list[index].is_like = true;
              _this3.info.comment.list[index].like_count += 1;
            }
            var msg = _this3.info.comment.list[index].is_like ? '点赞成功' : '已取消点赞';
            _this3.$alert(msg);
          } else {
            _this3.$alert(res.msg);
          }
        } });

    },

    /*收藏*/
    favorite: function favorite() {var _this4 = this;
      this.$app.request({
        url: this.$articleapi.article.favorite,
        data: {
          article_id: this.id },

        method: 'POST',
        dataType: 'json',
        success: function success(res) {
          console.log('res');
          if (res.code == 0) {
            _this4.info.is_favorite = !_this4.info.is_favorite;
            var msg = _this4.info.is_favorite ? '收藏成功' : '已取消收藏';
            _this4.$alert(msg, 'success');
          } else {
            _this4.$alert(res.msg, 'warning');
          }
        } });

    },

    /*初始化添加评论*/
    initAddComment: function initAddComment(status) {var _this5 = this;
      if (status) {
        this.$app.initLogin();
      }
      this.showAddComment = status;
      this.commentContent = '';
      if (this.replyCommentId > 0) {
        this.replyCommentId = 0;
        this.replyNickname = '';
      }
      setTimeout(function () {
        _this5.addCommentFocus = status;
      }, 200);
    },

    /*添加评论或回复*/
    addCommentOrReply: function addCommentOrReply() {
      if (this.commentContent == '') {
        this.$alert('评论内容不能为空');
        return;
      }
      if (this.replyCommentId > 0) {
        this.addReply();
      } else {
        this.addComment();
      }
    },

    /*添加评论*/
    addComment: function addComment() {var _this6 = this;
      this.$app.request({
        url: this.$articleapi.article.addComment,
        data: {
          article_id: this.id,
          content: this.commentContent,
          page_size: this.page_size },

        method: 'POST',
        dataType: 'json',
        success: function success(res) {
          if (res.code == 0) {
            _this6.info.comment = res.data;
            _this6.showAddComment = false;
            _this6.commentContent = '';
            _this6.$alert('评论成功');
          } else {
            _this6.$alert(res.msg);
          }
        } });

    },

    /*初始化回复*/
    initAddReply: function initAddReply(comment_id, nickname) {
      this.initAddComment(true);
      this.replyCommentId = comment_id;
      this.replyNickname = nickname;
    },

    /*添加回复*/
    addReply: function addReply() {var _this7 = this;
      if (this.commentContent == '') {
        this.$alert('回复内容不能为空');
        return;
      }
      this.$app.request({
        url: this.$articleapi.article.addReply,
        data: {
          comment_id: this.replyCommentId,
          content: this.commentContent,
          page_size: this.page_size },

        method: 'POST',
        dataType: 'json',
        success: function success(res) {
          if (res.code == 0) {
            _this7.info.comment = res.data;
            _this7.showAddComment = false;
            _this7.replyCommentId = 0;
            _this7.replyNickname = '';
            _this7.commentContent = '';
            _this7.$alert('评论成功');
          } else {
            _this7.$alert(res.msg);
          }
        } });

    },

    /*获取评论*/
    getComment: function getComment() {var _this8 = this;
      this.$app.request({
        url: this.$articleapi.article.comment,
        data: {
          article_id: this.id,
          page_index: this.page_index,
          page_size: this.page_size },

        method: 'POST',
        dataType: 'json',
        success: function success(res) {
          if (res.code == 0) {
            console.log(_this8.info.comment);
            _this8.info.comment.list = _this8.info.comment.list.concat(res.data.list);
            _this8.info.comment.count = res.data.count;
            if (res.data.page > _this8.page_index) {
              _this8.hasMoreData = true;
            } else {
              _this8.hasMoreData = false;
            }
            _this8.page_index += 1;
          } else {
            _this8.$alert(res.msg);
          }
        },
        complete: function complete(res) {
          uni.stopPullDownRefresh();
          uni.hideLoading();
        } });

    },

    /*打开外部链接*/
    openLink: function openLink(url) {
      console.log(url);
      window.location.href = url;
    },

    /*关闭H5分享*/
    closeH5Share: function closeH5Share() {
      this.showH5Share = false;
    },

    /*关闭微信分享提示*/
    closeShareTip: function closeShareTip() {
      this.showShareTip = false;
    },
    /*显示浏览器分享提示*/
    showBrowserShareTips: function showBrowserShareTips() {
      this.showH5Share = false;
      this.showBrowserShareTip = true;
    },
    /*关闭浏览器分享提示*/
    closeBrowserShareTip: function closeBrowserShareTip() {
      this.showBrowserShareTip = false;
    },

    /*分享*/
    share: function share() {








      console.log('share');


      uni.showShareMenu();

    },

    /*初始化公众号分享*/
    initMPShare: function initMPShare() {
















    },

    /*跳转至评论详情*/
    redirectCommentDetail: function redirectCommentDetail(id, replyCount) {
      if (replyCount > 0) {
        uni.navigateTo({
          url: 'commentDetail?id=' + id });

      }
    },

    /*复制*/
    copyText: function copyText(text) {var _this9 = this;
      uni.setClipboardData({
        data: text,
        success: function success(res) {
          _this9.$alert('原文链接已复制', 'success');
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 204:
/*!******************************************************************************************************************!*\
  !*** /Volumes/50/shequapp/户外/pages/article/detail.vue?vue&type=style&index=0&id=7e72117a&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_7e72117a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&id=7e72117a&scoped=true&lang=scss& */ 205);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_7e72117a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_7e72117a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_7e72117a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_7e72117a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_7e72117a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 205:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/50/shequapp/户外/pages/article/detail.vue?vue&type=style&index=0&id=7e72117a&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[197,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvNTAvc2hlcXVhcHAv5oi35aSWL3BhZ2VzL2FydGljbGUvZGV0YWlsLnZ1ZT82MmNjIiwid2VicGFjazovLy8vVm9sdW1lcy81MC9zaGVxdWFwcC/miLflpJYvcGFnZXMvYXJ0aWNsZS9kZXRhaWwudnVlP2M4MDQiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzLzUwL3NoZXF1YXBwL+aIt+Wkli9wYWdlcy9hcnRpY2xlL2RldGFpbC52dWU/ZGNmOCIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvNTAvc2hlcXVhcHAv5oi35aSWL3BhZ2VzL2FydGljbGUvZGV0YWlsLnZ1ZT9hMTdmIiwidW5pLWFwcDovLy9wYWdlcy9hcnRpY2xlL2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzLzUwL3NoZXF1YXBwL+aIt+Wkli9wYWdlcy9hcnRpY2xlL2RldGFpbC52dWU/OGY2NSIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvNTAvc2hlcXVhcHAv5oi35aSWL3BhZ2VzL2FydGljbGUvZGV0YWlsLnZ1ZT9hMmU1Il0sIm5hbWVzIjpbImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSxpRztBQUNBQSxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStIO0FBQy9IO0FBQzBEO0FBQ0w7QUFDc0M7OztBQUczRjtBQUM2TTtBQUM3TSxnQkFBZ0IsaU5BQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7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Q0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTlnRDtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2FydGljbGUvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2FydGljbGUvZGV0YWlsLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U3MjExN2Emc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZTcyMTE3YSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ZTcyMTE3YVwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9hcnRpY2xlL2RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U3MjExN2Emc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICBwYXJzZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL3BhcnNlci9wYXJzZXJcIiAqLyBcIkAvY29tcG9uZW50cy9wYXJzZXIvcGFyc2VyLnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICBsb2FkaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmdcIiAqLyBcIkAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHVuaVBvcHVwOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwXCIgKi8gXCJAL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPnt7IGluZm8udGl0bGUgfX08L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNvdXJjZS1kYXRlXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic291cmNlXCIgdi1pZj1cImluZm8uc291cmNlX3VybFwiIEB0YXA9XCJjb3B5VGV4dChpbmZvLnNvdXJjZV91cmwpXCI+e3sgaW5mby5zb3VyY2UgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic291cmNlXCIgdi1lbHNlPnt7IGluZm8uc291cmNlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRhdGUgaGlkZGVuXCI+e3sgaW5mby5jcmVhdGVfdGltZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVhZFwiPumYheivuyB7eyBpbmZvLnJlYWQgfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVzY1wiPjxwYXJzZXIgOmh0bWw9XCJpbmZvLmNvbnRlbnRcIj48L3BhcnNlcj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWNsYXJhdGlvblwiIHYtaWY9XCJpbmZvLnNvdXJjZV91cmxcIj5cclxuXHRcdFx0XHRcdOacrOaWh+i9rOi9veiHs3t7IGluZm8uc291cmNlIH1977yMXHJcblx0XHRcdFx0XHQ8dGV4dCBAdGFwPVwiY29weVRleHQoaW5mby5zb3VyY2VfdXJsKVwiPueCueatpOWPr+afpeeci+WOn+aWh+mTvuaOpeOAgjwvdGV4dD5cclxuXHRcdFx0XHRcdOWmguacieS+teadg++8jOivt+iBlOezu+aIkeS7rO+8jOaIkeS7rOWwhuWcqOacgOefreeahOaXtumXtOWGheWkhOeQhuOAglxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7lhajpg6jor4Torro8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvdW50XCIgdi1pZj1cImluZm8uY29tbWVudC5jb3VudCA+IDBcIj4oe3sgaW5mby5jb21tZW50LmNvdW50IH19KTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGluZm8uY29tbWVudC5saXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImF2YXRhclwiPjxpbWFnZSA6c3JjPVwiaXRlbS5hdmF0YXJfdXJsXCI+PC9pbWFnZT48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5pY2tuYW1lLWxpa2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5pY2tuYW1lXCI+e3sgaXRlbS5uaWNrbmFtZSB9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpa2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBAdGFwPVwiY29tbWVudExpa2UoaXRlbS5pZCwgaW5kZXgpXCIgdi1zaG93PVwiIWl0ZW0uaXNfbGlrZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb25fbGlrZV8wMS5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIEB0YXA9XCJjb21tZW50TGlrZShpdGVtLmlkLCBpbmRleClcIiB2LXNob3c9XCJpdGVtLmlzX2xpa2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uX2xpa2VfMDFfaG92ZXIucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlrZS1jb3VudFwiPnt7IGl0ZW0ubGlrZV9jb3VudCB9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PG5hdmlnYXRvciBjbGFzcz1cImNvbW1lbnQtZGVzY1wiIDp1cmw9XCInY29tbWVudERldGFpbD9pZD0nICsgaXRlbS5pZFwiIGhvdmVyLWNsYXNzPVwibm9uZVwiPnt7IGl0ZW0uY29udGVudCB9fTwvbmF2aWdhdG9yPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRhdGUtcmVwbHlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bmF2aWdhdG9yIGNsYXNzPVwiZGF0ZVwiIDp1cmw9XCInY29tbWVudERldGFpbD9pZD0nICsgaXRlbS5pZFwiIGhvdmVyLWNsYXNzPVwibm9uZVwiPnt7IGl0ZW0uY3JlYXRlX3RpbWUgfX08L25hdmlnYXRvcj5cclxuXHRcdFx0XHRcdFx0XHQ8bmF2aWdhdG9yIGNsYXNzPVwicmVwbHlcIiA6dXJsPVwiJ2NvbW1lbnREZXRhaWw/b3BlcmF0ZT1yZXBseScgKyAnJmlkPScgKyBpdGVtLmlkXCI+5Zue5aSNVEE8L25hdmlnYXRvcj5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8bmF2aWdhdG9yIGNsYXNzPVwicmVwbHktY291bnRcIiB2LWlmPVwiaXRlbS5yZXBseV9jb3VudCA+IDBcIiA6dXJsPVwiJ2NvbW1lbnREZXRhaWw/aWQ9JyArIGl0ZW0uaWRcIiBob3Zlci1jbGFzcz1cIm5vbmVcIj5cclxuXHRcdFx0XHRcdFx0XHTlhajpg6h7eyBpdGVtLnJlcGx5X2NvdW50IH195p2h5Zue5aSNID5cclxuXHRcdFx0XHRcdFx0PC9uYXZpZ2F0b3I+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDxsb2FkaW5nIHYtaWY9XCJoYXNNb3JlRGF0YVwiPjwvbG9hZGluZz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5vLWNvbW1lbnRcIiB2LWlmPVwiaW5mby5jb21tZW50LmNvdW50ID09IDBcIj7mmoLml6Dor4TorrrvvIzlv6vmnaXmiqLljaDmspnlj5HlkKd+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmxvYXQtZW1wdHlcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29tbWVudC1iYXJcIiB2LXNob3c9XCIhc2hvd0FkZENvbW1lbnQgJiYgc2hvd0NvbW1lbkJhclwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRcIiBAdGFwPVwiaW5pdEFkZENvbW1lbnQodHJ1ZSlcIj48dGV4dD7lj5Hooajor4Torro8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0ZVwiPlxyXG5cdFx0XHRcdFx0PG5hdmlnYXRvciA6dXJsPVwiJ2NvbW1lbnQ/YXJ0aWNsZV9pZD0nICsgaWRcIiBjbGFzcz1cImluZm9cIiBob3Zlci1jbGFzcz1cIm5vbmVcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb25fY29tbWVudF8wMi5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvdW50XCIgdi1pZj1cImluZm8uY29tbWVudC5jb3VudCA+IDBcIj57eyBpbmZvLmNvbW1lbnQuY291bnQgfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L25hdmlnYXRvcj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlrZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgQHRhcD1cImxpa2UoKVwiIHYtc2hvdz1cIiFpbmZvLmlzX2xpa2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uX2xpa2VfMDIucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PGltYWdlIEB0YXA9XCJsaWtlKClcIiB2LXNob3c9XCJpbmZvLmlzX2xpa2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uX2xpa2VfMDJfaG92ZXIucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmF2b3JpdGVcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIEB0YXA9XCJmYXZvcml0ZSgpXCIgdi1zaG93PVwiIWluZm8uaXNfZmF2b3JpdGVcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uX2Zhdm9yaXRlLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBAdGFwPVwiZmF2b3JpdGUoKVwiIHYtc2hvdz1cImluZm8uaXNfZmF2b3JpdGVcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uX2Zhdm9yaXRlX2hvdmVyLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9wZW4tdHlwZT1cInNoYXJlXCIgY2xhc3M9XCJzaGFyZVwiIEB0YXA9XCJzaGFyZVwiPjxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uX3NoYXJlLnBuZ1wiPjwvaW1hZ2U+PC9idXR0b24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gI2lmZGVmIE1QIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJnLW1hc2tlclwiIHYtaWY9XCJzaG93QWRkQ29tbWVudFwiIEB0YXA9XCJpbml0QWRkQ29tbWVudChmYWxzZSlcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLWNvbW1lbnRcIiB2LWlmPVwic2hvd0FkZENvbW1lbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImluZm9cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0OnNob3ctY29uZmlybS1iYXI9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdFx0OmN1cnNvci1zcGFjaW5nPVwiMjBcIlxyXG5cdFx0XHRcdFx0XHRcdHJlZj1cImNvbW1lbnRDb250ZW50XCJcclxuXHRcdFx0XHRcdFx0XHQ6bWF4bGVuZ3RoPVwiMjAwXCJcclxuXHRcdFx0XHRcdFx0XHQ6YXV0by1oZWlnaHQ9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0XHQ6Zml4ZWQ9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0XHQ6Zm9jdXM9XCJzaG93QWRkQ29tbWVudFwiXHJcblx0XHRcdFx0XHRcdFx0di1tb2RlbC50cmltPVwiY29tbWVudENvbnRlbnRcIlxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyLWNsYXNzPVwiaW5wdXQtYmdcIlxyXG5cdFx0XHRcdFx0XHRcdDpwbGFjZWhvbGRlcj1cInJlcGx5Q29tbWVudElkID4gMCA/ICflm57lpI0gJyArIHJlcGx5Tmlja25hbWUgKyAn77yaJyA6ICflj5Hooajor4TorronXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkXCI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJtaW5pLWJ0blwiIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cIm1pbmlcIiBAY2xpY2s9XCJhZGRDb21tZW50T3JSZXBseSgpXCI+e3sgcmVwbHlDb21tZW50SWQgPiAwID8gJ+WbnuWkjScgOiAn5Y+R6KGoJyB9fTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0PCEtLSAjaWZuZGVmIE1QIC0tPlxyXG5cdFx0XHQ8dW5pLXBvcHVwIDpzaG93PVwic2hvd0FkZENvbW1lbnRcIiBAY2xvc2U9XCJpbml0QWRkQ29tbWVudChmYWxzZSlcIiB0eXBlPVwiYm90dG9tXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtY29tbWVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdDpjdXJzb3Itc3BhY2luZz1cIjIwXCJcclxuXHRcdFx0XHRcdFx0XHRcdDpzaG93LWNvbmZpcm0tYmFyPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OmF1dG8taGVpZ2h0PVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6Zml4ZWQ9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0XHRcdDptYXhsZW5ndGg9XCIyMDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OmZvY3VzPVwiYWRkQ29tbWVudEZvY3VzXCJcclxuXHRcdFx0XHRcdFx0XHRcdHYtbW9kZWwudHJpbT1cImNvbW1lbnRDb250ZW50XCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyLWNsYXNzPVwiaW5wdXQtYmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OnBsYWNlaG9sZGVyPVwicmVwbHlDb21tZW50SWQgPiAwID8gJ+WbnuWkjSAnICsgcmVwbHlOaWNrbmFtZSArICfvvJonIDogJ+WPkeihqOivhOiuuidcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwibWluaS1idG5cIiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJtaW5pXCIgQGNsaWNrPVwiYWRkQ29tbWVudE9yUmVwbHkoKVwiPnt7IHJlcGx5Q29tbWVudElkID4gMCA/ICflm57lpI0nIDogJ+WPkeihqCcgfX08L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC91bmktcG9wdXA+XHJcblx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHQ8dW5pLXBvcHVwIDpzaG93PVwic2hvd0g1U2hhcmVcIiB0eXBlPVwiYm90dG9tXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoNS1zaGFyZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPuWIhuS6q+WIsDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hhcmUtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBAdGFwPVwic2hvd0Jyb3dzZXJTaGFyZVRpcHMoKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIndlY2hhdFwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb25fd2VjaGF0LnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+5b6u5L+hPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IEB0YXA9XCJzaG93QnJvd3NlclNoYXJlVGlwcygpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb25fcXEucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD5RUTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBAdGFwPVwib3BlbkxpbmsoJ2h0dHBzOi8vc2VydmljZS53ZWliby5jb20vc2hhcmUvc2hhcmUucGhwP3VybD0nICsgY3VycmVudFVybCArICcmdGl0bGU9JyArIGluZm8udGl0bGUgKyAnJnBpYz0nICsgaW5mby5waG90b191cmwpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb25fd2VpYm8ucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7mlrDmtarlvq7ljZo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXdcclxuXHRcdFx0XHRcdFx0XHRAdGFwPVwib3BlbkxpbmsoJ2h0dHBzOi8vc25zLnF6b25lLnFxLmNvbS9jZ2ktYmluL3F6c2hhcmUvY2dpX3F6c2hhcmVfb25la2V5Pz91cmw9JyArIGN1cnJlbnRVcmwgKyAnJnRpdGxlPScgKyBpbmZvLnRpdGxlICsgJyZwaWNzPScgKyBpbmZvLnBob3RvX3VybClcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb25fcXFrai5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PlFR56m66Ze0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlLWJ0blwiIEB0YXA9XCJjbG9zZUg1U2hhcmVcIj7lj5bmtog8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3VuaS1wb3B1cD5cclxuXHRcdFx0PHZpZXcgQHRhcD1cImNsb3NlU2hhcmVUaXAoKVwiIGNsYXNzPVwic2hhcmUtbWFza2VcIiB2LXNob3c9XCJzaG93U2hhcmVUaXBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlLXRpcFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2hhcmUtdGlwLWluZm9cIiBtb2RlPVwiYXNwZWN0Rml0XCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvc2hhcmVfdGlwX2luZm8ucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDxpbWFnZSBAdGFwPVwiY2xvc2VTaGFyZVRpcCgpXCIgY2xhc3M9XCJzaGFyZS10aXAtYnRuXCIgbW9kZT1cImFzcGVjdEZpdFwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3NoYXJlX3RpcF9idG4ucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgQHRhcD1cImNsb3NlQnJvd3NlclNoYXJlVGlwKClcIiBjbGFzcz1cInNoYXJlLW1hc2tlXCIgdi1zaG93PVwic2hvd0Jyb3dzZXJTaGFyZVRpcFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hhcmUtdGlwIHNoYXJlLWJyb3dzZXItdGlwXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJzaGFyZS10aXAtaW5mb1wiIG1vZGU9XCJhc3BlY3RGaXRcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9zaGFyZV90aXBfYnJvd3Nlci5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PGltYWdlIEB0YXA9XCJjbG9zZUJyb3dzZXJTaGFyZVRpcCgpXCIgY2xhc3M9XCJzaGFyZS10aXAtYnRuXCIgbW9kZT1cImFzcGVjdEZpdFwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3NoYXJlX3RpcF9idG4ucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDxwYWdlTG9hZGluZyB2LWlmPVwic2hvd1BhZ2VMb2FkaW5nXCI+PC9wYWdlTG9hZGluZz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcGFyc2VyIGZyb20gJ0AvY29tcG9uZW50cy9wYXJzZXIvcGFyc2VyLnZ1ZSc7XHJcbmltcG9ydCBwYWdlTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvbG9hZGluZy9wYWdlTG9hZGluZy52dWUnO1xyXG5pbXBvcnQgaWNvbmZvbnQgZnJvbSAnQC9jb21wb25lbnRzL2ljb25mb250L2ljb25mb250LnZ1ZSc7XHJcbmltcG9ydCBsb2FkaW5nIGZyb20gJ0AvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcudnVlJztcclxuaW1wb3J0IHVuaVBvcHVwIGZyb20gJ0AvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZSc7XHJcbmltcG9ydCB1dGlsIGZyb20gJ0AvY29tbW9uL3V0aWwuanMnO1xyXG5pbXBvcnQgd2VjaGF0TVAgZnJvbSAnQC9jb21tb24vc2RrL3dlY2hhdE1QLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdHBhcnNlcixcclxuXHRcdHBhZ2VMb2FkaW5nLFxyXG5cdFx0bG9hZGluZyxcclxuXHRcdGljb25mb250LFxyXG5cdFx0dW5pUG9wdXBcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpZDogMCxcclxuXHRcdFx0aW5mbzogeyBjb21tZW50OiB7IGNvdW50OiAwLCBsaXN0OiBbXSB9IH0sXHJcblx0XHRcdHNob3dBZGRDb21tZW50OiBmYWxzZSxcclxuXHRcdFx0c2hvd0NvbW1lbkJhcjogdHJ1ZSxcclxuXHRcdFx0YWRkQ29tbWVudEZvY3VzOiBmYWxzZSxcclxuXHRcdFx0Y29tbWVudENvbnRlbnQ6ICcnLFxyXG5cdFx0XHRyZXBseUNvbW1lbnRJZDogMCxcclxuXHRcdFx0cmVwbHlOaWNrbmFtZTogJycsXHJcblx0XHRcdHBhZ2VfaW5kZXg6IDEsXHJcblx0XHRcdHBhZ2Vfc2l6ZTogMTAsXHJcblx0XHRcdGhhc01vcmVEYXRhOiBmYWxzZSxcclxuXHRcdFx0c2hvd1BhZ2VMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHRjdXJyZW50VXJsOiAnJyxcclxuXHRcdFx0c2hhcmVVcmw6ICcnLFxyXG5cdFx0XHRzaG93U2hhcmVUaXA6IGZhbHNlLFxyXG5cdFx0XHRzaG93SDVTaGFyZTogZmFsc2UsXHJcblx0XHRcdHNob3dCcm93c2VyU2hhcmVUaXA6IGZhbHNlXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0b25TaG93KGUpIHtcclxuXHRcdHRoaXMuJGluaXRQYWdlVGl0bGUoKTsgLy/liJ3lp4vljJbpobXpnaLmoIfpophcclxuXHRcdGlmICh0aGlzLnBhZ2VfaW5kZXggPiAxKSB7XHJcblx0XHRcdHRoaXMucGFnZV9pbmRleCA9IDE7XHJcblx0XHRcdHRoaXMuZ2V0RGF0YSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8q5p2l5rqQ5piv55m75b2V5pe25pu05pawKi9cclxuXHRcdGxldCBzb3VyY2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3NvdXJjZScpO1xyXG5cdFx0aWYgKHNvdXJjZSA9PSAnbG9naW4nKSB7XHJcblx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYygnc291cmNlJyk7XHJcblx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKuW9k+WJjemhtemdoiovXHJcblx0XHRpZiAoIXVuaS5nZXRTdG9yYWdlU3luYygnc291cmNlJykpIHtcclxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdzb3VyY2UnLCAnYXJ0aWNsZS9kZXRhaWwnKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uTG9hZChlKSB7XHJcblx0XHRpZiAoZS5pZCA+IDApIHtcclxuXHRcdFx0dGhpcy5pZCA9IGUuaWQ7XHJcblx0XHR9XHJcblx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdHRoaXMuY3VycmVudFVybCA9IGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0XHQvLyAjZW5kaWZcclxuXHRcdHRoaXMuZ2V0RGF0YSgpO1xyXG5cdH0sXHJcblx0b25QdWxsRG93blJlZnJlc2goKSB7XHJcblx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHR0aXRsZTogJ+WIt+aWsOS4rSdcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5wYWdlX2luZGV4ID0gMTtcclxuXHRcdHRoaXMuZ2V0RGF0YSgpO1xyXG5cdH0sXHJcblx0b25SZWFjaEJvdHRvbShlKSB7XHJcblx0XHRpZiAodGhpcy5oYXNNb3JlRGF0YSkge1xyXG5cdFx0XHR0aGlzLmdldENvbW1lbnQoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8q5bCP56iL5bqP5YiG5LqrKi9cclxuXHRvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHBhdGg6ICcvcGFnZXMvYXJ0aWNsZS9kZXRhaWw/aWQ9JyArIHRoaXMuaW5mby5pZCxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZSkge30sXHJcblx0XHRcdHRpdGxlOiB0aGlzLmluZm8udGl0bGUsXHJcblx0XHRcdGltYWdlVXJsOiB0aGlzLmluZm8ucGhvdG9fdXJsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0LyrliqDovb3mlbDmja4qL1xyXG5cdFx0bG9hZERhdGEoKSB7XHJcblx0XHRcdHRoaXMuZ2V0RGF0YSgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKuiOt+WPluaWh+eroOivpuaDhSovXHJcblx0XHRnZXREYXRhKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJGFydGljbGVhcGkuYXJ0aWNsZS5kZXRhaWw6Jyk7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLiRhcnRpY2xlYXBpLmFydGljbGUuZGV0YWlsKTtcclxuXHRcdFx0dGhpcy4kYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogdGhpcy4kYXJ0aWNsZWFwaS5hcnRpY2xlLmRldGFpbCxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRpZDogdGhpcy5pZCxcclxuXHRcdFx0XHRcdHBhZ2Vfc2l6ZTogdGhpcy5wYWdlX3NpemVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdyZXMnKTtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5mbyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogdGhpcy5pbmZvLnRpdGxlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbml0UGFnZVRpdGxlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd1BhZ2VMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb21tZW50LnBhZ2UgPiB0aGlzLnBhZ2VfaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmhhc01vcmVEYXRhID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmhhc01vcmVEYXRhID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5wYWdlX2luZGV4ICs9IDE7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5pdE1QU2hhcmUoKTsgLy/lhazkvJflj7fliIbkuqtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGFsZXJ0KHJlcy5tc2cpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y29tcGxldGU6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHR1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyrngrnotZ4qL1xyXG5cdFx0bGlrZSgpIHtcclxuXHRcdFx0dGhpcy4kYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogdGhpcy4kYXJ0aWNsZWFwaS5hcnRpY2xlLmxpa2UsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YXJ0aWNsZV9pZDogdGhpcy5pZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3JlcycpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pbmZvLmlzX2xpa2UgPSAhdGhpcy5pbmZvLmlzX2xpa2U7XHJcblx0XHRcdFx0XHRcdGxldCBtc2cgPSB0aGlzLmluZm8uaXNfbGlrZSA/ICfngrnotZ7miJDlip8nIDogJ+W3suWPlua2iOeCuei1nic7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGFsZXJ0KG1zZywgJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGFsZXJ0KHJlcy5tc2csICd3YXJuaW5nJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Lyror4TorrrngrnotZ4qL1xyXG5cdFx0Y29tbWVudExpa2UoY29tbWVudF9pZCwgaW5kZXgpIHtcclxuXHRcdFx0dGhpcy4kYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogdGhpcy4kYXJ0aWNsZWFwaS5hcnRpY2xlLmNvbW1lbnRMaWtlLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGNvbW1lbnRfaWQ6IGNvbW1lbnRfaWRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmluZm8uY29tbWVudC5saXN0W2luZGV4XS5pc19saWtlKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pbmZvLmNvbW1lbnQubGlzdFtpbmRleF0uaXNfbGlrZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5mby5jb21tZW50Lmxpc3RbaW5kZXhdLmxpa2VfY291bnQgLT0gMTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmluZm8uY29tbWVudC5saXN0W2luZGV4XS5pc19saWtlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmluZm8uY29tbWVudC5saXN0W2luZGV4XS5saWtlX2NvdW50ICs9IDE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGV0IG1zZyA9IHRoaXMuaW5mby5jb21tZW50Lmxpc3RbaW5kZXhdLmlzX2xpa2UgPyAn54K56LWe5oiQ5YqfJyA6ICflt7Llj5bmtojngrnotZ4nO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRhbGVydChtc2cpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kYWxlcnQocmVzLm1zZyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyrmlLbol48qL1xyXG5cdFx0ZmF2b3JpdGUoKSB7XHJcblx0XHRcdHRoaXMuJGFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHR1cmw6IHRoaXMuJGFydGljbGVhcGkuYXJ0aWNsZS5mYXZvcml0ZSxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhcnRpY2xlX2lkOiB0aGlzLmlkXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygncmVzJyk7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmluZm8uaXNfZmF2b3JpdGUgPSAhdGhpcy5pbmZvLmlzX2Zhdm9yaXRlO1xyXG5cdFx0XHRcdFx0XHRsZXQgbXNnID0gdGhpcy5pbmZvLmlzX2Zhdm9yaXRlID8gJ+aUtuiXj+aIkOWKnycgOiAn5bey5Y+W5raI5pS26JePJztcclxuXHRcdFx0XHRcdFx0dGhpcy4kYWxlcnQobXNnLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kYWxlcnQocmVzLm1zZywgJ3dhcm5pbmcnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKuWIneWni+WMlua3u+WKoOivhOiuuiovXHJcblx0XHRpbml0QWRkQ29tbWVudChzdGF0dXMpIHtcclxuXHRcdFx0aWYgKHN0YXR1cykge1xyXG5cdFx0XHRcdHRoaXMuJGFwcC5pbml0TG9naW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNob3dBZGRDb21tZW50ID0gc3RhdHVzO1xyXG5cdFx0XHR0aGlzLmNvbW1lbnRDb250ZW50ID0gJyc7XHJcblx0XHRcdGlmICh0aGlzLnJlcGx5Q29tbWVudElkID4gMCkge1xyXG5cdFx0XHRcdHRoaXMucmVwbHlDb21tZW50SWQgPSAwO1xyXG5cdFx0XHRcdHRoaXMucmVwbHlOaWNrbmFtZSA9ICcnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYWRkQ29tbWVudEZvY3VzID0gc3RhdHVzO1xyXG5cdFx0XHR9LCAyMDApO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKua3u+WKoOivhOiuuuaIluWbnuWkjSovXHJcblx0XHRhZGRDb21tZW50T3JSZXBseSgpIHtcclxuXHRcdFx0aWYgKHRoaXMuY29tbWVudENvbnRlbnQgPT0gJycpIHtcclxuXHRcdFx0XHR0aGlzLiRhbGVydCgn6K+E6K665YaF5a655LiN6IO95Li656m6Jyk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnJlcGx5Q29tbWVudElkID4gMCkge1xyXG5cdFx0XHRcdHRoaXMuYWRkUmVwbHkoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmFkZENvbW1lbnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKua3u+WKoOivhOiuuiovXHJcblx0XHRhZGRDb21tZW50KCkge1xyXG5cdFx0XHR0aGlzLiRhcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0dXJsOiB0aGlzLiRhcnRpY2xlYXBpLmFydGljbGUuYWRkQ29tbWVudCxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhcnRpY2xlX2lkOiB0aGlzLmlkLFxyXG5cdFx0XHRcdFx0Y29udGVudDogdGhpcy5jb21tZW50Q29udGVudCxcclxuXHRcdFx0XHRcdHBhZ2Vfc2l6ZTogdGhpcy5wYWdlX3NpemVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5mby5jb21tZW50ID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0FkZENvbW1lbnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5jb21tZW50Q29udGVudCA9ICcnO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRhbGVydCgn6K+E6K665oiQ5YqfJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRhbGVydChyZXMubXNnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKuWIneWni+WMluWbnuWkjSovXHJcblx0XHRpbml0QWRkUmVwbHkoY29tbWVudF9pZCwgbmlja25hbWUpIHtcclxuXHRcdFx0dGhpcy5pbml0QWRkQ29tbWVudCh0cnVlKTtcclxuXHRcdFx0dGhpcy5yZXBseUNvbW1lbnRJZCA9IGNvbW1lbnRfaWQ7XHJcblx0XHRcdHRoaXMucmVwbHlOaWNrbmFtZSA9IG5pY2tuYW1lO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKua3u+WKoOWbnuWkjSovXHJcblx0XHRhZGRSZXBseSgpIHtcclxuXHRcdFx0aWYgKHRoaXMuY29tbWVudENvbnRlbnQgPT0gJycpIHtcclxuXHRcdFx0XHR0aGlzLiRhbGVydCgn5Zue5aSN5YaF5a655LiN6IO95Li656m6Jyk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuJGFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHR1cmw6IHRoaXMuJGFydGljbGVhcGkuYXJ0aWNsZS5hZGRSZXBseSxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRjb21tZW50X2lkOiB0aGlzLnJlcGx5Q29tbWVudElkLFxyXG5cdFx0XHRcdFx0Y29udGVudDogdGhpcy5jb21tZW50Q29udGVudCxcclxuXHRcdFx0XHRcdHBhZ2Vfc2l6ZTogdGhpcy5wYWdlX3NpemVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5mby5jb21tZW50ID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0FkZENvbW1lbnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZXBseUNvbW1lbnRJZCA9IDA7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVwbHlOaWNrbmFtZSA9ICcnO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1lbnRDb250ZW50ID0gJyc7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGFsZXJ0KCfor4TorrrmiJDlip8nKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGFsZXJ0KHJlcy5tc2cpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8q6I635Y+W6K+E6K66Ki9cclxuXHRcdGdldENvbW1lbnQoKSB7XHJcblx0XHRcdHRoaXMuJGFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHR1cmw6IHRoaXMuJGFydGljbGVhcGkuYXJ0aWNsZS5jb21tZW50LFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFydGljbGVfaWQ6IHRoaXMuaWQsXHJcblx0XHRcdFx0XHRwYWdlX2luZGV4OiB0aGlzLnBhZ2VfaW5kZXgsXHJcblx0XHRcdFx0XHRwYWdlX3NpemU6IHRoaXMucGFnZV9zaXplXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmluZm8uY29tbWVudCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5mby5jb21tZW50Lmxpc3QgPSB0aGlzLmluZm8uY29tbWVudC5saXN0LmNvbmNhdChyZXMuZGF0YS5saXN0KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5pbmZvLmNvbW1lbnQuY291bnQgPSByZXMuZGF0YS5jb3VudDtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLnBhZ2UgPiB0aGlzLnBhZ2VfaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmhhc01vcmVEYXRhID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmhhc01vcmVEYXRhID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5wYWdlX2luZGV4ICs9IDE7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRhbGVydChyZXMubXNnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNvbXBsZXRlOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8q5omT5byA5aSW6YOo6ZO+5o6lKi9cclxuXHRcdG9wZW5MaW5rKHVybCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyh1cmwpO1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyrlhbPpl61INeWIhuS6qyovXHJcblx0XHRjbG9zZUg1U2hhcmUoKSB7XHJcblx0XHRcdHRoaXMuc2hvd0g1U2hhcmUgPSBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyrlhbPpl63lvq7kv6HliIbkuqvmj5DnpLoqL1xyXG5cdFx0Y2xvc2VTaGFyZVRpcCgpIHtcclxuXHRcdFx0dGhpcy5zaG93U2hhcmVUaXAgPSBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHQvKuaYvuekuua1j+iniOWZqOWIhuS6q+aPkOekuiovXHJcblx0XHRzaG93QnJvd3NlclNoYXJlVGlwcygpIHtcclxuXHRcdFx0dGhpcy5zaG93SDVTaGFyZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnNob3dCcm93c2VyU2hhcmVUaXAgPSB0cnVlO1xyXG5cdFx0fSxcclxuXHRcdC8q5YWz6Zet5rWP6KeI5Zmo5YiG5Lqr5o+Q56S6Ki9cclxuXHRcdGNsb3NlQnJvd3NlclNoYXJlVGlwKCkge1xyXG5cdFx0XHR0aGlzLnNob3dCcm93c2VyU2hhcmVUaXAgPSBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyrliIbkuqsqL1xyXG5cdFx0c2hhcmUoKSB7XHJcblx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRpZiAodXRpbC5pc1dlY2hhdE9yUVEoKSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYXJlVGlwID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnNob3dINVNoYXJlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKCdzaGFyZScpO1xyXG5cclxuXHRcdFx0Ly8gI2lmZGVmIE1QXHJcblx0XHRcdHVuaS5zaG93U2hhcmVNZW51KCk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHJcblx0XHQvKuWIneWni+WMluWFrOS8l+WPt+WIhuS6qyovXHJcblx0XHRpbml0TVBTaGFyZSgpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdGxldCBkb21haW4gPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvcGFnZXMvJylbMF07XHJcblx0XHRcdC8q5YiG5Lqr6ZO+5o6lKi9cclxuXHRcdFx0bGV0IGxpbmsgPSBkb21haW4gKyAnL3BhZ2VzL2FydGljbGUvZGV0YWlsP2lkPScgKyB0aGlzLmluZm8uaWQ7XHJcblx0XHRcdGlmICh0aGlzLiRhcHAuaXNXZWNoYXQoKSkge1xyXG5cdFx0XHRcdC8q5Yid5aeL5YyW5YiG5LqrKi9cclxuXHRcdFx0XHR3ZWNoYXRNUC5pbml0U2hhcmUodGhpcywge1xyXG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMuaW5mby50aXRsZSxcclxuXHRcdFx0XHRcdGRlc2M6ICcnLFxyXG5cdFx0XHRcdFx0bGluazogbGluayxcclxuXHRcdFx0XHRcdGltZ1VybDogdGhpcy5pbmZvLnBob3RvX3VybFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc2hhcmVVcmwgPSBsaW5rO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHJcblx0XHQvKui3s+i9rOiHs+ivhOiuuuivpuaDhSovXHJcblx0XHRyZWRpcmVjdENvbW1lbnREZXRhaWwoaWQsIHJlcGx5Q291bnQpIHtcclxuXHRcdFx0aWYgKHJlcGx5Q291bnQgPiAwKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnY29tbWVudERldGFpbD9pZD0nICsgaWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKuWkjeWItiovXHJcblx0XHRjb3B5VGV4dCh0ZXh0KSB7XHJcblx0XHRcdHVuaS5zZXRDbGlwYm9hcmREYXRhKHtcclxuXHRcdFx0XHRkYXRhOiB0ZXh0LFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLiRhbGVydCgn5Y6f5paH6ZO+5o6l5bey5aSN5Yi2JywgJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbi5kZXRhaWwge1xyXG5cdHBhZGRpbmc6IDQwcnB4IDMycnB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0LnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogNDRycHg7XHJcblx0XHRjb2xvcjogIzI2MjYyNjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3MHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQuaW5mbyB7XHJcblx0XHRtYXJnaW4tdG9wOiAzMnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdC5zb3VyY2UtZGF0ZSB7XHJcblx0XHRcdC5zb3VyY2Uge1xyXG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5kYXRlIHtcclxuXHRcdFx0XHRjb2xvcjogIzk5OTtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMjRycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5yZWFkIHtcclxuXHRcdFx0Y29sb3I6ICM5OTk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5kZXNjIHtcclxuXHRcdG1hcmdpbi10b3A6IDU2cnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGNvbG9yOiAjMjYyNjI2O1xyXG5cdFx0Lnd4UGFyc2Uge1xyXG5cdFx0XHRjb2xvcjogIzI2MjYyNjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLmNvbW1lbnQge1xyXG5cdHBhZGRpbmc6IDIwcnB4IDMycnB4IDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHQudGl0bGUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0Y29sb3I6ICMyNjI2MjY7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgI2VlZTtcclxuXHRcdHRleHQge1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcblx0XHR9XHJcblx0XHQuY291bnQge1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdGNvbG9yOiAjOTk5O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nOiAzMHJweCAwIDIwcnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjZWVlO1xyXG5cdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMDtcclxuXHRcdH1cclxuXHRcdC5hdmF0YXIge1xyXG5cdFx0XHRmbGV4LWdyb3c6IDA7XHJcblx0XHRcdGZsZXgtc2hyaW5rOiAwO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0d2lkdGg6IDQ1cnB4O1xyXG5cdFx0XHRcdGhlaWdodDogNDVycHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuY29tbWVudC1pbmZvIHtcclxuXHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRmbGV4LXNocmluazogMTtcclxuXHRcdFx0Lm5pY2tuYW1lLWxpa2Uge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdC5uaWNrbmFtZSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM0NDQ7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lmxpa2Uge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNHJweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5saWtlLWNvdW50IHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICM5OTk7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC5jb21tZW50LWRlc2Mge1xyXG5cdFx0XHRcdGNvbG9yOiAjNDQ0O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNjtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAxNXJweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQucmVwbHktY291bnQge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcblx0XHRcdFx0cGFkZGluZzogOHJweCAyMHJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjOTk5O1xyXG5cdFx0XHRcdG1hcmdpbjogMjBycHggMCAyNHJweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuZGF0ZS1yZXBseSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHQuZGF0ZSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGNvbG9yOiAjYjRiNGI0O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA0cnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucmVwbHkge1xyXG5cdFx0XHRcdFx0ZmxleC1ncm93OiAwO1xyXG5cdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM5OTk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5uby1jb21tZW50IHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDA7XHJcblx0XHRjb2xvcjogIzk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0fVxyXG59XHJcbi5jb21tZW50LWJhciB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTIwcnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdC5pbnB1dCB7XHJcblx0XHRmbGV4LWdyb3c6IDA7XHJcblx0XHRmbGV4LXNocmluazogMDtcclxuXHRcdG1hcmdpbjogMjBycHggMTBycHggMjBycHggMjBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcblx0XHR3aWR0aDogNDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHggNDBycHggMCA0MHJweDtcclxuXHRcdHRleHQge1xyXG5cdFx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0XHRjb2xvcjogI2FhYTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDM4cnB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQub3BlcmF0ZSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdGZsZXgtc2hyaW5rOiAxO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHR2aWV3LFxyXG5cdFx0bmF2aWdhdG9yIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdHdpZHRoOiAyNSU7XHJcblx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHR3aWR0aDogNDVycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA0NXJweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmluZm8sXHJcblx0XHQubGlrZSB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0LmNvdW50IHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOiAtMTVycHg7XHJcblx0XHRcdFx0cmlnaHQ6IC00cnB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICNiZWU3ZTkgOSUsICM4Y2M3YjUgNzUlKTtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcblx0XHRcdFx0cGFkZGluZzogMCAxMHJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDIycnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuc2hhcmUge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHR3aWR0aDogNDVycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA0NXJweDtcclxuXHRcdFx0XHRib3JkZXI6IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uZmxvYXQtZW1wdHkge1xyXG5cdGhlaWdodDogMTIwcnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmFkZC1jb21tZW50IHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHR6LWluZGV4OiA5OTk5O1xyXG5cdC5pbmZvIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0cGFkZGluZzogMjBycHggMjBycHggMjBycHggMjBycHg7XHJcblx0XHQuaW5wdXQge1xyXG5cdFx0XHRmbGV4LWdyb3c6IDE7XHJcblx0XHRcdGZsZXgtc2hyaW5rOiAxO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA0MHJweCA0MHJweCAwIDQwcnB4O1xyXG5cdFx0XHRwYWRkaW5nOiAyMHJweCAzMnJweCAyMHJweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0dGV4dGFyZWEge1xyXG5cdFx0XHRcdC8vcGFkZGluZzogMTBycHggMDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA0MnJweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuYWRkIHtcclxuXHRcdFx0ZmxleC1ncm93OiAwO1xyXG5cdFx0XHRmbGV4LXNocmluazogMDtcclxuXHRcdFx0d2lkdGg6IDE1MHJweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0fVxyXG5cdFx0LmNhbmNlbCB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cmlnaHQ6IDEwcnB4O1xyXG5cdFx0XHR0b3A6IDJycHg7XHJcblx0XHRcdC9kZWVwLy5pY29uIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjY2NjO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5oNS1zaGFyZSB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyLXRvcDogMXJweCBzb2xpZCAjZGRkO1xyXG5cdHBhZGRpbmctdG9wOiAyMHJweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0LnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdH1cclxuXHQuc2hhcmUtaWNvbiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0dmlldyB7XHJcblx0XHRcdGZsZXgtZ3JvdzogMDtcclxuXHRcdFx0ZmxleC1zaHJpbms6IDA7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDM1cnB4O1xyXG5cdFx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdHRleHQge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zaGFyZS1idG4ge1xyXG5cdFx0bWFyZ2luOiAzMHJweCAzMHJweCAxNXJweDtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjOGNjN2I1O1xyXG5cdFx0YmFja2dyb3VuZDogIzhjYzdiNTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDEycnB4IDA7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcbn1cclxuLnNoYXJlLW1hc2tlIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHR6LWluZGV4OiA5OTk5OTtcclxuXHQuc2hhcmUtdGlwIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMTAwcnB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdC5zaGFyZS10aXAtaW5mbyB7XHJcblx0XHRcdGhlaWdodDogMjQwcnB4O1xyXG5cdFx0fVxyXG5cdFx0LnNoYXJlLXRpcC1idG4ge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiA0MDBycHg7XHJcblx0XHRcdGhlaWdodDogODJycHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zaGFyZS1icm93c2VyLXRpcCB7XHJcblx0XHR0b3A6IDMwMHJweDtcclxuXHRcdC5zaGFyZS10aXAtaW5mbyB7XHJcblx0XHRcdGhlaWdodDogMjQwcnB4O1xyXG5cdFx0fVxyXG5cdFx0LnNoYXJlLXRpcC1idG4ge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAyMDBycHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5kZWNsYXJhdGlvbiB7XHJcblx0bWFyZ2luOiA1MHJweCAwO1xyXG5cdGZvbnQtc2l6ZTogMzRycHg7XHJcblx0Y29sb3I6ICM5OTk7XHJcbn1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZTcyMTE3YSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZTcyMTE3YSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM3MzA4MDYwODc2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=