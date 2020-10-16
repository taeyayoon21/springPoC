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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcChartRadar from"wijmo/wijmo.chart.radar";var FlexRadar=function(t){__extends(FlexRadar,t);function FlexRadar(e){return t.call(this,e,wjcChartRadar.FlexRadar,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection","renderEngine"]})||this}FlexRadar.prototype.componentDidMount=function(){var e=t.prototype.componentDidMount.call(this);this._setExtra(this.props);return e};FlexRadar.prototype.componentDidUpdate=function(e){t.prototype.componentDidUpdate.call(this,e);this._setExtra(this.props)};FlexRadar.prototype._setExtra=function(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)};return FlexRadar}(ComponentBase);export{FlexRadar};var FlexRadarAxis=function(t){__extends(FlexRadarAxis,t);function FlexRadarAxis(e){var r=t.call(this,e,wjcChartRadar.FlexRadarAxis,{objectProps:["plotArea","itemsSource"]})||this;r._parentProp="axes";return r}return FlexRadarAxis}(ComponentBase);export{FlexRadarAxis};var FlexRadarSeries=function(t){__extends(FlexRadarSeries,t);function FlexRadarSeries(e){var r=t.call(this,e,wjcChartRadar.FlexRadarSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","tooltipContent"]})||this;r._parentProp="series";r._siblingId="series";return r}return FlexRadarSeries}(ComponentBase);export{FlexRadarSeries};