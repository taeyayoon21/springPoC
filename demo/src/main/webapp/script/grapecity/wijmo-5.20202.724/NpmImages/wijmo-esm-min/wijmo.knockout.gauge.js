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

var __extends=this&&this.__extends||function(){var extendStatics=function(n,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)};return function(n,e){extendStatics(n,e);function __(){this.constructor=n}n.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{WjBinding}from"wijmo/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcGauge from"wijmo/wijmo.gauge";var wjKo=mKo,WjGaugeBinding=function(n){__extends(WjGaugeBinding,n);function WjGaugeBinding(){return null!==n&&n.apply(this,arguments)||this}WjGaugeBinding.prototype._getControlConstructor=function(){return wjcGauge.Gauge};return WjGaugeBinding}(WjBinding);export{WjGaugeBinding};var wjLinearGauge=function(n){__extends(wjLinearGauge,n);function wjLinearGauge(){return null!==n&&n.apply(this,arguments)||this}wjLinearGauge.prototype._getControlConstructor=function(){return wjcGauge.LinearGauge};return wjLinearGauge}(WjGaugeBinding);export{wjLinearGauge};var wjBulletGraph=function(n){__extends(wjBulletGraph,n);function wjBulletGraph(){return null!==n&&n.apply(this,arguments)||this}wjBulletGraph.prototype._getControlConstructor=function(){return wjcGauge.BulletGraph};return wjBulletGraph}(wjLinearGauge);export{wjBulletGraph};var wjRadialGauge=function(n){__extends(wjRadialGauge,n);function wjRadialGauge(){return null!==n&&n.apply(this,arguments)||this}wjRadialGauge.prototype._getControlConstructor=function(){return wjcGauge.RadialGauge};return wjRadialGauge}(WjGaugeBinding);export{wjRadialGauge};var wjRange=function(n){__extends(wjRange,n);function wjRange(){return null!==n&&n.apply(this,arguments)||this}wjRange.prototype._getControlConstructor=function(){return wjcGauge.Range};wjRange.prototype._createControl=function(n){return new wjcGauge.Range};return wjRange}(WjBinding);export{wjRange};wjKo.bindingHandlers.wjLinearGauge=new wjLinearGauge;wjKo.bindingHandlers.wjBulletGraph=new wjBulletGraph;wjKo.bindingHandlers.wjRadialGauge=new wjRadialGauge;wjKo.bindingHandlers.wjRange=new wjRange;