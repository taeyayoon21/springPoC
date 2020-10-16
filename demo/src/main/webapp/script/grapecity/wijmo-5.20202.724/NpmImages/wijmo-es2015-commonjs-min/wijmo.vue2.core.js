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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcCore=require("wijmo/wijmo"),WjIncludeDefinition={render:function(e){return wijmo_vue2_base_1.VueApi.isV3Plus?wijmo_vue2_base_1.VueApi.h("div"):e("div")},props:["src"],mounted:function(){wjcCore.httpRequest(this.src,{success:e=>{this.$el.innerHTML=e.response}})}},WjIncludeTag="wj-include";exports.WjInclude=wijmo_vue2_base_1.VueApi.isV3Plus?WjIncludeDefinition:wijmo_vue2_base_1.VueApi.component(WjIncludeTag,WjIncludeDefinition);function registerV3WjInclude(e){e.component(WjIncludeTag,exports.WjInclude)}exports.wjFormat=(e,i)=>wjcCore.Globalize.format(e,i);exports.WjFormat=wijmo_vue2_base_1.VueApi.isV3Plus?null:wijmo_vue2_base_1.VueApi.filter("wj-format",(function(e,i){return exports.wjFormat(e,i)}));function registerV3WjFormat(e){}let tooltip;const tooltipDirectiveDefinition=(e,i)=>{tooltip||(tooltip=new wjcCore.Tooltip);i.oldValue!==i.value&&tooltip.setTooltip(e,i.value)},WjTooltipTag="wjTooltip";exports.WjTooltip=wijmo_vue2_base_1.VueApi.isV3Plus?tooltipDirectiveDefinition:wijmo_vue2_base_1.VueApi.directive(WjTooltipTag,tooltipDirectiveDefinition);function registerV3WjTooltip(e){e.directive(WjTooltipTag,exports.WjTooltip)}function registerCore(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjInclude(e);registerV3WjFormat(e);registerV3WjTooltip(e)}}exports.registerCore=registerCore;