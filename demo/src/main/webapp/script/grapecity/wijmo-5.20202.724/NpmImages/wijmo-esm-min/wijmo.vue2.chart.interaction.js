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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcChartInteraction from"wijmo/wijmo.chart.interaction";var WjFlexChartRangeSelectorBehavior=function(e){__extends(WjFlexChartRangeSelectorBehavior,e);function WjFlexChartRangeSelectorBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexChartRangeSelectorBehavior.tag="wj-flex-chart-range-selector";WjFlexChartRangeSelectorBehavior.parentInCtor=!0;WjFlexChartRangeSelectorBehavior.props=["isVisible","min","max","orientation","seamless","minScale","maxScale"];WjFlexChartRangeSelectorBehavior.events=["initialized","rangeChanged"];WjFlexChartRangeSelectorBehavior.classCtor=function(){return wjcChartInteraction.RangeSelector};return WjFlexChartRangeSelectorBehavior}(WjComponentBehavior);export var WjFlexChartRangeSelector=WjFlexChartRangeSelectorBehavior.register();function registerV3WjFlexChartRangeSelector(e){e.component(WjFlexChartRangeSelectorBehavior.tag,WjFlexChartRangeSelector)}var WjFlexChartGesturesBehavior=function(e){__extends(WjFlexChartGesturesBehavior,e);function WjFlexChartGesturesBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexChartGesturesBehavior.tag="wj-flex-chart-gestures";WjFlexChartGesturesBehavior.parentInCtor=!0;WjFlexChartGesturesBehavior.props=["mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"];WjFlexChartGesturesBehavior.events=["initialized"];WjFlexChartGesturesBehavior.classCtor=function(){return wjcChartInteraction.ChartGestures};return WjFlexChartGesturesBehavior}(WjComponentBehavior);export var WjFlexChartGestures=WjFlexChartGesturesBehavior.register();function registerV3WjFlexChartGestures(e){e.component(WjFlexChartGesturesBehavior.tag,WjFlexChartGestures)}export function registerChartInteraction(e){if(VueApi.isV3Plus){registerV3WjFlexChartRangeSelector(e);registerV3WjFlexChartGestures(e)}}