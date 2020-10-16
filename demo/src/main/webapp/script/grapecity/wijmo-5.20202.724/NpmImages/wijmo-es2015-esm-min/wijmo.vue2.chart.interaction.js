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

import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcChartInteraction from"wijmo/wijmo.chart.interaction";class WjFlexChartRangeSelectorBehavior extends WjComponentBehavior{}WjFlexChartRangeSelectorBehavior.tag="wj-flex-chart-range-selector";WjFlexChartRangeSelectorBehavior.parentInCtor=!0;WjFlexChartRangeSelectorBehavior.props=["isVisible","min","max","orientation","seamless","minScale","maxScale"];WjFlexChartRangeSelectorBehavior.events=["initialized","rangeChanged"];WjFlexChartRangeSelectorBehavior.classCtor=function(){return wjcChartInteraction.RangeSelector};export var WjFlexChartRangeSelector=WjFlexChartRangeSelectorBehavior.register();function registerV3WjFlexChartRangeSelector(e){e.component(WjFlexChartRangeSelectorBehavior.tag,WjFlexChartRangeSelector)}class WjFlexChartGesturesBehavior extends WjComponentBehavior{}WjFlexChartGesturesBehavior.tag="wj-flex-chart-gestures";WjFlexChartGesturesBehavior.parentInCtor=!0;WjFlexChartGesturesBehavior.props=["mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"];WjFlexChartGesturesBehavior.events=["initialized"];WjFlexChartGesturesBehavior.classCtor=function(){return wjcChartInteraction.ChartGestures};export var WjFlexChartGestures=WjFlexChartGesturesBehavior.register();function registerV3WjFlexChartGestures(e){e.component(WjFlexChartGesturesBehavior.tag,WjFlexChartGestures)}export function registerChartInteraction(e){if(VueApi.isV3Plus){registerV3WjFlexChartRangeSelector(e);registerV3WjFlexChartGestures(e)}}