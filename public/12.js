(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/OKN":function(e,t,n){"use strict";n.r(t);var r=n("/MKj"),o=n("q1tI"),a=n.n(o),i=n("17x9"),s=n.n(i),l=n("cVXz"),c=n("jjAL"),p=n("Z3vd"),_=n("ELmG"),u=(n("ZEGv"),n("YTQN"));n("QlS3");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,f(t).call(this,e))).state={},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",{className:"item"},a.a.createElement("div",{className:"browser_section_body_type_item_image"},a.a.createElement("img",{src:this.props.img_url})),a.a.createElement("p",null,this.props.bodytype))}}])&&d(n.prototype,r),o&&d(n,o),t}(o.Component);h.propTypes={img_url:s.a.string.isRequired,bodytype:s.a.string.isRequired},h.defaultProps={img_url:"./imgs/browser-type-1.png",bodytype:"Sedan"};var y=h,w=n("R/WZ"),v=n("H2TA"),x=n("6Obz");n("6oKK");function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object(w.a)((function(e){return{root:{width:"100%"},margin:{height:e.spacing(3)}}}));var j=Object(v.a)({root:{color:"#2499f3",height:3,padding:"13px 0"},thumb:{height:18,width:18,backgroundColor:"#2499f3",marginTop:-8,marginLeft:-10},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:3},rail:{color:"#d8d8d8",opacity:1,height:3}})(x.a),C=0,B=100,M=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=N(t).call(this,e),n=!o||"object"!==E(o)&&"function"!=typeof o?k(r):o,O(k(n),"handleSlider",(function(e,t){t&&n.setState({min_value:t[0],max_value:t[1]})})),O(k(n),"handleChange",(function(e,t){"min_value"==e&&n.state.max_value<t||"max_value"==e&&n.state.min_value>t||"min_value"==e&&t<C||"max_value"==e&&t>B||n.setState(O({},e,t))})),n.state={min_value:C,max_value:B},n.handleSlider=n.handleSlider.bind(k(n)),n.handleChange=n.handleChange.bind(k(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state,n=t.min_value,r=t.max_value;return a.a.createElement("div",null,a.a.createElement("div",{className:"browser_section_mileage_slider"},a.a.createElement(j,{getAriaLabel:function(e){return 0===e?"Minimum price":"Maximum price"},min:C,max:B,defaultValue:[C,B],value:[n,r],onChange:this.handleSlider})),a.a.createElement("div",{className:"browser_section_mileage_input"},a.a.createElement("div",{className:"browser_section_mileage_input_left"},a.a.createElement("input",{type:"number",name:"min_value",value:n,onChange:function(t){return e.handleChange(t.target.name,t.target.value)}})),a.a.createElement("div",{className:"browser_section_mileage_input_mid"},a.a.createElement("p",null,"-")),a.a.createElement("div",{className:"browser_section_mileage_input_right"},a.a.createElement("input",{type:"number",name:"max_value",value:r,onChange:function(t){return e.handleChange(t.target.name,t.target.value)}}))))}}])&&P(n.prototype,r),o&&P(n,o),t}(o.Component),R=n("55Ip"),T=n("RDZM");function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,G(t).call(this,e))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",{className:"row car_details_browser_item"},a.a.createElement("div",{className:"col-md-4 col-sm-4 car_details_browser_item_image"},a.a.createElement(T.a,{img_url:this.props.result.img_url})),a.a.createElement("div",{className:"col-md-6 col-sm-6 car_details_browser_item_description"},a.a.createElement("div",{className:"car_details_browser_item_description_title"},a.a.createElement("p",null,this.props.result.car_name)),a.a.createElement("div",{className:"row car_details_browser_item_description_type"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"Sedan")),a.a.createElement("li",null,a.a.createElement("p",null,"Used car")),a.a.createElement("li",null,a.a.createElement("p",null,"Mercedes")))),a.a.createElement("div",{className:"row car_details_browser_item_description_content"},a.a.createElement("div",{className:"col-md-3 col-sm-6"},a.a.createElement("p",{className:"car_details_browser_item_description_content_name"},"Kilometers"),a.a.createElement("p",{className:"car_details_browser_item_description_content_value"},this.props.result.kilometer)),a.a.createElement("div",{className:"col-md-2 col-sm-6"},a.a.createElement("p",{className:"car_details_browser_item_description_content_name"},"Year"),a.a.createElement("p",{className:"car_details_browser_item_description_content_value"},this.props.result.year)),a.a.createElement("div",{className:"col-md-3 col-sm-6"},a.a.createElement("p",{className:"car_details_browser_item_description_content_name"},"Gear Box"),a.a.createElement("p",{className:"car_details_browser_item_description_content_value"},this.props.result.gearbox)),a.a.createElement("div",{className:"col-md-3 col-sm-6"},a.a.createElement("p",{className:"car_details_browser_item_description_content_name"},"Fuel Type"),a.a.createElement("p",{className:"car_details_browser_item_description_content_value"},this.props.result.fueltype)))),a.a.createElement("div",{className:"col-md-2 col-sm-2 car_details_browser_item_price"},a.a.createElement("div",{className:"car_details_browser_item_price_content"},a.a.createElement("p",null,"$",this.props.result.price),a.a.createElement(R.b,{to:"browse/".concat(this.props.result.id,"/details")},a.a.createElement(p.a,{variant:"contained",className:"browser_section_left_item_apply"},"Details")))))}}])&&z(n.prototype,r),o&&z(n,o),t}(o.Component);V.propTypes={result:s.a.object.isRequired},V.defaultProps={result:{img_url:"./imgs/category-car.png",id:102,car_name:"Benz",kilometer:"25,153",year:"2019",gearbox:"Automatic",fueltype:"Gasoline",price:"$40000"}};var q=V;function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=J(t).call(this,e),n=!o||"object"!==F(o)&&"function"!=typeof o?K(r):o,D(K(n),"bodytype",[{img_url:"./imgs/browser-type-1.png",type:"Hachback"},{img_url:"./imgs/browser-type-2.png",type:"Sedan"},{img_url:"./imgs/browser-type-3.png",type:"Coupe"},{img_url:"./imgs/browser-type-4.png",type:"Wagon"},{img_url:"./imgs/browser-type-5.png",type:"SUV"},{img_url:"./imgs/browser-type-6.png",type:"Van"},{img_url:"./imgs/browser-type-7.png",type:"Bus"},{img_url:"./imgs/browser-type-8.png",type:"Truck"}]),D(K(n),"searchresult",[{img_url:"./imgs/car_mercedes.png",id:100,car_name:"Mercedes-Benz C63 2016",kilometer:"16,765",year:"2016",gearbox:"Automatic",fueltype:"Gasoline",price:2e4},{img_url:"./imgs/category-car.png",id:100,car_name:"Mercedes",kilometer:"15,349",year:"2019",gearbox:"Automatic",fueltype:"Gasoline",price:3e4},{img_url:"./imgs/category-car.png",id:100,car_name:"Audi A5 Coupe 2018",kilometer:"16,985",year:"2017",gearbox:"Automatic",fueltype:"Gasoline",price:2e4},{img_url:"./imgs/category-car.png",id:100,car_name:"Benz",kilometer:"15,349",year:"2019",gearbox:"Automatic",fueltype:"Gasoline",price:1e4},{img_url:"./imgs/category-car.png",id:100,car_name:"Benz",kilometer:"15,349",year:"2019",gearbox:"Automatic",fueltype:"Gasoline",price:9e4},{img_url:"./imgs/category-car.png",id:100,car_name:"Benz",kilometer:"15,349",year:"2019",gearbox:"Automatic",fueltype:"Gasoline",price:5e4},{img_url:"./imgs/category-car.png",id:100,car_name:"Benz",kilometer:"15,349",year:"2019",gearbox:"Automatic",fueltype:"Gasoline",price:7e4},{img_url:"./imgs/category-car.png",id:100,car_name:"Benz",kilometer:"15,349",year:"2019",gearbox:"Automatic",fueltype:"Gasoline",price:5e4}]),D(K(n),"renderBodyType",(function(e){return e.map((function(e,t){return a.a.createElement("div",{className:"col-md-6 col-sm-6 browser_section_body_type_item",key:t},a.a.createElement(y,{img_url:e.img_url,bodytype:e.type}))}))})),D(K(n),"renderSearchResult",(function(e){return e.slice(n.state.page*n.state.rowsPerPage,n.state.page*n.state.rowsPerPage+n.state.rowsPerPage).map((function(e,t){return a.a.createElement(q,{key:t,result:e})}))})),D(K(n),"sortSearchResult",(function(e,t){"price_low"==t?e.sort((function(e,t){return e.price-t.price})):"price_high"==t&&e.sort((function(e,t){return t.price-e.price}))})),D(K(n),"handleChangePage",(function(e,t){n.setPage(t)})),D(K(n),"handleChangeRowsPerPage",(function(e){n.setRowsPerPage(parseInt(e.target.value,10)),n.setPage(0)})),D(K(n),"handleChangeSortType",(function(e){n.setState({sorttype:e.target.value}),n.sortSearchResult(n.state.searchresult,e.target.value)})),D(K(n),"handleChange_Brand",(function(e){n.setState({brand:e.target.value})})),D(K(n),"handleChange_Model",(function(e){n.setState({model:e.target.value})})),D(K(n),"handleChange_Year",(function(e,t){n.setState(D({},e,t))})),n.state={brand:"brand",model:"model",page:0,rowsPerPage:5,sorttype:"price_high",start_year:2013,end_year:2018,searchresult:n.searchresult},n.setPage=n.setPage.bind(K(n)),n.setRowsPerPage=n.setRowsPerPage.bind(K(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,e),n=t,(r=[{key:"componentWillMount",value:function(){this.sortSearchResult(this.state.searchresult)}},{key:"setPage",value:function(e){this.setState({page:e})}},{key:"setRowsPerPage",value:function(e){this.setState({rowsPerPage:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.start_year,r=t.end_year;return a.a.createElement("div",{className:"container browse_page_container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-12"},a.a.createElement(u.a,{p_holder:"Search for a brand, model or body type..."}))),a.a.createElement("div",{className:"row browser_section"},a.a.createElement("div",{className:"col-md-3 browser_section_left"},a.a.createElement("div",{className:"left_content"},a.a.createElement("div",{className:"row browser_section_left_item"},a.a.createElement("div",{className:"col-md-12 browser_section_left_item_title"},a.a.createElement("h4",null,"Body Type")),a.a.createElement("div",{className:"col-md-12 col-sm-12 browser_section_left_item_content"},a.a.createElement("div",{className:"browser_section_body_type"},a.a.createElement("div",{className:"row"},this.renderBodyType(this.bodytype))))),a.a.createElement("div",{className:"browser_section_left_item"},a.a.createElement("div",{className:"browser_section_left_item_title"},a.a.createElement("h4",null,"Make")),a.a.createElement("div",{className:"browser_section_left_item_content"},a.a.createElement("div",{className:"browser_section_make"},a.a.createElement(l.a,{labelId:"label",id:"select_brand",value:this.state.brand,variant:"outlined",onChange:this.handleChange_Brand.bind(this)},a.a.createElement(c.a,{value:"brand"},"Brand")),a.a.createElement(l.a,{labelId:"label",id:"select_model",value:this.state.model,variant:"outlined",onChange:this.handleChange_Model.bind(this)},a.a.createElement(c.a,{value:"model"},"Model"))))),a.a.createElement("div",{className:"browser_section_left_item"},a.a.createElement("div",{className:"browser_section_left_item_title"},a.a.createElement("h4",null,"Mileage")),a.a.createElement("div",{className:"browser_section_left_item_content"},a.a.createElement("div",{className:"browser_section_mileage"},a.a.createElement(M,null)))),a.a.createElement("div",{className:"browser_section_left_item"},a.a.createElement("div",{className:"browser_section_left_item_title"},a.a.createElement("h4",null,"Year")),a.a.createElement("div",{className:"browser_section_left_item_content"},a.a.createElement("div",{className:"browser_section_year"},a.a.createElement("div",{className:"browser_section_year_left"},a.a.createElement("input",{type:"number",name:"start_year",value:n,onChange:function(t){return e.handleChange_Year(t.target.name,t.target.value)}})),a.a.createElement("div",{className:"browser_section_year_mid"},a.a.createElement("p",null,"-")),a.a.createElement("div",{className:"browser_section_year_right"},a.a.createElement("input",{type:"number",name:"end_year",value:r,onChange:function(t){return e.handleChange_Year(t.target.name,t.target.value)}}))))),a.a.createElement("div",{className:"browser_section_left_item"},a.a.createElement("div",{className:"browser_section_left_item_title"},a.a.createElement("h4",null,"Price ($)")),a.a.createElement("div",{className:"browser_section_left_item_content"},a.a.createElement("div",{className:"browser_section_price"},a.a.createElement(M,null)))),a.a.createElement("div",{className:"browser_section_left_item"},a.a.createElement(p.a,{variant:"contained",className:"browser_section_left_item_apply"},"Apply Filters")))),a.a.createElement("div",{className:"col-md-9 browser_section_right"},a.a.createElement("div",{className:"right_content"},a.a.createElement("div",{className:"browser_section_right_title"},a.a.createElement("h4",null,"Search Results ",a.a.createElement("span",null,"(244)")),a.a.createElement("div",{className:"top_pagination"},a.a.createElement("label",null,"Results per page"),a.a.createElement(l.a,{labelId:"label",id:"select_rowsperpage",value:this.state.rowsPerPage,variant:"outlined",onChange:this.handleChangeRowsPerPage.bind(this)},a.a.createElement(c.a,{value:"5"},"5"),a.a.createElement(c.a,{value:"10"},"10"),a.a.createElement(c.a,{value:"25"},"25")),a.a.createElement("label",{className:"sort"},"Sort by"),a.a.createElement(l.a,{labelId:"label",id:"select_rowsperpage",value:this.state.sorttype,variant:"outlined",onChange:this.handleChangeSortType.bind(this)},a.a.createElement(c.a,{value:"price_high"},"Price(Highest First)"),a.a.createElement(c.a,{value:"price_low"},"Price(Lowest First)")))),a.a.createElement("div",{className:"browser_section_right_content"},this.renderSearchResult(this.state.searchresult),a.a.createElement(_.a,{rowsPerPageOptions:[5,10,25],component:"div",count:this.searchresult.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,backIconButtonProps:{"aria-label":"previous page"},nextIconButtonProps:{"aria-label":"next page"},onChangePage:this.handleChangePage.bind(this),onChangeRowsPerPage:this.handleChangeRowsPerPage.bind(this)}))))))}}])&&Z(n.prototype,r),o&&Z(n,o),t}(o.Component);D(Q,"propTypes",{dispatch:s.a.func.isRequired});var H=Q;t.default=Object(r.b)()(H)},"6oKK":function(e,t,n){var r=n("mVuV");"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n("LboF")(r,o);r.locals&&(e.exports=r.locals)},BgoV:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,"\n.browse_page_container .browser_section_left input{\n\ttext-align: center;\n}\n.bus-background {\n\tposition: relative;\n}\n.bus-background-title {\n\tcolor: white;\n\tposition: absolute;\n    top: calc(50% - 39px);\n    left: 10%;\n}\n.bus-brower-description {\n\tcolor: #70767c;\n    font-weight: bold;\n    margin: 40px 0 0 0;\n}\n\n.browse_page_container.container > div.row{\n\tpadding: 0;\n}\n\n.browser {\n\tpadding: 0 15% 0 15%;\n}\n\n.browser_section {\n\tpadding-bottom: 100px !important;\n}\n.browser_section_left .left_content{\n\tpadding: 5px 0 0;\n\tbackground: white;\n\tmargin-top: 30px;\n\tbox-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.2);\n\toverflow: hidden;\n}\n.browser_section_left .left_content .browser_section_left_item{\n\tborder-bottom: 1px solid #eee;\n\tpadding: 20px 25px;\n}\n.browser_section_right .right_content {\n\tmargin-top: 30px;\n\tbox-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.2);\n\tbackground: white;\n}\n\n.browser_section_right_content{\n\tpadding-left: 25px;\n\tpadding-right: 0;\n}\n\n.browser_section_left_item_title h4 {\n\tfont-weight: normal;\n\tmargin: 0;\n\tfont-size: 18px;\n}\n.browser_section_left_item_content {\n\tpadding: 20px 0px 5px 0;\n}\n.browser_section_left_item_content  .browser_section_make .MuiOutlinedInput-root{\n\theight: 45px;\n\tmargin-bottom: 10px;\n\tcolor: #666;\n\tfont-weight: normal;\n\tfont-size: 14px;\n}\n.browser_section_left_item_content input{\n\tborder-radius: 5px;\n\theight: 45px;\n\tborder: 1px solid #aaa;\n\tfont-weight: normal;\n\tcolor: #666;\n}\n.browser_section_left_item_apply a {\n\tcolor: black;\n}\n.browser_section_body_type {\n\tpadding: 0 20px;\n}\n.browser_section_body_type_item {\n\tpadding-left: 8px !important;\n\tpadding-right: 8px !important;\n\tpadding-bottom: 10px;\n}\n.browser_section_body_type_item .item{\n\tbackground-color: #f2f4f6;\n\tborder-radius: 5px;\n\tcursor: pointer;\n}\n\n.browser_section_body_type_item .item:hover,\n.browser_section_body_type_item .item:focus{\n\tborder: 1px solid #2499f3;\n}\n\n.browser_section_body_type_item .item:active{\n\tborder: 1px solid #2499f3;\n}\n\n.browser_section_body_type_item p {\n\ttext-align: center;\n\tcolor: #7f8fa4;\n\tpadding-bottom: 10px;\n\tmargin: 0;\n\tfont-size: 14px;\n}\n.browser_section_body_type_item_image {\n\theight: 52px;\n\tpadding-top: 10px;\n\tdisplay: grid;\n}\n.browser_section_body_type_item_image img {\n\tborder-radius: 10px;\n\tmargin: auto;\n}\n.browser_section_make select {\n\twidth: 100%;\n\theight: 45px;\n\tfont-size: 15px;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tmargin-bottom: 10px;\n}\n.browser_section_mileage_slider {\n\ttext-align: center;\n}\n.browser_section_mileage_input {\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\tpadding-top: 5px;\n}\n.browser_section_mileage_input_left {\n\twidth: 45%;\n}\n.browser_section_mileage_input_left input {\n\twidth: 100%;\n}\n.browser_section_mileage_input_mid {\n\twidth: 10%;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n}\n.browser_section_mileage_input_mid p {\n\tmargin: auto;\n}\n.browser_section_mileage_input_right {\n\twidth: 45%;\n}\n.browser_section_mileage_input_right input {\n\twidth: 100%;\n}\n.browser_section_year {\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n}\n.browser_section_year_left {\n\twidth: 45%;\n}\n.browser_section_year_left input {\n\twidth: 100%;\n}\n\n.browser_section_year_mid {\n\twidth: 10%;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n}\n.browser_section_year_mid p {\n\tmargin: auto;\n}\n.browser_section_year_right {\n\twidth: 45%;\n}\n.browser_section_year_right input {\n\twidth: 100%;\n}\n.browser_section_price_slider {\n\tborder: 1px solid;\n\ttext-align: center;\n}\n.browser_section_price_input {\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\tpadding-top: 20px;\n}\n.browser_section_price_input_left {\n\twidth: 40%;\n}\n.browser_section_price_input_left input {\n\twidth: 100%;\n}\n.browser_section_price_input_mid {\n\twidth: 10%;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n}\n.browser_section_price_input_mid p {\n\tmargin: auto;\n}\n.browser_section_price_input_right {\n\twidth: 50%;\n}\n.browser_section_price_input_right input {\n\twidth: 100%;\n}\n.browser_section_left_item .browser_section_left_item_apply {\n\tbackground-color: #2499f3;\n\tborder-color: #2499f3;\n\tcolor: white;\n\twidth: 100%;\n\ttext-transform: unset;\n}\n\n.browser_section_left_item .browser_section_left_item_apply:hover{\n\tbackground-color: #2499f3;\n}\n\n.browser_section_left_item_apply a {\n\tcolor: black;\n}\n\n.browser_section_right_title{\n\tborder-bottom: 1px solid #f2f2f2;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n}\n\n.browser_section_right_title h4 {\n\tfont-weight: normal;\n\tfont-size: 20px;\n\tmargin: 0;\n\twidth: 30%;\n\tmargin-left: 25px;\n\tmargin-top: 25px;\n}\n\n\ndiv.row.car_details_browser_item {\n\tmargin: 0;\n\tpadding-bottom: 25px;\n\tpadding-top: 25px;\n\tborder-bottom: 1px solid #f2f2f2;\n}\n\ndiv.car_details_browser_item_description{\n\tpadding-left: 0;\n\tborder-right: 1px solid #DDD;\n}\n\ndiv.car_details_browser_item_image {\n\tpadding-right: 3%;\n\tpadding-left: 0;\n\tcursor: pointer;\n}\n\n.car_details_browser_item_image img {\n\theight: 150px;\n\twidth: 100%;\n\tborder-radius: 5px;\n}\n.car_details_browser_item_description_title p {\n\tfont-weight: normal;\n\tcolor: #111;\n\tfont-size: 18px;\n\tmargin: 0;\n\tpadding-top: 5px;\n}\n.car_details_browser_item_description_type {\n\tpadding: 0px 15px;\n}\n.car_details_browser_item_description_type ul {\n\tlist-style: none;\n\toverflow: hidden;\n\tdisplay: inline-block;\n\tpadding: 0;\n\twidth: 100%;\n\tmargin: 0;\n\tmargin-top: 10px;\n}\n.car_details_browser_item_description_type ul li {\n\tfloat: left;\n\tpadding: 0 10px 0 0;\n\n}\n.car_details_browser_item_description_type ul li p {\n\ttext-align: center;\n\tfont-size: 12px !important;\n\tfont-weight: normal;\n\tcolor: #555;\n\tmargin: 0;\n\tborder-radius: 5px;\n\tbackground-color: #f3f4f7;\n\tpadding: 4px 10px;\n}\n\n.car_details_browser_item_description_content{\n\tmargin-top: 10px;\n}\n\n.car_details_browser_item_description_content_name {\n\tcolor: gray;\n\tfont-size: 12px !important;\n\tmargin-top: 15px;\n\tmargin-bottom: 0;\n}\n.car_details_browser_item_description_content_value {\n\tpadding-top: 5px;\n\tmargin: 0;\n\tcolor: #333;\n}\n.car_details_browser_item_price {\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\ttext-align: center;\n}\n.car_details_browser_item_price .car_details_browser_item_price_content p{\n\tcolor: #333;\n}\n\n.car_details_browser_item_price_content button:hover,\n.car_details_browser_item_price_content button:focus,\n.car_details_browser_item_price_content button:active{\n\tbackground-color: #2499f3;\n\toutline: none;\n}\n\n.btn.browser_section_left_item_apply:hover,\n.btn.browser_section_left_item_apply:focus,\n.btn.browser_section_left_item_apply:active{\n\tcolor: white;\n}\n\n\n\n.browser_section_body_type_item .item.selected{\n\tborder: 1px solid #2499f3;\n}\n\n.browser_section_body_type_item .item.selected i{\n\tposition: absolute;\n\tcolor: #2499f3;\n\ttop: -5px;\n\tright: 4px;\n\tbackground-color: white;\n\tborder-radius: 50%;\n}\n\n.browser_section_make > div{\n\twidth: 100%;\n}\n\n.MuiInputBase-root .MuiSelect-icon\n{\n\tcolor: #2499f3;\n}\n\n.browser_section_right_title .top_pagination{\n\ttext-align: right;\n\tmargin-right: 20px;\n\tmargin-left: auto;\n}\n.browser_section_right_title .top_pagination div{\n\tcolor: #666;\n}\n.browser_section_right_title .top_pagination label{\n\tline-height: 75px;\n\tmargin-bottom: 0;\n\tcolor: #666;\n\tmargin-right: 10px;\n}\n\n.browser_section_right_title .top_pagination #select_rowsperpage{\n\tpadding-top: 0;\n\tpadding-bottom: 0;\n\tpadding-left: 30px;\n\tpadding-right: 35px;\n\theight: 43px;\n\tline-height: 43px;\n}\n\n.browser_section_right_title .top_pagination label.sort{\n\tmargin-left: 40px;\n}\n\n.search button.MuiButtonBase-root{\n\ttext-transform: capitalize;\n\tfont-size: 18px;\n}\n\n/* general button style */\n.car_details_browser_item_price_content button.MuiButtonBase-root{\n    background-color: #2499f3;\n    padding: 10px 25px;\n    text-transform: capitalize;\n}\n.car_details_browser_item_price_content button.MuiButtonBase-root .MuiButton-label{\n    color: white;\n}\n.car_details_browser_item_price_content button.MuiButtonBase-root:hover{\n    background-color: #24aaf3;\n    padding: 10px 25px;\n}\n.car_details_browser_item_price_content button.MuiButtonBase-root:hover .MuiButton-label{\n    color: white;\n    text-decoration: none;\n}",""])},Ivh2:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,"\n.image_over{\n\tpadding: 0 !important;\n}\n.car_photos{\n\tposition: absolute;\n\tleft: 10px;\n\tbottom: 10px;\n\tdisplay: none;\n}\n\n.car_photos.over{\n\tdisplay: block;\n\t-webkit-transition: 1s;\n\ttransition: 1s;\n}\n\n.car_photos .background{\n\tpadding: 15px 35px;\n\tbackground-color: black;\n\topacity: 0.7;\n\tborder-radius: 5px;\n}\n\n.car_photos .camera_icon{\n\tposition: absolute;\n    bottom: 2px;\n    color: white;\n    opacity: 0.8;\n    left: 10px;\n}\n\n.car_photos .photo_count{\n\tposition: absolute;\n\tleft: 41px;\n\tbottom: 2px;\n\tcolor: white;\n}",""])},QlS3:function(e,t,n){var r=n("j684");"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n("LboF")(r,o);r.locals&&(e.exports=r.locals)},RDZM:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a),s=n("nV/U"),l=n.n(s);n("rGs+");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=_(this,u(t).call(this,e))).state={cameraShow:""},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"handleMouseOver",value:function(e){this.setState({cameraShow:"over"})}},{key:"handleMouseOut",value:function(e){this.setState({cameraShow:""})}},{key:"render",value:function(){return o.a.createElement("div",{className:"image_over"},o.a.createElement("img",{className:"popular-section-item-image",src:this.props.img_url,onMouseOver:this.handleMouseOver.bind(this),onMouseOut:this.handleMouseOut.bind(this)}),o.a.createElement("div",{className:this.state.cameraShow+" car_photos"},o.a.createElement("div",{className:"background"}),o.a.createElement(l.a,{color:"action",className:"camera_icon"}),o.a.createElement("span",{className:"photo_count"},"20")))}}])&&p(n.prototype,r),a&&p(n,a),t}(r.Component);d.propTypes={img_url:i.a.string.isRequired},d.defaultProps={img_url:"./imgs/category-car.png"},t.a=d},YTQN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a),s=n("Z3vd"),l=n("MjS+"),c=n("bSwy"),p=n.n(c);n("kcsw");function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,d(t).call(this,e))).state={},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"search"},o.a.createElement("div",{className:"searchIcon"},o.a.createElement(p.a,null)),o.a.createElement(l.a,{placeholder:this.props.p_holder,className:"searchInput",inputProps:{"aria-label":"search"}}),o.a.createElement(s.a,{variant:"contained",color:"primary",className:"searchButton"},"Search"))}}])&&u(n.prototype,r),a&&u(n,a),t}(r.Component);f.propTypes={p_holder:i.a.string.isRequired},f.defaultProps={p_holder:"Search for a brand, model or bodytype..."},t.a=f},ZEGv:function(e,t,n){var r=n("BgoV");"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n("LboF")(r,o);r.locals&&(e.exports=r.locals)},ieZe:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,".search {\n\twidth: 100%;\n\theight: 55px;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\tmargin-top: 30px;\n}\n\n.searchInput {\n\theight: 100%;\n\twidth: 85%;\n\tmargin-right: 1%;\n\tpadding-left: 70px;\n\tfont-size: 18px;\n\tborder: 0;\n\tbox-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n    -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n    text-align: left !important;\n    background-color: white;\n}\n.search .searchInput{\n\tborder-radius: 5px;\n}\n.searchInput input{\n\ttext-align: left;\n}\n\n.searchIcon {\n\tposition: absolute;\n    width: 20px;\n    margin: 15px 25px;\n\tz-index: 999;\n}\n\n.searchIcon .MuiSvgIcon-root{\n\tcolor: #999999;\n}\n\n.searchButton {\n\theight: 100%;\n\twidth: 14%;\n\tbackground-color: #2499f3 !important;\n\tborder-color: #2499f3 !important;\n\tcolor: white;\n}\n",""])},j684:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,"",""])},kcsw:function(e,t,n){var r=n("ieZe");"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n("LboF")(r,o);r.locals&&(e.exports=r.locals)},mVuV:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,".browser_section_mileage_slider{\n\tpadding-left: 9px;\n\tpadding-right: 9px;\n}",""])},"rGs+":function(e,t,n){var r=n("Ivh2");"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n("LboF")(r,o);r.locals&&(e.exports=r.locals)}}]);