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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcGridDetail=require("wijmo/wijmo.grid.detail");class WjFlexGridDetailBehavior extends wijmo_vue2_base_1.WjComponentBehavior{constructor(){super(...arguments);this._openedComponents=[]}static render(e){return wijmo_vue2_base_1.VueApi.isV3Plus?wijmo_vue2_base_1.VueApi.h("div"):e("div")}_createControl(){let e=super._createControl();e.createDetailCell=e=>{if(wijmo_vue2_base_1.VueApi.isV3Plus){const i=wijmo_vue2_base_1.VueApi.h,t=this.component.$slots.default,r={row:e,item:e.dataItem,provider:this.control},o=i({parent:this.component,render:function(){return i("div",{},t&&t(r))}});let l=document.createElement("div");wijmo_vue2_base_1.VueApi.render(o,l);this._openedComponents.push({$destroy:()=>{wijmo_vue2_base_1.VueApi.render(null,l)}});return o.el}{let i=new(wijmo_vue2_base_1.VueApi.extend({data:function(){return{childVN:null}},render:function(e){return e("div",[this.childVN])}}))({parent:this.component});i.childVN=this.component.$scopedSlots.default({row:e,item:e.dataItem,provider:this.control});i.$mount();this._openedComponents.push(i);return i.$el}};e.disposeDetailCell=e=>{let i=e.detail,t=this._openedComponents;if(i)for(let e=0;e<t.length;e++)if(i===t[e].$el){t[e].$destroy();t.splice(e,1);break}};return e}}WjFlexGridDetailBehavior.tag="wj-flex-grid-detail";WjFlexGridDetailBehavior.parentInCtor=!0;WjFlexGridDetailBehavior.props=["maxHeight","keyActionEnter","detailVisibilityMode","rowHasDetail","isAnimated"];WjFlexGridDetailBehavior.events=["initialized"];WjFlexGridDetailBehavior.classCtor=function(){return wjcGridDetail.FlexGridDetailProvider};exports.WjFlexGridDetail=WjFlexGridDetailBehavior.register();function registerV3WjFlexGridDetail(e){e.component(WjFlexGridDetailBehavior.tag,exports.WjFlexGridDetail)}function registerGridDetail(e){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjFlexGridDetail(e)}exports.registerGridDetail=registerGridDetail;