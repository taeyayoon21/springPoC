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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{WjDirective,_registerNgModule,softRefChartInteraction}from"wijmo/wijmo.angular.base";import*as mNg from"angular";import*as wjcChartInteraction from"wijmo/wijmo.chart.interaction";var wjNg=mNg,wijmoChartInteractionName="wj.chart.interaction";export var ngModuleName=wijmoChartInteractionName;var wijmoChartInteraction=_registerNgModule(wijmoChartInteractionName);if(softRefChartInteraction()){wijmoChartInteraction.directive("wjFlexChartRangeSelector",[function(){return new WjFlexChartRangeSelector}]);wijmoChartInteraction.directive("wjFlexChartGestures",[function(){return new WjFlexChartChartGestures}]);wijmoChartInteraction.directive("wjFlexChartChartGestures",[function(){return new WjFlexChartChartGestures}])}var WjFlexChartRangeSelector=function(t){__extends(WjFlexChartRangeSelector,t);function WjFlexChartRangeSelector(){var e=t.call(this)||this;e.require=["?^wjFlexChart","?^wjFinancialChart"];return e}Object.defineProperty(WjFlexChartRangeSelector.prototype,"_controlConstructor",{get:function(){return wjcChartInteraction.RangeSelector},enumerable:!0,configurable:!0});return WjFlexChartRangeSelector}(WjDirective);export{WjFlexChartRangeSelector};var WjFlexChartChartGestures=function(t){__extends(WjFlexChartChartGestures,t);function WjFlexChartChartGestures(){var e=t.call(this)||this;e.require=["?^wjFlexChart","?^wjFinancialChart"];return e}Object.defineProperty(WjFlexChartChartGestures.prototype,"_controlConstructor",{get:function(){return wjcChartInteraction.ChartGestures},enumerable:!0,configurable:!0});return WjFlexChartChartGestures}(WjDirective);export{WjFlexChartChartGestures};