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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcChartFinance from"wijmo/wijmo.chart.finance";var FinancialChart=function(t){__extends(FinancialChart,t);function FinancialChart(n){return t.call(this,n,wjcChartFinance.FinancialChart,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection","renderEngine"]})||this}FinancialChart.prototype.componentDidMount=function(){var n=t.prototype.componentDidMount.call(this);this._setExtra(this.props);return n};FinancialChart.prototype.componentDidUpdate=function(n){t.prototype.componentDidUpdate.call(this,n);this._setExtra(this.props)};FinancialChart.prototype._setExtra=function(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)};return FinancialChart}(ComponentBase);export{FinancialChart};var FinancialChartSeries=function(t){__extends(FinancialChartSeries,t);function FinancialChartSeries(n){var e=t.call(this,n,wjcChartFinance.FinancialSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","tooltipContent"]})||this;e._parentProp="series";e._siblingId="series";return e}return FinancialChartSeries}(ComponentBase);export{FinancialChartSeries};