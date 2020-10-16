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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcGridGrouppanel=require("wijmo/wijmo.grid.grouppanel"),WjGroupPanelBehavior=function(e){__extends(WjGroupPanelBehavior,e);function WjGroupPanelBehavior(){return null!==e&&e.apply(this,arguments)||this}WjGroupPanelBehavior.tag="wj-group-panel";WjGroupPanelBehavior.props=["isDisabled","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","grid"];WjGroupPanelBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjGroupPanelBehavior.classCtor=function(){return wjcGridGrouppanel.GroupPanel};return WjGroupPanelBehavior}(wijmo_vue2_base_1.WjComponentBehavior);exports.WjGroupPanel=WjGroupPanelBehavior.register();function registerV3WjGroupPanel(e){e.component(WjGroupPanelBehavior.tag,exports.WjGroupPanel)}function registerGridGrouppanel(e){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjGroupPanel(e)}exports.registerGridGrouppanel=registerGridGrouppanel;