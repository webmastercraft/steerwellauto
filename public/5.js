(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+o5u":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=i("TSYQ"),s=(o=n)&&o.__esModule?o:{default:o};t.default={CAROUSEL:function(e){return(0,s.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,s.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,s.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t){return(0,s.default)({thumb:!e,slide:e,selected:t})},ARROW_PREV:function(e){return(0,s.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,s.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,s.default)({dot:!0,selected:e})}}},"0ZOu":function(e,t,i){(e.exports=i("JPst")(!1)).push([e.i,".carousel .control-arrow,.carousel.carousel-slider .control-arrow{-webkit-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;position:absolute;z-index:2;top:20px;background:0 0;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:hover{opacity:1}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel{position:relative;width:100%}.carousel *{box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:0 0;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;width:80px;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:0}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center;background:#000}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:.25;-webkit-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;text-align:center;width:100%}@media (min-width:960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;box-shadow:1px 1px 2px rgba(0,0,0,.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,.9);color:#fff}.carousel:hover .slide .legend{opacity:1}",""])},Dl0Y:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Thumbs=t.Carousel=void 0;var o=s(i("YiZL")),n=s(i("RxTv"));function s(e){return e&&e.__esModule?e:{default:e}}t.Carousel=o.default,t.Thumbs=n.default},JtOw:function(e,t,i){var o,n,s;n=[t,i("fnPv")],void 0===(s="function"==typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=(i=t)&&i.__esModule?i:{default:i};e.default=o.default})?o.apply(t,n):o)||(e.exports=s)},PFkU:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.unit=function(e,t,i){if(!/(pt|px|em|rem|vw|vh|%)$/.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+i+"`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %")}},RxTv:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),s=i("q1tI"),r=d(s),a=d(i("17x9")),l=d(i("+o5u")),u=i("f+5F"),c=d(i("sgwi")),p=d(i("JtOw"));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return h.call(i),i.state={selectedItem:e.selectedItem,hasMount:!1,firstItem:0,itemSize:null,visibleItems:0,lastPosition:0,showArrows:!1,images:i.getImages()},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(e){this.setupThumbs()}},{key:"componentWillReceiveProps",value:function(e,t){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)}),e.children!==this.props.children&&this.setState({images:this.getImages()})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getImages",value:function(){var e=s.Children.map(this.props.children,(function(e,t){var i=e;return"img"!==e.type&&(i=s.Children.toArray(e.props.children).filter((function(e){return"img"===e.type}))[0]),i&&0!==i.length?i:null}));return 0===e.filter((function(e){return null!==e})).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),null):e}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.state.images.map((function(t,i){var n=l.default.ITEM(!1,i===e.state.selectedItem&&e.state.hasMount),s={key:i,ref:function(t){return e.setThumbsRef(t,i)},className:n,onClick:e.handleClickItem.bind(e,i,e.props.children[i]),onKeyDown:e.handleClickItem.bind(e,i,e.props.children[i]),"aria-label":e.props.labels.item+" "+(i+1)};return 0===i&&(t=r.default.cloneElement(t,{onLoad:e.setMountState})),r.default.createElement("li",o({},s,{role:"button",tabIndex:0}),t)}))}},{key:"render",value:function(){if(!this.props.children)return null;var e,t=this.state.showArrows&&this.state.firstItem>0,i=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,o=-this.state.firstItem*this.state.itemSize+"px",n=(0,c.default)(o,this.props.axis),s=this.props.transitionTime+"ms";return e={WebkitTransform:n,MozTransform:n,MsTransform:n,OTransform:n,transform:n,msTransform:n,WebkitTransitionDuration:s,MozTransitionDuration:s,MsTransitionDuration:s,OTransitionDuration:s,transitionDuration:s,msTransitionDuration:s},r.default.createElement("div",{className:l.default.CAROUSEL(!1)},r.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},r.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!t),onClick:this.slideRight,"aria-label":this.props.labels.leftArrow}),r.default.createElement(p.default,{tagName:"ul",selectedItem:this.state.selectedItem,className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:e,ref:this.setItemsListRef},this.renderItems()),r.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!i),onClick:this.slideLeft,"aria-label":this.props.labels.rightArrow})))}}]),t}(s.Component);f.displayName="Thumbs",f.propsTypes={children:a.default.element.isRequired,transitionTime:a.default.number,selectedItem:a.default.number,thumbWidth:a.default.number,labels:a.default.shape({leftArrow:a.default.string,rightArrow:a.default.string,item:a.default.string})},f.defaultProps={selectedItem:0,transitionTime:350,axis:"horizontal"};var h=function(){var e=this;this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsListRef=function(t){e.itemsListRef=t},this.setThumbsRef=function(t,i){e.thumbsRef||(e.thumbsRef=[]),e.thumbsRef[i]=t},this.updateSizes=function(){if(e.props.children&&e.itemsWrapperRef){var t=e.props.children.length,i=e.itemsWrapperRef.clientWidth,o=e.props.thumbWidth?e.props.thumbWidth:(0,u.outerWidth)(e.thumbsRef[0]),n=Math.floor(i/o),s=t-n,r=n<t;e.setState((function(t,i){return{itemSize:o,visibleItems:n,firstItem:r?e.getFirstItem(i.selectedItem):0,lastPosition:s,showArrows:r}}))}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,i,o){if(!o.keyCode||"Enter"===o.key){var n=e.props.onSelectItem;"function"==typeof n&&n(t,i)}},this.onSwipeStart=function(){e.setState({swiping:!0})},this.onSwipeEnd=function(){e.setState({swiping:!1})},this.onSwipeMove=function(t){var i=-e.state.firstItem*e.state.itemSize;0===i&&t>0&&(t=0),i===-e.state.visibleItems*e.state.itemSize&&t<0&&(t=0);var o=i+100/(e.itemsWrapperRef.clientWidth/t)+"%";e.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(t){e.itemsListRef.style[t]=(0,c.default)(o,e.props.axis)}))},this.slideRight=function(t){e.moveTo(e.state.firstItem-("number"==typeof t?t:1))},this.slideLeft=function(t){e.moveTo(e.state.firstItem+("number"==typeof t?t:1))},this.moveTo=function(t){t=(t=t<0?0:t)>=e.lastPosition?e.lastPosition:t,e.setState({firstItem:t})}};t.default=f},YiZL:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),s=i("q1tI"),r=h(s),a=h(i("i8i4")),l=h(i("17x9")),u=h(i("+o5u")),c=h(i("sgwi")),p=h(i("JtOw")),d=h(i("RxTv")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(i("PFkU"));function h(e){return e&&e.__esModule?e:{default:e}}var m=function(){},v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.setThumbsRef=function(e){i.thumbsRef=e},i.setCarouselWrapperRef=function(e){i.carouselWrapperRef=e},i.setListRef=function(e){i.listRef=e},i.setItemsWrapperRef=function(e){i.itemsWrapperRef=e},i.setItemsRef=function(e,t){i.itemsRef||(i.itemsRef=[]),i.itemsRef[t]=e},i.autoPlay=function(){!i.state.autoPlay||s.Children.count(i.props.children)<=1||(clearTimeout(i.timer),i.timer=setTimeout((function(){i.increment()}),i.props.interval))},i.clearAutoPlay=function(){i.state.autoPlay&&clearTimeout(i.timer)},i.resetAutoPlay=function(){i.clearAutoPlay(),i.autoPlay()},i.stopOnHover=function(){i.setState({isMouseEntered:!0}),i.clearAutoPlay()},i.startOnLeave=function(){i.setState({isMouseEntered:!1}),i.autoPlay()},i.navigateWithKeyboard=function(e){var t="horizontal"===i.props.axis,o=t?37:38;(t?39:40)===e.keyCode?i.increment():o===e.keyCode&&i.decrement()},i.updateSizes=function(){if(i.state.initialized){var e="horizontal"===i.props.axis,t=i.itemsRef[0],o=e?t.clientWidth:t.clientHeight;i.setState((function(e,t){return{itemSize:o}})),i.thumbsRef&&i.thumbsRef.updateSizes()}},i.setMountState=function(){i.setState({hasMount:!0}),i.updateSizes()},i.handleClickItem=function(e,t){0!==s.Children.count(i.props.children)&&(i.state.cancelClick?i.setState({cancelClick:!1}):(i.props.onClickItem(e,t),e!==i.state.selectedItem&&i.setState({selectedItem:e})))},i.handleOnChange=function(e,t){s.Children.count(i.props.children)<=1||i.props.onChange(e,t)},i.handleClickThumb=function(e,t){i.props.onClickThumb(e,t),i.selectItem({selectedItem:e})},i.onSwipeStart=function(e){i.setState({swiping:!0}),i.props.onSwipeStart(e),i.clearAutoPlay()},i.onSwipeEnd=function(e){i.setState({swiping:!1,cancelClick:!1}),i.props.onSwipeEnd(e),i.autoPlay()},i.onSwipeMove=function(e,t){i.props.onSwipeMove(t);var o="horizontal"===i.props.axis,n=s.Children.count(i.props.children),r=i.getPosition(i.state.selectedItem),a=i.props.infiniteLoop?i.getPosition(n-1)-100:i.getPosition(n-1),l=o?e.x:e.y,u=l;0===r&&l>0&&(u=0),r===a&&l<0&&(u=0);var c=r+100/(i.state.itemSize/u);i.props.infiniteLoop&&(0===i.state.selectedItem&&c>-100?c-=100*n:i.state.selectedItem===n-1&&c<100*-n&&(c+=100*n)),c+="%",i.setPosition(c);var p=Math.abs(l)>i.props.swipeScrollTolerance;return p&&!i.state.cancelClick&&i.setState({cancelClick:!0}),p},i.setPosition=function(e,t){var o=a.default.findDOMNode(i.listRef);["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(t){o.style[t]=(0,c.default)(e,i.props.axis)})),t&&o.offsetLeft},i.resetPosition=function(){var e=i.getPosition(i.state.selectedItem)+"%";i.setPosition(e)},i.decrement=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i.moveTo(i.state.selectedItem-("number"==typeof e?e:1),t)},i.increment=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i.moveTo(i.state.selectedItem+("number"==typeof e?e:1),t)},i.moveTo=function(e,t){var o=s.Children.count(i.props.children)-1,n=i.props.infiniteLoop&&!t&&(e<0||e>o),r=e;e<0&&(e=i.props.infiniteLoop?o:0),e>o&&(e=i.props.infiniteLoop?0:o),n?i.setState({swiping:!0},(function(){r<0?i.props.centerMode&&"horizontal"===i.props.axis?i.setPosition("-"+((o+2)*i.props.centerSlidePercentage-(100-i.props.centerSlidePercentage)/2)+"%",!0):i.setPosition("-"+100*(o+2)+"%",!0):r>o&&i.setPosition(0,!0),i.selectItem({selectedItem:e,swiping:!1})})):i.selectItem({selectedItem:e}),i.state.autoPlay&&!1===i.state.isMouseEntered&&i.resetAutoPlay()},i.onClickNext=function(){i.increment(1,!1)},i.onClickPrev=function(){i.decrement(1,!1)},i.onSwipeForward=function(){i.increment(1,!0)},i.onSwipeBackwards=function(){i.decrement(1,!0)},i.changeItem=function(e){if(!e.key||"Enter"===e.key){var t=e.target.value;i.selectItem({selectedItem:t})}},i.selectItem=function(e,t){i.setState(e,t),i.handleOnChange(e.selectedItem,s.Children.toArray(i.props.children)[e.selectedItem])},i.getInitialImage=function(){var e=i.props.selectedItem,t=i.itemsRef&&i.itemsRef[e],o=t&&t.getElementsByTagName("img");return o&&o[e]},i.getVariableImageHeight=function(e){var t=i.itemsRef&&i.itemsRef[e],o=t&&t.getElementsByTagName("img");if(i.state.hasMount&&o.length>0){var n=o[0];if(!n.complete){n.addEventListener("load",(function e(){i.forceUpdate(),n.removeEventListener("load",e)}))}var s=n.clientHeight;return s>0?s:null}return null},i.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.selectedItem!==this.state.selectedItem&&(this.updateSizes(),this.moveTo(e.selectedItem)),e.autoPlay!==this.state.autoPlay&&this.setState({autoPlay:e.autoPlay},(function(){t.state.autoPlay?t.setupAutoPlay():t.destroyAutoPlay()}))}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),t.swiping&&!this.state.swiping&&this.resetPosition()}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){this.bindEvents(),this.state.autoPlay&&s.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.setState({initialized:!0});var e=this.getInitialImage();e?e.addEventListener("load",this.setMountState):this.setMountState()}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&document.addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&document.removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"getPosition",value:function(e){this.props.infiniteLoop&&++e;var t=s.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var i=-e*this.props.centerSlidePercentage,o=t-1;return e&&(e!==o||this.props.infiniteLoop)?i+=(100-this.props.centerSlidePercentage)/2:e===o&&(i+=100-this.props.centerSlidePercentage),i}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return s.Children.map(this.props.children,(function(i,o){var n={ref:function(e){return t.setItemsRef(e,o)},key:"itemKey"+o+(e?"clone":""),className:u.default.ITEM(!0,o===t.state.selectedItem),onClick:t.handleClickItem.bind(t,o,i)};return t.props.centerMode&&"horizontal"===t.props.axis&&(n.style={minWidth:t.props.centerSlidePercentage+"%"}),r.default.createElement("li",n,i)}))}},{key:"renderControls",value:function(){var e=this;return this.props.showIndicators?r.default.createElement("ul",{className:"control-dots"},s.Children.map(this.props.children,(function(t,i){return r.default.createElement("li",{className:u.default.DOT(i===e.state.selectedItem),onClick:e.changeItem,onKeyDown:e.changeItem,value:i,key:i,role:"button",tabIndex:0,"aria-label":e.props.labels.item+" "+(i+1)})}))):null}},{key:"renderStatus",value:function(){return this.props.showStatus?r.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,s.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&0!==s.Children.count(this.props.children)?r.default.createElement(d.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels},this.props.children):null}},{key:"render",value:function(){if(!this.props.children||0===s.Children.count(this.props.children))return null;var e="horizontal"===this.props.axis,t=this.props.showArrows&&s.Children.count(this.props.children)>1,i=t&&(this.state.selectedItem>0||this.props.infiniteLoop),n=t&&(this.state.selectedItem<s.Children.count(this.props.children)-1||this.props.infiniteLoop),a={},l=this.getPosition(this.state.selectedItem),d=(0,c.default)(l+"%",this.props.axis),f=this.props.transitionTime+"ms";a={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d},this.state.swiping||(a=o({},a,{WebkitTransitionDuration:f,MozTransitionDuration:f,MsTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f}));var h=this.renderItems(!0),m=h.shift(),v=h.pop(),w={selectedItem:this.state.selectedItem,className:u.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:a,tolerance:this.props.swipeScrollTolerance},b={};if(e){if(w.onSwipeLeft=this.onSwipeForward,w.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var y=this.getVariableImageHeight(this.state.selectedItem);w.style.height=y||"auto",b.height=y||"auto"}}else w.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,w.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,w.style.height=this.state.itemSize,b.height=this.state.itemSize;return r.default.createElement("div",{className:this.props.className,ref:this.setCarouselWrapperRef},r.default.createElement("div",{className:u.default.CAROUSEL(!0),style:{width:this.props.width}},r.default.createElement("button",{type:"button","aria-label":this.props.labels.leftArrow,className:u.default.ARROW_PREV(!i),onClick:this.onClickPrev}),r.default.createElement("div",{className:u.default.WRAPPER(!0,this.props.axis),style:b,ref:this.setItemsWrapperRef},this.props.swipeable?r.default.createElement(p.default,o({tagName:"ul",ref:this.setListRef},w,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m):r.default.createElement("ul",{className:u.default.SLIDER(!0,this.state.swiping),ref:this.setListRef,style:a},this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m)),r.default.createElement("button",{type:"button","aria-label":this.props.labels.rightArrow,className:u.default.ARROW_NEXT(!n),onClick:this.onClickNext}),this.renderControls(),this.renderStatus()),this.renderThumbs())}}]),t}(s.Component);v.displayName="Carousel",v.propTypes={className:l.default.string,children:l.default.node,showArrows:l.default.bool,showStatus:l.default.bool,showIndicators:l.default.bool,infiniteLoop:l.default.bool,showThumbs:l.default.bool,thumbWidth:l.default.number,selectedItem:l.default.number,onClickItem:l.default.func.isRequired,onClickThumb:l.default.func.isRequired,onChange:l.default.func.isRequired,axis:l.default.oneOf(["horizontal","vertical"]),verticalSwipe:l.default.oneOf(["natural","standard"]),width:f.unit,useKeyboardArrows:l.default.bool,autoPlay:l.default.bool,stopOnHover:l.default.bool,interval:l.default.number,transitionTime:l.default.number,swipeScrollTolerance:l.default.number,swipeable:l.default.bool,dynamicHeight:l.default.bool,emulateTouch:l.default.bool,statusFormatter:l.default.func.isRequired,centerMode:l.default.bool,centerSlidePercentage:l.default.number,labels:l.default.shape({leftArrow:l.default.string,rightArrow:l.default.string,item:l.default.string}),onSwipeStart:l.default.func,onSwipeEnd:l.default.func,onSwipeMove:l.default.func},v.defaultProps={showIndicators:!0,showArrows:!0,showStatus:!0,showThumbs:!0,infiniteLoop:!1,selectedItem:0,axis:"horizontal",verticalSwipe:"standard",width:"100%",useKeyboardArrows:!1,autoPlay:!1,stopOnHover:!0,interval:3e3,transitionTime:350,swipeScrollTolerance:5,swipeable:!0,dynamicHeight:!1,emulateTouch:!1,onClickItem:m,onClickThumb:m,onChange:m,statusFormatter:function(e,t){return e+" of "+t},centerMode:!1,centerSlidePercentage:80,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){}},t.default=v},a6qw:function(e,t,i){var o=i("0ZOu");"string"==typeof o&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i("LboF")(o,n);o.locals&&(e.exports=o.locals)},"f+5F":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.outerWidth=function(e){var t=e.offsetWidth,i=getComputedStyle(e);return t+=parseInt(i.marginLeft)+parseInt(i.marginRight)}},fnPv:function(e,t,i){var o,n,s;n=[t,i("q1tI"),i("17x9")],void 0===(s="function"==typeof(o=function(e,t,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=l;var o=s(t),n=s(i);function s(e){return e&&e.__esModule?e:{default:e}}var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),a=!1;function l(e){a=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){l(!0)}}))}catch(e){}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return a?e:e.capture}function c(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var p=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=Array(i),n=0;n<i;n++)o[n]=arguments[n];var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o)));return s._handleSwipeStart=s._handleSwipeStart.bind(s),s._handleSwipeMove=s._handleSwipeMove.bind(s),s._handleSwipeEnd=s._handleSwipeEnd.bind(s),s._onMouseDown=s._onMouseDown.bind(s),s._onMouseMove=s._onMouseMove.bind(s),s._onMouseUp=s._onMouseUp.bind(s),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=c(e),i=t.x,o=t.y;this.moveStart={x:i,y:o},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=c(e),i=t.x,o=t.y,n=i-this.moveStart.x,s=o-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:n,y:s},e)&&e.preventDefault(),this.movePosition={deltaX:n,deltaY:s}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"render",value:function(){var e=this;return o.default.createElement(this.props.tagName,{ref:function(t){return e.swiper=t},onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:this.props.className,style:this.props.style},this.props.children)}}]),t}(t.Component);p.displayName="ReactSwipe",p.propTypes={tagName:n.default.string,className:n.default.string,style:n.default.object,children:n.default.node,allowMouseEvents:n.default.bool,onSwipeUp:n.default.func,onSwipeDown:n.default.func,onSwipeLeft:n.default.func,onSwipeRight:n.default.func,onSwipeStart:n.default.func,onSwipeMove:n.default.func,onSwipeEnd:n.default.func,tolerance:n.default.number.isRequired},p.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},tolerance:0},e.default=p})?o.apply(t,n):o)||(e.exports=s)},sgwi:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return"translate3d"+("("+("horizontal"===t?[e,0,0]:[0,e,0]).join(",")+")")}}}]);