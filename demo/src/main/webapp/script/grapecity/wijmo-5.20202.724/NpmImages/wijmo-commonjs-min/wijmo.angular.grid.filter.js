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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),mNg=require("angular"),wjcGridFilter=require("wijmo/wijmo.grid.filter"),wjNg=mNg,wijmoGridFilterName="wj.grid.filter";exports.ngModuleName=wijmoGridFilterName;var wijmoGridFilter=wijmo_angular_base_1._registerNgModule(wijmoGridFilterName);wijmo_angular_base_1.softRefGridFilter()&&wijmoGridFilter.directive("wjFlexGridFilter",[function(){return new WjFlexGridFilter}]);var WjFlexGridFilter=function(r){__extends(WjFlexGridFilter,r);function WjFlexGridFilter(){var e=r.call(this)||this;e.require="^wjFlexGrid";e.template="<div />";return e}Object.defineProperty(WjFlexGridFilter.prototype,"_controlConstructor",{get:function(){return wjcGridFilter.FlexGridFilter},enumerable:!0,configurable:!0});return WjFlexGridFilter}(wijmo_angular_base_1.WjDirective);exports.WjFlexGridFilter=WjFlexGridFilter;