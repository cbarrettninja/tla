/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.16.0 - 2016-03-23T20:51:56.609Z
 * License: MIT
 */
!function(){"use strict";var e={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,COMMAND:91,MAP:{91:"COMMAND",8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSEBREAK",20:"CAPSLOCK",27:"ESC",32:"SPACE",33:"PAGE_UP",34:"PAGE_DOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",43:"+",44:"PRINTSCREEN",45:"INSERT",46:"DELETE",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NUMLOCK",145:"SCROLLLOCK",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},isControl:function(t){var s=t.which;switch(s){case e.COMMAND:case e.SHIFT:case e.CTRL:case e.ALT:return!0}return t.metaKey?!0:!1},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&123>=e},isVerticalMovement:function(t){return~[e.UP,e.DOWN].indexOf(t)},isHorizontalMovement:function(t){return~[e.LEFT,e.RIGHT,e.BACKSPACE,e.DELETE].indexOf(t)},toSeparator:function(t){var s={ENTER:"\n",TAB:"	",SPACE:" "}[t];return s?s:e[t]?void 0:t}};void 0===angular.element.prototype.querySelectorAll&&(angular.element.prototype.querySelectorAll=function(e){return angular.element(this[0].querySelectorAll(e))}),void 0===angular.element.prototype.closest&&(angular.element.prototype.closest=function(e){for(var t=this[0],s=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t;){if(s.bind(t)(e))return t;t=t.parentElement}return!1});var t=0,s=angular.module("ui.select",[]).constant("uiSelectConfig",{theme:"bootstrap",searchEnabled:!0,sortable:!1,placeholder:"",refreshDelay:1e3,closeOnSelect:!0,skipFocusser:!1,dropdownPosition:"auto",generateId:function(){return t++},appendToBody:!1}).service("uiSelectMinErr",function(){var e=angular.$$minErr("ui.select");return function(){var t=e.apply(this,arguments),s=t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"),"");return new Error(s)}}).directive("uisTranscludeAppend",function(){return{link:function(e,t,s,i,c){c(e,function(e){t.append(e)})}}}).filter("highlight",function(){function e(e){return(""+e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,s){return s&&t?(""+t).replace(new RegExp(e(s),"gi"),'<span class="ui-select-highlight">$&</span>'):t}}).factory("uisOffset",["$document","$window",function(e,t){return function(s){var i=s[0].getBoundingClientRect();return{width:i.width||s.prop("offsetWidth"),height:i.height||s.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}]);s.directive("uiSelectChoices",["uiSelectConfig","uisRepeatParser","uiSelectMinErr","$compile","$window",function(e,t,s,i,c){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){t.addClass("ui-select-choices");var s=t.parent().attr("theme")||e.theme;return s+"/choices.tpl.html"},compile:function(l,n){if(!n.repeat)throw s("repeat","Expected 'repeat' expression.");return function(l,n,a,r,o){var u=a.groupBy,d=a.groupFilter;if(r.parseRepeatAttr(a.repeat,u,d),r.disableChoiceExpression=a.uiDisableChoice,r.onHighlightCallback=a.onHighlight,r.dropdownPosition=a.position?a.position.toLowerCase():e.dropdownPosition,u){var p=n.querySelectorAll(".ui-select-choices-group");if(1!==p.length)throw s("rows","Expected 1 .ui-select-choices-group but got '{0}'.",p.length);p.attr("ng-repeat",t.getGroupNgRepeatExpression())}var g=n.querySelectorAll(".ui-select-choices-row");if(1!==g.length)throw s("rows","Expected 1 .ui-select-choices-row but got '{0}'.",g.length);g.attr("ng-repeat",r.parserResult.repeatExpression(u)).attr("ng-if","$select.open"),c.document.addEventListener&&g.attr("ng-mouseenter","$select.setActiveItem("+r.parserResult.itemName+")").attr("ng-click","$select.select("+r.parserResult.itemName+",$select.skipFocusser,$event)");var h=n.querySelectorAll(".ui-select-choices-row-inner");if(1!==h.length)throw s("rows","Expected 1 .ui-select-choices-row-inner but got '{0}'.",h.length);h.attr("uis-transclude-append",""),c.document.addEventListener||h.attr("ng-mouseenter","$select.setActiveItem("+r.parserResult.itemName+")").attr("ng-click","$select.select("+r.parserResult.itemName+",$select.skipFocusser,$event)"),i(n,o)(l),l.$watch("$select.search",function(e){e&&!r.open&&r.multiple&&r.activate(!1,!0),r.activeIndex=r.tagging.isActivated?-1:0,!a.minimumInputLength||r.search.length>=a.minimumInputLength?r.refresh(a.refresh):r.items=[]}),a.$observe("refreshDelay",function(){var t=l.$eval(a.refreshDelay);r.refreshDelay=void 0!==t?t:e.refreshDelay})}}}}]),s.controller("uiSelectCtrl",["$scope","$element","$timeout","$filter","uisRepeatParser","uiSelectMinErr","uiSelectConfig","$parse","$injector","$window",function(t,s,i,c,l,n,a,r,o,u){function d(e,t,s){if(e.findIndex)return e.findIndex(t,s);for(var i,c=Object(e),l=c.length>>>0,n=0;l>n;n++)if(i=c[n],t.call(s,i,n,c))return n;return-1}function p(){(v.resetSearchInput||void 0===v.resetSearchInput&&a.resetSearchInput)&&(v.search=m,v.selected&&v.items.length&&!v.multiple&&(v.activeIndex=d(v.items,function(e){return angular.equals(this,e)},v.selected)))}function g(e,t){var s,i,c=[];for(s=0;s<t.length;s++)for(i=0;i<e.length;i++)e[i].name==[t[s]]&&c.push(e[i]);return c}function h(t){var s=!0;switch(t){case e.DOWN:!v.open&&v.multiple?v.activate(!1,!0):v.activeIndex<v.items.length-1&&v.activeIndex++;break;case e.UP:!v.open&&v.multiple?v.activate(!1,!0):(v.activeIndex>0||0===v.search.length&&v.tagging.isActivated&&v.activeIndex>-1)&&v.activeIndex--;break;case e.TAB:(!v.multiple||v.open)&&v.select(v.items[v.activeIndex],!0);break;case e.ENTER:v.open&&(v.tagging.isActivated||v.activeIndex>=0)?v.select(v.items[v.activeIndex],v.skipFocusser):v.activate(!1,!0);break;case e.ESC:v.close();break;default:s=!1}return s}function f(){var e=s.querySelectorAll(".ui-select-choices-content"),t=e.querySelectorAll(".ui-select-choices-row");if(t.length<1)throw n("choices","Expected multiple .ui-select-choices-row but got '{0}'.",t.length);if(!(v.activeIndex<0)){var i=t[v.activeIndex],c=i.offsetTop+i.clientHeight-e[0].scrollTop,l=e[0].offsetHeight;c>l?e[0].scrollTop+=c-l:c<i.clientHeight&&(v.isGrouped&&0===v.activeIndex?e[0].scrollTop=0:e[0].scrollTop-=i.clientHeight-c)}}var v=this,m="";if(v.placeholder=a.placeholder,v.searchEnabled=a.searchEnabled,v.sortable=a.sortable,v.refreshDelay=a.refreshDelay,v.paste=a.paste,v.removeSelected=!1,v.closeOnSelect=!0,v.skipFocusser=!1,v.search=m,v.activeIndex=0,v.items=[],v.open=!1,v.focus=!1,v.disabled=!1,v.selected=void 0,v.dropdownPosition="auto",v.focusser=void 0,v.resetSearchInput=!0,v.multiple=void 0,v.disableChoiceExpression=void 0,v.tagging={isActivated:!1,fct:void 0},v.taggingTokens={isActivated:!1,tokens:void 0},v.lockChoiceExpression=void 0,v.clickTriggeredSelect=!1,v.$filter=c,v.$animate=function(){try{return o.get("$animate")}catch(e){return null}}(),v.searchInput=s.querySelectorAll("input.ui-select-search"),1!==v.searchInput.length)throw n("searchInput","Expected 1 input.ui-select-search but got '{0}'.",v.searchInput.length);v.isEmpty=function(){return angular.isUndefined(v.selected)||null===v.selected||""===v.selected||v.multiple&&0===v.selected.length},v.activate=function(e,c){if(!v.disabled&&!v.open){c||p(),t.$broadcast("uis:activate"),v.open=!0,v.activeIndex=v.activeIndex>=v.items.length?0:v.activeIndex,-1===v.activeIndex&&v.taggingLabel!==!1&&(v.activeIndex=0);var l=s.querySelectorAll(".ui-select-choices-content");v.$animate&&v.$animate.on&&v.$animate.enabled(l[0])?v.$animate.on("enter",l[0],function(t,s){"close"===s&&i(function(){v.focusSearchInput(e)})}):i(function(){v.focusSearchInput(e),!v.tagging.isActivated&&v.items.length>1&&f()})}},v.focusSearchInput=function(e){v.search=e||v.search,v.searchInput[0].focus()},v.findGroupByName=function(e){return v.groups&&v.groups.filter(function(t){return t.name===e})[0]},v.parseRepeatAttr=function(e,s,i){function c(e){var c=t.$eval(s);if(v.groups=[],angular.forEach(e,function(e){var t=angular.isFunction(c)?c(e):e[c],s=v.findGroupByName(t);s?s.items.push(e):v.groups.push({name:t,items:[e]})}),i){var l=t.$eval(i);angular.isFunction(l)?v.groups=l(v.groups):angular.isArray(l)&&(v.groups=g(v.groups,l))}v.items=[],v.groups.forEach(function(e){v.items=v.items.concat(e.items)})}function a(e){v.items=e}v.setItemsFn=s?c:a,v.parserResult=l.parse(e),v.isGrouped=!!s,v.itemProperty=v.parserResult.itemName;var o=v.parserResult.source,u=function(){var e=o(t);t.$uisSource=Object.keys(e).map(function(t){var s={};return s[v.parserResult.keyName]=t,s.value=e[t],s})};v.parserResult.keyName&&(u(),v.parserResult.source=r("$uisSource"+v.parserResult.filters),t.$watch(o,function(e,t){e!==t&&u()},!0)),v.refreshItems=function(e){e=e||v.parserResult.source(t);var s=v.selected;if(v.isEmpty()||angular.isArray(s)&&!s.length||!v.removeSelected)v.setItemsFn(e);else if(void 0!==e){var i=e.filter(function(e){return s.every(function(t){return!angular.equals(e,t)})});v.setItemsFn(i)}("auto"===v.dropdownPosition||"up"===v.dropdownPosition)&&t.calculateDropdownPos()},t.$watchCollection(v.parserResult.source,function(e){if(void 0===e||null===e)v.items=[];else{if(!angular.isArray(e))throw n("items","Expected an array but got '{0}'.",e);v.refreshItems(e),v.ngModel.$modelValue=null}})};var $;v.refresh=function(e){void 0!==e&&($&&i.cancel($),$=i(function(){t.$eval(e)},v.refreshDelay))},v.isActive=function(e){if(!v.open)return!1;var t=v.items.indexOf(e[v.itemProperty]),s=t==v.activeIndex;return!s||0>t&&v.taggingLabel!==!1||0>t&&v.taggingLabel===!1?!1:(s&&!angular.isUndefined(v.onHighlightCallback)&&e.$eval(v.onHighlightCallback),s)},v.isDisabled=function(e){if(v.open){var t,s=v.items.indexOf(e[v.itemProperty]),i=!1;return s>=0&&!angular.isUndefined(v.disableChoiceExpression)&&(t=v.items[s],i=!!e.$eval(v.disableChoiceExpression),t._uiSelectChoiceDisabled=i),i}},v.select=function(e,s,c){if(void 0===e||!e._uiSelectChoiceDisabled){if(!v.items&&!v.search&&!v.tagging.isActivated)return;if(!e||!e._uiSelectChoiceDisabled){if(v.tagging.isActivated){if(v.taggingLabel===!1)if(v.activeIndex<0){if(e=void 0!==v.tagging.fct?v.tagging.fct(v.search):v.search,!e||angular.equals(v.items[0],e))return}else e=v.items[v.activeIndex];else if(0===v.activeIndex){if(void 0===e)return;if(void 0!==v.tagging.fct&&"string"==typeof e){if(e=v.tagging.fct(e),!e)return}else"string"==typeof e&&(e=e.replace(v.taggingLabel,"").trim())}if(v.selected&&angular.isArray(v.selected)&&v.selected.filter(function(t){return angular.equals(t,e)}).length>0)return v.close(s),void 0}t.$broadcast("uis:select",e);var l={};l[v.parserResult.itemName]=e,i(function(){v.onSelectCallback(t,{$item:e,$model:v.parserResult.modelMapper(t,l)})}),v.closeOnSelect&&v.close(s),c&&"click"===c.type&&(v.clickTriggeredSelect=!0)}}},v.close=function(e){v.open&&(v.ngModel&&v.ngModel.$setTouched&&v.ngModel.$setTouched(),p(),v.open=!1,t.$broadcast("uis:close",e))},v.setFocus=function(){v.focus||v.focusInput[0].focus()},v.clear=function(e){v.select(void 0),e.stopPropagation(),i(function(){v.focusser[0].focus()},0,!1)},v.toggle=function(e){v.open?(v.close(),e.preventDefault(),e.stopPropagation()):v.activate()},v.isLocked=function(e,t){var s,i=v.selected[t];return i&&!angular.isUndefined(v.lockChoiceExpression)&&(s=!!e.$eval(v.lockChoiceExpression),i._uiSelectChoiceLocked=s),s};var b=null;v.sizeSearchInput=function(){var e=v.searchInput[0],s=v.searchInput.parent().parent()[0],c=function(){return s.clientWidth*!!e.offsetParent},l=function(t){if(0===t)return!1;var s=t-e.offsetLeft-10;return 50>s&&(s=t),v.searchInput.css("width",s+"px"),!0};v.searchInput.css("width","10px"),i(function(){null!==b||l(c())||(b=t.$watch(c,function(e){l(e)&&(b(),b=null)}))})},v.searchInput.on("keydown",function(s){var c=s.which;~[e.ENTER,e.ESC].indexOf(c)&&(s.preventDefault(),s.stopPropagation()),t.$apply(function(){var t=!1;if((v.items.length>0||v.tagging.isActivated)&&(h(c),v.taggingTokens.isActivated)){for(var l=0;l<v.taggingTokens.tokens.length;l++)v.taggingTokens.tokens[l]===e.MAP[s.keyCode]&&v.search.length>0&&(t=!0);t&&i(function(){v.searchInput.triggerHandler("tagged");var t=v.search.replace(e.MAP[s.keyCode],"").trim();v.tagging.fct&&(t=v.tagging.fct(t)),t&&v.select(t,!0)})}}),e.isVerticalMovement(c)&&v.items.length>0&&f(),(c===e.ENTER||c===e.ESC)&&(s.preventDefault(),s.stopPropagation())}),v.searchInput.on("paste",function(t){var s;if(s=window.clipboardData&&window.clipboardData.getData?window.clipboardData.getData("Text"):(t.originalEvent||t).clipboardData.getData("text/plain"),s=v.search+s,s&&s.length>0)if(v.taggingTokens.isActivated){var i=e.toSeparator(v.taggingTokens.tokens[0]),c=s.split(i||v.taggingTokens.tokens[0]);if(c&&c.length>0){var l=v.search;angular.forEach(c,function(e){var t=v.tagging.fct?v.tagging.fct(e):e;t&&v.select(t,!0)}),v.search=l||m,t.preventDefault(),t.stopPropagation()}}else v.paste&&(v.paste(s),v.search=m,t.preventDefault(),t.stopPropagation())}),v.searchInput.on("tagged",function(){i(function(){p()})}),t.$on("$destroy",function(){v.searchInput.off("keyup keydown tagged blur paste")}),angular.element(u).bind("resize",function(){v.sizeSearchInput()})}]),s.directive("uiSelect",["$document","uiSelectConfig","uiSelectMinErr","uisOffset","$compile","$parse","$timeout",function(e,t,s,i,c,l,n){return{restrict:"EA",templateUrl:function(e,s){var i=s.theme||t.theme;return i+(angular.isDefined(s.multiple)?"/select-multiple.tpl.html":"/select.tpl.html")},replace:!0,transclude:!0,require:["uiSelect","^ngModel"],scope:!0,controller:"uiSelectCtrl",controllerAs:"$select",compile:function(c,a){var r=/{(.*)}\s*{(.*)}/.exec(a.ngClass);if(r){var o="{"+r[1]+", "+r[2]+"}";a.ngClass=o,c.attr("ng-class",o)}return angular.isDefined(a.multiple)?c.append("<ui-select-multiple/>").removeAttr("multiple"):c.append("<ui-select-single/>"),a.inputId&&(c.querySelectorAll("input.ui-select-search")[0].id=a.inputId),function(c,a,r,o,u){function d(e){if(h.open){var t=!1;if(t=window.jQuery?window.jQuery.contains(a[0],e.target):a[0].contains(e.target),!t&&!h.clickTriggeredSelect){var s;if(h.skipFocusser)s=!0;else{var i=["input","button","textarea","select"],l=angular.element(e.target).controller("uiSelect");s=l&&l!==h,s||(s=~i.indexOf(e.target.tagName.toLowerCase()))}h.close(s),c.$digest()}h.clickTriggeredSelect=!1}}function p(){var t=i(a);m=angular.element('<div class="ui-select-placeholder"></div>'),m[0].style.width=t.width+"px",m[0].style.height=t.height+"px",a.after(m),$=a[0].style.width,e.find("body").append(a),a[0].style.position="absolute",a[0].style.left=t.left+"px",a[0].style.top=t.top+"px",a[0].style.width=t.width+"px"}function g(){null!==m&&(m.replaceWith(a),m=null,a[0].style.position="",a[0].style.left="",a[0].style.top="",a[0].style.width=$,h.setFocus())}var h=o[0],f=o[1];h.generatedId=t.generateId(),h.baseTitle=r.title||"Select box",h.focusserTitle=h.baseTitle+" focus",h.focusserId="focusser-"+h.generatedId,h.closeOnSelect=function(){return angular.isDefined(r.closeOnSelect)?l(r.closeOnSelect)():t.closeOnSelect}(),c.$watch("skipFocusser",function(){var e=c.$eval(r.skipFocusser);h.skipFocusser=void 0!==e?e:t.skipFocusser}),h.onSelectCallback=l(r.onSelect),h.onRemoveCallback=l(r.onRemove),h.limit=angular.isDefined(r.limit)?parseInt(r.limit,10):void 0,h.ngModel=f,h.choiceGrouped=function(e){return h.isGrouped&&e&&e.name},r.tabindex&&r.$observe("tabindex",function(e){h.focusInput.attr("tabindex",e),a.removeAttr("tabindex")}),c.$watch("searchEnabled",function(){var e=c.$eval(r.searchEnabled);h.searchEnabled=void 0!==e?e:t.searchEnabled}),c.$watch("sortable",function(){var e=c.$eval(r.sortable);h.sortable=void 0!==e?e:t.sortable}),r.$observe("disabled",function(){h.disabled=void 0!==r.disabled?r.disabled:!1}),r.$observe("resetSearchInput",function(){var e=c.$eval(r.resetSearchInput);h.resetSearchInput=void 0!==e?e:!0}),r.$observe("paste",function(){h.paste=c.$eval(r.paste)}),r.$observe("tagging",function(){if(void 0!==r.tagging){var e=c.$eval(r.tagging);h.tagging={isActivated:!0,fct:e!==!0?e:void 0}}else h.tagging={isActivated:!1,fct:void 0}}),r.$observe("taggingLabel",function(){void 0!==r.tagging&&(h.taggingLabel="false"===r.taggingLabel?!1:void 0!==r.taggingLabel?r.taggingLabel:"(new)")}),r.$observe("taggingTokens",function(){if(void 0!==r.tagging){var e=void 0!==r.taggingTokens?r.taggingTokens.split("|"):[",","ENTER"];h.taggingTokens={isActivated:!0,tokens:e}}}),angular.isDefined(r.autofocus)&&n(function(){h.setFocus()}),angular.isDefined(r.focusOn)&&c.$on(r.focusOn,function(){n(function(){h.setFocus()})}),e.on("click",d),c.$on("$destroy",function(){e.off("click",d)}),u(c,function(e){var t=angular.element("<div>").append(e),i=t.querySelectorAll(".ui-select-match");if(i.removeAttr("ui-select-match"),i.removeAttr("data-ui-select-match"),1!==i.length)throw s("transcluded","Expected 1 .ui-select-match but got '{0}'.",i.length);a.querySelectorAll(".ui-select-match").replaceWith(i);var c=t.querySelectorAll(".ui-select-choices");if(c.removeAttr("ui-select-choices"),c.removeAttr("data-ui-select-choices"),1!==c.length)throw s("transcluded","Expected 1 .ui-select-choices but got '{0}'.",c.length);a.querySelectorAll(".ui-select-choices").replaceWith(c)});var v=c.$eval(r.appendToBody);(void 0!==v?v:t.appendToBody)&&(c.$watch("$select.open",function(e){e?p():g()}),c.$on("$destroy",function(){g()}));var m=null,$="",b=null,w="direction-up";c.$watch("$select.open",function(){("auto"===h.dropdownPosition||"up"===h.dropdownPosition)&&c.calculateDropdownPos()});var x=function(e,t){e=e||i(a),t=t||i(b),b[0].style.position="absolute",b[0].style.top=-1*t.height+"px",a.addClass(w)},y=function(e,t){a.removeClass(w),e=e||i(a),t=t||i(b),b[0].style.position="",b[0].style.top=""};c.calculateDropdownPos=function(){if(h.open){if(b=angular.element(a).querySelectorAll(".ui-select-dropdown"),0===b.length)return;b[0].style.opacity=0,n(function(){if("up"===h.dropdownPosition)x();else{a.removeClass(w);var t=i(a),s=i(b),c=e[0].documentElement.scrollTop||e[0].body.scrollTop;t.top+t.height+s.height>c+e[0].documentElement.clientHeight?x(t,s):y(t,s)}b[0].style.opacity=1})}else{if(null===b||0===b.length)return;b[0].style.position="",b[0].style.top="",a.removeClass(w)}}}}}}]),s.directive("uiSelectMatch",["uiSelectConfig",function(e){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){t.addClass("ui-select-match");var s=t.parent().attr("theme")||e.theme,i=t.parent().attr("multiple");return s+(i?"/match-multiple.tpl.html":"/match.tpl.html")},link:function(t,s,i,c){function l(e){c.allowClear=angular.isDefined(e)?""===e?!0:"true"===e.toLowerCase():!1}c.lockChoiceExpression=i.uiLockChoice,i.$observe("placeholder",function(t){c.placeholder=void 0!==t?t:e.placeholder}),i.$observe("allowClear",l),l(i.allowClear),c.multiple&&c.sizeSearchInput()}}}]),s.directive("uiSelectMultiple",["uiSelectMinErr","$timeout",function(t,s){return{restrict:"EA",require:["^uiSelect","^ngModel"],controller:["$scope","$timeout",function(e,t){var s,i=this,c=e.$select;angular.isUndefined(c.selected)&&(c.selected=[]),e.$evalAsync(function(){s=e.ngModel}),i.activeMatchIndex=-1,i.updateModel=function(){s.$setViewValue(Date.now()),i.refreshComponent()},i.refreshComponent=function(){c.refreshItems(),c.sizeSearchInput()},i.removeChoice=function(s){var l=c.selected[s];if(!l._uiSelectChoiceLocked){var n={};n[c.parserResult.itemName]=l,c.selected.splice(s,1),i.activeMatchIndex=-1,c.sizeSearchInput(),t(function(){c.onRemoveCallback(e,{$item:l,$model:c.parserResult.modelMapper(e,n)})}),i.updateModel()}},i.getPlaceholder=function(){return c.selected&&c.selected.length?void 0:c.placeholder}}],controllerAs:"$selectMultiple",link:function(i,c,l,n){function a(e){return angular.isNumber(e.selectionStart)?e.selectionStart:e.value.length}function r(t){function s(){switch(t){case e.LEFT:return~g.activeMatchIndex?u:n;case e.RIGHT:return~g.activeMatchIndex&&r!==n?o:(d.activate(),!1);case e.BACKSPACE:return~g.activeMatchIndex?(g.removeChoice(r),u):n;case e.DELETE:return~g.activeMatchIndex?(g.removeChoice(g.activeMatchIndex),r):!1}}var i=a(d.searchInput[0]),c=d.selected.length,l=0,n=c-1,r=g.activeMatchIndex,o=g.activeMatchIndex+1,u=g.activeMatchIndex-1,p=r;return i>0||d.search.length&&t==e.RIGHT?!1:(d.close(),p=s(),g.activeMatchIndex=d.selected.length&&p!==!1?Math.min(n,Math.max(l,p)):-1,!0)}function o(e){if(void 0===e||void 0===d.search)return!1;var t=e.filter(function(e){return void 0===d.search.toUpperCase()||void 0===e?!1:e.toUpperCase()===d.search.toUpperCase()}).length>0;return t}function u(e,t){var s=-1;if(angular.isArray(e))for(var i=angular.copy(e),c=0;c<i.length;c++)if(void 0===d.tagging.fct)i[c]+" "+d.taggingLabel===t&&(s=c);else{var l=i[c];angular.isObject(l)&&(l.isTag=!0),angular.equals(l,t)&&(s=c)}return s}var d=n[0],p=i.ngModel=n[1],g=i.$selectMultiple;d.multiple=!0,d.removeSelected=!0,d.focusInput=d.searchInput,p.$isEmpty=function(e){return!e||0===e.length},p.$parsers.unshift(function(){for(var e,t={},s=[],c=d.selected.length-1;c>=0;c--)t={},t[d.parserResult.itemName]=d.selected[c],e=d.parserResult.modelMapper(i,t),s.unshift(e);return s}),p.$formatters.unshift(function(e){var t,s=d.parserResult.source(i,{$select:{search:""}}),c={};if(!s)return e;var l=[],n=function(e,s){if(e&&e.length){for(var n=e.length-1;n>=0;n--){if(c[d.parserResult.itemName]=e[n],t=d.parserResult.modelMapper(i,c),d.parserResult.trackByExp){var a=/(\w*)\./.exec(d.parserResult.trackByExp),r=/\.([^\s]+)/.exec(d.parserResult.trackByExp);if(a&&a.length>0&&a[1]==d.parserResult.itemName&&r&&r.length>0&&t[r[1]]==s[r[1]])return l.unshift(e[n]),!0}if(angular.equals(t,s))return l.unshift(e[n]),!0}return!1}};if(!e)return l;for(var a=e.length-1;a>=0;a--)n(d.selected,e[a])||n(s,e[a])||l.unshift(e[a]);return l}),i.$watchCollection(function(){return p.$modelValue},function(e,t){t!=e&&(p.$modelValue=null,g.refreshComponent())}),p.$render=function(){if(!angular.isArray(p.$viewValue)){if(!angular.isUndefined(p.$viewValue)&&null!==p.$viewValue)throw t("multiarr","Expected model value to be array but got '{0}'",p.$viewValue);d.selected=[]}d.selected=p.$viewValue,g.refreshComponent(),i.$evalAsync()},i.$on("uis:select",function(e,t){d.selected.length>=d.limit||(d.selected.push(t),g.updateModel())}),i.$on("uis:activate",function(){g.activeMatchIndex=-1}),i.$watch("$select.disabled",function(e,t){t&&!e&&d.sizeSearchInput()}),d.searchInput.on("keydown",function(t){var s=t.which;i.$apply(function(){var i=!1;e.isHorizontalMovement(s)&&(i=r(s)),i&&s!=e.TAB&&(t.preventDefault(),t.stopPropagation())})}),d.searchInput.on("keyup",function(t){if(e.isVerticalMovement(t.which)||i.$evalAsync(function(){d.activeIndex=d.taggingLabel===!1?-1:0}),d.tagging.isActivated&&d.search.length>0){if(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||e.isVerticalMovement(t.which))return;if(d.activeIndex=d.taggingLabel===!1?-1:0,d.taggingLabel===!1)return;var s,c,l,n,a=angular.copy(d.items),r=angular.copy(d.items),p=!1,g=-1;if(void 0!==d.tagging.fct){if(l=d.$filter("filter")(a,{isTag:!0}),l.length>0&&(n=l[0]),a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),s=d.tagging.fct(d.search),r.some(function(e){return angular.equals(e,d.tagging.fct(d.search))})||d.selected.some(function(e){return angular.equals(e,s)}))return i.$evalAsync(function(){d.activeIndex=0,d.items=a}),void 0;s.isTag=!0}else{if(l=d.$filter("filter")(a,function(e){return e.match(d.taggingLabel)}),l.length>0&&(n=l[0]),c=a[0],void 0!==c&&a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),s=d.search+" "+d.taggingLabel,u(d.selected,d.search)>-1)return;if(o(r.concat(d.selected)))return p&&(a=r,i.$evalAsync(function(){d.activeIndex=0,d.items=a})),void 0;if(o(r))return p&&(d.items=r.slice(1,r.length)),void 0}p&&(g=u(d.selected,s)),g>-1?a=a.slice(g+1,a.length-1):(a=[],a.push(s),a=a.concat(r)),i.$evalAsync(function(){d.activeIndex=0,d.items=a})}}),d.searchInput.on("blur",function(){s(function(){g.activeMatchIndex=-1})})}}}]),s.directive("uiSelectSingle",["$timeout","$compile",function(t,s){return{restrict:"EA",require:["^uiSelect","^ngModel"],link:function(i,c,l,n){var a=n[0],r=n[1];r.$parsers.unshift(function(e){var t,s={};return s[a.parserResult.itemName]=e,t=a.parserResult.modelMapper(i,s)}),r.$formatters.unshift(function(e){var t,s=a.parserResult.source(i,{$select:{search:""}}),c={};if(s){var l=function(s){return c[a.parserResult.itemName]=s,t=a.parserResult.modelMapper(i,c),t==e};if(a.selected&&l(a.selected))return a.selected;for(var n=s.length-1;n>=0;n--)if(l(s[n]))return s[n]}return e}),i.$watch("$select.selected",function(e){r.$viewValue!==e&&r.$setViewValue(e)}),r.$render=function(){a.selected=r.$viewValue},i.$on("uis:select",function(e,t){a.selected=t}),i.$on("uis:close",function(e,s){t(function(){a.focusser.prop("disabled",!1),s||a.focusser[0].focus()},0,!1)}),i.$on("uis:activate",function(){o.prop("disabled",!0)});var o=angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");s(o)(i),a.focusser=o,a.focusInput=o,c.parent().append(o),o.bind("focus",function(){i.$evalAsync(function(){a.focus=!0})}),o.bind("blur",function(){i.$evalAsync(function(){a.focus=!1})}),o.bind("keydown",function(t){return t.which===e.BACKSPACE?(t.preventDefault(),t.stopPropagation(),a.select(void 0),i.$apply(),void 0):(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||((t.which==e.DOWN||t.which==e.UP||t.which==e.ENTER||t.which==e.SPACE)&&(t.preventDefault(),t.stopPropagation(),a.activate()),i.$digest()),void 0)}),o.bind("keyup input",function(t){t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||t.which==e.ENTER||t.which===e.BACKSPACE||(a.activate(o.val()),o.val(""),i.$digest())})}}}]),s.directive("uiSelectSort",["$timeout","uiSelectConfig","uiSelectMinErr",function(e,t,s){return{require:"^^uiSelect",link:function(t,i,c,l){if(null===t[c.uiSelectSort])throw s("sort","Expected a list to sort");var n=angular.extend({axis:"horizontal"},t.$eval(c.uiSelectSortOptions)),a=n.axis,r="dragging",o="dropping",u="dropping-before",d="dropping-after";t.$watch(function(){return l.sortable},function(e){e?i.attr("draggable",!0):i.removeAttr("draggable")}),i.on("dragstart",function(e){i.addClass(r),(e.dataTransfer||e.originalEvent.dataTransfer).setData("text",t.$index.toString())}),i.on("dragend",function(){i.removeClass(r)});var p,g=function(e,t){this.splice(t,0,this.splice(e,1)[0])},h=function(e){e.preventDefault();var t="vertical"===a?e.offsetY||e.layerY||(e.originalEvent?e.originalEvent.offsetY:0):e.offsetX||e.layerX||(e.originalEvent?e.originalEvent.offsetX:0);t<this["vertical"===a?"offsetHeight":"offsetWidth"]/2?(i.removeClass(d),i.addClass(u)):(i.removeClass(u),i.addClass(d))},f=function(t){t.preventDefault();var s=parseInt((t.dataTransfer||t.originalEvent.dataTransfer).getData("text"),10);e.cancel(p),p=e(function(){v(s)},20)},v=function(e){var s=t.$eval(c.uiSelectSort),l=s[e],n=null;n=i.hasClass(u)?e<t.$index?t.$index-1:t.$index:e<t.$index?t.$index:t.$index+1,g.apply(s,[e,n]),t.$apply(function(){t.$emit("uiSelectSort:change",{array:s,item:l,from:e,to:n})}),i.removeClass(o),i.removeClass(u),i.removeClass(d),i.off("drop",f)};i.on("dragenter",function(){i.hasClass(r)||(i.addClass(o),i.on("dragover",h),i.on("drop",f))}),i.on("dragleave",function(e){e.target==i&&(i.removeClass(o),i.removeClass(u),i.removeClass(d),i.off("dragover",h),i.off("drop",f))})}}}]),s.service("uisRepeatParser",["uiSelectMinErr","$parse",function(e,t){var s=this;s.parse=function(s){var i;if(i=s.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),!i)throw e("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",s);var c=i[5],l="";if(i[3]){c=i[5].replace(/(^\()|(\)$)/g,"");var n=i[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);n&&n[1].trim()&&(l=n[1],c=c.replace(l,""))}return{itemName:i[4]||i[2],keyName:i[3],source:t(c),filters:l,trackByExp:i[6],modelMapper:t(i[1]||i[4]||i[2]),repeatExpression:function(e){var t=this.itemName+" in "+(e?"$group.items":"$select.items");return this.trackByExp&&(t+=" track by "+this.trackByExp),t}}},s.getGroupNgRepeatExpression=function(){return"$group in $select.groups"}}])}(),angular.module("ui.select").run(["$templateCache",function(e){e.put("bootstrap/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" role="listbox" ng-show="$select.open"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><a href="" class="ui-select-choices-row-inner"></a></div></li></ul>'),e.put("bootstrap/match-multiple.tpl.html",'<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'),e.put("bootstrap/match.tpl.html",'<div class="ui-select-match" ng-hide="$select.open" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty()" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'),e.put("bootstrap/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div></div>'),e.put("bootstrap/select.tpl.html",'<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div></div>'),e.put("select2/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul role="listbox" id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'),e.put("select2/match-multiple.tpl.html",'<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'),e.put("select2/match.tpl.html",'<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'),e.put("select2/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="ui-select-choices"></div></div></div>'),e.put("select2/select.tpl.html",'<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="text" autocomplete="off" autocorrect="false" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>'),e.put("selectize/choices.tpl.html",'<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup" role="listbox"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'),e.put("selectize/match.tpl.html",'<div ng-hide="($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>'),e.put("selectize/select.tpl.html",'<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div></div>')
}]);
/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A,e,B){'use strict';function C(a){var c=[];v(c,e.noop).chars(a);return c.join("")}function h(a,c){var b={},d=a.split(","),l;for(l=0;l<d.length;l++)b[c?e.lowercase(d[l]):d[l]]=!0;return b}function D(a,c){null===a||a===B?a="":"string"!==typeof a&&(a=""+a);g.innerHTML=a;var b=5;do{if(0===b)throw w("uinput");b--;11>=document.documentMode&&n(g);a=g.innerHTML;g.innerHTML=a}while(a!==g.innerHTML);for(b=g.firstChild;b;){switch(b.nodeType){case 1:c.start(b.nodeName.toLowerCase(),E(b.attributes));
break;case 3:c.chars(b.textContent)}var d;if(!(d=b.firstChild)&&(1==b.nodeType&&c.end(b.nodeName.toLowerCase()),d=b.nextSibling,!d))for(;null==d;){b=b.parentNode;if(b===g)break;d=b.nextSibling;1==b.nodeType&&c.end(b.nodeName.toLowerCase())}b=d}for(;b=g.firstChild;)g.removeChild(b)}function E(a){for(var c={},b=0,d=a.length;b<d;b++){var l=a[b];c[l.name]=l.value}return c}function x(a){return a.replace(/&/g,"&amp;").replace(F,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(G,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v(a,c){var b=!1,d=e.bind(a,a.push);return{start:function(a,f){a=e.lowercase(a);!b&&H[a]&&(b=a);b||!0!==t[a]||(d("<"),d(a),e.forEach(f,function(b,f){var g=e.lowercase(f),h="img"===a&&"src"===g||"background"===g;!0!==I[g]||!0===y[g]&&!c(b,h)||(d(" "),d(f),d('="'),d(x(b)),d('"'))}),d(">"))},end:function(a){a=e.lowercase(a);b||!0!==t[a]||!0===z[a]||(d("</"),d(a),d(">"));a==
b&&(b=!1)},chars:function(a){b||d(x(a))}}}function n(a){if(a.nodeType===Node.ELEMENT_NODE)for(var c=a.attributes,b=0,d=c.length;b<d;b++){var e=c[b],f=e.name.toLowerCase();if("xmlns:ns1"===f||0===f.indexOf("ns1:"))a.removeAttributeNode(e),b--,d--}(c=a.firstChild)&&n(c);(c=a.nextSibling)&&n(c)}var w=e.$$minErr("$sanitize"),F=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,G=/([^\#-~ |!])/g,z=h("area,br,col,hr,img,wbr"),q=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),k=h("rp,rt"),u=e.extend({},k,q),q=e.extend({},
q,h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),k=e.extend({},k,h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),J=h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
H=h("script,style"),t=e.extend({},z,q,k,u),y=h("background,cite,href,longdesc,src,xlink:href"),u=h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),I=e.extend({},y,k,u),g;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw w("noinert");var c=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===c.length?g=c[0]:(c=a.createElement("html"),g=a.createElement("body"),c.appendChild(g),a.appendChild(c))})(A);e.module("ngSanitize",[]).provider("$sanitize",function(){var a=!1;this.$get=["$$sanitizeUri",function(c){a&&e.extend(t,J);return function(a){var d=
[];D(a,v(d,function(a,b){return!/^unsafe:/.test(c(a,b))}));return d.join("")}}];this.enableSvg=function(c){return e.isDefined(c)?(a=c,this):a}});e.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,b=/^mailto:/i,d=e.$$minErr("linky"),g=e.isString;return function(f,h,m){function k(a){a&&p.push(C(a))}function q(a,b){var c;p.push("<a ");e.isFunction(m)&&(m=m(a));if(e.isObject(m))for(c in m)p.push(c+
'="'+m[c]+'" ');else m={};!e.isDefined(h)||"target"in m||p.push('target="',h,'" ');p.push('href="',a.replace(/"/g,"&quot;"),'">');k(b);p.push("</a>")}if(null==f||""===f)return f;if(!g(f))throw d("notstring",f);for(var r=f,p=[],s,n;f=r.match(c);)s=f[0],f[2]||f[4]||(s=(f[3]?"http://":"mailto:")+s),n=f.index,k(r.substr(0,n)),q(s,f[0].replace(b,"")),r=r.substring(n+f[0].length);k(r);return a(p.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/**
 * Created by supostat on 16.11.15.
 */

MathJax.Hub.Config({
    showMathMenu: false,
    CommonHTML: { linebreaks: { automatic: true } },
    "HTML-CSS": { linebreaks: { automatic: true } },
    SVG: { linebreaks: { automatic: true } },
    tex2jax: {inlineMath: [['$$','$$']]},
    styles: {
        ".MathJax_Display": {
            "text-align": "left",
            margin: "1em 0em",
            width: "auto"
        }
    }
});

var app = angular.module('TLA_SITE', ['ui.bootstrap', 'timer', 'ui.bootstrap.datetimepicker', 'bootstrapLightbox', 'ngDialog', 'ui.select', 'ngSanitize'])
    .constant('ENDPOINT_URI', '/v1/').config(function (LightboxProvider) {
        LightboxProvider.getImageUrl = function (image) {
            return image.path;
        };
        LightboxProvider.getImageCaption = function (image) {
            return '';
        };
    });
/**
 * Created by supostat on 16.11.15.
 */

app.controller('FreepracticeController', ['$scope', 'PracticeExamsModel', 'Lightbox', 'ngDialog',
    function ($scope, PracticeExamsModel, Lightbox, ngDialog) {
        $scope.practice = {};

        var showQuestions = function (id) {
            PracticeExamsModel.getQuestions(id).then(function (result) {
                $scope.practice = result.data;
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
                MathJax.Hub.Queue(function () {
                    $('#practice').css('opacity', 1);
                    $('#loader').hide();
                });
                $scope.timer = true;
            });
        };

        $scope.essayChange = function (question) {
            var essay = {
                id: question.id,
                essayText: question.essayText,
                quizpractice_id: $scope.practice.id
            };

            PracticeExamsModel.essayChange(essay).then(function (result) {
            })
        };

        $scope.selectAnswer = function (question_id, answer_id) {
            var answer = {
                question_id: question_id,
                answer_id: answer_id,
                quizpractice_id: $scope.practice.id
            };

            PracticeExamsModel.selectAnswer(answer).then(function (result) {
                $scope.selectedAnswers = result.data;
            });
        };

        $scope.stopPractice = function ($event) {
            $scope.cnt = 0;
            $scope.qis = 0;

            angular.forEach($scope.practice.questions, function (item) {
                $scope.cnt += item.answered ? 1 : 0;
            });

            angular.forEach($scope.practice.sections, function (section) {
                angular.forEach(section.questions, function (question) {
                    $scope.cnt += question.answered ? 1 : 0;
                    $scope.qis ++;
                });
            });
            if($scope.cnt == ($scope.practice.questions?$scope.practice.questions.length + $scope.qis:$scope.qis)) {
                $('#practice').submit();
            } else {
                ngDialog.openConfirm({
                    template: 'stopPractice',
                    scope: $scope
                }).then(function () {
                    $('#practice').submit();
                });
            }
        };

        $scope.getCount = function () {
            $scope.questionCount = $scope.questionCount + 1;
            return $scope.questionCount;
        };
        $scope.questionItem = 0;

        $scope.openLightboxModal = function (images, index) {
            Lightbox.openModal(images, index);
        };

        $scope.showQuestions = showQuestions;
    }]);
/**
 * Created by supostat on 16.11.15.
 */


app.controller('FreepracticeListController', ['$scope', 'QuizzesModel', '$http', 'ExamsModel', 'SubjectsModel', 'ENDPOINT_URI', 'ngDialog', '$sce',
    function ($scope, QuizzesModel, $http, ExamsModel, SubjectsModel, ENDPOINT_URI, ngDialog, $sce) {
        ExamsModel.allfree().then(function (result) {
            $scope.selectedExamType = result.data[0];
            $scope.exam_types = result.data;
        });

        // $scope.$watch('selectedExamType', function (selectedExamType) {
        //     SubjectsModel.all(selectedExamType.id).then(function (result) {
        //         if(result.data.length) {
        //             $scope.selectedSubject = result.data[0];
        //             $scope.subjects = result.data;
        //         }
        //     })
        // });

        $scope.showExam = function (exam) {
            $('.tryOut').show();
            angular.forEach($scope.exam_types, function (item) {
                item.active = true;
            });
            exam.active = !exam.active;

            SubjectsModel.all(exam.id).then(function (result) {
                if(result.data.length) {
                    $scope.selectedSubject = result.data[0];
                    $scope.subjects = result.data;
                }
            })
        };

        $scope.$watch('selectedSubject', function (selectedSubject) {
            QuizzesModel.all(selectedSubject.id).then(function (result) {
                $scope.exams = result.data;
            });
        });

        $scope.onVideoSubjectSelect = function (selectedSubject) {
            if(selectedSubject) {
                $http.get(ENDPOINT_URI + 'videos/getFreeVideos', {params:{subject_id: selectedSubject.id}}).then(function (response) {
                    $scope.videos = response.data;
                });
            } else {
                getVideos();
            }
        };

        $scope.getLength = function (length) {
            return humanizeDuration(length, {delimiter: ", "});
        };

        function freeVideosSubjects() {
            $http.get(ENDPOINT_URI + 'subjects/getFreeVideosSubjects').then(function (response) {
                $scope.videosSubjects = response.data;
            });
        }

        function getVideos() {
            $http.get(ENDPOINT_URI + 'videos/getFreeVideos').then(function (response) {
                $scope.videos = response.data;
            });
        }

        $scope.showVideo = function (video) {
            $scope.viewingVideo.HTMLframe = $sce.trustAsHtml(video.iframe);
            console.log($scope.viewingVideo.HTMLframe);

            ngDialog.openConfirm({
                template: '/templates/view-video.tpl.html',
                scope: $scope,
                className: 'ngdialog-theme-default showing-video'

            });
        };


        getVideos();
        freeVideosSubjects();

        $scope.exams = [];
        $scope.viewingVideo = {};
        $scope.selectedExamType = {};
        $scope.selectedSubject = {};
        $scope.selectedVideoSubject = {};
        $scope.selectedTopic = {};
        $scope.selectedSubTopic = {};
        $scope.videosSubjects = [];
        $scope.videos = [];

        $scope.exam_types = [];
        $scope.subjects = [];
        $scope.topics = [];
        $scope.subtopics = [];

        $scope.timer = true;
    }]);
/**
 * Created by supostat on 16.11.15.
 */


app.controller('FreepracticeListControllerXs', ['$scope', 'QuizzesModel', '$http', 'ExamsModel', 'SubjectsModel', 'ENDPOINT_URI', 'ngDialog', '$sce',
    function ($scope, QuizzesModel, $http, ExamsModel, SubjectsModel, ENDPOINT_URI, ngDialog, $sce) {
        ExamsModel.allfree().then(function (result) {
            $scope.selectedExamType = result.data[0];
            $scope.exam_types = result.data;
        });

        // $scope.$watch('selectedExamType', function (selectedExamType) {
        //     SubjectsModel.all(selectedExamType.id).then(function (result) {
        //         if(result.data.length) {
        //             $scope.selectedSubject = result.data[0];
        //             $scope.subjects = result.data;
        //         }
        //     })
        // });

        $scope.showExam = function (exam) {
            $('.tryOutXs').show();
            angular.forEach($scope.exam_types, function (item) {
                item.active = true;
            });
            exam.active = !exam.active;

            SubjectsModel.all(exam.id).then(function (result) {
                if(result.data.length) {
                    $scope.selectedSubject = result.data[0];
                    $scope.subjects = result.data;
                    $.scrollTo('.tryOutXs', 500, {offset: {top: -110}});
                }
            });
        };

        $scope.$watch('selectedSubject', function (selectedSubject) {
            QuizzesModel.all(selectedSubject.id).then(function (result) {
                $scope.exams = result.data;
            });
        });

        $scope.onVideoSubjectSelect = function (selectedSubject) {
            if(selectedSubject) {
                $http.get(ENDPOINT_URI + 'videos/getFreeVideos', {params:{subject_id: selectedSubject.id}}).then(function (response) {
                    $scope.videos = response.data;
                });
            } else {
                getVideos();
            }
        };

        $scope.getLength = function (length) {
            return humanizeDuration(length, {delimiter: ", "});
        };

        function freeVideosSubjects() {
            $http.get(ENDPOINT_URI + 'subjects/getFreeVideosSubjects').then(function (response) {
                $scope.videosSubjects = response.data;
            });
        }

        function getVideos() {
            $http.get(ENDPOINT_URI + 'videos/getFreeVideos').then(function (response) {
                $scope.videos = response.data;
            });
        }

        $scope.showVideo = function (video) {
            $scope.viewingVideo.HTMLframe = $sce.trustAsHtml(video.iframe);
            console.log($scope.viewingVideo.HTMLframe);

            ngDialog.openConfirm({
                template: '/templates/view-video.tpl.html',
                scope: $scope,
                className: 'ngdialog-theme-default showing-video'

            });
        };


        getVideos();
        freeVideosSubjects();

        $scope.exams = [];
        $scope.viewingVideo = {};
        $scope.selectedExamType = {};
        $scope.selectedSubject = {};
        $scope.selectedVideoSubject = {};
        $scope.selectedTopic = {};
        $scope.selectedSubTopic = {};
        $scope.videosSubjects = [];
        $scope.videos = [];

        $scope.exam_types = [];
        $scope.subjects = [];
        $scope.topics = [];
        $scope.subtopics = [];

        $scope.timer = true;
    }]);
/**
 * Created by supostat on 21.12.15.
 */

"use strict";

app.controller("SignUpController", ['$scope', function ($scope) {

    $scope.userTypeSelect = function (type) {
        for (var i in $scope.usertypes) {
            $scope.usertypes[i].selected = false;
        }
        type.selected = true;
    };

    $scope.sexSelect = function (sex) {
        console.log(sex);
    };

    $scope.onBirthSet = function (newDate) {
        $scope.visualDate = moment(new Date(newDate)).format('DD MMMM YYYY');
    };

    $scope.usertypes = [
        {id: 1, name: 'Student', selected: true},
        {id: 2, name: 'Teacher', selected: false},
        {id: 3, name: 'School', selected: false}
    ];

    $scope.sexs = [
        {id: 1, name: 'Male'},
        {id: 0, name: 'Female'}
    ];

    $scope.visualDate = null;
    $scope.user = {};
    $scope.user.type = {};
    $scope.user.type.selected = $scope.usertypes[0];

}]);
app.controller('StudentViewProfileController', ['$scope', '$stateParams', 'StudentsModel',
    function ($scope, $stateParams, StudentsModel) {
        function getAvatarSrc(student) {
            if(student.avatar) return student.avatar.thumb;
            if(student.sex == 1) return '/images/nophoto-male.jpg';
            if(student.sex == 0) return '/images/nophoto-female.jpg';
        }


        function getStudentData() {
            console.log($stateParams);
            StudentsModel.getStudent($stateParams.id).then(function (result) {
                console.log(result.data);
                $scope.student = result.data;
            })
        }

        $scope.student = {};
        $scope.getAvatarSrc = getAvatarSrc;

        getStudentData();
    }]);
app.controller('StudentListController', ['$scope', '$state', 'StudentsModel', '$log',
    function ($scope, $state, StudentsModel, $log) {
        $scope.view = '/templates/views/students-list.html';

        $scope.views = [{
            name: 'List',
            template: '/templates/views/students-list.html',
            icon: 'btn btn-default navbar-btn fa fa-list'
        }, {
            name: 'Grid',
            template: '/templates/views/students-grid.html',
            icon: 'btn btn-default navbar-btn fa fa-th'
        }];

        function getAvatarSrc(student) {
            if(student.avatar) return student.avatar.thumb;
            if(student.sex == 1) return '/images/nophoto-male.jpg';
            if(student.sex == 0) return '/images/nophoto-female.jpg';
        }

        function getStudentsList() {
            StudentsModel.getStudentsList().then(function (result) {
                $scope.students = result.data;
                $scope.maxSize = $scope.students.length;
                $scope.filteredStudents = $scope.students.slice(0, 5);
            })
        }

        $scope.viewProfile = function (student) {
            return 'usersProfiles.students.student({id: student.id})';
        };

        $scope.numPerPage = 5;
        $scope.currentPage = 1;

        $scope.pageChanged = function (currentPage) {
            var begin = ((currentPage - 1) * $scope.numPerPage);
            var end = begin + $scope.numPerPage;
            $scope.filteredStudents = $scope.students.slice(begin, end);
        };

        $scope.students = [];
        $scope.getAvatarSrc = getAvatarSrc;
        getStudentsList();
    }]);
/**
 * Created by supostat on 23.03.16.
 */

app.controller('TutorViewProfileController', ['$scope', 'ENDPOINT_URI', '$http', 'Notification', '$sce',
    function ($scope, ENDPOINT_URI, $http, Notification, $sce) {
        function getTutor(id) {
            $http.get(ENDPOINT_URI + 'tutors/' + id).then(
                function (response) {
                    $scope.tutor = response.data;
                    $scope.tutor.iframe = $sce.trustAsHtml($scope.tutor.iframe);
                    console.log($scope.tutor);
                },
                function (response) {
                }
            );
        }

        $scope.getYoutubeId = function (url) {
            if(url) {
                var regexp = '(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})';
                var match = url.match(regexp);
                if(match) {
                    return 'https://www.youtube.com/embed/' + match[1];
                }
                return false;
            }
        };

        $scope.sendRequest = function (tutor) {
            $http.post(ENDPOINT_URI + 'student/send-request', tutor).then(
                function () {
                    Notification.success({
                        message: 'Successfully send',
                        title: 'Request'
                    });
                    tutor.requested = true;
                },
                function (response) {
                    Notification.error({
                        message: response.data
                    });
                }
            );
        };

        $scope.getTutor = getTutor;

        $scope.tutor = {};
    }]);

/**
 * Created by supostat on 02.11.15.
 */

app.service('answersService', function($http, $stateParams, $state) {
    var answers = [];

    var addAnswer = function(newObj) {
        answers.push(newObj);
    };

    var init = function(data) {
        answers = data;
    };

    var getAnswers = function(){
        return answers;
    };

    return {
        addAnswer: addAnswer,
        getAnswers: getAnswers,
        init: init
    };

});
/**
 * Created by supostat on 09.11.15.
 */


app.factory('QuestionsService', ['TopicsModel', 'SubtopicsModel', function (TopicsModel, SubtopicsModel) {
    var topics = {},
        subtopics = {},
        answers = {},
        images = [];

    answers.list = [];
    topics.list = [];
    subtopics.list = [];
    topics.selected = {};
    subtopics.selected = {};

    answers.init = function (data) {
        answers.list = data;
    };

    answers.add = function(newObj) {
        answers.list.push(newObj);
    };

    subtopics.select = function (data) {
        subtopics.selected = data;
    };
    topics.select = function (data) {
        topics.selected = data;
    };

    answers.get = function(){
        return answers.list;
    };

    topics.init = function(data) {
       topics.list = data;
    };

    topics.add = function(newTopic) {
       topics.list.push(newTopic);
    };

    subtopics.init = function (data) {
        angular.forEach(data, function (value, key) {
            subtopics.add(value);
        })
    };

    subtopics.add = function(newSubtopic) {
        subtopics.list.push(newSubtopic);
    };

    return {
        answers: answers,
        topics: topics,
        subtopics: subtopics
    }
}]);
/**
 * Created by supostat on 09.11.15.
 */

app.factory('Test', [function () {
    var fn = {};

    fn.item = {
        FirstName: ''
    };

    return fn;
}]);
/**
 * Created by supostat on 14.12.15.
 */


app.service("User", ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this;

    service.isAdmin = function () {
        return $http.get(ENDPOINT_URI + 'users/getpermission');
    };
}]);
/**
 * Created by supostat on 15.12.15.
 */


app.service('UsersService', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var user = {};
    var url = ENDPOINT_URI + 'users';
    user.role = 'admin';
    return {
        getUser: function () {
            return user;
        },
        generateRoleData: function () {
            $http.get(url + '/getpermission').then(function (result) {
                user.role = result.data ? result.data : 'guest';
                return user;
            });
        },
        getUsers: function (usertype) {
            console.log(usertype);
            var link = usertype?'/' + usertype.id:'';
            return $http.get(url + '/get-users' + link);
        },
        deleteUser: function (user) {
            return $http.delete(url + '/' + user.id);
        },
        getRolesTypes: function () {
            return $http.get(url + '/get-roles');
        }
    };

}]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('AnswersModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'answers';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (id) {
        return $http.get(getUrl() + '/list/' + id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
}]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('ExamsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'examtypes';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.allfree = function () {
        return $http.get('/v1/examtypes/allfree');
    };

    service.all = function () {
        return $http.get(getUrl());
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.checkFree = function (itemId) {
        return $http.post(getUrl() + '/checkfree/' + itemId);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };

    service.saveOrder = function (data) {
        return $http.post(getUrl() + '/saveOrder', data);
    };


    service.changeState = function (item) {
        item.active = !item.active;
        return $http.put(getUrl() + '/changeState/' + item.id, item);
    };
}]);
/**
 * Created by supostat on 09.11.15.
 */

app.service('PracticeExamsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'quizpractices';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.selectAnswer = function (answer) {
        return $http.post(getUrl() + '/selectanswer', answer);
    };

    service.essayChange = function (question) {
        return $http.post(getUrl() + '/essaychange', question);
    };

    service.all = function (subject_id) {
        return $http.get(getUrl() + '/all?id=' + subject_id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.getQuestions = function (itemId) {
        return $http.get(getUrl() + '/viewall/' + itemId);
    };

    service.getFinishedQuizzes = function () {
        return $http.get(getUrl() + '/getFinishedQuizzes');
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };

}]);

