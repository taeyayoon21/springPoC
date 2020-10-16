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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),wijmo_knockout_grid_1=require("wijmo/wijmo.knockout.grid"),mKo=require("knockout"),wjcSheet=require("wijmo/wijmo.grid.sheet"),wjKo=mKo,wjFlexSheet=function(e){__extends(wjFlexSheet,e);function wjFlexSheet(){return null!==e&&e.apply(this,arguments)||this}wjFlexSheet.prototype._getControlConstructor=function(){return wjcSheet.FlexSheet};return wjFlexSheet}(wijmo_knockout_grid_1.wjFlexGrid);exports.wjFlexSheet=wjFlexSheet;var wjSheet=function(e){__extends(wjSheet,e);function wjSheet(){return null!==e&&e.apply(this,arguments)||this}wjSheet.prototype._getControlConstructor=function(){return wjcSheet.Sheet};wjSheet.prototype._createWijmoContext=function(){return new WjSheetContext(this)};return wjSheet}(wijmo_knockout_base_1.WjBinding);exports.wjSheet=wjSheet;var WjSheetContext=function(e){__extends(WjSheetContext,e);function WjSheetContext(){return null!==e&&e.apply(this,arguments)||this}WjSheetContext.prototype._initControl=function(){e.prototype._initControl.call(this);var t=this.valueAccessor(),o=this.parentWjContext.control,n=wjKo.unwrap(t.itemsSource),r=wjKo.unwrap(t.name);return n?o.addBoundSheet(r,n):o.addUnboundSheet(r,+wjKo.unwrap(t.rowCount),+wjKo.unwrap(t.columnCount))};return WjSheetContext}(wijmo_knockout_base_1.WjContext);exports.WjSheetContext=WjSheetContext;wjKo.bindingHandlers.wjFlexSheet=new wjFlexSheet;wjKo.bindingHandlers.wjSheet=new wjSheet;