(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(t,e,r){t.exports=r(265)},152:function(t,e,r){},265:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(122),i=r.n(o),c=(r(152),r(95),r(11)),l=r(27),s=r(28),u=r(39),h=r(37),p=r(40),d=r(50),f=function(t){function e(t){var r;return Object(l.a)(this,e),(r=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={},r}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:{width:"20.83333333333333px",height:"27.08333333333333px",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("div",{style:{color:this.props.color,opacity:this.props.opacity,fontSize:"20px"}},this.props.col))}}]),e}(a.a.Component),g=function(t){function e(t){var r;return Object(l.a)(this,e),(r=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={},r}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{width:"500px",height:"27.08333333333333px",display:"flex",flexDirection:"row"}},this.props.row&&this.props.row.map(function(e,r){return a.a.createElement(f,{color:t.props.color,col:e,key:r,opacity:t.props.opacity})}))}}]),e}(a.a.Component),m=function(t){function e(t){var r;return Object(l.a)(this,e),(r=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={},r}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",width:"100%",height:"100%"},className:"TextContainer"},this.props.letters&&this.props.letters.map(function(e,r){return a.a.createElement(g,{color:t.props.color,row:e,key:r,opacity:t.props.opacity})}))}}]),e}(a.a.Component),v=r(123),y=r.n(v),b=r(91),w=r(303),x=r(300),E=r(301),k=r(90);function O(){O=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function s(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new C(a||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function p(){}function d(){}function f(){}var g={};l(g,o,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(j([])));v&&v!==e&&r.call(v,o)&&(g=v);var y=f.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return I()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=u(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:void 0,done:!0}}return d.prototype=f,n(y,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:d,configurable:!0}),d.displayName=l(f,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var L=function(t){function e(t){var r;return Object(l.a)(this,e),(r=Object(u.a)(this,Object(h.a)(e).call(this,t))).handleOpacityChange=function(t){var e=t.rgb.a;r.setState({opacity:e})},r.handleOpacityInputChange=function(t){var e=parseInt(t.target.value);e<1||e>100||isNaN(e)||r.handleOpacityChange({rgb:{r:0,g:0,b:0,a:e/100}})},r.selectInputValue=function(t){t.target.select()},r.getRandomLetters=function(){for(var t=[],e=0;e<24;e++){for(var n=[],a=0;a<24;a++)n.push(r.getRandomLetter());t.push(n)}return t},r.rgbToGrayscale=function(t,e,r){return.2126*t+.7152*e+.0722*r},r.blockCellsBelowThreshold=Object(c.a)(O().mark(function t(){return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(c.a)(O().mark(function t(e,n){var a,o,i,c,l;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=document.querySelector(".originalImage"),o=document.querySelector(".whiteBackgroundImage"),t.next=4,b.a(a,{quality:1});case 4:return i=t.sent,t.next=7,b.a(o,{quality:1});case 7:c=t.sent,l=[i,c],Promise.all(l.map(function(t){return new Promise(function(e,r){var n=new Image;n.onload=function(){return e(n)},n.onerror=r,n.src=t})})).then(function(t){for(var n=t[0],a=t[1],o=new Array(24),i=0;i<o.length;i++)o[i]=new Array(24);var c=document.createElement("canvas"),l=document.createElement("canvas");c.width=500,c.height=650,l.width=500,l.height=650;var s=c.getContext("2d"),u=l.getContext("2d");s.drawImage(n,0,0,500,650),u.drawImage(a,0,0,500,650);for(var h=s.getImageData(0,0,c.width,c.height),p=u.getImageData(0,0,l.width,l.height),d=0,f=0,g=0,m=0;m<24;m++){for(var v=0;v<24;v++){for(var y=!1,b=255,w=0,x=0;x<Math.round(500/24);x++){for(var E=0;E<Math.round(650/24);E++){var k=r.getPx(p,Math.round(d+x),Math.round(f+E));if(0===k.r||0===k.g||0===k.b||255===k.r||255===k.g||255===k.b){var O=r.getPx(h,Math.round(d+x),Math.round(f+E)),L=r.rgbToGrayscale(O.r,O.g,O.b);if(L<b&&(b=L),L>w&&(w=L),L<=parseFloat(r.state.threshold)){y=!0,o[m][v]="~",g++;break}o[m][v]=r.state.letters[m][v]}}if(y)break}!y&&w-b>=r.state.rangeThreshold&&(o[m][v]="#",g++),d+=500/24}d=0,f+=650/24}r.setState({blockedCells:g}),e(o)}).catch(function(){n()});case 10:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()).catch(function(t){console.error(t)}));case 1:case"end":return t.stop()}},t)})),r.getPx=function(t,e,r){var n,a=new Uint32Array(t.data.buffer)[r*t.width+e],o=0,i=0,c=0,l=0;return a>0&&(n=a.toString(16),o=parseInt(n.substr(0,2),16),i=parseInt(n.substr(2,2),16),c=parseInt(n.substr(4,2),16),l=parseInt(n.substr(6,2),16)),{r:l,g:c,b:i,a:o}},r.getRandomLetter=function(){return String.fromCharCode(Math.floor(26*Math.random())+65)},r.fileChangedHandler=r.fileChangedHandler.bind(Object(d.a)(Object(d.a)(r))),r.state={threshold:0,letters:[],backgroundImage:null,loading:!1,imageLoaded:!1,opacity:1,opacityInputValue:100,color:{hex:"#000000",rgb:{r:0,g:0,b:0}},blockedCells:0,rangeThreshold:0},r}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Math.round(100*this.state.opacity);this.setState({opacityInputValue:t})}},{key:"componentDidUpdate",value:function(t,e){e.opacity!==this.state.opacity&&this.setState({opacityInputValue:Math.round(100*this.state.opacity)})}},{key:"fileChangedHandler",value:function(t){var e=this,r=!1;if(t.target.files[0]&&(r=!0),r)try{y.a.imageFileResizer(t.target.files[0],556,696,"JPEG",100,0,function(t){var r=e.getRandomLetters();e.setState({backgroundImage:t,letters:r})},"base64",556,696),this.setState({imageLoaded:!0})}catch(n){console.log(n)}}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"auto",flexDirection:"column",paddingTop:"10px",paddingBottom:"10px"},className:"App"},this.state.loading&&a.a.createElement("div",{style:{position:"absolute",backgroundColor:"white",zIndex:999,width:"100%",height:"100%"}},a.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},a.a.createElement(w.a,null))),a.a.createElement("div",{style:{marginBottom:"10px"}},a.a.createElement("input",{type:"file",id:"imageUpload",name:"imageUpload",onChange:this.fileChangedHandler})),a.a.createElement("div",{style:{marginBottom:"10px"}},"Blocked cells ",this.state.blockedCells),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{className:"originalImage",style:{width:"500px",height:"650px",position:"relative"}},a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("img",{alt:"",style:{width:"500px",height:"650px"},src:this.state.backgroundImage})),a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("div",{style:{width:"100%",height:"100%"}},a.a.createElement(m,{letters:this.state.letters,color:this.state.color.hex,opacity:this.state.opacity})))),a.a.createElement("div",{className:"whiteBackgroundImage",style:{width:"500px",height:"650px",position:"relative",backgroundColor:"white",display:"".concat(this.state.loading?"block":"none")}},a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("div",{style:{width:"100%",height:"100%"}},a.a.createElement(m,{letters:this.state.letters}))))),a.a.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:"10px"}},a.a.createElement("div",{style:{position:"relative",width:"316px",height:"16px"}},a.a.createElement(k.a,{color:{h:250,s:0,l:.2,a:this.state.opacity},onChange:function(e){t.handleOpacityChange(e)}})),a.a.createElement("div",{style:{display:"flex",alignItems:"center",marginLeft:20}},a.a.createElement(x.a,{style:{width:"75px"},type:"number",value:this.state.opacityInputValue,inputProps:{min:"1",max:"100",step:"1"},onChange:this.handleOpacityInputChange,onFocus:this.selectInputValue,onClick:this.selectInputValue}),a.a.createElement("span",{style:{marginLeft:10}},"%"))),a.a.createElement("div",{style:{display:"flex",marginTop:"10px",marginBottom:"10px"}},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},a.a.createElement(x.a,{margin:"normal",type:"number",id:"outlined-basic",label:"Darkness Threshold (0 - 255)",variant:"outlined",value:this.state.threshold,onChange:function(e){e.target.value>=0&&e.target.value<=255&&t.setState({threshold:e.target.value})}}),a.a.createElement(x.a,{margin:"normal",type:"number",id:"outlined-basic",label:"Range Threshold (0 - 255)",variant:"outlined",value:this.state.rangeThreshold,onChange:function(e){e.target.value>=0&&e.target.value<=255&&t.setState({rangeThreshold:e.target.value})}})),a.a.createElement("div",{style:{marginLeft:"40px"}},a.a.createElement(k.b,{width:"200px",height:"200px",disableAlpha:!0,color:this.state.color,onChangeComplete:function(e){t.setState({color:e})}}))),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(E.a,{style:{marginRight:5},onClick:Object(c.a)(O().mark(function e(){var r;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,t.blockCellsBelowThreshold();case 3:r=e.sent,t.setState({loading:!1,letters:r});case 5:case"end":return e.stop()}},e)})),variant:"outlined",disabled:!this.state.imageLoaded},"Block cells"),a.a.createElement(E.a,{style:{marginLeft:5},onClick:function(){var e=t.getRandomLetters();t.setState({letters:e,blockedCells:0})},variant:"outlined"},"Reset")))}}]),e}(a.a.Component);var C=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(L,null))},j=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,304)).then(function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null))),j()},95:function(t,e,r){}},[[145,1,2]]]);
//# sourceMappingURL=main.a0da1466.chunk.js.map