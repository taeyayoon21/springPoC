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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),mKo=require("knockout"),wjcChartAnim=require("wijmo/wijmo.chart.animation"),wjKo=mKo,wjFlexChartAnimation=function(t){__extends(wjFlexChartAnimation,t);function wjFlexChartAnimation(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAnimation.prototype._getControlConstructor=function(){return wjcChartAnim.ChartAnimation};return wjFlexChartAnimation}(wijmo_knockout_base_1.WjBinding);exports.wjFlexChartAnimation=wjFlexChartAnimation;wjKo.bindingHandlers.wjFlexChartAnimation=new wjFlexChartAnimation;