/**
 * Created by supostat on 05.11.15.
 */
app.service('QuestionsModel', ['$http', 'ENDPOINT_URI', 'Upload', function ($http, ENDPOINT_URI, Upload) {
    var service = this,
        path = 'questions';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (id) {
        return $http.get(getUrl() + '/list?quiz_id=' + id);
    };

    service.images = function (id) {
        return $http.get(getUrl() + '/images?question_id=' + id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return Upload.upload({
            url: getUrl(),
            data: {
                'Question[imageFiles]': item.files,
                question: item.question
            }
        });
    };

    service.update = function (itemId, item) {
        return Upload.upload({
            url: getUrl()+'/update/' + itemId,
            data: {
                'Question[imageFiles]': item.newImages,
                question: item.question,
                oldImages: item.oldImages
            },
            method: 'POST'
        });
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
}]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('QuizzesModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'quizes';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (subject_id) {
        return $http.get(getUrl() + '/all?subject_id=' + subject_id);
    };

    service.allQuizzes = function () {
        return $http.get(getUrl() + '/list');
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.saveOrder = function (data) {
        return $http.post(getUrl() + '/saveOrder', data);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
}]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('SectionsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'sections';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (id) {
        return $http.get(getUrl() + '/list/' + id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
}]);
app.service('StudentsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var url = ENDPOINT_URI + 'students';

    var service = this;

    service.getStudentsList = function () {
        return $http.get(url);
    };

    service.getStudent = function (id) {
        return $http.get(url + '/' + id);
    }
}]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('SubjectsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'subjects';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (exam_id) {
        return $http.get(getUrl() + '/all?exam_id=' + exam_id);
    };

    service.getOriginList = function (exam_id) {
        return $http.get(getUrl() + '/list?exam_id=' + exam_id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.getTutorSubjectList = function (exam_id) {
        return $http.get(getUrl() + '/getTutorSubjectList/' + exam_id);
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };
    service.add = function (item) {
        return $http.post(getUrl() + '/add', item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.saveOrder = function (data) {
        return $http.post(getUrl() + '/saveOrder', data);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
    service.remove = function (itemId) {
        return $http.post(getUrl() + '/remove/' + itemId);
    };
}]);
/**
 * Created by supostat on 09.11.15.
 */

app.service('SubtopicsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'subtopic';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (topic_id) {
        return $http.get(getUrl() + '/all?id=' + topic_id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };

}]);

/**
 * Created by supostat on 09.11.15.
 */

app.service('TopicsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'topic';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (subject_id) {
        return $http.get(getUrl() + '/all?id=' + subject_id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };

}]);

