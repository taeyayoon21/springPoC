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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),mKo=require("knockout"),wjcFilter=require("wijmo/wijmo.grid.filter"),wjKo=mKo,wjFlexGridFilter=function(e){__extends(wjFlexGridFilter,e);function wjFlexGridFilter(){return null!==e&&e.apply(this,arguments)||this}wjFlexGridFilter.prototype._getControlConstructor=function(){return wjcFilter.FlexGridFilter};return wjFlexGridFilter}(wijmo_knockout_base_1.WjBinding);exports.wjFlexGridFilter=wjFlexGridFilter;wjKo.bindingHandlers.wjFlexGridFilter=new wjFlexGridFilter;