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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{WjDirective,_registerNgModule,softRefGridFilter}from"wijmo/wijmo.angular.base";import*as mNg from"angular";import*as wjcGridFilter from"wijmo/wijmo.grid.filter";var wjNg=mNg,wijmoGridFilterName="wj.grid.filter";export var ngModuleName=wijmoGridFilterName;var wijmoGridFilter=_registerNgModule(wijmoGridFilterName);softRefGridFilter()&&wijmoGridFilter.directive("wjFlexGridFilter",[function(){return new WjFlexGridFilter}]);var WjFlexGridFilter=function(r){__extends(WjFlexGridFilter,r);function WjFlexGridFilter(){var e=r.call(this)||this;e.require="^wjFlexGrid";e.template="<div />";return e}Object.defineProperty(WjFlexGridFilter.prototype,"_controlConstructor",{get:function(){return wjcGridFilter.FlexGridFilter},enumerable:!0,configurable:!0});return WjFlexGridFilter}(WjDirective);export{WjFlexGridFilter};