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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcChartRadar=require("wijmo/wijmo.chart.radar"),FlexRadar=function(e){__extends(FlexRadar,e);function FlexRadar(t){return e.call(this,t,wjcChartRadar.FlexRadar,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection","renderEngine"]})||this}FlexRadar.prototype.componentDidMount=function(){var t=e.prototype.componentDidMount.call(this);this._setExtra(this.props);return t};FlexRadar.prototype.componentDidUpdate=function(t){e.prototype.componentDidUpdate.call(this,t);this._setExtra(this.props)};FlexRadar.prototype._setExtra=function(e){"tooltipContent"in e&&(this.control.tooltip.content=e.tooltipContent);"labelContent"in e&&(this.control.dataLabel.content=e.labelContent)};return FlexRadar}(wijmo_react_base_1.ComponentBase);exports.FlexRadar=FlexRadar;var FlexRadarAxis=function(e){__extends(FlexRadarAxis,e);function FlexRadarAxis(t){var r=e.call(this,t,wjcChartRadar.FlexRadarAxis,{objectProps:["plotArea","itemsSource"]})||this;r._parentProp="axes";return r}return FlexRadarAxis}(wijmo_react_base_1.ComponentBase);exports.FlexRadarAxis=FlexRadarAxis;var FlexRadarSeries=function(e){__extends(FlexRadarSeries,e);function FlexRadarSeries(t){var r=e.call(this,t,wjcChartRadar.FlexRadarSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","tooltipContent"]})||this;r._parentProp="series";r._siblingId="series";return r}return FlexRadarSeries}(wijmo_react_base_1.ComponentBase);exports.FlexRadarSeries=FlexRadarSeries;