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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,a){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)a.hasOwnProperty(t)&&(e[t]=a[t])})(e,a)};return function(e,a){extendStatics(e,a);function __(){this.constructor=e}e.prototype=null===a?Object.create(a):(__.prototype=a.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcGauge=require("wijmo/wijmo.gauge"),LinearGauge=function(e){__extends(LinearGauge,e);function LinearGauge(a){return e.call(this,a,wjcGauge.LinearGauge)||this}return LinearGauge}(wijmo_react_base_1.ComponentBase);exports.LinearGauge=LinearGauge;var BulletGraph=function(e){__extends(BulletGraph,e);function BulletGraph(a){return e.call(this,a,wjcGauge.BulletGraph)||this}return BulletGraph}(wijmo_react_base_1.ComponentBase);exports.BulletGraph=BulletGraph;var RadialGauge=function(e){__extends(RadialGauge,e);function RadialGauge(a){return e.call(this,a,wjcGauge.RadialGauge,{objectProps:["needleElement"]})||this}return RadialGauge}(wijmo_react_base_1.ComponentBase);exports.RadialGauge=RadialGauge;var Range=function(e){__extends(Range,e);function Range(a){var t=e.call(this,a,wjcGauge.Range)||this;t._parentProp="ranges";return t}return Range}(wijmo_react_base_1.ComponentBase);exports.Range=Range;