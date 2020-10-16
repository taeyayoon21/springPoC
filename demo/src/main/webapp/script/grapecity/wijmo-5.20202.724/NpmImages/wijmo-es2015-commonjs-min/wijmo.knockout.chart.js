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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),mKo=require("knockout"),wjcChart=require("wijmo/wijmo.chart");var wjKo=mKo;class WjFlexChartBaseBinding extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChart.FlexChartBase}_initialize(){super._initialize();wijmo_knockout_base_1.MetaFactory.findProp("tooltipContent",this._metaData.props).updateControl=function(e,t,r,n,a){null!=a&&(r.tooltip.content=a);return!0}}}exports.WjFlexChartBaseBinding=WjFlexChartBaseBinding;class wjFlexChart extends WjFlexChartBaseBinding{_getControlConstructor(){return wjcChart.FlexChart}_initialize(){super._initialize();wijmo_knockout_base_1.MetaFactory.findProp("labelContent",this._metaData.props).updateControl=function(e,t,r,n,a){null!=a&&(r.dataLabel.content=a);return!0}}}exports.wjFlexChart=wjFlexChart;class wjFlexPie extends WjFlexChartBaseBinding{_getControlConstructor(){return wjcChart.FlexPie}_initialize(){super._initialize();wijmo_knockout_base_1.MetaFactory.findProp("labelContent",this._metaData.props).updateControl=function(e,t,r,n,a){null!=a&&(r.dataLabel.content=a);return!0}}}exports.wjFlexPie=wjFlexPie;class wjFlexChartAxis extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChart.Axis}}exports.wjFlexChartAxis=wjFlexChartAxis;class wjFlexChartLegend extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChart.Legend}}exports.wjFlexChartLegend=wjFlexChartLegend;class WjSeriesBase extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChart.SeriesBase}_createControl(e){return super._createControl(null)}}exports.WjSeriesBase=WjSeriesBase;class wjFlexChartSeries extends WjSeriesBase{_getControlConstructor(){return wjcChart.Series}_createWijmoContext(){return new WjFlexChartSeriesContext(this)}}exports.wjFlexChartSeries=wjFlexChartSeries;class WjFlexChartSeriesContext extends wijmo_knockout_base_1.WjContext{_initControl(){super._initControl();var e=this.parentWjContext.control;e instanceof wjcChart.FlexChart&&e.seriesVisibilityChanged.addHandler((e,t)=>{this._updateSource()})}}exports.WjFlexChartSeriesContext=WjFlexChartSeriesContext;class wjFlexChartLineMarker extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChart.LineMarker}}exports.wjFlexChartLineMarker=wjFlexChartLineMarker;class wjFlexChartPlotArea extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChart.PlotArea}}exports.wjFlexChartPlotArea=wjFlexChartPlotArea;class wjFlexChartDataPoint extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChart.DataPoint}}exports.wjFlexChartDataPoint=wjFlexChartDataPoint;wjKo.bindingHandlers.wjFlexChart=new wjFlexChart;wjKo.bindingHandlers.wjFlexPie=new wjFlexPie;wjKo.bindingHandlers.wjFlexChartAxis=new wjFlexChartAxis;wjKo.bindingHandlers.wjFlexChartLegend=new wjFlexChartLegend;wjKo.bindingHandlers.wjFlexChartSeries=new wjFlexChartSeries;wjKo.bindingHandlers.wjFlexChartLineMarker=new wjFlexChartLineMarker;wjKo.bindingHandlers.wjFlexChartPlotArea=new wjFlexChartPlotArea;wjKo.bindingHandlers.wjFlexChartDataPoint=new wjFlexChartDataPoint;