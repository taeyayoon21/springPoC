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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)t.hasOwnProperty(o)&&(r[o]=t[o])})(r,t)};return function(r,t){extendStatics(r,t);function __(){this.constructor=r}r.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),wijmo_angular_grid_1=require("wijmo/wijmo.angular.grid"),mNg=require("angular"),wjcGridMultirow=require("wijmo/wijmo.grid.multirow"),wjNg=mNg,wijmoGridMultirowName="wj.grid.multirow";exports.ngModuleName=wijmoGridMultirowName;var wijmoGridMultirow=wijmo_angular_base_1._registerNgModule(wijmoGridMultirowName);wijmo_angular_base_1.softRefGridMultirow()&&wijmoGridMultirow.directive("wjMultiRow",["$compile","$interpolate",function(r,t){return new WjMultiRow(r,t)}]);var WjMultiRow=function(r){__extends(WjMultiRow,r);function WjMultiRow(t,o){return r.call(this,t,o)||this}Object.defineProperty(WjMultiRow.prototype,"_controlConstructor",{get:function(){return wjcGridMultirow.MultiRow},enumerable:!0,configurable:!0});return WjMultiRow}(wijmo_angular_grid_1.WjFlexGrid);exports.WjMultiRow=WjMultiRow;