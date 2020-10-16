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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(t,r)};return function(t,r){extendStatics(t,r);function __(){this.constructor=t}t.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();import{WjSeriesBase}from"wijmo/wijmo.knockout.chart";import*as mKo from"knockout";import*as wjcChartFinAn from"wijmo/wijmo.chart.finance.analytics";var wjKo=mKo,wjFlexChartFibonacci=function(t){__extends(wjFlexChartFibonacci,t);function wjFlexChartFibonacci(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartFibonacci.prototype._getControlConstructor=function(){return wjcChartFinAn.Fibonacci};wjFlexChartFibonacci.prototype._createControl=function(t){return new wjcChartFinAn.Fibonacci};return wjFlexChartFibonacci}(WjSeriesBase);export{wjFlexChartFibonacci};var wjFlexChartFibonacciArcs=function(t){__extends(wjFlexChartFibonacciArcs,t);function wjFlexChartFibonacciArcs(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartFibonacciArcs.prototype._getControlConstructor=function(){return wjcChartFinAn.FibonacciArcs};wjFlexChartFibonacciArcs.prototype._createControl=function(t){return new wjcChartFinAn.FibonacciArcs};return wjFlexChartFibonacciArcs}(WjSeriesBase);export{wjFlexChartFibonacciArcs};var wjFlexChartFibonacciFans=function(t){__extends(wjFlexChartFibonacciFans,t);function wjFlexChartFibonacciFans(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartFibonacciFans.prototype._getControlConstructor=function(){return wjcChartFinAn.FibonacciFans};wjFlexChartFibonacciFans.prototype._createControl=function(t){return new wjcChartFinAn.FibonacciFans};return wjFlexChartFibonacciFans}(WjSeriesBase);export{wjFlexChartFibonacciFans};var wjFlexChartFibonacciTimeZones=function(t){__extends(wjFlexChartFibonacciTimeZones,t);function wjFlexChartFibonacciTimeZones(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartFibonacciTimeZones.prototype._getControlConstructor=function(){return wjcChartFinAn.FibonacciTimeZones};wjFlexChartFibonacciTimeZones.prototype._createControl=function(t){return new wjcChartFinAn.FibonacciTimeZones};return wjFlexChartFibonacciTimeZones}(WjSeriesBase);export{wjFlexChartFibonacciTimeZones};var WjBaseOverlayIndicator=function(t){__extends(WjBaseOverlayIndicator,t);function WjBaseOverlayIndicator(){return null!==t&&t.apply(this,arguments)||this}WjBaseOverlayIndicator.prototype._getControlConstructor=function(){return wjcChartFinAn.OverlayIndicatorBase};return WjBaseOverlayIndicator}(WjSeriesBase);export{WjBaseOverlayIndicator};var WjBaseSingleOverlayIndicator=function(t){__extends(WjBaseSingleOverlayIndicator,t);function WjBaseSingleOverlayIndicator(){return null!==t&&t.apply(this,arguments)||this}WjBaseSingleOverlayIndicator.prototype._getControlConstructor=function(){return wjcChartFinAn.SingleOverlayIndicatorBase};return WjBaseSingleOverlayIndicator}(WjBaseOverlayIndicator);export{WjBaseSingleOverlayIndicator};var wjFlexChartAtr=function(t){__extends(wjFlexChartAtr,t);function wjFlexChartAtr(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAtr.prototype._getControlConstructor=function(){return wjcChartFinAn.ATR};return wjFlexChartAtr}(WjBaseSingleOverlayIndicator);export{wjFlexChartAtr};var wjFlexChartCci=function(t){__extends(wjFlexChartCci,t);function wjFlexChartCci(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartCci.prototype._getControlConstructor=function(){return wjcChartFinAn.CCI};return wjFlexChartCci}(WjBaseSingleOverlayIndicator);export{wjFlexChartCci};var wjFlexChartRsi=function(t){__extends(wjFlexChartRsi,t);function wjFlexChartRsi(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartRsi.prototype._getControlConstructor=function(){return wjcChartFinAn.RSI};return wjFlexChartRsi}(WjBaseSingleOverlayIndicator);export{wjFlexChartRsi};var wjFlexChartWilliamsR=function(t){__extends(wjFlexChartWilliamsR,t);function wjFlexChartWilliamsR(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartWilliamsR.prototype._getControlConstructor=function(){return wjcChartFinAn.WilliamsR};return wjFlexChartWilliamsR}(WjBaseSingleOverlayIndicator);export{wjFlexChartWilliamsR};var WjFlexChartMacdBase=function(t){__extends(WjFlexChartMacdBase,t);function WjFlexChartMacdBase(){return null!==t&&t.apply(this,arguments)||this}WjFlexChartMacdBase.prototype._getControlConstructor=function(){return wjcChartFinAn.MacdBase};return WjFlexChartMacdBase}(WjBaseOverlayIndicator);export{WjFlexChartMacdBase};var wjFlexChartMacd=function(t){__extends(wjFlexChartMacd,t);function wjFlexChartMacd(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartMacd.prototype._getControlConstructor=function(){return wjcChartFinAn.Macd};return wjFlexChartMacd}(WjFlexChartMacdBase);export{wjFlexChartMacd};var wjFlexChartMacdHistogram=function(t){__extends(wjFlexChartMacdHistogram,t);function wjFlexChartMacdHistogram(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartMacdHistogram.prototype._getControlConstructor=function(){return wjcChartFinAn.MacdHistogram};return wjFlexChartMacdHistogram}(WjFlexChartMacdBase);export{wjFlexChartMacdHistogram};var wjFlexChartStochastic=function(t){__extends(wjFlexChartStochastic,t);function wjFlexChartStochastic(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartStochastic.prototype._getControlConstructor=function(){return wjcChartFinAn.Stochastic};return wjFlexChartStochastic}(WjBaseOverlayIndicator);export{wjFlexChartStochastic};var wjFlexChartBollingerBands=function(t){__extends(wjFlexChartBollingerBands,t);function wjFlexChartBollingerBands(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartBollingerBands.prototype._getControlConstructor=function(){return wjcChartFinAn.BollingerBands};return wjFlexChartBollingerBands}(WjBaseOverlayIndicator);export{wjFlexChartBollingerBands};var wjFlexChartEnvelopes=function(t){__extends(wjFlexChartEnvelopes,t);function wjFlexChartEnvelopes(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartEnvelopes.prototype._getControlConstructor=function(){return wjcChartFinAn.Envelopes};return wjFlexChartEnvelopes}(WjBaseOverlayIndicator);export{wjFlexChartEnvelopes};wjKo.bindingHandlers.wjFlexChartFibonacci=new wjFlexChartFibonacci;wjKo.bindingHandlers.wjFlexChartFibonacciArcs=new wjFlexChartFibonacciArcs;wjKo.bindingHandlers.wjFlexChartFibonacciFans=new wjFlexChartFibonacciFans;wjKo.bindingHandlers.wjFlexChartFibonacciTimeZones=new wjFlexChartFibonacciTimeZones;wjKo.bindingHandlers.wjFlexChartAtr=new wjFlexChartAtr;wjKo.bindingHandlers.wjFlexChartCci=new wjFlexChartCci;wjKo.bindingHandlers.wjFlexChartRsi=new wjFlexChartRsi;wjKo.bindingHandlers.wjFlexChartWilliamsR=new wjFlexChartWilliamsR;wjKo.bindingHandlers.wjFlexChartMacd=new wjFlexChartMacd;wjKo.bindingHandlers.wjFlexChartMacdHistogram=new wjFlexChartMacdHistogram;wjKo.bindingHandlers.wjFlexChartStochastic=new wjFlexChartStochastic;wjKo.bindingHandlers.wjFlexChartBollingerBands=new wjFlexChartBollingerBands;wjKo.bindingHandlers.wjFlexChartEnvelopes=new wjFlexChartEnvelopes;