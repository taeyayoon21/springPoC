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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{WjBinding}from"wijmo/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcChartInter from"wijmo/wijmo.chart.interaction";var wjKo=mKo,wjFlexChartRangeSelector=function(t){__extends(wjFlexChartRangeSelector,t);function wjFlexChartRangeSelector(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartRangeSelector.prototype._getControlConstructor=function(){return wjcChartInter.RangeSelector};return wjFlexChartRangeSelector}(WjBinding);export{wjFlexChartRangeSelector};var wjFlexChartGestures=function(t){__extends(wjFlexChartGestures,t);function wjFlexChartGestures(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartGestures.prototype._getControlConstructor=function(){return wjcChartInter.ChartGestures};return wjFlexChartGestures}(WjBinding);export{wjFlexChartGestures};wjKo.bindingHandlers.wjFlexChartRangeSelector=new wjFlexChartRangeSelector;wjKo.bindingHandlers.wjFlexChartGestures=new wjFlexChartGestures;