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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcNav=require("wijmo/wijmo.nav"),_wj_ns_exists_21=!0,WjcTreeView=function(e){__extends(WjcTreeView,e);function WjcTreeView(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcTreeView,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcTreeView.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcTreeView.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)};WjcTreeView.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcTreeView.prototype.addEventListener=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcTreeView}(wjcNav.TreeView);exports.WjcTreeView=WjcTreeView;_wj_ns_exists_21&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-tree-view",WjcTreeView);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcNav.TabPanel);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcNav.Accordion);