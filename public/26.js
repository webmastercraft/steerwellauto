(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{AkCr:function(e,t,a){"use strict";a.r(t);var r=a("/MKj"),n=a("q1tI"),o=a.n(n),i=a("17x9"),s=a.n(i),l=a("EVdn"),c=a.n(l),u=a("LvDl"),m=a.n(u),d=a("Ty5D"),p=a("hQIo"),f=a("pb+D"),b=a("55Ip"),h={email:s.a.string,password:s.a.string,remember:s.a.bool,errors:s.a.object.isRequired,handleSubmit:s.a.func.isRequired,handleChange:s.a.func.isRequired},y=function(e){var t=e.email,a=e.password,r=e.remember,n=e.errors,i=e.handleChange,s=e.handleSubmit;return o.a.createElement("form",{className:"form",role:"form",onSubmit:s,noValidate:!0},o.a.createElement("h2",{className:"card-title"},"Please sign in"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email",className:"sr-only"},"Email"),o.a.createElement("input",{type:"text",className:"form-control form-control-lg rounded-0 ".concat(n.has("email")&&"is-invalid"),name:"email",id:"email",placeholder:"Email address",value:t||"",onChange:function(e){return i(e.target.name,e.target.value)},required:!0,autoFocus:!0}),n.has("email")&&o.a.createElement("div",{className:"invalid-feedback"},n.first("email"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password",className:"sr-only"},"Password"),o.a.createElement("input",{type:"password",className:"form-control form-control-lg rounded-0 ".concat(n.has("password")&&"is-invalid"),id:"password",name:"password",placeholder:"Password",value:a||"",onChange:function(e){return i(e.target.name,e.target.value)},required:!0}),n.has("password")&&o.a.createElement("div",{className:"invalid-feedback"},n.first("password"))),o.a.createElement("div",null,o.a.createElement("label",{className:"custom-control custom-checkbox"},o.a.createElement("input",{type:"checkbox",name:"remember",className:"custom-control-input",onChange:function(e){return i(e.target.name,!r)}}),o.a.createElement("span",{className:"custom-control-indicator"}),o.a.createElement("span",{className:"custom-control-description small"},"Remember me on this computer"))),o.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",disabled:n.any()},"Sign In"),o.a.createElement("p",null,"Not a member? ",o.a.createElement(b.b,{to:"/register"},"Signup here")))};y.displayName="LoginForm",y.propTypes=h;var v=y;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){P(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var k=function(e){function t(e){var a,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(a=!(n=N(t).call(this,e))||"object"!==g(n)&&"function"!=typeof n?S(r):n).validator=new f.a({email:"required|email",password:"required|min:6"}),a.state={credentials:{email:"",password:"",remember:!1},errors:a.validator.errors},a.handleChange=a.handleChange.bind(S(a)),a.handleSubmit=a.handleSubmit.bind(S(a)),a}var a,r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){c()("body").attr("style","background-color: #eee")}},{key:"componentWillUnmount",value:function(){c()("body").removeAttr("style")}},{key:"handleChange",value:function(e,t){var a=this,r=this.validator.errors;this.setState({credentials:E({},this.state.credentials,P({},e,t))}),r.remove(e),this.validator.validate(e,t).then((function(){a.setState({errors:r})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.credentials,r=this.validator.errors;this.validator.validateAll(a).then((function(e){e?t.submit(a):t.setState({errors:r})}))}},{key:"submit",value:function(e){var t=this;this.props.dispatch(Object(p.b)(e)).catch((function(e){var a=e.error,r=e.statusCode,n=t.validator.errors;422===r?m.a.forOwn(a,(function(e,t){n.add(t,e)})):401===r&&n.add("password",a),t.setState({errors:n})}))}},{key:"render",value:function(){if(this.props.isAuthenticated)return o.a.createElement(d.a,{to:"/"});var e={email:this.state.credentials.email,password:this.state.credentials.password,remember:this.state.credentials.remember,errors:this.state.errors,handleChange:this.handleChange,handleSubmit:this.handleSubmit};return o.a.createElement("div",{className:"container py-5"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"mx-auto"},o.a.createElement("span",{className:"anchor"}),o.a.createElement("div",{className:"card has-shadow"},o.a.createElement("div",{className:"card-body"},o.a.createElement(v,e))))))))}}])&&O(a.prototype,r),n&&O(a,n),t}(n.Component);P(k,"displayName","LoginPage"),P(k,"propTypes",{isAuthenticated:s.a.bool.isRequired,dispatch:s.a.func.isRequired});var C=k;t.default=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))(C)}}]);