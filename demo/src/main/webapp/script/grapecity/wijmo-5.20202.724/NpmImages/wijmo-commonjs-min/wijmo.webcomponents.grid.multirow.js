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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcGridMultirow=require("wijmo/wijmo.grid.multirow"),_wj_ns_exists_13=!0,WjcMultiRow=function(t){__extends(WjcMultiRow,t);function WjcMultiRow(){var e=t.call(this,document.createElement("div"))||this;e._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(e);return e}Object.defineProperty(WjcMultiRow,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcMultiRow.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcMultiRow.prototype.attributeChangedCallback=function(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)};WjcMultiRow.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcMultiRow.prototype.addEventListener=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):t.prototype.addEventListener.apply(this,e)};return WjcMultiRow}(wjcGridMultirow.MultiRow);exports.WjcMultiRow=WjcMultiRow;_wj_ns_exists_13&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-multi-row",WjcMultiRow);