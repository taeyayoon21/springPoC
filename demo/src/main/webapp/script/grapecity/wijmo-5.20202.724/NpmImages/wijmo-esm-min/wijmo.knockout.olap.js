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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{WjBinding}from"wijmo/wijmo.knockout.base";import{wjFlexGrid}from"wijmo/wijmo.knockout.grid";import*as mKo from"knockout";import*as wjcOlap from"wijmo/wijmo.olap";var wjKo=mKo,wjPivotGrid=function(t){__extends(wjPivotGrid,t);function wjPivotGrid(){return null!==t&&t.apply(this,arguments)||this}wjPivotGrid.prototype._getControlConstructor=function(){return wjcOlap.PivotGrid};return wjPivotGrid}(wjFlexGrid);export{wjPivotGrid};var wjPivotChart=function(t){__extends(wjPivotChart,t);function wjPivotChart(){return null!==t&&t.apply(this,arguments)||this}wjPivotChart.prototype._getControlConstructor=function(){return wjcOlap.PivotChart};return wjPivotChart}(WjBinding);export{wjPivotChart};var wjPivotPanel=function(t){__extends(wjPivotPanel,t);function wjPivotPanel(){return null!==t&&t.apply(this,arguments)||this}wjPivotPanel.prototype._getControlConstructor=function(){return wjcOlap.PivotPanel};return wjPivotPanel}(WjBinding);export{wjPivotPanel};var wjSlicer=function(t){__extends(wjSlicer,t);function wjSlicer(){return null!==t&&t.apply(this,arguments)||this}wjSlicer.prototype._getControlConstructor=function(){return wjcOlap.Slicer};return wjSlicer}(WjBinding);export{wjSlicer};wjKo.bindingHandlers.wjPivotGrid=new wjPivotGrid;wjKo.bindingHandlers.wjPivotChart=new wjPivotChart;wjKo.bindingHandlers.wjPivotPanel=new wjPivotPanel;wjKo.bindingHandlers.wjSlicer=new wjSlicer;