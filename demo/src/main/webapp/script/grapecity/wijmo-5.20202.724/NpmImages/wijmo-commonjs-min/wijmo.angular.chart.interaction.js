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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),mNg=require("angular"),wjcChartInteraction=require("wijmo/wijmo.chart.interaction"),wjNg=mNg,wijmoChartInteractionName="wj.chart.interaction";exports.ngModuleName=wijmoChartInteractionName;var wijmoChartInteraction=wijmo_angular_base_1._registerNgModule(wijmoChartInteractionName);if(wijmo_angular_base_1.softRefChartInteraction()){wijmoChartInteraction.directive("wjFlexChartRangeSelector",[function(){return new WjFlexChartRangeSelector}]);wijmoChartInteraction.directive("wjFlexChartGestures",[function(){return new WjFlexChartChartGestures}]);wijmoChartInteraction.directive("wjFlexChartChartGestures",[function(){return new WjFlexChartChartGestures}])}var WjFlexChartRangeSelector=function(e){__extends(WjFlexChartRangeSelector,e);function WjFlexChartRangeSelector(){var t=e.call(this)||this;t.require=["?^wjFlexChart","?^wjFinancialChart"];return t}Object.defineProperty(WjFlexChartRangeSelector.prototype,"_controlConstructor",{get:function(){return wjcChartInteraction.RangeSelector},enumerable:!0,configurable:!0});return WjFlexChartRangeSelector}(wijmo_angular_base_1.WjDirective);exports.WjFlexChartRangeSelector=WjFlexChartRangeSelector;var WjFlexChartChartGestures=function(e){__extends(WjFlexChartChartGestures,e);function WjFlexChartChartGestures(){var t=e.call(this)||this;t.require=["?^wjFlexChart","?^wjFinancialChart"];return t}Object.defineProperty(WjFlexChartChartGestures.prototype,"_controlConstructor",{get:function(){return wjcChartInteraction.ChartGestures},enumerable:!0,configurable:!0});return WjFlexChartChartGestures}(wijmo_angular_base_1.WjDirective);exports.WjFlexChartChartGestures=WjFlexChartChartGestures;