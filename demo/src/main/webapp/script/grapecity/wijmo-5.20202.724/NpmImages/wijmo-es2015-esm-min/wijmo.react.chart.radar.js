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

import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcChartRadar from"wijmo/wijmo.chart.radar";export class FlexRadar extends ComponentBase{constructor(t){super(t,wjcChartRadar.FlexRadar,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection","renderEngine"]})}componentDidMount(){let t=super.componentDidMount();this._setExtra(this.props);return t}componentDidUpdate(t){super.componentDidUpdate(t);this._setExtra(this.props)}_setExtra(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)}}export class FlexRadarAxis extends ComponentBase{constructor(t){super(t,wjcChartRadar.FlexRadarAxis,{objectProps:["plotArea","itemsSource"]});this._parentProp="axes"}}export class FlexRadarSeries extends ComponentBase{constructor(t){super(t,wjcChartRadar.FlexRadarSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","tooltipContent"]});this._parentProp="series";this._siblingId="series"}}