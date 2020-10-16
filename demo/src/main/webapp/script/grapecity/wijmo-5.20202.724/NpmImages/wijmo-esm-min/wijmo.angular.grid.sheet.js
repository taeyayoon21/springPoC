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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{WjDirective,_registerNgModule,softRefGridSheet}from"wijmo/wijmo.angular.base";import{WjFlexGrid}from"wijmo/wijmo.angular.grid";import*as mNg from"angular";import*as wjcGridSheet from"wijmo/wijmo.grid.sheet";var wjNg=mNg,wijmoGridSheetName="wj.grid.sheet";export var ngModuleName=wijmoGridSheetName;var wijmoGridSheet=_registerNgModule(wijmoGridSheetName);if(softRefGridSheet()){wijmoGridSheet.directive("wjFlexSheet",["$compile","$interpolate",function(e,t){return new WjFlexSheet(e,t)}]);wijmoGridSheet.directive("wjSheet",[function(){return new WjSheet}])}var WjFlexSheet=function(e){__extends(WjFlexSheet,e);function WjFlexSheet(t,r){return e.call(this,t,r)||this}Object.defineProperty(WjFlexSheet.prototype,"_controlConstructor",{get:function(){return wjcGridSheet.FlexSheet},enumerable:!0,configurable:!0});return WjFlexSheet}(WjFlexGrid),WjSheet=function(e){__extends(WjSheet,e);function WjSheet(){var t=e.call(this)||this;t.require="^wjFlexSheet";return t}Object.defineProperty(WjSheet.prototype,"_controlConstructor",{get:function(){return wjcGridSheet.Sheet},enumerable:!0,configurable:!0});WjSheet.prototype._initControl=function(t){return e.prototype._initControl.call(this,void 0)};return WjSheet}(WjDirective);