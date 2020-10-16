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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcChartAnimation=require("wijmo/wijmo.chart.animation");class WjFlexChartAnimationBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnimationBehavior.tag="wj-flex-chart-animation";WjFlexChartAnimationBehavior.parentInCtor=!0;WjFlexChartAnimationBehavior.props=["animationMode","easing","duration","axisAnimation"];WjFlexChartAnimationBehavior.events=["initialized"];WjFlexChartAnimationBehavior.classCtor=function(){return wjcChartAnimation.ChartAnimation};exports.WjFlexChartAnimation=WjFlexChartAnimationBehavior.register();function registerV3WjFlexChartAnimation(i){i.component(WjFlexChartAnimationBehavior.tag,exports.WjFlexChartAnimation)}function registerChartAnimation(i){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjFlexChartAnimation(i)}exports.registerChartAnimation=registerChartAnimation;