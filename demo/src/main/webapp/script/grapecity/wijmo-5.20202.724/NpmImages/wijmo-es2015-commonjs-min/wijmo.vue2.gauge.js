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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcGauge=require("wijmo/wijmo.gauge");class WjLinearGaugeBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjLinearGaugeBehavior.tag="wj-linear-gauge";WjLinearGaugeBehavior.props=["isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction"];WjLinearGaugeBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjLinearGaugeBehavior.changeEvents={valueChanged:["value"]};WjLinearGaugeBehavior.classCtor=function(){return wjcGauge.LinearGauge};WjLinearGaugeBehavior.modelProp="value";exports.WjLinearGauge=WjLinearGaugeBehavior.register();function registerV3WjLinearGauge(e){e.component(WjLinearGaugeBehavior.tag,exports.WjLinearGauge)}class WjBulletGraphBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjBulletGraphBehavior.tag="wj-bullet-graph";WjBulletGraphBehavior.props=["isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction","target","good","bad"];WjBulletGraphBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjBulletGraphBehavior.changeEvents={valueChanged:["value"]};WjBulletGraphBehavior.classCtor=function(){return wjcGauge.BulletGraph};WjBulletGraphBehavior.modelProp="value";exports.WjBulletGraph=WjBulletGraphBehavior.register();function registerV3WjBulletGraph(e){e.component(WjBulletGraphBehavior.tag,exports.WjBulletGraph)}class WjRadialGaugeBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjRadialGaugeBehavior.tag="wj-radial-gauge";WjRadialGaugeBehavior.props=["isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","autoScale","startAngle","sweepAngle","needleShape","needleLength","needleElement"];WjRadialGaugeBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjRadialGaugeBehavior.changeEvents={valueChanged:["value"]};WjRadialGaugeBehavior.classCtor=function(){return wjcGauge.RadialGauge};WjRadialGaugeBehavior.modelProp="value";exports.WjRadialGauge=WjRadialGaugeBehavior.register();function registerV3WjRadialGauge(e){e.component(WjRadialGaugeBehavior.tag,exports.WjRadialGauge)}class WjRangeBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjRangeBehavior.tag="wj-range";WjRangeBehavior.parentProp="ranges";WjRangeBehavior.props=["wjProperty","color","min","max","name","thickness"];WjRangeBehavior.events=["initialized"];WjRangeBehavior.classCtor=function(){return wjcGauge.Range};exports.WjRange=WjRangeBehavior.register();function registerV3WjRange(e){e.component(WjRangeBehavior.tag,exports.WjRange)}function registerGauge(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjLinearGauge(e);registerV3WjBulletGraph(e);registerV3WjRadialGauge(e);registerV3WjRange(e)}}exports.registerGauge=registerGauge;