app.service('TutorsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var url = ENDPOINT_URI + 'tutors';

    var service = this;

    service.getStudentsList = function () {
        return $http.get(url + '/students');
    };

    service.getStudentsRequests = function () {
        return $http.get(url + '/studentsRequests');
    };

    service.acceptRequest = function (data) {
        return $http.post(url + '/acceptRequest', data);
    };

    service.rejectRequest = function (data) {
        return $http.post(url + '/rejectRequest', data);
    };
}]);
app.service('UsersListModel', ['$http', 'ENDPOINT_URI',
    function ($http, ENDPOINT_URI) {
        var url = ENDPOINT_URI + 'users',
            service = this;

        service.getUsersList = function () {
            return $http.get(url);
        };

    }]);


/**
 * Created by supostat on 28.12.15.
 */
app.service('UsersModel', ['$http', 'ENDPOINT_URI', 'Upload', function ($http, ENDPOINT_URI, Upload) {
    var user = {};
    var url = ENDPOINT_URI + 'users';

    var service = this;

    service.getCurrentUser = function () {
        return $http.get(url + '/get-user-data');
    };

    service.saveProfile = function (data) {
        return Upload.upload({
            url: url + '/profile/' + data.id,
            data: data
        });
    };

    service.getNamesByType = function (type, data) {
        return $http.post(url + '/getNamesByType/' + type, data);
    };

    service.sendRequest = function (data) {
        return $http.post(url + '/sendRequest', data);
    };

    service.getRequests = function (data) {
        return $http.get(url + '/getRequests', {params: data});
    };

    service.getTutorStudentsCount = function () {
        return $http.get(url + '/getStudentsCount');
    };

    service.getRequestsCount = function () {
        return $http.get(url + '/getRequestsCount');
    };

    service.searchUsers = function (data) {
        return $http.post(url + '/searchUsers', data);
    };
}]);
//# sourceMappingURL=angular_site.js.map
