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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcChartHierarchical=require("wijmo/wijmo.chart.hierarchical");class WjSunburstBehavior extends wijmo_vue2_base_1.WjComponentBehavior{_updateControl(e,t){switch(e){case"tooltipContent":this.control.tooltip.content=t;break;case"labelContent":this.control.dataLabel.content=t;break;default:super._updateControl(e,t)}}}WjSunburstBehavior.tag="wj-sunburst";WjSunburstBehavior.props=["isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","childItemsPath"];WjSunburstBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","rendering","rendered","selectionChanged","itemsSourceChanging","itemsSourceChanged"];WjSunburstBehavior.classCtor=function(){return wjcChartHierarchical.Sunburst};exports.WjSunburst=WjSunburstBehavior.register();function registerV3WjSunburst(e){e.component(WjSunburstBehavior.tag,exports.WjSunburst)}class WjTreeMapBehavior extends wijmo_vue2_base_1.WjComponentBehavior{_updateControl(e,t){switch(e){case"tooltipContent":this.control.tooltip.content=t;break;case"labelContent":this.control.dataLabel.content=t;break;default:super._updateControl(e,t)}}}WjTreeMapBehavior.tag="wj-tree-map";WjTreeMapBehavior.props=["isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","maxDepth","type","labelContent","childItemsPath"];WjTreeMapBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","rendering","rendered","selectionChanged","itemsSourceChanging","itemsSourceChanged"];WjTreeMapBehavior.classCtor=function(){return wjcChartHierarchical.TreeMap};exports.WjTreeMap=WjTreeMapBehavior.register();function registerV3WjTreeMap(e){e.component(WjTreeMapBehavior.tag,exports.WjTreeMap)}function registerChartHierarchical(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjSunburst(e);registerV3WjTreeMap(e)}}exports.registerChartHierarchical=registerChartHierarchical;