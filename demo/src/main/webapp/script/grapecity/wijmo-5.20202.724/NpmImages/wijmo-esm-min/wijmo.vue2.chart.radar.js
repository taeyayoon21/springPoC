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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var a in r)r.hasOwnProperty(a)&&(e[a]=r[a])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcChartRadar from"wijmo/wijmo.chart.radar";var WjFlexRadarBehavior=function(e){__extends(WjFlexRadarBehavior,e);function WjFlexRadarBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexRadarBehavior.prototype._updateControl=function(r,a){switch(r){case"tooltipContent":this.control.tooltip.content=a;break;case"labelContent":this.control.dataLabel.content=a;break;default:e.prototype._updateControl.call(this,r,a)}};WjFlexRadarBehavior.tag="wj-flex-radar";WjFlexRadarBehavior.props=["renderEngine","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","startAngle","totalAngle","reversed","stacking"];WjFlexRadarBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","rendering","rendered","itemsSourceChanging","itemsSourceChanged","seriesVisibilityChanged"];WjFlexRadarBehavior.changeEvents={selectionChanged:["selection"]};WjFlexRadarBehavior.classCtor=function(){return wjcChartRadar.FlexRadar};return WjFlexRadarBehavior}(WjComponentBehavior);export var WjFlexRadar=WjFlexRadarBehavior.register();function registerV3WjFlexRadar(e){e.component(WjFlexRadarBehavior.tag,WjFlexRadar)}var WjFlexRadarAxisBehavior=function(e){__extends(WjFlexRadarAxisBehavior,e);function WjFlexRadarAxisBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexRadarAxisBehavior.tag="wj-flex-radar-axis";WjFlexRadarAxisBehavior.parentProp="axes";WjFlexRadarAxisBehavior.props=["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding"];WjFlexRadarAxisBehavior.events=["initialized","rangeChanged"];WjFlexRadarAxisBehavior.classCtor=function(){return wjcChartRadar.FlexRadarAxis};return WjFlexRadarAxisBehavior}(WjComponentBehavior);export var WjFlexRadarAxis=WjFlexRadarAxisBehavior.register();function registerV3WjFlexRadarAxis(e){e.component(WjFlexRadarAxisBehavior.tag,WjFlexRadarAxis)}var WjFlexRadarSeriesBehavior=function(e){__extends(WjFlexRadarSeriesBehavior,e);function WjFlexRadarSeriesBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexRadarSeriesBehavior.tag="wj-flex-radar-series";WjFlexRadarSeriesBehavior.parentProp="series";WjFlexRadarSeriesBehavior.siblingId="series";WjFlexRadarSeriesBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"];WjFlexRadarSeriesBehavior.events=["initialized","rendering","rendered"];WjFlexRadarSeriesBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexRadarSeriesBehavior.classCtor=function(){return wjcChartRadar.FlexRadarSeries};return WjFlexRadarSeriesBehavior}(WjComponentBehavior);export var WjFlexRadarSeries=WjFlexRadarSeriesBehavior.register();function registerV3WjFlexRadarSeries(e){e.component(WjFlexRadarSeriesBehavior.tag,WjFlexRadarSeries)}export function registerChartRadar(e){if(VueApi.isV3Plus){registerV3WjFlexRadar(e);registerV3WjFlexRadarAxis(e);registerV3WjFlexRadarSeries(e)}}