!function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{__UNSTABLE_LINE_SEPARATOR:function(){return _},__experimentalRichText:function(){return at},__unstableCanIndentListItems:function(){return je},__unstableCanOutdentListItems:function(){return Ie},__unstableChangeListType:function(){return He},__unstableCreateElement:function(){return w},__unstableFormatEdit:function(){return ot},__unstableIndentListItems:function(){return Pe},__unstableInsertLineSeparator:function(){return ee},__unstableIsActiveListType:function(){return H},__unstableIsEmptyLine:function(){return U},__unstableIsListRootSelected:function(){return K},__unstableOutdentListItems:function(){return Ke},__unstableRemoveLineSeparator:function(){return te},__unstableToDom:function(){return be},__unstableUseRichText:function(){return rt},applyFormat:function(){return x},concat:function(){return M},create:function(){return L},getActiveFormat:function(){return j},getActiveObject:function(){return I},getTextContent:function(){return P},insert:function(){return Z},insertObject:function(){return ne},isCollapsed:function(){return B},isEmpty:function(){return z},join:function(){return q},registerFormatType:function(){return X},remove:function(){return J},removeFormat:function(){return Y},replace:function(){return Q},slice:function(){return re},split:function(){return ae},store:function(){return y},toHTMLString:function(){return we},toggleFormat:function(){return Me},unregisterFormatType:function(){return $e},useAnchorRef:function(){return ze}});var n={};e.r(n),e.d(n,{getFormatType:function(){return m},getFormatTypeForBareElement:function(){return p},getFormatTypeForClassName:function(){return g},getFormatTypes:function(){return d}});var r={};e.r(r),e.d(r,{addFormatTypes:function(){return h},removeFormatTypes:function(){return v}});var a,o,i=window.wp.data,s=window.lodash,c=(0,i.combineReducers)({formatTypes:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FORMAT_TYPES":return{...e,...(0,s.keyBy)(t.formatTypes,"name")};case"REMOVE_FORMAT_TYPES":return(0,s.omit)(e,t.names)}return e}});function l(e){return[e]}function u(){var e={clear:function(){e.head=null}};return e}function f(e,t,n){var r;if(e.length!==t.length)return!1;for(r=n;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}a={},o="undefined"!=typeof WeakMap;const d=function(e,t){var n,r;function i(){n=o?new WeakMap:u()}function s(){var n,a,o,i,s,c=arguments.length;for(i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];for(s=t.apply(null,i),(n=r(s)).isUniqueByDependants||(n.lastDependants&&!f(s,n.lastDependants,0)&&n.clear(),n.lastDependants=s),a=n.head;a;){if(f(a.args,i,1))return a!==n.head&&(a.prev.next=a.next,a.next&&(a.next.prev=a.prev),a.next=n.head,a.prev=null,n.head.prev=a,n.head=a),a.val;a=a.next}return a={val:e.apply(null,i)},i[0]=null,a.args=i,n.head&&(n.head.prev=a,a.next=n.head),n.head=a,a.val}return t||(t=l),r=o?function(e){var t,r,o,i,s,c=n,l=!0;for(t=0;t<e.length;t++){if(!(s=r=e[t])||"object"!=typeof s){l=!1;break}c.has(r)?c=c.get(r):(o=new WeakMap,c.set(r,o),c=o)}return c.has(a)||((i=u()).isUniqueByDependants=l,c.set(a,i)),c.get(a)}:function(){return n},s.getDependants=t,s.clear=i,i(),s}((e=>Object.values(e.formatTypes)),(e=>[e.formatTypes]));function m(e,t){return e.formatTypes[t]}function p(e,t){return(0,s.find)(d(e),(e=>{let{className:n,tagName:r}=e;return null===n&&t===r}))}function g(e,t){return(0,s.find)(d(e),(e=>{let{className:n}=e;return null!==n&&` ${t} `.indexOf(` ${n} `)>=0}))}function h(e){return{type:"ADD_FORMAT_TYPES",formatTypes:(0,s.castArray)(e)}}function v(e){return{type:"REMOVE_FORMAT_TYPES",names:(0,s.castArray)(e)}}const y=(0,i.createReduxStore)("core/rich-text",{reducer:c,selectors:n,actions:r});function b(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.type!==t.type)return!1;const n=e.attributes,r=t.attributes;if(n===r)return!0;if(!n||!r)return!1;const a=Object.keys(n),o=Object.keys(r);if(a.length!==o.length)return!1;const i=a.length;for(let e=0;e<i;e++){const t=a[e];if(n[t]!==r[t])return!1}return!0}function T(e){const t=e.formats.slice();return t.forEach(((e,n)=>{const r=t[n-1];if(r){const a=e.slice();a.forEach(((e,t)=>{const n=r[t];b(e,n)&&(a[t]=n)})),t[n]=a}})),{...e,formats:t}}function E(e,t,n){return(e=e.slice())[t]=n,e}function x(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.start,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.end;const{formats:a,activeFormats:o}=e,i=a.slice();if(n===r){const e=(0,s.find)(i[n],{type:t.type});if(e){const a=i[n].indexOf(e);for(;i[n]&&i[n][a]===e;)i[n]=E(i[n],a,t),n--;for(r++;i[r]&&i[r][a]===e;)i[r]=E(i[r],a,t),r++}}else{let e=1/0;for(let a=n;a<r;a++)if(i[a]){i[a]=i[a].filter((e=>{let{type:n}=e;return n!==t.type}));const n=i[a].length;n<e&&(e=n)}else i[a]=[],e=0;for(let a=n;a<r;a++)i[a].splice(e,0,t)}return T({...e,formats:i,activeFormats:[...(0,s.reject)(o,{type:t.type}),t]})}function w(e,t){let{implementation:n}=e;return w.body||(w.body=n.createHTMLDocument("").body),w.body.innerHTML=t,w.body}(0,i.register)(y);const _="\u2028",C="￼";function F(e){let t,{type:n,attributes:r}=e;if(r&&r.class&&(t=(0,i.select)(y).getFormatTypeForClassName(r.class),t&&(r.class=` ${r.class} `.replace(` ${t.className} `," ").trim(),r.class||delete r.class)),t||(t=(0,i.select)(y).getFormatTypeForBareElement(n)),!t)return r?{type:n,attributes:r}:{type:n};if(t.__experimentalCreatePrepareEditableTree&&!t.__experimentalCreateOnChangeEditableValue)return null;if(!r)return{type:t.name};const a={},o={},s={...r};for(const e in t.attributes){const n=t.attributes[e];a[e]=s[n],t.__unstableFilterAttributeValue&&(a[e]=t.__unstableFilterAttributeValue(e,a[e])),delete s[n],void 0===a[e]&&delete a[e]}for(const e in s)o[e]=r[e];return{type:t.name,attributes:a,unregisteredAttributes:o}}function L(){let{element:e,text:t,html:n,range:r,multilineTag:a,multilineWrapperTags:o,__unstableIsEditableTree:i,preserveWhiteSpace:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"string"==typeof t&&t.length>0?{formats:Array(t.length),replacements:Array(t.length),text:t}:("string"==typeof n&&n.length>0&&(e=w(document,n)),"object"!=typeof e?{formats:[],replacements:[],text:""}:a?D({element:e,range:r,multilineTag:a,multilineWrapperTags:o,isEditableTree:i,preserveWhiteSpace:s}):O({element:e,range:r,isEditableTree:i,preserveWhiteSpace:s}))}function R(e,t,n,r){if(!n)return;const{parentNode:a}=t,{startContainer:o,startOffset:i,endContainer:s,endOffset:c}=n,l=e.text.length;void 0!==r.start?e.start=l+r.start:t===o&&t.nodeType===t.TEXT_NODE?e.start=l+i:a===o&&t===o.childNodes[i]?e.start=l:a===o&&t===o.childNodes[i-1]?e.start=l+r.text.length:t===o&&(e.start=l),void 0!==r.end?e.end=l+r.end:t===s&&t.nodeType===t.TEXT_NODE?e.end=l+c:a===s&&t===s.childNodes[c-1]?e.end=l+r.text.length:a===s&&t===s.childNodes[c]?e.end=l:t===s&&(e.end=l+c)}function A(e,t,n){if(!t)return;const{startContainer:r,endContainer:a}=t;let{startOffset:o,endOffset:i}=t;return e===r&&(o=n(e.nodeValue.slice(0,o)).length),e===a&&(i=n(e.nodeValue.slice(0,i)).length),{startContainer:r,startOffset:o,endContainer:a,endOffset:i}}function N(e){return e.replace(/[\n\r\t]+/g," ")}function S(e){return e.replace(new RegExp("[\ufeff￼]","gu"),"")}function O(e){let{element:t,range:n,multilineTag:r,multilineWrapperTags:a,currentWrapperTags:o=[],isEditableTree:i,preserveWhiteSpace:s}=e;const c={formats:[],replacements:[],text:""};if(!t)return c;if(!t.hasChildNodes())return R(c,t,n,{formats:[],replacements:[],text:""}),c;const l=t.childNodes.length;for(let e=0;e<l;e++){const l=t.childNodes[e],u=l.nodeName.toLowerCase();if(l.nodeType===l.TEXT_NODE){let e=S;s||(e=e=>S(N(e)));const t=e(l.nodeValue);n=A(l,n,e),R(c,l,n,{text:t}),c.formats.length+=t.length,c.replacements.length+=t.length,c.text+=t;continue}if(l.nodeType!==l.ELEMENT_NODE)continue;if(i&&(l.getAttribute("data-rich-text-placeholder")||"br"===u&&!l.getAttribute("data-rich-text-line-break"))){R(c,l,n,{formats:[],replacements:[],text:""});continue}if("script"===u){const e={formats:[,],replacements:[{type:u,attributes:{"data-rich-text-script":l.getAttribute("data-rich-text-script")||encodeURIComponent(l.innerHTML)}}],text:C};R(c,l,n,e),W(c,e);continue}if("br"===u){R(c,l,n,{formats:[],replacements:[],text:""}),W(c,L({text:"\n"}));continue}const f=F({type:u,attributes:k({element:l})});if(a&&-1!==a.indexOf(u)){const e=D({element:l,range:n,multilineTag:r,multilineWrapperTags:a,currentWrapperTags:[...o,f],isEditableTree:i,preserveWhiteSpace:s});R(c,l,n,e),W(c,e);continue}const d=O({element:l,range:n,multilineTag:r,multilineWrapperTags:a,isEditableTree:i,preserveWhiteSpace:s});if(R(c,l,n,d),f)if(0===d.text.length)f.attributes&&W(c,{formats:[,],replacements:[f],text:C});else{function e(t){if(e.formats===t)return e.newFormats;const n=t?[f,...t]:[f];return e.formats=t,e.newFormats=n,n}e.newFormats=[f],W(c,{...d,formats:Array.from(d.formats,e)})}else W(c,d)}return c}function D(e){let{element:t,range:n,multilineTag:r,multilineWrapperTags:a,currentWrapperTags:o=[],isEditableTree:i,preserveWhiteSpace:s}=e;const c={formats:[],replacements:[],text:""};if(!t||!t.hasChildNodes())return c;const l=t.children.length;for(let e=0;e<l;e++){const l=t.children[e];if(l.nodeName.toLowerCase()!==r)continue;const u=O({element:l,range:n,multilineTag:r,multilineWrapperTags:a,currentWrapperTags:o,isEditableTree:i,preserveWhiteSpace:s});(0!==e||o.length>0)&&W(c,{formats:[,],replacements:o.length>0?[o]:[,],text:_}),R(c,l,n,u),W(c,u)}return c}function k(e){let{element:t}=e;if(!t.hasAttributes())return;const n=t.attributes.length;let r;for(let e=0;e<n;e++){const{name:n,value:a}=t.attributes[e];0!==n.indexOf("data-rich-text-")&&(r=r||{},r[/^on/i.test(n)?"data-disable-rich-text-"+n:n]=a)}return r}function W(e,t){return e.formats=e.formats.concat(t.formats),e.replacements=e.replacements.concat(t.replacements),e.text+=t.text,e}function M(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return T(t.reduce(W,L()))}function $(e){let{formats:t,start:n,end:r,activeFormats:a}=e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===n)return o;if(n===r){if(a)return a;const e=t[n-1]||o,r=t[n]||o;return e.length<r.length?e:r}return t[n]||o}function j(e,t){return(0,s.find)($(e),{type:t})}function I(e){let{start:t,end:n,replacements:r,text:a}=e;if(t+1===n&&a[t]===C)return r[t]}function P(e){let{text:t}=e;return t.replace(new RegExp(C,"g"),"").replace(new RegExp(_,"g"),"\n")}function V(e){let{start:t,text:n}=e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a=r;for(;a--;)if(n[a]===_)return a}function K(e){const{replacements:t,start:n}=e,r=t[V(e,n)];return!r||r.length<1}function H(e,t,n){const{replacements:r,start:a}=e,o=r[V(e,a)];return o&&0!==o.length?o[o.length-1].type===t:t===n}function B(e){let{start:t,end:n}=e;if(void 0!==t&&void 0!==n)return t===n}function z(e){let{text:t}=e;return 0===t.length}function U(e){let{text:t,start:n,end:r}=e;return n===r&&(0===t.length||0===n&&t.slice(0,1)===_||n===t.length&&t.slice(-1)===_||t.slice(n-1,r+1)===`${_}${_}`)}function q(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"string"==typeof t&&(t=L({text:t})),T(e.reduce(((e,n)=>{let{formats:r,replacements:a,text:o}=n;return{formats:e.formats.concat(t.formats,r),replacements:e.replacements.concat(t.replacements,a),text:e.text+t.text+o}})))}function X(e,t){if("string"==typeof(t={name:e,...t}).name)if(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test(t.name))if((0,i.select)(y).getFormatType(t.name))window.console.error('Format "'+t.name+'" is already registered.');else if("string"==typeof t.tagName&&""!==t.tagName)if("string"==typeof t.className&&""!==t.className||null===t.className)if(/^[_a-zA-Z]+[a-zA-Z0-9-]*$/.test(t.className)){if(null===t.className){const e=(0,i.select)(y).getFormatTypeForBareElement(t.tagName);if(e)return void window.console.error(`Format "${e.name}" is already registered to handle bare tag name "${t.tagName}".`)}else{const e=(0,i.select)(y).getFormatTypeForClassName(t.className);if(e)return void window.console.error(`Format "${e.name}" is already registered to handle class name "${t.className}".`)}if("title"in t&&""!==t.title)if("keywords"in t&&t.keywords.length>3)window.console.error('The format "'+t.name+'" can have a maximum of 3 keywords.');else{if("string"==typeof t.title)return(0,i.dispatch)(y).addFormatTypes(t),t;window.console.error("Format titles must be strings.")}else window.console.error('The format "'+t.name+'" must have a title.')}else window.console.error("A class name must begin with a letter, followed by any number of hyphens, letters, or numbers.");else window.console.error("Format class names must be a string, or null to handle bare elements.");else window.console.error("Format tag names must be a string.");else window.console.error("Format names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, and start with a letter. Example: my-plugin/my-custom-format");else window.console.error("Format names must be strings.")}function Y(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.start,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.end;const{formats:a,activeFormats:o}=e,i=a.slice();if(n===r){const e=(0,s.find)(i[n],{type:t});if(e){for(;(0,s.find)(i[n],e);)G(i,n,t),n--;for(r++;(0,s.find)(i[r],e);)G(i,r,t),r++}}else for(let e=n;e<r;e++)i[e]&&G(i,e,t);return T({...e,formats:i,activeFormats:(0,s.reject)(o,{type:t})})}function G(e,t,n){const r=e[t].filter((e=>{let{type:t}=e;return t!==n}));r.length?e[t]=r:delete e[t]}function Z(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.start,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.end;const{formats:a,replacements:o,text:i}=e;"string"==typeof t&&(t=L({text:t}));const s=n+t.text.length;return T({formats:a.slice(0,n).concat(t.formats,a.slice(r)),replacements:o.slice(0,n).concat(t.replacements,o.slice(r)),text:i.slice(0,n)+t.text+i.slice(r),start:s,end:s})}function J(e,t,n){return Z(e,L(),t,n)}function Q(e,t,n){let{formats:r,replacements:a,text:o,start:i,end:s}=e;return o=o.replace(t,(function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),c=1;c<t;c++)o[c-1]=arguments[c];const l=o[o.length-2];let u,f,d=n;return"function"==typeof d&&(d=n(e,...o)),"object"==typeof d?(u=d.formats,f=d.replacements,d=d.text):(u=Array(d.length),f=Array(d.length),r[l]&&(u=u.fill(r[l]))),r=r.slice(0,l).concat(u,r.slice(l+e.length)),a=a.slice(0,l).concat(f,a.slice(l+e.length)),i&&(i=s=l+d.length),d})),T({formats:r,replacements:a,text:o,start:i,end:s})}function ee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.start,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.end;const r=e.text.slice(0,t),a=r.lastIndexOf(_),o=e.replacements[a];let i=[,];o&&(i=[o]);const s={formats:[,],replacements:i,text:_};return Z(e,s,t,n)}function te(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{replacements:n,text:r,start:a,end:o}=e,i=B(e);let s,c=a-1,l=i?a-1:a,u=o;if(t||(c=o,l=a,u=i?o+1:o),r[c]===_){if(i&&n[c]&&n[c].length){const t=n.slice();t[c]=n[c].slice(0,-1),s={...e,replacements:t}}else s=J(e,l,u);return s}}function ne(e,t,n,r){return Z(e,{formats:[,],replacements:[t],text:C},n,r)}function re(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.start,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.end;const{formats:r,replacements:a,text:o}=e;return void 0===t||void 0===n?{...e}:{formats:r.slice(t,n),replacements:a.slice(t,n),text:o.slice(t,n)}}function ae(e,t){let{formats:n,replacements:r,text:a,start:o,end:i}=e;if("string"!=typeof t)return oe(...arguments);let s=0;return a.split(t).map((e=>{const a=s,c={formats:n.slice(a,a+e.length),replacements:r.slice(a,a+e.length),text:e};return s+=t.length+e.length,void 0!==o&&void 0!==i&&(o>=a&&o<s?c.start=o-a:o<a&&i>a&&(c.start=0),i>=a&&i<s?c.end=i-a:o<s&&i>s&&(c.end=e.length)),c}))}function oe(e){let{formats:t,replacements:n,text:r,start:a,end:o}=e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;if(void 0===a||void 0===o)return;const c={formats:t.slice(0,i),replacements:n.slice(0,i),text:r.slice(0,i)},l={formats:t.slice(s),replacements:n.slice(s),text:r.slice(s),start:0,end:0};return[Q(c,/\u2028+$/,""),Q(l,/^\u2028+/,"")]}function ie(e,t){if(t)return e;const n={};for(const t in e){let r=t;t.startsWith("data-disable-rich-text-")&&(r=t.slice("data-disable-rich-text-".length)),n[r]=e[t]}return n}function se(e){let{type:t,attributes:n,unregisteredAttributes:r,object:a,boundaryClass:o,isEditableTree:s}=e;const c=(l=t,(0,i.select)(y).getFormatType(l));var l;let u={};if(o&&(u["data-rich-text-format-boundary"]="true"),!c)return n&&(u={...n,...u}),{type:t,attributes:ie(u,s),object:a};u={...r,...u};for(const e in n){const t=!!c.attributes&&c.attributes[e];t?u[t]=n[e]:u[e]=n[e]}return c.className&&(u.class?u.class=`${c.className} ${u.class}`:u.class=c.className),{type:c.tagName,object:c.object,attributes:ie(u,s)}}function ce(e,t,n){do{if(e[n]!==t[n])return!1}while(n--);return!0}function le(e){let{value:t,multilineTag:n,preserveWhiteSpace:r,createEmpty:a,append:o,getLastChild:i,getParent:s,isText:c,getText:l,remove:u,appendText:f,onStartIndex:d,onEndIndex:m,isEditableTree:p,placeholder:g}=e;const{formats:h,replacements:v,text:y,start:b,end:T}=t,E=h.length+1,x=a(),w={type:n},F=$(t),L=F[F.length-1];let R,A,N;n?(o(o(x,{type:n}),""),A=R=[w]):o(x,"");for(let e=0;e<E;e++){const t=y.charAt(e),a=p&&(!N||N===_||"\n"===N);let E=h[e];n&&(E=t===_?R=(v[e]||[]).reduce(((e,t)=>(e.push(t,w),e)),[w]):[...R,...E||[]]);let F=i(x);if(a&&t===_){let e=F;for(;!c(e);)e=i(e);o(s(e),"\ufeff")}if(N===_){let t=F;for(;!c(t);)t=i(t);d&&b===e&&d(x,t),m&&T===e&&m(x,t)}var S;if(E&&E.forEach(((e,n)=>{if(F&&A&&ce(E,A,n)&&(t!==_||E.length-1!==n))return void(F=i(F));const{type:r,attributes:a,unregisteredAttributes:f}=e,d=p&&t!==_&&e===L,m=s(F),g=o(m,se({type:r,attributes:a,unregisteredAttributes:f,boundaryClass:d,isEditableTree:p}));c(F)&&0===l(F).length&&u(F),F=o(g,"")})),t!==_)0===e&&(d&&0===b&&d(x,F),m&&0===T&&m(x,F)),t===C?(p||"script"!==(null===(S=v[e])||void 0===S?void 0:S.type)?F=o(s(F),se({...v[e],object:!0,isEditableTree:p})):(F=o(s(F),se({type:"script",isEditableTree:p})),o(F,{html:decodeURIComponent(v[e].attributes["data-rich-text-script"])})),F=o(s(F),"")):r||"\n"!==t?c(F)?f(F,t):F=o(s(F),t):(F=o(s(F),{type:"br",attributes:p?{"data-rich-text-line-break":"true"}:void 0,object:!0}),F=o(s(F),"")),d&&b===e+1&&d(x,F),m&&T===e+1&&m(x,F),a&&e===y.length&&(o(s(F),"\ufeff"),g&&0===y.length&&o(s(F),{type:"span",attributes:{"data-rich-text-placeholder":g,contenteditable:"false",style:"pointer-events:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;"}})),A=E,N=t;else A=E,N=t}return x}function ue(e,t,n){const r=e.parentNode;let a=0;for(;e=e.previousSibling;)a++;return n=[a,...n],r!==t&&(n=ue(r,t,n)),n}function fe(e,t){for(t=[...t];e&&t.length>1;)e=e.childNodes[t.shift()];return{node:e,offset:t[0]}}function de(e,t){"string"==typeof t&&(t=e.ownerDocument.createTextNode(t));const{type:n,attributes:r}=t;if(n){t=e.ownerDocument.createElement(n);for(const e in r)t.setAttribute(e,r[e])}return e.appendChild(t)}function me(e,t){e.appendData(t)}function pe(e){let{lastChild:t}=e;return t}function ge(e){let{parentNode:t}=e;return t}function he(e){return e.nodeType===e.TEXT_NODE}function ve(e){let{nodeValue:t}=e;return t}function ye(e){return e.parentNode.removeChild(e)}function be(e){let{value:t,multilineTag:n,prepareEditableTree:r,isEditableTree:a=!0,placeholder:o,doc:i=document}=e,s=[],c=[];return r&&(t={...t,formats:r(t)}),{body:le({value:t,multilineTag:n,createEmpty:()=>w(i,""),append:de,getLastChild:pe,getParent:ge,isText:he,getText:ve,remove:ye,appendText:me,onStartIndex(e,t){s=ue(t,e,[t.nodeValue.length])},onEndIndex(e,t){c=ue(t,e,[t.nodeValue.length])},isEditableTree:a,placeholder:o}),selection:{startPath:s,endPath:c}}}function Te(e){let{value:t,current:n,multilineTag:r,prepareEditableTree:a,__unstableDomOnly:o,placeholder:i}=e;const{body:s,selection:c}=be({value:t,multilineTag:r,prepareEditableTree:a,placeholder:i,doc:n.ownerDocument});Ee(s,n),void 0===t.start||o||function(e,t){let{startPath:n,endPath:r}=e;const{node:a,offset:o}=fe(t,n),{node:i,offset:s}=fe(t,r),{ownerDocument:c}=t,{defaultView:l}=c,u=l.getSelection(),f=c.createRange();f.setStart(a,o),f.setEnd(i,s);const{activeElement:d}=c;if(u.rangeCount>0){if(m=f,p=u.getRangeAt(0),m.startContainer===p.startContainer&&m.startOffset===p.startOffset&&m.endContainer===p.endContainer&&m.endOffset===p.endOffset)return;u.removeAllRanges()}var m,p;u.addRange(f),d!==c.activeElement&&d instanceof l.HTMLElement&&d.focus()}(c,n)}function Ee(e,t){let n,r=0;for(;n=e.firstChild;){const a=t.childNodes[r];if(a)if(a.isEqualNode(n))e.removeChild(n);else if(a.nodeName!==n.nodeName||a.nodeType===a.TEXT_NODE&&a.data!==n.data)t.replaceChild(n,a);else{const t=a.attributes,r=n.attributes;if(t){let e=t.length;for(;e--;){const{name:r}=t[e];n.getAttribute(r)||a.removeAttribute(r)}}if(r)for(let e=0;e<r.length;e++){const{name:t,value:n}=r[e];a.getAttribute(t)!==n&&a.setAttribute(t,n)}Ee(n,a),e.removeChild(n)}else t.appendChild(n);r++}for(;t.childNodes[r];)t.removeChild(t.childNodes[r])}var xe=window.wp.escapeHtml;function we(e){let{value:t,multilineTag:n,preserveWhiteSpace:r}=e;return De(le({value:t,multilineTag:n,preserveWhiteSpace:r,createEmpty:_e,append:Fe,getLastChild:Ce,getParent:Re,isText:Ae,getText:Ne,remove:Se,appendText:Le}).children)}function _e(){return{}}function Ce(e){let{children:t}=e;return t&&t[t.length-1]}function Fe(e,t){return"string"==typeof t&&(t={text:t}),t.parent=e,e.children=e.children||[],e.children.push(t),t}function Le(e,t){e.text+=t}function Re(e){let{parent:t}=e;return t}function Ae(e){let{text:t}=e;return"string"==typeof t}function Ne(e){let{text:t}=e;return t}function Se(e){const t=e.parent.children.indexOf(e);return-1!==t&&e.parent.children.splice(t,1),e}function Oe(e){let{type:t,attributes:n,object:r,children:a}=e,o="";for(const e in n)(0,xe.isValidAttributeName)(e)&&(o+=` ${e}="${(0,xe.escapeAttribute)(n[e])}"`);return r?`<${t}${o}>`:`<${t}${o}>${De(a)}</${t}>`}function De(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((e=>void 0!==e.html?e.html:void 0===e.text?Oe(e):(0,xe.escapeEditableHTML)(e.text))).join("")}var ke=window.wp.a11y,We=window.wp.i18n;function Me(e,t){return j(e,t.type)?(t.title&&
// translators: %s: title of the formatting control
(0,ke.speak)((0,We.sprintf)((0,We.__)("%s removed."),t.title),"assertive"),Y(e,t.type)):(t.title&&
// translators: %s: title of the formatting control
(0,ke.speak)((0,We.sprintf)((0,We.__)("%s applied."),t.title),"assertive"),x(e,t))}function $e(e){const t=(0,i.select)(y).getFormatType(e);if(t)return(0,i.dispatch)(y).removeFormatTypes(e),t;window.console.error(`Format ${e} is not registered.`)}function je(e){const t=V(e);if(void 0===t)return!1;const{replacements:n}=e,r=V(e,t),a=n[t]||[],o=n[r]||[];return a.length<=o.length}function Ie(e){const{replacements:t,start:n}=e;return void 0!==t[V(e,n)]}function Pe(e,t){if(!je(e))return e;const n=V(e),r=V(e,n),{text:a,replacements:o,end:i}=e,s=o.slice(),c=function(e,t){let{text:n,replacements:r}=e;const a=r[t]||[];let o=t;for(;o-- >=0;){if(n[o]!==_)continue;const e=r[o]||[];if(e.length===a.length+1)return o;if(e.length<=a.length)return}}(e,n);for(let e=n;e<i;e++)if(a[e]===_)if(c){const t=o[c]||[];s[e]=t.concat((s[e]||[]).slice(t.length-1))}else{const n=o[r]||[],a=n[n.length-1]||t;s[e]=n.concat([a],(s[e]||[]).slice(n.length))}return{...e,replacements:s}}function Ve(e,t){let{text:n,replacements:r}=e;const a=r[t]||[];let o=t;for(;o-- >=0;)if(n[o]===_&&(r[o]||[]).length===a.length-1)return o}function Ke(e){if(!Ie(e))return e;const{text:t,replacements:n,start:r,end:a}=e,o=V(e,r),i=n.slice(0),s=n[Ve(e,o)]||[],c=function(e,t){let{text:n,replacements:r}=e;const a=r[t]||[];let o=t;for(let e=t||0;e<n.length;e++)if(n[e]===_){if(!((r[e]||[]).length>=a.length))return o;o=e}return o}(e,V(e,a));for(let e=o;e<=c;e++){if(t[e]!==_)continue;const n=i[e]||[];i[e]=s.concat(n.slice(s.length+1)),0===i[e].length&&delete i[e]}return{...e,replacements:i}}function He(e,t){const{text:n,replacements:r,start:a,end:o}=e,i=V(e,a),s=r[i]||[],c=r[V(e,o)]||[],l=Ve(e,i),u=r.slice(),f=s.length-1,d=c.length-1;let m;for(let e=l+1||0;e<n.length;e++)if(n[e]===_){if((u[e]||[]).length<=f)break;u[e]&&(m=!0,u[e]=u[e].map(((e,n)=>n<f||n>d?e:t)))}return m?{...e,replacements:u}:e}var Be=window.wp.element;function ze(e){let{ref:t,value:n,settings:r={}}=e;const{tagName:a,className:o,name:i}=r,s=i?j(n,i):void 0;return(0,Be.useMemo)((()=>{if(!t.current)return;const{ownerDocument:{defaultView:e}}=t.current,n=e.getSelection();if(!n.rangeCount)return;const r=n.getRangeAt(0);if(!s)return r;let i=r.startContainer;for(i=i.nextElementSibling||i;i.nodeType!==i.ELEMENT_NODE;)i=i.parentNode;return i.closest(a+(o?"."+o:""))}),[s,n.start,n.end,a,o])}var Ue=window.wp.compose;function qe(e){let{record:t}=e;const n=(0,Be.useRef)(),{activeFormats:r=[]}=t.current;return(0,Be.useEffect)((()=>{if(!r||!r.length)return;const e="*[data-rich-text-format-boundary]",t=n.current.querySelector(e);if(!t)return;const{ownerDocument:a}=t,{defaultView:o}=a,i=`.rich-text:focus ${e} {background-color: ${o.getComputedStyle(t).color.replace(")",", 0.2)").replace("rgb","rgba")}}`,s="rich-text-boundary-style";let c=a.getElementById(s);c||(c=a.createElement("style"),c.id=s,a.head.appendChild(c)),c.innerHTML!==i&&(c.innerHTML=i)}),[r]),n}function Xe(e){const t=(0,Be.useRef)(e);return t.current=e,(0,Ue.useRefEffect)((e=>{function n(n){const{record:r,multilineTag:a,preserveWhiteSpace:o}=t.current;if(B(r.current)||!e.contains(e.ownerDocument.activeElement))return;const i=re(r.current),s=P(i),c=we({value:i,multilineTag:a,preserveWhiteSpace:o});n.clipboardData.setData("text/plain",s),n.clipboardData.setData("text/html",c),n.clipboardData.setData("rich-text","true"),n.clipboardData.setData("rich-text-multi-line-tag",a||""),n.preventDefault()}return e.addEventListener("copy",n),()=>{e.removeEventListener("copy",n)}}),[])}var Ye=window.wp.keycodes;const Ge=[];function Ze(e){const[,t]=(0,Be.useReducer)((()=>({}))),n=(0,Be.useRef)(e);return n.current=e,(0,Ue.useRefEffect)((e=>{function r(r){const{keyCode:a,shiftKey:o,altKey:i,metaKey:s,ctrlKey:c}=r;if(o||i||s||c||a!==Ye.LEFT&&a!==Ye.RIGHT)return;const{record:l,applyRecord:u}=n.current,{text:f,formats:d,start:m,end:p,activeFormats:g=[]}=l.current,h=B(l.current),{ownerDocument:v}=e,{defaultView:y}=v,{direction:b}=y.getComputedStyle(e),T="rtl"===b?Ye.RIGHT:Ye.LEFT,E=r.keyCode===T;if(h&&0===g.length){if(0===m&&E)return;if(p===f.length&&!E)return}if(!h)return;const x=d[m-1]||Ge,w=d[m]||Ge,_=E?x:w,C=g.every(((e,t)=>e===_[t]));let F=g.length;if(C?F<_.length&&F++:F--,F===g.length)return void(l.current._newActiveFormats=_);r.preventDefault();const L=(C?_:E?w:x).slice(0,F),R={...l.current,activeFormats:L};l.current=R,u(R),t()}return e.addEventListener("keydown",r),()=>{e.removeEventListener("keydown",r)}}),[])}function Je(e){const t=(0,Be.useRef)(e);return t.current=e,(0,Ue.useRefEffect)((e=>{function n(n){const{keyCode:r,shiftKey:a,altKey:o,metaKey:i,ctrlKey:s}=n,{multilineTag:c,createRecord:l,handleChange:u}=t.current;if(a||o||i||s||r!==Ye.SPACE||"li"!==c)return;const f=l();if(!B(f))return;const{text:d,start:m}=f,p=d[m-1];p&&p!==_||(u(Pe(f,{type:e.tagName.toLowerCase()})),n.preventDefault())}return e.addEventListener("keydown",n),()=>{e.removeEventListener("keydown",n)}}),[])}const Qe=new Set(["insertParagraph","insertOrderedList","insertUnorderedList","insertHorizontalRule","insertLink"]),et=[];function tt(e){const t=(0,Be.useRef)(e);return t.current=e,(0,Ue.useRefEffect)((e=>{const{ownerDocument:n}=e,{defaultView:r}=n;let a,o=!1;function i(e){if(o)return;let n;e&&(n=e.inputType);const{record:r,applyRecord:a,createRecord:i,handleChange:s}=t.current;if(n&&(0===n.indexOf("format")||Qe.has(n)))return void a(r.current);const c=i(),{start:l,activeFormats:u=[]}=r.current;s(function(e){let{value:t,start:n,end:r,formats:a}=e;const o=Math.min(n,r),i=Math.max(n,r),s=t.formats[o-1]||[],c=t.formats[i]||[];for(t.activeFormats=a.map(((e,t)=>{if(s[t]){if(b(e,s[t]))return s[t]}else if(c[t]&&b(e,c[t]))return c[t];return e}));--r>=n;)t.activeFormats.length>0?t.formats[r]=t.activeFormats:delete t.formats[r];return t}({value:c,start:l,end:c.start,formats:u}))}function s(a){if(n.activeElement!==e)return;const{record:s,applyRecord:c,createRecord:l,isSelected:u,onSelectionChange:f}=t.current;if("selectionchange"!==a.type&&!u)return;if("true"!==e.contentEditable)return;if(o)return;const{start:d,end:m,text:p}=l(),g=s.current;if(p!==g.text)return void i();if(d===g.start&&m===g.end)return void(0===g.text.length&&0===d&&function(e){const t=e.getSelection(),{anchorNode:n,anchorOffset:r}=t;if(n.nodeType!==n.ELEMENT_NODE)return;const a=n.childNodes[r];a&&a.nodeType===a.ELEMENT_NODE&&a.getAttribute("data-rich-text-placeholder")&&t.collapseToStart()}(r));const h={...g,start:d,end:m,activeFormats:g._newActiveFormats,_newActiveFormats:void 0},v=$(h,et);h.activeFormats=v,s.current=h,c(h,{domOnly:!0}),f(d,m)}function c(){o=!0,n.removeEventListener("selectionchange",s)}function l(){o=!1,i({inputType:"insertText"}),n.addEventListener("selectionchange",s)}function u(){const{record:e,isSelected:o,onSelectionChange:i,applyRecord:c}=t.current;if(o)c(e.current),i(e.current.start,e.current.end);else{const t=void 0;e.current={...e.current,start:t,end:t,activeFormats:et},i(t,t)}a=r.requestAnimationFrame(s),n.addEventListener("selectionchange",s)}function f(){n.removeEventListener("selectionchange",s)}return e.addEventListener("input",i),e.addEventListener("compositionstart",c),e.addEventListener("compositionend",l),e.addEventListener("focus",u),e.addEventListener("blur",f),e.addEventListener("keyup",s),e.addEventListener("mouseup",s),e.addEventListener("touchend",s),()=>{e.removeEventListener("input",i),e.removeEventListener("compositionstart",c),e.removeEventListener("compositionend",l),e.removeEventListener("focus",u),e.removeEventListener("blur",f),e.removeEventListener("keyup",s),e.removeEventListener("mouseup",s),e.removeEventListener("touchend",s),n.removeEventListener("selectionchange",s),r.cancelAnimationFrame(a)}}),[])}function nt(e){const t=(0,Be.useRef)(e);return t.current=e,(0,Ue.useRefEffect)((e=>{function n(e){const{keyCode:n}=e,{createRecord:r,handleChange:a,multilineTag:o}=t.current;if(e.defaultPrevented)return;if(n!==Ye.DELETE&&n!==Ye.BACKSPACE)return;const i=r(),{start:s,end:c,text:l}=i,u=n===Ye.BACKSPACE;if(0===s&&0!==c&&c===l.length)return a(J(i)),void e.preventDefault();if(o){let t;t=u&&0===i.start&&0===i.end&&U(i)?te(i,!u):te(i,u),t&&(a(t),e.preventDefault())}}return e.addEventListener("keydown",n),()=>{e.removeEventListener("keydown",n)}}),[])}function rt(e){let{value:t="",selectionStart:n,selectionEnd:r,placeholder:a,preserveWhiteSpace:o,onSelectionChange:s,onChange:c,__unstableMultilineTag:l,__unstableDisableFormats:u,__unstableIsSelected:f,__unstableDependencies:d=[],__unstableAfterParse:m,__unstableBeforeSerialize:p,__unstableAddInvisibleFormats:g}=e;const h=(0,i.useRegistry)(),[,v]=(0,Be.useReducer)((()=>({}))),y=(0,Be.useRef)();function b(){const{ownerDocument:{defaultView:e}}=y.current,t=e.getSelection(),n=t.rangeCount>0?t.getRangeAt(0):null;return L({element:y.current,range:n,multilineTag:l,multilineWrapperTags:"li"===l?["ul","ol"]:void 0,__unstableIsEditableTree:!0,preserveWhiteSpace:o})}function T(e){let{domOnly:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Te({value:e,current:y.current,multilineTag:l,multilineWrapperTags:"li"===l?["ul","ol"]:void 0,prepareEditableTree:g,__unstableDomOnly:t,placeholder:a})}const E=(0,Be.useRef)(t),x=(0,Be.useRef)();function w(){E.current=t,x.current=L({html:t,multilineTag:l,multilineWrapperTags:"li"===l?["ul","ol"]:void 0,preserveWhiteSpace:o}),u&&(x.current.formats=Array(t.length),x.current.replacements=Array(t.length)),m&&(x.current.formats=m(x.current)),x.current.start=n,x.current.end=r}const _=(0,Be.useRef)(!1);var C,F,R;x.current?n===x.current.start&&r===x.current.end||(_.current=f,x.current={...x.current,start:n,end:r}):(w(),"core/text-color"===(null===(C=x.current)||void 0===C||null===(F=C.formats[0])||void 0===F||null===(R=F[0])||void 0===R?void 0:R.type)&&function(e){x.current=e,E.current=we({value:p?{...e,formats:p(e)}:e,multilineTag:l,preserveWhiteSpace:o});const{formats:t,text:n}=e;h.batch((()=>{c(E.current,{__unstableFormats:t,__unstableText:n})})),v()}(x.current));function A(e){x.current=e,T(e),E.current=u?e.text:we({value:p?{...e,formats:p(e)}:e,multilineTag:l,preserveWhiteSpace:o});const{start:t,end:n,formats:r,text:a}=e;h.batch((()=>{s(t,n),c(E.current,{__unstableFormats:r,__unstableText:a})})),v()}function N(){w(),T(x.current)}const S=(0,Be.useRef)(!1);(0,Be.useLayoutEffect)((()=>{S.current&&t!==E.current&&N()}),[t]),(0,Be.useLayoutEffect)((()=>{_.current&&(N(),_.current=!1)}),[_.current]);const O=(0,Ue.useMergeRefs)([y,(0,Be.useCallback)((e=>{e&&(e.style.whiteSpace="pre-wrap",e.style.minWidth="1px")}),[]),qe({record:x}),Xe({record:x,multilineTag:l,preserveWhiteSpace:o}),(0,Ue.useRefEffect)((e=>{function t(t){const{target:n}=t;if(n===e||n.textContent)return;const{ownerDocument:r}=n,{defaultView:a}=r,o=r.createRange(),i=a.getSelection();o.selectNode(n),i.removeAllRanges(),i.addRange(o)}return e.addEventListener("click",t),()=>{e.removeEventListener("click",t)}}),[]),Ze({record:x,applyRecord:T}),nt({createRecord:b,handleChange:A,multilineTag:l}),Je({multilineTag:l,createRecord:b,handleChange:A}),tt({record:x,applyRecord:T,createRecord:b,handleChange:A,isSelected:f,onSelectionChange:s}),(0,Ue.useRefEffect)((e=>{function t(e){if(e.defaultPrevented)return;const{keyCode:t,altKey:n,metaKey:r,ctrlKey:a}=e;t!==Ye.SPACE||n||r||a||(e.target.ownerDocument.execCommand("insertText",!1," "),e.preventDefault())}return e.addEventListener("keydown",t),()=>{e.removeEventListener("keydown",t)}}),[]),(0,Ue.useRefEffect)((()=>{N(),S.current=!0}),[a,...d])]);return{value:x.current,onChange:A,ref:O}}function at(){}function ot(e){let{formatTypes:t,onChange:n,onFocus:r,value:a,forwardedRef:o}=e;return t.map((e=>{const{name:t,edit:i}=e;if(!i)return null;const s=j(a,t),c=void 0!==s,l=I(a),u=void 0!==l&&l.type===t;return(0,Be.createElement)(i,{key:t,isActive:c,activeAttributes:c&&s.attributes||{},isObjectActive:u,activeObjectAttributes:u&&l.attributes||{},value:a,onChange:n,onFocus:r,contentRef:o})}))}(window.wp=window.wp||{}).richText=t}();