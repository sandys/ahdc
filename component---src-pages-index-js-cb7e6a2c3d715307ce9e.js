(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1TsT":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("V+eJ"),n("2Spj"),n("8+KV"),n("HAE/");var o=!("undefined"==typeof window||!window.document||!window.document.createElement);var a=void 0;function r(){return void 0===a&&(a=function(){if(!o)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(a){}return e}()),a}function i(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function l(e){this.target=e,this.events={}}l.prototype.getEventHandlers=function(e,t){var n,o=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[o]||(this.events[o]={handlers:[],handleEvent:void 0},this.events[o].nextHandlers=this.events[o].handlers),this.events[o]},l.prototype.handleEvent=function(e,t,n){var o=this.getEventHandlers(e,t);o.handlers=o.nextHandlers,o.handlers.forEach((function(e){e&&e(n)}))},l.prototype.add=function(e,t,n){var o=this,a=this.getEventHandlers(e,n);i(a),0===a.nextHandlers.length&&(a.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,a.handleEvent,n)),a.nextHandlers.push(t);var r=!0;return function(){if(r){r=!1,i(a);var l=a.nextHandlers.indexOf(t);a.nextHandlers.splice(l,1),0===a.nextHandlers.length&&(o.target&&o.target.removeEventListener(e,a.handleEvent,n),a.handleEvent=void 0)}}};function s(e,t,n,o){e.__consolidated_events_handlers__||(e.__consolidated_events_handlers__=new l(e));var a=function(e){if(e)return r()?e:!!e.capture}(o);return e.__consolidated_events_handlers__.add(t,n,a)}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ewf5:function(e,t,n){e.exports=n.p+"static/m1-0cb44516a0a2e2067e72098ecfef42d0.jpg"},Fxm3:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var a=+new Date;!!t&&a<t+o?(clearTimeout(n),n=setTimeout((function(){t=a,e()}),o)):(t=a,e())}};t.default=o},HZFZ:function(e,t,n){e.exports=n.p+"static/m3-1a0b6f066a85663af8c5b79035fd2b95.jpg"},ILy0:function(e,t,n){e.exports=n.p+"static/pic01-b9959e167f94349be29be7284e7b9112.jpg"},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},Mbru:function(e,t,n){e.exports=n.p+"static/note3-8f3292ddda4d25f67670a746b7b198b9.jpg"},MmCv:function(e,t,n){e.exports=n.p+"static/note2-4e038e3b57f5058aacbc65a7dd3fbc13.jpg"},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},RIqP:function(e,t,n){var o=n("Ijbi"),a=n("EbDI"),r=n("Bnag");e.exports=function(e){return o(e)||a(e)||r()}},RXBc:function(e,t,n){"use strict";n.r(t);n("Wbzz");var o=n("q1tI"),a=n.n(o),r=n("TJpk"),i=n.n(r),l=n("uuth"),s=(n("ILy0"),n("v3Ww")),c=n.n(s),u=n("rNfz"),p=n.n(u),f=n("z6TK"),d=n.n(f),m=n("MmCv"),h=n.n(m),v=n("Mbru"),y=n.n(v),g=n("bWV4"),w=n.n(g),b=n("Ewf5"),E=n.n(b),S=n("owJ0"),_=n.n(S),T=n("HZFZ"),N=n.n(T),k=n("wcJY"),x=n.n(k),O=n("D9rq"),j=n.n(O),P=function(e){return a.a.createElement("header",{id:"header",className:"alt"},a.a.createElement("span",{className:"logo"},a.a.createElement("img",{src:j.a,alt:""})),a.a.createElement("h1",null,"Association of Holistic Development of Children"),a.a.createElement("p",null,"A Non-Profit Organisation."),a.a.createElement("ul",{className:"icons"},a.a.createElement("li",null,a.a.createElement("a",{href:"https://twitter.com/AHDCindia",className:"icon fa-twitter alt"},a.a.createElement("span",{className:"label"},"Twitter"))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.facebook.com/AHDCindia/",className:"icon fa-facebook alt"},a.a.createElement("span",{className:"label"},"Facebook"))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.instagram.com/ahdcindia/",className:"icon fa-instagram alt"},a.a.createElement("span",{className:"label"},"Instagram")))))},C=n("Bl7J"),A=n("YIkO"),I=n.n(A),B=n("dwco"),H=n.n(B);var D=function(e){return e.children},W=function(e){var t,n;function o(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){H.a.polyfill()},r.handleClick=function(e){e.preventDefault();var t=0,n=!0,o=this.props,a=o.type,r=o.element,i=o.offset,l=o.timeout;if(a&&r)switch(a){case"class":n=!!(t=document.getElementsByClassName(r)[0]);break;case"id":n=!!(t=document.getElementById(r))}n?this.scrollTo(t,i,l):console.log("Element not found: "+r)},r.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),n):window.scroll({top:o+t,left:0,behavior:"smooth"})},r.render=function(){return a.a.createElement(D,null,"object"==typeof this.props.children?a.a.cloneElement(this.props.children,{onClick:this.handleClick}):a.a.createElement("span",{onClick:this.handleClick},this.props.children))},o}(a.a.Component),L=function(e){return a.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},a.a.createElement(I.a,{items:["about","founders","mission","team","impact"],currentClassName:"is-active",offset:-300},a.a.createElement("li",null,a.a.createElement(W,{type:"id",element:"about"},a.a.createElement("a",{href:"#"},"About Us"))),a.a.createElement("li",null,a.a.createElement(W,{type:"id",element:"founders"},a.a.createElement("a",{href:"#"},"Founders Note"))),a.a.createElement("li",null,a.a.createElement(W,{type:"id",element:"mission"},a.a.createElement("a",{href:"#"},"Mission"))),a.a.createElement("li",null,a.a.createElement(W,{type:"id",element:"team"},a.a.createElement("a",{href:"#"},"Team"))),a.a.createElement("li",null,a.a.createElement(W,{type:"id",element:"impact"},a.a.createElement("a",{href:"#"},"Impact")))))};var M=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this)._handleWaypointEnter=function(){n.setState((function(){return{stickyNav:!1}}))},n._handleWaypointLeave=function(){n.setState((function(){return{stickyNav:!0}}))},n.state={stickyNav:!1},n}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){return a.a.createElement(C.a,null,a.a.createElement(i.a,{title:"Association of Holistic Development of Children"}),a.a.createElement(P,null),a.a.createElement(l.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),a.a.createElement(L,{sticky:this.state.stickyNav}),a.a.createElement("div",{id:"main"},a.a.createElement("section",{id:"about",className:"main"},a.a.createElement("div",{className:"spotlight"},a.a.createElement("div",{className:"content"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"About Us")),a.a.createElement("p",null,"When poverty and lack of effective execution of welfare policies combine, the worst sufferers are always children. With the most vital growing period, both physiological and psychological, seriously hampered, this takes away from children the ability to ever function as a capable adult. One can see this as a slow, indirect process of creating a large population of disabled adults. Hence, it becomes imperative to address the issues concerning the holistic development of children with utmost gravity. Association for Holistic Development of Children is dedicated to ensure standard livelihood and development conditions to children across India."),a.a.createElement("p",null,"We are a registered organisation under the Societies Registration Act XXI of 1860"),a.a.createElement("p",null,"Registration No. S-1960/ Distt. North East/2019")),a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:w.a,alt:""})))),a.a.createElement("section",{id:"founders",className:"main special"},a.a.createElement("div",{className:"spotlight"},a.a.createElement("div",{className:"content"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Founders Note")),a.a.createElement("p",null,"Where we come from- Mustafabad in North East Delhi, it becomes difficult to get a sense of direction or clarity of way ahead."),a.a.createElement("p",null,"Our single minded aim behind starting AHDC was to help alleviate the conditions of the area we were born and brought up in. To help with its development and progress. We have studied social work and so it is an added responsibility on us to work in areas which are largely inaccessible to people from outside due to various constraints. We have assessed various areas of Delhi and came to realise that our own region is one of the most backward and underdeveloped."),a.a.createElement("p",null,"When we finished our schooling and stepped out of our neighbourhoods into the world, we realised how things were so different outside. We studied journalism in college and that’s when we understood our rights and responsibilities. We could see how we had been living up until that moment and how we should be living. After college we worked in journalism and events but always felt something was missing. We then started our own digital news portal hindigazette.com with a mission to carry news in Hindi & Urdu to underdeveloped areas. The portal continues to be operative with a dedicated team of contributors and journalists."),a.a.createElement("p",null,"It was when we were pursuing our Masters in Early Child Development From Jamia Milia Islamia University that we realised that our own area in Delhi was lacking in every single facility needed for child development. That’s when we decided to take this up in an organised way and founded AHDC. Even before the organisation got registered in 2019, we worked on the ground for more than year, organising camps, talking to people about the benefits of facilities of child development and so on. We collected feedback and data from various elders and stakeholders of the area, women and young girls as well. We kept ‘holistic development’ as the centre of our mission with the aim of getting Mustafabad at par with other more developed areas of Delhi."),a.a.createElement("p",null,"Our mission is to build a better tomorrow, a more equipped next generation. A generation that can claim every opportunity to build a better more productive lives for themselves. There is no dearth of potential in this area- the children are bright but need facilities for growth, equal opportunity and a bit of guidance. We want to implement international standards of development in our area. Every single child should get physical, cognitive, social, emotional and language development."),a.a.createElement("p",null,"We understand that for this to happen we have to work closely at the grass roots level because unless the ground is ready, the mission will not take off. A lot of NGOs avoid working closely on the ground in areas like Mustafabad. Hence we started our own organisation- an endeavour by some of us who are from this area and want to see development in this area."),a.a.createElement("ul",{className:"actions"},a.a.createElement("li",null,a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:d.a,alt:""}))),a.a.createElement("li",null,a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:h.a,alt:""}))),a.a.createElement("li",null,a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:y.a,alt:""}))))))),a.a.createElement("section",{id:"mission",className:"main special"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Mission")),a.a.createElement("ul",{className:"features"},a.a.createElement("li",null,a.a.createElement("span",{className:"icon major style1 fa-bullhorn"}),a.a.createElement("h3",null,"Spread Awareness"),a.a.createElement("p",null,a.a.createElement("p",null,"- Run awareness campaigns among children in various government and private schools and institutions about the perils of drug abuse, sexual harassment, hygiene, sanitization."),a.a.createElement("p",null,"- Sensitize communities against the evils of child labor and child marriage and help them develop strategies to avoid and battle them."),a.a.createElement("p",null,"Connect expecting mothers to pregnancy awareness and care programs to ensure proper pre- natal and post-natal development of infants."),a.a.createElement("p",null,"Run awareness campaigns among young girls on proper menstrual hygiene and encourage body positivity."))),a.a.createElement("li",null,a.a.createElement("span",{className:"icon major style3 fa-handshake-o"}),a.a.createElement("h3",null,"Provide guidance & skill training"),a.a.createElement("p",null,"Provide career guidance sessions to students of class 10 & 12 to help them select proper career paths according to their aptitude and interests and enable them to harness available resources and opportunities in that area."),a.a.createElement("p",null,"Provide vocational and life skill training to mid-teenage children in order to make them self sufficient."),a.a.createElement("p",null,"Train and encourage children to seek counselling-related help from authorities. We aim to break the taboos around mental health and disorders in the country- a major reason behind high suicide rates in children in India.")),a.a.createElement("li",null,a.a.createElement("span",{className:"icon major style5 fa-paste"}),a.a.createElement("h3",null,"Documentation"),a.a.createElement("p",null,"To ensure proper documentation of the families and the children like AADHAR, PAN card, ration card, birth certificates, school certificates, etc. It is often seen that children and their families are cut off from the welfare schemes due to faulty or incomplete documentations. This step would ensure that the individuals and the families get the sponsored care that they deserve."))),a.a.createElement("footer",{className:"major"},a.a.createElement("ul",{className:"actions"},a.a.createElement("li",null,a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:E.a,alt:""}))),a.a.createElement("li",null,a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:_.a,alt:""}))),a.a.createElement("li",null,a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:N.a,alt:""}))),a.a.createElement("li",null,a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:x.a,alt:""})))))),a.a.createElement("section",{id:"team",className:"main special"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Team"),"AHDC India was founded by Jamia alum Imran & Hashim, and run by a dedicated core team of members."),a.a.createElement("ul",{className:"features"},a.a.createElement("li",null,a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:c.a,alt:""})),a.a.createElement("h3",null,"Imran"),a.a.createElement("p",null,"Journalism Graduate- Bhimrao Ambedkar College, Delhi University Masters in Early Childhood Development and Research- Jamia Millia Islamia"),a.a.createElement("p",null,"Pursuing diploma in International Human Rights, Humanitarian and Refugee law from ISIL(Indian Society of International Law)"),a.a.createElement("p",null,a.a.createElement("i",null,"“No one should have the copyright on development. That was the idea behind founding AHDC in Mustafabad- the place where I come from and the place which needs it a lot. Our single minded mission is to facilitate the evolution of a more equal and developed society in this area.”"))),a.a.createElement("li",null,a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:p.a,alt:""})),a.a.createElement("h3",null,"Hashim"),a.a.createElement("p",null,"Journalism Graduate- Bhimrao Ambedkar College, Delhi University Masters in Early Childhood Development and Research- Jamia Millia Islamia"),a.a.createElement("p",null,a.a.createElement("i",null,'“It is my dream that every child in the area where I come from gets a fair chance of growth and development. I was inspired by my people to strive for higher education and now I want to create the same opportunity for the next generation of Mustafabad. "'))))),a.a.createElement("section",{id:"impact",className:"main special"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Impact & Campaigns"),a.a.createElement("p",null,"AHDC India has successfully conducted these drives & projects.")),a.a.createElement("ul",{className:"statistics"},a.a.createElement("li",{className:"style2"},a.a.createElement("a",{href:"/covid-ration"},a.a.createElement("strong",null,"COVID Ration ")," Drive ")),a.a.createElement("li",{className:"style5"},a.a.createElement("a",{href:"/riots-rehab-drive"},a.a.createElement("strong",null,"NE Delhi Pogrom 2020 Rehab ")," Drive ")),a.a.createElement("li",{className:"style4"},a.a.createElement("a",{href:"/food-drive"},a.a.createElement("strong",null,"Food ")," Drive ")),a.a.createElement("li",{className:"style3"},a.a.createElement("a",{href:"/blanket-drive"},a.a.createElement("strong",null,"Blanket ")," Drive ")),a.a.createElement("li",{className:"style1"},a.a.createElement("a",{href:"/cloth-drive"},a.a.createElement("strong",null,"Clothes ")," Drive "))),a.a.createElement("footer",{className:"major"},a.a.createElement("ul",{className:"actions"})))))},o}(a.a.Component);t.default=M},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},TSYQ:function(e,t,n){var o;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&e.push(i)}else if("object"===r)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},YIkO:function(e,t,n){"use strict";n("V+eJ"),n("dZ+Y"),n("bWfx"),n("2Spj"),n("LK8F"),n("HAE/");var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("pVnL")),r=o(n("lSNA")),i=o(n("RIqP")),l=o(n("lwsE")),s=o(n("a1gu")),c=o(n("Nsbk")),u=o(n("PJYZ")),p=o(n("W8MJ")),f=o(n("7W2i")),d=o(n("17x9")),m=o(n("q1tI")),h=o(n("TSYQ")),v=o(n("Fxm3"));var y=function(e){function t(e){var n;return(0,l.default)(this,t),(n=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,u.default)(n)),n}return(0,f.default)(t,e),(0,p.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.element]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,p.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var n=[],o=0,a=e.length;o<a;o++)n[o]=t;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],n=[],o=[],a=e||this.state.targetItems,r=!1,l=0,s=a.length;l<s;l++){var c=a[l],u=!r&&this._isInView(c);u?(r=!0,t.push(c)):n.push(c);var p=l===s-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&p&&f&&(n.pop(),n.push.apply(n,(0,i.default)(t)),t=[c],o=this._fillArray(o,!1),u=!0),o.push(u)}return{inView:t,outView:n,viewStatusList:o,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(o)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,n=this.props,o=n.rootEl,a=n.offset;o&&(t=document.querySelector(o).getBoundingClientRect());var r=e.getBoundingClientRect(),i=o?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,s=l+i,c=o?r.top+l-t.top+a:r.top+l+a,u=c+e.offsetHeight;return c<s&&u>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),n=t.scrollTop,o=t.scrollHeight;return n+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=o}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,n=this._getElemsViewState(e),o=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){t._update(o)}))}},{key:"_update",value:function(e){var t,n;(t=this.state.inViewState,n=e,t.length===n.length&&t.every((function(e,t){return e===n[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,n=this.props,o=n.children,i=n.className,l=n.scrolledPastClassName,s=n.style,c=0,u=m.default.Children.map(o,(function(t,n){var o;if(!t)return null;var i=t.type,s=l&&e.state.isScrolledPast[n],u=(0,h.default)((o={},(0,r.default)(o,"".concat(t.props.className),t.props.className),(0,r.default)(o,"".concat(e.props.currentClassName),e.state.inViewState[n]),(0,r.default)(o,"".concat(e.props.scrolledPastClassName),s),o));return m.default.createElement(i,(0,a.default)({},t.props,{className:u,key:c++}),t.props.children)})),p=(0,h.default)((0,r.default)({},"".concat(i),i));return m.default.createElement(t,{className:p,style:s},u)}}]),t}(m.default.Component);t.default=y},a1gu:function(e,t,n){var o=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?a(e):t}},bWV4:function(e,t,n){e.exports=n.p+"static/photo1-5ca1334202747bef2cd8d4a6aa36a745.jpg"},cDf5:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},dwco:function(e,t,n){n("Oyvg"),n("eM6i"),n("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var n,o=e.HTMLElement||e.Element,a={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||l,scrollIntoView:o.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):a.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?a.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=f(this),o=n.getBoundingClientRect(),r=this.getBoundingClientRect();n!==t.body?(m.call(this,n,n.scrollLeft+r.left-o.left,n.scrollTop+r.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function u(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function p(e){var t=c(e,"Y")&&u(e,"Y"),n=c(e,"X")&&u(e,"X");return t||n}function f(e){for(;e!==t.body&&!1===p(e);)e=e.parentNode||e.host;return e}function d(t){var n,o,a,i,l=(r()-t.startTime)/468;i=l=l>1?1:l,n=.5*(1-Math.cos(Math.PI*i)),o=t.startX+(t.x-t.startX)*n,a=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,a),o===t.x&&a===t.y||e.requestAnimationFrame(d.bind(e,t))}function m(n,o,i){var s,c,u,p,f=r();n===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,p=a.scroll):(s=n,c=n.scrollLeft,u=n.scrollTop,p=l),d({scrollable:s,method:p,startTime:f,startX:c,startY:u,x:o,y:i})}}}}()},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},owJ0:function(e,t,n){e.exports=n.p+"static/m2-355223a36147315dbe010644f88856d8.jpg"},qT12:function(e,t,n){"use strict";n("rE2o"),n("ioFf");var o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,f=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,g=o?Symbol.for("react.block"):60121,w=o?Symbol.for("react.fundamental"):60117,b=o?Symbol.for("react.responder"):60118,E=o?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case f:case i:case s:case l:case m:return e;default:switch(e=e&&e.$$typeof){case u:case d:case y:case v:case c:return e;default:return t}}case r:return t}}}function _(e){return S(e)===f}t.AsyncMode=p,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=c,t.Element=a,t.ForwardRef=d,t.Fragment=i,t.Lazy=y,t.Memo=v,t.Portal=r,t.Profiler=s,t.StrictMode=l,t.Suspense=m,t.isAsyncMode=function(e){return _(e)||S(e)===p},t.isConcurrentMode=_,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===y},t.isMemo=function(e){return S(e)===v},t.isPortal=function(e){return S(e)===r},t.isProfiler=function(e){return S(e)===s},t.isStrictMode=function(e){return S(e)===l},t.isSuspense=function(e){return S(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===s||e===l||e===m||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===v||e.$$typeof===c||e.$$typeof===u||e.$$typeof===d||e.$$typeof===w||e.$$typeof===b||e.$$typeof===E||e.$$typeof===g)},t.typeOf=S},rNfz:function(e,t,n){e.exports=n.p+"static/Hashim-ba543fe5f43d84e78b395936e0a18531.jpg"},uuth:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return y}));n("2Spj"),n("V+eJ"),n("/SS/"),n("hHhE"),n("HAE/");var o=n("1TsT"),a=(n("17x9"),n("q1tI")),r=n.n(a),i=n("TOwV");function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){var n,o=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof o)return o;var a=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof a?a*t:void 0}function f(e){return"string"==typeof e.type}var d;var m=[];function h(e){m.push(e),d||(d=setTimeout((function(){var e;for(d=null;e=m.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=m.indexOf(e);-1!==n&&(m.splice(n,1),!m.length&&d&&(clearTimeout(d),d=null))}}}var v={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},y=function(t){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,s(n).call(this,e))).refElement=function(e){t._ref=e},t}var a,d,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,t),a=n,(d=[{key:"componentDidMount",value:function(){var e=this;n.getWindow()&&(this.cancelOnNextTick=h((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug,function(e,t){if(e&&!f(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(o.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(o.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var e=this;n.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=h((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){n.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var t=this.props,n=t.horizontal,o=t.scrollableAncestor;if(o)return function(t){return"window"===t?e.window:t}(o);for(var a=this._ref;a.parentNode;){if((a=a.parentNode)===document.body)return window;var r=window.getComputedStyle(a),i=(n?r.getPropertyValue("overflow-x"):r.getPropertyValue("overflow-y"))||r.getPropertyValue("overflow");if("auto"===i||"scroll"===i)return a}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?"invisible":e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?"inside":e.viewportBottom<e.waypointTop?"below":e.waypointTop<e.viewportTop?"above":"invisible"}(t),o=this._previousPosition,a=this.props,r=(a.debug,a.onPositionChange),i=a.onEnter,l=a.onLeave,s=a.fireOnRapidScroll;if(this._previousPosition=n,o!==n){var c={currentPosition:n,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};r.call(this,c),"inside"===n?i.call(this,c):"inside"===o&&l.call(this,c),s&&("below"===o&&"above"===n||"above"===o&&"below"===n)&&(i.call(this,{currentPosition:"inside",previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),l.call(this,{currentPosition:n,previousPosition:"inside",event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,n=this.props,o=n.horizontal,a=(n.debug,this._ref.getBoundingClientRect()),r=a.left,i=a.top,l=a.right,s=a.bottom,c=o?r:i,u=o?l:s;this.scrollableAncestor===window?(e=o?window.innerWidth:window.innerHeight,t=0):(e=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var f=this.props,d=f.bottomOffset;return{waypointTop:c,waypointBottom:u,viewportTop:t+p(f.topOffset,e),viewportBottom:t+e-p(d,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;return t?f(t)||Object(i.isForwardRef)(t)?r.a.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}}):r.a.cloneElement(t,{innerRef:this.refElement}):r.a.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&l(a.prototype,d),m&&l(a,m),n}(r.a.PureComponent);y.above="above",y.below="below",y.inside="inside",y.invisible="invisible",y.getWindow=function(){if("undefined"!=typeof window)return window},y.defaultProps=v,y.displayName="Waypoint"}).call(this,n("yLpj"))},v3Ww:function(e,t,n){e.exports=n.p+"static/Imran-5230ee2ecc95dfe80c99c855d7087003.jpg"},wcJY:function(e,t,n){e.exports=n.p+"static/m4-64bdf3b6447ae6da8abe8ed68a502a60.jpg"},z6TK:function(e,t,n){e.exports=n.p+"static/note1-2c664d20fd7058e6460f9c68ad2e0a4f.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-cb7e6a2c3d715307ce9e.js.map