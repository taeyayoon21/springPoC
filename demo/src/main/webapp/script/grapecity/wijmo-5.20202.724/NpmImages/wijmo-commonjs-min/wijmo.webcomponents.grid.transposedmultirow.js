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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcGridTransposedmultirow=require("wijmo/wijmo.grid.transposedmultirow"),_wj_ns_exists_16=!0,WjcTransposedMultiRow=function(e){__extends(WjcTransposedMultiRow,e);function WjcTransposedMultiRow(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcTransposedMultiRow,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcTransposedMultiRow.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcTransposedMultiRow.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)};WjcTransposedMultiRow.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcTransposedMultiRow.prototype.addEventListener=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcTransposedMultiRow}(wjcGridTransposedmultirow.TransposedMultiRow);exports.WjcTransposedMultiRow=WjcTransposedMultiRow;_wj_ns_exists_16&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-transposed-multi-row",WjcTransposedMultiRow);