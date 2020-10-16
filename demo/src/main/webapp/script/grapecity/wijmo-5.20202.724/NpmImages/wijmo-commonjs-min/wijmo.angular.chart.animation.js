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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),mNg=require("angular"),wjcChartAnimation=require("wijmo/wijmo.chart.animation"),wjNg=mNg,wijmoChartAnimationName="wj.chart.animation";exports.ngModuleName=wijmoChartAnimationName;var wijmoChartAnimation=wijmo_angular_base_1._registerNgModule(wijmoChartAnimationName);wijmo_angular_base_1.softRefChartAnimation()&&wijmoChartAnimation.directive("wjFlexChartAnimation",[function(){return new WjFlexChartAnimation}]);var WjFlexChartAnimation=function(t){__extends(WjFlexChartAnimation,t);function WjFlexChartAnimation(){var n=t.call(this)||this;n.require=["?^wjFlexChart","?^wjFlexPie","?^wjSunburst","?^wjFinancialChart","?^wjFlexRadar"];return n}Object.defineProperty(WjFlexChartAnimation.prototype,"_controlConstructor",{get:function(){return wjcChartAnimation.ChartAnimation},enumerable:!0,configurable:!0});return WjFlexChartAnimation}(wijmo_angular_base_1.WjDirective);exports.WjFlexChartAnimation=WjFlexChartAnimation;