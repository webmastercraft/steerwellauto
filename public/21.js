(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{cd5g:function(e,t,n){"use strict";var r=n("JvxN"),o=n("/KzK"),a=n("XyXq");function i(e){return{type:a.a,payload:e}}function u(e){return o.a.send(e)}function c(e){return o.a.fetch(e)}function l(e){return function(t){return new Promise((function(n,a){r.a.post("/articles",u(e)).then((function(e){return t(i(c(e.data))),n()})).catch((function(e){var t=e.response.status,n={error:null,statusCode:t};if(422===t){var r={errors:e.response.data,replace:!1,searchStr:"",replaceStr:""};n.error=o.a.resetValidationFields(r)}else 401===t&&(n.error=e.response.data.message);return a(n)}))}))}}function s(e){return function(t){return new Promise((function(n,a){r.a.patch("articles/".concat(e.id),u(e)).then((function(e){return t(i(c(e.data))),n()})).catch((function(e){var t=e.response.status,n={error:null,statusCode:t};if(422===t){var r={errors:e.response.data,replace:!1,searchStr:"",replaceStr:""};n.error=o.a.resetValidationFields(r)}else 401===t&&(n.error=e.response.data.message);return a(n)}))}))}}function f(e){return function(t){r.a.delete("articles/".concat(e)).then((function(){var n;t((n=e,{type:a.c,payload:n}))})).catch((function(e){console.error(e.response)}))}}function p(e){var t=e.pageNumber,n=void 0===t?1:t,o=e.url,i=void 0===o?"/articles":o;return function(e){n>1&&(i+="?page=".concat(n)),r.a.get(i).then((function(t){var n;e((n=c(t.data),{type:a.b,payload:n}))})).catch((function(e){console.error(e.response)}))}}function b(e){return function(t){r.a.get("articles/".concat(e)).then((function(e){t(i(c(e.data)))})).catch((function(e){console.error(e.response)}))}}n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return b}))},ruUA:function(e,t,n){"use strict";n.r(t);var r=n("/MKj"),o=n("y6dB"),a=n("q1tI"),i=n.n(a),u=n("17x9"),c=n.n(u),l=n("wd/R"),s=n.n(l),f=n("cd5g"),p=n("55Ip"),b={index:c.a.number.isRequired,article:c.a.object.isRequired,togglePublish:c.a.func.isRequired,handleRemove:c.a.func.isRequired},d=function(e){var t=e.index,n=e.article,r=e.togglePublish,o=e.handleRemove;return i.a.createElement("tr",{key:t},i.a.createElement("th",{scope:"row"},t+1),i.a.createElement("td",null,n.title),i.a.createElement("td",null,n.description),i.a.createElement("td",null,n.createdAt&&n.createdAt.format("MMMM, DD YYYY")),i.a.createElement("td",null,n.updatedAt&&n.updatedAt.format("MMMM, DD YYYY")),i.a.createElement("td",null,n.publishedAt&&n.publishedAt.format("MMMM, DD YYYY")),i.a.createElement("td",null,i.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Actions"},n.published?i.a.createElement("button",{className:"btn btn-warning",onClick:function(){return r(n.id)}},"Un Published"):i.a.createElement("button",{className:"btn btn-success",onClick:function(){return r(n.id)}},"Publish"),i.a.createElement(p.b,{className:"btn btn-primary",to:"articles/".concat(n.id,"/edit")},"Edit"),i.a.createElement("button",{className:"btn btn-danger",onClick:function(){return o(n.id)}},"Delete"))))};d.displayName="ArticleRow",d.propTypes=b;var y=d;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,O(t).call(this,e))).state={},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"renderLinks",value:function(){var e=this,t=this.props.meta;return m(Array(t.lastPage).keys()).map((function(n){var r=t.currentPage===n+1?"primary":"light";return i.a.createElement("button",{key:n,type:"button",className:"btn btn-".concat(r),onClick:function(){return e.props.onChange(n+1)}},n+1)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},i.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"First group"},this.renderLinks()))}}])&&g(n.prototype,r),o&&g(n,o),t}(a.Component);E(j,"displayName","Pagination"),E(j,"propTypes",{meta:c.a.object.isRequired,onChange:c.a.func.isRequired});var P=j;function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=k(t).call(this,e))||"object"!==A(o)&&"function"!=typeof o?R(r):o).togglePublish=n.togglePublish.bind(R(n)),n.handleRemove=n.handleRemove.bind(R(n)),n.pageChange=n.pageChange.bind(R(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(r=[{key:"componentWillMount",value:function(){(0,this.props.dispatch)(Object(f.c)({}))}},{key:"pageChange",value:function(e){this.props.dispatch(Object(f.c)({pageNumber:e}))}},{key:"togglePublish",value:function(e){var t=this.props.articles.find((function(t){return t.id===e}));t&&(t.published=!t.published,t.published?t.publishedAt=s()():t.publishedAt=null,this.props.dispatch(Object(f.e)(t.toJson())))}},{key:"handleRemove",value:function(e){this.props.dispatch(Object(f.d)(e))}},{key:"renderArticles",value:function(){var e=this;return this.props.articles.map((function(t,n){return i.a.createElement(y,{key:n,article:t,index:n,togglePublish:e.togglePublish,handleRemove:e.handleRemove})}))}},{key:"render",value:function(){return i.a.createElement("main",{className:"col-sm-9 ml-sm-auto col-md-10 pt-3",role:"main"},i.a.createElement("h1",null,"Articles"),i.a.createElement("table",{className:"table table-responsive table-striped"},i.a.createElement("thead",{className:"thead-inverse"},i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Title"),i.a.createElement("th",null,"Description"),i.a.createElement("th",null,"Created At"),i.a.createElement("th",null,"Updated At"),i.a.createElement("th",null,"Published At"),i.a.createElement("th",null,i.a.createElement(p.b,{to:"/articles/create",className:"btn btn-success"},"Add")))),i.a.createElement("tbody",null,this.renderArticles())),i.a.createElement(P,{meta:this.props.meta,onChange:this.pageChange}))}}])&&S(n.prototype,r),o&&S(n,o),t}(a.Component);C(N,"displayName","ArticlesPage"),C(N,"propTypes",{meta:c.a.object.isRequired,articles:c.a.array.isRequired,dispatch:c.a.func.isRequired});var M=N;function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=Object(r.b)((function(e){var t=e.articles,n=t.data,r=T(t,["data"]);return{articles:n.map((function(e){return new o.a(e)})),meta:Object.assign({},r)}}))(M)},y6dB:function(e,t,n){"use strict";var r=n("wd/R"),o=n.n(r),a=n("Ey4p"),i=n("4pai");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,f(t).call(this,e))).initialize(e),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"initialize",value:function(e){s(f(t.prototype),"initialize",this).call(this,e),this.slug=e.slug||"",this.title=e.title||"",this.description=e.description||"",this.content=e.content||"",this.published=e.published||!1,this.publishedAt=e.publishedAt?o()(e.publishedAt):null,this.user=e.user?new i.a(e.user):null}}])&&c(n.prototype,r),a&&c(n,a),t}(a.a);t.a=b}}]);