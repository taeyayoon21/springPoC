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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),mNg=require("angular"),wjcGridGroup=require("wijmo/wijmo.grid.grouppanel"),wjNg=mNg,wijmoGridGroupName="wj.grid.grouppanel";exports.ngModuleName=wijmoGridGroupName;var wijmoGridGroup=wijmo_angular_base_1._registerNgModule(wijmoGridGroupName);wijmo_angular_base_1.softRefGridGrouppanel()&&wijmoGridGroup.directive("wjGroupPanel",[function(){return new WjGroupPanel}]);var WjGroupPanel=function(r){__extends(WjGroupPanel,r);function WjGroupPanel(){return null!==r&&r.apply(this,arguments)||this}Object.defineProperty(WjGroupPanel.prototype,"_controlConstructor",{get:function(){return wjcGridGroup.GroupPanel},enumerable:!0,configurable:!0});return WjGroupPanel}(wijmo_angular_base_1.WjDirective);exports.WjGroupPanel=WjGroupPanel;