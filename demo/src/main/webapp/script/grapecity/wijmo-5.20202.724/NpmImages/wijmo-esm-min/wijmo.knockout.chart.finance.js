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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{WjBinding,WjContext,MetaFactory}from"wijmo/wijmo.knockout.base";import{WjFlexChartBaseBinding}from"wijmo/wijmo.knockout.chart";import*as mKo from"knockout";import*as wjcChartFin from"wijmo/wijmo.chart.finance";var wjKo=mKo,wjFinancialChart=function(t){__extends(wjFinancialChart,t);function wjFinancialChart(){return null!==t&&t.apply(this,arguments)||this}wjFinancialChart.prototype._getControlConstructor=function(){return wjcChartFin.FinancialChart};wjFinancialChart.prototype._initialize=function(){t.prototype._initialize.call(this);MetaFactory.findProp("labelContent",this._metaData.props).updateControl=function(t,n,i,a,r){null!=r&&(i.dataLabel.content=r);return!0}};return wjFinancialChart}(WjFlexChartBaseBinding);export{wjFinancialChart};var wjFinancialChartSeries=function(t){__extends(wjFinancialChartSeries,t);function wjFinancialChartSeries(){return null!==t&&t.apply(this,arguments)||this}wjFinancialChartSeries.prototype._getControlConstructor=function(){return wjcChartFin.FinancialSeries};wjFinancialChartSeries.prototype._createWijmoContext=function(){return new WjFinancialChartSeriesContext(this)};return wjFinancialChartSeries}(WjBinding);export{wjFinancialChartSeries};var WjFinancialChartSeriesContext=function(t){__extends(WjFinancialChartSeriesContext,t);function WjFinancialChartSeriesContext(){return null!==t&&t.apply(this,arguments)||this}WjFinancialChartSeriesContext.prototype._initControl=function(){var n=this;t.prototype._initControl.call(this);var i=this.parentWjContext.control;i instanceof wjcChartFin.FinancialChart&&i.seriesVisibilityChanged.addHandler((function(t,i){n._updateSource()}))};return WjFinancialChartSeriesContext}(WjContext);export{WjFinancialChartSeriesContext};wjKo.bindingHandlers.wjFinancialChart=new wjFinancialChart;wjKo.bindingHandlers.wjFinancialChartSeries=new wjFinancialChartSeries;