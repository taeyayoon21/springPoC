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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcChartHierarchical from"wijmo/wijmo.chart.hierarchical";var Sunburst=function(t){__extends(Sunburst,t);function Sunburst(o){return t.call(this,o,wjcChartHierarchical.Sunburst,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})||this}Sunburst.prototype.componentDidMount=function(){var o=t.prototype.componentDidMount.call(this);this._setExtra(this.props);return o};Sunburst.prototype.componentDidUpdate=function(o){t.prototype.componentDidUpdate.call(this,o);this._setExtra(this.props)};Sunburst.prototype._setExtra=function(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)};return Sunburst}(ComponentBase);export{Sunburst};var TreeMap=function(t){__extends(TreeMap,t);function TreeMap(o){return t.call(this,o,wjcChartHierarchical.TreeMap,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})||this}TreeMap.prototype.componentDidMount=function(){var o=t.prototype.componentDidMount.call(this);this._setExtra(this.props);return o};TreeMap.prototype.componentDidUpdate=function(o){t.prototype.componentDidUpdate.call(this,o);this._setExtra(this.props)};TreeMap.prototype._setExtra=function(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)};return TreeMap}(ComponentBase);export{TreeMap};