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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{WjComponentBehavior}from"wijmo/wijmo.webcomponents.base";import*as wjcChartAnimation from"wijmo/wijmo.chart.animation";var _wj_ns_exists_2=!0,WjcFlexChartAnimation=function(t){__extends(WjcFlexChartAnimation,t);function WjcFlexChartAnimation(){var n=t.call(this)||this;n._wjBehaviour=WjComponentBehavior._attach(n);return n}Object.defineProperty(WjcFlexChartAnimation,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcFlexChartAnimation.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcFlexChartAnimation.prototype.attributeChangedCallback=function(t,n,e){this._wjBehaviour.lhAttributeChanged(t,n,e)};WjcFlexChartAnimation.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcFlexChartAnimation.wrappedClass=function(){return wjcChartAnimation.ChartAnimation};WjcFlexChartAnimation.parentInCtor=!0;return WjcFlexChartAnimation}(HTMLElement);export{WjcFlexChartAnimation};_wj_ns_exists_2&&WjComponentBehavior.register("wjc-flex-chart-animation",WjcFlexChartAnimation);