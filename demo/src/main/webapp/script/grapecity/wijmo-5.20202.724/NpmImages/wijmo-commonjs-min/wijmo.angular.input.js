﻿/*!
    *
    * Wijmo Library 5.20202.724
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=require("wijmo/wijmo"),wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),mNg=require("angular"),wjcInput=require("wijmo/wijmo.input"),wjNg=mNg,wijmoInputName="wj.input";exports.ngModuleName=wijmoInputName;var wijmoInput=wijmo_angular_base_1._registerNgModule(wijmoInputName);if(wijmo_angular_base_1.softRefInput()){wijmoInput.directive("wjAutoComplete",["$compile",function(t){return new WjAutoComplete(t)}]);wijmoInput.directive("wjCalendar",[function(){return new WjCalendar}]);wijmoInput.directive("wjColorPicker",[function(){return new WjColorPicker}]);wijmoInput.directive("wjComboBox",["$compile",function(t){return new WjComboBox(t)}]);wijmoInput.directive("wjInputDate",[function(){return new WjInputDate}]);wijmoInput.directive("wjInputDateTime",[function(){return new WjInputDateTime}]);wijmoInput.directive("wjInputNumber",[function(){return new WjInputNumber}]);wijmoInput.directive("wjInputMask",[function(){return new WjInputMask}]);wijmoInput.directive("wjInputTime",["$compile",function(t){return new WjInputTime(t)}]);wijmoInput.directive("wjInputColor",[function(){return new WjInputColor}]);wijmoInput.directive("wjListBox",[function(){return new WjListBox}]);wijmoInput.directive("wjItemTemplate",["$compile",function(t){return new WjItemTemplate(t)}]);wijmoInput.directive("wjMenu",["$compile",function(t){return new WjMenu(t)}]);wijmoInput.directive("wjMenuItem",[function(t){return new WjMenuItem}]);wijmoInput.directive("wjMenuSeparator",[function(){return new WjMenuSeparator}]);wijmoInput.directive("wjContextMenu",[function(){return new WjContextMenu}]);wijmoInput.directive("wjCollectionViewNavigator",[function(){return new WjCollectionViewNavigator}]);wijmoInput.directive("wjCollectionViewPager",[function(){return new WjCollectionViewPager}]);wijmoInput.directive("wjPopup",[function(){return new WjPopup}]);wijmoInput.directive("wjMultiSelect",["$compile",function(t){return new WjMultiSelect(t)}]);wijmoInput.directive("wjMultiAutoComplete",["$compile",function(t){return new WjMultiAutoComplete(t)}])}var WjDropDown=function(t){__extends(WjDropDown,t);function WjDropDown(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjDropDown.prototype,"_controlConstructor",{get:function(){return wjcInput.DropDown},enumerable:!0,configurable:!0});return WjDropDown}(wijmo_angular_base_1.WjDirective);exports.WjDropDown=WjDropDown;var WjComboBox=function(t){__extends(WjComboBox,t);function WjComboBox(e){var n=t.call(this)||this;n._$compile=e;n.template="<div ng-transclude />";n.transclude=!0;return n}Object.defineProperty(WjComboBox.prototype,"_controlConstructor",{get:function(){return wjcInput.ComboBox},enumerable:!0,configurable:!0});return WjComboBox}(WjDropDown);exports.WjComboBox=WjComboBox;var WjAutoComplete=function(t){__extends(WjAutoComplete,t);function WjAutoComplete(e){return t.call(this,e)||this}Object.defineProperty(WjAutoComplete.prototype,"_controlConstructor",{get:function(){return wjcInput.AutoComplete},enumerable:!0,configurable:!0});return WjAutoComplete}(WjComboBox);exports.WjAutoComplete=WjAutoComplete;var WjCalendar=function(t){__extends(WjCalendar,t);function WjCalendar(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjCalendar.prototype,"_controlConstructor",{get:function(){return wjcInput.Calendar},enumerable:!0,configurable:!0});return WjCalendar}(wijmo_angular_base_1.WjDirective);exports.WjCalendar=WjCalendar;var WjColorPicker=function(t){__extends(WjColorPicker,t);function WjColorPicker(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjColorPicker.prototype,"_controlConstructor",{get:function(){return wjcInput.ColorPicker},enumerable:!0,configurable:!0});return WjColorPicker}(wijmo_angular_base_1.WjDirective);exports.WjColorPicker=WjColorPicker;var WjListBox=function(t){__extends(WjListBox,t);function WjListBox(){var e=t.call(this)||this;e.transclude=!0;e.template="<div ng-transclude />";return e}Object.defineProperty(WjListBox.prototype,"_controlConstructor",{get:function(){return wjcInput.ListBox},enumerable:!0,configurable:!0});return WjListBox}(wijmo_angular_base_1.WjDirective);exports.WjListBox=WjListBox;var WjItemTemplate=function(t){__extends(WjItemTemplate,t);function WjItemTemplate(e){var n=t.call(this)||this;n._$compile=e;n.require=["?^wjListBox","?^wjMenu"];n.terminal=!0;if(wijmo_angular_base_1.WjDirective._dynaTemplates){n.transclude=!1;n.priority=100;n.template=function(t,e){e[WjItemTemplate._itemTemplateProp]=t[0].innerHTML;return"<div />"}}else{n.transclude=!0;n.template="<div ng-transclude/>"}return n}WjItemTemplate.prototype._initControl=function(t){return{}};WjItemTemplate.prototype._createLink=function(){return new WjItemTemplateLink};WjItemTemplate.prototype._getMetaDataId=function(){return"ItemTemplate"};WjItemTemplate._itemTemplateProp="$__wjItemTemplate";WjItemTemplate._itemScopeProp="$_itemScope";return WjItemTemplate}(wijmo_angular_base_1.WjDirective);exports.WjItemTemplate=WjItemTemplate;var WjItemTemplateLink=function(t){__extends(WjItemTemplateLink,t);function WjItemTemplateLink(){return null!==t&&t.apply(this,arguments)||this}WjItemTemplateLink.prototype._initParent=function(){t.prototype._initParent.call(this);var e=this.tAttrs[WjItemTemplate._itemTemplateProp],n=this.parent.control,o=this._getListBox();this.itemTemplate=null!=e?e:wijmo_angular_base_1.WjDirective._removeTransclude(this.tElement[0].innerHTML);o.formatItem.addHandler(this._fmtItem,this);o.loadingItems.addHandler(this._loadingItems,this);this.parent._isInitialized&&n.invalidate()};WjItemTemplateLink.prototype._destroy=function(){var e=this.parent&&this.parent.control,n=this._getListBox();if(n){n.formatItem.removeHandler(this._fmtItem,this);n.loadingItems.removeHandler(this._loadingItems,this)}t.prototype._destroy.call(this);this._tmplLink=null;e&&e.invalidate()};WjItemTemplateLink.prototype._loadingItems=function(t){for(var e=t.hostElement.getElementsByClassName("wj-listbox-item"),n=e.length-1;n>=0;n--){var o=e[n],r=o[WjItemTemplate._itemScopeProp];if(r){o[WjItemTemplate._itemScopeProp]=null;r.$destroy()}}};WjItemTemplateLink.prototype._fmtItem=function(t,e){this._tmplLink||(this._tmplLink=this.directive._$compile("<div>"+this.itemTemplate+"</div>"));var n=e.item,o=this.scope.$parent.$new();n[WjItemTemplate._itemScopeProp]=o;o.$control=t;o.$item=e.data;o.$itemIndex=e.index;var r=this._tmplLink(o,(function(t,e){}))[0];if(1===n.childNodes.length)n.replaceChild(r,n.firstChild);else{n.textContent="";n.appendChild(r)}clearTimeout(this._closingApplyTimeOut);this._closingApplyTimeOut=setTimeout((function(){o.$root.$$phase||o.$apply()}),40)};WjItemTemplateLink._invalidateControl=function(t){t&&t.invalidate()};WjItemTemplateLink.prototype._getListBox=function(){var t=this.parent&&this.parent.control;return t?t instanceof wjcInput.ListBox?t:t.listBox:null};return WjItemTemplateLink}(wijmo_angular_base_1.WjLink),WjMenu=function(t){__extends(WjMenu,t);function WjMenu(e){return t.call(this,e)||this}Object.defineProperty(WjMenu.prototype,"_controlConstructor",{get:function(){return wjcInput.Menu},enumerable:!0,configurable:!0});WjMenu.prototype._createLink=function(){return new WjMenuLink};WjMenu.prototype._initProps=function(){t.prototype._initProps.call(this);var e=this;wijmo_angular_base_1.MetaFactory.findProp("value",this._props).customHandler=function(t,n,o,r,i){e.updateControlValue(t,n,i)}};WjMenu.prototype.updateControlValue=function(t,e,n){if(null!=t.value){e.selectedValue=t.value;n.directive.updateHeader(t,e,n)}};WjMenu.prototype.updateHeader=function(t,e,n){e.header=t.header||"";var o=e.selectedItem;if(void 0!==t.value&&o&&e.displayMemberPath){var r=o[WjMenuItem._itemLinkProp],i=r?r.linkedContent.innerHTML:o[e.displayMemberPath];null!=i&&(e.header+=": <b>"+i+"</b>")}};return WjMenu}(WjComboBox);exports.WjMenu=WjMenu;var WjMenuLink=function(t){__extends(WjMenuLink,t);function WjMenuLink(){return null!==t&&t.apply(this,arguments)||this}WjMenuLink.prototype._initControl=function(){var t=this,e=new wjcInput.Menu(this.directiveTemplateElement[0],{itemsSource:new wijmo_1.ObservableArray,selectedIndex:0,itemClicked:function(){t._safeApply(t.scope,"value",e.selectedValue)||t.scope.$root.$$phase||t.scope.$apply();t.directive.updateHeader(t.scope,e,t)}.bind(t)});e.listBox.formatItem.addHandler(t._fmtItem,this);e.listBox.loadingItems.addHandler(this._loadingItems,this);return e};WjMenuLink.prototype._initialized=function(){this.directive.updateControlValue(this.scope,this.control,this)};WjMenuLink.prototype._fmtItem=function(t,e){var n=e.data[WjMenuItem._itemLinkProp];if(n){n.contentLink||(n.contentLink=this.directive._$compile("<div>"+n.itemTemplate+"</div>"));var o=this,r=e.item,i=n.scope.$parent.$new();r[WjMenuItem._itemScopeProp]=i;i.$control=this.control;i.$item=e.data;i.$itemIndex=e.index;var u=n.linkedContent=n.contentLink(i,(function(t,e){}))[0];n.isSeparator&&wijmo_1.addClass(r,"wj-state-disabled");if(1===r.childNodes.length)r.replaceChild(u,r.firstChild);else{r.textContent="";r.appendChild(u)}clearTimeout(this._closingApplyTimeOut);this._closingApplyTimeOut=setTimeout((function(){i.$root.$$phase||i.$apply();o.control.selectedItem&&o.directive.updateHeader(o.scope,o.control,o)}),40)}};WjMenuLink.prototype._loadingItems=function(t){for(var e=t.hostElement.getElementsByClassName("wj-listbox-item"),n=e.length-1;n>=0;n--){var o=e[n],r=o[WjMenuItem._itemScopeProp];if(r){o[WjItemTemplate._itemScopeProp]=null;r.$destroy()}}};return WjMenuLink}(wijmo_angular_base_1.WjLink),WjMenuItem=function(t){__extends(WjMenuItem,t);function WjMenuItem(){var e=t.call(this)||this;e.require="^wjMenu";e.terminal=!0;if(wijmo_angular_base_1.WjDirective._dynaTemplates){e.transclude=!1;e.priority=100;e.template=function(t,e){e[WjItemTemplate._itemTemplateProp]=t[0].innerHTML;return"<div />"}}else{e.transclude=!0;e.template="<div ng-transclude/>"}return e}WjMenuItem.prototype._createLink=function(){return new WjMenuItemLink(!1)};WjMenuItem.prototype._getMetaDataId=function(){return"MenuItem"};WjMenuItem.prototype._getId=function(){return WjMenuItem._directiveId};WjMenuItem._itemTemplateProp="$__wjMenuItemTemplate";WjMenuItem._itemScopeProp="$_menuItemScope";WjMenuItem._itemLinkProp="$_menuItemLink";WjMenuItem._directiveId="menuItemDir";return WjMenuItem}(wijmo_angular_base_1.WjDirective);exports.WjMenuItem=WjMenuItem;var WjMenuItemLink=function(t){__extends(WjMenuItemLink,t);function WjMenuItemLink(e){var n=t.call(this)||this;n.isSeparator=e;return n}WjMenuItemLink.prototype._initControl=function(){var t=this.tAttrs[WjItemTemplate._itemTemplateProp];this.itemTemplate=this.isSeparator?'<div class="wj-state-disabled" style="width:100%;height:1px;background-color:lightgray"></div>':null!=t?t:wijmo_angular_base_1.WjDirective._removeTransclude(this.tElement[0].innerHTML);var e={value:null,cmd:null,cmdParam:null,header:this.itemTemplate};e[WjMenuItem._itemLinkProp]=this;return e};WjMenuItemLink.prototype._initParent=function(){t.prototype._initParent.call(this);var e=this.parent.control;1==e.itemsSource.length&&e.selectedIndex<0&&(e.selectedIndex=0);e.displayMemberPath||(e.displayMemberPath="header");e.selectedValuePath||(e.selectedValuePath="value");e.commandPath||(e.commandPath="cmd");e.commandParameterPath||(e.commandParameterPath="cmdParam")};WjMenuItemLink.prototype._destroy=function(){var e=this.parent&&this.parent.control;t.prototype._destroy.call(this);e&&e.invalidate()};return WjMenuItemLink}(wijmo_angular_base_1.WjLink),WjMenuSeparator=function(t){__extends(WjMenuSeparator,t);function WjMenuSeparator(){var e=t.call(this)||this;e.template="<span />";e.require="^wjMenu";return e}WjMenuSeparator.prototype._getMetaDataId=function(){return"MenuSeparator"};WjMenuSeparator.prototype._createLink=function(){return new WjMenuItemLink(!0)};WjMenuSeparator.prototype._getId=function(){return WjMenuItem._directiveId};return WjMenuSeparator}(wijmo_angular_base_1.WjDirective);exports.WjMenuSeparator=WjMenuSeparator;var WjContextMenu=function(t){__extends(WjContextMenu,t);function WjContextMenu(){var e=t.call(this)||this;e.template=void 0;e.restrict="A";e.scope=!1;return e}WjContextMenu.prototype._getMetaDataId=function(){return"WjContextMenu"};WjContextMenu.prototype._postLinkFn=function(){return function(t,e,n){var o=wijmo_1.getElement(n.wjContextMenu);e[0].addEventListener("contextmenu",(function(t){var n=wijmo_1.Control.getControl(o),r=n.dropDown;if(n&&r&&!wijmo_1.closest(t.target,"[disabled]")){t.preventDefault();n.owner=e[0];n.show(t)}}))}};return WjContextMenu}(wijmo_angular_base_1.WjDirective);exports.WjContextMenu=WjContextMenu;var WjInputDate=function(t){__extends(WjInputDate,t);function WjInputDate(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjInputDate.prototype,"_controlConstructor",{get:function(){return wjcInput.InputDate},enumerable:!0,configurable:!0});return WjInputDate}(WjDropDown);exports.WjInputDate=WjInputDate;var WjInputDateTime=function(t){__extends(WjInputDateTime,t);function WjInputDateTime(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjInputDateTime.prototype,"_controlConstructor",{get:function(){return wjcInput.InputDateTime},enumerable:!0,configurable:!0});return WjInputDateTime}(WjInputDate);exports.WjInputDateTime=WjInputDateTime;var WjInputNumber=function(t){__extends(WjInputNumber,t);function WjInputNumber(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjInputNumber.prototype,"_controlConstructor",{get:function(){return wjcInput.InputNumber},enumerable:!0,configurable:!0});return WjInputNumber}(wijmo_angular_base_1.WjDirective);exports.WjInputNumber=WjInputNumber;var WjInputMask=function(t){__extends(WjInputMask,t);function WjInputMask(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjInputMask.prototype,"_controlConstructor",{get:function(){return wjcInput.InputMask},enumerable:!0,configurable:!0});return WjInputMask}(wijmo_angular_base_1.WjDirective);exports.WjInputMask=WjInputMask;var WjInputTime=function(t){__extends(WjInputTime,t);function WjInputTime(e){return t.call(this,e)||this}Object.defineProperty(WjInputTime.prototype,"_controlConstructor",{get:function(){return wjcInput.InputTime},enumerable:!0,configurable:!0});return WjInputTime}(WjComboBox);exports.WjInputTime=WjInputTime;var WjInputColor=function(t){__extends(WjInputColor,t);function WjInputColor(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjInputColor.prototype,"_controlConstructor",{get:function(){return wjcInput.InputColor},enumerable:!0,configurable:!0});return WjInputColor}(WjDropDown);exports.WjInputColor=WjInputColor;var WjPopup=function(t){__extends(WjPopup,t);function WjPopup(){var e=t.call(this)||this;e.transclude=!0;e.template="<div ng-transclude/>";return e}Object.defineProperty(WjPopup.prototype,"_controlConstructor",{get:function(){return wjcInput.Popup},enumerable:!0,configurable:!0});WjPopup.prototype._initProps=function(){t.prototype._initProps.call(this);wijmo_angular_base_1.MetaFactory.findProp("owner",this._props).customHandler=function(t,e,n,o,r){null==t.modal&&(e.modal=!n)}};return WjPopup}(wijmo_angular_base_1.WjDirective);exports.WjPopup=WjPopup;var WjMultiSelect=function(t){__extends(WjMultiSelect,t);function WjMultiSelect(e){return t.call(this,e)||this}Object.defineProperty(WjMultiSelect.prototype,"_controlConstructor",{get:function(){return wjcInput.MultiSelect},enumerable:!0,configurable:!0});return WjMultiSelect}(WjComboBox);exports.WjMultiSelect=WjMultiSelect;var WjMultiAutoComplete=function(t){__extends(WjMultiAutoComplete,t);function WjMultiAutoComplete(e){return t.call(this,e)||this}Object.defineProperty(WjMultiAutoComplete.prototype,"_controlConstructor",{get:function(){return wjcInput.MultiAutoComplete},enumerable:!0,configurable:!0});return WjMultiAutoComplete}(WjAutoComplete);exports.WjMultiAutoComplete=WjMultiAutoComplete;var WjCollectionViewNavigator=function(t){__extends(WjCollectionViewNavigator,t);function WjCollectionViewNavigator(){var e=t.call(this)||this;e.template='<div class="wj-control wj-content wj-pager"><div class="wj-input-group"><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button" ng-click="cv.moveCurrentToFirst()" ng-disabled="cv.currentPosition <= 0"><span class="wj-glyph-left" style="margin-right:-4px"></span><span class="wj-glyph-left"></span> </button></span><span class="wj-input-group-btn"> <button class="wj-btn wj-btn-default" type="button" ng-click="cv.moveCurrentToPrevious()" ng-disabled="cv.currentPosition <= 0"><span class="wj-glyph-left"></span> </button></span><input type="text" class="wj-form-control" value=" {{cv.currentPosition + 1 | number}} / {{cv.itemCount | number}} " disabled /><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button" ng-click="cv.moveCurrentToNext()" ng-disabled="cv.currentPosition >= cv.itemCount - 1"><span class="wj-glyph-right"></span></button></span><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button" ng-click="cv.moveCurrentToLast()" ng-disabled="cv.currentPosition >= cv.itemCount - 1"><span class="wj-glyph-right"></span><span class="wj-glyph-right" style="margin-left:-4px"></span></button></span></div></div>';return e}WjCollectionViewNavigator.prototype._getMetaDataId=function(){return"CollectionViewNavigator"};WjCollectionViewNavigator.prototype._postLinkFn=function(){return function(t,e,n,o){}};return WjCollectionViewNavigator}(wijmo_angular_base_1.WjDirective);exports.WjCollectionViewNavigator=WjCollectionViewNavigator;var WjCollectionViewPager=function(t){__extends(WjCollectionViewPager,t);function WjCollectionViewPager(){var e=t.call(this)||this;e.template='<div class="wj-control wj-content wj-pager"><div class="wj-input-group"><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button"ng-click="cv.moveToFirstPage()"ng-disabled="cv.pageIndex <= 0"><span class="wj-glyph-left" style="margin-right:-4px"></span><span class="wj-glyph-left"></span></button></span><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button"ng-click="cv.moveToPreviousPage()"ng-disabled="cv.pageIndex <= 0"><span class="wj-glyph-left"></span></button></span><input type="text" class="wj-form-control" value="{{cv.pageIndex + 1 | number}} / {{cv.pageCount | number}}" disabled /><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button"ng-click="cv.moveToNextPage()"ng-disabled="cv.pageIndex >= cv.pageCount - 1"><span class="wj-glyph-right"></span></button></span><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button"ng-click="cv.moveToLastPage()"ng-disabled="cv.pageIndex >= cv.pageCount - 1"><span class="wj-glyph-right"></span><span class="wj-glyph-right" style="margin-left:-4px"></span></button></span></div></div>';return e}WjCollectionViewPager.prototype._getMetaDataId=function(){return"CollectionViewPager"};WjCollectionViewPager.prototype._postLinkFn=function(){return function(t,e,n,o){}};return WjCollectionViewPager}(wijmo_angular_base_1.WjDirective);exports.WjCollectionViewPager=WjCollectionViewPager;