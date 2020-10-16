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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(a,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var r in n)n.hasOwnProperty(r)&&(a[r]=n[r])})(a,n)};return function(a,n){extendStatics(a,n);function __(){this.constructor=a}a.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),wijmo_angular_chart_1=require("wijmo/wijmo.angular.chart"),mNg=require("angular"),wjcChartFinance=require("wijmo/wijmo.chart.finance"),wjNg=mNg,wijmoChartFinanceName="wj.chart.finance";exports.ngModuleName=wijmoChartFinanceName;var wijmoChartFinance=wijmo_angular_base_1._registerNgModule(wijmoChartFinanceName);if(wijmo_angular_base_1.softRefChartFinance()){wijmoChartFinance.directive("wjFinancialChart",[function(){return new WjFinancialChart}]);wijmoChartFinance.directive("wjFinancialChartSeries",[function(){return new WjFinancialChartSeries}])}var WjFinancialChart=function(a){__extends(WjFinancialChart,a);function WjFinancialChart(){return null!==a&&a.apply(this,arguments)||this}Object.defineProperty(WjFinancialChart.prototype,"_controlConstructor",{get:function(){return wjcChartFinance.FinancialChart},enumerable:!0,configurable:!0});return WjFinancialChart}(wijmo_angular_chart_1.WjFlexChartCore);exports.WjFinancialChart=WjFinancialChart;var WjFinancialChartSeries=function(a){__extends(WjFinancialChartSeries,a);function WjFinancialChartSeries(){var n=a.call(this)||this;n.require="^wjFinancialChart";n.template='<div class="wjFinancialChartSeries" ng-transclude />';return n}Object.defineProperty(WjFinancialChartSeries.prototype,"_controlConstructor",{get:function(){return wjcChartFinance.FinancialSeries},enumerable:!0,configurable:!0});return WjFinancialChartSeries}(wijmo_angular_chart_1.WjSeriesBase);exports.WjFinancialChartSeries=WjFinancialChartSeries;